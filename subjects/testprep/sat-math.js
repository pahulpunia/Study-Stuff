/* SAT Math
   Laid out by the four content domains College Board uses for the digital SAT:
   Algebra (about 35%), Advanced Math (about 35%), Problem-Solving & Data Analysis (about 15%),
   Geometry & Trigonometry (about 15%). The real section is 44 questions in 70 minutes (two 22-question
   modules), about three quarters multiple choice with four options and the rest typed in.
   Every question here was written for this site in the style of the test; none are copied from a real exam. */
(() => {
const {ri, pick} = POLY;
const SRC = "SAT style";
const make = k => ({
  mc: (s, text, opts, steps) => k.choice([s], SRC, text, opts, opts[0], steps, {shuffle:true}),
  num: (s, text, ans, steps, label) => k.ask([s], SRC, text, [{l:label || "Answer", t:"num", a:String(ans), ph:"number or fraction"}], steps)
});
const nf = (label, a) => ({l:label, t:"num", a:String(a), ph:"number"});

/* ================= ALGEBRA ================= */
Study.addUnit("satm", {
  id: "alg", name: "Algebra (about 35%)", short: "Algebra",
  sections: [
    {id:"a1", name:"Linear Equations"},
    {id:"a2", name:"Lines & Linear Functions"},
    {id:"a3", name:"Systems of Equations"},
    {id:"a4", name:"Linear Inequalities"}
  ],
  notes: {
    a1: [
      {sum:["Undo the equation in reverse order: distribute, combine like terms, move the variable to one side, divide.", "Same variable terms and same constants on both sides → infinitely many solutions. Same variable terms but different constants → no solution.", "If the question asks for an expression like 2x + 5, find x first, then plug in. Read what is being asked."]},
      {p:"Algebra is about a third of SAT Math, and most of it is linear. The questions are rarely hard to compute. They're hard to **read**: the last line often asks for something other than x."},
      {ex:{q:"If 4x + 7 = 31, what is the value of 2x + 5?", a:["4x = 24, so x = 6.", "The question wants 2x + 5, not x: 2(6) + 5 = 17."]}},
      {h:"How many solutions?"},
      {p:"Simplify both sides. If you end with something always true, like 7 = 7, every number works. If you end with something never true, like 12 = 20, nothing works. Otherwise there is exactly one solution."},
      {ex:{q:"For what value of a does ax + 12 = 4(x + 5) have no solution?", a:["Right side: 4x + 20.", "No solution needs the x terms to match and the constants to differ.", "a = 4 gives 4x + 12 = 4x + 20, which is never true."]}},
      {tip:"For word problems, the flat fee is the constant and the \"per\" amount multiplies the variable: a $65 fee plus $48 per hour is 48h + 65."},
      {check:[{q:"Solve 3(x − 4) + 2x = 23.", a:"5x − 12 = 23, so x = 7."}, {q:"5(x + 2) − 3 = 5x + 7 has how many solutions?", a:"Infinitely many. Both sides are 5x + 7."}]}
    ],
    a2: [
      {sum:["Slope is rise over run: (y₂ − y₁)/(x₂ − x₁). In y = mx + b, m is the slope and b is the y-intercept.", "Parallel lines have equal slopes. Perpendicular slopes are negative reciprocals (2 and −1/2).", "In a model, the slope is the change per one unit and the y-intercept is the starting value."]},
      {p:"A linear function changes by the same amount every step. Given two points, find the slope first, then use one point to find b."},
      {ex:{q:"A linear function has f(2) = 11 and f(5) = 23. Find f(0).", a:["Slope: (23 − 11)/(5 − 2) = 4.", "11 = 4(2) + b, so b = 3.", "f(0) is the y-intercept: 3."]}},
      {h:"Intercepts"},
      {p:"The y-intercept is where x = 0. The x-intercept is where y = 0, so set y to 0 and solve. For standard form Ax + By = C, the slope is −A/B."},
      {h:"Reading a model"},
      {p:"In h(t) = 2.5t + 14, where h is a plant's height in centimeters after t weeks, 14 is the height at the start and 2.5 is how many centimeters it grows each week. SAT answer choices love to swap those two meanings."},
      {check:[{q:"Slope through (2, 5) and (6, −3)?", a:"(−3 − 5)/(6 − 2) = −2."}, {q:"Slope of a line perpendicular to y = 2x + 3?", a:"−1/2."}]}
    ],
    a3: [
      {sum:["Elimination: add or subtract the equations so one variable cancels. Substitution: solve one equation for a variable and plug it into the other.", "Same slope, different intercepts → no solution. Same line written twice → infinitely many.", "You can often get what the question asks (like x + y) by adding the equations, without solving for each variable."]},
      {ex:{q:"3x + 2y = 16 and 5x − 2y = 8. Solve.", a:["The y terms are opposites, so add: 8x = 24, x = 3.", "Plug in: 9 + 2y = 16, so y = 3.5.", "(3, 3.5)"]}},
      {h:"No solution or infinitely many"},
      {p:"Multiply one equation so the x and y coefficients match the other. If the constants then match too, the two equations are the same line (infinitely many solutions). If the constants differ, the lines are parallel (no solution)."},
      {ex:{q:"ax + 4y = 10 and 3x + 2y = 5 have infinitely many solutions. Find a.", a:["Double the second: 6x + 4y = 10.", "That must be the first equation exactly, so a = 6."]}},
      {tip:"On the real test, Desmos is built in. Typing both equations and tapping the intersection point is a fast way to check a system."},
      {check:[{q:"y = 2x − 3 and y = −x + 9. Find x.", a:"2x − 3 = −x + 9 → 3x = 12 → x = 4."}, {q:"2x − 3y = 7 and 6x − 9y = 14: how many solutions?", a:"None. Tripling the first gives 6x − 9y = 21, not 14."}]}
    ],
    a4: [
      {sum:["Solve an inequality like an equation, but flip the sign when you multiply or divide by a negative.", "\"At least\" means ≥, \"at most\" and \"no more than\" mean ≤.", "On a graph, < and > use a dashed line; ≤ and ≥ use a solid line. Shade above for y >, below for y <."]},
      {ex:{q:"Solve −3x + 5 > 17.", a:["−3x > 12.", "Divide by −3 and flip: x < −4."]}},
      {p:"For a point to solve a **system** of inequalities it has to make every inequality true. Test the answer choices one at a time and throw one out the moment it fails."},
      {p:"In word problems, the answer often has to be a whole number. If 45b + 180 ≤ 2000 gives b ≤ 40.4, the most boxes you can load is 40. Round toward the side that keeps the inequality true."},
      {check:[{q:"Smallest integer with 7 − 2x < 1?", a:"−2x < −6 → x > 3, so 4."}, {q:"Solve 2 ≤ 3x − 4 < 11.", a:"6 ≤ 3x < 15 → 2 ≤ x < 5."}]}
    ]
  },
  problems(k){
    const {mc, num} = make(k);
    /* ---- a1 ---- */
    mc("a1", "What value of x satisfies 3(x − 4) + 2x = 23?", ["7", "5", "9", "11"], ["Distribute: 3x − 12 + 2x = 23", "5x = 35", "x = 7"]);
    num("a1", "If 4x + 7 = 31, what is the value of 2x + 5?", 17, ["4x = 24, so x = 6", "2(6) + 5 = 17"]);
    mc("a1", "If (2/3)x − 5 = 7, what is the value of x?", ["18", "8", "3", "12"], ["(2/3)x = 12", "x = 12 · (3/2) = 18"]);
    mc("a1", "How many solutions does 5(x + 2) − 3 = 5x + 7 have?", ["Infinitely many", "Exactly one", "Exactly two", "Zero"], ["Left side: 5x + 10 − 3 = 5x + 7", "Both sides are identical, so every value of x works."]);
    num("a1", "The equation 2(3x − k) = 6x − 10 has infinitely many solutions. What is the value of k?", 5, ["Left side: 6x − 2k", "The x terms already match, so the constants must match: −2k = −10", "k = 5"], "k =");
    mc("a1", "For what value of a does ax + 12 = 4(x + 5) have no solution?", ["4", "3", "5", "8"], ["Right side: 4x + 20", "No solution needs equal x terms and different constants.", "a = 4 gives 4x + 12 = 4x + 20, which is never true."]);
    num("a1", "A plumber charges a $65 fee plus $48 per hour. A job cost $257. How many hours did it take?", 4, ["48h + 65 = 257", "48h = 192", "h = 4"], "Hours");
    mc("a1", "A gym charges a $30 sign-up fee and $22 per month. Which equation gives the number of months m when the total cost is $206?", ["22m + 30 = 206", "30m + 22 = 206", "52m = 206", "22(m + 30) = 206"], ["The fee is paid once (constant). The monthly charge multiplies m.", "22m + 30 = 206"]);
    num("a1", "What value of x satisfies (x + 3)/4 = (2x − 1)/6?", 11, ["Cross-multiply: 6(x + 3) = 4(2x − 1)", "6x + 18 = 8x − 4", "22 = 2x, so x = 11"], "x =");
    mc("a1", "What is the solution to 0.4x + 1.2 = 0.1x + 3?", ["6", "14", "0.6", "9"], ["0.3x = 1.8", "x = 6"]);
    /* ---- a2 ---- */
    mc("a2", "What is the slope of the line through (2, 5) and (6, −3)?", ["−2", "−1/2", "2", "1/2"], ["(−3 − 5)/(6 − 2) = −8/4", "−2"]);
    num("a2", "f(x) = 3x − 7. If f(a) = 20, what is the value of a?", 9, ["3a − 7 = 20", "3a = 27, so a = 9"], "a =");
    mc("a2", "What is the x-intercept of the line y = −(3/4)x + 6?", ["(8, 0)", "(6, 0)", "(−8, 0)", "(4.5, 0)"], ["Set y = 0: (3/4)x = 6", "x = 8"]);
    mc("a2", "h(t) = 2.5t + 14 models a plant's height, in centimeters, t weeks after it was first measured. What does 14 represent?", ["The plant's height when it was first measured", "The number of centimeters it grows each week", "The number of weeks until it stops growing", "The plant's height after exactly one full week"], ["At t = 0, h = 14, so 14 is the starting height.", "2.5 is the growth per week."]);
    mc("a2", "Which line is perpendicular to y = 2x + 3 and passes through (4, 1)?", ["y = −(1/2)x + 3", "y = 2x − 7", "y = −(1/2)x + 1", "y = −2x + 9"], ["Perpendicular slope: −1/2", "1 = −(1/2)(4) + b → b = 3", "y = −(1/2)x + 3"]);
    num("a2", "A linear function f has f(2) = 11 and f(5) = 23. What is f(0)?", 3, ["Slope: (23 − 11)/(5 − 2) = 4", "11 = 4(2) + b → b = 3", "f(0) = 3"], "f(0) =");
    mc("a2", "A line contains the points (1, 4), (3, 10) and (5, 16). Which equation describes it?", ["y = 3x + 1", "y = 3x + 4", "y = 2x + 2", "y = 6x − 2"], ["Slope: (10 − 4)/(3 − 1) = 3", "4 = 3(1) + b → b = 1"]);
    mc("a2", "Which line is parallel to 3x − 6y = 12?", ["y = (1/2)x + 5", "y = 2x − 1", "y = −(1/2)x + 5", "y = −2x + 3"], ["Solve for y: y = (1/2)x − 2, so the slope is 1/2.", "Parallel lines share that slope."]);
    num("a2", "A taxi ride costs C = 2.75 + 1.9m dollars for m miles. How many dollars more does a 12-mile ride cost than a 7-mile ride?", 9.5, ["The fee cancels. Only the extra miles matter.", "5 extra miles × $1.90 = $9.50"], "Dollars");
    mc("a2", "A line has slope 3 and y-intercept −4. Which point is on the line?", ["(3, 5)", "(3, −1)", "(1, −7)", "(−4, 0)"], ["y = 3x − 4", "At x = 3: y = 9 − 4 = 5"]);
    /* ---- a3 ---- */
    num("a3", "2x + y = 11 and x − y = 4. What is the value of x?", 5, ["Add the equations: 3x = 15", "x = 5"], "x =");
    mc("a3", "What is the solution to 3x + 2y = 16 and 5x − 2y = 8?", ["(3, 3.5)", "(2, 5)", "(4, 2)", "(3, 2.5)"], ["Add: 8x = 24 → x = 3", "9 + 2y = 16 → y = 3.5"]);
    mc("a3", "How many solutions does the system 2x − 3y = 7 and 6x − 9y = 14 have?", ["Zero", "Exactly one", "Exactly two", "Infinitely many"], ["Triple the first equation: 6x − 9y = 21", "Same left side, different constant (21 vs 14) → parallel lines, no solution."]);
    num("a3", "The system ax + 4y = 10 and 3x + 2y = 5 has infinitely many solutions. What is the value of a?", 6, ["Double the second equation: 6x + 4y = 10", "The two equations must be identical, so a = 6."], "a =");
    num("a3", "A theater sold 150 tickets for $1,400. Adult tickets cost $12 and child tickets cost $7. How many adult tickets were sold?", 70, ["a + c = 150 and 12a + 7c = 1400", "Substitute c = 150 − a: 12a + 1050 − 7a = 1400", "5a = 350 → a = 70"], "Adult tickets");
    mc("a3", "A jar holds 40 coins, all nickels (n) and dimes (d), worth $2.75. Which system models this?", ["n + d = 40 and 0.05n + 0.10d = 2.75", "n + d = 2.75 and 0.05n + 0.10d = 40", "n + d = 40 and 0.10n + 0.05d = 2.75", "n + d = 40 and 5n + 10d = 2.75"], ["One equation counts coins: n + d = 40.", "The other counts dollars: a nickel is $0.05 and a dime is $0.10."]);
    num("a3", "y = 2x − 3 and y = −x + 9. What is the value of y at the solution?", 5, ["2x − 3 = −x + 9 → 3x = 12 → x = 4", "y = 2(4) − 3 = 5"], "y =");
    num("a3", "4x + 3y = 25 and 2x + 3y = 17. What is the value of x − y?", 1, ["Subtract: 2x = 8 → x = 4", "8 + 3y = 17 → y = 3", "x − y = 1"], "x − y =");
    mc("a3", "Two lines intersect at (−2, 3). Which system could they be?", ["y = x + 5 and y = −2x − 1", "y = x + 5 and y = 2x − 1", "y = x − 5 and y = −2x − 1", "y = −x + 5 and y = −2x − 1"], ["Plug in x = −2: −2 + 5 = 3 ✓ and −2(−2) − 1 = 3 ✓", "Each other pair fails in at least one equation."]);
    mc("a3", "Two pencils and three erasers cost $2.55. Four pencils and one eraser cost $2.85. How much is one eraser?", ["$0.45", "$0.60", "$0.35", "$0.55"], ["Double the first: 4p + 6e = 5.10", "Subtract the second: 5e = 2.25", "e = $0.45"]);
    /* ---- a4 ---- */
    mc("a4", "Which inequality is equivalent to −3x + 5 > 17?", ["x < −4", "x > −4", "x < 4", "x > 4"], ["−3x > 12", "Dividing by a negative flips the sign: x < −4"]);
    mc("a4", "Which point satisfies both y > 2x − 1 and y ≤ −x + 6?", ["(1, 3)", "(3, 2)", "(0, −1)", "(2, 5)"], ["(1, 3): 3 > 1 ✓ and 3 ≤ 5 ✓", "(3, 2) fails the first, (0, −1) gives −1 > −1 (false), (2, 5) fails the second."]);
    num("a4", "A fair costs $8 to enter and $3.50 per ride. Maya has $50. What is the greatest number of rides she can take?", 12, ["8 + 3.5r ≤ 50", "3.5r ≤ 42 → r ≤ 12"], "Rides");
    mc("a4", "A student earns 5 points per quiz q and 20 points per test t, and needs at least 200 points. Which inequality models this?", ["5q + 20t ≥ 200", "5q + 20t ≤ 200", "20q + 5t ≥ 200", "5q + 20t > 200"], ["\"At least\" means ≥.", "Quizzes are worth 5 and tests 20: 5q + 20t ≥ 200"]);
    mc("a4", "Which describes all solutions to 2 ≤ 3x − 4 < 11?", ["2 ≤ x < 5", "−2/3 ≤ x < 7/3", "2 < x ≤ 5", "6 ≤ x < 15"], ["Add 4 everywhere: 6 ≤ 3x < 15", "Divide by 3: 2 ≤ x < 5"]);
    num("a4", "What is the smallest integer x that satisfies 7 − 2x < 1?", 4, ["−2x < −6", "Flip the sign: x > 3", "The smallest integer greater than 3 is 4."], "x =");
    mc("a4", "How is y < −2x + 3 graphed?", ["A dashed line, shaded below it", "A solid line, shaded below it", "A dashed line, shaded above it", "A solid line, shaded above it"], ["< (no \"or equal to\") → dashed line.", "y is less than the line → shade below."]);
    mc("a4", "A truck can carry 2,000 pounds. The driver weighs 180 pounds and each box weighs 45 pounds. What is the greatest number of boxes it can carry?", ["40", "41", "44", "48"], ["45b + 180 ≤ 2000", "45b ≤ 1820 → b ≤ 40.4", "Round down: 40 boxes."]);
  },
  drills: {
    a1: () => { const a = ri(2, 9), x = ri(-6, 9), b = pick([-12, -9, -7, -5, -4, -3, -2, 2, 3, 4, 5, 7, 8, 11]), c = a * x + b;
      return {src:"Random drill", kind:"ask", text:`Solve for x: ${a}x ${b < 0 ? "− " + (-b) : "+ " + b} = ${String(c).replace("-", "−")}`, fields:[nf("x =", x)], steps:[`${a}x = ${c - b}`, `x = ${x}`]}; },
    a3: () => { const x = ri(-4, 7), y = ri(-4, 7), a = ri(2, 5), b = ri(2, 5);
      return {src:"Random drill", kind:"ask", text:`${a}x + y = ${a * x + y} and ${b}x − y = ${b * x - y}. Find x and y.`.replace(/-/g, "−"), fields:[nf("x =", x), nf("y =", y)], steps:[`Add the equations: ${a + b}x = ${(a + b) * x}`, `x = ${x}`, `Plug in: y = ${a * x + y} − ${a}(${x}) = ${y}`]}; }
  }
});

/* ================= ADVANCED MATH ================= */
Study.addUnit("satm", {
  id: "adv", name: "Advanced Math (about 35%)", short: "Advanced",
  sections: [
    {id:"b1", name:"Equivalent Expressions"},
    {id:"b2", name:"Quadratic & Nonlinear Equations"},
    {id:"b3", name:"Quadratic & Exponential Functions"}
  ],
  notes: {
    b1: [
      {sum:["Know the three patterns: a² − b² is (a − b)(a + b), (a + b)² is a² + 2ab + b², (a − b)² is a² − 2ab + b².", "Exponent rules: multiply → add exponents, power of a power → multiply, x^(m/n) is the nth root of x^m.", "To add fractions with variables, build a common denominator first."]},
      {p:"\"Which expression is equivalent\" questions are really simplifying questions. Expand, factor or combine until your result matches a choice."},
      {ex:{q:"Simplify (x² − 9)/(x² + 5x + 6).", a:["Factor both: (x − 3)(x + 3) over (x + 2)(x + 3).", "Cancel x + 3: (x − 3)/(x + 2)."]}},
      {h:"Radicals and exponents"},
      {p:"Pull perfect squares out of a radical before combining: √50 is 5√2 and √18 is 3√2, so together they make 8√2. A sum inside an exponent splits into a product: 2^(x+3) is 2^x · 2³, or 8 · 2^x."},
      {tip:"If you're stuck, plug a simple number like x = 2 into the original and into each choice. The equivalent choice gives the same value. Avoid 0 and 1, which make too many choices agree."},
      {check:[{q:"Factor 9x² − 49.", a:"(3x − 7)(3x + 7)."}, {q:"Simplify (x³)⁴ · x².", a:"x¹² · x² = x¹⁴."}]}
    ],
    b2: [
      {sum:["Get everything on one side, equal to 0, then factor, or use the quadratic formula x = (−b ± √(b² − 4ac))/(2a).", "The discriminant b² − 4ac tells the number of real solutions: positive → 2, zero → 1, negative → 0.", "For x² + bx + c = 0, the solutions add to −b and multiply to c."]},
      {p:"The quadratic formula is **not** on the SAT reference sheet, so it has to be memorized."},
      {ex:{q:"Solve x² + 6x + 2 = 0.", a:["It doesn't factor, so use the formula with a = 1, b = 6, c = 2.", "x = (−6 ± √(36 − 8))/2 = (−6 ± √28)/2.", "√28 is 2√7, so x = −3 ± √7."]}},
      {h:"A line and a parabola"},
      {p:"Set the two expressions for y equal and solve the quadratic you get. Each x-value gives one intersection point; plug it back in for y."},
      {warn:"Squaring both sides (to remove a square root) can create answers that don't work. Check each one in the original equation."},
      {check:[{q:"x² − 8x + c = 0 has exactly one solution. Find c.", a:"64 − 4c = 0, so c = 16."}, {q:"Solve |2x − 5| = 9.", a:"2x − 5 = 9 or −9, so x = 7 or x = −2."}]}
    ],
    b3: [
      {sum:["Vertex form y = a(x − h)² + k has its vertex at (h, k). For y = ax² + bx + c the vertex is at x = −b/(2a).", "The vertex is halfway between the two x-intercepts.", "Exponential: y = a · bˣ starts at a. Growth of r% uses b = 1 + r; decay of r% uses b = 1 − r."]},
      {p:"A parabola's vertex is its maximum (when a is negative) or minimum (when a is positive). \"Greatest height\" and \"least cost\" questions are asking for the vertex."},
      {ex:{q:"h(t) = −16t² + 64t + 5. What is the maximum height?", a:["t = −64/(2 · −16) = 2.", "h(2) = −64 + 128 + 5 = 69."]}},
      {h:"Linear or exponential?"},
      {p:"Adding the same **amount** each step is linear. Multiplying by the same **factor** (or changing by the same percent) each step is exponential. \"Doubles every 3 hours\" is 2 raised to t/3."},
      {p:"In V = 18,000(0.85)ᵗ, the 18,000 is the starting value and 0.85 means 85% is kept each year, a 15% decrease."},
      {check:[{q:"Vertex of f(x) = (x − 3)² − 8?", a:"(3, −8)."}, {q:"A town of 1,200 grows 5% per year. Write the model.", a:"P = 1200(1.05)ᵗ."}]}
    ]
  },
  problems(k){
    const {mc, num} = make(k);
    /* ---- b1 ---- */
    mc("b1", "Which expression is equivalent to (2x − 3)(x + 5)?", ["2x² + 7x − 15", "2x² − 7x − 15", "2x² + 2x − 15", "2x² + 7x + 15"], ["2x² + 10x − 3x − 15", "2x² + 7x − 15"]);
    mc("b1", "Which is a factored form of x² − 5x − 24?", ["(x − 8)(x + 3)", "(x + 8)(x − 3)", "(x − 6)(x + 4)", "(x − 12)(x + 2)"], ["Find two numbers that multiply to −24 and add to −5: −8 and 3."]);
    mc("b1", "Which expression is equivalent to 9x² − 49?", ["(3x − 7)(3x + 7)", "(3x − 7)²", "(9x − 7)(x + 7)", "(3x + 7)²"], ["Difference of squares: (3x)² − 7²", "(3x − 7)(3x + 7)"]);
    mc("b1", "Which expression is equivalent to (x³)⁴ · x²?", ["x¹⁴", "x⁹", "x²⁴", "x¹²"], ["Power of a power: x¹²", "Multiply: add exponents → x¹⁴"]);
    mc("b1", "Which expression is equivalent to x^(2/3)?", ["∛(x²)", "√(x³)", "(2/3)x", "∛(2x)"], ["The denominator of the exponent is the root; the numerator is the power.", "x^(2/3) is the cube root of x²."]);
    mc("b1", "Which expression is equivalent to (3x² − 2x + 5) − (x² + 4x − 1)?", ["2x² − 6x + 6", "2x² + 2x + 4", "2x² − 6x + 4", "4x² + 2x + 4"], ["Distribute the minus sign: 3x² − 2x + 5 − x² − 4x + 1", "2x² − 6x + 6"]);
    mc("b1", "Which expression is equivalent to (x² − 9)/(x² + 5x + 6) for x ≠ −3?", ["(x − 3)/(x + 2)", "(x + 3)/(x + 2)", "(x − 3)/(x + 3)", "−9/(5x + 6)"], ["Factor: (x − 3)(x + 3) / ((x + 2)(x + 3))", "Cancel x + 3."]);
    num("b1", "4x² + bx + 9 = (2x + 3)² for all x. What is the value of b?", 12, ["(2x + 3)² = 4x² + 12x + 9", "b = 12"], "b =");
    mc("b1", "Which is equivalent to √50 + √18?", ["8√2", "√68", "4√17", "15√2"], ["√50 = 5√2 and √18 = 3√2", "5√2 + 3√2 = 8√2"]);
    mc("b1", "Which expression is equivalent to 1/x + 2/(x + 1)?", ["(3x + 1)/(x(x + 1))", "3/(2x + 1)", "3/(x(x + 1))", "(2x + 1)/(x(x + 1))"], ["Common denominator x(x + 1): (x + 1)/(x(x + 1)) + 2x/(x(x + 1))", "(3x + 1)/(x(x + 1))"]);
    mc("b1", "Which expression is equivalent to 2^(x + 3)?", ["8 · 2^x", "6 · 2^x", "2^x + 8", "2^(3x)"], ["2^(x + 3) = 2^x · 2³", "8 · 2^x"]);
    /* ---- b2 ---- */
    mc("b2", "What are the solutions to x² − 7x + 10 = 0?", ["2 and 5", "−2 and −5", "1 and 10", "−1 and −10"], ["(x − 2)(x − 5) = 0", "x = 2 or x = 5"]);
    num("b2", "What is the positive solution to x² + 3x − 28 = 0?", 4, ["(x + 7)(x − 4) = 0", "x = −7 or x = 4"], "x =");
    mc("b2", "What are the solutions to 2x² − 5x − 3 = 0?", ["−1/2 and 3", "1/2 and −3", "−3/2 and 1", "−1 and 3/2"], ["(2x + 1)(x − 3) = 0", "x = −1/2 or x = 3"]);
    mc("b2", "What are the solutions to x² + 6x + 2 = 0?", ["−3 ± √7", "−3 ± √11", "3 ± √7", "−6 ± √7"], ["x = (−6 ± √(36 − 8))/2", "√28 = 2√7", "x = −3 ± √7"]);
    num("b2", "x² − 8x + c = 0 has exactly one real solution. What is the value of c?", 16, ["One solution means the discriminant is 0: 64 − 4c = 0", "c = 16"], "c =");
    mc("b2", "How many real solutions does 3x² + 2x + 5 = 0 have?", ["Zero", "Exactly one", "Exactly two", "Infinitely many"], ["Discriminant: 2² − 4(3)(5) = −56", "Negative → no real solutions."]);
    num("b2", "What is the sum of the solutions to x² − 9x + 14 = 0?", 9, ["(x − 2)(x − 7) = 0 → 2 and 7", "2 + 7 = 9 (also −b/a)"], "Sum");
    mc("b2", "At which points do y = x² − 4 and y = 2x − 1 intersect?", ["(3, 5) and (−1, −3)", "(3, 5) and (1, 1)", "(−3, 5) and (1, −3)", "(2, 0) and (−1, −3)"], ["x² − 4 = 2x − 1 → x² − 2x − 3 = 0", "(x − 3)(x + 1) = 0 → x = 3 or −1", "y = 2(3) − 1 = 5 and y = 2(−1) − 1 = −3"]);
    num("b2", "What is the greater solution to (x − 2)² = 49?", 9, ["x − 2 = 7 or x − 2 = −7", "x = 9 or x = −5"], "x =");
    mc("b2", "What is the solution set of √(x + 6) = x?", ["3 only", "−2 only", "−2 and 3", "No solution"], ["Square: x + 6 = x² → x² − x − 6 = 0 → x = 3 or −2", "Check −2: √4 = 2, not −2. Extraneous.", "Check 3: √9 = 3 ✓"]);
    num("b2", "A rectangle's length is 3 more than its width, and its area is 70. What is the width?", 7, ["w(w + 3) = 70 → w² + 3w − 70 = 0", "(w + 10)(w − 7) = 0", "A width can't be negative, so w = 7."], "Width");
    mc("b2", "What are the solutions to |2x − 5| = 9?", ["−2 and 7", "2 and 7", "−7 and 2", "7 only"], ["2x − 5 = 9 → x = 7", "2x − 5 = −9 → x = −2"]);
    /* ---- b3 ---- */
    mc("b3", "What is the vertex of f(x) = (x − 3)² − 8?", ["(3, −8)", "(−3, −8)", "(3, 8)", "(−3, 8)"], ["Vertex form a(x − h)² + k has vertex (h, k).", "h = 3, k = −8"]);
    num("b3", "What is the minimum value of f(x) = x² − 10x + 31?", 6, ["Vertex at x = 10/2 = 5", "f(5) = 25 − 50 + 31 = 6"], "Minimum");
    num("b3", "f(x) = −2(x + 1)(x − 5). What is the x-coordinate of the vertex?", 2, ["The x-intercepts are −1 and 5.", "The vertex is halfway between: (−1 + 5)/2 = 2"], "x =");
    mc("b3", "A ball's height in feet is h(t) = −16t² + 64t + 5 after t seconds. What is its maximum height?", ["69 feet", "64 feet", "133 feet", "5 feet"], ["t = −64/(2 · −16) = 2", "h(2) = −64 + 128 + 5 = 69"]);
    mc("b3", "A town of 1,200 people grows 5% each year. Which function gives the population after t years?", ["P = 1200(1.05)^t", "P = 1200(0.05)^t", "P = 1200 + 1.05t", "P = 1200(1.5)^t"], ["Growing 5% means multiplying by 1.05 each year."]);
    num("b3", "f(x) = 3 · 2^x. What is f(4)?", 48, ["2⁴ = 16", "3 · 16 = 48"], "f(4) =");
    mc("b3", "A car's value is V = 18,000(0.85)^t after t years. What does 0.85 mean?", ["The value drops 15% each year", "The value drops 85% each year", "The value drops $0.85 each year", "The value rises 15% each year"], ["Each year the car keeps 85% of its value.", "That is a 15% decrease."]);
    mc("b3", "A culture starts with 500 bacteria and doubles every 3 hours. Which function gives the count after t hours?", ["N = 500 · 2^(t/3)", "N = 500 · 2^(3t)", "N = 500 · 3^(t/2)", "N = 500 + 2t/3"], ["After 3 hours the exponent should be 1, after 6 hours 2.", "That exponent is t/3."]);
    num("b3", "f(x) = x² + 2x and g(x) = x − 3. What is f(g(5))?", 8, ["g(5) = 2", "f(2) = 4 + 4 = 8"], "f(g(5)) =");
    mc("b3", "A quantity increases by 20% each month. What kind of model fits it?", ["Exponential growth", "Linear growth", "Exponential decay", "Linear decay"], ["The same percent each step means multiplying by the same factor (1.2).", "That is exponential growth."]);
    mc("b3", "What are the zeros of f(x) = x² − 6x + 5?", ["1 and 5", "−1 and −5", "2 and 3", "−2 and −3"], ["(x − 1)(x − 5) = 0"]);
    num("b3", "The parabola y = a(x − 2)² + 3 passes through (4, 11). What is the value of a?", 2, ["11 = a(4 − 2)² + 3", "4a = 8 → a = 2"], "a =");
    mc("b3", "How does the graph of g(x) = f(x − 4) + 1 compare with the graph of f?", ["Shifted right 4 and up 1", "Shifted left 4 and up 1", "Shifted right 4 and down 1", "Shifted left 4 and down 1"], ["Inside the function, x − 4 moves the graph right 4.", "Outside, + 1 moves it up 1."]);
  },
  drills: {
    b2: () => { let p = ri(-8, 8), q = ri(-8, 8); if (p === q) q = p + 2; const b = -(p + q), c = p * q, hi = Math.max(p, q), lo = Math.min(p, q);
      const t = (n, s) => n === 0 ? "" : ` ${n < 0 ? "−" : "+"} ${Math.abs(n) === 1 && s ? "" : Math.abs(n)}${s}`;
      return {src:"Random drill", kind:"ask", text:`x²${t(b, "x")}${t(c, "")} = 0. Find both solutions.`, fields:[nf("Smaller x", lo), nf("Larger x", hi)],
        steps:[`Find two numbers that multiply to ${c} and add to ${b}.`, `(x ${p < 0 ? "+ " + (-p) : "− " + p})(x ${q < 0 ? "+ " + (-q) : "− " + q}) = 0`, `x = ${lo} or x = ${hi}`]}; }
  }
});

/* ================= PROBLEM-SOLVING & DATA ANALYSIS ================= */
Study.addUnit("satm", {
  id: "psda", name: "Problem-Solving & Data (about 15%)", short: "Data",
  sections: [
    {id:"p1", name:"Ratios, Rates & Units"},
    {id:"p2", name:"Percentages"},
    {id:"p3", name:"Statistics & Inference"},
    {id:"p4", name:"Probability & Tables"}
  ],
  notes: {
    p1: [
      {sum:["A ratio a:b splits a total into a + b equal parts.", "A rate is a \"per\" amount. Find the amount for one unit, then scale.", "To convert units, multiply by fractions equal to 1 so the unwanted units cancel."]},
      {ex:{q:"Boys and girls are in a 3:5 ratio in a class of 40. How many girls?", a:["3 + 5 = 8 parts, and 40 ÷ 8 = 5 students per part.", "Girls: 5 parts × 5 = 25."]}},
      {ex:{q:"Convert 60 miles per hour to feet per second.", a:["60 mi/h × 5280 ft/mi = 316,800 ft/h.", "316,800 ÷ 3600 s/h = 88 ft/s."]}},
      {tip:"Write the units next to every number. If the units of your answer come out wrong, the setup is wrong."},
      {check:[{q:"260 miles on 8 gallons. Gallons for 455 miles?", a:"32.5 miles per gallon, so 455 ÷ 32.5 = 14."}]}
    ],
    p2: [
      {sum:["Percent means out of 100: 35% of 240 is 0.35 × 240.", "Percent change is (new − old)/old × 100.", "A 20% increase multiplies by 1.20. A 20% decrease multiplies by 0.80. Chain changes by multiplying."]},
      {p:"The fastest way through percent questions is to turn each change into a multiplier. A 25% discount followed by 8% tax is × 0.75, then × 1.08."},
      {ex:{q:"After a 20% discount a jacket costs $56. What was the original price?", a:["0.80 × original = 56.", "Original = 56 ÷ 0.80 = $70. (Adding 20% of 56 back gives the wrong answer.)"]}},
      {warn:"Up 10% then down 10% does not get you back to the start: 1.10 × 0.90 = 0.99, a 1% loss."},
      {check:[{q:"A price goes from $50 to $68. Percent increase?", a:"18/50 = 36%."}, {q:"18 is what percent of 72?", a:"25%."}]}
    ],
    p3: [
      {sum:["Mean is the total divided by the count, so total = mean × count. Median is the middle value in order.", "An extreme value pulls the mean much more than the median. Standard deviation measures spread.", "A random sample lets you generalize to the population it was drawn from. Random assignment lets you claim cause and effect."]},
      {ex:{q:"Five tests average 82. After a sixth, the average is 84. What was the sixth score?", a:["Old total: 5 × 82 = 410.", "New total: 6 × 84 = 504.", "Sixth score: 504 − 410 = 94."]}},
      {h:"Lines of best fit"},
      {p:"Plug in to predict. The slope is the predicted change in y for each one-unit increase in x, and the y-intercept is the predicted y when x is 0."},
      {h:"Margin of error"},
      {p:"An estimate of 46% with a margin of error of 4 points means the true value is plausibly between 42% and 50%. It does not say exactly 46%, and it only describes the population that was sampled."},
      {check:[{q:"Median of 3, 8, 12, 5, 20, 9?", a:"In order: 3, 5, 8, 9, 12, 20. The middle two average to 8.5."}]}
    ],
    p4: [
      {sum:["Probability = number of outcomes you want ÷ number of possible outcomes.", "\"Given\" shrinks the denominator to just that group.", "For \"and\" with independent events, multiply. Without replacement, the second fraction changes."]},
      {p:"In a two-way table, read the question's last words to find the denominator. \"Of the sophomores, what fraction take art\" divides by the sophomore total, not the grand total."},
      {ex:{q:"A bag has 5 red, 3 blue and 2 green marbles. Two are drawn without replacement. P(both red)?", a:["First red: 5/10.", "Second red: 4/9, since one red is gone.", "5/10 × 4/9 = 2/9."]}},
      {check:[{q:"P(not blue) for that bag?", a:"7/10."}]}
    ]
  },
  problems(k){
    const {mc, num} = make(k);
    /* ---- p1 ---- */
    num("p1", "The ratio of boys to girls in a class of 40 students is 3 to 5. How many girls are in the class?", 25, ["3 + 5 = 8 parts; 40 ÷ 8 = 5 per part", "Girls: 5 × 5 = 25"], "Girls");
    mc("p1", "A car travels 260 miles on 8 gallons of gas. At that rate, how many gallons does it need for 455 miles?", ["14", "12", "16", "17.5"], ["260 ÷ 8 = 32.5 miles per gallon", "455 ÷ 32.5 = 14"]);
    mc("p1", "A speed of 60 miles per hour is how many feet per second? (1 mile = 5,280 feet)", ["88", "44", "100", "36"], ["60 × 5280 = 316,800 feet per hour", "316,800 ÷ 3600 = 88 feet per second"]);
    num("p1", "On a map, 1 inch represents 25 miles. Two towns are 3.5 inches apart on the map. How many miles apart are they?", 87.5, ["3.5 × 25 = 87.5"], "Miles");
    mc("p1", "A printer prints 24 pages in 1.5 minutes. At that rate, how many pages does it print in 10 minutes?", ["160", "150", "240", "360"], ["24 ÷ 1.5 = 16 pages per minute", "16 × 10 = 160"]);
    mc("p1", "A metal has a density of 2.7 grams per cubic centimeter. What is the mass of 40 cubic centimeters of it?", ["108 grams", "14.8 grams", "42.7 grams", "67.5 grams"], ["mass = density × volume", "2.7 × 40 = 108"]);
    num("p1", "A recipe uses 2.5 cups of flour to make 20 cookies. How many cups are needed for 50 cookies?", 6.25, ["50 ÷ 20 = 2.5 times the recipe", "2.5 × 2.5 = 6.25"], "Cups");
    mc("p1", "A 12-ounce bottle costs $3.00 and a 20-ounce bottle costs $4.40. Which costs less per ounce?", ["The 20-ounce bottle, at $0.22 per ounce", "The 12-ounce bottle, at $0.22 per ounce", "The 20-ounce bottle, at $0.25 per ounce", "The 12-ounce bottle, at $0.25 per ounce"], ["3.00 ÷ 12 = $0.25 per ounce", "4.40 ÷ 20 = $0.22 per ounce"]);
    num("p1", "One kilometer is about 0.62 mile. About how many miles long is a 10-kilometer race?", 6.2, ["10 × 0.62 = 6.2"], "Miles");
    /* ---- p2 ---- */
    num("p2", "What is 35% of 240?", 84, ["0.35 × 240 = 84"]);
    mc("p2", "A jacket priced at $80 is 25% off. An 8% sales tax is then added. What is the final cost?", ["$64.80", "$66.40", "$60.00", "$65.60"], ["80 × 0.75 = 60", "60 × 1.08 = 64.80"]);
    mc("p2", "A price rises from $50 to $68. What is the percent increase?", ["36%", "18%", "26%", "74%"], ["Change: 18", "18 ÷ 50 = 0.36"]);
    num("p2", "After a 20% discount, a jacket costs $56. What was the original price in dollars?", 70, ["0.80 × original = 56", "56 ÷ 0.80 = 70"], "Dollars");
    mc("p2", "A stock's price rises 10% one day and falls 10% the next. What is the overall change?", ["A 1% decrease", "No change at all", "A 1% increase", "A 2% decrease"], ["1.10 × 0.90 = 0.99", "That is 99% of the starting price, a 1% decrease."]);
    num("p2", "18 is what percent of 72?", 25, ["18 ÷ 72 = 0.25"], "Percent");
    mc("p2", "A population of 4,000 increases by 15%. Which expression gives the new population?", ["4,000(1.15)", "4,000(0.15)", "4,000 + 15", "4,000(15)"], ["Keeping 100% and adding 15% is multiplying by 1.15."]);
    mc("p2", "At a school, 30% of students are juniors, and 40% of the juniors take physics. What percent of all students are juniors who take physics?", ["12%", "70%", "10%", "40%"], ["0.30 × 0.40 = 0.12"]);
    num("p2", "A number increased by 150% of itself equals 200. What is the number?", 80, ["x + 1.5x = 2.5x = 200", "x = 80"]);
    mc("p2", "A meal costs $42. With an 18% tip, what is the total?", ["$49.56", "$47.56", "$50.40", "$45.78"], ["42 × 1.18 = 49.56"]);
    /* ---- p3 ---- */
    num("p3", "What is the mean of 4, 7, 9, 10 and 15?", 9, ["Sum: 45", "45 ÷ 5 = 9"], "Mean");
    mc("p3", "What is the median of 3, 8, 12, 5, 20 and 9?", ["8.5", "8", "9", "9.5"], ["In order: 3, 5, 8, 9, 12, 20", "Average the middle two: (8 + 9)/2 = 8.5"]);
    num("p3", "A student's mean on 5 tests is 82. After a sixth test the mean is 84. What was the sixth score?", 94, ["5 × 82 = 410", "6 × 84 = 504", "504 − 410 = 94"], "Score");
    mc("p3", "A data set of home prices gains one extremely expensive home. How do the mean and median change?", ["The mean rises much more than the median", "The median rises much more than the mean", "Both rise by exactly the same amount", "The mean rises and the median falls"], ["The mean uses every value, so one huge value drags it up.", "The median only shifts to a neighboring middle value."]);
    mc("p3", "Set A is {10, 10, 10, 10} and Set B is {2, 8, 12, 18}. Both have a mean of 10. Which has the greater standard deviation?", ["Set B, since its values are spread out", "Set A, since its values are all equal", "Neither, since the means are equal", "Set A, since it has no outliers"], ["Standard deviation measures spread from the mean.", "Set A has no spread at all (standard deviation 0)."]);
    mc("p3", "A line of best fit is y = 4.5x + 52, where x is hours studied and y is a test score. What score does it predict for 6 hours?", ["79", "56.5", "82", "62.5"], ["4.5(6) + 52 = 27 + 52", "79"]);
    mc("p3", "For that same line, y = 4.5x + 52, what does the slope mean?", ["Each extra hour predicts 4.5 more points", "Each extra point takes 4.5 more hours", "A student who studies 0 hours scores 4.5", "Scores go up 52 points for every hour"], ["Slope = change in y per 1 unit of x.", "One more hour → 4.5 more predicted points."]);
    mc("p3", "A poll of randomly chosen voters finds 46% support a measure, with a margin of error of 4 percentage points. Which conclusion is best supported?", ["Support is plausibly between 42% and 50%", "Exactly 46% of all voters support it", "Fewer than half of voters support it", "Support is between 46% and 50% only"], ["46 − 4 = 42 and 46 + 4 = 50.", "The interval includes 50%, so \"fewer than half\" is not certain."]);
    mc("p3", "A researcher surveys a random sample of 200 students from one high school. To which group can the results be generalized?", ["All students at that high school", "All high school students in the state", "Only the 200 students surveyed", "All teenagers in that city"], ["A random sample represents the population it was drawn from, and no larger group."]);
    mc("p3", "In a study, volunteers are randomly assigned to a new study method or the usual one. Why does random assignment matter?", ["It allows a cause-and-effect conclusion", "It makes the sample size much larger", "It lets results apply to all people", "It removes the need for a control group"], ["Random assignment balances other differences between the groups.", "So a difference in results can be attributed to the treatment."]);
    num("p3", "What is the range of 12, 19, 7, 25 and 16?", 18, ["Largest − smallest = 25 − 7", "18"], "Range");
    mc("p3", "In a random sample of 50 light bulbs from a shipment of 1,200, 3 are defective. About how many bulbs in the shipment are defective?", ["72", "36", "150", "400"], ["3/50 = 6%", "0.06 × 1200 = 72"]);
    /* ---- p4 ---- */
    const T = "A survey of 200 students: 60 freshmen take art and 40 do not; 30 sophomores take art and 70 do not. ";
    num("p4", T + "What is the probability that a randomly chosen student takes art?", "9/20", ["Art: 60 + 30 = 90", "90/200 = 9/20 (or 0.45)"], "Probability");
    mc("p4", T + "Given that a student is a sophomore, what is the probability the student takes art?", ["0.30", "0.15", "0.33", "0.45"], ["Only sophomores count: 30 + 70 = 100", "30/100 = 0.30"]);
    mc("p4", T + "Of the students who take art, what fraction are freshmen?", ["2/3", "3/5", "3/10", "1/3"], ["Art students: 90", "60/90 = 2/3"]);
    mc("p4", "A bag holds 5 red, 3 blue and 2 green marbles. What is the probability a randomly chosen marble is not blue?", ["7/10", "3/10", "1/2", "7/3"], ["Not blue: 5 + 2 = 7 of 10"]);
    mc("p4", "From the same bag (5 red, 3 blue, 2 green), two marbles are drawn without replacement. What is the probability both are red?", ["2/9", "1/4", "1/5", "4/9"], ["5/10 × 4/9", "20/90 = 2/9"]);
    mc("p4", "A fair six-sided die is rolled twice. What is the probability both rolls are even?", ["1/4", "1/2", "1/6", "1/36"], ["P(even) = 3/6 = 1/2", "1/2 × 1/2 = 1/4"]);
    num("p4", "Two independent events have probabilities 0.4 and 0.5. What is the probability that both happen?", 0.2, ["Independent → multiply", "0.4 × 0.5 = 0.2"], "Probability");
    num("p4", "Of 80 people surveyed, 48 own a dog, 30 own a cat, and 12 own both. How many own neither?", 14, ["Dog or cat: 48 + 30 − 12 = 66 (the 12 were counted twice)", "80 − 66 = 14"], "People");
  },
  drills: {
    p2: () => { const old = pick([20, 25, 40, 50, 80, 120, 200, 250]), pct = pick([10, 20, 25, 30, 40, 50, 60, 75]), up = Math.random() < 0.5, nw = old * (1 + (up ? pct : -pct) / 100);
      return {src:"Random drill", kind:"ask", text:`A price changes from $${old} to $${nw}. What is the percent ${up ? "increase" : "decrease"}?`, fields:[nf("Percent", pct)], steps:[`Change: ${Math.abs(nw - old)}`, `${Math.abs(nw - old)} ÷ ${old} = ${pct / 100}`, `${pct}%`]}; }
  }
});

/* ================= GEOMETRY & TRIGONOMETRY ================= */
Study.addUnit("satm", {
  id: "geo", name: "Geometry & Trig (about 15%)", short: "Geometry",
  sections: [
    {id:"g1", name:"Area & Volume"},
    {id:"g2", name:"Lines, Angles & Triangles"},
    {id:"g3", name:"Right Triangles & Trig"},
    {id:"g4", name:"Circles"}
  ],
  notes: {
    g1: [
      {sum:["The SAT gives a reference sheet with area and volume formulas, so focus on using them, not memorizing them.", "If lengths are scaled by k, areas scale by k² and volumes by k³.", "Work backward when needed: from an area or volume, solve for the missing length first."]},
      {table:{head:["Shape", "Formula"], rows:[["Rectangle", "A = lw"], ["Triangle", "A = ½bh"], ["Trapezoid", "A = ½(b₁ + b₂)h (not on the sheet)"], ["Circle", "A = πr², C = 2πr"], ["Box", "V = lwh"], ["Cylinder", "V = πr²h"], ["Cone", "V = ⅓πr²h"], ["Sphere", "V = (4/3)πr³"]]}},
      {ex:{q:"A cube has volume 125. What is its surface area?", a:["Side: the cube root of 125 is 5.", "Each face is 25, and there are 6 faces: 150."]}},
      {check:[{q:"Every side of a figure is tripled. What happens to its volume?", a:"It is multiplied by 3³ = 27."}]}
    ],
    g2: [
      {sum:["Angles in a triangle add to 180°. An exterior angle equals the sum of the two far interior angles.", "With parallel lines, corresponding and alternate interior angles are equal; same-side interior angles add to 180°.", "Similar triangles have equal angles and proportional sides."]},
      {p:"Vertical angles (across from each other where two lines cross) are equal. Angles on a straight line add to 180°. An n-sided polygon's interior angles add to (n − 2) · 180°."},
      {ex:{q:"A 6-foot person casts a 4-foot shadow while a tree casts an 18-foot shadow. How tall is the tree?", a:["The sun makes similar triangles: height/shadow is the same for both.", "6/4 = h/18, so h = 27 feet."]}},
      {p:"Triangle inequality: any side must be shorter than the sum of the other two and longer than their difference."},
      {check:[{q:"A triangle has angles 48° and 67°. The third?", a:"180 − 115 = 65°."}, {q:"Each interior angle of a regular octagon?", a:"(8 − 2) · 180 ÷ 8 = 135°."}]}
    ],
    g3: [
      {sum:["Pythagorean theorem: a² + b² = c², where c is the hypotenuse. Common triples: 3-4-5, 5-12-13, 8-15-17.", "Special triangles: 45-45-90 has sides x, x, x√2; 30-60-90 has sides x, x√3, 2x.", "SOH CAH TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent."]},
      {p:"Two facts show up again and again: the sine of an angle equals the cosine of its complement, so sin(x°) = cos(90° − x°), and sin²θ + cos²θ = 1."},
      {ex:{q:"tan θ = 8/15 in a right triangle. Find sin θ.", a:["Opposite 8, adjacent 15.", "Hypotenuse: √(64 + 225) = 17.", "sin θ = 8/17."]}},
      {p:"To convert degrees to radians, multiply by π/180: 150° is 5π/6. The distance between two points is the Pythagorean theorem on the coordinate plane."},
      {check:[{q:"sin(x°) = cos(32°). Find x.", a:"58."}, {q:"A 30-60-90 triangle has hypotenuse 10. The longer leg?", a:"5√3."}]}
    ],
    g4: [
      {sum:["A circle with center (h, k) and radius r is (x − h)² + (y − k)² = r².", "An arc or sector is a fraction of the circle: (central angle ÷ 360) of the circumference or area.", "An inscribed angle is half its arc. A tangent is perpendicular to the radius at the point where it touches."]},
      {ex:{q:"Find the radius of x² + y² − 6x + 8y = 0.", a:["Complete the square: (x² − 6x + 9) + (y² + 8y + 16) = 9 + 16.", "(x − 3)² + (y + 4)² = 25.", "Radius 5, center (3, −4)."]}},
      {p:"With the angle in radians, arc length is simply radius × angle: a 2-radian angle in a circle of radius 9 cuts an arc of length 18."},
      {check:[{q:"Arc length for a 60° angle in a circle of radius 6?", a:"(60/360) · 12π = 2π."}, {q:"Center and radius of (x − 2)² + (y + 5)² = 36?", a:"(2, −5) and 6."}]}
    ]
  },
  problems(k){
    const {mc, num} = make(k);
    /* ---- g1 ---- */
    num("g1", "A rectangle has perimeter 46 and length 15. What is its area?", 120, ["2(15) + 2w = 46 → w = 8", "15 × 8 = 120"], "Area");
    mc("g1", "What is the area of a triangle with base 14 and height 9?", ["63", "126", "46", "31.5"], ["½ × 14 × 9 = 63"]);
    mc("g1", "What is the volume of a cylinder with radius 3 and height 10?", ["90π", "30π", "60π", "300π"], ["V = πr²h = π(9)(10)", "90π"]);
    num("g1", "A cube has a volume of 125 cubic centimeters. What is its surface area in square centimeters?", 150, ["Side: ∛125 = 5", "6 faces × 25 = 150"], "Surface area");
    mc("g1", "What is the volume of a sphere with radius 6?", ["288π", "144π", "216π", "864π"], ["V = (4/3)πr³ = (4/3)π(216)", "288π"]);
    mc("g1", "Each side of a rectangle is doubled. What happens to its area?", ["It is multiplied by 4", "It is multiplied by 2", "It is multiplied by 8", "It increases by 4"], ["Area scales by the square of the scale factor: 2² = 4."]);
    mc("g1", "What is the volume of a cone with radius 4 and height 9?", ["48π", "144π", "36π", "108π"], ["V = ⅓πr²h = ⅓π(16)(9)", "48π"]);
    num("g1", "A trapezoid has bases 8 and 12 and height 5. What is its area?", 50, ["½(8 + 12)(5)", "50"], "Area");
    mc("g1", "What is the surface area of a 4 by 5 by 6 rectangular box?", ["148", "120", "74", "160"], ["2(4·5 + 4·6 + 5·6) = 2(20 + 24 + 30)", "148"]);
    mc("g1", "Two similar solids have a scale factor of 3. How do their volumes compare?", ["The larger has 27 times the volume", "The larger has 9 times the volume", "The larger has 3 times the volume", "The larger has 6 times the volume"], ["Volume scales by the cube of the scale factor: 3³ = 27."]);
    /* ---- g2 ---- */
    num("g2", "Two angles of a triangle measure 48° and 67°. What is the measure, in degrees, of the third angle?", 65, ["180 − 48 − 67 = 65"], "Degrees");
    mc("g2", "Two parallel lines are cut by a transversal. One of two same-side interior angles measures 112°. What does the other measure?", ["68°", "112°", "78°", "22°"], ["Same-side interior angles add to 180°.", "180 − 112 = 68"]);
    num("g2", "An isosceles triangle has a vertex angle of 40°. What is the measure, in degrees, of each base angle?", 70, ["The two base angles are equal: 180 − 40 = 140", "140 ÷ 2 = 70"], "Degrees");
    mc("g2", "A triangle has sides 6, 8 and 10. A similar triangle has shortest side 15. How long is its longest side?", ["25", "19", "20", "30"], ["Scale factor: 15 ÷ 6 = 2.5", "10 × 2.5 = 25"]);
    num("g2", "A triangle has interior angles of 55° and 60°. What is the measure, in degrees, of the exterior angle at the third vertex?", 115, ["An exterior angle equals the sum of the two remote interior angles.", "55 + 60 = 115"], "Degrees");
    mc("g2", "What is the sum of the interior angles of a hexagon?", ["720°", "540°", "360°", "1,080°"], ["(n − 2) · 180 = 4 · 180", "720°"]);
    num("g2", "Two vertical angles measure (3x + 10)° and (5x − 30)°. What is the measure, in degrees, of each angle?", 70, ["Vertical angles are equal: 3x + 10 = 5x − 30", "x = 20", "3(20) + 10 = 70"], "Degrees");
    mc("g2", "A 6-foot-tall person casts a 4-foot shadow at the same time a tree casts an 18-foot shadow. How tall is the tree?", ["27 feet", "12 feet", "24 feet", "20 feet"], ["Similar triangles: 6/4 = h/18", "h = 27"]);
    mc("g2", "What is the measure of each interior angle of a regular octagon?", ["135°", "120°", "140°", "108°"], ["Sum: 6 · 180 = 1,080°", "1,080 ÷ 8 = 135°"]);
    mc("g2", "Two sides of a triangle are 5 and 9. Which could be the length of the third side?", ["7", "3", "4", "14"], ["The third side is between 9 − 5 = 4 and 9 + 5 = 14, not including either.", "Only 7 works."]);
    /* ---- g3 ---- */
    num("g3", "A right triangle has legs 9 and 12. What is the length of the hypotenuse?", 15, ["81 + 144 = 225", "√225 = 15"], "Hypotenuse");
    mc("g3", "A right triangle has hypotenuse 13 and one leg 5. How long is the other leg?", ["12", "8", "√194", "18"], ["169 − 25 = 144", "√144 = 12"]);
    mc("g3", "A 45-45-90 triangle has legs of length 7. What is the hypotenuse?", ["7√2", "7√3", "14", "7/√2"], ["The sides are x, x, x√2.", "7√2"]);
    mc("g3", "A 30-60-90 triangle has hypotenuse 10. What is the length of the longer leg?", ["5√3", "5", "5√2", "10√3"], ["The sides are x, x√3, 2x with 2x = 10.", "x = 5, so the longer leg is 5√3."]);
    mc("g3", "In a right triangle, sin A = 3/5. What is cos A?", ["4/5", "3/4", "5/3", "5/4"], ["Opposite 3, hypotenuse 5 → adjacent 4 (a 3-4-5 triangle).", "cos A = 4/5"]);
    num("g3", "If sin(x°) = cos(32°) and 0 < x < 90, what is the value of x?", 58, ["sin(x°) = cos(90° − x°)", "90 − x = 32 → x = 58"], "x =");
    mc("g3", "A 20-foot ladder leans against a wall and makes a 60° angle with the ground. How high up the wall does it reach?", ["10√3 feet", "10 feet", "10√2 feet", "20√3 feet"], ["sin 60° = height/20", "height = 20 · (√3/2) = 10√3"]);
    mc("g3", "In a right triangle, tan θ = 8/15. What is sin θ?", ["8/17", "15/17", "8/23", "15/8"], ["Opposite 8, adjacent 15", "Hypotenuse: √(64 + 225) = 17", "sin θ = 8/17"]);
    mc("g3", "What is 150° in radians?", ["5π/6", "2π/3", "3π/4", "5π/3"], ["150 · π/180", "5π/6"]);
    num("g3", "What is the distance between (1, 2) and (7, 10)?", 10, ["√(6² + 8²) = √100", "10"], "Distance");
    mc("g3", "θ is an acute angle with sin θ = 0.6. What is cos θ?", ["0.8", "0.4", "0.64", "0.75"], ["sin²θ + cos²θ = 1", "cos²θ = 1 − 0.36 = 0.64", "cos θ = 0.8"]);
    /* ---- g4 ---- */
    mc("g4", "What is the circumference of a circle with radius 7?", ["14π", "7π", "49π", "28π"], ["C = 2πr = 14π"]);
    num("g4", "A circle has an area of 81π. What is its diameter?", 18, ["πr² = 81π → r = 9", "Diameter: 18"], "Diameter");
    mc("g4", "In a circle of radius 6, what is the length of an arc with a 60° central angle?", ["2π", "π", "6π", "12π"], ["Circumference: 12π", "60/360 = 1/6 of it: 2π"]);
    mc("g4", "In a circle of radius 10, what is the area of a sector with a 72° central angle?", ["20π", "4π", "25π", "72π"], ["Area: 100π", "72/360 = 1/5 of it: 20π"]);
    mc("g4", "What are the center and radius of (x − 2)² + (y + 5)² = 36?", ["Center (2, −5), radius 6", "Center (−2, 5), radius 6", "Center (2, −5), radius 36", "Center (−2, 5), radius 18"], ["(x − h)² + (y − k)² = r²", "h = 2, k = −5, r = √36 = 6"]);
    num("g4", "What is the radius of the circle x² + y² − 6x + 8y = 0?", 5, ["Complete the square: (x − 3)² + (y + 4)² = 9 + 16", "r² = 25 → r = 5"], "Radius");
    mc("g4", "An inscribed angle intercepts an arc of 100°. What is the measure of the angle?", ["50°", "100°", "200°", "80°"], ["An inscribed angle is half its intercepted arc."]);
    num("g4", "From a point outside a circle of radius 5, a tangent segment of length 12 is drawn to the circle. How far is the point from the center?", 13, ["The radius meets the tangent at a right angle.", "√(5² + 12²) = 13"], "Distance");
    mc("g4", "In a circle of radius 9, what is the length of the arc cut off by a central angle of 2 radians?", ["18", "4.5", "18π", "11"], ["With radians, arc length = radius × angle", "9 × 2 = 18"]);
    mc("g4", "A circle is centered at the origin and passes through (6, 8). What is its equation?", ["x² + y² = 100", "x² + y² = 10", "x² + y² = 14", "x² + y² = 48"], ["r² = 6² + 8² = 100"]);
  },
  drills: {
    g3: () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]]), m = ri(1, 4), leg = Math.random() < 0.5;
      return leg ? {src:"Random drill", kind:"ask", text:`A right triangle has hypotenuse ${c * m} and one leg ${a * m}. Find the other leg.`, fields:[nf("Leg", b * m)], steps:[`${c * m}² − ${a * m}² = ${(c * m) ** 2 - (a * m) ** 2}`, `√${(b * m) ** 2} = ${b * m}`]}
        : {src:"Random drill", kind:"ask", text:`A right triangle has legs ${a * m} and ${b * m}. Find the hypotenuse.`, fields:[nf("Hypotenuse", c * m)], steps:[`${a * m}² + ${b * m}² = ${(c * m) ** 2}`, `√${(c * m) ** 2} = ${c * m}`]}; }
  }
});
})();
