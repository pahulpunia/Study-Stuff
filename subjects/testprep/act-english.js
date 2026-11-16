/* ACT English
   Laid out by ACT's three reporting categories: Conventions of Standard English, Production of Writing,
   and Knowledge of Language. The real section is 50 questions in 35 minutes, with four choices each.
   On the test the questions follow five essays; here each question has its own short excerpt.
   Everything was written for this site in the style of the test; none of it is copied from a real exam. */
(() => {
const SRC = "ACT style";
const NC = "NO CHANGE";
const BEST = "Which choice is the best version of the underlined part?";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});

/* ================= CONVENTIONS OF STANDARD ENGLISH ================= */
Study.addUnit("acte", {
  id: "cse", name: "Conventions of Standard English (about half)", short: "Conventions",
  sections: [
    {id:"p", name:"Punctuation"},
    {id:"g", name:"Grammar & Usage"},
    {id:"s", name:"Sentence Structure"}
  ],
  notes: {
    p: [
      {sum:["A comma can't join two complete sentences on its own. Use a period, a semicolon, or a comma plus and/but/so.", "Extra information gets a pair of commas or a pair of dashes. Information that says \"which one\" gets none.", "Apostrophes show ownership: one dog's leash, two dogs' leashes. A colon follows a complete sentence and introduces a list or explanation."]},
      {p:"ACT English moves fast: about 42 seconds per question. Punctuation questions are the quickest to answer if you check one thing first: is each side of the punctuation mark a complete sentence?"},
      {ex:{q:"We arrived early, however, the doors were still locked.", a:["\"We arrived early\" and \"the doors were still locked\" are both complete.", "\"However\" isn't a joining word like \"and.\"", "Fix: We arrived early; however, the doors were still locked."]}},
      {tip:"\"NO CHANGE\" is right about as often as any other choice. If the sentence is fine, don't talk yourself out of it."},
      {check:[{q:"After the long hike we soaked our feet. Where does a comma go?", a:"After \"hike\": an introductory phrase is set off by a comma."}, {q:"\"Portland, Oregon is known for its bridges.\" What's missing?", a:"A comma after Oregon. The state is set off on both sides."}]}
    ],
    g: [
      {sum:["The verb agrees with its subject, not the nearest noun. \"Neither\" and \"each\" are singular.", "Test pronouns by removing the other person: \"gave the trophy to I\" is wrong, so it's \"to Marcus and me.\"", "Compare two things with -er or more; three or more with -est or most. Adverbs (usually -ly) describe verbs."]},
      {p:"When the sentence starts with \"There is\" or \"There are,\" the subject comes after the verb: there **are** several reasons."},
      {ex:{q:"By the time the bus arrived, we have waited for an hour.", a:["The bus arrived in the past, and the waiting came before that.", "An earlier past action takes \"had\": we had waited."]}},
      {p:"**Who** does the action; **whom** receives it. If you could answer with \"him\" or \"them,\" use whom: the teacher praised them → the students whom the teacher praised."},
      {warn:"\"Should of\" is never correct. It's \"should have.\""},
      {check:[{q:"The team celebrated (its / their) victory.", a:"Its. A team is one unit."}, {q:"She sings more (beautiful / beautifully) than anyone.", a:"Beautifully: it describes how she sings."}]}
    ],
    s: [
      {sum:["An opening describing phrase must be followed by the thing it describes.", "Items in a list should have the same form: weeding, watering, and fertilizing.", "A sentence needs a subject and a main verb and must be able to stand alone. \"Because the roads were icy.\" can't."]},
      {ex:{q:"Running down the hall, the bell rang before Lena reached class.", a:["Who was running? Lena, not the bell.", "Lena must come right after the comma.", "Running down the hall, Lena heard the bell ring before she reached class."]}},
      {p:"Watch for extra pronouns that repeat a word already doing the job: \"tomatoes that he grows **them**\" should be \"tomatoes that he grows.\""},
      {check:[{q:"She likes hiking more than (to swim / swimming).", a:"Swimming, to match \"hiking.\""}, {q:"The storm passed quickly, the sun came out. Fix it.", a:"Add \"and\" after the comma, or use a semicolon."}]}
    ]
  },
  problems(k){
    const q = make(k);
    /* ---- punctuation ---- */
    q("p", "My grandmother__, who__ learned to drive at sixty, now delivers meals across the county.", BEST, [NC, "who", "; who", ": who"], ["\"Who learned to drive at sixty\" is extra information.", "It needs a comma on both sides, and it already has them."]);
    q("p", "The recipe calls for three __ingredients, flour,__ butter and sugar.", BEST, ["ingredients: flour,", NC, "ingredients; flour,", "ingredients flour,"], ["\"The recipe calls for three ingredients\" is a complete sentence.", "A colon introduces the list that follows."]);
    q("p", "The __dogs leash__ was tangled around the fence post.", BEST, ["dog's leash", NC, "dogs' leash's", "dogs leash's"], ["The leash belongs to the dog.", "Ownership by one dog: dog's."]);
    q("p", "We arrived __early, however,__ the doors were still locked.", BEST, ["early; however,", NC, "early however", "early, however"], ["Two complete sentences are joined here.", "Use a semicolon before \"however\" and a comma after it."]);
    q("p", "The scientist __who discovered the fossil__ named it after her daughter.", BEST, [NC, ", who discovered the fossil,", "who, discovered the fossil", "who discovered the fossil,"], ["The phrase tells which scientist, so it's essential.", "Essential information takes no commas."]);
    q("p", "After the long __hike we__ soaked our feet in the creek.", BEST, ["hike, we", NC, "hike; we", "hike. We"], ["\"After the long hike\" is an introductory phrase, not a sentence.", "Set it off with a comma."]);
    q("p", "Portland, __Oregon is__ known for its bridges.", BEST, ["Oregon, is", NC, "Oregon; is", "Oregon: is"], ["A state name after a city is set off by commas on both sides."]);
    q("p", "She packed __a tent, a stove, and, a lantern__ for the trip.", BEST, ["a tent, a stove, and a lantern", NC, "a tent a stove and a lantern", "a tent, a stove; and a lantern"], ["Commas separate the items in a list.", "No comma goes after \"and.\""]);
    q("p", "The museum's newest __exhibit—a full-size whale skeleton, hangs__ from the ceiling.", BEST, ["exhibit—a full-size whale skeleton—hangs", NC, "exhibit, a full-size whale skeleton—hangs", "exhibit a full-size whale skeleton, hangs"], ["The extra information opens with a dash.", "It must close with a dash too. Don't mix a dash with a comma."]);

    /* ---- grammar and usage ---- */
    q("g", "Neither of the proposals __were__ approved by the board.", BEST, ["was", NC, "are", "have been"], ["The subject is \"neither,\" which is singular.", "Neither … was."]);
    q("g", "The coach gave the trophy to Marcus and __I__.", BEST, ["me", NC, "myself", "mine"], ["Remove \"Marcus and\": the coach gave the trophy to me.", "After \"to,\" use the object form."]);
    q("g", "Of the two routes, the coastal road is the __most scenic__.", BEST, ["more scenic", NC, "scenicest", "most scenicer"], ["Only two things are compared.", "Use \"more,\" not \"most.\""]);
    q("g", "The team celebrated __their__ victory with a parade.", BEST, ["its", NC, "it's", "they're"], ["\"Team\" is a single unit, so the pronoun is singular.", "\"Its\" is possessive; \"it's\" means \"it is.\""]);
    q("g", "She sings more __beautiful__ than anyone else in the choir.", BEST, ["beautifully", NC, "beautifuller", "beauty"], ["The word describes how she sings, so it must be an adverb."]);
    q("g", "By the time the bus arrived, we __have waited__ for an hour.", BEST, ["had waited", NC, "wait", "will have waited"], ["The waiting happened before another past event (the bus arriving).", "That takes \"had waited.\""]);
    q("g", "The students __who__ the teacher praised worked late.", BEST, ["whom", NC, "which", "whose"], ["The teacher praised them.", "\"Them\" → whom."]);
    q("g", "There __is__ several reasons to arrive early.", BEST, ["are", NC, "was", "has been"], ["The subject, \"reasons,\" comes after the verb and is plural.", "There are."]);
    q("g", "The effects of the new law __remain__ unclear.", BEST, [NC, "remains", "is remaining", "has remained"], ["The subject is \"effects,\" which is plural.", "\"Remain\" already agrees. \"Of the new law\" is just a phrase in between."]);
    q("g", "I should __of__ called before visiting.", BEST, ["have", NC, "had", "has"], ["\"Should of\" is a mishearing of \"should've.\"", "The correct form is \"should have.\""]);

    /* ---- sentence structure ---- */
    q("s", "__Running down the hall, the bell rang before Lena reached class.__", "Which choice is the best version of the underlined sentence?",
      ["Running down the hall, Lena heard the bell ring before she reached class.", NC, "The bell, running down the hall, rang before Lena reached her class.", "Running down the hall, class began before Lena had reached the bell."], ["Lena is the one running.", "She must come right after the opening phrase."]);
    q("s", "The garden needs __weeding, watering, and to be fertilized__.", BEST, ["weeding, watering, and fertilizing", NC, "to weed, watering, and fertilizing", "weeding, to water, and fertilized"], ["Items in a list should match in form.", "Three -ing words."]);
    q("s", "Because the roads were __icy. School__ was canceled.", BEST, ["icy, school", NC, "icy; school", "icy. And school"], ["\"Because the roads were icy\" can't stand alone.", "Attach it to the main sentence with a comma."]);
    q("s", "The storm passed __quickly, the sun__ came out within minutes.", BEST, ["quickly, and the sun", NC, "quickly the sun", "quickly, the sun then"], ["Two complete sentences can't be joined by a comma alone.", "Add \"and.\""]);
    q("s", "She likes hiking more than __to swim__.", BEST, ["swimming", NC, "she swims", "to have swum"], ["Compare like with like: hiking and swimming."]);
    q("s", "The author's first novel, __which it won__ several awards, was written in six weeks.", BEST, ["which won", NC, "it won", "and which it won"], ["\"Which\" already stands for the novel.", "Adding \"it\" repeats the subject."]);
    q("s", "The chef only uses tomatoes __that he grows them__ himself.", BEST, ["that he grows", NC, "that grows them", "he grows those"], ["\"That\" already stands for the tomatoes.", "\"Them\" is an extra pronoun."]);
    q("s", "Maya wanted to join the debate team, __but she__ had practice on the same night.", BEST, [NC, "she", "but, she", "however she"], ["Two complete sentences joined by a comma plus \"but\" is correct.", "Dropping \"but\" makes a comma splice."]);
  }
});

/* ================= PRODUCTION OF WRITING ================= */
Study.addUnit("acte", {
  id: "pow", name: "Production of Writing (about a third)", short: "Writing",
  sections: [
    {id:"d", name:"Topic Development"},
    {id:"o", name:"Organization & Transitions"}
  ],
  notes: {
    d: [
      {sum:["Add a sentence only if it supports the paragraph's focus. Delete one that wanders off, even if it's interesting.", "For yes/no questions, decide yes or no first, then pick the choice with the correct reason.", "When the question states a goal (\"most specific,\" \"best introduces\"), judge the choices by that goal only."]},
      {p:"These questions ask about **what** the writing says, not its grammar. Every choice is usually grammatical. The question itself tells you what to look for, so read it carefully."},
      {ex:{q:"A paragraph about a library's opening in 1902. Should the writer add \"Hardware stores of that era also sold seeds and animal feed\"?", a:["The paragraph is about the library.", "The new sentence is about hardware stores.", "No: it distracts from the focus."]}},
      {p:"\"Would this essay accomplish the goal?\" questions hinge on the difference between a topic and a purpose. An essay about the benefits of composting does not explain how to start a compost pile."},
      {check:[{q:"Which is more specific: \"They do surprising things\" or \"One squeezed through a pipe barely wider than a coin\"?", a:"The second. Specific means concrete details."}]}
    ],
    o: [
      {sum:["Pick transitions by the relationship: cause (so, therefore), contrast (however, by contrast), example (for instance), addition (also).", "To order sentences, look for clues: first/then, and words like \"the lamp\" that need an earlier mention.", "A good opening or linking sentence connects what came before to what comes next."]},
      {ex:{q:"Solar panels are expensive to install. ______ they can lower electric bills for decades.", a:["Expensive now, savings later: the ideas pull in opposite directions.", "Use a contrast word: However,"]}},
      {p:"For \"where should this sentence go\" questions, find the noun or pronoun the sentence depends on. A sentence about \"the lamp\" belongs right after the lamp is first mentioned."},
      {check:[{q:"He practiced daily for a month. ______ he played it without a mistake.", a:"As a result, (the practice caused the clean performance)."}]}
    ]
  },
  problems(k){
    const q = make(k);
    /* ---- topic development ---- */
    q("d", "The town's first library opened in 1902 in a single room above a hardware store. It held four hundred books, most of them donated, and was open two evenings a week.",
      "The writer is considering adding this sentence: “Hardware stores of that era also sold seeds and animal feed.” Should the writer add it?",
      ["No, because it distracts from the paragraph's focus on the library", "Yes, because it explains why the library opened above a store", "Yes, because it gives readers helpful historical background", "No, because it contradicts a detail given earlier in the paragraph"], ["The paragraph is about the library.", "What hardware stores sold is off the topic."]);
    q("d", "Monarch butterflies are easy to recognize. ______",
      "Which choice supports the first sentence with the most specific description?",
      ["Their orange wings are laced with black veins and edged with white dots.", "They are among the many insects that people can easily learn to identify.", "Many people say that they have seen these butterflies in their own gardens.", "Butterflies of several kinds can be found across most of North America."], ["\"Specific description\" means concrete details of how they look.", "Only the first choice gives colors and patterns."]);
    q("d", "Rosa tuned her violin before every rehearsal. __She had bought it from a retired teacher who lived two towns away.__ Then she ran through her scales until her fingers felt loose.",
      "The writer is considering deleting the underlined sentence. Should it be kept or deleted?",
      ["Deleted, because it interrupts the description of her warm-up routine", "Kept, because it explains why she tunes the violin so carefully", "Kept, because it shows how long she has been playing the violin", "Deleted, because it repeats a detail stated in the sentence before"], ["The paragraph walks through her routine: tune, then scales.", "Where she bought the violin breaks that sequence."]);
    q("d", "Composting cuts household waste and enriches soil. Cities that collect food scraps report sending far less to landfills, and gardeners who use compost need less fertilizer.",
      "Suppose the writer's goal was to explain how to start a compost pile. Would this paragraph accomplish that goal?",
      ["No, because it describes benefits of composting instead of giving steps", "Yes, because it tells readers which materials belong in a compost pile", "Yes, because it explains how compost is used by gardeners and cities", "No, because it argues that composting does more harm than good"], ["\"How to start\" needs instructions.", "The paragraph gives reasons to compost, not steps."]);
    q("d", "______ He wakes at four to light the ovens, shapes two hundred loaves by hand, and has the first batch on the shelves before the buses start running.",
      "Which choice most effectively introduces the paragraph?",
      ["A baker's day begins long before his customers are awake.", "Bread has been an important food for thousands of years.", "Many people prefer to buy their bread from a small bakery.", "Ovens must reach a high temperature before bread is baked."], ["The paragraph describes one baker's early morning.", "The opening should set up that idea."]);
    q("d", "The volunteers spent the morning pulling invasive ivy from the creek bank and the afternoon planting native willows. ______",
      "Which choice best concludes the paragraph by emphasizing the lasting effect of the work?",
      ["Within a few years, those willows will shade the creek and hold its banks in place.", "The volunteers were tired by the time the last of the willows had been planted.", "Ivy is a plant that many gardeners choose for covering their fences and walls.", "Lunch was provided by a restaurant that is located a few blocks from the creek."], ["The goal is a \"lasting effect.\"", "Only the first choice looks ahead to what the work will do."]);
    q("d", "Octopuses are skilled escape artists. ______",
      "Which choice supports the first sentence with a specific example?",
      ["One aquarium octopus squeezed through a drain pipe barely wider than a coin.", "They are known for doing many surprising things in the wild and in tanks.", "Scientists who study them have often been impressed by what they can do.", "They live in oceans around the world and come in a wide range of sizes."], ["A specific example is one particular case with detail.", "The drain pipe escape is exactly that."]);
    q("d", "The bridge closed for repairs in March. Commuters had to find other routes.",
      "The writer is considering adding this sentence at the end: “The detour added about twenty minutes to a typical trip downtown.” Should the writer add it?",
      ["Yes, because it shows specifically how the closure affected commuters", "Yes, because it explains why the bridge needed to be repaired at all", "No, because it shifts the focus from the bridge to the downtown area", "No, because it repeats what the paragraph has already clearly stated"], ["The paragraph is about the closure's effect on commuters.", "The new sentence gives a concrete measure of that effect."]);

    /* ---- organization and transitions ---- */
    q("o", "The trail was closed by a rockslide. __Meanwhile,__ we turned back and took the river path.", BEST, ["So", NC, "Likewise,", "For example,"], ["The closure caused the change of plan.", "Use a cause-and-effect word."]);
    q("o", "Solar panels are expensive to install. __Therefore,__ they can lower electric bills for decades.", BEST, ["However,", NC, "Similarly,", "In other words,"], ["High cost now versus savings later is a contrast."]);
    q("o", "Many desert animals avoid the midday heat. The kangaroo rat, __for instance,__ stays in its burrow until dusk.", BEST, [NC, "however,", "instead,", "in contrast,"], ["The kangaroo rat is an example of the first sentence.", "\"For instance\" is already right."]);
    q("o", "The first draft was full of errors. __In addition,__ the final version was nearly flawless.", BEST, ["By contrast,", NC, "As a result,", "For instance,"], ["Full of errors versus nearly flawless: a contrast."]);
    q("o", "[1] She poured the batter into the pan. [2] First, Ana measured the flour and sugar. [3] Then she whisked in the eggs and milk. [4] Forty minutes later, the cake came out golden.",
      "Which order of the sentences is most logical?", ["2, 3, 1, 4", "1, 2, 3, 4", "3, 2, 1, 4", "2, 1, 3, 4"], ["\"First\" starts it; \"Then\" follows.", "The batter must be mixed before it's poured, and baking comes last."]);
    q("o", "[1] The lighthouse was built in 1871. [2] Its lamp could be seen twenty miles out to sea. [3] Today the building is a museum. [4] The lamp burned whale oil at first and was later converted to electricity.",
      "Where should Sentence 4 be placed?", ["After Sentence 2", "Where it is now", "Before Sentence 1", "After Sentence 1"], ["Sentence 4 gives more detail about \"the lamp.\"", "The lamp is introduced in Sentence 2, so Sentence 4 follows it."]);
    q("o", "An essay's first paragraph describes an apple orchard in bloom in April. Its second paragraph describes the harvest.",
      "Which sentence would most effectively begin the second paragraph?",
      ["By September, the branches that once held blossoms sag with fruit.", "Apples are grown in many countries and come in thousands of kinds.", "The orchard was planted by the family's great-grandparents long ago.", "Blossoms on apple trees are usually white with a touch of pink."], ["A linking sentence looks back (blossoms) and forward (fruit).", "Only the first choice does both."]);
    q("o", "Kai practiced the piece every day for a month. __Nevertheless,__ he played it without a single mistake at the recital.", BEST, ["As a result,", NC, "On the other hand,", "Even so,"], ["Practice led to a clean performance.", "That is cause and effect, not a contrast."]);
  }
});

/* ================= KNOWLEDGE OF LANGUAGE ================= */
Study.addUnit("acte", {
  id: "kla", name: "Knowledge of Language (about a sixth)", short: "Language",
  sections: [
    {id:"k", name:"Concision & Word Choice"}
  ],
  notes: {
    k: [
      {sum:["If two choices say the same thing, the shorter one is usually right. Cut words that repeat an idea.", "Match the tone of the passage. A formal report doesn't use slang.", "Know the commonly confused pairs: affect/effect, lose/loose, than/then, its/it's."]},
      {p:"Redundancy is the ACT's favorite trap here. \"Postponed until a later time\" says \"later\" twice, because postponing always means later. \"Reverted back,\" \"identical and exactly alike,\" and \"in my personal opinion, I think\" all have the same problem."},
      {ex:{q:"Due to the fact that it rained, the game was canceled.", a:["\"Due to the fact that\" means \"because.\"", "Because it rained, the game was canceled."]}},
      {p:"**Affect** is usually a verb (to influence); **effect** is usually a noun (a result). **Lose** means to misplace or stop having; **loose** means not tight."},
      {tip:"Shortest isn't automatically right. The answer still has to be clear and keep the meaning. But check the shortest choice first."},
      {check:[{q:"\"The costs were totally out of control\" in a formal report. Better?", a:"\"Far higher than projected.\""}]}
    ]
  },
  problems(k){
    const q = make(k);
    q("k", "The meeting was __postponed until a later time__.", BEST, ["postponed", NC, "postponed to a later date in the future", "put off and postponed"], ["Postponing already means moving to a later time.", "The extra words repeat the idea."]);
    q("k", "__In my personal opinion, I think that__ the plan will work.", BEST, ["I think", NC, "In my opinion, I personally think", "It is my own personal belief that"], ["\"In my opinion\" and \"I think\" say the same thing.", "Keep one."]);
    q("k", "From a formal report: The committee reviewed the budget and found that the costs were __totally out of control__.", BEST, ["far higher than projected", NC, "through the roof, big time", "kind of a lot"], ["A formal report needs a formal, precise phrase.", "The other choices are slang."]);
    q("k", "The twins are __identical and look exactly alike__.", BEST, ["identical", NC, "identical in the way they look alike", "alike and identical twins"], ["\"Identical\" already means exactly alike."]);
    q("k", "The new policy will __effect__ every student.", BEST, ["affect", NC, "effecting", "affects"], ["The sentence needs a verb meaning \"influence.\"", "That's \"affect.\" After \"will,\" use the base form."]);
    q("k", "The speech was so long that the audience began to __loose__ interest.", BEST, ["lose", NC, "loss", "loosen"], ["\"Loose\" means not tight.", "To stop having something is to lose it."]);
    q("k", "__Due to the fact that__ it rained, the game was canceled.", BEST, ["Because", NC, "On account of the fact that", "Being that"], ["One word does the job of five."]);
    q("k", "The hikers were __famished__ after ten miles, so they ate everything in their packs.", BEST, [NC, "peckish", "content", "full"], ["They ate everything, so they were extremely hungry.", "\"Famished\" fits; \"peckish\" means only slightly hungry."]);
    q("k", "She __reverted back__ to her old habits.", BEST, ["reverted", NC, "went back and reverted", "reverted back again"], ["\"Revert\" already means go back."]);
    q("k", "From a lab report: The sample was heated, weighed, and then __we chucked it__.", BEST, ["discarded", NC, "tossed out by us", "we got rid of it"], ["It matches the formal tone and the form of \"heated\" and \"weighed.\""]);
  }
});
})();
