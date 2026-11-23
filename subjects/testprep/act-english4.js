/* ACT English · more questions across all three areas, written for this site in the style of the test. */
(() => {
const SRC = "ACT style", NC = "NO CHANGE", BEST = "Which choice is the best version of the underlined part?";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});
Study.extendUnit("acte", "cse", {problems(k){
  const q = make(k);
  q("p", "The festival features three __stages, a food court, and__ a night market.", BEST, [NC, "stages a food court, and", "stages, a food court and,", "stages; a food court; and,"], ["Commas separate the list items; no comma after \"and.\""]);
  q("p", "My grandmother who __lives in Fresno__ visits every summer.", BEST, [", who lives in Fresno,", NC, "who lives in Fresno,", ", who lives in Fresno"], ["\"Who lives in Fresno\" is extra information about the grandmother.", "Extra information needs a comma on both sides."]);
  q("p", "The __team's__ new uniforms arrived just before the season opener.", BEST, [NC, "teams", "teams'", "team"], ["One team owns the uniforms: team's."]);
  q("p", "The experiment failed for one simple __reason, the__ samples were contaminated.", BEST, ["reason: the", NC, "reason the", "reason, and the"], ["A complete sentence comes first, then the explanation. A colon introduces it."]);
  q("g", "Neither of the candidates __have__ answered the question directly.", BEST, ["has", NC, "are having", "were"], ["\"Neither\" is singular: has."]);
  q("g", "The coach gave the awards to Priya and __I__.", BEST, ["me", NC, "myself", "mine"], ["\"To\" takes the object form: to Priya and me."]);
  q("g", "If I __would have known__ about the test, I would have studied.", BEST, ["had known", NC, "would know", "have known"], ["After \"if\" for a past situation, use had known."]);
  q("s", "__Having finished the race, the medal was placed around her neck.__", "Which choice is the best version of the underlined sentence?", ["Having finished the race, she had the medal placed around her neck.", NC, "Having finished the race, her neck had the medal placed on it.", "The medal, having finished the race, was placed around her neck."], ["The opening phrase must describe the person who finished: she."]);
  q("s", "The new library is larger, brighter, and __it has more computers__ than the old one.", BEST, ["has more computers", NC, "having more computers", "more computers it has"], ["Keep the list parallel: is larger, brighter, and has more computers."]);
}});
Study.extendUnit("acte", "pow", {problems(k){
  const q = make(k);
  q("d", "Sea turtles return to the beaches where they hatched to lay their own eggs. ______ Scientists believe they navigate using Earth's magnetic field.", "Which sentence, placed in the blank, best connects the two sentences?", ["Some travel thousands of miles to get there.", "Sea turtles are popular in aquariums.", "Turtle shells are made of bone.", "Many beaches have strict parking rules."], ["The next sentence explains how they find the way, so the bridge should be about the journey."]);
  q("o", "Lena practiced the violin every day for a year. __Nevertheless,__ she won first place at the regional competition.", BEST, ["As a result,", NC, "In contrast,", "For instance,"], ["The practice led to the win: cause and effect."]);
  q("d", "The essay explains how bees make honey. The writer is considering adding: \"My cousin is allergic to bee stings.\"", "Should the writer add this sentence?", ["No, because it doesn't relate to how bees make honey", "Yes, because it adds a personal connection to bees", "Yes, because it explains why bees sting", "No, because it repeats information from earlier"], ["The essay's focus is honey production; the allergy is off topic."]);
}});
Study.extendUnit("acte", "kla", {problems(k){
  const q = make(k);
  q("k", "The two friends __reunited again__ after ten years apart.", BEST, ["reunited", NC, "reunited back again", "again reunited together"], ["\"Reunited\" already means came together again."]);
  q("k", "From a formal report: The new policy will __mess with__ how students sign up for classes.", BEST, ["change", NC, "screw up", "totally flip"], ["A formal report needs neutral, precise wording."]);
}});
})();
