/* ACT Math · more Algebra, Functions and Geometry questions.
   Written for this site in the style of the test; none are copied from a real exam. */
(() => {
const SRC = "ACT style";
const make = k => (s, text, opts, steps) => k.choice([s], SRC, text, opts, opts[0], steps, {shuffle:true});

Study.extendUnit("actm", "alg", {problems(k){
  const mc = make(k);
  mc("al1", "What is the solution to 3(2x − 1) = 4x + 9?", ["6", "3", "4", "12"], ["6x − 3 = 4x + 9", "2x = 12 → x = 6"]);
  mc("al1", "Which inequality is equivalent to 7 − 3x > 19?", ["x < −4", "x > −4", "x < 4", "x > 4"], ["−3x > 12", "Divide by −3 and flip the sign: x < −4"]);
  mc("al1", "A gym charges a $40 sign-up fee plus $25 per month. Which expression gives the total cost, in dollars, for m months?", ["40 + 25m", "25 + 40m", "65m", "40m + 25m"], ["The fee is paid once; $25 is paid each month.", "40 + 25m"]);
  mc("al1", "What is the slope of the line through (−2, 7) and (4, −5)?", ["−2", "2", "−1/2", "−6"], ["(−5 − 7)/(4 − (−2)) = −12/6", "−2"]);
  mc("al1", "For what value of k does the system 2x + 3y = 5 and 4x + ky = 7 have no solution?", ["6", "3", "−6", "10"], ["No solution means parallel lines: the x and y coefficients are in the same ratio.", "4/2 = k/3 → k = 6, and 7 ≠ 2(5), so the lines don't overlap."]);
  mc("al1", "A tutor charges $35 per hour. Which inequality gives the number of hours h she must work to earn at least $490?", ["35h ≥ 490", "35h ≤ 490", "35 + h ≥ 490", "h ≥ 35(490)"], ["Earnings: 35h", "\"At least\" means ≥."]);
  mc("al1", "Student tickets cost $8 and adult tickets cost $12. A total of 150 tickets sold for $1,480. How many adult tickets were sold?", ["70", "80", "60", "50"], ["s + a = 150 and 8s + 12a = 1,480", "8(150 − a) + 12a = 1,480 → 1,200 + 4a = 1,480", "a = 70"]);
  mc("al1", "Which is the equation of the line through (1, 4) with slope −3?", ["y = −3x + 7", "y = −3x + 1", "y = 3x + 1", "y = −3x − 7"], ["y − 4 = −3(x − 1)", "y = −3x + 3 + 4 = −3x + 7"]);
  mc("al2", "Which is equivalent to (2x + 5)(x − 3)?", ["2x² − x − 15", "2x² + x − 15", "2x² − 15", "2x² − 11x − 15"], ["2x² − 6x + 5x − 15", "2x² − x − 15"]);
  mc("al2", "What are the solutions to x² + 6x + 9 = 0?", ["x = −3 only", "x = 3 only", "x = −3 and x = 3", "x = −9 only"], ["(x + 3)² = 0", "x = −3 (a double root)"]);
  mc("al2", "For what value of c does x² − 10x + c = 0 have exactly one real solution?", ["25", "10", "100", "−25"], ["One solution when b² − 4ac = 0", "100 − 4c = 0 → c = 25"]);
  mc("al2", "Which is equivalent to (x² − 9)/(x² + x − 6), wherever it is defined?", ["(x − 3)/(x − 2)", "(x + 3)/(x − 2)", "(x − 3)/(x + 2)", "3/2"], ["Factor: (x − 3)(x + 3) / ((x + 3)(x − 2))", "Cancel x + 3: (x − 3)/(x − 2)"]);
  mc("al2", "What is the sum of the solutions to 2x² − 8x + 3 = 0?", ["4", "−4", "3/2", "8"], ["Sum of roots = −b/a", "−(−8)/2 = 4"]);
  mc("al2", "If (x + a)² = x² + 14x + 49 for all x, what is a?", ["7", "14", "49", "−7"], ["(x + a)² = x² + 2ax + a²", "2a = 14 → a = 7 (and 7² = 49 checks)"]);
  mc("al2", "What is the minimum value of f(x) = x² − 6x + 13?", ["4", "3", "13", "−4"], ["Complete the square: (x − 3)² + 4", "The smallest value is 4, at x = 3."]);
  mc("al2", "A ball's height, in feet, t seconds after it is thrown up from the ground is h = −16t² + 64t. After how many seconds does it land?", ["4", "2", "64", "16"], ["Set h = 0: −16t(t − 4) = 0", "t = 0 (the throw) or t = 4"]);
}});

Study.extendUnit("actm", "fn", {problems(k){
  const mc = make(k);
  mc("f1", "f(x) = x² − 1 and g(x) = 2x + 3. What is f(g(1))?", ["24", "8", "9", "35"], ["g(1) = 5", "f(5) = 25 − 1 = 24"]);
  mc("f1", "What is the domain of f(x) = √(6 − 2x)?", ["x ≤ 3", "x ≥ 3", "x ≤ 6", "All real numbers"], ["The inside must be at least 0: 6 − 2x ≥ 0", "x ≤ 3"]);
  mc("f1", "The graph of y = f(x) passes through (2, 5). Which point must be on the graph of y = f(x − 3) + 1?", ["(5, 6)", "(−1, 6)", "(5, 4)", "(−1, 4)"], ["x − 3 moves the graph right 3; + 1 moves it up 1.", "(2 + 3, 5 + 1) = (5, 6)"]);
  mc("f1", "Which function has a horizontal asymptote at y = 2?", ["f(x) = (2x + 1)/(x − 3)", "f(x) = (x + 2)/(x² − 3)", "f(x) = 2x/(x² + 1)", "f(x) = (x² + 2)/(x − 1)"], ["Same degree on top and bottom: the asymptote is the ratio of leading coefficients, 2/1.", "A lower degree on top gives y = 0; a higher degree gives none."]);
  mc("f2", "What value of x satisfies log₄(x + 1) = 2?", ["15", "7", "3", "17"], ["x + 1 = 4² = 16", "x = 15"]);
  mc("f2", "A population of 500 bacteria doubles every 3 hours. How many bacteria are there after 12 hours?", ["8,000", "4,000", "2,000", "6,000"], ["12 hours is 4 doublings.", "500 × 2⁴ = 500 × 16 = 8,000"]);
  mc("f2", "Which is equal to log₂ 24 − log₂ 3?", ["3", "21", "8", "log₂ 21"], ["Difference → quotient: log₂(24/3) = log₂ 8", "2³ = 8, so it equals 3."]);
  mc("f3", "What is tan(π/4)?", ["1", "√2/2", "√3", "0"], ["π/4 is 45°.", "sin 45° = cos 45°, so tan 45° = 1."]);
  mc("f3", "Compared with the graph of y = sin x, the graph of y = sin(x − π/2) is", ["shifted right π/2", "shifted left π/2", "shifted up π/2", "stretched by a factor of π/2"], ["Subtracting inside the function moves the graph right."]);
}});

Study.extendUnit("actm", "geo", {problems(k){
  const mc = make(k);
  mc("g1", "What is the volume of a sphere with radius 3?", ["36π", "27π", "12π", "108π"], ["V = (4/3)πr³ = (4/3)π(27)", "36π"]);
  mc("g1", "A right triangle has a hypotenuse of 10 and one leg of 6. What is its area?", ["24", "30", "48", "60"], ["Other leg: √(100 − 36) = 8", "Area: ½(6)(8) = 24"]);
  mc("g1", "Two similar triangles have corresponding sides of 4 and 10. The smaller triangle's area is 12. What is the area of the larger triangle?", ["75", "30", "48", "150"], ["Side ratio 10/4 = 2.5", "Areas scale by the square: 2.5² = 6.25", "12 × 6.25 = 75"]);
  mc("g1", "A trapezoid has bases of 8 and 14 and a height of 5. What is its area?", ["55", "110", "60", "27"], ["A = ½(b₁ + b₂)h = ½(22)(5)", "55"]);
  mc("g2", "What is the center of the circle x² + y² − 6x + 4y − 3 = 0?", ["(3, −2)", "(−3, 2)", "(6, −4)", "(−6, 4)"], ["Complete the squares: (x − 3)² + (y + 2)² = 16", "Center (3, −2), radius 4"]);
  mc("g2", "Which line is parallel to y = 4x − 1 and passes through (1, 2)?", ["y = 4x − 2", "y = −x/4 + 9/4", "y = 4x + 2", "y = −4x + 6"], ["Parallel lines have the same slope, 4.", "2 = 4(1) + b → b = −2"]);
  mc("g2", "The endpoints of a diameter of a circle are (2, 3) and (8, 11). What is the radius?", ["5", "10", "√10", "25"], ["Diameter: √(6² + 8²) = 10", "Radius: 5"]);
  mc("g3", "In right triangle ABC, angle C is 90°, AC = 7 and BC = 24. What is sin A?", ["24/25", "7/25", "7/24", "24/7"], ["AB = √(49 + 576) = 25", "sin A = opposite/hypotenuse = BC/AB = 24/25"]);
  mc("g3", "A 20-foot ladder leans against a wall and makes a 60° angle with the ground. How high up the wall does it reach?", ["10√3 feet", "10 feet", "20√3 feet", "10√2 feet"], ["Height = 20 sin 60° = 20(√3/2)", "10√3 ≈ 17.3 feet"]);
}});
})();
