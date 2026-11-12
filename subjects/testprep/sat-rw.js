/* SAT Reading and Writing
   Laid out by the four content domains College Board uses for the digital SAT and the skills inside each:
   Craft and Structure, Information and Ideas, Standard English Conventions, Expression of Ideas.
   The real section is 54 questions in 64 minutes (two modules), each with its own short passage and
   four answer choices. Every passage and question here was written for this site in the style of the test;
   none are copied from a real exam, and the short "quotations" in the evidence questions are invented. */
(() => {
const SRC = "SAT style";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});
const WORD = "Which choice completes the text with the most logical and precise word or phrase?";
const CONV = "Which choice completes the text so that it conforms to the conventions of Standard English?";
const TRANS = "Which choice completes the text with the most logical transition?";
const LOGIC = "Which choice most logically completes the text?";
const NOTES = "While researching a topic, a student has taken the following notes:\n";

/* ================= CRAFT AND STRUCTURE ================= */
Study.addUnit("satrw", {
  id: "cs", name: "Craft & Structure (about 28%)", short: "Craft",
  sections: [
    {id:"w", name:"Words in Context"},
    {id:"t", name:"Text Structure & Purpose"},
    {id:"x", name:"Cross-Text Connections"}
  ],
  notes: {
    w: [
      {sum:["Cover the choices, read the whole passage, and predict your own word for the blank first.", "The clue is always in the text: a contrast word (but, although, far from), a cause, or a restatement after a colon.", "Pick the word that fits the meaning exactly. A word that merely sounds academic or is roughly on topic is a trap."]},
      {p:"Words in Context is the most common question type in the section. Each one gives you a short passage with a blank, or an underlined word, and asks for the most precise fit."},
      {ex:{q:"The physicist's lectures were famously ______: she could explain in ten minutes what textbooks took a chapter to cover.", a:["Everything after the colon defines the blank.", "Explaining a lot in little time → short and to the point.", "\"Concise\" matches. \"Rambling\" is the opposite, and \"ornate\" is about decoration, not length."]}},
      {h:"Watch the direction"},
      {p:"Words like **although**, **but**, **yet** and **far from** flip the meaning. \"Far from being ______ to its surroundings, the octopus continually samples them\" needs a word meaning the opposite of paying attention."},
      {tip:"For \"most nearly means\" questions, swap each choice into the sentence. Common words are often used in a less common sense: \"novel\" can mean new, not a book."},
      {check:[{q:"\"The drought's effects were ______ by an irrigation network.\" Predict a word.", a:"Lessened or reduced, since irrigation would help. The answer was \"mitigated\"."}]}
    ],
    t: [
      {sum:["Purpose questions ask why the text was written: to describe, to explain, to argue, to present a view.", "Function questions ask what one sentence does for the rest: introduce a surprise, give an example, add a contrast.", "Structure questions ask for the order of moves: a problem then a response, a claim then evidence, a sequence."]},
      {p:"Answer these in your own words before reading the choices: \"It says X, then Y.\" Then find the choice that matches **both** halves. Wrong answers usually get one half right and the other wrong."},
      {ex:{q:"\"Monarchs are known for their long migration. Yet no single butterfly completes the round trip. The journey north takes several generations…\" What does the second sentence do?", a:["\"Yet\" signals a surprise.", "The next sentence explains it.", "So it introduces a surprising fact that the rest of the text explains."]}},
      {warn:"Be careful with strong verbs in the choices. A text that describes an experiment does not \"question\" or \"criticize\" it unless it actually does so."},
      {check:[{q:"A text lists bicycle designs in the order they appeared and says what each changed. Structure?", a:"A sequence of designs with the change each one made."}]}
    ],
    x: [
      {sum:["Two short texts on one topic. Summarize each author's view in a few words before looking at the choices.", "Then decide the relationship: agree, disagree, or qualify (agree only in part).", "The right answer uses something Text 2 actually says. If Text 2 gives a limit or exception, the answer usually mentions it."]},
      {ex:{q:"Text 1: remote work lowers productivity. Text 2: home-based call-center staff handled more calls, but the tasks were simple and done alone. How would Text 2's authors respond?", a:["Their data goes against Text 1.", "But they caution that it applies to simple, independent tasks.", "So: the claim may not hold for that kind of work."]}},
      {p:"These are the rarest reading questions, only a few per test, but they take the longest. If time is short, they're reasonable ones to flag and come back to."},
      {check:[{q:"Text 2 gives trip data showing most bike-share rides are by commuting members. Critics in Text 1 say tourists are the main users. Relationship?", a:"Text 2's data disputes the critics' claim."}]}
    ]
  },
  problems(k){
    const q = make(k);
    /* ---- words in context ---- */
    q("w", "Because the river's course had shifted repeatedly over the centuries, the old survey maps proved ______: boundaries drawn along its banks no longer matched any feature on the ground.", WORD,
      ["unreliable", "indispensable", "meticulous", "familiar"], ["The colon explains the blank: the maps no longer matched the land.", "Maps that can't be trusted are unreliable."]);
    q("w", "The committee praised the architect's design as ______, noting that it achieved an impression of grandeur while using only a handful of inexpensive materials.", WORD,
      ["economical", "extravagant", "conventional", "haphazard"], ["The clue is \"only a handful of inexpensive materials.\"", "Getting a lot from a little is economical. \"Extravagant\" is the opposite."]);
    q("w", "Early critics dismissed the novel as trivial, but later scholars have ______ that judgment, arguing that its plain style conceals a sophisticated critique of city life.", WORD,
      ["challenged", "echoed", "anticipated", "softened"], ["\"But\" signals that later scholars disagree with the early critics.", "They argue the opposite, so they have challenged the judgment, not merely softened it."]);
    q("w", "Honeybee scouts do not simply report the first cavity they find. Instead, the swarm's choice is ______: many scouts inspect several sites, and a decision emerges only after support builds for one of them.", WORD,
      ["collective", "arbitrary", "impulsive", "solitary"], ["After the colon: many scouts take part and support builds.", "A decision made by the group is collective."]);
    q("w", "The museum's new director promised to __cultivate__ relationships with local artists, visiting their studios weekly and inviting them to propose exhibitions.", "As used in the text, what does the word \"cultivate\" most nearly mean?",
      ["foster", "plow", "harvest", "refine"], ["The director visits and invites artists to build the relationships.", "Here \"cultivate\" means to help something grow: foster."]);
    q("w", "Although the drought was severe, its effects on the valley's farms were ______ by an irrigation network that drew on deep wells.", WORD,
      ["mitigated", "magnified", "documented", "triggered"], ["\"Although\" sets up a contrast with \"severe.\"", "Irrigation would lessen the effects: mitigated."]);
    q("w", "The physicist's lectures were famously ______: she could explain in ten minutes what textbooks took a chapter to cover, without leaving out anything essential.", WORD,
      ["concise", "rambling", "tentative", "ornate"], ["The colon defines the blank: a lot explained in little time.", "That is concise."]);
    q("w", "The treaty's wording was deliberately ______, allowing each side to tell its own citizens that it had won the key concessions.", WORD,
      ["ambiguous", "explicit", "hostile", "binding"], ["Both sides could read it their own way.", "Wording open to more than one reading is ambiguous."]);
    q("w", "Far from being ______ to its surroundings, the octopus continually samples them, adjusting the color and texture of its skin within seconds.", WORD,
      ["indifferent", "sensitive", "attuned", "vulnerable"], ["\"Far from\" means the blank is the opposite of what the octopus does.", "It pays close attention, so the blank is \"indifferent.\""]);
    q("w", "In her memoir, the pilot describes the __novel__ problems of high-altitude flight, problems that no manual of the time addressed.", "As used in the text, what does the word \"novel\" most nearly mean?",
      ["unfamiliar", "fictional", "literary", "trivial"], ["No manual addressed the problems, so they were new.", "\"Novel\" here means new or unfamiliar, not a book."]);

    /* ---- text structure and purpose ---- */
    q("t", "For decades, city planners treated alleys as wasted space, useful only for trash collection. Recently, several cities have begun repaving alleys with surfaces that absorb rainwater and adding lighting and plants. Early results suggest that these “green alleys” reduce street flooding while giving neighborhoods new walking routes.",
      "Which choice best states the main purpose of the text?",
      ["To describe a new use for a kind of space once seen as having little value", "To argue that cities should stop collecting trash in their narrow alleys", "To explain why surfaces that absorb water cost more than regular paving", "To compare street flooding in several cities before and after rainstorms"],
      ["The text moves from \"wasted space\" to what cities now do with alleys.", "It describes; it doesn't argue about trash or discuss cost."]);
    q("t", "Monarch butterflies are known for their long migration. __Yet no single butterfly completes the round trip.__ The journey north takes several generations, each living only a few weeks, while the generation that flies south lives for months.",
      "Which choice best describes the function of the underlined sentence?",
      ["It introduces a surprising fact that the rest of the text goes on to explain", "It restates the claim made in the sentence before it by using different words", "It offers a piece of evidence that weakens the main claim made by the text", "It defines a technical term that is then used later on in the same passage"],
      ["\"Yet\" signals something unexpected.", "The last sentence explains how the trip is completed over generations."]);
    q("t", "Mara had rehearsed the speech all week, pacing the hallway until the words felt like her own. But when she stepped onto the stage and saw the rows of faces, every sentence vanished. She gripped the podium, breathed, and began instead to tell the story of her grandmother's garden.",
      "Which choice best describes the overall structure of the text?",
      ["It describes a character's preparation, then shows how she responds when it fails her", "It presents a character's fear, then explains the events in her past that first caused it", "It introduces a setting in detail, then describes how that place changes as time passes", "It summarizes a speech, then reports how the audience in the room reacted to hearing it"],
      ["First: a week of rehearsal. Then: the words vanish and she improvises.", "Nothing is said about her past, the setting changing, or the audience's reaction."]);
    q("t", "Some historians date the start of the “information age” to the computer. Others point further back, to the telegraph, which for the first time let a message travel faster than a person could carry it. On this view, later inventions sped up a change that had already begun.",
      "Which choice best states the main purpose of the text?",
      ["To present a view that places the origin of a development earlier than some assume", "To explain in detail how the telegraph sent its messages across very long distances", "To argue that the computer had less effect on daily life than is commonly claimed", "To show that historians now agree about when the information age actually began"],
      ["The text contrasts \"some historians\" with \"others\" who point further back.", "Its focus is that earlier starting point, not how the telegraph worked."]);
    q("t", "Coral reefs cover less than one percent of the ocean floor. __They nonetheless support roughly a quarter of all marine species.__ This concentration of life makes reefs a priority for conservation.",
      "Which choice best describes the function of the underlined sentence?",
      ["It provides a contrast that shows why the subject matters", "It gives an example of a species that depends on the reefs", "It questions a statistic that the first sentence presents", "It describes a method that is used to protect coral reefs"],
      ["\"Nonetheless\" contrasts small area with a large share of species.", "That contrast is why reefs are \"a priority.\""]);
    q("t", "To test whether crows can plan ahead, researchers taught the birds that a certain token could later be traded for food. When offered a choice between the token and a small immediate snack, most crows took the token and waited.",
      "Which choice best states the main purpose of the text?",
      ["To describe an experiment and report what happened in it", "To question the methods that a group of researchers used", "To compare crows with several other species of birds", "To explain how crows are trained to find food in the wild"],
      ["Sentence 1 gives the setup; sentence 2 gives the result.", "No criticism or comparison appears."]);
    q("t", "The first bicycles had no pedals; riders pushed along the ground with their feet. Pedals attached to the front wheel came next, followed by the enormous front wheel of the “high-wheeler,” which went faster but threw riders forward in a fall. The chain-driven “safety bicycle” finally allowed speed with two wheels of the same size.",
      "Which choice best describes the overall structure of the text?",
      ["It traces a sequence of designs and notes what each changed", "It argues that an early design was better than later ones", "It describes a problem and then rejects a proposed solution", "It defines a term and then gives several unrelated examples"],
      ["\"First,\" \"came next,\" \"followed by,\" \"finally\" mark a sequence.", "Each step says what the new design added or fixed."]);

    /* ---- cross-text connections ---- */
    q("x", "**Text 1**\nMany economists hold that remote work lowers productivity because employees collaborate less and are harder to supervise.\n\n**Text 2**\nA study tracking one firm's call-center employees found that those assigned to work from home handled more calls per shift than those in the office, largely because they took fewer breaks. The authors caution, however, that the tasks were simple and done alone.",
      "Based on the texts, how would the authors of the study in Text 2 most likely respond to the view described in Text 1?",
      ["By noting that it may not hold for work that is simple and done independently", "By agreeing that remote employees are generally much harder to supervise", "By arguing that it is correct for every kind of job that has been studied so far", "By claiming that office employees collaborate less than economists assume"],
      ["Text 2's result goes against Text 1.", "But the authors limit it to simple tasks done alone, so their response is a qualified one."]);
    q("x", "**Text 1**\nThe giant stone statues of Rapa Nui were long assumed to have been dragged on wooden sledges, a method that would have required cutting down many trees.\n\n**Text 2**\nExperiments with a replica show that a small team with ropes can rock an upright statue from side to side so that it “walks” forward. Islanders' oral tradition, notably, says that the statues walked.",
      "Based on the texts, the author of Text 2 would most likely say that the assumption described in Text 1",
      ["overlooks a way of moving statues that needed little timber", "is confirmed by the experiments done with a replica statue", "relies far too heavily on the islanders' oral tradition", "correctly explains why the island lost most of its forests"],
      ["Text 2 offers a different method: ropes and rocking, no sledges.", "It uses oral tradition as support, not as a weakness."]);
    q("x", "**Text 1**\nSleep researchers have traditionally advised that adults need eight uninterrupted hours of sleep.\n\n**Text 2**\nDiaries and court records from before electric lighting describe a “first sleep” and a “second sleep” separated by an hour or more of quiet wakefulness. Waking in the night, one historian argues, may be an old pattern and not a disorder.",
      "Based on the texts, how does Text 2 relate to the advice described in Text 1?",
      ["It suggests that the advice reflects a fairly recent norm", "It offers medical proof that eight hours is too much sleep", "It shows that people slept far less before electric light", "It argues that sleep researchers ignore written records"],
      ["Text 2 says broken sleep was once ordinary.", "So \"uninterrupted\" sleep may be a newer expectation. It says nothing about total hours."]);
    q("x", "**Text 1**\nCritics of the city's bike-share program argue that it mainly serves tourists and that residents rarely use it.\n\n**Text 2**\nTrip records show that 70 percent of rides begin or end at a transit station during commuting hours, and most are taken by annual members.",
      "Based on the texts, the data in Text 2 would most likely be used to",
      ["dispute the critics' claim about who uses the program", "support the critics' claim that tourists take most rides", "show that the program costs more than was expected", "explain why few residents live near a transit station"],
      ["Commuting-hour rides by annual members point to residents.", "That goes against the critics in Text 1."]);
    q("x", "**Text 1**\nThe playwright insisted that her plays were about ideas, and that plot was merely a frame to hang them on.\n\n**Text 2**\nWhatever she claimed, audiences return to her plays for their suspense: secrets are revealed at exactly the moment they can do the most damage.",
      "Based on the texts, the author of Text 2 would most likely characterize the playwright's statement as",
      ["an understatement of how skillfully she built her plots", "an accurate account of why audiences enjoy her plays", "a sign that she cared little for what audiences thought", "evidence that her plays contain few important ideas"],
      ["\"Whatever she claimed\" signals disagreement.", "Text 2 praises the timing of her plots, which she called \"merely a frame.\""]);
  }
});

/* ================= INFORMATION AND IDEAS ================= */
Study.addUnit("satrw", {
  id: "ii", name: "Information & Ideas (about 26%)", short: "Ideas",
  sections: [
    {id:"c", name:"Central Ideas & Details"},
    {id:"e", name:"Command of Evidence"},
    {id:"i", name:"Inferences"}
  ],
  notes: {
    c: [
      {sum:["The main idea covers the whole passage, not one sentence of it.", "Detail questions (\"according to the text\") are answered directly in the passage. Find the line and match it.", "Cross out choices that are true but too narrow, too broad, or never stated."]},
      {p:"For a main idea, ask what every sentence has in common. A passage that lists three benefits of city trees and then says the trees are unevenly spread is about **both** things, so the answer must include both."},
      {ex:{q:"\"Tomás read the letter twice… He told his sister it was nothing… All evening he laughed a little too quickly at her jokes.\" What is true about Tomás?", a:["He says it's nothing, but his behavior says otherwise.", "He is hiding his reaction from his sister.", "The text never says the rent was paid or that he'll share the letter."]}},
      {warn:"A choice can use words from the passage and still be wrong. Check what it actually claims."},
      {check:[{q:"A passage says early printers left spaces for hand-drawn initials and buyers still liked manuscripts. Main idea?", a:"Early printed books kept features of handwritten ones for a while."}]}
    ],
    e: [
      {sum:["Find the claim first and put it in your own words. Then test each choice against that exact claim.", "To support a claim, look for a result the claim predicts. To weaken it, look for a result it can't explain.", "For data questions, the answer must be true according to the numbers and must be about what the claim says."]},
      {p:"Most wrong answers are true-sounding statements about the same topic that don't touch the claim. If the hypothesis is that city sparrows sing higher **because of traffic noise**, the evidence has to involve noise changing, not nests or food."},
      {ex:{q:"Claim: a town grew after 1250 because of a new bridge. What weakens it?", a:["The claim says the bridge caused the growth.", "If the population had already doubled before the bridge was begun, the growth came first.", "A cause can't come after its effect."]}},
      {h:"Data questions"},
      {p:"Read the claim, then check each choice twice: is it accurate, and does it show what the claim says? A choice can quote the numbers correctly and still illustrate the wrong point."},
      {check:[{q:"Claim: most students prefer to study after noon. Morning is 22%. What supports it?", a:"The other times add to 78%."}]}
    ],
    i: [
      {sum:["The blank is the conclusion the passage has been building toward. It must follow from the facts given.", "Stay close to the text. The right answer is usually a small, careful step, not a bold claim.", "Words like \"always,\" \"never\" and \"only\" in a choice are warning signs unless the passage supports them."]},
      {ex:{q:"Inland pottery contains fish-oil residues, though the inland village had no access to the sea. This suggests that…", a:["The fish had to come from somewhere else.", "The coastal village is the obvious source.", "So the villages exchanged goods."]}},
      {p:"Put the passage's logic in a short chain: fact, fact, therefore. If a choice needs an extra fact the passage never gave, it isn't the answer."},
      {check:[{q:"Birds eat more of whichever moth color contrasts with the tree bark. Conclusion?", a:"Birds more easily catch the moths that stand out."}]}
    ]
  },
  problems(k){
    const q = make(k);
    /* ---- central ideas and details ---- */
    q("c", "Urban trees do more than provide shade. Their leaves trap airborne dust, their roots slow stormwater, and neighborhoods with more tree cover record lower summer temperatures. Yet tree cover is unevenly distributed: surveys in many cities find the fewest trees in the lowest-income districts.",
      "Which choice best states the main idea of the text?",
      ["City trees bring several benefits, but not every neighborhood shares in them", "City trees are most valuable for the shade that they provide in the summer", "Low-income districts have recently begun to plant many more street trees", "Surveys of tree cover in cities are often inaccurate and should be redone"],
      ["The first three sentences list benefits.", "\"Yet\" adds that the trees are unevenly spread. The main idea needs both parts."]);
    q("c", "When the bakery opened in 1962, it sold only two kinds of bread. Its founder, who had trained as a chemist, kept a notebook recording the temperature and humidity for every batch. She believed that consistency, more than variety, would bring customers back.",
      "According to the text, why did the founder keep a notebook?",
      ["To make each batch of bread turn out the same", "To invent many new kinds of bread to sell", "To prove that she had trained as a chemist", "To count how many customers came back"],
      ["She valued \"consistency, more than variety.\"", "Recording conditions for every batch serves that goal."]);
    q("c", "Tomás read the letter twice, then folded it along its old creases and slid it under the lamp. He told his sister it was nothing, a note about the rent. All evening he laughed a little too quickly at her jokes.",
      "Based on the text, what is most likely true about Tomás?",
      ["He is hiding his reaction to the letter from his sister", "He is relieved that the rent has finally been paid", "He finds his sister's jokes funnier than he usually does", "He has decided to show his sister the letter later on"],
      ["He calls it \"nothing,\" but reads it twice and laughs \"a little too quickly.\"", "His behavior shows he is covering something up."]);
    q("c", "Glass frogs sleep on leaves during the day, when their green, see-through bodies are hard to spot. Researchers found that a resting frog becomes even more transparent by packing most of its red blood cells into its liver, which removes color from the rest of its body. On waking, the cells return to circulation.",
      "Which choice best states the main idea of the text?",
      ["Resting glass frogs become more transparent by storing red blood cells in the liver", "Glass frogs are active throughout the day and sleep on leaves during the night", "Red blood cells are the main reason that most frogs look green to their predators", "Researchers do not yet know how glass frogs become transparent while resting"],
      ["The passage's new information is the mechanism: blood cells move into the liver.", "The second choice reverses day and night."]);
    q("c", "The lighthouse keeper's log for that winter is mostly weather: wind direction, wave height, hours of fog. Only twice does it mention people, once when a supply boat arrived late and once when a fishing crew sheltered overnight.",
      "According to the text, what does the log mainly record?",
      ["Conditions at sea and in the air", "Visits from passing fishing crews", "The keeper's thoughts and feelings", "Repairs made to the lighthouse"],
      ["\"Mostly weather: wind direction, wave height, hours of fog.\"", "People appear only twice."]);
    q("c", "Printing with movable type spread quickly in fifteenth-century Europe, but it did not immediately replace handwriting. For decades, printers left blank spaces so that artists could add decorated initials by hand, and wealthy buyers often preferred manuscripts. The new technology borrowed the look of the old before developing a style of its own.",
      "Which choice best states the main idea of the text?",
      ["Early printed books kept features of handwritten ones for some time", "Wealthy buyers refused to purchase any book made with movable type", "Movable type was invented to make decorated initials easier to add", "Handwritten manuscripts disappeared soon after printing was invented"],
      ["The last sentence sums it up: printing \"borrowed the look of the old.\"", "The text says buyers \"often preferred\" manuscripts, not that they refused print."]);
    q("c", "A sourdough starter is a mixture of flour and water colonized by wild yeast and bacteria. The bacteria produce acids that give the bread its tang and also slow the growth of mold, which is why sourdough loaves tend to keep longer than loaves made with commercial yeast.",
      "According to the text, why does sourdough bread tend to keep longer?",
      ["Acids made by its bacteria slow the growth of mold", "Wild yeast makes the loaf rise much more slowly", "It contains far less water than other kinds of bread", "Commercial yeast is added to it as a preservative"],
      ["The acids \"slow the growth of mold, which is why\" the loaves keep longer."]);

    /* ---- command of evidence ---- */
    q("e", "A biologist hypothesizes that city-dwelling sparrows sing at a higher pitch than rural sparrows so that their songs are not drowned out by low-pitched traffic noise.",
      "Which finding, if true, would most directly support the biologist's hypothesis?",
      ["Sparrows in a city sang at a lower pitch during a period when traffic was greatly reduced", "Sparrows in cities and in rural areas sang for about the same amount of time each day", "Rural sparrows that were moved to a city aviary ate the same foods that they had eaten before", "City sparrows were found to build their nests higher off the ground than rural sparrows did"],
      ["The hypothesis links pitch to traffic noise.", "If pitch drops when the noise drops, the noise is what was raising it."]);
    q("e", "A historian claims that a medieval town's rapid growth after 1250 was caused by the construction of a new bridge that brought merchants through the town.",
      "Which finding, if true, would most weaken the historian's claim?",
      ["Town records show that the population had already doubled before the bridge was begun", "Merchants who crossed the bridge were charged a toll that paid for its regular repair", "Several nearby towns that had no bridge remained small throughout the same period", "The bridge was built of stone that came from a quarry a few miles up the river"],
      ["A cause must come before its effect.", "Growth that began before the bridge can't have been caused by it. The third choice would support the claim."]);
    q("e", "A student writing about a short story claims that the narrator feels torn about leaving her hometown.",
      "Which quotation from the story would best illustrate the student's claim?",
      ["“I packed quickly, and unpacked twice, and could not say which of the two felt more like relief.”", "“The train left at six, and I had bought my ticket a full week before so as to be sure of a seat.”", "“My mother had always said that the town was too small for me, and that I ought to see a city.”", "“I did not look back at the station, or at the square, or at anything else as the train pulled out.”"],
      ["\"Torn\" means pulled both ways.", "Packing and unpacking, with relief in both, shows exactly that. The others show planning, her mother's view, or certainty."]);
    q("e", "Researchers propose that a certain desert plant opens its flowers at night because its main pollinators are moths, which are active after dark.",
      "Which finding, if true, would most directly support the researchers' proposal?",
      ["Flowers that were covered at night but left open by day produced almost no seeds", "The plant grows more slowly than usual in years when there is very little rainfall", "The plant's flowers stay open slightly longer during the cooler months of the year", "Bees were seen visiting several other plant species that grow in the same desert"],
      ["If night visitors do the pollinating, blocking them at night should stop seed production.", "The other findings don't involve pollination at night."]);
    q("e", "A class measured how far a toy car rolled after leaving ramps of different heights.\nRamp height 10 cm: 42 cm\nRamp height 20 cm: 81 cm\nRamp height 30 cm: 118 cm\nRamp height 40 cm: 160 cm\n\nThe students concluded that the car rolled farther as the ramp got higher; for example, ______",
      "Which choice most effectively uses data from the results to complete the example?",
      ["the car rolled 160 cm from the 40 cm ramp but only 42 cm from the 10 cm ramp.", "the car rolled 118 cm from the 20 cm ramp but only 81 cm from the 30 cm ramp.", "the car rolled 42 cm from each one of the ramps that the students tested.", "the car rolled farther from the 10 cm ramp than it did from the 40 cm ramp."],
      ["The example must be accurate and show distance rising with height.", "Only the first choice matches the results: 42 cm at 10 cm, 160 cm at 40 cm."]);
    q("e", "A survey asked 400 students when they prefer to study.\nMorning: 22%\nAfternoon: 31%\nEvening: 38%\nLate night: 9%\n\nA student writes that most of those surveyed prefer to study after noon.",
      "Which choice best describes data from the survey that support the student's statement?",
      ["Afternoon, evening and late night together account for 78% of the responses", "Morning was chosen by 22% of the students, which is more than chose late night", "Evening was the most popular single choice, at 38% of all the responses given", "Late night was the least popular choice of the four, at only 9% of responses"],
      ["\"After noon\" covers afternoon, evening and late night.", "31 + 38 + 9 = 78%, which is \"most.\""]);
    q("e", "Researchers stored seeds at four temperatures for a year and then planted them.\nStored at 5°C: 88% germinated\nStored at 15°C: 74% germinated\nStored at 25°C: 51% germinated\nStored at 35°C: 19% germinated\n\nThe researchers concluded that cooler storage keeps seeds viable; for instance, ______",
      "Which choice most effectively uses data from the results to complete the example?",
      ["seeds stored at 5°C germinated at more than four times the rate of seeds stored at 35°C.", "seeds stored at 25°C germinated at a higher rate than the seeds that were stored at 15°C.", "seeds stored at 35°C germinated at about half the rate of the seeds stored at 5°C.", "seeds stored at 15°C germinated at exactly the same rate as the seeds stored at 5°C."],
      ["88% is more than four times 19%.", "The other choices misstate the numbers."]);
    q("e", "An economist argues that raising the price of parking in a city's downtown would reduce traffic congestion there.",
      "Which finding, if true, would most directly support the economist's argument?",
      ["After a similar city raised its downtown parking prices, fewer cars entered its downtown", "After a similar city raised its downtown parking prices, its parking revenue rose sharply", "Most drivers who were surveyed said that they considered downtown parking too expensive", "Downtown businesses reported that most of their customers arrive during the afternoon"],
      ["The argument is about congestion, so the evidence must be about the number of cars.", "Revenue and opinions don't show that traffic fell."]);

    /* ---- inferences ---- */
    q("i", "Archaeologists found that pottery from a coastal village contained residues of fish oils. Pottery of the same age from an inland village thirty miles away contained the same residues. Since the inland village had no access to the sea, the finding suggests that ______", LOGIC,
      ["the two villages exchanged goods with each other.", "the inland village was older than the coastal one.", "pottery styles differed greatly between the villages.", "fish were more plentiful then than they are today."],
      ["Sea fish reached a village with no access to the sea.", "The simplest explanation is trade with the coast."]);
    q("i", "A language's words for colors often reflect what its speakers need to tell apart. Speakers of a language used by herders may have a dozen terms for the coat colors of cattle but a single term covering both green and blue. This suggests that color vocabulary ______", LOGIC,
      ["is shaped by the practical concerns of a community.", "is roughly the same size in every human language.", "depends mostly on how well its speakers can see.", "has little connection to the way that people live."],
      ["Herders have many words where it matters to them (cattle) and few where it doesn't.", "Vocabulary follows practical needs."]);
    q("i", "Tree rings are wide in wet years and narrow in dry ones. In timbers from an abandoned settlement, the outermost rings, which formed just before the trees were cut, are consistently among the narrowest in each sample. The settlement's builders therefore most likely ______", LOGIC,
      ["cut the timber during a period of drought.", "chose only the oldest trees in the forest.", "cut the timber soon after a major flood.", "built the settlement over several centuries."],
      ["Narrow rings mean dry years.", "The last rings before cutting are narrow, so the trees were cut in dry years."]);
    q("i", "A streaming service found that viewers who were shown a long menu of films took longer to choose, and were more likely to leave without watching anything, than viewers who were shown a short menu. The service concluded that offering more options ______", LOGIC,
      ["does not necessarily make viewers more likely to watch.", "always leads viewers to pick the films they like best.", "causes viewers to spend less time browsing the menus.", "matters only to viewers who already know what to watch."],
      ["More options led to more people leaving.", "So more choice doesn't guarantee more watching. \"Always\" and \"only\" go beyond the evidence."]);
    q("i", "The moths of one species come in a pale form and a dark form. In a forest where pale, lichen-covered bark is common, birds eat far more dark moths than pale ones. In a nearby forest where soot has blackened the trunks, the pattern is reversed. It appears that birds ______", LOGIC,
      ["more easily catch the moths that stand out against the bark.", "strongly prefer the taste of dark moths to that of pale moths.", "avoid hunting in forests where the trees are covered in soot.", "cannot tell the two forms of the moth apart from each other."],
      ["On pale bark, dark moths are eaten; on dark bark, pale moths are.", "In both forests the eaten moths are the ones that contrast with the background."]);
    q("i", "The composer left no tempo markings in the score. Recordings from the 1930s, made by musicians who had studied with her, take the piece far more slowly than most modern performances do. If those students were following her instructions, then ______", LOGIC,
      ["modern performances are probably faster than she intended.", "the 1930s recordings were probably made on poor equipment.", "she probably wrote her tempo markings in another score.", "modern musicians probably play the piece more accurately."],
      ["Her students play it slowly, and we assume they follow her wishes.", "Then today's faster versions don't match what she wanted."]);
    q("i", "Many lizards can shed their tails to escape a predator, and the tail later regrows. But regrowth takes energy, and a lizard without a tail runs more slowly and stores less fat. Tail shedding is thus best understood as ______", LOGIC,
      ["a costly defense used when the alternative is worse.", "a harmless trick that lizards can repeat endlessly.", "a sign that a lizard is too weak to outrun predators.", "a behavior that mostly benefits a lizard's predators."],
      ["It saves the lizard's life but has real costs.", "So it's a defense worth paying for only when being caught is the alternative."]);
  }
});

/* ================= STANDARD ENGLISH CONVENTIONS ================= */
Study.addUnit("satrw", {
  id: "sec", name: "Standard English Conventions (about 26%)", short: "Grammar",
  sections: [
    {id:"b", name:"Boundaries (Punctuation)"},
    {id:"f", name:"Form, Structure & Sense"}
  ],
  notes: {
    b: [
      {sum:["Two complete sentences can be joined by a period, a semicolon, or a comma plus and/but/so. A comma alone is a comma splice.", "A colon or a single dash follows a complete sentence and introduces a list, example or explanation.", "Extra information in the middle of a sentence gets matching punctuation on both sides: two commas or two dashes."]},
      {p:"Start by checking what is on each side of the blank. Is the part before it a complete sentence? Is the part after it? That one test answers most punctuation questions."},
      {table:{head:["Left side", "Right side", "Use"], rows:[["Complete", "Complete", "period or semicolon"], ["Complete", "List or explanation", "colon or dash"], ["Dependent clause (Although…)", "Complete", "comma"], ["Subject", "Its verb", "nothing"]]}},
      {ex:{q:"The first prototype overheated within ______ the engineers redesigned the cooling system. (minutes; therefore, / minutes, therefore,)", a:["Both sides are complete sentences.", "\"Therefore\" is not a joining word like \"and,\" so a comma can't hold the sentences together.", "Semicolon before it, comma after: minutes; therefore,"]}},
      {h:"Essential or extra?"},
      {p:"If removing a phrase leaves the sentence clear, it's extra and gets commas on both sides. If the phrase is needed to say **which one**, it gets no commas: \"The poet who wrote the opening sonnet was nineteen.\""},
      {warn:"Never put a single comma between a subject and its verb, however long the subject is."},
      {check:[{q:"\"The chef's secret was one ingredient ___ smoked paprika.\"", a:"A colon: a complete sentence followed by what the ingredient is."}, {q:"\"They wondered whether the birds could recognize faces\" ends with?", a:"A period. It's a statement about a question, not a direct question."}]}
    ],
    f: [
      {sum:["Find the subject and make the verb agree with it. Ignore phrases in between (\"The collection of maps **is**\").", "A pronoun must match the noun it replaces in number. \"Its\" shows possession; \"it's\" means \"it is.\"", "An opening describing phrase must be followed right away by the person or thing it describes."]},
      {p:"These questions give four forms of the same word. Don't go by ear alone: find the subject, the time frame, or the noun being described, and the answer follows."},
      {ex:{q:"Each of the dancers ______ a solo in the second act. (perform / performs)", a:["The subject is \"each,\" which is singular.", "\"Of the dancers\" is just a phrase in between.", "Each … performs."]}},
      {h:"Verb tense and form"},
      {p:"Match the tense to the time clues. A specific past date (\"in 1986\") takes the simple past. A sentence needs a main verb that can stand on its own: \"having scheduled\" and \"scheduling\" can't be the main verb."},
      {h:"Plurals and possessives"},
      {p:"One owner: scientist's. More than one owner: scientists'. No ownership: scientists."},
      {ex:{q:"Hoping to catch the early ferry, ______", a:["Who is hoping? A person.", "That person must come right after the comma.", "\"Dana set three alarms.\" Not \"three alarms were set,\" since alarms can't hope."]}},
      {check:[{q:"\"Among the ruins ___ a mosaic floor.\" (lie / lies)", a:"Lies. The subject is \"a mosaic floor,\" which comes after the verb."}]}
    ]
  },
  problems(k){
    const q = make(k);
    /* ---- boundaries ---- */
    q("b", "The festival draws visitors from across the ______ last year, more than forty thousand people attended.", CONV,
      ["region;", "region,", "region", "region that"], ["Both sides of the blank are complete sentences.", "A semicolon can join them. A comma alone is a comma splice."]);
    q("b", "The chef's secret was a single unusual ______ a spoonful of smoked paprika stirred in at the very end.", CONV,
      ["ingredient:", "ingredient;", "ingredient", "ingredient, being"], ["The first part is a complete sentence; the second part names the ingredient.", "A colon introduces that explanation. A semicolon would need a complete sentence after it."]);
    q("b", "The expedition's lead scientist, a specialist in deep-sea ______ will pilot the submersible herself.", CONV,
      ["vents,", "vents", "vents;", "vents:"], ["\"A specialist in deep-sea vents\" is extra information that began with a comma.", "It must end with a comma too."]);
    q("b", "The poet ______ wrote the collection's opening sonnet was only nineteen at the time.", CONV,
      ["who", ", who", "who,", ", who,"], ["\"Who wrote the collection's opening sonnet\" tells which poet, so it is essential.", "Essential information takes no commas."]);
    q("b", "Sea otters wrap themselves in kelp before ______ keeps them from drifting away from their feeding grounds.", CONV,
      ["sleeping; this", "sleeping, this", "sleeping this", "sleeping. Which"], ["\"This keeps them from drifting…\" is a complete sentence.", "A semicolon joins two complete sentences. \"Which keeps…\" can't stand alone after a period."]);
    q("b", "The emergency kit includes a ______ and a roll of waterproof tape.", CONV,
      ["compass, a signal mirror,", "compass; a signal mirror,", "compass, a signal mirror;", "compass a signal mirror"], ["It's a simple list of three items.", "Separate them with commas."]);
    q("b", "The city's oldest bridge—built in 1889 and widened ______ carries more traffic today than its designers ever imagined.", CONV,
      ["twice—", "twice,", "twice", "twice;"], ["The extra information opened with a dash.", "It has to close with a dash as well."]);
    q("b", "Although the trail is only three miles ______ steep switchbacks make it a strenuous hike.", CONV,
      ["long, its", "long. Its", "long; its", "long its"], ["\"Although the trail is only three miles long\" can't stand alone.", "A dependent clause at the start is followed by a comma, not a period or semicolon."]);
    q("b", "The first prototype overheated within ______ the engineers redesigned the cooling system from scratch.", CONV,
      ["minutes; therefore,", "minutes, therefore,", "minutes therefore", "minutes, therefore"], ["Two complete sentences.", "\"Therefore\" can't join sentences with only a comma: use a semicolon before it and a comma after."]);
    q("b", "The researchers wondered whether the birds could recognize individual human ______", CONV,
      ["faces.", "faces?", "faces;", "faces:"], ["The sentence reports a question; it doesn't ask one.", "An indirect question ends with a period."]);
    q("b", "The discovery that some bacteria can digest ______ researchers looking for new ways to recycle.", CONV,
      ["plastic has encouraged", "plastic, has encouraged", "plastic has, encouraged", "plastic; has encouraged"], ["The subject is the whole phrase \"The discovery that some bacteria can digest plastic.\"", "Nothing separates a subject from its verb."]);

    /* ---- form, structure and sense ---- */
    q("f", "The collection of rare maps ______ on display in the library's east wing.", CONV,
      ["is", "are", "were", "have been"], ["The subject is \"collection,\" which is singular.", "\"Of rare maps\" is a phrase in between."]);
    q("f", "Each of the dancers ______ a solo in the second act.", CONV,
      ["performs", "perform", "are performing", "have performed"], ["\"Each\" is singular.", "Each … performs."]);
    q("f", "When the comet last passed Earth in 1986, astronomers ______ it with instruments that had not existed during its previous visit.", CONV,
      ["studied", "study", "will study", "have studied"], ["\"In 1986\" is a finished time in the past.", "That takes the simple past: studied."]);
    q("f", "A company that wants to keep its best employees must give ______ reasons to stay.", CONV,
      ["them", "it", "him", "one"], ["The pronoun stands for \"employees,\" which is plural.", "Them."]);
    q("f", "The two ______ findings were published in the same journal.", CONV,
      ["scientists'", "scientist's", "scientists", "scientists's"], ["There are two scientists, and the findings belong to them.", "Plural possessive: scientists'."]);
    q("f", "The museum will reopen ______ sculpture garden in May.", CONV,
      ["its", "it's", "their", "its'"], ["The garden belongs to the museum, which is singular.", "\"Its\" is the possessive. \"It's\" means \"it is.\""]);
    q("f", "Hoping to catch the early ferry, ______", CONV,
      ["Dana set three alarms before going to bed.", "three alarms were set by Dana before bed.", "Dana's alarms were set before going to bed.", "the alarms that Dana set numbered three."], ["The opening phrase describes someone who is hoping.", "That person, Dana, must come right after the comma. \"Dana's alarms\" puts the alarms there instead."]);
    q("f", "The engineers recommended ______ the bridge's steel cables every ten years.", CONV,
      ["replacing", "to replace", "replace", "replaced"], ["\"Recommend\" is followed by an -ing form.", "Recommended replacing."]);
    q("f", "Among the ruins ______ a mosaic floor that has kept nearly all of its original color.", CONV,
      ["lies", "lie", "are lying", "have lain"], ["The sentence is inverted: the subject, \"a mosaic floor,\" comes after the verb.", "Singular subject → lies."]);
    q("f", "The orchestra's new conductor, known for reviving forgotten works, ______ a symphony last performed in 1911.", CONV,
      ["has scheduled", "having scheduled", "scheduling", "to schedule"], ["The sentence needs a main verb for \"conductor.\"", "Only \"has scheduled\" can be one."]);
  }
});

/* ================= EXPRESSION OF IDEAS ================= */
Study.addUnit("satrw", {
  id: "ei", name: "Expression of Ideas (about 20%)", short: "Expression",
  sections: [
    {id:"tr", name:"Transitions"},
    {id:"rs", name:"Rhetorical Synthesis"}
  ],
  notes: {
    tr: [
      {sum:["Read the sentence before the blank and the sentence with it. Decide how they relate before looking at the choices.", "The main relationships: adding, contrasting, cause and effect, example, sequence, emphasis.", "If two choices mean the same thing (\"however\" and \"nevertheless\" as plain contrast), neither is likely to be the answer."]},
      {table:{head:["Relationship", "Transitions"], rows:[["Adding", "in addition, furthermore, moreover"], ["Contrast", "however, on the other hand, nevertheless, in contrast"], ["Result", "as a result, consequently, therefore, thus"], ["Example", "for example, for instance"], ["Emphasis", "indeed, in fact"], ["Sequence", "next, then, finally"]]}},
      {ex:{q:"The soil in the valley is unusually rich in minerals. ______ farms there produce far larger harvests.", a:["Rich soil is the cause; large harvests are the effect.", "As a result,"]}},
      {tip:"\"Nevertheless\" and \"even so\" mean \"in spite of that.\" Use them when the second sentence is surprising given the first: bamboo is a grass; nevertheless, it grows as tall as trees."},
      {check:[{q:"\"First the clay is shaped. ______ it is fired.\"", a:"Next, (a step in a sequence)."}]}
    ],
    rs: [
      {sum:["The question gives a list of notes and a goal. Every choice is true; only one does what the goal asks.", "Read the goal first and underline its key words: emphasize, contrast, introduce, present the results.", "Skip the notes if you're short on time. Check each choice against the goal alone."]},
      {ex:{q:"Goal: contrast the axolotl's status in the wild with its status in captivity.", a:["A contrast needs both sides in one sentence.", "\"Although the axolotl is critically endangered in the wild, it is common in laboratories and aquariums.\"", "A choice about its gills or its limbs is accurate but off the goal."]}},
      {p:"If the goal says the audience is **unfamiliar** with a person or thing, the answer should say who or what it is. If the goal says **emphasize** a detail, that detail should be the sentence's main point."},
      {check:[{q:"Goal: present a study's results. What must the answer contain?", a:"The outcome (the numbers or findings), not just the setup."}]}
    ]
  },
  problems(k){
    const q = make(k);
    /* ---- transitions ---- */
    q("tr", "The bridge was expected to take two years to build. ______ it opened after only fourteen months.", TRANS,
      ["However,", "Therefore,", "Similarly,", "For example,"], ["Expected: two years. Actual: fourteen months.", "That is a contrast."]);
    q("tr", "Regular exercise strengthens the heart. ______ it has been shown to improve mood and sleep.", TRANS,
      ["In addition,", "Nevertheless,", "As a result,", "In contrast,"], ["The second sentence adds more benefits.", "In addition,"]);
    q("tr", "The soil in the valley is unusually rich in minerals. ______ farms there produce far larger harvests than those in the hills.", TRANS,
      ["As a result,", "Even so,", "For instance,", "Likewise,"], ["Rich soil causes large harvests.", "Cause and effect: As a result,"]);
    q("tr", "Many birds use landmarks to navigate. Homing pigeons, ______ have been shown to follow highways and rivers.", TRANS,
      ["for example,", "however,", "in contrast,", "nevertheless,"], ["Pigeons following highways is a specific case of using landmarks.", "for example,"]);
    q("tr", "The author's research for the book was exhaustive. ______ she interviewed more than a hundred residents and read every issue of the town's newspaper.", TRANS,
      ["Indeed,", "However,", "Otherwise,", "Meanwhile,"], ["The second sentence backs up and strengthens the first.", "\"Indeed\" adds emphasis."]);
    q("tr", "First, the clay is shaped on the wheel and left to dry. ______ it is fired in a kiln at over a thousand degrees.", TRANS,
      ["Next,", "Instead,", "In other words,", "Still,"], ["These are steps in a process.", "Next,"]);
    q("tr", "Critics praised the film's cinematography. ______ they found its plot confusing.", TRANS,
      ["On the other hand,", "Consequently,", "In other words,", "For this reason,"], ["Praise, then a complaint.", "A contrast: On the other hand,"]);
    q("tr", "The storm knocked out power across the county. ______ schools were closed the following day.", TRANS,
      ["Consequently,", "Nonetheless,", "Conversely,", "Alternatively,"], ["The outage caused the closures.", "Consequently,"]);
    q("tr", "Bamboo is technically a grass. ______ some species grow as tall as trees and are used as building material.", TRANS,
      ["Nevertheless,", "Therefore,", "Likewise,", "For example,"], ["You wouldn't expect a grass to be tree-sized.", "\"In spite of that\": Nevertheless,"]);

    /* ---- rhetorical synthesis ---- */
    q("rs", NOTES + "• The Brooklyn Bridge opened in 1883.\n• It spans the East River in New York City.\n• Its main span is about 1,595 feet long.\n• When it opened, it was the longest suspension bridge in the world.\n• Emily Warren Roebling managed much of its construction after her husband, the chief engineer, fell ill.",
      "The student wants to emphasize Emily Warren Roebling's role. Which choice most effectively uses information from the notes to accomplish this goal?",
      ["After the chief engineer fell ill, Emily Warren Roebling managed much of the Brooklyn Bridge's construction.", "The Brooklyn Bridge, which spans the East River in New York City, has a main span that measures about 1,595 feet in length.", "When the Brooklyn Bridge opened in 1883, it was the longest suspension bridge anywhere in the world.", "The Brooklyn Bridge opened in 1883, after its chief engineer had fallen ill during its construction."],
      ["The goal is her role, so she should be the subject and her work the point.", "The last choice mentions the illness but leaves her out."]);
    q("rs", NOTES + "• The axolotl is a salamander native to lakes near Mexico City.\n• Unlike most salamanders, it keeps its gills and lives in water its whole life.\n• It can regrow lost limbs.\n• It is critically endangered in the wild.\n• It is common in laboratories and home aquariums.",
      "The student wants to contrast the axolotl's status in the wild with its status in captivity. Which choice most effectively uses information from the notes to accomplish this goal?",
      ["Although the axolotl is critically endangered in the wild, it is common in laboratories and aquariums.", "The axolotl, a salamander native to lakes near Mexico City, is able to regrow any of the limbs that it has lost.", "Unlike most salamanders, the axolotl keeps its gills and lives in the water for its whole life.", "The axolotl is critically endangered in the wild, where it is native to lakes near Mexico City."],
      ["A contrast needs both sides: wild and captivity.", "Only the first choice has both."]);
    q("rs", NOTES + "• Researchers studied whether background music affects reading speed.\n• 120 volunteers read the same article.\n• Half read in silence; half listened to instrumental music.\n• The silent group finished in an average of 6.1 minutes.\n• The music group finished in an average of 6.3 minutes.",
      "The student wants to present the study's results. Which choice most effectively uses information from the notes to accomplish this goal?",
      ["Volunteers who read in silence averaged 6.1 minutes, while those who heard music averaged 6.3 minutes.", "Researchers studied whether background music affects reading speed, using a total of 120 volunteers.", "In the study, half of the volunteers read in silence and half listened to some instrumental music.", "All 120 of the volunteers in the study read the same article, either in silence or with music on."],
      ["Results are what was found: the two average times.", "The other choices describe the question or the method."]);
    q("rs", NOTES + "• Mary Anning (1799–1847) was a fossil collector in Lyme Regis, England.\n• In 1811, she and her brother uncovered the first ichthyosaur skeleton to be correctly identified.\n• In 1823, she found the first complete plesiosaur skeleton.\n• As a woman, she was not allowed to join the Geological Society of London.",
      "The student wants to introduce Mary Anning to an audience unfamiliar with her. Which choice most effectively uses information from the notes to accomplish this goal?",
      ["Mary Anning was a nineteenth-century English fossil collector who found major marine reptile skeletons.", "In 1823, Anning found the first complete plesiosaur skeleton, twelve years after the ichthyosaur find.", "Anning was not allowed to join the Geological Society of London on the grounds that she was a woman.", "The ichthyosaur skeleton that Anning and her brother uncovered in 1811 was correctly identified."],
      ["An introduction says who she was and why she matters.", "The other choices assume the reader already knows her."]);
    q("rs", NOTES + "• Kintsugi is a Japanese method of repairing broken pottery.\n• Cracks are filled with lacquer mixed with powdered gold.\n• The repair is left visible instead of being hidden.\n• The method treats breakage as part of an object's history.",
      "The student wants to explain what sets kintsugi apart from ordinary repair. Which choice most effectively uses information from the notes to accomplish this goal?",
      ["Unlike repairs meant to be hidden, kintsugi highlights cracks by filling them with gold lacquer.", "Kintsugi is a Japanese method that is used for repairing pieces of pottery after they have been broken.", "In kintsugi, lacquer is mixed with powdered gold before it is applied to broken pottery.", "Kintsugi is a method of repair that was developed in Japan and that is used on pottery."],
      ["\"Sets apart\" calls for a comparison with ordinary repair.", "Only the first choice says how it differs: the repair is shown, not hidden."]);
    q("rs", NOTES + "• The Sahara is the largest hot desert on Earth.\n• Between about 11,000 and 5,000 years ago, it was much wetter.\n• During that period it held lakes, grasslands and rivers.\n• Rock art from the period shows cattle and swimmers.",
      "The student wants to give evidence that the Sahara was once wetter. Which choice most effectively uses information from the notes to accomplish this goal?",
      ["Rock art showing cattle and swimmers dates from a time when the Sahara held lakes and rivers.", "The Sahara, the largest hot desert on Earth, was much wetter thousands of years ago than now.", "The Sahara is the largest hot desert on Earth, and it has not always been as dry as it is today.", "Between about 11,000 and 5,000 years ago, the Sahara differed from the desert that exists now."],
      ["Evidence is something that shows the claim is true.", "The rock art is the evidence. The other choices only restate the claim."]);
  }
});
})();
