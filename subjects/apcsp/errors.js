/* AP Computer Science Principles: types of errors in Python (CMU CS Academy)
   From the class slides "APCSP W7D2": syntax errors, logical errors, runtime errors (a string passed
   where a number is needed; math.sqrt of a negative number) and overflow errors, with the slides' code
   examples. Extra examples use the same CMU graphics shapes (Rect, Circle, Label, onMousePress).
   The "AP definitions" notes connect these to the terms on the AP exam. */
(() => {
const {ri, pick} = POLY;
const SL = "W7D2 slides", AP = "AP CSP practice";
const TYPES = ["Syntax error", "Logic error", "Runtime error", "Overflow error"];
const WHICH = "Which kind of error is this?";
const GOAL = g => `Goal: ${g}. Which kind of error is this?`;

Study.addUnit("apcsp", {
  id: "py", name: "Python: Types of Errors", short: "Errors",
  sections: [
    {id:"e1", name:"Syntax Errors"},
    {id:"e2", name:"Logic Errors"},
    {id:"e3", name:"Runtime Errors"},
    {id:"e4", name:"Overflow Errors"},
    {id:"e5", name:"Which Error Is It?"}
  ],
  notes: {
    e1: [
      {sum:["A syntax error breaks the grammar rules of Python.", "The interpreter catches it immediately, and the code refuses to run at all. Nothing is drawn.", "Common causes: a missing parenthesis, a missing colon, an unclosed quote, a misspelled keyword, wrong indentation."]},
      {p:"Python reads your whole program before it runs anything. If any line can't be understood, it stops right there with a `SyntaxError` and points at the line where it got confused."},
      {code:"# ERROR: SyntaxError - unexpected EOF while parsing (missing closing parenthesis)\nRect(0, 0, 400, 400, fill='blue'\nCircle(200, 200, 50, fill='yellow')"},
      {p:"The first line never closes its parenthesis, so Python keeps reading, hits the end of the file, and gives up. Even the `Circle` on the next line, which is fine, never runs."},
      {code:"# ERROR: SyntaxError - expected ':'\ndef onMousePress(mouseX, mouseY)\n    Circle(mouseX, mouseY, 20, fill='red')"},
      {p:"Every `def`, `if`, `elif`, `else`, `for` and `while` line must end with a colon."},
      {tip:"The line Python reports is where it noticed the problem, which can be the line *after* the real mistake. If a line looks fine, check the end of the line above it."},
      {check:[{q:"`Label('Score, 200, 50)` has what problem?", a:"The string is never closed: the quote after Score is missing. That's a syntax error."}, {q:"If line 30 has a syntax error, do lines 1 to 29 run?", a:"No. With a syntax error, nothing runs."}]}
    ],
    e2: [
      {sum:["A logic error means the syntax is 100% correct, but the program does something you didn't intend.", "It runs without crashing, so Python gives you no error message. You only notice because the canvas looks wrong.", "Common causes: drawing shapes in the wrong order, wrong coordinates, the wrong comparison (> instead of >=), the wrong math."]},
      {code:"# INTENT: Draw a black eye on top of a white head.\n# LOGIC ERROR: The large white head is drawn SECOND, completely covering the eye\nCircle(200, 200, 10, fill='black')  # Eye\nCircle(200, 200, 80, fill='white')  # Head (covers the eye entirely)"},
      {p:"In CMU graphics, shapes are drawn in the order the lines run, and each new shape goes **on top**. The fix is to swap the two lines so the head is drawn first."},
      {h:"Other logic errors"},
      {steps:["Swapping x and y: `Circle(50, 300, 20)` puts a circle near the bottom left, not the top right.", "Off by one: `if score > 10:` skips a score of exactly 10 when you meant `>=`.", "Wrong math: averaging with `a + b / 2` divides only b, because division happens first. You need `(a + b) / 2`."]},
      {tip:"Logic errors are the hardest to find, because nothing tells you where they are. Test with values where you know the right answer, and compare."},
      {check:[{q:"A program runs, but a label shows the wrong total. What kind of error?", a:"A logic error: it ran, but did the wrong thing."}]}
    ],
    e3: [
      {sum:["A runtime error means the syntax is correct, but the program crashes partway through when a line can't be carried out.", "Lines before the error have already run; the program stops at the bad line.", "Common causes in this unit: a function called with bad arguments, like a string where a number belongs, or a number outside a function's domain."]},
      {h:"Example A: a string instead of a number (TypeError)"},
      {code:"def drawTarget(x, y, radius):\n    # This line is syntactically fine.\n    # But it will CRASH at runtime if radius is a string because you can't subtract\n    Circle(x, y, radius, fill='red')\n    Circle(x, y, radius - 20, fill='white')\n\n# RUNTIME ERROR: TypeError (Can't subtract int from str)\ndrawTarget(200, 200, '100')"},
      {p:"The quotation marks make `'100'` a string, not a number. Python can't do `'100' - 20`, so it crashes on that line. Remove the quotes: `drawTarget(200, 200, 100)`."},
      {h:"Example B: outside a function's domain"},
      {code:"import math\n\ndef drawEyeball(distanceX):\n    # math.sqrt only accepts numbers >= 0.\n    pupilSize = math.sqrt(distanceX) * 5\n    Circle(200, 200, 50, fill='white')\n    Circle(200, 200, pupilSize, fill='blue')\n\ndrawEyeball(16)   # works: 16 is in the valid domain\ndrawEyeball(-25)  # RUNTIME ERROR: -25 is outside the domain of square roots"},
      {p:"The syntax is fine and the first call works. The second call crashes mid-execution with `ValueError: math domain error`."},
      {table:{head:["Error message", "What caused it"], rows:[["TypeError", "Mixing types, like a string and a number"], ["ValueError: math domain error", "A math function given a value it can't handle, like the square root of a negative"], ["ZeroDivisionError", "Dividing by zero"], ["NameError", "Using a variable or function name that doesn't exist, often a typo"]]}},
      {check:[{q:"Why is a misspelled variable name usually a runtime error, not a syntax error?", a:"The line follows Python's grammar. Python only finds out the name doesn't exist when it tries to run that line."}]}
    ],
    e4: [
      {sum:["An overflow error happens when a calculation produces a number too big for the computer to store.", "In CMU CS Academy this is an OverflowError, usually from a huge decimal (floating-point) number.", "It's a kind of runtime error: the code is valid, but crashes when the calculation runs."]},
      {code:"def drawMegaCircle(sizeMultiplier):\n    # Python cannot calculate 10.0 to a massive power as a float\n    hugeRadius = 10.0 ** sizeMultiplier\n    Circle(200, 200, hugeRadius, fill='purple')\n\n# RUNTIME OVERFLOW ERROR: OverflowError: (34, 'Result too large')\ndrawMegaCircle(1000)"},
      {p:"`10.0 ** 1000` is a 1 followed by a thousand zeros, as a decimal. Decimals in Python are stored in a fixed number of bits, and the largest one is about 1.8 × 10³⁰⁸. Anything bigger overflows."},
      {h:"The AP definition"},
      {p:"The AP exam defines an **overflow error** as an error that happens when a computer tries to handle a number outside the range it can represent with a fixed number of bits. For example, if a language stores whole numbers in 8 bits, the largest is 255, so 255 + 1 overflows."},
      {warn:"Python's whole numbers (integers) can grow as big as memory allows, so `10 ** 1000` without the decimal point works fine. The overflow comes from the decimal `10.0`."},
      {check:[{q:"Does `drawMegaCircle(300)` overflow?", a:"No. `10.0 ** 300` is about 10³⁰⁰, under the limit of about 1.8 × 10³⁰⁸."}, {q:"What is the largest number 4 bits can store?", a:"15 (binary 1111)."}]}
    ],
    e5: [
      {sum:["Ask two questions: does the code run at all, and if it runs, does it crash?", "Doesn't run at all → syntax error. Runs, then crashes → runtime error (an overflow error is one kind). Runs to the end but looks wrong → logic error.", "The error message, if there is one, names the type: SyntaxError, TypeError, ValueError, OverflowError."]},
      {table:{head:["", "Runs at all?", "Crashes?", "Error message?"], rows:[["Syntax error", "No", "Before starting", "Yes, SyntaxError"], ["Runtime error", "Yes", "Partway through", "Yes, e.g. TypeError"], ["Overflow error", "Yes", "When the big number is made", "Yes, OverflowError"], ["Logic error", "Yes", "No", "No, the output is just wrong"]]}},
      {p:"For the project rubric, a program with no syntax or runtime errors still loses points if it has logic errors, since what's on the canvas has to match what you planned."},
      {check:[{q:"Your program draws everything, but the sun is green. Which error?", a:"Logic error."}]}
    ]
  },
  problems(k){
    const code = (sec, src, c, text, opts, why) => k.choice([sec], src, text, opts, opts[0], [].concat(why), {shuffle:true, code:c});
    // every "which kind" question states the goal, so having a goal never gives the answer away
    const kind = (sec, src, goal, c, ans, why) => code(sec, src, c, GOAL(goal), [ans].concat(TYPES.filter(t => t !== ans)), why);
    const mc = (sec, src, text, opts, why) => k.choice([sec], src, text, opts, opts[0], [].concat(why), {shuffle:true});

    /* ---- e1 syntax ---- */
    kind("e1", SL, "a blue background with a yellow circle", "Rect(0, 0, 400, 400, fill='blue'\nCircle(200, 200, 50, fill='yellow')", "Syntax error", ["The first line never closes its parenthesis.", "Python can't parse the program, so nothing runs."]);
    kind("e1", SL, "draw a red dot wherever the mouse is pressed", "def onMousePress(mouseX, mouseY)\n    Circle(mouseX, mouseY, 20, fill='red')", "Syntax error", ["The def line is missing its colon."]);
    code("e1", SL, "def onMousePress(mouseX, mouseY)\n    Circle(mouseX, mouseY, 20, fill='red')", "What is the fix?", ["Add a colon at the end of the `def` line", "Put quotes around `mouseX` and `mouseY`", "Change the word `def` to `function`", "Remove the indentation before `Circle`"], ["Every def line ends with a colon."]);
    code("e1", SL, "Rect(0, 0, 400, 400, fill='blue'\nCircle(200, 200, 50, fill='yellow')\nLabel('Hello', 200, 300)", "What appears on the canvas when this runs?", ["Nothing: the program doesn't run", "Only the blue rectangle, then it stops", "The rectangle and the circle", "Everything except the label"], ["A syntax error anywhere stops the whole program before it starts."]);
    kind("e1", AP, "show the word Score at the top", "Label('Score, 200, 50, size=20)", "Syntax error", ["The string 'Score is never closed with a quote."]);
    kind("e1", AP, "show a message once the score passes 10", "if score > 10\n    Label('You win!', 200, 200)", "Syntax error", ["The if line is missing its colon."]);
    kind("e1", AP, "show Game over when there are no lives left", "if lives = 0:\n    Label('Game over', 200, 200)", "Syntax error", ["A single = assigns a value. Comparing needs ==.", "Python doesn't allow an assignment there, so it's a syntax error."]);
    code("e1", AP, "def drawSun():\nCircle(350, 50, 40, fill='gold')", "What is wrong?", ["The `Circle` line must be indented under `def`", "The function name must start with a capital", "The color name must be written without any quotes", "`def` lines cannot end with a colon"], ["The body of a function is the indented lines below it. Without indentation, Python reports an IndentationError, a kind of syntax error."]);
    mc("e1", SL, "When does Python catch a syntax error?", ["Immediately, before any of the code runs", "Only when the line with the error is reached", "Only after the program has finished running", "Never: syntax errors just make the output wrong"], ["From the slides: the interpreter catches it immediately and the code refuses to run at all."]);

    /* ---- e2 logic ---- */
    kind("e2", SL, "a black eye on top of a white head", "Circle(200, 200, 10, fill='black')\nCircle(200, 200, 80, fill='white')", "Logic error", ["It runs without crashing, but the head is drawn second and covers the eye."]);
    code("e2", SL, "Circle(200, 200, 10, fill='black')\nCircle(200, 200, 80, fill='white')", "The goal is a black eye on top of a white head. How do you fix it?", ["Swap the two lines so the head is drawn first", "Make the eye's radius larger than the head's", "Change the head's color to black", "Add a third circle that is drawn in gray"], ["Later shapes go on top. Draw the head first, then the eye."]);
    code("e2", AP, "Rect(0, 0, 100, 100, fill='red')", "The goal is a red square in the top-right corner of a 400 by 400 canvas. The code runs. What is wrong?", ["It draws the square in the top-left corner", "It draws a circle instead of a square", "It crashes because 0 is not a valid position", "It doesn't run because of a missing colon"], ["Rect's first two numbers are the left and top. (0, 0) is the top-left corner. Top-right would be Rect(300, 0, 100, 100)."]);
    kind("e2", AP, "show Pass for a score of 70 or more", "if score > 70:\n    Label('Pass', 200, 200)", "Logic error", ["A score of exactly 70 should pass but doesn't. It should be >= 70.", "It runs without any error message."]);
    code("e2", AP, "a = 80\nb = 90\naverage = a + b / 2\nLabel(average, 200, 200)", "The label shows 125, not 85. Why?", ["Division happens before addition, so only b is divided", "The variables a and b were never given values", "Labels can only show text, never numbers or variables", "Python always rounds division up to the next ten"], ["a + b / 2 = 80 + 45 = 125.", "Use (a + b) / 2."]);
    kind("e2", AP, "grass along the bottom of a 400 by 400 canvas", "Rect(0, 0, 400, 50, fill='green')", "Logic error", ["The top of the canvas is y = 0, so this draws the strip along the top. Bottom would be Rect(0, 350, 400, 50)."]);
    mc("e2", SL, "Why are logic errors often the hardest to find?", ["The program runs normally, so there's no error message", "Python refuses to run any code that has them", "They only happen on computers that are very old or slow", "They always crash the program on the very first line"], ["Nothing points to the problem; you have to notice the output is wrong."]);
    mc("e2", AP, "Which is the best way to find a logic error?", ["Test with inputs where you already know the right result", "Wait for Python to show the line number of the error", "Add more colons at the ends of lines until it works", "Delete all the comments, since Python can misread them"], ["Compare what the program does with what it should do."]);

    /* ---- e3 runtime ---- */
    kind("e3", SL, "a red target with a white center", "def drawTarget(x, y, radius):\n    Circle(x, y, radius, fill='red')\n    Circle(x, y, radius - 20, fill='white')\n\ndrawTarget(200, 200, '100')", "Runtime error", ["The syntax is fine, but '100' is a string, and Python can't subtract 20 from a string. It crashes when that line runs."]);
    code("e3", SL, "def drawTarget(x, y, radius):\n    Circle(x, y, radius, fill='red')\n    Circle(x, y, radius - 20, fill='white')\n\ndrawTarget(200, 200, '100')", "How do you fix the error?", ["Remove the quotation marks around 100", "Put quotation marks around 200 and 200", "Add a colon after `drawTarget(200, 200, '100')`", "Change `radius - 20` to `radius + 20`"], ["Without the quotes, 100 is a number and the subtraction works."]);
    code("e3", SL, "def drawTarget(x, y, radius):\n    Circle(x, y, radius, fill='red')\n    Circle(x, y, radius - 20, fill='white')\n\ndrawTarget(200, 200, '100')", "What type of error message does Python show?", ["TypeError", "SyntaxError", "OverflowError", "NameError"], ["Mixing a string and a number in math is a TypeError."]);
    kind("e3", SL, "an eyeball whose pupil size depends on a distance", "import math\n\ndef drawEyeball(d):\n    pupil = math.sqrt(d) * 5\n    Circle(200, 200, 50, fill='white')\n    Circle(200, 200, pupil, fill='blue')\n\ndrawEyeball(-25)", "Runtime error", ["math.sqrt only accepts numbers ≥ 0. With −25, it crashes mid-execution (ValueError: math domain error)."]);
    code("e3", SL, "import math\n\ndef drawEyeball(distanceX):\n    pupilSize = math.sqrt(distanceX) * 5\n    Circle(200, 200, 50, fill='white')\n    Circle(200, 200, pupilSize, fill='blue')\n\ndrawEyeball(16)\ndrawEyeball(-25)", "What happens when this runs?", ["One eyeball is drawn, then it crashes", "Nothing is drawn at all, because Python finds the error before starting", "Both eyeballs are drawn, but the second has no pupil", "Both calls crash, because math.sqrt needs an integer"], ["drawEyeball(16) works: the square root of 16 is 4.", "drawEyeball(-25) crashes. Lines before a runtime error have already run."]);
    kind("e3", AP, "show the score on the screen", "score = 10\nLabel(scroe, 200, 200)", "Runtime error", ["`scroe` is a typo. The line is grammatical, so Python only discovers that the name doesn't exist when it runs the line (NameError)."]);
    kind("e3", AP, "find the average of the scores entered so far", "total = 0\ncount = 0\naverage = total / count", "Runtime error", ["Dividing by zero crashes when the line runs: ZeroDivisionError."]);
    mc("e3", SL, "What is true of every runtime error?", ["The code is valid, but it crashes while running", "Python refuses to run any of the code, even the lines before it", "The program finishes but the output is wrong", "It only happens when a number is too large to store"], ["Runtime errors crash mid-execution, after the program has started."]);
    code("e3", AP, "Rect(0, 0, 400, 400, fill='skyBlue')\nsize = '40'\nCircle(200, 200, size, fill='yellow')\nLabel('Sunny day', 200, 380)", "What is on the canvas when it stops?", ["Only the sky-blue rectangle", "Nothing at all", "The rectangle and the circle", "The rectangle and the label"], ["The rectangle is drawn, then the Circle line crashes because the radius is a string.", "The program stops there, so the label never appears."]);

    /* ---- e4 overflow ---- */
    kind("e4", SL, "a purple circle whose size grows with a level number", "def drawLevel(level):\n    r = 10.0 ** level\n    Circle(200, 200, r, fill='purple')\n\ndrawLevel(1000)", "Overflow error", ["`10.0 ** 1000` is a decimal too large for the computer to store: OverflowError."]);
    mc("e4", SL, "What causes an OverflowError in CMU CS Academy?", ["A calculation makes a decimal number too big to store", "A line of code is missing a closing parenthesis", "Shapes are drawn in the wrong order on the canvas", "A function is given a string where it needed a number"], ["The others describe a syntax error, a logic error and a TypeError."]);
    code("e4", AP, "def drawLevel(level):\n    r = 10.0 ** level\n    Circle(200, 200, r, fill='purple')", "Which call causes an OverflowError?", ["`drawLevel(400)`", "`drawLevel(3)`", "`drawLevel(100)`", "`drawLevel(300)`"], ["The largest decimal Python can store is about 1.8 × 10³⁰⁸.", "Only `10.0 ** 400` goes past that."]);
    mc("e4", AP, "On the AP exam, an overflow error is defined as an error that happens when", ["a number is outside the range that a fixed number of bits can represent", "a program is missing a symbol that the language's grammar requires", "a program runs without crashing but gives an unexpected result", "a decimal number gets rounded because it can't be stored exactly in binary"], ["The last choice describes a roundoff error, a different AP term."]);
    k.ask(["e4"], AP, "A language stores whole numbers in 8 bits. What is the largest number it can store?", [{l:"Largest", t:"num", a:"255", ph:"number"}], ["8 bits give 2⁸ = 256 values: 0 to 255."]);
    mc("e4", AP, "A language stores whole numbers in 8 bits. What happens when a program computes 255 + 1?", ["An overflow error, because 256 can't fit in 8 bits", "A syntax error, because 256 isn't a valid number in that language", "A logic error, because + should have been -", "Nothing: 8 bits can store any whole number"], ["256 needs 9 bits."]);
    mc("e4", AP, "Why does `10 ** 1000` work in Python while `10.0 ** 1000` causes an OverflowError?", ["Whole numbers can grow; decimals have a fixed size", "Python can't multiply by 10 more than 999 times", "The decimal point makes the whole line a syntax error in Python", "Whole numbers are always rounded down so that they fit"], ["Python integers have no fixed limit. Floats are stored in 64 bits."]);
    mc("e4", SL, "An overflow error is also a kind of", ["runtime error", "syntax error", "logic error", "roundoff error"], ["The code is valid and starts running; it crashes when the huge number is calculated."]);

    /* ---- e5 mixed ---- */
    mc("e5", SL, "A program doesn't run at all, and Python points to line 4. What kind of error is most likely?", ["Syntax error", "Logic error", "Runtime error", "Overflow error"], ["Only a syntax error stops the program before anything runs."]);
    mc("e5", SL, "A program draws half the scene, then stops with a TypeError. What kind of error is it?", ["Runtime error", "Syntax error", "Logic error", "Overflow error"], ["It started running and crashed partway through."]);
    mc("e5", SL, "A program runs to the end with no message, but the sun is drawn under the ground. What kind of error is it?", ["Logic error", "Runtime error", "Syntax error", "Overflow error"], ["No crash and no message, just the wrong result."]);
    mc("e5", SL, "Which kind of error produces no error message at all?", ["Logic error", "Syntax error", "Runtime error", "Overflow error"], ["The program does exactly what it was told; it was told the wrong thing."]);
    kind("e5", AP, "five circles in a row across the canvas", "for i in range(5)\n    Circle(50 + i * 75, 200, 30)", "Syntax error", ["The for line is missing its colon."]);
    kind("e5", AP, "five circles in a row across the canvas", "for i in range(5):\n    Circle(50, 200, 30)", "Logic error", ["It runs, but all five circles are drawn in the same spot. The x should change with i."]);
    kind("e5", AP, "a circle a little smaller than the size the user types", "radius = input('Radius? ')\nCircle(200, 200, radius - 5)", "Runtime error", ["input gives back a string. Subtracting 5 from a string crashes when the line runs (TypeError)."]);
    kind("e5", AP, "a circle whose radius is e to the power of the level", "import math\nlevel = 1000\nr = math.exp(level)\nCircle(200, 200, r)", "Overflow error", ["e¹⁰⁰⁰ is far too large for a decimal: OverflowError: math range error."]);
  },
  drills: {
    // name the error in a generated snippet
    e5: k => {
      const col = pick(["red", "blue", "gold", "green", "purple", "orange"]), x = ri(5, 35) * 10, y = ri(5, 35) * 10, r = ri(2, 8) * 10;
      const t = pick(TYPES);
      let c, why, g;
      if (t === "Syntax error"){
        const v = pick([0, 1, 2]);
        c = v === 0 ? `Circle(${x}, ${y}, ${r}, fill='${col}'` : v === 1 ? `def drawDot()\n    Circle(${x}, ${y}, ${r}, fill='${col}')` : `Circle(${x}, ${y}, ${r}, fill='${col})`;
        g = v === 1 ? `a function that draws a ${col} dot` : `a ${col} dot`;
        why = v === 0 ? "The parenthesis is never closed." : v === 1 ? "The def line is missing its colon." : "The string for the color is never closed.";
      } else if (t === "Logic error"){
        c = `Circle(${x}, ${y}, ${Math.max(10, r - 20)}, fill='${col}')\nCircle(${x}, ${y}, ${r + 30}, fill='white')`;
        g = `a small ${col} dot on top of a bigger white circle`;
        why = "It runs, but the big circle is drawn second and covers the dot.";
      } else if (t === "Runtime error"){
        const v = pick([0, 1]);
        c = v ? `import math\nsize = math.sqrt(${-r})\nCircle(${x}, ${y}, size, fill='${col}')` : `def drawRing(radius):\n    Circle(${x}, ${y}, radius, fill='${col}')\n    Circle(${x}, ${y}, radius - 10, fill='white')\n\ndrawRing('${r}')`;
        g = v ? `a ${col} circle sized by a square root` : `a ${col} ring with a white center`;
        why = v ? "The square root of a negative number crashes when the line runs." : "The radius is a string, so radius - 10 crashes when it runs.";
      } else {
        const p = ri(4, 9) * 100;
        c = `def drawShape(n):\n    radius = 10.0 ** n\n    Circle(${x}, ${y}, radius, fill='${col}')\n\ndrawShape(${p})`;
        g = `a ${col} circle that grows with n`;
        why = `\`10.0 ** ${p}\` is a decimal too large to store.`;
      }
      return {src:"Random drill", kind:"choice", code:c, text:GOAL(g), fields:[k.F.choice("Answer", TYPES, t, false)], steps:[why]};
    }
  }
});
})();
