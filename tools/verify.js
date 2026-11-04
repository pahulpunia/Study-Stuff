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
}};
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, {filename: f});
run("js/kit.js");
run("subjects/registry.js");
const subjects = ctx.window.SUBJECTS.filter(s => s.type === "problems");
subjects.forEach(s => s.files.forEach(run));

const P = MC.parse, E = MC.evaluate, NV = MC.numVal;
let bad = 0; const fail = (q, m) => { bad++; console.log('✗', q.src, q.math || q.target || '', '→', m); };
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
  try { if (q.math) P(q.math); if (q.target) P(q.target); } catch(e){ fail(q, 'parse ' + e.message); return; }
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
    const known = ['h','p','tip','warn','steps','ex','table'];
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
/* answer-checker spot checks for the chemistry field types */
[[{t:'charge', a:2}, ['2+', '+2', '²⁺', ' 2 + '], ['2-', '2', '3+']], [{t:'charge', a:-1}, ['-', '1-', '−1', '-1', '⁻'], ['+', '1']],
 [{t:'formula', a:'Al2O3'}, ['Al2O3', 'al2o3', 'Al₂O₃', 'AL2O3'], ['Al3O2', 'AlO', 'Al2O']],
 [{t:'choice', a:'C≡C', opts:['C–C','C=C','C≡C']}, ['C≡C'], ['C=C', 'C–C']],
 [{t:'text', a:['electrostatic', 'electrostatic attraction']}, ['Electrostatic', 'electrostatic attraction', 'the electrostatic'], ['static']]
].forEach(([f, good, badA]) => {
  good.forEach(x => { if (!MC.check(f, x).ok) { bad++; console.log('✗ checker rejects', JSON.stringify(x), 'for', JSON.stringify(f)); } });
  badA.forEach(x => { if (MC.check(f, x).ok) { bad++; console.log('✗ checker accepts', JSON.stringify(x), 'for', JSON.stringify(f)); } });
});
console.log(bad ? `✗ ${bad} problem(s) failed` : `✓ all ${total} problems check out`);
process.exit(bad ? 1 : 0);
