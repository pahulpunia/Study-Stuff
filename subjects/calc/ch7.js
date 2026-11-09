/* Calculus BC · Chapter 7: Differential Equations
   Source: Ch 7 Obj 1–2 (Separation of Variables), Obj 3 (Slope Fields), Obj 4 (Euler's Method), Obj 5 (Logistic) class notes.
   Slope field pictures are described in words. Particular solutions are checked against the equation (tools/verify.js). */
(() => {
Study.addUnit("calc", {
  id: "c7",
  name: "Ch 7: Differential Equations",
  short: "Ch 7",
  sections: [
    {id:"1", name:"Obj 1–2: Separation of Variables"},
    {id:"3", name:"Obj 3: Slope Fields"},
    {id:"4", name:"Obj 4: Euler's Method"},
    {id:"5", name:"Obj 5: Logistic Differential Equations"}
  ],

  notes: {
    "1": [
      {sum:["A differential equation gives dy/dx. Solving it means finding y.",
            "Steps: separate (y and dy on one side, x and dx on the other), integrate both sides, solve for y.",
            "Only one + C, on the x side. Constants combine: C₁ + C₂ = C, 2C = C, {{e^C}} = C.",
            "General solution: still has C. Particular solution: use the given point to find C."]},
      {p:"**What it's for:** many real laws describe how fast something changes rather than what it is: populations grow in proportion to their size, hot coffee cools in proportion to how much hotter it is than the room. Separating and integrating turns that rate rule into a formula you can use."},
      {h:"Algebra review"},
      {table:{head:["Rule", "Use"], rows:[["{{x^(a+b)}} = {{x^a}} · {{x^b}}", "split e^(5x + y) into {{e^(5x)}} · {{e^y}}"], ["take the reciprocal of both sides", "1/y = x → y = 1/x"], ["C₁ + C₂ = C, 2C = C, {{e^C}} = C", "any constant is still just a constant"]]}},
      {steps:["**Separate the variables:** multiply dx over. y terms with dy, x terms with dx (dx and dy can't be in a denominator).", "**Integrate both sides.** Put + C on the x side only.", "**Solve for y:** y =, |y| =, or yⁿ =.", "**Particular solution:** plug in the point and solve for C."]},
      {ex:{q:"Find the general solution of dy/dx = x²y.", a:["dy/y = x² dx.", "ln|y| = x³/3 + C.", "|y| = {{e^(x^3/3+C)}} = {{e^C}} · {{e^(x^3/3)}}.", "Multiple choice form: y = C{{e^(x^3/3)}}."]}},
      {ex:{q:"Find the general solution of dy/dx = e^(5x + y).", a:["dy/dx = {{e^(5x)}} · {{e^y}}, so {{e^(-y)}} dy = {{e^(5x)}} dx.", "−{{e^(-y)}} = (1/5){{e^(5x)}} + C (chain rule on both sides).", "{{e^(-y)}} = −(1/5){{e^(5x)}} + C (−C is still C).", "y = −ln(−(1/5){{e^(5x)}} + C)."]}},
      {ex:{q:"Find the particular solution of dy/dx = x(y + 1) through (1, 3).", a:["dy/(y + 1) = x dx → ln|y + 1| = x²/2 + C.", "y + 1 = C{{e^(x^2/2)}}, so y = C{{e^(x^2/2)}} − 1.", "At (1, 3): 4 = C{{e^(1/2)}} → C = 4/√e.", "y = 4{{e^((x^2-1)/2)}} − 1 (≈ 2.426{{e^(x^2/2)}} − 1)."]}},
      {ex:{q:"Find the particular solution of dy/dx = xy² through (1, 2).", a:["{{y^(-2)}} dy = x dx → −{{y^(-1)}} = x²/2 + C.", "At (1, 2): −1/2 = 1/2 + C → C = −1.", "−1/y = x²/2 − 1 → y = {{1/(1-x^2/2)}}."]}},
      {tip:"You can find C right after integrating (before solving for y). Often the numbers are easier there."},
      {warn:"Don't forget that ln|y| = x³/3 + C becomes |y| = {{e^(x^3/3)}} · {{e^C}}, not {{e^(x^3/3)}} + {{e^C}}."},
      {check:[
        {q:"Separate: dy/dx = y/x.", a:"dy/y = dx/x."},
        {q:"Solve dy/dx = 2y with y(0) = 3.", a:"ln|y| = 2x + C → y = C{{e^(2x)}}, and y(0) = 3 gives y = 3{{e^(2x)}}."},
        {q:"Why put + C on only one side?", a:"Two constants combine into one: C₂ − C₁ is just C."},
        {q:"General vs particular solution?", a:"General has + C. Particular uses a given point to find C."}]}
    ],
    "3": [
      {sum:["A slope field draws a short tangent segment with slope dy/dx = f(x, y) at sample points.",
            "It shows the shape of every solution curve (the family y = F(x) + C) without solving.",
            "dy/dx in terms of x only: every point in a column has the same slope.",
            "dy/dx in terms of y only: every point in a row has the same slope."]},
      {p:"**What it's for:** some differential equations are hard or impossible to solve by separating. A slope field is the picture approach: draw the slope at many points and the solution curves appear, like iron filings showing a magnetic field."},
      {h:"Sketching a slope field"},
      {steps:["**Make a table** of x, y, and dy/dx at each grid point.", "**Draw a short segment** at each point with that slope: 0 is flat, positive tilts up, negative tilts down.", "**A slope like c/0** is undefined: draw a vertical segment."]},
      {ex:{q:"Sketch the slope field of dy/dx = y − x for x in [−1, 2], y in [−1, 2].", a:["At (0, 0): 0. At (1, 0): −1. At (2, 0): −2.", "Along the line y = x, the slope is 0 (flat segments).", "Above that line slopes are positive, below it negative."]}},
      {h:"Identifying a slope field's equation"},
      {steps:["**Signs by quadrant:** where are slopes positive or negative?", "**Zero and undefined slopes:** where are segments flat or vertical?", "**Parallel segments:** same slopes down columns → x only. Same across rows → y only."]},
      {table:{head:["What you see", "Likely equation"], rows:[
        ["flat along the vertical line x = 2, same slope in each column", "dy/dx = 0.5x − 1"], ["flat along y = 0, same slope in each row", "dy/dx = 0.5y"],
        ["flat at x = 0, vertical at y = 0", "dy/dx = −x/y"], ["flat along the line y = −x", "dy/dx = x + y"],
        ["negative on the left, positive on the right, same in each column", "dy/dx = x"]]}},
      {h:"Solution curves"},
      {p:"To sketch the solution through a point, start at the point and follow the slopes in both directions. The initial condition is what picks one curve (one value of C) out of the family."},
      {check:[
        {q:"dy/dx = x − y. What's the slope at (3, 1)?", a:"3 − 1 = 2."},
        {q:"Every segment in each vertical column is parallel. What does dy/dx depend on?", a:"Only x."},
        {q:"Where are the slopes of dy/dx = x + y equal to 0?", a:"Along the line y = −x."},
        {q:"How do you pick one solution curve out of the field?", a:"Start at the given point (the initial condition) and follow the slopes."}]}
    ],
    "4": [
      {sum:["Euler's method approximates y by walking along tangent lines in small steps.",
            "Each step: Δy ≈ (dy/dx) · Δx, then new x = x + Δx, new y = y + Δy.",
            "Use a table with columns x, y, and Δy = (dy/dx at that point) · Δx.",
            "Δx is the step size h. The number of steps = (target x − starting x)/h."]},
      {p:"**What it's for:** when you can't solve a differential equation, you can still estimate. Starting from a known point, the slope tells you which way to go, so you take a small step in that direction, recompute the slope, and repeat. This is how computers solve most of them."},
      {steps:["**Create a table:** x, y, Δy ≈ (dy/dx) · Δx. Start with the given point.", "**Find Δy** using the slope at the current (x, y).", "**Add:** next x = x + Δx, next y = y + Δy.", "**Repeat** until x reaches the target."]},
      {ex:{q:"dy/dx = xy + x², y(1) = 2. Use Euler's method with h = 0.25 to approximate y(1.75).", a:["(1, 2): slope 1·2 + 1 = 3. Δy = 0.75 → (1.25, 2.75).", "(1.25, 2.75): slope 3.4375 + 1.5625 = 5. Δy = 1.25 → (1.5, 4).", "(1.5, 4): slope 6 + 2.25 = 8.25. Δy = 2.0625 → (1.75, 6.0625).", "y(1.75) ≈ 6.0625."]}},
      {ex:{q:"dy/dx = 2x − y, y(−3) = 2. Approximate y(−2) with 2 steps.", a:["Δx = (−2 − (−3))/2 = 1/2.", "(−3, 2): slope −6 − 2 = −8. Δy = −4 → (−2.5, −2).", "(−2.5, −2): slope −5 + 2 = −3. Δy = −1.5 → (−2, −3.5).", "y(−2) ≈ −3.5."]}},
      {warn:"Use the slope at the point you're AT, not the one you're going to. And update both x and y before the next step."},
      {check:[
        {q:"Approximating y(2) from x = 1 with h = 0.5: how many steps?", a:"(2 − 1)/0.5 = 2."},
        {q:"dy/dx = y, y(0) = 1, one step with h = 0.1. Estimate y(0.1).", a:"Δy = 1 · 0.1, so y ≈ 1.1."},
        {q:"What's the formula for Δy?", a:"Δy ≈ (dy/dx) · Δx."},
        {q:"Is Euler's method exact?", a:"No. It's an approximation; smaller steps are usually more accurate."}]}
    ],
    "5": [
      {sum:["Logistic growth: fast at first, then slows as the population nears the carrying capacity M.",
            "dP/dt = kP(1 − P/M) or dP/dt = (k/M)P(M − P). Solution: P(t) = {{M/(1+ae^(-kt))}}.",
            "Carrying capacity (limiting value) = lim P(t) as t → ∞: set dP/dt = 0 and solve (P ≠ 0).",
            "Growing fastest at P = M/2 (the point of inflection)."]},
      {p:"**What it's for:** nothing grows exponentially forever. A population, a rumor, or a disease runs into limits (food, space, people left to reach). The logistic model captures that S-shaped curve: speeding up, then leveling off at the carrying capacity."},
      {h:"Reading the curve"},
      {table:{head:["Part of the curve", "What's happening"], rows:[
        ["below M/2", "increasing and concave up: the growth rate is increasing"], ["at P = M/2", "point of inflection: maximum growth rate"],
        ["above M/2", "increasing and concave down: the growth rate is decreasing"], ["horizontal asymptote P = M", "carrying capacity, limiting value"]]}},
      {p:"Two things answer most AP logistic questions: the limiting value M, and the y-value of the point of inflection, M/2."},
      {ex:{q:"Bears: dP/dt = 0.008P(100 − P). (a) Carrying capacity? (b) Population when growing fastest? (c) Rate then?", a:["(a) dP/dt = 0 → P = 100 (P = 0 is the trivial one).", "(b) Half of it: 50 bears.", "(c) dP/dt at P = 50: 0.008(50)(50) = 20 bears/year."]}},
      {ex:{q:"dP/dt = P(4 − P/1000). What's the limit of P(t) as t → ∞?", a:["4 − P/1000 = 0 → P = 4000."]}},
      {ex:{q:"dy/dt = 6y(1 − y/3). Find the limiting value and the y-value of the point of inflection.", a:["Limiting value: y = 3.", "Point of inflection: y = 3/2."]}},
      {ex:{q:"Disease: y = {{0.9/(1+45e^(-0.15t))}} is the proportion infected after t days. What percentage will NOT become infected?", a:["As t → ∞, the exponential → 0, so y → 0.9.", "90% infected, so 10% not."]}},
      {ex:{q:"A stadium holds 500 people. When there are 100, the number is increasing at 50 per minute. Which logistic equation fits?", a:["Need dP/dt = 0 at P = 500, and dP/dt = 50 at P = 100.", "(1/800)P(500 − P) at P = 100: (1/800)(100)(400) = 50. That's the one."]}},
      {warn:"A logistic population starting ABOVE M decreases toward M. One starting below M/2 has an inflection point. One starting between M/2 and M doesn't."},
      {check:[
        {q:"dP/dt = 0.2P(1 − P/600). Carrying capacity?", a:"600."},
        {q:"Same equation. At what P is it growing fastest?", a:"300."},
        {q:"P(t) = {{1200/(1+5e^(-0.3t))}}. Limiting value?", a:"1200."},
        {q:"What's dP/dt equal to at the carrying capacity?", a:"0."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);
    const part = (src, rhs, pt, ans, steps, o = {}) => C.expr(["1"], src, `Find the particular solution of dy/dx = ${o.show || rhs} through (${pt[0]}, ${pt[1]}).`, ans, steps,
      {label:"y =", chk:{ode:[rhs, pt[0], pt[1]], pts:o.pts}});

    /* ===== Obj 1–2: separation of variables ===== */
    part("Ch 7 Obj 2 ex2a", "x(y+1)", [1, 3], "4e^((x^2-1)/2)-1",
      ["dy/(y + 1) = x dx → ln|y + 1| = x²/2 + C.", "y = C{{e^(x^2/2)}} − 1.", "4 = C{{e^(1/2)}} → C = 4/√e.", "y = 4{{e^((x^2-1)/2)}} − 1."], {show:"x(y + 1)"});
    part("Ch 7 Obj 2 ex2b", "x*y^2", [1, 2], "1/(1-x^2/2)",
      ["{{y^(-2)}} dy = x dx → −1/y = x²/2 + C.", "−1/2 = 1/2 + C → C = −1.", "−1/y = x²/2 − 1 → y = {{1/(1-x^2/2)}}."], {show:"xy²", pts:[0.2, 0.5, 0.8, 1.1, 1.3, 0.1]});
    part("Ch 7 Obj 2", "2y", [0, 3], "3e^(2x)", ["dy/y = 2 dx → ln|y| = 2x + C.", "y = C{{e^(2x)}}, and y(0) = 3 → C = 3."]);
    part("Ch 7 Obj 2", "x/y", [0, 2], "sqrt(x^2+4)", ["y dy = x dx → y²/2 = x²/2 + C.", "At (0, 2): 2 = C. y² = x² + 4.", "y = √(x² + 4) (positive, since y = 2 > 0)."]);
    part("Ch 7 Obj 2", "y*cos(x)", [0, 1], "e^(sin(x))", ["dy/y = cos x dx → ln|y| = sin x + C.", "y = C{{e^(sin(x))}}, y(0) = 1 → C = 1."], {show:"y cos x"});
    part("Ch 7 Obj 2", "3x^2*y", [0, 5], "5e^(x^3)", ["dy/y = 3x² dx → ln|y| = x³ + C.", "y = 5{{e^(x^3)}}."], {show:"3x²y"});
    part("Ch 7 Obj 2", "x^2/y^2", [0, 1], "(x^3+1)^(1/3)", ["y² dy = x² dx → y³/3 = x³/3 + C.", "At (0, 1): C = 1/3. y³ = x³ + 1.", "y = ∛(x³ + 1)."], {show:"x²/y²"});
    C.pick(["1"], "Ch 7 Obj 1 ex1a", "Find the general solution of dy/dx = x²y.", ["y = Ce^(x³/3)", "y = e^(x³/3) + C", "y = x³/3 + C", "y = Ce^(2x)"], "y = Ce^(x³/3)",
      ["dy/y = x² dx → ln|y| = x³/3 + C.", "|y| = {{e^C}}{{e^(x^3/3)}}, so y = C{{e^(x^3/3)}}."]);
    C.pick(["1"], "Ch 7 Obj 1 ex1b", "Find the general solution of dy/dx = e^(5x + y).", ["y = −ln(−e^(5x)/5 + C)", "y = ln(e^(5x)/5 + C)", "y = e^(5x)/5 + C", "y = −e^(5x) + C"], "y = −ln(−e^(5x)/5 + C)",
      ["{{e^(-y)}} dy = {{e^(5x)}} dx → −{{e^(-y)}} = {{e^(5x)}}/5 + C.", "{{e^(-y)}} = −{{e^(5x)}}/5 + C → −y = ln(−{{e^(5x)}}/5 + C)."]);
    C.pick(["1"], "Ch 7 Obj 1", "Which correctly separates dy/dx = (x + 1)/y?", ["y dy = (x + 1) dx", "dy/y = (x + 1) dx", "y dx = (x + 1) dy", "dy = (x + 1)y dx"], "y dy = (x + 1) dx",
      ["Multiply both sides by y dx."]);
    C.num(["1"], "Ch 7 Obj 2", "dy/dt = 0.2y and y(0) = 50. Find y(5).", "50e",
      ["y = 50{{e^(0.2t)}}.", "y(5) = 50{{e^1}} = 50e ≈ 135.914."], {label:"y(5) ="});
    C.pick(["1"], "Ch 7 Obj 1", "After integrating, ln|y| = 3x + C. Which is the next correct step?", ["|y| = e^C · e^(3x)", "|y| = e^(3x) + e^C", "y = 3x + e^C", "y = ln(3x) + C"], "|y| = e^C · e^(3x)",
      ["e to both sides: |y| = e^(3x + C) = e^C · e^(3x)."]);

    /* ===== Obj 3: slope fields ===== */
    C.num(["3"], "Ch 7 Obj 3 ex1", "dy/dx = y − x. What is the slope of the slope field at (2, 0)?", "-2", ["0 − 2 = −2."], {label:"Slope ="});
    C.num(["3"], "Ch 7 Obj 3", "dy/dx = y − x. What is the slope at (1, 3)?", "2", ["3 − 1 = 2."], {label:"Slope ="});
    C.num(["3"], "Ch 7 Obj 3", "dy/dx = xy. What is the slope at (−2, 3)?", "-6", ["(−2)(3) = −6."], {label:"Slope ="});
    C.num(["3"], "Ch 7 Obj 3", "dy/dx = x² − y. What is the slope at (2, 1)?", "3", ["4 − 1 = 3."], {label:"Slope ="});
    C.pick(["3"], "Ch 7 Obj 3 ex1", "In the slope field of dy/dx = y − x, where are the segments flat?", ["Along the line y = x", "Along the x-axis", "Along the y-axis", "Along the line y = −x"], "Along the line y = x",
      ["Flat means dy/dx = 0: y − x = 0, so y = x."]);
    C.pick(["3"], "Ch 7 Obj 3 ex2", "In a slope field, every segment in each vertical column is parallel. Which could be the equation?", ["dy/dx = x²", "dy/dx = y²", "dy/dx = x + y", "dy/dx = xy"], "dy/dx = x²",
      ["Same slope for every point with the same x means dy/dx depends on x only."]);
    C.pick(["3"], "Ch 7 Obj 3 ex2", "In a slope field, every segment in each horizontal row is parallel. Which could be the equation?", ["dy/dx = 2y", "dy/dx = 2x", "dy/dx = x − y", "dy/dx = x/y"], "dy/dx = 2y",
      ["Same slope across each row means dy/dx depends on y only."]);
    C.pick(["3"], "Ch 7 Obj 3 ex3", "A slope field is flat along the vertical line x = 2 and the same in each column. Which equation matches?", ["dy/dx = 0.5x − 1", "dy/dx = 0.5y", "dy/dx = −x/y", "dy/dx = x + y"], "dy/dx = 0.5x − 1",
      ["x only, and 0.5(2) − 1 = 0 at x = 2."]);
    C.pick(["3"], "Ch 7 Obj 3 ex3", "A slope field is flat along x = 0 and vertical along y = 0. Which equation matches?", ["dy/dx = −x/y", "dy/dx = 0.5y", "dy/dx = x + y", "dy/dx = 0.5x − 1"], "dy/dx = −x/y",
      ["−x/y is 0 when x = 0 and undefined (vertical) when y = 0."]);
    C.pick(["3"], "Ch 7 Obj 3 ex3", "A slope field is flat along the line y = −x. Which equation matches?", ["dy/dx = x + y", "dy/dx = 0.5y", "dy/dx = −x/y", "dy/dx = 0.5x − 1"], "dy/dx = x + y",
      ["x + y = 0 exactly on y = −x."]);
    C.pick(["3"], "Ch 7 Obj 3 ex5", "A slope field has negative slopes everywhere left of the y-axis, positive slopes everywhere right of it, flat segments on the y-axis, and the same slope down each column. Which equation could it be?", ["dy/dx = x", "dy/dx = −x", "dy/dx = x + y", "dy/dx = x − y"], "dy/dx = x",
      ["Columns match → x only. Negative for x < 0 and positive for x > 0 → dy/dx = x."]);

    /* ===== Obj 4: Euler's method ===== */
    C.num(["4"], "Ch 7 Obj 4 ex1", "dy/dx = xy + x², y(1) = 2. Use Euler's method with step size 0.25 to approximate y(1.75).", "6.0625",
      ["(1, 2): slope 3, Δy = 0.75 → (1.25, 2.75).", "(1.25, 2.75): slope 5, Δy = 1.25 → (1.5, 4).", "(1.5, 4): slope 8.25, Δy = 2.0625 → (1.75, 6.0625)."], {label:"y(1.75) ≈"});
    C.num(["4"], "Ch 7 Obj 4 ex2", "dy/dx = 2x − y, y(−3) = 2. Use Euler's method with 2 equal steps to approximate y(−2).", "-3.5",
      ["Δx = 1/2.", "(−3, 2): slope −8, Δy = −4 → (−2.5, −2).", "(−2.5, −2): slope −3, Δy = −1.5 → (−2, −3.5)."], {label:"y(−2) ≈"});
    C.num(["4"], "Ch 7 Obj 4", "dy/dx = y, y(0) = 1. Use Euler's method with step size 0.5 to approximate y(1).", "2.25",
      ["(0, 1): slope 1, Δy = 0.5 → (0.5, 1.5).", "(0.5, 1.5): slope 1.5, Δy = 0.75 → (1, 2.25).", "(The exact answer is e ≈ 2.718, so Euler underestimates here.)"], {label:"y(1) ≈"});
    C.num(["4"], "Ch 7 Obj 4", "dy/dx = x + y, y(0) = 1. Use Euler's method with step size 0.1 to approximate y(0.2).", "1.22",
      ["(0, 1): slope 1, Δy = 0.1 → (0.1, 1.1).", "(0.1, 1.1): slope 1.2, Δy = 0.12 → (0.2, 1.22)."], {label:"y(0.2) ≈"});
    C.num(["4"], "Ch 7 Obj 4", "dy/dx = 3x², y(1) = 2. Use one step of Euler's method to approximate y(1.5).", "3.5",
      ["Slope at (1, 2): 3. Δy = 3(0.5) = 1.5.", "y(1.5) ≈ 3.5."], {label:"y(1.5) ≈"});
    C.num(["4"], "Ch 7 Obj 4", "dy/dx = x − 2y, y(1) = 0. Use Euler's method with 2 steps of size 0.5 to approximate y(2).", "0.75",
      ["(1, 0): slope 1, Δy = 0.5 → (1.5, 0.5).", "(1.5, 0.5): slope 0.5, Δy = 0.25 → (2, 0.75)."], {label:"y(2) ≈"});
    C.pick(["4"], "Ch 7 Obj 4", "In each Euler step, which slope do you use?", ["The slope at the current point", "The slope at the target point", "The average of the two slopes", "The slope at the starting point every time"], "The slope at the current point",
      ["Recompute dy/dx at the point you're at, then step."]);

    /* ===== Obj 5: logistic ===== */
    C.num(["5"], "Ch 7 Obj 5 ex1a", "Bears: dP/dt = 0.008P(100 − P). What is the carrying capacity?", "100",
      ["dP/dt = 0 → P = 0 or P = 100. The carrying capacity is 100."], {label:"M ="});
    C.num(["5"], "Ch 7 Obj 5 ex1b", "Bears: dP/dt = 0.008P(100 − P). What is the population when it's growing the fastest?", "50",
      ["Fastest at half the carrying capacity: 100/2 = 50 bears."], {label:"P ="});
    C.num(["5"], "Ch 7 Obj 5 ex1c", "Bears: dP/dt = 0.008P(100 − P). What is the rate of change of the population when it's growing the fastest?", "20",
      ["At P = 50: 0.008(50)(100 − 50) = 20 bears/year."], {label:"dP/dt ="});
    C.num(["5"], "Ch 7 Obj 5 ex2", "dP/dt = P(4 − P/1000) with P(0) = 2500. What is the limit of P(t) as t → ∞?", "4000",
      ["4 − P/1000 = 0 → P = 4000."], {label:"Limit ="});
    k.ask(["5"], "Ch 7 Obj 5 ex3", "dy/dt = 6y(1 − y/3). Find the limiting value and the y-value of the point of inflection.", [{l:"Limiting value =", t:"num", a:"3"}, {l:"POI y =", t:"num", a:"3/2"}],
      ["dy/dt = 0 → y = 3.", "POI at half: y = 3/2."], {kind:"num"});
    C.pick(["5"], "Ch 7 Obj 5 ex4", "y = 0.9/(1 + 45e^(−0.15t)) is the proportion of people infected after t days. What percent will NOT be infected?", ["10%", "2%", "45%", "90%"], "10%",
      ["As t → ∞, e^(−0.15t) → 0, so y → 0.9 = 90% infected.", "100% − 90% = 10%."]);
    C.pick(["5"], "Ch 7 Obj 5 ex5", "A stadium's capacity is 500 people. When 100 are inside, the number is increasing at 50 per minute. Which equation could model it?", ["dP/dt = (1/800)P(500 − P)", "dP/dt = (1/50)P(500 − P)", "dP/dt = (1/8)(500 − P)", "dP/dt = (1/1200)P(500 + P)"], "dP/dt = (1/800)P(500 − P)",
      ["Needs dP/dt = 0 at P = 500.", "(1/800)(100)(400) = 50. (1/50)(100)(400) = 800, too big."]);
    C.pick(["5"], "Ch 7 Obj 5 ex6", "dP/dt = P/3 − P²/2100 with P(0) > 0. Which could be true? I: lim P(t) > 1150. II: P has an inflection point for t > 0. III: the growth rate changes fastest at P = 350.", ["II only", "None", "I and II only", "II and III only"], "II only",
      ["Factor: (P/3)(1 − P/700), so M = 700. I is false.", "II: if P(0) < 350, it passes through P = 350, an inflection point. Could be true.", "III: at P = 350 the growth rate is at its max, so it's changing the slowest (its rate of change is 0). False."]);
    C.num(["5"], "Ch 7 Obj 5", "P(t) = 1200/(1 + 5e^(−0.3t)). What is the carrying capacity?", "1200", ["As t → ∞, the bottom → 1, so P → 1200."], {label:"M ="});
    C.num(["5"], "Ch 7 Obj 5", "dP/dt = 0.5P(1 − P/300). What is the maximum rate of growth?", "37.5",
      ["Fastest at P = 150.", "0.5(150)(1 − 1/2) = 37.5."], {label:"Max dP/dt ="});
    C.pick(["5"], "Ch 7 Obj 5", "A logistic population with carrying capacity 1000 starts at P(0) = 1400. What happens?", ["It decreases toward 1000", "It increases without bound", "It increases toward 1400", "It drops to 0"], "It decreases toward 1000",
      ["Above M, dP/dt < 0, so it decreases and levels off at M."]);
  }
});
})();
