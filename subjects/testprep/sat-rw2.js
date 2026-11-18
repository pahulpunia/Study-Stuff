/* SAT Reading and Writing · more Expression of Ideas questions.
   Written for this site in the style of the digital SAT; none are copied from a real exam. */
(() => {
const SRC = "SAT style";
const make = k => (sec, stim, text, opts, why) => k.choice([sec], SRC, text, opts, opts[0], [].concat(why), {shuffle:true, stim});
const TRANS = "Which choice completes the text with the most logical transition?";
const NOTES = "While researching a topic, a student has taken the following notes:\n";
const RS = goal => `The student wants to ${goal}. Which choice most effectively uses information from the notes to accomplish this goal?`;

Study.extendUnit("satrw", "ei", {problems(k){
  const q = make(k);
  /* ---- transitions ---- */
  q("tr", "The town's population doubled between 1990 and 2010. ______ the number of public schools stayed the same, which led to crowded classrooms.", TRANS,
    ["However,", "For example,", "Similarly,", "In other words,"], ["The population grew, but the schools did not.", "That is a contrast: However,"]);
  q("tr", "Octopuses have no bones. ______ they can squeeze through any opening larger than their hard beak.", TRANS,
    ["As a result,", "Nevertheless,", "In contrast,", "Previously,"], ["Having no bones is what lets them squeeze through.", "Cause and effect: As a result,"]);
  q("tr", "Some deserts are covered in towering sand dunes. Others, ______ are mostly bare rock and gravel.", TRANS,
    ["however,", "therefore,", "for instance,", "in addition,"], ["Sand dunes versus bare rock is a contrast.", "however,"]);
  q("tr", "The novel was rejected by eleven publishers. ______ it went on to sell millions of copies.", TRANS,
    ["Even so,", "Thus,", "Likewise,", "For instance,"], ["Its success is surprising given the rejections.", "\"In spite of that\": Even so,"]);
  q("tr", "Honeybees share the location of food through a movement called the waggle dance. ______ the angle of the dance shows the direction of the food relative to the sun.", TRANS,
    ["Specifically,", "However,", "In contrast,", "Regardless,"], ["The second sentence gives a precise detail about how the dance works.", "Specifically,"]);
  q("tr", "The first telescopes magnified objects only about three times. ______ Galileo's improved telescope magnified objects about twenty times, allowing him to see the moons of Jupiter.", TRANS,
    ["By contrast,", "Similarly,", "As a result,", "For example,"], ["Three times versus twenty times is a contrast.", "By contrast,"]);
  q("tr", "Polar bears look white, but their skin is actually black. ______ their fur is not truly white either; each hair is transparent and hollow.", TRANS,
    ["Moreover,", "Therefore,", "Instead,", "For example,"], ["The second sentence adds another surprising fact of the same kind.", "Moreover,"]);

  /* ---- rhetorical synthesis ---- */
  q("rs", NOTES + "• The Svalbard Global Seed Vault is on a Norwegian island in the Arctic.\n• It stores seeds from around the world.\n• It opened in 2008.\n• It is built into a mountain, where frozen ground keeps the seeds cold.\n• It is meant to protect crop diversity in case of disasters.",
    RS("explain the purpose of the Svalbard Global Seed Vault"),
    ["The Svalbard vault stores seeds from around the world to protect crop diversity in case of disaster.", "The Svalbard Global Seed Vault, which opened in 2008, is on a Norwegian island in the Arctic.", "The vault is built into a mountain, where the frozen ground keeps all of the stored seeds cold.", "Seeds from around the world are kept in a vault that opened on an Arctic island in 2008."],
    ["A purpose is what something is for.", "Only the first choice says why the vault exists."]);
  q("rs", NOTES + "• Venus and Earth are similar in size.\n• Venus's surface temperature is about 465°C.\n• Earth's average surface temperature is about 15°C.\n• Venus has a thick carbon dioxide atmosphere that traps heat.",
    RS("emphasize a difference between Venus and Earth"),
    ["Although Venus and Earth are similar in size, Venus is about 465°C at the surface, while Earth averages 15°C.", "Venus and Earth are two planets that are very similar to each other in their overall size.", "Venus has a thick atmosphere made mostly of carbon dioxide, a gas that traps heat near the surface.", "Because its thick atmosphere traps heat, the surface of Venus reaches a temperature of about 465°C."],
    ["A difference needs both planets in the sentence.", "The last choice is only about Venus."]);
  q("rs", NOTES + "• A research team tested whether trees cool city streets.\n• The team measured summer air temperatures on 40 streets.\n• Streets with tree cover averaged 3°C cooler than streets without it.\n• Shade and water released by leaves both lower air temperature.",
    RS("present the study's findings"),
    ["Streets with tree cover averaged 3°C cooler than streets without it, the team found.", "A research team set out to test whether trees help to cool the streets of a city.", "To find out, the team measured summer air temperatures on a total of 40 streets.", "Trees release water from their leaves, and they also provide shade to the street."],
    ["Findings are what the study discovered: the 3°C difference.", "The other choices give the question, the method, or background."]);
  q("rs", NOTES + "• Katherine Johnson (1918–2020) was a mathematician at NASA.\n• Her calculations helped plan the paths of early American spaceflights.\n• Before John Glenn's 1962 orbital flight, he asked that she check the computer's numbers.\n• She received the Presidential Medal of Freedom in 2015.",
    RS("introduce Katherine Johnson to an audience unfamiliar with her"),
    ["Katherine Johnson was a NASA mathematician whose calculations helped plan early American spaceflights.", "In 2015, Johnson received the Presidential Medal of Freedom, one of the nation's highest honors.", "Before his 1962 orbital flight, John Glenn asked that Johnson check the computer's numbers.", "Johnson, who lived from 1918 to 2020, was honored with a medal in the year 2015."],
    ["An introduction tells who she was and why she matters.", "The other choices assume the reader already knows her."]);
  q("rs", NOTES + "• Hummingbirds can hover in place by moving their wings in a figure-eight pattern.\n• Hawk moths also hover in front of flowers while feeding.\n• Hummingbirds are birds; hawk moths are insects.\n• Both feed on nectar using long tongues or mouthparts.",
    RS("emphasize a similarity between hummingbirds and hawk moths"),
    ["Like hummingbirds, hawk moths hover in front of flowers while they feed on nectar.", "Hummingbirds are birds, whereas the animals known as hawk moths are insects.", "Hummingbirds hover by moving their wings in a figure-eight pattern in the air.", "Hawk moths are a kind of insect that feeds on the nectar found in flowers."],
    ["A similarity needs both animals and something they share.", "The second choice states a difference."]);
  q("rs", NOTES + "• Petra is an ancient city in present-day Jordan.\n• It was built by the Nabataeans more than 2,000 years ago.\n• Many of its buildings were carved directly into sandstone cliffs.\n• It was a major stop on trade routes for incense and spices.",
    RS("explain why Petra was important in the ancient world"),
    ["Petra was a major stop on ancient trade routes that carried incense and spices.", "Petra was built by the Nabataeans in present-day Jordan over 2,000 years ago.", "Many of the buildings in Petra were carved directly into its sandstone cliffs.", "The ancient city of Petra is located in the country that is now called Jordan."],
    ["Importance is about the role it played.", "Its place on trade routes explains why it mattered."]);
  q("rs", NOTES + "• Sea otters crack open shellfish with rocks.\n• Some crows bend twigs into hooks to pull insects out of logs.\n• Chimpanzees use sticks to fish termites out of their mounds.\n• Each of these animals uses an object to get food.",
    RS("make a generalization about the animals in the notes"),
    ["Sea otters, crows, and chimpanzees all use objects as tools to get food.", "Sea otters break open shellfish by striking them against rocks.", "Some crows can bend twigs into hooks to pull insects from logs.", "Chimpanzees push sticks into termite mounds to fish out termites."],
    ["A generalization covers all the animals at once.", "The other choices each describe one animal."]);
}});
})();
