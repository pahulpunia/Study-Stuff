/* AP Calculus AB · Unit 2: Derivatives
   Source: the class's Unit 2 summary sheet (definition of the derivative, basic rules, trig and e^u
   derivatives, position/velocity/acceleration, common mistakes, "most difficult example").
   Every derivative key is checked numerically by tools/verify.js. */
(() => {
Study.addUnit("calcab", {
  id: "u2",
  name: "Unit 2: Derivatives",
  short: "Unit 2",
  sections: [
    {id:"2.1", name:"Definition of the derivative"},
    {id:"2.2", name:"Basic rules: power, product, quotient"},
    {id:"2.3", name:"Trig and eᵘ derivatives"},
    {id:"2.4", name:"Position, velocity, acceleration"}
  ],

  notes: {
    "2.1": [
      {sum:["A derivative is the slope of the tangent line, the instantaneous rate of change.",
            "Limit definition: f′(x) = lim as Δx → 0 of [f(x + Δx) − f(x)] / Δx.",
            "At one point c: f′(c) = lim as x → c of [f(x) − f(c)] / (x − c).",
            "Velocity is the derivative of position; acceleration is the derivative of velocity."]},
      {p:"**What it's for:** an average rate of change is the slope between two points. Slide the second point closer and closer to the first, and the slope of that secant line becomes the slope of the tangent line. That limit is the derivative."},
      {h:"Two versions of the definition"},
      {table:{head:["Version", "Formula", "Use it when"], rows:[
        ["General (no point)", "lim Δx→0 of [f(x + Δx) − f(x)] / Δx", "you want f′(x) as a function"],
        ["At a point c", "lim x→c of [f(x) − f(c)] / (x − c)", "you only need the slope at x = c"]]}},
      {ex:{q:"Use the definition to find f′(x) for f(x) = x².", a:["[(x + Δx)² − x²] / Δx = [x² + 2xΔx + Δx² − x²] / Δx.", "= (2xΔx + Δx²)/Δx = 2x + Δx.", "Let Δx → 0: f′(x) = 2x."]}},
      {ex:{q:"Use the point version to find f′(3) for f(x) = x² + 1.", a:["[f(x) − f(3)] / (x − 3) = (x² + 1 − 10)/(x − 3) = (x² − 9)/(x − 3).", "Factor: (x − 3)(x + 3)/(x − 3) = x + 3.", "Let x → 3: f′(3) = 6."]}},
      {tip:"On multiple choice, a limit that looks like [f(a + h) − f(a)] / h is secretly asking for f′(a). Recognize the function and the point, then just take the derivative."},
      {check:[
        {q:"What does f′(4) = 7 mean on a graph?", a:"The tangent line at x = 4 has slope 7."},
        {q:"What is lim h→0 of [(2 + h)³ − 8] / h?", a:"It's f′(2) for f(x) = x³: 3(2)² = 12."}]}
    ],
    "2.2": [
      {sum:["Constant: d/dx [c] = 0. Constant multiple: d/dx [c·f] = c·f′.",
            "Power rule: d/dx [xⁿ] = n·xⁿ⁻¹. Rewrite roots and fractions as powers first.",
            "Product rule: (fg)′ = f·g′ + g·f′. It's a plus, not a times.",
            "Quotient rule: (f/g)′ = (g·f′ − f·g′) / g². Bottom first: \"low d-high minus high d-low, over low squared.\""]},
      {p:"**What it's for:** the limit definition always works, but it's slow. These rules are shortcuts that give the same answer in one line."},
      {h:"Rewrite before you differentiate"},
      {table:{head:["Looks like", "Rewrite as"], rows:[["∛x", "x^(1/3)"], ["√x", "x^(1/2)"], ["{{1/x^3}}", "x^(−3)"], ["{{5/(2x^2)}}", "(5/2)x^(−2)"]]}},
      {ex:{q:"Find the derivative of g(x) = ∛x (x + 1). (The class's \"most difficult\" example.)", a:["Rewrite: g(x) = x^(1/3)(x + 1). Product rule with f = x^(1/3), g = x + 1.", "g′(x) = x^(1/3)(1) + (x + 1)·(1/3)x^(−2/3).", "Combine over the common bottom 3x^(2/3): g′(x) = {{(4x+1)/(3x^(2/3))}}.", "Shortcut check: multiply out first, g(x) = x^(4/3) + x^(1/3), so g′ = (4/3)x^(1/3) + (1/3)x^(−2/3). Same thing."]}},
      {ex:{q:"Find the derivative of y = {{(x^2+1)/(x-3)}}.", a:["Low = x − 3, high = x² + 1.", "y′ = [(x − 3)(2x) − (x² + 1)(1)] / (x − 3)².", "= {{(x^2-6x-1)/(x-3)^2}}."]}},
      {warn:"The product rule is f·g′ PLUS g·f′. Writing a times sign there (or using f′·g′) is the most common slip."},
      {tip:"Sometimes multiplying out or splitting the fraction first is easier than the product or quotient rule: (x³ + 2x)/x is just x² + 2."},
      {check:[
        {q:"Derivative of x^(−2)?", a:"−2x^(−3), or {{-2/x^3}}."},
        {q:"Product rule for (x²)(sin x)?", a:"x²·cos x + sin x·2x."},
        {q:"In the quotient rule, which goes first in the top: f′ or g′?", a:"Start with the bottom times the derivative of the top: g·f′ − f·g′."}]}
    ],
    "2.3": [
      {sum:["sin → cos, cos → −sin, tan → sec², cot → −csc², sec → sec·tan, csc → −csc·cot.",
            "The \"co\" functions (cos, cot, csc) all get a minus sign.",
            "d/dx [eᵘ] = eᵘ · u′. The e-part stays the same; multiply by the derivative of the exponent."]},
      {table:{head:["Function", "Derivative"], rows:[
        ["sin x", "cos x"], ["cos x", "−sin x"], ["tan x", "sec²x"], ["cot x", "−csc²x"], ["sec x", "sec x tan x"], ["csc x", "−csc x cot x"], ["eˣ", "eˣ"], ["eᵘ", "eᵘ · u′"]]}},
      {ex:{q:"Find the derivative of y = x² sin x.", a:["Product rule: x²·cos x + sin x·2x."]}},
      {ex:{q:"Find the derivative of y = {{e^(3x^2)}}.", a:["u = 3x², u′ = 6x.", "y′ = {{e^(3x^2)}} · 6x."]}},
      {ex:{q:"Find the derivative of y = tan x / x.", a:["Quotient rule: [x·sec²x − tan x·1] / x²."]}},
      {tip:"Memorize them in pairs: sin/cos, tan/sec² with cot/−csc², sec/sec tan with csc/−csc cot. If you know one of each pair, flip the signs and co-names to get the other."},
      {check:[
        {q:"Derivative of csc x?", a:"−csc x cot x."},
        {q:"Derivative of e^(5x)?", a:"5e^(5x)."},
        {q:"Which basic trig derivatives have a minus sign?", a:"The co- ones: cos, cot, and csc."}]}
    ],
    "2.4": [
      {sum:["Velocity v(t) = s′(t). Acceleration a(t) = v′(t) = s″(t).",
            "Units: position in meters → velocity in m/s → acceleration in m/s². Each derivative divides by one more unit of time.",
            "Positive velocity means moving right (or up); negative means left (or down); zero means at rest."]},
      {table:{head:["Quantity", "How to get it", "Units (if s is in feet, t in seconds)"], rows:[
        ["Position s(t)", "given", "ft"], ["Velocity v(t)", "s′(t)", "ft/s (distance/time)"], ["Acceleration a(t)", "v′(t) = s″(t)", "ft/s² (distance/time²)"]]}},
      {ex:{q:"s(t) = t³ − 6t² + 9t feet. Find v(t), a(t), and when the particle is at rest.", a:["v(t) = 3t² − 12t + 9 ft/s.", "a(t) = 6t − 12 ft/s².", "At rest when v = 0: 3(t − 1)(t − 3) = 0, so t = 1 and t = 3 seconds."]}},
      {warn:"Acceleration's units are distance/time², not distance/time. It's a rate of a rate."},
      {tip:"Higher derivatives just mean taking the derivative again: f‴ is the third, f⁽⁴⁾ the fourth. Go one step at a time and simplify between steps."},
      {check:[
        {q:"If position is in meters and time in minutes, what are the units of acceleration?", a:"Meters per minute squared (m/min²)."},
        {q:"What does v(2) = 0 mean?", a:"The particle is momentarily at rest at t = 2."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k), S = n => "Unit 2 · " + n;

    /* ===== 2.1 definition ===== */
    C.pick(["2.1"], S("definition"), "Which limit equals f′(3) for f(x) = x²?", ["lim h→0 of [(3 + h)² − 9] / h", "lim h→0 of [(3 + h)² − 3] / h", "lim h→0 of (3 + h)² / h", "lim h→0 of [(3 + h)² − 9] / 3"], "lim h→0 of [(3 + h)² − 9] / h",
      ["The definition is [f(3 + h) − f(3)] / h.", "f(3) = 9, so the top is (3 + h)² − 9."]);
    C.num(["2.1"], S("definition"), "Evaluate lim h→0 of [(2 + h)³ − 8] / h.", "12",
      ["This is f′(2) for f(x) = x³.", "f′(x) = 3x², so f′(2) = 12."]);
    C.num(["2.1"], S("definition"), "Use the definition f′(c) = lim x→c of [f(x) − f(c)] / (x − c) to find f′(3) for f(x) = x² + 1.", "6",
      ["[f(x) − f(3)]/(x − 3) = (x² − 9)/(x − 3) = x + 3.", "As x → 3: 6."], {label:"f′(3) ="});
    C.expr(["2.1"], S("definition"), "Use the limit definition to find f′(x) for f(x) = 3x² − x.", "6x-1",
      ["f(x + Δx) − f(x) = 3(2xΔx + Δx²) − Δx.", "Divide by Δx: 6x + 3Δx − 1.", "Let Δx → 0: 6x − 1."], {label:"f′(x) =", chk:{d:"3x^2-x", v:"x"}});
    C.num(["2.1"], S("definition"), "Evaluate lim h→0 of [sin(π/2 + h) − 1] / h.", "0",
      ["This is f′(π/2) for f(x) = sin x.", "cos(π/2) = 0."]);
    C.pick(["2.1"], S("meaning"), "f′(4) = −2 means that", ["the tangent line at x = 4 has slope −2", "f(4) = −2", "the function crosses the x-axis at x = 4", "the average rate of change from 0 to 4 is −2"], "the tangent line at x = 4 has slope −2",
      ["A derivative at a point is the slope of the tangent line there (the instantaneous rate of change)."]);
    C.num(["2.1"], S("definition"), "Evaluate lim x→5 of (√x − √5)/(x − 5).", "1/(2sqrt(5))",
      ["This is f′(5) for f(x) = √x.", "f′(x) = {{1/(2sqrt(x))}}, so f′(5) = {{1/(2sqrt(5))}}."]);

    /* ===== 2.2 rules ===== */
    C.d(["2.2"], S("power rule"), "4x^5-3x^2+7", "20x^4-6x", ["Power rule term by term; the constant 7 goes to 0."]);
    C.d(["2.2"], S("power rule"), "6sqrt(x)", "3/sqrt(x)", ["Rewrite: 6x^(1/2).", "6 · (1/2)x^(−1/2) = 3x^(−1/2) = {{3/sqrt(x)}}."]);
    C.d(["2.2"], S("power rule"), "2/x^3", "-6/x^4", ["Rewrite: 2x^(−3).", "−6x^(−4) = {{-6/x^4}}."]);
    C.d(["2.2"], S("power rule"), "x^(2/3)+5/x", "2/(3x^(1/3))-5/x^2", ["(2/3)x^(−1/3) − 5x^(−2)."]);
    C.d(["2.2"], S("most difficult example"), "x^(1/3)(x+1)", "(4x+1)/(3x^(2/3))",
      ["Product rule: x^(1/3)(1) + (x + 1)(1/3)x^(−2/3).", "Common bottom 3x^(2/3): [3x + (x + 1)] / (3x^(2/3)).", "= {{(4x+1)/(3x^(2/3))}}."], {pts:[0.4, 1, 1.7, 2.5, 3.3, 4.2]});
    C.d(["2.2"], S("product rule"), "(x^2+1)(3x-2)", "9x^2-4x+3", ["(x² + 1)(3) + (3x − 2)(2x) = 3x² + 3 + 6x² − 4x."]);
    C.d(["2.2"], S("product rule"), "x^3sqrt(x)", "7x^(5/2)/2", ["Easiest: combine first. x³ · x^(1/2) = x^(7/2).", "(7/2)x^(5/2)."], {pts:[0.5, 1, 2, 3, 4, 5]});
    C.d(["2.2"], S("quotient rule"), "(x^2+1)/(x-3)", "(x^2-6x-1)/(x-3)^2",
      ["[(x − 3)(2x) − (x² + 1)(1)] / (x − 3)².", "Top: 2x² − 6x − x² − 1 = x² − 6x − 1."]);
    C.d(["2.2"], S("quotient rule"), "(2x+5)/(x^2)", "(-2x-10)/x^3",
      ["Split first: 2/x + 5/x² = 2x^(−1) + 5x^(−2).", "−2x^(−2) − 10x^(−3) = {{(-2x-10)/x^3}}."]);
    C.d(["2.2"], S("quotient rule"), "x/(x+1)", "1/(x+1)^2", ["[(x + 1)(1) − x(1)] / (x + 1)² = {{1/(x+1)^2}}."]);
    C.dAt(["2.2"], S("tangent slope"), "x^3-4x", 2, "8", ["y′ = 3x² − 4.", "At x = 2: 12 − 4 = 8."]);
    C.expr(["2.2"], S("tangent line"), "Find the equation of the tangent line to y = x² − 3x + 1 at x = 2.", "1(x-2)-1",
      ["Point: y(2) = 4 − 6 + 1 = −1.", "Slope: y′ = 2x − 3 = 1 at x = 2.", "y + 1 = 1(x − 2), so y = x − 3."], {label:"y =", chk:{tan:["x^2-3x+1", 2]}});
    C.num(["2.2"], S("product rule"), "h(x) = f(x)g(x), with f(1) = 3, f′(1) = −2, g(1) = 4, g′(1) = 5. Find h′(1).", "7",
      ["h′ = f·g′ + g·f′.", "3(5) + 4(−2) = 15 − 8 = 7."], {label:"h′(1) ="});
    C.num(["2.2"], S("quotient rule"), "h(x) = f(x)/g(x), with f(2) = 6, f′(2) = 1, g(2) = 3, g′(2) = −1. Find h′(2).", "1",
      ["h′ = (g·f′ − f·g′)/g².", "[3(1) − 6(−1)] / 9 = 9/9 = 1."], {label:"h′(2) ="});
    C.pick(["2.2"], S("product rule"), "Which is the product rule?", ["(fg)′ = f·g′ + g·f′", "(fg)′ = f′·g′", "(fg)′ = f·g′ − g·f′", "(fg)′ = (f·g′ + g·f′)/g²"], "(fg)′ = f·g′ + g·f′",
      ["Each function takes a turn being differentiated, and the two pieces are added."]);

    /* ===== 2.3 trig and e^u ===== */
    C.d(["2.3"], S("trig"), "3sin(x)-2cos(x)", "3cos(x)+2sin(x)", ["sin → cos; cos → −sin, so −2cos x → +2 sin x."]);
    C.d(["2.3"], S("trig"), "x^2sin(x)", "x^2cos(x)+2xsin(x)", ["Product rule: x² cos x + sin x · 2x."]);
    C.d(["2.3"], S("trig"), "tan(x)/x", "(xsec(x)^2-tan(x))/x^2", ["Quotient rule: [x sec²x − tan x] / x²."], {pts:[0.3, 0.6, 0.9, 1.2, -0.5, -1]});
    C.d(["2.3"], S("trig"), "sec(x)+cot(x)", "sec(x)tan(x)-csc(x)^2", ["sec → sec tan; cot → −csc²."], {pts:[0.3, 0.6, 0.9, 1.2, 2, 2.5]});
    C.d(["2.3"], S("trig"), "xcsc(x)", "csc(x)-xcsc(x)cot(x)", ["Product rule: (1)csc x + x(−csc x cot x)."], {pts:[0.4, 0.8, 1.2, 2, 2.6, -0.7]});
    C.d(["2.3"], S("eᵘ"), "e^(3x^2)", "6xe^(3x^2)", ["eᵘ · u′ with u = 3x²."], {pts:[-0.8, -0.3, 0, 0.4, 0.7, 1]});
    C.d(["2.3"], S("eᵘ"), "5e^(-2x)", "-10e^(-2x)", ["5 · e^(−2x) · (−2)."]);
    C.d(["2.3"], S("eᵘ"), "x^2e^x", "x^2e^x+2xe^x", ["Product rule: x²eˣ + eˣ · 2x."]);
    C.d(["2.3"], S("eᵘ"), "e^(sin(x))", "cos(x)e^(sin(x))", ["u = sin x, so multiply by cos x."]);
    C.dAt(["2.3"], S("trig"), "sin(x)+cos(x)", "pi/4", "0", ["y′ = cos x − sin x.", "At π/4: √2/2 − √2/2 = 0."]);
    C.pick(["2.3"], S("trig"), "What is the derivative of cot x?", ["−csc²x", "csc²x", "−sec²x", "−csc x cot x"], "−csc²x", ["The co- version of tan → sec² gets a minus: cot → −csc²."]);
    C.pick(["2.3"], S("trig"), "What is the derivative of sec x?", ["sec x tan x", "−sec x tan x", "sec²x", "tan²x"], "sec x tan x", ["sec → sec · tan (no minus; it's not a co- function)."]);

    /* ===== 2.4 position, velocity, acceleration ===== */
    C.expr(["2.4"], S("velocity"), "s(t) = t³ − 6t² + 9t feet. Find the velocity v(t).", "3t^2-12t+9",
      ["v(t) = s′(t) = 3t² − 12t + 9."], {label:"v(t) =", v:"t", chk:{d:"t^3-6t^2+9t", v:"t"}});
    C.expr(["2.4"], S("acceleration"), "s(t) = t³ − 6t² + 9t feet. Find the acceleration a(t).", "6t-12",
      ["a(t) = v′(t) = 6t − 12."], {label:"a(t) =", v:"t"});
    C.set(["2.4"], S("at rest"), "s(t) = t³ − 6t² + 9t. At what times is the particle at rest?", ["1", "3"],
      ["At rest when v(t) = 0: 3t² − 12t + 9 = 0.", "3(t − 1)(t − 3) = 0, so t = 1 and t = 3."], {label:"t ="});
    C.num(["2.4"], S("velocity"), "s(t) = 4t² − 3t + 2 meters. Find the velocity at t = 3 seconds, in m/s.", "21",
      ["v(t) = 8t − 3.", "v(3) = 24 − 3 = 21 m/s."], {label:"v(3) ="});
    C.pick(["2.4"], S("units"), "Position is measured in meters and time in seconds. What are the units of acceleration?", ["m/s²", "m/s", "m", "s/m²"], "m/s²",
      ["Each derivative divides by another second: m → m/s → m/s²."]);
    C.pick(["2.4"], S("meaning"), "v(5) = −3 ft/s. What does this tell you?", ["At t = 5 the particle moves left (or down) at 3 ft/s", "At t = 5 the particle is 3 feet to the left of the origin", "The particle has slowed down by 3 ft/s", "At t = 5 the acceleration is −3 ft/s²"], "At t = 5 the particle moves left (or down) at 3 ft/s",
      ["Velocity gives direction (the sign) and speed (the size). It says nothing about position."]);
    C.expr(["2.4"], S("higher derivatives"), "Find the third derivative of f(x) = 2x⁵ − x³ + 4x.", "120x^2-6",
      ["f′ = 10x⁴ − 3x² + 4.", "f″ = 40x³ − 6x.", "f‴ = 120x² − 6."], {label:"f‴(x) ="});
    C.expr(["2.4"], S("higher derivatives"), "Find the fourth derivative of f(x) = sin x + eˣ.", "sin(x)+e^x",
      ["sin cycles every four derivatives: cos, −sin, −cos, sin.", "eˣ stays eˣ."], {label:"f⁽⁴⁾(x) ="});
  }
});
})();
