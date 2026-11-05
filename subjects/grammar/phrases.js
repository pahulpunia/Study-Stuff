/* English Grammar · Phrases (gerund, participial, infinitive, prepositional, appositive; commas and modifiers)
   Source: class slideshow "Phrases". Underlined phrases use __double underscores__. */
(() => {
const GF = ["Subject", "Direct object", "Indirect object", "Predicate noun", "Object of preposition", "Appositive"];
const IF = ["Subject", "Direct object", "Predicate noun", "Adjective", "Adverb"];
const PT = ["Gerund", "Participial", "Infinitive", "Prepositional", "Appositive"];
const ING = ["Gerund (used as a noun)", "Participle (used as an adjective)", "Part of the verb (helping verb + -ing)"];
const pick = a => a[Math.floor(Math.random() * a.length)];
const capF = s => s.charAt(0).toUpperCase() + s.slice(1);

const GER_WHY = {
  "Subject": "It's the subject: it's who or what the sentence is about, and it comes before the verb.",
  "Direct object": "It's the direct object: it answers \"what?\" after an action verb.",
  "Indirect object": "It's the indirect object: it comes between the verb and the direct object and tells to or for what something is done.",
  "Predicate noun": "It's a predicate noun: it follows a linking verb (is, was) and renames the subject.",
  "Object of preposition": "It's the object of the preposition: it comes right after a preposition (about, for, by, of…).",
  "Appositive": "It's an appositive: it sits next to a noun, set off by commas, and renames it."
};
const INF_WHY = {
  "Subject": "It's the subject: it does the job of a noun before the verb.",
  "Direct object": "It's the direct object: it answers \"what?\" after the action verb.",
  "Predicate noun": "It's a predicate noun: it follows a linking verb and renames the subject.",
  "Adjective": "It's an adjective: it describes a noun and answers \"which one?\" or \"what kind?\"",
  "Adverb": "It's an adverb: it modifies a verb or an adjective and usually answers \"why?\""
};

Study.addUnit("grammar", {
  id: "ph",
  name: "Phrases",
  short: "Phrases",
  sections: [
    {id:"ger", name:"Gerund Phrases"},
    {id:"part", name:"Participial Phrases"},
    {id:"inf", name:"Infinitive Phrases"},
    {id:"prep", name:"Prepositional & Appositive Phrases"},
    {id:"mod", name:"Commas & Modifiers"}
  ],

  notes: {
    "ger": [
      {p:"A **phrase** is a group of related words that works as one part of speech. A phrase does **not** have both a subject and a verb (that would make it a clause)."},
      {p:"A **gerund** is a verb ending in **-ing** that's used as a **noun**. A **gerund phrase** is the gerund plus the words that go with it. Anything a noun can do, a gerund phrase can do."},
      {table:{head:["Job", "Example"], rows:[
        ["Subject", "__Swimming alone__ is dangerous."],
        ["Direct object", "I love __swimming in the ocean__."],
        ["Indirect object", "They make __jogging__ a priority."],
        ["Predicate noun", "An enjoyable pastime is __swimming in the ocean__."],
        ["Object of preposition", "I got stronger by __swimming in the ocean__."],
        ["Appositive", "This sport, __competition swimming__, is fun to watch."]
      ]}},
      {h:"How to tell the jobs apart"},
      {steps:["Comes before the verb and the sentence is about it → **subject**.",
        "Follows an action verb and answers \"what?\" → **direct object**.",
        "Follows a linking verb (is, was, are) and renames the subject → **predicate noun**.",
        "Comes right after a preposition (about, for, by, of, before) → **object of the preposition**.",
        "Comes between the verb and another object (gave __running__ a chance) → **indirect object**.",
        "Set off by commas next to a noun it renames → **appositive**."]},
      {warn:"Not every -ing word is a gerund. In \"Robert is __drinking coffee__,\" drinking is part of the verb (is drinking). In \"The girl __playing the piano__ is my friend,\" playing describes girl, so it's a participle."},
      {tip:"Quick test: if you can swap the phrase for \"it\" or \"something,\" it's a gerund. \"I love __swimming__\" → \"I love it.\""}
    ],
    "part": [
      {p:"A **participial phrase** works as an **adjective**: it describes a noun or pronoun. The participle often ends in **-ing, -ed, -n, -t,** or **-d** (running, built, broken, lost, said)."},
      {table:{head:["Participle with…", "Example"], rows:[
        ["a prepositional phrase", "The pool __built in our yard__ is 30 feet long. (describes pool)"],
        ["an adverb", "__Landing roughly__, the plane glided to a stop. (describes plane)"],
        ["a noun complement", "The girl __playing the piano__ is my friend. (describes girl)"]
      ]}},
      {h:"Gerund or participle?"},
      {p:"Both can end in -ing. Ask what the phrase is doing: if it **names a thing** (works as a noun), it's a gerund. If it **describes a noun**, it's a participle."},
      {ex:{q:"__Playing the piano__ is fun. / The girl __playing the piano__ is my friend.", a:["First: names an activity, the subject → gerund.", "Second: tells which girl → participle."]}},
      {tip:"A participial phrase at the start of a sentence describes the subject that comes right after the comma."}
    ],
    "inf": [
      {p:"An **infinitive** is **to + the base form of a verb** (to run, to see). An **infinitive phrase** can work as a **noun**, an **adjective**, or an **adverb**."},
      {table:{head:["Job", "Example"], rows:[
        ["Subject (noun)", "__To reach this conclusion__ took a lot of study."],
        ["Direct object (noun)", "I need __to reach the top shelf__."],
        ["Predicate noun (noun)", "Her goal is __to reach 30 push-ups__."],
        ["Adjective", "Elena is a person __to see about stamp collecting__. (describes person)"],
        ["Adverb", "Mary saved money __to buy a bike__. (tells why she saved)"]
      ]}},
      {steps:["Before the verb, doing the noun's job → **subject**.",
        "After an action verb, answers \"what?\" (wants, needs, hopes, decided) → **direct object**.",
        "After a linking verb, renames the subject → **predicate noun**.",
        "Right after a noun, tells which one or what kind (a place __to eat__) → **adjective**.",
        "Tells why, or follows an adjective (happy __to help__) → **adverb**."]},
      {warn:"\"To\" + a noun is a prepositional phrase, not an infinitive: __to the store__, __to Sam__. An infinitive needs a verb after to: __to go__."}
    ],
    "prep": [
      {p:"A **prepositional phrase** starts with a preposition and ends with a noun or pronoun called the **object of the preposition**. It works as an adjective or an adverb, often showing position or direction."},
      {table:{head:["Used as", "Example"], rows:[
        ["Adjective (describes a noun)", "A story __in the newspaper__ described her life."],
        ["Adverb (describes a verb)", "The story begins __in Canada__."],
        ["Adverb (describes an adjective)", "The trees were green __on top__."]
      ]}},
      {h:"Appositive phrases"},
      {p:"An **appositive phrase** is a noun phrase that renames or explains the noun right next to it. It's often set off with commas, and it has **no verb**."},
      {ex:{q:"Mary, __a real sleepy head__, can't stay up late. / Mary, __who is a sleepy head__, can sleep anytime.", a:["First: no verb, renames Mary → appositive phrase.", "Second: has a subject and verb (who is) → adjective clause."]}},
      {tip:"Adjective or adverb? If the phrase answers \"which one?\" about a noun, it's an adjective. If it answers where, when, or how about the action, it's an adverb."}
    ],
    "mod": [
      {h:"Commas with phrases"},
      {p:"**Essential** (restrictive) phrases are needed to know which one you mean, so they get **no commas**. **Nonessential** (nonrestrictive) phrases just add extra information, so they get **commas**."},
      {ex:{q:"The clothes __flapping in the breeze__ are old. / Karen, __acting alone__, sneaked into the theater.", a:["First: tells which clothes → essential, no commas.", "Second: we already know who → nonessential, commas."]}},
      {h:"Misplaced modifiers"},
      {p:"Put a modifying phrase as close as possible to the word it describes. Too far away and it seems to describe the wrong thing."},
      {ex:{q:"We enjoyed the autumn leaves walking along the path.", a:["Sounds like the leaves were walking.", "Better: Walking along the path, we enjoyed the autumn leaves."]}},
      {h:"Dangling participles"},
      {p:"A **dangling participle** has nothing in the sentence to describe. Fix it by adding the person or thing doing the action."},
      {ex:{q:"Walking over the hill, the valley lay in its splendor.", a:["Who was walking? Not the valley.", "Better: Walking over the hill, we saw the valley in its splendor."]}},
      {tip:"Misplaced: the right word is in the sentence, just in the wrong spot. Dangling: the right word is missing entirely."}
    ]
  },

  problems(k){
    const S = {ger:"Gerunds", part:"Participles", inf:"Infinitives", prep:"Prep & appositive", mod:"Modifiers"};
    // a fixed list of choices (same order every time), label = the question
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], S[sec], text, opts, a, [why], {label});
    // normal multiple choice: right answer first, shown shuffled
    const mc = (sec, text, opts, why) => k.choice([sec], S[sec], text, opts, opts[0], [why], {shuffle:true});

    /* ===== Gerund phrases ===== */
    const gj = cat("ger", GF, "The underlined gerund phrase is used as…");
    gj("__Feeding the ducks at the park__ was the best part of our trip.", "Subject", GER_WHY.Subject);
    gj("My grandfather loves __telling stories about his childhood__.", "Direct object", GER_WHY["Direct object"]);
    gj("The best part of camp was __swimming across the lake__.", "Predicate noun", "\"Was\" is a linking verb, and swimming across the lake renames \"the best part.\" → predicate noun.");
    gj("Elena raised her grade by __studying a little every night__.", "Object of preposition", "It follows the preposition \"by.\" → object of the preposition.");
    gj("The coach gave __running the stairs__ a spot in every practice.", "Indirect object", "Gave what? A spot (direct object). Gave a spot to what? Running the stairs → indirect object.");
    gj("Her summer job, __walking the neighbors' dogs__, paid surprisingly well.", "Appositive", GER_WHY.Appositive);
    gj("Before __leaving for school__, Tom checked his backpack.", "Object of preposition", "\"Before\" is a preposition here, and the gerund phrase is its object.");
    gj("__Arguing with the referee__ got the player a yellow card.", "Subject", "What got the player a yellow card? Arguing with the referee → subject.");
    gj("The students finished __cleaning the art room__.", "Direct object", "Finished what? Cleaning the art room → direct object.");
    gj("One thing I can't stand is __waiting in long lines__.", "Predicate noun", "It follows the linking verb \"is\" and renames \"one thing.\" → predicate noun.");
    gj("Our class should give __recycling the cans__ more thought.", "Indirect object", "Give what? More thought (direct object). Give it to what? Recycling the cans → indirect object.");
    gj("Nobody thanked Ray for __fixing the printer__.", "Object of preposition", "It follows the preposition \"for.\" → object of the preposition.");
    gj("My dog's worst habit is __chewing on shoes__.", "Predicate noun", "\"Is\" links habit to chewing on shoes, which renames it → predicate noun.");
    gj("The puppy's favorite game, __chasing its tail__, never gets old.", "Appositive", "It's set off by commas and renames \"favorite game.\" → appositive.");
    gj("Mr. Patel suggested __starting the essay tonight__.", "Direct object", "Suggested what? Starting the essay tonight → direct object.");
    gj("__Getting enough sleep__ helps you focus in class.", "Subject", GER_WHY.Subject);

    const ing = cat("ger", ING, "What is the underlined -ing phrase?");
    ing("Robert is __drinking coffee__ right now.", ING[2], "\"Is drinking\" is the verb. Robert is doing the action; drinking isn't naming a thing.");
    ing("Her summer job is __testing new video games__.", ING[0], "It follows the linking verb \"is\" and renames \"job.\" A thing, so it's a gerund (predicate noun).");
    ing("The girl __playing the piano__ is my friend.", ING[1], "It tells which girl, so it describes a noun → participle.");
    ing("__Playing the piano__ is my sister's favorite thing.", ING[0], "It names an activity and is the subject → gerund.");
    ing("The dog was __barking at the mail carrier__.", ING[2], "\"Was barking\" is the verb (helping verb + -ing).");
    ing("My dog's worst habit is __barking at the mail carrier__.", ING[0], "It renames \"habit\" after the linking verb is → gerund used as a predicate noun.");
    ing("__Barking at the mail carrier__, the dog ran to the window.", ING[1], "It describes the dog → participle.");
    ing("We were __sleeping through the storm__.", ING[2], "\"Were sleeping\" is the verb.");
    ing("Kira's biggest difficulty is __sleeping through the night__.", ING[0], "It renames \"difficulty\" → gerund (predicate noun). Compare: \"We were sleeping\" where it's part of the verb.");

    mc("ger", "Which sentence uses a gerund phrase as the **direct object**?",
      ["Maya started learning the guitar.", "Learning the guitar takes patience.", "Maya's goal is learning the guitar.", "Maya read a book about learning guitar."],
      "Started what? Learning the guitar. The others use it as a subject, predicate noun, and object of a preposition.");
    mc("ger", "Which sentence uses a gerund phrase as the **subject**?",
      ["Painting the fence took all afternoon.", "Dad finished painting the fence.", "My chore was painting the fence.", "I got paid for painting the fence."],
      "Painting the fence comes before the verb took and is what the sentence is about.");
    mc("ger", "Which sentence uses a gerund phrase as a **predicate noun**?",
      ["His job is delivering pizzas.", "He enjoys delivering pizzas.", "Delivering pizzas pays well.", "He saved up by delivering pizzas."],
      "\"Is\" links job to delivering pizzas, which renames it.");
    mc("ger", "Which sentence uses a gerund phrase as the **object of a preposition**?",
      ["Jen is nervous about giving speeches.", "Jen avoids giving speeches.", "Giving speeches scares Jen.", "Jen's weakness is giving speeches."],
      "Giving speeches follows the preposition \"about.\"");
    mc("ger", "What is the complete gerund phrase? \"Hiking up the steep trail wore us out.\"",
      ["Hiking up the steep trail", "Hiking", "up the steep trail", "Hiking up the steep trail wore"],
      "The gerund (hiking) plus its prepositional phrase (up the steep trail). \"Wore\" is the verb, so it isn't part of the phrase.");
    mc("ger", "What is the complete gerund phrase? \"My aunt hates driving in heavy traffic.\"",
      ["driving in heavy traffic", "driving", "hates driving", "my aunt hates driving"],
      "The gerund driving plus in heavy traffic, which goes with it.");
    mc("ger", "A gerund always ends in ___ and works as a…",
      ["-ing; noun", "-ed; adjective", "-ing; verb", "-ly; adverb"],
      "Gerunds end in -ing and do anything a noun can do.");

    /* ===== Participial phrases ===== */
    const mod = (text, opts, why) => k.choice(["part"], S.part, text, opts, opts[0], [why], {shuffle:true, label:"Which word does the underlined phrase describe?"});
    mod("The pool __built in our yard__ is thirty feet long.", ["pool", "yard", "feet", "long"], "Which pool? The one built in our yard.");
    mod("__Landing roughly__, the plane finally glided to a stop.", ["plane", "stop", "glided", "finally"], "The plane landed roughly. An opening participial phrase describes the subject after the comma.");
    mod("The boy __playing the drums__ is my cousin.", ["boy", "drums", "cousin", "is"], "Which boy? The one playing the drums.");
    mod("__Exhausted from the hike__, the campers fell asleep early.", ["campers", "hike", "asleep", "early"], "The campers were exhausted.");
    mod("We found a wallet __stuffed with old receipts__.", ["wallet", "we", "receipts", "found"], "The wallet was stuffed with receipts.");
    mod("The cookies __baked by my aunt__ disappeared in minutes.", ["cookies", "aunt", "minutes", "disappeared"], "Which cookies? The ones baked by my aunt.");
    mod("__Hoping for a snow day__, Jamal checked the news at six.", ["Jamal", "day", "news", "six"], "Jamal was the one hoping.");
    mod("The window __broken by the storm__ was replaced on Monday.", ["window", "storm", "Monday", "replaced"], "Broken is a participle ending in -n. It tells which window.");

    const pt = cat("part", PT, "What kind of phrase is underlined?");
    pt("The students __waiting outside__ looked cold.", "Participial", "It describes students → participial.");
    pt("__Waiting outside__ was the worst part.", "Gerund", "It's the subject (names a thing) → gerund.");
    pt("The students wanted __to wait outside__.", "Infinitive", "To + verb → infinitive (direct object).");
    pt("The students waited __outside the gym__.", "Prepositional", "Starts with the preposition outside and ends with the noun gym.");
    pt("Ms. Kim, __the new librarian__, waited outside.", "Appositive", "A noun phrase with no verb that renames Ms. Kim.");

    mc("part", "A participial phrase always works as…", ["an adjective", "a noun", "a verb", "a conjunction"],
      "Participial phrases describe nouns or pronouns.");
    mc("part", "Which sentence contains a participial phrase?",
      ["The car parked on the hill rolled away.", "Parking on the hill is risky.", "We want to park on the hill.", "Dad parks on the hill every day."],
      "Parked on the hill describes the car. The second is a gerund, the third an infinitive, the fourth just a verb.");
    mc("part", "Which list shows common participle endings?", ["-ing, -ed, -n, -t, -d", "-ly, -er, -est, -ful", "-tion, -ness, -ment", "-s, -es, -ies, -ves"],
      "Running, painted, broken, lost, said.");

    /* ===== Infinitive phrases ===== */
    const ij = cat("inf", IF, "The underlined infinitive phrase is used as…");
    ij("__To finish the marathon__ was Dad's only goal.", "Subject", INF_WHY.Subject);
    ij("Lena needs __to borrow a calculator__.", "Direct object", "Needs what? To borrow a calculator → direct object.");
    ij("His plan is __to leave before sunrise__.", "Predicate noun", "It follows the linking verb \"is\" and renames \"plan.\"");
    ij("This is the best spot __to watch the fireworks__.", "Adjective", "Which spot? The one to watch the fireworks. It describes a noun.");
    ij("Ava saved her allowance __to buy a new bike__.", "Adverb", "Why did she save? To buy a new bike. It modifies the verb saved.");
    ij("We were glad __to hear the good news__.", "Adverb", "It modifies the adjective glad, so it works as an adverb.");
    ij("Carlos has three chapters __to read tonight__.", "Adjective", "Which chapters? The ones to read tonight.");
    ij("The team hopes __to make the playoffs__.", "Direct object", "Hopes what? To make the playoffs.");
    ij("Our goal is __to raise five hundred dollars__.", "Predicate noun", "Renames goal after the linking verb is.");
    ij("__To win the spelling bee__ takes a lot of practice.", "Subject", "What takes practice? To win the spelling bee → subject.");
    ij("Marcus went to the library __to return a book__.", "Adverb", "Why did he go? To return a book. (\"To the library\" is a prepositional phrase.)");
    ij("She is the person __to ask about tryouts__.", "Adjective", "It describes person.");

    mc("inf", "In which sentence is \"to\" part of an infinitive?",
      ["She wants to go home.", "She went to the store.", "Give the note to Sam.", "We walked to school."],
      "An infinitive is to + a verb (go). The others are to + a noun, which are prepositional phrases.");
    mc("inf", "In which sentence is \"to\" part of an infinitive?",
      ["I need to call Grandma.", "Mail the letter to Grandma.", "Kim drove to the lake.", "Hand the keys to me."],
      "To call is to + a verb.");
    mc("inf", "An infinitive is \"to\" plus…", ["the base form of a verb", "any noun or pronoun", "a verb ending in -ing", "a word ending in -ly"],
      "To run, to see, to be.");
    mc("inf", "An infinitive phrase used as an adverb usually answers…", ["Why?", "Who?", "Which one?", "What kind?"],
      "\"She studied to pass the test.\" Why did she study?");

    /* ===== Prepositional & appositive ===== */
    const pa = cat("prep", ["Adjective", "Adverb"], "The underlined prepositional phrase is used as…");
    pa("A story __in the newspaper__ described her life.", "Adjective", "Which story? The one in the newspaper. It describes a noun.");
    pa("The story begins __in Canada__.", "Adverb", "Where does it begin? It modifies the verb begins.");
    pa("The trees were green __on top__.", "Adverb", "It modifies the adjective green, so it's an adverb.");
    pa("The girl __with the red umbrella__ waved at us.", "Adjective", "Which girl? It describes girl.");
    pa("We ate lunch __under the oak tree__.", "Adverb", "Where did we eat? It modifies ate.");
    pa("The key __to the front door__ is missing.", "Adjective", "Which key? It describes key.");
    pa("The puppy hid __behind the couch__.", "Adverb", "Where did it hide? It modifies hid.");
    pa("Everyone __on the bus__ cheered.", "Adjective", "Which people? The ones on the bus.");

    const ap = cat("prep", ["Appositive phrase", "Adjective clause"], "What is the underlined part?");
    ap("Mr. Diaz, __our new math teacher__, plays the cello.", "Appositive phrase", "No verb, and it renames Mr. Diaz.");
    ap("Mr. Diaz, __who teaches math__, plays the cello.", "Adjective clause", "It has a subject and verb (who teaches), so it's a clause.");
    ap("My dog, __a lazy old beagle__, sleeps all day.", "Appositive phrase", "A noun phrase with no verb renaming dog.");
    ap("My dog, __which is a lazy old beagle__, sleeps all day.", "Adjective clause", "\"Which is\" gives it a verb, so it's an adjective clause.");
    ap("Jupiter, __the largest planet__, has dozens of moons.", "Appositive phrase", "Renames Jupiter, no verb.");

    mc("prep", "What is the object of the preposition? \"The cat slept beside the warm fireplace.\"",
      ["fireplace", "cat", "warm", "beside"], "Beside is the preposition, and fireplace is the noun that ends the phrase.");
    mc("prep", "What is the object of the preposition? \"Maria left her phone under the couch.\"",
      ["couch", "phone", "under", "Maria"], "Under is the preposition, and couch is the noun that ends the phrase.");
    mc("prep", "Which sentence contains an appositive phrase?",
      ["Our mascot, a giant owl, danced at halftime.", "Our mascot, who is a giant owl, danced.", "Our mascot danced at halftime.", "Dancing at halftime is our mascot's job."],
      "A giant owl renames mascot and has no verb.");

    /* ===== Commas & modifiers ===== */
    const cm = cat("mod", ["No commas (essential)", "Commas (nonessential)"], "Does the underlined phrase need commas?");
    cm("The runner __wearing number 12__ won the race.", "No commas (essential)", "It tells which runner, so it's essential.");
    cm("My mother __smiling proudly__ took a picture.", "Commas (nonessential)", "You only have one mother, so the phrase is extra information: My mother, smiling proudly, took a picture.");
    cm("Abraham Lincoln __born in a log cabin__ became president.", "Commas (nonessential)", "We already know who Lincoln is. Extra info gets commas.");
    cm("The dog __barking in the yard__ belongs to our neighbor.", "No commas (essential)", "It tells which dog.");
    cm("Students __caught cheating__ will get a zero.", "No commas (essential)", "Only those students get a zero, so the phrase is needed.");
    cm("Marco __working late__ finished the poster.", "Commas (nonessential)", "Marco is already named; working late is extra.");

    const err = cat("mod", ["Misplaced modifier", "Dangling participle", "Correct as written"], "What's wrong with this sentence?");
    err("After finishing the test, the bell rang.", "Dangling participle", "Who finished the test? Nobody in the sentence did, so the phrase dangles.");
    err("Running to catch the bus, my backpack fell open.", "Dangling participle", "The backpack wasn't running, and the runner (I) is missing.");
    err("We saw a huge spider web hanging from the ceiling fan, sitting on the couch.", "Misplaced modifier", "Sitting on the couch should be next to we, not the fan.");
    err("Tired from practice, Dana went straight to bed.", "Correct as written", "Dana was tired. The phrase sits right next to the word it describes.");
    err("The waiter served dessert to the customers on a silver tray.", "Misplaced modifier", "The customers weren't on the tray. Move it: The waiter served dessert on a silver tray to the customers.");
    err("Having eaten lunch, the movie started.", "Dangling participle", "The movie didn't eat lunch. Add who did: Having eaten lunch, we watched the movie.");
    err("Covered in mud, the dog needed a bath.", "Correct as written", "The dog was covered in mud, and dog comes right after the comma.");

    mc("mod", "Which sentence fixes the misplaced modifier? \"We saw a deer driving to school.\"",
      ["Driving to school, we saw a deer.", "We saw, driving to school, a deer.", "A deer driving to school saw us.", "We saw a deer that was driving to school."],
      "Put the phrase next to the people who were driving: we.");
    mc("mod", "Which sentence fixes the dangling participle? \"Walking into the kitchen, the smell of cookies was amazing.\"",
      ["Walking into the kitchen, I smelled amazing cookies.", "Walking into the kitchen, the cookies smelled amazing.", "The smell of cookies, walking into the kitchen, was amazing.", "Walking into the kitchen the smell was amazing."],
      "Someone has to be doing the walking. Adding I gives the phrase something to describe.");
    mc("mod", "Which sentence is punctuated correctly?",
      ["Karen, acting alone, sneaked into the theater.", "Karen acting alone, sneaked into the theater.", "Karen, acting alone sneaked into the theater.", "Karen acting, alone sneaked into the theater."],
      "A nonessential phrase in the middle of a sentence needs a comma on both sides.");
  },

  drills: {
    /* gerund phrase jobs from random phrases × sentence frames */
    "ger": k => {
      const G = ["swimming in the lake", "baking bread on Sundays", "playing the drums", "reading mystery novels", "running every morning",
        "building model rockets", "writing short stories", "fixing old bikes", "studying with friends", "hiking in the mountains",
        "painting landscapes", "learning a new language", "cooking for the family", "skating at the park", "collecting old coins"];
      const F = [
        ["Subject", g => `__${capF(g)}__ takes a lot of patience.`], ["Subject", g => `__${capF(g)}__ keeps Maya busy on weekends.`],
        ["Subject", g => `__${capF(g)}__ is harder than it looks.`],
        ["Direct object", g => `My cousin enjoys __${g}__.`], ["Direct object", g => `Jordan started __${g}__ last summer.`], ["Direct object", g => `Ava quit __${g}__ in March.`],
        ["Predicate noun", g => `Her favorite hobby is __${g}__.`], ["Predicate noun", g => `Dev's new goal is __${g}__.`],
        ["Object of preposition", g => `Leo is excited about __${g}__.`], ["Object of preposition", g => `Sam is really good at __${g}__.`], ["Object of preposition", g => `We talked about __${g}__ at lunch.`],
        ["Indirect object", g => `My parents gave __${g}__ a try.`], ["Indirect object", g => `Our family gave __${g}__ one more chance.`],
        ["Appositive", g => `Her newest hobby, __${g}__, keeps her busy.`], ["Appositive", g => `Kai's favorite pastime, __${g}__, started last year.`]
      ];
      const [a, f] = pick(F);
      return {kind:"choice", text:f(pick(G)), fields:[k.F.choice("The underlined gerund phrase is used as…", GF, a)], steps:[GER_WHY[a]]};
    },
    /* infinitive phrase jobs */
    "inf": k => {
      const I = ["to win the championship", "to finish the project early", "to learn Spanish", "to visit Japan", "to become a nurse",
        "to fix the old car", "to save enough money", "to make the varsity team"];
      const F = [
        ["Subject", i => `__${capF(i)}__ was her biggest goal.`], ["Subject", i => `__${capF(i)}__ will take hard work.`],
        ["Direct object", i => `Marcus wants __${i}__.`], ["Direct object", i => `Priya decided __${i}__.`], ["Direct object", i => `The twins hope __${i}__.`],
        ["Predicate noun", i => `Her dream is __${i}__.`], ["Predicate noun", i => `The plan was __${i}__.`],
        ["Adjective", i => `That is the best way __${i}__.`], ["Adjective", i => `This is your chance __${i}__.`],
        ["Adverb", i => `Jada worked all summer __${i}__.`], ["Adverb", i => `Everyone was eager __${i}__.`]
      ];
      const [a, f] = pick(F);
      return {kind:"choice", text:f(pick(I)), fields:[k.F.choice("The underlined infinitive phrase is used as…", IF, a)], steps:[INF_WHY[a]]};
    },
    /* gerund vs participle vs verb for the same -ing phrase */
    "part": k => {
      const P = [["fixing the sink", "plumber", "Dad"], ["painting the mural", "artist", "Mia"], ["reading the announcements", "student", "Omar"],
        ["walking the dogs", "neighbor", "Grace"], ["selling lemonade", "kid", "Leo"], ["singing the anthem", "girl", "Ana"]];
      const [p, n, who] = pick(P), r = Math.random();
      if (r < 0.34) return {kind:"choice", text:`The ${n} __${p}__ waved at us.`, fields:[k.F.choice("What is the underlined -ing phrase?", ING, ING[1])], steps:[`It tells which ${n}, so it describes a noun → participle.`]};
      if (r < 0.67) return {kind:"choice", text:`__${capF(p)}__ took most of the afternoon.`, fields:[k.F.choice("What is the underlined -ing phrase?", ING, ING[0])], steps:["It names an activity and is the subject → gerund."]};
      return {kind:"choice", text:`${who} was __${p}__ when we arrived.`, fields:[k.F.choice("What is the underlined -ing phrase?", ING, ING[2])], steps:[`"Was ${p.split(" ")[0]}" is the verb (helping verb + -ing).`]};
    }
  }
});
})();
