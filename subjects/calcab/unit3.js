/* AP Calculus AB · Unit 3: Composite, Implicit, and Inverse Function Derivatives
   Source: the class's Unit 3 summary sheet (Obj 1 chain rule, aᵘ, eᵘ; Obj 2 implicit differentiation;
   Obj 3 inverse trig; Obj 4 log properties and derivatives; Obj 5 differentiability and inverse functions).
   Every derivative key is checked numerically by tools/verify.js. */
(() => {
Study.addUnit("calcab", {
  id: "u3",
  name: "Unit 3: Chain Rule, Implicit & Inverses",
  short: "Unit 3",
  sections: [
    {id:"3.1", name:"Obj 1: Chain rule, aᵘ and eᵘ"},
    {id:"3.2", name:"Obj 2: Implicit differentiation"},
    {id:"3.3", name:"Obj 3: Inverse trig derivatives"},
    {id:"3.4", name:"Obj 4: Log properties and derivatives"},
    {id:"3.5", name:"Obj 5: Differentiability and inverse functions"}
  ],

  notes: {
    "3.1": [
      {sum:["Chain rule: d/dx [f(g(x))] = f′(g(x)) · g′(x). Outside first (keep the inside), then times the derivative of the inside.",
            "d/dx [eᵘ] = eᵘ · u′.",
            "d/dx [aᵘ] = aᵘ · u′ · ln a (any number base a)."]},
      {p:"**What it's for:** most functions are layers, like (3x + 1)⁵ or sin(x²). The chain rule peels one layer at a time and multiplies the rates together."},
      {steps:["**Find the outside layer:** the last thing you'd do if you plugged in a number.",
              "**Differentiate it,** copying the inside exactly as it is.",
              "**Multiply by the derivative of the inside.** If the inside has layers too, keep going."]},
      {ex:{q:"Find the derivative of y = (x² − 5x)⁴.", a:["Outside: ( )⁴. Inside: x² − 5x.", "4(x² − 5x)³ · (2x − 5)."]}},
      {ex:{q:"Find the derivative of y = 3^(2x).", a:["aᵘ rule with a = 3, u = 2x, u′ = 2.", "y′ = 3^(2x) · 2 · ln 3."]}},
      {ex:{q:"Find the derivative of y = sin³(4x).", a:["Rewrite: [sin(4x)]³. Three layers.", "3[sin(4x)]² · cos(4x) · 4 = 12 sin²(4x) cos(4x)."]}},
      {warn:"Two classic slips: forgetting the derivative of the inside, and changing the inside. The derivative of cos(5x) is −sin(5x) · 5, not −sin(5)."},
      {check:[{q:"Derivative of e^(x³)?", a:"e^(x³) · 3x²."}, {q:"Derivative of 2ˣ?", a:"2ˣ · ln 2."}, {q:"Derivative of √(4x + 1)?", a:"(1/2)(4x + 1)^(−1/2) · 4 = 2/√(4x + 1)."}]}
    ],
    "3.2": [
      {sum:["Use it when y isn't solved for (like x² + y² = 25).",
            "Every time you differentiate a y-term, multiply by dy/dx (chain rule).",
            "Steps: differentiate both sides → get the dy/dx terms on one side → factor out dy/dx → divide."]},
      {steps:["**Differentiate both sides** with respect to x. y-terms get a dy/dx; terms with x and y together need the product rule.",
              "**Move** every dy/dx term to one side and everything else to the other.",
              "**Factor** dy/dx out.",
              "**Divide** to solve for dy/dx."]},
      {ex:{q:"Find dy/dx for y⁴ − 3x²y = 18x² (the class example).", a:["d/dx: 4y³ y′ − (3x² y′ + 6xy) = 36x. The 3x²y term needs the product rule.", "Distribute the minus: 4y³ y′ − 3x² y′ − 6xy = 36x.", "Move 6xy over: y′(4y³ − 3x²) = 36x + 6xy.", "dy/dx = {{(36x+6xy)/(4y^3-3x^2)}}. (Watch the sign: it's + 6xy after moving it.)"]}},
      {ex:{q:"Find the slope of x² + y² = 25 at (3, 4).", a:["2x + 2y y′ = 0, so y′ = −x/y.", "At (3, 4): −3/4."]}},
      {warn:"When you move a term across the equals sign, its sign flips. That's where most implicit answers go wrong."},
      {check:[{q:"d/dx of y³?", a:"3y² · dy/dx."}, {q:"d/dx of xy?", a:"Product rule: x · dy/dx + y."}]}
    ],
    "3.3": [
      {sum:["arcsin u → u′/√(1 − u²) · arccos u → −u′/√(1 − u²)",
            "arctan u → u′/(1 + u²) · arccot u → −u′/(1 + u²)",
            "arcsec u → u′/(|u|√(u² − 1)) · arccsc u → −u′/(|u|√(u² − 1))",
            "The co- versions are just the negatives."]},
      {table:{head:["Function", "Derivative"], rows:[
        ["arcsin u", "{{1/sqrt(1-u^2)}} · u′"], ["arccos u", "{{-1/sqrt(1-u^2)}} · u′"], ["arctan u", "{{1/(1+u^2)}} · u′"], ["arccot u", "{{-1/(1+u^2)}} · u′"]]}},
      {ex:{q:"Find the derivative of y = arctan(3x).", a:["u = 3x, u′ = 3.", "y′ = {{3/(1+9x^2)}}."]}},
      {ex:{q:"Find the derivative of y = arcsin(x²).", a:["u = x², u′ = 2x.", "y′ = {{2x/sqrt(1-x^4)}}."]}},
      {warn:"sin⁻¹x means arcsin x (an angle), not 1/sin x."},
      {check:[{q:"Derivative of arccos x?", a:"{{-1/sqrt(1-x^2)}}."}, {q:"Derivative of arccot x?", a:"{{-1/(1+x^2)}}, the negative of arctan's."}]}
    ],
    "3.4": [
      {sum:["log(1) = 0. log(a/b) = log a − log b. log(ab) = log a + log b. log(aᵇ) = b·log a.",
            "d/dx [ln u] = u′/u.",
            "d/dx [logₐ u] = u′/(u ln a), for a number base a (when the base is e, it's just ln)."]},
      {p:"**Expand first.** Log properties turn products, quotients and powers into sums, differences and multiples, which are far easier to differentiate."},
      {ex:{q:"Find the derivative of y = ln(x³(x + 1)).", a:["Expand: 3 ln x + ln(x + 1).", "y′ = {{3/x}} + {{1/(x+1)}}."]}},
      {ex:{q:"Find the derivative of y = log₂(5x).", a:["u = 5x, u′ = 5.", "y′ = 5/(5x ln 2) = {{1/(x*ln(2))}}."]}},
      {check:[{q:"Derivative of ln(x² + 4)?", a:"{{2x/(x^2+4)}}."}, {q:"Rewrite ln(x/y) with log properties.", a:"ln x − ln y."}]}
    ],
    "3.5": [
      {sum:["Not differentiable at: discontinuities (jumps, vertical asymptotes, holes), sharp turns (corners and cusps), and vertical tangents.",
            "Differentiable means continuous, but continuous does NOT mean differentiable (|x| at 0 is continuous with a corner).",
            "Inverse functions: d/dx [f⁻¹(x)] = 1 / f′(f⁻¹(x)). If f(a) = b, then (f⁻¹)′(b) = 1/f′(a)."]},
      {ex:{q:"Is f(x) = |x − 2| differentiable at x = 2?", a:["It's continuous there, but the graph has a sharp corner.", "Slope from the left is −1, from the right is +1, so f′(2) doesn't exist."]}},
      {ex:{q:"f(x) = x³ + x + 1 and g is its inverse. Find g′(3).", a:["Find a with f(a) = 3: x³ + x + 1 = 3 → x = 1. That's f⁻¹(3), the y-value of the inverse.", "f′(x) = 3x² + 1, so f′(1) = 4.", "g′(3) = 1/f′(1) = 1/4."]}},
      {warn:"Don't plug the given x into f′. First find f⁻¹(x) (the matching input of f), then use f′ there."},
      {check:[{q:"Name three places a function isn't differentiable.", a:"A discontinuity, a corner or cusp, and a vertical tangent."}, {q:"f(2) = 5 and f′(2) = 3. If g = f⁻¹, what is g′(5)?", a:"1/3."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k), S = n => "Unit 3 · " + n;

    /* ===== 3.1 ===== */
    C.d(["3.1"], S("chain rule"), "(x^2-5x)^4", "4(x^2-5x)^3(2x-5)", ["Outside ( )⁴, inside x² − 5x.", "4(x² − 5x)³ · (2x − 5)."]);
    C.d(["3.1"], S("chain rule"), "sqrt(4x+1)", "2/sqrt(4x+1)", ["(1/2)(4x + 1)^(−1/2) · 4.", "= {{2/sqrt(4x+1)}}."]);
    C.d(["3.1"], S("chain rule"), "sin(x^2)", "2xcos(x^2)", ["cos(x²) times the derivative of the inside, 2x."]);
    C.d(["3.1"], S("chain rule"), "cos(5x)^3", "-15cos(5x)^2sin(5x)", ["[cos 5x]³: 3[cos 5x]² · (−sin 5x) · 5."]);
    C.d(["3.1"], S("chain rule"), "1/(2x-1)^3", "-6/(2x-1)^4", ["Rewrite (2x − 1)^(−3).", "−3(2x − 1)^(−4) · 2 = {{-6/(2x-1)^4}}."]);
    C.d(["3.1"], S("chain rule"), "x(3x+2)^4", "(3x+2)^4+12x(3x+2)^3", ["Product rule: (1)(3x + 2)⁴ + x · 4(3x + 2)³ · 3."]);
    C.d(["3.1"], S("eᵘ"), "e^(x^3)", "3x^2e^(x^3)", ["eᵘ · u′ with u = x³."], {pts:[-1, -0.5, 0.2, 0.6, 0.9, 1.1]});
    C.d(["3.1"], S("eᵘ"), "e^(tan(x))", "sec(x)^2e^(tan(x))", ["u = tan x, u′ = sec²x."], {pts:[-0.9, -0.4, 0, 0.3, 0.6, 0.9]});
    C.d(["3.1"], S("aᵘ"), "3^(2x)", "2ln(3)3^(2x)", ["aᵘ · u′ · ln a = 3^(2x) · 2 · ln 3."]);
    C.d(["3.1"], S("aᵘ"), "5^(x^2)", "2xln(5)5^(x^2)", ["5^(x²) · 2x · ln 5."], {pts:[-1, -0.5, 0.1, 0.5, 0.8, 1.1]});
    C.d(["3.1"], S("aᵘ"), "2^x", "ln(2)2^x", ["aˣ · ln a."]);
    C.num(["3.1"], S("chain rule"), "h(x) = f(g(x)), with g(2) = 5, g′(2) = 3, f′(5) = −4, f′(2) = 7. Find h′(2).", "-12",
      ["h′(2) = f′(g(2)) · g′(2) = f′(5) · 3.", "−4 · 3 = −12."], {label:"h′(2) ="});
    C.expr(["3.1"], S("tangent line"), "Find the equation of the tangent line to y = e^(2x) at x = 0.", "2x+1",
      ["Point (0, 1).", "y′ = 2e^(2x), slope 2 at x = 0.", "y = 2x + 1."], {label:"y =", chk:{tan:["e^(2x)", 0]}});

    /* ===== 3.2 implicit ===== */
    C.expr(["3.2"], S("implicit, class example"), "Find dy/dx for y⁴ − 3x²y = 18x².", "(36x+6xy)/(4y^3-3x^2)",
      ["4y³ y′ − (3x² y′ + 6xy) = 36x.", "y′(4y³ − 3x²) = 36x + 6xy.", "dy/dx = {{(36x+6xy)/(4y^3-3x^2)}}."], {label:"dy/dx =", vars:["x", "y"]});
    C.expr(["3.2"], S("implicit"), "Find dy/dx for x² + y² = 25.", "-x/y",
      ["2x + 2y y′ = 0.", "y′ = −x/y."], {label:"dy/dx =", vars:["x", "y"]});
    C.expr(["3.2"], S("implicit"), "Find dy/dx for x³ + y³ = 6xy.", "(2y-x^2)/(y^2-2x)",
      ["3x² + 3y² y′ = 6(x y′ + y).", "y′(3y² − 6x) = 6y − 3x².", "Divide by 3: {{(2y-x^2)/(y^2-2x)}}."], {label:"dy/dx =", vars:["x", "y"]});
    C.expr(["3.2"], S("implicit"), "Find dy/dx for xy + y² = 10.", "-y/(x+2y)",
      ["(x y′ + y) + 2y y′ = 0.", "y′(x + 2y) = −y.", "y′ = {{-y/(x+2y)}}."], {label:"dy/dx =", vars:["x", "y"]});
    C.expr(["3.2"], S("implicit"), "Find dy/dx for sin y = x².", "2x/cos(y)",
      ["cos y · y′ = 2x.", "y′ = {{2x/cos(y)}}."], {label:"dy/dx =", vars:["x", "y"]});
    C.num(["3.2"], S("implicit slope"), "Find the slope of x² + y² = 25 at the point (3, 4).", "-3/4",
      ["y′ = −x/y.", "−3/4."], {label:"Slope"});
    C.num(["3.2"], S("implicit slope"), "Find dy/dx for x²y + y³ = 10 at the point (3, 1).", "-1/2",
      ["2xy + x² y′ + 3y² y′ = 0, so y′ = −2xy/(x² + 3y²).", "At (3, 1): −6/(9 + 3) = −1/2."], {label:"dy/dx ="});

    /* ===== 3.3 inverse trig ===== */
    C.d(["3.3"], S("inverse trig"), "arctan(3x)", "3/(1+9x^2)", ["{{1/(1+(3x)^2)}} · 3."]);
    C.d(["3.3"], S("inverse trig"), "arcsin(x^2)", "2x/sqrt(1-x^4)", ["{{1/sqrt(1-(x^2)^2)}} · 2x."], {pts:[0.1, 0.3, 0.5, 0.7, 0.85, -0.4]});
    C.d(["3.3"], S("inverse trig"), "arccos(2x)", "-2/sqrt(1-4x^2)", ["Negative of arcsin's: {{-1/sqrt(1-4x^2)}} · 2."], {pts:[0.05, 0.15, 0.25, 0.35, -0.2, -0.4]});
    C.expr(["3.3"], S("inverse trig"), "Find the derivative of y = arccot(x³).", "-3x^2/(1+x^6)", ["{{-1/(1+(x^3)^2)}} · 3x²."], {label:"dy/dx =", chk:{d:"pi/2-arctan(x^3)", v:"x"}});
    C.d(["3.3"], S("inverse trig"), "xarctan(x)", "arctan(x)+x/(1+x^2)", ["Product rule: arctan x + x · {{1/(1+x^2)}}."]);
    C.d(["3.3"], S("inverse trig"), "arcsin(e^x)", "e^x/sqrt(1-e^(2x))", ["u = eˣ: {{e^x/sqrt(1-(e^x)^2)}}."], {pts:[-3, -2, -1.5, -1, -0.5, -0.2]});
    C.pick(["3.3"], S("inverse trig"), "Which is the derivative of arccot u?", ["−u′/(1 + u²)", "u′/(1 + u²)", "−u′/√(1 − u²)", "−csc²u · u′"], "−u′/(1 + u²)", ["The co- version is the negative of arctan's derivative."]);

    /* ===== 3.4 logs ===== */
    C.d(["3.4"], S("ln u"), "ln(x^2+4)", "2x/(x^2+4)", ["u′/u."]);
    C.d(["3.4"], S("ln u"), "ln(x^3(x+1))", "3/x+1/(x+1)", ["Expand: 3 ln x + ln(x + 1).", "{{3/x}} + {{1/(x+1)}}."], {pts:[0.3, 0.8, 1.5, 2.2, 3, 4]});
    C.d(["3.4"], S("ln u"), "ln((2x+1)/(x-3))", "2/(2x+1)-1/(x-3)", ["Expand: ln(2x + 1) − ln(x − 3).", "{{2/(2x+1)}} − {{1/(x-3)}}."], {pts:[3.5, 4, 5, 6.5, 8, 10]});
    C.d(["3.4"], S("ln u"), "xln(x)", "ln(x)+1", ["Product rule: ln x + x · {{1/x}}."], {pts:[0.3, 0.8, 1.5, 2.2, 3, 4]});
    C.d(["3.4"], S("ln u"), "ln(sin(x))", "cos(x)/sin(x)", ["u′/u = cos x / sin x = cot x."], {pts:[0.3, 0.7, 1.1, 1.5, 2, 2.6]});
    C.expr(["3.4"], S("logₐ u"), "Find the derivative of y = log₂(5x).", "1/(xln(2))", ["u′/(u ln a) = 5/(5x ln 2) = {{1/(x*ln(2))}}."], {label:"dy/dx =", chk:{d:"log(5x)/log(2)", v:"x", pts:[0.3, 0.8, 1.5, 2.2, 3, 4]}});
    C.expr(["3.4"], S("logₐ u"), "Find the derivative of y = log₁₀(x² + 1).", "2x/((x^2+1)ln(10))", ["u′/(u ln 10) = {{2x/((x^2+1)ln(10))}}."], {label:"dy/dx =", chk:{d:"log(x^2+1)/log(10)", v:"x"}});
    C.pick(["3.4"], S("log properties"), "Which is equal to ln(x⁵/y)?", ["5 ln x − ln y", "5 ln x + ln y", "ln 5x − ln y", "(ln x)⁵ − ln y"], "5 ln x − ln y", ["Quotient → subtract. Power → multiply in front."]);

    /* ===== 3.5 differentiability and inverses ===== */
    C.pick(["3.5"], S("differentiability"), "At which kind of point can a function be continuous but NOT differentiable?", ["A sharp corner or cusp", "A jump", "A hole", "A vertical asymptote"], "A sharp corner or cusp",
      ["Jumps, holes and asymptotes aren't even continuous.", "A corner is continuous, but the slopes from each side don't match."]);
    C.pick(["3.5"], S("differentiability"), "Is f(x) = |x − 2| differentiable at x = 2?", ["No, it has a sharp corner there", "Yes, because it is continuous there", "No, it has a hole there", "Yes, its slope there is 0"], "No, it has a sharp corner there",
      ["Slope −1 from the left and +1 from the right, so there's no single tangent slope."]);
    C.pick(["3.5"], S("differentiability"), "Which statement is always true?", ["If f is differentiable at c, then f is continuous at c", "If f is continuous at c, then f is differentiable at c", "If f has a limit at c, then f is differentiable at c", "If f(c) exists, then f is differentiable at c"], "If f is differentiable at c, then f is continuous at c",
      ["Differentiable implies continuous; the reverse fails at corners and cusps."]);
    C.num(["3.5"], S("inverse functions"), "f(x) = x³ + x + 1 and g is its inverse. Find g′(3).", "1/4",
      ["f(1) = 3, so g(3) = 1.", "f′(1) = 3 + 1 = 4.", "g′(3) = 1/4."], {label:"g′(3) ="});
    C.num(["3.5"], S("inverse functions"), "f(x) = 2x + eˣ and g = f⁻¹. Find g′(1).", "1/3",
      ["f(0) = 1, so g(1) = 0.", "f′(x) = 2 + eˣ, f′(0) = 3.", "g′(1) = 1/3."], {label:"g′(1) ="});
    C.num(["3.5"], S("inverse functions"), "f(4) = 9, f′(4) = 2, f(9) = 4, f′(9) = 6. If g = f⁻¹, find g′(9).", "1/2",
      ["f(a) = 9 means a = 4.", "g′(9) = 1/f′(4) = 1/2 (not 1/f′(9))."], {label:"g′(9) ="});
    C.num(["3.5"], S("inverse functions"), "f(x) = x⁵ + 2x − 1 and g = f⁻¹. Find g′(2).", "1/7",
      ["f(1) = 1 + 2 − 1 = 2, so g(2) = 1.", "f′(x) = 5x⁴ + 2, f′(1) = 7.", "g′(2) = 1/7."], {label:"g′(2) ="});
  }
});
})();
