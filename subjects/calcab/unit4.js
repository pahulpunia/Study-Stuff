/* AP Calculus AB · Unit 4: Applications of Derivatives & L'Hôpital's Rule
   Source: the class's Unit 4 notes (Obj 4.1–4.2 physics and linear approximations, 4.3 related rates,
   4.4 L'Hôpital's rule), the U4 AP Extension, and the Unit 4 Review. Problems are reworded versions of
   the class examples plus new ones in the same style; keys were worked out and checked by hand. */
(() => {
Study.addUnit("calcab", {
  id: "u4",
  name: "Unit 4: Applications & L'Hôpital",
  short: "Unit 4",
  sections: [
    {id:"4.1", name:"Obj 4.1: Motion, speed, velocity"},
    {id:"4.2", name:"Obj 4.2: Linear approximations"},
    {id:"4.3", name:"Obj 4.3: Related rates"},
    {id:"4.4", name:"Obj 4.4: L'Hôpital's rule"}
  ],

  notes: {
    "4.1": [
      {sum:["v(t) = s′(t) and a(t) = v′(t) = s″(t).",
            "Speed = |velocity|. Velocity has a direction (sign); speed doesn't.",
            "Speed is INCREASING when v and a have the same sign, DECREASING when they have opposite signs.",
            "v > 0: moving right/up. v < 0: moving left/down. v = 0: at rest."]},
      {table:{head:["Velocity", "Acceleration", "Direction", "Speed"], rows:[
        ["+", "+", "right / up", "increasing"], ["+", "−", "right / up", "decreasing"], ["−", "−", "left / down", "increasing"], ["−", "+", "left / down", "decreasing"], ["0", "any", "at rest", "—"]]}},
      {ex:{q:"s(t) = 4t³ + 3t² − 8t + 7 feet. Find the velocity, speed and acceleration at t = 2, and say whether the speed is increasing or decreasing.", a:["v(t) = 12t² + 6t − 8, so v(2) = 48 + 12 − 8 = 52 ft/s.", "Speed = |52| = 52 ft/s.", "a(t) = 24t + 6, so a(2) = 54 ft/s².", "v and a are both positive, so the particle moves right and its speed is increasing."]}},
      {ex:{q:"h(t) = (2t − 3)³ meters is a hot air balloon's height. At t = 1 minute, is its speed increasing or decreasing?", a:["v(t) = 3(2t − 3)² · 2 = 6(2t − 3)². v(1) = 6 m/min (rising).", "a(t) = 12(2t − 3) · 2 = 24(2t − 3). a(1) = −24 m/min².", "Opposite signs, so the speed is decreasing."]}},
      {tip:"When asked to \"interpret v(3) in context,\" say the direction AND the rate with units: \"at 3 seconds the particle is moving left at 16/3 meters per second.\""},
      {check:[{q:"v(4) = −3 and a(4) = 2. Speeding up or slowing down?", a:"Slowing down: opposite signs."}, {q:"What's the speed if v = −7 m/s?", a:"7 m/s."}]}
    ],
    "4.2": [
      {sum:["The linear approximation (tangent line) at x = a: L(x) = f(a) + f′(a)(x − a).",
            "It's point-slope form: y − y₁ = m(x − x₁), with the point (a, f(a)) and slope f′(a).",
            "Use L to estimate f at a nearby x. Leave unsimplified answers on free response unless asked."]},
      {steps:["**Point:** find f(a).", "**Slope:** find f′(a).", "**Write** L(x) = f(a) + f′(a)(x − a).", "**Plug in** the nearby x-value."]},
      {ex:{q:"Find L(x) for f(x) = ln(x + 5) at x = 2, then estimate f(5).", a:["f(2) = ln 7.", "f′(x) = {{1/(x+5)}}, so f′(2) = 1/7.", "L(x) = ln 7 + (1/7)(x − 2).", "L(5) = ln 7 + 3/7."]}},
      {ex:{q:"Find L(x) for f(x) = x + ln x near x = 1, then estimate f(1.04).", a:["f(1) = 1 + 0 = 1.", "f′(x) = 1 + 1/x, f′(1) = 2.", "L(x) = 1 + 2(x − 1).", "L(1.04) = 1 + 2(0.04) = 1.08."]}},
      {check:[{q:"What two things do you need to build L(x)?", a:"The point f(a) and the slope f′(a)."}]}
    ],
    "4.3": [
      {sum:["Related rates connect how fast different quantities change over TIME (d/dt).",
            "Steps: draw it → write an equation relating the variables → differentiate with respect to t → THEN substitute → solve.",
            "DO NOT substitute numbers for the changing quantities before you differentiate.",
            "Signs matter: shrinking or falling quantities have negative rates."]},
      {table:{head:["Shape", "Formulas"], rows:[["Circle", "A = πr², C = 2πr"], ["Sphere", "V = (4/3)πr³, SA = 4πr²"], ["Cone", "V = (1/3)πr²h"], ["Cylinder", "V = πr²h"], ["Right triangle", "a² + b² = c², plus SOH-CAH-TOA"]]}},
      {steps:["**Draw** a picture and label what changes with variables.", "**List** the given rates (with signs) and the rate you want.", "**Write** an equation relating the variables. For a cone, use similar triangles to remove r.", "**Differentiate** both sides with respect to t. Every variable gets its own d/dt.", "**Substitute** the numbers for that instant, then solve."]},
      {ex:{q:"A 15-foot ladder leans against a wall. The bottom is pushed toward the wall at 3 ft/s. How fast does the top slide up when the bottom is 12 feet from the wall?", a:["b² + a² = 15², with b the base distance and a the height.", "2b db/dt + 2a da/dt = 0.", "When b = 12, a = 9 (a 9-12-15 triangle). db/dt = −3 (shrinking).", "2(12)(−3) + 2(9) da/dt = 0 → da/dt = 72/18 = 4 ft/s up the wall."]}},
      {ex:{q:"Water pours into a cone (height 10 ft, radius 4 ft, point down) at 10 ft³/min. How fast is the water level rising when it's 5 ft deep?", a:["Similar triangles: r/h = 4/10, so r = 2h/5.", "V = (1/3)π(2h/5)²h = {{(4pi)/75}}h³.", "dV/dt = {{(4pi)/25}}h² dh/dt.", "10 = {{(4pi)/25}}(25) dh/dt = 4π dh/dt, so dh/dt = {{5/(2pi)}} ft/min."]}},
      {warn:"If you plug in the radius (or any changing value) before differentiating, its rate disappears and the answer comes out wrong."},
      {check:[{q:"A circle's radius grows at 2 cm/s. What's dA/dt when r = 5?", a:"dA/dt = 2πr dr/dt = 2π(5)(2) = 20π cm²/s."}]}
    ],
    "4.4": [
      {sum:["If plugging in gives 0/0 or ∞/∞, then lim f/g = lim f′/g′ (take the derivatives of the top and bottom SEPARATELY).",
            "Repeat if it's still indeterminate.",
            "Only use it on 0/0 or ∞/∞. Anything else (like 0/1 or 4/0) is not indeterminate.",
            "Unit 1 limit tricks still work: factoring or the conjugate may be faster."]},
      {ex:{q:"Find the limit as x → 2 of (x² − x − 2)/(x − 2).", a:["Plug in: 0/0.", "L'Hôpital: (2x − 1)/1.", "At x = 2: 3."]}},
      {ex:{q:"Find the limit as x → 0 of (eˣ − e⁻ˣ)/x.", a:["Plug in: (1 − 1)/0 = 0/0.", "L'Hôpital: (eˣ + e⁻ˣ)/1.", "At x = 0: 2."]}},
      {ex:{q:"Find the limit as x → ∞ of 5x³/(2eˣ).", a:["∞/∞, so differentiate top and bottom.", "15x²/(2eˣ) → 30x/(2eˣ) → 30/(2eˣ) (still ∞/∞ each time until here).", "30/(2eˣ) → 0. The limit is 0."]}},
      {ex:{q:"Find the limit as x → π/2 of cos x / cos(4x).", a:["Plug in: 0/1 = 0. Not indeterminate, so no L'Hôpital. The limit is 0."]}},
      {warn:"It's NOT the quotient rule. Differentiate the top and the bottom on their own."},
      {warn:"A nonzero number over 0 (like 4/0) is not 0. It means a vertical asymptote: the limit is ∞, −∞, or does not exist."},
      {check:[{q:"lim x→0 of sin x / x?", a:"0/0 → cos x / 1 → 1."}, {q:"Can you use L'Hôpital on 3/0?", a:"No. That's not indeterminate; it's an asymptote."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k), S = n => "Unit 4 · " + n;

    /* ===== 4.1 motion ===== */
    C.num(["4.1"], S("velocity"), "s(t) = 4t³ + 3t² − 8t + 7 feet. Find v(2), in ft/s.", "52", ["v(t) = 12t² + 6t − 8.", "v(2) = 48 + 12 − 8 = 52."], {label:"v(2) ="});
    C.num(["4.1"], S("acceleration"), "s(t) = 4t³ + 3t² − 8t + 7 feet. Find a(2), in ft/s².", "54", ["a(t) = 24t + 6.", "a(2) = 54."], {label:"a(2) ="});
    C.pick(["4.1"], S("speed"), "s(t) = 4t³ + 3t² − 8t + 7. At t = 2, is the particle's speed increasing or decreasing?", ["Increasing, because v(2) and a(2) are both positive", "Decreasing, because a(2) is larger than zero", "Increasing, because the position s(2) is positive", "Decreasing, because v(2) is less than a(2)"], "Increasing, because v(2) and a(2) are both positive",
      ["v(2) = 52 and a(2) = 54: same sign, so speeding up."]);
    C.pick(["4.1"], S("speed"), "A balloon's height is h(t) = (2t − 3)³ meters. At t = 1 minute, its speed is", ["decreasing, since v(1) > 0 and a(1) < 0", "increasing, since v(1) > 0 and a(1) > 0", "decreasing, since v(1) < 0 and a(1) < 0", "increasing, since v(1) < 0 and a(1) < 0"], "decreasing, since v(1) > 0 and a(1) < 0",
      ["v(t) = 6(2t − 3)², v(1) = 6.", "a(t) = 24(2t − 3), a(1) = −24.", "Opposite signs: slowing down."]);
    C.set(["4.1"], S("at rest"), "x(t) = 2t³ − 21t² + 72t − 53. At what times is the particle not moving?", ["3", "4"],
      ["v(t) = 6t² − 42t + 72 = 6(t − 3)(t − 4).", "v = 0 at t = 3 and t = 4."], {label:"t ="});
    C.num(["4.1"], S("velocity zero"), "x(t) = t² − 6t + 5. When is the velocity zero?", "3",
      ["v(t) = 2t − 6 = 0 → t = 3.", "(Don't solve x(t) = 0; that's when the particle is at the origin.)"], {label:"t ="});
    C.num(["4.1"], S("calculator"), "v(t) = 3 + 4.1cos(0.9t). Find the acceleration at t = 4 (3 decimals).", "1.633",
      ["a(t) = −4.1 · 0.9 sin(0.9t) = −3.69 sin(0.9t).", "a(4) = −3.69 sin(3.6) ≈ 1.633 (radian mode)."], {label:"a(4) =", dec:3});
    C.num(["4.1"], S("calculator"), "v(t) = 7 − (1.01)^(−t²). Find the acceleration at t = 3 (3 decimals).", "0.055",
      ["a(t) = (1.01)^(−t²) · ln(1.01) · 2t (the minus signs cancel).", "a(3) = (1.01)^(−9) · ln(1.01) · 6 ≈ 0.055."], {label:"a(3) =", dec:3});
    C.num(["4.1"], S("velocity"), "s(t) = −t² + (2/3)t meters. Find v(3), in m/s.", "-16/3",
      ["v(t) = −2t + 2/3.", "v(3) = −6 + 2/3 = −16/3."], {label:"v(3) ="});
    C.pick(["4.1"], S("interpret"), "s(t) = −t² + (2/3)t meters. Which best interprets v(3) and a(3)?", ["Moving left at 16/3 m/s and speeding up", "Moving left at 16/3 m/s and slowing down", "Moving right at 16/3 m/s and speeding up", "At rest, 16/3 m left of the origin"], "Moving left at 16/3 m/s and speeding up",
      ["v(3) = −16/3 (left) and a(3) = −2.", "Same sign, so the speed is increasing."]);

    /* ===== 4.2 linear approximation ===== */
    C.expr(["4.2"], S("linear approximation"), "Find the linear approximation L(x) to f(x) = ln(x + 5) at x = 2.", "ln(7)+(x-2)/7",
      ["f(2) = ln 7, f′(x) = {{1/(x+5)}}, f′(2) = 1/7.", "L(x) = ln 7 + (1/7)(x − 2)."], {label:"L(x) =", chk:{tan:["ln(x+5)", 2]}});
    C.num(["4.2"], S("linear approximation"), "Use the linear approximation to f(x) = x + ln x at x = 1 to estimate f(1.04).", "1.08",
      ["f(1) = 1, f′(1) = 1 + 1 = 2.", "L(x) = 1 + 2(x − 1).", "L(1.04) = 1.08."], {label:"f(1.04) ≈"});
    C.num(["4.2"], S("linear approximation"), "Use the linear approximation to f(x) = x(e^(2x)) at x = 0 to estimate f(−0.2).", "-0.2",
      ["f(0) = 0. f′(x) = e^(2x) + 2xe^(2x), so f′(0) = 1.", "L(x) = x, and L(−0.2) = −0.2."], {label:"f(−0.2) ≈"});
    C.num(["4.2"], S("linear approximation"), "Use the linear approximation to f(x) = x²(x + 1) at x = 1 to estimate f(1.1).", "2.5",
      ["f(1) = 2. f′(x) = 3x² + 2x, so f′(1) = 5.", "L(x) = 2 + 5(x − 1).", "L(1.1) = 2.5."], {label:"f(1.1) ≈"});
    C.num(["4.2"], S("linear approximation"), "Use a tangent line at x = 25 to estimate √26.", "5.1",
      ["f(25) = 5, f′(x) = {{1/(2sqrt(x))}}, f′(25) = 1/10.", "L(26) = 5 + (1/10)(1) = 5.1."], {label:"√26 ≈"});
    C.expr(["4.2"], S("linear approximation"), "Find the linear approximation L(x) to f(x) = sin x at x = 0.", "x",
      ["f(0) = 0, f′(0) = cos 0 = 1.", "L(x) = 0 + 1(x − 0) = x."], {label:"L(x) =", chk:{tan:["sin(x)", 0]}});

    /* ===== 4.3 related rates ===== */
    C.num(["4.3"], S("ladder"), "A 15-foot ladder leans against a wall. The bottom is pushed toward the wall at 3 ft/s. How fast is the top sliding up the wall when the bottom is 12 feet from the wall (ft/s)?", "4",
      ["b² + a² = 225 → 2b b′ + 2a a′ = 0.", "b = 12, a = 9, b′ = −3.", "2(12)(−3) + 2(9)a′ = 0 → a′ = 4."], {label:"Rate"});
    C.num(["4.3"], S("ladder"), "A 10-foot ladder leans against a building. The bottom slides away at 1/2 ft/s. How fast is the top falling when the bottom is 6 feet out? Give the rate of change of the height, in ft/s.", "-3/8",
      ["b = 6 → a = 8.", "2(6)(1/2) + 2(8)a′ = 0 → a′ = −6/16 = −3/8 ft/s (falling)."], {label:"da/dt ="});
    C.num(["4.3"], S("circle"), "The rim of a circular platform grows so its circumference increases at 38 cm/min. How fast is the radius growing when r = 133 cm (cm/min)?", "19/pi",
      ["C = 2πr → dC/dt = 2π dr/dt.", "38 = 2π dr/dt → dr/dt = {{19/pi}} ≈ 6.05 cm/min. (The radius doesn't even matter here.)"], {label:"dr/dt ="});
    C.num(["4.3"], S("sphere"), "A spherical balloon is filled at 4.5 ft³/min. How fast is the radius increasing when r = 2 ft (ft/min)?", "9/(32pi)",
      ["V = (4/3)πr³ → dV/dt = 4πr² dr/dt.", "4.5 = 4π(4) dr/dt = 16π dr/dt.", "dr/dt = 4.5/(16π) = {{9/(32pi)}}."], {label:"dr/dt ="});
    C.num(["4.3"], S("cone"), "Water pours into a cone (height 10 ft, top radius 4 ft, point down) at 10 ft³/min. How fast is the water level rising when it is 5 ft deep (ft/min)?", "5/(2pi)",
      ["r = 2h/5, so V = {{(4pi)/75}}h³.", "dV/dt = {{(4pi)/25}}h² dh/dt.", "10 = 4π dh/dt → dh/dt = {{5/(2pi)}}."], {label:"dh/dt ="});
    C.num(["4.3"], S("cone"), "A cone fills with rain at 2 cm³/min. Its radius is always half its height. How fast is the water level rising when it is 26 cm deep (cm/min)?", "2/(169pi)",
      ["r = h/2 → V = (1/3)π(h/2)²h = πh³/12.", "dV/dt = (π/4)h² dh/dt.", "2 = (π/4)(676) dh/dt = 169π dh/dt → dh/dt = {{2/(169pi)}}."], {label:"dh/dt ="});
    C.num(["4.3"], S("sphere surface area"), "A sphere's radius decreases at 2 cm/s. How fast is its surface area changing when r = 3 cm (cm²/s)?", "-48pi",
      ["S = 4πr² → dS/dt = 8πr dr/dt.", "8π(3)(−2) = −48π."], {label:"dS/dt ="});
    C.num(["4.3"], S("circle"), "A circle's radius increases at 0.2 m/s. How fast is the area increasing when the circumference is 20π m (m²/s)?", "4pi",
      ["20π = 2πr → r = 10.", "dA/dt = 2πr dr/dt = 2π(10)(0.2) = 4π."], {label:"dA/dt ="});
    C.pick(["4.3"], S("circle"), "A circle's radius decreases at 0.1 cm/s. In terms of the circumference C, what is dA/dt?", ["−(0.1)C", "−(0.2)πC", "−(0.1)C/(2π)", "(0.1)²C"], "−(0.1)C",
      ["dA/dt = 2πr dr/dt, and 2πr = C.", "dA/dt = C(−0.1)."]);
    C.num(["4.3"], S("angle"), "A 13-ft ladder slides down a wall. When its base is 12 ft from the wall, the top moves down at 4 ft/s. How fast is the angle θ between the ladder and the ground changing (radians/s)?", "-1/3",
      ["Top height a = 5 (5-12-13). sin θ = a/13.", "cos θ · dθ/dt = (1/13) da/dt, with cos θ = 12/13 and da/dt = −4.", "(12/13) dθ/dt = −4/13 → dθ/dt = −1/3."], {label:"dθ/dt ="});
    C.num(["4.3"], S("ladder"), "A 64-foot ladder leans against a wall. The bottom slides toward the wall at 3 ft/min. How fast is the top rising when the bottom is 30 feet from the wall (3 decimals, ft/min)?", "1.592",
      ["Height a = √(64² − 30²) = √3196.", "2(30)(−3) + 2√3196 · a′ = 0.", "a′ = 90/√3196 ≈ 1.592 ft/min."], {label:"Rate", dec:3});

    /* ===== 4.4 L'Hôpital ===== */
    const lim = (sec, q, ans, steps, o) => C.num([sec], S("L'Hôpital"), "Find the limit: " + q, ans, steps, Object.assign({label:"Limit"}, o));
    lim("4.4", "lim x→2 of (x² − x − 2)/(x − 2)", "3", ["0/0 → (2x − 1)/1.", "At 2: 3."]);
    lim("4.4", "lim x→1 of (x² − 3x + 2)/(x − 1)", "-1", ["0/0 → (2x − 3)/1.", "At 1: −1."]);
    lim("4.4", "lim x→0 of (eˣ − e⁻ˣ)/x", "2", ["0/0 → (eˣ + e⁻ˣ)/1.", "At 0: 2."]);
    lim("4.4", "lim x→4 of (√(x² − 15) − 1)/(x² − 16)", "1/2", ["0/0. Top′ = {{x/sqrt(x^2-15)}}, bottom′ = 2x.", "Ratio = {{1/(2sqrt(x^2-15))}}.", "At 4: 1/(2 · 1) = 1/2."]);
    lim("4.4", "lim x→1 of 5 ln x / (2x − 2)", "5/2", ["0/0 → (5/x)/2.", "At 1: 5/2."]);
    lim("4.4", "lim x→0 of sin²(3x)/(x² + 4x)", "0", ["0/0 → 2 sin(3x)cos(3x) · 3 / (2x + 4).", "At 0: 0/4 = 0."]);
    lim("4.4", "lim x→∞ of 5x³/(2eˣ)", "0", ["∞/∞ three times: 15x²/2eˣ → 30x/2eˣ → 30/2eˣ.", "30/(2eˣ) → 0."]);
    lim("4.4", "lim x→∞ of (3x² + 5x − 1)/(2 + 4x − 3x²)", "-1", ["Same degree on top and bottom: ratio of leading coefficients.", "3/(−3) = −1."]);
    lim("4.4", "lim x→∞ of (2x³ + 1)/e^(2x)", "0", ["∞/∞ repeatedly: 6x²/2e^(2x) → 12x/4e^(2x) → 12/8e^(2x) → 0."]);
    lim("4.4", "lim x→0 of (5x⁴ + 8x²)/(3x⁴ − 16x²)", "-1/2", ["0/0. Factor x²: (5x² + 8)/(3x² − 16).", "At 0: 8/(−16) = −1/2. (L'Hôpital twice gives the same.)"]);
    C.pick(["4.4"], S("L'Hôpital"), "If a ≠ 0, what is lim x→a of (x² − a²)/(x⁴ − a⁴)?", ["1/(2a²)", "1/a²", "1/(6a²)", "0"], "1/(2a²)",
      ["0/0 → 2x/(4x³) = 1/(2x²).", "At x = a: 1/(2a²). (Or factor: x⁴ − a⁴ = (x² − a²)(x² + a²).)"]);
    lim("4.4", "lim x→0 of (1 − cos x)/x²", "1/2", ["0/0 → sin x/(2x), still 0/0.", "→ cos x/2 → 1/2."]);
    lim("4.4", "lim x→−1 of (2x² − x − 3)/(x + 1)", "-5", ["0/0. Factor: (2x − 3)(x + 1)/(x + 1) = 2x − 3.", "At −1: −5."]);
    C.pick(["4.4"], S("not indeterminate"), "What is lim x→π/2 of cos x / cos(4x)?", ["0", "1/4", "1", "Does not exist"], "0",
      ["Plug in: 0/cos(2π) = 0/1 = 0.", "Not 0/0, so no L'Hôpital needed."]);
    C.pick(["4.4"], S("not indeterminate"), "What is lim x→−1 of (x − 1)/(√(x² + 3) − 2)?", ["DNE: a nonzero number over 0", "0, since the bottom is 0", "−2, from the top alone", "1/2, by L'Hôpital"], "DNE: a nonzero number over 0",
      ["Plug in: (−2)/(2 − 2) = −2/0.", "Nonzero over zero isn't 0 and isn't indeterminate: the two sides go to opposite infinities."]);
    C.pick(["4.4"], S("not indeterminate"), "What is lim x→−1 of (x³ − 3x + 2)/(x³ − x² − x + 1)?", ["DNE: 4 over 0", "0, since the bottom is 0", "4, from the top alone", "−1, by L'Hôpital"], "DNE: 4 over 0",
      ["Top: −1 + 3 + 2 = 4. Bottom: −1 − 1 + 1 + 1 = 0.", "4/0 is not 0. The bottom is (x − 1)²(x + 1), which changes sign at −1, so the limit does not exist."]);
    C.pick(["4.4"], S("L'Hôpital"), "When can you use L'Hôpital's rule on lim f(x)/g(x)?", ["When plugging in gives 0/0 or ∞/∞", "Whenever g(x) is not zero", "Whenever the limit is at infinity", "When plugging in gives a number over 0"], "When plugging in gives 0/0 or ∞/∞",
      ["Only indeterminate forms qualify."]);
    C.pick(["4.4"], S("L'Hôpital"), "What is lim x→∞ of x^(1/x)?", ["1", "0", "∞", "e"], "1",
      ["Write it as e^(ln x / x).", "ln x / x is ∞/∞ → (1/x)/1 → 0.", "e⁰ = 1."]);
  }
});
})();
