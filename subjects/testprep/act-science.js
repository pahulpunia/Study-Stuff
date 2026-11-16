/* ACT Science
   The real section is 40 questions in 40 minutes and is optional on the current ACT. Passages come in
   three formats: Data Representation (tables and graphs), Research Summaries (experiments) and
   Conflicting Viewpoints (two or more explanations). Questions test interpreting data, understanding
   experiments, and evaluating models; very little outside science knowledge is needed.
   The passages here were written for this site. Data are given as short lists so they fit on a phone.
   The solubility values are rounded real values; the other data sets are made up for practice. */
(() => {
const SRC = "ACT style";
const set = k => (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], SRC, t, o, o[0], [].concat(w), {shuffle:true, stim, cite}));

const SOL = "The table shows the mass of three salts that will dissolve in 100 g of water at different temperatures.\n\n**Solubility (g per 100 g of water)**\n0°C: KCl 28, KNO₃ 13, NaCl 36\n20°C: KCl 34, KNO₃ 32, NaCl 36\n40°C: KCl 40, KNO₃ 64, NaCl 37\n60°C: KCl 46, KNO₃ 110, NaCl 37\n80°C: KCl 51, KNO₃ 169, NaCl 38\n\nA solution holding the maximum amount of dissolved salt is saturated. If a saturated solution is cooled, salt in excess of the new solubility forms crystals.";

const ENZ = "Students measured how fast two digestive enzymes broke down protein at different pH values. Activity is given as a percent of each enzyme's own maximum.\n\n**Relative activity (%)**\npH 1: Enzyme A 70, Enzyme B 0\npH 2: Enzyme A 100, Enzyme B 0\npH 4: Enzyme A 40, Enzyme B 10\npH 6: Enzyme A 5, Enzyme B 60\npH 8: Enzyme A 0, Enzyme B 100\npH 10: Enzyme A 0, Enzyme B 45\n\nThe fluid in the stomach has a pH near 2. The fluid in the small intestine has a pH near 8.";

const PEN = "Students studied the period of a pendulum (the time for one full swing back and forth). In every trial they timed 10 swings and divided by 10.\n\n**Experiment 1** (mass 100 g, release angle 10°; length varied)\n25 cm: 1.0 s\n50 cm: 1.4 s\n100 cm: 2.0 s\n200 cm: 2.8 s\n\n**Experiment 2** (length 100 cm, release angle 10°; mass varied)\n50 g: 2.0 s\n100 g: 2.0 s\n200 g: 2.0 s\n\n**Experiment 3** (length 100 cm, mass 100 g; release angle varied)\n5°: 2.0 s\n10°: 2.0 s\n15°: 2.0 s";

const BEAN = "Students studied how light affects the growth of bean seedlings. All seedlings were the same age and received the same soil, water and temperature.\n\n**Study 1** Four groups of 10 seedlings grew for 14 days under light of different colors, all at the same intensity.\nMean height after 14 days:\nWhite: 18.2 cm\nRed: 16.5 cm\nBlue: 14.1 cm\nGreen: 6.3 cm\n\n**Study 2** Three groups of 10 seedlings grew for 14 days under white light at different intensities.\n25% intensity: mean height 9.0 cm, mean of 4 leaves\n50% intensity: mean height 14.4 cm, mean of 6 leaves\n100% intensity: mean height 18.2 cm, mean of 8 leaves";

const FROG = "The number of frogs at a pond has fallen sharply over six years. Two scientists propose explanations.\n\n**Scientist 1**\nFertilizer washing in from nearby fields is responsible. Nitrate levels in the pond have tripled in six years. The added nutrients feed thick growths of algae; when the algae die and decay, oxygen in the water drops. Tadpoles breathe through gills and cannot survive in low-oxygen water. Dead tadpoles have been found mostly in the parts of the pond with the lowest oxygen.\n\n**Scientist 2**\nA predator is responsible. Bass, a fish that eats tadpoles and young frogs, were released into the pond six years ago, the year the decline began. Tadpoles have been found in the stomachs of bass caught there. Two nearby ponds have nitrate levels as high as this one but contain no bass, and their frog populations are stable.";

Study.addUnit("acts", {
  id: "sci", name: "The Three Passage Formats", short: "Passages",
  sections: [
    {id:"dr", name:"Data Representation"},
    {id:"rs", name:"Research Summaries"},
    {id:"cv", name:"Conflicting Viewpoints"}
  ],
  notes: {
    dr: [
      {sum:["Go to the questions first, then to the data. Most answers are read straight from a table or graph.", "Find the right row and column, check the units, and describe the trend: rising, falling or flat.", "To estimate a value between two data points, pick a number between them. To predict past the last point, continue the trend."]},
      {p:"ACT Science is a reading-the-data test more than a science test. You have about a minute per question, so don't study the passage first. Read the question, find the labels it mentions, and look them up."},
      {ex:{q:"KNO₃ dissolves 110 g at 60°C and 32 g at 20°C (per 100 g of water). A saturated solution at 60°C is cooled to 20°C. How much forms crystals?", a:["At 20°C the water can hold only 32 g.", "110 − 32 = 78 g comes out of solution."]}},
      {tip:"When two lines or columns cross, the crossing point is between the two rows where the order switches. KCl is ahead of KNO₃ at 20°C and behind at 40°C, so they are equal somewhere between."},
      {check:[{q:"NaCl: 36, 36, 37, 37, 38 from 0°C to 80°C. Describe the trend.", a:"Nearly constant: it barely rises."}]}
    ],
    rs: [
      {sum:["Identify what was changed on purpose (independent variable), what was measured (dependent variable), and what was kept the same (controls).", "Each experiment usually changes one thing. Match the question to the experiment that changed that thing.", "A fair test changes only one variable at a time, so any difference in results can be traced to it."]},
      {ex:{q:"Which pendulum experiment tests the idea that heavier pendulums swing more slowly?", a:["That idea is about mass.", "Experiment 2 is the one that varied mass and kept everything else the same.", "Its result: the period stayed 2.0 s, so the idea isn't supported."]}},
      {p:"Questions about method ask **why** something was done. Timing ten swings and dividing by ten shrinks the effect of a slow or fast stopwatch press. Using ten seedlings per group, not one, keeps one odd plant from skewing the result."},
      {p:"For predictions, find the pattern in the numbers. When pendulum length is multiplied by 4, the period doubles (25 cm → 1.0 s, 100 cm → 2.0 s), so 400 cm would give about 4.0 s."},
      {check:[{q:"In the seedling study, why give every group the same soil and water?", a:"So that light is the only difference between groups."}]}
    ],
    cv: [
      {sum:["Read each viewpoint and write its claim in a few words, plus the evidence it uses.", "Note what the viewpoints agree on. A question usually asks about it.", "For \"which finding would support or weaken\" questions, ask what each scientist's explanation predicts."]},
      {p:"This is the one passage type that is mostly reading. There is usually one per test. Keep the scientists straight: an answer can be a true statement of the wrong scientist's view."},
      {ex:{q:"A new study finds that the frog decline began two years before bass were released. Whose view does it weaken?", a:["Scientist 2 blames the bass.", "A cause can't arrive after its effect starts.", "It weakens Scientist 2."]}},
      {p:"A good experiment to settle a dispute separates the two proposed causes: keep the bass out of one part of the pond while the water stays the same, and see whether tadpoles survive there."},
      {check:[{q:"What do both scientists accept?", a:"That the frog population has declined, and that deaths of tadpoles are part of the reason."}]}
    ]
  },
  problems(k){
    const s = set(k);
    s("dr", SOL, "Passage I", [
      ["According to the table, which salt is most soluble at 40°C?", ["KNO₃", "KCl", "NaCl", "All three are equal"], ["At 40°C: KCl 40, KNO₃ 64, NaCl 37.", "64 is the largest."]],
      ["As temperature increases from 0°C to 80°C, the solubility of NaCl", ["stays nearly constant", "increases greatly", "decreases steadily", "rises, then falls"], ["36, 36, 37, 37, 38: it changes by only 2 g."]],
      ["Based on the table, KCl and KNO₃ have the same solubility at a temperature", ["between 20°C and 40°C", "between 0°C and 20°C", "between 40°C and 60°C", "between 60°C and 80°C"], ["At 20°C, KCl (34) is slightly ahead of KNO₃ (32).", "At 40°C, KNO₃ (64) is ahead of KCl (40). They cross in between."]],
      ["A saturated solution of KNO₃ in 100 g of water at 60°C is cooled to 20°C. About how much KNO₃ forms crystals?", ["78 g", "32 g", "110 g", "142 g"], ["At 60°C it holds 110 g; at 20°C only 32 g.", "110 − 32 = 78 g"]],
      ["If the trend in the table continues, the solubility of KCl at 100°C will be closest to", ["56 g", "46 g", "51 g", "75 g"], ["KCl rises about 5 or 6 g for every 20°C.", "51 + 5 ≈ 56 g"]],
      ["A student stirs 50 g of KCl into 100 g of water at 40°C. How much KCl remains undissolved?", ["10 g", "0 g", "40 g", "50 g"], ["At 40°C, 100 g of water dissolves 40 g of KCl.", "50 − 40 = 10 g"]]
    ]);
    s("dr", ENZ, "Passage II", [
      ["At which pH tested was Enzyme A most active?", ["pH 2", "pH 1", "pH 4", "pH 8"], ["Enzyme A reaches 100% at pH 2."]],
      ["At pH 6, which enzyme was more active?", ["Enzyme B, at 60%", "Enzyme A, at 60%", "Enzyme A, at 5%", "Neither was active"], ["At pH 6: A is 5%, B is 60%."]],
      ["As pH increases from 2 to 8, the activity of Enzyme A", ["decreases", "increases", "stays the same", "increases, then decreases"], ["100 → 40 → 5 → 0."]],
      ["At which pH tested did both enzymes show at least 10% activity?", ["pH 4", "pH 2", "pH 6", "pH 8"], ["At pH 4: A is 40% and B is 10%.", "At pH 6, A is only 5%."]],
      ["Based on the data, the activity of Enzyme B at pH 9 would most likely be", ["between 45% and 100%", "less than 10%", "exactly 100%", "greater than 100%"], ["pH 9 is between pH 8 (100%) and pH 10 (45%)."]],
      ["Which enzyme is more likely to work in the stomach, and why?", ["Enzyme A, because it is most active near pH 2", "Enzyme B, because it is most active near pH 2", "Enzyme A, because it is most active near pH 8", "Enzyme B, because it is most active near pH 8"], ["The stomach's pH is near 2.", "Enzyme A peaks there; Enzyme B shows no activity."]]
    ]);
    s("rs", PEN, "Passage III", [
      ["In Experiment 1, as the length of the pendulum increased, the period", ["increased", "decreased", "stayed the same", "increased, then decreased"], ["1.0 → 1.4 → 2.0 → 2.8 s."]],
      ["Which factor was varied in Experiment 2?", ["The mass", "The length", "The release angle", "The number of swings timed"], ["Length stayed 100 cm and the angle 10°; the mass was 50, 100 and 200 g."]],
      ["The results of Experiment 2 best support which conclusion?", ["Mass has no effect on the period", "A greater mass gives a longer period", "A greater mass gives a shorter period", "Mass and length have equal effects"], ["The period was 2.0 s at every mass."]],
      ["Based on Experiment 1, the period of a 400 cm pendulum would be closest to", ["4.0 s", "3.2 s", "5.6 s", "8.0 s"], ["From 25 to 100 cm (4 times the length), the period doubled: 1.0 → 2.0 s.", "From 100 to 400 cm it should double again: 4.0 s."]],
      ["A student wants a pendulum with a period of 1.0 s. Based on the experiments, the student should use", ["a length of 25 cm with any of the masses tested", "a length of 100 cm with a mass of 50 g", "a length of 25 cm, but only with a 100 g mass", "a length of 100 cm with a release angle of 5°"], ["Experiment 1: 25 cm gives 1.0 s.", "Experiment 2 shows that the mass doesn't matter."]],
      ["The students timed 10 swings and divided by 10, instead of timing one swing, most likely in order to", ["reduce the effect of errors in using the timer", "make the pendulum swing faster than it otherwise would", "change the release angle a little between the swings", "keep the mass of the pendulum constant in each trial"], ["A small timing error is spread over 10 swings, so it matters a tenth as much."]],
      ["Which experiment directly tests the hypothesis that a heavier pendulum swings more slowly?", ["Experiment 2", "Experiment 1", "Experiment 3", "None of the three"], ["The hypothesis is about mass.", "Only Experiment 2 varied the mass."]]
    ]);
    s("rs", BEAN, "Passage IV", [
      ["In Study 1, seedlings grew tallest under which color of light?", ["White", "Red", "Blue", "Green"], ["White: 18.2 cm, the greatest mean height."]],
      ["What was the independent variable (the factor changed on purpose) in Study 1?", ["The color of the light", "The height of the seedlings", "The intensity of the light", "The amount of water"], ["Each group got a different color; intensity was the same.", "Height was what the students measured."]],
      ["The students gave every group the same soil, water and temperature most likely so that", ["any difference in growth could be attributed to the light", "the seedlings in every group would grow to the same height", "the seedlings would need less light than they otherwise would", "the studies could be finished in fewer than fourteen days"], ["Controlling other factors leaves light as the only difference."]],
      ["According to Study 2, as light intensity increased, mean height", ["increased", "decreased", "stayed the same", "decreased, then increased"], ["9.0 → 14.4 → 18.2 cm."]],
      ["Do the results of Study 1 support the hypothesis that green light is the least effective color for growth?", ["Yes; the green group had the lowest mean height", "Yes; the green group had the greatest mean height", "No; the blue group had the lowest mean height", "No; all four groups reached about the same height"], ["Green: 6.3 cm, well below the others."]],
      ["Based on Study 2, seedlings grown at 75% intensity would most likely have a mean height closest to", ["16 cm", "9 cm", "12 cm", "20 cm"], ["75% is between 50% (14.4 cm) and 100% (18.2 cm)."]],
      ["Which change would most improve the reliability of the results?", ["Using more seedlings in each group", "Using a different soil for each group", "Measuring the height after only one day", "Watering only the tallest seedlings"], ["More plants per group means one unusual plant affects the mean less."]]
    ]);
    s("cv", FROG, "Passage V", [
      ["Both scientists would most likely agree that", ["the number of frogs at the pond has fallen", "fertilizer is the main cause of the decline", "bass should be removed from the pond", "nitrate levels in the pond have not changed"], ["Both are explaining the same decline.", "They disagree only about the cause."]],
      ["Scientist 1 would most likely predict that reducing fertilizer use on nearby fields would", ["lead to a recovery in the frog population", "cause the bass to leave the pond", "have no effect on the algae in the pond", "lower the oxygen level in the water"], ["Scientist 1: fertilizer → algae → low oxygen → dead tadpoles.", "Remove the cause and the frogs should recover."]],
      ["Which of Scientist 2's observations most directly challenges Scientist 1's explanation?", ["High-nitrate ponds without bass have stable frog numbers", "Bass were released into the pond six years ago", "Bass are fish that eat tadpoles and young frogs", "Tadpoles were found in the stomachs of bass caught at the pond"], ["If nitrate were the cause, those ponds should be losing frogs too."]],
      ["Which finding would most strengthen Scientist 2's explanation?", ["Tadpole numbers rise in a part of the pond fenced off from bass", "Algae cover is greatest in the shallow parts of the pond", "Oxygen levels are lowest in the pond during summer", "Nitrate levels in the pond continue to increase"], ["If keeping bass out lets tadpoles survive in the same water, the bass are the cause."]],
      ["Suppose records show that the frog decline began two years before bass were released. This finding would", ["weaken Scientist 2's explanation", "weaken Scientist 1's explanation", "strengthen both explanations", "have no bearing on either explanation"], ["Scientist 2 says the bass caused the decline.", "A cause can't come after its effect begins."]],
      ["According to Scientist 1, the algae harm tadpoles because", ["decaying algae lower the oxygen in the water", "tadpoles are poisoned when they eat the algae", "algae block the bass from finding other food", "algae raise the nitrate level of the pond"], ["\"When the algae die and decay, oxygen in the water drops.\""]]
    ]);
  }
});
})();
