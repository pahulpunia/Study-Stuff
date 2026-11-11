/* Honors Math 3 · Unit 5: Radicals, Variation & Inverse Functions
   Source: Unit 5 Notes (5.1–5.5). The notes are a blank student copy, so the answers and worked steps here
   were worked out for this site; every answer is checked numerically by tools/verify.js.
   Typed radical answers must be in simplest radical form (field flag rad), sums must be combined and
   multiplied out (combine), and the calculus-style problems must end as one fraction (single). */
(() => {
const {ri, pick} = POLY;

Study.addUnit("math3", {
  id: "u5",
  name: "Unit 5: Radicals, Variation & Inverses",
  short: "Unit 5",
  sections: [
    {id:"5.1",   name:"5.1 Simplifying Radicals"},
    {id:"5.1.2", name:"5.1 Rational Exponents"},
    {id:"5.2",   name:"5.2 Adding & Multiplying Radicals"},
    {id:"5.2.2", name:"5.2 Rationalizing & Combining"},
    {id:"5.3",   name:"5.3 Graphing Radical Functions"},
    {id:"5.3.2", name:"5.3 Solving Radical Equations"},
    {id:"5.3.3", name:"5.3 Domain Restrictions"},
    {id:"5.4",   name:"5.4 Variation"},
    {id:"5.5",   name:"5.5 Inverse Functions"}
  ],

  notes: {
    "5.1": [
      {sum:["An nth root undoes an nth power. Odd roots keep the sign; even roots of an even power need care.", "Even-Even-Odd rule: even index, even power inside, odd power left over → put absolute value bars on that variable.", "To simplify, pull out every perfect nth power and leave the rest under the radical. To multiply radicals with the same index, multiply what's inside."]},
      {p:"If aⁿ = b, then a is an nth root of b. When n is **odd** there is exactly one real root, and it has the same sign as b: {{cbrt(-8)}} is −2. When n is **even**, a positive number has two real roots (3 and −3 both square to 9), and the radical symbol means the positive one."},
      {h:"Why absolute value shows up"},
      {p:"{{sqrt(x^2)}} can't simply be x. If x is −5, then x² is 25 and the square root is 5, not −5. The radical always gives the non-negative answer, so {{sqrt(x^2)}} is |x|. The same thing happens any time an even root turns an even power into an odd power: {{sqrt(x^6)}} is |x³|, because x³ could be negative but the root can't."},
      {p:"If the leftover power is even (like {{sqrt(x^4)}}, which is x²), it's already non-negative and needs no bars. Odd roots never need bars."},
      {steps:["**Even** index (square root, 4th root…)?", "**Even** power under the radical?", "**Odd** power on the variable after you take it out?", "All three yes → absolute value bars on that variable."]},
      {ex:{q:"Simplify {{sqrt(16x^6y^4)}}.", a:["√16 is 4.", "x⁶ → x³: even index, even power, odd result, so |x³|.", "y⁴ → y²: the result is even, so no bars.", "{{4|x^3|y^2}}"]}},
      {ex:{q:"Simplify {{sqrt(81x^5y^10)}}.", a:["√81 is 9.", "x⁵ is x⁴ · x. Take out x² (an even result, no bars) and leave x inside.", "y¹⁰ → y⁵: odd result, so |y⁵|.", "{{9x^2|y^5|sqrt(x)}}"]}},
      {ex:{q:"Simplify {{cbrt(x^9y^10z^17)}}.", a:["Divide each exponent by 3: 9 → 3 remainder 0; 10 → 3 remainder 1; 17 → 5 remainder 2.", "Quotients come out, remainders stay in: {{x^3y^3z^5cbrt(yz^2)}}.", "It's an odd root, so no absolute value."]}},
      {h:"Multiplying"},
      {p:"For radicals with the same index, {{sqrt(a)*sqrt(b)}} is {{sqrt(ab)}}. Multiply the outsides together and the insides together, then simplify the result."},
      {ex:{q:"Multiply {{cbrt(24x^5y^2)*3cbrt(xy^5)}}.", a:["Outside: 3. Inside: 24x⁶y⁷.", "24 is 8 · 3, x⁶ is a perfect cube, and y⁷ is y⁶ · y.", "{{6x^2y^2cbrt(3y)}}"]}},
      {warn:"If a variable sits under an even root with an odd power, like √x or √(x⁵), it must already be non-negative for the expression to exist. That's why {{sqrt(x^5)}} is x²√x with no bars."},
      {check:[{q:"Simplify {{sqrt(x^2)}}.", a:"|x|"}, {q:"Does {{sqrt(x^8)}} need absolute value?", a:"No. It's x⁴, an even power, which is never negative."}, {q:"Is 4xy√(2x) equivalent to {{sqrt(32x^3y^2)}}?", a:"No. It needs |y|: 4x|y|√(2x)."}]}
    ],
    "5.1.2": [
      {sum:["A fractional exponent is a root: the denominator is the index and the numerator is the power.", "All the exponent rules still work with fractions: add when multiplying, subtract when dividing, multiply for a power of a power.", "Rationalize a denominator by multiplying by whatever completes a perfect nth power under the radical."]},
      {table:{head:["Exponent form", "Radical form"], rows:[["{{a^(1/2)}}", "{{sqrt(a)}}"], ["{{a^(1/3)}}", "{{cbrt(a)}}"], ["a^(m/n)", "the nth root of a, raised to the m (or the nth root of aᵐ)"], ["a^(−m)", "1 over aᵐ"]]}},
      {p:"Take the root first when you can, because it makes the numbers smaller. For {{8^(2/3)}}: the cube root of 8 is 2, and 2 squared is 4."},
      {ex:{q:"Evaluate {{16^(-0.75)}}.", a:["−0.75 is −3/4.", "The negative exponent means a reciprocal: 1 over {{16^(3/4)}}.", "The 4th root of 16 is 2, and 2³ is 8.", "1/8"]}},
      {ex:{q:"Simplify {{(27x^9y^(1/2))^(2/3)}}.", a:["Raise every factor to the 2/3.", "{{27^(2/3)}} is 3², which is 9.", "x: 9 · 2/3 gives x⁶. y: 1/2 · 2/3 gives {{y^(1/3)}}.", "{{9x^6y^(1/3)}}"]}},
      {h:"Rationalizing one-term denominators"},
      {p:"A denominator is rationalized when it has no radical. For a square root, multiply top and bottom by that same root. For a cube root or higher, multiply by the factor that makes every power under the radical a multiple of the index."},
      {ex:{q:"Rationalize {{12/cbrt(9x^2)}}.", a:["Under the root is 3²x². To make perfect cubes you need one more 3 and one more x.", "Multiply top and bottom by {{cbrt(3x)}}.", "Bottom: {{cbrt(27x^3)}}, which is 3x.", "{{12cbrt(3x)/(3x)}} reduces to {{4cbrt(3x)/x}}."]}},
      {ex:{q:"Simplify {{sqrt(6x^6)/sqrt(5x^3y^7)}} (variables positive).", a:["Put it under one radical and reduce: {{sqrt(6x^3/(5y^7))}}.", "Pull out perfect squares: {{x sqrt(6x)/(y^3sqrt(5y))}}.", "Multiply top and bottom by {{sqrt(5y)}}: {{x sqrt(30xy)/(5y^4)}}."]}},
      {check:[{q:"Write {{x^(-1/2)}} with a radical.", a:"1/√x"}, {q:"Evaluate {{64^(1/2)/64^(1/3)}}.", a:"8/4 = 2."}, {q:"What do you multiply 1/⁴√27 by to rationalize it?", a:"⁴√3 over ⁴√3, since 27 · 3 is 81, a perfect 4th power. Result: ⁴√3 / 3."}]}
    ],
    "5.2": [
      {sum:["Like radicals have the same index and the same radicand. Add or subtract their coefficients, just like combining like terms.", "Simplify each radical first; radicals that look different often turn out to be like.", "Multiply two-term radical expressions by distributing (FOIL). Conjugates multiply to a rational number."]},
      {p:"{{2sqrt(5)+6sqrt(5)}} is {{8sqrt(5)}} for the same reason 2x + 6x is 8x. But {{sqrt(3)+6sqrt(5)}} can't be combined, just as x + 6y can't."},
      {ex:{q:"Simplify {{5sqrt(12)+sqrt(27)-2sqrt(48)}}.", a:["√12 is 2√3, √27 is 3√3, √48 is 4√3.", "10√3 + 3√3 − 8√3", "{{5sqrt(3)}}"]}},
      {ex:{q:"Simplify {{x cbrt(40x)+cbrt(135x^4)}}.", a:["{{cbrt(40x)}} is {{2cbrt(5x)}}, so the first term is {{2x cbrt(5x)}}.", "{{cbrt(135x^4)}} is {{3x cbrt(5x)}}.", "{{5x cbrt(5x)}}"]}},
      {h:"Multiplying and conjugates"},
      {p:"**Conjugates** differ only in the sign between the terms, like 2 + √5 and 2 − √5. Their product is a difference of squares, a² − b, so the radical disappears: (2 + √5)(2 − √5) is 4 − 5, which is −1."},
      {ex:{q:"Multiply {{(2-3sqrt(2))(5-4sqrt(2))}}.", a:["FOIL: 10 − 8√2 − 15√2 + 12 · 2", "√2 · √2 is 2, so the last term is 24.", "{{34-23sqrt(2)}}"]}},
      {ex:{q:"Expand {{(4+3sqrt(6))^2}}.", a:["(a + b)² is a² + 2ab + b².", "16 + 24√6 + 9 · 6", "{{70+24sqrt(6)}}"]}},
      {warn:"√48 + √27 is not √75. You can only add radicals after they are simplified to like radicals: 4√3 + 3√3 is 7√3."},
      {check:[{q:"Simplify {{7sqrt(3)-sqrt(3)}}.", a:"6√3"}, {q:"Simplify {{6sqrt(3)-sqrt(27)}}.", a:"6√3 − 3√3 = 3√3."}, {q:"Multiply (√(x+3) − √(x−3))(√(x+3) + √(x−3)).", a:"(x + 3) − (x − 3) = 6."}]}
    ],
    "5.2.2": [
      {sum:["One-term denominator: multiply by the radical. Two-term denominator: multiply top and bottom by the conjugate.", "To add a fraction and a radical term, get a common denominator. A radical times itself gives the radicand.", "A negative exponent means that factor belongs in the denominator; factor out the smallest power to combine."]},
      {ex:{q:"Rationalize {{10/(3-sqrt(5))}}.", a:["Multiply top and bottom by the conjugate, 3 + √5.", "Bottom: 9 − 5, which is 4.", "{{10(3+sqrt(5))/4}} reduces to {{(15+5sqrt(5))/2}}."]}},
      {ex:{q:"Rationalize {{sqrt(2)/(8+sqrt(2))}}.", a:["Multiply by 8 − √2 over itself.", "Top: 8√2 − 2. Bottom: 64 − 2, which is 62.", "Divide everything by 2: {{(4sqrt(2)-1)/31}}."]}},
      {h:"Combining terms that contain radicals"},
      {p:"These look like the answers you'll get from the product and quotient rules in calculus, and the cleanup is always the same. The key fact is {{sqrt(u)*sqrt(u)}} is u, so multiplying a term by √u over √u gives it the denominator √u."},
      {ex:{q:"Combine {{x(2x^2+3)/sqrt(x^2+1)+4x sqrt(x^2+1)}}.", a:["Give the second term the denominator √(x² + 1): it becomes 4x(x² + 1) over √(x² + 1).", "Add the tops: 2x³ + 3x + 4x³ + 4x.", "{{(6x^3+7x)/sqrt(x^2+1)}}, or {{x(6x^2+7)/sqrt(x^2+1)}}."]}},
      {ex:{q:"Simplify {{(sqrt(1-3x)-x(1/2)(1-3x)^(-1/2)(-3))/(sqrt(1-3x))^2}}.", a:["The second term on top is +3x over 2√(1 − 3x).", "Multiply the top and bottom of the big fraction by 2√(1 − 3x).", "Top: 2(1 − 3x) + 3x, which is 2 − 3x. Bottom: 2(1 − 3x) · √(1 − 3x).", "{{(2-3x)/(2(1-3x)^(3/2))}}"]}},
      {tip:"Check the degree of your answer's top against the work. If a term vanished or the top didn't simplify, a sign from a negative factor was probably dropped."},
      {check:[{q:"What is the conjugate of 2 + √7?", a:"2 − √7."}, {q:"Combine {{sqrt(5-4x)-2x/sqrt(5-4x)}}.", a:"(5 − 4x − 2x) over √(5 − 4x) = (5 − 6x)/√(5 − 4x)."}, {q:"A rectangle is 2√2 + 3 by 3√2 + 8. What is its perimeter?", a:"2(5√2 + 11) = 10√2 + 22."}]}
    ],
    "5.3": [
      {sum:["Square root: y = a√(b(x − h)) + k starts at the locator point (h, k) and goes one direction.", "Cube root: y = a∛(b(x − h)) + k passes through its point of inflection (h, k) and goes both directions.", "a stretches and flips vertically; a negative b flips left-right. Square roots have restricted domain and range; cube roots are all real numbers."]},
      {p:"Read h and k the same way as for any transformed function: inside the radical, x − h shifts **right** h (so x + 3 means left 3); outside, + k shifts **up** k."},
      {table:{head:["", "Square root", "Cube root"], rows:[["Key point", "locator point (h, k), where the graph starts", "point of inflection (h, k), the center"], ["More points", "from (h, k): over 1, 4, 9 and up a, 2a, 3a", "from (h, k): over ±1, ±8 and up/down a, 2a"], ["Domain", "x ≥ h (or x ≤ h if the inside is reversed)", "all real numbers"], ["Range", "y ≥ k if a is positive, y ≤ k if a is negative", "all real numbers"]]}},
      {ex:{q:"Graph y = −3√x + 1. Give the domain and range.", a:["Locator point: (0, 1).", "a is −3: stretched by 3 and flipped down. Points: (1, −2), (4, −5).", "Domain: [0, ∞). Range: (−∞, 1]."]}},
      {ex:{q:"Graph y = −1 + √(4 − x).", a:["Rewrite the inside as −(x − 4): locator point (4, −1), reflected left.", "Points: (3, 0), (0, 1).", "Domain: (−∞, 4]. Range: [−1, ∞)."]}},
      {h:"Average rate of change"},
      {p:"The average rate of change on an interval is the slope between the endpoints: (f(b) − f(a)) / (b − a). For f(x) = √(x + 5) on [−5, 4]: f(4) is 3 and f(−5) is 0, so the rate is 3/9, or 1/3."},
      {check:[{q:"What is the point of inflection of y = 2 + 3∛(x + 3)?", a:"(−3, 2)."}, {q:"Domain and range of y = −2∛(x + 1)?", a:"Both are all real numbers."}, {q:"Average rate of change of f(x) = −√(x − 2) on [2, 6]?", a:"(−2 − 0)/(6 − 2) = −1/2."}]}
    ],
    "5.3.2": [
      {sum:["Isolate the radical, raise both sides to the power that undoes it, then solve.", "Squaring can create extraneous solutions, so check every answer in the original equation.", "If an isolated square root equals a negative number, there is no solution."]},
      {steps:["**Isolate** the radical (get it alone on one side).", "**Raise both sides** to the index: square for a square root, cube for a cube root.", "**Solve** what's left. With two radicals you may have to isolate and square a second time.", "**Check** each answer in the original equation and throw out any that fail."]},
      {p:"Extraneous solutions appear because squaring erases signs: 3 and −3 both square to 9, so the squared equation can't tell the difference between √(…) = 3 and √(…) = −3. The original equation can."},
      {ex:{q:"Solve √(x + 5) = −2x.", a:["Square: x + 5 = 4x².", "4x² − x − 5 = 0 factors as (4x − 5)(x + 1) = 0, so x = 5/4 or x = −1.", "Check 5/4: the left side is positive but −2x is negative. Extraneous.", "Check −1: √4 = 2 and −2(−1) = 2. Works. x = −1."]}},
      {ex:{q:"Solve √x = √(x + 5) − 1.", a:["Square both sides: x = (x + 5) − 2√(x + 5) + 1.", "Simplify: 2√(x + 5) = 6, so √(x + 5) = 3.", "Square again: x + 5 = 9, so x = 4.", "Check: √4 = 2 and √9 − 1 = 2. Works."]}},
      {ex:{q:"Solve {{(x-1)^(2/3)}} − 5 = 11.", a:["Isolate: {{(x-1)^(2/3)}} = 16.", "Raise both sides to the 3/2. Because the numerator 2 is even, there are two answers: x − 1 = ±64.", "x = 65 or x = −63."]}},
      {warn:"2√x + 6 = 4 gives √x = −1. Stop there: a square root is never negative, so there is no solution. Squaring would give x = 1, which doesn't check."},
      {check:[{q:"Solve 3√(x − 1) + 5 = 11.", a:"√(x − 1) = 2, so x = 5."}, {q:"Solve √(8x − 7) = x.", a:"x² − 8x + 7 = 0 gives x = 1 and x = 7; both check."}, {q:"Why must you check answers?", a:"Squaring both sides can introduce solutions that don't satisfy the original equation."}]}
    ],
    "5.3.3": [
      {sum:["The domain is every x the function can accept. Two things restrict it: dividing by zero and even roots of negative numbers.", "Fraction: set the denominator ≠ 0. Even root: set the radicand ≥ 0.", "With both, find each restriction and keep only the x-values that satisfy all of them."]},
      {ex:{q:"Find the domain of g(x) = (x + 3)/(3x² − 14x − 5).", a:["Factor the bottom: (3x + 1)(x − 5).", "x can't be −1/3 or 5.", "(−∞, −1/3) ∪ (−1/3, 5) ∪ (5, ∞)"]}},
      {ex:{q:"Find the domain of g(x) = √(x⁴ − 9x³ + 14x²).", a:["Factor: x²(x − 2)(x − 7). This must be ≥ 0.", "x² is never negative, so the sign depends on (x − 2)(x − 7): positive outside 2 and 7, negative between.", "(−∞, 2] ∪ [7, ∞). (x = 0 is included: it sits inside the first interval.)"]}},
      {ex:{q:"Find the domain of f(x) = √(x − 3)/(x² − 8x + 7).", a:["Root: x ≥ 3.", "Bottom: (x − 1)(x − 7), so x ≠ 1 and x ≠ 7. The 1 is already ruled out.", "[3, 7) ∪ (7, ∞)"]}},
      {tip:"A denominator like x² + 16 is never zero, so it adds no restriction. A cube root accepts any real number, so it adds none either."},
      {check:[{q:"Domain of h(x) = (x − 4)/(x² + 16)?", a:"All real numbers: (−∞, ∞)."}, {q:"Bracket or parenthesis at a value that makes a denominator zero?", a:"Parenthesis. The value is excluded."}, {q:"Domain of √(5 − x)?", a:"5 − x ≥ 0, so x ≤ 5: (−∞, 5]."}]}
    ],
    "5.4": [
      {sum:["Direct variation: y = kx. The ratio y/x is always k, and the graph is a line through the origin.", "Inverse variation: y = k/x. The product xy is always k, and the graph is a hyperbola.", "Joint variation: z = kxy, direct variation with two or more variables. Combined forms put inverse variables in the denominator."]},
      {table:{head:["", "Direct", "Inverse"], rows:[["Equation", "y = kx", "y = k/x"], ["Constant", "k = y/x", "k = xy"], ["As x increases", "y increases (for positive k)", "y decreases"], ["Test a table", "divide: is y/x the same every time?", "multiply: is xy the same every time?"]]}},
      {ex:{q:"Is {(0.2, 40), (0.5, 16), (1, 8), (2, 4)} direct, inverse or neither?", a:["Products: 0.2 · 40 = 8, 0.5 · 16 = 8, 1 · 8 = 8, 2 · 4 = 8.", "xy is constant, so it's inverse variation with k = 8."]}},
      {ex:{q:"x and y vary inversely, and y = −7 when x = 8. Find y when x = 2.", a:["k = xy = 8(−7) = −56.", "The function is y = −56/x.", "y = −56/2 = −28."]}},
      {ex:{q:"z varies jointly with x and y, and z = 60 when x = 2 and y = 3. Find z when x = 4 and y = 9.", a:["z = kxy, so 60 = k(2)(3) and k = 10.", "z = 10xy = 10(4)(9) = 360."]}},
      {p:"To describe an equation in words, read the numerator as \"directly\" (or \"jointly\" when there are several) and the denominator as \"inversely.\" z = kx³/y: z varies directly with the cube of x and inversely with y."},
      {warn:"A line that doesn't pass through the origin, like y = 0.5x − 2, is not direct variation. Direct variation has no constant added on."},
      {check:[{q:"(4, 6) and (x, 4) are from a direct variation. Find x.", a:"k = 6/4 = 3/2, so 4 = (3/2)x and x = 8/3."}, {q:"(√2, √18) is from an inverse variation. Find k.", a:"k = √2 · √18 = √36 = 6."}, {q:"Describe r = k/√t.", a:"r varies inversely with the square root of t."}]}
    ],
    "5.5": [
      {sum:["Inverse functions undo each other: f(g(x)) = x and g(f(x)) = x.", "The inverse swaps x and y, so (a, b) on f becomes (b, a) on the inverse, and the graphs mirror each other across y = x.", "To find it: write y, swap x and y, solve for y. The inverse is a function only if the original passes the horizontal line test."]},
      {p:"Swapping x and y also swaps the domain and range: the domain of the inverse is the range of f, and the range of the inverse is the domain of f."},
      {steps:["Replace f(x) with y.", "Switch x and y.", "Solve for y.", "Replace y with f⁻¹(x)."]},
      {ex:{q:"Find the inverse of f(x) = 1 − 3x.", a:["y = 1 − 3x", "Swap: x = 1 − 3y", "Solve: 3y = 1 − x, so y = (1 − x)/3.", "{{(1-x)/3}}. It's a function; domain and range are all real numbers for both."]}},
      {ex:{q:"Find the inverse of f(x) = −x² + 2. Is it a function?", a:["Swap: x = −y² + 2", "y² = 2 − x, so y = ±√(2 − x).", "Not a function: each x gives two y-values (f fails the horizontal line test).", "f has domain all reals and range (−∞, 2]; the inverse has domain (−∞, 2] and range all reals."]}},
      {ex:{q:"Find the inverse of y = 2√(x − 3).", a:["Swap: x = 2√(y − 3)", "x/2 = √(y − 3), so y = x²/4 + 3.", "The original only outputs y ≥ 0, so the inverse only takes x ≥ 0: half a parabola."]}},
      {warn:"f⁻¹(x) does not mean 1/f(x). The −1 is notation for the inverse function, not an exponent."},
      {check:[{q:"(−2, −3) is on f. What point is on its inverse?", a:"(−3, −2)."}, {q:"How do you verify two functions are inverses?", a:"Compose them both ways; each must simplify to x."}, {q:"Which test tells you whether the inverse is a function?", a:"The horizontal line test on the original."}]}
    ]
  },

  problems(k){
    const R = [0.5, 4];                                   // "assume variables are positive"
    const expr = (secs, src, math, ans, steps, o = {}) => k.ask(secs, src, o.text || "Simplify. Use absolute value where it's needed.",
      [Object.assign({l: o.label || "Simplified", t:"expr", a:ans, v:o.v || ["x"], r:o.r, ph:o.ph || "e.g. 3x√(2x)"}, o.f || {rad:true})], steps, {math, pre:o.pre});
    const pos = (secs, src, math, ans, steps, o = {}) => expr(secs, src, math, ans, steps, Object.assign({text:"Simplify. Assume all variables are positive.", r:R}, o));
    const num = (secs, src, text, ans, steps, o = {}) => k.ask(secs, src, text, [{l:o.label || "Answer", t:"num", a:String(ans), ph:"number or fraction"}], steps, {math:o.math});
    const solve = (secs, src, math, ans, steps, o = {}) => k.ask(secs, src, o.text || "Solve for x. Check for extraneous solutions.",
      [{l:"x =", t:"set", a:ans === "none" ? [] : ans, sol:true, ph:"e.g. 3, -2 or none"}], steps, {eq:math.split(" = ")});
    const mc = (secs, src, text, opts, steps, o = {}) => k.choice(secs, src, text, opts, opts[0], steps, Object.assign({shuffle:true}, o));
    const yn = (secs, src, text, a, why) => k.choice(secs, src, text, ["Yes", "No"], a, [why], {label:"Equivalent?"});

    /* ===== 5.1 Simplifying radicals ===== */
    expr(["5.1"], "5.1 Notes #1", "sqrt(16x^6y^4)", "4|x^3|y^2", ["√16 = 4.", "x⁶ → x³: even index, even power, odd result → |x³|.", "y⁴ → y²: even result, no bars.", "{{4|x^3|y^2}}"], {v:["x","y"]});
    expr(["5.1"], "5.1 Notes #2", "sqrt(81x^5y^10)", "9x^2|y^5|sqrt(x)", ["√81 = 9.", "x⁵ = x⁴ · x → x² comes out (even result), x stays in.", "y¹⁰ → y⁵: odd result → |y⁵|.", "{{9x^2|y^5|sqrt(x)}}"], {v:["x","y"]});
    expr(["5.1"], "5.1 Notes #3", "-2x sqrt(25x^11y^4)", "-10x^6y^2sqrt(x)", ["√25 = 5; x¹¹ = x¹⁰ · x → x⁵ out, x in; y⁴ → y².", "x is under an even root with an odd power, so x ≥ 0 already: no bars needed.", "−2x · 5x⁵y²√x = {{-10x^6y^2sqrt(x)}}"], {v:["x","y"]});
    expr(["5.1"], "5.1 Notes #4", "cbrt(x^9y^10z^17)", "x^3y^3z^5cbrt(yz^2)", ["Divide each exponent by 3: 9 → 3 r 0, 10 → 3 r 1, 17 → 5 r 2.", "Quotients come out, remainders stay: {{x^3y^3z^5cbrt(yz^2)}}"], {v:["x","y","z"]});
    expr(["5.1"], "5.1 Notes #5", "cbrt(-8x^9y^12)", "-2x^3y^4", ["∛(−8) = −2. Odd roots keep the negative.", "x⁹ → x³, y¹² → y⁴.", "{{-2x^3y^4}}"], {v:["x","y"]});
    expr(["5.1"], "5.1 Notes #6", "3x^2cbrt(-16x^7y^11)", "-6x^4y^3cbrt(2xy^2)", ["−16 = −8 · 2 → −2 out, 2 in.", "x⁷ → x² out, x in. y¹¹ → y³ out, y² in.", "3x² · (−2x²y³) = {{-6x^4y^3cbrt(2xy^2)}}"], {v:["x","y"]});
    yn(["5.1"], "5.1 Notes #7", "Is {{2x sqrt(8xy^2)}} equivalent to {{sqrt(32x^3y^2)}}?", "Yes", "It isn't fully simplified, but it is equal: 2x · 2|y|√(2x) = 4x|y|√(2x).");
    yn(["5.1"], "5.1 Notes #7", "Is {{4xy sqrt(2x)}} equivalent to {{sqrt(32x^3y^2)}}?", "No", "y² under an even root gives |y|. Without the bars, the two differ when y is negative.");
    yn(["5.1"], "5.1 Notes #7", "Is {{4x|y|sqrt(2x)}} equivalent to {{sqrt(32x^3y^2)}}?", "Yes", "32 = 16 · 2, x³ = x² · x, y² → |y|.");
    yn(["5.1"], "5.1 Notes #7", "Is {{16x sqrt(xy^2)}} equivalent to {{sqrt(32x^3y^2)}}?", "No", "√32 is 4√2, not 16.");
    pos(["5.1"], "5.1 Notes #8", "sqrt(45x^5y^3)*sqrt(35xy^4)", "15x^3y^3sqrt(7y)", ["Multiply the insides: 1575x⁶y⁷.", "1575 = 225 · 7, x⁶ is a perfect square, y⁷ = y⁶ · y.", "{{15x^3y^3sqrt(7y)}}"], {v:["x","y"], text:"Multiply and simplify. Assume all variables are positive."});
    pos(["5.1"], "5.1 Notes #9", "3sqrt(2x^2y)*sqrt(10xy)", "6xy sqrt(5x)", ["Multiply the insides: 20x³y².", "20 = 4 · 5, x³ = x² · x, y² is a perfect square.", "3 · 2xy√(5x) = {{6xy sqrt(5x)}}"], {v:["x","y"], text:"Multiply and simplify. Assume all variables are positive."});
    expr(["5.1"], "5.1 Notes #10", "cbrt(24x^5y^2)*3cbrt(xy^5)", "6x^2y^2cbrt(3y)", ["Outside: 3. Inside: 24x⁶y⁷.", "24 = 8 · 3 → 2 out; x⁶ → x²; y⁷ → y² out, y in.", "{{6x^2y^2cbrt(3y)}}"], {v:["x","y"], text:"Multiply and simplify."});
    expr(["5.1"], "5.1 Notes #11", "-2cbrt(6x^3y)*2x cbrt(-9xy^6)", "12x^2y^2cbrt(2xy)", ["Outside: −2 · 2x = −4x. Inside: −54x⁴y⁷.", "−54 = −27 · 2 → −3 out; x⁴ → x out, x in; y⁷ → y² out, y in.", "−4x · (−3xy²) = {{12x^2y^2cbrt(2xy)}}"], {v:["x","y"], text:"Multiply and simplify."});
    expr(["5.1"], "5.1 Practice", "sqrt(x^2)", "|x|", ["Even index, even power, odd result (x¹) → absolute value.", "|x|"]);
    expr(["5.1"], "5.1 Practice", "sqrt(x^10)", "|x^5|", ["10 ÷ 2 = 5, an odd power → |x⁵|."]);
    expr(["5.1"], "5.1 Practice", "sqrt(49a^2b^6)", "7|ab^3|", ["√49 = 7; a² → |a|; b⁶ → |b³|.", "{{7|ab^3|}}"], {v:["a","b"]});
    expr(["5.1"], "5.1 Practice", "sqrt(50x^3)", "5x sqrt(2x)", ["50 = 25 · 2 and x³ = x² · x.", "x must be ≥ 0 here, so no bars: {{5x sqrt(2x)}}"]);
    expr(["5.1"], "5.1 Practice", "cbrt(54x^4)", "3x cbrt(2x)", ["54 = 27 · 2 and x⁴ = x³ · x.", "{{3x cbrt(2x)}}"]);
    expr(["5.1"], "5.1 Practice", "sqrt(36x^4y^8)", "6x^2y^4", ["Both results are even powers, so no absolute value: {{6x^2y^4}}"], {v:["x","y"]});
    mc(["5.1"], "5.1 Notes", "When simplifying the nth root of a variable to a power, when do you need absolute value bars?",
      ["Even index, even power, odd power in the result", "Odd index, even power, odd power in the result", "Even index, odd power, even power in the result", "Any time the index of the radical is even"],
      ["The Even-Even-Odd rule: all three conditions must hold."]);
    mc(["5.1"], "5.1 Notes", "How many real 4th roots does 16 have?", ["Two: 2 and −2", "One: 2", "Four: ±2 and ±4", "None"], ["An even root of a positive number has a positive and a negative real root."]);

    /* ===== 5.1.2 Rational exponents ===== */
    num(["5.1.2"], "5.1 Notes #12", "Evaluate.", 3, ["The cube root of 27 is 3."], {math:"27^(1/3)"});
    num(["5.1.2"], "5.1 Notes #13", "Evaluate.", 4, ["Cube root first: ∛8 = 2.", "Then square: 2² = 4."], {math:"8^(2/3)"});
    num(["5.1.2"], "5.1 Notes #14", "Evaluate.", "1/8", ["−0.75 = −3/4.", "4th root of 16 is 2; 2³ = 8.", "The negative exponent gives the reciprocal: 1/8."], {math:"16^(-0.75)"});
    mc(["5.1.2"], "5.1 Notes #15", "Write {{x^(-1/2)}} in radical form.", ["{{1/sqrt(x)}}", "{{-sqrt(x)}}", "{{sqrt(x)/2}}", "{{-1/x^2}}"], ["The 1/2 power is a square root.", "The negative sign means reciprocal, not a negative number: {{1/sqrt(x)}}"]);
    num(["5.1.2"], "5.1 Notes #16", "Evaluate.", 2, ["√64 = 8 and ∛64 = 4.", "8/4 = 2. (Or subtract exponents: 64^(1/6) = 2.)"], {math:"64^(1/2)/64^(1/3)"});
    num(["5.1.2"], "5.1 Notes #17", "Evaluate.", 343, ["Multiply the exponents: 5/2 · 3/5 = 3/2.", "49^(3/2): √49 = 7, and 7³ = 343."], {math:"(49^(5/2))^(3/5)"});
    k.ask(["5.1.2"], "5.1 Notes #18", "Write −⁴√(y⁵) in exponential form.", [{l:"Exponential form", t:"expr", a:"-y^(5/4)", v:["y"], r:R, ph:"e.g. x^(2/3)"}], ["Index 4 is the denominator, power 5 is the numerator.", "{{-y^(5/4)}}"]);
    k.ask(["5.1.2"], "5.1 Notes #19", "Write (⁴√(3xy))⁸ in exponential form and simplify.", [{l:"Simplified", t:"expr", a:"9x^2y^2", v:["x","y"], r:R, ph:"e.g. 4x^2y"}], ["(3xy)^(8/4) = (3xy)²", "{{9x^2y^2}}"]);
    pos(["5.1.2"], "5.1 Notes #20", "(27x^9y^(1/2))^(2/3)", "9x^6y^(1/3)", ["27^(2/3) = 3² = 9.", "x: 9 · 2/3 = 6. y: 1/2 · 2/3 = 1/3.", "{{9x^6y^(1/3)}}"], {v:["x","y"], f:{}, ph:"e.g. 4x^2y^(1/2)"});
    pos(["5.1.2"], "5.1 Notes #21", "6x^(2/3)*12x^(3/6)", "72x^(7/6)", ["6 · 12 = 72.", "Add exponents: 2/3 + 1/2 = 4/6 + 3/6 = 7/6.", "{{72x^(7/6)}}"], {f:{}, ph:"e.g. 8x^(5/4)"});
    pos(["5.1.2"], "5.1 Notes #22", "(125x^12/(64y^9))^(1/3)", "5x^4/(4y^3)", ["Cube root of each part: ∛125 = 5, ∛64 = 4.", "x¹² → x⁴, y⁹ → y³.", "{{5x^4/(4y^3)}}"], {v:["x","y"], f:{simp:true}, ph:"e.g. 2x^3/(3y)"});
    pos(["5.1.2"], "5.1 Notes #23", "sqrt(6x^6)/sqrt(5x^3y^7)", "x sqrt(30xy)/(5y^4)", ["One radical: {{sqrt(6x^3/(5y^7))}}", "Pull out squares: {{x sqrt(6x)/(y^3sqrt(5y))}}", "Multiply top and bottom by √(5y): {{x sqrt(30xy)/(5y^4)}}"], {v:["x","y"], text:"Simplify and rationalize the denominator. Assume all variables are positive."});
    pos(["5.1.2"], "5.1 Notes #24", "21sqrt(5)/(14sqrt(10a))", "3sqrt(2a)/(4a)", ["21/14 = 3/2, and √5/√(10a) = 1/√(2a).", "{{3/(2sqrt(2a))}} → multiply top and bottom by √(2a).", "{{3sqrt(2a)/(4a)}}"], {v:["a"], text:"Simplify and rationalize the denominator. Assume all variables are positive."});
    mc(["5.1.2"], "5.1 Notes #25", "Rationalize the denominator of 1 / ⁴√27.", ["⁴√3 / 3", "⁴√27 / 27", "⁴√9 / 3", "⁴√3 / 9"], ["27 = 3³. One more 3 makes 3⁴ = 81.", "Multiply top and bottom by ⁴√3: the bottom becomes ⁴√81 = 3.", "⁴√3 / 3"]);
    mc(["5.1.2"], "5.1 Notes #26", "Rationalize the denominator of 2 / ⁵√5.", ["2 · ⁵√625 / 5", "2 · ⁵√5 / 5", "2 · ⁵√25 / 5", "⁵√625 / 25"], ["You need 5⁵ under the root, so multiply by ⁵√(5⁴) = ⁵√625.", "The bottom becomes ⁵√(5⁵) = 5.", "2 · ⁵√625 / 5"]);
    pos(["5.1.2"], "5.1 Notes #27", "12/cbrt(9x^2)", "4cbrt(3x)/x", ["9x² = 3²x²: one more 3 and one more x make perfect cubes.", "Multiply top and bottom by ∛(3x): {{12cbrt(3x)/(3x)}}", "Reduce: {{4cbrt(3x)/x}}"], {text:"Rationalize the denominator. Assume all variables are positive."});
    pos(["5.1.2"], "5.1 Notes #28", "cbrt(12)/cbrt(6x^2y)", "cbrt(2xy^2)/(xy)", ["One radical: {{cbrt(2/(x^2y))}}", "To make the bottom a perfect cube, multiply inside by xy² over xy².", "{{cbrt(2xy^2)/(xy)}}"], {v:["x","y"], text:"Simplify and rationalize the denominator. Assume all variables are positive."});
    num(["5.1.2"], "5.1 Practice", "Evaluate.", 125, ["√25 = 5, and 5³ = 125."], {math:"25^(3/2)"});
    num(["5.1.2"], "5.1 Practice", "Evaluate.", 4, ["5th root of 32 is 2, and 2² = 4."], {math:"32^(2/5)"});
    num(["5.1.2"], "5.1 Practice", "Evaluate.", "1/3", ["4th root of 81 is 3.", "Negative exponent → reciprocal: 1/3."], {math:"81^(-1/4)"});
    pos(["5.1.2"], "5.1 Practice", "6/sqrt(3)", "2sqrt(3)", ["Multiply top and bottom by √3: {{6sqrt(3)/3}}", "{{2sqrt(3)}}"], {v:[], text:"Rationalize the denominator."});
    pos(["5.1.2"], "5.1 Practice", "x^(1/2)*x^(1/3)", "x^(5/6)", ["Add exponents: 1/2 + 1/3 = 5/6."], {f:{}, ph:"e.g. x^(3/4)"});
    pos(["5.1.2"], "5.1 Practice", "1/cbrt(4)", "cbrt(2)/2", ["4 = 2². One more 2 makes 2³.", "Multiply top and bottom by ∛2: {{cbrt(2)/2}}"], {v:[], text:"Rationalize the denominator."});

    /* ===== 5.2 Adding, subtracting, multiplying ===== */
    const comb = (src, math, ans, steps, o = {}) => expr(["5.2"], src, math, ans, steps, Object.assign({text:"Simplify. Assume all variables are positive.", r:R, v:[], f:{rad:true, combine:true}, ph:"e.g. 5√3"}, o));
    comb("5.2 Notes #1", "2sqrt(5)+6sqrt(5)", "8sqrt(5)", ["Like radicals: add the coefficients.", "{{8sqrt(5)}}"]);
    comb("5.2 Notes #2", "7sqrt(3)-sqrt(3)", "6sqrt(3)", ["√3 has a coefficient of 1: 7 − 1 = 6.", "{{6sqrt(3)}}"]);
    mc(["5.2"], "5.2 Notes #3", "Simplify {{sqrt(3)+6sqrt(5)}}.", ["Already simplest: √3 + 6√5", "Add everything: it equals 7√8", "Multiply radicands: it's 7√15", "Add the radicands only: 6√8"], ["The radicands (3 and 5) are different and neither simplifies, so these are not like radicals."]);
    comb("5.2 Notes #4", "6sqrt(3)-sqrt(27)", "3sqrt(3)", ["√27 = 3√3.", "6√3 − 3√3 = {{3sqrt(3)}}"]);
    comb("5.2 Notes #5", "sqrt(20)+3sqrt(45)-2sqrt(5)", "9sqrt(5)", ["√20 = 2√5 and 3√45 = 9√5.", "2√5 + 9√5 − 2√5 = {{9sqrt(5)}}"]);
    comb("5.2 Notes #6", "5sqrt(12)+sqrt(27)-2sqrt(48)", "5sqrt(3)", ["5√12 = 10√3, √27 = 3√3, 2√48 = 8√3.", "10 + 3 − 8 = 5 → {{5sqrt(3)}}"]);
    comb("5.2 Notes #7", "4sqrt(16x)-2sqrt(x)", "14sqrt(x)", ["4√(16x) = 16√x.", "16√x − 2√x = {{14sqrt(x)}}"], {v:["x"]});
    comb("5.2 Notes #8", "sqrt(36x^5)+5x^2sqrt(4x)", "16x^2sqrt(x)", ["√(36x⁵) = 6x²√x.", "5x²√(4x) = 10x²√x.", "{{16x^2sqrt(x)}}"], {v:["x"]});
    comb("5.2 Notes #9", "cbrt(24)+5cbrt(81)-2cbrt(3)", "15cbrt(3)", ["∛24 = 2∛3 and 5∛81 = 15∛3.", "2 + 15 − 2 = 15 → {{15cbrt(3)}}"]);
    comb("5.2 Notes #10", "x cbrt(40x)+cbrt(135x^4)", "5x cbrt(5x)", ["x∛(40x) = 2x∛(5x).", "∛(135x⁴) = 3x∛(5x).", "{{5x cbrt(5x)}}"], {v:["x"]});
    yn(["5.2"], "5.2 Notes #11", "Is {{(8-1)sqrt(3)}} equivalent to {{sqrt(48)+sqrt(27)}}?", "Yes", "√48 + √27 = 4√3 + 3√3 = 7√3, and (8 − 1)√3 = 7√3.");
    yn(["5.2"], "5.2 Notes #11", "Is {{4sqrt(3)+3sqrt(3)}} equivalent to {{sqrt(48)+sqrt(27)}}?", "Yes", "√48 = 4√3 and √27 = 3√3.");
    yn(["5.2"], "5.2 Notes #11", "Is 10 equivalent to {{sqrt(48)+sqrt(27)}}?", "No", "The sum is 7√3 ≈ 12.1.");
    yn(["5.2"], "5.2 Notes #11", "Is {{sqrt(75)}} equivalent to {{sqrt(48)+sqrt(27)}}?", "No", "You can't add radicands. √75 = 5√3, but the sum is 7√3.");
    comb("5.2 Notes #12", "(2-3sqrt(2))(5-4sqrt(2))", "34-23sqrt(2)", ["FOIL: 10 − 8√2 − 15√2 + 12(2)", "{{34-23sqrt(2)}}"], {text:"Multiply and simplify."});
    num(["5.2"], "5.2 Notes #13", "Multiply.", -1, ["Conjugates: a² − b = 4 − 5 = −1."], {math:"(2+sqrt(5))(2-sqrt(5))"});
    comb("5.2 Notes #14", "(4+3sqrt(6))^2", "70+24sqrt(6)", ["a² + 2ab + b² = 16 + 24√6 + 9(6)", "{{70+24sqrt(6)}}"], {text:"Multiply and simplify."});
    comb("5.2 Notes #15", "(2x-sqrt(x))(3+4sqrt(x))", "8x sqrt(x)+2x-3sqrt(x)", ["FOIL: 6x + 8x√x − 3√x − 4x (since √x · √x = x)", "Combine 6x − 4x: {{8x sqrt(x)+2x-3sqrt(x)}}"], {v:["x"], text:"Multiply and simplify. Assume all variables are positive."});
    num(["5.2"], "5.2 Notes #16", "Multiply and simplify. Assume x ≥ 3.", 6, ["Conjugates: (x + 3) − (x − 3) = 6."], {math:"(sqrt(x+3)-sqrt(x-3))(sqrt(x+3)+sqrt(x-3))"});
    comb("5.2 Practice", "3sqrt(8)+sqrt(18)", "9sqrt(2)", ["3√8 = 6√2 and √18 = 3√2.", "{{9sqrt(2)}}"]);
    comb("5.2 Practice", "sqrt(75)-sqrt(12)", "3sqrt(3)", ["5√3 − 2√3 = {{3sqrt(3)}}"]);
    comb("5.2 Practice", "(3+sqrt(2))(1-sqrt(2))", "1-2sqrt(2)", ["3 − 3√2 + √2 − 2", "{{1-2sqrt(2)}}"], {text:"Multiply and simplify."});
    num(["5.2"], "5.2 Practice", "Multiply.", 22, ["Conjugates: 5² − 3 = 22."], {math:"(5-sqrt(3))(5+sqrt(3))"});

    /* ===== 5.2.2 Rationalizing & combining ===== */
    const rat = (src, math, ans, steps) => expr(["5.2.2"], src, math, ans, steps, {text:"Rationalize the denominator and simplify.", v:[], ph:"e.g. (3+√5)/2"});
    rat("5.2 Notes #17", "(5+sqrt(3))/sqrt(7)", "(5sqrt(7)+sqrt(21))/7", ["Multiply top and bottom by √7.", "Top: 5√7 + √21. Bottom: 7.", "{{(5sqrt(7)+sqrt(21))/7}}"]);
    rat("5.2 Notes #18", "sqrt(2)/(8+sqrt(2))", "(4sqrt(2)-1)/31", ["Multiply by the conjugate 8 − √2.", "Top: 8√2 − 2. Bottom: 64 − 2 = 62.", "Divide by 2: {{(4sqrt(2)-1)/31}}"]);
    rat("5.2 Notes #19", "10/(3-sqrt(5))", "(15+5sqrt(5))/2", ["Multiply by the conjugate 3 + √5.", "Bottom: 9 − 5 = 4. Top: 10(3 + √5).", "Reduce 10/4: {{(15+5sqrt(5))/2}}"]);
    mc(["5.2.2"], "5.2 Notes #20", "Rationalize the denominator of {{(sqrt(13)-3)/(2+sqrt(7))}}.",
      ["{{(sqrt(91)-2sqrt(13)-3sqrt(7)+6)/3}}", "{{(2sqrt(13)-sqrt(91)-6+3sqrt(7))/3}}", "{{(sqrt(91)-2sqrt(13)-3sqrt(7)+6)/11}}", "{{(2sqrt(13)+sqrt(91)-6-3sqrt(7))/3}}"],
      ["Multiply by the conjugate 2 − √7. Bottom: 4 − 7 = −3.", "Top: 2√13 − √91 − 6 + 3√7.", "Dividing by −3 flips every sign: {{(sqrt(91)-2sqrt(13)-3sqrt(7)+6)/3}}"]);
    k.ask(["5.2.2"], "5.2 Notes #21", "A rectangle has width 2√2 + 3 and length 3√2 + 8. Find its perimeter and area.",
      [{l:"Perimeter", t:"expr", a:"10sqrt(2)+22", v:[], rad:true, combine:true, ph:"e.g. 6√2+10"}, {l:"Area", t:"expr", a:"36+25sqrt(2)", v:[], rad:true, combine:true, ph:"e.g. 12+7√2"}],
      ["Perimeter: 2(2√2 + 3 + 3√2 + 8) = 2(5√2 + 11) = {{10sqrt(2)+22}}", "Area: (2√2 + 3)(3√2 + 8) = 12 + 16√2 + 9√2 + 24 = {{36+25sqrt(2)}}"]);
    const one = (src, math, ans, r, steps) => k.ask(["5.2.2"], src, "Perform the operation and simplify completely. Write the answer as one fraction with no negative exponents.",
      [{l:"Simplified", t:"expr", a:ans, v:["x"], r, simp:true, single:true, ph:"e.g. (3x+1)/sqrt(x+2)"}], steps, {math});
    one("5.2 Notes #22", "x(2x^2+3)/sqrt(x^2+1)+4x sqrt(x^2+1)", "x(6x^2+7)/sqrt(x^2+1)", [-3, 3], ["Write the second term over √(x² + 1): {{4x(x^2+1)/sqrt(x^2+1)}}", "Add the tops: 2x³ + 3x + 4x³ + 4x = 6x³ + 7x", "{{x(6x^2+7)/sqrt(x^2+1)}}"]);
    one("5.2 Notes #23", "3x^3/sqrt(x^2-1)+6x sqrt(x^2-1)", "3x(3x^2-2)/sqrt(x^2-1)", [1.2, 4], ["Second term: {{6x(x^2-1)/sqrt(x^2-1)}}", "Tops: 3x³ + 6x³ − 6x = 9x³ − 6x", "{{3x(3x^2-2)/sqrt(x^2-1)}}"]);
    one("5.2 Notes #24", "sqrt(5-4x)-2x/sqrt(5-4x)", "(5-6x)/sqrt(5-4x)", [-4, 1], ["First term: {{(5-4x)/sqrt(5-4x)}}", "Tops: 5 − 4x − 2x", "{{(5-6x)/sqrt(5-4x)}}"]);
    one("5.2 Notes #25", "(2x sqrt(x-1)-x^2/(2sqrt(x-1)))/(x-1)", "x(3x-4)/(2(x-1)^(3/2))", [1.2, 5], ["Multiply the top and bottom by 2√(x − 1).", "Top: 4x(x − 1) − x² = 3x² − 4x. Bottom: 2(x − 1)√(x − 1).", "{{x(3x-4)/(2(x-1)^(3/2))}}"]);
    one("5.2 Notes #26", "(sqrt(1-3x)-x(1/2)(1-3x)^(-1/2)(-3))/(sqrt(1-3x))^2", "(2-3x)/(2(1-3x)^(3/2))", [-4, 0.3], ["Top: {{sqrt(1-3x)+3x/(2sqrt(1-3x))}}. Bottom: 1 − 3x.", "Multiply top and bottom by 2√(1 − 3x): top becomes 2(1 − 3x) + 3x = 2 − 3x.", "{{(2-3x)/(2(1-3x)^(3/2))}}"]);
    one("5.2 Notes #27", "(4x^3sqrt(2x+1)-x^4(1/2)(2x+1)^(-1/2)(2))/(sqrt(2x+1))^2", "x^3(7x+4)/(2x+1)^(3/2)", [-0.4, 4], ["Top: {{4x^3sqrt(2x+1)-x^4/sqrt(2x+1)}}. Bottom: 2x + 1.", "Multiply top and bottom by √(2x + 1): top becomes 4x³(2x + 1) − x⁴ = 7x⁴ + 4x³.", "{{x^3(7x+4)/(2x+1)^(3/2)}}"]);
    one("5.2 Notes #28", "(x^2-4)^(1/2)(4)(2x+1)^3(2)+(2x+1)^4(1/2)(x^2-4)^(-1/2)(2x)", "(2x+1)^3(10x^2+x-32)/sqrt(x^2-4)", [2.2, 5], ["Tidy: {{8(2x+1)^3sqrt(x^2-4)+x(2x+1)^4/sqrt(x^2-4)}}", "Common denominator √(x² − 4), then factor out (2x + 1)³: 8(x² − 4) + x(2x + 1) = 10x² + x − 32", "{{(2x+1)^3(10x^2+x-32)/sqrt(x^2-4)}}"]);
    one("5.2 Notes #29", "(3x+5)^(1/4)(3)(x^2+1)^2(2x)+(x^2+1)^3(1/4)(3x+5)^(-3/4)(3)", "3(x^2+1)^2(25x^2+40x+1)/(4(3x+5)^(3/4))", [-1.5, 4], ["Tidy: {{6x(x^2+1)^2(3x+5)^(1/4)+3(x^2+1)^3/(4(3x+5)^(3/4))}}", "Common denominator 4(3x + 5)^(3/4): the first top becomes 24x(x² + 1)²(3x + 5).", "Factor out 3(x² + 1)²: 8x(3x + 5) + (x² + 1) = 25x² + 40x + 1", "{{3(x^2+1)^2(25x^2+40x+1)/(4(3x+5)^(3/4))}}"]);
    rat("5.2 Practice", "4/(sqrt(5)-1)", "sqrt(5)+1", ["Multiply by √5 + 1. Bottom: 5 − 1 = 4.", "{{4(sqrt(5)+1)/4}} = {{sqrt(5)+1}}"]);
    rat("5.2 Practice", "(1+sqrt(3))/(2-sqrt(3))", "5+3sqrt(3)", ["Multiply by 2 + √3. Bottom: 4 − 3 = 1.", "Top: 2 + √3 + 2√3 + 3 = {{5+3sqrt(3)}}"]);
    mc(["5.2.2"], "5.2 Notes", "What do you multiply by to rationalize {{5/(4+sqrt(6))}}?", ["{{(4-sqrt(6))/(4-sqrt(6))}}", "{{(4+sqrt(6))/(4+sqrt(6))}}", "{{sqrt(6)/sqrt(6)}}", "{{(4-sqrt(6))/(4+sqrt(6))}}"], ["Use the conjugate, over itself so the value doesn't change."]);

    /* ===== 5.3 Graphing ===== */
    const DOM = "Domain", RNG = "Range", ALL = "(−∞, ∞)";
    const graph = (src, eq, ptLabel, pt, dom, domOpts, rng, rngOpts, steps) => k.ask(["5.3"], src, `For ${eq}, give the key point, the domain and the range.`,
      [{l:ptLabel, t:"pts", a:[pt], ph:"(h, k)"}, {l:DOM, t:"choice", opts:domOpts, a:dom}, {l:RNG, t:"choice", opts:rngOpts, a:rng}], steps);
    graph("5.3 Notes #1", "y = −3√x + 1", "Locator point", ["0", "1"], "[0, ∞)", ["[0, ∞)", "(−∞, 0]", "[1, ∞)", ALL], "(−∞, 1]", ["(−∞, 1]", "[1, ∞)", "[0, ∞)", ALL],
      ["h = 0, k = 1 → locator point (0, 1).", "The radicand x must be ≥ 0 → domain [0, ∞).", "a = −3 flips the graph down from y = 1 → range (−∞, 1]."]);
    graph("5.3 Notes #2", "y = 2 + 3∛(x + 3)", "Point of inflection", ["-3", "2"], ALL, [ALL, "[−3, ∞)", "(−∞, −3]", "[2, ∞)"], ALL, [ALL, "[2, ∞)", "(−∞, 2]", "[−3, ∞)"],
      ["x + 3 → left 3; + 2 → up 2: point of inflection (−3, 2).", "A cube root takes and gives every real number."]);
    graph("5.3 Notes #3", "y = −1 + √(4 − x)", "Locator point", ["4", "-1"], "(−∞, 4]", ["(−∞, 4]", "[4, ∞)", "[−4, ∞)", ALL], "[−1, ∞)", ["[−1, ∞)", "(−∞, −1]", "[4, ∞)", ALL],
      ["4 − x = −(x − 4): h = 4, reflected left. k = −1. Locator point (4, −1).", "4 − x ≥ 0 → x ≤ 4.", "The root is added, so the graph rises from y = −1 → range [−1, ∞)."]);
    graph("5.3 Notes #4", "y = −2∛(x + 1)", "Point of inflection", ["-1", "0"], ALL, [ALL, "[−1, ∞)", "(−∞, −1]", "[0, ∞)"], ALL, [ALL, "(−∞, 0]", "[0, ∞)", "[−1, ∞)"],
      ["x + 1 → left 1, no vertical shift: (−1, 0).", "Cube root: domain and range are all real numbers."]);
    num(["5.3"], "5.3 Notes #5", "Find the average rate of change of f(x) = √(x + 5) on −5 ≤ x ≤ 4.", "1/3", ["f(4) = √9 = 3 and f(−5) = 0.", "(3 − 0)/(4 − (−5)) = 3/9 = 1/3"]);
    num(["5.3"], "5.3 Notes #6", "Find the average rate of change of f(x) = −√(x − 2) on 2 ≤ x ≤ 6.", "-1/2", ["f(6) = −2 and f(2) = 0.", "(−2 − 0)/(6 − 2) = −1/2"]);
    mc(["5.3"], "5.3 Notes", "For y = a√(x − h) + k, which points do you plot after the locator point?", ["Over 1, 4, 9 and up a, 2a, 3a", "Over 1, 2, 3 and up a, 2a, 3a", "Over 1, 8, 27 and up a, 2a, 3a", "Over a, 2a, 3a and up 1, 4, 9"], ["√1 = 1, √4 = 2, √9 = 3, each multiplied by the stretch a."]);
    mc(["5.3"], "5.3 Practice", "Which function has a locator point at (2, −5) and opens to the right and up?", ["y = √(x − 2) − 5", "y = √(x + 2) − 5", "y = √(x − 5) + 2", "y = −√(x − 2) − 5"], ["x − 2 shifts right 2; − 5 shifts down 5; a positive a goes up."]);
    mc(["5.3"], "5.3 Practice", "What is the range of y = −√(x + 6) + 4?", ["(−∞, 4]", "[4, ∞)", "[−6, ∞)", "(−∞, −6]"], ["The negative in front flips the graph down from k = 4."]);

    /* ===== 5.3.2 Solving ===== */
    solve(["5.3.2"], "5.3 Notes #5", "sqrt(x+5) = -2x", ["-1"], ["Square: x + 5 = 4x² → 4x² − x − 5 = 0", "(4x − 5)(x + 1) = 0 → x = 5/4 or x = −1", "Check 5/4: √6.25 = 2.5 but −2(5/4) = −2.5. Extraneous.", "Check −1: √4 = 2 and −2(−1) = 2. ✓"]);
    solve(["5.3.2"], "5.3 Notes #6", "-sqrt(x-2) = x-4", ["3"], ["Multiply by −1: √(x − 2) = 4 − x", "Square: x − 2 = 16 − 8x + x² → x² − 9x + 18 = 0 → x = 3 or 6", "Check 3: −√1 = −1 and 3 − 4 = −1. ✓", "Check 6: −√4 = −2 but 6 − 4 = 2. Extraneous."]);
    solve(["5.3.2"], "5.3 Notes #7", "3sqrt(x-1)+5 = 11", ["5"], ["Isolate: 3√(x − 1) = 6 → √(x − 1) = 2", "Square: x − 1 = 4 → x = 5", "Check: 3(2) + 5 = 11. ✓"]);
    solve(["5.3.2"], "5.3 Notes #8", "sqrt(8x-7) = x", ["1", "7"], ["Square: 8x − 7 = x² → x² − 8x + 7 = 0", "(x − 1)(x − 7) = 0 → x = 1 or 7", "Check: √1 = 1 ✓ and √49 = 7 ✓. Both work."]);
    solve(["5.3.2"], "5.3 Notes #9", "2sqrt(x)+6 = 4", "none", ["Isolate: 2√x = −2 → √x = −1", "A square root is never negative, so there is no solution."]);
    solve(["5.3.2"], "5.3 Notes #10", "sqrt(17-2x)+3 = x", ["2+2sqrt(3)"], ["Isolate: √(17 − 2x) = x − 3", "Square: 17 − 2x = x² − 6x + 9 → x² − 4x − 8 = 0", "Quadratic formula: x = 2 ± 2√3", "x − 3 must be ≥ 0. 2 − 2√3 ≈ −1.46 fails; 2 + 2√3 ≈ 5.46 works."]);
    solve(["5.3.2"], "5.3 Notes #11", "sqrt(5x-2) = 2sqrt(x)", ["2"], ["Square both sides: 5x − 2 = 4x", "x = 2", "Check: √8 = 2√2 ✓"]);
    solve(["5.3.2"], "5.3 Notes #12", "sqrt(x) = sqrt(x+5)-1", ["4"], ["Square: x = x + 5 − 2√(x + 5) + 1", "2√(x + 5) = 6 → √(x + 5) = 3 → x = 4", "Check: √4 = 2 and √9 − 1 = 2. ✓"]);
    solve(["5.3.2"], "5.3 Notes #13", "sqrt(1-x)-1 = x", ["0"], ["Isolate: √(1 − x) = x + 1", "Square: 1 − x = x² + 2x + 1 → x² + 3x = 0 → x = 0 or −3", "Check 0: 1 − 1 = 0 ✓", "Check −3: √4 − 1 = 1, not −3. Extraneous."]);
    solve(["5.3.2"], "5.3 Notes #14", "(x-1)^(2/3)-5 = 11", ["65", "-63"], ["Isolate: {{(x-1)^(2/3)}} = 16", "Raise to the 3/2; the even numerator gives ±: x − 1 = ±64", "x = 65 or x = −63"]);
    k.ask(["5.3.2"], "5.3 Notes #15", "If f(x) = x^(1/2) and g(x) = 3x − 2, solve f(g(x)) = 5.", [{l:"x =", t:"set", a:["9"], sol:true, ph:"e.g. 3, -2 or none"}], ["f(g(x)) = √(3x − 2)", "√(3x − 2) = 5 → 3x − 2 = 25 → x = 9"]);
    k.ask(["5.3.2"], "5.3 Notes #16", "If f(x) = (x + 3)^(3/2) and g(x) = 3, solve (f/g)(x) = 9.", [{l:"x =", t:"set", a:["6"], sol:true, ph:"e.g. 3, -2 or none"}], ["(x + 3)^(3/2) / 3 = 9 → (x + 3)^(3/2) = 27", "Raise to the 2/3: x + 3 = 9 → x = 6"]);
    solve(["5.3.2"], "5.3 Practice", "sqrt(x+3) = 5", ["22"], ["Square: x + 3 = 25 → x = 22"]);
    solve(["5.3.2"], "5.3 Practice", "cbrt(2x-1) = 3", ["14"], ["Cube: 2x − 1 = 27 → x = 14", "Cubing never creates extraneous solutions."]);
    solve(["5.3.2"], "5.3 Practice", "sqrt(2x+3) = x", ["3"], ["Square: 2x + 3 = x² → x² − 2x − 3 = 0 → x = 3 or −1", "Check −1: √1 = 1, not −1. Extraneous. x = 3 works."]);
    solve(["5.3.2"], "5.3 Practice", "sqrt(x-4) = -3", "none", ["A square root can't equal a negative number."]);
    mc(["5.3.2"], "5.3 Notes", "Why can squaring both sides of an equation create extraneous solutions?", ["Squaring hides the sign, so a false line like −3 = 3 turns true", "Squaring always doubles the number of real solutions you get", "Squaring changes the domain of the equation to all real numbers", "Squaring only works when both sides are positive whole numbers"], ["(−3)² = 3², so the squared equation accepts values the original rejects."]);

    /* ===== 5.3.3 Domain ===== */
    const dom = (src, f, opts, steps) => mc(["5.3.3"], src, `Find the domain of ${f}.`, opts, steps, {label:"Domain"});
    dom("5.3 Notes #17", "g(x) = √(x⁴ − 9x³ + 14x²)", ["(−∞, 2] ∪ [7, ∞)", "[2, 7]", "(−∞, 0] ∪ [2, 7]", "[0, 2] ∪ [7, ∞)"], ["Factor: x²(x − 2)(x − 7) ≥ 0", "x² ≥ 0 always, so you need (x − 2)(x − 7) ≥ 0: x ≤ 2 or x ≥ 7.", "x = 0 makes the radicand 0, which is allowed and already inside (−∞, 2]."]);
    dom("5.3 Notes #18", "g(x) = (x + 3)/(3x² − 14x − 5)", ["(−∞, −1/3) ∪ (−1/3, 5) ∪ (5, ∞)", "(−∞, −5) ∪ (−5, 1/3) ∪ (1/3, ∞)", "(−∞, −3) ∪ (−3, ∞)", "(−∞, −1/3] ∪ [5, ∞)"], ["Factor the denominator: (3x + 1)(x − 5)", "x ≠ −1/3 and x ≠ 5"]);
    dom("5.3 Notes #19", "h(x) = (x − 4)/(x² + 16)", ["(−∞, ∞)", "(−∞, 4) ∪ (4, ∞)", "(−∞, −4) ∪ (−4, 4) ∪ (4, ∞)", "[4, ∞)"], ["x² + 16 is never 0, so nothing is excluded."]);
    dom("5.3 Notes #20", "f(x) = √(x − 3)/(x² − 8x + 7)", ["[3, 7) ∪ (7, ∞)", "[3, ∞)", "(−∞, 1) ∪ (1, 7) ∪ (7, ∞)", "(3, 7) ∪ (7, ∞)"], ["Root: x − 3 ≥ 0 → x ≥ 3", "Denominator: (x − 1)(x − 7) ≠ 0 → x ≠ 1, 7", "Together: x ≥ 3 but not 7."]);
    dom("5.3 Practice", "f(x) = √(2x − 6)", ["[3, ∞)", "(3, ∞)", "(−∞, 3]", "[−3, ∞)"], ["2x − 6 ≥ 0 → x ≥ 3"]);
    dom("5.3 Practice", "f(x) = 1/√(x + 4)", ["(−4, ∞)", "[−4, ∞)", "(−∞, −4)", "(−∞, −4) ∪ (−4, ∞)"], ["The radicand must be ≥ 0, and the denominator can't be 0, so x + 4 > 0."]);
    dom("5.3 Practice", "f(x) = ∛(x − 9)", ["(−∞, ∞)", "[9, ∞)", "(−∞, 9]", "(9, ∞)"], ["Cube roots accept every real number."]);
    mc(["5.3.3"], "5.3 Notes", "Which two situations restrict the domain of a function?", ["Dividing by zero and even roots of negatives", "Dividing by zero and odd roots of negatives", "Negative exponents and even roots of zero", "Adding fractions and squaring negatives"], ["From the notes: f(x) = 1/x needs x ≠ 0, and f(x) = √x needs x ≥ 0."]);

    /* ===== 5.4 Variation ===== */
    const dv = (src, set, a, why) => k.choice(["5.4"], src, `Is the relationship direct, inverse or neither? ${set}`, ["Direct", "Inverse", "Neither"], a, [why], {label:"Type of variation"});
    dv("5.4 Notes #1", "{(0.2, 8), (0.5, 20), (1, 40), (1.5, 60)}", "Direct", "y/x = 40 for every pair, so y = 40x.");
    dv("5.4 Notes #2", "{(0.2, 40), (0.5, 16), (1, 8), (2, 4)}", "Inverse", "xy = 8 for every pair, so y = 8/x.");
    dv("5.4 Notes #3", "{(0.5, 40), (1.2, 12), (2, 10), (2.5, 6)}", "Neither", "The ratios (80, 10, 5, 2.4) differ, and so do the products (20, 14.4, 20, 15).");
    dv("5.4 Notes #4", "{(0, −2), (2, −1), (6, 1), (12, 4)}", "Neither", "It's linear (y = 0.5x − 2) but doesn't pass through the origin, so it isn't direct variation.");
    k.ask(["5.4"], "5.4 Notes #5", "x and y vary inversely, and y = −7 when x = 8. Find the constant of variation, then find y when x = 2.",
      [{l:"k =", t:"num", a:"-56", ph:"number"}, {l:"y =", t:"num", a:"-28", ph:"number"}], ["k = xy = 8(−7) = −56, so y = −56/x.", "y = −56/2 = −28"]);
    num(["5.4"], "5.4 Notes #6", "(4, 6) and (x, 4) are from the same direct variation. Find x.", "8/3", ["k = y/x = 6/4 = 3/2", "4 = (3/2)x → x = 8/3"], {label:"x ="});
    num(["5.4"], "5.4 Notes #7", "(√2, √18) is from an inverse variation. Find the constant of variation.", 6, ["k = xy = √2 · √18 = √36 = 6"], {label:"k ="});
    k.ask(["5.4"], "5.4 Notes #8", "z varies jointly with x and y, and z = 60 when x = 2 and y = 3. Find k, then find z when x = 4 and y = 9.",
      [{l:"k =", t:"num", a:"10", ph:"number"}, {l:"z =", t:"num", a:"360", ph:"number"}], ["z = kxy → 60 = k(2)(3) → k = 10", "z = 10(4)(9) = 360"]);
    mc(["5.4"], "5.4 Notes #9", "Describe r = k/√t.", ["r varies inversely with the square root of t", "r varies directly with the square root of t", "r varies inversely with the square of t", "r varies jointly with k and the root of t"], ["√t is in the denominator → inverse."]);
    mc(["5.4"], "5.4 Notes #10", "Describe z = kx³/y.", ["z varies directly with the cube of x and inversely with y", "z varies inversely with the cube of x and directly with y", "z varies jointly with the cube of x and with y", "z varies directly with x and inversely with the cube of y"], ["Numerator → directly; denominator → inversely."]);
    mc(["5.4"], "5.4 Notes #11", "Describe p = kg²h³.", ["p varies jointly with the square of g and the cube of h", "p varies inversely with the square of g and the cube of h", "p varies jointly with the cube of g and the square of h", "p varies directly with g and inversely with the cube of h"], ["Two variables multiplied in the numerator → joint variation."]);
    mc(["5.4"], "5.4 Notes", "Which equation is an inverse variation?", ["xy = −3", "y = −3x", "y = x − 3", "y = x/3"], ["xy = −3 is y = −3/x."]);
    mc(["5.4"], "5.4 Notes", "What does the graph of an inverse variation look like?", ["A hyperbola", "A line through the origin", "A parabola", "A line with a y-intercept"], ["y = k/x has the same shape as the parent rational function."]);
    num(["5.4"], "5.4 Practice", "y varies directly with x, and y = 12 when x = 3. Find y when x = 10.", 40, ["k = 12/3 = 4", "y = 4(10) = 40"], {label:"y ="});
    num(["5.4"], "5.4 Practice", "y varies inversely with x, and y = 6 when x = 4. Find y when x = 3.", 8, ["k = 4 · 6 = 24", "y = 24/3 = 8"], {label:"y ="});
    num(["5.4"], "5.4 Practice", "z varies jointly with x and y and inversely with w. z = 6 when x = 3, y = 4 and w = 8. Find k.", 4, ["z = kxy/w → 6 = k(12)/8", "k = 4"], {label:"k ="});

    /* ===== 5.5 Inverses ===== */
    k.ask(["5.5"], "5.5 Notes #1", "f contains the points (−2, −3), (0, −1), (1, 1) and (4, 6). List the points of its inverse.",
      [{l:"Inverse points", t:"pts", a:[["-3","-2"],["-1","0"],["1","1"],["6","4"]], ph:"(a, b), (c, d), …"}], ["Swap x and y in every pair.", "(−3, −2), (−1, 0), (1, 1), (6, 4)"]);
    const inv = (src, f, ans, steps, o = {}) => k.ask(["5.5"], src, `Find the inverse of ${f}.`, [{l:o.label || "f⁻¹(x) =", t:"expr", a:ans, v:["x"], r:o.r, ph:"e.g. (x+2)/5"}], steps);
    inv("5.5 Notes #2", "y = 2√(x − 3). (The inverse is defined for x ≥ 0.)", "x^2/4+3", ["Swap: x = 2√(y − 3)", "x/2 = √(y − 3) → x²/4 = y − 3", "{{x^2/4+3}}, for x ≥ 0"], {label:"y =", r:R});
    mc(["5.5"], "5.5 Notes #3", "Find the inverse of y = (x − 2)² + 3.", ["y = 2 ± √(x − 3)", "y = 2 + √(x − 3)", "y = 3 ± √(x − 2)", "y = −2 ± √(x + 3)"], ["Swap: x = (y − 2)² + 3", "(y − 2)² = x − 3 → y − 2 = ±√(x − 3)", "y = 2 ± √(x − 3): both halves, so it isn't a function."]);
    inv("5.5 Notes #4", "f(x) = 1 − 3x", "(1-x)/3", ["y = 1 − 3x → swap: x = 1 − 3y", "3y = 1 − x", "{{(1-x)/3}}"]);
    k.choice(["5.5"], "5.5 Notes #4", "Is the inverse of f(x) = 1 − 3x a function?", ["Yes", "No"], "Yes", ["f is a non-horizontal line, so it passes the horizontal line test."], {label:"Function?"});
    mc(["5.5"], "5.5 Notes #5", "Find the inverse of f(x) = −x² + 2.", ["y = ±√(2 − x)", "y = ±√(x − 2)", "y = √(2 − x)", "y = −√(x + 2)"], ["Swap: x = −y² + 2 → y² = 2 − x", "y = ±√(2 − x)"]);
    k.choice(["5.5"], "5.5 Notes #5", "Is the inverse of f(x) = −x² + 2 a function?", ["Yes", "No"], "No", ["A parabola fails the horizontal line test, so its inverse gives two outputs for one input."], {label:"Function?"});
    k.ask(["5.5"], "5.5 Notes #5", "For f(x) = −x² + 2, give the range of f and the domain of its inverse.",
      [{l:"Range of f", t:"choice", opts:["(−∞, 2]", "[2, ∞)", "(−∞, ∞)", "[−2, ∞)"], a:"(−∞, 2]"}, {l:"Domain of the inverse", t:"choice", opts:["(−∞, 2]", "[2, ∞)", "(−∞, ∞)", "[−2, ∞)"], a:"(−∞, 2]"}],
      ["The parabola opens down from its vertex (0, 2), so the range is (−∞, 2].", "The domain of the inverse is the range of f."]);
    mc(["5.5"], "5.5 Notes", "f and f⁻¹ are mirror images across which line?", ["y = x", "y = −x", "The x-axis", "The y-axis"], ["Swapping x and y reflects a graph across y = x."]);
    mc(["5.5"], "5.5 Notes", "Which statement means f and g are inverses?", ["f(g(x)) = x and g(f(x)) = x", "f(x) · g(x) = 1 for all x", "f(x) + g(x) = 0 for all x", "f(g(x)) = g(f(x)) for all x"], ["Each function undoes the other."]);
    mc(["5.5"], "5.5 Notes", "Which test shows whether a function's inverse is also a function?", ["The horizontal line test on f", "The vertical line test on f", "The horizontal line test on the inverse", "The first derivative test"], ["If no horizontal line hits f twice, each output came from one input."]);
    inv("5.5 Practice", "f(x) = 2x + 5", "(x-5)/2", ["Swap: x = 2y + 5", "y = {{(x-5)/2}}"]);
    inv("5.5 Practice", "f(x) = x³ − 1", "cbrt(x+1)", ["Swap: x = y³ − 1", "y³ = x + 1 → y = {{cbrt(x+1)}}"]);
    inv("5.5 Practice", "f(x) = √(x + 4). (The inverse is defined for x ≥ 0.)", "x^2-4", ["Swap: x = √(y + 4)", "x² = y + 4 → y = {{x^2-4}}, x ≥ 0"], {r:R});
    k.choice(["5.5"], "5.5 Practice", "Are f(x) = 2x + 3 and g(x) = (x − 3)/2 inverses?", ["Yes", "No"], "Yes", ["f(g(x)) = 2 · (x − 3)/2 + 3 = x, and g(f(x)) = (2x + 3 − 3)/2 = x."], {label:"Inverses?"});
    num(["5.5"], "5.5 Practice", "If f(3) = 7, what is f⁻¹(7)?", 3, ["The inverse swaps inputs and outputs."]);
  },

  drills: {
    "5.1": () => {
      const c = pick([2, 3, 4, 5, 6]), d = pick([2, 3, 5, 6, 7]), m = ri(2, 9), p = Math.floor(m / 2);
      const out = m % 2 ? `${c}${p === 1 ? "x" : "x^" + p}sqrt(${d}x)` : (p % 2 ? `${c}|${p === 1 ? "x" : "x^" + p}|sqrt(${d})` : `${c}x^${p}sqrt(${d})`);
      return {src:"Random drill", kind:"ask", text:"Simplify. Use absolute value where it's needed.", math:`sqrt(${c * c * d}x^${m})`,
        fields:[{l:"Simplified", t:"expr", a:out, v:["x"], rad:true, ph:"e.g. 3x√(2x)"}],
        steps:[`${c * c * d} = ${c * c} · ${d}, so ${c} comes out.`, m % 2 ? `x^${m} = x^${m - 1} · x: x^${p} comes out and x stays in (x must be ≥ 0, so no bars).` : `x^${m} → x^${p}: ${p % 2 ? "an odd power, so it needs absolute value" : "an even power, so no absolute value"}.`, `{{${out}}}`]};
    },
    "5.1.2": () => {
      const [b, n] = pick([[2, 3], [3, 3], [2, 4], [3, 4], [2, 5], [4, 2], [5, 2], [6, 2], [4, 3], [5, 3]]), m = pick([1, 2, 3].filter(x => x !== n)), neg = Math.random() < 0.3;
      const base = b ** n, val = b ** m;
      return {src:"Random drill", kind:"ask", text:"Evaluate.", math:`${base}^(${neg ? "-" : ""}${m}/${n})`, fields:[{l:"Answer", t:"num", a: neg ? `1/${val}` : String(val), ph:"number or fraction"}],
        steps:[`The ${n === 2 ? "square" : n === 3 ? "cube" : n + "th"} root of ${base} is ${b}.`, `${b}^${m} = ${val}.`, neg ? `Negative exponent → reciprocal: 1/${val}.` : null].filter(Boolean)};
    },
    "5.2": () => {
      const c = pick([2, 3, 5, 6, 7]), a = ri(1, 6), b = ri(1, 4), s = pick([2, 3, 4, 5]), sign = pick([1, -1]), tot = a + sign * b * s;
      const ans = tot === 0 ? "0" : `${tot === 1 ? "" : tot === -1 ? "-" : tot}sqrt(${c})`;
      return {src:"Random drill", kind:"ask", text:"Simplify.", math:`${a === 1 ? "" : a}sqrt(${c})${sign > 0 ? "+" : "-"}${b === 1 ? "" : b}sqrt(${c * s * s})`,
        fields:[{l:"Simplified", t:"expr", a:ans, v:[], rad:true, combine:true, ph:"e.g. 5√3"}],
        steps:[`√${c * s * s} = ${s}√${c}, so the second term is ${b * s}√${c}.`, `${a} ${sign > 0 ? "+" : "−"} ${b * s} = ${tot} → {{${ans}}}`]};
    },
    "5.3.2": () => {
      const a = pick([1, 2, 3]), h = ri(-5, 6), kk = ri(-4, 6), t = ri(1, 5), rhs = a * t + kk, x = h + t * t;
      const inside = h === 0 ? "x" : `x${h > 0 ? "-" + h : "+" + (-h)}`;
      return {src:"Random drill", kind:"ask", text:"Solve for x.", eq:[`${a === 1 ? "" : a}sqrt(${inside})${kk === 0 ? "" : kk > 0 ? "+" + kk : kk}`, String(rhs)],
        fields:[{l:"x =", t:"set", a:[String(x)], sol:true, ph:"e.g. 3 or none"}],
        steps:[`Isolate the radical: √(${inside.replace("-", " − ").replace("+", " + ")}) = ${t}`, `Square both sides: ${inside.replace("-", " − ").replace("+", " + ")} = ${t * t}`, `x = ${x}`]};
    },
    "5.4": () => {
      const direct = Math.random() < 0.5, x1 = ri(2, 6), kk = ri(2, 6), x2 = pick([2, 3, 4, 6, 8, 12].filter(v => v !== x1));
      if (direct) return {src:"Random drill", kind:"ask", text:`y varies directly with x, and y = ${kk * x1} when x = ${x1}. Find y when x = ${x2}.`, fields:[{l:"y =", t:"num", a:String(kk * x2), ph:"number"}], steps:[`k = y/x = ${kk * x1}/${x1} = ${kk}`, `y = ${kk}(${x2}) = ${kk * x2}`]};
      const K = x1 * x2 * kk;
      return {src:"Random drill", kind:"ask", text:`y varies inversely with x, and y = ${K / x1} when x = ${x1}. Find y when x = ${x2}.`, fields:[{l:"y =", t:"num", a:String(K / x2), ph:"number"}], steps:[`k = xy = ${x1}(${K / x1}) = ${K}`, `y = ${K}/${x2} = ${K / x2}`]};
    },
    "5.5": () => {
      const a = pick([2, 3, 4, 5, -2, -3]), b = pick([-7, -5, -4, -3, -1, 1, 2, 3, 5, 6]);
      const ans = `(x${b > 0 ? "-" + b : "+" + (-b)})/${a > 0 ? a : "(" + a + ")"}`;
      return {src:"Random drill", kind:"ask", text:`Find the inverse of f(x) = ${a}x ${b > 0 ? "+ " + b : "− " + (-b)}.`, fields:[{l:"f⁻¹(x) =", t:"expr", a:ans, v:["x"], ph:"e.g. (x+2)/5"}],
        steps:[`y = ${a}x ${b > 0 ? "+ " + b : "− " + (-b)} → swap: x = ${a}y ${b > 0 ? "+ " + b : "− " + (-b)}`, `${a}y = x ${b > 0 ? "− " + b : "+ " + (-b)}`, `{{${ans}}}`]};
    }
  }
});
})();
