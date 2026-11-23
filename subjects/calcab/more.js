/* AP Calculus AB · more practice for every section, in the same style as the class's unit summaries and
   Unit 4 notes. Derivative keys are checked numerically by tools/verify.js; limit and rate keys were
   checked numerically by hand. */
(() => {
const L = (C, sec, S, q, ans, steps) => C.num([sec], S, "Find the limit: " + q, ans, steps, {label:"Limit"});

Study.extendUnit("calcab", "u1", {problems(k){
  const C = CALCKIT(k), S = n => "Unit 1 · " + n;
  /* 1.1 */
  L(C, "1.1", S("factor"), "lim x→4 of (x² − 16)/(x − 4)", "8", ["(x − 4)(x + 4)/(x − 4) = x + 4.", "8."]);
  L(C, "1.1", S("factor"), "lim x→−3 of (x² + x − 6)/(x + 3)", "-5", ["(x + 3)(x − 2)/(x + 3) = x − 2.", "−5."]);
  L(C, "1.1", S("factor"), "lim x→1 of (x³ − 1)/(x² − 1)", "3/2", ["(x − 1)(x² + x + 1) / ((x − 1)(x + 1)).", "3/2."]);
  L(C, "1.1", S("factor"), "lim x→2 of (2x² − 3x − 2)/(x² − 4)", "5/4", ["(2x + 1)(x − 2) / ((x − 2)(x + 2)).", "5/4."]);
  L(C, "1.1", S("conjugate"), "lim x→0 of (√(9 + x) − 3)/x", "1/6", ["Conjugate: 1/(√(9 + x) + 3).", "1/6."]);
  L(C, "1.1", S("conjugate"), "lim x→5 of (x − 5)/(√(x + 4) − 3)", "6", ["Multiply by √(x + 4) + 3: (x − 5)(√(x + 4) + 3)/(x − 5).", "√9 + 3 = 6."]);
  L(C, "1.1", S("complex fraction"), "lim h→0 of [1/(4 + h) − 1/4]/h", "-1/16", ["Common denominator: −h/(4h(4 + h)) = −1/(4(4 + h)).", "−1/16."]);
  L(C, "1.1", S("plug in"), "lim x→π of (x cos x)", "-pi", ["Continuous: π · cos π = −π."]);
  /* 1.2 */
  L(C, "1.2", S("absolute value"), "lim x→3⁻ of (x − 3)/|x − 3|", "-1", ["Left of 3, |x − 3| = −(x − 3).", "−1."]);
  L(C, "1.2", S("absolute value"), "lim x→−1⁺ of 2|x + 1|/(x + 1)", "2", ["Right of −1, |x + 1| = x + 1.", "2."]);
  L(C, "1.2", S("piecewise"), "lim x→2⁺ of f(x), where f(x) = 3x − 1 for x < 2 and x² + 1 for x ≥ 2", "5", ["From the right use x² + 1: 5."]);
  L(C, "1.2", S("piecewise"), "lim x→2⁻ of f(x), where f(x) = 3x − 1 for x < 2 and x² + 1 for x ≥ 2", "5", ["From the left use 3x − 1: 5."]);
  C.pick(["1.2"], S("two-sided"), "f(x) = 3x − 1 for x < 2 and x² + 1 for x ≥ 2. What is lim x→2 f(x)?", ["5", "Does not exist", "4", "6"], "5", ["Both one-sided limits are 5, so the limit is 5."]);
  L(C, "1.2", S("one-sided"), "lim x→0⁺ of √x", "0", ["√x is defined for x ≥ 0 and approaches 0."]);
  C.pick(["1.2"], S("one-sided"), "What is lim x→2⁺ of 1/(x − 2)?", ["∞", "−∞", "0", "1/2"], "∞", ["Right of 2, x − 2 is a small positive number, so 1/(x − 2) grows without bound."]);
  /* 1.3 */
  C.num(["1.3"], S("solve for k"), "f(x) = kx² for x < 2 and x + k for x ≥ 2. Find k so that f is continuous.", "2/3",
    ["At x = 2: 4k = 2 + k.", "3k = 2 → k = 2/3."], {label:"k ="});
  C.num(["1.3"], S("solve for c"), "f(x) = cx + 4 for x ≤ 2 and x² − c for x > 2. Find c so that f is continuous.", "0",
    ["At x = 2: 2c + 4 = 4 − c.", "3c = 0 → c = 0."], {label:"c ="});
  C.num(["1.3"], S("solve for k"), "f(x) = (x² − 9)/(x − 3) for x ≠ 3 and f(3) = k. Find k so that f is continuous.", "6",
    ["The limit at 3 is x + 3 → 6.", "k must equal 6."], {label:"k ="});
  C.set(["1.3"], S("discontinuities"), "Where is f(x) = (x + 2)/(x² − x − 6) discontinuous?", ["-2", "3"],
    ["x² − x − 6 = (x − 3)(x + 2) = 0 at x = 3 and x = −2.", "x = −2 is a hole and x = 3 is an asymptote, but both are discontinuities."], {label:"x ="});
  C.pick(["1.3"], S("discontinuity type"), "f(x) = 1/(x − 4) has what kind of discontinuity at x = 4?", ["A vertical asymptote (non-removable)", "A removable discontinuity (hole)", "A jump discontinuity", "It is continuous at x = 4"], "A vertical asymptote (non-removable)", ["Nothing cancels the x − 4, so the function blows up there."]);
  C.pick(["1.3"], S("discontinuity type"), "f(x) = 2 for x < 0 and 5 for x ≥ 0 has what at x = 0?", ["A jump discontinuity", "A removable discontinuity (hole)", "A vertical asymptote", "No discontinuity"], "A jump discontinuity", ["The left limit (2) and right limit (5) are different."]);
  C.pick(["1.3"], S("conditions"), "lim x→1 f(x) = 4 but f(1) = 7. Which continuity condition fails?", ["The limit doesn't equal f(1)", "f(1) doesn't exist at all", "The limit at x = 1 doesn't exist", "None; f is continuous at 1"], "The limit doesn't equal f(1)", ["Both exist, but 4 ≠ 7."]);
  /* 1.4 */
  L(C, "1.4", S("trig limit"), "lim x→0 of sin(7x)/(3x)", "7/3", ["(7/3) · sin(7x)/(7x) → 7/3."]);
  L(C, "1.4", S("trig limit"), "lim x→0 of sin(4x)/sin(2x)", "2", ["Divide top and bottom by x: (4 · sin4x/4x)/(2 · sin2x/2x) → 4/2."]);
  L(C, "1.4", S("trig limit"), "lim x→0 of x/sin x", "1", ["The reciprocal of sin x / x → 1."]);
  L(C, "1.4", S("trig limit"), "lim x→0 of (cos x − 1)/x", "0", ["A standard limit: 0."]);
  L(C, "1.4", S("squeeze theorem"), "lim x→0 of x sin(1/x)", "0", ["−|x| ≤ x sin(1/x) ≤ |x|, and both sides → 0."]);
  L(C, "1.4", S("squeeze theorem"), "lim x→∞ of sin(x)/x", "0", ["−1/x ≤ sin x / x ≤ 1/x, and both sides → 0."]);
  C.pick(["1.4"], S("IVT"), "f is continuous on [1, 4] with f(1) = 6 and f(4) = −2. Which must be true?", ["f(c) = 3 for some c in (1, 4)", "f(c) = 7 for some c in (1, 4)", "f(2.5) = 2", "f is decreasing on [1, 4]"], "f(c) = 3 for some c in (1, 4)", ["3 is between −2 and 6, and f is continuous: IVT.", "The IVT says nothing about which c or about increasing/decreasing."]);
  /* 1.5 */
  L(C, "1.5", S("limit at ∞"), "lim x→∞ of (7x³ + 2)/(4 − x³)", "-7", ["Equal degrees: 7/(−1)."]);
  L(C, "1.5", S("limit at ∞"), "lim x→∞ of (2x + 5)/(x² − 3)", "0", ["Bottom heavier: 0."]);
  L(C, "1.5", S("limit at −∞"), "lim x→−∞ of √(4x² + 1)/(x − 2)", "-2", ["For x < 0, √(4x²) = 2|x| = −2x.", "−2x/x = −2."]);
  L(C, "1.5", S("limit at ∞"), "lim x→∞ of √(4x² + 1)/(x − 2)", "2", ["For x > 0, √(4x²) = 2x: 2."]);
  L(C, "1.5", S("limit at ∞"), "lim x→∞ of e^(−x)", "0", ["e^(−x) = 1/eˣ → 0."]);
  C.pick(["1.5"], S("asymptotes"), "What is the horizontal asymptote of y = (6x² + x)/(3x² − 5)?", ["y = 2", "y = 0", "y = 6", "None"], "y = 2", ["Equal degrees: 6/3."]);
  C.pick(["1.5"], S("limit at −∞"), "What is lim x→−∞ of (x³ − 4x)/(2x² + 1)?", ["−∞", "∞", "1/2", "0"], "−∞", ["Top heavier. For large negative x, x³ is negative and 2x² is positive."]);
}});

Study.extendUnit("calcab", "u2", {problems(k){
  const C = CALCKIT(k), S = n => "Unit 2 · " + n;
  /* 2.1 */
  C.num(["2.1"], S("definition"), "Evaluate lim h→0 of [√(9 + h) − 3]/h.", "1/6", ["f′(9) for f(x) = √x.", "{{1/(2sqrt(9))}} = 1/6."]);
  C.num(["2.1"], S("definition"), "Evaluate lim h→0 of [cos(π + h) + 1]/h.", "0", ["f′(π) for f(x) = cos x.", "−sin π = 0."]);
  C.num(["2.1"], S("definition"), "Evaluate lim h→0 of [e^(2 + h) − e²]/h (3 decimals).", "7.389", ["f′(2) for f(x) = eˣ.", "e² ≈ 7.389."], {dec:3});
  C.num(["2.1"], S("definition"), "Evaluate lim x→1 of (x⁵ − 1)/(x − 1).", "5", ["f′(1) for f(x) = x⁵ (point form).", "5(1)⁴ = 5."]);
  C.expr(["2.1"], S("definition"), "Use the limit definition to find f′(x) for f(x) = 5 − 2x².", "-4x", ["[5 − 2(x + Δx)² − 5 + 2x²]/Δx = (−4xΔx − 2Δx²)/Δx.", "= −4x − 2Δx → −4x."], {label:"f′(x) =", chk:{d:"5-2x^2", v:"x"}});
  C.pick(["2.1"], S("average vs instantaneous"), "For f(x) = x², what is the average rate of change from x = 1 to x = 3?", ["4", "2", "6", "8"], "4", ["(f(3) − f(1))/(3 − 1) = (9 − 1)/2 = 4."]);
  C.pick(["2.1"], S("meaning"), "A tank's volume V(t) is in liters, t in minutes. What does V′(5) = −3 mean?", ["At t = 5 it is losing 3 liters per minute", "After 5 minutes the tank holds exactly 3 liters", "The tank loses 3 liters during the first 5 minutes", "The volume is 5 liters when t is 3 minutes"], "At t = 5 it is losing 3 liters per minute", ["A derivative is an instantaneous rate with units of liters per minute."]);
  /* 2.4 */
  C.num(["2.4"], S("acceleration"), "s(t) = t³ − 4t² + 2t meters. Find a(2), in m/s².", "4", ["v = 3t² − 8t + 2, a = 6t − 8.", "a(2) = 4."], {label:"a(2) ="});
  C.num(["2.4"], S("velocity"), "s(t) = 2t² + 3/t feet. Find v(1), in ft/s.", "1", ["v = 4t − 3/t².", "v(1) = 4 − 3 = 1."], {label:"v(1) ="});
  C.set(["2.4"], S("at rest"), "s(t) = t³ − 9t² + 24t. When is the particle at rest?", ["2", "4"], ["v = 3t² − 18t + 24 = 3(t − 2)(t − 4)."], {label:"t ="});
  C.num(["2.4"], S("velocity"), "s(t) = 10 sin(t) cm. Find v(π), in cm/s.", "-10", ["v = 10 cos t.", "10 cos π = −10."], {label:"v(π) ="});
  C.expr(["2.4"], S("higher derivatives"), "Find f″(x) for f(x) = x⁴ − 3x² + 1/x.", "12x^2-6+2/x^3", ["f′ = 4x³ − 6x − x⁻².", "f″ = 12x² − 6 + 2x⁻³."], {label:"f″(x) ="});
  C.pick(["2.4"], S("units"), "Height h(t) is in feet and t in minutes. What are the units of h″(t)?", ["ft/min²", "ft/min", "ft", "min/ft²"], "ft/min²", ["Two derivatives: divide by minutes twice."]);
}});

Study.extendUnit("calcab", "u3", {problems(k){
  const C = CALCKIT(k), S = n => "Unit 3 · " + n;
  /* 3.2 */
  C.expr(["3.2"], S("implicit"), "Find dy/dx for 3x² − 2y² = 7.", "3x/(2y)", ["6x − 4y y′ = 0.", "y′ = 6x/(4y) = 3x/(2y)."], {label:"dy/dx =", vars:["x", "y"]});
  C.expr(["3.2"], S("implicit"), "Find dy/dx for x²y² = 16.", "-y/x", ["2xy² + 2x²y · y′ = 0.", "y′ = −2xy²/(2x²y) = −y/x."], {label:"dy/dx =", vars:["x", "y"]});
  C.expr(["3.2"], S("implicit"), "Find dy/dx for eʸ = x + y.", "1/(e^y-1)", ["eʸ y′ = 1 + y′.", "y′(eʸ − 1) = 1."], {label:"dy/dx =", vars:["x", "y"]});
  C.expr(["3.2"], S("implicit"), "Find dy/dx for y = x + cos y.", "1/(1+sin(y))", ["y′ = 1 − sin y · y′.", "y′(1 + sin y) = 1."], {label:"dy/dx =", vars:["x", "y"]});
  C.num(["3.2"], S("implicit slope"), "Find the slope of x² + xy + y² = 7 at the point (1, 2).", "-4/5", ["2x + (y + x y′) + 2y y′ = 0 → y′ = −(2x + y)/(x + 2y).", "At (1, 2): −4/5."], {label:"Slope"});
  C.num(["3.2"], S("implicit slope"), "Find dy/dx for y³ − xy = 6 at the point (1, 2).", "2/11", ["3y² y′ − (y + x y′) = 0 → y′ = y/(3y² − x).", "At (1, 2): 2/(12 − 1) = 2/11."], {label:"dy/dx ="});
  C.expr(["3.2"], S("tangent line"), "Find the tangent line to x² + y² = 25 at (3, −4).", "3/4(x-3)-4", ["Slope −x/y = −3/(−4) = 3/4.", "y + 4 = (3/4)(x − 3)."], {label:"y =", chk:{tan:["-sqrt(25-x^2)", 3]}});
  /* 3.3 */
  C.d(["3.3"], S("inverse trig"), "arctan(x^2)", "2x/(1+x^4)", ["{{1/(1+(x^2)^2)}} · 2x."]);
  C.d(["3.3"], S("inverse trig"), "arcsin(x/3)", "1/sqrt(9-x^2)", ["{{1/sqrt(1-x^2/9)}} · (1/3) = {{1/sqrt(9-x^2)}}."], {pts:[-2.5, -1, 0, 0.7, 1.8, 2.6]});
  C.d(["3.3"], S("inverse trig"), "arctan(e^x)", "e^x/(1+e^(2x))", ["u = eˣ: {{e^x/(1+e^(2x))}}."]);
  C.d(["3.3"], S("inverse trig"), "x^2arcsin(x)", "2xarcsin(x)+x^2/sqrt(1-x^2)", ["Product rule."], {pts:[-0.8, -0.4, 0.1, 0.3, 0.6, 0.85]});
  C.dAt(["3.3"], S("inverse trig"), "arctan(x)", 1, "1/2", ["{{1/(1+x^2)}} at 1: 1/2."]);
  C.d(["3.3"], S("inverse trig"), "arccos(sqrt(x))", "-1/(2sqrt(x)sqrt(1-x))", ["{{-1/sqrt(1-x)}} · {{1/(2sqrt(x))}}."], {pts:[0.1, 0.25, 0.4, 0.55, 0.7, 0.9]});
  C.pick(["3.3"], S("inverse trig"), "What is the derivative of arcsin x?", ["1/√(1 − x²)", "−1/√(1 − x²)", "1/(1 + x²)", "cos x"], "1/√(1 − x²)", ["arcsin → 1/√(1 − u²) · u′."]);
  /* 3.4 */
  C.d(["3.4"], S("ln u"), "ln(sqrt(x^2+1))", "x/(x^2+1)", ["Rewrite: (1/2)ln(x² + 1).", "(1/2) · 2x/(x² + 1)."]);
  C.d(["3.4"], S("ln u"), "ln(cos(x))", "-sin(x)/cos(x)", ["u′/u = −sin x / cos x = −tan x."], {pts:[-1.2, -0.6, 0, 0.4, 0.9, 1.3]});
  C.d(["3.4"], S("ln u"), "x^2ln(x)", "2xln(x)+x", ["Product rule: 2x ln x + x² · (1/x)."], {pts:[0.3, 0.8, 1.5, 2.2, 3, 4]});
  C.d(["3.4"], S("ln u"), "ln(x)/x", "(1-ln(x))/x^2", ["Quotient rule: (x · 1/x − ln x)/x²."], {pts:[0.3, 0.8, 1.5, 2.2, 3, 4]});
  C.d(["3.4"], S("ln u"), "ln((x^2)(x+3)^4)", "2/x+4/(x+3)", ["Expand: 2 ln x + 4 ln(x + 3)."], {pts:[0.3, 0.8, 1.5, 2.2, 3, 4]});
  C.dAt(["3.4"], S("ln u"), "ln(3x+1)", 1, "3/4", ["3/(3x + 1) at x = 1: 3/4."]);
  C.pick(["3.4"], S("log properties"), "Which is equal to log₃(9x)?", ["2 + log₃ x", "9 log₃ x", "3 + log₃ x", "log₃ 9 · log₃ x"], "2 + log₃ x", ["log₃ 9 + log₃ x, and log₃ 9 = 2."]);
  /* 3.5 */
  C.num(["3.5"], S("inverse functions"), "f(x) = x³ + 2x and g = f⁻¹. Find g′(3).", "1/5", ["f(1) = 3, so g(3) = 1.", "f′(1) = 3 + 2 = 5 → g′(3) = 1/5."], {label:"g′(3) ="});
  C.num(["3.5"], S("inverse functions"), "f(x) = eˣ + x and g = f⁻¹. Find g′(1).", "1/2", ["f(0) = 1, so g(1) = 0.", "f′(0) = 1 + 1 = 2 → 1/2."], {label:"g′(1) ="});
  C.num(["3.5"], S("inverse functions"), "f(x) = √(x + 7) for x ≥ −7 and g = f⁻¹. Find g′(3).", "6", ["f(2) = 3, so g(3) = 2.", "f′(x) = {{1/(2sqrt(x+7))}}, f′(2) = 1/6 → g′(3) = 6."], {label:"g′(3) ="});
  C.pick(["3.5"], S("differentiability"), "Where is f(x) = ∛x not differentiable?", ["At x = 0 (vertical tangent)", "At x = 1 (corner)", "Everywhere, since it's a root", "It is differentiable everywhere"], "At x = 0 (vertical tangent)", ["f′(x) = (1/3)x^(−2/3) is undefined at 0: the tangent there is vertical."]);
  C.pick(["3.5"], S("differentiability"), "f(x) = x² for x ≤ 1 and 2x − 1 for x > 1. Is f differentiable at x = 1?", ["Yes: values and slopes both match", "No: there is a corner at x = 1", "No: it is not continuous at x = 1", "No: piecewise functions never are"], "Yes: values and slopes both match", ["Values: 1 and 1. Slopes: 2x = 2 and 2."]);
  C.pick(["3.5"], S("differentiability"), "f(x) = x² for x ≤ 1 and 3x − 2 for x > 1. Is f differentiable at x = 1?", ["No: the slopes 2 and 3 don't match", "Yes: it is continuous at x = 1", "No: it is not continuous at x = 1", "Yes: both pieces are polynomials"], "No: the slopes 2 and 3 don't match", ["Values match (1 and 1), slopes don't: a corner."]);
}});

Study.extendUnit("calcab", "u4", {problems(k){
  const C = CALCKIT(k), S = n => "Unit 4 · " + n;
  /* 4.1 */
  C.pick(["4.1"], S("speed"), "s(t) = t³ − 6t² + 9t. At t = 1.5, the particle's speed is", ["increasing, since v(1.5) < 0 and a(1.5) < 0", "decreasing, since v(1.5) < 0 and a(1.5) > 0", "increasing, since v(1.5) > 0 and a(1.5) > 0", "decreasing, since v(1.5) > 0 and a(1.5) < 0"], "increasing, since v(1.5) < 0 and a(1.5) < 0", ["v = 3t² − 12t + 9: v(1.5) = −2.25.", "a = 6t − 12: a(1.5) = −3.", "Same sign: speeding up (while moving left)."]);
  C.num(["4.1"], S("speed"), "s(t) = t³ − 6t² + 9t. Find the speed at t = 2.", "3", ["v(2) = 12 − 24 + 9 = −3.", "Speed = |−3| = 3."], {label:"Speed ="});
  C.pick(["4.1"], S("direction"), "v(t) = t² − 4t + 3. On which interval is the particle moving left?", ["1 < t < 3", "t < 1", "t > 3", "0 < t < 4"], "1 < t < 3", ["v = (t − 1)(t − 3) is negative between 1 and 3."]);
  C.num(["4.1"], S("acceleration"), "v(t) = e^(2t) − 4t. Find a(0).", "-2", ["a = 2e^(2t) − 4.", "a(0) = 2 − 4 = −2."], {label:"a(0) ="});
  /* 4.2 */
  C.num(["4.2"], S("linear approximation"), "Use a tangent line at x = 8 to estimate ∛8.3 (3 decimals).", "2.025", ["f(8) = 2, f′(x) = (1/3)x^(−2/3), f′(8) = 1/12.", "L(8.3) = 2 + 0.3/12 = 2.025."], {label:"∛8.3 ≈", dec:3});
  C.num(["4.2"], S("linear approximation"), "Use the tangent line to f(x) = eˣ at x = 0 to estimate e^0.1.", "1.1", ["L(x) = 1 + x.", "L(0.1) = 1.1."], {label:"e^0.1 ≈"});
  C.num(["4.2"], S("linear approximation"), "Use the tangent line to f(x) = ln x at x = 1 to estimate ln(1.2).", "0.2", ["f(1) = 0, f′(1) = 1, so L(x) = x − 1.", "L(1.2) = 0.2."], {label:"ln 1.2 ≈"});
  C.num(["4.2"], S("linear approximation"), "f(3) = 5 and f′(3) = −2. Use a linear approximation to estimate f(3.1).", "4.8", ["L(x) = 5 − 2(x − 3).", "L(3.1) = 5 − 0.2 = 4.8."], {label:"f(3.1) ≈"});
  C.expr(["4.2"], S("linear approximation"), "Find the linear approximation L(x) to f(x) = √x at x = 4.", "2+(x-4)/4", ["f(4) = 2, f′(4) = {{1/(2sqrt(4))}} = 1/4.", "L(x) = 2 + (1/4)(x − 4)."], {label:"L(x) =", chk:{tan:["sqrt(x)", 4]}});
  C.expr(["4.2"], S("linear approximation"), "Find the linear approximation L(x) to f(x) = 1/x at x = 2.", "1/2-(x-2)/4", ["f(2) = 1/2, f′(x) = −1/x², f′(2) = −1/4."], {label:"L(x) =", chk:{tan:["1/x", 2]}});
  C.pick(["4.2"], S("over/under"), "f(x) = √x is concave down. Does the tangent line at x = 4 overestimate or underestimate √4.5?", ["Overestimate, since the curve bends below its tangent", "Underestimate, since the curve bends above its tangent", "Exactly right, since 4.5 is close to 4", "It can't be known without a calculator"], "Overestimate, since the curve bends below its tangent", ["Concave down: tangent lines sit above the curve."]);
  /* 4.3 */
  C.num(["4.3"], S("square"), "A square's side grows at 3 cm/s. How fast is its area growing when the side is 10 cm (cm²/s)?", "60", ["A = s² → dA/dt = 2s ds/dt.", "2(10)(3) = 60."], {label:"dA/dt ="});
  C.num(["4.3"], S("cube"), "A cube's edge grows at 2 in/min. How fast is its volume growing when the edge is 5 in (in³/min)?", "150", ["V = s³ → dV/dt = 3s² ds/dt.", "3(25)(2) = 150."], {label:"dV/dt ="});
  C.num(["4.3"], S("cylinder"), "Water fills a cylinder of radius 3 m at 9π m³/min. How fast does the water level rise (m/min)?", "1", ["V = π(3)²h = 9πh → dV/dt = 9π dh/dt.", "9π = 9π dh/dt → 1."], {label:"dh/dt ="});
  C.num(["4.3"], S("distance"), "Car A drives north at 30 mph and car B east at 40 mph from the same spot. How fast is the distance between them growing after 1 hour (mph)?", "50", ["After 1 hour: 30 and 40 miles apart legs, distance 50.", "2D D′ = 2x x′ + 2y y′ → 50D′ = 30(30) + 40(40) = 2500.", "D′ = 50."], {label:"Rate"});
  C.num(["4.3"], S("shadow"), "A 6-ft person walks away from a 15-ft lamppost at 4 ft/s. How fast is their shadow lengthening (ft/s)?", "8/3", ["Similar triangles: s/6 = (x + s)/15 → 15s = 6x + 6s → s = (2/3)x.", "ds/dt = (2/3)(4) = 8/3."], {label:"ds/dt ="});
  C.num(["4.3"], S("sphere"), "A snowball melts so its volume decreases at 10 cm³/min. How fast is its radius changing when r = 5 cm (cm/min)?", "-1/(10pi)", ["dV/dt = 4πr² dr/dt → −10 = 100π dr/dt.", "dr/dt = −1/(10π)."], {label:"dr/dt ="});
  C.pick(["4.3"], S("steps"), "In a related rates problem, when should you substitute the numbers for the given instant?", ["After differentiating with respect to t", "Before writing the equation", "Before differentiating, to simplify", "Never; leave everything in variables"], "After differentiating with respect to t", ["Plugging in early turns changing quantities into constants and loses their rates."]);
  /* 4.4 */
  L(C, "4.4", S("L'Hôpital"), "lim x→0 of (e^(3x) − 1)/x", "3", ["0/0 → 3e^(3x)/1 → 3."]);
  L(C, "4.4", S("L'Hôpital"), "lim x→0 of tan(2x)/x", "2", ["0/0 → 2sec²(2x)/1 → 2."]);
  L(C, "4.4", S("L'Hôpital"), "lim x→∞ of ln x / √x", "0", ["∞/∞ → (1/x)/(1/(2√x)) = 2/√x → 0."]);
  L(C, "4.4", S("L'Hôpital"), "lim x→0 of (x − sin x)/x³", "1/6", ["0/0 three times: (1 − cos x)/3x² → sin x/6x → cos x/6 → 1/6."]);
  L(C, "4.4", S("L'Hôpital"), "lim x→1 of ln x/(x² − 1)", "1/2", ["0/0 → (1/x)/(2x) → 1/2."]);
}});
})();
