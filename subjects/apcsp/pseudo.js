/* AP Computer Science Principles: AP exam pseudocode, plus more "which error" practice.
   The class codes in CMU CS Academy (Python), but the AP exam writes code in its own pseudocode,
   defined on the official exam reference sheet: ← for assignment, DISPLAY, MOD, RANDOM(a, b),
   IF/ELSE, REPEAT n TIMES, REPEAT UNTIL, FOR EACH, lists that start at index 1, INSERT/APPEND/
   REMOVE/LENGTH, and PROCEDURE/RETURN. Questions are original; every trace was worked by hand. */
(() => {
const AP = "AP exam style", PY = "AP CSP practice";
const TYPES = ["Syntax error", "Logic error", "Runtime error", "Overflow error"];
const GOAL = g => `Goal: ${g}. Which kind of error is this?`;

Study.addUnit("apcsp", {
  id: "ps", name: "AP Exam Pseudocode", short: "Pseudocode",
  sections: [
    {id:"p1", name:"Variables, MOD and RANDOM"},
    {id:"p2", name:"IF, AND, OR, NOT"},
    {id:"p3", name:"REPEAT loops"},
    {id:"p4", name:"Lists and FOR EACH"},
    {id:"p5", name:"Procedures"},
    {id:"p6", name:"Finding the bug"}
  ],
  notes: {
    p1: [
      {sum:["The AP exam doesn't use Python. It uses its own pseudocode, and a reference sheet is given during the test.",
            "a ← 5 stores 5 in a. It is NOT a comparison. In Python this is a = 5.",
            "DISPLAY(x) shows x followed by a space. INPUT() reads a value from the user.",
            "a MOD b is the remainder: 17 MOD 5 = 2. RANDOM(a, b) gives a whole number from a to b, including both ends."]},
      {table:{head:["AP pseudocode", "CMU / Python"], rows:[["a ← 5", "a = 5"], ["DISPLAY(a)", "print(a)"], ["a MOD b", "a % b"], ["a = b (compare)", "a == b"], ["a ≠ b", "a != b"], ["RANDOM(1, 6)", "randrange(1, 7)"]]}},
      {ex:{q:"a ← 5, b ← 3, a ← a + b, b ← a − b. What are a and b?", a:["a becomes 5 + 3 = 8.", "b uses the NEW a: 8 − 3 = 5.", "a = 8, b = 5."]}},
      {tip:"Trace with a table: one column per variable, one row per line. Cross out old values as they change."},
      {check:[{q:"23 MOD 4?", a:"3."}, {q:"Can RANDOM(1, 6) give 6?", a:"Yes, both ends are included."}]}
    ],
    p2: [
      {sum:["IF(condition) { … } ELSE { … } runs exactly one of the two blocks.",
            "AND is true only when both sides are true; OR is true when at least one is.",
            "NOT flips true and false. NOT(x > 10) means x ≤ 10."]},
      {ex:{q:"x ← 7. IF(x > 5) { x ← x − 5 } ELSE { x ← x + 5 }. What is x?", a:["7 > 5 is true, so only the first block runs.", "x = 2."]}},
      {warn:"The opposite of > is ≤, not <. NOT(x > 10) includes 10."},
      {check:[{q:"Is (4 > 3) AND (9 < 9) true?", a:"No. 9 < 9 is false."}]}
    ],
    p3: [
      {sum:["REPEAT n TIMES { … } runs the block exactly n times.",
            "REPEAT UNTIL(condition) { … } checks the condition FIRST and stops as soon as it's true. If it's already true, the block runs 0 times.",
            "If the condition can never become true, it's an infinite loop."]},
      {ex:{q:"n ← 1. REPEAT UNTIL(n > 20) { n ← n * 2 }. What is n after?", a:["n goes 1 → 2 → 4 → 8 → 16 → 32.", "32 > 20, so it stops. n = 32."]}},
      {warn:"REPEAT UNTIL is the opposite of Python's while: it loops while the condition is FALSE."},
      {check:[{q:"How many times does REPEAT UNTIL(x > 0) run if x starts at 5?", a:"Zero. The condition is checked first and is already true."}]}
    ],
    p4: [
      {sum:["Lists start at index 1 on the AP exam (Python starts at 0).",
            "aList[i] is the element at index i. An index below 1 or above LENGTH(aList) is an error.",
            "APPEND(aList, v) adds to the end. INSERT(aList, i, v) puts v at index i and shifts the rest right. REMOVE(aList, i) deletes index i and shifts the rest left.",
            "FOR EACH item IN aList { … } visits every element in order."]},
      {ex:{q:"list ← [3, 8, 1]. APPEND(list, 5). INSERT(list, 1, 9). What is list?", a:["After APPEND: [3, 8, 1, 5].", "INSERT at index 1 puts 9 first: [9, 3, 8, 1, 5]."]}},
      {warn:"Coming from Python, the #1 mistake is using index 0. On the exam, list[1] is the first element."},
      {check:[{q:"list ← [10, 20, 30]. What is list[3]?", a:"30."}, {q:"What does REMOVE(list, 1) do to [10, 20, 30]?", a:"It becomes [20, 30]."}]}
    ],
    p5: [
      {sum:["PROCEDURE name(parameters) { … } defines reusable steps. RETURN(x) sends a value back and ends the procedure.",
            "Calling double(double(3)) works inside-out: double(3) = 6, then double(6) = 12.",
            "Changing a number parameter inside a procedure doesn't change the variable that was passed in."]},
      {ex:{q:"PROCEDURE f(a, b) { IF(a > b) { RETURN(a − b) } RETURN(b − a) }. What is f(3, 10)?", a:["3 > 10 is false, so the first RETURN is skipped.", "RETURN(10 − 3) = 7."]}},
      {check:[{q:"Why use parameters?", a:"To run the same steps with different values."}]}
    ],
    p6: [
      {sum:["The AP exam asks you to spot why code gives the wrong result, and to pick the fix.",
            "Common bugs: an off-by-one loop or index, > where ≥ was needed, starting a maximum at 0, dividing by the wrong count.",
            "Test with small inputs where you already know the right answer, including edge cases like negatives or an exact boundary."]},
      {ex:{q:"A procedure finds the largest value in a list but starts with best ← 0. When is it wrong?", a:["If every value is negative, nothing beats 0.", "It returns 0, which isn't even in the list.", "Fix: start with best ← aList[1]."]}},
      {check:[{q:"A loop should visit indexes 1 to LENGTH(list). It runs until i > LENGTH(list) + 1. What goes wrong?", a:"It tries index LENGTH(list) + 1, which is out of range: an error."}]}
    ]
  },
  problems(k){
    const code = (sec, c, text, opts, why) => k.choice([sec], AP, text, opts, opts[0], [].concat(why), {shuffle:true, code:c});
    const num = (sec, c, text, ans, why) => k.ask([sec], AP, text, [{l:"Answer", t:"num", a:String(ans), ph:"number"}], [].concat(why), {code:c});
    const mc = (sec, text, opts, why) => k.choice([sec], AP, text, opts, opts[0], [].concat(why), {shuffle:true});
    const SHOW = "What is displayed?";

    /* ---- p1 ---- */
    code("p1", "a ← 5\nb ← 3\na ← a + b\nb ← a - b\nDISPLAY(a)\nDISPLAY(b)", SHOW, ["8 5", "8 3", "5 3", "5 8"], ["a becomes 8.", "b uses the new a: 8 − 3 = 5."]);
    num("p1", "x ← 17 MOD 5\nDISPLAY(x)", SHOW, 2, ["17 = 3 × 5 + 2. The remainder is 2."]);
    code("p1", "x ← 10\ny ← x\nx ← 20\nDISPLAY(y)", SHOW, ["10", "20", "30", "An error"], ["y got a copy of 10. Changing x later doesn't change y."]);
    code("p1", "a ← 1\nb ← 2\nc ← 3\na ← b\nb ← c\nc ← a\nDISPLAY(a)\nDISPLAY(b)\nDISPLAY(c)", SHOW, ["2 3 2", "2 3 1", "3 1 2", "1 2 3"], ["a ← 2, then b ← 3, then c ← a, which is now 2."]);
    mc("p1", "Which expression is true exactly when the whole number n is even?", ["n MOD 2 = 0", "n MOD 2 = 1", "n / 2 = 0", "n MOD 0 = 2"], ["Even numbers leave remainder 0 when divided by 2."]);
    num("p1", "count ← 7\ncount ← count * 2 - 4\nDISPLAY(count)", SHOW, 10, ["7 × 2 − 4 = 10."]);
    mc("p1", "Which values can RANDOM(1, 6) produce?", ["Whole numbers 1 through 6", "Whole numbers 1 through 5 only", "Any decimal between 1 and 6", "Only the two numbers 1 and 6"], ["Both ends are included, like a die."]);
    num("p1", "x ← 29 MOD 10\ny ← 29 MOD 3\nDISPLAY(x + y)", SHOW, 11, ["29 MOD 10 = 9 and 29 MOD 3 = 2.", "9 + 2 = 11."]);

    /* ---- p2 ---- */
    num("p2", "x ← 7\nIF(x > 5)\n{\n   x ← x - 5\n}\nELSE\n{\n   x ← x + 5\n}\nDISPLAY(x)", SHOW, 2, ["7 > 5, so x ← 7 − 5 = 2. The ELSE block is skipped."]);
    code("p2", "a ← 4\nb ← 9\nIF(a > 3 AND b < 9)\n{\n   DISPLAY(\"yes\")\n}\nELSE\n{\n   DISPLAY(\"no\")\n}", SHOW, ["no", "yes", "yes no", "Nothing"], ["9 < 9 is false, so the AND is false."]);
    code("p2", "score ← 85\nIF(score ≥ 90)\n{\n   grade ← \"A\"\n}\nELSE\n{\n   IF(score ≥ 80)\n   {\n      grade ← \"B\"\n   }\n   ELSE\n   {\n      grade ← \"C\"\n   }\n}\nDISPLAY(grade)", SHOW, ["B", "A", "C", "A B"], ["85 ≥ 90 is false, so go to the ELSE.", "85 ≥ 80 is true: B."]);
    mc("p2", "Which expression means the same as NOT(x > 10)?", ["x ≤ 10", "x < 10", "x ≥ 10", "x > −10"], ["The opposite of \"greater than\" includes equal: ≤."]);
    num("p2", "x ← 3\nIF(x = 3 OR x > 100)\n{\n   x ← x * 2\n}\nIF(x > 5)\n{\n   x ← x + 1\n}\nDISPLAY(x)", SHOW, 7, ["x = 3 is true, so x ← 6.", "These are two separate IFs: 6 > 5, so x ← 7."]);
    code("p2", "temp ← 65\nIF(temp < 50 OR temp > 90)\n{\n   DISPLAY(\"stay in\")\n}\nELSE\n{\n   DISPLAY(\"go out\")\n}", SHOW, ["go out", "stay in", "stay in go out", "Nothing"], ["65 < 50 is false and 65 > 90 is false, so the OR is false."]);

    /* ---- p3 ---- */
    num("p3", "total ← 0\nREPEAT 4 TIMES\n{\n   total ← total + 3\n}\nDISPLAY(total)", SHOW, 12, ["3 is added 4 times."]);
    num("p3", "n ← 1\nREPEAT UNTIL(n > 20)\n{\n   n ← n * 2\n}\nDISPLAY(n)", SHOW, 32, ["1 → 2 → 4 → 8 → 16 → 32.", "It stops once n > 20."]);
    code("p3", "count ← 0\nn ← 10\nREPEAT UNTIL(n = 0)\n{\n   n ← n - 3\n   count ← count + 1\n}\nDISPLAY(count)", "What happens?", ["The loop never ends", "It displays 3", "It displays 4", "The loop body never runs"], ["n goes 10, 7, 4, 1, −2, … and skips over 0.", "n = 0 never becomes true: an infinite loop."]);
    num("p3", "x ← 0\nREPEAT 3 TIMES\n{\n   REPEAT 2 TIMES\n   {\n      x ← x + 1\n   }\n}\nDISPLAY(x)", SHOW, 6, ["The inner loop runs 2 times for each of the 3 outer passes: 6."]);
    num("p3", "sum ← 0\nk ← 1\nREPEAT UNTIL(k > 5)\n{\n   sum ← sum + k\n   k ← k + 2\n}\nDISPLAY(sum)", SHOW, 9, ["k takes 1, 3, 5, then 7 stops the loop.", "1 + 3 + 5 = 9."]);
    mc("p3", "x is 5. How many times does the body of REPEAT UNTIL(x > 0) run?", ["0", "1", "5", "It loops forever"], ["The condition is checked first. It's already true, so the body is skipped."]);
    num("p3", "a ← 100\nsteps ← 0\nREPEAT UNTIL(a < 10)\n{\n   a ← a / 2\n   steps ← steps + 1\n}\nDISPLAY(steps)", SHOW, 4, ["100 → 50 → 25 → 12.5 → 6.25.", "6.25 < 10 after 4 steps."]);

    /* ---- p4 ---- */
    num("p4", "list ← [10, 20, 30, 40]\nDISPLAY(list[2])", SHOW, 20, ["AP lists start at 1: list[1] = 10, list[2] = 20."]);
    code("p4", "list ← [3, 8, 1]\nAPPEND(list, 5)\nINSERT(list, 1, 9)\nDISPLAY(list)", SHOW, ["[9, 3, 8, 1, 5]", "[3, 9, 8, 1, 5]", "[9, 8, 1, 5]", "[3, 8, 1, 5, 9]"], ["APPEND: [3, 8, 1, 5].", "INSERT at 1 puts 9 at the front and shifts the rest."]);
    num("p4", "list ← [4, 7, 2, 9]\nREMOVE(list, 2)\nDISPLAY(LENGTH(list))", SHOW, 3, ["Removing one element leaves 3."]);
    num("p4", "list ← [4, 7, 2, 9]\nREMOVE(list, 2)\nDISPLAY(list[2])", SHOW, 2, ["REMOVE index 2 deletes 7: [4, 2, 9].", "list[2] is now 2."]);
    num("p4", "nums ← [2, 5, 1, 6]\ntotal ← 0\nFOR EACH n IN nums\n{\n   IF(n > 2)\n   {\n      total ← total + n\n   }\n}\nDISPLAY(total)", SHOW, 11, ["Only 5 and 6 are greater than 2.", "5 + 6 = 11."]);
    code("p4", "list ← [5, 6, 7]\nDISPLAY(list[4])", "What happens?", ["An error (index out of range)", "It displays 7, the last element", "It displays 0, since nothing is there", "It wraps around and displays 5"], ["The list has 3 elements, so index 4 doesn't exist."]);
    mc("p4", "On the AP exam, what is the index of the first element of a list?", ["1", "0", "−1", "It depends on the list's length"], ["AP pseudocode starts at 1. (Python starts at 0.)"]);
    num("p4", "nums ← [3, 9, 4, 9, 2]\nbest ← nums[1]\nFOR EACH n IN nums\n{\n   IF(n > best)\n   {\n      best ← n\n   }\n}\nDISPLAY(best)", SHOW, 9, ["best starts at 3, becomes 9, and nothing beats 9."]);
    num("p4", "words ← [\"cat\", \"dog\", \"cat\", \"emu\"]\ncount ← 0\nFOR EACH w IN words\n{\n   IF(w = \"cat\")\n   {\n      count ← count + 1\n   }\n}\nDISPLAY(count)", SHOW, 2, ["\"cat\" appears twice."]);
    code("p4", "a ← [1, 2, 3]\nb ← []\nFOR EACH x IN a\n{\n   INSERT(b, 1, x)\n}\nDISPLAY(b)", SHOW, ["[3, 2, 1]", "[1, 2, 3]", "[1, 1, 1]", "[3, 3, 3]"], ["Each value goes to the front: [1], then [2, 1], then [3, 2, 1]."]);

    /* ---- p5 ---- */
    num("p5", "PROCEDURE double(x)\n{\n   RETURN(x * 2)\n}\nDISPLAY(double(double(3)))", SHOW, 12, ["Inside first: double(3) = 6.", "double(6) = 12."]);
    num("p5", "PROCEDURE f(a, b)\n{\n   IF(a > b)\n   {\n      RETURN(a - b)\n   }\n   RETURN(b - a)\n}\nDISPLAY(f(3, 10))", SHOW, 7, ["3 > 10 is false.", "RETURN(10 − 3) = 7."]);
    code("p5", "PROCEDURE addOne(n)\n{\n   n ← n + 1\n}\nx ← 5\naddOne(x)\nDISPLAY(x)", SHOW, ["5", "6", "An error", "Nothing"], ["The procedure changes its own copy, n. x is still 5.", "It also doesn't RETURN anything."]);
    mc("p5", "What is the main reason to write a procedure with parameters?", ["To reuse the same steps with different values", "To guarantee the program can never have an error", "To store many values under a single name", "To make a block of code repeat forever"], ["Storing many values under one name is what a list does."]);
    code("p5", "PROCEDURE countDown(n)\n{\n   REPEAT UNTIL(n = 0)\n   {\n      DISPLAY(n)\n      n ← n - 1\n   }\n}\ncountDown(3)", SHOW, ["3 2 1", "3 2 1 0", "2 1 0", "1 2 3"], ["It displays n, then subtracts: 3, 2, 1.", "When n hits 0 the loop stops before displaying it."]);
    num("p5", "PROCEDURE sumTo(n)\n{\n   total ← 0\n   i ← 1\n   REPEAT n TIMES\n   {\n      total ← total + i\n      i ← i + 1\n   }\n   RETURN(total)\n}\nDISPLAY(sumTo(4))", SHOW, 10, ["1 + 2 + 3 + 4 = 10."]);

    /* ---- p6 ---- */
    const bug = (c, text, opts, why) => code("p6", c, text, opts, why);
    bug("nums ← [80, 90, 100]\nsum ← 0\nFOR EACH n IN nums\n{\n   sum ← sum + n\n}\nDISPLAY(sum / 2)", "The goal is to display the average. What is wrong?", ["It divides by 2, not LENGTH(nums)", "The loop skips the first element", "sum should start at 1 instead of 0", "Nothing is wrong; it displays 90"], ["It shows 270 / 2 = 135, not 90.", "Divide by LENGTH(nums)."]);
    bug("i ← 1\nREPEAT UNTIL(i > LENGTH(list) + 1)\n{\n   DISPLAY(list[i])\n   i ← i + 1\n}", "The goal is to display every element. What goes wrong?", ["It goes past the end of the list", "It skips the first element of the list", "It loops forever without stopping", "It displays nothing at all"], ["It stops at i > LENGTH + 1, so it reaches i = LENGTH + 1, which is out of range.", "The condition should be i > LENGTH(list)."]);
    bug("count ← 0\nFOR EACH n IN nums\n{\n   IF(n > 50)\n   {\n      count ← count + 1\n   }\n}", "The goal is to count numbers that are at least 50. For which list is the result wrong?", ["[50, 60, 70]", "[10, 20, 30]", "[51, 52, 53]", "[]"], ["50 is \"at least 50\" but 50 > 50 is false.", "It should be n ≥ 50."]);
    mc("p6", "A procedure finds the largest value in a list but starts with best ← 0. For which list does it give a wrong answer?", ["[−5, −2, −9]", "[3, 8, 1]", "[0, 4, 4]", "[10, 10, 10]"], ["Nothing in [−5, −2, −9] beats 0, so it returns 0.", "Start with best ← aList[1] instead."]);
    bug("x ← 1\nREPEAT UNTIL(x = 10)\n{\n   x ← x + 2\n}", "What happens when this runs?", ["It never stops", "It stops once x is 10", "It stops once x is 9", "The loop body never runs"], ["x is always odd: 1, 3, 5, 7, 9, 11, …", "x = 10 is never true. Use x ≥ 10 instead."]);
    mc("p6", "Which test would best catch a program that uses > when it should use ≥?", ["A value exactly on the boundary", "A very large value, like a million", "A list that has only one element", "A negative value, like −50"], ["> and ≥ only disagree when the two sides are equal."]);
  }
});

/* more "which error" practice in CMU CS Academy Python: the goal is always given, and no comments or names hint at the answer */
Study.extendUnit("apcsp", "py", {problems(k){
  const kind = (sec, goal, c, ans, why) => k.choice([sec], PY, GOAL(goal), [ans].concat(TYPES.filter(t => t !== ans)), ans, [].concat(why), {shuffle:true, code:c});
  kind("e2", "move the dot right 5 pixels every step", "dot = Circle(50, 200, 20)\n\ndef onStep():\n    dot.centerX = 5", "Logic error", ["It runs, but it sets centerX to 5 every step instead of adding 5.", "It should be dot.centerX += 5."]);
  kind("e2", "turn the background red when the mouse is pressed", "bg = Rect(0, 0, 400, 400)\n\ndef onMousePress(x, y):\n    bg.fill == 'red'", "Logic error", ["== compares and throws the result away; nothing changes and nothing crashes.", "It should be bg.fill = 'red'."]);
  kind("e2", "a green square in the center of a 400 by 400 canvas", "Rect(200, 200, 100, 100, fill='green')", "Logic error", ["(200, 200) is where the top-left corner goes, so the square sits right of and below center.", "Centered would be Rect(150, 150, 100, 100)."]);
  kind("e3", "show the number of lives at the top", "lives = 3\nLabel('Lives: ' + lives, 200, 30)", "Runtime error", ["Adding a string and a number crashes when the line runs (TypeError).", "Use str(lives)."]);
  kind("e3", "count how many times the mouse is pressed", "clicks = 0\n\ndef onMousePress(x, y):\n    clicks += 1", "Runtime error", ["The program starts fine. On the first click, Python treats clicks as a new local variable that has no value yet and crashes (UnboundLocalError).", "CMU uses app.clicks for values that change in events."]);
  kind("e3", "show the first word in the list", "words = ['hi', 'there']\nLabel(words[2], 200, 200)", "Runtime error", ["Python lists start at 0, so the valid indexes are 0 and 1.", "words[2] crashes with an IndexError."]);
  kind("e1", "draw a row of 4 squares", "for i in range(4):\nRect(i * 100, 0, 90, 90)", "Syntax error", ["The loop body has to be indented (IndentationError), so nothing runs."]);
  kind("e1", "a blue circle in the middle", "Circle(200, 200, 50, fill='blue'))", "Syntax error", ["There's an extra closing parenthesis."]);
  kind("e1", "show Hello where the mouse is pressed", "def onMousePress(x, y):\n    Label('Hello', x, y", "Syntax error", ["The parenthesis after Label is never closed."]);
  kind("e4", "a circle whose radius is 2 raised to the number of steps", "steps = 1100\nr = 2.0 ** steps\nCircle(200, 200, r)", "Overflow error", ["`2.0 ** 1100` is about 10³³¹, past the largest decimal Python can store (about 1.8 × 10³⁰⁸)."]);
}});
})();
