/* ACT English · more Production of Writing and Conventions questions.
   Written for this site in the style of the test; none are copied from a real exam. */
(() => {
const SRC = "ACT style";
const NC = "NO CHANGE";
const BEST = "Which choice is the best version of the underlined part?";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});

Study.extendUnit("acte", "pow", {problems(k){
  const q = make(k);
  q("d", "The community garden began as an empty lot. Neighbors cleared the trash, built raised beds, and planted tomatoes and beans the first spring.",
    "The writer is considering adding this sentence: “Tomatoes are classified by botanists as fruits, not vegetables.” Should the writer add it?",
    ["No, because it shifts the focus away from how the garden began", "Yes, because it corrects a common mistake about tomatoes", "Yes, because it explains why the neighbors chose to plant tomatoes", "No, because it contradicts the claim that the lot was empty"], ["The paragraph tells how the garden started.", "A botany fact about tomatoes is off topic."]);
  q("d", "Hummingbirds have remarkable metabolisms. ______",
    "Which choice supports the first sentence with the most specific detail?",
    ["Their hearts can beat more than a thousand times per minute in flight.", "They are interesting birds that many people enjoy watching in summer.", "Scientists have studied many birds, including the hummingbird, for years.", "Some people hang feeders in their yards to attract more hummingbirds."], ["A specific detail about metabolism: a measurable fact.", "The heart rate is the only one."]);
  q("d", "The science museum opened in 1964 in a former train station. Its first director was a retired physics teacher, and its first exhibit was a working model of a steam engine.",
    "Suppose the writer's goal was to persuade readers to visit the science museum. Would this paragraph accomplish that goal?",
    ["No, because it gives the museum's history, not reasons to visit", "Yes, because it shows that the museum has a long and interesting history", "Yes, because it describes an exhibit that visitors today would enjoy seeing", "No, because it criticizes the museum's choice of its first director"], ["Persuading needs reasons to go.", "This paragraph only reports how the museum began."]);
  q("d", "______ Each fall, the pond freezes from the edges inward, and by January the ice is thick enough for skaters.",
    "Which choice most effectively introduces the paragraph?",
    ["Winter transforms the pond behind our school.", "Ice skating was invented thousands of years ago.", "Many towns have ponds that are used for fishing.", "Water expands as it turns into ice in winter."], ["The paragraph describes the pond freezing over.", "The introduction should set up that change."]);
  q("d", "Mei's first attempt at the bread was a disaster: the loaf came out flat and dense. __She had used yeast that had expired months earlier.__ Her second attempt rose perfectly.",
    "The writer is considering deleting the underlined sentence. Should it be kept or deleted?",
    ["Kept, because it explains why the first loaf failed", "Deleted, because it repeats a detail stated earlier", "Deleted, because it shifts the focus to the second attempt", "Kept, because it describes how the second loaf was made"], ["Without it, readers don't know why the loaf was flat.", "It explains the failure, so keep it."]);
  q("d", "The marathon route winds through every neighborhood in the city. ______",
    "Which choice best concludes the paragraph by emphasizing the size of the event?",
    ["Each year, more than fifty thousand runners cross the finish line.", "Runners are advised to drink water at every station along the route.", "The first marathon was run in ancient Greece by a messenger.", "Some runners train for months before they try a full marathon."], ["The goal is the event's size.", "Fifty thousand runners shows it."]);
  q("o", "The forecast called for sun. __As a result,__ we packed umbrellas just in case.", BEST,
    ["Even so,", NC, "Similarly,", "For example,"], ["Packing umbrellas despite a sunny forecast is a contrast.", "\"Even so\" means in spite of that."]);
  q("o", "Wolves were reintroduced to Yellowstone in 1995. __Previously,__ elk browsed less heavily along the rivers, and willows began to recover.", BEST,
    ["Afterward,", NC, "Nevertheless,", "For instance,"], ["The changes came after the wolves returned.", "Afterward,"]);
  q("o", "Many athletes follow strict routines before a game. Our team's goalie, __however,__ eats the same breakfast and ties her left skate first every time.", BEST,
    ["for example,", NC, "as a result,", "in other words,"], ["The goalie is a case of an athlete with a routine.", "for example,"]);
  q("o", "[1] Finally, the seedlings were moved outdoors in May. [2] In February, Jo planted tomato seeds in small pots. [3] By March, the seedlings had grown their first true leaves. [4] In April, she moved them to larger containers.",
    "Which order of the sentences is most logical?", ["2, 3, 4, 1", "1, 2, 3, 4", "2, 4, 3, 1", "3, 2, 4, 1"], ["Follow the months: February, March, April, May.", "\"Finally\" belongs at the end."]);
  q("o", "[1] The town held its first film festival in 2010. [2] Only three hundred people attended. [3] This year, more than ten thousand people came. [4] Most of them watched the films in a borrowed church hall.",
    "Where should Sentence 4 be placed?", ["After Sentence 2", "Where it is now", "Before Sentence 1", "After Sentence 3"], ["\"Most of them\" fits the small first crowd that could fit in a borrowed hall.", "It belongs right after Sentence 2."]);
  q("o", "A paragraph ends: “…and so the old mill sat empty for thirty years.” The next paragraph begins: “______ a group of artists bought the building and turned it into studios.”",
    "Which choice provides the most effective transition between the paragraphs?", ["In 2015, however,", "For example, though,", "In a similar way,", "In addition to this,"], ["The new paragraph reverses the empty years.", "A time marker plus a contrast word fits: In 2015, however,"]);
}});

Study.extendUnit("acte", "cse", {problems(k){
  const q = make(k);
  q("p", "The team's star __player, Jordan__ scored thirty points.", BEST, ["player, Jordan,", NC, "player Jordan,", "player; Jordan"], ["\"Jordan\" is extra information about the one star player.", "It needs a comma on both sides."]);
  q("p", "My brother loves three things: __pizza, video games and, sleeping__.", BEST, ["pizza, video games, and sleeping", NC, "pizza video games and sleeping", "pizza; video games; and, sleeping"], ["Commas separate list items.", "No comma goes after \"and.\""]);
  q("p", "The __childrens'__ books were shelved near the window.", BEST, ["children's", NC, "childrens", "childrens's"], ["\"Children\" is already plural.", "Add 's: children's."]);
  q("p", "We had one goal for the __day reaching__ the summit before noon.", BEST, ["day: reaching", NC, "day, and reaching", "day; reaching"], ["A complete sentence comes first, then what the goal was.", "A colon introduces that explanation."]);
  q("g", "Each of the paintings __were__ restored before the exhibit.", BEST, ["was", NC, "are", "have been"], ["The subject is \"each,\" which is singular.", "Each … was."]);
  q("g", "Between you and __I__, the plan has a flaw.", BEST, ["me", NC, "myself", "mine"], ["\"Between\" is a preposition, so it takes the object form.", "Between you and me."]);
  q("g", "The new phone is __more faster__ than the old one.", BEST, ["faster", NC, "most fast", "fastest"], ["\"Faster\" already means more fast.", "Comparing two things: faster."]);
  q("s", "__Covered in mud, Dad hosed off the dog in the yard.__", "Which choice is the best version of the underlined sentence?",
    ["Dad hosed off the dog, which was covered in mud, in the yard.", NC, "Covered in mud, the yard is where Dad hosed off the dog.", "Dad, covered in mud, the dog was hosed off in the yard."], ["As written, it says Dad was covered in mud.", "Put the description next to the dog."]);
  q("s", "The class learned to __identify birds, track animals, and how to build a shelter__.", BEST,
    ["identify birds, track animals, and build a shelter", NC, "identifying birds, tracking animals, and how to build a shelter", "identify birds, tracking animals, and build a shelter"], ["Items in a list should match in form.", "identify, track, build."]);
  q("s", "The museum was __crowded, we__ decided to come back another day.", BEST, ["crowded, so we", NC, "crowded we", "crowded, we,"], ["Two complete sentences can't be joined by a comma alone.", "Add a joining word: crowded, so we."]);
}});
})();
