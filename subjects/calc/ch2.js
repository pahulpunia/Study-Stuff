/* Calculus BC · Chapter 2: Derivatives
   Source: Ch 2 Obj 1–4 class notes (Calculus folder). Every answer key is checked numerically (tools/verify.js). */
(() => {
Study.addUnit("calc", {
  id: "c2",
  name: "Ch 2: Derivatives",
  short: "Ch 2",
  sections: [
    {id:"1", name:"Obj 1: Definition of the Derivative & eˣ"},
    {id:"2", name:"Obj 2: Tangent & Normal Lines, Motion"},
    {id:"3", name:"Obj 3–4: Product & Quotient Rules"}
  ],

  notes: {
    "1": [
      {sum:["The derivative f′(x) is the slope of the tangent line: the instantaneous rate of change.",
            "Limit definition: f′(x) = the limit as Δx → 0 of [f(x + Δx) − f(x)] / Δx (often written with h instead of Δx).",
            "Most limit-definition questions are derivatives in disguise: spot f(x), then use the shortcut rules.",
            "Differentiable means continuous, but continuous does NOT mean differentiable (corners, cusps, vertical tangents)."]},
      {p:"**What it's for:** a slope between two points (Δy/Δx) is an average rate of change. Slide the second point closer and closer to the first (Δx → 0) and you get the slope at one exact point. That's the derivative. It tells you how fast something is changing right now: speed, growth, cost per item."},
      {h:"The limit definition"},
      {p:"f′(x) = lim as Δx → 0 of [f(x + Δx) − f(x)] / Δx. The top is the change in y, the bottom is the change in x, so it's a slope that shrinks down to a single point."},
      {steps:["**Identify f(x):** it's the part being subtracted at the end of the numerator.", "**Use the derivative rules** to find f′(x). That's the value of the limit."]},
      {ex:{q:"Evaluate the limit as Δx → 0 of [(x + Δx)³ − x³] / Δx.", a:["The subtracted part is x³, so f(x) = x³.", "f′(x) = 3x². That's the limit."]}},
      {ex:{q:"Evaluate the limit as h → 0 of {{((2(x+h)^2-3(x+h))-(2x^2-3x))/h}}.", a:["f(x) = 2x² − 3x.", "f′(x) = 4x − 3."]}},
      {ex:{q:"Evaluate the limit as h → 0 of {{(sin(x+h)-sin(x))/h}}.", a:["f(x) = sin x, so the limit is cos x."]}},
      {h:"Rules you'll use constantly"},
      {table:{head:["Function", "Derivative"], rows:[
        ["a constant c", "0"], ["{{x^n}} (power rule)", "{{nx^(n-1)}}"], ["{{e^x}}", "{{e^x}} (it's its own derivative)"],
        ["sin x", "cos x"], ["cos x", "−sin x"], ["tan x", "sec²x"], ["sec x", "sec x tan x"], ["csc x", "−csc x cot x"], ["cot x", "−csc²x"]]}},
      {tip:"Rewrite roots and fractions as powers first: √x = {{x^(1/2)}}, {{3/x^2}} = {{3x^(-2)}}. Then the power rule works."},
      {h:"Where a function is NOT differentiable"},
      {table:{head:["What you see", "Example"], rows:[
        ["a corner (sharp turn)", "|x| at x = 0"], ["a cusp (sharp point)", "{{x^(2/3)}} at x = 0"],
        ["a vertical tangent", "√x or {{x^(1/3)}} at x = 0: x = 0 is in the domain, but f′ blows up"],
        ["a discontinuity (hole, jump, asymptote)", "if f′(x) = {{(x+4)/(x-2)}}, f isn't differentiable at x = 2"]]}},
      {warn:"Differentiability ⇒ continuity. But if something is continuous everywhere, there's no guarantee it's differentiable everywhere (think |x|)."},
      {check:[
        {q:"What does the limit as h → 0 of {{((x+h)^5-x^5)/h}} equal?", a:"It's the derivative of x⁵, so 5x⁴."},
        {q:"What's the derivative of {{e^x}}?", a:"{{e^x}}. It's its own derivative."},
        {q:"Is |x| differentiable at x = 0? Is it continuous there?", a:"Continuous, yes. Differentiable, no: there's a corner, so the slope from the left (−1) and right (1) disagree."},
        {q:"Find the derivative of {{6sqrt(x)}}.", a:"{{6x^(1/2)}} → {{3x^(-1/2)}} = {{3/sqrt(x)}}."}]}
    ],
    "2": [
      {sum:["Tangent line: y − y₁ = m(x − x₁), where y₁ = f(x₁) and m = f′(x₁).",
            "Normal line: perpendicular to the tangent, so its slope is −1/m (flip it and change the sign).",
            "On a graph of f′, the y-value IS the slope of f.",
            "Motion: position s(t) → velocity v(t) = s′(t) → acceleration a(t) = v′(t) = s″(t)."]},
      {p:"**What it's for:** a tangent line is the best straight-line approximation of a curve near a point (it's how calculators and engineers estimate values). Motion problems use the same idea in time: the derivative of position tells you how fast and in which direction something is moving."},
      {h:"Tangent and normal lines"},
      {p:"Tangent line: y − y₁ = m(x − x₁). Normal line: y − y₁ = (−1/m)(x − x₁)."},
      {steps:["**Find y₁:** plug x₁ into the original f(x).", "**Find m:** take the derivative, then substitute x₁.", "**Write the answer** in point-slope form. (For the normal line, use −1/m.)"]},
      {ex:{q:"Let f(x) = 2x⁴ − 6x² + 2x − 3. Find the tangent and normal lines at x = 1.", a:["y₁ = f(1) = 2 − 6 + 2 − 3 = −5.", "f′(x) = 8x³ − 12x + 2, so m = f′(1) = −2.", "Tangent: y + 5 = −2(x − 1).", "Normal: the slope flips to 1/2: y + 5 = (1/2)(x − 1).", "Multiple-choice answers often look like Ax + By = C (no fractions, A ≥ 0): 2y + 10 = x − 1 → x − 2y = 11."]}},
      {tip:"On free-response questions, point-slope form is a complete answer. Don't waste time simplifying."},
      {h:"Reading a graph of f′"},
      {p:"If you're given the graph of f′ (or g = f′), the height of the graph at x = 3 is the slope of f at x = 3. Above the x-axis → f is increasing; below → f is decreasing."},
      {h:"Motion"},
      {table:{head:["", "Function", "Units (example)"], rows:[
        ["Position", "s(t), x(t), or y(t)", "meters (m) or feet (ft)"], ["Velocity", "v(t) = s′(t)", "m/s or ft/s"], ["Acceleration", "a(t) = v′(t) = s″(t)", "m/s² (m/s per second)"]]}},
      {table:{head:["The particle is…", "When"], rows:[["at rest", "v(t) = 0"], ["moving right (or up)", "v(t) > 0"], ["moving left (or down)", "v(t) < 0"], ["changing direction", "v(t) changes sign"]]}},
      {ex:{q:"x(t) = t⁴ − t³ + 1 (meters, seconds). Find v(t), v(2), when it's at rest, and when it moves left.", a:["v(t) = x′(t) = 4t³ − 3t².", "v(2) = 32 − 12 = 20 m/s.", "At rest: 4t³ − 3t² = t²(4t − 3) = 0 → t = 0 and t = 3/4 s.", "Moving left: v < 0. Make a sign chart: t² is never negative, and 4t − 3 < 0 when t < 3/4.", "So it moves left on (0, 3/4). Time can't be negative, so ignore t < 0."]}},
      {warn:"\"At rest\" questions usually mean t ≥ 0 even if it isn't stated."},
      {check:[
        {q:"Find the tangent line to y = x² at x = 3.", a:"y₁ = 9, m = 2(3) = 6, so y − 9 = 6(x − 3)."},
        {q:"The tangent slope at a point is 4. What's the normal slope?", a:"−1/4."},
        {q:"A particle has v(t) = t² − 4. When is it at rest (t ≥ 0)?", a:"t² − 4 = 0 → t = 2."},
        {q:"If s(t) is in feet and t in seconds, what are the units of acceleration?", a:"ft/s² (feet per second, per second)."}]}
    ],
    "3": [
      {sum:["Product rule: (f·g)′ = f·g′ + f′·g. Say it as \"1 · d2 + d1 · 2\" (any order works).",
            "Quotient rule: (f/g)′ = (g·f′ − f·g′)/g², \"lo d-hi minus hi d-lo, over lo squared.\" The order matters!",
            "With a table of values: write the rule for h′(x) first, plug in the x-value, then substitute the numbers.",
            "Velocity graph: above the axis → moving right, below → moving left, crossing the axis → changing direction."]},
      {p:"**What it's for:** most real functions are built by multiplying or dividing simpler ones (like x³ times eˣ). These two rules let you take those apart without expanding everything."},
      {h:"Product rule"},
      {p:"If y = f(x) · g(x), then y′ = f(x) · g′(x) + f′(x) · g(x). Label the pieces 1 and 2, then write \"1 · d2 + d1 · 2.\""},
      {ex:{q:"y = 2eˣ · x³", a:["1 = 2eˣ, 2 = x³.", "y′ = 2eˣ · 3x² + 2eˣ · x³."]}},
      {ex:{q:"y = (x³ + 1) tan x", a:["y′ = (x³ + 1) sec²x + 3x² tan x."]}},
      {h:"Quotient rule"},
      {p:"If y = f(x)/g(x) (\"hi\" over \"lo\"), then y′ = (lo · d-hi − hi · d-lo) / lo²."},
      {ex:{q:"y = {{(2x+1)/(7x-4)}}", a:["lo = 7x − 4, d-hi = 2, hi = 2x + 1, d-lo = 7.", "y′ = {{((7x-4)*2-(2x+1)*7)/(7x-4)^2}}", "The top simplifies: 14x − 8 − 14x − 7 = −15, so y′ = {{-15/(7x-4)^2}}."]}},
      {warn:"The quotient rule's subtraction means the order matters: lo d-hi comes FIRST. And don't forget to square the bottom."},
      {h:"Using a table of values"},
      {ex:{q:"h(x) = 2f(x)g(x), with f(1) = −1, g(1) = 2, f′(1) = −3, g′(1) = 4. Find h′(1).", a:["Find h′(x): h′(x) = 2f(x)g′(x) + 2f′(x)g(x).", "Replace x with 1: h′(1) = 2f(1)g′(1) + 2f′(1)g(1).", "Substitute: 2(−1)(4) + 2(−3)(2) = −8 − 12 = −20."]}},
      {check:[
        {q:"Differentiate y = x² sin x.", a:"2x sin x + x² cos x."},
        {q:"Differentiate y = {{e^x/x}}.", a:"{{(xe^x-e^x)/x^2}} (lo d-hi minus hi d-lo, over lo squared)."},
        {q:"h(x) = f(x)g(x), f(2) = 3, f′(2) = 1, g(2) = 5, g′(2) = −2. Find h′(2).", a:"f(2)g′(2) + f′(2)g(2) = 3(−2) + 1(5) = −1."},
        {q:"Why does order matter in the quotient rule but not the product rule?", a:"The quotient rule has a subtraction (switching the terms flips the sign); the product rule only adds."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);
    const L = "Evaluate the limit by recognizing it as a derivative.";

    /* ===== Obj 1: definition of the derivative ===== */
    C.expr(["1"], "Ch 2 Obj 1 ex1a", L + " Limit as Δx → 0 of [(x + Δx)³ − x³] / Δx", "3x^2",
      ["The subtracted part is x³, so f(x) = x³.", "The limit is f′(x) = 3x²."], {label:"Limit =", chk:{d:"x^3"}});
    C.expr(["1"], "Ch 2 Obj 1 ex1b", L + " Limit as h → 0 of {{((2(x+h)^2-3(x+h))-(2x^2-3x))/h}}", "4x-3",
      ["f(x) = 2x² − 3x.", "f′(x) = 4x − 3."], {label:"Limit =", chk:{d:"2x^2-3x"}});
    C.expr(["1"], "Ch 2 Obj 1 ex1c", L + " Limit as h → 0 of {{(sin(x+h)-sin(x))/h}}", "cos(x)",
      ["f(x) = sin x.", "f′(x) = cos x."], {label:"Limit =", chk:{d:"sin(x)"}});
    C.expr(["1"], "Ch 2 Obj 1", L + " Limit as h → 0 of {{((x+h)^4-x^4)/h}}", "4x^3",
      ["f(x) = x⁴, so the limit is 4x³."], {label:"Limit =", chk:{d:"x^4"}});
    C.expr(["1"], "Ch 2 Obj 1", L + " Limit as h → 0 of {{(e^(x+h)-e^x)/h}}", "e^x",
      ["f(x) = eˣ, and eˣ is its own derivative."], {label:"Limit =", chk:{d:"e^x"}});
    C.expr(["1"], "Ch 2 Obj 1", L + " Limit as h → 0 of {{(cos(x+h)-cos(x))/h}}", "-sin(x)",
      ["f(x) = cos x, so the limit is −sin x."], {label:"Limit =", chk:{d:"cos(x)"}});
    C.expr(["1"], "Ch 2 Obj 1", L + " Limit as h → 0 of {{(sqrt(x+h)-sqrt(x))/h}}", "1/(2sqrt(x))",
      ["f(x) = √x = {{x^(1/2)}}.", "f′(x) = {{(1/2)x^(-1/2)}} = {{1/(2sqrt(x))}}."], {label:"Limit =", chk:{d:"sqrt(x)"}});
    C.expr(["1"], "Ch 2 Obj 1", L + " Limit as h → 0 of {{(1/(x+h)-1/x)/h}}", "-1/x^2",
      ["f(x) = {{1/x}} = {{x^(-1)}}.", "f′(x) = {{-x^(-2)}} = {{-1/x^2}}."], {label:"Limit =", chk:{d:"1/x"}});
    C.num(["1"], "Ch 2 Obj 1", L + " Limit as h → 0 of {{((2+h)^3-8)/h}}", "12",
      ["8 = 2³, so this is the derivative of x³ at x = 2.", "f′(x) = 3x², f′(2) = 12."], {chk:{dAt:["x^3", 2]}});
    C.d(["1"], "Ch 2 Obj 1", "4x^3-5x+2", "12x^2-5", ["Power rule on each term: 12x² − 5 (the constant's derivative is 0)."]);
    C.d(["1"], "Ch 2 Obj 1", "3sqrt(x)+2/x^2", "(3/2)x^(-1/2)-4x^(-3)",
      ["Rewrite: {{3x^(1/2)+2x^(-2)}}.", "Power rule: {{(3/2)x^(-1/2)-4x^(-3)}} = {{3/(2sqrt(x))-4/x^3}}."]);
    C.d(["1"], "Ch 2 Obj 1", "e^x-6x^(2/3)", "e^x-4x^(-1/3)", ["eˣ stays eˣ.", "{{6*(2/3)x^(-1/3)}} = {{4x^(-1/3)}}."]);
    C.d(["1"], "Ch 2 Obj 1", "5sin(x)-2cos(x)", "5cos(x)+2sin(x)", ["sin → cos, cos → −sin.", "5cos x − 2(−sin x) = 5cos x + 2sin x."]);
    C.d(["1"], "Ch 2 Obj 1", "tan(x)+sec(x)", "sec(x)^2+sec(x)tan(x)", ["tan x → sec²x; sec x → sec x tan x."]);
    C.pick(["1"], "Ch 2 Obj 1", "Where is f(x) = |x − 3| not differentiable?", ["x = 3", "x = 0", "x = −3", "Nowhere"], "x = 3",
      ["The graph has a corner at x = 3 (the slope jumps from −1 to 1).", "A corner means no single tangent line, so it's not differentiable there."]);
    C.pick(["1"], "Ch 2 Obj 1", "Which statement is always true?",
      ["If f is differentiable at x = a, then f is continuous at x = a.", "If f is continuous at x = a, then f is differentiable at x = a.", "If f is not differentiable at x = a, then f is not continuous at x = a.", "A function with a corner is not continuous."],
      "If f is differentiable at x = a, then f is continuous at x = a.",
      ["Differentiability ⇒ continuity.", "The reverse fails: |x| is continuous at 0 but has a corner, so it isn't differentiable there."]);
    C.pick(["1"], "Ch 2 Obj 1", "Why is f(x) = ∛x not differentiable at x = 0?", ["It has a vertical tangent there", "It has a corner there", "It isn't continuous there", "x = 0 isn't in its domain"], "It has a vertical tangent there",
      ["f′(x) = {{1/(3x^(2/3))}}, which blows up at x = 0.", "x = 0 is in the domain and the graph is smooth, but the tangent line is vertical (undefined slope)."]);

    /* ===== Obj 2: tangent & normal lines, motion ===== */
    const T = "2x^4-6x^2+2x-3";
    C.expr(["2"], "Ch 2 Obj 2 ex1a", "Let f(x) = 2x⁴ − 6x² + 2x − 3. Find the equation of the tangent line at x = 1.", "-2(x-1)-5",
      ["y₁ = f(1) = 2 − 6 + 2 − 3 = −5.", "f′(x) = 8x³ − 12x + 2, so m = f′(1) = −2.", "y + 5 = −2(x − 1), so y = −2(x − 1) − 5 = −2x − 3."], {label:"y =", ph:"e.g. -2x-3", chk:{tan:[T, 1]}});
    C.expr(["2"], "Ch 2 Obj 2 ex1b", "Let f(x) = 2x⁴ − 6x² + 2x − 3. Find the equation of the normal line at x = 1.", "(x-1)/2-5",
      ["From the tangent: point (1, −5), slope −2.", "Normal slope: flip and change sign → 1/2.", "y + 5 = (1/2)(x − 1), so y = (x − 1)/2 − 5."], {label:"y =", ph:"e.g. (x-1)/2-5", chk:{norm:[T, 1]}});
    C.expr(["2"], "Ch 2 Obj 2", "Find the tangent line to f(x) = eˣ at x = 0.", "x+1",
      ["y₁ = e⁰ = 1.", "f′(x) = eˣ, so m = 1.", "y − 1 = 1(x − 0) → y = x + 1."], {label:"y =", chk:{tan:["e^x", 0]}});
    C.expr(["2"], "Ch 2 Obj 2", "Find the tangent line to f(x) = sin x at x = π.", "-(x-pi)",
      ["y₁ = sin π = 0.", "f′(x) = cos x, so m = cos π = −1.", "y − 0 = −1(x − π) → y = −(x − π)."], {label:"y =", chk:{tan:["sin(x)", "pi"]}});
    C.expr(["2"], "Ch 2 Obj 2", "Find the normal line to f(x) = x² at x = 1.", "1-(x-1)/2",
      ["Point: (1, 1). Tangent slope: f′(1) = 2.", "Normal slope: −1/2.", "y − 1 = −(1/2)(x − 1) → y = 1 − (x − 1)/2."], {label:"y =", chk:{norm:["x^2", 1]}});
    C.expr(["2"], "Ch 2 Obj 2", "Find the tangent line to f(x) = √x at x = 4.", "2+(x-4)/4",
      ["y₁ = √4 = 2.", "f′(x) = {{1/(2sqrt(x))}}, so m = 1/4.", "y − 2 = (1/4)(x − 4)."], {label:"y =", chk:{tan:["sqrt(x)", 4]}});
    k.ask(["2"], "Ch 2 Obj 2", "At what x-values does f(x) = x³ − 3x have a horizontal tangent line?", [{l:"x =", t:"set", a:["1", "-1"], ph:"e.g. 2, -3"}],
      ["Horizontal tangent means slope 0: f′(x) = 3x² − 3 = 0.", "x² = 1 → x = 1 and x = −1."]);
    const X = "t^4-t^3+1";
    C.expr(["2"], "Ch 2 Obj 2 motion ex1a", "Position is x(t) = t⁴ − t³ + 1, in meters (t in seconds). Find the velocity v(t).", "4t^3-3t^2",
      ["Velocity is the derivative of position: v(t) = x′(t).", "v(t) = 4t³ − 3t²."], {label:"v(t) =", v:"t", chk:{d:X, v:"t"}});
    C.num(["2"], "Ch 2 Obj 2 motion ex1b", "Position is x(t) = t⁴ − t³ + 1 (meters, seconds). Find the velocity at t = 2 seconds.", "20",
      ["v(t) = 4t³ − 3t².", "v(2) = 4(8) − 3(4) = 32 − 12 = 20 m/s."], {label:"v(2) =", chk:{dAt:[X, 2], v:"t"}});
    k.ask(["2"], "Ch 2 Obj 2 motion ex1c", "Position is x(t) = t⁴ − t³ + 1. When is the particle at rest (t ≥ 0)?", [{l:"t =", t:"set", a:["0", "3/4"], ph:"e.g. 0, 2"}],
      ["At rest means v(t) = 0.", "4t³ − 3t² = t²(4t − 3) = 0.", "t = 0 or t = 3/4 seconds."]);
    C.pick(["2"], "Ch 2 Obj 2 motion ex1d", "Position is x(t) = t⁴ − t³ + 1 for t ≥ 0. When is the particle moving left?", ["0 < t < 3/4", "t > 3/4", "t > 0", "Only at t = 3/4"], "0 < t < 3/4",
      ["Moving left means v(t) < 0, where v(t) = t²(4t − 3).", "Sign chart: t² ≥ 0 always; 4t − 3 < 0 when t < 3/4.", "Test t = 1/2: (1/4)(−1) < 0 ✓. Test t = 1: (1)(1) > 0.", "So it moves left on (0, 3/4)."]);
    C.expr(["2"], "Ch 2 Obj 2", "Position is x(t) = t⁴ − t³ + 1. Find the acceleration a(t).", "12t^2-6t",
      ["a(t) = v′(t) = x″(t).", "v(t) = 4t³ − 3t², so a(t) = 12t² − 6t."], {label:"a(t) =", v:"t", chk:{d:"4t^3-3t^2", v:"t"}});
    C.num(["2"], "Ch 2 Obj 2", "s(t) = t² − 6t + 5 feet. At what time is the particle at rest?", "3",
      ["v(t) = 2t − 6.", "2t − 6 = 0 → t = 3 seconds."], {label:"t ="});
    C.pick(["2"], "Ch 2 Obj 2", "s(t) = t² − 6t + 5 for t ≥ 0. When is the particle moving right?", ["t > 3", "0 < t < 3", "t > 5", "1 < t < 5"], "t > 3",
      ["Moving right means v(t) > 0.", "v(t) = 2t − 6 > 0 → t > 3."]);
    C.pick(["2"], "Ch 2 Obj 2", "Position is in meters and time in seconds. What are the units of acceleration?", ["m/s²", "m/s", "m", "m²/s"], "m/s²",
      ["Acceleration is the rate of change of velocity: (m/s) per second = m/s²."]);
    C.pick(["2"], "Ch 2 Obj 2", "You're given the graph of g = f′. What does the height of that graph at x = 3 tell you?", ["The slope of f at x = 3", "The value of f(3)", "The area under f", "Where f is zero"], "The slope of f at x = 3",
      ["The graph shows f′, and f′(3) is the slope of f at x = 3."]);

    /* ===== Obj 3–4: product & quotient rules ===== */
    C.d(["3"], "Ch 2 Obj 3 ex1a", "2e^x*x^3", "2e^x*3x^2+2e^x*x^3", ["1 = 2eˣ, 2 = x³.", "1 · d2 + d1 · 2: 2eˣ · 3x² + 2eˣ · x³."]);
    C.d(["3"], "Ch 2 Obj 3 ex1b", "(x^3+1)tan(x)", "(x^3+1)sec(x)^2+3x^2tan(x)", ["1 = x³ + 1, 2 = tan x.", "(x³ + 1)sec²x + 3x² tan x."]);
    C.d(["3"], "Ch 2 Obj 4 ex1c", "(5x^3+2x)/(4x-1)", "((4x-1)(15x^2+2)-(5x^3+2x)*4)/(4x-1)^2",
      ["lo = 4x − 1, d-hi = 15x² + 2, hi = 5x³ + 2x, d-lo = 4.", "y′ = {{((4x-1)(15x^2+2)-(5x^3+2x)*4)/(4x-1)^2}}"]);
    C.d(["3"], "Ch 2 Obj 4 ex1d", "(2x+1)/(7x-4)", "-15/(7x-4)^2",
      ["{{((7x-4)*2-(2x+1)*7)/(7x-4)^2}}", "Top: 14x − 8 − 14x − 7 = −15.", "y′ = {{-15/(7x-4)^2}}"]);
    C.d(["3"], "Ch 2 Obj 3", "x^2sin(x)", "2xsin(x)+x^2cos(x)", ["Product: (x²)′ sin x + x² (sin x)′ = 2x sin x + x² cos x."]);
    C.d(["3"], "Ch 2 Obj 4", "e^x/x", "(xe^x-e^x)/x^2", ["lo d-hi − hi d-lo: x · eˣ − eˣ · 1.", "Over lo squared: {{(xe^x-e^x)/x^2}}."]);
    C.d(["3"], "Ch 2 Obj 3", "xe^xcos(x)", "e^xcos(x)+xe^xcos(x)-xe^xsin(x)",
      ["Three factors: take the derivative of one at a time.", "(x)′eˣcos x + x(eˣ)′cos x + xeˣ(cos x)′", "= eˣ cos x + x eˣ cos x − x eˣ sin x."]);
    C.d(["3"], "Ch 2 Obj 4", "sin(x)/(1+cos(x))", "1/(1+cos(x))",
      ["lo d-hi − hi d-lo: (1 + cos x)cos x − sin x(−sin x).", "= cos x + cos²x + sin²x = cos x + 1.", "Over (1 + cos x)²: it simplifies to {{1/(1+cos(x))}}."]);
    C.dAt(["3"], "Ch 2 Obj 4", "x^2/(x+1)", 1, "3/4",
      ["y′ = {{((x+1)(2x)-x^2)/(x+1)^2}} = {{(x^2+2x)/(x+1)^2}}.", "At x = 1: 3/4."]);
    C.num(["3"], "Ch 2 Obj 3 ex2", "h(x) = 2f(x)g(x), with f(1) = −1, g(1) = 2, f′(1) = −3, g′(1) = 4. Find h′(1).", "-20",
      ["h′(x) = 2f(x)g′(x) + 2f′(x)g(x).", "h′(1) = 2f(1)g′(1) + 2f′(1)g(1).", "= 2(−1)(4) + 2(−3)(2) = −8 − 12 = −20."], {label:"h′(1) ="});
    C.num(["3"], "Ch 2 Obj 4", "h(x) = f(x)/g(x), with f(1) = −1, g(1) = 2, f′(1) = −3, g′(1) = 4. Find h′(1).", "-1/2",
      ["h′(x) = {{(g(x)f′(x)-f(x)g′(x))/g(x)^2}}.", "h′(1) = {{(2(-3)-(-1)(4))/2^2}} = {{(-6+4)/4}} = −1/2."], {label:"h′(1) ="});
    C.num(["3"], "Ch 2 Obj 3", "h(x) = x²f(x), with f(3) = 2 and f′(3) = −1. Find h′(3).", "3",
      ["h′(x) = 2x f(x) + x² f′(x).", "h′(3) = 2(3)(2) + 9(−1) = 12 − 9 = 3."], {label:"h′(3) ="});
    C.pick(["3"], "Ch 2 Obj 3 ex3", "v(t) = t² − 6t + 8 for t ≥ 0. On which interval is the particle moving left?", ["2 < t < 4", "0 < t < 2", "t > 4", "0 < t < 4"], "2 < t < 4",
      ["Moving left: v(t) < 0. Factor: (t − 2)(t − 4).", "Negative between the roots, so 2 < t < 4."]);
    C.pick(["3"], "Ch 2 Obj 3 ex3", "v(t) = t² − 6t + 8 for t ≥ 0. When does the particle change direction?", ["t = 2 and t = 4", "t = 3 only", "t = 8", "Never"], "t = 2 and t = 4",
      ["Direction changes where v(t) changes sign: at its roots t = 2 and t = 4.", "(At t = 3, v is at its minimum but still negative, so no change.)"]);
  }
});
})();
