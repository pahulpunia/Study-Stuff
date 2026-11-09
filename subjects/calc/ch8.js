/* Calculus BC · Chapter 8: Applications of Integration
   Source: Ch 8 Obj 1 (Arc Length & Area Between Curves), Obj 2 (Solids of Revolution), Obj 3 (Cross Sections), Obj 4 (with respect to y) class notes.
   Integral answers are checked numerically (tools/verify.js). */
(() => {
Study.addUnit("calc", {
  id: "c8",
  name: "Ch 8: Applications of Integration",
  short: "Ch 8",
  sections: [
    {id:"1", name:"Obj 1: Arc Length & Area Between Curves"},
    {id:"2", name:"Obj 2: Solids of Revolution (Disk & Washer)"},
    {id:"3", name:"Obj 3: Cross Sections"},
    {id:"4", name:"Obj 4: With Respect to y (dy)"}
  ],

  notes: {
    "1": [
      {sum:["Arc length: s = ∫ from a to b of √(1 + (dy/dx)²) dx.",
            "Area between curves: ∫ from a to b of [top − bottom] dx.",
            "Find the boundaries by finding where the curves intersect (Calc → Intersect).",
            "If the curves cross inside the region, split it: each piece is top − bottom for that piece."]},
      {p:"**What it's for:** arc length measures the actual distance along a curve (like the length of a cable sagging between poles). Area between curves measures the space trapped between two graphs, like the gap between revenue and cost over time."},
      {h:"Arc length"},
      {p:"Zoom in on a curve and it looks like a tiny right triangle with legs dx and dy. The hypotenuse is √(dx² + dy²) = √(1 + (dy/dx)²) dx. Add them all up."},
      {steps:["**Find the derivative** dy/dx.", "**Substitute** into s = ∫ from a to b of √(1 + (dy/dx)²) dx.", "**Evaluate** (usually with the calculator: put dy/dx in y1)."]},
      {ex:{q:"Find the length of f(x) = {{x^(2/3)}} from x = 1 to x = 8.", a:["y′ = (2/3){{x^(-1/3)}}.", "s = ∫ from 1 to 8 of √(1 + ((2/3){{x^(-1/3)}})²) dx ≈ 7.634."]}},
      {h:"Area between two curves"},
      {table:{head:["Situation", "Set up"], rows:[
        ["one region, f on top", "∫ from a to b of [f(x) − g(x)] dx"], ["they cross at x = b", "∫ from a to b of [f − g] dx + ∫ from b to c of [g − f] dx"],
        ["left/right boundaries (functions of y)", "∫ from c to d of [right − left] dy"]]}},
      {steps:["**Graph both curves accurately** (zoom and adjust the window).", "**Find the boundaries:** intersections (Calc → Intersect).", "**Set up the integral(s):** top − bottom on each piece."]},
      {ex:{q:"Find the area bounded by f(x) = x³ − 3x² + 3x and g(x) = x².", a:["Intersections: x³ − 4x² + 3x = x(x − 1)(x − 3) = 0 → x = 0, 1, 3.", "On [0, 1] f is on top. On [1, 3] g is on top.", "A = ∫ from 0 to 1 of (f − g) dx + ∫ from 1 to 3 of (g − f) dx = 5/12 + 8/3 = 37/12 ≈ 3.083."]}},
      {ex:{q:"Find the area bounded by x = y + 2 and x = y².", a:["Solve for y to graph if you need to (y = ±√x).", "They meet at y = −1 and y = 2. Right − left: (y + 2) − y².", "A = ∫ from −1 to 2 of (y + 2 − y²) dy = 4.5."]}},
      {warn:"If you flip the functions you get a negative value. Area is never negative, so check which one is on top on each piece."},
      {check:[
        {q:"Arc length formula?", a:"∫ from a to b of √(1 + (dy/dx)²) dx."},
        {q:"Area between y = x and y = x² on [0, 1]?", a:"∫ (x − x²) dx = 1/2 − 1/3 = 1/6."},
        {q:"When should you integrate with respect to y?", a:"When the region has left and right boundaries that are functions of y (like x = y²)."},
        {q:"How do you find the limits for area between curves?", a:"Where the curves intersect (or the given lines)."}]}
    ],
    "2": [
      {sum:["Disk method: V = π ∫ from a to b of [R(x)]² dx.",
            "Washer method: V = π ∫ from a to b of ([R(x)]² − [r(x)]²) dx.",
            "R and r are distances from the axis of rotation (AOR): top − bottom.",
            "If the AOR is y = c, then R(x) = f(x) − c (or c − f(x) if the region is below the axis)."]},
      {p:"**What it's for:** spinning a flat region around a line creates a solid (a vase, a bowl, a bullet). Each thin slice is a disk (or a washer with a hole), so the volume is the sum of circle areas, πr², along the axis."},
      {h:"Disk vs washer"},
      {table:{head:["Method", "When", "Formula"], rows:[
        ["disk", "the region touches the axis of rotation", "π ∫ [R(x)]² dx"],
        ["washer", "there's a gap between the region and the axis", "π ∫ ([R(x)]² − [r(x)]²) dx"]]}},
      {steps:["**Graph the boundaries** and lightly shade the enclosed area. (Tip: wait on the AOR.)", "**Graph the AOR.**", "**Find R(x) and r(x):** distance from the AOR to the far and near boundaries (top − bottom).", "**Set up the integral.**", "**Find the limits** of the shaded area."]},
      {ex:{q:"Find the volume when the region bounded by y = √x, y = 0, and x = 3 is rotated around y = −2.", a:["The region doesn't touch y = −2: washers.", "R(x) = √x − (−2) = √x + 2. r(x) = 0 − (−2) = 2.", "V = π ∫ from 0 to 3 of [(√x + 2)² − 2²] dx ≈ 57.668."]}},
      {ex:{q:"Find the volume when the region bounded by y = 2x² (x ≥ 0), x = 0, and y = 8 is rotated around y = 8.", a:["The region touches y = 8: disks, only one R.", "R(x) = 8 − 2x² (top − bottom).", "Limits: 2x² = 8 → x = 2.", "V = π ∫ from 0 to 2 of (8 − 2x²)² dx = 1024π/15 ≈ 214.466."]}},
      {tip:"The AOR goes into the functions of the boundaries: subtract it, top − bottom."},
      {warn:"Washers are [R² − r²], not (R − r)². Square each radius separately."},
      {check:[
        {q:"Region under y = x² on [0, 2], about the x-axis. Volume?", a:"π ∫ x⁴ dx = 32π/5."},
        {q:"AOR is y = −1, boundary is y = x². What's that radius?", a:"x² − (−1) = x² + 1."},
        {q:"When do you need washers?", a:"When there's a gap between the region and the axis."},
        {q:"Is π ∫ (R − r)² dx the washer formula?", a:"No. It's π ∫ (R² − r²) dx."}]}
    ],
    "3": [
      {sum:["Volume with known cross sections: V = ∫ from a to b of A(x) dx, where A is the area of one slice.",
            "Square: s². Equilateral triangle: (√3/4)s². Semicircle: (1/2)πr² = (1/8)πd².",
            "The side (or diameter) is the distance across the base region: top − bottom.",
            "⊥ to the x-axis → integrate dx. ⊥ to the y-axis → dy."]},
      {p:"**What it's for:** some solids aren't spun around anything. Picture a loaf of bread with a base region on the table and slices standing up that are squares or semicircles. Add up the slice areas to get the volume."},
      {h:"Area formulas"},
      {table:{head:["Shape", "Area"], rows:[["square", "s²"], ["triangle", "(1/2)bh"], ["equilateral triangle", "(√3/4)s²"], ["semicircle", "(1/2)πr² = (1/8)πd²"]]}},
      {steps:["**Draw and shade** the base region.", "**Find the limits** (intersections).", "**Set up ∫ A(x) dx:** start with the area formula, like (1/8)π ∫ d² dx.", "**Replace the variable** (s or d) with the distance across the region, top − bottom."]},
      {ex:{q:"Base: bounded by y = 2√x and y = x²/2. Cross sections are semicircles ⊥ to the x-axis. Find the volume.", a:["Intersections: x = 0 and x = 4^(2/3) ≈ 2.51984.", "d(x) = 2√x − x²/2.", "V = (π/8) ∫ from 0 to 2.51984 of (2√x − x²/2)² dx ≈ 1.282."]}},
      {ex:{q:"Base: bounded by y = 2ˣ, y = 4, and x = 0. Cross sections are equilateral triangles ⊥ to the x-axis. Find the volume.", a:["s = 4 − 2ˣ, from x = 0 to x = 2.", "V = (√3/4) ∫ from 0 to 2 of (4 − 2ˣ)² dx ≈ 3.548."]}},
      {tip:"Use a couple of extra decimal places on limits from the calculator (like 2.51984) so the final answer rounds correctly."},
      {check:[
        {q:"Area of a semicircle in terms of its diameter d?", a:"(1/8)πd²."},
        {q:"Square cross sections on the region under y = √x from 0 to 4. Volume?", a:"∫ (√x)² dx = ∫ x dx = 8."},
        {q:"What is s for squares between y = 4 and y = x²?", a:"4 − x² (top − bottom)."},
        {q:"Cross sections ⊥ to the y-axis: dx or dy?", a:"dy."}]}
    ],
    "4": [
      {sum:["Rotating around a vertical line (x = #) or slicing ⊥ to the y-axis: integrate with respect to y.",
            "Write every boundary as x = (a function of y).",
            "Radius or side: right − left.",
            "Limits are y-values (read them on the y-axis)."]},
      {p:"**What it's for:** some solids are easier, or only possible, to slice horizontally. Switching to y means rewriting the curves as x = …, which is just solving for x."},
      {table:{head:["", "Rotate around x = #", "Cross sections ⊥ to y-axis"], rows:[["radius / side", "right − left", "right − left"], ["limits", "y-values", "y-values"], ["functions", "x = …", "x = …"]]}},
      {ex:{q:"Base: y = x³, x = 0, y = 8. Cross sections are semicircles ⊥ to the y-axis. Find the volume.", a:["x = ∛y, y from 0 to 8.", "d = ∛y − 0.", "V = (π/8) ∫ from 0 to 8 of (∛y)² dy = 12π/5 ≈ 7.540."]}},
      {ex:{q:"Region bounded by y = √(x + 1), x = 3, y = 0, rotated around x = −2. Find the volume.", a:["x = y² − 1. At x = 3, y = 2. Limits y = 0 to 2.", "R = 3 − (−2) = 5. r = (y² − 1) − (−2) = y² + 1 (right − left).", "V = π ∫ from 0 to 2 of [5² − (y² + 1)²] dy = 544π/15 ≈ 113.935."]}},
      {warn:"Don't mix x and y. If you're integrating dy, every function and limit has to be in terms of y."},
      {check:[
        {q:"Rewrite y = x² (x ≥ 0) as a function of y.", a:"x = √y."},
        {q:"Region between x = √y and the y-axis, y from 0 to 4, rotated about the y-axis. Volume?", a:"π ∫ from 0 to 4 of y dy = 8π."},
        {q:"AOR x = −2, right boundary x = 3. R?", a:"3 − (−2) = 5."},
        {q:"What are the limits when you integrate dy?", a:"y-values."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);
    const V = (secs, src, text, ans, g, a, b, steps, o = {}) => C.num(secs, src, text, ans, steps, Object.assign({label:"V =", chk:{int:[g, a, b], v:o.v}}, o));

    /* ===== Obj 1: arc length & area between curves ===== */
    C.num(["1"], "Ch 8 Obj 1 ex1", "Find the length of f(x) = x^(2/3) from x = 1 to x = 8 (3 decimals, or exact).", "(40^(3/2)-13^(3/2))/27",
      ["y′ = (2/3){{x^(-1/3)}}.", "s = ∫ from 1 to 8 of √(1 + (4/9){{x^(-2/3)}}) dx ≈ 7.634."], {label:"s ≈", dec:true, chk:{int:["sqrt(1+(4/9)x^(-2/3))", 1, 8]}});
    C.num(["1"], "Ch 8 Obj 1", "Find the length of y = (2/3)x^(3/2) from x = 0 to x = 3.", "14/3",
      ["y′ = √x, so 1 + (y′)² = 1 + x.", "∫ from 0 to 3 of √(1 + x) dx = (2/3)[(1 + x)^(3/2)] = (2/3)(8 − 1) = 14/3."], {label:"s =", chk:{int:["sqrt(1+x)", 0, 3]}});
    C.pick(["1"], "Ch 8 Obj 1", "Which integral gives the length of y = sin x from 0 to π?", ["∫ from 0 to π of √(1 + cos²x) dx", "∫ from 0 to π of √(1 + sin²x) dx", "∫ from 0 to π of (1 + cos x) dx", "∫ from 0 to π of √(1 + cos x) dx"], "∫ from 0 to π of √(1 + cos²x) dx",
      ["dy/dx = cos x, squared: cos²x."]);
    C.num(["1"], "Ch 8 Obj 1 ex2", "Find the area bounded by f(x) = x³ − 3x² + 3x and g(x) = x².", "37/12",
      ["Intersections: x = 0, 1, 3.", "∫ from 0 to 1 of (f − g) dx = 5/12. ∫ from 1 to 3 of (g − f) dx = 8/3.", "Total: 37/12 ≈ 3.083."], {label:"Area =", chk:{int:["abs(x^3-4x^2+3x)", 0, 3]}});
    C.num(["1"], "Ch 8 Obj 1 ex3", "Find the area bounded by x = y + 2 and x = y².", "9/2",
      ["They meet at y = −1 and y = 2.", "∫ from −1 to 2 of [(y + 2) − y²] dy = 4.5."], {label:"Area =", chk:{int:["y+2-y^2", -1, 2], v:"y"}});
    C.num(["1"], "Ch 8 Obj 1", "Find the area between y = x and y = x².", "1/6",
      ["They meet at x = 0 and 1. On (0, 1), x is on top.", "∫ from 0 to 1 of (x − x²) dx = 1/2 − 1/3 = 1/6."], {label:"Area =", chk:{int:["x-x^2", 0, 1]}});
    C.num(["1"], "Ch 8 Obj 1", "Find the area between y = 4 − x² and the x-axis.", "32/3",
      ["Roots: x = ±2.", "∫ from −2 to 2 of (4 − x²) dx = 16 − 16/3 = 32/3."], {label:"Area =", chk:{int:["4-x^2", -2, 2]}});
    C.num(["1"], "Ch 8 Obj 1", "Find the area between y = x² and y = 2x.", "4/3",
      ["x² = 2x → x = 0, 2. 2x is on top.", "∫ from 0 to 2 of (2x − x²) dx = 4 − 8/3 = 4/3."], {label:"Area =", chk:{int:["2x-x^2", 0, 2]}});
    C.num(["1"], "Ch 8 Obj 1", "Find the area between y = eˣ and y = 1 from x = 0 to x = 2.", "e^2-3",
      ["eˣ ≥ 1 on [0, 2].", "∫ from 0 to 2 of (eˣ − 1) dx = (e² − 2) − 1 = e² − 3."], {label:"Area =", chk:{int:["e^x-1", 0, 2]}});
    C.num(["1"], "Ch 8 Obj 1", "Find the area between x = y² and x = 4.", "32/3",
      ["Right − left: 4 − y², from y = −2 to 2.", "∫ (4 − y²) dy = 16 − 16/3 = 32/3."], {label:"Area =", chk:{int:["4-y^2", -2, 2], v:"y"}});
    C.pick(["1"], "Ch 8 Obj 1", "You set up ∫ [g(x) − f(x)] dx but f is actually on top. What happens?", ["You get the negative of the area", "You get the same area anyway", "You get double the actual area", "You always get exactly 0"], "You get the negative of the area",
      ["Bottom − top flips the sign."]);

    /* ===== Obj 2: disk & washer ===== */
    V(["2"], "Ch 8 Obj 2 ex1", "The region bounded by y = √x, y = 0, and x = 3 is rotated around y = −2. Find the volume.", "pi(9/2+8sqrt(3))", "pi*((sqrt(x)+2)^2-4)", 0, 3,
      ["Washers: R = √x + 2, r = 2.", "V = π ∫ from 0 to 3 of [(√x + 2)² − 4] dx = π ∫ (x + 4√x) dx.", "= π(9/2 + 8√3) ≈ 57.668."]);
    V(["2"], "Ch 8 Obj 2 ex2", "The region bounded by y = 2x² (x ≥ 0), x = 0, and y = 8 is rotated around y = 8. Find the volume.", "1024pi/15", "pi*(8-2x^2)^2", 0, 2,
      ["Disks: R = 8 − 2x². Limits: 0 to 2.", "V = π ∫ from 0 to 2 of (8 − 2x²)² dx = 1024π/15 ≈ 214.466."]);
    V(["2"], "Ch 8 Obj 2", "The region under y = x² on [0, 2] is rotated around the x-axis. Find the volume.", "32pi/5", "pi*x^4", 0, 2,
      ["Disks: R = x².", "π ∫ from 0 to 2 of x⁴ dx = 32π/5."]);
    V(["2"], "Ch 8 Obj 2", "The region between y = x and y = x² is rotated around the x-axis. Find the volume.", "2pi/15", "pi*(x^2-x^4)", 0, 1,
      ["Washers: R = x, r = x², from 0 to 1.", "π ∫ (x² − x⁴) dx = π(1/3 − 1/5) = 2π/15."]);
    V(["2"], "Ch 8 Obj 2", "The region bounded by y = x², the x-axis, and x = 2 is rotated around y = −1. Find the volume.", "176pi/15", "pi*((x^2+1)^2-1)", 0, 2,
      ["Washers: R = x² + 1, r = 0 − (−1) = 1.", "π ∫ from 0 to 2 of [(x² + 1)² − 1] dx = π ∫ (x⁴ + 2x²) dx = π(32/5 + 16/3) = 176π/15."]);
    V(["2"], "Ch 8 Obj 2", "The region under y = √x on [0, 4] is rotated around the x-axis. Find the volume.", "8pi", "pi*x", 0, 4,
      ["Disks: R = √x, so R² = x.", "π ∫ from 0 to 4 of x dx = 8π."]);
    V(["2"], "Ch 8 Obj 2", "The region under y = sin x on [0, π] is rotated around the x-axis. Find the volume.", "pi^2/2", "pi*sin(x)^2", 0, "pi",
      ["π ∫ from 0 to π of sin²x dx.", "sin²x averages 1/2, so the integral is π/2. V = π²/2."]);
    C.pick(["2"], "Ch 8 Obj 2", "Region bounded by y = √x, y = 0, x = 3, rotated around y = −2. What is r(x)?", ["2", "√x + 2", "√x", "−2"], "2",
      ["The inner boundary is y = 0, which is 0 − (−2) = 2 from the axis."]);
    C.pick(["2"], "Ch 8 Obj 2", "Which is the washer formula?", ["π ∫ ([R(x)]² − [r(x)]²) dx", "π ∫ [R(x) − r(x)]² dx", "∫ ([R(x)]² − [r(x)]²) dx", "2π ∫ R(x) r(x) dx"], "π ∫ ([R(x)]² − [r(x)]²) dx",
      ["Big circle minus small circle, each squared separately."]);

    /* ===== Obj 3: cross sections ===== */
    C.num(["3"], "Ch 8 Obj 3 ex1a", "Base: bounded by y = 2√x and y = x²/2. Cross sections ⊥ to the x-axis are semicircles. Find the volume (3 decimals).", "1.282",
      ["Limits: 0 to 4^(2/3) ≈ 2.51984.", "d = 2√x − x²/2.", "V = (π/8) ∫ (2√x − x²/2)² dx ≈ 1.282."], {label:"V ≈", dec:true});
    C.num(["3"], "Ch 8 Obj 3 ex1b", "Base: bounded by y = 2ˣ, y = 4, and x = 0. Cross sections ⊥ to the x-axis are equilateral triangles. Find the volume (3 decimals).", "(sqrt(3)/4)(32-16.5/ln(2))",
      ["s = 4 − 2ˣ from x = 0 to 2.", "V = (√3/4) ∫ from 0 to 2 of (4 − 2ˣ)² dx ≈ 3.549."], {label:"V ≈", dec:true, chk:{int:["(sqrt(3)/4)(4-2^x)^2", 0, 2]}});
    V(["3"], "Ch 8 Obj 3", "Base: the region under y = √x on [0, 4]. Cross sections ⊥ to the x-axis are squares. Find the volume.", "8", "x", 0, 4,
      ["s = √x, so A = x.", "∫ from 0 to 4 of x dx = 8."]);
    V(["3"], "Ch 8 Obj 3", "Base: the region between y = 4 and y = x². Cross sections ⊥ to the x-axis are squares. Find the volume.", "512/15", "(4-x^2)^2", -2, 2,
      ["s = 4 − x², from −2 to 2.", "∫ (4 − x²)² dx = ∫ (16 − 8x² + x⁴) dx = 64 − 128/3 + 64/5 = 512/15."]);
    V(["3"], "Ch 8 Obj 3", "Base: the region under y = 2 − x on [0, 2]. Cross sections ⊥ to the x-axis are semicircles. Find the volume.", "pi/3", "(pi/8)(2-x)^2", 0, 2,
      ["d = 2 − x.", "(π/8) ∫ from 0 to 2 of (2 − x)² dx = (π/8)(8/3) = π/3."]);
    V(["3"], "Ch 8 Obj 3", "Base: the region under y = x on [0, 3]. Cross sections ⊥ to the x-axis are equilateral triangles. Find the volume.", "9sqrt(3)/4", "(sqrt(3)/4)x^2", 0, 3,
      ["s = x.", "(√3/4) ∫ from 0 to 3 of x² dx = (√3/4)(9) = 9√3/4."]);
    C.pick(["3"], "Ch 8 Obj 3", "What's the area of a semicircle with diameter d?", ["(1/8)πd²", "(1/2)πd²", "(1/4)πd²", "πd²"], "(1/8)πd²",
      ["r = d/2, so (1/2)π(d/2)² = (1/8)πd²."]);
    C.pick(["3"], "Ch 8 Obj 3", "What's the area of an equilateral triangle with side s?", ["(√3/4)s²", "(1/2)s²", "(√3/2)s²", "s²"], "(√3/4)s²",
      ["Height is (√3/2)s, so (1/2)(s)(√3/2)s = (√3/4)s²."]);

    /* ===== Obj 4: with respect to y ===== */
    V(["4"], "Ch 8 Obj 4 ex1", "Base: bounded by y = x³, x = 0, and y = 8. Cross sections ⊥ to the y-axis are semicircles. Find the volume.", "12pi/5", "(pi/8)y^(2/3)", 0, 8,
      ["x = ∛y, y from 0 to 8. d = ∛y.", "(π/8) ∫ from 0 to 8 of {{y^(2/3)}} dy = (π/8)(3/5)(32) = 12π/5 ≈ 7.540."], {v:"y"});
    V(["4"], "Ch 8 Obj 4 ex2", "The region bounded by y = √(x + 1), x = 3, and y = 0 is rotated around x = −2. Find the volume.", "544pi/15", "pi*(25-(y^2+1)^2)", 0, 2,
      ["x = y² − 1, y from 0 to 2.", "R = 3 − (−2) = 5. r = (y² − 1) + 2 = y² + 1.", "π ∫ from 0 to 2 of [25 − (y² + 1)²] dy = 544π/15 ≈ 113.935."], {v:"y"});
    V(["4"], "Ch 8 Obj 4", "The region bounded by y = x² (x ≥ 0), y = 4, and the y-axis is rotated around the y-axis. Find the volume.", "8pi", "pi*y", 0, 4,
      ["x = √y. Disks: R = √y, so R² = y.", "π ∫ from 0 to 4 of y dy = 8π."], {v:"y"});
    V(["4"], "Ch 8 Obj 4", "Base: the region between x = y² and x = 4. Cross sections ⊥ to the y-axis are squares. Find the volume.", "512/15", "(4-y^2)^2", -2, 2,
      ["s = 4 − y² (right − left), y from −2 to 2.", "∫ (4 − y²)² dy = 512/15."], {v:"y"});
    V(["4"], "Ch 8 Obj 4", "The region bounded by x = y², x = 0, and y = 2 is rotated around the y-axis. Find the volume.", "32pi/5", "pi*y^4", 0, 2,
      ["Disks: R = y².", "π ∫ from 0 to 2 of y⁴ dy = 32π/5."], {v:"y"});
    C.pick(["4"], "Ch 8 Obj 4", "Region bounded by y = √(x + 1), x = 3, y = 0, rotated around x = −2. What is r?", ["y² + 1", "5", "y² − 1", "√(x + 1) + 2"], "y² + 1",
      ["The left boundary is x = y² − 1. Right − left from x = −2: (y² − 1) − (−2) = y² + 1."]);
    C.pick(["4"], "Ch 8 Obj 4", "Rotating around x = 5. Which variable do you integrate with (washers or disks)?", ["dy", "dx", "either one works the same", "dθ, since it spins"], "dy",
      ["A vertical axis (x = #) means horizontal slices: dy."]);
  }
});
})();
