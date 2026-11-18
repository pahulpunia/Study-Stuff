/* SAT Reading and Writing · more Conventions, Craft & Structure, and Information & Ideas questions.
   Written for this site in the style of the digital SAT; none are copied from a real exam. */
(() => {
const SRC = "SAT style";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});
const WORD = "Which choice completes the text with the most logical and precise word or phrase?";
const CONV = "Which choice completes the text so that it conforms to the conventions of Standard English?";
const LOGIC = "Which choice most logically completes the text?";
const FUNC = "Which choice best describes the function of the underlined sentence in the text as a whole?";

Study.extendUnit("satrw", "sec", {problems(k){
  const q = make(k);
  /* ---- boundaries ---- */
  q("b", "The team tested the new vaccine in three ______ Brazil, Kenya, and Vietnam.", CONV,
    ["countries:", "countries;", "countries, these being", "countries"], ["A complete sentence comes before the blank, and a list comes after.", "A colon introduces the list. A semicolon needs a complete sentence on both sides."]);
  q("b", "Marie Tharp's maps of the ocean floor revealed a deep rift ______ helped convince geologists that the continents move.", CONV,
    ["valley, which", "valley which,", "valley; which", "valley. Which"], ["\"Which helped convince…\" adds extra information about the valley.", "It needs a comma before it, and it can't stand alone after a period or semicolon."]);
  q("b", "The novel's main ______ a retired lighthouse keeper named Ada, tells the story from her kitchen window.", CONV,
    ["character,", "character", "character;", "character:"], ["\"A retired lighthouse keeper named Ada\" is extra information that ends with a comma.", "It must also start with one."]);
  q("b", "The new library has no catalog ______ instead, visitors find books by scanning a shelf map on their phones.", CONV,
    ["desk;", "desk,", "desk", "desk, and,"], ["Both sides are complete sentences, and \"instead\" can't join them.", "A semicolon goes before it."]);
  q("b", "In 1903 the Wright brothers' first powered flight lasted just twelve ______ fewer than seventy years later, astronauts walked on the Moon.", CONV,
    ["seconds;", "seconds,", "seconds", "seconds, which"], ["Both sides of the blank are complete sentences.", "A semicolon joins them. A comma alone would be a comma splice."]);
  q("b", "The study's two ______ Dr. Okafor and Dr. Lindqvist, presented their results at a conference in Oslo.", CONV,
    ["authors,", "authors", "authors;", "authors:"], ["The names are extra information that ends with a comma.", "Open it with a comma too."]);
  q("b", "Glass frogs have nearly transparent ______ observers can watch their hearts beating through their skin.", CONV,
    ["bellies;", "bellies,", "bellies", "bellies, being that"], ["Both sides are complete sentences.", "A semicolon can join them; a comma alone can't."]);
  q("b", "What the archaeologists found beneath the temple ______ a set of bronze tools older than any yet discovered in the region.", CONV,
    ["floor was", "floor, was", "floor; was", "floor: was"], ["The subject is the whole clause \"What the archaeologists found beneath the temple floor.\"", "No punctuation goes between a subject and its verb."]);

  /* ---- form, structure and sense ---- */
  q("f", "Neither the coach nor the players ______ expecting the storm to end the game early.", CONV,
    ["were", "was", "is", "has been"], ["With neither … nor, the verb agrees with the closer subject.", "\"Players\" is plural → were."]);
  q("f", "The list of approved field trips, which the principal posted on Monday, ______ three new museums.", CONV,
    ["includes", "include", "are including", "have included"], ["The subject is \"list,\" which is singular.", "Skip the phrases in between: The list … includes."]);
  q("f", "By the time the rescue team arrived, the hikers ______ for nearly two days.", CONV,
    ["had been waiting", "have been waiting", "are waiting", "will wait"], ["The waiting happened before another past event (the team arriving).", "That calls for the past perfect: had been waiting."]);
  q("f", "Every spring, the cranes return to the same marsh, where ______ build nests from reeds and grass.", CONV,
    ["they", "it", "she", "one"], ["The pronoun stands for \"cranes,\" which is plural.", "They."]);
  q("f", "The museum's collection of ______ includes masks, drums, and woven baskets from more than forty cultures.", CONV,
    ["artifacts", "artifact's", "artifacts'", "artifacts's"], ["Nothing belongs to the artifacts here.", "A plain plural: artifacts."]);
  q("f", "Walking through the old market, ______", CONV,
    ["Leila noticed the smell of cardamom and fresh bread.", "the smell of cardamom and fresh bread reached Leila.", "cardamom and fresh bread were what Leila smelled.", "there was a smell of cardamom and fresh bread."], ["The opening phrase describes someone walking.", "That person, Leila, must come right after the comma."]);
  q("f", "The committee will announce ______ decision after reviewing all of the applications.", CONV,
    ["its", "it's", "their's", "its'"], ["The committee is one group, so use the singular possessive.", "\"Its\" shows possession; \"it's\" means \"it is.\""]);
  q("f", "The architect insisted that the windows ______ placed to catch the morning light.", CONV,
    ["be", "are", "were being", "will be"], ["After \"insisted that,\" a demand uses the base form of the verb.", "The windows be placed."]);
  q("f", "Each of the three bridges across the river ______ a different style of design.", CONV,
    ["reflects", "reflect", "are reflecting", "have reflected"], ["\"Each\" is singular.", "Each … reflects."]);
}});

Study.extendUnit("satrw", "cs", {problems(k){
  const q = make(k);
  q("w", "Although the senator's speech was praised for its eloquence, critics noted that it was ______ on details, offering few specific proposals.", WORD,
    ["thin", "dense", "generous", "insistent"], ["\"Although\" sets up a contrast with the praise.", "\"Few specific proposals\" means it lacked details: thin."]);
  q("w", "The biologist's findings were ______: labs in four countries repeated her experiment and got the same results.", WORD,
    ["robust", "tentative", "obscure", "controversial"], ["Results that hold up when others repeat the work are strong and reliable.", "Robust."]);
  q("w", "Rather than ______ the old factory, the city converted it into apartments, keeping its brick walls and tall windows.", WORD,
    ["demolish", "preserve", "restore", "admire"], ["\"Rather than\" sets up the opposite of keeping the building.", "Demolish."]);
  q("w", "The ancient city of Çatalhöyük had no streets; residents ______ their homes through openings in the roofs.", WORD,
    ["entered", "abandoned", "decorated", "designed"], ["With no streets, people had to get into houses another way.", "Entered."]);
  q("w", "Far from being ______, the desert at night teems with life, as foxes, owls, and insects emerge once the heat fades.", WORD,
    ["barren", "crowded", "noisy", "vast"], ["\"Far from\" means the opposite of what follows.", "The opposite of teeming with life is barren."]);
  q("t", "Many people assume that sharks must swim constantly in order to breathe. __This is true of some species, such as the great white.__ Others, like the nurse shark, can rest on the seafloor while pumping water over their gills.", FUNC,
    ["It partly confirms a common belief before the text limits it", "It introduces the main claim the text goes on to prove", "It offers a counterexample to the claim about nurse sharks", "It explains how sharks pump water over their gills"], ["The sentence agrees the belief holds for some sharks.", "The next sentence shows it doesn't hold for all of them."]);
  q("t", "In her novel, the author never describes the main character's face. Instead, she describes how other characters react when they see her: a shopkeeper stops mid-sentence, a child stares, an old friend looks away.", "Which choice best describes the overall structure of the text?",
    ["It names a choice the author made, then gives examples of what she does instead", "It describes a character's appearance and then explains why the other characters dislike her", "It summarizes a novel's plot and then offers an evaluation of its ending", "It compares two novels that describe their main characters differently"], ["First: she never describes the face.", "Then: examples of the reactions she describes instead."]);
  q("t", "Before refrigeration, people in cold climates cut blocks of ice from frozen lakes each winter and packed them in sawdust inside thick-walled icehouses. Stored this way, the ice often lasted through the summer, keeping food cool for months.", "Which choice best states the main purpose of the text?",
    ["To describe how ice was stored before refrigeration", "To argue that icehouses worked better than refrigerators", "To explain why lakes freeze over in cold climates", "To compare the kinds of sawdust used in icehouses"], ["The text explains a method: cutting, packing and storing ice.", "It makes no argument or comparison."]);
  q("x", "**Text 1**\nSome linguists argue that babies learn language mainly by imitating adults, copying the words and sounds they hear most often.\n\n**Text 2**\nResearchers have observed that young children often produce forms they have never heard, such as “goed” or “mouses.” These errors suggest that children are working out rules, such as adding -ed for the past tense, and applying them on their own.",
    "Based on the texts, how would the researchers in Text 2 most likely respond to the linguists in Text 1?",
    ["By arguing that imitation alone cannot explain the errors children make", "By agreeing that children mostly copy the words they hear most often", "By claiming that adults also commonly say words like “goed” and “mouses”", "By noting that babies learn language mainly from other children"], ["Children can't be imitating “goed” because adults don't say it.", "So Text 2 suggests imitation isn't the whole story."]);
  q("x", "**Text 1**\nFor years, scientists believed that the giant panda's diet of bamboo provided barely enough energy to survive, which is why pandas move slowly and rest so often.\n\n**Text 2**\nA recent study found that pandas have unusually low levels of thyroid hormone and smaller-than-expected brains, livers and kidneys, all of which reduce the energy their bodies use. The authors conclude that pandas' low energy use is built into their bodies, not simply a response to a poor diet.",
    "Based on the texts, the authors of the study in Text 2 would most likely say that the view in Text 1",
    ["overlooks physical traits that keep pandas' energy use low", "correctly explains why pandas move slowly and rest often", "wrongly assumes that pandas eat mostly bamboo in the wild", "ignores the energy pandas gain from eating meat"], ["Text 1 credits the diet alone.", "Text 2 points to hormones and organ size, which Text 1 leaves out."]);
}});

Study.extendUnit("satrw", "ii", {problems(k){
  const q = make(k);
  q("c", "The Dust Bowl of the 1930s is often blamed on drought alone, but historians point to farming practices as well. During the 1910s and 1920s, farmers plowed up millions of acres of prairie grass to plant wheat. The grass's deep roots had held the soil in place; without them, the dry topsoil blew away in enormous storms.",
    "Which choice best states the main idea of the text?",
    ["Farming practices, not just drought, helped cause the Dust Bowl", "Prairie grass has deeper roots than most crops farmers plant", "Wheat prices rose sharply during the 1910s and 1920s", "The Dust Bowl storms were the worst in American history"], ["The text's first sentence states the claim: drought plus farming practices.", "The rest explains how plowing removed the roots that held the soil."]);
  q("c", "Grandpa Ruiz kept every key he had ever owned on a ring by the door: keys to apartments he had left, cars long since sold, a mailbox in a town he could no longer name. When I asked why, he jingled them and said that each one still opened something, just not anything I could see.",
    "According to the text, what is true about the keys?",
    ["Many open places or things he no longer has", "He still uses every one of them almost every day", "He found them in a town where he once lived", "He plans to give all of them to the narrator"], ["Apartments he left, cars he sold, a mailbox in a forgotten town.", "They open nothing he still has."]);
  q("e", "A student researching urban heat compared average summer afternoon temperatures in four neighborhoods.\n\n**Tree cover · average temperature**\nAlder Park: 42% · 29°C\nBrookside: 30% · 31°C\nCentral: 12% · 35°C\nDocklands: 5% · 36°C\n\nThe student claims that neighborhoods with more tree cover tend to be cooler.",
    "Which choice most effectively uses data from the table to support the student's claim?",
    ["Alder Park had 42% tree cover and averaged 29°C, while Docklands had 5% and averaged 36°C.", "Central had 12% tree cover, which was more than Docklands, with only 5% tree cover.", "Brookside averaged 31°C on summer afternoons, while Central averaged 35°C.", "Across the four neighborhoods, average summer temperatures ranged from 29°C to 36°C."], ["The claim links two things: tree cover and temperature.", "Only the first choice gives both for neighborhoods at each end."]);
  q("e", "Researchers gave participants a list of 40 words, let them sleep for different amounts of time, and then tested how many words they recalled.\n\n**Hours of sleep · average words recalled**\n4 hours: 18\n6 hours: 24\n8 hours: 31\n10 hours: 30\n\nThe researchers concluded that recall improved with more sleep up to a point, after which additional sleep made little difference.",
    "Which choice best describes data from the table that support the researchers' conclusion?",
    ["Recall rose from 18 to 31 words between 4 and 8 hours, then stayed about the same at 10 hours.", "Participants who slept 4 hours recalled 18 words, fewer than any other group in the study.", "Participants who slept 10 hours recalled 30 of the 40 words on the memory test.", "Participants who slept 6 hours before taking the test recalled 24 words on average."], ["The conclusion has two parts: improvement, then leveling off.", "The first choice shows both."]);
  q("e", "A historian argues that the printing press spread new ideas in Europe mainly because printed books were far cheaper than hand-copied ones.",
    "Which finding, if true, would most directly support the historian's argument?",
    ["Book ownership rose sharply among merchants and artisans as prices fell after 1450", "Many early printed books were religious texts written in Latin for use in churches", "Some scribes kept copying books by hand for wealthy patrons well into the 1500s", "The first printing presses in Europe were built in cities along major rivers"], ["The argument is about price.", "If cheaper books reached new groups of readers, price helped ideas spread."]);
  q("i", "In a study of honeybee hives, researchers found that hives with more genetically diverse workers kept their internal temperature more stable than hives with less diverse workers. Workers with different genes begin fanning their wings to cool the hive at slightly different temperatures, so ______", LOGIC,
    ["a diverse hive responds to heat gradually, not all at once", "genetically similar workers never fan their wings to cool the hive", "diverse hives are always warmer than less diverse hives", "bees fan their wings only when the hive is too cold"], ["If workers start fanning at different temperatures, more join in as it gets hotter.", "That gives a gradual response and a steadier temperature."]);
  q("i", "Some ancient Roman concrete structures have survived two thousand years in seawater, while modern concrete in seawater often cracks within decades. Analysis shows that seawater reacting with volcanic ash in the Roman mix slowly forms new minerals that fill tiny cracks. This suggests that ______", LOGIC,
    ["contact with seawater helps Roman concrete stay strong over time", "Roman builders avoided using concrete anywhere near the sea", "modern concrete contains more volcanic ash than Roman concrete", "seawater dissolves volcanic ash faster than other materials"], ["The seawater reaction fills cracks.", "So the sea actually helps the Roman concrete last."]);
  q("i", "In many folktales, a character who is kind to a stranger is later rewarded, often when the stranger turns out to be powerful in disguise. Scholars note that such tales were often told in communities where travelers depended on hospitality to survive. The tales may therefore have served to ______", LOGIC,
    ["encourage generosity toward strangers", "warn listeners never to trust travelers", "explain why powerful people wore disguises", "teach listeners how to survive traveling alone"], ["Kindness to strangers gets rewarded in the stories.", "Where travelers needed hospitality, the tales would encourage it."]);
}});
})();
