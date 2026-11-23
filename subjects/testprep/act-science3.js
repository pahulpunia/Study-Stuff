/* ACT Science · two more passages written for this site (a research summary and a conflicting viewpoints
   passage). The pendulum times follow T = 2π√(L/g). */
(() => {
const SRC = "ACT style";
const set = k => (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], SRC, t, o, o[0], [].concat(w), {shuffle:true, stim, cite}));
const PEND = "Students timed 10 complete swings of a pendulum.\n\n**Experiment 1** (mass 100 g, released at 10°; length varied)\n25 cm: 10.0 s\n50 cm: 14.2 s\n100 cm: 20.1 s\n200 cm: 28.4 s\n\n**Experiment 2** (length 100 cm, released at 10°; mass varied)\n50 g: 20.1 s\n100 g: 20.1 s\n200 g: 20.0 s\n\n**Experiment 3** (length 100 cm, mass 100 g; release angle varied)\n5°: 20.0 s\n10°: 20.1 s\n20°: 20.2 s";
const SPOON = "A metal spoon and a wooden spoon have been sitting on the same table in a room at 22°C for several hours. When a person touches them, the metal spoon feels much colder.\n\n**Student 1**\nThe metal spoon really is colder than the wooden spoon. Metal is a cold material and stays below the temperature of the room, which is why it feels cold whenever we touch it.\n\n**Student 2**\nBoth spoons are at the same temperature as the room. The metal spoon feels colder because metal conducts heat much faster than wood. It carries heat away from the hand quickly, so the skin cools faster, and the nerves in the skin sense that loss of heat as cold.";
Study.extendUnit("acts", "sci", {problems(k){
  const s = set(k);
  s("rs", PEND, "Passage XI", [
    ["In Experiment 1, when the length was multiplied by 4 (from 25 cm to 100 cm), the time for 10 swings", ["about doubled", "about quadrupled", "was cut in half", "stayed the same"], ["10.0 s → 20.1 s."]],
    ["Based on Experiments 2 and 3, which statement is supported?", ["Mass and angle barely affected the time", "Mass had a large effect on the time", "Angle had a larger effect than length did", "Heavier pendulums swung much faster"], ["Times stayed between 20.0 and 20.2 s as mass and angle changed."]],
    ["About how long did ONE swing of the 50 cm pendulum take?", ["1.42 s", "14.2 s", "0.71 s", "2.84 s"], ["14.2 s for 10 swings ÷ 10 = 1.42 s."]],
    ["If a 150 cm pendulum were tested as in Experiment 1, the time for 10 swings would most likely be", ["about 24.6 s", "about 17.1 s", "about 30.2 s", "about 15.0 s"], ["150 cm is between 100 cm (20.1 s) and 200 cm (28.4 s)."]],
    ["Which factor was the same in all three experiments?", ["The number of swings timed", "The length of the pendulum", "The mass of the pendulum", "The release angle"], ["Each experiment varied one of length, mass or angle, but all timed 10 swings."]],
    ["Why did the students most likely time 10 swings instead of 1?", ["To reduce reaction-time error", "To make the pendulum swing faster", "To change the pendulum's length", "To increase the pendulum's mass"], ["A small timing error is spread over 10 swings."]]
  ]);
  s("cv", SPOON, "Passage XII", [
    ["Student 2 would predict that a thermometer touching each spoon would read", ["the same temperature for both", "a lower temperature for the metal spoon", "a higher temperature for the metal spoon", "no temperature for the wooden spoon"], ["Student 2 says both are at room temperature, 22°C."]],
    ["Which finding would best support Student 1?", ["The metal reads colder on a thermometer", "A thermometer reads both spoons at 22°C", "Metal conducts heat faster than wood does", "The wooden spoon feels slightly warm to touch"], ["Student 1's claim is that the metal is actually colder."]],
    ["Both students agree that", ["the metal spoon feels colder to the touch", "the metal spoon is below room temperature", "wood conducts heat faster than metal", "the spoons sat in different rooms"], ["Neither disputes the feeling; they disagree about why."]],
    ["According to Student 2, why does the metal spoon feel cold?", ["It carries heat away from the hand quickly", "It is colder than the air around it", "It contains no heat at all", "It reflects body heat back into the air"], ["Fast conduction cools the skin faster."]],
    ["Both spoons sit in an oven at 60°C for an hour. Student 2 would predict that the metal spoon would feel", ["hotter than the wooden spoon", "colder than the wooden spoon", "the same as the wooden spoon", "colder than room temperature"], ["Now metal would carry heat INTO the hand faster."]],
    ["A thermometer shows both spoons at 22°C. This result", ["supports Student 2 and weakens Student 1", "supports Student 1 and weakens Student 2", "supports both students equally", "is unrelated to either explanation"], ["Equal temperatures match Student 2 and contradict Student 1's claim."]]
  ]);
}});
})();
