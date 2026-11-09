/* Calculus BC · Chapter 4: Applications of Derivatives
   Source: Ch 4 Obj 1 (Particle Motion), Obj 3 (Related Rates), Obj 4 (L'Hôpital's Rule) class notes.
   Every answer key is checked numerically (tools/verify.js). */
(() => {
Study.addUnit("calc", {
  id: "c4",
  name: "Ch 4: Applications of Derivatives",
  short: "Ch 4",
  sections: [
    {id:"1", name:"Obj 1: Particle Motion"},
    {id:"3", name:"Obj 3: Related Rates"},
    {id:"4", name:"Obj 4: L'Hôpital's Rule"}
  ],

  notes: {
    "1": [
      {sum:["Average velocity = Δs/Δt = (s₂ − s₁)/(t₂ − t₁). Average acceleration = Δv/Δt.",
            "Instantaneous velocity at t = b is s′(b) = v(b). Instantaneous acceleration at t = a is v′(a) = a(a).",
            "Velocity is increasing when a(t) > 0 and decreasing when a(t) < 0.",
            "On a position graph: negative slope = negative velocity, flat = at rest."]},
      {p:"**What it's for:** this is the classic use of derivatives. Position tells you where something is, velocity (its derivative) tells you how fast and which way, and acceleration (the next derivative) tells you whether it's speeding up the velocity or slowing it down."},
      {h:"Average vs instantaneous"},
      {table:{head:["What you want", "How to get it"], rows:[
        ["average velocity from t₁ to t₂", "(s(t₂) − s(t₁)) / (t₂ − t₁): a slope between two points"],
        ["average acceleration", "(v_f − v₀) / (t_f − t₀)"],
        ["velocity at an instant", "s′(t) = v(t)"],
        ["acceleration at an instant", "v′(t) = a(t) = s″(t)"]]}},
      {h:"Reading graphs"},
      {p:"On a graph of x(t) (position): the velocity is the slope. Where the graph goes down, velocity is negative. Where it's flat, the particle is at rest. At a sharp turn the velocity doesn't exist (not \"at rest\")."},
      {p:"On a graph of v(t): the value tells you the direction (above the axis = positive, below = negative), and the slope tells you the acceleration (going up = increasing, going down = decreasing)."},
      {ex:{q:"A velocity graph has four points: A is above the axis and rising, B is above and falling, C is below and falling, D is below and rising. Describe the velocity at each.", a:["A: positive and increasing.", "B: positive and decreasing.", "C: negative and decreasing.", "D: negative and increasing."]}},
      {h:"Calculator practice"},
      {p:"For a numerical derivative on the TI-Nspire: home screen, then Alpha F2 (or Menu → Calculus → nDeriv) and enter nDeriv(y1, x, 3) for the slope of y1 at x = 3. Use the table to look up values of y1."},
      {ex:{q:"x(t) = t³ − 3t² + 4t meters. (a) Find the velocity at t = 3 s. (b) Find the average velocity from t = 1 to t = 3.", a:["(a) v(t) = 3t² − 6t + 4, so v(3) = 27 − 18 + 4 = 13 m/s.", "(b) x(3) = 12 and x(1) = 2, so (12 − 2)/(3 − 1) = 5 m/s."]}},
      {ex:{q:"Find the acceleration at t = 4 s if v(t) = 3t{{e^(-2t)}}.", a:["a(4) = v′(4). By calculator (nDeriv) ≈ −0.007 m/s².", "By hand: v′(t) = 3{{e^(-2t)}} − 6t{{e^(-2t)}}, so v′(4) = −21{{e^(-8)}} ≈ −0.00704."]}},
      {tip:"Speeding up: velocity and acceleration have the SAME sign. Slowing down: opposite signs."},
      {check:[
        {q:"What does it mean if a(t) > 0?", a:"The velocity is increasing."},
        {q:"x(t) has a sharp corner at t = 4. Is the particle at rest there?", a:"No. The velocity doesn't exist at a sharp turn."},
        {q:"x(1) = 2 and x(5) = 18. What's the average velocity?", a:"(18 − 2)/(5 − 1) = 4."},
        {q:"v(2) = −3 and a(2) = −1. Speeding up or slowing down?", a:"Speeding up: same signs."}]}
    ],
    "3": [
      {sum:["d/dt [ ]: take the derivative with respect to time. Every variable that changes picks up a rate (dr/dt, dV/dt…).",
            "Steps: (1) write an equation, in one variable if you can, (2) take d/dt of both sides, (3) plug in the given values and solve.",
            "Plug in numbers AFTER you take the derivative, never before.",
            "Explain a rate with its sign (increasing/decreasing), its value, and its units."]},
      {p:"**What it's for:** when two things are linked (the radius and area of a spreading ripple, the height and volume of water in a tank), their rates are linked too. If you know how fast one changes, the chain rule tells you how fast the other does."},
      {h:"Taking derivatives with respect to t"},
      {p:"Every variable is secretly a function of time, so the chain rule adds its rate. The derivative of r³ with respect to t is 3r² · dr/dt."},
      {ex:{q:"Take d/dt of V = (4/3)πr³.", a:["dV/dt = (4/3)π · 3r² · dr/dt = 4πr² · dr/dt."]}},
      {ex:{q:"Take d/dt of x² + y² = 12.", a:["2x · dx/dt + 2y · dy/dt = 0 (12 is a constant)."]}},
      {steps:["**Equation:** relate the quantities. Try to get it in terms of one variable.", "**Take the derivative with respect to t** of both sides.", "**Substitute** the given values and solve for the rate you want."]},
      {ex:{q:"A circle's area is A = πr². Find dr/dt if dA/dt = 8 cm²/s when r = 2 cm.", a:["d/dt: dA/dt = 2πr · dr/dt.", "Plug in: 8 = 2π(2) · dr/dt = 4π · dr/dt.", "dr/dt = 8/(4π) = 2/π cm/s."]}},
      {ex:{q:"Explain the meaning of dr/dt = 2/π in that problem.", a:["When r is 2 cm and dA/dt is 8 cm²/s, the radius is increasing at 2/π cm/s."]}},
      {h:"Formulas that come up"},
      {table:{head:["Shape", "Formula"], rows:[
        ["circle", "A = πr², C = 2πr"], ["sphere", "V = (4/3)πr³, S = 4πr²"], ["cylinder", "V = πr²h"], ["cone", "V = (1/3)πr²h"],
        ["cube", "V = s³, S = 6s²"], ["right triangle", "a² + b² = c²"]]}},
      {warn:"Don't plug in a value that changes (like r = 2) before taking the derivative. It would turn into a constant and its rate would disappear."},
      {check:[
        {q:"What's d/dt of y²?", a:"2y · dy/dt."},
        {q:"A sphere's radius grows at 1 cm/s. Find dV/dt when r = 3.", a:"dV/dt = 4πr² · dr/dt = 4π(9)(1) = 36π cm³/s."},
        {q:"When can you substitute the given numbers?", a:"After taking the derivative."},
        {q:"dV/dt = −5. What does the sign say?", a:"The volume is decreasing."}]}
    ],
    "4": [
      {sum:["If the limit of f(x)/g(x) is 0/0 or ∞/∞ (indeterminate), then lim f(x)/g(x) = lim f′(x)/g′(x).",
            "Take the derivatives of the top and bottom SEPARATELY. It's not the quotient rule.",
            "You can repeat it (f″/g″, …) as long as you still get 0/0 or ∞/∞.",
            "On an FRQ, state that the top and bottom each go to 0 (or ∞) before using it."]},
      {p:"**What it's for:** some limits come out as 0/0 or ∞/∞, which could be anything. L'Hôpital's rule compares how fast the top and bottom are changing instead, which settles the race."},
      {h:"The rule"},
      {p:"If the limit as x → c of f(x)/g(x) is 0/0 or ∞/∞, then it equals the limit of f′(x)/g′(x)."},
      {steps:["**Plug in first.** If you get a real number, that's the answer. Only use the rule for 0/0 or ∞/∞.", "**Take the derivative of the top and of the bottom** (separately).", "**Try the limit again.** Still indeterminate? Repeat."]},
      {ex:{q:"Evaluate the limit as x → 0 of tan(6x)/(6x).", a:["Plug in: tan(0)/0 = 0/0, so L'Hôpital applies.", "Derivatives: sec²(6x) · 6 over 6.", "= lim 1/cos²(6x) = 1."]}},
      {ex:{q:"Evaluate the limit as x → ∞ of ln x / x.", a:["∞/∞.", "Derivatives: (1/x)/1 = 1/x.", "1/∞ → 0."]}},
      {tip:"On an FRQ, write it out: \"lim tan(6x) = 0 and lim 6x = 0, so L'Hôpital's rule applies.\""},
      {warn:"Don't use the quotient rule. And don't use L'Hôpital when the limit isn't 0/0 or ∞/∞: it gives the wrong answer."},
      {check:[
        {q:"What's the limit as x → 0 of sin(x)/x?", a:"0/0, so use cos(x)/1 → 1."},
        {q:"Can you use L'Hôpital on the limit as x → 1 of (x + 1)/x?", a:"No. It's 2/1 = 2, not indeterminate."},
        {q:"What's the limit as x → ∞ of x²/eˣ?", a:"∞/∞ twice: 2x/eˣ, then 2/eˣ → 0."},
        {q:"Do you use the quotient rule in L'Hôpital's rule?", a:"No. Derivative of the top over derivative of the bottom."}]}
    ]
  },

  problems(k){
    const C = CALCKIT(k);

    /* ===== Obj 1: particle motion ===== */
    const X = "t^3-3t^2+4t";
    C.num(["1"], "Ch 4 Obj 1 ex3a", "Position is x(t) = t³ − 3t² + 4t meters. Find the velocity at t = 3 seconds.", "13",
      ["v(t) = x′(t) = 3t² − 6t + 4.", "v(3) = 27 − 18 + 4 = 13 m/s."], {label:"v(3) =", chk:{dAt:[X, 3], v:"t"}});
    C.num(["1"], "Ch 4 Obj 1 ex3b", "Position is x(t) = t³ − 3t² + 4t meters. Find the average velocity from t = 1 to t = 3 seconds.", "5",
      ["x(3) = 27 − 27 + 12 = 12. x(1) = 1 − 3 + 4 = 2.", "(12 − 2)/(3 − 1) = 5 m/s."], {label:"Average velocity ="});
    C.num(["1"], "Ch 4 Obj 1 ex4", "v(t) = 3te^(−2t). Find the acceleration at t = 4 seconds. An exact answer or 3 decimals both work.", "-21e^(-8)",
      ["a(4) = v′(4). Product rule: v′(t) = 3e^(−2t) − 6te^(−2t).", "v′(4) = 3e^(−8) − 24e^(−8) = −21e^(−8) ≈ −0.007 m/s²."], {label:"a(4) =", chk:{dAt:["3te^(-2t)", 4], v:"t"}});
    C.expr(["1"], "Ch 4 Obj 1", "Position is s(t) = 2t³ − 9t² + 12t. Find the velocity function.", "6t^2-18t+12",
      ["v(t) = s′(t) = 6t² − 18t + 12."], {label:"v(t) =", v:"t", chk:{d:"2t^3-9t^2+12t", v:"t"}});
    C.expr(["1"], "Ch 4 Obj 1", "Position is s(t) = 2t³ − 9t² + 12t. Find the acceleration function.", "12t-18",
      ["v(t) = 6t² − 18t + 12.", "a(t) = v′(t) = 12t − 18."], {label:"a(t) =", v:"t", chk:{d:"6t^2-18t+12", v:"t"}});
    C.pick(["1"], "Ch 4 Obj 1", "s(t) = 2t³ − 9t² + 12t. When is the particle at rest?", ["t = 1 and t = 2", "t = 1.5 only", "t = 0 and t = 1.5", "t = 2 only"], "t = 1 and t = 2",
      ["At rest: v(t) = 0.", "6t² − 18t + 12 = 6(t − 1)(t − 2) = 0, so t = 1 and t = 2."]);
    C.num(["1"], "Ch 4 Obj 1", "v(t) = t² − 4t + 1. Find the average acceleration from t = 0 to t = 3.", "-1",
      ["v(3) = 9 − 12 + 1 = −2. v(0) = 1.", "(−2 − 1)/(3 − 0) = −1."], {label:"Average acceleration ="});
    C.pick(["1"], "Ch 4 Obj 1 ex2", "On a graph of v(t), a point sits below the t-axis where the graph is rising. Describe the velocity there.", ["negative and increasing", "positive and increasing", "negative and decreasing", "positive and decreasing"], "negative and increasing",
      ["Below the axis: the value is negative.", "Rising: the slope (acceleration) is positive, so velocity is increasing."]);
    C.pick(["1"], "Ch 4 Obj 1 ex1", "A position graph x(t) is flat from t = 0 to t = 2, slopes down from t = 2 to t = 4, then turns sharply and rises. When is the velocity negative?", ["2 < t < 4", "0 < t < 2", "t > 4", "only at t = 4"], "2 < t < 4",
      ["Velocity is the slope of x(t). It's negative where the graph slopes down."]);
    C.pick(["1"], "Ch 4 Obj 1 ex1", "Same graph: flat from t = 0 to t = 2, down until a sharp turn at t = 4. When is the particle at rest?", ["0 < t < 2", "t = 4", "2 < t < 4", "never"], "0 < t < 2",
      ["At rest: velocity is 0, so the graph is flat.", "Not at t = 4: the sharp turn means the velocity doesn't exist."]);
    C.pick(["1"], "Ch 4 Obj 1", "At t = 2, v(2) = 5 and a(2) = −3. What's happening?", ["slowing down", "speeding up", "at rest", "changing direction"], "slowing down",
      ["Velocity and acceleration have opposite signs, so it's slowing down."]);
    C.num(["1"], "Ch 4 Obj 1", "s(t) = 5 + 3t − t². Find the speed at t = 4.", "5",
      ["v(t) = 3 − 2t, so v(4) = −5.", "Speed is the absolute value of velocity: 5."], {label:"Speed ="});

    /* ===== Obj 3: related rates ===== */
    C.num(["3"], "Ch 4 Obj 3 ex2", "A circle's area is A = πr². Find dr/dt if dA/dt = 8 cm²/s when r = 2 cm.", "2/π",
      ["dA/dt = 2πr · dr/dt.", "8 = 2π(2) · dr/dt = 4π · dr/dt.", "dr/dt = 2/π cm/s."], {label:"dr/dt ="});
    C.pick(["3"], "Ch 4 Obj 3 ex2b", "In that problem, dr/dt = 2/π. What does it mean?", ["When r = 2 cm, the radius is increasing at 2/π cm/s", "When r = 2 cm, the area is increasing at 2/π cm²/s", "The radius is 2/π cm", "When r = 2 cm, the radius is decreasing at 2/π cm/s"], "When r = 2 cm, the radius is increasing at 2/π cm/s",
      ["Positive, so increasing. It's a rate of the radius, so the units are cm/s."]);
    C.expr(["3"], "Ch 4 Obj 3 ex1a", "V = (4/3)πr³, and the radius grows at dr/dt = 2. Find dV/dt in terms of r.", "8pi*r^2",
      ["dV/dt = (4/3)π · 3r² · dr/dt = 4πr² · dr/dt.", "With dr/dt = 2: dV/dt = 8πr²."], {label:"dV/dt =", v:"r", ph:"e.g. 8pi*r^2"});
    C.num(["3"], "Ch 4 Obj 3", "A sphere's radius grows at 1 cm/s. How fast is its volume growing when r = 3 cm?", "36π",
      ["V = (4/3)πr³, so dV/dt = 4πr² · dr/dt.", "= 4π(9)(1) = 36π cm³/s."], {label:"dV/dt ="});
    C.num(["3"], "Ch 4 Obj 3 ex1b", "x² + y² = 12. Find dy/dt when x = 2, y = 2√2, and dx/dt = 3.", "-3/√2",
      ["2x · dx/dt + 2y · dy/dt = 0.", "2(2)(3) + 2(2√2) dy/dt = 0.", "dy/dt = −12/(4√2) = −3/√2."], {label:"dy/dt ="});
    C.num(["3"], "Ch 4 Obj 3", "A square's side grows at 2 in/min. How fast is its area changing when the side is 5 in?", "20",
      ["A = s², dA/dt = 2s · ds/dt.", "= 2(5)(2) = 20 in²/min."], {label:"dA/dt ="});
    C.num(["3"], "Ch 4 Obj 3", "A 10 ft ladder slides down a wall. The bottom moves away at 1 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall? (Give dy/dt.)", "-3/4",
      ["x² + y² = 100. When x = 6, y = 8.", "2x · dx/dt + 2y · dy/dt = 0 → 2(6)(1) + 2(8) dy/dt = 0.", "dy/dt = −12/16 = −3/4 ft/s (negative: sliding down)."], {label:"dy/dt ="});
    C.num(["3"], "Ch 4 Obj 3", "A cylinder has radius 3 cm (fixed). Water fills it at 18π cm³/s. How fast is the height rising?", "2",
      ["V = πr²h = 9πh, so dV/dt = 9π · dh/dt.", "18π = 9π · dh/dt → dh/dt = 2 cm/s."], {label:"dh/dt ="});
    C.num(["3"], "Ch 4 Obj 3", "A circle's radius shrinks at 0.5 cm/s. How fast is the circumference changing?", "-π",
      ["C = 2πr, dC/dt = 2π · dr/dt.", "= 2π(−0.5) = −π cm/s."], {label:"dC/dt ="});

    /* ===== Obj 4: L'Hôpital ===== */
    C.num(["4"], "Ch 4 Obj 4 ex1a", "Evaluate the limit as x → 0 of tan(6x)/(6x).", "1",
      ["0/0, so L'Hôpital applies.", "sec²(6x) · 6 / 6 = 1/cos²(6x).", "At x = 0: 1."], {label:"Limit =", chk:{lim:["tan(6x)/(6x)", 0]}});
    C.num(["4"], "Ch 4 Obj 4 ex1b", "Evaluate the limit as x → ∞ of ln(x)/x.", "0",
      ["∞/∞.", "(1/x)/1 = 1/x → 0."], {label:"Limit =", chk:{lim:["ln(x)/x", "inf"]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → 0 of sin(3x)/x.", "3",
      ["0/0.", "3cos(3x)/1 → 3."], {label:"Limit =", chk:{lim:["sin(3x)/x", 0]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → 0 of (e^x − 1)/x.", "1",
      ["0/0.", "eˣ/1 → 1."], {label:"Limit =", chk:{lim:["(e^x-1)/x", 0]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → 0 of (1 − cos x)/x².", "1/2",
      ["0/0.", "sin x / 2x: still 0/0.", "cos x / 2 → 1/2."], {label:"Limit =", chk:{lim:["(1-cos(x))/x^2", 0]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → ∞ of x²/e^x.", "0",
      ["∞/∞: 2x/eˣ, still ∞/∞.", "2/eˣ → 0."], {label:"Limit =", chk:{lim:["x^2/e^x", "inf"]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → 2 of (x² − 4)/(x − 2).", "4",
      ["0/0.", "2x/1 → 4."], {label:"Limit =", chk:{lim:["(x^2-4)/(x-2)", 2]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → ∞ of (3x² + 1)/(5x² − x).", "3/5",
      ["∞/∞: 6x/(10x − 1), still ∞/∞.", "6/10 = 3/5."], {label:"Limit =", chk:{lim:["(3x^2+1)/(5x^2-x)", "inf"]}});
    C.num(["4"], "Ch 4 Obj 4", "Evaluate the limit as x → 1 of ln(x)/(x − 1).", "1",
      ["0/0.", "(1/x)/1 → 1."], {label:"Limit =", chk:{lim:["ln(x)/(x-1)", 1]}});
    C.pick(["4"], "Ch 4 Obj 4", "Can you use L'Hôpital's rule on the limit as x → 1 of (x + 1)/x?", ["No, it's 2/1, not indeterminate", "Yes, it gives 1", "Yes, it gives 2", "No, the limit doesn't exist"], "No, it's 2/1, not indeterminate",
      ["Plug in first: 2/1 = 2. Only 0/0 or ∞/∞ qualify."]);
    C.pick(["4"], "Ch 4 Obj 4", "In L'Hôpital's rule, what do you do to f(x)/g(x)?", ["Take f′(x)/g′(x)", "Use the quotient rule", "Take (f/g)′ and plug in", "Multiply by g(x)"], "Take f′(x)/g′(x)",
      ["Derivative of the top over the derivative of the bottom, separately."]);
  }
});
})();
