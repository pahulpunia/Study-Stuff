#!/usr/bin/env node
/* Checks every problems-type unit: answers match the source expressions, excluded values,
   limits, asymptotes/holes/intercepts, and that each correct answer passes the answer checker.
   Also runs every Endless Drill generator 300 times.
   Usage (from the repo folder):  node tools/verify.js            */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const MC = require(path.join(root, "js/mathcore.js"));
const ctx = {MC, console, Math, window: {}};
ctx.Study = {problems: {}, addUnit(subj, unit){
  const b = this.problems[subj] || (this.problems[subj] = {units: [], items: []});
  unit.items = []; unit.drills = unit.drills || {};
  const kit = ctx.makeKit(subj, unit); if (unit.problems) unit.problems(kit);
  b.units.push(unit); b.items.push(...unit.items);
}, extendUnit(subj, id, ext){ ctx.extendUnit(this, subj, id, ext); }};
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, {filename: f});
run("js/kit.js");
run("subjects/registry.js");
const subjects = ctx.window.SUBJECTS.filter(s => s.type === "problems");
subjects.forEach(s => s.files.forEach(run));

const P = MC.parse, E = MC.evaluate, NV = MC.numVal;
let bad = 0; const fail = (q, m) => { bad++; console.log('✗', q.src, (q.eq && q.eq.join(' = ')) || q.math || q.target || '', '→', m); };
const f1 = (ast, v='x') => x => { try { return E(ast, {[v]: x}); } catch(e){ return NaN; } };
const cands = (() => { const s = new Set(); for (let q = 1; q <= 6; q++) for (let p = -72; p <= 72; p++) { const v = p / q; if (Math.abs(v) <= 12) s.add(+v.toFixed(12)); } return [...s]; })();
function rootsOf(fn){ const r = []; for (const c of cands){ const v = fn(c); if (isFinite(v) && Math.abs(v) < 1e-9) r.push(c); }
  // sign change scan for irrational roots
  let prev = fn(-12.0003); for (let x = -12.0003 + 0.01; x < 12; x += 0.01){ const v = fn(x); if (isFinite(v) && isFinite(prev) && v * prev < 0 && Math.abs(v) < 50 && Math.abs(prev) < 50 && !r.some(c => Math.abs(c - x) < 0.02)) r.push('irr~' + x.toFixed(3)); prev = v; }
  return r; }
function denoms(n, out = []){ if (!n || typeof n !== 'object') return out;
  if (n.k === 'div') out.push(n.b);
  if (n.k === 'pow'){ try { if (E(n.b, {}) < 0) out.push(n.a); } catch(e){} }
  ['a','b'].forEach(k => n[k] && typeof n[k] === 'object' && denoms(n[k], out)); return out; }
const sortNums = a => a.map(Number).sort((x, y) => x - y);
const sameSet = (a, b) => a.length === b.length && sortNums(a).every((v, i) => Math.abs(v - sortNums(b)[i]) < 1e-7);
function excluded(ast, v){ const set = new Set(); denoms(ast).forEach(d => rootsOf(f1(d, v)).forEach(r => set.add(r))); return [...set]; }

function verifyItem(q){
  // parse checks
  try { if (q.eq) q.eq.forEach(P); if (q.math) P(q.math); if (q.target) P(q.target); } catch(e){ fail(q, 'parse ' + e.message); return; }
  (q.steps || []).concat([q.text]).forEach(s => (s.match(/\{\{(.+?)\}\}/g) || []).forEach(m => { const inner = m.slice(2, -2); if (/^lim$|f\(x\+h\)|\(f\/g\)|f\(x\)/.test(inner)) return; try { P(inner); } catch(e){ fail(q, 'step parse: ' + inner); } }));
  const F0 = q.fields[0];
  if (q.kind === 'simp'){
    const r = MC.sameExpr(F0.a, q.math, F0.v, F0.r); if (!r.ok) fail(q, 'answer != source: ' + F0.a);
    if (q.fields[1]){
      const v = F0.v[0]; const got = excluded(P(q.math), v);
      if (got.some(x => typeof x === 'string')) fail(q, 'irrational excluded ' + got);
      else if (!sameSet(got, q.fields[1].a.map(NV))) fail(q, `excluded: computed ${sortNums(got)} vs given ${q.fields[1].a}`);
    }
  }
  if (q.kind === 'pf'){ const {d1, d2, A, B} = q.pf; const r = MC.sameExpr(`(${A})/(${d1})+(${B})/(${d2})`, q.math, ['x']); if (!r.ok) fail(q, 'pf mismatch');
    if (MC.check(q.fields[0], q.math).ok) fail(q, 'typing the original fraction back should not count'); }
  if (q.kind === 'dq'){ const fxh = q.math.replace(/x/g, '(x+h)'); const r = MC.sameExpr(F0.a, `((${fxh})-(${q.math}))/h`, ['x','h'], [0.3, 3]); if (!r.ok) fail(q, 'dq mismatch'); }
  if (q.kind === 'lim'){
    const v = q.lim.v, fn = f1(P(q.math), v), ans = F0.a;
    let L, R_;
    if (q.lim.to === 'inf' || q.lim.to === '-inf'){ const s = q.lim.to === 'inf' ? 1 : -1; L = R_ = [fn(s*1e5), fn(s*1e7)]; }
    else { const a = NV(q.lim.to); L = [fn(a - 1e-5), fn(a - 1e-7)]; R_ = [fn(a + 1e-5), fn(a + 1e-7)]; }
    const conv = arr => Math.abs(arr[1] - arr[0]) < 1e-3 * Math.max(1, Math.abs(arr[1])) ? arr[1] : (Math.abs(arr[1]) > Math.abs(arr[0]) * 5 && Math.abs(arr[1]) > 1e3 ? Math.sign(arr[1]) * Infinity : NaN);
    const l = conv(L), r = conv(R_);
    let res = (l === r || Math.abs(l - r) < 1e-3) ? l : 'DNE';
    const want = ans === 'DNE' ? 'DNE' : ans === 'inf' ? Infinity : ans === '-inf' ? -Infinity : NV(ans);
    const ok = want === 'DNE' ? res === 'DNE' : (typeof res === 'number' && (res === want || Math.abs(res - want) < 2e-3));
    if (!ok) fail(q, `limit: numeric ${res} (L ${L} R ${R_}) vs ${ans}`);
  }
  if (q.kind === 'asy' || q.kind === 'write'){
    const ast = P(q.math || q.target), fn = f1(ast), F = q.F;
    const holesX = F.holes.map(h => NV(h[0]));
    const ex = excluded(ast, 'x');
    if (!sameSet(ex, F.va.map(NV).concat(holesX))) fail(q, `VA+holes computed ${sortNums(ex)} vs ${F.va} + ${holesX}`);
    F.va.forEach(v => { const a = NV(v); if (!(Math.abs(fn(a + 1e-6)) > 1e4)) fail(q, 'VA not blowing up at ' + v); });
    F.holes.forEach(([hx, hy]) => { const a = NV(hx); if (isFinite(fn(a))) fail(q, 'hole defined ' + hx); if (Math.abs(fn(a + 1e-7) - NV(hy)) > 1e-4) fail(q, `hole y ${fn(a+1e-7)} vs ${hy}`); });
    if (F.ha !== 'none'){ const h = NV(F.ha); if (Math.abs(fn(1e7) - h) > 1e-4 || Math.abs(fn(-1e7) - h) > 1e-4) fail(q, `HA ${fn(1e7)} vs ${F.ha}`); }
    else if (!F.line && Math.abs(fn(1e6) - fn(1e7)) < 1e-3) fail(q, 'HA claimed none but converges to ' + fn(1e7));
    if (F.sa !== 'none'){ const sa = f1(P(F.sa)); if (Math.abs(fn(1e6) - sa(1e6)) > 1e-3) fail(q, `SA off: ${fn(1e6) - sa(1e6)}`); }
    // x-intercepts: zeros of fn where defined
    const zs = cands.filter(c => { const v = fn(c); return isFinite(v) && Math.abs(v) < 1e-9; });
    if (!sameSet(zs, F.xint.map(NV))) fail(q, `xint computed ${zs} vs ${F.xint}`);
    if (F.yint === 'none'){ if (isFinite(fn(0))) fail(q, 'yint should exist ' + fn(0)); }
    else if (Math.abs(fn(0) - NV(F.yint)) > 1e-9) fail(q, `yint ${fn(0)} vs ${F.yint}`);
    if (q.kind === 'write'){ const r = MC.check(q.fields[0], q.target); if (!r.ok) fail(q, 'target fails own check'); }
  }
  // calculus: the answer key is checked numerically against the original function
  if (q.chk) calcCheck(q);
  // self-check: correct answer passes the checker
  q.fields.forEach(f => {
    let a = f.t === 'set' ? (f.a.length ? f.a.join(', ') : 'none') : f.t === 'pts' ? (f.a.length ? f.a.map(p => `(${p[0]}, ${p[1]})`).join(', ') : 'none')
      : f.t === 'text' ? f.a[0] : f.t === 'formula' ? [].concat(f.a)[0] : f.t === 'charge' ? `${Math.abs(f.a)}${f.a < 0 ? '-' : '+'}` : String(f.a);
    if (f.t === 'choice'){
      if (!Array.isArray(f.opts) || f.opts.length < 2) fail(q, 'choice needs 2+ options');
      else if (f.opts.filter(o => o === f.a).length !== 1) fail(q, `choice answer "${f.a}" is not exactly one of the options`);
      if (new Set(f.opts).size !== f.opts.length) fail(q, 'duplicate choice options');
      const wrong = f.opts.find(o => o !== f.a); if (wrong && MC.check(f, wrong).ok) fail(q, 'a wrong option passes the checker');
    }
    if (f.t === 'formula') checkFormula(q, [].concat(f.a)[0]);
    if (f.t === 'charge' && !Number.isInteger(f.a)) fail(q, 'charge must be an integer');
    if (a === 'inf') a = '∞'; if (a === '-inf') a = '-∞';
    if (f.t === 'anti'){
      a += ' + C';
      if (MC.check(f, String(f.a)).ok) fail(q, 'an antiderivative without + C should not pass');
      try { const d = MC.check(f, '(' + f.a + ')*2 + C'); if (d.ok) fail(q, 'twice the antiderivative should not pass'); } catch(e){}
    }
    const r = MC.check(f, a); if (!r.ok) fail(q, `answer "${a}" fails checker for field ${f.l}: ${r.why || ''}`);
  });
}

/* chemistry: an ionic formula's charges must cancel and be reduced */
const ION_Q = {Li:1, Na:1, K:1, Rb:1, Cs:1, Mg:2, Ca:2, Sr:2, Ba:2, Al:3, F:-1, Cl:-1, Br:-1, I:-1, O:-2, S:-2, N:-3, P:-3};
function checkFormula(q, f){
  const parts = [...String(f).matchAll(/([A-Z][a-z]?)(\d*)/g)].map(m => [m[1], m[2] ? +m[2] : 1]);
  if (parts.map(p => p[0] + (p[1] > 1 ? p[1] : '')).join('') !== f) { fail(q, 'formula has unexpected characters: ' + f); return; }
  if (parts.length !== 2 || !parts.every(p => p[0] in ION_Q)) return;   // only binary ionic compounds are checked
  const [[c, nc], [a, na]] = parts;
  if (ION_Q[c] <= 0 || ION_Q[a] >= 0) { fail(q, 'metal should come first: ' + f); return; }
  if (ION_Q[c] * nc + ION_Q[a] * na !== 0) fail(q, `charges don't cancel in ${f}`);
  const g = (x, y) => y ? g(y, x % y) : x; if (g(nc, na) !== 1) fail(q, `${f} isn't reduced`);
}
/* notes: every {{math}} snippet must parse */
function verifyNotes(unit){
  const texts = [];
  Object.entries(unit.notes || {}).forEach(([sid, blocks]) => blocks.forEach(b => {
    if (typeof b === 'string') return texts.push([sid, b]);
    ['h','p','tip','warn'].forEach(k => b[k] && texts.push([sid, b[k]]));
    (b.steps || []).forEach(t => texts.push([sid, t]));
    if (b.ex) [b.ex.q].concat(b.ex.a || []).forEach(t => texts.push([sid, t]));
    if (b.table){ b.table.head.forEach(t => texts.push([sid, t])); b.table.rows.forEach(r => r.forEach(t => texts.push([sid, t])));
      if (b.table.rows.some(r => r.length !== b.table.head.length)) fail({src:`${unit.id} notes ${sid}`}, 'table row length != header length'); }
    (b.sum || []).forEach(t => texts.push([sid, t]));
    if (b.exam) texts.push([sid, b.exam]);
    (b.timeline || []).forEach(r => { if (r.length !== 2) fail({src:`${unit.id} notes ${sid}`}, 'timeline rows are [when, what]'); r.forEach(t => texts.push([sid, t])); });
    (b.check || []).forEach(c => { if (!c.q || !c.a) fail({src:`${unit.id} notes ${sid}`}, 'check items need q and a'); texts.push([sid, c.q], [sid, c.a]); });
    const known = ['h','p','tip','warn','steps','ex','table','sum','exam','timeline','check'];
    Object.keys(b).forEach(k => { if (!known.includes(k)) fail({src:`${unit.id} notes ${sid}`}, 'unknown notes block key: ' + k); });
  }));
  texts.forEach(([sid, t]) => (String(t).match(/\{\{(.+?)\}\}/g) || []).forEach(m => {
    const inner = m.slice(2, -2); if (/^lim$|f\(x\+h\)|\(f\/g\)|f\(x\)/.test(inner)) return;
    try { P(inner); } catch(e){ fail({src:`${unit.id} notes ${sid}`}, 'notes math parse: ' + inner); }
  }));
  Object.keys(unit.notes || {}).forEach(sid => { if (!unit.sections.some(s => s.id === sid)) fail({src:unit.id}, 'notes for unknown section ' + sid); });
  return texts.length;
}

let total = 0;
for (const s of subjects){
  for (const unit of ctx.Study.problems[s.id].units){
    unit.items.forEach(verifyItem); total += unit.items.length;
    verifyNotes(unit);
    (unit.saq || []).forEach((q, i) => { const src = {src:`${unit.id} saq ${i}`};
      if (!unit.sections.some(x => x.id === q.sec)) fail(src, 'unknown section ' + q.sec);
      if (!q.parts || q.parts.length !== 3) fail(src, 'an SAQ needs parts a, b, c');
      (q.parts || []).forEach((p, j) => { if (!p.q || !p.model || !(p.look || []).length) fail(src, `part ${j} needs q, model, look`);
        if ((p.look || []).some(w => w !== w.toLowerCase())) fail(src, 'look words must be lowercase');
        if (!(p.look || []).some(w => p.model.toLowerCase().includes(w))) fail(src, `part ${j}: the model answer should hit at least one look word`); }); });
    (unit.leq || []).forEach((q, i) => { const src = {src:`${unit.id} leq ${i}`};
      ['prompt','skill','context','counter','thesis'].forEach(k => { if (!q[k]) fail(src, 'missing ' + k); });
      if (!(q.evidence || []).length) fail(src, 'missing evidence bank');
      (q.secs || []).forEach(x => { if (!unit.sections.some(y => y.id === x)) fail(src, 'unknown section ' + x); }); });
    if (unit.saq || unit.leq) console.log(`  ${unit.id}: ${(unit.saq || []).length} SAQs, ${(unit.leq || []).length} LEQ prompts`);
    unit.items.forEach(q => q.secs.forEach(sc => { const sid = sc.split(':')[1]; if (sid !== 'rev' && !unit.sections.some(s => s.id === sid)) fail(q, 'unknown section ' + sc); }));
    Object.values(unit.graphs || {}).flat().forEach(g => verifyItem({kind:"asy", src:"notes graph: " + g.cap.slice(0, 30), math:g.f, F:g.F, fields:[], steps:[], text:""}));
    for (const [sec, f] of Object.entries(unit.drills)){ for (let i = 0; i < 300; i++){ const q = f(unit.kit); q.src = `${unit.id} drill ${sec}`; verifyItem(q); } }
    console.log(`${s.id} / ${unit.id}: ${unit.items.length} problems, ${Object.keys(unit.drills).length} drill types`);
  }
}
/* ===== formatting lint: catch odd-looking problems before they ship ===== */
let warnN = 0; const warn = (q, m) => { warnN++; console.log('⚠', q.src || '', '→', m); };
const RENDER_BAD = /NaN|undefined|\[object|Infinity|\{\{|\}\}|\*\*|(^|[^_])__[^_]/;
function polyDegree(n, v = 'x'){             // degree of a monomial term in v, or null if not a simple monomial
  if (n.k === 'neg' || n.k === 'par') return polyDegree(n.a, v);
  if (n.k === 'num') return 0;
  if (n.k === 'var') return n.n === v ? 1 : 0;
  if (n.k === 'pow' && n.a.k === 'var' && n.b.k === 'num') return n.a.n === v ? n.b.v : 0;
  if (n.k === 'mul'){ const a = polyDegree(n.a, v), b = polyDegree(n.b, v); return a == null || b == null ? null : a + b; }
  return null;
}
function addTerms(n, out = [], sign = '+'){ if (n.k === 'add'){ addTerms(n.a, out, sign); addTerms(n.b, out, n.op); } else out.push({n, op: sign}); return out; }
function walk(n, f){ if (!n || typeof n !== 'object') return; f(n); ['a','b'].forEach(k => n[k] && walk(n[k], f)); }
function lintExpr(q, src, label, subj){
  if (!src || typeof src !== 'string' || /^(none|DNE|inf|-inf)$/.test(src)) return;
  if (/\+\s*-|-\s*-|\+\s*\+|-\s*\+/.test(src)) warn(q, `${label}: doubled sign in "${src}"`);
  if (/(^|[^\d.a-z])1[a-z(]/i.test(src) && !/(^|[^\d.a-z])1\(/.test(src.replace(/1\(f/g, ''))) warn(q, `${label}: coefficient 1 written out in "${src}"`);
  if (/\^1(?![\d.])/.test(src)) warn(q, `${label}: exponent 1 in "${src}"`);
  if (/(^|[^\d.])0[a-z]/i.test(src) || /[+-]0(?![\d.])/.test(src)) warn(q, `${label}: zero term in "${src}"`);
  if (subj === 'math3' && /pi|π|sin|cos|tan/.test(src)) warn(q, `${label}: π/trig isn't used in this class: "${src}"`);
  let ast; try { ast = P(src); } catch(e){ return; }
  const html = MC.render(src);
  if (RENDER_BAD.test(html.replace(/<[^>]+>/g, ''))) warn(q, `${label}: renders badly: "${src}"`);
  if (/·<\/span><span class="mn">[πe]/.test(html)) warn(q, `${label}: dot before a constant in "${src}"`);
  walk(ast, n => {
    if (n.k !== 'add' ) return;
    if (n.__seen) return;
    const terms = addTerms(n); terms.forEach(t => walk(t.n, m => { if (m.k === 'add') m.__seen = true; }));
    // polynomials in standard (descending) order: flag 3+ term sums that climb in degree, like 3+13x+4x^2; calc keeps Taylor polynomials ascending, as taught
    const d = terms.map(t => polyDegree(t.n));
    if (subj !== 'calc' && terms.length >= 3 && d.every(x => x != null) && d.some((x, i) => i && x > d[i - 1])) warn(q, `${label}: polynomial not in standard order in "${src}"`);
    // three or more fractions with two subtractions reads oddly for this class
    const fr = terms.filter(t => { let m = t.n; while (m.k === 'neg' || m.k === 'par') m = m.a; return m.k === 'div'; });
    if (terms.length >= 3 && fr.length === terms.length && terms.filter(t => t.op === '-').length >= 2) warn(q, `${label}: subtracts three fractions in "${src}"`);
  });
}
const TEXT_ODD = [[/ {2,}/, 'double space'], [/ [,.;:?!](?!\d)/, 'space before punctuation'], [/\b(\w+) \1\b/i, 'repeated word'], [/\[\[(?![^\]]*\]\])|\{\{(?![^}]*\}\})/, 'unclosed [[ or {{']];
function lintText(q, t, label){
  if (t == null) return; t = String(t);
  TEXT_ODD.forEach(([re, m]) => { const hit = t.replace(/\.( \.)+/g, '…').replace(/\{\{.*?\}\}/g, 'X').replace(/\[\[.*?\]\]/g, 'X').match(re); if (hit && !/^(ha ha|that that)$/i.test(hit[0])) warn(q, `${label}: ${m} in "${t.slice(0, 60)}"`); });
  const tb = t.replace(/\[[^\[\]()]*\)|\([^\[\]()]*\]/g, 'I');   // half-open intervals like [0, ∞)
  const bal = (o, c) => (tb.split(o).length - 1) === (tb.split(c).length - 1);
  if (!bal('(', ')')) warn(q, `${label}: unbalanced parentheses in "${t.slice(0, 60)}"`);
  if (/NaN|\[object|\{\{|\}\}|\*\*|(^|[^_])__[^_]|\[\[|\]\]/.test(MC.renderText(t).replace(/<[^>]+>/g, ''))) warn(q, `${label}: renders badly: "${t.slice(0, 60)}"`);
}
// Math 3: no "type the word" questions — answers are math
function noWordAnswers(subj, q){ return subj === "math3" && q.fields.some(f => f.t === "text") ? ["math question with a word answer (no vocab fill-ins in math)"] : []; }
function lintItem(q, subj){
  lintExpr(q, q.math, 'prompt', subj); lintExpr(q, q.target, 'target', subj);
  lintText(q, q.text, 'question'); (q.steps || []).forEach(s => lintText(q, s, 'step')); lintText(q, q.stim, 'source'); lintText(q, q.cite, 'citation');
  q.fields.forEach(f => {
    if (['expr','rat','num','pf'].includes(f.t)) lintExpr(q, String(f.a), 'answer', subj);
    if (f.t === 'choice') f.opts.forEach(o => lintText(q, o, 'option'));
  });
  noWordAnswers(subj, q).forEach(m => warn(q, m));
  if (q.img && (!/\.(jpe?g|png|gif|svg)$/i.test(q.img.file) || !q.img.alt || q.img.alt.length < 40)) warn(q, 'image needs a file name and a real description');
}
const lintSubj = {};
for (const s of subjects){
  for (const unit of ctx.Study.problems[s.id].units){
    unit.items.forEach(q => lintItem(q, s.id));
    for (const [sec, f] of Object.entries(unit.drills)) for (let i = 0; i < 300; i++){ const q = f(unit.kit); q.src = `${unit.id} drill ${sec}`; lintItem(q, s.id); }
    Object.entries(unit.notes || {}).forEach(([sid, bl]) => bl.forEach(b => { const q = {src:`${unit.id} notes ${sid}`};
      [].concat(typeof b === 'string' ? b : [b.h, b.p, b.tip, b.warn, b.exam, ...(b.steps || []), ...(b.sum || []), ...(b.timeline || []).flat(), ...(b.check || []).flatMap(c => [c.q, c.a])]).forEach(t => lintText(q, t, 'notes')); }));
    // answer-length giveaway: on multiple choice, the right answer shouldn't usually be the longest option
    const mc = unit.items.filter(q => q.fields[0].t === 'choice' && q.fields[0].opts.length >= 3);
    const L = lintSubj[s.id] || (lintSubj[s.id] = {n:0, longest:0, much:0});
    const optUse = {}; mc.forEach(q => { const k = q.fields[0].opts.slice().sort().join('|'); optUse[k] = (optUse[k] || 0) + 1; });
    // skip shared category lists (shapes, bond types…): their lengths are fixed and not a giveaway
    mc.filter(q => optUse[q.fields[0].opts.slice().sort().join('|')] < 3).forEach(q => { const f = q.fields[0], len = f.opts.map(o => o.length), mine = len[f.opts.indexOf(f.a)], others = len.filter((_, i) => f.opts[i] !== f.a), top = Math.max(...others);
      L.n++; if (mine > top) L.longest++; if (mine > top * 1.12 && mine - top >= 8) L.much++; });
    // AP-style source sets come in threes
    const bySrc = {}; unit.items.filter(q => q.stim || q.img || q.svg).forEach(q => { const k = q.stim || (q.img && q.img.file) || q.svg; bySrc[k] = (bySrc[k] || 0) + 1; });
    if (!s.singlePassage) Object.entries(bySrc).forEach(([k, n]) => { if (n !== 3) warn({src:unit.id}, `source has ${n} questions (AP sets use 3): "${String(k).slice(0, 40)}"`); });
  }
}
for (const [id, L] of Object.entries(lintSubj)) if (L.n){
  const pct = Math.round(100 * L.longest / L.n);
  console.log(`  ${id}: right answer is the longest option in ${pct}% of multiple-choice questions (chance ≈ 25–33%), clearly longest in ${L.much}`);
  if (pct > 45 || L.much > L.n * 0.1){ bad++; console.log(`✗ ${id}: right answers are too easy to spot by length`); }
}
console.log(warnN ? `⚠ ${warnN} formatting warning(s)` : '✓ formatting lint clean');
if (warnN) bad++;

/* calculus answer keys, checked with numbers: chk = {d: f} (answer is f′), {anti: g} (answer′ = g),
   {int: [g, a, b]} (answer = ∫ₐᵇ g), {dAt: [f, x0]} (answer = f′(x0)), {val: e} (answer = e), v = variable */
function calcCheck(q){
  const c = q.chk, v = c.v || 'x', f0 = q.fields[0];
  const ev = (src, x) => MC.evaluate(MC.parse(src), Object.assign({[v]: x}, c.env || {}));
  const der = (src, x) => { const h = 1e-4; return (ev(src, x + h) - ev(src, x - h)) / (2 * h); };
  const near = (a, b, tol = 1e-4) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
  const pts = c.pts || [0.37, 0.81, 1.23, 1.71, 2.13, 2.57];
  try {
    if (c.d){ let n = 0; pts.forEach(x => { const want = der(c.d, x), got = ev(f0.a, x); if (!isFinite(want) || !isFinite(got)) return; n++; if (!near(want, got)) fail(q, `answer isn't the derivative of ${c.d} at ${v}=${x}: ${got} vs ${want}`); }); if (n < 3) fail(q, 'derivative check had too few points'); }
    if (c.anti){ let n = 0; pts.forEach(x => { const want = ev(c.anti, x), got = der(f0.a, x); if (!isFinite(want) || !isFinite(got)) return; n++; if (!near(want, got)) fail(q, `answer′ isn't ${c.anti} at ${v}=${x}: ${got} vs ${want}`); }); if (n < 3) fail(q, 'antiderivative check had too few points'); }
    if (c.int){ const [g, a, b] = c.int, A = MC.numVal(String(a)), B = MC.numVal(String(b)), N = 2000, hh = (B - A) / N; let S = ev(g, A) + ev(g, B); for (let i = 1; i < N; i++) S += (i % 2 ? 4 : 2) * ev(g, A + i * hh); S *= hh / 3; if (!near(S, MC.numVal(String(f0.a)), 1e-5)) fail(q, `integral is ${S}, key says ${f0.a}`); }
    if (c.dAt){ const [f, x0] = c.dAt, want = der(f, MC.numVal(String(x0))); if (!near(want, MC.numVal(String(f0.a)))) fail(q, `f′(${x0}) is ${want}, key says ${f0.a}`); }
    if (c.tan || c.norm){
      const [f, x0s] = c.tan || c.norm, x0 = MC.numVal(String(x0s)), y0 = ev(f, x0), m = der(f, x0), slope = c.tan ? m : -1 / m;
      pts.forEach(x => { const want = y0 + slope * (x - x0), got = ev(f0.a, x); if (!near(want, got)) fail(q, `not the ${c.tan ? 'tangent' : 'normal'} line of ${f} at ${x0s}: ${got} vs ${want}`); });
    }
    if (c.ode){ const [rhs, x0, y0] = c.ode; let n = 0;
      if (!near(ev(f0.a, MC.numVal(String(x0))), MC.numVal(String(y0)))) fail(q, `solution doesn't pass through (${x0}, ${y0})`);
      pts.forEach(x => { const y = ev(f0.a, x), d = der(f0.a, x), want = MC.evaluate(MC.parse(rhs), {[v]: x, y}); if (!isFinite(d) || !isFinite(want)) return; n++; if (!near(d, want, 1e-3)) fail(q, `answer doesn't satisfy dy/d${v} = ${rhs} at ${v}=${x}: ${d} vs ${want}`); });
      if (n < 3) fail(q, 'ode check had too few points'); }
    if (c.lim){ const [f, c0] = c.lim, want = MC.numVal(String(f0.a));
      const xs = c0 === 'inf' ? [1e5, 1e6] : [1e-5, -1e-5].map(h => MC.numVal(String(c0)) + h);
      xs.forEach(x => { const got = ev(f, x); if (isFinite(got) && !near(want, got, 1e-3)) fail(q, `limit of ${f} near ${c0} looks like ${got}, key says ${f0.a}`); }); }
    if (c.val !== undefined){ const want = MC.numVal(String(c.val)); if (!near(want, MC.numVal(String(f0.a)), 1e-6)) fail(q, `value is ${want}, key says ${f0.a}`); }
  } catch(e){ fail(q, 'calculus check crashed: ' + e.message); }
}

/* answer-checker spot checks for the chemistry field types */
[[{t:'charge', a:2}, ['2+', '+2', '²⁺', ' 2 + '], ['2-', '2', '3+']], [{t:'charge', a:-1}, ['-', '1-', '−1', '-1', '⁻'], ['+', '1']],
 [{t:'formula', a:'Al2O3'}, ['Al2O3', 'al2o3', 'Al₂O₃', 'AL2O3'], ['Al3O2', 'AlO', 'Al2O']],
 [{t:'choice', a:'C≡C', opts:['C–C','C=C','C≡C']}, ['C≡C'], ['C=C', 'C–C']],
 [{t:'text', a:['electrostatic', 'electrostatic attraction']}, ['Electrostatic', 'electrostatic attraction', 'the electrostatic'], ['static']]
  // calculus: e, inverse trig, sin^2, |x|, + C
 ,[{t:'expr', a:'3(sin(x))^2*cos(x)'}, ['3sin^2(x)cos(x)', '3 sin^2 x cos x', '3cos(x)sin(x)^2'], ['3sin(x)cos(x)', '3sin(x^2)cos(x)']],
 [{t:'expr', a:'1/(1+x^2)'}, ['(1+x^2)^-1', '1/(x^2+1)'], ['1/(1-x^2)', 'arctan(x)']],
 [{t:'expr', a:'arcsin(x)'}, ['sin^-1(x)', 'sin⁻¹(x)', 'arcsin x'], ['1/sin(x)', 'sin(x)']],
 [{t:'expr', a:'x*e^x'}, ['xe^x', 'x exp(x)', 'e^x*x'], ['e^x', 'x e^(2x)']],
 [{t:'anti', a:'ln(abs(x))'}, ['ln|x| + C', 'ln(abs(x))+c', 'ln(x) + C'], ['ln|x|', '1/x + C']],
 [{t:'anti', a:'x^3/3-cos(x)'}, ['x^3/3 - cos x + C', '(1/3)x^3 - cos(x) + 7 + C'], ['x^3/3 - cos x', 'x^3 - cos x + C', 'x^3/3 + cos x + C']],
 [{t:'num', a:'ln(3)'}, ['ln3', 'ln(3)', '1.0986122886681098'], ['1.1', 'log(3)']],
 [{t:'num', a:'e^2-1'}, ['e^2 - 1', 'exp(2)-1'], ['e^2', '6.4']]
].forEach(([f, good, badA]) => {
  good.forEach(x => { if (!MC.check(f, x).ok) { bad++; console.log('✗ checker rejects', JSON.stringify(x), 'for', JSON.stringify(f)); } });
  badA.forEach(x => { if (MC.check(f, x).ok) { bad++; console.log('✗ checker accepts', JSON.stringify(x), 'for', JSON.stringify(f)); } });
});
console.log(bad ? `✗ ${bad} problem(s) failed` : `✓ all ${total} problems check out`);
process.exit(bad ? 1 : 0);
