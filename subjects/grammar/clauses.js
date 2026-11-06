/* English Grammar · Clauses. Source: class slideshow "Clauses". */
(() => {
const KIND = ["Adverb clause", "Adjective clause", "Noun clause"];
const NJOB = ["Subject", "Direct object", "Predicate noun", "Object of preposition"];

Study.addUnit("grammar", {
  id: "cl",
  name: "Clauses",
  short: "Clauses",
  sections: [
    {id:"id", name:"Independent & Dependent"},
    {id:"kinds", name:"Adverb, Adjective & Noun Clauses"},
    {id:"ess", name:"Essential & Nonessential"}
  ],

  notes: {
    "id": [
      {sum:["A clause has a subject AND a verb; a phrase is missing at least one.", "An independent clause can stand alone; a dependent clause can't.", "Dependent clauses start with a subordinating conjunction (because, when…) or a relative pronoun (who, which, that…)."]},
      {p:"A **clause** is a group of words with a **subject and a verb**. (A phrase doesn't have both.)"},
      {table:{head:["Type", "What it is", "Example"], rows:[
        ["Independent (main)", "a complete thought; can stand alone as a sentence", "__The bell rang__."],
        ["Dependent (subordinate)", "an incomplete thought; needs an independent clause", "__When the bell rang__, we left."]
      ]}},
      {p:"A dependent clause starts with a **subordinating conjunction** or a **relative pronoun**, and works as one part of speech: an adverb, adjective, or noun."},
      {table:{head:["Starts with…", "Common words"], rows:[
        ["Subordinating conjunctions", "after, although, as, as if, as long as, as soon as, because, before, even though, if, since, so that, than, though, unless, until, when, whenever, where, wherever, whether, while"],
        ["Relative pronouns", "that, which, who, whoever, whom, whomever, whose, what"]
      ]}},
      {tip:"Read the clause by itself. If it sounds unfinished (\"Because it rained.\"), it's dependent."},
      {check:[{q:"Clause or phrase: \"after the long game\"?", a:"Phrase: no subject and verb."}, {q:"Clause or phrase: \"after the game ended\"?", a:"Clause: game is the subject and ended is the verb. (It's dependent.)"}, {q:"Find the independent clause: \"If it snows, school will close.\"", a:"school will close."}, {q:"What makes \"Because I was tired\" a fragment?", a:"It's a dependent clause on its own; it needs an independent clause."}]}
    ],
    "kinds": [
      {sum:["Adverb clauses tell when, why, where, how, or under what condition (they start with words like because, if, when).", "Adjective clauses describe a noun (they start with who, whom, whose, which, that, sometimes where or when).", "Noun clauses do a noun's job: subject, direct object, predicate noun, or object of a preposition."]},
      {h:"Adverb clauses"},
      {p:"Start with a subordinating conjunction and modify a verb, adjective, or adverb. They tell **why, when, where, how, under what conditions,** or **to what extent**."},
      {ex:{q:"My sister acted __as though she were a queen__.", a:["Tells how she acted → adverb clause modifying acted."]}},
      {h:"Adjective clauses"},
      {p:"Modify a noun or pronoun. They usually start with **who, whom, whose, which, that**, and sometimes **where** or **when**."},
      {ex:{q:"Jane knows the student __who won the scholarship__. / I remember the store __where I bought those shoes__.", a:["Both describe the noun right before them (student, store)."]}},
      {h:"Noun clauses"},
      {p:"Do a noun's job: subject, direct object, predicate noun, or object of a preposition. Common starters: how, if, that, what, whatever, when, where, whether, which, who, whoever, whom, why."},
      {table:{head:["Job", "Example"], rows:[
        ["Subject", "__Which car we take__ is not important."],
        ["Direct object", "You can believe __whatever you want__."],
        ["Predicate noun", "The best skis are __whichever ones feel comfortable__."],
        ["Object of preposition", "Mary whines about __whatever task she is given__."]
      ]}},
      {warn:"Who, which, and that can start either kind. If the clause **replaces** a noun (\"__Whoever goes__ gets a treat\"), it's a noun clause. If it **describes** a noun (\"The car __which we borrowed__ is Kim's\"), it's an adjective clause."},
      {check:[{q:"What kind of clause is underlined? \"I'll call __when I get home__.\"", a:"Adverb clause: it tells when."}, {q:"What kind? \"The book __that you lent me__ was great.\"", a:"Adjective clause: it describes book."}, {q:"What kind? \"__What you said__ was kind.\"", a:"Noun clause: it's the subject."}, {q:"Quick test for a noun clause?", a:"Replace it with \"something.\" If the sentence still works (Something was kind), it's a noun clause."}]}
    ],
    "ess": [
      {sum:["Essential clauses tell WHICH one you mean, so they get no commas.", "Nonessential clauses add extra information about something already identified, so they get commas.", "Use that for essential clauses and which (with commas) for nonessential ones."]},
      {p:"**Essential** (restrictive) clauses are needed to know which one you mean, so they get **no commas**: Students __whose grades are best__ may leave."},
      {p:"**Nonessential** (nonrestrictive) clauses add extra information, so they get **commas**: Maria, __who is my friend__, lives in the yellow house."},
      {tip:"Cover the clause. If the sentence still points to the same person or thing, the clause is nonessential and needs commas."},
      {check:[{q:"Add commas if needed: \"My sister who lives in Ohio is visiting.\" (You have one sister.)", a:"My sister, who lives in Ohio, is visiting. (One sister, so the clause is extra.)"}, {q:"Add commas if needed: \"Students who finish early may read.\"", a:"No commas: the clause tells which students."}, {q:"That or which? \"The car ___ I bought is red.\"", a:"that (it's essential: which car?)."}, {q:"Why does \"Paris, which is in France, is beautiful\" need commas?", a:"Paris is already named, so the clause is extra information."}]}
    ]
  },

  problems(k){
    const S = {id:"Clauses", kinds:"Clause types", ess:"Commas"};
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], S[sec], text, opts, a, [why], {label});
    const mc = (sec, text, opts, why) => k.choice([sec], S[sec], text, opts, opts[0], [why], {shuffle:true});

    const id = cat("id", ["Independent", "Dependent"], "Is the underlined clause independent or dependent?");
    id("__When the bell rang__, everyone rushed out.", "Dependent", "When makes it an incomplete thought.");
    id("When the bell rang, __everyone rushed out__.", "Independent", "It can stand alone as a sentence.");
    id("I stayed home __because I was sick__.", "Dependent", "Because I was sick can't stand alone.");
    id("__The store closed early__, so we went home.", "Independent", "A complete thought.");
    id("Jane knows the student __who won the scholarship__.", "Dependent", "It starts with the relative pronoun who and can't stand alone.");
    id("__I rarely see him__ even though he is my neighbor.", "Independent", "A complete thought by itself.");
    id("We'll play outside __unless it starts to rain__.", "Dependent", "Unless is a subordinating conjunction.");

    mc("id", "Which word group is a clause?", ["because the game started late", "after the long overtime game", "running down the crowded hall", "in the early morning light"],
      "Only it has a subject (game) and a verb (started). The others are phrases.");
    mc("id", "Which word group is a clause?", ["while my sister slept", "during the quiet night", "to sleep all day", "sleeping on the couch"],
      "Sister is the subject and slept is the verb.");
    mc("id", "Which is a subordinating conjunction?", ["although", "and", "but", "so"], "And, but, and so are coordinating (FANBOYS).");
    mc("id", "Which is a relative pronoun?", ["whose", "because", "until", "and"], "Relative pronouns: that, which, who, whom, whose, what…");
    mc("id", "What makes a clause different from a phrase?", ["A clause has a subject and a verb", "A clause is always longer", "A clause never has a noun", "A clause always starts with to"],
      "A phrase is missing a subject, a verb, or both.");

    const kd = cat("kinds", KIND, "What kind of clause is underlined?");
    kd("My sister acted __as though she were a queen__.", "Adverb clause", "It tells how she acted.");
    kd("A singer __whose songs I love__ is coming to town.", "Adjective clause", "It describes singer.");
    kd("__Whoever finishes first__ gets a prize.", "Noun clause", "It's the subject of the sentence.");
    kd("I remember the store __where I bought those shoes__.", "Adjective clause", "It describes store. Where can start an adjective clause.");
    kd("You can believe __whatever you want__.", "Noun clause", "It's the direct object of believe.");
    kd("Max didn't know __who had come to the party__.", "Noun clause", "Didn't know what? It replaces a noun (direct object).");
    kd("The bike __that we borrowed__ belongs to Kim.", "Adjective clause", "It describes bike.");
    kd("We'll start the game __as soon as everyone arrives__.", "Adverb clause", "It tells when we'll start.");
    kd("Do you remember the day __when we got lost__?", "Adjective clause", "It describes day. When can start an adjective clause.");
    kd("The winner will be __whoever scores the most points__.", "Noun clause", "It renames winner (predicate noun).");
    kd("__Unless it rains__, practice will be outside.", "Adverb clause", "It tells under what condition.");
    kd("Everyone ate the pizza __that had been delivered__.", "Adjective clause", "It describes pizza.");

    const nj = cat("kinds", NJOB, "The underlined noun clause is used as…");
    nj("__Whoever goes to the store__ gets a special treat.", "Subject", "It comes before the verb gets and is what the sentence is about.");
    nj("I wonder __whether the store is open__.", "Direct object", "Wonder what? Whether the store is open.");
    nj("The best skis are __whichever ones feel comfortable__.", "Predicate noun", "It renames skis after the linking verb are.");
    nj("Mary whines about __whatever task she is given__.", "Object of preposition", "It follows the preposition about.");
    nj("__What she said__ surprised everyone.", "Subject", "What surprised everyone? What she said.");
    nj("The problem is __that we lost the map__.", "Predicate noun", "It renames problem.");

    mc("kinds", "Adverb clauses answer questions like…", ["why, when, where, or under what conditions", "which one or what kind of thing", "who or what the sentence is about", "to whom or for whom something is done"],
      "They work like adverbs.");
    mc("kinds", "What does the adjective clause describe? \"Tom, whom I've known since kindergarten, was chosen.\"", ["Tom", "kindergarten", "chosen", "I"],
      "The clause sits right after Tom and describes him.");

    const es = cat("ess", ["No commas (essential)", "Commas (nonessential)"], "Does the underlined clause need commas?");
    es("Students __whose grades are best__ may leave early.", "No commas (essential)", "It tells which students.");
    es("Maria __who is my friend__ lives in the yellow house.", "Commas (nonessential)", "Maria is already named, so the clause is extra.");
    es("My dad __who is a nurse__ works nights.", "Commas (nonessential)", "You have one dad; the clause is extra information.");
    es("The phone __that I dropped__ still works.", "No commas (essential)", "It tells which phone.");
    es("Mount Whitney __which is in California__ is very tall.", "Commas (nonessential)", "A named mountain doesn't need the clause to identify it.");
    es("People __who exercise daily__ tend to sleep better.", "No commas (essential)", "Only those people, so it's essential.");

    mc("ess", "Which sentence is punctuated correctly?", ["Our principal, who loves tacos, gave a speech.", "Our principal who loves tacos, gave a speech.", "Our principal, who loves tacos gave a speech.", "Our principal who, loves tacos, gave a speech."],
      "A nonessential clause in the middle gets a comma on each side.");

    /* ===== Underline it: tap the first and last word ===== */
    const un = (sec, prompt) => (marked, why) => k.under([sec], S[sec], prompt, marked, [why]);
    const dep = un("id", "Underline the **dependent clause**.");
    dep("__When the bell rang__, everyone rushed out of the room.", "When makes it an incomplete thought; everyone rushed out of the room could stand alone.");
    dep("I stayed home from practice __because I was sick__.", "Because I was sick has a subject and verb but can't stand alone.");
    dep("We'll play outside __unless it starts to rain__.", "Unless is a subordinating conjunction, so its clause is dependent.");
    dep("__Although the test was hard__, most students passed.", "Although starts the dependent clause; most students passed is the main clause.");
    dep("The game was canceled __after the storm knocked out the lights__.", "After is a subordinating conjunction here: it's followed by a subject (the storm) and a verb (knocked).");
    dep("__If you finish early__, you may read quietly.", "If you finish early is a condition. It can't stand alone.");
    dep("She kept practicing __until her hands were sore__.", "Until her hands were sore has a subject and verb but isn't a complete thought.");
    const ind = un("id", "Underline the **independent clause**.");
    ind("When the bell rang, __everyone rushed out of the room__.", "Everyone rushed out of the room can stand alone as a sentence.");
    ind("Because the bus was late, __we missed first period__.", "We missed first period is a complete thought. Because the bus was late isn't.");
    ind("__I rarely see him__ even though he is my neighbor.", "Even though starts the dependent clause; I rarely see him stands alone.");
    ind("__The store closed early__ because the power went out.", "The store closed early is complete by itself.");
    ind("After the movie ended, __we walked to the diner__.", "After the movie ended is dependent. We walked to the diner stands alone.");

    const adj = un("kinds", "Underline the **adjective clause**.");
    adj("The bike __that we borrowed__ belongs to Kim.", "It describes bike (which bike?).");
    adj("A singer __whose songs I love__ is coming to town.", "It starts with whose and describes singer.");
    adj("I remember the store __where I bought those shoes__.", "It describes store. Where can start an adjective clause.");
    adj("Tom, __whom I've known since kindergarten__, was chosen as captain.", "It describes Tom and starts with the relative pronoun whom.");
    adj("The teacher __who coaches soccer__ also teaches chemistry.", "It tells which teacher.");
    const adv = un("kinds", "Underline the **adverb clause**.");
    adv("We'll start the game __as soon as everyone arrives__.", "It tells when we'll start.");
    adv("__Unless it rains__, practice will be outside.", "It tells under what condition.");
    adv("My sister acted __as though she were a queen__.", "It tells how she acted.");
    adv("__Whenever the dog hears thunder__, it hides under the bed.", "It tells when the dog hides.");
    adv("Marcus studied harder __because he wanted an A__.", "It tells why he studied harder.");
    const noun = un("kinds", "Underline the **noun clause**.");
    noun("__Whoever finishes first__ gets a prize.", "It's the subject of gets.");
    noun("Max didn't know __who had come to the party__.", "Didn't know what? It's the direct object.");
    noun("The problem is __that we lost the map__.", "It renames problem after the linking verb is (predicate noun).");
    noun("Mary whines about __whatever task she is given__.", "It's the object of the preposition about.");
    noun("I wonder __whether the store is open__.", "Wonder what? It's the direct object.");
    noun("__What she said__ surprised everyone.", "It's the subject: what surprised everyone?");

    const ne = un("ess", "This sentence is missing its commas. Underline the clause that **needs commas**.");
    ne("Mount Whitney __which is in California__ is taller than any peak that we climbed.", "Mount Whitney is already named, so which is in California is extra. That we climbed is essential: it tells which peaks.");
    ne("Our principal __who loves tacos__ praised the students who organized the food drive.", "There's only one principal, so who loves tacos is extra. Who organized the food drive tells which students, so it stays without commas.");
    ne("The Golden Gate Bridge __which opened in 1937__ is a bridge that tourists love.", "The bridge is named, so which opened in 1937 is extra information.");
    ne("Mr. Lopez __whose class I have first period__ gave the test that everyone dreaded.", "Mr. Lopez is named, so the whose clause is extra. That everyone dreaded tells which test.");
  }
});
})();
