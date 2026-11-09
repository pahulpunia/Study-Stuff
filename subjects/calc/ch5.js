/* Calculus BC · Chapter 5: Graphical Analysis
   Source: Ch 5 Obj 1 (Critical Numbers & Absolute Extrema), Obj 2 (MVT), Obj 3 (Relative Extrema & Inc/Dec),
   Obj 4 (Concavity, POIs, 2nd Derivative Test) class notes. Graph examples are rewritten as sign descriptions.
   Answer keys are checked by tools/verify.js where a numeric check applies. */
(() => {
Study.addUnit("calc", {
  id: "c5",
  name: "Ch 5: Graphical Analysis",
  short: "Ch 5",
  sections: [
    {id:"1", name:"Obj 1: Critical Numbers & Absolute Extrema"},
    {id:"2", name:"Obj 2: Mean Value Theorem"},
    {id:"3", name:"Obj 3: Relative Extrema & Increasing/Decreasing"},
    {id:"4", name:"Obj 4: Concavity, POIs & 2nd Derivative Test"}
  ],

  notes: {
    "1": [
      {sum:["c is a critical number if c is in the domain of f and f′(c) = 0 or f′(c) is undefined.",
            "f′ = 0: horizontal tangent. f′ undefined: vertical tangent or sharp turn.",
            "Absolute extrema on a closed interval happen only at critical numbers or endpoints.",
            "Candidates test: make a table of x (endpoints + critical numbers) and f(x). Highest y = max, lowest y = min."]},
      {p:"**What it's for:** the highest and lowest points of a graph are where it stops going up or down, so they're where the slope is zero or undefined (or at the edges of the interval). That's how you find the biggest profit, the smallest cost, or the peak height."},
      {h:"Critical numbers"},
      {steps:["**Find f′(x).**", "**Set f′(x) = 0** and solve. Also look for where f′ is undefined (a fraction with x in the bottom).", "**Throw out** anything not in the domain of the original f."]},
      {ex:{q:"Find the critical numbers of f(x) = x³ − 6x.", a:["f′(x) = 3x² − 6 = 0, so x² = 2.", "x = ±√2 (≈ ±1.414).", "Graphically: graph f′ and find its zeros (Calc → Zeros)."]}},
      {ex:{q:"Find the critical numbers of f(x) = 2∛(x − 2).", a:["f(x) = 2{{(x-2)^(1/3)}}, f′(x) = (2/3){{(x-2)^(-2/3)}} = {{2/(3(x-2)^(2/3))}}.", "Never 0 (no variable on top).", "Undefined at x = 2, which is in the domain of f. So x = 2."]}},
      {ex:{q:"Find the critical numbers of g(x) = {{(x-2)^(2/3)/x}}.", a:["x = 0 can't be a critical number: it's not in the domain.", "Quotient rule and simplifying: g′(x) = {{(-x+6)/(3x^2(x-2)^(1/3))}}.", "g′ = 0 at x = 6, undefined at x = 2.", "Critical numbers: 2 and 6."]}},
      {h:"Absolute extrema (closed interval)"},
      {steps:["**Find the critical numbers** (f′ = 0 or undefined).", "**Make a table** with the endpoints and the critical numbers inside [a, b].", "**Conclude:** the max is the highest y-value, the min is the lowest."]},
      {ex:{q:"Find the max and min of f(x) = x⁴ − 2x² + 1 on [0, 2]. (No calculator.)", a:["f′(x) = 4x³ − 4x = 4x(x² − 1) = 0 → x = 0, ±1. Only 0 and 1 are in [0, 2].", "f(0) = 1, f(1) = 0, f(2) = 16 − 8 + 1 = 9.", "Max is 9 (at x = 2), min is 0 (at x = 1)."]}},
      {ex:{q:"Find the max and min of f(x) = 2sin(2x) on [0, π/2]. (Calculator.)", a:["Graph it with Xmin = 0, Xmax = π/2.", "Calc → max: x ≈ 0.785 (π/4), y = 2.", "Check the table: f(0) = 0, f(π/2) = 0.", "Max is 2, min is 0."]}},
      {tip:"\"Value of the max\" means the y-value. \"Where\" means the x-value. Read what they ask for."},
      {check:[
        {q:"Can x = 0 be a critical number of f(x) = 1/x?", a:"No. 0 isn't in the domain."},
        {q:"Where can an absolute max on [a, b] happen?", a:"At a critical number or an endpoint."},
        {q:"Find the critical numbers of f(x) = x² − 4x.", a:"f′ = 2x − 4 = 0 → x = 2."},
        {q:"What does f′ undefined look like on a graph?", a:"A vertical tangent or a sharp turn (corner or cusp)."}]}
    ],
    "2": [
      {sum:["Conditions: f is continuous on [a, b] and differentiable on (a, b).",
            "Then there's at least one c in (a, b) where f′(c) = (f(b) − f(a))/(b − a).",
            "In words: somewhere, the instantaneous rate equals the average rate.",
            "c can't be an endpoint. Check that your answers land inside (a, b)."]},
      {p:"**What it's for:** if you drove 120 miles in 2 hours, your average speed was 60 mph, so at some moment your speedometer read exactly 60. The MVT is that idea for any smooth function: the slope of the tangent matches the slope of the secant at least once."},
      {h:"Checking the conditions"},
      {table:{head:["Condition", "How to check"], rows:[
        ["continuous on [a, b]", "no division by 0 (or other breaks) on the closed interval"],
        ["differentiable on (a, b)", "f′ exists and is continuous on the open interval (no corners, no division by 0 in f′)"]]}},
      {h:"Finding c"},
      {steps:["**Average rate:** (f(b) − f(a))/(b − a). That's a number.", "**Set f′(x) equal to it** and solve (calculator: move everything to one side, graph, find the zeros).", "**Keep only the answers in (a, b).**"]},
      {ex:{q:"f(x) = x³ − 7x² + 5x on [−2, 2]. Find the value(s) of c guaranteed by the MVT.", a:["Conditions: f is a polynomial, so it's continuous and differentiable everywhere.", "f(2) = −10, f(−2) = −46. Average rate: (−10 − (−46))/(2 − (−2)) = 9.", "3x² − 14x + 5 = 9 → 3x² − 14x − 4 = 0.", "x ≈ −0.270 or x ≈ 4.937. Only −0.270 is in (−2, 2).", "c ≈ −0.270."]}},
      {ex:{q:"x(t) = t³ − 9t² + 15t + 3 (feet, seconds). (a) Average velocity from t = 2 to t = 6? (b) When does the instantaneous velocity equal it?", a:["(a) x(6) = −15, x(2) = 5. (−15 − 5)/(6 − 2) = −5 ft/s.", "(b) MVT: 3t² − 18t + 15 = −5 → 3t² − 18t + 20 = 0.", "t ≈ 4.528 s (the other root, 1.472, is outside [2, 6])."]}},
      {ex:{q:"A balloon's height: h(10) = 35 ft and h(40) = 125 ft (t in minutes). Must the velocity be 3 ft/min at some time in 10 < t < 40? Justify.", a:["Average velocity: (125 − 35)/(40 − 10) = 90/30 = 3 ft/min.", "Since h is differentiable (so continuous), the MVT guarantees a time in (10, 40) where h′(t) = 3 ft/min."]}},
      {warn:"On an FRQ, name the theorem and say why the conditions hold. \"By the MVT\" with no reason doesn't get the point."},
      {check:[
        {q:"Does the MVT apply to f(x) = 1/x on [−1, 1]?", a:"No. f isn't continuous at x = 0."},
        {q:"f(1) = 4, f(5) = 12. What must f′ equal somewhere in (1, 5)?", a:"(12 − 4)/(5 − 1) = 2 (if the conditions hold)."},
        {q:"Can c be an endpoint?", a:"No. c is in the open interval (a, b)."},
        {q:"Find c for f(x) = x² on [1, 3].", a:"Average rate 4, 2c = 4, c = 2."}]}
    ],
    "3": [
      {sum:["f′ > 0 on an interval: f is increasing there. f′ < 0: f is decreasing.",
            "Steps: find critical numbers, do a sign analysis of f′ on a number line, then conclude with \"because f′ > 0 / f′ < 0\".",
            "First Derivative Test: f′ goes + to − at c → relative max. − to + → relative min.",
            "No sign change → no relative extremum."]},
      {p:"**What it's for:** the sign of the slope tells you which way the graph is heading. Where it switches from climbing to falling, you're at the top of a hill (a relative max). Where it switches from falling to climbing, you're at the bottom of a valley (a relative min)."},
      {h:"Increasing and decreasing"},
      {steps:["**Find the critical values:** f′ = 0 or undefined.", "**Sign analysis of f′:** put the critical numbers (and domain breaks) on a number line, test a value in each piece.", "**Conclude:** f is increasing on ( ) because f′ > 0, decreasing on ( ) because f′ < 0."]},
      {ex:{q:"Where is f(x) = x⁴ + 4x³ − 2 increasing and decreasing?", a:["f′(x) = 4x³ + 12x² = 4x²(x + 3) = 0 → x = 0, −3.", "Signs: − on (−∞, −3), + on (−3, 0), + on (0, ∞).", "Decreasing on (−∞, −3) because f′ < 0. Increasing on (−3, ∞) because f′ > 0."]}},
      {ex:{q:"Where is f(x) = x²eˣ increasing and decreasing?", a:["f′(x) = x²eˣ + 2xeˣ = xeˣ(x + 2) = 0 → x = 0, −2 (eˣ is never 0).", "Signs: + on (−∞, −2), − on (−2, 0), + on (0, ∞).", "Decreasing on (−2, 0). Increasing on (−∞, −2) ∪ (0, ∞)."]}},
      {h:"Reading a graph of f′"},
      {p:"When you're given f′, the y-values are slopes of f. Above the x-axis: f increasing. Below: f decreasing. x-intercepts of f′: critical numbers of f."},
      {h:"Relative extrema: First Derivative Test"},
      {table:{head:["f′ changes…", "At c, f has…"], rows:[["+ to −", "a relative max"], ["− to +", "a relative min"], ["doesn't change sign", "neither"]]}},
      {ex:{q:"f(x) = (x + 1)²{{e^(-x)}}. Find and classify the relative extrema.", a:["f′(x) = 2(x + 1){{e^(-x)}} − (x + 1)²{{e^(-x)}} = (x + 1){{e^(-x)}}(1 − x).", "Critical numbers: x = −1, 1.", "Signs: − on (−∞, −1), + on (−1, 1), − on (1, ∞).", "Rel min at x = −1, rel max at x = 1."]}},
      {ex:{q:"f(x) = −x³ + 6x² − 3. Find and classify the relative extrema.", a:["f′(x) = −3x² + 12x = −3x(x − 4) → x = 0, 4.", "Signs: −, +, −.", "Rel min at x = 0, rel max at x = 4."]}},
      {warn:"A critical number isn't automatically an extremum. f(x) = x³ has f′(0) = 0, but f′ is positive on both sides, so there's no max or min."},
      {check:[
        {q:"f′ changes from − to + at x = 3. What's at x = 3?", a:"A relative min."},
        {q:"f′(x) = (x − 1)². Is there an extremum at x = 1?", a:"No. f′ ≥ 0 on both sides, no sign change."},
        {q:"A graph of f′ is below the x-axis on (2, 5). What does f do there?", a:"It's decreasing."},
        {q:"What do you write after the interval in a conclusion?", a:"The reason: \"because f′ > 0\" (or < 0)."}]}
    ],
    "4": [
      {sum:["Concave up (∪): f″ > 0, f′ is increasing, the graph sits above its tangent lines.",
            "Concave down (∩): f″ < 0, f′ is decreasing, the graph sits below its tangent lines.",
            "Point of inflection (POI): where f changes concavity (f″ changes sign). On a graph of f′, POIs are its maxes and mins.",
            "2nd Derivative Test: at a critical number c, f″(c) < 0 → rel max, f″(c) > 0 → rel min."]},
      {p:"**What it's for:** concavity tells you how the rate is changing, not just the value. A company's profit can be growing but growing more slowly (concave down). Inflection points are where that trend flips, like the moment a spreading rumor starts slowing down."},
      {h:"2nd Derivative Test"},
      {steps:["**Find the critical numbers:** f′ = 0 or undefined.", "**Find f″(x)** and plug in each critical number.", "**Conclude:** f″(c) < 0 (∩) → rel max. f″(c) > 0 (∪) → rel min. f″(c) = 0 → the test can't tell (use the first derivative test)."]},
      {ex:{q:"Use the 2nd Derivative Test to find the relative extrema of f(x) = x − 2cos x on [0, 2π].", a:["f′(x) = 1 + 2sin x = 0 → sin x = −1/2 → x = 7π/6, 11π/6.", "f″(x) = 2cos x.", "f″(7π/6) < 0 → rel max at 7π/6.", "f″(11π/6) > 0 → rel min at 11π/6."]}},
      {h:"Concavity and points of inflection"},
      {steps:["**Find f″(x).**", "**Find where f″ = 0 or is undefined.**", "**Sign analysis of f″:** + means concave up, − means concave down.", "**POIs:** where the sign of f″ actually changes."]},
      {ex:{q:"f(x) = 2x³ + 9x² + 12x − 4. Find the intervals of concavity and any POIs.", a:["f′(x) = 6x² + 18x + 12, f″(x) = 12x + 18 = 0 → x = −3/2.", "Concave down on (−∞, −3/2) because f″ < 0. Concave up on (−3/2, ∞) because f″ > 0.", "POI at x = −3/2."]}},
      {h:"Reading a graph of f′"},
      {table:{head:["On the graph of f′", "Means for f"], rows:[
        ["above / below the x-axis", "f increasing / decreasing"], ["x-intercepts (sign change)", "critical numbers, rel extrema"],
        ["f′ going up / going down", "f concave up / concave down"], ["maxes and mins of f′", "points of inflection"]]}},
      {ex:{q:"The graph of f′ crosses zero at x = −2, 0, and 2, is negative only on (−2, 0), has minimums at x = −1 and x = 2, and a maximum at x = 1. Describe f.", a:["Critical values: x = −2, 0, 2.", "Decreasing on (−2, 0), where f′ < 0.", "POIs at x = −1, 1, 2 (f′ switches between increasing and decreasing).", "Concave up on (−1, 1) ∪ (2, ∞). Concave down on (−∞, −1) ∪ (1, 2)."]}},
      {warn:"f″(c) = 0 doesn't guarantee a POI. f(x) = x⁴ has f″(0) = 0, but it's concave up on both sides."},
      {check:[
        {q:"f″(c) > 0 at a critical number c. Max or min?", a:"Relative min (concave up, ∪)."},
        {q:"What's a point of inflection?", a:"Where f changes concavity: f″ changes sign."},
        {q:"f′ is decreasing on (0, 3). What's f doing there?", a:"It's concave down."},
        {q:"Find the POI of f(x) = x³ − 6x² + 5.", a:"f″ = 6x − 12 = 0 → x = 2, and f″ changes sign there."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);
    const two = (secs, src, text, l1, a1, l2, a2, steps) =>
      k.ask(secs, src, text, [{l:l1, t:"set", a:a1.map(String), ph:"e.g. -1, 2 or none"}, {l:l2, t:"set", a:a2.map(String), ph:"e.g. 3 or none"}], steps, {kind:"set"});
    const ext = (secs, src, text, max, min, steps) =>
      k.ask(secs, src, text, [{l:"Max =", t:"num", a:String(max), ph:"a y-value"}, {l:"Min =", t:"num", a:String(min), ph:"a y-value"}], steps, {kind:"num"});

    /* ===== Obj 1: critical numbers & absolute extrema ===== */
    C.set(["1"], "Ch 5 Obj 1 ex1a", "Find the critical number(s) of f(x) = x³ − 6x.", ["sqrt(2)", "-sqrt(2)"],
      ["f′(x) = 3x² − 6 = 0.", "x² = 2, so x = ±√2 (≈ ±1.414)."], {ph:"e.g. sqrt(3), -sqrt(3)"});
    C.set(["1"], "Ch 5 Obj 1 ex1b", "Find the critical number(s) of f(x) = 2∛(x − 2).", ["2"],
      ["f′(x) = {{2/(3(x-2)^(2/3))}}.", "Never 0 (no variable on top). Undefined at x = 2, which is in the domain.", "x = 2."]);
    C.set(["1"], "Ch 5 Obj 1 ex1c", "Find the critical number(s) of g(x) = (x − 2)^(2/3) / x.", ["2", "6"],
      ["x = 0 isn't in the domain, so it can't count.", "g′(x) = {{(-x+6)/(3x^2(x-2)^(1/3))}}.", "g′ = 0 at x = 6. g′ undefined at x = 2 (in the domain).", "Critical numbers: 2, 6."]);
    C.set(["1"], "Ch 5 Obj 1", "Find the critical number(s) of f(x) = x⁴ − 8x².", ["0", "2", "-2"],
      ["f′(x) = 4x³ − 16x = 4x(x² − 4).", "x = 0, 2, −2."]);
    C.set(["1"], "Ch 5 Obj 1", "Find the critical number(s) of f(x) = xeˣ.", ["-1"],
      ["f′(x) = eˣ + xeˣ = eˣ(1 + x).", "eˣ is never 0, so x = −1."]);
    C.set(["1"], "Ch 5 Obj 1", "Find the critical number(s) of f(x) = x^(2/3).", ["0"],
      ["f′(x) = {{(2/3)x^(-1/3)}} = {{2/(3x^(1/3))}}.", "Never 0, undefined at x = 0 (a cusp). 0 is in the domain, so x = 0."]);
    C.set(["1"], "Ch 5 Obj 1", "Find the critical number(s) of f(x) = 1/x.", [],
      ["f′(x) = {{-1/x^2}}: never 0.", "It's undefined at x = 0, but 0 isn't in the domain of f.", "So there are none."], {ph:"numbers, or none"});
    ext(["1"], "Ch 5 Obj 1 ex2a", "Find the absolute max and min values of f(x) = x⁴ − 2x² + 1 on [0, 2].", 9, 0,
      ["f′(x) = 4x(x² − 1) = 0 → x = 0, ±1. In [0, 2]: 0 and 1.", "Table: f(0) = 1, f(1) = 0, f(2) = 9.", "Max 9, min 0."]);
    ext(["1"], "Ch 5 Obj 1 ex2b", "Find the absolute max and min values of f(x) = 2sin(2x) on [0, π/2].", 2, 0,
      ["f′(x) = 4cos(2x) = 0 → 2x = π/2 → x = π/4.", "f(0) = 0, f(π/4) = 2, f(π/2) = 0.", "Max 2, min 0."]);
    ext(["1"], "Ch 5 Obj 1", "Find the absolute max and min values of f(x) = x³ − 3x² on [−1, 3].", 0, -4,
      ["f′(x) = 3x² − 6x = 3x(x − 2) → x = 0, 2.", "f(−1) = −4, f(0) = 0, f(2) = −4, f(3) = 0.", "Max 0, min −4."]);
    ext(["1"], "Ch 5 Obj 1", "Find the absolute max and min values of f(x) = x³ − 12x on [0, 3].", 0, -16,
      ["f′(x) = 3x² − 12 → x = ±2. Only 2 is in [0, 3].", "f(0) = 0, f(2) = −16, f(3) = −9.", "Max 0, min −16."]);
    C.pick(["1"], "Ch 5 Obj 1", "On a closed interval [a, b], where can an absolute extremum occur?", ["At a critical number or an endpoint", "Only at points where f′ equals 0", "Only at the two endpoints a and b", "Only at points where f″ equals 0"], "At a critical number or an endpoint",
      ["Check both: the critical numbers inside [a, b] and the two endpoints."]);

    /* ===== Obj 2: MVT ===== */
    C.num(["2"], "Ch 5 Obj 2 ex1", "f(x) = x³ − 7x² + 5x on [−2, 2]. Find the value of c guaranteed by the MVT (3 decimals).", "-0.270",
      ["Average rate: (f(2) − f(−2))/(2 − (−2)) = (−10 + 46)/4 = 9.", "3x² − 14x + 5 = 9 → 3x² − 14x − 4 = 0.", "x ≈ −0.270 or 4.937. Only −0.270 is in (−2, 2)."], {label:"c ≈", dec:true});
    C.num(["2"], "Ch 5 Obj 2 ex2a", "x(t) = t³ − 9t² + 15t + 3 (feet, seconds). Find the average velocity from t = 2 to t = 6.", "-5",
      ["x(6) = 216 − 324 + 90 + 3 = −15. x(2) = 8 − 36 + 30 + 3 = 5.", "(−15 − 5)/(6 − 2) = −5 ft/s."], {label:"Average velocity ="});
    C.num(["2"], "Ch 5 Obj 2 ex2b", "x(t) = t³ − 9t² + 15t + 3. At what time in [2, 6] does the instantaneous velocity equal the average velocity, −5? (3 decimals)", "4.528",
      ["3t² − 18t + 15 = −5 → 3t² − 18t + 20 = 0.", "t ≈ 1.472 or 4.528. Only 4.528 is in [2, 6]."], {label:"t ≈", dec:true});
    C.pick(["2"], "Ch 5 Obj 2 ex3", "A balloon's height h(t) is differentiable, with h(10) = 35 ft and h(40) = 125 ft (t in minutes). Must the velocity be 3 ft/min at some time in 10 < t < 40?", ["Yes, by the MVT: the average velocity is 3 ft/min", "No, the MVT only tells you the average velocity", "Yes, by the Intermediate Value Theorem on h(t)", "Not enough information without a formula for h"], "Yes, by the MVT: the average velocity is 3 ft/min",
      ["Average velocity: (125 − 35)/(40 − 10) = 3 ft/min.", "h is differentiable (so continuous), so the MVT guarantees h′(t) = 3 somewhere in (10, 40)."]);
    C.num(["2"], "Ch 5 Obj 2", "Find the c guaranteed by the MVT for f(x) = x² on [1, 3].", "2",
      ["Average rate: (9 − 1)/2 = 4.", "f′(c) = 2c = 4 → c = 2."], {label:"c ="});
    C.num(["2"], "Ch 5 Obj 2", "Find the c guaranteed by the MVT for f(x) = √x on [0, 4].", "1",
      ["Average rate: (2 − 0)/4 = 1/2.", "{{1/(2sqrt(c))}} = 1/2 → √c = 1 → c = 1."], {label:"c ="});
    C.num(["2"], "Ch 5 Obj 2", "Find the c guaranteed by the MVT for f(x) = x³ on [0, 3].", "sqrt(3)",
      ["Average rate: 27/3 = 9.", "3c² = 9 → c = √3 (the negative root isn't in (0, 3))."], {label:"c ="});
    C.pick(["2"], "Ch 5 Obj 2", "Why doesn't the MVT apply to f(x) = 1/x on [−1, 1]?", ["f isn't continuous at x = 0", "f isn't differentiable at x = 1", "f(−1) and f(1) are different", "It does apply on [−1, 1]"], "f isn't continuous at x = 0",
      ["Division by 0 at x = 0, which is inside [−1, 1]."]);
    C.pick(["2"], "Ch 5 Obj 2", "Why doesn't the MVT apply to f(x) = |x| on [−1, 1]?", ["f isn't differentiable at x = 0", "f isn't continuous at x = 0", "The average rate of change is 0", "It does apply on [−1, 1]"], "f isn't differentiable at x = 0",
      ["|x| has a sharp corner at 0, so it's not differentiable on (−1, 1).", "(The average rate is 0, but f′ is never 0.)"]);
    C.num(["2"], "Ch 5 Obj 2", "f is differentiable with f(1) = 4 and f(5) = 12. What value must f′(c) equal for some c in (1, 5)?", "2",
      ["MVT: f′(c) = (12 − 4)/(5 − 1) = 2."], {label:"f′(c) ="});

    /* ===== Obj 3: inc/dec & relative extrema ===== */
    C.set(["3"], "Ch 5 Obj 3 ex1a", "f(x) = x⁴ + 4x³ − 2. Find the critical values.", ["0", "-3"],
      ["f′(x) = 4x³ + 12x² = 4x²(x + 3) = 0.", "x = 0, −3."]);
    C.pick(["3"], "Ch 5 Obj 3 ex1a", "f(x) = x⁴ + 4x³ − 2. Where is f decreasing?", ["(−∞, −3)", "(−3, 0)", "(−∞, 0)", "(0, ∞)"], "(−∞, −3)",
      ["f′(x) = 4x²(x + 3). Signs: − on (−∞, −3), + on (−3, 0), + on (0, ∞).", "Decreasing on (−∞, −3) because f′ < 0."]);
    C.pick(["3"], "Ch 5 Obj 3 ex1b", "f(x) = x²eˣ. Where is f decreasing?", ["(−2, 0)", "(−∞, −2)", "(0, ∞)", "(−∞, −2) ∪ (0, ∞)"], "(−2, 0)",
      ["f′(x) = xeˣ(x + 2). Signs: + on (−∞, −2), − on (−2, 0), + on (0, ∞).", "Decreasing on (−2, 0)."]);
    C.pick(["3"], "Ch 5 Obj 3 ex2", "f′(x) is positive on (−∞, −2), negative on (−2, 0), positive on (0, 2), and negative on (2, ∞). Where is f increasing?", ["(−∞, −2) ∪ (0, 2)", "(−2, 0) ∪ (2, ∞)", "(−∞, 2)", "(−2, 2)"], "(−∞, −2) ∪ (0, 2)",
      ["Increasing where f′ > 0 (f′ above the x-axis)."]);
    two(["3"], "Ch 5 Obj 3 ex2", "f′(x) is positive on (−∞, −2), negative on (−2, 0), positive on (0, 2), and negative on (2, ∞). Where does f have relative maxes and mins?", "Rel max at x =", [-2, 2], "Rel min at x =", [0],
      ["+ to − at x = −2 and x = 2: relative maxes.", "− to + at x = 0: relative min."]);
    two(["3"], "Ch 5 Obj 3 ex3a", "f(x) = (x + 1)²e^(−x). Use the first derivative test to find the relative extrema.", "Rel max at x =", [1], "Rel min at x =", [-1],
      ["f′(x) = (x + 1)e^(−x)(1 − x). Critical numbers: −1, 1.", "Signs: − on (−∞, −1), + on (−1, 1), − on (1, ∞).", "Rel min at x = −1, rel max at x = 1."]);
    two(["3"], "Ch 5 Obj 3 ex3b", "f(x) = −x³ + 6x² − 3. Find the relative extrema.", "Rel max at x =", [4], "Rel min at x =", [0],
      ["f′(x) = −3x² + 12x = −3x(x − 4) → x = 0, 4.", "Signs: −, +, −.", "Rel min at x = 0, rel max at x = 4."]);
    two(["3"], "Ch 5 Obj 3", "f(x) = x³ − 3x + 1. Find the relative extrema.", "Rel max at x =", [-1], "Rel min at x =", [1],
      ["f′(x) = 3x² − 3 = 3(x − 1)(x + 1).", "Signs: +, −, +.", "Rel max at x = −1, rel min at x = 1."]);
    two(["3"], "Ch 5 Obj 3", "f(x) = xe^(−x). Find the relative extrema.", "Rel max at x =", [1], "Rel min at x =", [],
      ["f′(x) = e^(−x) − xe^(−x) = e^(−x)(1 − x) → x = 1.", "Signs: + then −, so a rel max at x = 1.", "No relative min."]);
    C.num(["3"], "Ch 5 Obj 3", "f(x) = x³ − 3x + 1. What is the relative maximum VALUE?", "3",
      ["Rel max at x = −1.", "f(−1) = −1 + 3 + 1 = 3."], {label:"Max value ="});
    C.pick(["3"], "Ch 5 Obj 3", "f(x) = x³. Is there a relative extremum at x = 0?", ["No, f′ doesn't change sign", "Yes, a relative min at x = 0", "Yes, a relative max at x = 0", "Yes, because f′(0) = 0"], "No, f′ doesn't change sign",
      ["f′(x) = 3x² ≥ 0 on both sides of 0. No sign change, no extremum."]);

    /* ===== Obj 4: concavity, POIs, 2nd derivative test ===== */
    two(["4"], "Ch 5 Obj 4 ex1", "f(x) = x − 2cos x on [0, 2π]. Use the 2nd Derivative Test to find the relative extrema.", "Rel max at x =", ["7pi/6"], "Rel min at x =", ["11pi/6"],
      ["f′(x) = 1 + 2sin x = 0 → sin x = −1/2 → x = 7π/6, 11π/6.", "f″(x) = 2cos x.", "f″(7π/6) < 0 → rel max. f″(11π/6) > 0 → rel min."]);
    C.set(["4"], "Ch 5 Obj 4 ex2b", "f(x) = 2x³ + 9x² + 12x − 4. Find the x-value(s) of the point(s) of inflection.", ["-3/2"],
      ["f″(x) = 12x + 18 = 0 → x = −3/2.", "f″ changes from − to +, so it's a POI."]);
    C.pick(["4"], "Ch 5 Obj 4 ex2a", "f(x) = 2x³ + 9x² + 12x − 4. Where is f concave up?", ["(−3/2, ∞)", "(−∞, −3/2)", "(−2, −1)", "(−∞, ∞)"], "(−3/2, ∞)",
      ["f″(x) = 12x + 18 > 0 when x > −3/2."]);
    C.set(["4"], "Ch 5 Obj 4", "f(x) = x⁴ − 6x². Find the x-value(s) of the points of inflection.", ["1", "-1"],
      ["f″(x) = 12x² − 12 = 12(x − 1)(x + 1).", "Sign changes at both: x = ±1."]);
    C.set(["4"], "Ch 5 Obj 4", "f(x) = xeˣ. Find the x-value(s) of the points of inflection.", ["-2"],
      ["f′(x) = (x + 1)eˣ, f″(x) = (x + 2)eˣ.", "x = −2, and f″ changes sign there."]);
    C.set(["4"], "Ch 5 Obj 4", "f(x) = x⁴. Find the x-value(s) of the points of inflection.", [],
      ["f″(x) = 12x² = 0 at x = 0, but f″ ≥ 0 on both sides.", "No sign change, so none."], {ph:"numbers, or none"});
    two(["4"], "Ch 5 Obj 4", "f(x) = x³ − 3x². Use the 2nd Derivative Test to find the relative extrema.", "Rel max at x =", [0], "Rel min at x =", [2],
      ["f′(x) = 3x² − 6x → x = 0, 2.", "f″(x) = 6x − 6. f″(0) = −6 < 0 → max. f″(2) = 6 > 0 → min."]);
    C.pick(["4"], "Ch 5 Obj 4", "At a critical number c, f″(c) = 0. What does the 2nd Derivative Test say?", ["Nothing: use the first derivative test", "There is a relative max at c", "There is a relative min at c", "There is a point of inflection at c"], "Nothing: use the first derivative test",
      ["f″(c) = 0 is inconclusive (think x⁴, x³, and −x⁴)."]);
    C.set(["4"], "Ch 5 Obj 4 ex3", "The graph of f′ has a minimum at x = −1, a maximum at x = 1, and a minimum at x = 2. Where does f have points of inflection?", ["-1", "1", "2"],
      ["POIs of f are the maxes and mins of f′ (where f′ switches between increasing and decreasing)."]);
    C.pick(["4"], "Ch 5 Obj 4 ex3", "Same graph: f′ decreases on (−∞, −1), increases on (−1, 1), decreases on (1, 2), increases on (2, ∞). Where is f concave down?", ["(−∞, −1) ∪ (1, 2)", "(−1, 1) ∪ (2, ∞)", "(−2, 0)", "(−∞, 2)"], "(−∞, −1) ∪ (1, 2)",
      ["Concave down where f′ is decreasing."]);
    C.pick(["4"], "Ch 5 Obj 4", "f″(x) < 0 on an interval. Which is true there?", ["f′ is decreasing and the graph is ∩", "f is decreasing on that interval", "f′ is negative on that interval", "f is below the x-axis there"], "f′ is decreasing and the graph is ∩",
      ["f″ is the slope of f′. Negative means f′ decreases, so f is concave down."]);
  }
});
})();
