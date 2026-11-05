/* English Grammar · Sentences. Source: class slideshow "Sentences". */
(() => {
const STRUCT = ["Simple", "Compound", "Complex", "Compound-complex"];
const TYPE = ["Declarative", "Interrogative", "Imperative", "Exclamatory"];
const FRAG = ["Complete sentence", "Fragment", "Run-on"];

Study.addUnit("grammar", {
  id: "sen",
  name: "Sentences",
  short: "Sentences",
  sections: [
    {id:"parts", name:"Subjects & Predicates"},
    {id:"struct", name:"Sentence Structures"},
    {id:"frag", name:"Fragments, Run-ons & Types"}
  ],

  notes: {
    "parts": [
      {table:{head:["Part", "What it is"], rows:[
        ["Complete subject", "all the words that tell who or what the sentence is about"],
        ["Simple subject", "the main noun or pronoun in the complete subject"],
        ["Compound subject", "two or more subjects joined by and or or"],
        ["Complete predicate", "all the words that tell something about the subject"],
        ["Simple predicate", "the main verb in the complete predicate (always a verb)"],
        ["Compound predicate", "two or more verbs joined by and or or"]
      ]}},
      {ex:{q:"The tall boy in the red hat laughed loudly.", a:["Complete subject: The tall boy in the red hat. Simple subject: boy.", "Complete predicate: laughed loudly. Simple predicate: laughed."]}},
      {tip:"In a command, the subject is the understood \"you\": Pick up your socks = (You) pick up your socks."}
    ],
    "struct": [
      {table:{head:["Structure", "Clauses", "Example"], rows:[
        ["Simple", "one independent clause", "The cat and dog chased and caught the mice."],
        ["Compound", "two or more independent clauses, no dependent", "I went shopping, but I didn't buy anything."],
        ["Complex", "one independent + at least one dependent", "The boy got angry __when his classmate hit him__."],
        ["Compound-complex", "two or more independent + at least one dependent", "The garage __that Roman built__ had one bay, so he added a second one."]
      ]}},
      {warn:"A compound subject or compound predicate doesn't make a sentence compound. \"The cat and dog chased and caught the mice\" is still simple: one subject group, one verb group, one clause."},
      {steps:["Count the independent clauses (subject + verb, can stand alone).", "Look for dependent clauses (start with because, when, although, who, that…).", "1 independent, 0 dependent → simple. 2+ independent, 0 dependent → compound. 1 independent + dependent → complex. 2+ independent + dependent → compound-complex."]}
    ],
    "frag": [
      {h:"Fragments"},
      {p:"A **fragment** is missing a subject, a predicate, or both, or it's a dependent clause on its own."},
      {table:{head:["Missing", "Example"], rows:[["Subject", "Can run fast."], ["Predicate", "My friend Susan."], ["Both", "In a yard."]]}},
      {h:"Run-ons"},
      {p:"A **run-on** is two or more sentences jammed together with no punctuation: My aunt is a fine teacher she teaches seventh grade. Fix it with a period, a semicolon, or a comma plus a FANBOYS conjunction."},
      {h:"Four sentence types"},
      {table:{head:["Type", "What it does", "Ends with"], rows:[
        ["Declarative", "tells something", "period"],
        ["Interrogative", "asks something", "question mark"],
        ["Imperative", "gives an order or makes a request", "period"],
        ["Exclamatory", "shows strong feeling", "exclamation point"]
      ]}}
    ]
  },

  problems(k){
    const S = {parts:"Subjects & predicates", struct:"Structures", frag:"Fragments & types"};
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], S[sec], text, opts, a, [why], {label});
    const mc = (sec, text, opts, why, label) => k.choice([sec], S[sec], text, opts, opts[0], [why], {shuffle:true, label});

    mc("parts", "The tall boy in the red hat laughed.", ["boy", "tall", "hat", "laughed"], "Boy is the main noun in the complete subject.", "What is the simple subject?");
    mc("parts", "The old dog slept on the porch all afternoon.", ["slept", "dog", "porch", "afternoon"], "Slept is the main verb.", "What is the simple predicate?");
    mc("parts", "My best friend from Texas visited last week.", ["My best friend from Texas", "My best friend from Texas visited", "friend from Texas", "visited last week"],
      "All the words that tell who the sentence is about.", "What is the complete subject?");
    mc("parts", "Pick up your socks before dinner.", ["(you), understood", "socks", "dinner", "There is no subject"],
      "Commands have the understood subject you.", "What is the subject?");
    mc("parts", "Which sentence has a compound subject?", ["Mia and Jen walked to school.", "Mia walked and talked.", "Mia walked to school with Jen.", "Mia walked, and Jen ran."],
      "Two subjects (Mia and Jen) share one verb.");
    mc("parts", "Which sentence has a compound predicate?", ["The cat chased and caught the mice.", "The cat and dog chased the mice.", "The cat chased the mice.", "The cat chased the mice, and the dog slept."],
      "Two verbs (chased and caught) share one subject. The last choice is two whole clauses.");
    mc("parts", "The simple predicate is always a…", ["verb", "noun", "pronoun", "adjective"], "It's the main verb.");

    const st = cat("struct", STRUCT, "What is the sentence structure?");
    st("Dogs are lovable animals.", "Simple", "One independent clause.");
    st("The cat and dog chased and caught the mice.", "Simple", "Compound subject and compound predicate, but still one clause.");
    st("I went clothes shopping, but I didn't buy anything.", "Compound", "Two independent clauses joined by but.");
    st("The boy became angry when his classmate hit him.", "Complex", "One independent clause plus the dependent clause when his classmate hit him.");
    st("The garage that Roman built had only one bay, so he added a second one.", "Compound-complex", "Two independent clauses (joined by so) plus the dependent clause that Roman built.");
    st("Because it was raining, we stayed inside.", "Complex", "Dependent clause (because it was raining) + one independent clause.");
    st("I love cake; my brother loves pie.", "Compound", "Two independent clauses joined by a semicolon.");
    st("Although the test was hard, I finished early, and I felt confident.", "Compound-complex", "Two independent clauses plus one dependent (although…).");
    st("Maya and her sister walked to school and ate lunch together.", "Simple", "One clause with a compound subject and compound predicate.");
    st("The movie that we watched was long.", "Complex", "That we watched is a dependent clause inside one independent clause.");
    st("We wanted to swim, but the pool was closed.", "Compound", "Two independent clauses joined by but.");
    st("When the power went out, we lit candles, and Dad told stories.", "Compound-complex", "Two independent clauses and one dependent clause.");

    const fr = cat("frag", FRAG, "This is a…");
    fr("Can run fast.", "Fragment", "Missing a subject: who can run fast?");
    fr("My friend Susan.", "Fragment", "Missing a predicate: what about Susan?");
    fr("In a yard.", "Fragment", "Missing both a subject and a predicate.");
    fr("My aunt is a fine teacher she teaches seventh grade.", "Run-on", "Two sentences with nothing between them.");
    fr("Because the bus was late.", "Fragment", "A dependent clause can't stand alone.");
    fr("Stop.", "Complete sentence", "Imperative with the understood subject you.");
    fr("The game ended we went home.", "Run-on", "Two independent clauses with no punctuation.");
    fr("After school, we went to the library.", "Complete sentence", "Subject (we) and predicate (went).");
    fr("Running down the hallway in a hurry.", "Fragment", "No subject and no main verb, just a phrase.");

    const tp = cat("frag", TYPE, "What type of sentence is this?");
    tp("The temperature is warm.", "Declarative", "It tells something and ends with a period.");
    tp("Is it warm outside?", "Interrogative", "It asks something.");
    tp("Please find out how warm it is.", "Imperative", "It makes a request (subject: you).");
    tp("It is so hot today!", "Exclamatory", "It shows strong feeling.");
    tp("Hand me the stapler.", "Imperative", "A command ending with a period.");
    tp("We won the championship!", "Exclamatory", "Strong feeling with an exclamation point.");
    tp("Where did you park the car?", "Interrogative", "It asks a question.");

    mc("frag", "Which fixes the run-on? \"My aunt is a fine teacher she teaches seventh grade.\"",
      ["My aunt is a fine teacher; she teaches seventh grade.", "My aunt is a fine teacher, she teaches seventh grade.", "My aunt is a fine teacher she teaches, seventh grade.", "My aunt, is a fine teacher she teaches seventh grade."],
      "A semicolon can join two independent clauses. A comma alone can't.");
  }
});
})();
