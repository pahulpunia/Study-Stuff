/* TEMPLATE: a "problems" unit (math, chem calculations…).
   1. Copy this file to subjects/<subject>/<unit>.js   (e.g. subjects/math3/unit5.js)
   2. Change the subject id ("math3") and the unit id ("u5"). Unit ids must be unique and never change.
   3. Add the file to that subject's `files` list in subjects/registry.js
   4. (Optional, needs Node) run:  node tools/verify.js   to check every answer

   Math is typed in plain text: (2x+1)/(x-2), x^2, sqrt(x), cbrt(x), pi, sin(x).
   In text and steps, put math inside {{ }} to typeset it: "Factor: {{(x-2)(x+2)}}".

   Builders (all start with: sections, source label, …):
     k.simp(secs, src, expr, simplifiedAnswer, excludedValues|null, steps, {v:["x"], text})
     k.lim(secs, src, expr, variable, approachesTo, answer, steps)        // to: "2", "-3", "inf", "-inf"; answer: number, "inf", "-inf", "DNE"
     k.pf(secs, src, expr, denom1, denom2, A, B, steps)                    // partial fractions
     k.dq(secs, src, f, answer, steps)                                     // difference quotient
     k.asy(secs, src, f, {va, ha, sa, holes, xint, yint}, steps)           // asymptotes/holes/intercepts (+ graph)
     k.write(secs, src, targetF, {…same features…}, steps)                 // write the equation from a graph
     k.txt(secs, src, question, [accepted answers], steps)                 // short word answer
     k.ask(secs, src, question, fields, steps, {math, pre})                // anything else (see below)

   Field types for k.ask:
     {l:"Label", t:"num",  a:"3/5"}                 a number (fractions, sqrt, pi ok); also "DNE", "inf", "none"
     {l:"Label", t:"expr", a:"2x+1", v:["x"]}       any equivalent expression
     {l:"Label", t:"set",  a:["2","-3"]}             a list of numbers, any order ([] = none)
     {l:"Label", t:"pts",  a:[["4","2/7"]]}          points
     {l:"Label", t:"text", a:["mole","moles"]}      a word/phrase (case-insensitive)  */
Study.addUnit("math3", {
  id: "u5",
  name: "Unit 5: Example Unit",
  short: "Unit 5",
  sections: [
    {id: "5.1", name: "5.1 Example Section"}
  ],
  notes: {
    "5.1": ["Short summary lines from your notes. Math goes in braces: {{x^2-9}} = {{(x-3)(x+3)}}."]
  },
  graphs: {},   // optional example graphs for the notes, see subjects/math3/unit4.js
  problems(k){
    // "rev" puts a problem in the unit review list too
    k.simp(["5.1", "rev"], "5.1 Notes #1", "(x^2-9)/(x-3)", "x+3", ["3"],
      ["Factor: {{((x-3)(x+3))/(x-3)}}", "Cancel (x − 3) → {{x+3}}; x ≠ 3"]);
    k.lim(["5.1"], "5.1 HW #2", "(x^2-4)/(x-2)", "x", "2", "4",
      ["Factor and cancel: x + 2", "Plug in 2 → 4"]);
    k.ask(["5.1"], "5.1 HW #3", "Solve for x.", [{l:"x =", t:"set", a:["2", "-2"]}],
      ["{{x^2}} = 4", "x = ±2"], {math: "x^2-4"});
  },
  drills: {
    // optional: section -> function that returns a brand-new random problem (see unit4.js)
  }
});
