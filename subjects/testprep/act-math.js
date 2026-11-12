/* ACT Math
   Laid out by ACT's reporting categories for the current (enhanced) test: 45 questions in 50 minutes,
   four answer choices each, calculator allowed, and no formula sheet.
   Preparing for Higher Math is about 80% (Number & Quantity, Algebra, Functions, Geometry,
   Statistics & Probability); Integrating Essential Skills is about 20%.
   Every question here was written for this site in the style of the test; none are copied from a real exam. */
(() => {
const {ri, pick} = POLY;
const SRC = "ACT style";
const make = k => ({ mc: (s, text, opts, steps) => k.choice([s], SRC, text, opts, opts[0], steps, {shuffle:true}) });
const nf = (label, a) => ({l:label, t:"num", a:String(a), ph:"number"});

/* ================= NUMBER & QUANTITY ================= */
Study.addUnit("actm", {
  id: "nq", name: "Number & Quantity (10–12%)", short: "Number",
  sections: [
    {id:"n1", name:"Real & Complex Numbers"},
    {id:"n2", name:"Matrices & Vectors"}
  ],
  notes: {
    n1: [
      {sum:["i is the square root of −1, so i² = −1. Powers of i repeat every four: i, −1, −i, 1.", "Multiply complex numbers like binomials, then replace i² with −1.", "Exponent rules: multiply → add, divide → subtract, a fractional exponent is a root, a negative exponent is a reciprocal."]},
      {p:"The ACT gives **no formula sheet**, so the rules on these pages need to be in your head. Number & Quantity covers things the SAT barely touches: complex numbers, matrices and vectors."},
      {ex:{q:"Multiply (2 + 3i)(1 − 4i).", a:["FOIL: 2 − 8i + 3i − 12i².", "i² is −1, so −12i² is +12.", "14 − 5i."]}},
      {ex:{q:"Simplify i²³.", a:["Divide the exponent by 4: 23 = 4 · 5 + 3.", "The remainder 3 means i³, which is −i."]}},
      {p:"To divide by a complex number, multiply top and bottom by its conjugate (flip the sign of the i term): 2/(1 + i) becomes 2(1 − i)/2, or 1 − i."},
      {p:"A rational number can be written as a fraction of integers. Its decimal ends or repeats. Square roots of non-perfect squares, like √12, are irrational."},
      {check:[{q:"8^(2/3)?", a:"The cube root of 8 is 2, and 2² = 4."}, {q:"√(−36)?", a:"6i."}]}
    ],
    n2: [
      {sum:["Add matrices entry by entry; a number in front multiplies every entry.", "The determinant of [a, b; c, d] is ad − bc.", "A vector ⟨a, b⟩ has length √(a² + b²). Add vectors component by component."]},
      {p:"Here a matrix is written row by row with a semicolon between rows, so [1, 2; 3, 4] has top row 1, 2 and bottom row 3, 4."},
      {h:"Multiplying matrices"},
      {p:"An m × n matrix times an n × p matrix gives an m × p matrix. The inside numbers must match. Each entry of the answer is a row of the first times a column of the second."},
      {ex:{q:"Multiply [1, 2; 3, 4] by the column [5; 6].", a:["Top: 1(5) + 2(6) = 17.", "Bottom: 3(5) + 4(6) = 39.", "[17; 39]."]}},
      {check:[{q:"Determinant of [3, 5; 2, 4]?", a:"12 − 10 = 2."}, {q:"Length of ⟨3, −4⟩?", a:"√(9 + 16) = 5."}]}
    ]
  },
  problems(k){
    const {mc} = make(k);
    mc("n1", "What is (2 + 3i)(1 − 4i)?", ["14 − 5i", "−10 − 5i", "14 + 5i", "2 − 12i"], ["2 − 8i + 3i − 12i²", "−12i² = +12", "14 − 5i"]);
    mc("n1", "What is i²³?", ["−i", "i", "−1", "1"], ["23 ÷ 4 leaves remainder 3", "i³ = −i"]);
    mc("n1", "What is |−7| − |3 − 9|?", ["1", "13", "−1", "−13"], ["|−7| = 7 and |−6| = 6", "7 − 6 = 1"]);
    mc("n1", "Which number is irrational?", ["√12", "√49", "0.333…", "22/7"], ["√49 = 7, 0.333… = 1/3 and 22/7 is already a fraction.", "√12 = 2√3 can't be written as a fraction of integers."]);
    mc("n1", "What is (4 × 10⁵)(3 × 10⁻²) in scientific notation?", ["1.2 × 10⁴", "12 × 10⁴", "1.2 × 10³", "1.2 × 10⁻¹⁰"], ["4 × 3 = 12 and 10⁵ · 10⁻² = 10³", "12 × 10³ = 1.2 × 10⁴"]);
    mc("n1", "What is the least common multiple of 12 and 18?", ["36", "6", "72", "216"], ["12 = 2² · 3 and 18 = 2 · 3²", "Take the highest powers: 2² · 3² = 36"]);
    mc("n1", "What is 8^(2/3)?", ["4", "16/3", "2", "64"], ["Cube root of 8 is 2", "2² = 4"]);
    mc("n1", "What is 2/(1 + i) written in the form a + bi?", ["1 − i", "1 + i", "2 − 2i", "2 − i"], ["Multiply top and bottom by 1 − i: 2(1 − i)/((1 + i)(1 − i))", "(1 + i)(1 − i) = 1 − i² = 2", "2(1 − i)/2 = 1 − i"]);
    mc("n1", "What is √(−36)?", ["6i", "−6", "−6i", "36i"], ["√(−36) = √36 · √(−1)", "6i"]);
    mc("n1", "Which is equivalent to x⁻² · x⁵ / x for x ≠ 0?", ["x²", "x³", "x⁴", "x⁻¹⁰"], ["Add exponents when multiplying: x³", "Subtract when dividing: x²"]);
    mc("n1", "What is the greatest common factor of 48 and 72?", ["24", "12", "144", "8"], ["48 = 2⁴ · 3 and 72 = 2³ · 3²", "Take the lowest powers: 2³ · 3 = 24"]);

    const M = "Matrices are written row by row, with a semicolon between rows. ";
    mc("n2", M + "A = [1, −3; 4, 0] and B = [2, 5; −1, 3]. What is 2A + B?", ["[4, −1; 7, 3]", "[3, 2; 3, 3]", "[4, −1; 9, 3]", "[4, 11; 7, 3]"], ["2A = [2, −6; 8, 0]", "Add B entry by entry: [4, −1; 7, 3]"]);
    mc("n2", M + "What is the determinant of [3, 5; 2, 4]?", ["2", "22", "−2", "7"], ["ad − bc = 3(4) − 5(2)", "2"]);
    mc("n2", "A 2 × 3 matrix is multiplied by a 3 × 4 matrix. What are the dimensions of the product?", ["2 × 4", "3 × 3", "4 × 2", "6 × 12"], ["The inner numbers (3 and 3) match, so the product exists.", "The outer numbers give its size: 2 × 4."]);
    mc("n2", M + "What is [1, 2; 3, 4] times the column [5; 6]?", ["[17; 39]", "[5; 24]", "[11; 21]", "[17; 23]"], ["Top: 1(5) + 2(6) = 17", "Bottom: 3(5) + 4(6) = 39"]);
    mc("n2", "What is the magnitude of the vector ⟨3, −4⟩?", ["5", "7", "−1", "25"], ["√(3² + (−4)²) = √25", "5"]);
    mc("n2", "What is ⟨2, 5⟩ + ⟨−6, 1⟩?", ["⟨−4, 6⟩", "⟨8, 4⟩", "⟨−12, 5⟩", "⟨−4, 4⟩"], ["Add matching components: 2 + (−6) = −4 and 5 + 1 = 6"]);
    mc("n2", "What is 3⟨1, −2⟩ − ⟨4, 3⟩?", ["⟨−1, −9⟩", "⟨−1, −3⟩", "⟨7, −3⟩", "⟨−1, 9⟩"], ["3⟨1, −2⟩ = ⟨3, −6⟩", "⟨3 − 4, −6 − 3⟩ = ⟨−1, −9⟩"]);
  }
});

/* ================= ALGEBRA ================= */
Study.addUnit("actm", {
  id: "alg", name: "Algebra (17–20%)", short: "Algebra",
  sections: [
    {id:"al1", name:"Linear Equations & Inequalities"},
    {id:"al2", name:"Quadratics & Polynomials"}
  ],
  notes: {
    al1: [
      {sum:["Solve by undoing: distribute, combine, move the variable to one side, divide.", "Flip an inequality when you multiply or divide by a negative. |x − a| < b means x is within b of a.", "To solve a formula for a letter, treat every other letter like a number."]},
      {p:"With about 67 seconds per question, the ACT rewards speed. Many algebra questions can also be answered by plugging the choices back in, starting with a middle value."},
      {ex:{q:"Solve A = P(1 + rt) for r.", a:["Divide by P: A/P = 1 + rt.", "Subtract 1: A/P − 1 = rt, which is (A − P)/P.", "Divide by t: r = (A − P)/(Pt)."]}},
      {ex:{q:"Solve |x − 3| < 5.", a:["x is less than 5 away from 3.", "−5 < x − 3 < 5, so −2 < x < 8."]}},
      {check:[{q:"Slope-intercept form of 4x − 2y = 10?", a:"y = 2x − 5."}, {q:"Three consecutive integers add to 96. The largest?", a:"The middle is 32, so 33."}]}
    ],
    al2: [
      {sum:["Factor or use the quadratic formula: x = (−b ± √(b² − 4ac))/(2a). Memorize it; no sheet is given.", "For ax² + bx + c, the roots add to −b/a and multiply to c/a. The vertex is at x = −b/(2a).", "Remainder theorem: dividing a polynomial by x − c leaves remainder f(c)."]},
      {ex:{q:"Factor 6x² + 7x − 3.", a:["Find two numbers that multiply to 6 · (−3) = −18 and add to 7: 9 and −2.", "6x² + 9x − 2x − 3 = 3x(2x + 3) − (2x + 3).", "(2x + 3)(3x − 1)."]}},
      {p:"Sum and difference of cubes: a³ − b³ = (a − b)(a² + ab + b²) and a³ + b³ = (a + b)(a² − ab + b²). So x³ − 8 divided by x − 2 is x² + 2x + 4."},
      {p:"For a quadratic inequality like x² < 16, find where it equals (x = ±4) and test a point between: 0 works, so −4 < x < 4."},
      {check:[{q:"Remainder when x³ + 2x² − 5 is divided by x − 1?", a:"f(1) = 1 + 2 − 5 = −2."}, {q:"Vertex of y = x² + 4x − 1?", a:"x = −2, y = −5."}]}
    ]
  },
  problems(k){
    const {mc} = make(k);
    mc("al1", "What value of x satisfies 5x − 3(x + 4) = 10?", ["11", "7", "−1", "3"], ["5x − 3x − 12 = 10", "2x = 22 → x = 11"]);
    mc("al1", "Which describes the solutions to |x − 3| < 5?", ["−2 < x < 8", "x < −2 or x > 8", "−8 < x < 2", "x < 8 only"], ["−5 < x − 3 < 5", "Add 3: −2 < x < 8"]);
    mc("al1", "A = P(1 + rt). Which expression gives r?", ["(A − P)/(Pt)", "(A − 1)/(Pt)", "A/(Pt) − 1", "(A − P)/t"], ["A = P + Prt", "A − P = Prt", "r = (A − P)/(Pt)"]);
    mc("al1", "Which is the solution to −2(x − 5) ≥ 4?", ["x ≤ 3", "x ≥ 3", "x ≤ −3", "x ≥ 7"], ["Divide by −2 and flip: x − 5 ≤ −2", "x ≤ 3"]);
    mc("al1", "What is the solution to x + 2y = 10 and 3x − y = 9?", ["(4, 3)", "(2, 4)", "(3, 0)", "(6, 2)"], ["From the second: y = 3x − 9", "x + 2(3x − 9) = 10 → 7x = 28 → x = 4", "y = 3"]);
    mc("al1", "What is the slope-intercept form of 4x − 2y = 10?", ["y = 2x − 5", "y = −2x + 5", "y = 2x + 5", "y = 4x − 10"], ["−2y = −4x + 10", "y = 2x − 5"]);
    mc("al1", "If 3x + 2 = 17, what is the value of 6x − 1?", ["29", "5", "31", "30"], ["3x = 15, so 6x = 30", "30 − 1 = 29"]);
    mc("al1", "Three consecutive integers have a sum of 96. What is the largest?", ["33", "32", "31", "34"], ["The middle one is 96 ÷ 3 = 32", "The integers are 31, 32, 33."]);
    mc("al1", "What value of x satisfies x/3 + x/4 = 14?", ["24", "12", "42", "2"], ["Common denominator 12: 7x/12 = 14", "x = 24"]);
    mc("al1", "What is the value of 2a − 3b when a = −4 and b = 2?", ["−14", "−2", "14", "−11"], ["2(−4) − 3(2) = −8 − 6", "−14"]);

    mc("al2", "Which is equivalent to (x − 4)²?", ["x² − 8x + 16", "x² − 16", "x² + 16", "x² − 4x + 16"], ["(x − 4)(x − 4) = x² − 4x − 4x + 16"]);
    mc("al2", "What are the solutions to x² − x − 12 = 0?", ["−3 and 4", "3 and −4", "−2 and 6", "2 and −6"], ["(x − 4)(x + 3) = 0"]);
    mc("al2", "Which is a factored form of 6x² + 7x − 3?", ["(2x + 3)(3x − 1)", "(2x − 3)(3x + 1)", "(6x − 1)(x + 3)", "(2x + 1)(3x − 3)"], ["Check by multiplying: 6x² − 2x + 9x − 3", "6x² + 7x − 3 ✓"]);
    mc("al2", "Which is equivalent to (x³ − 8)/(x − 2) for x ≠ 2?", ["x² + 2x + 4", "x² − 2x + 4", "x² + 4", "x² − 4"], ["Difference of cubes: x³ − 8 = (x − 2)(x² + 2x + 4)", "Cancel x − 2."]);
    mc("al2", "What are the solutions to 2x² − 4x − 1 = 0?", ["(2 ± √6)/2", "(2 ± √2)/2", "2 ± √6", "(−2 ± √6)/2"], ["x = (4 ± √(16 + 8))/4 = (4 ± √24)/4", "√24 = 2√6", "(2 ± √6)/2"]);
    mc("al2", "How many distinct real zeros does f(x) = x³ − 4x have?", ["3", "1", "2", "0"], ["x(x² − 4) = x(x − 2)(x + 2)", "Zeros: −2, 0 and 2"]);
    mc("al2", "What is the remainder when x³ + 2x² − 5 is divided by x − 1?", ["−2", "−5", "8", "0"], ["Remainder theorem: plug in x = 1", "1 + 2 − 5 = −2"]);
    mc("al2", "What is the product of the solutions to x² + 5x − 14 = 0?", ["−14", "14", "−5", "5"], ["(x + 7)(x − 2) = 0 → −7 and 2", "(−7)(2) = −14, which is c/a"]);
    mc("al2", "Which describes the solutions to x² < 16?", ["−4 < x < 4", "x < 4 only", "x < −4 or x > 4", "x > −4 only"], ["x² = 16 at x = ±4", "Test 0: 0 < 16 ✓, so the solutions are between −4 and 4."]);
    mc("al2", "What is the vertex of y = x² + 4x − 1?", ["(−2, −5)", "(2, 11)", "(−4, −1)", "(−2, −1)"], ["x = −b/(2a) = −4/2 = −2", "y = 4 − 8 − 1 = −5"]);
  },
  drills: {
    al1: () => { const a = ri(2, 6), b = ri(1, 9), x = ri(-5, 9), c = ri(2, 5), d = (a + c) * x + b - c * x;
      // (a+c)x + b = cx + d
      return {src:"Random drill", kind:"ask", text:`Solve for x: ${a + c}x + ${b} = ${c}x ${d - 0 < 0 ? "− " + (-d) : "+ " + d}`, fields:[nf("x =", x)], steps:[`Subtract ${c}x: ${a}x + ${b} = ${d}`, `${a}x = ${d - b}`, `x = ${x}`]}; }
  }
});

/* ================= FUNCTIONS ================= */
Study.addUnit("actm", {
  id: "fn", name: "Functions (17–20%)", short: "Functions",
  sections: [
    {id:"f1", name:"Functions & Graphs"},
    {id:"f2", name:"Sequences & Logarithms"},
    {id:"f3", name:"Trig Functions"}
  ],
  notes: {
    f1: [
      {sum:["f(a) means replace every x with a. f(g(x)) means do g first, then f.", "Domain: no dividing by zero, no even roots of negatives. Range is the set of outputs.", "f(x − h) + k shifts a graph right h and up k. To find an inverse, swap x and y and solve for y."]},
      {ex:{q:"f(x) = x + 4 and g(x) = x². Find g(f(3)).", a:["Inside first: f(3) = 7.", "g(7) = 49."]}},
      {p:"An **even** function is unchanged when x becomes −x (its graph mirrors across the y-axis); polynomials with only even powers are even. An **odd** function flips sign, like x³ + x."},
      {p:"A rational function has a vertical asymptote where its denominator is 0 and the numerator isn't."},
      {check:[{q:"Inverse of f(x) = (x − 2)/3?", a:"x = (y − 2)/3 → y = 3x + 2."}, {q:"Range of √(x − 1) + 2?", a:"y ≥ 2."}]}
    ],
    f2: [
      {sum:["Arithmetic (add d each time): aₙ = a₁ + (n − 1)d, and the sum of n terms is n(a₁ + aₙ)/2.", "Geometric (multiply by r each time): aₙ = a₁ · rⁿ⁻¹.", "log_b(x) = y means bʸ = x. Logs turn products into sums and powers into multipliers."]},
      {ex:{q:"Find the sum of the first 10 terms of 2, 5, 8, …", a:["d = 3, so the 10th term is 2 + 9(3) = 29.", "Sum: 10(2 + 29)/2 = 155."]}},
      {table:{head:["Log rule", "Example"], rows:[["log(xy) = log x + log y", "log 5 + log 20 = log 100 = 2"], ["log(x/y) = log x − log y", "log 50 − log 5 = log 10 = 1"], ["log(xⁿ) = n log x", "log(x²) = 2 log x"]]}},
      {p:"To solve an exponential equation, write both sides with the same base: 2^(x+1) = 32 is 2^(x+1) = 2⁵, so x + 1 = 5."},
      {check:[{q:"log₂ 32?", a:"5, since 2⁵ = 32."}, {q:"8th term of 3, 6, 12, …?", a:"3 · 2⁷ = 384."}]}
    ],
    f3: [
      {sum:["For y = a sin(bx) + d: amplitude |a|, period 2π/b, midline y = d. Maximum is d + |a|.", "Know the unit-circle values for 30°, 45°, 60° and their multiples. Radians = degrees × π/180.", "Signs by quadrant: All positive in I, Sine in II, Tangent in III, Cosine in IV."]},
      {table:{head:["Angle", "sin", "cos", "tan"], rows:[["30° (π/6)", "1/2", "√3/2", "√3/3"], ["45° (π/4)", "√2/2", "√2/2", "1"], ["60° (π/3)", "√3/2", "1/2", "√3"]]}},
      {ex:{q:"sin θ = −3/5 and θ is in quadrant III. Find cos θ.", a:["A 3-4-5 triangle gives a cosine of size 4/5.", "In quadrant III cosine is negative: −4/5."]}},
      {p:"Reciprocals: sec is 1/cos, csc is 1/sin, cot is 1/tan."},
      {check:[{q:"Period of y = 3 sin(2x)?", a:"2π/2 = π."}, {q:"cos 120°?", a:"−1/2 (reference angle 60°, quadrant II)."}]}
    ]
  },
  problems(k){
    const {mc} = make(k);
    mc("f1", "f(x) = 2x² − 3x + 1. What is f(−2)?", ["15", "3", "−13", "11"], ["2(4) − 3(−2) + 1", "8 + 6 + 1 = 15"]);
    mc("f1", "f(x) = x + 4 and g(x) = x². What is g(f(3))?", ["49", "13", "25", "19"], ["f(3) = 7", "g(7) = 49"]);
    mc("f1", "What is the domain of f(x) = 1/(x − 5)?", ["All real numbers except 5", "All real numbers except −5", "All real numbers above 5", "All real numbers except 0"], ["The denominator can't be 0, so x ≠ 5."]);
    mc("f1", "What is the inverse of f(x) = (x − 2)/3?", ["f⁻¹(x) = 3x + 2", "f⁻¹(x) = 3x − 2", "f⁻¹(x) = 3/(x − 2)", "f⁻¹(x) = (x + 2)/3"], ["Swap: x = (y − 2)/3", "3x = y − 2 → y = 3x + 2"]);
    mc("f1", "What is the range of f(x) = √(x − 1) + 2?", ["y ≥ 2", "y ≥ 1", "y ≥ 0", "All real numbers"], ["A square root is at least 0.", "Adding 2 makes the smallest output 2."]);
    mc("f1", "The graph of y = |x| is shifted left 3 and down 2. Which is the new equation?", ["y = |x + 3| − 2", "y = |x − 3| − 2", "y = |x + 3| + 2", "y = |x − 2| + 3"], ["Left 3 → x + 3 inside.", "Down 2 → − 2 outside."]);
    mc("f1", "Which function is even?", ["f(x) = x⁴ − 3x²", "f(x) = x³ + x", "f(x) = 2x + 1", "f(x) = x³ − 2"], ["Even means f(−x) = f(x).", "Only even powers of x: (−x)⁴ − 3(−x)² is the same as before."]);
    mc("f1", "f(x) = 3x − 5. Which is f(a + 2)?", ["3a + 1", "3a − 3", "3a − 5", "3a + 6"], ["3(a + 2) − 5 = 3a + 6 − 5", "3a + 1"]);
    mc("f1", "Where are the vertical asymptotes of f(x) = (x + 1)/(x² − 9)?", ["x = −3 and x = 3", "x = −1 only", "x = 9 only", "x = −9 and x = 9"], ["x² − 9 = (x − 3)(x + 3) is 0 at x = ±3", "The numerator isn't 0 there."]);

    mc("f2", "What is the 20th term of the arithmetic sequence 7, 11, 15, …?", ["83", "87", "80", "79"], ["d = 4", "7 + 19(4) = 83"]);
    mc("f2", "What is the 8th term of the geometric sequence 3, 6, 12, …?", ["384", "768", "192", "48"], ["r = 2", "3 · 2⁷ = 3 · 128 = 384"]);
    mc("f2", "What is the sum of the first 10 terms of 2, 5, 8, …?", ["155", "145", "310", "29"], ["10th term: 2 + 9(3) = 29", "Sum: 10(2 + 29)/2 = 155"]);
    mc("f2", "What is log₂ 32?", ["5", "16", "4", "6"], ["2⁵ = 32"]);
    mc("f2", "If log₃ x = 4, what is x?", ["81", "12", "64", "7"], ["x = 3⁴ = 81"]);
    mc("f2", "What is log 5 + log 20 (base 10)?", ["2", "25", "1", "100"], ["log 5 + log 20 = log(5 · 20) = log 100", "10² = 100, so the answer is 2."]);
    mc("f2", "What value of x satisfies 2^(x + 1) = 32?", ["4", "5", "15", "6"], ["32 = 2⁵", "x + 1 = 5 → x = 4"]);
    mc("f2", "Which is equivalent to log(x²y)?", ["2 log x + log y", "2 log x · log y", "log 2x + log y", "2(log x + log y)"], ["Product → sum: log(x²) + log y", "Power → multiplier: 2 log x + log y"]);
    mc("f2", "A geometric sequence of positive terms has second term 12 and fourth term 108. What is the common ratio?", ["3", "9", "48", "4"], ["Two steps multiply by r²: 108/12 = 9", "r = 3"]);

    mc("f3", "What is the period of y = 3 sin(2x)?", ["π", "2π", "3", "4π"], ["Period = 2π/b = 2π/2", "π"]);
    mc("f3", "What is the amplitude of y = −4 cos(x) + 1?", ["4", "−4", "1", "5"], ["Amplitude is |a| = |−4| = 4"]);
    mc("f3", "What is sin(π/6)?", ["1/2", "√3/2", "√2/2", "√3/3"], ["π/6 is 30°", "sin 30° = 1/2"]);
    mc("f3", "What is cos 120°?", ["−1/2", "1/2", "−√3/2", "√3/2"], ["Reference angle: 60°, cos 60° = 1/2", "Quadrant II → cosine is negative"]);
    mc("f3", "sin θ = −3/5 and θ is in quadrant III. What is cos θ?", ["−4/5", "4/5", "−3/4", "3/4"], ["3-4-5 triangle: cosine has size 4/5", "In quadrant III both sine and cosine are negative."]);
    mc("f3", "What is 240° in radians?", ["4π/3", "5π/4", "2π/3", "5π/3"], ["240 · π/180", "4π/3"]);
    mc("f3", "What is the maximum value of y = 2 sin x + 5?", ["7", "5", "2", "10"], ["sin x is at most 1", "2(1) + 5 = 7"]);
    mc("f3", "If cos θ = 2/3, what is sec θ?", ["3/2", "−2/3", "√5/3", "1/3"], ["sec θ = 1/cos θ"]);
  },
  drills: {
    f2: () => { const a = ri(-9, 12), d = pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7]), n = ri(8, 40), an = a + (n - 1) * d;
      return {src:"Random drill", kind:"ask", text:`What is term number ${n} of the arithmetic sequence ${[a, a + d, a + 2 * d].map(v => String(v).replace("-", "−")).join(", ")}, …?`, fields:[nf("Term", an)], steps:[`d = ${d}`, `${a} + ${n - 1}(${d}) = ${an}`]}; }
  }
});

/* ================= GEOMETRY ================= */
Study.addUnit("actm", {
  id: "geo", name: "Geometry (17–20%)", short: "Geometry",
  sections: [
    {id:"g1", name:"Plane & Solid Geometry"},
    {id:"g2", name:"Coordinate Geometry"},
    {id:"g3", name:"Triangle Trig"}
  ],
  notes: {
    g1: [
      {sum:["No formula sheet on the ACT: memorize the area and volume formulas below.", "Pythagorean triples save time: 3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples.", "An arc is (angle ÷ 360) of the circumference; a sector is the same fraction of the area."]},
      {table:{head:["Shape", "Formula"], rows:[["Triangle", "A = ½bh"], ["Parallelogram", "A = bh"], ["Trapezoid", "A = ½(b₁ + b₂)h"], ["Circle", "A = πr², C = 2πr"], ["Equilateral triangle", "A = (√3/4)s²"], ["Cylinder", "V = πr²h"], ["Box diagonal", "√(l² + w² + h²)"]]}},
      {p:"Supplementary angles add to 180° and complementary angles add to 90°. A regular polygon with n sides has interior angles of (n − 2) · 180 ÷ n each."},
      {check:[{q:"Diagonal of an 8 by 15 rectangle?", a:"17."}, {q:"Each interior angle of a regular pentagon?", a:"540 ÷ 5 = 108°."}]}
    ],
    g2: [
      {sum:["Midpoint: average the x's and average the y's. Distance: √((x₂ − x₁)² + (y₂ − y₁)²).", "Circle: (x − h)² + (y − k)² = r². Ellipse x²/a² + y²/b² = 1 reaches a along x and b along y.", "Reflect over the x-axis: (x, y) → (x, −y). Rotate 90° counterclockwise about the origin: (x, y) → (−y, x)."]},
      {ex:{q:"Find the length of the major axis of x²/25 + y²/9 = 1.", a:["a² = 25, so the ellipse reaches 5 left and right of the center.", "The major axis is 2 · 5 = 10."]}},
      {p:"Parallel lines have equal slopes; perpendicular slopes multiply to −1. A parabola y = a(x − h)² + k has the vertical line x = h as its axis of symmetry."},
      {check:[{q:"Midpoint of (−3, 8) and (5, −2)?", a:"(1, 3)."}, {q:"(3, −5) reflected over the x-axis?", a:"(3, 5)."}]}
    ],
    g3: [
      {sum:["SOH CAH TOA for right triangles.", "Law of sines: a/sin A = b/sin B. Law of cosines: c² = a² + b² − 2ab cos C.", "Area of any triangle from two sides and the angle between them: ½ab sin C."]},
      {p:"Use the law of sines when you know an angle and the side across from it. Use the law of cosines when you know two sides and the angle between them, or all three sides. The ACT often gives these two laws inside the question, but not always."},
      {ex:{q:"Two sides of a triangle are 5 and 8, and the angle between them is 60°. Find the third side.", a:["c² = 25 + 64 − 2(5)(8) cos 60°.", "cos 60° is 1/2, so c² = 89 − 40 = 49.", "c = 7."]}},
      {p:"Many ACT trig answers are left as expressions. If you stand 50 feet from a tree and look up at 40°, the height is 50 tan 40°: no calculator needed to pick the right choice."},
      {check:[{q:"Area of a triangle with sides 6 and 10 and a 30° angle between them?", a:"½(6)(10)(1/2) = 15."}]}
    ]
  },
  problems(k){
    const {mc} = make(k);
    mc("g1", "What is the area of a parallelogram with base 12 and height 7?", ["84", "42", "38", "19"], ["A = bh = 12 × 7"]);
    mc("g1", "What is the area of a circle with diameter 10?", ["25π", "100π", "10π", "20π"], ["r = 5", "πr² = 25π"]);
    mc("g1", "What is the length of the diagonal of an 8 by 15 rectangle?", ["17", "23", "13", "√161"], ["√(64 + 225) = √289", "17"]);
    mc("g1", "What is the measure of each interior angle of a regular pentagon?", ["108°", "72°", "120°", "540°"], ["Sum: 3 · 180 = 540°", "540 ÷ 5 = 108°"]);
    mc("g1", "What is the volume of a cylinder with radius 2 and height 7?", ["28π", "14π", "49π", "56π"], ["πr²h = π(4)(7)", "28π"]);
    mc("g1", "A square has a perimeter of 36. What is its area?", ["81", "9", "144", "324"], ["Side: 36 ÷ 4 = 9", "9² = 81"]);
    mc("g1", "A circle has a circumference of 24π. What is the length of an arc with a 90° central angle?", ["6π", "12π", "3π", "8π"], ["90/360 = 1/4 of the circumference", "24π ÷ 4 = 6π"]);
    mc("g1", "Two supplementary angles measure (2x + 10)° and (3x − 5)°. What is the measure of the larger angle?", ["100°", "80°", "35°", "95°"], ["2x + 10 + 3x − 5 = 180 → x = 35", "The angles are 80° and 100°."]);
    mc("g1", "What is the area of an equilateral triangle with side 6?", ["9√3", "18", "18√3", "36√3"], ["(√3/4)s² = (√3/4)(36)", "9√3"]);
    mc("g1", "A box measures 3 by 4 by 12. What is the length of its longest diagonal?", ["13", "19", "5", "√160"], ["√(9 + 16 + 144) = √169", "13"]);

    mc("g2", "What is the midpoint of the segment from (−3, 8) to (5, −2)?", ["(1, 3)", "(2, 6)", "(4, −5)", "(1, 5)"], ["x: (−3 + 5)/2 = 1", "y: (8 − 2)/2 = 3"]);
    mc("g2", "What is the distance between (−2, 1) and (4, 9)?", ["10", "14", "√28", "100"], ["√(6² + 8²) = √100", "10"]);
    mc("g2", "Which is the equation of the circle with center (−1, 4) and radius 3?", ["(x + 1)² + (y − 4)² = 9", "(x − 1)² + (y + 4)² = 9", "(x + 1)² + (y − 4)² = 3", "(x − 1)² + (y + 4)² = 3"], ["(x − h)² + (y − k)² = r² with h = −1, k = 4", "r² = 9"]);
    mc("g2", "A line passes through (0, 2) and (4, 10). What is the slope of a line perpendicular to it?", ["−1/2", "2", "1/2", "−2"], ["Slope: (10 − 2)/(4 − 0) = 2", "Perpendicular: −1/2"]);
    mc("g2", "What is the length of the major axis of the ellipse x²/25 + y²/9 = 1?", ["10", "5", "6", "25"], ["a² = 25 → a = 5", "Major axis: 2a = 10"]);
    mc("g2", "What is the axis of symmetry of y = (x − 2)² + 3?", ["x = 2", "x = −2", "y = 3", "x = 3"], ["The vertex is (2, 3).", "The axis is the vertical line through it: x = 2."]);
    mc("g2", "The point (3, −5) is reflected over the x-axis. What are the new coordinates?", ["(3, 5)", "(−3, −5)", "(−3, 5)", "(−5, 3)"], ["Reflecting over the x-axis flips the sign of y."]);
    mc("g2", "A line with slope 3 passes through (2, 1). What is its y-intercept?", ["−5", "7", "−1", "5"], ["1 = 3(2) + b", "b = −5"]);
    mc("g2", "The point (4, 1) is rotated 90° counterclockwise about the origin. What are the new coordinates?", ["(−1, 4)", "(1, −4)", "(−4, −1)", "(4, −1)"], ["(x, y) → (−y, x)", "(4, 1) → (−1, 4)"]);

    mc("g3", "In a right triangle, the side opposite angle A is 5 and the hypotenuse is 13. What is tan A?", ["5/12", "5/13", "12/13", "12/5"], ["Adjacent: √(169 − 25) = 12", "tan = opposite/adjacent = 5/12"]);
    mc("g3", "In triangle ABC, angle A is 30°, angle B is 45°, and side a (opposite A) is 8. What is side b?", ["8√2", "4√2", "8√3", "16"], ["Law of sines: b/sin 45° = 8/sin 30°", "b = 8 · (√2/2) ÷ (1/2)", "8√2"]);
    mc("g3", "Two sides of a triangle are 5 and 8, and the angle between them is 60°. What is the third side?", ["7", "√89", "√129", "9"], ["c² = 25 + 64 − 2(5)(8)(1/2)", "c² = 49 → c = 7"]);
    mc("g3", "A triangle has sides 6 and 10 with a 30° angle between them. What is its area?", ["15", "30", "15√3", "60"], ["½ab sin C = ½(6)(10)(1/2)", "15"]);
    mc("g3", "From a point 50 feet from the base of a tree, the angle of elevation to the top is 40°. Which expression gives the tree's height?", ["50 tan 40°", "50 sin 40°", "50 cos 40°", "50/tan 40°"], ["The height is opposite the angle and the 50 feet is adjacent.", "tan 40° = height/50"]);
    mc("g3", "A right triangle has legs 8 and 15. Angle A is opposite the side of length 8. What is cos A?", ["15/17", "8/17", "8/15", "17/15"], ["Hypotenuse: 17", "The side next to A is 15, so cos A = 15/17."]);
    mc("g3", "In a 30-60-90 triangle, the shortest side is 4. What is the hypotenuse?", ["8", "4√3", "4√2", "12"], ["The sides are x, x√3 and 2x.", "2(4) = 8"]);
    mc("g3", "Which is equivalent to 1 − cos²θ?", ["sin²θ", "tan²θ", "−sin²θ", "sec²θ"], ["sin²θ + cos²θ = 1", "So 1 − cos²θ = sin²θ."]);
  },
  drills: {
    g2: () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25], [9, 12, 15]]), x = ri(-6, 6), y = ri(-6, 6), sx = pick([1, -1]), sy = pick([1, -1]), m = v => String(v).replace("-", "−");
      return {src:"Random drill", kind:"ask", text:`What is the distance between (${m(x)}, ${m(y)}) and (${m(x + sx * a)}, ${m(y + sy * b)})?`, fields:[nf("Distance", c)], steps:[`Horizontal change: ${a}. Vertical change: ${b}.`, `√(${a}² + ${b}²) = √${c * c} = ${c}`]}; }
  }
});

/* ================= STATISTICS & PROBABILITY ================= */
Study.addUnit("actm", {
  id: "sp", name: "Statistics & Probability (12–15%)", short: "Stats",
  sections: [
    {id:"s1", name:"Statistics"},
    {id:"s2", name:"Probability & Counting"}
  ],
  notes: {
    s1: [
      {sum:["Mean = total ÷ count, so total = mean × count. Median is the middle value in order; mode is the most common.", "Adding the same number to every value shifts the mean but leaves the spread (standard deviation, range) unchanged.", "A weighted average multiplies each value by its weight before adding."]},
      {ex:{q:"Five numbers have a mean of 20. One of them, 12, is removed. What is the new mean?", a:["Total: 5 × 20 = 100.", "New total: 88, over 4 numbers.", "22."]}},
      {p:"In a box plot, the box runs from the first quartile to the third quartile. Its width is the interquartile range, Q3 − Q1, which covers the middle half of the data."},
      {p:"Correlation describes direction and tightness. Points that fall close to a downward line show a strong negative relationship."},
      {check:[{q:"Quizzes (40%) average 80 and tests (60%) average 90. Overall?", a:"0.4(80) + 0.6(90) = 86."}]}
    ],
    s2: [
      {sum:["Counting principle: multiply the number of choices at each step.", "Order matters → permutations (n!/(n − r)!). Order doesn't matter → combinations (divide by r! as well).", "Expected value = each outcome × its probability, added up. P(at least one) = 1 − P(none)."]},
      {ex:{q:"How many 3-person committees can be formed from 8 people?", a:["Order doesn't matter, so it's a combination.", "8 · 7 · 6 ÷ (3 · 2 · 1) = 56."]}},
      {p:"For \"or\" with events that can't both happen, add the probabilities. For \"and\" with independent events, multiply."},
      {check:[{q:"Three coin flips: P(at least one head)?", a:"1 − (1/2)³ = 7/8."}, {q:"Ways to arrange 5 books on a shelf?", a:"5! = 120."}]}
    ]
  },
  problems(k){
    const {mc} = make(k);
    mc("s1", "Six numbers have a mean of 14. What is their sum?", ["84", "20", "8", "70"], ["Sum = mean × count = 14 × 6"]);
    mc("s1", "What is the median of 11, 4, 9, 15, 4 and 7?", ["8", "7", "9", "8.5"], ["In order: 4, 4, 7, 9, 11, 15", "(7 + 9)/2 = 8"]);
    mc("s1", "What is the mode of 11, 4, 9, 15, 4 and 7?", ["4", "8", "11", "15"], ["4 is the only value that appears twice."]);
    mc("s1", "A grade is 40% quizzes and 60% tests. A student averages 80 on quizzes and 90 on tests. What is the grade?", ["86", "85", "84", "88"], ["0.4(80) + 0.6(90) = 32 + 54", "86"]);
    mc("s1", "Five numbers have a mean of 20. When the number 12 is removed, what is the mean of the remaining four?", ["22", "18", "21", "25"], ["Total: 100", "(100 − 12)/4 = 22"]);
    mc("s1", "A data set has mean 50 and standard deviation 5. If 10 is added to every value, what are the new mean and standard deviation?", ["Mean 60, standard deviation 5", "Mean 60, standard deviation 15", "Mean 50, standard deviation 15", "Mean 50, standard deviation 5"], ["Every value shifts by 10, so the mean does too.", "The spread between values doesn't change."]);
    mc("s1", "In a scatterplot, the points lie close to a line that falls from left to right. Which describes the relationship?", ["A strong negative correlation", "A weak negative correlation", "A strong positive correlation", "No correlation at all"], ["Falling → negative.", "Close to the line → strong."]);
    mc("s1", "A box plot has a first quartile of 12 and a third quartile of 20. What is the interquartile range?", ["8", "16", "32", "4"], ["IQR = Q3 − Q1 = 20 − 12"]);

    mc("s2", "In how many orders can 5 different books be arranged on a shelf?", ["120", "25", "60", "3,125"], ["5! = 5 · 4 · 3 · 2 · 1"]);
    mc("s2", "How many different 3-person committees can be chosen from 8 people?", ["56", "336", "24", "512"], ["Order doesn't matter: (8 · 7 · 6)/(3 · 2 · 1)", "336 ÷ 6 = 56"]);
    mc("s2", "An outfit is one of 4 shirts, one of 3 pairs of pants and one of 2 pairs of shoes. How many outfits are possible?", ["24", "9", "12", "14"], ["4 × 3 × 2 = 24"]);
    mc("s2", "Two fair dice are rolled. What is the probability that the sum is 7?", ["1/6", "1/12", "7/36", "1/7"], ["Six rolls give 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)", "6/36 = 1/6"]);
    mc("s2", "A game pays $10 with probability 0.2 and $0 otherwise. What is the expected payout?", ["$2", "$5", "$10", "$8"], ["10(0.2) + 0(0.8) = 2"]);
    mc("s2", "Events A and B cannot both happen. P(A) = 0.3 and P(B) = 0.45. What is P(A or B)?", ["0.75", "0.135", "0.15", "0.615"], ["Mutually exclusive → add", "0.3 + 0.45 = 0.75"]);
    mc("s2", "How many 4-digit codes can be made from the digits 0–9 if no digit repeats?", ["5,040", "10,000", "210", "6,561"], ["10 × 9 × 8 × 7 = 5,040"]);
    mc("s2", "A fair coin is flipped 3 times. What is the probability of exactly 2 heads?", ["3/8", "1/4", "1/2", "2/3"], ["8 equally likely outcomes", "HHT, HTH, THH → 3/8"]);
    mc("s2", "A fair coin is flipped 3 times. What is the probability of at least one head?", ["7/8", "1/2", "3/8", "1/8"], ["P(no heads) = (1/2)³ = 1/8", "1 − 1/8 = 7/8"]);
  }
});

/* ================= INTEGRATING ESSENTIAL SKILLS ================= */
Study.addUnit("actm", {
  id: "ies", name: "Essential Skills (about 20%)", short: "Essentials",
  sections: [
    {id:"e1", name:"Rates, Percents & Proportions"}
  ],
  notes: {
    e1: [
      {sum:["These are middle-school skills used in multi-step problems: percents, rates, ratios, fractions, averages.", "Percent of a number: turn the percent into a decimal and multiply. A 20% discount is × 0.80.", "Distance = rate × time. Simple interest = principal × rate × years."]},
      {p:"About a fifth of ACT Math is this category. The math is easy; the mistakes come from rushing. Write the setup, then compute."},
      {ex:{q:"Solve 4/x = 10/35.", a:["Cross-multiply: 10x = 140.", "x = 14."]}},
      {ex:{q:"Split 120 in the ratio 2:3:5. What is the largest share?", a:["2 + 3 + 5 = 10 parts, 12 each.", "5 parts: 60."]}},
      {warn:"Order of operations: multiply and divide from left to right before adding and subtracting. 18 − 6 ÷ 3 × 2 + 4 is 18 − 4 + 4 = 18."},
      {check:[{q:"3/8 + 5/12?", a:"9/24 + 10/24 = 19/24."}, {q:"Simple interest on $500 at 4% for 3 years?", a:"500 × 0.04 × 3 = $60."}]}
    ]
  },
  problems(k){
    const {mc} = make(k);
    mc("e1", "What is 15% of 80?", ["12", "15", "8", "120"], ["0.15 × 80 = 12"]);
    mc("e1", "What is 3/8 + 5/12?", ["19/24", "8/20", "2/5", "15/96"], ["Common denominator 24: 9/24 + 10/24", "19/24"]);
    mc("e1", "A car travels 150 miles in 2.5 hours. What is its average speed?", ["60 miles per hour", "50 miles per hour", "75 miles per hour", "375 miles per hour"], ["150 ÷ 2.5 = 60"]);
    mc("e1", "If 4/x = 10/35, what is x?", ["14", "87.5", "8.75", "29"], ["Cross-multiply: 10x = 140", "x = 14"]);
    mc("e1", "A $45 shirt is on sale for 20% off. What is the sale price?", ["$36", "$25", "$9", "$40"], ["45 × 0.80 = 36"]);
    mc("e1", "A driver travels 3 hours at 50 miles per hour and then 2 hours at 65 miles per hour. How far does she travel in all?", ["280 miles", "115 miles", "575 miles", "230 miles"], ["3(50) + 2(65) = 150 + 130", "280"]);
    mc("e1", "$120 is split among three people in the ratio 2:3:5. How much is the largest share?", ["$60", "$50", "$36", "$24"], ["10 parts → $12 per part", "5 parts: $60"]);
    mc("e1", "How much simple interest does $500 earn at 4% per year for 3 years?", ["$60", "$20", "$62.43", "$600"], ["500 × 0.04 × 3 = 60"]);
    mc("e1", "How many minutes are in 2.5 hours?", ["150", "125", "250", "170"], ["2.5 × 60 = 150"]);
    mc("e1", "What is 18 − 6 ÷ 3 × 2 + 4?", ["18", "12", "21", "13"], ["Divide and multiply left to right: 6 ÷ 3 × 2 = 4", "18 − 4 + 4 = 18"]);
  },
  drills: {
    e1: () => { const pct = pick([5, 10, 15, 20, 25, 30, 40, 60, 75]), n = pick([20, 40, 60, 80, 120, 160, 200, 240, 400]), off = Math.random() < 0.5;
      return off ? {src:"Random drill", kind:"ask", text:`An item costs $${n} and is ${pct}% off. What is the sale price in dollars?`, fields:[nf("Dollars", n * (100 - pct) / 100)], steps:[`Keep ${100 - pct}%: ${n} × ${(100 - pct) / 100}`, `${n * (100 - pct) / 100}`]}
        : {src:"Random drill", kind:"ask", text:`What is ${pct}% of ${n}?`, fields:[nf("Answer", n * pct / 100)], steps:[`${pct / 100} × ${n} = ${n * pct / 100}`]}; }
  }
});
})();
