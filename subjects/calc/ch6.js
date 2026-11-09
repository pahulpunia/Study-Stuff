/* Calculus BC · Chapter 6: Antiderivatives
   Source: Ch 6 Obj 1–2, 3, 4, 5, 9, 10, 12 class notes. Graph examples are rewritten in words.
   Every answer key with a formula is checked numerically (tools/verify.js). */
(() => {
Study.addUnit("calc", {
  id: "c6",
  name: "Ch 6: Antiderivatives",
  short: "Ch 6",
  sections: [
    {id:"1", name:"Obj 1–2: Antiderivatives & the Definite Integral"},
    {id:"3", name:"Obj 3: FTC & Average Value"},
    {id:"4", name:"Obj 4: Applications of the FTC"},
    {id:"5", name:"Obj 5: Chain Rule Integration (u-sub)"},
    {id:"9", name:"Obj 9: Inverse Trig & Completing the Square"},
    {id:"10", name:"Obj 10: Partial Fractions"},
    {id:"12", name:"Obj 12: Improper Integrals"}
  ],

  notes: {
    "1": [
      {sum:["F(x) is an antiderivative of f(x) if F′(x) = f(x). Integrating (antidifferentiating) finds the original function.",
            "∫ f(x) dx = F(x) + C. The + C is the constant of integration: the derivative of any constant is 0.",
            "Power rule: ∫ xⁿ dx = {{x^(n+1)/(n+1)}} + C (n ≠ −1). And ∫ {{1/x}} dx = ln|x| + C.",
            "A definite integral is the limit of a Riemann sum: signed area between f and the x-axis from a to b."]},
      {p:"**What it's for:** a derivative takes you from position to velocity. An integral goes backwards: from velocity back to position, from a rate back to a total. Adding up thin rectangles under a rate graph gives the total amount, which is why integrals measure area."},
      {h:"Notation"},
      {p:"∫ f(x) dx = F(x) + C. The ∫ is the integral symbol, f(x) is the derivative you start with, dx says x is the variable, and F(x) is the original function."},
      {h:"Basic rules"},
      {table:{head:["Integral", "Answer"], rows:[
        ["∫ xⁿ dx", "{{x^(n+1)/(n+1)}} + C (n ≠ −1)"], ["∫ {{1/x}} dx", "ln|x| + C"], ["∫ {{e^x}} dx", "{{e^x}} + C"],
        ["∫ cos x dx", "sin x + C"], ["∫ sin x dx", "−cos x + C"], ["∫ sec²x dx", "tan x + C"], ["∫ sec x tan x dx", "sec x + C"],
        ["∫ {{1/(1+x^2)}} dx", "arctan x + C"], ["∫ {{1/sqrt(1-x^2)}} dx", "arcsin x + C"]]}},
      {ex:{q:"Find the antiderivative of f(x) = 2sec²x + 3eˣ.", a:["Each piece is a derivative you know: 2tan x + 3eˣ + C."]}},
      {ex:{q:"Find the antiderivative of f(x) = {{4/(x^2+1)}}.", a:["4 · {{1/(1+x^2)}}, so F(x) = 4 arctan x + C."]}},
      {ex:{q:"Find the antiderivative of f(x) = (2 + x sec x tan x)/x.", a:["Simplify first: {{2/x}} + sec x tan x.", "F(x) = 2 ln|x| + sec x + C."]}},
      {h:"Particular solutions (finding C)"},
      {steps:["**Find F(x),** the antiderivative, with + C.", "**Simplify** a bit.", "**Solve for C:** plug in the given x and y, then isolate C."]},
      {ex:{q:"Find the particular solution of f(x) = 10x⁴ + x³ − 3x if F(1) = 2.", a:["F(x) = 2x⁵ + x⁴/4 − (3/2)x² + C.", "2 = 2 + 1/4 − 3/2 + C → C = 5/4.", "F(x) = 2x⁵ + x⁴/4 − (3/2)x² + 5/4."]}},
      {h:"Definite integral as a limit of a Riemann sum"},
      {p:"If f is continuous on [a, b], the area between f and the x-axis is lim as n → ∞ of Σ f(cᵢ)Δx = ∫ from a to b of f(x) dx. f(cᵢ) is a rectangle's height, Δx = (b − a)/n is its width."},
      {p:"**Definite integrals are directional:** going right with area above the axis is positive. Area below the axis, or going backwards (from b to a), flips the sign."},
      {ex:{q:"f is below the axis on (a, 0) with area 2, and above on (0, b) with area 5. Find ∫ from 0 to b, from b to 0, from 0 to a, and from a to b.", a:["0 to b: +5 (going right, above).", "b to 0: −5 (going left).", "0 to a: going left over area below: −(−2) = 2.", "a to b: −2 + 5 = 3."]}},
      {ex:{q:"The area under f from 0 to 3 is 7. Find ∫ from 0 to 3 of [f(x) + 2] dx.", a:["Moving f up 2 adds a 3 × 2 rectangle.", "7 + 6 = 13."]}},
      {h:"Rewriting a sum as an integral"},
      {steps:["**Δx = (b − a)/n**: the number multiplying the sum (like 5/n) gives b − a.", "**f(x):** replace the piece that changes (like 5i/n) with x, and start at a = 0.", "**Shift if you want:** ∫ from 0 to 5 of √(2 + x) dx = ∫ from 2 to 7 of √x dx."]},
      {ex:{q:"Rewrite the limit as n → ∞ of Σ √(2 + 5i/n) · (5/n) as a definite integral.", a:["Δx = 5/n, so b − a = 5.", "∫ from 0 to 5 of √(2 + x) dx, or ∫ from 2 to 7 of √x dx."]}},
      {warn:"Always write + C on an indefinite integral. Here, an answer without it is marked wrong."},
      {check:[
        {q:"Find ∫ x⁵ dx.", a:"{{x^6/6}} + C."},
        {q:"Why can't you use the power rule on ∫ {{x^(-1)}} dx?", a:"n + 1 = 0. That one's ln|x| + C."},
        {q:"∫ from 2 to 5 of f = 8. What's ∫ from 5 to 2 of f?", a:"−8."},
        {q:"What does Δx stand for in a Riemann sum?", a:"The width of each rectangle: (b − a)/n."}]}
    ],
    "3": [
      {sum:["FTC: ∫ from a to b of f(x) dx = F(b) − F(a), where F is any antiderivative of f.",
            "Plug in the top number first, then subtract the bottom.",
            "Average value of f on [a, b]: {{1/(b-a)}} · ∫ from a to b of f(x) dx (the average height).",
            "Calculator: Math → fnInt, or graph and use Calc → ∫f(x)dx with lower and upper limits."]},
      {p:"**What it's for:** the Fundamental Theorem connects the two halves of calculus. Instead of adding up a million rectangles, you find an antiderivative and subtract two values. Average value turns a curvy graph into a rectangle with the same area, like the average temperature over a day."},
      {h:"The Fundamental Theorem of Calculus"},
      {steps:["**Find the antiderivative** (no + C needed: it cancels).", "**Change notation:** [F(x)] from a to b.", "**Subtract:** F(b) − F(a)."]},
      {ex:{q:"Evaluate ∫ from −2 to 1 of (x² + 1) dx.", a:["[x³/3 + x] from −2 to 1.", "(1/3 + 1) − (−8/3 − 2) = 4/3 + 14/3 = 6."]}},
      {ex:{q:"Evaluate ∫ from π/6 to π/2 of (x cos x − 4)/x dx.", a:["Split: cos x − 4/x.", "[sin x − 4 ln|x|] from π/6 to π/2.", "(1 − 4ln(π/2)) − (1/2 − 4ln(π/6)) = 1/2 − 4 ln 3 ≈ −3.894."]}},
      {h:"Calculator"},
      {p:"Graph y1 = (x − 3)² in a standard window, then Calc → ∫f(x)dx, lower limit 1, upper limit 5: about 5.333. On the home screen: Math → fnInt (Alpha F4 for y1)."},
      {h:"Average value"},
      {p:"If f is continuous on [a, b], its average value is f(c) = {{1/(b-a)}} ∫ from a to b of f(x) dx. It's the height of the rectangle on [a, b] with the same area as the region under f."},
      {ex:{q:"Find the average value of f(x) = 16 − x² on [−4, 4].", a:["{{1/8}} · [16x − x³/3] from −4 to 4.", "= {{1/8}}[(64 − 64/3) − (−64 + 64/3)] = {{1/8}} · 256/3 = 32/3.", "No calculator? You can stop at the setup if the question allows."]}},
      {warn:"Average VALUE (of a function) uses the integral formula. Average RATE of change is (f(b) − f(a))/(b − a). Don't mix them up."},
      {check:[
        {q:"Evaluate ∫ from 0 to π of sin x dx.", a:"[−cos x] from 0 to π = 1 − (−1) = 2."},
        {q:"Do you need + C on a definite integral?", a:"No. It cancels when you subtract."},
        {q:"Find the average value of x² on [0, 3].", a:"{{1/3}} · [x³/3] from 0 to 3 = {{1/3}} · 9 = 3."},
        {q:"What's ∫ from a to a of f(x) dx?", a:"0."}]}
    ],
    "4": [
      {sum:["Total distance: ∫ from a to b of |v(t)| dt.",
            "Position: x(b) = x(a) + ∫ from a to b of v(t) dt (final = start + change).",
            "Average velocity: {{1/(b-a)}} ∫ from a to b of v(t) dt. Average acceleration: (v(b) − v(a))/(b − a).",
            "The same idea works for anything: f(b) = f(a) + ∫ from a to b of f′(x) dx."]},
      {p:"**What it's for:** integrating a rate gives the total change. Integrating velocity gives how far you moved, integrating a sales rate gives how many cars were sold, integrating a flow rate gives how much water came in."},
      {h:"Particle motion with integrals"},
      {table:{head:["Want", "Formula"], rows:[
        ["total distance", "∫ |v(t)| dt (never negative)"], ["change in position (displacement)", "∫ v(t) dt = x(b) − x(a)"],
        ["final position", "x(a) + ∫ from a to b of v(t) dt"], ["average velocity, given v(t)", "{{1/(b-a)}} ∫ v(t) dt"],
        ["average velocity, given x(t)", "(x(b) − x(a))/(b − a)"], ["average acceleration, given a(t)", "{{1/(b-a)}} ∫ a(t) dt"]]}},
      {ex:{q:"v(t) = {{e^(2t)}} + 4t + 5 ft/s and x(1) = 5 ft. Find the position at t = 4 (calculator).", a:["x(4) = 5 + ∫ from 1 to 4 of v(t) dt.", "≈ 1536.784 ft (give at least 3 decimals)."]}},
      {ex:{q:"v(t) = t² − 4t ft/s. Find the total distance from t = 0 to 6 and the position at t = 6 if x(0) = 2.", a:["Total distance: ∫ from 0 to 6 of |t² − 4t| dt = 32/3 + 32/3 = 64/3 ≈ 21.333 ft.", "x(6) = 2 + ∫ from 0 to 6 of (t² − 4t) dt = 2 + 0 = 2 ft (it came back to where it started)."]}},
      {ex:{q:"A velocity graph is a semicircle of radius 2 above the axis on [0, 4], then a semicircle of radius 1 below on [4, 6]. Find the total distance and x(6) if x(0) = 3.", a:["Semicircle area: πr²/2.", "Total distance: π(2²)/2 + π(1²)/2 = 2π + π/2 = 5π/2.", "x(6) = 3 + 2π − π/2 = 3 + 3π/2."]}},
      {h:"Final value = initial value + change"},
      {ex:{q:"f(−2) = 12. The graph of f′ encloses an area of 15 above the axis from x = −2 to x = 4. Find f(4).", a:["f(4) = f(−2) + ∫ from −2 to 4 of f′(x) dx.", "= 12 + 15 = 27."]}},
      {ex:{q:"Cars sell at a rate of R(t) = 428{{e^(-0.3t)}} cars per month. How many are sold in the first 4 months?", a:["Integrating a rate gives a total: ∫ from 0 to 4 of R(t) dt ≈ 996.963.", "To the nearest whole car: 996 or 997."]}},
      {warn:"Distance uses |v|. If v changes sign, the plain integral gives displacement, which can be much smaller (even 0)."},
      {check:[
        {q:"v(t) is negative on the whole interval and ∫ v dt = −6. What's the total distance?", a:"6."},
        {q:"x(0) = 4 and ∫ from 0 to 3 of v dt = −2. Find x(3).", a:"4 + (−2) = 2."},
        {q:"What does ∫ from 0 to 10 of r(t) dt mean if r(t) is gallons per minute?", a:"The total gallons that flowed in from t = 0 to t = 10 minutes."},
        {q:"Formula for final position?", a:"x(b) = x(a) + ∫ from a to b of v(t) dt."}]}
    ],
    "5": [
      {sum:["Reverse chain rule: ∫ f′(g(x)) · g′(x) dx = f(g(x)) + C.",
            "Look for a grouping whose derivative is also there (maybe off by a constant).",
            "u-sub: let u = the inside, find du, swap everything to u, integrate, then put x back.",
            "Fix a missing constant by multiplying inside and dividing outside (only constants, never x)."]},
      {p:"**What it's for:** the chain rule creates products like 2x·cos(x²). To integrate those, you undo the chain rule. u-substitution is the bookkeeping that makes it reliable."},
      {h:"Mental math (when it's obvious)"},
      {ex:{q:"∫ (4x² + x)⁵(8x + 1) dx", a:["The derivative of the inside (4x² + x) is 8x + 1: it's already there.", "Power rule only on the outside: {{(4x^2+x)^6/6}} + C."]}},
      {ex:{q:"∫ cos(x² + 4) · 2x dx", a:["2x is the derivative of the inside.", "sin(x² + 4) + C. Check: the derivative is cos(x² + 4) · 2x."]}},
      {ex:{q:"∫ x/(1 − x²) dx", a:["The derivative of 1 − x² is −2x. We have x, so multiply by −2 inside and −1/2 outside.", "−(1/2) ln|1 − x²| + C."]}},
      {h:"u-substitution"},
      {steps:["**Rewrite** as ∫ (grouped)ⁿ · extras dx.", "**Let u = the inside.**", "**Take the derivative of both sides:** du = (…) dx.", "**Match the extras** to du (solve for them).", "**Rewrite the integral** in terms of u only, then integrate.", "**Put x back** in the final answer."]},
      {ex:{q:"∫ x√(x² + 1) dx", a:["u = x² + 1, du = 2x dx, so x dx = du/2.", "∫ {{u^(1/2)}} · (1/2) du = (1/2) · (2/3){{u^(3/2)}} + C.", "= (1/3){{(x^2+1)^(3/2)}} + C."]}},
      {ex:{q:"∫ tan³x sec²x dx", a:["u = tan x, du = sec²x dx.", "∫ u³ du = u⁴/4 + C = (tan x)⁴/4 + C."]}},
      {ex:{q:"∫ ({{e^(3x)}} + 4)⁻² {{e^(3x)}} dx", a:["u = {{e^(3x)}} + 4, du = 3{{e^(3x)}} dx.", "(1/3)∫ {{u^(-2)}} du = −(1/3){{u^(-1)}} + C = −{{1/(3(e^(3x)+4))}} + C."]}},
      {ex:{q:"∫ sin x/(cos x + 1) dx", a:["u = cos x + 1, du = −sin x dx.", "−∫ {{1/u}} du = −ln|cos x + 1| + C."]}},
      {tip:"Check by differentiating your answer. You should get back exactly what was inside the integral."},
      {check:[
        {q:"∫ 2x{{e^(x^2)}} dx", a:"{{e^(x^2)}} + C."},
        {q:"∫ sin(3x) dx", a:"−(1/3)cos(3x) + C."},
        {q:"In ∫ x²(x³ + 2)⁴ dx, what's u and du?", a:"u = x³ + 2, du = 3x² dx."},
        {q:"Can you fix a missing x the same way you fix a missing constant?", a:"No. Only constants can move outside the integral."}]}
    ],
    "9": [
      {sum:["When the top's power is at least the bottom's, divide first (long or synthetic division).",
            "∫ {{1/(a^2+u^2)}} du = {{1/a}} arctan(u/a) + C. Complete the square to get a² + u².",
            "∫ {{1/sqrt(a^2-u^2)}} du = arcsin(u/a) + C. Factor out −1 before completing the square.",
            "Combo: split the top into (derivative of the bottom) + a leftover constant."]},
      {p:"**What it's for:** these are the integrals that don't fit the power rule or a simple u-sub. Dividing, completing the square, and splitting the numerator rewrite them into forms you already know."},
      {h:"Divide first"},
      {ex:{q:"∫ (x² − 5x + 7)/(x + 1) dx", a:["The power on top is larger, so divide: x − 6 + {{13/(x+1)}}.", "Integrate each piece: x²/2 − 6x + 13 ln|x + 1| + C."]}},
      {h:"Completing the square → arctan"},
      {ex:{q:"∫ {{1/(x^2+4x+13)}} dx", a:["x² + 4x + 13 = (x + 2)² + 9. So u = x + 2, a = 3.", "{{1/3}} arctan((x + 2)/3) + C."]}},
      {h:"Completing the square → arcsin"},
      {ex:{q:"∫ {{1/sqrt(-x^2+6x-5)}} dx", a:["Factor out −1: −(x² − 6x + 5) = −[(x − 3)² − 4] = 4 − (x − 3)².", "a = 2, u = x − 3.", "arcsin((x − 3)/2) + C."]}},
      {h:"Combo: ln and arctan together"},
      {ex:{q:"∫ {{2x/(x^2+8x+17)}} dx", a:["The derivative of the bottom is 2x + 8. Rewrite the top as (2x + 8) − 8.", "∫ {{(2x+8)/(x^2+8x+17)}} dx = ln|x² + 8x + 17|.", "−8∫ {{1/((x+4)^2+1)}} dx = −8 arctan(x + 4).", "Answer: ln|x² + 8x + 17| − 8 arctan(x + 4) + C."]}},
      {table:{head:["Bottom looks like", "Answer has"], rows:[["a² + u² (no root)", "{{1/a}} arctan(u/a)"], ["√(a² − u²)", "arcsin(u/a)"], ["the top is its derivative", "ln|bottom|"]]}},
      {check:[
        {q:"∫ {{1/(x^2+9)}} dx", a:"{{1/3}} arctan(x/3) + C."},
        {q:"Complete the square: x² + 2x + 5.", a:"(x + 1)² + 4."},
        {q:"When do you divide first?", a:"When the top's highest power is at least the bottom's."},
        {q:"∫ {{1/sqrt(9-x^2)}} dx", a:"arcsin(x/3) + C."}]}
    ],
    "10": [
      {sum:["Use partial fractions when the bottom factors (and it's not a chain rule or arctan problem).",
            "Decompose: {{2/((x-2)(x-3))}} = {{A/(x-2)}} + {{B/(x-3)}}. Multiply through, then plug in x-values that zero out a factor.",
            "Each piece integrates to a log: ∫ {{A/(x-r)}} dx = A ln|x − r|.",
            "Log properties combine answers: ln a + ln b = ln(ab), ln a − ln b = ln(a/b), k ln a = ln(aᵏ)."]},
      {p:"**What it's for:** a fraction with a factorable bottom can be split into simpler fractions, each of which is just a natural log. It's adding fractions in reverse."},
      {steps:["**Check the chain rule:** is the top the derivative of the bottom? Then it's ln|bottom|.", "**Arctan or partial fractions?** Doesn't factor: complete the square (arctan). Factors: decompose.", "**Decompose** into {{A/(factor1)}} + {{B/(factor2)}} and solve for A and B.", "**Set up two integrals** and solve."]},
      {ex:{q:"∫ {{2/(x^2-5x+6)}} dx", a:["Not a chain rule (the derivative is 2x − 5). It factors: (x − 2)(x − 3).", "2 = A(x − 3) + B(x − 2). x = 3: B = 2. x = 2: A = −2.", "∫ {{-2/(x-2)}} dx + ∫ {{2/(x-3)}} dx = −2 ln|x − 2| + 2 ln|x − 3| + C.", "Multiple choice form: ln((x − 3)/(x − 2))² + C."]}},
      {ex:{q:"Evaluate ∫ from 2 to 3 of {{x/(2x^2+3x-5)}} dx.", a:["2x² + 3x − 5 = (2x + 5)(x − 1). x = A(x − 1) + B(2x + 5).", "x = 1: B = 1/7. x = 0: A = 5/7.", "(5/7) · (1/2)[ln|2x + 5|] + (1/7)[ln|x − 1|], from 2 to 3.", "= (5/14) ln(11/9) + (1/7) ln 2."]}},
      {warn:"With a factor like 2x + 5, the u-sub gives an extra 1/2: ∫ {{1/(2x+5)}} dx = (1/2) ln|2x + 5|."},
      {check:[
        {q:"Decompose {{1/((x-1)(x+1))}}.", a:"A = 1/2, B = −1/2: {{(1/2)/(x-1)}} − {{(1/2)/(x+1)}}."},
        {q:"Should you use partial fractions on ∫ {{(2x+1)/(x^2+x)}} dx?", a:"No need: the top is the derivative of the bottom, so it's ln|x² + x| + C."},
        {q:"Simplify 2 ln|x − 3| − 2 ln|x − 2|.", a:"ln((x − 3)/(x − 2))²."},
        {q:"What x-values do you plug in to find A and B?", a:"The ones that make each factor 0."}]}
    ],
    "12": [
      {sum:["An integral is improper if a limit is ∞ or −∞, or f isn't defined somewhere on [a, b].",
            "Rewrite with a limit (b → ∞, or b → the bad point), integrate, use F(b) − F(a), then take the limit.",
            "Converges: the limit exists (a number). Diverges: it doesn't (goes to ±∞ or bounces).",
            "Watch the domain: x/(x² − 1) on [0, 1] is improper at x = 1."]},
      {p:"**What it's for:** some regions go on forever but still have a finite area, like the area under {{1/x^2}} from 1 to ∞. Improper integrals use limits to decide whether that total is a real number or blows up."},
      {steps:["**Rewrite as a limit:** ∫ from 1 to ∞ becomes lim as b → ∞ of ∫ from 1 to b.", "**Integrate.**", "**Use F(b) − F(a).**", "**Evaluate the limit** and say converges or diverges, and why."]},
      {ex:{q:"∫ from 1 to ∞ of {{1/(x^2+1)}} dx", a:["lim as b → ∞ of [arctan x] from 1 to b = lim (arctan b − arctan 1).", "arctan b → π/2, so π/2 − π/4 = π/4.", "Converges, because the limit exists."]}},
      {ex:{q:"∫ from 0 to ∞ of 2{{e^(-x)}} dx", a:["lim as b → ∞ of [−2{{e^(-x)}}] from 0 to b = lim (−2{{e^(-b)}} + 2).", "{{e^(-b)}} → 0, so the value is 2. Converges."]}},
      {ex:{q:"∫ from 0 to 1 of {{x/(x^2-1)}} dx", a:["x = 1 makes the bottom 0, so it's improper at 1.", "lim as b → 1⁻ of [(1/2) ln|x² − 1|] from 0 to b.", "ln|b² − 1| → ln 0 → −∞. Diverges."]}},
      {table:{head:["Integral", "Result"], rows:[["∫ from 1 to ∞ of {{1/x^p}}", "converges if p > 1, diverges if p ≤ 1"], ["∫ from 0 to ∞ of {{e^(-kx)}} (k > 0)", "converges to {{1/k}}"]]}},
      {check:[
        {q:"∫ from 1 to ∞ of {{1/x}} dx: converge or diverge?", a:"Diverges: ln b → ∞."},
        {q:"∫ from 1 to ∞ of {{1/x^2}} dx", a:"lim (−1/b + 1) = 1. Converges."},
        {q:"Why is ∫ from 0 to 1 of {{1/sqrt(x)}} dx improper?", a:"{{1/sqrt(x)}} isn't defined at x = 0."},
        {q:"What does \"converges\" mean?", a:"The limit exists: the integral has a finite value."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);

    /* ===== Obj 1–2: antiderivatives, definite integral ===== */
    C.anti(["1"], "Ch 6 Obj 1 ex1a", "2sec(x)^2+3e^x", "2tan(x)+3e^x",
      ["2sec²x is the derivative of 2tan x. 3eˣ stays 3eˣ.", "2tan x + 3eˣ + C."], {text:"Find the antiderivative: ∫ (2sec²x + 3eˣ) dx"});
    C.anti(["1"], "Ch 6 Obj 1 ex1b", "4/(x^2+1)", "4arctan(x)",
      ["4 · {{1/(1+x^2)}}, and {{1/(1+x^2)}} is the derivative of arctan x.", "4 arctan x + C."]);
    C.anti(["1"], "Ch 6 Obj 1 ex1c", "2/x+sec(x)tan(x)", "2ln(abs(x))+sec(x)",
      ["Simplify (2 + x sec x tan x)/x = {{2/x}} + sec x tan x.", "2 ln|x| + sec x + C."], {text:"Find the antiderivative: ∫ (2 + x sec x tan x)/x dx"});
    C.anti(["1"], "Ch 6 Obj 1", "x^5", "x^6/6", ["Power rule: add 1 to the power, divide by the new power."]);
    C.anti(["1"], "Ch 6 Obj 1", "3x^2-4x+5", "x^3-2x^2+5x", ["x³ − 2x² + 5x + C."]);
    C.anti(["1"], "Ch 6 Obj 1", "sqrt(x)", "(2/3)x^(3/2)", ["√x = {{x^(1/2)}}.", "{{x^(3/2)/(3/2)}} = (2/3){{x^(3/2)}} + C."]);
    C.anti(["1"], "Ch 6 Obj 1", "1/x^3", "-1/(2x^2)", ["{{x^(-3)}} → {{x^(-2)/(-2)}}.", "= {{-1/(2x^2)}} + C."]);
    C.anti(["1"], "Ch 6 Obj 1", "cos(x)-sin(x)", "sin(x)+cos(x)", ["∫ cos x = sin x. ∫ −sin x = cos x.", "sin x + cos x + C."]);
    C.expr(["1"], "Ch 6 Obj 1 ex2", "Find the particular solution F(x) of f(x) = 10x⁴ + x³ − 3x if F(1) = 2.", "2x^5+x^4/4-3x^2/2+5/4",
      ["F(x) = 2x⁵ + x⁴/4 − (3/2)x² + C.", "2 = 2 + 1/4 − 3/2 + C, so C = 5/4.", "F(x) = 2x⁵ + x⁴/4 − (3/2)x² + 5/4."], {label:"F(x) =", chk:{anti:"10x^4+x^3-3x"}});
    C.expr(["1"], "Ch 6 Obj 1", "Find F(x) if F′(x) = 6x² + 2 and F(0) = 3.", "2x^3+2x+3",
      ["F(x) = 2x³ + 2x + C.", "F(0) = C = 3."], {label:"F(x) =", chk:{anti:"6x^2+2"}});
    C.num(["1"], "Ch 6 Obj 1 ex3", "f is below the x-axis on (a, 0) with area 2, above on (0, b) with area 5, and below on (b, c) with area 3. Find ∫ from b to 0 of f(x) dx.", "-5",
      ["From 0 to b it's +5 (right, above).", "Going backwards (b to 0) flips the sign: −5."], {label:"Value ="});
    C.num(["1"], "Ch 6 Obj 1 ex3", "Same f: area 2 below on (a, 0), 5 above on (0, b), 3 below on (b, c). Find ∫ from 0 to a of f(x) dx.", "2",
      ["From a to 0 is −2 (area below).", "Backwards: −(−2) = 2."], {label:"Value ="});
    C.num(["1"], "Ch 6 Obj 1 ex3", "Same f: area 2 below on (a, 0), 5 above on (0, b), 3 below on (b, c). Find ∫ from a to b of f(x) dx.", "3",
      ["−2 + 5 = 3."], {label:"Value ="});
    C.num(["1"], "Ch 6 Obj 1 ex3", "Same f: area 2 below on (a, 0), 5 above on (0, b), 3 below on (b, c). Find ∫ from a to c of f(x) dx.", "0",
      ["−2 + 5 − 3 = 0."], {label:"Value ="});
    C.num(["1"], "Ch 6 Obj 1 ex4", "The area under f from 0 to 3 is 7 (f is above the axis). Find ∫ from 0 to 3 of [f(x) + 2] dx.", "13",
      ["∫ f = 7, and ∫ from 0 to 3 of 2 dx = 6.", "7 + 6 = 13."], {label:"Value ="});
    C.pick(["1"], "Ch 6 Obj 1 ex5", "Rewrite the limit as Δx → 0 of Σ sin(uᵢ + 2)Δxᵢ on [0, 2] as a definite integral.", ["∫ from 0 to 2 of sin(x + 2) dx", "∫ from 2 to 4 of sin(x + 2) dx", "∫ from 0 to 2 of sin x dx", "∫ from 0 to 2 of sin(x) + 2 dx"], "∫ from 0 to 2 of sin(x + 2) dx",
      ["The interval gives a = 0, b = 2. f(uᵢ) = sin(uᵢ + 2) becomes sin(x + 2). The variables must match."]);
    C.num(["1"], "Ch 6 Obj 1 ex6a", "Evaluate the limit as n → ∞ of Σ (i = 1 to n) √(2 + 5i/n) · (5/n) by rewriting it as an integral.", "(2/3)(7^(3/2)-2^(3/2))",
      ["Δx = 5/n: ∫ from 0 to 5 of √(2 + x) dx = ∫ from 2 to 7 of √x dx.", "[(2/3){{x^(3/2)}}] from 2 to 7 = (2/3)(7^(3/2) − 2^(3/2)) ≈ 10.461."], {label:"Value =", chk:{int:["sqrt(x)", 2, 7]}});
    C.num(["1"], "Ch 6 Obj 1 ex6b", "Evaluate the limit as n → ∞ of Σ (k = 1 to n) e^(4k/n + 3) · (4/n).", "e^7-e^3",
      ["Δx = 4/n: ∫ from 0 to 4 of e^(x + 3) dx = ∫ from 3 to 7 of eˣ dx.", "e⁷ − e³."], {label:"Value =", chk:{int:["e^x", 3, 7]}});
    C.num(["1"], "Ch 6 Obj 1 ex6c", "Evaluate the limit as n → ∞ of (1/n)[1/(1 + (1/n)²) + 1/(1 + (2/n)²) + … + 1/(1 + (n/n)²)].", "pi/4",
      ["Δx = 1/n on [0, 1]: ∫ from 0 to 1 of {{1/(1+x^2)}} dx.", "[arctan x] from 0 to 1 = π/4."], {label:"Value =", chk:{int:["1/(1+x^2)", 0, 1]}});

    /* ===== Obj 3: FTC & average value ===== */
    C.int(["3"], "Ch 6 Obj 3 ex1a", "x^2+1", -2, 1, "6",
      ["[x³/3 + x] from −2 to 1.", "(1/3 + 1) − (−8/3 − 2) = 4/3 + 14/3 = 6."]);
    C.int(["3"], "Ch 6 Obj 3 ex1b", "(x*cos(x)-4)/x", "pi/6", "pi/2", "1/2-4ln(3)",
      ["Split: cos x − {{4/x}}. Antiderivative: sin x − 4 ln|x|.", "(1 − 4ln(π/2)) − (1/2 − 4ln(π/6)) = 1/2 − 4 ln 3 ≈ −3.894."], {text:"Evaluate the integral from π/6 to π/2 of (x cos x − 4)/x dx."});
    C.int(["3"], "Ch 6 Obj 3 calc", "(x-3)^2", 1, 5, "16/3",
      ["[(x − 3)³/3] from 1 to 5 = 8/3 − (−8/3) = 16/3 ≈ 5.333."]);
    C.int(["3"], "Ch 6 Obj 3", "sin(x)", 0, "pi", "2", ["[−cos x] from 0 to π = 1 − (−1) = 2."], {text:"Evaluate the integral from 0 to π of sin x dx."});
    C.int(["3"], "Ch 6 Obj 3", "1/x", 1, "e", "1", ["[ln x] from 1 to e = 1 − 0 = 1."], {text:"Evaluate the integral from 1 to e of 1/x dx."});
    C.int(["3"], "Ch 6 Obj 3", "e^x", 0, 1, "e-1", ["[eˣ] from 0 to 1 = e − 1."]);
    C.int(["3"], "Ch 6 Obj 3", "sec(x)^2", 0, "pi/4", "1", ["[tan x] from 0 to π/4 = 1 − 0 = 1."], {text:"Evaluate the integral from 0 to π/4 of sec²x dx."});
    C.int(["3"], "Ch 6 Obj 3", "4x^3-6x", 0, 2, "4", ["[x⁴ − 3x²] from 0 to 2 = 16 − 12 = 4."]);
    C.num(["3"], "Ch 6 Obj 3 ex2", "Find the average value of f(x) = 16 − x² on [−4, 4].", "32/3",
      ["{{1/8}} ∫ from −4 to 4 of (16 − x²) dx.", "= {{1/8}} [16x − x³/3] from −4 to 4 = {{1/8}} · 256/3 = 32/3."], {label:"Average value =", chk:{val:"(1/8)*(256/3)"}});
    C.num(["3"], "Ch 6 Obj 3", "Find the average value of f(x) = x² on [0, 3].", "3",
      ["{{1/3}} [x³/3] from 0 to 3 = {{1/3}} · 9 = 3."], {label:"Average value ="});
    C.num(["3"], "Ch 6 Obj 3", "Find the average value of f(x) = sin x on [0, π].", "2/π",
      ["{{1/π}} ∫ from 0 to π of sin x dx = 2/π."], {label:"Average value ="});
    C.pick(["3"], "Ch 6 Obj 3", "Which is the average VALUE of f on [a, b]?", ["(1/(b − a)) ∫ from a to b of f(x) dx", "(f(b) − f(a))/(b − a), the slope between the ends", "(f(a) + f(b))/2, the middle of the two heights", "∫ from a to b of f′(x) dx"], "(1/(b − a)) ∫ from a to b of f(x) dx",
      ["Average value uses the integral. (f(b) − f(a))/(b − a) is the average RATE of change."]);

    /* ===== Obj 4: applications ===== */
    C.num(["4"], "Ch 6 Obj 4 ex1a", "v(t) = e^(2t) + 4t + 5 ft/s and x(1) = 5 ft. Find the position at t = 4 (3 decimals).", "50+(e^8-e^2)/2",
      ["x(4) = x(1) + ∫ from 1 to 4 of v(t) dt.", "= 5 + [e^(2t)/2 + 2t² + 5t] from 1 to 4 ≈ 1536.784 ft."], {label:"x(4) ≈", dec:true});
    C.num(["4"], "Ch 6 Obj 4 ex1b", "v(t) = e^(2t) + 4t + 5 ft/s. Find the average velocity on [1, 4] (3 decimals).", "(45+(e^8-e^2)/2)/3",
      ["{{1/(4-1)}} ∫ from 1 to 4 of v(t) dt.", "≈ 1531.784/3 ≈ 510.595 ft/s."], {label:"Average velocity ≈", dec:true});
    C.num(["4"], "Ch 6 Obj 4 ex2a", "v(t) = t² − 4t ft/s. Find the total distance traveled from t = 0 to t = 6.", "64/3",
      ["∫ from 0 to 6 of |t² − 4t| dt. v < 0 on (0, 4), v > 0 on (4, 6).", "∫ from 0 to 4 is −32/3. ∫ from 4 to 6 is 32/3.", "Total: 32/3 + 32/3 = 64/3 ≈ 21.333 ft."], {label:"Distance ="});
    C.num(["4"], "Ch 6 Obj 4 ex2b", "v(t) = t² − 4t ft/s. Find the position at t = 6 if x(0) = 2 ft.", "2",
      ["x(6) = 2 + ∫ from 0 to 6 of (t² − 4t) dt.", "[t³/3 − 2t²] from 0 to 6 = 72 − 72 = 0.", "x(6) = 2 ft."], {label:"x(6) ="});
    C.num(["4"], "Ch 6 Obj 4 ex3a", "A velocity graph is a semicircle of radius 2 above the axis on [0, 4], then a semicircle of radius 1 below on [4, 6]. Find the total distance from t = 0 to 6.", "5π/2",
      ["Distance adds both areas: π(2)²/2 + π(1)²/2.", "= 2π + π/2 = 5π/2."], {label:"Distance ="});
    C.num(["4"], "Ch 6 Obj 4 ex3b", "Same velocity graph (radius 2 above on [0, 4], radius 1 below on [4, 6]). Find x(6) if x(0) = 3.", "3+3π/2",
      ["x(6) = 3 + (area above) − (area below).", "= 3 + 2π − π/2 = 3 + 3π/2."], {label:"x(6) ="});
    C.num(["4"], "Ch 6 Obj 4 ex4", "f(−2) = 12. The graph of f′ is above the x-axis on [−2, 4]: a 4 × 3 rectangle on [−2, 2] and a triangle with base 2 and height 3 on [2, 4]. Find f(4).", "27",
      ["f(4) = f(−2) + ∫ from −2 to 4 of f′(x) dx.", "Area: 12 + 3 = 15.", "f(4) = 12 + 15 = 27."], {label:"f(4) ="});
    C.num(["4"], "Ch 6 Obj 4 ex5", "Cars are sold at a rate of R(t) = 428e^(−0.3t) cars per month. How many cars are sold in the first 4 months? (3 decimals)", "(428/0.3)(1-e^(-1.2))",
      ["∫ from 0 to 4 of R(t) dt ≈ 996.963.", "(As a whole number of cars: 996 or 997.)"], {label:"Cars ≈", dec:true});
    C.num(["4"], "Ch 6 Obj 4", "v(t) = 3t² − 6t. Find the total distance traveled from t = 0 to t = 3.", "8",
      ["v < 0 on (0, 2), v > 0 on (2, 3).", "∫ from 0 to 2 = 8 − 12 = −4. ∫ from 2 to 3 = 0 − (−4) = 4.", "Distance: 4 + 4 = 8."], {label:"Distance ="});
    C.num(["4"], "Ch 6 Obj 4", "v(t) = 3t² − 6t. Find the displacement from t = 0 to t = 3.", "0",
      ["∫ from 0 to 3 of (3t² − 6t) dt = [t³ − 3t²] = 27 − 27 = 0."], {label:"Displacement ="});
    C.num(["4"], "Ch 6 Obj 4", "f(1) = 3 and f′(x) = 2x. Find f(4).", "18",
      ["f(4) = f(1) + ∫ from 1 to 4 of 2x dx = 3 + (16 − 1) = 18."], {label:"f(4) ="});
    C.num(["4"], "Ch 6 Obj 4", "A tank holds 10 gallons at t = 0. Water flows in at r(t) = 5 + 2t gallons per minute. How much is in the tank at t = 3?", "34",
      ["10 + ∫ from 0 to 3 of (5 + 2t) dt = 10 + [5t + t²] from 0 to 3.", "= 10 + 24 = 34 gallons."], {label:"Gallons ="});

    /* ===== Obj 5: chain rule integration ===== */
    C.anti(["5"], "Ch 6 Obj 5 ex1a", "(4x^2+x)^5(8x+1)", "(4x^2+x)^6/6",
      ["8x + 1 is the derivative of the inside.", "Power rule on the outside only: {{(4x^2+x)^6/6}} + C."]);
    C.anti(["5"], "Ch 6 Obj 5 ex1b", "cos(x^2+4)*2x", "sin(x^2+4)", ["2x is the derivative of the inside.", "sin(x² + 4) + C."], {text:"Find the integral: ∫ cos(x² + 4) · 2x dx"});
    C.anti(["5"], "Ch 6 Obj 5 ex1c", "x/(1-x^2)", "-(1/2)ln(abs(1-x^2))",
      ["The derivative of 1 − x² is −2x. Multiply by −2 inside, −1/2 outside.", "−(1/2) ln|1 − x²| + C."]);
    C.anti(["5"], "Ch 6 Obj 5 ex2a", "x*sqrt(x^2+1)", "(1/3)(x^2+1)^(3/2)",
      ["u = x² + 1, du = 2x dx, x dx = du/2.", "(1/2)∫ {{u^(1/2)}} du = (1/3){{u^(3/2)}} + C."], {text:"Find the integral: ∫ x√(x² + 1) dx"});
    C.anti(["5"], "Ch 6 Obj 5 ex2b", "tan(x)^3sec(x)^2", "tan(x)^4/4",
      ["u = tan x, du = sec²x dx.", "∫ u³ du = u⁴/4 = (tan x)⁴/4 + C."], {text:"Find the integral: ∫ tan³x sec²x dx", pts:[0.2, 0.5, 0.8, 1.1, 2, 2.6]});
    C.anti(["5"], "Ch 6 Obj 5 ex3a", "(e^(3x)+4)^(-2)e^(3x)", "-1/(3(e^(3x)+4))",
      ["u = e^(3x) + 4, du = 3e^(3x) dx.", "(1/3)∫ {{u^(-2)}} du = −(1/3){{u^(-1)}} + C."]);
    C.anti(["5"], "Ch 6 Obj 5 ex3b", "sin(x)/(cos(x)+1)", "-ln(abs(cos(x)+1))",
      ["u = cos x + 1, du = −sin x dx.", "−∫ {{1/u}} du = −ln|cos x + 1| + C."]);
    C.anti(["5"], "Ch 6 Obj 5", "2xe^(x^2)", "e^(x^2)", ["u = x², du = 2x dx.", "∫ eᵘ du = e^(x²) + C."]);
    C.anti(["5"], "Ch 6 Obj 5", "sin(3x)", "-cos(3x)/3", ["u = 3x, du = 3 dx.", "−(1/3)cos(3x) + C."]);
    C.anti(["5"], "Ch 6 Obj 5", "ln(x)/x", "ln(x)^2/2", ["u = ln x, du = {{1/x}} dx.", "∫ u du = (ln x)²/2 + C."]);
    C.anti(["5"], "Ch 6 Obj 5", "x^2(x^3+2)^4", "(x^3+2)^5/15", ["u = x³ + 2, du = 3x² dx.", "(1/3) · u⁵/5 = {{(x^3+2)^5/15}} + C."]);
    C.anti(["5"], "Ch 6 Obj 5", "e^(5x)", "e^(5x)/5", ["u = 5x: (1/5)e^(5x) + C."]);
    C.int(["5"], "Ch 6 Obj 5", "2x(x^2+1)^3", 0, 1, "15/4", ["u = x² + 1: [(x² + 1)⁴/4] from 0 to 1.", "(16 − 1)/4 = 15/4."]);
    C.int(["5"], "Ch 6 Obj 5", "sin(x)cos(x)", 0, "pi/2", "1/2", ["u = sin x: [sin²x/2] from 0 to π/2 = 1/2."], {text:"Evaluate the integral from 0 to π/2 of sin x cos x dx."});

    /* ===== Obj 9: inverse trig & completing the square ===== */
    C.anti(["9"], "Ch 6 Obj 9 ex1a", "(x^2-5x+7)/(x+1)", "x^2/2-6x+13ln(abs(x+1))",
      ["Divide: (x² − 5x + 7)/(x + 1) = x − 6 + {{13/(x+1)}}.", "x²/2 − 6x + 13 ln|x + 1| + C."]);
    C.anti(["9"], "Ch 6 Obj 9 ex1b", "(x^2-3x+9)/(x+4)", "x^2/2-7x+37ln(abs(x+4))",
      ["Divide: x − 7 + {{37/(x+4)}} (check: (x + 4)(x − 7) + 37 = x² − 3x + 9).", "x²/2 − 7x + 37 ln|x + 4| + C."]);
    C.anti(["9"], "Ch 6 Obj 9 ex1c", "1/(x^2+4x+13)", "(1/3)arctan((x+2)/3)",
      ["Complete the square: (x + 2)² + 9. a = 3, u = x + 2.", "{{1/3}} arctan((x + 2)/3) + C."]);
    C.anti(["9"], "Ch 6 Obj 9 ex1d", "1/sqrt(-x^2+6x-5)", "arcsin((x-3)/2)",
      ["Factor out −1: −[(x − 3)² − 4] = 4 − (x − 3)². a = 2, u = x − 3.", "arcsin((x − 3)/2) + C."], {pts:[1.3, 2, 2.5, 3.2, 4, 4.6]});
    C.anti(["9"], "Ch 6 Obj 9 ex1e", "2x/(x^2+8x+17)", "ln(abs(x^2+8x+17))-8arctan(x+4)",
      ["Top: (2x + 8) − 8.", "∫ {{(2x+8)/(x^2+8x+17)}} dx = ln|x² + 8x + 17|.", "−8∫ {{1/((x+4)^2+1)}} dx = −8 arctan(x + 4).", "ln|x² + 8x + 17| − 8 arctan(x + 4) + C."]);
    C.anti(["9"], "Ch 6 Obj 9", "1/(x^2+9)", "(1/3)arctan(x/3)", ["a = 3: {{1/3}} arctan(x/3) + C."]);
    C.anti(["9"], "Ch 6 Obj 9", "1/sqrt(9-x^2)", "arcsin(x/3)", ["a = 3: arcsin(x/3) + C."]);
    C.anti(["9"], "Ch 6 Obj 9", "1/(x^2+2x+2)", "arctan(x+1)", ["(x + 1)² + 1. a = 1, u = x + 1.", "arctan(x + 1) + C."]);
    C.anti(["9"], "Ch 6 Obj 9", "(x^2+1)/(x-1)", "x^2/2+x+2ln(abs(x-1))", ["Divide: x + 1 + {{2/(x-1)}}.", "x²/2 + x + 2 ln|x − 1| + C."]);
    C.int(["9"], "Ch 6 Obj 9", "1/(1+x^2)", 0, 1, "pi/4", ["[arctan x] from 0 to 1 = π/4."]);

    /* ===== Obj 10: partial fractions ===== */
    C.anti(["10"], "Ch 6 Obj 10 ex1a", "2/(x^2-5x+6)", "-2ln(abs(x-2))+2ln(abs(x-3))",
      ["(x − 2)(x − 3). 2 = A(x − 3) + B(x − 2).", "x = 3: B = 2. x = 2: A = −2.", "−2 ln|x − 2| + 2 ln|x − 3| + C."]);
    C.int(["10"], "Ch 6 Obj 10 ex1b", "x/(2x^2+3x-5)", 2, 3, "(5/14)ln(11/9)+(1/7)ln(2)",
      ["(2x + 5)(x − 1). x = A(x − 1) + B(2x + 5).", "x = 1: B = 1/7. x = 0: A = 5/7.", "(5/14)[ln|2x + 5|] + (1/7)[ln|x − 1|] from 2 to 3.", "= (5/14) ln(11/9) + (1/7) ln 2."]);
    C.anti(["10"], "Ch 6 Obj 10", "1/(x^2-1)", "(1/2)ln(abs(x-1))-(1/2)ln(abs(x+1))",
      ["(x − 1)(x + 1). A = 1/2, B = −1/2.", "(1/2) ln|x − 1| − (1/2) ln|x + 1| + C."]);
    C.anti(["10"], "Ch 6 Obj 10", "(x+5)/(x^2+x-2)", "2ln(abs(x-1))-ln(abs(x+2))",
      ["(x − 1)(x + 2). x + 5 = A(x + 2) + B(x − 1).", "x = 1: A = 2. x = −2: B = −1.", "2 ln|x − 1| − ln|x + 2| + C."]);
    C.int(["10"], "Ch 6 Obj 10", "1/(x^2-3x+2)", 3, 4, "ln(4/3)",
      ["(x − 1)(x − 2): {{1/(x-2)}} − {{1/(x-1)}}.", "[ln|x − 2| − ln|x − 1|] from 3 to 4 = (ln 2 − ln 3) − (0 − ln 2) = ln(4/3)."]);
    k.ask(["10"], "Ch 6 Obj 10", "Decompose 1/((x − 1)(x + 1)) = A/(x − 1) + B/(x + 1).", [{l:"A =", t:"num", a:"1/2"}, {l:"B =", t:"num", a:"-1/2"}],
      ["1 = A(x + 1) + B(x − 1).", "x = 1: 1 = 2A → A = 1/2. x = −1: 1 = −2B → B = −1/2."], {kind:"num"});
    C.pick(["10"], "Ch 6 Obj 10", "What's the best first move for ∫ (2x + 1)/(x² + x) dx?", ["It's ln|x² + x|: the top is the bottom's derivative", "Partial fractions with A/x + B/(x + 1)", "Complete the square on the bottom", "Long division, since the powers match"], "It's ln|x² + x|: the top is the bottom's derivative",
      ["Always check the chain rule first. d/dx(x² + x) = 2x + 1."]);

    /* ===== Obj 12: improper integrals ===== */
    C.num(["12"], "Ch 6 Obj 12 exa", "Evaluate ∫ from 1 to ∞ of 1/(x² + 1) dx.", "pi/4",
      ["lim as b → ∞ of [arctan x] from 1 to b.", "π/2 − π/4 = π/4. Converges."], {label:"Value ="});
    C.num(["12"], "Ch 6 Obj 12 exb", "Evaluate ∫ from 0 to ∞ of 2e^(−x) dx.", "2",
      ["lim as b → ∞ of [−2e^(−x)] from 0 to b = lim (−2e^(−b) + 2) = 2."], {label:"Value ="});
    C.pick(["12"], "Ch 6 Obj 12 exc", "Does ∫ from 0 to 1 of x/(x² − 1) dx converge or diverge?", ["Diverges: it goes to −∞", "Converges to 0 by symmetry", "Converges to −1/2 exactly", "Converges to (1/2) ln 2"], "Diverges: it goes to −∞",
      ["Improper at x = 1 (division by 0).", "lim as b → 1⁻ of (1/2) ln|b² − 1| → −∞. Diverges."]);
    C.num(["12"], "Ch 6 Obj 12", "Evaluate ∫ from 1 to ∞ of 1/x² dx.", "1",
      ["lim as b → ∞ of [−1/x] from 1 to b = lim (−1/b + 1) = 1."], {label:"Value ="});
    C.num(["12"], "Ch 6 Obj 12", "Evaluate ∫ from 1 to ∞ of 1/x³ dx.", "1/2",
      ["lim of [{{-1/(2x^2)}}] from 1 to b = 0 + 1/2."], {label:"Value ="});
    C.num(["12"], "Ch 6 Obj 12", "Evaluate ∫ from 0 to 1 of 1/√x dx.", "2",
      ["Improper at 0: lim as a → 0⁺ of [2√x] from a to 1 = 2 − 0 = 2."], {label:"Value ="});
    C.num(["12"], "Ch 6 Obj 12", "Evaluate ∫ from 0 to ∞ of e^(−3x) dx.", "1/3",
      ["lim of [−(1/3)e^(−3x)] from 0 to b = 0 + 1/3."], {label:"Value ="});
    C.pick(["12"], "Ch 6 Obj 12", "Does ∫ from 1 to ∞ of 1/x dx converge?", ["No, ln b → ∞", "Yes, it converges to 1", "Yes, it converges to 0", "Yes, it converges to e"], "No, ln b → ∞",
      ["lim as b → ∞ of ln b − ln 1 = ∞. Diverges (p = 1)."]);
    C.pick(["12"], "Ch 6 Obj 12", "Why is ∫ from 0 to 2 of 1/(x − 1)² dx improper?", ["The function isn't defined at x = 1", "The upper limit 2 is too large", "The function is negative on part of it", "It isn't improper: both limits are finite"], "The function isn't defined at x = 1",
      ["Division by 0 at x = 1, which is inside [0, 2]."]);
  }
});
})();
