/* Calculus BC · Chapter 9: Parametric, Polar & Vectors
   Source: Ch 9 Obj 1–2 (Parametric), Obj 3 (Slope & Arc Length in Polar), Obj 4 (Area in Polar), Obj 5–7 (Vectors) class notes.
   Integral answers are checked numerically (tools/verify.js); calculator answers accept 3 decimals. */
(() => {
Study.addUnit("calc", {
  id: "c9",
  name: "Ch 9: Parametric, Polar & Vectors",
  short: "Ch 9",
  sections: [
    {id:"1", name:"Obj 1–2: Parametric Equations"},
    {id:"3", name:"Obj 3: Slope & Arc Length in Polar"},
    {id:"4", name:"Obj 4: Area in Polar"},
    {id:"5", name:"Obj 5–7: Vectors & Motion"}
  ],

  notes: {
    "1": [
      {sum:["Parametric equations: x = x(t) and y = y(t). t is the independent variable.",
            "Slope: dy/dx = (dy/dt)/(dx/dt).",
            "Second derivative: d²y/dx² = [d/dt (dy/dx)] / (dx/dt). Divide by dx/dt again.",
            "Arc length (total distance): ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt."]},
      {p:"**What it's for:** a regular function can't describe a path that loops or doubles back. Parametric equations give x and y separately as functions of time, so they trace a path in order, like the position of a car on a map at each moment."},
      {h:"Graphing"},
      {steps:["**Set up a table** of t, x, y.", "**Plot the points** (x, y).", "**Connect them** and show the start and the direction with arrows."]},
      {ex:{q:"x(t) = 3t², y(t) = 2t for −2 ≤ t ≤ 2. Graph and convert to a rectangular equation.", a:["t = −2: (12, −4). t = −1: (3, −2). t = 0: (0, 0). t = 1: (3, 2). t = 2: (12, 4). It starts at (12, −4) and opens right.", "Eliminate t: t = y/2, so x = 3(y/2)²."]}},
      {ex:{q:"x = 4cos t, y = 3sin t on [0, 2π]. Convert to rectangular.", a:["cos t = x/4, sin t = y/3.", "sin²t + cos²t = 1 → (y/3)² + (x/4)² = 1, an ellipse.", "(Calculator: parametric mode, tmin = 0, tmax = 2π.)"]}},
      {tip:"With sin and cos, eliminate t using sin²θ + cos²θ = 1 instead of solving for t."},
      {h:"Calculus"},
      {table:{head:["Want", "Formula"], rows:[["slope", "dy/dx = (dy/dt)/(dx/dt)"], ["second derivative", "d²y/dx² = [d/dt (dy/dx)] / (dx/dt)"], ["arc length", "∫ √((dx/dt)² + (dy/dt)²) dt"], ["horizontal tangent", "dy/dt = 0 (and dx/dt ≠ 0)"], ["vertical tangent", "dx/dt = 0 (and dy/dt ≠ 0)"]]}},
      {ex:{q:"x(t) = t³ − 9t, y(t) = t². Find dy/dx and d²y/dx².", a:["dy/dx = 2t/(3t² − 9).", "d/dt of that (quotient rule): ((3t² − 9)(2) − 2t(6t))/(3t² − 9)² = (−6t² − 18)/(3t² − 9)².", "Divide by dx/dt = 3t² − 9: d²y/dx² = (−6t² − 18)/(3t² − 9)³."]}},
      {ex:{q:"x(t) = t² + 1, y(t) = 4t³ + 3. Find dy/dx, d²y/dx², the arc length from t = 1 to 3, and the tangent line at t = 1.", a:["dy/dx = 12t²/(2t) = 6t.", "d²y/dx² = 6/(2t) = 3/t.", "s = ∫ from 1 to 3 of √((2t)² + (12t²)²) dt ≈ 104.333.", "At t = 1: point (2, 7), slope 6. y − 7 = 6(x − 2)."]}},
      {ex:{q:"Same curve: is the tangent ever horizontal or vertical?", a:["dy/dt = 12t² = 0 at t = 0. dx/dt = 2t = 0 at t = 0 too.", "Both are 0 (0/0, indeterminate), so neither: no horizontal or vertical tangent."]}},
      {warn:"For d²y/dx², don't just differentiate dy/dx with respect to t. You must divide by dx/dt again."},
      {check:[
        {q:"x = 2t, y = t². Find dy/dx.", a:"2t/2 = t."},
        {q:"When is a parametric tangent horizontal?", a:"dy/dt = 0 while dx/dt ≠ 0."},
        {q:"Eliminate t: x = t + 1, y = t².", a:"t = x − 1, so y = (x − 1)²."},
        {q:"Arc length formula for parametric curves?", a:"∫ √((dx/dt)² + (dy/dt)²) dt."}]}
    ],
    "3": [
      {sum:["Polar to parametric: x = r cos θ, y = r sin θ, with r = f(θ).",
            "Slope: dy/dx = (dy/dθ)/(dx/dθ). Use the product rule on r cos θ and r sin θ.",
            "Arc length: s = ∫ from α to β of √(r² + (dr/dθ)²) dθ.",
            "r = 0 where the curve passes through the pole (the origin)."]},
      {p:"**What it's for:** polar coordinates describe points by distance and angle, which suits anything circular or spiral: radar sweeps, orbits, flower-petal patterns. To do calculus on them, convert to x and y first."},
      {h:"Formulas"},
      {table:{head:["", ""], rows:[["x", "r cos θ"], ["y", "r sin θ"], ["slope dy/dx", "(dy/dθ)/(dx/dθ)"], ["arc length", "∫ √(r² + (dr/dθ)²) dθ"]]}},
      {ex:{q:"r = 3 − 3sin θ. (a) Convert to parametric. (b) Find dy/dx. (c) Find the slope at θ = π/6.", a:["(a) x = (3 − 3sin θ)cos θ, y = (3 − 3sin θ)sin θ.", "(b) dy/dx = [(3 − 3sin θ)cos θ + (−3cos θ)sin θ] / [(3 − 3sin θ)(−sin θ) + (−3cos θ)cos θ]. Watch out: dy goes on top.", "(c) sin(π/6) = 1/2, cos(π/6) = √3/2. The top: (3/2)(√3/2) − 3(√3/2)(1/2) = 0. The bottom: −3/4 − 9/4 = −3. Slope = 0."]}},
      {ex:{q:"Find the arc length of r = 3 − 3sin θ from θ = π/8 to θ = π/6.", a:["dr/dθ = −3cos θ.", "s = ∫ from π/8 to π/6 of √((3 − 3sin θ)² + (−3cos θ)²) dθ ≈ 0.415.", "Calculator tip: r1 = 3 − 3sin θ, r2 = −3cos θ, then fnInt of √(r1² + r2²)."]}},
      {h:"Intervals of θ for loops"},
      {ex:{q:"r = 2 − 4cos θ. Find the θ-intervals for the inner loop and the outer loop.", a:["Graph (θmin = 0, θmax = 2π) and set r = 0: cos θ = 1/2 → θ = π/3, 5π/3 (or −π/3).", "Inner loop: (−π/3, π/3), or equivalently (5π/3, 7π/3).", "Outer loop: (π/3, 5π/3)."]}},
      {tip:"Write out values like sin(π/6) = 1/2 and cos(π/6) = √3/2 on the side before plugging in. These often show up as multiple choice."},
      {check:[
        {q:"Convert r = 2cos θ to parametric.", a:"x = 2cos²θ, y = 2cos θ sin θ."},
        {q:"Polar arc length formula?", a:"∫ √(r² + (dr/dθ)²) dθ."},
        {q:"How do you find where a polar curve hits the pole?", a:"Set r = 0 and solve for θ."},
        {q:"In dy/dx for polar, which goes on top?", a:"dy/dθ (from y = r sin θ)."}]}
    ],
    "4": [
      {sum:["Area of a sector: (1/2)r²θ.",
            "Area in polar: A = (1/2) ∫ from α to β of r² dθ.",
            "Find α and β by setting r = 0 (for loops) or r₁ = r₂ (where two curves meet).",
            "Between the loops: outer loop area − inner loop area."]},
      {p:"**What it's for:** polar regions are swept out like a fan, not stacked like rectangles. Each sliver is a tiny pie slice with area (1/2)r² dθ, so adding them up gives the area of petals, loops, and overlaps."},
      {steps:["**Graph** the function and mark where it starts.", "**Find α and β:** set r = 0 (through the pole), or r₁ = r₂ (intersections).", "**Use the formula:** (1/2) ∫ from α to β of r² dθ."]},
      {ex:{q:"Find the area of the inner loop of r = 3 + 4sin θ.", a:["r = 0 → sin θ = −3/4 → θ ≈ −0.8481.", "The inner loop runs from α = π + 0.8481 ≈ 3.9897 to β = 2π − 0.8481 ≈ 5.4351.", "A = (1/2) ∫ from α to β of (3 + 4sin θ)² dθ ≈ 0.3806."]}},
      {ex:{q:"Find the area between the inner and outer loops of r = 1 − 2sin θ.", a:["r = 0 → sin θ = 1/2 → θ = π/6, 5π/6.", "Outer loop: 5π/6 to 13π/6. Inner loop: π/6 to 5π/6.", "A = (1/2) ∫ from 5π/6 to 13π/6 of r² dθ − (1/2) ∫ from π/6 to 5π/6 of r² dθ ≈ 8.338."]}},
      {ex:{q:"Find the area common to r₁ = −6cos θ and r₂ = 2 − 2cos θ.", a:["r₁ = r₂: −6cos θ = 2 − 2cos θ → cos θ = −1/2 → θ = 2π/3, 4π/3.", "Pie-shaped piece from r₂: (1/2) ∫ from 2π/3 to 4π/3 of r₂² dθ.", "Two slivers from r₁: 2 · (1/2) ∫ from π/2 to 2π/3 of r₁² dθ (they're the same area).", "A ≈ 15.708 (exactly 5π)."]}},
      {warn:"Use the right curve on each piece: whichever is closer to the pole bounds the common region there."},
      {check:[
        {q:"Area formula in polar?", a:"(1/2) ∫ r² dθ."},
        {q:"Area of the whole cardioid r = 1 + cos θ?", a:"(1/2) ∫ from 0 to 2π of (1 + cos θ)² dθ = 3π/2."},
        {q:"How do you find where two polar curves meet?", a:"Set r₁ = r₂ and solve for θ."},
        {q:"Area between two loops?", a:"Outer loop area − inner loop area."}]}
    ],
    "5": [
      {sum:["Position p(t) = ⟨x(t), y(t)⟩. Velocity v(t) = ⟨x′(t), y′(t)⟩. Acceleration a(t) = ⟨x″(t), y″(t)⟩.",
            "Speed = ‖v(t)‖ = √((dx/dt)² + (dy/dt)²), the magnitude of velocity.",
            "Total distance = ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt (same as arc length).",
            "Position at b: ⟨x₀ + ∫ x′(t) dt, y₀ + ∫ y′(t) dt⟩."]},
      {p:"**What it's for:** motion in a plane needs two directions at once. A vector keeps the horizontal and vertical parts together, and you do the same calculus to each part separately: differentiate for velocity, integrate for position."},
      {table:{head:["Want", "How"], rows:[["velocity vector", "differentiate each part of position"], ["acceleration vector", "differentiate each part of velocity"], ["speed", "√((dx/dt)² + (dy/dt)²)"], ["total distance", "∫ speed dt"], ["position later", "start + ∫ velocity, for each part"]]}},
      {ex:{q:"p(t) = ⟨t⁴ + 2t² + 3t, t² + 1⟩ meters. Find v(t), a(t), v(2), and the speed at t = 2.", a:["v(t) = ⟨4t³ + 4t + 3, 2t⟩.", "a(t) = ⟨12t² + 4, 2⟩.", "v(2) = ⟨43, 4⟩ m/s.", "Speed: √(43² + 4²) = √1865 ≈ 43.186 m/s."]}},
      {ex:{q:"a(t) = ⟨t², {{-e^(-t)}}⟩ and v(0) = ⟨1, −1⟩. Find v(t).", a:["Integrate each part: v(t) = ⟨t³/3 + C₁, {{e^(-t)}} + C₂⟩.", "t = 0: C₁ = 1, and 1 + C₂ = −1 → C₂ = −2.", "v(t) = ⟨t³/3 + 1, {{e^(-t)}} − 2⟩."]}},
      {ex:{q:"Evaluate ∫ from 0 to 1 of ⟨3t², {{e^(3t)}}⟩ dt.", a:["[⟨t³, {{e^(3t)}}/3⟩] from 0 to 1.", "⟨1, (e³ − 1)/3⟩."]}},
      {ex:{q:"v(t) = ⟨4√t, sin 2t⟩. (a) Total distance from t = 1 to 2? (b) Position at t = 2 if p(1) = ⟨4, 3⟩?", a:["(a) ∫ from 1 to 2 of √((4√t)² + (sin 2t)²) dt ≈ 4.906.", "(b) x(2) = 4 + ∫ from 1 to 2 of 4√t dt ≈ 8.876. y(2) = 3 + ∫ from 1 to 2 of sin 2t dt ≈ 3.119.", "p(2) ≈ ⟨8.876, 3.119⟩ m."]}},
      {warn:"Speed is a number (never negative). Velocity is a vector. Don't hand in ⟨43, 4⟩ when they ask for speed."},
      {check:[
        {q:"v(t) = ⟨3, 4⟩. Speed?", a:"√(9 + 16) = 5."},
        {q:"p(t) = ⟨t², sin t⟩. Velocity?", a:"⟨2t, cos t⟩."},
        {q:"How do you find total distance for a vector path?", a:"∫ of the speed: √((dx/dt)² + (dy/dt)²) dt."},
        {q:"x(0) = 2 and x′(t) = 3. Find x(4).", a:"2 + ∫ from 0 to 4 of 3 dt = 14."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);

    /* ===== Obj 1–2: parametric ===== */
    C.expr(["1"], "Ch 9 Obj 1 ex1b", "x(t) = 3t², y(t) = 2t. Convert to a rectangular equation (x in terms of y).", "3y^2/4",
      ["y = 2t → t = y/2.", "x = 3(y/2)² = 3y²/4."], {label:"x =", v:"y"});
    C.pick(["1"], "Ch 9 Obj 1 ex2b", "x = 4cos t, y = 3sin t. Which is the rectangular equation?", ["(x/4)² + (y/3)² = 1", "x/4 + y/3 = 1", "(x/3)² + (y/4)² = 1", "x² + y² = 25"], "(x/4)² + (y/3)² = 1",
      ["cos t = x/4, sin t = y/3, and sin²t + cos²t = 1."]);
    C.expr(["1"], "Ch 9 Obj 1", "x = t + 1, y = t². Convert to a rectangular equation.", "(x-1)^2",
      ["t = x − 1, so y = (x − 1)²."], {label:"y ="});
    C.expr(["1"], "Ch 9 Obj 2 ex3a", "x(t) = t³ − 9t, y(t) = t². Find dy/dx.", "2t/(3t^2-9)",
      ["dy/dt = 2t, dx/dt = 3t² − 9.", "dy/dx = 2t/(3t² − 9)."], {label:"dy/dx =", v:"t"});
    C.expr(["1"], "Ch 9 Obj 2 ex3b", "x(t) = t³ − 9t, y(t) = t². Find d²y/dx².", "(-6t^2-18)/(3t^2-9)^3",
      ["d/dt [2t/(3t² − 9)] = (−6t² − 18)/(3t² − 9)².", "Divide by dx/dt = 3t² − 9: (−6t² − 18)/(3t² − 9)³."], {label:"d²y/dx² =", v:"t"});
    C.expr(["1"], "Ch 9 Obj 2 ex4a", "x(t) = t² + 1, y(t) = 4t³ + 3. Find dy/dx.", "6t", ["12t²/(2t) = 6t."], {label:"dy/dx =", v:"t"});
    C.expr(["1"], "Ch 9 Obj 2 ex4b", "x(t) = t² + 1, y(t) = 4t³ + 3. Find d²y/dx².", "3/t",
      ["d/dt (6t) = 6.", "Divide by dx/dt = 2t: 6/(2t) = 3/t."], {label:"d²y/dx² =", v:"t"});
    C.num(["1"], "Ch 9 Obj 2 ex4c", "x(t) = t² + 1, y(t) = 4t³ + 3. Find the arc length from t = 1 to t = 3 (3 decimals or exact).", "(325^(3/2)-37^(3/2))/54",
      ["s = ∫ from 1 to 3 of √((2t)² + (12t²)²) dt ≈ 104.333."], {label:"s ≈", dec:true, chk:{int:["sqrt(4t^2+144t^4)", 1, 3], v:"t"}});
    C.expr(["1"], "Ch 9 Obj 2 ex4d", "x(t) = t² + 1, y(t) = 4t³ + 3. Find the equation of the tangent line at t = 1.", "6(x-2)+7",
      ["Point: x(1) = 2, y(1) = 7.", "Slope: 6(1) = 6.", "y − 7 = 6(x − 2)."], {label:"y ="});
    C.pick(["1"], "Ch 9 Obj 2 ex4e", "x(t) = t² + 1, y(t) = 4t³ + 3. Is there a horizontal or vertical tangent?", ["No: at t = 0 both dx/dt and dy/dt are 0", "Horizontal at t = 0, since dy/dt = 0", "Vertical at t = 0, since dx/dt = 0", "Both kinds, at t = 0 and t = 1"], "No: at t = 0 both dx/dt and dy/dt are 0",
      ["dy/dt = 12t² and dx/dt = 2t are both 0 at t = 0: 0/0 is indeterminate, so neither."]);
    C.expr(["1"], "Ch 9 Obj 2", "x = 2t, y = t³. Find dy/dx.", "3t^2/2", ["3t²/2."], {label:"dy/dx =", v:"t"});
    C.num(["1"], "Ch 9 Obj 2", "x = cos t, y = sin t. Find the slope at t = π/4.", "-1",
      ["dy/dx = cos t/(−sin t).", "At π/4: −1."], {label:"Slope ="});
    C.num(["1"], "Ch 9 Obj 2", "x = 3t, y = 4t on [0, 2]. Find the arc length.", "10",
      ["√(9 + 16) = 5.", "∫ from 0 to 2 of 5 dt = 10."], {label:"s =", chk:{int:["5", 0, 2], v:"t"}});
    C.set(["1"], "Ch 9 Obj 2", "x = t² + 1, y = t³ − 12t. At what t-values is the tangent horizontal?", ["2", "-2"],
      ["dy/dt = 3t² − 12 = 0 → t = ±2.", "dx/dt = 2t ≠ 0 there, so both are horizontal tangents."], {label:"t ="});

    /* ===== Obj 3: polar slope & arc length ===== */
    C.num(["3"], "Ch 9 Obj 3 ex1c", "r = 3 − 3sin θ. Find the slope dy/dx at θ = π/6.", "0",
      ["Top: (3 − 3/2)(√3/2) − 3(√3/2)(1/2) = 3√3/4 − 3√3/4 = 0.", "Bottom: (3/2)(−1/2) − 3(3/4) = −3. Slope 0/−3 = 0."], {label:"Slope ="});
    C.num(["3"], "Ch 9 Obj 3 ex1d", "r = 3 − 3sin θ. Find the arc length from θ = π/8 to θ = π/6 (3 decimals).", "0.4147",
      ["dr/dθ = −3cos θ.", "∫ from π/8 to π/6 of √((3 − 3sin θ)² + (−3cos θ)²) dθ ≈ 0.415."], {label:"s ≈", dec:true});
    C.pick(["3"], "Ch 9 Obj 3 ex1a", "Convert r = 3 − 3sin θ to parametric equations.", ["x = (3 − 3sin θ)cos θ, y = (3 − 3sin θ)sin θ", "x = (3 − 3sin θ)cos θ, y = 3 − 3sin θ", "x = (3 − 3sin θ)sin θ, y = (3 − 3sin θ)cos θ", "x = 3 − 3cos θ, y = 3 − 3sin θ"], "x = (3 − 3sin θ)cos θ, y = (3 − 3sin θ)sin θ",
      ["x = r cos θ, y = r sin θ. Replace r with 3 − 3sin θ."]);
    C.pick(["3"], "Ch 9 Obj 3 ex2a", "r = 2 − 4cos θ. Which θ-interval traces the inner loop?", ["(−π/3, π/3)", "(π/3, 5π/3)", "(0, π)", "(π/6, 5π/6)"], "(−π/3, π/3)",
      ["r = 0 → cos θ = 1/2 → θ = ±π/3.", "Between them r < 0, which traces the inner loop."]);
    C.pick(["3"], "Ch 9 Obj 3 ex2b", "r = 2 − 4cos θ. Which θ-interval traces the outer loop?", ["(π/3, 5π/3)", "(−π/3, π/3)", "(0, 2π)", "(π/2, 3π/2)"], "(π/3, 5π/3)",
      ["The rest of the way around, from π/3 to 5π/3."]);
    C.num(["3"], "Ch 9 Obj 3", "Find the length of the circle r = 2 (θ from 0 to 2π).", "4π",
      ["r = 2, dr/dθ = 0.", "∫ from 0 to 2π of √4 dθ = 4π."], {label:"s =", chk:{int:["2", 0, "2pi"], v:"t"}});
    C.num(["3"], "Ch 9 Obj 3", "r = 2cos θ. Find the slope at θ = π/4.", "0",
      ["x = 2cos²θ, y = 2sin θ cos θ = sin 2θ.", "dy/dθ = 2cos 2θ = 0 at π/4. dx/dθ = −2sin 2θ = −2.", "Slope 0."], {label:"Slope ="});
    C.num(["3"], "Ch 9 Obj 3", "r = θ. Find the slope at θ = π/2.", "-2/π",
      ["x = θcos θ, y = θ sin θ.", "dy/dθ = sin θ + θcos θ = 1 at π/2. dx/dθ = cos θ − θ sin θ = −π/2.", "Slope = 1/(−π/2) = −2/π."], {label:"Slope ="});
    C.set(["3"], "Ch 9 Obj 3", "Where does r = 1 + 2cos θ pass through the pole (0 ≤ θ < 2π)?", ["2pi/3", "4pi/3"],
      ["r = 0 → cos θ = −1/2.", "θ = 2π/3, 4π/3."], {label:"θ =", ph:"e.g. pi/3, 5pi/3"});

    /* ===== Obj 4: area in polar ===== */
    C.num(["4"], "Ch 9 Obj 4 ex1", "Find the area of the inner loop of r = 3 + 4sin θ (3 decimals).", "0.3806",
      ["r = 0 → sin θ = −3/4. α ≈ 3.9897, β ≈ 5.4351.", "(1/2) ∫ from α to β of (3 + 4sin θ)² dθ ≈ 0.381."], {label:"A ≈", dec:true});
    C.num(["4"], "Ch 9 Obj 4 ex2", "Find the area between the inner and outer loops of r = 1 − 2sin θ (3 decimals).", "8.3377",
      ["r = 0 at θ = π/6, 5π/6.", "Outer (5π/6 to 13π/6) minus inner (π/6 to 5π/6): ≈ 8.338."], {label:"A ≈", dec:true});
    C.num(["4"], "Ch 9 Obj 4 ex3", "Find the area common to r = −6cos θ and r = 2 − 2cos θ.", "5π",
      ["They meet at θ = 2π/3 and 4π/3.", "(1/2) ∫ from 2π/3 to 4π/3 of (2 − 2cos θ)² dθ + 2 · (1/2) ∫ from π/2 to 2π/3 of 36cos²θ dθ.", "≈ 15.708 = 5π."], {label:"A =", dec:true});
    C.num(["4"], "Ch 9 Obj 4", "Find the area enclosed by the cardioid r = 1 + cos θ.", "3π/2",
      ["(1/2) ∫ from 0 to 2π of (1 + cos θ)² dθ = 3π/2."], {label:"A =", chk:{int:["(1/2)(1+cos(t))^2", 0, "2pi"], v:"t"}});
    C.num(["4"], "Ch 9 Obj 4", "Find the area of one petal of r = cos 2θ (from θ = −π/4 to π/4).", "π/8",
      ["(1/2) ∫ from −π/4 to π/4 of cos²(2θ) dθ = π/8."], {label:"A =", chk:{int:["(1/2)cos(2t)^2", "-pi/4", "pi/4"], v:"t"}});
    C.num(["4"], "Ch 9 Obj 4", "Find the area inside r = 3 (the whole circle) using the polar formula.", "9π",
      ["(1/2) ∫ from 0 to 2π of 9 dθ = 9π."], {label:"A =", chk:{int:["9/2", 0, "2pi"], v:"t"}});
    C.num(["4"], "Ch 9 Obj 4", "Find the area of the sector of r = 4 from θ = 0 to θ = π/2.", "4π",
      ["(1/2)r²θ = (1/2)(16)(π/2) = 4π."], {label:"A ="});
    C.pick(["4"], "Ch 9 Obj 4", "Which gives the area inside r = f(θ) from α to β?", ["(1/2) ∫ from α to β of r² dθ", "∫ from α to β of r dθ", "π ∫ from α to β of r² dθ", "∫ from α to β of √(r² + (r′)²) dθ"], "(1/2) ∫ from α to β of r² dθ",
      ["Each sliver is a sector: (1/2)r² dθ."]);

    /* ===== Obj 5–7: vectors ===== */
    k.ask(["5"], "Ch 9 Obj 5 ex1a", "p(t) = ⟨t⁴ + 2t² + 3t, t² + 1⟩ meters. Find the velocity vector.", [{l:"x′(t) =", t:"expr", a:"4t^3+4t+3", v:["t"]}, {l:"y′(t) =", t:"expr", a:"2t", v:["t"]}],
      ["Differentiate each part: ⟨4t³ + 4t + 3, 2t⟩."], {kind:"expr"});
    k.ask(["5"], "Ch 9 Obj 5 ex1b", "p(t) = ⟨t⁴ + 2t² + 3t, t² + 1⟩. Find the acceleration vector.", [{l:"x″(t) =", t:"expr", a:"12t^2+4", v:["t"]}, {l:"y″(t) =", t:"expr", a:"2", v:["t"]}],
      ["Differentiate velocity ⟨4t³ + 4t + 3, 2t⟩: ⟨12t² + 4, 2⟩."], {kind:"expr"});
    k.ask(["5"], "Ch 9 Obj 5 ex1c", "p(t) = ⟨t⁴ + 2t² + 3t, t² + 1⟩. Find the velocity vector at t = 2.", [{l:"x′(2) =", t:"num", a:"43"}, {l:"y′(2) =", t:"num", a:"4"}],
      ["v(2) = ⟨32 + 8 + 3, 4⟩ = ⟨43, 4⟩ m/s."], {kind:"num"});
    C.num(["5"], "Ch 9 Obj 5 ex1d", "p(t) = ⟨t⁴ + 2t² + 3t, t² + 1⟩. Find the speed at t = 2.", "sqrt(1865)",
      ["v(2) = ⟨43, 4⟩.", "Speed = √(43² + 4²) = √1865 ≈ 43.186 m/s."], {label:"Speed ="});
    k.ask(["5"], "Ch 9 Obj 6 ex2", "a(t) = ⟨t², −e^(−t)⟩ and v(0) = ⟨1, −1⟩. Find the velocity vector v(t).", [{l:"x′(t) =", t:"expr", a:"t^3/3+1", v:["t"]}, {l:"y′(t) =", t:"expr", a:"e^(-t)-2", v:["t"]}],
      ["Integrate each part: ⟨t³/3 + C₁, e^(−t) + C₂⟩.", "At t = 0: C₁ = 1, 1 + C₂ = −1 → C₂ = −2."], {kind:"expr"});
    k.ask(["5"], "Ch 9 Obj 6 ex3", "Evaluate ∫ from 0 to 1 of ⟨3t², e^(3t)⟩ dt.", [{l:"x-part =", t:"num", a:"1"}, {l:"y-part =", t:"num", a:"(e^3-1)/3"}],
      ["[⟨t³, e^(3t)/3⟩] from 0 to 1 = ⟨1, (e³ − 1)/3⟩."], {kind:"num"});
    C.num(["5"], "Ch 9 Obj 7 ex4a", "v(t) = ⟨4√t, sin 2t⟩. Find the total distance from t = 1 to t = 2 (3 decimals).", "4.9062",
      ["∫ from 1 to 2 of √(16t + sin²2t) dt ≈ 4.906."], {label:"Distance ≈", dec:true});
    k.ask(["5"], "Ch 9 Obj 7 ex4b", "v(t) = ⟨4√t, sin 2t⟩ and p(1) = ⟨4, 3⟩. Find the position at t = 2 (3 decimals).", [{l:"x(2) ≈", t:"num", a:"4+(8/3)(2^(3/2)-1)", dec:true}, {l:"y(2) ≈", t:"num", a:"3+(cos(2)-cos(4))/2", dec:true}],
      ["x(2) = 4 + ∫ from 1 to 2 of 4√t dt = 4 + (8/3)(2^(3/2) − 1) ≈ 8.876.", "y(2) = 3 + ∫ from 1 to 2 of sin 2t dt = 3 + (cos 2 − cos 4)/2 ≈ 3.119."], {kind:"num"});
    C.num(["5"], "Ch 9 Obj 5", "v(t) = ⟨3, 4⟩ for all t. What is the speed?", "5", ["√(9 + 16) = 5."], {label:"Speed ="});
    C.num(["5"], "Ch 9 Obj 5", "p(t) = ⟨t², 2t⟩. Find the speed at t = 1.", "2sqrt(2)",
      ["v(t) = ⟨2t, 2⟩, v(1) = ⟨2, 2⟩.", "√8 = 2√2."], {label:"Speed ="});
    C.num(["5"], "Ch 9 Obj 7", "v(t) = ⟨3cos t, 3sin t⟩. Find the total distance from t = 0 to t = 2π.", "6π",
      ["Speed = √(9cos²t + 9sin²t) = 3.", "∫ from 0 to 2π of 3 dt = 6π."], {label:"Distance =", chk:{int:["3", 0, "2pi"], v:"t"}});
    C.pick(["5"], "Ch 9 Obj 5", "They ask for the speed at t = 2 and v(2) = ⟨43, 4⟩. Which answer is right?", ["√1865", "⟨43, 4⟩", "47", "43"], "√1865",
      ["Speed is the magnitude: √(43² + 4²). Not the vector itself."]);
  }
});
})();
