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
    POLY, QTEXT, asyFields,
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
      return add({secs, src, text:"Decompose into partial fractions.", math, pfForm:[d1, d2], fields:[{l:"A", t:"num", a:A}, {l:"B", t:"num", a:B}], steps, kind:"pf"});
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
    txt(secs, src, text, accepts, steps){
      return add({secs, src, text, fields:[{l:"Answer", t:"text", a:accepts}], steps, kind:"text"});
    }
  };
  unit.kit = k;
  return k;
}

