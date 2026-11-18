/* ACT Science · more passages (written for this site; the data sets are made up for practice).
   Two Research Summaries, one Data Representation and one Conflicting Viewpoints passage,
   so a Timed Test can draw a full 40 questions. */
(() => {
const SRC = "ACT style";
const set = k => (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], SRC, t, o, o[0], [].concat(w), {shuffle:true, stim, cite}));

const LAKE = "Researchers measured water temperature and dissolved oxygen (DO) at different depths in a lake in July and again in January, when the surface was frozen.\n\n**July**\n0 m: 24°C, DO 8.4 mg/L\n5 m: 22°C, DO 8.0 mg/L\n10 m: 12°C, DO 5.1 mg/L\n15 m: 7°C, DO 2.2 mg/L\n20 m: 6°C, DO 1.0 mg/L\n\n**January**\n0 m: 1°C, DO 12.0 mg/L\n5 m: 3°C, DO 11.2 mg/L\n10 m: 4°C, DO 10.4 mg/L\n15 m: 4°C, DO 9.8 mg/L\n20 m: 4°C, DO 9.1 mg/L\n\nMost fish in the lake need at least 4 mg/L of dissolved oxygen.";

const RATE = "Students added 2.0 g of calcium carbonate chips to 50 mL of hydrochloric acid and measured the volume of carbon dioxide gas produced in the first 60 seconds.\n\n**Experiment 1** (acid 1.0 M, large chips; temperature varied)\n10°C: 18 mL\n20°C: 35 mL\n30°C: 71 mL\n40°C: 140 mL\n\n**Experiment 2** (20°C, large chips; acid concentration varied)\n0.5 M: 17 mL\n1.0 M: 35 mL\n2.0 M: 69 mL\n\n**Experiment 3** (acid 1.0 M, 20°C; chip size varied, same total mass)\nLarge chips: 35 mL\nSmall chips: 58 mL\nPowder: 96 mL";

const CUPS = "Students poured 200 mL of water at 80°C into four identical cups. One cup was left unwrapped, and the other three were each wrapped in a 1 cm layer of a different material. The temperature was recorded every 10 minutes. Room temperature was 22°C.\n\n**Water temperature (°C)**\n0 min: all cups 80\n10 min: Unwrapped 66, Foil 67, Wool 74, Foam 76\n20 min: Unwrapped 56, Foil 58, Wool 69, Foam 72\n30 min: Unwrapped 48, Foil 50, Wool 64, Foam 69";

const MOON = "Scientists have proposed different explanations for how Earth's Moon formed.\n\n**Hypothesis 1: Giant impact**\nAbout 4.5 billion years ago, a Mars-sized body struck the young Earth. Debris from the outer, rocky layers of both bodies was thrown into orbit and gathered to form the Moon. This explains why the Moon has only a small iron core: most of the iron had already sunk to the centers of the two bodies. The heat of the impact would also have driven off water and other substances that evaporate easily.\n\n**Hypothesis 2: Capture**\nThe Moon formed somewhere else in the solar system and was later captured by Earth's gravity as it passed nearby. This explains why the Moon's average density (3.3 g/cm³) is much lower than Earth's (5.5 g/cm³).\n\n**Hypothesis 3: Formed together**\nEarth and the Moon formed side by side, at the same time, from the same cloud of dust and gas. This explains why Moon rocks and Earth rocks have nearly identical oxygen isotope ratios.";

Study.extendUnit("acts", "sci", {problems(k){
  const s = set(k);
  s("dr", LAKE, "Passage VI", [
    ["In July, as depth increased from 0 m to 20 m, the water temperature", ["decreased", "increased", "stayed the same", "increased, then decreased"], ["24 → 22 → 12 → 7 → 6°C."]],
    ["In July, the largest change in temperature occurred between which two depths?", ["5 m and 10 m", "0 m and 5 m", "10 m and 15 m", "15 m and 20 m"], ["22 → 12°C is a drop of 10°C, the largest of the four steps."]],
    ["In July, at which depths was there enough dissolved oxygen for most fish?", ["0 m to 10 m only", "0 m to 20 m", "10 m to 20 m only", "15 m and 20 m only"], ["Fish need at least 4 mg/L.", "July DO: 8.4, 8.0 and 5.1 at 0, 5 and 10 m; 2.2 and 1.0 below that."]],
    ["At 20 m, the dissolved oxygen in January was greater than in July by about", ["8 mg/L", "1 mg/L", "4 mg/L", "12 mg/L"], ["9.1 − 1.0 = 8.1 mg/L"]],
    ["In January, as depth increased from 0 m to 20 m, the dissolved oxygen", ["decreased", "increased", "stayed the same", "increased, then decreased"], ["12.0 → 11.2 → 10.4 → 9.8 → 9.1 mg/L."]],
    ["If the temperature had been measured at 12 m in July, it would most likely have been", ["between 7°C and 12°C", "between 12°C and 22°C", "below 6°C", "above 22°C"], ["12 m is between 10 m (12°C) and 15 m (7°C)."]]
  ]);
  s("rs", RATE, "Passage VII", [
    ["In Experiment 1, each 10°C increase in temperature caused the volume of gas to about", ["double", "halve", "triple", "stay the same"], ["18 → 35 → 71 → 140 mL: each is about twice the one before."]],
    ["Which factor was varied in Experiment 1 but held constant in Experiment 2?", ["Temperature", "Acid concentration", "Chip size", "Mass of the chips"], ["Experiment 1 changed temperature; Experiment 2 kept it at 20°C."]],
    ["Based on Experiment 2, 1.5 M acid at 20°C would most likely produce a volume closest to", ["52 mL", "35 mL", "69 mL", "104 mL"], ["1.5 M is halfway between 1.0 M (35 mL) and 2.0 M (69 mL).", "(35 + 69) ÷ 2 = 52"]],
    ["Which trial in Experiment 1 produced about the same volume of gas as the 2.0 M trial in Experiment 2?", ["30°C", "10°C", "20°C", "40°C"], ["2.0 M gave 69 mL; 30°C gave 71 mL."]],
    ["The results of Experiment 3 best support which conclusion?", ["Smaller pieces produced gas faster", "Larger pieces produced gas faster", "Chip size had no effect on the rate", "Powder produced less gas than large chips"], ["Large 35, small 58, powder 96 mL: the smaller the pieces, the more gas."]],
    ["Why did the students use the same total mass of calcium carbonate in every trial of Experiment 3?", ["So that chip size was the only factor that differed", "So that the acid would react more slowly", "So that more gas would be produced in each trial", "So that the temperature would stay at 20°C"], ["Keeping the mass the same makes chip size the only difference between trials."]],
    ["A student predicts that 1.0 M acid at 50°C with large chips would produce about 280 mL of gas in 60 s. Is this prediction consistent with Experiment 1?", ["Yes; the volume about doubles with each 10°C increase", "No; the volume decreases as temperature increases", "Yes; the volume rises by exactly 35 mL per 10°C", "No; the volume stays near 140 mL above 40°C"], ["40°C gave 140 mL.", "Doubling again for 50°C gives about 280 mL."]]
  ]);
  s("rs", CUPS, "Passage VIII", [
    ["Which cup's water was warmest after 30 minutes?", ["Foam", "Wool", "Foil", "Unwrapped"], ["At 30 min: foam 69, wool 64, foil 50, unwrapped 48."]],
    ["The unwrapped cup was most likely included in order to", ["give a baseline to compare the wrapped cups against", "measure the temperature of the room", "test a fourth wrapping material", "keep the water from spilling"], ["It shows how fast the water cools with no wrapping at all."]],
    ["During the first 10 minutes, the water in the unwrapped cup cooled by", ["14°C", "10°C", "4°C", "24°C"], ["80 − 66 = 14°C"]],
    ["For the unwrapped cup, how did the temperature drop in each 10-minute interval change over time?", ["It got smaller", "It got larger", "It stayed the same", "It went up and down"], ["Drops: 14, then 10, then 8°C."]],
    ["If the measurements continued for many hours, the water in every cup would most likely end up closest to", ["22°C", "0°C", "48°C", "80°C"], ["Hot water cools until it matches its surroundings: room temperature, 22°C."]],
    ["Which new experiment would best test whether the thickness of foam affects how fast the water cools?", ["Use foam of different thicknesses on otherwise identical cups", "Wrap each cup in a different material of the same thickness", "Use water at a different starting temperature in each cup", "Measure the temperature every 5 minutes instead of 10"], ["Change only the thickness and keep everything else the same."]]
  ]);
  s("cv", MOON, "Passage IX", [
    ["Which hypothesis states that the Moon formed far from Earth?", ["Hypothesis 2", "Hypothesis 1", "Hypothesis 3", "None of them"], ["Capture: the Moon formed elsewhere and was pulled in later."]],
    ["Hypotheses 1 and 3 both propose that", ["the Moon formed from material near Earth", "the Moon formed far from Earth and was captured", "the Moon contains no iron at all", "a Mars-sized body struck the Moon"], ["H1: debris from Earth and the impactor. H3: the same cloud as Earth."]],
    ["Moon rocks collected by astronauts contain almost no water. This finding is most directly explained by which hypothesis?", ["Hypothesis 1", "Hypothesis 2", "Hypothesis 3", "All three equally"], ["Only Hypothesis 1 says the heat of an impact drove off water."]],
    ["The finding that Earth and Moon rocks have nearly identical oxygen isotope ratios would most likely weaken which hypothesis?", ["Hypothesis 2", "Hypothesis 1", "Hypothesis 3", "None of them"], ["If the Moon formed somewhere else, its rocks would likely differ from Earth's."]],
    ["According to Hypothesis 1, the Moon's iron core is small because", ["iron had already sunk into the centers of both bodies", "the heat of the impact turned the Moon's iron into rock", "the Moon was captured by Earth before it could gain iron", "Earth's gravity slowly pulled the iron out of the Moon"], ["The debris came from the outer, rocky layers, after the iron had sunk inward."]],
    ["Which evidence does Hypothesis 2 use for support?", ["The Moon's density is lower than Earth's", "The Moon's rocks are very dry", "The Moon's oxygen isotopes match Earth's", "The Moon formed 4.5 billion years ago"], ["Hypothesis 2 cites densities of 3.3 versus 5.5 g/cm³."]]
  ]);
}});
})();
