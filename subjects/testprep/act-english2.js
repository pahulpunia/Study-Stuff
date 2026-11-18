/* ACT English · more Knowledge of Language questions (concision, word choice, tone).
   Written for this site in the style of the test; none are copied from a real exam. */
(() => {
const SRC = "ACT style";
const NC = "NO CHANGE";
const BEST = "Which choice is the best version of the underlined part?";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});

Study.extendUnit("acte", "kla", {problems(k){
  const q = make(k);
  q("k", "The scientists __carefully and meticulously__ recorded every measurement.", BEST, ["carefully", NC, "carefully, with meticulous care,", "meticulously and with care"], ["\"Meticulously\" means very carefully.", "Using both repeats the idea."]);
  q("k", "__At this point in time__, the museum is closed for repairs.", BEST, ["Currently", NC, "At this current point in time", "In the present moment of time"], ["One word says the same thing."]);
  q("k", "From a museum guide: The vase in this case is __super old and pretty cool to look at__.", BEST, ["more than three thousand years old", NC, "really, really old", "old as dirt"], ["A museum guide calls for a formal, specific phrase.", "The other choices are casual or vague."]);
  q("k", "The new bridge will __connect together__ the two halves of the city.", BEST, ["connect", NC, "connect and join together", "together connect"], ["\"Connect\" already means join together."]);
  q("k", "The two countries signed a treaty that was __mutually beneficial to both of them__.", BEST, ["mutually beneficial", NC, "beneficial to both mutually", "mutually beneficial for each and both"], ["\"Mutually\" already means for both sides."]);
  q("k", "The detective __inferred__ from the muddy boots that the visitor had crossed the field.", BEST, [NC, "implied", "insinuated", "hinted"], ["The detective drew a conclusion from evidence: that is inferring.", "Implying is what a speaker does, not a listener."]);
  q("k", "From a formal research summary: The results of the survey __blew everyone's minds__.", BEST, ["surprised the researchers", NC, "were totally wild", "freaked people out"], ["A research summary needs formal, precise wording."]);
  q("k", "Every year, the festival __annually draws__ thousands of visitors.", BEST, ["draws", NC, "annually and yearly draws", "draws, annually,"], ["\"Every year\" already says annually."]);
  q("k", "The volunteers __collaborated together__ on the mural.", BEST, ["collaborated", NC, "collaborated jointly together", "together collaborated jointly"], ["To collaborate is to work together."]);
  q("k", "She was __capable to finish__ the project a week early.", BEST, ["capable of finishing", NC, "capable for finishing", "capable at finishing"], ["The standard phrase is \"capable of\" plus an -ing verb."]);
  q("k", "The quiet library was a __tranquil__ place to study.", BEST, [NC, "turbulent", "boisterous", "frantic"], ["A quiet library is calm.", "\"Tranquil\" means calm; the others mean noisy or wild."]);
}});
})();
