/* Calculus BC · Chapter 10: Infinite Series
   Source: Ch 10 Obj 1 (Sequences), 2 (Geometric & p-series), 3 (nth-term & Integral Tests), 4 (Comparison),
   5 (Alternating Series), 6 (Ratio Test), 8A (Power Series), 9 (Taylor & Maclaurin), 10 class notes. */
(() => {
const conv = ["Converges", "Diverges"];
Study.addUnit("calc", {
  id: "c10",
  name: "Ch 10: Infinite Series",
  short: "Ch 10",
  sections: [
    {id:"1", name:"Obj 1: Sequences"},
    {id:"2", name:"Obj 2: Geometric & p-Series"},
    {id:"3", name:"Obj 3: nth-Term & Integral Tests"},
    {id:"4", name:"Obj 4: Comparison Tests"},
    {id:"5", name:"Obj 5: Alternating Series"},
    {id:"6", name:"Obj 6: Ratio Test"},
    {id:"8", name:"Obj 8A: Intro to Power Series"},
    {id:"9", name:"Obj 9: Taylor & Maclaurin Series"},
    {id:"10", name:"Obj 10: Taylor Approximations & Lagrange Error"}
  ],

  notes: {
    "1": [
      {sum:["A sequence {aₙ} is a list of numbers made by a rule. The domain is integers, usually n ≥ 1 or n ≥ 0.",
            "n! (n factorial) multiplies every whole number from 1 to n: 3! = 3 · 2 · 1 = 6. Also 0! = 1.",
            "Linear (arithmetic) sequences add the same amount each time: aₙ = (difference)n + (start).",
            "Alternating signs come from (−1)ⁿ or (−1)ⁿ⁺¹."]},
      {p:"**What it's for:** sequences are the building blocks of series. Before you can add up infinitely many terms, you need to be able to describe the terms with a rule and see where they're heading."},
      {h:"Listing terms"},
      {ex:{q:"List the first three terms of sₙ = (n + 1)!, n ≥ 1.", a:["n = 1: 2! = 2. n = 2: 3! = 6. n = 3: 4! = 24."]}},
      {ex:{q:"List the first three terms of aₙ = (−1)ⁿ · n², n ≥ 0.", a:["a₀ = 0, a₁ = −1, a₂ = 4."]}},
      {tip:"Calculator: factorial is under Math → Probability (or Alpha F2)."},
      {h:"Finding the rule"},
      {steps:["**Look at the change** between terms. The same amount added each time is linear: aₙ = dn + b.", "**Split fractions** into a top pattern and a bottom pattern.", "**Alternating signs?** Multiply by (−1)ⁿ⁺¹ if the first term is positive (starting at n = 1), or (−1)ⁿ if it's negative."]},
      {ex:{q:"Find a rule for 3, 8, 13, 18, …", a:["Add 5 each time: linear.", "aₙ = 5n + 3 for n ≥ 0, or aₙ = 5n − 2 for n ≥ 1."]}},
      {ex:{q:"Find a rule for 2/2, −4/3, 6/4, −8/5, …", a:["Tops: 2n. Bottoms: n + 1. Signs: +, −, +, − starting at n = 1.", "aₙ = {{2n/(n+1)}} · (−1)ⁿ⁺¹."]}},
      {check:[
        {q:"What's 5!?", a:"5 · 4 · 3 · 2 · 1 = 120."},
        {q:"What's 0!?", a:"1."},
        {q:"Find a rule for 1, 4, 9, 16, … (n ≥ 1).", a:"aₙ = n²."},
        {q:"Simplify (n + 1)!/n!.", a:"n + 1."}]}
    ],
    "2": [
      {sum:["An infinite series Σ aₙ converges if its sum is a finite number L, and diverges otherwise.",
            "Geometric Σ a·rᵏ: converges if |r| < 1, to (first term)/(1 − r). Diverges if |r| ≥ 1.",
            "p-series Σ 1/nᵖ: converges if p > 1, diverges if p ≤ 1.",
            "p = 1 is the harmonic series Σ 1/n: it diverges."]},
      {p:"**What it's for:** can you add infinitely many numbers and get a finite answer? Sometimes. Walk halfway to a wall, then half the rest, and so on: infinitely many steps, but you cover exactly the full distance. Geometric and p-series are the two families where you can tell right away."},
      {h:"Spotting them"},
      {table:{head:["Series", "Looks like", "Converges when"], rows:[
        ["geometric", "the exponent is the variable: 4(2)ⁿ⁺¹, 5·2ⁿ/3ⁿ⁺¹", "|r| < 1 (sum = first term/(1 − r))"],
        ["p-series", "the base is the variable, the power is a number: 4/k², 1/(n√n)", "p > 1"]]}},
      {ex:{q:"Σ (n = 1 to ∞) 4(2)ⁿ⁺¹", a:["Geometric (the exponent is the variable). r = 2 > 1.", "Diverges."]}},
      {ex:{q:"Σ (k = 1 to ∞) 4/k²", a:["p-series with p = 2 > 1.", "Converges."]}},
      {ex:{q:"Σ (n = 0 to ∞) 5 · 2ⁿ/3ⁿ⁺¹", a:["Geometric: rewrite as (5/3)(2/3)ⁿ. r = 2/3 < 1.", "First term (n = 0): 5/3.", "Converges to (5/3)/(1 − 2/3) = 5."]}},
      {ex:{q:"Σ (n = 1 to ∞) 1/(n√n)", a:["n√n = n^(3/2): p-series with p = 3/2 > 1.", "Converges."]}},
      {h:"Partial sums"},
      {p:"The nth partial sum Sₙ adds the first n terms. The sequence of partial sums is S₁, S₂, S₃, …, and the series converges if that sequence has a limit."},
      {ex:{q:"For Σ (k = 1 to ∞) k/(k² + 1), find S₃.", a:["Terms: 1/2, 2/5, 3/10.", "S₁ = 1/2, S₂ = 1/2 + 2/5, S₃ = 1/2 + 2/5 + 3/10 = 6/5."]}},
      {warn:"The sum formula uses the FIRST term, not a. Plug in the starting index to get it."},
      {check:[
        {q:"Σ (n = 0 to ∞) (1/2)ⁿ. Sum?", a:"1/(1 − 1/2) = 2."},
        {q:"Σ 1/√n: converge or diverge?", a:"p = 1/2 ≤ 1: diverges."},
        {q:"Σ 3(−1/4)ⁿ from n = 0. Sum?", a:"3/(1 + 1/4) = 12/5."},
        {q:"Is Σ 1/n convergent?", a:"No. It's the harmonic series (p = 1)."}]}
    ],
    "3": [
      {sum:["nth-term test: if lim aₙ ≠ 0, the series diverges. If the limit is 0, the test tells you nothing.",
            "Converging requires the terms to go to 0 at the end, but that alone isn't enough.",
            "Integral test: if ∫ from 1 to ∞ of f(x) dx converges, so does Σ aₖ; if it diverges, so does the series.",
            "Integral test conditions: aₖ = f(k), f is continuous, positive, and non-increasing. It's a last resort."]},
      {p:"**What it's for:** you can't add infinitely many terms directly, so you need tests. The nth-term test is the quick check (terms that don't shrink to 0 can't add to a finite number). The integral test compares the sum to an area you already know how to find."},
      {ex:{q:"Σ (k = 1 to ∞) 1/(k · k²)", a:["= Σ 1/k³: p-series, p = 3 > 1.", "Converges."]}},
      {ex:{q:"Σ (n = 1 to ∞) 3 · 4ⁿ/2ⁿ⁺¹", a:["Geometric with r = 4/2 = 2 > 1.", "Diverges."]}},
      {ex:{q:"Σ (n = 2 to ∞) 2n/(3n − 1)", a:["Not p, not geometric: try the nth-term test.", "lim 2n/(3n − 1) = 2/3 ≠ 0.", "Diverges."]}},
      {h:"Integral test"},
      {steps:["**Rewrite as an integral:** Σ from k = a of aₖ becomes ∫ from a to ∞ of f(x) dx.", "**Switch to limit notation** and integrate.", "**Converges/diverges** together with the integral."]},
      {ex:{q:"Use the integral test on Σ (k = 3 to ∞) k{{e^(-k)}}.", a:["∫ from 3 to ∞ of x{{e^(-x)}} dx. Integration by parts: u = x, dv = {{e^(-x)}} dx.", "lim as b → ∞ of [−x{{e^(-x)}} − {{e^(-x)}}] from 3 to b.", "= 0 + 3{{e^(-3)}} + {{e^(-3)}} = 4/e³.", "The integral converges, so the series converges."]}},
      {warn:"lim aₙ = 0 does NOT mean the series converges. Σ 1/n has terms going to 0 and still diverges."},
      {check:[
        {q:"Σ n/(n + 1): what does the nth-term test say?", a:"lim = 1 ≠ 0, so it diverges."},
        {q:"Σ 1/n²: nth-term test?", a:"The limit is 0, so the test says nothing. (It converges as a p-series.)"},
        {q:"Name the integral test conditions.", a:"Positive, continuous, non-increasing, and aₖ = f(k)."},
        {q:"Does the integral's value equal the series' sum?", a:"No. It only tells you whether the series converges."}]}
    ],
    "4": [
      {sum:["Use comparison tests for modified p-series and geometric series (with extra + or − pieces).",
            "Direct Comparison: 0 < aₖ ≤ bₖ. If the bigger Σ bₖ converges, so does Σ aₖ. If the smaller Σ aₖ diverges, so does Σ bₖ.",
            "Limit Comparison: if lim aₖ/bₖ = L, a positive finite number, both series do the same thing.",
            "If the limit is 0 or ∞, the limit comparison test fails (you picked the wrong bₖ)."]},
      {p:"**What it's for:** a series like 1/(3k² + 2) is almost a p-series but not quite. Comparison tests let you say: it behaves like 1/(3k²), and you already know what that one does."},
      {steps:["**Let aₖ be the given series.**", "**Let bₖ be a basic p-series or geometric series:** drop the + or − extras.", "**State whether Σ bₖ converges or diverges.**", "**Use a comparison test** (direct: figure out the inequality, limit: take lim aₖ/bₖ)."]},
      {ex:{q:"Σ (k = 1 to ∞) 1/(3k² + 2)", a:["bₖ = 1/(3k²): converges (p = 2).", "Direct: 1/(3k² + 2) ≤ 1/(3k²), smaller than a convergent series, so it converges.", "Limit: lim (1/(3k² + 2)) · 3k² = 1, positive and finite, so both converge."]}},
      {ex:{q:"Σ (n = 2 to ∞) 7ⁿ/(5ⁿ − 1)", a:["bₙ = 7ⁿ/5ⁿ = (7/5)ⁿ: diverges (r > 1).", "A smaller denominator makes a bigger number: 7ⁿ/(5ⁿ − 1) ≥ 7ⁿ/5ⁿ.", "Bigger than a divergent series, so it diverges."]}},
      {warn:"Direct comparison only works in two directions: smaller than convergent, or bigger than divergent. Smaller than divergent tells you nothing."},
      {check:[
        {q:"What bₖ would you use for Σ 1/(k³ + 5)?", a:"1/k³."},
        {q:"aₖ ≤ bₖ and Σ bₖ diverges. What about Σ aₖ?", a:"No conclusion."},
        {q:"lim aₖ/bₖ = 0 in the limit comparison test. What happened?", a:"The test fails: try a different bₖ or test."},
        {q:"Σ 1/(2ⁿ + 3): converge or diverge?", a:"Converges: it's smaller than Σ (1/2)ⁿ."}]}
    ],
    "5": [
      {sum:["Alternating series Σ (−1)ⁿ aₙ converges if lim aₙ = 0 AND the terms are non-increasing (aₙ₊₁ ≤ aₙ).",
            "Absolute convergence: Σ |aₙ| converges too. It doesn't need the alternating signs.",
            "Conditional convergence: Σ aₙ converges but Σ |aₙ| diverges. It needs the alternating to converge.",
            "Error bound: |error| ≤ |first neglected term| when you stop at a partial sum."]},
      {p:"**What it's for:** alternating signs make terms cancel, so a series that would diverge with all plus signs (like 1/n) can converge when the signs alternate. The error bound tells you exactly how close a partial sum is to the true total."},
      {steps:["**Identify aₖ:** the non-alternating part.", "**Take lim aₖ.** Not 0: diverges.", "**If it's 0, check aₖ₊₁ ≤ aₖ** (replace k with k + 1)."]},
      {ex:{q:"Σ (k = 1 to ∞) (−1)ᵏ⁺¹ · 1/(k + 1). Converge or diverge? Absolutely or conditionally?", a:["aₖ = 1/(k + 1). lim aₖ = 0.", "aₖ₊₁ = 1/(k + 2) ≤ 1/(k + 1).", "Converges. Σ 1/(k + 1) diverges (like harmonic), so it's conditional."]}},
      {ex:{q:"Same series: estimate the sum with S₃ and find the error bound.", a:["S₃ = 1/2 − 1/3 + 1/4 ≈ 0.417.", "The first neglected term is a₄ = 1/5, so |E| ≤ 1/5."]}},
      {ex:{q:"Σ (n = 1 to ∞) (−1)ⁿ · n²/(3n² + 2)", a:["lim n²/(3n² + 2) = 1/3 ≠ 0.", "Diverges."]}},
      {table:{head:["Σ |aₙ|", "Σ aₙ", "Conclusion"], rows:[["converges", "converges", "absolutely convergent"], ["diverges", "converges", "conditionally convergent"], ["diverges", "diverges", "divergent"]]}},
      {check:[
        {q:"Σ (−1)ⁿ/n²: absolute or conditional?", a:"Absolute: Σ 1/n² converges."},
        {q:"Σ (−1)ⁿ/√n: absolute or conditional?", a:"Conditional: it converges by the AST, but Σ 1/√n diverges."},
        {q:"Error bound after S₅?", a:"|E| ≤ |a₆|, the first term you left out."},
        {q:"What two things does the alternating series test check?", a:"lim aₙ = 0 and aₙ₊₁ ≤ aₙ."}]}
    ],
    "6": [
      {sum:["Ratio test: L = lim |aₖ₊₁/aₖ|.",
            "L < 1: converges absolutely. L > 1: diverges. L = 1: no conclusion (try another test).",
            "Use it for mixed functions and factorials: geometric pieces, powers, and n!.",
            "Simplify factorials: (n + 1)! = (n + 1) · n!."]},
      {p:"**What it's for:** for series with factorials or exponentials mixed with powers, compare each term to the one before. If each term is eventually less than a fixed fraction of the last one, the series behaves like a convergent geometric series."},
      {steps:["**Identify aₖ and aₖ₊₁** (replace k with k + 1).", "**Set up lim |aₖ₊₁ · (1/aₖ)|** (multiply by the reciprocal).", "**Simplify and evaluate.**"]},
      {ex:{q:"Σ (k = 1 to ∞) 2ᵏ/k²", a:["aₖ₊₁ = 2ᵏ⁺¹/(k + 1)².", "lim [2ᵏ⁺¹/(k + 1)²] · [k²/2ᵏ] = lim 2k²/(k + 1)² = 2.", "2 > 1, so it diverges."]}},
      {ex:{q:"Σ (n = 1 to ∞) 3ⁿ/n!", a:["lim [3ⁿ⁺¹/(n + 1)!] · [n!/3ⁿ].", "= lim 3/(n + 1) = 0.", "0 < 1, so it converges."]}},
      {warn:"L = 1 means the ratio test can't decide. That's what happens on every p-series, so don't use it there."},
      {check:[
        {q:"Simplify (n + 2)!/n!.", a:"(n + 2)(n + 1)."},
        {q:"Ratio test gives L = 1/2. Conclusion?", a:"Converges absolutely."},
        {q:"Why is the ratio test useless on Σ 1/n²?", a:"The limit is 1: no conclusion."},
        {q:"Σ n!/2ⁿ: converge or diverge?", a:"lim (n + 1)/2 = ∞ > 1: diverges."}]}
    ],
    "8": [
      {sum:["A power series Σ aₖ(x − c)ᵏ is centered at c. It's a function of x.",
            "Exactly one is true: it converges only at x = c (R = 0), for all x (R = ∞), or for |x − c| < R.",
            "R is the radius of convergence. The interval of convergence is (c − R, c + R); the endpoints are checked separately.",
            "For geometric-looking power series: set |r| < 1 and solve for x."]},
      {p:"**What it's for:** a power series is like an infinitely long polynomial. Where it converges, it acts as a real function, which is how calculators compute things like sin and eˣ. The first question is always: for which x does it work?"},
      {steps:["**Find the ratio:** put everything to the power of k.", "**Geometric:** set |r| < 1.", "**Solve for x:** |x − c| < R means −R < x − c < R.", "**Answers:** the interval is the solution. In |x − c| < R, c is the center and R is the radius."]},
      {ex:{q:"Find the center, radius, and interval of convergence of Σ (k = 0 to ∞) (x − 1)ᵏ/5ᵏ.", a:["r = (x − 1)/5. |(x − 1)/5| < 1 → |x − 1| < 5.", "−5 < x − 1 < 5 → −4 < x < 6.", "Center 1, radius 5, interval −4 < x < 6."]}},
      {ex:{q:"Same for Σ (k = 2 to ∞) (x/3)ᵏ.", a:["|x/3| < 1 → |x| < 3.", "Center 0, radius 3, interval −3 < x < 3. (The starting index doesn't change it.)"]}},
      {ex:{q:"Find two x-values that make Σ (k = 0 to ∞) (x/4)ᵏ converge.", a:["It needs |x| < 4: x = 0, 1, 2, 3 all work. x = 5, 7, 10 don't."]}},
      {check:[
        {q:"Every power series converges at what x?", a:"Its center, x = c."},
        {q:"Σ (2x)ⁿ: radius?", a:"|2x| < 1 → |x| < 1/2, so R = 1/2."},
        {q:"Σ xⁿ/n!: radius?", a:"∞. It converges for all x."},
        {q:"Center of Σ (x + 3)ⁿ/2ⁿ?", a:"−3 (x + 3 = x − (−3))."}]}
    ],
    "9": [
      {sum:["Taylor series about x = c: Σ {{f^n}}(c)/n! · (x − c)ⁿ. When c = 0 it's a Maclaurin series.",
            "Each term (the polynomial generator): fⁿ(c)(x − c)ⁿ/n!, where fⁿ(c) is the nth derivative at c.",
            "Memorize eˣ, sin x, cos x, and 1/(1 − x). Substitute to get new ones (eˣ → e^(−3x)).",
            "Going backwards: fⁿ(0) = (coefficient of xⁿ) · n!."]},
      {p:"**What it's for:** a Taylor series rebuilds a function from its derivatives at one point. Even a few terms give a polynomial that hugs the function near that point, which is how you approximate √2 or sin 1 without a calculator."},
      {h:"Basic series (memorize)"},
      {table:{head:["Function", "Series"], rows:[
        ["{{e^x}}", "1 + x + x²/2! + x³/3! + … (every power)"], ["sin x", "x − x³/3! + x⁵/5! − … (odd powers)"],
        ["cos x", "1 − x²/2! + x⁴/4! − … (even powers)"], ["{{1/(1-x)}}", "1 + x + x² + x³ + … (|x| < 1)"]]}},
      {ex:{q:"Write the first four terms of the Taylor series about 4 if f(4) = 2, f′(4) = −4, f″(4) = 3, f‴(4) = −2.", a:["f(4) + f′(4)(x − 4) + f″(4)(x − 4)²/2! + f‴(4)(x − 4)³/3!.", "= 2 − 4(x − 4) + (3/2)(x − 4)² − (2/6)(x − 4)³."]}},
      {ex:{q:"f(0) = 3, f′(0) = 2, f″(0) = 7. Write the first three terms and approximate f(1/2).", a:["3 + 2x + (7/2)x².", "f(1/2) ≈ 3 + 1 + 7/8 = 39/8."]}},
      {ex:{q:"Find the third-degree Taylor polynomial of √x about x = 1, then approximate √2.", a:["f(1) = 1, f′(1) = 1/2, f″(1) = −1/4, f‴(1) = 3/8.", "1 + (1/2)(x − 1) − (1/8)(x − 1)² + (1/16)(x − 1)³.", "√2 ≈ 1 + 1/2 − 1/8 + 1/16 = 23/16."]}},
      {h:"Reading derivatives from a series"},
      {ex:{q:"The expansion is 2 + x − (5/2!)x² + (7/3!)x³ − (11/4!)x⁴ + … Find f‴(0) and f⁽⁴⁾(0).", a:["The pattern fⁿ(0)/n! is already showing: f‴(0) = 7, f⁽⁴⁾(0) = −11."]}},
      {ex:{q:"The expansion is 3 + 4x + (5/3)x² + (2/9)x³ + (3/11)x⁴ + … Find f‴(0).", a:["fⁿ(0) = coefficient · n!.", "f‴(0) = (2/9)(3!) = 4/3."]}},
      {h:"Substituting into known series"},
      {ex:{q:"First three terms of e^(−3x) about 0.", a:["Replace x with −3x in eˣ: 1 + (−3x) + (−3x)²/2!.", "= 1 − 3x + 9x²/2."]}},
      {ex:{q:"First three terms of sin(2x) and cos(x²) about 0.", a:["sin(2x) = 2x − (2x)³/3! + (2x)⁵/5! = 2x − 4x³/3 + 4x⁵/15.", "cos(x²) = 1 − (x²)²/2! + (x²)⁴/4! = 1 − x⁴/2 + x⁸/24."]}},
      {warn:"Don't forget the factorials, and keep the substitution in parentheses: (2x)³ = 8x³, not 2x³."},
      {check:[
        {q:"First three terms of eˣ?", a:"1 + x + x²/2."},
        {q:"Coefficient of x⁵ in sin x?", a:"1/5! = 1/120."},
        {q:"The coefficient of x³ is 1/2. Find f‴(0).", a:"(1/2)(3!) = 3."},
        {q:"First two nonzero terms of x·cos x?", a:"x − x³/2."}]}
    ],
    "10": [
      {sum:["f(x) = Pₙ(x) + Rₙ(x): the exact value is the approximation plus the remainder (error).",
            "Lagrange error bound: |Rₙ(x)| ≤ max|f⁽ⁿ⁺¹⁾(z)| · |x − c|ⁿ⁺¹/(n + 1)!, with z between x and c.",
            "Use it for series that don't alternate. For alternating series, use the first neglected term.",
            "Power series can be differentiated and integrated term by term; the radius stays the same."]},
      {p:"**What it's for:** a Taylor polynomial is only an approximation, so how wrong could it be? The Lagrange bound answers that with a guarantee: the error is at most this much. It's the next term of the series, with the biggest possible value of the next derivative."},
      {h:"Lagrange error bound"},
      {steps:["**Identify n** (the degree), c (the center), and x (the value you're approximating at).", "**Find max|f⁽ⁿ⁺¹⁾|** between x and c: it can be given, read off a graph, assumed (1 for sin and cos), or calculated.", "**Plug in:** max · |x − c|ⁿ⁺¹/(n + 1)!."]},
      {ex:{q:"f(0) = 6, f′(0) = 8, f″(0) = 30, f‴(0) = 48, and |f⁽⁴⁾(x)| ≤ 75 on (0, 1). Find T₃(x), approximate f(0.2), and bound the error.", a:["T₃(x) = 6 + 8x + (30/2)x² + (48/6)x³ = 6 + 8x + 15x² + 8x³.", "f(0.2) ≈ 6 + 1.6 + 0.6 + 0.064 = 8.264.", "|E₃| ≤ 75(0.2)⁴/4! = 0.005."]}},
      {ex:{q:"P₄(x) = 1 − x²/2! + x⁴/4! approximates cos(0.2). Find the Lagrange error bound.", a:["Every derivative of cos is at most 1.", "|E₄| ≤ 1 · (0.2)⁵/5! ≈ 0.0000027."]}},
      {ex:{q:"f(x) = sin(x²) + cos x. Write the first four nonzero terms about 0, and find f⁽⁶⁾(0).", a:["sin(x²) = x² − x⁶/3! + …, cos x = 1 − x²/2! + x⁴/4! − x⁶/6! + …. Combine like terms.", "f(x) = 1 + (1 − 1/2)x² + (1/24)x⁴ + (−1/6 − 1/720)x⁶ + …", "f⁽⁶⁾(0) = coefficient · 6! = (−1/6 − 1/720) · 720 = −121."]}},
      {h:"Derivatives and integrals of power series"},
      {p:"If f(x) = Σ aₙ(x − c)ⁿ has radius R > 0, then f′ and ∫ f have the same radius (the endpoints may change). Use the power rule on each term."},
      {ex:{q:"f(x) = Σ (n = 0 to ∞) xⁿ/(n + 1)². Write the first three nonzero terms of f′(x) and ∫ f(x) dx.", a:["f′(x) = Σ n·x^(n−1)/(n + 1)² (the n = 0 term is 0): 1/4 + (2/9)x + (3/16)x² + …", "∫ f dx = C + Σ x^(n+1)/((n + 1)²(n + 1)): C + x + x²/8 + x³/27 + …"]}},
      {h:"AP-style series questions"},
      {ex:{q:"Maclaurin series Σ (n = 1 to ∞) (n + 1)xⁿ/(n² 6ⁿ) has radius 6. Does it converge at x = 6?", a:["At x = 6: Σ (n + 1)/n².", "Limit compare with 1/n: lim (n + 1)/n = 1, and Σ 1/n diverges.", "So it diverges at x = 6."]}},
      {ex:{q:"g(x) = Σ (n + 1)x^(2n)/(n² 3ⁿ). Use the ratio test to find the radius.", a:["The ratio simplifies to n²(n + 2)x²/(3(n + 1)³) → x²/3.", "x²/3 < 1 → |x| < √3. Radius √3."]}},
      {warn:"The Lagrange bound uses the (n + 1)th derivative, not the nth. A degree-3 polynomial needs f⁽⁴⁾."},
      {check:[
        {q:"Degree-2 approximation centered at 0, used at x = 0.1, |f‴| ≤ 6. Error bound?", a:"6(0.1)³/3! = 0.001."},
        {q:"When do you use the alternating series error bound instead of Lagrange?", a:"When the series alternates (and its terms decrease to 0)."},
        {q:"f has radius of convergence 4. What's the radius for f′?", a:"4."},
        {q:"What's max|f⁽ⁿ⁺¹⁾| for sin or cos?", a:"At most 1."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);
    const cd = (sec, src, text, ans, steps) => C.pick([sec], src, text, conv, ans, steps);

    /* ===== Obj 1: sequences ===== */
    C.set(["1"], "Ch 10 Obj 1 ex1a", "List the first three terms of sₙ = (n + 1)!, n ≥ 1 (in order, separated by commas).", ["2", "6", "24"],
      ["2! = 2, 3! = 6, 4! = 24."], {label:"Terms:", ph:"e.g. 1, 2, 3"});
    C.set(["1"], "Ch 10 Obj 1 ex1b", "List the first three terms of aₙ = (−1)ⁿ · n², n ≥ 0.", ["0", "-1", "4"],
      ["a₀ = 0, a₁ = −1, a₂ = 4."], {label:"Terms:", ph:"e.g. 1, 2, 3"});
    C.expr(["1"], "Ch 10 Obj 1 ex2a", "Find a rule for 3, 8, 13, 18, … starting at n = 0.", "5n+3",
      ["Add 5 each time, starting at 3: aₙ = 5n + 3."], {label:"aₙ =", v:"n"});
    C.expr(["1"], "Ch 10 Obj 1 ex2a", "Find a rule for 3, 8, 13, 18, … starting at n = 1.", "5n-2",
      ["5(n − 1) + 3 = 5n − 2."], {label:"aₙ =", v:"n"});
    C.pick(["1"], "Ch 10 Obj 1 ex2b", "Find a rule for 2/2, −4/3, 6/4, −8/5, … (n ≥ 1).", ["(2n/(n + 1))(−1)ⁿ⁺¹", "(2n/(n + 1))(−1)ⁿ", "(n/(n + 1))(−1)ⁿ⁺¹", "(2n/(n + 2))(−1)ⁿ⁺¹"], "(2n/(n + 1))(−1)ⁿ⁺¹",
      ["Tops 2n, bottoms n + 1.", "The first term (n = 1) is positive, so (−1)ⁿ⁺¹."]);
    C.num(["1"], "Ch 10 Obj 1", "Evaluate 5!.", "120", ["5 · 4 · 3 · 2 · 1 = 120."], {label:"5! ="});
    C.expr(["1"], "Ch 10 Obj 1", "Simplify (n + 1)!/n!.", "n+1", ["(n + 1)! = (n + 1) · n!, so the n! cancels."], {label:"=", v:"n", pts:[1, 2, 3]});
    C.num(["1"], "Ch 10 Obj 1", "aₙ = (3n + 1)/(2n − 1). What does the sequence approach as n → ∞?", "3/2",
      ["Leading terms: 3n/2n = 3/2."], {label:"Limit =", chk:{lim:["(3x+1)/(2x-1)", "inf"]}});
    C.expr(["1"], "Ch 10 Obj 1", "Find a rule for 1, 1/2, 1/4, 1/8, … starting at n = 0.", "(1/2)^n",
      ["Each term is half the last: (1/2)ⁿ."], {label:"aₙ =", v:"n"});

    /* ===== Obj 2: geometric & p-series ===== */
    cd("2", "Ch 10 Obj 2 ex1a", "Does Σ (n = 1 to ∞) 4(2)ⁿ⁺¹ converge or diverge?", "Diverges", ["Geometric, r = 2 > 1."]);
    cd("2", "Ch 10 Obj 2 ex1b", "Does Σ (k = 1 to ∞) 4/k² converge or diverge?", "Converges", ["p-series, p = 2 > 1."]);
    C.num(["2"], "Ch 10 Obj 2 ex1c", "Find the sum of Σ (n = 0 to ∞) 5 · 2ⁿ/3ⁿ⁺¹.", "5",
      ["(5/3)(2/3)ⁿ: geometric, r = 2/3.", "First term (n = 0): 5/3.", "Sum: (5/3)/(1 − 2/3) = 5."], {label:"Sum ="});
    cd("2", "Ch 10 Obj 2 ex1d", "Does Σ (n = 1 to ∞) 1/(n√n) converge or diverge?", "Converges", ["n√n = n^(3/2). p = 3/2 > 1."]);
    C.num(["2"], "Ch 10 Obj 2 ex2a", "For Σ (k = 1 to ∞) k/(k² + 1), find the third partial sum S₃.", "6/5",
      ["1/2 + 2/5 + 3/10 = 5/10 + 4/10 + 3/10 = 6/5."], {label:"S₃ ="});
    C.num(["2"], "Ch 10 Obj 2", "Find the sum of Σ (n = 0 to ∞) (1/2)ⁿ.", "2", ["1/(1 − 1/2) = 2."], {label:"Sum ="});
    C.num(["2"], "Ch 10 Obj 2", "Find the sum of Σ (n = 0 to ∞) 3(−1/4)ⁿ.", "12/5", ["3/(1 − (−1/4)) = 3/(5/4) = 12/5."], {label:"Sum ="});
    C.num(["2"], "Ch 10 Obj 2", "Find the sum of Σ (n = 1 to ∞) (2/3)ⁿ.", "2",
      ["First term (n = 1): 2/3.", "(2/3)/(1 − 2/3) = 2."], {label:"Sum ="});
    cd("2", "Ch 10 Obj 2", "Does Σ (n = 1 to ∞) 1/√n converge or diverge?", "Diverges", ["p = 1/2 ≤ 1."]);
    cd("2", "Ch 10 Obj 2", "Does Σ (n = 1 to ∞) 1/n converge or diverge?", "Diverges", ["Harmonic series, p = 1."]);
    cd("2", "Ch 10 Obj 2", "Does Σ (n = 0 to ∞) (−3/2)ⁿ converge or diverge?", "Diverges", ["Geometric, |r| = 3/2 ≥ 1."]);
    cd("2", "Ch 10 Obj 2", "Does Σ (n = 1 to ∞) 5/n^1.01 converge or diverge?", "Converges", ["p = 1.01 > 1 (barely, but that counts)."]);

    /* ===== Obj 3: nth-term & integral ===== */
    cd("3", "Ch 10 Obj 3 ex1a", "Does Σ (k = 1 to ∞) 1/(k · k²) converge or diverge?", "Converges", ["= Σ 1/k³. p = 3 > 1."]);
    cd("3", "Ch 10 Obj 3 ex1b", "Does Σ (n = 1 to ∞) 3 · 4ⁿ/2ⁿ⁺¹ converge or diverge?", "Diverges", ["Geometric with r = 4/2 = 2 > 1."]);
    cd("3", "Ch 10 Obj 3 ex1c", "Does Σ (n = 2 to ∞) 2n/(3n − 1) converge or diverge?", "Diverges", ["nth-term test: lim = 2/3 ≠ 0."]);
    C.num(["3"], "Ch 10 Obj 3 ex2", "For the integral test on Σ (k = 3 to ∞) ke^(−k), evaluate ∫ from 3 to ∞ of xe^(−x) dx.", "4/e^3",
      ["Parts: [−xe^(−x) − e^(−x)] from 3 to b.", "As b → ∞: 0 − (−3e^(−3) − e^(−3)) = 4/e³. So the series converges."], {label:"Integral ="});
    C.pick(["3"], "Ch 10 Obj 3", "For Σ aₙ, lim aₙ = 0. What can you conclude?", ["Nothing yet: use another test", "It converges, since the terms vanish", "It diverges, since it never stops", "It converges, and its sum is 0"], "Nothing yet: use another test",
      ["The nth-term test only proves divergence. Σ 1/n has terms → 0 and diverges."]);
    cd("3", "Ch 10 Obj 3", "Does Σ (n = 1 to ∞) n/(n + 1) converge or diverge?", "Diverges", ["lim n/(n + 1) = 1 ≠ 0."]);
    cd("3", "Ch 10 Obj 3", "Does Σ (n = 1 to ∞) cos(1/n) converge or diverge?", "Diverges", ["cos(1/n) → cos 0 = 1 ≠ 0."]);
    cd("3", "Ch 10 Obj 3", "Use the integral test: does Σ (n = 1 to ∞) 1/(n² + 1) converge or diverge?", "Converges",
      ["∫ from 1 to ∞ of {{1/(x^2+1)}} dx = π/2 − π/4 = π/4, finite."]);
    cd("3", "Ch 10 Obj 3", "Use the integral test: does Σ (n = 2 to ∞) 1/(n ln n) converge or diverge?", "Diverges",
      ["u = ln x: ∫ {{1/(x ln(x))}} dx = ln(ln x) → ∞."]);

    /* ===== Obj 4: comparison ===== */
    cd("4", "Ch 10 Obj 4 ex1a", "Does Σ (k = 1 to ∞) 1/(3k² + 2) converge or diverge?", "Converges",
      ["Compare to 1/(3k²): converges (p = 2).", "1/(3k² + 2) ≤ 1/(3k²), so it converges (or the limit comparison gives 1)."]);
    cd("4", "Ch 10 Obj 4 ex1b", "Does Σ (n = 2 to ∞) 7ⁿ/(5ⁿ − 1) converge or diverge?", "Diverges",
      ["Compare to (7/5)ⁿ: diverges.", "7ⁿ/(5ⁿ − 1) ≥ (7/5)ⁿ, bigger than divergent."]);
    C.num(["4"], "Ch 10 Obj 4 ex1a", "Limit comparison of aₖ = 1/(3k² + 2) with bₖ = 1/(3k²): find lim aₖ/bₖ.", "1",
      ["3k²/(3k² + 2) → 1."], {label:"L =", chk:{lim:["3x^2/(3x^2+2)", "inf"]}});
    cd("4", "Ch 10 Obj 4", "Does Σ (n = 1 to ∞) 1/(n³ + 5) converge or diverge?", "Converges", ["Smaller than Σ 1/n³ (converges)."]);
    cd("4", "Ch 10 Obj 4", "Does Σ (n = 1 to ∞) 1/(2ⁿ + 3) converge or diverge?", "Converges", ["Smaller than Σ (1/2)ⁿ (converges)."]);
    cd("4", "Ch 10 Obj 4", "Does Σ (n = 2 to ∞) 1/(n − 1) converge or diverge?", "Diverges", ["Bigger than Σ 1/n (diverges)."]);
    cd("4", "Ch 10 Obj 4", "Does Σ (n = 1 to ∞) (n + 1)/(n³ + 2) converge or diverge?", "Converges",
      ["Limit compare with 1/n²: lim (n + 1)n²/(n³ + 2) = 1.", "Σ 1/n² converges, so this does too."]);
    cd("4", "Ch 10 Obj 4", "Does Σ (n = 1 to ∞) 1/√(n + 4) converge or diverge?", "Diverges",
      ["Limit compare with 1/√n: the limit is 1. Σ 1/√n diverges (p = 1/2)."]);
    C.pick(["4"], "Ch 10 Obj 4", "0 < aₙ ≤ bₙ and Σ bₙ diverges. What can you say about Σ aₙ?", ["Nothing", "It converges", "It diverges", "Its sum is less than Σ bₙ"], "Nothing",
      ["Smaller than divergent proves nothing."]);
    C.pick(["4"], "Ch 10 Obj 4", "In a limit comparison test, lim aₙ/bₙ = ∞. What does it mean?", ["The test fails: pick a different bₙ", "Both series must diverge", "Both series must converge", "Only Σ aₙ diverges"], "The test fails: pick a different bₙ",
      ["L has to be positive and finite."]);

    /* ===== Obj 5: alternating ===== */
    C.pick(["5"], "Ch 10 Obj 5 ex1a", "Σ (k = 1 to ∞) (−1)ᵏ⁺¹/(k + 1): which is true?", ["Converges conditionally", "Converges absolutely", "Diverges", "Converges to 1"], "Converges conditionally",
      ["AST: 1/(k + 1) → 0 and decreases, so it converges.", "Σ 1/(k + 1) diverges, so it's conditional."]);
    C.num(["5"], "Ch 10 Obj 5 ex1b", "Estimate Σ (k = 1 to ∞) (−1)ᵏ⁺¹/(k + 1) using the third partial sum.", "5/12",
      ["S₃ = 1/2 − 1/3 + 1/4 = 5/12 ≈ 0.417."], {label:"S₃ ="});
    C.num(["5"], "Ch 10 Obj 5 ex1c", "What is the error bound for that S₃ estimate?", "1/5",
      ["The first neglected term: a₄ = 1/5.", "|E| ≤ 1/5."], {label:"|E| ≤"});
    cd("5", "Ch 10 Obj 5 ex2", "Does Σ (n = 1 to ∞) (−1)ⁿ · n²/(3n² + 2) converge or diverge?", "Diverges", ["lim n²/(3n² + 2) = 1/3 ≠ 0."]);
    C.pick(["5"], "Ch 10 Obj 5", "Σ (n = 1 to ∞) (−1)ⁿ/n²: which is true?", ["Converges absolutely", "Converges conditionally", "Diverges", "The test is inconclusive"], "Converges absolutely",
      ["Σ 1/n² converges (p = 2), so it's absolute."]);
    C.pick(["5"], "Ch 10 Obj 5", "Σ (n = 1 to ∞) (−1)ⁿ/√n: which is true?", ["Converges conditionally", "Converges absolutely", "Diverges", "The test is inconclusive"], "Converges conditionally",
      ["AST: 1/√n → 0 and decreases. Σ 1/√n diverges (p = 1/2)."]);
    C.num(["5"], "Ch 10 Obj 5", "Σ (n = 1 to ∞) (−1)ⁿ⁺¹/n³ is estimated with S₄. What is the error bound?", "1/125",
      ["First neglected term: a₅ = 1/5³ = 1/125."], {label:"|E| ≤"});
    C.num(["5"], "Ch 10 Obj 5", "Find S₄ for Σ (n = 1 to ∞) (−1)ⁿ⁺¹/n.", "7/12",
      ["1 − 1/2 + 1/3 − 1/4 = 12/12 − 6/12 + 4/12 − 3/12 = 7/12."], {label:"S₄ ="});
    C.pick(["5"], "Ch 10 Obj 5", "What's the first step of the alternating series test?", ["Check that lim aₙ = 0", "Check that Σ |aₙ| converges", "Use the ratio test", "Find S₁"], "Check that lim aₙ = 0",
      ["If the limit isn't 0, it diverges. If it is, then check that the terms decrease."]);

    /* ===== Obj 6: ratio test ===== */
    C.num(["6"], "Ch 10 Obj 6 ex1a", "Ratio test on Σ 2ᵏ/k²: find L = lim |aₖ₊₁/aₖ|.", "2",
      ["[2ᵏ⁺¹/(k + 1)²] · [k²/2ᵏ] = 2k²/(k + 1)² → 2.", "L > 1: diverges."], {label:"L =", chk:{lim:["2x^2/(x+1)^2", "inf"]}});
    C.num(["6"], "Ch 10 Obj 6 ex1b", "Ratio test on Σ 3ⁿ/n!: find L.", "0",
      ["[3ⁿ⁺¹/(n + 1)!] · [n!/3ⁿ] = 3/(n + 1) → 0.", "L < 1: converges."], {label:"L =", chk:{lim:["3/(x+1)", "inf"]}});
    cd("6", "Ch 10 Obj 6", "Does Σ (n = 1 to ∞) n!/2ⁿ converge or diverge?", "Diverges", ["L = lim (n + 1)/2 = ∞."]);
    cd("6", "Ch 10 Obj 6", "Does Σ (n = 1 to ∞) n/3ⁿ converge or diverge?", "Converges", ["L = lim (n + 1)/(3n) = 1/3 < 1."]);
    cd("6", "Ch 10 Obj 6", "Does Σ (n = 1 to ∞) n²/2ⁿ converge or diverge?", "Converges", ["L = lim (n + 1)²/(2n²) = 1/2 < 1."]);
    cd("6", "Ch 10 Obj 6", "Does Σ (n = 1 to ∞) 5ⁿ/(n · 4ⁿ) converge or diverge?", "Diverges", ["L = lim (5/4) · n/(n + 1) = 5/4 > 1."]);
    C.num(["6"], "Ch 10 Obj 6", "Ratio test on Σ n/3ⁿ: find L.", "1/3", ["(n + 1)/3ⁿ⁺¹ · 3ⁿ/n = (n + 1)/(3n) → 1/3."], {label:"L =", chk:{lim:["(x+1)/(3x)", "inf"]}});
    C.pick(["6"], "Ch 10 Obj 6", "The ratio test gives L = 1. What do you conclude?", ["No conclusion: try another test", "It converges absolutely", "It diverges by the ratio test", "It converges conditionally"], "No conclusion: try another test",
      ["L = 1 is inconclusive."]);
    C.expr(["6"], "Ch 10 Obj 6", "Simplify (n + 2)!/n!.", "(n+2)(n+1)", ["(n + 2)! = (n + 2)(n + 1)n!."], {label:"=", v:"n"});
    /* ===== Obj 8A: power series ===== */
    const ioc = (src, text, lo, hi, R, c, steps) => k.ask(["8"], src, text,
      [{l:"Center c =", t:"num", a:String(c)}, {l:"Radius R =", t:"num", a:String(R)}, {l:"Interval: from x =", t:"num", a:String(lo)}, {l:"to x =", t:"num", a:String(hi)}], steps, {kind:"num"});
    ioc("Ch 10 Obj 8A ex2a", "Σ (k = 0 to ∞) (x − 1)ᵏ/5ᵏ. Find the center, radius, and interval of convergence (endpoints not included).", -4, 6, 5, 1,
      ["r = (x − 1)/5, so |x − 1| < 5.", "−5 < x − 1 < 5 → −4 < x < 6. Center 1, radius 5."]);
    ioc("Ch 10 Obj 8A ex2b", "Σ (k = 2 to ∞) (x/3)ᵏ. Find the center, radius, and interval of convergence (endpoints not included).", -3, 3, 3, 0,
      ["|x/3| < 1 → |x| < 3.", "Center 0, radius 3, −3 < x < 3."]);
    ioc("Ch 10 Obj 8A ex1b", "Σ (k = 0 to ∞) ((x − 2)/6)ᵏ. Find the center, radius, and interval of convergence (endpoints not included).", -4, 8, 6, 2,
      ["|x − 2| < 6 → −4 < x < 8."]);
    ioc("Ch 10 Obj 8A", "Σ (n = 0 to ∞) (x + 3)ⁿ/2ⁿ. Find the center, radius, and interval of convergence (endpoints not included).", -5, -1, 2, -3,
      ["|x + 3| < 2 → −5 < x < −1. Center −3."]);
    C.num(["8"], "Ch 10 Obj 8A", "Find the radius of convergence of Σ (2x)ⁿ.", "1/2", ["|2x| < 1 → |x| < 1/2."], {label:"R ="});
    C.num(["8"], "Ch 10 Obj 8A", "Find the radius of convergence of Σ xⁿ/n! (type inf for ∞).", "inf",
      ["Ratio: |x|/(n + 1) → 0 < 1 for every x.", "R = ∞."], {label:"R ="});
    C.num(["8"], "Ch 10 Obj 8A", "Find the radius of convergence of Σ n! xⁿ.", "0",
      ["Ratio: (n + 1)|x| → ∞ unless x = 0.", "R = 0: it only converges at the center."], {label:"R ="});
    C.pick(["8"], "Ch 10 Obj 8A ex1a", "Which x makes Σ (k = 0 to ∞) (x/4)ᵏ converge?", ["x = 3", "x = 5", "x = 7", "x = −10"], "x = 3",
      ["It needs |x/4| < 1, so |x| < 4."]);
    C.pick(["8"], "Ch 10 Obj 8A", "A power series centered at c always converges at…", ["x = c", "x = 0", "every real x", "x = c + R"], "x = c",
      ["At the center every term after the first is 0."]);

    /* ===== Obj 9: Taylor & Maclaurin ===== */
    C.expr(["9"], "Ch 10 Obj 9 ex1", "Write the third-degree Taylor polynomial about x = 4 if f(4) = 2, f′(4) = −4, f″(4) = 3, f‴(4) = −2.", "2-4(x-4)+(3/2)(x-4)^2-(1/3)(x-4)^3",
      ["fⁿ(4)(x − 4)ⁿ/n! for n = 0 to 3.", "2 − 4(x − 4) + (3/2)(x − 4)² − (2/6)(x − 4)³."], {label:"T₃(x) ="});
    C.expr(["9"], "Ch 10 Obj 9 ex2a", "Write the second-degree Taylor polynomial about 0 if f(0) = 3, f′(0) = 2, f″(0) = 7.", "3+2x+7x^2/2",
      ["3 + 2x + (7/2!)x²."], {label:"T₂(x) ="});
    C.num(["9"], "Ch 10 Obj 9 ex2b", "Using 3 + 2x + (7/2)x², approximate f(1/2).", "39/8", ["3 + 1 + 7/8 = 39/8."], {label:"f(1/2) ≈"});
    C.expr(["9"], "Ch 10 Obj 9 ex3a", "Find the third-degree Taylor polynomial for f(x) = √x about x = 1.", "1+(x-1)/2-(x-1)^2/8+(x-1)^3/16",
      ["f(1) = 1, f′(1) = 1/2, f″(1) = −1/4, f‴(1) = 3/8.", "1 + (1/2)(x − 1) − (1/4)(x − 1)²/2 + (3/8)(x − 1)³/6."], {label:"T₃(x) ="});
    C.num(["9"], "Ch 10 Obj 9 ex3b", "Use that polynomial to approximate √2.", "23/16", ["1 + 1/2 − 1/8 + 1/16 = 23/16."], {label:"√2 ≈"});
    C.num(["9"], "Ch 10 Obj 9 ex4a", "The expansion of f is 2 + x − (5/2!)x² + (7/3!)x³ − (11/4!)x⁴ + … Find f‴(0).", "7", ["The x³ term is f‴(0)/3! · x³, and here it's 7/3!."], {label:"f‴(0) ="});
    C.num(["9"], "Ch 10 Obj 9 ex4b", "Same expansion: find f⁽⁴⁾(0).", "-11", ["The x⁴ term is −11/4!."], {label:"f⁽⁴⁾(0) ="});
    C.num(["9"], "Ch 10 Obj 9 ex5a", "The expansion of f is 3 + 4x + (5/3)x² + (2/9)x³ + (3/11)x⁴ + … Find f‴(0).", "4/3", ["(2/9) · 3! = 4/3."], {label:"f‴(0) ="});
    C.num(["9"], "Ch 10 Obj 9 ex5b", "Same expansion: find f⁽⁴⁾(0).", "72/11", ["(3/11) · 4! = 72/11."], {label:"f⁽⁴⁾(0) ="});
    C.expr(["9"], "Ch 10 Obj 9 ex6a", "Write the first three terms of the Maclaurin series for e^(−3x).", "1-3x+9x^2/2",
      ["Replace x with −3x in 1 + x + x²/2!.", "1 − 3x + 9x²/2."], {label:"≈"});
    C.expr(["9"], "Ch 10 Obj 9 ex6b", "Write the first three nonzero terms of the Maclaurin series for sin(2x).", "2x-4x^3/3+4x^5/15",
      ["(2x) − (2x)³/3! + (2x)⁵/5!.", "= 2x − 8x³/6 + 32x⁵/120 = 2x − 4x³/3 + 4x⁵/15."], {label:"≈"});
    C.expr(["9"], "Ch 10 Obj 9 ex6c", "Write the first three nonzero terms of the Maclaurin series for cos(x²).", "1-x^4/2+x^8/24",
      ["1 − (x²)²/2! + (x²)⁴/4!."], {label:"≈"});
    C.num(["9"], "Ch 10 Obj 9", "Use the first three nonzero terms of the series for sin x to approximate sin 1.", "1-1/6+1/120",
      ["1 − 1/3! + 1/5! = 1 − 1/6 + 1/120 ≈ 0.842."], {label:"sin 1 ≈"});
    C.expr(["9"], "Ch 10 Obj 9", "Write the first three nonzero terms of the Maclaurin series for 1/(1 + x²).", "1-x^2+x^4",
      ["1/(1 − u) with u = −x²: 1 + (−x²) + (−x²)²."], {label:"≈"});
    C.expr(["9"], "Ch 10 Obj 9", "Write the first three nonzero terms of the Maclaurin series for xeˣ.", "x+x^2+x^3/2",
      ["x(1 + x + x²/2) = x + x² + x³/2."], {label:"≈"});
    C.num(["9"], "Ch 10 Obj 9", "In the Maclaurin series for f, the coefficient of x³ is 1/2. Find f‴(0).", "3", ["(1/2) · 3! = 3."], {label:"f‴(0) ="});
    C.pick(["9"], "Ch 10 Obj 9", "Which series is cos x?", ["1 − x²/2! + x⁴/4! − …", "x − x³/3! + x⁵/5! − …", "1 + x + x²/2! + …", "1 + x + x² + …"], "1 − x²/2! + x⁴/4! − …",
      ["cos has the even powers and starts at 1."]);

    /* ===== Obj 10: Lagrange error ===== */
    C.expr(["10"], "Ch 10 Obj 10 ex1a", "f(0) = 6, f′(0) = 8, f″(0) = 30, f‴(0) = 48. Find the third-degree Taylor polynomial about 0.", "6+8x+15x^2+8x^3",
      ["6 + 8x + (30/2!)x² + (48/3!)x³ = 6 + 8x + 15x² + 8x³."], {label:"T₃(x) ="});
    C.num(["10"], "Ch 10 Obj 10 ex1b", "Use T₃(x) = 6 + 8x + 15x² + 8x³ to estimate f(0.2).", "8.264", ["6 + 1.6 + 0.6 + 0.064 = 8.264."], {label:"f(0.2) ≈"});
    C.num(["10"], "Ch 10 Obj 10 ex1c", "|f⁽⁴⁾(x)| ≤ 75 on (0, 1). Find the Lagrange error bound for that estimate of f(0.2).", "0.005",
      ["|E₃| ≤ 75(0.2)⁴/4! = 75(0.0016)/24 = 0.005."], {label:"|E₃| ≤"});
    C.num(["10"], "Ch 10 Obj 10 ex2", "P₄(x) = 1 − x²/2! + x⁴/4! is used to approximate cos(0.2). Find the Lagrange error bound.", "(0.2)^5/120",
      ["max|f⁽⁵⁾| ≤ 1 for cos.", "1 · (0.2)⁵/5! ≈ 0.0000027."], {label:"|E₄| ≤"});
    C.expr(["10"], "Ch 10 Obj 10 ex3a", "f(x) = sin(x²) + cos x. Write the first four nonzero terms of its Maclaurin series.", "1+x^2/2+x^4/24-121x^6/720",
      ["sin(x²) = x² − x⁶/6 + …; cos x = 1 − x²/2 + x⁴/24 − x⁶/720 + …", "Combine: 1 + (1/2)x² + (1/24)x⁴ + (−1/6 − 1/720)x⁶.", "−1/6 − 1/720 = −121/720."], {label:"≈"});
    C.num(["10"], "Ch 10 Obj 10 ex3b", "For f(x) = sin(x²) + cos x, find f⁽⁶⁾(0).", "-121", ["Coefficient of x⁶ times 6!: (−121/720)(720) = −121."], {label:"f⁽⁶⁾(0) ="});
    C.num(["10"], "Ch 10 Obj 10 ex3c", "P₄ approximates f at x = 1/4 (centered at 0), and |f⁽⁵⁾| ≤ 33 between 0 and 1/4. Find the Lagrange error bound.", "33(1/4)^5/120",
      ["33 · (1/4)⁵/5! = 33/122880 ≈ 0.00027, which is less than 1/3000."], {label:"|E₄| ≤"});
    C.expr(["10"], "Ch 10 Obj 10 ex4", "f(x) = Σ (n = 0 to ∞) xⁿ/(n + 1)². Write the first three nonzero terms of f′(x).", "1/4+2x/9+3x^2/16",
      ["f′(x) = Σ n·x^(n−1)/(n + 1)². The n = 0 term is 0.", "n = 1, 2, 3: 1/4 + (2/9)x + (3/16)x²."], {label:"f′(x) ≈"});
    C.num(["10"], "Ch 10 Obj 10 ex5a", "For the Maclaurin series of e^(x²), find the coefficient of x⁴.", "1/2", ["e^(x²) = 1 + x² + x⁴/2! + …: coefficient 1/2."], {label:"Coefficient ="});
    C.num(["10"], "Ch 10 Obj 10 ex5b", "For the Maclaurin series of e^(x²), find the coefficient of x⁹.", "0", ["Only even powers appear, so 0."], {label:"Coefficient ="});
    C.pick(["10"], "Ch 10 Obj 10 ex6a", "The Maclaurin series Σ (n = 1 to ∞) (n + 1)xⁿ/(n² 6ⁿ) has radius 6. Does it converge at x = 6?", ["Diverges: it becomes Σ (n + 1)/n², like Σ 1/n", "Converges: it's a p-series with p = 2", "Converges by the alternating series test", "Diverges by the nth-term test"], "Diverges: it becomes Σ (n + 1)/n², like Σ 1/n",
      ["At x = 6 the 6ⁿ cancels: Σ (n + 1)/n².", "Limit comparison with 1/n gives 1, and Σ 1/n diverges."]);
    C.num(["10"], "Ch 10 Obj 10 ex6b", "f(−3) = Σ (n + 1)/n² · (−1/2)ⁿ, estimated with S₃. Use the alternating series error bound to bound |f(−3) − S₃|.", "5/256",
      ["First neglected term (n = 4): (5/16)(1/16) = 5/256, which is less than 1/50."], {label:"|E| ≤"});
    C.num(["10"], "Ch 10 Obj 10 ex6d", "g(x) = Σ (n + 1)x^(2n)/(n² 3ⁿ). Use the ratio test to find the radius of convergence.", "sqrt(3)",
      ["The ratio → x²/3.", "x²/3 < 1 → |x| < √3."], {label:"R ="});
    C.num(["10"], "Ch 10 Obj 10", "A degree-2 polynomial centered at 0 is used at x = 0.1, with |f‴| ≤ 6. Find the Lagrange error bound.", "0.001",
      ["6(0.1)³/3! = 0.001."], {label:"|E₂| ≤"});
    C.pick(["10"], "Ch 10 Obj 10", "A power series has radius of convergence 4. What is the radius for its derivative?", ["4", "3", "5", "It can't be known"], "4",
      ["Differentiating or integrating keeps the radius (endpoints can change)."]);
  }
});
})();
