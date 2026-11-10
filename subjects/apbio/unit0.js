/* AP Biology · Unit 0: Experimental Design & Statistical Analysis
   Source: Ms. Ravuri's Unit 0 interactive notes (Topics 1-4) and their key.
   Class rule for significance: error bars are ±2 SEM; no overlap = statistically significant.
   Chi-squared critical values at p = 0.05: df 1 = 3.84, 2 = 5.99, 3 = 7.82, 4 = 9.49, 5 = 11.07. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const CRIT = {1: 3.84, 2: 5.99, 3: 7.82, 4: 9.49, 5: 11.07};

/* bar graph of plant growth in five soil types with ±2 SEM error bars */
function soilGraph(){
  const D = [["A", 20, 2], ["B", 30, 2.5], ["C", 27, 1.5], ["D", 21, 0.5], ["E", 29, 1]];
  const Y = v => 235 - v * 5.2, X = i => 110 + i * 92;
  const bars = D.map(([n, m, s], i) => {
    const x = X(i), lo = Y(m - 2 * s), hi = Y(m + 2 * s);
    return `<path class="ln" d="M${x - 24} 235 V${Y(m)} H${x + 24} V235"/>
      <line class="axis" x1="${x}" y1="${lo}" x2="${x}" y2="${hi}" stroke-width="2"/><line class="axis" x1="${x - 9}" y1="${lo}" x2="${x + 9}" y2="${lo}" stroke-width="2"/><line class="axis" x1="${x - 9}" y1="${hi}" x2="${x + 9}" y2="${hi}" stroke-width="2"/>
      <text x="${x}" y="254" font-size="14" text-anchor="middle" font-weight="700">${n}</text>`;
  }).join("");
  return `<svg viewBox="0 0 600 285" role="img" aria-label="Bar graph of average one-year plant growth in five soil types, with error bars of plus or minus two standard errors. A: 20 cm, bars from 16 to 24. B: 30 cm, bars from 25 to 35. C: 27 cm, bars from 24 to 30. D: 21 cm, bars from 20 to 22. E: 29 cm, bars from 27 to 31.">
    <line class="axis" x1="60" y1="25" x2="60" y2="235" stroke-width="2"/><line class="axis" x1="60" y1="235" x2="560" y2="235" stroke-width="2"/>
    ${[0, 10, 20, 30, 40].map(v => `<text x="52" y="${Y(v) + 4}" font-size="12" text-anchor="end">${v}</text><line class="axis dash" x1="60" y1="${Y(v)}" x2="560" y2="${Y(v)}" opacity=".35"/>`).join("")}
    <text x="18" y="130" font-size="13" transform="rotate(-90 18 130)" text-anchor="middle">Average growth (cm)</text>
    <text x="310" y="277" font-size="13" text-anchor="middle">Soil type (error bars = ±2 SEM)</text>${bars}
  </svg>`;
}

Study.addUnit("apbio", {
  id: "u0",
  name: "Unit 0: Experimental Design & Statistics",
  short: "Unit 0",
  sections: [
    {id:"0.1", name:"0.1 Controlled Experiments"},
    {id:"0.2", name:"0.2 Graphs & Data"},
    {id:"0.3", name:"0.3 Standard Error (SEM)"},
    {id:"0.4", name:"0.4 Chi-Squared Test"}
  ],

  notes: {
    "0.1": [
      {sum:["A controlled experiment changes one factor (the independent variable) and keeps everything else constant.", "The control group gives a baseline. Negative controls get no treatment; positive controls get a treatment known to work.", "A strong hypothesis is testable, names the independent and dependent variables, and makes a specific prediction."]},
      {p:"Most experiments start with an **observation**, which leads to a **question**, then research and a **hypothesis** (a testable prediction). The experiment is designed to test that hypothesis."},
      {table:{head:["Part", "What it is", "Goldfish example"], rows:[
        ["Independent variable", "what the experimenter changes between groups", "the change in water temperature"],
        ["Dependent variable", "what is measured; it responds to the IV", "the change in respiration rate (breaths/min)"],
        ["Constants", "everything kept identical in all groups", "fish species and size, bowl size, starting temperature (20°C)"],
        ["Experimental group(s)", "receive some version of the IV", "fish moved to 10, 15, 25 and 30°C bowls"],
        ["Control group", "does not receive the IV; the baseline", "fish moved to a 20°C bowl (no change)"]
      ]}},
      {h:"Negative and positive controls"},
      {steps:["**Negative control:** identical to the experimental groups but gets no treatment expected to have an effect. It shows what happens with no independent variable.", "**Positive control:** gets a different treatment that is already **known** to produce the effect. It proves the setup and the measuring method actually work."]},
      {ex:{q:"You swab lettuce onto growth plates to see if it carries bacteria. What are good negative and positive controls?", a:["Negative: wipe a clean swab on a plate without touching the lettuce. Nothing should grow, which shows the swabs, plates and incubator aren't contaminated.", "Positive: swab something known to carry bacteria. Growth shows the plates and incubator can grow bacteria at all."]}},
      {h:"Writing a strong hypothesis"},
      {p:"Use **if … then …**. Weak: \"If the water temperature changes, then the respiration rate will change\" (not specific). Strong: \"If the water temperature decreases, then the respiration rate will decrease\" (testable, has the IV and DV, and predicts a direction)."},
      {tip:"DRY MIX: the Dependent (Responding) variable goes on the Y axis; the Manipulated (Independent) variable goes on the X axis."},
      {check:[{q:"In the goldfish experiment, which fish are the control group?", a:"The fish moved into the 20°C bowl, because its water temperature didn't change."}, {q:"What is a positive control for?", a:"To show the setup and measurements work, by using a treatment already known to cause the effect."}, {q:"Why keep constants?", a:"So that any change in the dependent variable can only be due to the independent variable."}]}
    ],
    "0.2": [
      {sum:["Pick the graph by the kind of data: categories → bar graph or pie chart; a spread of one continuous variable → histogram or box plot; two continuous variables → scatter plot or line graph.", "A box-and-whisker plot shows the five-number summary: minimum, Q1, median, Q3, maximum.", "Every graph needs a descriptive title, labeled axes with units, and even scales."]},
      {table:{head:["Graph", "Use it for", "Remember"], rows:[
        ["Bar graph", "comparing categories (sex, grade level, soil type)", "bars do not touch"],
        ["Histogram", "how often values of one continuous variable fall in each range", "bars touch"],
        ["Box and whisker", "summarizing and comparing distributions", "five-number summary"],
        ["Scatter plot", "the overall relationship between two continuous variables", "line of best fit, don't connect the dots"],
        ["Line graph", "point-to-point change, usually over time", "connect the dots"],
        ["Pie chart", "parts of a whole (fractions or percents)", "categories add to 100%"]
      ]}},
      {h:"Five-number summary"},
      {steps:["Put the values in order from smallest to largest.", "**Minimum** and **maximum** are the ends.", "**Median** = the middle value (or the mean of the two middle values when the count is even).", "**Q1** = the median of the values left of the median. **Q3** = the median of the values right of it."]},
      {ex:{q:"Male heights (in): 58, 60, 63, 65, 65, 69, 69, 71, 72, 74, 75. Find the five-number summary.", a:["11 values, so the median is the 6th: 69.", "Left half (58, 60, 63, 65, 65) → Q1 = 63. Right half (69, 71, 72, 74, 75) → Q3 = 72.", "Min 58, Q1 63, median 69, Q3 72, max 75."]}},
      {h:"Line of best fit"},
      {p:"Draw one straight line through the middle of the points with about as many points above as below. It doesn't have to touch every point, and it shouldn't extend past the first and last data points (use a dotted line if it does)."},
      {check:[{q:"Bar graph or histogram: number of students in each height range?", a:"Histogram. Height is continuous and you're counting how many fall in each range."}, {q:"Scatter plot or line graph: a plant's height measured every day for a month?", a:"Line graph. It tracks point-to-point change over time."}, {q:"What goes on the x-axis?", a:"The independent variable."}]}
    ],
    "0.3": [
      {sum:["SEM measures how well a sample mean represents the real population. Large SEM = lots of variation; small SEM = little variation.", "Error bars are drawn at the mean ± 2 SEM (95% confidence).", "If two groups' error bars overlap, the difference is NOT statistically significant. No overlap = significant."]},
      {p:"You usually can't measure a whole population, so you measure a **sample**. The **standard error of the mean (SEM)** tells you how far the sample mean is likely to be from the true mean."},
      {steps:["Find each group's mean.", "Go up and down **2 × SEM** from the mean to get the error bar.", "Compare the ranges. **Overlap → no significant difference** (it could be chance). **No overlap → significant difference** (95% sure it's real)."]},
      {ex:{q:"Boys: mean 67.2 in, SEM 1.9. Girls: mean 62.1 in, SEM 1.5. Are boys significantly taller?", a:["Boys: 67.2 ± 3.8 → 63.4 to 71.0.", "Girls: 62.1 ± 3.0 → 59.1 to 65.1.", "The ranges overlap (63.4 to 65.1), so the difference is not statistically significant. The hypothesis is not supported."]}},
      {warn:"Data only supports a claim if the difference is statistically significant. A bigger mean alone isn't enough."},
      {tip:"On FRQs, justify with the bars: \"the ±2 SEM error bars do not overlap, so the difference is statistically significant.\""},
      {check:[{q:"Group A: 20 ± 2 SEM of 2. What is its error-bar range?", a:"20 ± 4 → 16 to 24."}, {q:"Which group has the most variation in its data?", a:"The one with the largest SEM (the longest error bars)."}, {q:"Two bars overlap slightly. Significant?", a:"No. Any overlap means the difference could be due to chance."}]}
    ],
    "0.4": [
      {sum:["A chi-squared (χ²) test checks whether observed counts differ from expected counts by more than chance.", "χ² = the sum of (observed − expected)² ÷ expected. Degrees of freedom = categories − 1.", "If χ² is greater than the critical value at p = 0.05, reject the null hypothesis. If it's smaller, accept it (fail to reject)."]},
      {steps:["State the **null hypothesis (H₀)**: the data fit the expected distribution; any difference is chance. The **alternative** says they don't fit.", "Find the **expected** count for each category from H₀.", "Calculate **χ² = Σ (o − e)² / e**.", "Find **degrees of freedom = number of categories − 1** and the critical value at p = 0.05.", "**χ² > critical value → reject H₀** (the difference is significant). **χ² < critical value → accept H₀** (the difference is chance)."]},
      {table:{head:["Degrees of freedom", "1", "2", "3", "4", "5"], rows:[["Critical value (p = 0.05)", "3.84", "5.99", "7.82", "9.49", "11.07"]]}},
      {ex:{q:"A die is rolled 60 times: 1 → 15, 2 → 10, 3 → 4, 4 → 10, 5 → 2, 6 → 19. Is it fair?", a:["H₀: each side comes up 1/6 of the time, so expect 10 each.", "χ² = 25/10 + 0 + 36/10 + 0 + 64/10 + 81/10 = 20.6.", "df = 6 − 1 = 5, critical value 11.07.", "20.6 > 11.07, so reject H₀. The die is not fair."]}},
      {ex:{q:"30 pill bugs choose between sugar water (14), the middle (7) and regular water (9). Are they attracted to sugar?", a:["H₀: equal numbers in each area, so expect 10, 10, 10.", "χ² = 16/10 + 9/10 + 1/10 = 2.6. df = 2, critical value 5.99.", "2.6 < 5.99, so accept H₀. The bugs are not significantly attracted to sugar."]}},
      {tip:"AP graders look for three things in the conclusion: the χ² value, the critical value with its degrees of freedom and p-value, and whether H₀ is rejected."},
      {check:[{q:"A cross has 4 phenotype classes. Degrees of freedom?", a:"4 − 1 = 3."}, {q:"χ² = 2.91, df = 1. Accept or reject H₀?", a:"Accept. 2.91 is less than 3.84."}, {q:"What does rejecting H₀ mean?", a:"The difference between observed and expected is statistically significant, not just chance."}]}
    ]
  },

  problems(k){
    const SRC = {"0.1":"0.1 Experiments", "0.2":"0.2 Graphs", "0.3":"0.3 SEM", "0.4":"0.4 Chi-squared"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 0.1 ===== */
    const GOLD = {stim: "Five similar goldfish start in one large bowl at 20°C. Each is moved to a small bowl at 10, 15, 20, 25 or 30°C, and the change in its respiration rate (gill-cover beats per minute) is measured.", cite: "Goldfish experiment (class notes)"};
    const part = (text, a, why) => k.choice(["0.1"], SRC["0.1"], text, ["Independent variable", "Dependent variable", "Constant", "Control group"], a, [why], {label:"Goldfish experiment (fish moved from a 20°C bowl to bowls at 10 to 30°C; change in breathing rate measured): which part is this?"});
    part("The change in water temperature", "Independent variable", "It's the factor the experimenter changes.");
    part("The change in respiration rate", "Dependent variable", "It's what is measured in response.");
    part("The species and size of the fish", "Constant", "Kept the same in every group.");
    part("The fish moved into the 20°C bowl", "Control group", "Its temperature doesn't change, so it's the baseline.");
    part("The size of the small bowls", "Constant", "Identical for every group.");
    part("The starting temperature of 20°C", "Constant", "Every fish starts in the same water.");
    set("0.1", GOLD, [
      ["Which fish are the experimental groups?", ["The fish moved to 10, 15, 25 and 30°C", "The fish moved to the 20°C bowl only", "Every fish while in the large bowl", "Only the fish moved to warmer water"], "Experimental groups receive some version of the independent variable (a temperature change)."],
      ["A sixth fish is moved to a 20°C bowl with a little caffeine, which is known to raise respiration rate. What is this group?", ["A positive control group", "A negative control group", "An experimental group", "A second dependent variable"], "It gets a treatment known to cause the effect, showing the setup can detect a change."],
      ["The fish in colder water breathed slower and the fish in warmer water breathed faster. What kind of relationship is this?", ["Direct: as temperature rises, the rate rises", "Inverse: as temperature rises, the rate falls", "None: the rate is the same at every temperature", "Random: the rate changes with no pattern"], "Both variables move in the same direction."]
    ]);
    const hy = cat("0.1", ["Strong", "Weak"], "Strong or weak hypothesis?");
    hy("If the water temperature decreases, then the fish's respiration rate will decrease.", "Strong", "Testable, includes both variables, and predicts a direction.");
    hy("If the water temperature changes, then the respiration rate will change.", "Weak", "Not specific: it doesn't say how the rate will change.");
    hy("Fish like warm water better than cold water.", "Weak", "Not testable as written and names no measurable variables.");
    hy("If coral is placed in more acidic water, then more of it will bleach.", "Strong", "Names the IV (acidity), the DV (bleaching) and a direction.");
    const ctl = cat("0.1", ["Negative control", "Positive control"], "Negative or positive control?");
    ctl("A clean swab is wiped on a growth plate without touching the lettuce.", "Negative control", "No treatment: nothing should grow.");
    ctl("A swab known to carry bacteria is wiped on a growth plate.", "Positive control", "Known to produce growth, so it shows the plates work.");
    ctl("Plants given plain water in a fertilizer experiment.", "Negative control", "They get no independent variable.");
    ctl("Cells treated with a drug already known to stop division, in a test of a new drug.", "Positive control", "A treatment known to cause the expected effect.");
    set("0.1", {stim: "Researchers placed equal-sized coral fragments in identical tanks of normal seawater (pH 8.2), medium acidity (pH 7.9) and high acidity (pH 7.65), then measured how much of the coral bleached: 10%, 20% and 40%.", cite: "Coral bleaching case study (class notes)"}, [
      ["What is the independent variable?", ["The acidity (pH) of the water", "The percent of coral that bleached", "The size of each coral fragment", "The number of tanks that were used"], "It's what the researchers changed between tanks."],
      ["What is the dependent variable?", ["The level of coral bleaching", "The pH of the water in the tank", "The size of the coral fragments", "The number of coral fragments"], "It's what was measured."],
      ["Which conclusion do the results support?", ["Bleaching increased as the water became more acidic", "Bleaching decreased as the water became more acidic", "Acidity had no effect on the amount of bleaching", "Bleaching was highest in the normal seawater tank"], "10% → 20% → 40% as pH dropped."]
    ]);
    mc("0.1", "Coral is kept in tanks of normal seawater (pH 8.2), medium acidity (pH 7.9) and high acidity (pH 7.65) to see how acidity affects bleaching. Which is the control group?", ["Coral in normal seawater (pH 8.2)", "Coral in medium acidity (pH 7.9)", "Coral in high acidity (pH 7.65)", "All three tanks taken together"], "Normal seawater is the baseline with no added acidity.");
    mc("0.1", "Why does a controlled experiment keep all variables except one constant?",
      ["So any change in the results can be traced to the independent variable", "So the experiment always ends up supporting the original hypothesis", "So the dependent variable stays the same in every group", "So the experiment doesn't need to have a control group"],
      "If two things changed, you couldn't tell which one caused the effect.");
    mc("0.1", "What usually comes first in a scientific investigation?",
      ["An observation that leads to a question", "A graph of the experiment's results", "A statistical test of the collected data", "A conclusion about the hypothesis"],
      "Observation → question → research and hypothesis → experiment.");

    /* ===== 0.2 ===== */
    const gr = cat("0.2", ["Bar graph", "Histogram", "Scatter plot", "Line graph", "Pie chart"], "Best graph?");
    gr("Average plant growth in five different soil types", "Bar graph", "Soil types are categories.");
    gr("How many students scored in each 10-point range on a test", "Histogram", "Counts of a continuous variable in ranges.");
    gr("The overall relationship between water temperature change and respiration rate change", "Scatter plot", "Two continuous variables, overall trend.");
    gr("A population's size measured every year for 20 years", "Line graph", "Point-to-point change over time.");
    gr("The percent of a cell's mass made of each macromolecule", "Pie chart", "Parts of a whole.");
    gr("The number of students in each grade level who own a pet", "Bar graph", "Grade levels are categories.");
    gr("The distribution of heights in a class, grouped in 2-inch ranges", "Histogram", "Frequency of a continuous variable.");
    mc("0.2", "How can you tell a histogram from a bar graph?", ["A histogram's bars touch; a bar graph's bars don't", "A histogram is horizontal; a bar graph is vertical", "A histogram shows categories; a bar graph shows ranges", "A histogram has no axis labels; a bar graph does"], "Histogram bars touch because the variable is continuous.");
    mc("0.2", "When is a line graph a better choice than a scatter plot?", ["When the change from one point to the next matters", "When both variables are categories, not numbers", "When you want one best-fit line through the data", "When the data are fractions of a whole amount"], "Line graphs connect the dots to show point-to-point change, usually over time.");
    mc("0.2", "Which is a correctly drawn linear line of best fit?", ["A straight line through the middle of the points", "A line that connects each point to the next one", "A line from the origin to the highest data point", "A line that passes through only the first point"], "About as many points should sit above the line as below it.");
    mc("0.2", "Which variable belongs on the y-axis?", ["The dependent variable", "The independent variable", "The control variable", "The constant variable"], "DRY MIX: Dependent/Responding on Y.");
    mc("0.2", "A graph has a title, plotted points and evenly scaled axes. What is missing?", ["Axis labels with units", "A second line of best fit", "A legend for the title", "A table of the raw data"], "Every graph needs labeled axes with units.");
    const MALE = "Male heights in inches, in order: 58, 60, 63, 65, 65, 69, 69, 71, 72, 74, 75.";
    const FEM = "Female heights in inches, in order: 54, 55, 59, 62, 62, 64, 65, 66, 68, 70.";
    num("0.2", MALE + " What is the median?", 69, "11 values, so the 6th one is the median.");
    num("0.2", MALE + " What is the lower quartile (Q1)?", 63, "The median of the five values left of the median: 58, 60, 63, 65, 65.");
    num("0.2", MALE + " What is the upper quartile (Q3)?", 72, "The median of the five values right of the median: 69, 71, 72, 74, 75.");
    num("0.2", FEM + " What is the median?", 63, "10 values, so average the 5th and 6th: (62 + 64) / 2.");
    num("0.2", FEM + " What is the lower quartile (Q1)?", 59, "The median of 54, 55, 59, 62, 62.");
    num("0.2", FEM + " What is the upper quartile (Q3)?", 66, "The median of 64, 65, 66, 68, 70.");
    mc("0.2", "Which five values does a box-and-whisker plot show?", ["Minimum, Q1, median, Q3, maximum", "Mean, median, mode, range, total", "Mean, SEM, minimum, maximum, total", "Q1, Q2, Q3, Q4 and the mean"], "That's the five-number summary.");

    /* ===== 0.3 ===== */
    set("0.3", {svg: soilGraph(), cite: "One-year plant growth in different soil types (class notes)"}, [
      ["Which group's data varied the most?", ["B, because it has the largest SEM", "D, because it has the smallest SEM", "A, because it has the lowest mean", "E, because it has the second-highest mean"], "The longest error bars mean the most variation."],
      ["Which group's data varied the least?", ["D, because it has the smallest SEM", "B, because it has the largest SEM", "B, because it has the highest mean", "A, because it has the lowest mean"], "The shortest error bars mean the least variation."],
      ["Which three soil types show no statistically significant difference from each other?", ["B, C and E", "A, B and D", "C, D and E", "A, C and D"], "Their error bars all overlap (25–35, 24–30, 27–31)."],
    ]);
    set("0.3", {stim: "Average one-year plant growth: soil A 20 cm (SEM 2), soil B 30 cm (SEM 2.5), soil C 27 cm (SEM 1.5), soil D 21 cm (SEM 0.5), soil E 29 cm (SEM 1).", cite: "One-year plant growth in different soil types (class notes)"}, [
      ["Does the data support the claim that soil B produces more growth than soil C?", ["No, their error bars overlap", "Yes, B has a higher mean than C", "Yes, B has a larger SEM than C", "No, C has a higher mean than B"], "25–35 overlaps 24–30, so the difference isn't significant."],
      ["Does the data support the claim that soil B produces more growth than soil D?", ["Yes, their error bars do not overlap", "No, their error bars overlap a little", "No, D has a much smaller SEM than B", "Yes, but only because B's SEM is larger"], "B is 25–35 and D is 20–22: no overlap, so it's significant."],
      ["Which pair is significantly different?", ["D and E", "B and C", "C and E", "A and D"], "D (20–22) and E (27–31) don't overlap."]
    ]);
    mc("0.3", "What does a large standard error of the mean tell you?", ["The sample data varied a lot and may not represent the population well", "The sample data varied very little and represent the population well", "The two groups being compared must be significantly different", "The experiment had too many constants and too few variables"], "High SEM = lots of variation, less trust in the mean.");
    mc("0.3", "Error bars are usually drawn at the mean plus or minus how much?", ["2 SEM", "1 SEM", "5 SEM", "10 SEM"], "±2 SEM gives 95% confidence.");
    mc("0.3", "Two groups' ±2 SEM error bars do not overlap. What can you say?", ["You can be 95% sure the difference is real", "The difference is certainly due to chance", "The two groups have exactly the same mean", "The experiment needs a positive control"], "No overlap = statistically significant.");
    num("0.3", "A group has a mean of 30 cm and an SEM of 2.5 cm. What is the top of its ±2 SEM error bar?", 35, "30 + 2 × 2.5 = 35.");
    num("0.3", "A group has a mean of 21 cm and an SEM of 0.5 cm. What is the bottom of its ±2 SEM error bar?", 20, "21 − 2 × 0.5 = 20.");
    set("0.3", {stim: "Mean height of 10 boys: 67.2 in (SEM 1.9). Mean height of 10 girls: 62.1 in (SEM 1.5). A student hypothesizes that boys at the school are taller than girls.", cite: "Height practice (class notes)"}, [
      ["What is the ±2 SEM range for the girls?", ["59.1 to 65.1 in", "60.6 to 63.6 in", "63.4 to 71.0 in", "58.3 to 65.9 in"], "62.1 ± 3.0."],
      ["What is the ±2 SEM range for the boys?", ["63.4 to 71.0 in", "65.3 to 69.1 in", "59.1 to 65.1 in", "61.5 to 72.9 in"], "67.2 ± 3.8."],
      ["Is the hypothesis supported?", ["No, the error bars overlap", "Yes, the boys' mean is higher", "Yes, the error bars don't overlap", "No, the girls' SEM is smaller"], "Boys 63.4–71.0 and girls 59.1–65.1 overlap, so the difference isn't significant."]
    ]);
    set("0.3", {stim: "Average change in goldfish respiration rate (breaths/min) with 8 fish per group. −10°C: −16 (SEM 2). −5°C: −11 (SEM 2.5). 0°C: −2 (SEM 4). +5°C: +14 (SEM 2). +10°C: +17 (SEM 1.5).", cite: "Goldfish experiment with SEM (class notes)"}, [
      ["Is the −10°C group significantly different from the 0°C group?", ["Yes: −20 to −12 doesn't overlap −10 to +6", "No: −20 to −12 overlaps −10 to +6", "Yes: its mean is lower than the 0°C mean", "No: its SEM is smaller than the 0°C SEM"], "The top of the −10°C bar (−12) is below the bottom of the 0°C bar (−10)."],
      ["Is the −5°C group significantly different from the 0°C group?", ["No: −16 to −6 overlaps −10 to +6", "Yes: −16 to −6 doesn't overlap −10 to +6", "Yes: its mean is 9 lower than the 0°C mean", "No: both groups used the same eight fish"], "The ranges overlap between −10 and −6."],
      ["Is the +5°C group significantly different from the +10°C group?", ["No: 10 to 18 overlaps 14 to 20", "Yes: 10 to 18 doesn't overlap 14 to 20", "Yes: 17 is a larger change than 14", "No: both changes are positive"], "The ranges overlap between 14 and 18."]
    ]);

    /* ===== 0.4 ===== */
    mc("0.4", "What is a chi-squared test used for?", ["Deciding if observed counts differ significantly from expected counts", "Finding the average of several repeated trials in a single experiment", "Measuring how much the data in one sample varies", "Choosing which type of graph fits a set of data"], "It's a goodness-of-fit test.");
    mc("0.4", "What does the null hypothesis state?", ["The data fit the expected distribution; differences are due to chance", "The data don't fit the expected distribution; something else is acting", "The independent variable always changes the dependent variable", "The observed counts are larger than the expected counts"], "H₀ predicts no real difference from what's expected.");
    mc("0.4", "Your χ² value is larger than the critical value at p = 0.05. What do you conclude?", ["Reject H₀: the difference is statistically significant", "Accept H₀: the difference is due to random chance", "Reject H₀: the difference is due to random chance", "Accept H₀: the difference is statistically significant"], "Bigger than the critical value → reject the null.");
    mc("0.4", "What does p = 0.05 mean when you reject the null hypothesis?", ["There's only a 5% chance the difference is due to chance", "There's a 95% chance the difference is due to chance", "Exactly 5% of the observed counts were wrong", "The expected counts were off by 5% in each category"], "You're 95% confident the difference is real.");
    num("0.4", "A die has 6 sides. How many degrees of freedom does a chi-squared test of its rolls have?", 5, "Categories − 1 = 6 − 1.");
    num("0.4", "Offspring are sorted as male or female. How many degrees of freedom?", 1, "2 categories − 1.");
    num("0.4", "A die is rolled 60 times. Under the null hypothesis that it's fair, what count is expected for each side?", 10, "60 × 1/6.");
    num("0.4", "Two heterozygous plants should give 75% purple offspring. Out of 140 offspring, how many purple are expected?", 105, "0.75 × 140.");
    num("0.4", "88 fish offspring are expected to be half male. How many males are expected?", 44, "88 / 2.");
    num("0.4", "Pill bugs: observed 14, 7 and 9 in three areas; expected 10 in each. What is χ²?", 2.6, "16/10 + 9/10 + 1/10 = 2.6.");
    num("0.4", "A die rolled 60 times gives 15, 10, 4, 10, 2 and 19. Expected is 10 each. What is χ²?", 20.6, "2.5 + 0 + 3.6 + 0 + 6.4 + 8.1 = 20.6.");
    const dec = cat("0.4", ["Reject H₀", "Accept H₀"], "Reject or accept the null hypothesis?");
    dec("Die: χ² = 20.6 with 5 degrees of freedom (critical value 11.07)", "Reject H₀", "20.6 > 11.07. The die isn't fair.");
    dec("Pill bugs: χ² = 2.6 with 2 degrees of freedom (critical value 5.99)", "Accept H₀", "2.6 < 5.99. They aren't significantly attracted to sugar.");
    dec("Card suits: χ² = 2.48 with 3 degrees of freedom (critical value 7.82)", "Accept H₀", "2.48 < 7.82. The machine deals the suits equally.");
    dec("Fish sex ratio: χ² = 2.91 with 1 degree of freedom (critical value 3.84)", "Accept H₀", "2.91 < 3.84. 52 males to 36 females could be chance.");
    dec("Morning glory colors: χ² = 27.77 with 1 degree of freedom (critical value 3.84)", "Reject H₀", "27.77 > 3.84. They don't follow a 3:1 ratio.");
    mc("0.4", "A machine deals 1,600 cards: 404 spades, 420 hearts, 400 diamonds, 376 clubs. What is the null hypothesis?", ["Each suit has an equal 1/4 chance of being dealt", "Hearts are dealt more often than the other suits", "Clubs are dealt less often than the other suits", "The machine deals a different suit every time"], "H₀ is the expected (random) distribution: 400 of each.");
    mc("0.4", "Which three things belong in a chi-squared conclusion?", ["The χ² value, the critical value with df and p, and the decision on H₀", "The group means, each SEM, and whether the ±2 SEM error bars overlap", "The title, the axis labels, and the line of best fit", "The hypothesis, the constants, and the control group"], "This is what AP graders look for.");
  },

  drills: {
    /* do the ±2 SEM bars overlap? */
    "0.3": k => {
      const m1 = rint(20, 40), s1 = rint(1, 6) / 2, s2 = rint(1, 6) / 2, m2 = m1 + rint(3, 16);
      const sig = m1 + 2 * s1 < m2 - 2 * s2;
      return {kind:"choice", text:`Group 1: mean ${m1}, SEM ${s1}. Group 2: mean ${m2}, SEM ${s2}. Using ±2 SEM error bars, is the difference statistically significant?`,
        fields:[k.F.choice("Significant?", ["Yes, significant", "No, not significant"], sig ? "Yes, significant" : "No, not significant")],
        steps:[`Group 1: ${m1 - 2 * s1} to ${m1 + 2 * s1}.`, `Group 2: ${m2 - 2 * s2} to ${m2 + 2 * s2}.`, sig ? "The ranges don't overlap, so the difference is significant." : "The ranges overlap (or touch), so the difference is not significant."]};
    },
    /* chi-squared with three equal categories */
    "0.4": k => {
      const e = pick([10, 20]), f = e / 10, d1 = rint(-4, 4) * f, d2 = rint(-4, 4) * f, o = [e + d1, e + d2, e - d1 - d2];
      const raw = o.reduce((t, v) => t + (v - e) * (v - e) / e, 0), x2 = Math.round(10 * raw) / 10;
      const work = o.map(v => `(${v} − ${e})²/${e}`).join(" + ");
      if (Math.random() < 0.5 && e === 10)
        return {kind:"num", text:`Animals choose among three areas. Observed: ${o.join(", ")}. Expected: ${e} in each. What is χ²?`, fields:[k.F.num("χ²", x2)], steps:[`${work} = ${x2}`]};
      const rej = raw > CRIT[2];
      return {kind:"choice", text:`Animals choose among three areas. Observed: ${o.join(", ")}. Expected: ${e} in each. The critical value for 2 degrees of freedom is 5.99. What do you conclude?`,
        fields:[k.F.choice("Decision", ["Reject H₀", "Accept H₀"], rej ? "Reject H₀" : "Accept H₀")],
        steps:[`χ² = ${work} ≈ ${x2}`, rej ? `${x2} > 5.99, so reject H₀: the animals prefer some areas.` : `${x2} < 5.99, so accept H₀: the differences are chance.`]};
    }
  }
});
})();
