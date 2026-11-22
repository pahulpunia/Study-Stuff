/* AP Calculus AB · Unit 1: Limits
   Source: the class's Unit 1 summary sheet (special limits: factor, conjugate, complex fractions;
   properties; limits with absolute values; continuity conditions and solving for constants; IVT;
   squeeze theorem and trig limits; limits at infinity; common mistakes). Keys checked by hand. */
(() => {
Study.addUnit("calcab", {
  id: "u1",
  name: "Unit 1: Limits",
  short: "Unit 1",
  sections: [
    {id:"1.1", name:"Limits that give 0/0"},
    {id:"1.2", name:"One-sided limits and absolute values"},
    {id:"1.3", name:"Continuity"},
    {id:"1.4", name:"IVT, squeeze theorem, trig limits"},
    {id:"1.5", name:"Limits at infinity"}
  ],

  notes: {
    "1.1": [
      {sum:["Always plug in first. A real number means you're done.",
            "0/0 means rewrite it: factor and cancel, multiply by the conjugate, or simplify the complex fraction. Then plug in again.",
            "A nonzero number over 0 means a vertical asymptote: check each side for ∞, −∞, or DNE.",
            "Properties: limits split over +, −, ×, ÷ and powers; the limit of a constant is the constant."]},
      {table:{head:["When you plug in and get…", "Do this"], rows:[["a number", "that's the limit"], ["0/0 with polynomials", "factor, cancel, plug in"], ["0/0 with a square root", "multiply top and bottom by the conjugate"], ["0/0 with little fractions", "multiply everything by the common denominator"], ["nonzero/0", "asymptote: check both sides"]]}},
      {ex:{q:"lim x→3 of (x² − 9)/(x − 3)", a:["0/0. Factor: (x − 3)(x + 3)/(x − 3) = x + 3.", "Plug in 3: 6."]}},
      {ex:{q:"lim x→0 of (√(x + 4) − 2)/x", a:["0/0 with a root: multiply by (√(x + 4) + 2)/(√(x + 4) + 2).", "Top: (x + 4) − 4 = x. So it's x / [x(√(x + 4) + 2)] = 1/(√(x + 4) + 2).", "Plug in 0: 1/4."]}},
      {ex:{q:"lim x→0 of [1/(x + 2) − 1/2] / x", a:["Multiply top and bottom by 2(x + 2): [2 − (x + 2)] / [2x(x + 2)] = −x / [2x(x + 2)].", "Cancel x: −1/(2(x + 2)).", "Plug in 0: −1/4."]}},
      {warn:"Forgetting the conjugate is one of the most common mistakes in this unit. Any 0/0 with a square root needs it."},
      {check:[{q:"lim x→−2 of (x² − 4)/(x + 2)?", a:"Factor: x − 2 → −4."}, {q:"What does 5/0 tell you?", a:"A vertical asymptote. The limit is ∞, −∞, or DNE, never 0."}]}
    ],
    "1.2": [
      {sum:["A two-sided limit exists only if the left and right limits match.",
            "|x − a| becomes (x − a) on the right of a and −(x − a) on the left.",
            "For piecewise functions, use the piece for the side you're approaching from."]},
      {ex:{q:"lim x→−2⁻ of 3|x + 2|/(x + 2) (the class example)", a:["Left of −2, x + 2 is negative, so |x + 2| = −(x + 2).", "3 · −(x + 2)/(x + 2) = −3.", "From the right it would be +3, so the two-sided limit doesn't exist."]}},
      {ex:{q:"f(x) = x² for x < 1 and 2x + 3 for x ≥ 1. Find the left and right limits at 1.", a:["Left: use x²: 1.", "Right: use 2x + 3: 5.", "They don't match, so lim x→1 f(x) doesn't exist."]}},
      {warn:"Using the wrong side of a piecewise function is the #1 mistake on these. Check which inequality matches the direction."},
      {check:[{q:"lim x→0⁺ of |x|/x?", a:"1."}, {q:"lim x→0⁻ of |x|/x?", a:"−1, so the two-sided limit DNE."}]}
    ],
    "1.3": [
      {sum:["f is continuous at c if: (1) f(c) exists, (2) lim x→c f(x) exists (both sides match), (3) the limit equals f(c).",
            "Discontinuities: removable (a hole) or non-removable (a jump or a vertical asymptote).",
            "To make a piecewise function continuous, set the pieces equal at the break point and solve for the constant."]},
      {steps:["Write the break point x = c.", "Plug c into the left piece and the right piece.", "Set them equal (the limits from both sides must match f(c)).", "Solve for the constant."]},
      {ex:{q:"f(x) = kx + 1 for x < 2 and x² − 1 for x ≥ 2. Find k so f is continuous.", a:["At x = 2: left gives 2k + 1, right gives 4 − 1 = 3.", "2k + 1 = 3 → k = 1."]}},
      {check:[{q:"f(x) = (x² − 1)/(x − 1). What kind of discontinuity is at x = 1?", a:"Removable (a hole): the factor cancels, and the limit is 2."}]}
    ],
    "1.4": [
      {sum:["IVT: if f is continuous on [a, b] and k is between f(a) and f(b), then f(c) = k for some c in (a, b).",
            "Write the justification: \"f is continuous on [a, b] and f(a) < k < f(b), so by the IVT there's a c with f(c) = k.\"",
            "Squeeze theorem: if g ≤ f ≤ h near c and lim g = lim h = L, then lim f = L.",
            "Trig limits: lim x→0 of sin x / x = 1; lim x→0 of (1 − cos x)/x = 0; lim x→0 of (cos x − 1)/x = 0."]},
      {ex:{q:"f(x) = x³ − 4x + 1. Must f have a zero on [0, 1]?", a:["f is a polynomial, so it's continuous on [0, 1].", "f(0) = 1 and f(1) = −2, and 0 is between them.", "By the IVT, yes: f(c) = 0 for some c in (0, 1)."]}},
      {ex:{q:"lim x→0 of sin(5x)/x", a:["Multiply by 5/5: 5 · sin(5x)/(5x).", "sin(5x)/(5x) → 1, so the limit is 5."]}},
      {ex:{q:"lim x→0 of x² cos(1/x)", a:["−1 ≤ cos(1/x) ≤ 1, so −x² ≤ x² cos(1/x) ≤ x².", "Both −x² and x² → 0. By the squeeze theorem, the limit is 0."]}},
      {warn:"lim x→0 of sin x / x is 1, not 0. (It's the cos ones that go to 0.)"},
      {check:[{q:"lim x→0 of sin(3x)/(2x)?", a:"3/2."}, {q:"What must you check before using the IVT?", a:"That f is continuous on the closed interval."}]}
    ],
    "1.5": [
      {sum:["Horizontal asymptotes come from limits at ±∞; vertical asymptotes come from zeros of the denominator (that don't cancel).",
            "Compare degrees: top heavier → no HA (∞ or −∞); bottom heavier → 0; equal → ratio of leading coefficients.",
            "Do x → −∞ separately. Roots like √(x²) = |x| can flip the sign, so there may be two different answers."]},
      {table:{head:["Degrees", "Limit at ∞"], rows:[["top < bottom", "0"], ["top = bottom", "leading coefficient ratio"], ["top > bottom", "∞ or −∞ (no HA)"]]}},
      {ex:{q:"lim x→∞ of (4x² − 1)/(2x² + 3x)", a:["Equal degrees: 4/2 = 2."]}},
      {ex:{q:"lim x→−∞ of 3x/√(x² + 1)", a:["Divide by √(x²) = |x|, which is −x when x is negative.", "3x/(−x) = −3, and √(x² + 1)/|x| → 1.", "Limit: −3. (At +∞ it's +3, so there are two HAs: y = 3 and y = −3.)"]}},
      {warn:"For −∞, don't stop at one answer. Roots and odd powers often give a different limit than +∞."},
      {check:[{q:"lim x→∞ of 5x/(x² + 1)?", a:"0 (bottom heavier)."}, {q:"Vertical asymptotes of 1/(x² − 4)?", a:"x = 2 and x = −2."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k), S = n => "Unit 1 · " + n;
    const lim = (sec, n, q, ans, steps) => C.num([sec], S(n), "Find the limit: " + q, ans, steps, {label:"Limit"});

    /* ===== 1.1 ===== */
    lim("1.1", "plug in", "lim x→2 of (x² + 3x − 1)", "9", ["Polynomials: just plug in. 4 + 6 − 1 = 9."]);
    lim("1.1", "factor", "lim x→3 of (x² − 9)/(x − 3)", "6", ["Factor: x + 3.", "6."]);
    lim("1.1", "factor", "lim x→−1 of (x² + 3x + 2)/(x + 1)", "1", ["(x + 1)(x + 2)/(x + 1) = x + 2.", "−1 + 2 = 1."]);
    lim("1.1", "factor", "lim x→2 of (x³ − 8)/(x − 2)", "12", ["Difference of cubes: (x − 2)(x² + 2x + 4).", "4 + 4 + 4 = 12."]);
    lim("1.1", "conjugate", "lim x→0 of (√(x + 4) − 2)/x", "1/4", ["Multiply by the conjugate: 1/(√(x + 4) + 2).", "1/4."]);
    lim("1.1", "conjugate", "lim x→9 of (√x − 3)/(x − 9)", "1/6", ["Conjugate: (x − 9)/[(x − 9)(√x + 3)] = 1/(√x + 3).", "1/6."]);
    lim("1.1", "complex fraction", "lim x→0 of [1/(x + 2) − 1/2]/x", "-1/4", ["Multiply by 2(x + 2): −x/[2x(x + 2)] = −1/(2(x + 2)).", "−1/4."]);
    lim("1.1", "complex fraction", "lim x→3 of (1/x − 1/3)/(x − 3)", "-1/9", ["Multiply by 3x: (3 − x)/[3x(x − 3)] = −1/(3x).", "−1/9."]);
    C.pick(["1.1"], S("asymptote"), "What is lim x→1 of (x + 2)/(x − 1)?", ["DNE: +∞ from the right, −∞ from the left", "3, found by plugging in the top only", "0, since the bottom goes to 0", "∞ from both sides of x = 1"], "DNE: +∞ from the right, −∞ from the left",
      ["Plug in: 3/0, an asymptote.", "Right of 1: 3/(small +) → +∞. Left: → −∞. Different, so DNE."]);

    /* ===== 1.2 ===== */
    lim("1.2", "absolute value", "lim x→−2⁻ of 3|x + 2|/(x + 2)", "-3", ["Left of −2, |x + 2| = −(x + 2).", "−3."]);
    lim("1.2", "absolute value", "lim x→4⁺ of |x − 4|/(x − 4)", "1", ["Right of 4, |x − 4| = x − 4.", "1."]);
    lim("1.2", "absolute value", "lim x→5⁻ of (x² − 25)/|x − 5|", "-10", ["Left of 5: |x − 5| = −(x − 5).", "(x − 5)(x + 5)/(−(x − 5)) = −(x + 5) → −10."]);
    lim("1.2", "piecewise", "lim x→1⁻ of f(x), where f(x) = x² for x < 1 and 2x + 3 for x ≥ 1", "1", ["From the left use x²: 1."]);
    lim("1.2", "piecewise", "lim x→1⁺ of f(x), where f(x) = x² for x < 1 and 2x + 3 for x ≥ 1", "5", ["From the right use 2x + 3: 5."]);
    C.pick(["1.2"], S("two-sided"), "f(x) = x² for x < 1 and 2x + 3 for x ≥ 1. What is lim x→1 f(x)?", ["Does not exist", "1, the left-hand limit", "5, the right-hand limit", "3, the average of the two"], "Does not exist",
      ["Left limit 1, right limit 5. They don't match."]);
    C.pick(["1.2"], S("absolute value"), "What is lim x→0 of |x|/x?", ["Does not exist", "1 from both sides", "−1 from both sides", "0, since |0|/0 = 0"], "Does not exist", ["Right side 1, left side −1."]);

    /* ===== 1.3 ===== */
    C.num(["1.3"], S("solve for k"), "f(x) = kx + 1 for x < 2 and x² − 1 for x ≥ 2. Find k so that f is continuous.", "1",
      ["At x = 2: 2k + 1 = 3.", "k = 1."], {label:"k ="});
    C.num(["1.3"], S("solve for k"), "f(x) = x² + k for x ≤ 3 and 4x − 2 for x > 3. Find k so that f is continuous.", "1",
      ["9 + k = 12 − 2 = 10.", "k = 1."], {label:"k ="});
    C.num(["1.3"], S("solve for a"), "f(x) = ax² for x < −1 and 3x + 7 for x ≥ −1. Find a so that f is continuous.", "4",
      ["At x = −1: a(1) = −3 + 7 = 4.", "a = 4."], {label:"a ="});
    C.num(["1.3"], S("fill the hole"), "f(x) = (x² − 1)/(x − 1) for x ≠ 1. What should f(1) be to make f continuous?", "2",
      ["Cancel: x + 1.", "lim x→1 = 2, so f(1) = 2."], {label:"f(1) ="});
    C.pick(["1.3"], S("discontinuity type"), "f(x) = (x² − 4)/(x − 2) has what at x = 2?", ["A removable discontinuity (hole)", "A vertical asymptote at x = 2", "A jump between two values", "No discontinuity at all"], "A removable discontinuity (hole)",
      ["The x − 2 cancels, leaving x + 2: a hole at (2, 4)."]);
    C.pick(["1.3"], S("conditions"), "Which is NOT one of the three conditions for continuity at x = c?", ["f′(c) exists", "f(c) exists", "lim x→c f(x) exists", "lim x→c f(x) = f(c)"], "f′(c) exists",
      ["Continuity needs a value, a limit, and the two to match. Derivatives aren't required."]);

    /* ===== 1.4 ===== */
    lim("1.4", "trig limit", "lim x→0 of sin(5x)/x", "5", ["5 · sin(5x)/(5x) → 5 · 1."]);
    lim("1.4", "trig limit", "lim x→0 of sin(3x)/(2x)", "3/2", ["(3/2) · sin(3x)/(3x) → 3/2."]);
    lim("1.4", "trig limit", "lim x→0 of (1 − cos x)/x", "0", ["A standard limit: 0."]);
    lim("1.4", "trig limit", "lim x→0 of tan x / x", "1", ["tan x / x = (sin x / x) · (1/cos x) → 1 · 1."]);
    lim("1.4", "squeeze theorem", "lim x→0 of x² cos(1/x)", "0", ["−x² ≤ x² cos(1/x) ≤ x², and both sides → 0.", "Squeeze theorem: 0."]);
    C.pick(["1.4"], S("IVT"), "f(x) = x³ − 4x + 1. Which statement is justified by the Intermediate Value Theorem?", ["f(c) = 0 for some c in (0, 1)", "f(c) = 0 for some c in (1, 2) only", "f′(c) = 0 for some c in (0, 1)", "f has exactly one zero"], "f(c) = 0 for some c in (0, 1)",
      ["f is continuous, f(0) = 1 > 0 and f(1) = −2 < 0.", "0 is between them, so the IVT gives a zero in (0, 1)."]);
    C.pick(["1.4"], S("IVT"), "g is continuous on [0, 3], g(0) = −2 and g(3) = 5. Which value must g take on in (0, 3)?", ["4", "6", "−3", "8"], "4",
      ["The IVT only guarantees values between −2 and 5."]);
    C.pick(["1.4"], S("IVT"), "h(x) = 1/x on [−1, 1], with h(−1) = −1 and h(1) = 1. Does the IVT guarantee h(c) = 0?", ["No, h is not continuous on [−1, 1]", "Yes, since 0 is between −1 and 1", "Yes, the value c = 0 works", "No, because h(−1) is negative"], "No, h is not continuous on [−1, 1]",
      ["1/x has an asymptote at 0, so the IVT doesn't apply (and h is never 0)."]);

    /* ===== 1.5 ===== */
    lim("1.5", "limit at ∞", "lim x→∞ of (4x² − 1)/(2x² + 3x)", "2", ["Equal degrees: 4/2."]);
    lim("1.5", "limit at ∞", "lim x→∞ of 5x/(x² + 1)", "0", ["Bottom heavier: 0."]);
    lim("1.5", "limit at ∞", "lim x→−∞ of (3x³ − x)/(1 − 6x³)", "-1/2", ["Equal degrees: 3/(−6) = −1/2."]);
    lim("1.5", "limit at −∞", "lim x→−∞ of 3x/√(x² + 1)", "-3", ["For x < 0, √(x²) = −x.", "3x/(−x) → −3."]);
    lim("1.5", "limit at ∞", "lim x→∞ of 3x/√(x² + 1)", "3", ["For x > 0, √(x²) = x: 3."]);
    C.pick(["1.5"], S("asymptotes"), "What are the horizontal asymptotes of y = 3x/√(x² + 1)?", ["y = 3 and y = −3", "y = 3 only", "y = 0 only", "There are none"], "y = 3 and y = −3",
      ["+∞ gives 3; −∞ gives −3. Check both!"]);
    C.pick(["1.5"], S("asymptotes"), "What are the vertical asymptotes of y = (x + 1)/(x² − 1)?", ["x = 1 only", "x = 1 and x = −1", "x = −1 only", "none"], "x = 1 only",
      ["(x + 1)/((x − 1)(x + 1)) cancels to 1/(x − 1).", "x = −1 is a hole, not an asymptote."]);
    C.pick(["1.5"], S("limit at ∞"), "What is lim x→∞ of (x³ + 2)/(4x² − 1)?", ["∞", "1/4", "0", "−∞"], "∞", ["Top heavier with positive leading terms: ∞."]);
  }
});
})();
