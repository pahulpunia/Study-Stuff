/* Calculus BC · "The idea behind it": extra explanation added to every objective's notes.
   The class notes are mostly worked examples; these paragraphs explain why each method works and
   how to recognize when to use it. A paragraph that starts with "!" is shown as a warning. */
(() => {
const plus = (unit, secs) => Study.extendUnit("calc", unit, {notes: Object.fromEntries(Object.entries(secs).map(([sec, list]) =>
  [sec, [{h:"The idea behind it"}, ...list.map(t => t[0] === "!" ? {warn: t.slice(1)} : {p: t})]]))});

plus("c2", {
  "1": ["A derivative is a slope that has been pushed to its limit. The slope between two points on a curve, [f(x + h) − f(x)] / h, is an average rate of change. Slide the second point toward the first (let h shrink to 0) and that average becomes the slope at a single point: the instantaneous rate of change.",
    "Every shortcut rule comes from that limit. The power rule, for example, is what is left of the limit for xⁿ after the algebra cancels. So when a problem shows you a limit that looks like the definition, don't evaluate it the long way: recognize which function and which point it is the derivative of, and use the rule.",
    "eˣ is special because it is the one exponential whose slope at every point equals its height. That is why its derivative is itself, and why other bases pick up a factor of ln a."],
  "2": ["A tangent line is the best straight-line stand-in for a curve near one point. It needs two things, a point and a slope, and both come from the function: the point from f(a), the slope from f′(a). The normal line goes through the same point at a right angle, so its slope is the negative reciprocal.",
    "Motion problems are the same idea with different names. Position's rate of change is velocity; velocity's rate of change is acceleration. The sign of velocity gives direction. Speed is the size of velocity, and an object speeds up when velocity and acceleration have the same sign.",
    "!A horizontal tangent means f′ = 0, not f = 0. Set the derivative, not the function, equal to zero."],
  "3": ["The product rule exists because both factors change at once. Picture a rectangle with sides f and g. When both sides grow a little, the area grows by two thin strips: one of size f′·g and one of size f·g′. (The tiny corner piece vanishes in the limit.) That is f′g + fg′.",
    "The quotient rule is the product rule applied to f · (1/g), which is where the minus sign and the g² come from. If the denominator is just a constant or a single power of x, rewriting first is usually faster and safer than the quotient rule.",
    "!The derivative of a product is not the product of the derivatives, and the same goes for quotients."]
});

plus("c3", {
  "1": ["The chain rule handles a function inside a function. If y depends on u and u depends on x, the rates multiply: dy/dx = dy/du · du/dx. If u changes 3 times as fast as x, and y changes 2 times as fast as u, then y changes 6 times as fast as x.",
    "In practice: differentiate the outside function and leave the inside alone, then multiply by the derivative of the inside. For several layers, keep going inward, one factor per layer.",
    "!The most common error in all of calculus is forgetting the inside derivative. Any time the thing being squared, exponentiated or put inside a trig function is more than a plain x, a chain-rule factor is owed."],
  "3": ["A function and its inverse are mirror images across the line y = x, so their roles of x and y are swapped. Slopes swap too: a rise of 3 over a run of 1 becomes a rise of 1 over a run of 3. That is why the slope of the inverse is the reciprocal of the original slope, taken at the matching point.",
    "The matching point is what trips people up. If f(a) = b, then the inverse passes through (b, a), and its slope there is 1 / f′(a). You plug the original x-value, a, into f′, even though the question asks about the inverse at b.",
    "The inverse trig derivatives come from the same idea plus a right triangle, which is why they contain square roots and 1 + x² and no trig functions."]
});

plus("c4", {
  "1": ["Everything about a moving particle is read from signs. Velocity positive: moving right (or up). Velocity zero with a sign change: the particle turns around. Velocity and acceleration with the same sign: speeding up. Opposite signs: slowing down.",
    "Displacement and distance answer different questions. Displacement is the net change in position, so trips left cancel trips right. Total distance adds every leg as a positive amount, which is why you must first find where the particle turns around and split the trip there.",
    "!A particle at rest (v = 0) is not necessarily changing direction. Check that the velocity actually changes sign."],
  "3": ["In a related rates problem, several quantities are changing with time and an equation ties them together. Differentiating that equation with respect to t turns a relationship between the quantities into a relationship between their rates.",
    "The order matters. Write the equation with variables for everything that changes, differentiate, and only then substitute the numbers for the instant in question. A value plugged in too early becomes a constant, and its rate wrongly becomes zero.",
    "If the equation has more variables than you have rates for, use the geometry (similar triangles, a fixed angle) to eliminate one before differentiating."],
  "4": ["L'Hôpital's Rule works because, close to the point in question, each function behaves like its tangent line. If the top and bottom both head to 0, the ratio of the functions approaches the ratio of how fast they are heading there, which is the ratio of their derivatives.",
    "It applies only to the indeterminate forms 0/0 and ∞/∞. Other forms have to be rewritten first: turn a product 0 · ∞ into a fraction, and take a natural log to handle 1^∞, 0⁰ and ∞⁰.",
    "!Differentiate the top and the bottom separately. This is not the quotient rule. And always check the form first: using the rule on a limit that isn't indeterminate gives a wrong answer."]
});

plus("c5", {
  "1": ["An absolute maximum or minimum on a closed interval can only happen in two kinds of places: where the graph turns (the derivative is zero or undefined) or at an endpoint. So the method is a short list: find the critical numbers inside the interval, add the two endpoints, evaluate the function at each, and compare.",
    "The Extreme Value Theorem guarantees that the list contains the answer, as long as the function is continuous on a closed interval. On an open interval or with a discontinuity there may be no maximum or minimum at all.",
    "!Compare values of f, not f′. The derivative only tells you where to look."],
  "2": ["The Mean Value Theorem says that somewhere between a and b the instantaneous rate of change equals the average rate of change. If you average 60 mph over a trip, at some moment your speedometer read exactly 60. On a graph, some tangent line is parallel to the secant line through the endpoints.",
    "The conditions are what make it true: continuous on [a, b] so there are no jumps, and differentiable on (a, b) so there are no corners. Exam questions often turn on checking those two conditions, or on citing the theorem by name to justify that a certain derivative value must occur.",
    "Rolle's Theorem is the special case where the endpoints have equal height, so the average rate is 0 and some tangent is horizontal."],
  "3": ["The first derivative is a slope detector. Where f′ is positive the graph climbs, and where it is negative the graph falls. A relative maximum is a place where the graph stops climbing and starts falling, so f′ changes from positive to negative there; a relative minimum is the reverse.",
    "A sign chart organizes this: mark the critical numbers on a number line, test one value in each interval, and read off the behavior. If f′ does not change sign at a critical number (as with x³ at 0), there is no extremum there.",
    "!On free-response questions, a sign chart alone earns no justification points. Write the reason in words: \"f has a relative minimum at x = 2 because f′ changes from negative to positive there.\""],
  "4": ["The second derivative tells you how the slope itself is changing. If f″ is positive, slopes are increasing and the graph bends upward like a cup; if f″ is negative, slopes are decreasing and it bends downward like a cap. An inflection point is where the bending switches, so f″ must change sign there.",
    "The Second Derivative Test uses that bending to classify critical points without a sign chart. At a point where f′ = 0, a cup shape (f″ > 0) means the point is at the bottom, a minimum; a cap shape (f″ < 0) means a maximum. If f″ = 0 the test says nothing and you go back to the first derivative.",
    "!f″ = 0 does not guarantee an inflection point. The sign of f″ has to actually change."]
});

plus("c6", {
  "1": ["Integration is asked two ways. An indefinite integral asks \"what function has this derivative?\" and the answer is a family of functions, which is why it ends in + C. A definite integral asks for a number: the accumulated total of a rate, seen on a graph as signed area between the curve and the x-axis.",
    "Riemann sums are how that area is defined: cut the interval into strips, approximate each with a rectangle or trapezoid, and add. More, thinner strips give a better estimate, and the definite integral is the limit of that process.",
    "Whether a left or right sum overestimates depends on whether the function is increasing or decreasing; whether a trapezoid sum overestimates depends on concavity (it overestimates when the graph is concave up).",
    "!Area below the x-axis counts as negative in a definite integral. If a question asks for total area, split the integral at the zeros and make each piece positive."],
  "3": ["The Fundamental Theorem connects the two halves of calculus. Part of it says that accumulating a rate and then asking how fast the total is growing just gives back the rate: the derivative of ∫ₐˣ f(t) dt is f(x). The other part says that to total up a rate from a to b, you only need an antiderivative at the two ends: F(b) − F(a).",
    "When the upper limit is a function of x instead of plain x, the chain rule applies: plug the limit into the integrand, then multiply by the limit's derivative.",
    "The average value of a function is the height of the rectangle that has the same area as the region under the curve: the integral divided by the width of the interval."],
  "4": ["The most useful sentence in this chapter: the integral of a rate of change is the net change in the quantity. If water flows in at r(t) gallons per minute, ∫ r(t) dt over a time interval is the number of gallons added. To get the amount at the end, start with the amount at the beginning and add that net change.",
    "For a function defined as an integral of a graph, g(x) = ∫ f(t) dt, everything flips up one level. The given graph is g′. So g increases where the graph is above the axis, g has extrema where the graph crosses the axis, and g is concave up where the graph is rising.",
    "!Don't forget the starting value. \"How much is in the tank at t = 5\" is the initial amount plus the integral, not the integral alone."],
  "5": ["u-substitution is the chain rule run backward. The chain rule always leaves behind the derivative of the inside function as a factor. So when an integrand contains an inside function together with (a constant multiple of) its derivative, naming the inside u and trading that factor for du collapses the integral into a simpler one.",
    "Choosing u: look for the expression inside a power, a root, an exponent, a trig function or a denominator, and check that its derivative is sitting elsewhere in the integrand. Being off by a constant is fine; being off by a variable means that choice won't work.",
    "!For a definite integral, either change the limits to u-values and never go back to x, or keep the x-limits and substitute back before evaluating. Mixing the two is the classic error."],
  "9": ["These integrals are recognized by shape, not computed by a technique. A constant squared minus a variable squared under a square root points to arcsine; a constant squared plus a variable squared in a plain denominator points to arctangent. Compare with the forms in the table and match a and u.",
    "Completing the square is how a quadratic that doesn't factor is forced into one of those shapes. It rewrites x² + bx + c as (x + b/2)² plus or minus a constant, which is exactly the u² ± a² pattern.",
    "!Check the numerator first. If the top is the derivative of the bottom, the integral is a natural log, not an inverse trig function."],
  "10": ["Partial fractions is adding fractions in reverse. A fraction with a factorable denominator was (in principle) made by adding simpler fractions, one for each factor. Split it back into those pieces and each one integrates to a natural log.",
    "Use it when the denominator factors into distinct linear factors and the numerator has lower degree. If the numerator's degree is equal or higher, do long division first. If the numerator is the derivative of the denominator, skip all of this and use a log with u-substitution.",
    "The quickest way to find the constants is to multiply through by the denominator and plug in the x-value that makes each factor zero."],
  "12": ["An improper integral asks whether a region that goes on forever, or shoots up without bound, can still have a finite area. The honest way to find out is to stop short (replace the trouble spot with a variable), integrate normally, and take a limit. A finite limit means the integral converges.",
    "The benchmark is ∫₁^∞ 1/xᵖ dx, which converges only when p > 1. The function has to shrink fast enough; 1/x itself is just too slow, so its area is infinite even though the curve approaches zero.",
    "!An integrand that blows up inside the interval makes the integral improper even when the limits are ordinary numbers. Split the integral at the discontinuity; if either piece diverges, the whole thing diverges."]
});

plus("c7", {
  "1": ["A differential equation describes a function by its rate of change. Solving it means finding the function. Separation of variables works when the rate can be written as (something in x) times (something in y): move every y to one side with dy and every x to the other with dx, then integrate both sides.",
    "The + C goes on at the moment you integrate, and the initial condition is used to find it right away, before solving for y. Adding the constant at the end instead gives a wrong answer whenever a log or exponential is involved.",
    "dy/dt = ky is the pattern behind all exponential growth and decay: a quantity whose rate of change is proportional to its current size. Its solution is always y = y₀·e^(kt)."],
  "3": ["A slope field is a picture of a differential equation. At each point (x, y), the equation gives a slope, and the field shows a short segment with that slope. A solution curve is any curve that follows the segments everywhere, like a leaf following a current. The initial condition picks out which one.",
    "To match a field with an equation, look for where the segments are horizontal (slope 0), and whether the slopes change as you move across (depends on x), up and down (depends on y), or both.",
    "Horizontal lines of zero-slope segments are equilibrium solutions: constant functions that satisfy the equation."],
  "4": ["Euler's method builds an approximate solution out of short tangent-line steps. At the current point, the differential equation gives the slope. Walk along that slope for one step of width Δx to reach a new point, then recalculate the slope there and repeat.",
    "Each step is new y = old y + (slope at the old point) · Δx. Smaller steps follow the true curve more closely but take more work.",
    "Whether the approximation is too high or too low depends on concavity. If the solution curve is concave up, tangent lines lie below it, so Euler's method underestimates; concave down, it overestimates."],
  "5": ["The logistic equation dP/dt = kP(1 − P/L) is exponential growth with a brake. When P is small, the factor (1 − P/L) is close to 1 and the population grows almost exponentially. As P approaches the carrying capacity L, that factor shrinks toward 0 and growth stalls.",
    "Most exam questions can be answered from the equation without solving it. The limit as t → ∞ is L (for any positive starting value). The population grows fastest when P = L/2. The solution curve is concave up below L/2 and concave down between L/2 and L.",
    "!Rewrite the equation into the standard form before reading off L. In dP/dt = 0.2P(100 − P) the carrying capacity is 100, but k is not 0.2."]
});

plus("c8", {
  "1": ["Every application in this chapter is the same three-step idea: slice the object into thin pieces, write the size of one typical piece, and integrate to add the pieces up. For area between curves, a slice is a thin rectangle whose height is the top curve minus the bottom curve.",
    "Arc length uses the Pythagorean theorem on a tiny piece of the curve. A small run dx and a small rise dy make a hypotenuse of length √(dx² + dy²), which becomes √(1 + (dy/dx)²) dx. Adding those tiny hypotenuses gives the length.",
    "!If the curves cross inside the interval, the top and bottom switch. Split the integral at the intersection points."],
  "2": ["Spinning a region around an axis sweeps out a solid, and a thin slice perpendicular to the axis is a circle. Its volume is (area of the circle) × (thickness) = πr² dx, where r is the distance from the axis to the curve. Adding the slices gives the disk method.",
    "If the region doesn't touch the axis, each slice has a hole: a washer. Its area is the big circle minus the small circle, π(R² − r²), where both radii are measured from the axis of rotation.",
    "!Square each radius separately: π(R² − r²), never π(R − r)². When the axis is not the x- or y-axis, each radius is a distance to that line, such as (4 − f(x))."],
  "3": ["Here the slices aren't circles; they are whatever shape the problem names, standing on the base region. The base tells you the side length s of each slice (top curve minus bottom curve), and geometry tells you the slice's area in terms of s. Volume is the integral of that area.",
    "So the whole method is: find s, write the area formula for the given shape using s, integrate. Squares give s²; semicircles give (π/8)s² because the diameter is s; equilateral triangles give (√3/4)s².",
    "There is no π unless the cross sections are circles or semicircles."],
  "4": ["Sometimes horizontal slices are simpler than vertical ones: when the region is bounded on the left and right by curves, or when a vertical slice would hit different curves in different places. Then everything is written in terms of y, and the slice's length is right curve minus left curve.",
    "The slice must be perpendicular to the axis of rotation for disks and washers. Rotating about a horizontal line uses dx; rotating about a vertical line uses dy.",
    "!Integrating with respect to y means every part must be in y: solve each equation for x, and use y-values for the limits."]
});

plus("c9", {
  "1": ["Parametric equations describe a path by giving x and y separately as functions of a third variable, usually time. That keeps information a plain y = f(x) graph loses: where the object is at each moment, and which way it is going.",
    "The slope of the path is still rise over run, but both are now rates: dy/dx = (dy/dt) / (dx/dt). A horizontal tangent happens where dy/dt = 0 and a vertical tangent where dx/dt = 0.",
    "!The second derivative is not the ratio of the second derivatives. Differentiate dy/dx with respect to t, then divide by dx/dt again."],
  "3": ["A polar curve r = f(θ) can always be turned into a parametric one with θ as the parameter: x = r cos θ and y = r sin θ. Slope and arc length then use the parametric formulas, which is why polar slope needs the product rule on both x and y.",
    "Read dr/dθ on its own, too. If r and dr/dθ have the same sign, the point is moving away from the origin as θ increases; opposite signs mean it is moving toward the origin.",
    "!dr/dθ is not the slope of the tangent line. The slope is dy/dx."],
  "4": ["Polar area is built from thin pie slices instead of rectangles. A sector of a circle with radius r and a tiny angle dθ has area ½r² dθ, so the area swept out between two angles is ½∫ r² dθ.",
    "The limits are angles, and finding them is most of the work. For one petal or loop, use the angles where r = 0. For the region between two curves, use the angles where they intersect, and subtract the inner area from the outer: ½∫ (R² − r²) dθ.",
    "!Square first, then subtract: R² − r², not (R − r)². Use symmetry when you can, but remember to multiply back."],
  "5": ["A position vector is a parametric curve written as one object, ⟨x(t), y(t)⟩. Differentiate each component to get velocity, and again for acceleration; integrate each component to go back the other way.",
    "Speed is the length of the velocity vector, √((dx/dt)² + (dy/dt)²). Total distance traveled is the integral of speed, which is the same formula as parametric arc length.",
    "!When integrating velocity to find position, each component needs its own starting value: x(b) = x(a) + ∫ x′(t) dt, and the same for y."]
});

plus("c10", {
  "1": ["A sequence is a list of numbers; the question is where the terms are heading. It converges if they settle toward one finite value. Finding that value is an ordinary limit as n → ∞, so the usual tools apply, including comparing growth rates.",
    "Growth rates in order, slowest to fastest: logarithms, powers of n, exponentials, factorials, nⁿ. When a faster one is in the denominator the terms go to 0; when it is in the numerator they blow up.",
    "!A sequence is not a series. The sequence asks about the terms; the series asks about their running total."],
  "2": ["A series adds up infinitely many terms, and it converges if the running totals (partial sums) approach a finite number. A geometric series is the one kind where you can say exactly what that number is: each term is the previous one times r, and if |r| < 1 the sum is (first term) / (1 − r).",
    "The p-series Σ 1/nᵖ is the main yardstick for comparison. It converges when p > 1 and diverges when p ≤ 1. The harmonic series (p = 1) diverges even though its terms go to zero, which shows that shrinking terms are not enough.",
    "!The geometric sum formula uses the first term actually in the series, which isn't always the a you see written. Write out the first term to be sure."],
  "3": ["The nth-term test is a quick filter. If the terms don't shrink to 0, you are adding amounts that stay noticeable forever, so the sum can't settle: the series diverges. If the terms do go to 0, the test tells you nothing and you need another test.",
    "The integral test compares a series with the area under a matching curve. If the function is positive, continuous and decreasing, the series and the improper integral either both converge or both diverge.",
    "!The integral test tells you whether the series converges, not what it adds up to. The value of the integral is not the sum."],
  "4": ["Comparison tests judge a hard series by placing it next to an easy one, usually a p-series or geometric series. Direct comparison: a series of positive terms that is smaller than a convergent series must converge, and one that is larger than a divergent series must diverge.",
    "The limit comparison test avoids fussy inequalities. Keep only the dominant terms of the numerator and denominator to choose the comparison series, then take the limit of the ratio of the two general terms. A finite positive limit means both series behave the same way.",
    "!Direct comparison only works in the helpful direction. Being smaller than a divergent series, or larger than a convergent one, proves nothing."],
  "5": ["When signs alternate, each term partly undoes the one before, so the partial sums hop back and forth across the final value. If the terms' sizes decrease toward 0, the hops shrink and the sum closes in on a limit: the series converges.",
    "That picture also gives the error bound. Stopping after some term leaves you within one hop of the true sum, so the error is no bigger than the first term you left out.",
    "Absolute convergence means the series still converges with every term made positive. Conditional convergence means it converges only because of the alternating signs, as with the alternating harmonic series."],
  "6": ["The ratio test asks whether a series eventually behaves like a geometric one. Take the limit of |aₙ₊₁ / aₙ|. If that limit L is less than 1, the terms shrink by roughly a constant factor each step and the series converges absolutely. If L is greater than 1 it diverges.",
    "It is the test to reach for when terms contain factorials or exponentials in n, because those cancel neatly in a ratio.",
    "!If the limit is exactly 1, the ratio test is inconclusive. That always happens with p-series-like terms, so use a comparison test for those."],
  "8": ["A power series is a polynomial that never ends, with x left as a variable. Whether it converges depends on x, so the answer is an interval: all the x-values for which the series adds up to something finite.",
    "The ratio test finds that interval. It produces a condition of the form |x − c| < R, giving the center c and radius R. Inside the radius the series converges; outside it diverges.",
    "!The ratio test says nothing at the two endpoints. Plug each endpoint into the series and test it separately; either, both or neither may be included."],
  "9": ["A Taylor polynomial is built to copy a function at one point as closely as possible: same value, same slope, same concavity, and so on up to the nth derivative. Matching the kth derivative is what forces the coefficient to be f⁽ᵏ⁾(c)/k!.",
    "The four series worth memorizing are those for eˣ, sin x, cos x and 1/(1 − x). Nearly every other series on the exam is made from them by substituting (replace x with x² or −3x), multiplying by a power of x, differentiating or integrating term by term.",
    "!A Maclaurin series is just a Taylor series centered at 0. For a different center, the powers are of (x − c), not x."],
  "10": ["A Taylor polynomial is an approximation, so the real question is how far off it can be. For an alternating series whose terms decrease to 0, the error is at most the first omitted term.",
    "For any series, the Lagrange error bound says the error of the nth-degree polynomial is at most M·|x − c|ⁿ⁺¹ / (n + 1)!, where M is the largest value of the (n + 1)th derivative between c and x. It looks like the next term of the series, with the derivative replaced by its worst case.",
    "!M is a maximum of the next derivative on the interval, not that derivative at the center. The problem usually gives you a bound to use."]
});
})();
