/* Calculus BC: question helpers shared by the chapter files.
   Every key gets checked with numbers by tools/verify.js (chk): derivatives against the
   original function, antiderivatives by differentiating back, definite integrals by
   Simpson's rule, values at a point by evaluating. */
var CALCKIT = k => {
  const ph = {expr: "e.g. 3x^2cos(x)", num: "a number, like 4, -1/2, ln(3), or π/4", anti: "e.g. x^3/3 - cos(x) + C"};
  const one = (secs, src, text, field, steps, o) => k.ask(secs, src, text, [field], steps, o);
  return {
    // the derivative of y = math (checked against the original)
    d(secs, src, math, ans, steps, o = {}){
      const v = o.v || "x";
      return one(secs, src, o.text || "Find the derivative.", {l: o.label || `dy/d${v} =`, t:"expr", a:ans, v:[v], r:o.r, ph:o.ph || ph.expr}, steps,
        {pre: o.pre || "y = ", math, kind:"deriv", chk: o.nochk ? undefined : {d: o.of || math, v, pts: o.pts}});
    },
    // any expression answer (an equation of a line, a velocity function…)
    expr(secs, src, text, ans, steps, o = {}){
      return one(secs, src, text, {l: o.label || "Answer", t:"expr", a:ans, v:o.vars || [o.v || "x"], r:o.r, ph:o.ph || ph.expr}, steps,
        {pre:o.pre, math:o.math, kind:"expr", chk:o.chk});
    },
    // a number (exact forms like ln(3), π/4, e^2 − 1 all work)
    num(secs, src, text, ans, steps, o = {}){
      return one(secs, src, text, {l: o.label || "Answer", t:"num", a:String(ans), dec:o.dec, ph:o.ph || (o.dec ? "3 decimals, like 4.527" : ph.num)}, steps,
        {pre:o.pre, math:o.math, kind:"num", chk:o.chk});
    },
    // f′(x0) for y = math
    dAt(secs, src, math, x0, ans, steps, o = {}){
      const v = o.v || "x";
      return one(secs, src, o.text || `Find the slope (the derivative) at ${v} = ${x0}.`, {l: o.label || "Slope", t:"num", a:String(ans), ph:ph.num}, steps,
        {pre: o.pre || "y = ", math, kind:"num", chk:{dAt:[o.of || math, x0], v}});
    },
    // indefinite integral of g: any antiderivative + C
    anti(secs, src, g, ans, steps, o = {}){
      const v = o.v || "x";
      return one(secs, src, o.text || `Find the integral: ∫ {{${g}}} d${v}`, {l: o.label || "Antiderivative", t:"anti", a:ans, v:[v], r:o.r, ph:ph.anti}, steps,
        {kind:"anti", chk:{anti: o.of || g, v, pts:o.pts}});
    },
    // definite integral of g from a to b
    int(secs, src, g, a, b, ans, steps, o = {}){
      const v = o.v || "x";
      return one(secs, src, o.text || `Evaluate the integral from ${a} to ${b} of {{${g}}} d${v}.`, {l: o.label || "Value", t:"num", a:String(ans), ph:ph.num}, steps,
        {kind:"num", chk:{int:[o.of || g, a, b], v}});
    },
    // a list of numbers (critical numbers, x-values…), or "none"
    set(secs, src, text, ans, steps, o = {}){
      return one(secs, src, text, {l: o.label || "x =", t:"set", a:ans.map(String), dec:o.dec, ph:o.ph || "e.g. -2, 0, 3 or none"}, steps,
        {pre:o.pre, math:o.math, kind:"set"});
    },
    pick: k.choice
  };
};
