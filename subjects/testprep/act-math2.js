/* ACT Math · more questions for the thinner categories (Essential Skills, Statistics & Probability,
   Number & Quantity). Written for this site in the style of the test; none are copied from a real exam. */
(() => {
const SRC = "ACT style";
const make = k => (s, text, opts, steps) => k.choice([s], SRC, text, opts, opts[0], steps, {shuffle:true});

Study.extendUnit("actm", "ies", {problems(k){
  const mc = make(k);
  mc("e1", "A recipe uses 3 cups of flour for every 2 cups of sugar. How many cups of flour go with 5 cups of sugar?", ["7.5", "6", "10", "3.3"], ["3/2 = x/5", "x = 15/2 = 7.5"]);
  mc("e1", "A price rises from $40 to $50. What is the percent increase?", ["25%", "20%", "10%", "50%"], ["Change ÷ original: (50 − 40)/40", "10/40 = 0.25 = 25%"]);
  mc("e1", "After a 20% discount, a jacket costs $64. What was the original price?", ["$80", "$76.80", "$84", "$51.20"], ["The sale price is 80% of the original: 0.80x = 64", "x = 64 ÷ 0.80 = 80"]);
  mc("e1", "On a map, 1 inch represents 25 miles. Two towns are 3.4 inches apart on the map. How far apart are they?", ["85 miles", "28.4 miles", "75 miles", "7.4 miles"], ["3.4 × 25 = 85"]);
  mc("e1", "A printer prints 18 pages per minute. How many minutes does it take to print 315 pages?", ["17.5", "15", "20", "5,670"], ["315 ÷ 18 = 17.5"]);
  mc("e1", "Pens cost $1.25 each, or $12 for a box of 12. How much is saved per pen by buying the box?", ["$0.25", "$1.00", "$3.00", "$0.75"], ["Box price per pen: 12 ÷ 12 = $1.00", "1.25 − 1.00 = 0.25"]);
  mc("e1", "A worker earns $18 per hour, and 1.5 times that rate for each hour over 40 in a week. How much does she earn for 46 hours?", ["$882", "$828", "$1,242", "$864"], ["First 40 hours: 40 × 18 = 720", "Overtime rate: 1.5 × 18 = 27; 6 × 27 = 162", "720 + 162 = 882"]);
  mc("e1", "The ratio of boys to girls in a class is 4:5. There are 36 students. How many are girls?", ["20", "16", "9", "45"], ["4 + 5 = 9 parts, so each part is 36 ÷ 9 = 4", "Girls: 5 × 4 = 20"]);
  mc("e1", "A 240-liter tank is 35% full. How many more liters are needed to fill it?", ["156", "84", "205", "65"], ["It is 65% empty: 0.65 × 240 = 156"]);
  mc("e1", "Shirts are 30% off, and members get an extra 10% off the sale price. What is a member's total discount from the original price?", ["37%", "40%", "33%", "27%"], ["Pay 0.70 × 0.90 = 0.63 of the price", "Discount: 1 − 0.63 = 0.37 = 37%"]);
  mc("e1", "A car uses 3 gallons of gas every 87 miles. At this rate, how many gallons does it need for 203 miles?", ["7", "6", "8", "5.9"], ["87 ÷ 3 = 29 miles per gallon", "203 ÷ 29 = 7"]);
  mc("e1", "What is 2/3 ÷ 4/9?", ["3/2", "8/27", "2/3", "6/7"], ["Multiply by the reciprocal: 2/3 × 9/4", "18/12 = 3/2"]);
  mc("e1", "$2,000 earns 5% interest per year, compounded yearly. What is it worth after 2 years?", ["$2,205", "$2,200", "$2,100", "$2,210.25"], ["2,000 × 1.05 × 1.05", "= 2,205"]);
}});

Study.extendUnit("actm", "sp", {problems(k){
  const mc = make(k);
  mc("s1", "The mean of 4 test scores is 85. What score on a 5th test would raise the mean to 87?", ["95", "87", "89", "91"], ["Total needed: 5 × 87 = 435", "Current total: 4 × 85 = 340", "435 − 340 = 95"]);
  mc("s1", "What is the range of 3, 5, 5, 6, 8 and 9?", ["6", "5", "9", "3"], ["Range = largest − smallest = 9 − 3"]);
  mc("s1", "The median of 2, 4, 6, 8 and 100 is 6. Which change would change the median?", ["Adding a sixth value, 50", "Replacing 100 with 10", "Replacing 2 with 0", "Replacing 8 with 9"], ["With six values, the median is the mean of the 3rd and 4th: (6 + 8)/2 = 7", "The other changes leave 6 in the middle."]);
  mc("s1", "For the data set 2, 4, 6, 8 and 100, which measure best describes a typical value?", ["The median, because 100 is an outlier", "The mean, because it uses every value", "The range, because the data are spread out", "The mode, because every value appears once"], ["The outlier 100 pulls the mean up to 24.", "The median, 6, stays in the middle of the typical values."]);
  mc("s1", "In a random survey of 200 students, 54 said they walk to school. About how many of the school's 1,500 students walk?", ["405", "270", "540", "1,446"], ["54/200 = 0.27", "0.27 × 1,500 = 405"]);
  mc("s2", "A bag has 5 red, 3 blue and 2 green marbles. One is drawn at random. What is the probability that it is not red?", ["1/2", "1/5", "3/10", "1/3"], ["Not red: 3 + 2 = 5 of 10 marbles", "5/10 = 1/2"]);
  mc("s2", "Two marbles are drawn without replacement from a bag of 5 red and 3 blue marbles. What is the probability that both are red?", ["5/14", "25/64", "5/8", "1/4"], ["First red: 5/8. Second red: 4/7", "5/8 × 4/7 = 20/56 = 5/14"]);
  mc("s2", "In how many ways can a president and a vice president be chosen from 10 club members?", ["90", "45", "20", "100"], ["Order matters: 10 choices, then 9", "10 × 9 = 90"]);
  mc("s2", "A spinner has 4 equal sections numbered 1 to 4. It is spun twice. What is the probability that both results are even?", ["1/4", "1/2", "1/8", "1/16"], ["P(even) = 2/4 = 1/2 each spin", "1/2 × 1/2 = 1/4"]);
  mc("s2", "In a class, 60% of the students play a sport, and 25% of those also play an instrument. What percent of the class does both?", ["15%", "85%", "35%", "25%"], ["25% of 60%: 0.25 × 0.60 = 0.15"]);
}});

Study.extendUnit("actm", "nq", {problems(k){
  const mc = make(k);
  mc("n1", "What is (3 + 2i)(1 − i), where i² = −1?", ["5 − i", "1 − i", "3 − 2i", "5 + i"], ["3 − 3i + 2i − 2i²", "= 3 − i + 2 = 5 − i"]);
  mc("n1", "Which is equal to √72?", ["6√2", "8√3", "36√2", "2√6"], ["72 = 36 × 2", "√36 × √2 = 6√2"]);
  mc("n1", "What is |−7| − |3 − 10|?", ["0", "14", "−14", "4"], ["|−7| = 7 and |3 − 10| = |−7| = 7", "7 − 7 = 0"]);
  mc("n1", "What is (3.2 × 10⁵) ÷ (8 × 10²)?", ["400", "4,000", "40", "0.4"], ["3.2 ÷ 8 = 0.4 and 10⁵ ÷ 10² = 10³", "0.4 × 1,000 = 400"]);
  mc("n2", "Vector u = ⟨3, −2⟩ and vector v = ⟨−1, 5⟩. What is u + v?", ["⟨2, 3⟩", "⟨4, −7⟩", "⟨−3, −10⟩", "⟨2, −7⟩"], ["Add matching parts: ⟨3 + (−1), −2 + 5⟩", "= ⟨2, 3⟩"]);
  mc("n2", "What is the magnitude of the vector ⟨6, 8⟩?", ["10", "14", "48", "√14"], ["√(6² + 8²) = √100", "= 10"]);
  mc("n2", "Matrix A has 2 rows and 3 columns, and matrix B has 3 rows and 4 columns. What are the dimensions of AB?", ["2 × 4", "3 × 3", "4 × 2", "AB is not defined"], ["The inner numbers match (3 and 3), so AB exists.", "The outer numbers give its size: 2 × 4"]);
  mc("n2", "What is the determinant of the 2 × 2 matrix with first row 4, 3 and second row 2, 5?", ["14", "26", "−14", "7"], ["ad − bc = 4(5) − 3(2)", "20 − 6 = 14"]);
}});
})();
