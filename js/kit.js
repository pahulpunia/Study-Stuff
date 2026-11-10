/* =====================================================================
   Problem kit: the builders unit files use to make questions.
   A unit file calls Study.addUnit(subjectId, {..., problems(k){ k.simp(...) }}).
   k.simp, k.lim, … make specific math question types; k.ask is the generic
   one for anything new (chem, physics…). See ADDING-CONTENT.md.
   (No page code in here, so tools/verify.js can run it in Node.)
   ===================================================================== */

const QTEXT = {simp:"Simplify. State any excluded values.", simpOnly:"Simplify.", lim:"Evaluate the limit. If it doesn't exist, write DNE.",
               asy:"Find all asymptotes, holes, and intercepts.", write:"Write an equation for this rational graph.", one:"Write as a single rational expression and simplify."};

/* polynomial + random helpers for Endless Drill generators */
const POLY = (() => {
  const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const nz = (a, b) => { let v; do { v = ri(a, b); } while (v === 0); return v; };
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b){ [a, b] = [b, a % b]; } return a || 1; };
  function frac(p, q){ if (q < 0){ p = -p; q = -q; } const g = gcd(p, q); p /= g; q /= g; return q === 1 ? String(p) : `${p}/${q}`; }
  function distinct(n, lo, hi, avoid = []){ const out = []; let guard = 0; while (out.length < n && guard++ < 500){ const v = ri(lo, hi); if (!out.includes(v) && !avoid.includes(v)) out.push(v); } return out; }
  const pmul = (a, b) => { const r = Array(a.length + b.length - 1).fill(0); a.forEach((x, i) => b.forEach((y, j) => r[i + j] += x * y)); return r; };
  const fromRoots = (roots, k = 1) => roots.reduce((p, r) => pmul(p, [1, -r]), [k]);
  function pstr(c, v = "x"){
    const d = c.length - 1; let s = "";
    c.forEach((a, i) => { if (!a) return; const pw = d - i; const abs = Math.abs(a);
      const coef = (abs === 1 && pw > 0) ? "" : String(abs);
      const term = coef + (pw > 0 ? v : "") + (pw > 1 ? "^" + pw : "");
      s += (s ? (a < 0 ? "-" : "+") : (a < 0 ? "-" : "")) + term; });
    return s || "0";
  }
  const fac = r => r === 0 ? "x" : r < 0 ? `(x+${-r})` : `(x-${r})`;
  const facs = rs => rs.map(fac).join("");
  function pdiv(n, d){ n = n.slice(); const q = []; while (n.length >= d.length){ const c = n[0] / d[0]; q.push(c); d.forEach((x, i) => n[i] -= c * x); n.shift(); } return q; }
  const evalRoots = (rs, x) => rs.reduce((p, r) => p * (x - r), 1);
  return {ri, pick, nz, gcd, frac, distinct, pmul, fromRoots, pstr, fac, facs, pdiv, evalRoots};
})();

/* field makers for k.ask (and drills) */
const F = {
  num:     (l, a) => ({l, t:"num", a:String(a), numeric:true, ph:"number"}),
  text:    (l, a) => ({l, t:"text", a:[].concat(a), ph:"type the word(s)"}),
  choice:  (l, opts, a, shuffle) => ({l, t:"choice", opts, a, shuffle: !!shuffle}),   // shuffle: show options in random order
  formula: (l, a) => ({l, t:"formula", a, ph:"e.g. Al2O3"}),
  charge:  (l, a) => ({l, t:"charge", a:+a, ph:"e.g. 2+ or 3-"}),
  // underline: "The bell rang __when class ended__." → the words, and the answer as "first-last" positions
  under:   (l, marked) => {
    const words = [], on = [];
    let inU = false;
    String(marked).trim().split(/\s+/).forEach(tok => {
      let t = tok, starts = false, ends = false;
      if (t.startsWith("__")){ starts = true; t = t.slice(2); }
      const m = t.match(/__([^\w]*)$/); if (m){ ends = true; t = t.slice(0, m.index) + m[1]; }
      if (starts) inU = true;
      words.push(t); on.push(inU);
      if (ends) inU = false;
    });
    const a = on.indexOf(true), b = on.lastIndexOf(true);
    if (a < 0) throw new Error("underline question needs __marked__ words: " + marked);
    return {l, t:"under", words, a: a + "-" + b};
  }
};

/* the answer for a partial-fraction problem, e.g. 3/(2x+1) + 1/(x+6) */
const pfField = (d1, d2, A, B) => {
  const b = String(B).trim(), sign = b.startsWith("-") ? "-" : "+";
  return {l:"Partial fractions", t:"pf", n:2, a:`${A}/(${d1})${sign}${b.replace(/^-/, "")}/(${d2})`, v:["x"], ph:"e.g. 3/(x+1)+2/(x-4)"};
};

/* Add more questions and note blocks to a unit that is already loaded (used by the "extra" files).
   New questions get their own id range so existing question ids, and the stats saved under them, never shift.
   New note blocks go in just before a section's "check yourself" block. */
function extendUnit(S, subjId, unitId, ext){
  const b = S.problems[subjId], unit = b && b.units.find(u => u.id === unitId);
  if (!unit) return;
  if (ext.problems){
    const before = unit.items.length;
    ext.problems(makeKit(subjId, unit));
    const added = unit.items.slice(before);
    added.forEach(o => { unit.extraN = (unit.extraN || 0) + 1; o.id = unit.id + "-x" + unit.extraN; });
    b.items.push(...added);
  }
  Object.entries(ext.notes || {}).forEach(([sec, blocks]) => {
    const cur = unit.notes && unit.notes[sec]; if (!cur) return;
    const at = cur.findIndex(x => x.check);
    cur.splice(at < 0 ? cur.length : at, 0, ...blocks);
  });
}

function makeKit(subjId, unit){
  let n = 0;
  const add = o => {
    o.id = unit.id + "-" + (++n);
    o.unit = unit.id;
    o.secs = (o.secs || []).map(s => unit.id + ":" + s);
    unit.items.push(o);
    return o;
  };
  function canceledPts(ans, excl, v){
    // excluded values where the simplified answer is still defined = factors that canceled
    if (!excl) return [];
    const a = MC.parse(ans);
    return excl.map(MC.numVal).filter(x => { try { return isFinite(MC.evaluate(a, {[v]: x})); } catch(e){ return false; } });
  }
  const asyFields = F => [
    {l:"VA: x =", t:"set", a:F.va, ph:"2, -3 or none"},
    {l:"HA: y =", t:"num", a:F.ha, ph:"number or none"},
    {l:"SA: y =", t:"expr", a:F.sa, ph:"x+3 or none"},
    {l:"Holes", t:"pts", a:F.holes, ph:"(4, 2/7) or none"},
    {l:"x-ints: x =", t:"set", a:F.xint, ph:"1, -2 or none"},
    {l:"y-int: y =", t:"num", a:F.yint, ph:"number or none"}
  ];
  const k = {
    POLY, QTEXT, asyFields, pfField,
    /* generic: any prompt + any answer fields (see field types in ADDING-CONTENT.md) */
    ask(secs, src, text, fields, steps, o = {}){ return add(Object.assign({secs, src, text, fields, steps, kind: o.kind || "ask"}, o)); },
    simp(secs, src, math, ans, excl, steps, o = {}){
      const v0 = (o.v || ["x"])[0], canc = canceledPts(ans, excl, v0);
      const fields = [{l:"Simplified", t:"expr", a:ans, v:o.v || ["x"], r:o.r, simp:true, mustDefine:canc.map(x => ({[v0]: x}))}];
      if (excl) fields.push({l:`Excluded values: ${v0} ≠`, t:"set", a:excl, ph:"e.g. 2, -3", canceled:canc});
      return add({secs, src, text: o.text || (excl ? QTEXT.simp : QTEXT.simpOnly), math, fields, steps, kind:"simp", o});
    },
    lim(secs, src, math, v, to, ans, steps, o = {}){
      return add({secs, src, text: o.text || QTEXT.lim, math, lim:{v, to}, fields:[{l:"Limit", t:"num", a:ans, ph:"number, ∞, −∞, or DNE"}], steps, kind:"lim", o});
    },
    pf(secs, src, math, d1, d2, A, B, steps){
      return add({secs, src, text:"Decompose into partial fractions.", math, pf:{d1, d2, A:String(A), B:String(B)}, fields:[pfField(d1, d2, A, B)], steps, kind:"pf"});
    },
    dq(secs, src, f, ans, steps){
      return add({secs, src, text:"Find the difference quotient {{(f(x+h)-f(x))/h}}", pre:"f(x) = ", math:f,
        fields:[{l:"Difference quotient", t:"expr", a:ans, v:["x","h"], simp:true, mustDefine:[{x:1.37, h:0}]}], steps, kind:"dq"});
    },
    // F = {va:[], ha:"…"|"none", sa:"…"|"none", holes:[[x,y]], xint:[], yint:"…"|"none"}
    asy(secs, src, math, F, steps, o = {}){
      return add({secs, src, text: o.text || QTEXT.asy, pre: o.pre || "f(x) = ", math, F, graphAfter:true, fields: asyFields(F), steps, kind:"asy", o});
    },
    write(secs, src, target, F, steps){
      return add({secs, src, text:QTEXT.write, target, F, graphBefore:true,
        fields:[{l:"f(x) =", t:"rat", a:target, v:["x"], holes:F.holes.map(h => +MC.numVal(h[0])), ph:"e.g. (x+3)(x+1)/((x+2)(x+1))"}], steps, kind:"write"});
    },
    txt(secs, src, text, accepts, steps, o = {}){
      return add({secs, src, text, fields:[{l:o.label || "Answer", t:"text", a:accepts}], steps, kind:"text", tip:o.tip});
    },
    /* tap one option */
    choice(secs, src, text, opts, ans, steps, o = {}){
      return add({secs, src, text, fields:[F.choice(o.label || "Answer", opts, ans, o.shuffle)], steps, kind:"choice", math:o.math, tip:o.tip, stim:o.stim, cite:o.cite, img:o.img, svg:o.svg});
    },
    /* tap the words to underline them (a clause or phrase) */
    under(secs, src, text, marked, steps, o = {}){
      return add({secs, src, text, fields:[F.under(o.label || "Tap the first and last word", marked)], steps, kind:"under", tip:o.tip});
    },
    /* a plain number (count, charge size…) */
    num(secs, src, text, ans, steps, o = {}){
      return add({secs, src, text, fields:[F.num(o.label || "Answer", ans)], steps, kind:"num", tip:o.tip});
    },
    /* a chemical formula like Al2O3 */
    formula(secs, src, text, ans, steps, o = {}){
      return add({secs, src, text, fields:[F.formula(o.label || "Formula", ans)], steps, kind:"formula", tip:o.tip});
    },
    /* an ion charge like 2+ or 3− */
    charge(secs, src, text, ans, steps, o = {}){
      return add({secs, src, text, fields:[F.charge(o.label || "Charge", ans)], steps, kind:"charge", tip:o.tip});
    },
    F
  };
  unit.kit = k;
  return k;
}

