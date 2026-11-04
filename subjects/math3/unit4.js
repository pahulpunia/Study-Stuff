/* Honors Math 3 · Unit 4: Rational Functions & Limits
   Sources: 4.1–4.6 notes, 4.2 + 4.3 HW, Unit 4 Review. Every answer was checked numerically (tools/verify.js). */
(() => {
const {ri, pick, nz, frac, distinct, fromRoots, pstr, fac, facs, pdiv, evalRoots} = POLY;

  function ratBuild(){
    const shape = pick([[1,1],[1,1],[2,2],[1,2],[0,1],[2,1],[2,1]]);
    const holeOn = Math.random() < 0.5;
    const all = distinct(shape[0] + shape[1] + (holeOn ? 1 : 0), -5, 5);
    const N = all.slice(0, shape[0]), D = all.slice(shape[0], shape[0] + shape[1]), H = holeOn ? [all[all.length - 1]] : [];
    let k = shape[0] === shape[1] ? pick([1, 1, 2, -1, 3, -2]) : pick([1, 1, 2, -1]);
    const num = fromRoots(N.concat(H), k), den = fromRoots(D.concat(H));
    const reduced = x => k * evalRoots(N, x) / evalRoots(D, x);
    const fracAt = x => frac(k * evalRoots(N, x), evalRoots(D, x));
    const F = {va: D.map(String), holes: H.map(h => [String(h), fracAt(h)]), xint: N.map(String)};
    if (shape[0] < shape[1]){ F.ha = "0"; F.sa = "none"; }
    else if (shape[0] === shape[1]){ F.ha = String(k); F.sa = "none"; }
    else { F.ha = "none"; const q = pdiv(num, den); F.sa = pstr(q.map(c => Math.round(c))); }
    F.yint = (D.includes(0) || H.includes(0)) ? "none" : fracAt(0);
    const tops = N.concat(H);
    const numF = tops.length ? (k === -1 ? "-" : k !== 1 ? String(k) : "") + facs(tops) : String(k);
    const target = `(${numF})/(${facs(D.concat(H))})`;
    return {expanded: `(${pstr(num)})/(${pstr(den)})`, target, F, N, D, H, k};
  }

Study.addUnit("math3", {
  id: "u4",
  name: "Unit 4: Rational Functions & Limits",
  short: "Unit 4",
  reviewName: "Unit 4 Review (test prep)",
  sections: [
    {id:"4.1",   name:"4.1 Simplifying & Excluded Values"},
    {id:"4.1.2", name:"4.1.2 Multiplying & Dividing"},
    {id:"4.2",   name:"4.2 Adding, Subtracting, Decomposing"},
    {id:"4.3",   name:"4.3 Limits"},
    {id:"4.4",   name:"4.4 Limits to Infinity"},
    {id:"4.5",   name:"4.5 Asymptotes, Holes, Intercepts"},
    {id:"4.6",   name:"4.6 Writing Rational Equations"}
  ],

  // notes, by section ({{…}} = math). Block types: see ADDING-CONTENT.md
  notes: {
    "4.1": [
      {p:"A rational expression is a fraction with a polynomial on top and on bottom, like {{(x^2-4)/(x+2)}}. Simplifying it works just like reducing 6/8 to 3/4: you cancel factors that the top and bottom share. To see those shared factors, you have to factor first."},
      {h:"How to simplify"},
      {steps:[
        "Factor the numerator and the denominator completely.",
        "Find the excluded values now, from the ORIGINAL denominator: set each of its factors equal to 0 and solve.",
        "Cancel any factor that appears on both the top and the bottom.",
        "What's left is the simplified expression. Leaving it in factored form is fine."
      ]},
      {h:"Why excluded values come from the original"},
      {p:"Dividing by zero is undefined, so any x that makes the original denominator 0 is not allowed. After you cancel a factor, the simplified version looks fine at that x, but the original expression still isn't. That's why canceled factors still count. On a graph, a canceled factor becomes a hole (removable), and a factor still left on the bottom becomes a vertical asymptote (non-removable)."},
      {h:"Factoring toolkit (try them in this order)"},
      {table:{head:["Pattern","What it looks like","Factors into"], rows:[
        ["GCF","every term shares something","{{2x^3-8x}} = {{2x(x^2-4)}}"],
        ["Difference of squares","{{a^2-b^2}}","(a − b)(a + b)"],
        ["Trinomial","{{x^2+bx+c}}","two numbers that multiply to c and add to b"],
        ["Difference of cubes","{{a^3-b^3}}","{{(a-b)(a^2+ab+b^2)}}"],
        ["Sum of cubes","{{a^3+b^3}}","{{(a+b)(a^2-ab+b^2)}}"],
        ["Grouping","4 terms","{{x^2(x+4)-9(x+4)}} = {{(x+4)(x^2-9)}}"]
      ]}},
      {warn:"Factors that are “backwards”, like (4 − x) and (x − 4), are opposites, not matches. Rewrite one as −1 times the other: {{4-x}} = {{-(x-4)}}. That's why {{(x-y)/(y-x)}} = −1."},
      {warn:"You can only cancel factors (things multiplied), never terms (things added). In {{(x+3)/3}}, the 3s do NOT cancel."}
    ],
    "4.1.2": [
      {p:"Multiplying and dividing rational expressions uses the same rules as regular fractions. The only extra step is factoring first so you can cancel."},
      {h:"Multiplying"},
      {steps:[
        "Factor every numerator and denominator.",
        "Cancel any factor on a top with a matching factor on any bottom, even if they're in different fractions.",
        "Multiply what's left: tops together, bottoms together."
      ]},
      {h:"Dividing: keep, change, flip"},
      {p:"Keep the first fraction, change ÷ to ×, and flip the second fraction (use its reciprocal). Now it's a multiplication problem: {{a/b ÷ c/d}} = {{a/b * d/c}}."},
      {warn:"Excluded values when dividing come from three places: both original denominators AND the numerator of the second fraction. After you flip it, that numerator ends up on the bottom, so it can't be 0 either."},
      {h:"Complex fractions (fractions inside a fraction)"},
      {steps:[
        "Find the LCD of all the little fractions inside.",
        "Multiply the whole top and the whole bottom by that LCD. Every little fraction clears out.",
        "Factor and simplify like normal."
      ]},
      {ex:{q:"{{(1/a-1/(2a))/(4/a)}}", a:["The LCD of the little fractions is 2a. Multiply top and bottom by 2a: {{(2-1)/8}} = {{1/8}}."]}}
    ],
    "4.2": [
      {p:"You can only add or subtract fractions that have the same denominator, so the whole job is building a common denominator (the LCD)."},
      {h:"Adding and subtracting"},
      {steps:[
        "Factor every denominator.",
        "Build the LCD: use every different factor, as many times as it shows up in any one denominator.",
        "Rewrite each fraction over the LCD by multiplying its top and bottom by whatever factors it's missing.",
        "Add or subtract the numerators. Keep the LCD on the bottom.",
        "Simplify: expand and combine the top, factor it, and cancel if you can."
      ]},
      {warn:"When subtracting, put the whole second numerator in parentheses. The minus sign applies to every term: {{(x)/(x-2)-(x+1)/(x-2)}} = {{(x-(x+1))/(x-2)}} = {{-1/(x-2)}}."},
      {tip:"If two denominators are opposites, like (x − 2) and (2 − x), rewrite one: {{1/(2-x)}} = {{-1/(x-2)}}. The sign in front of that fraction flips."},
      {h:"Partial fraction decomposition"},
      {p:"This is adding fractions in reverse: you start with one fraction and split it into simpler pieces."},
      {steps:[
        "Factor the denominator into linear factors, like (x − 4)(x + 1).",
        "Write it as {{A/(x-4)+B/(x+1)}}.",
        "Multiply both sides by the whole denominator to clear the fractions: top = A(x + 1) + B(x − 4).",
        "Plug in x = 4: the B term becomes 0, so you can solve for A. Plug in x = −1 to find B.",
        "Check: adding your two fractions back together should give the original."
      ]},
      {h:"Difference quotient"},
      {p:"{{(f(x+h)-f(x))/h}} is the slope between the points at x and x + h. It shows up again in calculus as the starting point for derivatives."},
      {steps:[
        "Find f(x + h): replace every x in f with (x + h).",
        "Expand. Remember {{(x+h)^2}} = {{x^2+2xh+h^2}}, NOT {{x^2+h^2}}.",
        "Subtract all of f(x). Every original term cancels out.",
        "Every term left has an h in it. Factor out the h and cancel it with the h on the bottom."
      ]}
    ],
    "4.3": [
      {p:"The limit of f(x) as x → a asks: as x gets closer and closer to a (from both sides), what y-value is f(x) getting close to? It only cares about what happens NEAR a, not AT a. That's why a limit can exist at a hole, where f(a) itself is undefined."},
      {h:"How to evaluate a limit"},
      {steps:[
        "Plug in a (direct substitution). If you get a real number, that's the answer.",
        "If you get {{0/0}}, the expression is hiding a factor that cancels, so rewrite it: factor and cancel. If there's a square root, multiply the top and bottom by the conjugate. If there are little fractions, multiply by their LCD. Then plug in again.",
        "If you get a nonzero number over 0, the graph has a vertical asymptote there and the function shoots off to infinity. If both sides go the same direction, the limit is ∞ or −∞. If they go opposite directions, it's DNE."
      ]},
      {h:"Conjugates (for square roots)"},
      {p:"The conjugate of {{a-sqrt(b)}} is {{a+sqrt(b)}}. Multiplying them gives {{a^2-b}}, which gets rid of the square root so the factor that's causing 0/0 can cancel."},
      {h:"One-sided limits"},
      {p:"x → a⁻ means approaching from the left (x a little smaller than a), and x → a⁺ means from the right. The regular (two-sided) limit exists only if the left and right limits are equal."},
      {h:"Reading limits from a graph or table"},
      {p:"On a graph, trace the curve toward x = a from each side and see what height it's heading to. An open circle doesn't matter; a filled dot shows f(a), which can be different from the limit. In a table, use x-values closer and closer to a from both sides (like 1.9, 1.99, 1.999 and 2.1, 2.01, 2.001) and see what the y-values approach."},
      {h:"Discontinuities"},
      {p:"Removable: a hole. A factor canceled, and the limit exists there. Non-removable: a vertical asymptote (the limit is ∞, −∞, or DNE) or a jump (the left and right sides don't match)."}
    ],
    "4.4": [
      {p:"Now x grows without bound (x → ∞) or heads to −∞. For huge x, only the highest-power term on top and on bottom matters. In {{(3x^2+5x)/(x^2-7)}} at x = 1,000,000, the 3x² term makes the 5x look tiny. So you decide the limit by comparing the degrees (highest exponents) of the top and bottom."},
      {h:"The three cases"},
      {table:{head:["Degrees","Limit as x → ±∞","Why"], rows:[
        ["top < bottom","0","the bottom grows faster, so the fraction shrinks"],
        ["top = bottom","ratio of the leading coefficients","the x's cancel and only the numbers out front remain"],
        ["top > bottom","∞ or −∞ (DNE)","the top grows faster, so it never levels off"]
      ]}},
      {h:"Quick method"},
      {steps:[
        "Keep only the highest-degree term on the top and on the bottom.",
        "Simplify that fraction.",
        "Plug in ∞ or −∞ and see where it goes."
      ]},
      {warn:"For x → −∞, watch the signs. Odd powers of a negative number stay negative: {{x^3/x^2}} = x, which goes to −∞."},
      {tip:"With factors multiplied together, multiply their leading terms: {{4(x-2)^3(2x+1)^2}} behaves like 4 · x³ · 4x² = 16x⁵."},
      {tip:"With roots, {{sqrt(9x^2)}} acts like 3x when x → ∞, and {{cbrt(8x^3)}} acts like 2x."},
      {p:"This limit is the horizontal asymptote, the height the graph levels off to on the far left and right. That connects straight to 4.5."}
    ],
    "4.5": [
      {p:"Asymptotes, holes, and intercepts are the skeleton of a rational graph: once you have them, the sketch nearly draws itself. Always factor and reduce first, since what cancels and what doesn't decides almost everything."},
      {h:"Each feature, and how to find it"},
      {table:{head:["Feature","How to find it","Why"], rows:[
        ["Hole","a factor that cancels; plug its x into the REDUCED function to get y","undefined there, but it doesn't blow up"],
        ["Vertical asymptote","set the reduced denominator = 0","the bottom is 0 but the top isn't, so it shoots to ±∞"],
        ["Horizontal asymptote","the limit as x → ∞ (compare degrees)","where the graph levels off at the far ends"],
        ["Slant asymptote","top degree is exactly 1 more than the bottom: long division, ignore the remainder","the graph hugs that line at the far ends"],
        ["x-intercepts","set the reduced numerator = 0","the fraction is 0 when its top is 0"],
        ["y-intercept","plug in x = 0","that's where the graph crosses the y-axis"]
      ]}},
      {h:"Which way do the branches go at a VA?"},
      {p:"Look at the power (multiplicity) of the factor on the bottom. Odd power (like (x − 1)): the graph goes up on one side and down on the other. Even power (like (x − 1)²): it goes the same way on both sides."},
      {warn:"A graph can't have both a horizontal and a slant asymptote. It's one or the other (or neither). A graph CAN cross a horizontal asymptote in the middle: the HA only describes the far ends."},
      {h:"Graphing steps"},
      {steps:["Factor and reduce.","Mark holes and asymptotes (dashed lines).","Plot the intercepts.","Sketch each piece, following the asymptotes at the ends and the multiplicity rules at each VA."]}
    ],
    "4.6": [
      {p:"This is 4.5 in reverse: read the features off the graph, turn each one into a factor, and assemble the equation."},
      {h:"Turning features into factors"},
      {steps:[
        "Vertical asymptote at x = d → put (x − d) in the denominator, since that makes the bottom 0 there.",
        "Hole at x = e → put (x − e) in BOTH the numerator and the denominator, so it cancels.",
        "x-intercept at x = g → put (x − g) in the numerator, since that makes the top 0 there.",
        "Horizontal asymptote y = h → put a number in front so the leading coefficients divide to h.",
        "Check the y-intercept: plug in x = 0 and make sure it matches the graph. If not, adjust the number in front."
      ]},
      {h:"Reading powers off the graph"},
      {table:{head:["What the graph does","Power of the factor"], rows:[
        ["crosses the x-axis straight through","1"],
        ["touches the x-axis and turns back","2"],
        ["flattens out as it crosses","3"],
        ["same direction on both sides of a VA","2 (on the bottom)"]
      ]}},
      {tip:"If the graph has a slant asymptote, the top's degree must be exactly 1 more than the bottom's. Count your factors to check."}
    ]
  },

  // example graphs shown in the notes summary
  graphs: {
    "4.3": [
      {cap:"Hole (removable discontinuity): {{lim}} as x → 1 is still 2, even though f(1) is undefined.", f:"(x^2-1)/(x-1)", F:{va:[], ha:"none", sa:"none", holes:[["1","2"]], xint:["-1"], yint:"1"}},
      {cap:"Vertical asymptote (non-removable): left side → −∞, right side → +∞, so {{lim}} as x → 2 is DNE.", f:"1/(x-2)", F:{va:["2"], ha:"0", sa:"none", holes:[], xint:[], yint:"-1/2"}}
    ],
    "4.4": [
      {cap:"Bottom-heavy: {{lim}} as x → ±∞ of {{1/x}} is 0.", f:"1/x", F:{va:["0"], ha:"0", sa:"none", holes:[], xint:[], yint:"none"}},
      {cap:"Equal degrees: {{(3x-1)/(x-1)}} → {{3/1}} = 3 as x → ±∞.", f:"(3x-1)/(x-1)", F:{va:["1"], ha:"3", sa:"none", holes:[], xint:["1/3"], yint:"1"}}
    ],
    "4.5": [
      {cap:"Odd multiplicity VA: the branches go OPPOSITE ways.", f:"3/(x-1)", F:{va:["1"], ha:"0", sa:"none", holes:[], xint:[], yint:"-3"}},
      {cap:"Even multiplicity VA: the branches go the SAME way.", f:"3/(x-1)^2", F:{va:["1"], ha:"0", sa:"none", holes:[], xint:[], yint:"3"}},
      {cap:"Hole: (x − 1) cancels, leaving y = 3 with a hole at (1, 3).", f:"(3(x-1))/(x-1)", F:{va:[], ha:"none", sa:"none", holes:[["1","3"]], xint:[], yint:"3", line:true}},
      {cap:"Slant asymptote: {{x^2+x+1}} ÷ (x − 2) = x + 3 (remainder thrown away).", f:"(x^2+x+1)/(x-2)", F:{va:["2"], ha:"none", sa:"x+3", holes:[], xint:[], yint:"-1/2"}},
      {cap:"Intercepts: top = 0 → x = 1, −2. Plug in x = 0 → y = {{-2/3}}.", f:"((x-1)(x+2))/(x+3)", F:{va:["-3"], ha:"none", sa:"x-2", holes:[], xint:["1","-2"], yint:"-2/3"}}
    ],
    "4.6": [
      {cap:"4.6 Notes #1: hole at x = −1, VA x = −2, x-int −3, HA y = 1.", f:"((x+3)(x+1))/((x+2)(x+1))", F:{va:["-2"], ha:"1", sa:"none", holes:[["-1","2"]], xint:["-3"], yint:"3/2"}},
      {cap:"4.6 Notes #3: the x-intercept touches and turns (squared factor), with SA y = x − 2.", f:"(x-1)^2/x", F:{va:["0"], ha:"none", sa:"x-2", holes:[], xint:["1"], yint:"none"}}
    ]
  },

  problems(k){
    const {simp, lim, pf, dq, asy, write, txt} = k;
    const N = "none";

    /* ===== 4.1 Simplifying ===== */
    simp(["4.1"], "4.1 Notes #1", "21a^2b/(7a^3b^4)", "3/(ab^3)", null,
      ["Divide the coefficients: 21/7 = 3.", "Subtract exponents: {{a^2/a^3}} = {{1/a}}, {{b/b^4}} = {{1/b^3}}.", "Result: {{3/(ab^3)}}, with a ≠ 0 and b ≠ 0."], {v:["a","b"], r:[0.5,3]});
    simp(["4.1"], "4.1 Notes #2", "(2x^3-8x)/(x^2-4)", "2x", ["2","-2"],
      ["Factor: {{(2x(x-2)(x+2))/((x-2)(x+2))}}", "Cancel (x − 2)(x + 2) → {{2x}}", "Excluded from the original denominator: x ≠ 2, −2 (both removable)."]);
    simp(["4.1"], "4.1 Notes #3", "(64-w^3)/(w^2-8w+16)", "-(w^2+4w+16)/(w-4)", ["4"],
      ["Difference of cubes: {{64-w^3}} = {{(4-w)(16+4w+w^2)}} = {{-(w-4)(w^2+4w+16)}}", "Denominator: {{(w-4)^2}}", "Cancel one (w − 4) → {{-(w^2+4w+16)/(w-4)}}, w ≠ 4."], {v:["w"]});
    simp(["4.1"], "4.1 Notes #4", "(3-3y)/(2y^2-2)", "-3/(2(y+1))", ["1","-1"],
      ["{{(f/g)(y)}} = {{(3-3y)/(2y^2-2)}}", "Factor: {{(-3(y-1))/(2(y-1)(y+1))}}", "Cancel (y − 1) → {{-3/(2(y+1))}}; y ≠ 1 (removable), −1 (non-removable)."],
      {v:["y"], text:"Find (f/g)(y) if f(y) = 3 − 3y and g(y) = 2y² − 2. Simplify and state excluded values."});
    simp(["4.1"], "4.1 Notes #5", "((6x+5)^3(8x)-4x^2(3)(6x+5)^2(6))/(6x+5)^6", "-8x(3x-5)/(6x+5)^4", ["-5/6"],
      ["Factor out {{(6x+5)^2}} from the top: {{(6x+5)^2((6x+5)(8x)-72x^2)}}", "Inside: {{48x^2+40x-72x^2}} = {{-24x^2+40x}} = {{-8x(3x-5)}}", "Cancel {{(6x+5)^2}} → {{(-8x(3x-5))/(6x+5)^4}}, x ≠ −5/6."]);
    simp(["4.1"], "4.1 Notes #6", "(x^(2/3)-4x^(-1/3))/(2x-8)", "1/(2x^(1/3))", ["0","4"],
      ["Factor out the smallest power {{x^(-1/3)}}: {{x^(-1/3)(x-4)}}", "Denominator: {{2(x-4)}}", "Cancel (x − 4) → {{1/(2x^(1/3))}} = {{1/(2cbrt(x))}}; x ≠ 0, 4."], {r:[0.3,6]});
    simp(["4.1","rev"], "Review #1", "(3n^2-5n-2)/(2n-4)", "(3n+1)/2", ["2"],
      ["Factor: {{((3n+1)(n-2))/(2(n-2))}}", "Cancel (n − 2) → {{(3n+1)/2}}, n ≠ 2."], {v:["n"]});
    simp(["4.1","rev"], "Review #2", "(a-b)/(xa-xb-a+b)", "1/(x-1)", null,
      ["Group the denominator: {{x(a-b)-1(a-b)}} = {{(a-b)(x-1)}}", "Cancel (a − b) → {{1/(x-1)}}; x ≠ 1 and a ≠ b."], {v:["a","b","x"]});
    simp(["4.1","rev"], "Review #3", "(x^3+4x^2-9x-36)/(2x^3+7x^2-4x)", "(x^2-9)/(x(2x-1))", ["0","1/2","-4"],
      ["Group the top: {{x^2(x+4)-9(x+4)}} = {{(x+4)(x-3)(x+3)}}", "Bottom: {{x(2x^2+7x-4)}} = {{x(2x-1)(x+4)}}", "Cancel (x + 4) → {{((x-3)(x+3))/(x(2x-1))}}; x ≠ 0, 1/2, −4."]);
    simp(["4.1"], "4.1 Notes", "(x-y)/(y-x)", "-1", null,
      ["Factor −1 out of the bottom: {{y-x}} = {{-1(x-y)}}", "{{(x-y)/(-1(x-y))}} = −1"], {v:["x","y"]});
    txt(["4.1"], "4.1 Notes", "A value of x that makes the denominator equal zero (so the expression is undefined) is called a(n) ______.", ["excluded value","excluded values"],
      ["Excluded value: it makes the denominator 0."]);
    txt(["4.1"], "4.1 Notes", "A rational expression is a ratio of two ______.", ["polynomials","polynomial"],
      ["Rational expression = polynomial ÷ polynomial."]);

    /* ===== 4.1.2 Multiplying & Dividing ===== */
    simp(["4.1.2"], "4.1 Notes #7", "((x^3-8)/(4-x^2))*((x^2+5x+6)/(x^2+3x))", "-(x^2+2x+4)/x", ["2","-2","0","-3"],
      ["Factor: {{((x-2)(x^2+2x+4))/(-(x-2)(x+2))}} · {{((x+2)(x+3))/(x(x+3))}}", "Cancel (x − 2), (x + 2), (x + 3) → {{-(x^2+2x+4)/x}}", "Excluded: x ≠ 2, −2, 0, −3."]);
    simp(["4.1.2"], "4.1 Notes #8", "((y^2+6y+8)/(y^2+y-2))/((y+4)/(2y+4))", "2(y+2)/(y-1)", ["-2","1","-4"],
      ["Rewrite as {{(y^2+6y+8)/(y^2+y-2)}} ÷ {{(y+4)/(2y+4)}} and flip: × {{(2y+4)/(y+4)}}", "Factor: {{((y+2)(y+4))/((y+2)(y-1))}} · {{(2(y+2))/(y+4)}}", "→ {{(2(y+2))/(y-1)}}; y ≠ −2, 1, and −4 (the divisor's top can't be 0)."], {v:["y"]});
    simp(["4.1.2"], "4.1 Notes #9", "(y+4)/(y^2+5y+6) ÷ (3y^2+12y)/(2y^2+5y-3)", "(2y-1)/(3y(y+2))", ["-2","-3","1/2","0","-4"],
      ["Flip and multiply: {{(y+4)/((y+2)(y+3))}} · {{((2y-1)(y+3))/(3y(y+4))}}", "Cancel (y + 4), (y + 3) → {{(2y-1)/(3y(y+2))}}", "Excluded: y ≠ −2, −3, 1/2 (original bottoms) and 0, −4 (the divisor's top)."], {v:["y"]});
    simp(["4.1.2"], "4.1 Notes #10", "(x^3-3x^2-x+3)/(28-3x-x^2) ÷ (x^2-4x+3)/(x^2-9x+20)", "-((x+1)(x-5))/(x+7)", ["-7","4","5","3","1"],
      ["Top: {{x^2(x-3)-1(x-3)}} = {{(x-3)(x-1)(x+1)}}. Bottom: {{-(x+7)(x-4)}}", "Divisor: {{((x-3)(x-1))/((x-4)(x-5))}}, so flip it", "Cancel → {{-((x+1)(x-5))/(x+7)}}; x ≠ −7, 4, 5, 3, 1."]);
    simp(["4.1.2"], "4.1 Notes #11", "(x^2/(3xy))*((6xy)/(x^2y^2))", "2/y^2", null,
      ["Multiply: {{(6x^3y)/(3x^3y^3)}}", "Simplify: {{2/y^2}}; x ≠ 0, y ≠ 0."], {v:["x","y"], r:[0.5,3]});
    simp(["4.1.2"], "4.1 Notes #12", "(x/y+3)/(x^2/y-9y)", "1/(x-3y)", null,
      ["Multiply the top and bottom by y: {{(x+3y)/(x^2-9y^2)}}", "Factor: {{(x+3y)/((x+3y)(x-3y))}} → {{1/(x-3y)}}; y ≠ 0."], {v:["x","y"], r:[0.5,4]});
    simp(["4.1.2","rev"], "Review #4", "((a^2+6a+9)/(a^2-9))*((3a-9)/(a+3))", "3", ["3","-3"],
      ["Factor: {{(a+3)^2/((a+3)(a-3))}} · {{(3(a-3))/(a+3)}}", "Everything cancels except 3; a ≠ 3, −3."], {v:["a"]});
    simp(["4.1.2","rev"], "Review #5", "(d+c)/(c^2+d^2) ÷ (c^2-d^2)/(d^2-dc)", "-d/(c^2+d^2)", null,
      ["Flip: {{(d+c)/(c^2+d^2)}} · {{(d(d-c))/((c-d)(c+d))}}", "{{(d-c)/(c-d)}} = −1, so → {{-d/(c^2+d^2)}}"], {v:["c","d"], r:[0.5,4]});
    simp(["4.1.2","rev"], "Review #6", "(12a^2-7ab+b^2)/(9a^2-b^2) ÷ (16a^2-b^2)/(3ab+b^2)", "b/(4a+b)", null,
      ["Factor: {{((3a-b)(4a-b))/((3a-b)(3a+b))}} · {{(b(3a+b))/((4a-b)(4a+b))}}", "Cancel → {{b/(4a+b)}}"], {v:["a","b"], r:[0.5,4]});
    simp(["4.1.2","rev"], "Review #7", "((6x^2-11x-10)/(6x^2-5x-6))*((6-4x)/(25-20x+4x^2))", "-2/(2x-5)", ["-2/3","3/2","5/2"],
      ["Factor: {{((3x+2)(2x-5))/((3x+2)(2x-3))}} · {{(-2(2x-3))/(2x-5)^2}}", "Cancel → {{-2/(2x-5)}}; x ≠ −2/3, 3/2, 5/2."]);
    simp(["4.1.2","rev"], "Review #8", "((x^2+2x-3)/(x^2+3x-4))/((x^2+x-6)/(x+4))", "1/(x-2)", ["-4","1","-3","2"],
      ["Top fraction: {{((x+3)(x-1))/((x+4)(x-1))}}. Bottom: {{((x+3)(x-2))/(x+4)}}", "Flip and multiply → {{1/(x-2)}}", "Excluded: −4, 1 (inner bottoms) and −3, 2 (the bottom fraction's top)."]);
    simp(["4.1.2","rev"], "Review #9", "(1/a-1/(2a))/(4/a)", "1/8", ["0"],
      ["Top: {{1/a-1/(2a)}} = {{1/(2a)}}", "{{1/(2a)}} · {{a/4}} = {{1/8}}; a ≠ 0."], {v:["a"]});
    simp(["4.1.2","rev"], "Review #10", "((5x)/2+1)/((5x)/4-1/(5x))", "(10x)/(5x-2)", ["0","2/5","-2/5"],
      ["Multiply the top and bottom by the LCD 20x: {{(50x^2+20x)/(25x^2-4)}}", "Factor: {{(10x(5x+2))/((5x-2)(5x+2))}} → {{(10x)/(5x-2)}}", "Excluded: 0 (inner bottom), ±2/5."]);
    simp(["4.1.2","rev"], "Review #11", "(1+(4x+3)/(x^2+1))/(1-(x+7)/(x^2+1))", "(x+2)/(x-3)", ["3","-2"],
      ["Multiply the top and bottom by {{x^2+1}}: {{(x^2+4x+4)/(x^2-x-6)}}", "Factor: {{(x+2)^2/((x-3)(x+2))}} → {{(x+2)/(x-3)}}; x ≠ 3, −2."]);

    /* ===== 4.2 Adding / Subtracting / Partial fractions / Difference quotient ===== */
    simp(["4.2"], "4.2 HW #4", "(x^2+5x+16)/(x+3)-(1-3x)/(x+3)", "x+5", ["-3"],
      ["Same denominator: {{(x^2+5x+16-1+3x)/(x+3)}} = {{(x^2+8x+15)/(x+3)}}", "Factor: {{((x+3)(x+5))/(x+3)}} → {{x+5}}; x ≠ −3."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2"], "4.2 HW #6", "x/(x-2)-(x+1)/(2-x)", "(2x+1)/(x-2)", ["2"],
      ["{{2-x}} = {{-(x-2)}}, so subtracting becomes adding: {{x/(x-2)+(x+1)/(x-2)}}", "→ {{(2x+1)/(x-2)}}; x ≠ 2."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2"], "4.2 HW #9", "1/(6xy)-2/(15x^2)", "(5x-4y)/(30x^2y)", null,
      ["LCD = {{30x^2y}}", "{{(5x)/(30x^2y)-(4y)/(30x^2y)}} = {{(5x-4y)/(30x^2y)}}; x ≠ 0, y ≠ 0."], {v:["x","y"], r:[0.5,3], text:k.QTEXT.one});
    simp(["4.2"], "4.2 HW #10", "2/(x+3)+5/(x-4)", "(7x+7)/((x+3)(x-4))", ["-3","4"],
      ["LCD = (x + 3)(x − 4)", "{{(2(x-4)+5(x+3))/((x+3)(x-4))}} = {{(7x+7)/((x+3)(x-4))}}", "= {{(7(x+1))/((x+3)(x-4))}}; x ≠ −3, 4."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2"], "4.2 HW #12", "5/(x-2)+3/(x^2-4)", "(5x+13)/((x-2)(x+2))", ["2","-2"],
      ["{{x^2-4}} = (x − 2)(x + 2) is the LCD", "{{(5(x+2)+3)/((x-2)(x+2))}} = {{(5x+13)/((x-2)(x+2))}}; x ≠ 2, −2."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2"], "4.2 HW #14", "4/(x^2-9)+3/(x^2-4x+3)", "(7x+5)/((x+3)(x-3)(x-1))", ["3","-3","1"],
      ["Factor: {{4/((x+3)(x-3))+3/((x-3)(x-1))}}", "LCD = (x + 3)(x − 3)(x − 1): {{(4(x-1)+3(x+3))/((x+3)(x-3)(x-1))}}", "= {{(7x+5)/((x+3)(x-3)(x-1))}}; x ≠ 3, −3, 1."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2"], "4.2 HW #15", "2/(x^2+4x-5)-4/(x^2+3x-10)", "(-2x)/((x+5)(x-1)(x-2))", ["-5","1","2"],
      ["Factor: {{2/((x+5)(x-1))-4/((x+5)(x-2))}}", "LCD = (x + 5)(x − 1)(x − 2): {{(2(x-2)-4(x-1))/((x+5)(x-1)(x-2))}}", "Numerator: 2x − 4 − 4x + 4 = −2x → {{(-2x)/((x+5)(x-1)(x-2))}}; x ≠ −5, 1, 2."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2"], "4.2 HW #16", "5/(x+1)+3/x+4/x^3", "(8x^3+3x^2+4x+4)/(x^3(x+1))", ["-1","0"],
      ["LCD = {{x^3(x+1)}}", "{{(5x^3+3x^2(x+1)+4(x+1))/(x^3(x+1))}}", "= {{(8x^3+3x^2+4x+4)/(x^3(x+1))}}; x ≠ 0, −1."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2","rev"], "Review #12", "(3x)/(2y)-(5x)/(6y)+x/(3y)", "x/y", null,
      ["LCD = 6y: {{(9x-5x+2x)/(6y)}} = {{(6x)/(6y)}}", "= {{x/y}}"], {v:["x","y"], r:[0.5,4], text:k.QTEXT.one});
    simp(["4.2","rev"], "Review #13", "(a-b)/a^2+1/a", "(2a-b)/a^2", null,
      ["LCD = {{a^2}}: {{(a-b+a)/a^2}}", "= {{(2a-b)/a^2}}"], {v:["a","b"], r:[0.5,4], text:k.QTEXT.one});
    simp(["4.2","rev"], "Review #14", "1/(p-2)-1/(p+2)", "4/((p-2)(p+2))", ["2","-2"],
      ["LCD = (p − 2)(p + 2): {{((p+2)-(p-2))/((p-2)(p+2))}}", "= {{4/((p-2)(p+2))}}; p ≠ ±2."], {v:["p"], text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2","rev"], "Review #15", "1/(p-2)+1/(2-p)", "0", ["2"],
      ["{{1/(2-p)}} = {{-1/(p-2)}}", "So the sum is 0 (p ≠ 2)."], {v:["p"], text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2","rev"], "Review #16", "1/(b+1)-b/(1+b)", "(1-b)/(b+1)", ["-1"],
      ["Same denominator: {{(1-b)/(b+1)}}; b ≠ −1."], {v:["b"], text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2","rev"], "Review #17", "1-1/(1+p)", "p/(p+1)", ["-1"],
      ["{{(1+p)/(1+p)-1/(1+p)}} = {{p/(p+1)}}; p ≠ −1."], {v:["p"], text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2","rev"], "Review #18", "3/(x-4)+2/(4-x)", "1/(x-4)", ["4"],
      ["{{2/(4-x)}} = {{-2/(x-4)}}", "{{(3-2)/(x-4)}} = {{1/(x-4)}}; x ≠ 4."], {text:k.QTEXT.one + " State any excluded values."});
    simp(["4.2","rev"], "Review #19", "(8x)/(3y-2x)+(12y)/(2x-3y)", "-4", null,
      ["{{(8x)/(3y-2x)}} = {{(-8x)/(2x-3y)}}", "{{(12y-8x)/(2x-3y)}} = {{(-4(2x-3y))/(2x-3y)}} = −4"], {v:["x","y"], text:k.QTEXT.one});
    simp(["4.2","rev"], "Review #20", "1/(2m-4n)-1/(2m+4n)-m/(m^2-4n^2)", "-1/(m+2n)", null,
      ["LCD = {{2(m-2n)(m+2n)}}", "Numerator: (m + 2n) − (m − 2n) − 2m = 4n − 2m = −2(m − 2n)", "→ {{-1/(m+2n)}}"], {v:["m","n"], r:[0.3,3], text:k.QTEXT.one});
    simp(["4.2","rev"], "Review #21", "(b^2+1)/(b^2-4)+1/(b+2)+1/(b-2)", "(b+1)^2/((b-2)(b+2))", ["2","-2"],
      ["LCD = (b − 2)(b + 2): numerator {{b^2+1+(b-2)+(b+2)}} = {{b^2+2b+1}}", "= {{(b+1)^2/((b-2)(b+2))}}; b ≠ ±2."], {v:["b"], text:k.QTEXT.one + " State any excluded values."});
    pf(["4.2"], "4.2 HW #23", "(5x-5)/(x^2-3x-4)", "x-4", "x+1", "3", "2",
      ["{{5x-5}} = A(x + 1) + B(x − 4)", "x = 4: 15 = 5A → A = 3.  x = −1: −10 = −5B → B = 2", "{{3/(x-4)+2/(x+1)}}"]);
    pf(["4.2"], "4.2 HW #25", "(4x+14)/(x^2+x-2)", "x+2", "x-1", "-2", "6",
      ["{{4x+14}} = A(x − 1) + B(x + 2)", "x = 1: 18 = 3B → B = 6.  x = −2: 6 = −3A → A = −2", "{{-2/(x+2)+6/(x-1)}}"]);
    pf(["4.2","rev"], "Review #22", "(2x)/(x^2+9x+18)", "x+3", "x+6", "-2", "4",
      ["{{x^2+9x+18}} = (x + 3)(x + 6); 2x = A(x + 6) + B(x + 3)", "x = −3: −6 = 3A → A = −2.  x = −6: −12 = −3B → B = 4"]);
    pf(["4.2","rev"], "Review #23", "(5x+7)/(x^2+4x-5)", "x+5", "x-1", "3", "2",
      ["{{x^2+4x-5}} = (x + 5)(x − 1); 5x + 7 = A(x − 1) + B(x + 5)", "x = 1: 12 = 6B → B = 2.  x = −5: −18 = −6A → A = 3"]);
    pf(["4.2","rev"], "Review #24", "(5x+19)/(2x^2+13x+6)", "2x+1", "x+6", "3", "1",
      ["{{2x^2+13x+6}} = (2x + 1)(x + 6); 5x + 19 = A(x + 6) + B(2x + 1)", "x = −6: −11 = −11B → B = 1.  x = −1/2: 16.5 = 5.5A → A = 3"]);
    dq(["4.2"], "4.2 HW #27", "3x^2+2x-4", "6x+3h+2",
      ["{{f(x+h)}} = {{3(x+h)^2+2(x+h)-4}} = {{3x^2+6xh+3h^2+2x+2h-4}}", "Subtract f(x): {{6xh+3h^2+2h}}", "Divide by h: {{6x+3h+2}}"]);
    dq(["4.2"], "4.2 HW #28", "1-x^2", "-2x-h",
      ["{{f(x+h)}} = {{1-(x^2+2xh+h^2)}}", "Subtract f(x): {{-2xh-h^2}}", "Divide by h: {{-2x-h}}"]);
    dq(["4.2","rev"], "Review #25", "2x+5", "2",
      ["{{(2(x+h)+5-(2x+5))/h}} = {{(2h)/h}} = 2"]);
    dq(["4.2","rev"], "Review #26", "x^2+2x+4", "2x+h+2",
      ["{{f(x+h)-f(x)}} = {{2xh+h^2+2h}}", "Divide by h: {{2x+h+2}}"]);
    dq(["4.2","rev"], "Review #27", "2x^2-x+3", "4x+2h-1",
      ["{{f(x+h)-f(x)}} = {{4xh+2h^2-h}}", "Divide by h: {{4x+2h-1}}"]);
    simp(["4.2","rev"], "Review #28", "((x+3)2(x^2-1)(2x)-(x^2-1)^2(1))/(x+3)^2", "((x^2-1)(3x^2+12x+1))/(x+3)^2", ["-3"],
      ["Factor out {{(x^2-1)}}: {{(x^2-1)(4x(x+3)-(x^2-1))}}", "Inside: {{4x^2+12x-x^2+1}} = {{3x^2+12x+1}}", "→ {{((x^2-1)(3x^2+12x+1))/(x+3)^2}}; x ≠ −3."]);
    simp(["4.2","rev"], "Review #29", "((2x-1)^2(3)(4x^2+4)^2(8x)-(4x^2+4)^3(2)(2x-1)(2))/((4x^2+4)^3)^2", "((2x-1)(4x^2-3x-2))/(32(x^2+1)^4)", null,
      ["Factor out {{(2x-1)(4x^2+4)^2}}: {{(2x-1)(4x^2+4)^2(24x(2x-1)-4(4x^2+4))}}", "Inside: {{32x^2-24x-16}} = {{8(4x^2-3x-2)}}", "Divide by {{(4x^2+4)^6}} and use {{4x^2+4}} = {{4(x^2+1)}} → {{((2x-1)(4x^2-3x-2))/(32(x^2+1)^4)}}"]);
    txt(["4.2"], "4.2 Notes", "The expression (f(x + h) − f(x)) / h is called the ______.", ["difference quotient"],
      ["It's the difference quotient (the slope between x and x + h)."]);

    /* ===== 4.3 Limits ===== */
    lim(["4.3"], "4.3 HW #8", "(3x^2-9x)/(x-3)", "x", "3", "9",
      ["Factor: {{(3x(x-3))/(x-3)}} = 3x", "Plug in 3 → 9"]);
    lim(["4.3"], "4.3 HW #9", "(c^2-6c+8)/(c^2+c-6)", "c", "2", "-2/5",
      ["Factor: {{((c-4)(c-2))/((c+3)(c-2))}} = {{(c-4)/(c+3)}}", "Plug in 2 → {{-2/5}}"]);
    lim(["4.3"], "4.3 HW #12", "(4-w)/(w^2-8w+16)", "w", "4", "DNE",
      ["Factor: {{(-(w-4))/(w-4)^2}} = {{-1/(w-4)}}", "Plug in 4 → {{-1/0}}: left side → +∞, right side → −∞, so DNE."]);
    lim(["4.3"], "4.3 HW #13", "(sqrt(x)+2)/(x^2+4)", "x", "4", "1/5",
      ["Direct substitution: {{(sqrt(4)+2)/(16+4)}} = {{4/20}} = {{1/5}}"]);
    lim(["4.3"], "4.3 HW #15", "(2r^2+9r-5)/(r^2+10r+25)", "r", "-5", "DNE",
      ["Factor: {{((2r-1)(r+5))/(r+5)^2}} = {{(2r-1)/(r+5)}}", "Plug in −5 → {{-11/0}}: the two sides go to opposite infinities, so DNE."]);
    lim(["4.3"], "4.3 HW #17", "(5t^2+6t-8)/(3t^2+5t-2)", "t", "-2", "2",
      ["Factor: {{((5t-4)(t+2))/((3t-1)(t+2))}} = {{(5t-4)/(3t-1)}}", "Plug in −2 → {{-14/-7}} = 2"]);
    lim(["4.3"], "4.3 HW #19", "(2x^2+7x-4)/(x^3+64)", "x", "-4", "-3/16",
      ["Factor: {{((2x-1)(x+4))/((x+4)(x^2-4x+16))}}", "Plug −4 into {{(2x-1)/(x^2-4x+16)}} → {{-9/48}} = {{-3/16}}"]);
    lim(["4.3"], "4.3 HW #20", "(3x^2-x-2)/(x^4-1)", "x", "1", "5/4",
      ["Factor: {{((3x+2)(x-1))/((x-1)(x+1)(x^2+1))}}", "Plug in 1 → {{5/(2·2)}} = {{5/4}}"]);
    lim(["4.3"], "4.3 HW #22", "(sqrt(1-x)-2)/(x+3)", "x", "-3", "-1/4",
      ["Multiply by the conjugate {{(sqrt(1-x)+2)}}: top becomes {{1-x-4}} = {{-(x+3)}}", "→ {{-1/(sqrt(1-x)+2)}} → {{-1/4}}"]);
    lim(["4.3"], "4.3 HW #23", "(x/(x+2)-2)/(x+4)", "x", "-4", "1/2",
      ["Multiply the top and bottom by (x + 2): {{(x-2(x+2))/((x+4)(x+2))}} = {{(-(x+4))/((x+4)(x+2))}}", "→ {{-1/(x+2)}} → {{-1/-2}} = {{1/2}}"]);
    lim(["4.3","rev"], "Review #30", "(x^3-8)/(x-2)", "x", "2", "12",
      ["Factor: {{((x-2)(x^2+2x+4))/(x-2)}}", "Plug in 2 → 4 + 4 + 4 = 12"]);
    lim(["4.3","rev"], "Review #32", "3pi", "x", "7", "3pi",
      ["The limit of a constant is the constant: 3π."]);
    lim(["4.3","rev"], "Review #33", "(x^2+6)/(x-3)", "x", "2", "-10",
      ["Direct substitution: {{(4+6)/(2-3)}} = −10"]);
    lim(["4.3","rev"], "Review #34", "(x^2+3x-28)/(x-4)", "x", "4", "11",
      ["Factor: {{((x+7)(x-4))/(x-4)}} = x + 7 → 11"]);
    lim(["4.3","rev"], "Review #35", "(3x^2-5x)/(7x)", "x", "0", "-5/7",
      ["Factor: {{(x(3x-5))/(7x)}} = {{(3x-5)/7}} → {{-5/7}}"]);
    lim(["4.3","rev"], "Review #36", "(x^3+x^2-9x-9)/(x^2+2x-15)", "x", "3", "3",
      ["Group the top: {{(x+1)(x-3)(x+3)}}; bottom {{(x+5)(x-3)}}", "Plug 3 into {{((x+1)(x+3))/(x+5)}} → {{24/8}} = 3"]);
    lim(["4.3","rev"], "Review #37", "(1/(x+4)-1/4)/x", "x", "0", "-1/16",
      ["Combine the top: {{(4-(x+4))/(4(x+4))}} = {{(-x)/(4(x+4))}}", "Divide by x: {{-1/(4(x+4))}} → {{-1/16}}"]);
    lim(["4.3","rev"], "Review #38", "(4-sqrt(18-x))/(x-2)", "x", "2", "1/8",
      ["Conjugate: top becomes {{16-(18-x)}} = x − 2", "→ {{1/(4+sqrt(18-x))}} → {{1/8}}"]);
    lim(["4.3","rev"], "Review #43", "sqrt(29)", "x", "7", "sqrt(29)",
      ["Constant: √29."]);
    lim(["4.3","rev"], "Review #44", "(x^2-5x+9)/(x+7)", "x", "4", "5/11",
      ["Direct substitution: {{(16-20+9)/11}} = {{5/11}}"]);
    lim(["4.3","rev"], "Review #45", "(3x^2+5x-2)/(2x^3+x^2-6x)", "x", "-2", "-1/2",
      ["Factor: {{((3x-1)(x+2))/(x(2x-3)(x+2))}}", "Plug −2 into {{(3x-1)/(x(2x-3))}} → {{-7/14}} = {{-1/2}}"]);
    lim(["4.3","rev"], "Review #49", "(x-4)/(5-sqrt(x+21))", "x", "4", "-10",
      ["Conjugate: bottom becomes {{25-(x+21)}} = {{4-x}}", "→ {{-(5+sqrt(x+21))}} → −10"]);
    lim(["4.3","rev"], "Review #50", "(2-x)/(1/4-1/(2+x))", "x", "2", "-16",
      ["Bottom: {{(2+x-4)/(4(2+x))}} = {{(x-2)/(4(2+x))}}", "→ {{-4(2+x)}} → −16"]);
    txt(["4.3"], "4.3 HW", "A hole in a graph is a ______ discontinuity.", ["removable","removeable"],
      ["Holes are removable; vertical asymptotes and jumps are non-removable."]);
    txt(["4.3"], "4.3 HW", "A vertical asymptote is a ______ discontinuity.", ["non-removable","nonremovable","non removable","non-removeable"],
      ["Vertical asymptotes are non-removable."]);
    txt(["4.3"], "4.3 HW", "If the left-hand limit and the right-hand limit are different, the limit ______. (Answer with the abbreviation.)", ["DNE","does not exist"],
      ["The limit exists only when both one-sided limits agree."]);

    /* ===== 4.4 Limits to infinity ===== */
    lim(["4.4"], "4.4 Notes #1a", "1/x", "x", "inf", "0", ["As x grows, 1/x shrinks toward 0."]);
    lim(["4.4"], "4.4 Notes #1b", "1/x", "x", "-inf", "0", ["As x → −∞, 1/x → 0 (from below)."]);
    lim(["4.4"], "4.4 Notes #2a", "x^3", "x", "inf", "inf", ["x³ grows without bound → ∞."]);
    lim(["4.4"], "4.4 Notes #2b", "x^3", "x", "-inf", "-inf", ["Odd power of a huge negative number → −∞."]);
    lim(["4.4"], "4.4 Notes #3", "(3x+11)/(5x-7)", "x", "inf", "3/5", ["Degrees equal → leading coefficients: {{3/5}}"]);
    lim(["4.4"], "4.4 Notes #4", "(4x^2-2x+5)/(2x-3x^2-1)", "x", "-inf", "-4/3", ["Highest terms: {{(4x^2)/(-3x^2)}} = {{-4/3}}"]);
    lim(["4.4"], "4.4 Notes #5", "(x^3+7x)/(-x^2+1)", "x", "inf", "-inf", ["{{x^3/(-x^2)}} = −x → −∞ as x → ∞"]);
    lim(["4.4"], "4.4 Notes #6", "(6x^2-2x+5)/(2x^2-3x-1)", "x", "inf", "3", ["{{(6x^2)/(2x^2)}} = 3"]);
    lim(["4.4"], "4.4 Notes #7", "(8x^2-3x+1)/(2x-1)", "x", "inf", "inf", ["{{(8x^2)/(2x)}} = 4x → ∞ (your notes also accept DNE)"]);
    lim(["4.4"], "4.4 Notes #8", "(4x+6)/(3x^2+8x-1)", "x", "inf", "0", ["{{(4x)/(3x^2)}} = {{4/(3x)}} → 0"]);
    lim(["4.4"], "4.4 Notes #9", "(4x^3+x^2-7)/(x-4x^3-1)", "x", "-inf", "-1", ["{{(4x^3)/(-4x^3)}} = −1"]);
    lim(["4.4"], "4.4 Notes #10", "(4(x-2)^3(2x+1)^2)/((x^3-27)(3x-4)^2)", "x", "inf", "16/9", ["Top: {{4·x^3·4x^2}} = {{16x^5}}. Bottom: {{x^3·9x^2}} = {{9x^5}}", "→ {{16/9}}"]);
    lim(["4.4"], "4.4 Notes #11", "(-3x^2+7x-4)/((2x-5)^2(x+4))", "x", "inf", "0", ["Top {{-3x^2}}, bottom {{4x^3}} → {{-3/(4x)}} → 0"]);
    lim(["4.4"], "4.4 Notes #12", "(7-2x)/sqrt(9x^2-x+1)", "x", "inf", "-2/3", ["{{sqrt(9x^2)}} = 3x for x > 0, so {{(-2x)/(3x)}} = {{-2/3}}"]);
    lim(["4.4"], "4.4 Notes #13", "cbrt(8x^3-2x^2+4x+1)/(3-5x)", "x", "-inf", "-2/5", ["{{cbrt(8x^3)}} = 2x, so {{(2x)/(-5x)}} = {{-2/5}}"]);
    lim(["4.4","rev"], "Review #39", "(x^2+2x+1)/(x+4)", "x", "inf", "inf", ["{{x^2/x}} = x → ∞"]);
    lim(["4.4","rev"], "Review #40", "(5x)/(x^2-4)", "x", "inf", "0", ["{{(5x)/x^2}} = {{5/x}} → 0"]);
    lim(["4.4","rev"], "Review #41", "(5x+7)/(3x-2)", "x", "inf", "5/3", ["Degrees equal → {{5/3}}"]);
    lim(["4.4","rev"], "Review #42", "((x+3)(2x-5))/((4x-7)(x+1))", "x", "inf", "1/2", ["Top {{2x^2}}, bottom {{4x^2}} → {{1/2}}"]);
    lim(["4.4","rev"], "Review #51", "(9-3x^2+7x^4)/(8x^3+12x^2+6x+1)", "x", "inf", "inf", ["{{(7x^4)/(8x^3)}} = {{(7x)/8}} → ∞"]);
    lim(["4.4","rev"], "Review #52", "(3x^2+5x-2)/(4x^3+2x^2-12x)", "x", "inf", "0", ["Top degree 2 < bottom degree 3 → 0"]);
    lim(["4.4","rev"], "Review #53", "(3+13x+4x^2)/(3x^2+x-2)", "x", "inf", "4/3", ["{{(4x^2)/(3x^2)}} = {{4/3}}"]);
    lim(["4.4","rev"], "Review #54", "((5x-7)(2x+3)^2)/((6x-5)(x+4)^2)", "x", "inf", "10/3", ["Top {{5x·4x^2}} = {{20x^3}}; bottom {{6x·x^2}} = {{6x^3}} → {{10/3}}"]);
    txt(["4.4"], "4.4 Notes", "If the degree of the numerator is less than the degree of the denominator, the limit as x → ∞ is ______. (number)", ["0","zero"],
      ["Bottom-heavy → 0."]);
    txt(["4.4"], "4.4 Notes", "If the degrees of the numerator and denominator are equal, the limit as x → ∞ is the ratio of the ______.", ["leading coefficients","leading coefficient","coefficients of the leading terms"],
      ["Equal degrees → divide the leading coefficients."]);

    /* ===== 4.5 Asymptotes, holes, intercepts ===== */
    asy(["4.5"], "4.5 Notes #1", "(x-5)/(x+3)", {va:["-3"], ha:"1", sa:N, holes:[], xint:["5"], yint:"-5/3"},
      ["VA: x + 3 = 0 → x = −3", "HA: degrees equal → {{1/1}} = 1", "x-int: x = 5; y-int: {{-5/3}}"]);
    asy(["4.5"], "4.5 Notes #2", "(x^2-6x+8)/(x^2-x-12)", {va:["-3"], ha:"1", sa:N, holes:[["4","2/7"]], xint:["2"], yint:"-2/3"},
      ["Factor: {{((x-2)(x-4))/((x-4)(x+3))}} → reduced {{(x-2)/(x+3)}}", "Hole at x = 4: {{(4-2)/(4+3)}} = {{2/7}} → (4, 2/7)", "VA x = −3; HA y = 1; x-int 2; y-int {{8/-12}} = {{-2/3}}"]);
    asy(["4.5"], "4.5 Notes #3", "(x^2+2x+1)/(3x^2-5x-2)", {va:["-1/3","2"], ha:"1/3", sa:N, holes:[], xint:["-1"], yint:"-1/2"},
      ["Factor: {{(x+1)^2/((3x+1)(x-2))}}", "VA x = −1/3, 2; HA {{1/3}}", "x-int −1 (bounces, even multiplicity); y-int {{1/-2}}"]);
    asy(["4.5"], "4.5 Notes #4", "(x^2-5x+4)/(x-2)", {va:["2"], ha:N, sa:"x-3", holes:[], xint:["1","4"], yint:"-2"},
      ["Top degree is 1 more than the bottom's → slant asymptote", "Long division: {{x^2-5x+4}} ÷ (x − 2) = x − 3, remainder −2 → SA y = x − 3", "VA x = 2; x-int 1, 4; y-int {{4/-2}} = −2"]);
    asy(["4.5"], "4.5 Notes #5", "(x^2-25)/(x^2+6x+5)", {va:["-1"], ha:"1", sa:N, holes:[["-5","5/2"]], xint:["5"], yint:"-5"},
      ["Factor: {{((x-5)(x+5))/((x+5)(x+1))}} → {{(x-5)/(x+1)}}", "Hole x = −5: {{-10/-4}} = {{5/2}}", "VA x = −1; HA 1; x-int 5; y-int −5"]);
    asy(["4.5"], "4.5 Notes #6", "(x^2+2x+1)/(x+4)", {va:["-4"], ha:N, sa:"x-2", holes:[], xint:["-1"], yint:"1/4"},
      ["Long division: {{x^2+2x+1}} ÷ (x + 4) = x − 2, remainder 9 → SA y = x − 2", "VA x = −4; x-int −1; y-int {{1/4}}"]);
    asy(["4.5"], "4.5 Notes #7", "(2(x+1)(x-2))/(x^2+5x+6)", {va:["-2","-3"], ha:"2", sa:N, holes:[], xint:["-1","2"], yint:"-2/3"},
      ["Bottom: (x + 2)(x + 3) → VA x = −2, −3", "HA: {{(2x^2)/x^2}} = 2", "x-int −1, 2; y-int {{(2(1)(-2))/6}} = {{-2/3}}"]);
    asy(["4.5"], "4.5 Notes #8", "(x^2-5x+6)/(x-2)", {va:[], ha:N, sa:N, holes:[["2","-1"]], xint:["3"], yint:"-3"},
      ["Factor: {{((x-2)(x-3))/(x-2)}} = x − 3 with a hole at x = 2", "Hole (2, −1). The graph is just the line y = x − 3, so there are no asymptotes", "x-int 3; y-int −3"]);
    asy(["4.5"], "4.5 Notes #9", "((x+3)(x-4))/(x+1)^2", {va:["-1"], ha:"1", sa:N, holes:[], xint:["-3","4"], yint:"-12"},
      ["VA x = −1 (even multiplicity → both branches go the same way)", "HA: degrees equal → 1", "x-int −3, 4; y-int {{(3)(-4)/1}} = −12"]);
    asy(["4.5","rev"], "Review #55", "(x^3+x^2-8x-12)/(x^2-x-2)", {va:["2","-1"], ha:N, sa:"x+2", holes:[], xint:["-2","3"], yint:"6"},
      ["Factor: {{((x+2)^2(x-3))/((x-2)(x+1))}}", "Long division ÷ {{x^2-x-2}}: quotient x + 2 → SA y = x + 2", "VA 2, −1; x-int −2, 3; y-int {{-12/-2}} = 6"]);
    asy(["4.5","rev"], "Review #56", "(-x^3+2x^2)/((x+1)(x^2-2x-3))", {va:["-1","3"], ha:"-1", sa:N, holes:[], xint:["0","2"], yint:"0"},
      ["Factor: {{(-x^2(x-2))/((x+1)^2(x-3))}}", "VA −1 (even), 3; HA {{-x^3/x^3}} = −1", "x-int 0, 2; y-int 0"]);
    asy(["4.5","rev"], "Review #57", "(10x^2-3x-1)/(2x^2+5x-12)", {va:["3/2","-4"], ha:"5", sa:N, holes:[], xint:["-1/5","1/2"], yint:"1/12"},
      ["Factor: {{((5x+1)(2x-1))/((2x-3)(x+4))}}", "VA 3/2, −4; HA {{10/2}} = 5", "x-int −1/5, 1/2; y-int {{-1/-12}} = {{1/12}}"]);
    asy(["4.5","rev"], "Review #58", "((2x-1)(3x+1)^2)/((x-2)(4x^2-5x-6))", {va:["2","-3/4"], ha:"9/2", sa:N, holes:[], xint:["1/2","-1/3"], yint:"-1/12"},
      ["Bottom: {{(x-2)(4x+3)(x-2)}} → VA 2 (even), −3/4", "HA: {{(2·9x^3)/(4x^3)}} = {{9/2}}", "x-int 1/2, −1/3; y-int {{(-1)(1)/((-2)(-6))}} = {{-1/12}}"]);
    asy(["4.5","rev"], "Review #59", "2/(x+2)", {va:["-2"], ha:"0", sa:N, holes:[], xint:[], yint:"1"},
      ["VA x = −2; HA y = 0 (bottom-heavy)", "No x-intercepts (the top is never 0); y-int {{2/2}} = 1"]);
    asy(["4.5","rev"], "Review #60", "(3x^2-4x-15)/(x^2+x-12)", {va:["-4"], ha:"3", sa:N, holes:[["3","2"]], xint:["-5/3"], yint:"5/4"},
      ["Factor: {{((3x+5)(x-3))/((x+4)(x-3))}} → {{(3x+5)/(x+4)}}", "Hole x = 3: {{14/7}} = 2 → (3, 2)", "VA −4; HA 3; x-int {{-5/3}}; y-int {{5/4}}"]);
    asy(["4.5","rev"], "Review #61", "(x^3+x^2-4x-4)/(x^2-2x-8)", {va:["4"], ha:N, sa:"x+3", holes:[["-2","-2/3"]], xint:["-1","2"], yint:"1/2"},
      ["Factor: {{((x+1)(x-2)(x+2))/((x-4)(x+2))}} → {{((x+1)(x-2))/(x-4)}}", "Hole x = −2: {{((-1)(-4))/(-6)}} = {{-2/3}}", "SA: {{x^2-x-2}} ÷ (x − 4) = x + 3 (rem 10). VA 4; x-int −1, 2; y-int {{1/2}}"]);
    asy(["4.5","rev"], "Review #62", "(x^2+2x+1)/(x^3+4x)", {va:["0"], ha:"0", sa:N, holes:[], xint:["-1"], yint:N},
      ["Factor: {{(x+1)^2/(x(x^2+4))}}. {{x^2+4}} is never 0", "VA x = 0; HA y = 0; x-int −1", "No y-intercept (x = 0 is an asymptote)."]);
    asy(["4.5","rev"], "Review #63", "(2x^3-7x^2-14x-5)/(x^2-4x-5)", {va:[], ha:N, sa:N, holes:[["5","11"],["-1","-1"]], xint:["-1/2"], yint:"1"},
      ["Factor: {{((x+1)(2x+1)(x-5))/((x-5)(x+1))}} = 2x + 1", "Holes at x = 5 → (5, 11) and x = −1 → (−1, −1)", "The graph is the line y = 2x + 1 with two holes: no asymptotes. x-int −1/2; y-int 1"]);
    txt(["4.5"], "4.5 Notes", "A vertical asymptote with ODD multiplicity: the branches go the ______ direction(s) on each side.", ["opposite"],
      ["Odd → opposite; even → same."]);
    txt(["4.5"], "4.5 Notes", "A vertical asymptote with EVEN multiplicity: the branches go the ______ direction on each side.", ["same"],
      ["Even multiplicity → same direction (both up or both down)."]);
    txt(["4.5"], "4.5 Notes", "To find a slant asymptote, use polynomial ______ division (and throw away the remainder).", ["long"],
      ["Polynomial long division."]);
    txt(["4.5"], "4.5 Notes", "A slant asymptote happens when the numerator's degree is exactly ______ more than the denominator's. (number)", ["1","one"],
      ["Exactly one degree higher."]);

    /* ===== 4.6 Writing rational equations ===== */
    write(["4.6"], "4.6 Notes #1", "((x+3)(x+1))/((x+2)(x+1))", {va:["-2"], ha:"1", sa:N, holes:[["-1","2"]], xint:["-3"], yint:"3/2"},
      ["Hole x = −1 → (x + 1) on the top AND bottom", "VA x = −2 → (x + 2) on the bottom; x-int −3 → (x + 3) on the top", "HA: {{lim}} = 1 ✓; y-int {{3/2}} ✓ → {{((x+3)(x+1))/((x+2)(x+1))}}"]);
    write(["4.6"], "4.6 Notes #2", "((x+1)(2x-3))/(-2(x+2)(x-1))", {va:["-2","1"], ha:"-1", sa:N, holes:[], xint:["-1","3/2"], yint:"-3/4"},
      ["VA x = −2, 1 → (x + 2)(x − 1) on the bottom", "x-int −1, 3/2 → (x + 1)(2x − 3) on the top", "HA should be −1: the top leads with 2x², so put −2 on the bottom. y-int {{-3/4}} ✓"]);
    write(["4.6"], "4.6 Notes #3", "(x-1)^2/x", {va:["0"], ha:N, sa:"x-2", holes:[], xint:["1"], yint:N},
      ["VA x = 0 → x on the bottom", "x-int 1 touches (even multiplicity) → {{(x-1)^2}} on the top", "SA: top degree is 1 more than the bottom's ✓; {{(x^2-2x+1)/x}} = x − 2 + … ✓"]);
    write(["4.6"], "4.6 Notes #4", "(-(x-1)^3)/((x+1)(x-3))", {va:["-1","3"], ha:N, sa:"-x+1", holes:[], xint:["1"], yint:"-1/3"},
      ["VA x = −1, 3 → (x + 1)(x − 3) on the bottom", "x-int 1 flattens out → {{(x-1)^3}}; the degree must be 3 for an SA", "y-int should be {{-1/3}}: {{1/(-3)}} needs a −1 in front → {{(-(x-1)^3)/((x+1)(x-3))}}"]);
    write(["4.6","rev"], "Review #60 (graph)", "((3x+5)(x-3))/((x+4)(x-3))", {va:["-4"], ha:"3", sa:N, holes:[["3","2"]], xint:["-5/3"], yint:"5/4"},
      ["Hole x = 3 → (x − 3) on the top and bottom; VA x = −4 → (x + 4)", "x-int −5/3 → (3x + 5) on the top, which also makes the HA 3 ✓"]);
    write(["4.6","rev"], "Review #61 (graph)", "((x+1)(x-2)(x+2))/((x-4)(x+2))", {va:["4"], ha:N, sa:"x+3", holes:[["-2","-2/3"]], xint:["-1","2"], yint:"1/2"},
      ["Hole x = −2 → (x + 2) on the top and bottom; VA x = 4 → (x − 4)", "x-int −1, 2 → (x + 1)(x − 2) on the top. Top degree 3 vs bottom 2 → SA ✓"]);
  },

  // Endless Drill generators: section -> function returning a new random problem
  drills: {
      "4.1": () => {
        const [a, b, c] = distinct(3, -6, 6);
        const num = fromRoots([a, b]), den = fromRoots([a, c]);
        return {src:"Random drill", kind:"simp", text:"Simplify. State any excluded values.", math:`(${pstr(num)})/(${pstr(den)})`,
          fields:[{l:"Simplified", t:"expr", a:`${fac(b)}/${fac(c)}`, v:["x"], simp:true, mustDefine:[{x:a}]}, {l:"Excluded values: x ≠", t:"set", a:[String(a), String(c)], ph:"e.g. 2, -3", canceled:[a]}],
          steps:[`Factor: {{(${facs([a, b])})/(${facs([a, c])})}}`, `Cancel ${fac(a)} → {{${fac(b)}/${fac(c)}}}`, `Excluded (original denominator): x ≠ ${a}, ${c}`]};
      },
      "4.2": () => {
        if (Math.random() < 0.5){
          const a = nz(-4, 4), b = ri(-6, 6), c = ri(-9, 9);
          const f = pstr([a, b, c]);
          return {src:"Random drill", kind:"dq", text:"Find the difference quotient {{(f(x+h)-f(x))/h}}", pre:"f(x) = ", math:f,
            fields:[{l:"Difference quotient", t:"expr", a:`${2*a}x+${a}h+${b}`.replace(/\+-/g, "-"), v:["x","h"], simp:true, mustDefine:[{x:1.37, h:0}]}],
            steps:[`{{f(x+h)-f(x)}} = {{${2*a}xh+${a}h^2+${b}h}}`.replace(/\+-/g, "-"), `Divide by h: {{${2*a}x+${a}h+${b}}}`.replace(/\+-/g, "-")]};
        }
        const [r1, r2] = distinct(2, -6, 6), A = nz(-6, 6), B = nz(-6, 6);
        const num = [A + B, -(A * r2 + B * r1)];
        return {src:"Random drill", kind:"pf", text:"Decompose into partial fractions.", math:`(${pstr(num)})/(${pstr(fromRoots([r1, r2]))})`,
          pfForm:[fac(r1).replace(/[()]/g, ""), fac(r2).replace(/[()]/g, "")],
          fields:[{l:"A", t:"num", a:String(A)}, {l:"B", t:"num", a:String(B)}],
          steps:[`Factor the bottom: {{${facs([r1, r2])}}}`, `{{${pstr(num)}}} = A${fac(r2)} + B${fac(r1)}`, `x = ${r1} → A = ${A};  x = ${r2} → B = ${B}`]};
      },
      "4.3": () => {
        const [a, b, c] = distinct(3, -6, 6);
        const num = fromRoots([a, b]), den = fromRoots([a, c]);
        const atVA = Math.random() < 0.25;
        const to = atVA ? c : a;
        const ans = atVA ? "DNE" : frac(a - b, a - c);
        return {src:"Random drill", kind:"lim", text:"Evaluate the limit. If it doesn't exist, write DNE.", math:`(${pstr(num)})/(${pstr(den)})`, lim:{v:"x", to:String(to)},
          fields:[{l:"Limit", t:"num", a:ans, ph:"number, ∞, −∞, or DNE"}],
          steps: atVA ? [`Factor and cancel: {{${fac(b)}/${fac(c)}}}`, `At x = ${c} the bottom is 0 but the top isn't: the sides go to opposite infinities → DNE`]
                      : [`Direct substitution gives 0/0. Factor: {{(${facs([a, b])})/(${facs([a, c])})}}`, `Cancel → {{${fac(b)}/${fac(c)}}}; plug in ${a} → {{${ans}}}`]};
      },
      "4.4": () => {
        const dn = ri(0, 3), dd = ri(1, 3), dir = pick(["inf", "inf", "-inf"]);
        const mk = d => { const c = [nz(-9, 9)]; for (let i = 0; i < d; i++) c.push(ri(-9, 9)); return c; };
        const n = mk(dn), d = mk(dd), ln = n[0], ld = d[0];
        let ans;
        if (dn < dd) ans = "0";
        else if (dn === dd) ans = frac(ln, ld);
        else { let s = Math.sign(ln / ld); if (dir === "-inf" && (dn - dd) % 2) s = -s; ans = s > 0 ? "inf" : "-inf"; }
        const lead = (c, deg) => (deg ? `${c}x${deg > 1 ? "^" + deg : ""}` : `${c}`);
        return {src:"Random drill", kind:"lim", text:"Evaluate the limit. If it doesn't exist, write DNE.", math:`(${pstr(n)})/(${pstr(d)})`, lim:{v:"x", to:dir},
          fields:[{l:"Limit", t:"num", a:ans, ph:"number, ∞, −∞, or DNE"}],
          steps:[`Highest-degree terms: {{(${lead(ln, dn)})/(${lead(ld, dd)})}}`, dn < dd ? "Bottom-heavy → 0" : dn === dd ? `Equal degrees → {{${ans}}}` : `Top-heavy → ${ans === "inf" ? "∞" : "−∞"}`]};
      },
      "4.5": () => {
        const R = ratBuild();
        return {src:"Random drill", kind:"asy", text:"Find all asymptotes, holes, and intercepts.", pre:"f(x) = ", math:R.expanded, F:R.F, graphAfter:true,
          fields:[
            {l:"VA: x =", t:"set", a:R.F.va, ph:"2, -3 or none"},
            {l:"HA: y =", t:"num", a:R.F.ha, ph:"number or none"},
            {l:"SA: y =", t:"expr", a:R.F.sa, ph:"x+3 or none"},
            {l:"Holes", t:"pts", a:R.F.holes, ph:"(4, 2/7) or none"},
            {l:"x-ints: x =", t:"set", a:R.F.xint, ph:"1, -2 or none"},
            {l:"y-int: y =", t:"num", a:R.F.yint, ph:"number or none"}],
          steps:[`Factor: {{${R.target}}}`, R.H.length ? `Hole at x = ${R.H[0]} → (${R.F.holes[0][0]}, ${R.F.holes[0][1]})` : "Nothing cancels, so there are no holes",
                 `VA: ${R.F.va.join(", ") || "none"} · HA: ${R.F.ha} · SA: ${R.F.sa} · x-int: ${R.F.xint.join(", ") || "none"} · y-int: ${R.F.yint}`]};
      },
      "4.6": () => {
        const R = ratBuild();
        return {src:"Random drill", kind:"write", text:"Write an equation for this rational graph.", target:R.target, F:R.F, graphBefore:true,
          fields:[{l:"f(x) =", t:"rat", a:R.target, v:["x"], holes:R.H, ph:"e.g. (x+3)(x+1)/((x+2)(x+1))"}],
          steps:[R.H.length ? `Hole x = ${R.H[0]} → ${fac(R.H[0])} on the top and bottom` : "No holes",
                 `VA → ${facs(R.D) || "nothing"} on the bottom; x-intercepts → ${facs(R.N) || "nothing"} on the top`,
                 `Leading coefficient ${R.k} (check the HA/SA and y-intercept) → {{${R.target}}}`]};
      }
    }
});
})();
