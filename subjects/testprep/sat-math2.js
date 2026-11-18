/* SAT Math · more questions, weighted toward the harder end of each domain (multi-step setups,
   extraneous roots, systems with special solutions, sample inference). Some are typed answers, as on
   the real test. Written for this site in the style of the digital SAT; none are copied from a real exam. */
(() => {
const SRC = "SAT style";
const make = k => ({
  mc: (s, text, opts, steps) => k.choice([s], SRC, text, opts, opts[0], steps, {shuffle:true}),
  num: (s, text, ans, steps, label) => k.ask([s], SRC, text, [{l:label || "Answer", t:"num", a:String(ans), ph:"number or fraction"}], steps)
});

Study.extendUnit("satm", "alg", {problems(k){
  const {mc, num} = make(k);
  num("a1", "If 4(3x − 2) − 2(5x + 1) = 6, what is the value of x?", 8, ["12x − 8 − 10x − 2 = 6", "2x − 10 = 6", "x = 8"], "x =");
  num("a2", "A line with a slope of 3 passes through the points (2, 7) and (k, 19). What is the value of k?", 6, ["(19 − 7)/(k − 2) = 3", "12 = 3(k − 2) → k − 2 = 4", "k = 6"], "k =");
  mc("a2", "Line ℓ passes through (−3, 4) and (5, −2). Line m is perpendicular to line ℓ. What is the slope of line m?", ["4/3", "−4/3", "3/4", "−3/4"], ["Slope of ℓ: (−2 − 4)/(5 − (−3)) = −6/8 = −3/4", "Perpendicular: the negative reciprocal, 4/3"]);
  mc("a3", "The system 3x − 2y = 8 and 6x + ky = 16 has infinitely many solutions. What is the value of k?", ["−4", "4", "−2", "2"], ["Infinitely many solutions: the second equation is a multiple of the first.", "6x and 16 are 2 times 3x and 8, so ky = 2(−2y) → k = −4"]);
  num("a3", "Three hot dogs and two drinks cost $13. Two hot dogs and three drinks cost $12. What is the cost, in dollars, of one hot dog?", 3, ["3h + 2d = 13 and 2h + 3d = 12", "Multiply: 9h + 6d = 39 and 4h + 6d = 24", "Subtract: 5h = 15 → h = 3"], "Dollars");
  mc("a4", "A van can carry at most 1,200 pounds. The driver weighs 180 pounds, and each box weighs 34 pounds. What is the greatest number of boxes the van can carry along with the driver?", ["30", "35", "29", "31"], ["180 + 34b ≤ 1,200 → 34b ≤ 1,020", "b ≤ 30"]);
}});

Study.extendUnit("satm", "adv", {problems(k){
  const {mc, num} = make(k);
  mc("b1", "Which expression is equivalent to (x² − 4)/(x + 2) + 3, for x ≠ −2?", ["x + 1", "x + 5", "x − 5", "x² + 3"], ["x² − 4 = (x − 2)(x + 2), so the fraction is x − 2.", "x − 2 + 3 = x + 1"]);
  mc("b2", "How many real solutions does x⁴ − 5x² + 4 = 0 have?", ["4", "2", "0", "1"], ["Factor like a quadratic in x²: (x² − 1)(x² − 4) = 0", "x = ±1 or x = ±2: four solutions"]);
  num("b2", "What is the solution to √(2x + 7) = x + 2?", 1, ["Square both sides: 2x + 7 = x² + 4x + 4", "x² + 2x − 3 = 0 → (x + 3)(x − 1) = 0", "Check x = −3: √1 = 1, but −3 + 2 = −1. It doesn't work.", "x = 1"], "x =");
  num("b2", "The equation x² + bx + 36 = 0, where b is a positive constant, has exactly one real solution. What is the value of b?", 12, ["One solution when b² − 4ac = 0", "b² − 144 = 0 → b = 12 (b is positive)"], "b =");
  mc("b3", "f(x) = 3(2)ˣ. For what value of x is f(x) = 96?", ["5", "4", "6", "32"], ["3 · 2ˣ = 96 → 2ˣ = 32", "2⁵ = 32, so x = 5"]);
  mc("b3", "The value of a machine, in dollars, t years after it was bought is V(t) = 18,000(0.85)ᵗ. Which statement is true?", ["The value decreases by 15% each year", "The value decreases by 85% each year", "The value decreases by $15 each year", "The value increases by 15% each year"], ["Each year the value is multiplied by 0.85.", "Keeping 85% means losing 15%."]);
  mc("b3", "What are the x-intercepts of the graph of y = −2(x − 3)² + 8?", ["x = 1 and x = 5", "x = 3 only", "x = −1 and x = 7", "x = −5 and x = −1"], ["Set y = 0: 2(x − 3)² = 8 → (x − 3)² = 4", "x − 3 = ±2 → x = 1 or x = 5"]);
}});

Study.extendUnit("satm", "psda", {problems(k){
  const {mc, num} = make(k);
  mc("p1", "A car travels at 72 kilometers per hour. How many meters does it travel per second?", ["20", "1.2", "72", "200"], ["72 km/h = 72,000 meters per 3,600 seconds", "72,000 ÷ 3,600 = 20"]);
  num("p1", "A recipe uses 2.5 cups of flour for 20 cookies. At this rate, how many cups of flour are needed for 72 cookies?", 9, ["2.5/20 = x/72", "x = 2.5 × 72 ÷ 20 = 9"], "Cups");
  num("p2", "A store raises a price by 20% and later lowers the new price by 20%. The final price is what percent of the original price?", 96, ["1.20 × 0.80 = 0.96", "96% (not 100%: the 20% decrease is taken from a larger number)"], "Percent");
  mc("p3", "A data set has 9 values, all between 20 and 60, with a median of 40. The value 100 is added to the data set. Which statement must be true?", ["The mean increases", "The median increases by 60", "The median decreases", "The range stays the same"], ["100 is larger than every value, so it pulls the mean up.", "The median can only move slightly, and the range grows."]);
  mc("p3", "A random sample of 400 voters in a city found that 58% support a new park, with a margin of error of 5 percentage points. Which conclusion is most appropriate?", ["Between 53% and 63% of city voters plausibly support the park", "Exactly 58% of all voters in the city support the new park", "Between 53% and 63% of voters in every city support parks", "At least 63% of all voters in the city support the park"], ["58 ± 5 gives a plausible range of 53% to 63%.", "The result applies only to the city sampled."]);
  num("p4", "Of 200 students surveyed, 120 play a sport. Of the students who play a sport, 45 also play an instrument. Of those who don't play a sport, 30 play an instrument. If a student who plays an instrument is chosen at random, what is the probability that the student plays a sport?", "0.6", ["Instrument players: 45 + 30 = 75", "Of those, 45 play a sport: 45/75 = 3/5"], "Probability");
}});

Study.extendUnit("satm", "geo", {problems(k){
  const {mc, num} = make(k);
  mc("g1", "A cylinder has a volume of 72π cubic inches and a height of 8 inches. What is its radius, in inches?", ["3", "9", "4.5", "6"], ["V = πr²h → 72π = πr²(8)", "r² = 9 → r = 3"]);
  mc("g1", "A cube has a surface area of 150 square centimeters. What is its volume, in cubic centimeters?", ["125", "25", "150", "625"], ["Each of 6 faces: 150 ÷ 6 = 25, so a side is 5.", "Volume: 5³ = 125"]);
  num("g2", "Two parallel lines are cut by a transversal. One angle measures (3x + 15)° and its corresponding angle measures (5x − 25)°. What is the value of x?", 20, ["Corresponding angles are equal: 3x + 15 = 5x − 25", "40 = 2x → x = 20"], "x =");
  mc("g3", "In right triangle PQR, angle R is 90° and sin P = 5/13. What is cos Q?", ["5/13", "12/13", "5/12", "13/5"], ["P and Q are complementary, so cos Q = sin P.", "Both equal QR/PQ = 5/13."]);
  num("g3", "A right triangle has legs of length 9 and 12. What is the sine of the angle opposite the side of length 9?", "0.6", ["Hypotenuse: √(81 + 144) = 15", "sin = opposite/hypotenuse = 9/15 = 3/5"], "sin =");
  mc("g4", "A circle in the xy-plane has the equation (x + 2)² + (y − 5)² = 49. Which point lies on the circle?", ["(5, 5)", "(2, −5)", "(−2, 12.5)", "(0, 0)"], ["Center (−2, 5), radius 7.", "(5, 5) is 7 units to the right of the center."]);
  mc("g4", "A circle has a radius of 6. What is the area of a sector with a central angle of 2π/3 radians?", ["12π", "4π", "24π", "36π"], ["The sector is (2π/3)/(2π) = 1/3 of the circle.", "1/3 × 36π = 12π"]);
}});
})();
