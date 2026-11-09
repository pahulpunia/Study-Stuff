/* Calculus BC · Chapter 3: More Derivative Rules
   Source: Ch 3 Obj 1 (Chain Rule) and Obj 3 (Inverse Functions) class notes. Every answer key is checked numerically (tools/verify.js). */
(() => {
Study.addUnit("calc", {
  id: "c3",
  name: "Ch 3: More Derivative Rules",
  short: "Ch 3",
  sections: [
    {id:"1", name:"Obj 1: Chain Rule"},
    {id:"3", name:"Obj 3: Inverse Functions"}
  ],

  notes: {
    "1": [
      {sum:["Chain rule: the derivative of f(g(x)) is f′(g(x)) · g′(x).",
            "Do the outside first, keep the inside exactly as it is, then multiply by the derivative of the inside.",
            "Use it whenever there's a grouping: ( )ⁿ, √( ), sin( ), e^( ), ln( ).",
            "One rule at a time: power rule, trig, eˣ, or product/quotient on the outside, then work inward."]},
      {p:"**What it's for:** most real functions are built from layers, like sin(3x) or (x² + 1)⁵. The chain rule handles one layer at a time. Think of it as rates multiplying: if the outside changes 4 times as fast as the inside, and the inside changes 3 times as fast as x, the whole thing changes 12 times as fast as x."},
      {h:"The rule"},
      {p:"d/dx [f(g(x))] = f′(g(x)) · g′(x). The inside g(x) stays inside and doesn't change when you take the outside derivative."},
      {steps:["**Find the outside layer.** It's the last thing you'd do if you plugged in a number: the power, the trig function, the e^( ).",
              "**Take its derivative,** copying the inside exactly as it is.",
              "**Multiply by the derivative of the inside.** If the inside has its own layers, keep going.",
              "**Simplify** only if the question needs it (multiple choice answers are often simplified)."]},
      {ex:{q:"Find the derivative of y = {{(x^3-4x+1)^4}}.", a:["Outside: ( )⁴. Inside: x³ − 4x + 1.", "Power rule on the outside: 4(x³ − 4x + 1)³.", "Times the derivative of the inside: y′ = 4(x³ − 4x + 1)³(3x² − 4)."]}},
      {ex:{q:"Find the derivative of y = sin²x.", a:["Rewrite: y = (sin x)². The square is the outside.", "y′ = 2(sin x) · cos x.", "Using 2 sin θ cos θ = sin 2θ, that's sin 2x (handy for multiple choice)."]}},
      {ex:{q:"Find the derivative of y = 3cos⁴(3x − π/4).", a:["Rewrite: y = 3[cos(3x − π/4)]⁴. Three layers: power, cos, then 3x − π/4.", "Power: 12[cos(3x − π/4)]³.", "Times the derivative of cos: −sin(3x − π/4).", "Times the derivative of the inside: 3.", "y′ = −36 cos³(3x − π/4) sin(3x − π/4)."]}},
      {h:"Chain rule versions of the basic rules"},
      {table:{head:["Function (u is the inside)", "Derivative"], rows:[
        ["{{u^n}}", "{{nu^(n-1)}} · u′"], ["{{e^u}}", "{{e^u}} · u′"], ["ln u", "{{1/u}} · u′"],
        ["sin u", "cos u · u′"], ["cos u", "−sin u · u′"], ["tan u", "sec²u · u′"], ["√u", "{{1/(2sqrt(u))}} · u′"]]}},
      {h:"With a table of values"},
      {p:"If h(x) = f(g(x)), then h′(x) = f′(g(x)) · g′(x). Find the inside value first, then look up f′ at THAT value."},
      {ex:{q:"Let h(x) = f(g(x)). Find h′(1) given f(1) = 2, f′(1) = 1, f′(2) = −4, g(1) = 2, g′(1) = −3, g′(2) = 5.", a:["h′(1) = f′(g(1)) · g′(1).", "g(1) = 2, so this is f′(2) · g′(1).", "= −4 · −3 = 12."]}},
      {h:"Tangent lines"},
      {ex:{q:"Find the equation of the tangent line to y = {{5e^(4x)}} at (0, 5).", a:["y′ = 5e^(4x) · 4 (4 is the derivative of the inside).", "Slope at x = 0: 5e⁰ · 4 = 20.", "y − 5 = 20(x − 0)."]}},
      {tip:"Review identities that show up in answers: sin²θ + cos²θ = 1 and 2 sin θ cos θ = sin 2θ."},
      {warn:"The most common mistake is forgetting to multiply by the derivative of the inside. The second most common is changing the inside: the derivative of sin(3x) is cos(3x) · 3, not cos(3)."},
      {check:[
        {q:"Find the derivative of {{(2x+1)^5}}.", a:"5(2x + 1)⁴ · 2 = 10(2x + 1)⁴."},
        {q:"Find the derivative of {{e^(x^2)}}.", a:"{{e^(x^2)}} · 2x."},
        {q:"If h(x) = f(g(x)), what do you look up first to find h′(3)?", a:"g(3). Then find f′ at that value and multiply by g′(3)."},
        {q:"Find the derivative of ln(5x).", a:"{{1/(5x)}} · 5 = {{1/x}}."}]}
    ],
    "3": [
      {sum:["arcsin x is the same as sin⁻¹x, and it does NOT mean 1/sin x.",
            "Inverse trig derivatives: memorize the table, then multiply by u′ (chain rule).",
            "The co- versions (arccos, arccot, arccsc) are just the negatives of the others.",
            "Inverse functions: if f(a) = b, then g(b) = a and g′(b) = 1/f′(a)."]},
      {p:"**What it's for:** inverse trig functions turn a ratio back into an angle (like finding the angle of a ramp from its height and length). Their derivatives show up later when integrating things like {{1/(1+x^2)}}. The inverse function rule lets you find the slope of an inverse without ever solving for it."},
      {h:"Inverse trig derivatives (u = f(x))"},
      {table:{head:["Function", "Derivative"], rows:[
        ["arcsin u", "{{1/sqrt(1-u^2)}} · u′"], ["arccos u", "{{-1/sqrt(1-u^2)}} · u′"],
        ["arctan u", "{{1/(1+u^2)}} · u′"], ["arccot u", "{{-1/(1+u^2)}} · u′"],
        ["arcsec u", "{{1/(abs(u)sqrt(u^2-1))}} · u′"], ["arccsc u", "{{-1/(abs(u)sqrt(u^2-1))}} · u′"]]}},
      {ex:{q:"Find the derivative of y = 2x · sin⁻¹(4x).", a:["Product rule: 1 = 2x, 2 = sin⁻¹(4x).", "d2 = {{1/sqrt(1-16x^2)}} · 4.", "y′ = 2x · {{4/sqrt(1-16x^2)}} + 2 sin⁻¹(4x)."]}},
      {ex:{q:"Find the derivative of y = arctan({{e^(3x)}}).", a:["u = {{e^(3x)}}, u′ = 3{{e^(3x)}}.", "y′ = {{1/(1+(e^(3x))^2)}} · 3{{e^(3x)}} = {{3e^(3x)/(1+e^(6x))}}."]}},
      {ex:{q:"Find the derivative of y = sin⁻¹[cos(2x)] (a multiple choice favorite).", a:["y′ = {{1/sqrt(1-cos(2x)^2)}} · (−sin(2x) · 2).", "1 − cos²(2x) = sin²(2x), so the bottom is sin(2x) (when sin 2x > 0).", "y′ = −2 sin(2x)/sin(2x) = −2."]}},
      {h:"Derivatives of inverse functions"},
      {p:"Inverses swap x and y: if f has the point (2, 4), then g has (4, 2). Slopes flip too (Δy/Δx becomes Δx/Δy), so the slope of g at b is 1 over the slope of f at a."},
      {p:"If f and g are inverses and f(a) = b, then g′(b) = 1 / f′(a)."},
      {steps:["**Find the ordered pair.** You're given the x-value for g (call it b). Set f(x) = b and solve for x = a.",
              "**Use the formula:** g′(b) = 1/f′(a). Plug in a, not b."]},
      {ex:{q:"f and g are inverses, f(x) = x² − 4 for x ≥ 0. Find g′(0).", a:["x = 0 for g means y = 0 for f: x² − 4 = 0, so x = 2 (x ≥ 0).", "f has (2, 0), g has (0, 2).", "f′(x) = 2x, f′(2) = 4.", "g′(0) = 1/f′(2) = 1/4."]}},
      {ex:{q:"Find g′(5) if g(x) = f⁻¹(x), f(5) = 12, f(8) = 5, f′(5) = −2, f′(8) = 4.", a:["We need f(a) = 5. That's a = 8.", "g′(5) = 1/f′(8) = 1/4 (not 1/f′(5))."]}},
      {warn:"The classic trap: plugging b into f′. Always find a first, where f(a) = b."},
      {check:[
        {q:"What's the derivative of arctan x?", a:"{{1/(1+x^2)}}."},
        {q:"Does sin⁻¹x mean 1/sin x?", a:"No. It's arcsin x, the angle whose sine is x. 1/sin x is csc x."},
        {q:"f(3) = 7 and f′(3) = 2. If g = f⁻¹, find g′(7).", a:"g′(7) = 1/f′(3) = 1/2."},
        {q:"How do arccos and arcsin derivatives compare?", a:"arccos is just the negative of arcsin's."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);

    /* ===== Obj 1: chain rule ===== */
    C.d(["1"], "Ch 3 Obj 1 ex1a", "(x^3-4x+1)^4", "4(x^3-4x+1)^3(3x^2-4)",
      ["Outside: ( )⁴. Inside: x³ − 4x + 1.", "4(x³ − 4x + 1)³ times the derivative of the inside, 3x² − 4."]);
    C.d(["1"], "Ch 3 Obj 1 ex1b", "sin(x)^2", "2sin(x)cos(x)",
      ["Rewrite as (sin x)².", "2(sin x) · cos x, which also equals sin 2x."]);
    C.d(["1"], "Ch 3 Obj 1 ex1c", "3cos(3x-pi/4)^4", "-36cos(3x-pi/4)^3sin(3x-pi/4)",
      ["Layers: ( )⁴, then cos, then 3x − π/4.", "12[cos(3x − π/4)]³ · (−sin(3x − π/4)) · 3.", "= −36 cos³(3x − π/4) sin(3x − π/4)."]);
    C.d(["1"], "Ch 3 Obj 1", "(2x+1)^5", "10(2x+1)^4", ["5(2x + 1)⁴ · 2 = 10(2x + 1)⁴."]);
    C.d(["1"], "Ch 3 Obj 1", "sqrt(x^2+9)", "x/sqrt(x^2+9)",
      ["Rewrite: {{(x^2+9)^(1/2)}}.", "(1/2){{(x^2+9)^(-1/2)}} · 2x = {{x/sqrt(x^2+9)}}."]);
    C.d(["1"], "Ch 3 Obj 1", "e^(x^2)", "2xe^(x^2)", ["e^u stays e^u, times u′ = 2x."]);
    C.d(["1"], "Ch 3 Obj 1", "sin(5x)", "5cos(5x)", ["cos(5x), times the derivative of the inside (5)."]);
    C.d(["1"], "Ch 3 Obj 1", "ln(x^2+1)", "2x/(x^2+1)", ["Derivative of ln u is u′/u.", "{{2x/(x^2+1)}}."]);
    C.d(["1"], "Ch 3 Obj 1", "tan(3x^2)", "6xsec(3x^2)^2", ["sec²(3x²) times the derivative of the inside, 6x."]);
    C.d(["1"], "Ch 3 Obj 1", "1/(4x-3)^2", "-8/(4x-3)^3",
      ["Rewrite: {{(4x-3)^(-2)}}.", "−2{{(4x-3)^(-3)}} · 4 = {{-8/(4x-3)^3}}."]);
    C.d(["1"], "Ch 3 Obj 1", "xe^(-2x)", "e^(-2x)-2xe^(-2x)",
      ["Product rule, with a chain rule inside.", "(x)′e^(−2x) + x · e^(−2x) · (−2).", "= {{e^(-2x)-2xe^(-2x)}}."]);
    C.d(["1"], "Ch 3 Obj 1", "cos(e^x)", "-e^xsin(e^x)", ["−sin(eˣ) times the derivative of the inside, eˣ."]);
    C.num(["1"], "Ch 3 Obj 1 ex2", "Let h(x) = f(g(x)). Find h′(1) given f(1) = 2, f′(1) = 1, f′(2) = −4, g(1) = 2, g′(1) = −3, g′(2) = 5.", "12",
      ["h′(x) = f′(g(x)) · g′(x).", "h′(1) = f′(g(1)) · g′(1) = f′(2) · g′(1).", "= −4 · −3 = 12."], {label:"h′(1) ="});
    C.num(["1"], "Ch 3 Obj 1", "Let h(x) = g(f(x)). Using f(1) = 2, f′(1) = 1, g′(1) = −3, g′(2) = 5, find h′(1).", "5",
      ["h′(1) = g′(f(1)) · f′(1).", "f(1) = 2, so g′(2) · f′(1) = 5 · 1 = 5."], {label:"h′(1) ="});
    C.num(["1"], "Ch 3 Obj 1", "Let h(x) = [f(x)]³. Given f(2) = −1 and f′(2) = 4, find h′(2).", "12",
      ["h′(x) = 3[f(x)]² · f′(x).", "h′(2) = 3(−1)² · 4 = 12."], {label:"h′(2) ="});
    C.expr(["1"], "Ch 3 Obj 1 ex3", "Find the equation of the tangent line to y = 5e^(4x) at (0, 5).", "20x+5",
      ["y′ = 5e^(4x) · 4.", "Slope at x = 0: 5 · 1 · 4 = 20.", "y − 5 = 20(x − 0), so y = 20x + 5."], {label:"y =", chk:{tan:["5e^(4x)", 0]}});
    C.expr(["1"], "Ch 3 Obj 1", "Find the equation of the tangent line to y = (x² − 3)³ at x = 2.", "12(x-2)+1",
      ["Point: (2, 1³) = (2, 1).", "y′ = 3(x² − 3)² · 2x. At x = 2: 3(1)(4) = 12.", "y − 1 = 12(x − 2)."], {label:"y =", chk:{tan:["(x^2-3)^3", 2]}});
    C.pick(["1"], "Ch 3 Obj 1", "Which is the derivative of sin²x?", ["sin 2x", "2 sin x", "cos²x", "2 cos x"], "sin 2x",
      ["2 sin x cos x, and 2 sin x cos x = sin 2x."]);
    C.dAt(["1"], "Ch 3 Obj 1", "sqrt(3x+1)", 5, "3/8",
      ["y′ = {{3/(2sqrt(3x+1))}}.", "At x = 5: {{3/(2sqrt(16))}} = 3/8."]);

    /* ===== Obj 3: inverse functions ===== */
    C.d(["3"], "Ch 3 Obj 3 ex1a", "2xarcsin(4x)", "8x/sqrt(1-16x^2)+2arcsin(4x)",
      ["Product rule: 1 = 2x, 2 = sin⁻¹(4x).", "d2 = {{4/sqrt(1-16x^2)}}.", "2x · {{4/sqrt(1-16x^2)}} + 2 sin⁻¹(4x)."], {pts:[0.03, 0.08, 0.12, 0.17, 0.21, -0.1]});
    C.d(["3"], "Ch 3 Obj 3 ex1b", "arctan(e^(3x))", "3e^(3x)/(1+e^(6x))",
      ["u = e^(3x), u′ = 3e^(3x).", "{{1/(1+(e^(3x))^2)}} · 3e^(3x) = {{3e^(3x)/(1+e^(6x))}}."]);
    C.d(["3"], "Ch 3 Obj 3 ex1c", "arcsin(cos(2x))", "-2",
      ["{{1/sqrt(1-cos(2x)^2)}} · (−2 sin 2x).", "The bottom is √(sin²2x) = sin 2x (sin 2x > 0 here).", "So y′ = −2."], {pts:[0.2, 0.4, 0.6, 0.9, 1.2, 1.4], text:"Find the derivative for 0 < x < π/2."});
    C.d(["3"], "Ch 3 Obj 3", "arctan(5x)", "5/(1+25x^2)", ["{{1/(1+(5x)^2)}} · 5."]);
    C.d(["3"], "Ch 3 Obj 3", "arcsin(x^2)", "2x/sqrt(1-x^4)", ["{{1/sqrt(1-(x^2)^2)}} · 2x."], {pts:[0.1, 0.3, 0.5, 0.7, 0.9, -0.4]});
    C.d(["3"], "Ch 3 Obj 3", "arccos(3x)", "-3/sqrt(1-9x^2)", ["arccos is the negative of arcsin: {{-1/sqrt(1-9x^2)}} · 3."], {pts:[0.05, 0.1, 0.15, 0.2, 0.3, -0.2]});
    C.d(["3"], "Ch 3 Obj 3", "x*arctan(x)", "arctan(x)+x/(1+x^2)",
      ["Product rule: (x)′ arctan x + x · {{1/(1+x^2)}}."]);
    C.d(["3"], "Ch 3 Obj 3", "arcsec(2x)", "1/(abs(x)sqrt(4x^2-1))",
      ["{{1/(abs(2x)sqrt((2x)^2-1))}} · 2.", "The 2s cancel: {{1/(abs(x)sqrt(4x^2-1))}}."], {pts:[0.6, 0.9, 1.3, 1.8, 2.4, 3]});
    C.num(["3"], "Ch 3 Obj 3 ex2", "f and g are inverse functions, with f(x) = x² − 4 for x ≥ 0. Find g′(0).", "1/4",
      ["Set f(x) = 0: x² − 4 = 0, so x = 2 (x ≥ 0).", "f has (2, 0), so g has (0, 2).", "f′(x) = 2x, f′(2) = 4.", "g′(0) = 1/f′(2) = 1/4."], {label:"g′(0) ="});
    C.num(["3"], "Ch 3 Obj 3 ex3", "g(x) = f⁻¹(x), with f(5) = 12, f(8) = 5, f′(5) = −2, f′(8) = 4. Find g′(5).", "1/4",
      ["Find a with f(a) = 5: a = 8.", "g′(5) = 1/f′(8) = 1/4."], {label:"g′(5) ="});
    C.num(["3"], "Ch 3 Obj 3", "f(x) = x³ + x + 1 and g is its inverse. Find g′(3).", "1/4",
      ["Set f(x) = 3: x³ + x + 1 = 3 → x = 1.", "f′(x) = 3x² + 1, f′(1) = 4.", "g′(3) = 1/4."], {label:"g′(3) ="});
    C.num(["3"], "Ch 3 Obj 3", "f(x) = 2x + eˣ and g is its inverse. Find g′(1).", "1/3",
      ["Set f(x) = 1: x = 0 works (0 + 1 = 1).", "f′(x) = 2 + eˣ, f′(0) = 3.", "g′(1) = 1/3."], {label:"g′(1) ="});
    C.num(["3"], "Ch 3 Obj 3", "f(3) = 7, f′(3) = 2, f(7) = 10, f′(7) = 5. If g = f⁻¹, find g′(7).", "1/2",
      ["f(a) = 7 means a = 3.", "g′(7) = 1/f′(3) = 1/2 (not 1/f′(7))."], {label:"g′(7) ="});
    C.pick(["3"], "Ch 3 Obj 3", "What does sin⁻¹x mean?", ["arcsin x (an angle)", "1 divided by sin x", "csc x times x", "(sin x) to the −1"], "arcsin x (an angle)",
      ["The ⁻¹ on a trig function means inverse, not reciprocal."]);
    C.pick(["3"], "Ch 3 Obj 3", "Which is the derivative of arccot x?", ["−1/(1 + x²)", "1/(1 + x²)", "−csc²x", "1/√(1 − x²)"], "−1/(1 + x²)",
      ["The co- version is the negative of arctan's derivative."]);
  }
});
})();
