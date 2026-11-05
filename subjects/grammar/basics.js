/* English Grammar · Parts of Speech + Direct Objects (complements)
   Source: class slideshows "Parts of Speech" and "Direct Object". */
(() => {
const POS = ["Noun", "Pronoun", "Verb", "Adjective", "Adverb", "Preposition", "Conjunction", "Interjection"];
const CONJ = ["Coordinating", "Correlative", "Subordinating", "Conjunctive adverb"];
const VERB = ["Action verb", "Linking verb", "Helping verb"];
const COMP = ["Predicate noun", "Predicate adjective", "Direct object", "Indirect object"];
const pick = a => a[Math.floor(Math.random() * a.length)];
const capW = s => s.charAt(0).toUpperCase() + s.slice(1);
const COMP_WHY = {
  "Predicate noun": "It follows a linking verb and renames the subject (it's a noun) → predicate noun.",
  "Predicate adjective": "It follows a linking verb and describes the subject (it's an adjective) → predicate adjective.",
  "Direct object": "It follows an action verb and answers \"what?\" or \"whom?\" → direct object.",
  "Indirect object": "It comes between the verb and the direct object and tells to or for whom → indirect object."
};

Study.addUnit("grammar", {
  id: "pos",
  name: "Parts of Speech & Objects",
  short: "Parts of Speech",
  sections: [
    {id:"pos", name:"The Parts of Speech"},
    {id:"conj", name:"Conjunctions & Verbs"},
    {id:"sva", name:"Subject-Verb Agreement"},
    {id:"pron", name:"Pronouns & Antecedents"},
    {id:"comp", name:"Objects & Predicate Nouns"}
  ],

  notes: {
    "pos": [
      {table:{head:["Part of speech", "What it does", "Example"], rows:[
        ["Noun", "names a person, place, or thing", "Sam, Clovis, love"],
        ["Pronoun", "takes the place of a noun", "**He** is here."],
        ["Adjective", "describes a noun or pronoun", "Two **hungry** students"],
        ["Adverb", "describes a verb, adjective, or adverb; tells how, when, where", "sings **well**, **often** eats"],
        ["Preposition", "shows how a noun relates to another word", "at, from, on, by, in, with"],
        ["Conjunction", "connects words or groups of words", "and, but, because"],
        ["Interjection", "shows strong feeling; stands on its own", "**Hey!** **Oh no,**"],
        ["Verb", "shows action or a state of being", "screams, is, seems"]
      ]}},
      {h:"Kinds of nouns"},
      {p:"**Proper nouns** name a particular person, place, or thing and are capitalized (Sam, Clovis). **Concrete nouns** are things you can see or touch (boy, ice cream). **Abstract nouns** name ideas, feelings, or senses (love, hunger, inspiration)."},
      {h:"Special adjectives"},
      {p:"**Proper adjectives** come from proper nouns and are capitalized: **Greek** salad. **Articles** (a, an, the) are adjectives too."},
      {h:"Prepositional phrases"},
      {p:"A preposition is followed by a noun or pronoun, its **object** (O.P.). Together they make a **prepositional phrase**: The bell rings __at noon__. (at = preposition, noon = O.P.)"},
      {tip:"Adverb or adjective? Find the word it describes. If that word is a noun, it's an adjective. If it's a verb, adjective, or adverb, it's an adverb."}
    ],
    "conj": [
      {h:"Four kinds of conjunctions"},
      {table:{head:["Kind", "What it does", "Examples"], rows:[
        ["Coordinating", "joins equal parts (FANBOYS)", "for, and, nor, but, or, yet, so"],
        ["Correlative", "works in pairs", "either…or, neither…nor, both…and"],
        ["Subordinating", "joins a dependent clause to an independent clause", "after, although, because, if, since, when, while"],
        ["Conjunctive adverb", "links two equal clauses and shows how they relate (after a semicolon)", "however, therefore, consequently, moreover"]
      ]}},
      {ex:{q:"Case won the contest; therefore, he became famous.", a:["Therefore is a conjunctive adverb: semicolon before it, comma after."]}},
      {h:"Three kinds of verbs"},
      {p:"**Action verbs** tell what someone does (Tom screams). **Linking verbs** don't show action; they connect the subject to a word that renames or describes it: am, is, are, was, were, seem, feel, become. **Helping verbs** help the main verb: The boy **is** running. I **have** listened."},
      {tip:"Some verbs can be either. \"The soup **tastes** salty\" is linking (soup = salty). \"Ann **tasted** the soup\" is action (she did something)."}
    ],
    "sva": [
      {p:"A subject and its verb must agree in number: singular subject → singular verb, plural subject → plural verb. **She writes. They write.**"},
      {steps:[
        "Two subjects joined by **and** → plural verb: The student and the committee members **write** every day.",
        "One subject with two verbs → both verbs agree with it: Interviews **are** one way to collect data and **allow** researchers to learn more.",
        "A phrase between the subject and verb doesn't change anything. Find the real subject: The student, as well as the committee members, **is** excited. The focus of the interviews **was** nine participants.",
        "Two singular subjects joined by **or** or **nor** → singular verb: The chairperson or the CEO **approves** the proposal."]},
      {tip:"Cross out prepositional phrases and \"as well as / along with\" phrases first. What's left is the real subject."}
    ],
    "pron": [
      {p:"An **antecedent** is the word a pronoun stands for. In \"President Lincoln delivered **his** Gettysburg Address,\" Lincoln is the antecedent of his. A pronoun must agree with its antecedent in number."},
      {steps:[
        "A phrase between doesn't matter: A can of lima beans sits on **its** shelf.",
        "Singular indefinite pronouns take singular pronouns: each, either, neither, one, no one, nobody, anyone, someone, everyone, everybody, everything… → Each of the clerks does work around **his or her** office.",
        "Plural indefinite pronouns take plural pronouns: several, few, both, many → Both do a good job in **their** office.",
        "Any, all, most, none, some can go either way. Look at the noun after \"of\": Some of the **baggage** was damaged when **it** fell. Some of the **seniors** wore **their** robes."]},
      {h:"Vague pronouns"},
      {p:"A pronoun is **vague** when it points to a whole idea instead of a specific word, usually with this, that, it, or which. Fix it by adding a noun (this **lack of revision**) or replacing the pronoun."},
      {h:"Who, that, which"},
      {p:"Use **who** for people and **that** for animals and things: She is the girl **who** lives next door. Use **that** for essential (restrictive) clauses with no commas: Cupcakes **that** take hours are crowd-pleasers. Use **which** for nonessential clauses with commas: The cake, **which** was delicious, was pink."},
      {h:"Formal writing rules"},
      {p:"Write literary analysis in **third person**, include the **title and author**, and don't use symbols (& or +) or contractions (she'll)."}
    ],
    "comp": [
      {h:"After a linking verb"},
      {p:"Linking verbs (be, am, is, are, was, sound, taste, feel, seem, become) connect the subject to a word that renames or describes it."},
      {table:{head:["Complement", "What it does", "Example"], rows:[
        ["Predicate noun (nominative)", "a noun that renames the subject", "The train is a **monorail**."],
        ["Predicate adjective", "an adjective that describes the subject", "The potatoes were **delicious**."]
      ]}},
      {h:"After an action verb"},
      {p:"A **direct object** receives the action of a transitive (action) verb and answers \"what?\" or \"whom?\": Sandy took the **candy**. A linking verb can't have a direct object."},
      {p:"An **indirect object** names the person to whom or for whom something is done. It comes between the verb and the direct object, and there has to be a direct object first: He showed **us** the tricks. (us = IO, tricks = DO)"},
      {tip:"Test for an indirect object: move it after \"to\" or \"for.\" Mom baked us a cake → Mom baked a cake **for us**."}
    ]
  },

  problems(k){
    const S = {pos:"Parts of speech", conj:"Conjunctions & verbs", sva:"Agreement", pron:"Pronouns", comp:"Complements"};
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], S[sec], text, opts, a, [why], {label});
    const mc = (sec, text, opts, why, label) => k.choice([sec], S[sec], text, opts, opts[0], [why], {shuffle:true, label});

    /* ===== Parts of speech ===== */
    const ps = cat("pos", POS, "What part of speech is the underlined word?");
    ps("Sheila sings __well__.", "Adverb", "It tells how she sings, so it describes a verb.");
    ps("Two __hungry__ students waited by the door.", "Adjective", "It describes the noun students.");
    ps("__Wow__, that was close!", "Interjection", "It shows strong feeling and doesn't depend on the rest of the sentence.");
    ps("The bell rings __at__ noon.", "Preposition", "It connects noon (its object) to the verb rings.");
    ps("__She__ left early to catch the bus.", "Pronoun", "It takes the place of a noun (a person's name).");
    ps("His __courage__ inspired the whole team.", "Noun", "It names a thing (an abstract noun: an idea or quality).");
    ps("We __often__ eat pizza on Fridays.", "Adverb", "It tells when we eat.");
    ps("I love __Greek__ salad.", "Adjective", "A proper adjective: formed from a proper noun and describes salad.");
    ps("Tim lives __nearby__.", "Adverb", "It tells where he lives.");
    ps("The cat __slept__ on the warm rug.", "Verb", "It shows action.");
    ps("Rosa __and__ Lee are cousins.", "Conjunction", "It joins two words of equal rank.");
    ps("__The__ movie lasted three hours.", "Adjective", "The is an article, and articles are adjectives.");
    ps("Frisky is __obedient__.", "Adjective", "It describes Frisky (a predicate adjective after is).");
    ps("The coach was __extremely__ proud.", "Adverb", "It describes the adjective proud.");
    ps("The kids ran __through__ the sprinklers.", "Preposition", "It begins the phrase through the sprinklers.");

    const ca = cat("pos", ["Concrete", "Abstract"], "Is the underlined noun concrete or abstract?");
    ca("Her __honesty__ surprised everyone.", "Abstract", "You can't see or touch honesty. It's an idea or quality.");
    ca("I dropped my __sandwich__.", "Concrete", "You can see and touch a sandwich.");
    ca("Their __friendship__ lasted for years.", "Abstract", "Friendship is a feeling or idea.");
    ca("The __pencil__ rolled off the desk.", "Concrete", "A pencil is a physical object.");
    ca("We felt real __hunger__ after the hike.", "Abstract", "Hunger is a feeling (the slides list it as abstract).");

    mc("pos", "Which word is a proper noun?", ["Sacramento", "city", "capital", "river"], "It names one particular place, so it's capitalized.");
    mc("pos", "The words a, an, and the are called…", ["articles", "pronouns", "prepositions", "interjections"], "Articles are a kind of adjective.");
    mc("pos", "Adverbs usually tell…", ["how, when, or where", "who or what", "which one or how many", "to whom or for whom"],
      "Sings well (how), often eats (when), lives nearby (where).");
    mc("pos", "What is the object of the preposition? \"The witch gave the apple to the silly girl.\"", ["girl", "apple", "witch", "silly"],
      "To is the preposition, and the phrase ends with the noun girl.");

    /* ===== Conjunctions & verbs ===== */
    const cj = cat("conj", CONJ, "What kind of conjunction is underlined?");
    cj("Sean was tired, __so__ he went to bed early.", "Coordinating", "So is one of the FANBOYS joining two equal clauses.");
    cj("__Either__ you call her __or__ I will.", "Correlative", "Either…or is a pair.");
    cj("__Because__ it rained, the game was canceled.", "Subordinating", "It starts a dependent clause (because it rained) attached to an independent one.");
    cj("Mia missed the bus; __however__, she still made it on time.", "Conjunctive adverb", "Semicolon before, comma after, linking two equal clauses.");
    cj("__Both__ pizza __and__ tacos are on the menu.", "Correlative", "Both…and work as a pair.");
    cj("I wanted to go, __but__ I had homework.", "Coordinating", "But is a FANBOYS conjunction.");
    cj("We left __after__ the movie ended.", "Subordinating", "After the movie ended can't stand alone; it's a dependent clause.");
    cj("The road was icy; __consequently__, school started late.", "Conjunctive adverb", "It shows a result between two equal clauses.");
    cj("__Neither__ Sam __nor__ Ana knew the answer.", "Correlative", "Neither…nor is a pair.");
    cj("__Although__ he studied, the test was hard.", "Subordinating", "Although starts a dependent clause.");

    const vb = cat("conj", VERB, "What kind of verb is underlined?");
    vb("The soup __tastes__ salty.", "Linking verb", "It links soup to salty (soup = salty). Nobody is doing anything.");
    vb("Ann __tasted__ the soup.", "Action verb", "Ann did something to the soup.");
    vb("The boy __is__ running.", "Helping verb", "Is helps the main verb running.");
    vb("I __have__ listened to that song before.", "Helping verb", "Have helps the main verb listened.");
    vb("She __seems__ tired today.", "Linking verb", "It links she to tired.");
    vb("My brother __became__ a firefighter.", "Linking verb", "It links brother to firefighter, which renames him.");
    vb("Tom __screams__ at scary movies.", "Action verb", "It tells what Tom does.");
    vb("We __were__ late again.", "Linking verb", "A form of be linking we to late.");

    mc("conj", "Which list is the coordinating conjunctions (FANBOYS)?",
      ["for, and, nor, but, or, yet, so", "for, after, now, but, or, yet, since", "few, and, not, both, or, yes, so", "for, although, nor, because, or, yet, so"],
      "For, And, Nor, But, Or, Yet, So.");
    mc("conj", "Which word is a conjunctive adverb?", ["therefore", "because", "and", "while"],
      "Therefore links two equal clauses after a semicolon. Because and while are subordinating; and is coordinating.");

    /* ===== Subject-verb agreement ===== */
    const sv = (sent, opts, why) => k.choice(["sva"], S.sva, sent, opts, opts[0], [why], {label:"Which verb agrees with the subject?"});
    sv("The student, as well as the committee members, ___ excited.", ["is", "are"], "The subject is student (singular). \"As well as the committee members\" doesn't count.");
    sv("The box of crayons ___ on the top shelf.", ["is", "are"], "Box is the subject. Of crayons is a prepositional phrase.");
    sv("The coach and the players ___ a rematch.", ["want", "wants"], "Two subjects joined by and → plural.");
    sv("Neither the teacher nor the principal ___ of the plan.", ["approves", "approve"], "Two singular subjects joined by nor → singular.");
    sv("Strategies that the teacher uses ___ small groups.", ["include", "includes"], "The subject is strategies (plural). \"That the teacher uses\" is in between.");
    sv("The focus of the interviews ___ nine students.", ["was", "were"], "Focus is the subject. Interviews is inside the phrase.");
    sv("The girls on the team ___ every day after school.", ["practice", "practices"], "Girls is plural.");
    sv("Interviews are one way to collect data and ___ researchers to learn more.", ["allow", "allows"], "One subject (interviews) with two verbs: both must agree with it.");
    sv("Either the manager or the owner ___ the paychecks.", ["signs", "sign"], "Two singular subjects joined by or → singular.");
    sv("One of my friends ___ in Texas.", ["lives", "live"], "One is the subject. Of my friends is a phrase.");
    sv("My mom and my aunt ___ every Sunday.", ["call", "calls"], "Joined by and → plural.");
    sv("The student with all the awards ___ nervous.", ["seems", "seem"], "Student is singular. With all the awards doesn't change it.");
    sv("The players, along with their coach, ___ on the bus.", ["are", "is"], "Players is plural. \"Along with their coach\" doesn't count.");
    mc("sva", "When two singular subjects are joined by \"or\" or \"nor,\" the verb should be…", ["singular", "plural", "past tense", "either one"],
      "The chairperson or the CEO approves the proposal.");

    /* ===== Pronouns & antecedents ===== */
    const pr = (sent, opts, why) => k.choice(["pron"], S.pron, sent, opts, opts[0], [why], {shuffle:true, label:"Which pronoun fits?"});
    pr("Each of the clerks does work around ___ office.", ["his or her", "their", "its", "our"], "Each is singular, so the pronoun is singular.");
    pr("Both of the girls did ___ best.", ["their", "her", "its", "his or her"], "Both is plural.");
    pr("A can of beans sits on ___ shelf.", ["its", "their", "his", "our"], "The antecedent is can (singular). Of beans is just a phrase.");
    pr("Some of the seniors wore ___ robes.", ["their", "its", "his or her", "her"], "Some refers to seniors (plural) here.");
    pr("Some of the baggage was damaged when ___ fell.", ["it", "they", "them", "those"], "Some refers to baggage (singular) here.");
    pr("Neither of the dogs finished ___ dinner.", ["its", "their", "them", "theirs"], "Neither is singular, so the pronoun is singular.");
    pr("Several of the players forgot ___ jerseys.", ["their", "his or her", "its", "his"], "Several is plural.");
    pr("Everyone should bring ___ own pencil.", ["his or her", "their", "its", "our"], "Everyone is a singular indefinite pronoun, so the class rule is a singular pronoun.");
    pr("She is the girl ___ lives next door.", ["who", "that", "which", "whom"], "Use who for people.");
    pr("We adopted a dog ___ loves to swim.", ["that", "who", "whom", "whose"], "Use that for animals.");
    pr("The cake, ___ was delicious, was pink.", ["which", "that", "who", "whom"], "Extra information set off by commas → which.");
    pr("Cupcakes ___ take hours to make are usually crowd-pleasers.", ["that", "which", "who", "whom"], "Essential clause (it tells which cupcakes), no commas → that.");
    pr("My bike, ___ is ten years old, still works.", ["which", "that", "who", "whom"], "Nonessential, with commas → which.");

    mc("pron", "What is the antecedent of her? \"Maria lent Tom her notebook before class.\"", ["Maria", "Tom", "notebook", "class"],
      "Her stands for Maria.");
    mc("pron", "Which fixes the vague pronoun? \"Jake's essay had no revisions and messy punctuation. This lowered his grade.\"",
      ["This lack of revision lowered his grade.", "That is what really lowered his grade.", "It was the thing that lowered his grade.", "Which is what ended up lowering his grade."],
      "Adding a noun after this says exactly what lowered the grade.");
    mc("pron", "Which sentence fits the rules for a formal literary analysis?",
      ["In The Giver, Lois Lowry shows that memory carries pain.", "I think The Giver shows that memory carries pain.", "In The Giver, you see memory & pain go together.", "The book shows that memory can't avoid pain."],
      "Third person, title and author included, no symbols or contractions.");

    /* ===== Complements ===== */
    const cp = cat("comp", COMP, "The underlined word is a…");
    cp("Ms. Ortiz is our __coach__.", "Predicate noun", "Is links Ms. Ortiz to coach, a noun that renames her.");
    cp("The soup smells __amazing__.", "Predicate adjective", "Smells is linking here, and amazing describes soup.");
    cp("Omar kicked the __ball__ over the fence.", "Direct object", "Kicked what? The ball.");
    cp("Grandpa told __us__ a story.", "Indirect object", "Told a story to whom? Us. It comes before the direct object (story).");
    cp("Grandpa told us a __story__.", "Direct object", "Told what? A story.");
    cp("The wool sweater feels __itchy__.", "Predicate adjective", "Feels links sweater to itchy, which describes it.");
    cp("Her brother became a __lawyer__.", "Predicate noun", "Became is linking, and lawyer renames brother.");
    cp("I made __Carla__ a bracelet.", "Indirect object", "Made a bracelet for whom? Carla.");
    cp("The movie was __sad__.", "Predicate adjective", "Sad describes movie after the linking verb was.");
    cp("Leo showed the __class__ his project.", "Indirect object", "Showed his project to whom? The class.");
    cp("She opened the __door__ slowly.", "Direct object", "Opened what? The door.");
    cp("His name is __Sam__.", "Predicate noun", "Sam renames name.");

    mc("comp", "Which sentence has no direct object?", ["Salmon swim upstream.", "She opened the door.", "Sam painted the picture.", "The dryer eats my socks."],
      "Swim what? Nothing. Upstream tells where (an adverb), so there's no direct object.");
    mc("comp", "Can a sentence have an indirect object without a direct object?", ["No, it needs a direct object first", "Yes, with any action verb", "Yes, but only with linking verbs", "Only in questions"],
      "The verb must have a direct object before it can have an indirect object.");
    mc("comp", "Which sentence has an indirect object?", ["Mom baked us a cake.", "Mom baked a cake.", "The cake was chocolate.", "Mom is a great baker."],
      "Us is the indirect object: a cake for us.");
  },

  drills: {
    /* complements from random names × templates */
    "comp": k => {
      const N = ["Ava", "Marcus", "Priya", "Diego", "Hana", "Eli", "Zoe", "Jamal"], who = pick(N), r = Math.random();
      if (r < 0.25){ const [v, n] = pick([["is", "the captain"], ["became", "a nurse"], ["was", "the winner"], ["is", "our neighbor"], ["remained", "the leader"]]);
        const parts = n.split(" "), last = parts.pop();
        return {kind:"choice", text:`${who} ${v} ${parts.join(" ")} __${last}__.`, fields:[k.F.choice("The underlined word is a…", COMP, "Predicate noun")], steps:[`"${v}" is a linking verb, and ${last} is a noun that renames ${who}.`]}; }
      if (r < 0.5){ const [v, a] = pick([["seems", "nervous"], ["looks", "happy"], ["felt", "tired"], ["became", "quiet"], ["is", "ready"], ["sounded", "excited"]]);
        return {kind:"choice", text:`${who} ${v} __${a}__.`, fields:[k.F.choice("The underlined word is a…", COMP, "Predicate adjective")], steps:[`"${v}" is a linking verb here, and ${a} describes ${who}.`]}; }
      const [v, o] = pick([["gave", "an answer"], ["sent", "a postcard"], ["handed", "the keys"], ["wrote", "a note"], ["showed", "the photos"], ["threw", "the ball"]]);
      const to = pick(["her friend", "the teacher", "his sister", "the coach", "us"]), op = o.split(" "), ob = op.pop();
      const io = to.split(" ").pop();
      if (r < 0.75) return {kind:"choice", text:`${who} ${v} ${to.replace(io, "__" + io + "__")} ${o}.`, fields:[k.F.choice("The underlined word is a…", COMP, "Indirect object")], steps:[`${capW(v)} ${o} to whom? ${capW(to)}.`, COMP_WHY["Indirect object"]]};
      return {kind:"choice", text:`${who} ${v} ${to} ${op.join(" ")} __${ob}__.`, fields:[k.F.choice("The underlined word is a…", COMP, "Direct object")], steps:[`${capW(v)} what? ${capW(o)}.`, COMP_WHY["Direct object"]]};
    },
    /* subject-verb agreement with interrupting phrases */
    "sva": k => {
      const SUB = [["The captain", 1], ["The captains", 2], ["My cousin", 1], ["My cousins", 2], ["Each of the players", 1], ["Both of the players", 2],
        ["Everyone in the band", 1], ["Several students", 2], ["The singer and the drummer", 2], ["Neither the singer nor the drummer", 1], ["One of the dancers", 1], ["The girls", 2]];
      const MID = ["", "", " from the other school", " with the blue backpacks", " in the front row", ", along with the coaches,", ", as well as her friends,"];
      const V = [["is", "are", "ready to leave"], ["was", "were", "late again"], ["has", "have", "a question"], ["seems", "seem", "nervous"], ["wants", "want", "a turn"]];
      const [s, n] = pick(SUB), [one, many, rest] = pick(V);
      const mid = /and|nor|of|Everyone|Several/.test(s) ? "" : pick(MID);
      const a = n === 1 ? one : many;
      const why = [`The subject is "${s.replace(/ (of the|in the) .*/, "")}"${/ of | in the /.test(s) ? ` (the phrase "${s.match(/ ((of|in) the .*)/)[1]}" doesn't count)` : ""}.`,
        mid ? `"${mid.replace(/^, |,$/g, "").trim()}" sits between the subject and verb but doesn't change anything.` : null,
        /and/.test(s) ? "Joined by and → plural." : /nor/.test(s) ? "Two singular subjects joined by nor → singular." : n === 1 ? "Singular subject → singular verb." : "Plural subject → plural verb."].filter(Boolean);
      return {kind:"choice", text:`${s}${mid} ___ ${rest}.`, fields:[k.F.choice("Which verb agrees with the subject?", [one, many], a)], steps:why};
    }
  }
});
})();
