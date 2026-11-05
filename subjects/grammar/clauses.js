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
      {tip:"Read the clause by itself. If it sounds unfinished (\"Because it rained.\"), it's dependent."}
    ],
    "kinds": [
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
      {warn:"Who, which, and that can start either kind. If the clause **replaces** a noun (\"__Whoever goes__ gets a treat\"), it's a noun clause. If it **describes** a noun (\"The car __which we borrowed__ is Kim's\"), it's an adjective clause."}
    ],
    "ess": [
      {p:"**Essential** (restrictive) clauses are needed to know which one you mean, so they get **no commas**: Students __whose grades are best__ may leave."},
      {p:"**Nonessential** (nonrestrictive) clauses add extra information, so they get **commas**: Maria, __who is my friend__, lives in the yellow house."},
      {tip:"Cover the clause. If the sentence still points to the same person or thing, the clause is nonessential and needs commas."}
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
  }
});
})();
