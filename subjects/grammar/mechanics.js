/* English Grammar · Mechanics. Source: class slideshow "Mechanics". */
(() => {
const TITLE = ["Italics (underline)", "Quotation marks"];
const MARK = ["Semicolon", "Colon", "Dash", "Parentheses", "Brackets", "Ellipsis"];
const pick = a => a[Math.floor(Math.random() * a.length)];

Study.addUnit("grammar", {
  id: "mech",
  name: "Mechanics",
  short: "Mechanics",
  sections: [
    {id:"abbr", name:"Abbreviations & Capitals"},
    {id:"titles", name:"Titles & Numbers"},
    {id:"punct", name:"Punctuation Marks"},
    {id:"apos", name:"Apostrophes"}
  ],

  notes: {
    "abbr": [
      {p:"An **abbreviation** is a shortened word, often with a period: Mr., Dr., M.D., D.D.S. (dentist), Esq. (attorney). An **acronym** uses the first letter of each word: FBI, IRS, YMCA."},
      {table:{head:["Abbreviation", "Means", "Example"], rows:[
        ["i.e.", "that is, in other words", "Mary likes Tom, Stan, and Bob (i.e., Mary likes boys)."],
        ["e.g.", "for example", "Most fruit (e.g., cherries and peaches) is grown here."],
        ["in re", "in the matter of, regarding", "I am answering your letter in re your request."]
      ]}},
      {h:"Capitals"},
      {p:"Capitalize names of people, specific places, oceans, ships, planes, buildings, organizations, and religious names: Atlantic Ocean, Fido, Buddha. **Mom** is capitalized when it's used as a name, but not after my: **my mom**."},
      {p:"Capitalize named time periods and events: the **Dust Bowl Era**, the **Civil War**. But not a general word: an era, a period in history."}
    ],
    "titles": [
      {table:{head:["Italics (or underline)", "Quotation marks"], rows:[
        ["books, newspapers, magazines", "chapters, articles"],
        ["long poems (The Iliad), plays", "short poems (\"The Road Not Taken\")"],
        ["movies, TV series", "single TV episodes"],
        ["ships, trains, spacecraft", "songs"],
        ["paintings, sculptures, legal cases", "short stories, essays"]
      ]}},
      {tip:"Big, whole works get italics. Parts of a bigger work, or short works, get quotation marks."},
      {h:"Numbers"},
      {p:"Spell out numbers one through ten (three apples) and use numerals above that (23 apples). **Always** spell out a number that starts a sentence: One hundred cats sat in the room."}
    ],
    "punct": [
      {table:{head:["Mark", "Use", "Example"], rows:[
        ["Semicolon ;", "joins two independent clauses without a conjunction", "I love cake; I love pie."],
        ["Colon :", "formal letters; introduces a list after a complete sentence", "Bring these items: a pencil, an eraser, and a pen."],
        ["Hyphen -", "joins compound nouns and compound adjectives before a noun", "president-elect, chocolate-covered almonds"],
        ["Parentheses ( )", "extra information the reader could almost skip", "That jacket cost too much ($150.00)."],
        ["Dash —", "a sudden break for emphasis; no spaces around it", "We are all alike—on the inside."],
        ["Brackets [ ]", "your own correction or comment inside a quotation", "\"I have many fiends [sic] in high places.\""],
        ["Ellipsis . . .", "shows words left out of a quotation", "\"No man is an island . . . every man is here.\""]
      ]}},
      {warn:"A colon can't come right after a verb. Wrong: The items to bring are: a pencil… Right: Bring these items: a pencil…"},
      {tip:"[sic] means the mistake was in the original, not yours. An ellipsis at the end of a sentence gets a fourth dot (the period): . . . ."}
    ],
    "apos": [
      {table:{head:["Noun", "Rule", "Example"], rows:[
        ["Singular", "add 's", "the cat's tail, the woman's house"],
        ["Singular, one syllable, ends in s", "add 's", "James's house"],
        ["Singular, two+ syllables, ends in s or z", "add just '", "Collins' coat, Moses' brother"],
        ["Plural ending in s", "add just '", "the girls' books, the Smiths' pool"],
        ["Plural not ending in s", "add 's", "children's toys, women's meeting"]
      ]}},
      {tip:"Make the noun plural first (if it's plural), then add the apostrophe."}
    ]
  },

  problems(k){
    const S = {abbr:"Abbreviations", titles:"Titles & numbers", punct:"Punctuation", apos:"Apostrophes"};
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], S[sec], text, opts, a, [why], {label});
    const mc = (sec, text, opts, why, label) => k.choice([sec], S[sec], text, opts, opts[0], [why], {shuffle:true, label});

    mc("abbr", "What does i.e. mean?", ["that is, in other words", "for example, such as", "regarding, about", "and other things"], "From Latin id est.");
    mc("abbr", "What does e.g. mean?", ["for example", "that is, in other words", "regarding", "and so on"], "From Latin exempli gratia.");
    mc("abbr", "What does in re mean?", ["in the matter of, regarding", "that is, in other words", "for example, such as", "in return for something"], "I am answering your letter in re your request.");
    mc("abbr", "Which sentence uses e.g. correctly?", ["Bring a snack (e.g., fruit or crackers).", "Bring a snack (e.g., that is, something to eat).", "Bring a snack (e.g., in other words, food).", "Bring a snack (e.g., regarding the trip)."],
      "E.g. introduces examples.");
    mc("abbr", "Which is an acronym?", ["FBI", "Dr.", "Mr.", "Esq."], "An acronym uses the first letter of each word: Federal Bureau of Investigation.");
    mc("abbr", "Which sentence is capitalized correctly?", ["My mom drove us to the Pacific Ocean.", "My Mom drove us to the Pacific Ocean.", "My mom drove us to the Pacific ocean.", "My mom drove us to the pacific Ocean."],
      "My mom (not used as a name) stays lowercase. Pacific Ocean is a specific place.");
    mc("abbr", "Which sentence is capitalized correctly?", ["I asked Mom for a ride.", "I asked mom for a ride.", "I asked my Mom for a ride.", "i asked Mom for a ride."],
      "Mom used as a name is capitalized.");
    mc("abbr", "Which sentence is capitalized correctly?", ["Farms dried up during the Dust Bowl Era.", "Farms dried up during the dust bowl era.", "Farms dried up during the Dust Bowl era.", "Farms dried up during an Era of dust."],
      "A named era is capitalized; a general era isn't.");

    const ti = cat("titles", TITLE, "How should this title be marked?");
    ti("A Farewell to Arms (a novel)", "Italics (underline)", "Books get italics.");
    ti("The Road Not Taken (a short poem)", "Quotation marks", "Short poems get quotation marks.");
    ti("The Most Dangerous Game (a short story)", "Quotation marks", "Short stories get quotation marks.");
    ti("Star Wars (a movie)", "Italics (underline)", "Movies get italics.");
    ti("Titanic (a ship)", "Italics (underline)", "Ships get italics.");
    ti("White Christmas (a song)", "Quotation marks", "Songs get quotation marks.");
    ti("Sports Illustrated (a magazine)", "Italics (underline)", "Magazines and newspapers get italics.");
    ti("The Iliad (an epic poem)", "Italics (underline)", "Long poems get italics.");
    ti("The One with the Proposal (one episode of a TV show)", "Quotation marks", "A single episode gets quotation marks; the series gets italics.");
    ti("Brown v. Board of Education (a court case)", "Italics (underline)", "Legal decisions get italics.");
    ti("The Thinker (a sculpture)", "Italics (underline)", "Works of art get italics.");
    ti("Chapter titles inside a book", "Quotation marks", "Parts of a larger work get quotation marks.");

    mc("titles", "Which sentence writes the number correctly?", ["One hundred cats sat in the room.", "100 cats sat in the room.", "One-hundred cats sat in the Room.", "100 Cats sat in the room."],
      "Always spell out a number that starts a sentence.");
    mc("titles", "Which sentence follows the class number rules?", ["I have three apples and 23 grapes.", "I have 3 apples and 23 grapes.", "I have three apples and twenty-three grapes.", "I have 3 apples and twenty-three grapes."],
      "Spell out one through ten; use numerals above ten.");

    const mk = cat("punct", MARK, "Which punctuation mark is used to…");
    mk("show that a mistake was in the original quotation, using [sic]", "Brackets", "Brackets mark your own comment inside someone else's words.");
    mk("show that words were left out of a quotation", "Ellipsis", "Three spaced dots: . . .");
    mk("set off extra information the reader could almost skip", "Parentheses", "Batman (our twenty-year-old cat) is a gray shorthair.");
    mk("create a sudden break for emphasis", "Dash", "The zealots have only one goal—money.");
    mk("join two independent clauses without a conjunction", "Semicolon", "I love cake; I love pie.");
    mk("introduce a list after a complete sentence", "Colon", "Please bring these items: a pencil, an eraser, and a pen.");
    mk("end the greeting of a formal letter (Dear Miss Jones)", "Colon", "Dear Miss Jones: / To Whom It May Concern:");

    mc("punct", "Which sentence uses a colon correctly?", ["Please bring these items: a pencil, an eraser, and a pen.", "The items to bring are: a pencil, an eraser, and a pen.", "Please bring: a pencil, an eraser, and a pen.", "Please bring these: items a pencil and a pen."],
      "A colon follows a complete sentence, never a verb.");
    mc("punct", "Which sentence uses a semicolon correctly?", ["I love cake; my brother loves pie.", "I love cake; and pie.", "I love; cake and pie.", "Because I love cake; I bought some."],
      "Both sides of a semicolon must be independent clauses.");
    mc("punct", "Which is hyphenated correctly?", ["the chocolate-covered almonds", "the chocolate covered-almonds", "the-chocolate covered almonds", "the chocolate covered almonds-"],
      "Join the two words that work together as one adjective before the noun.");
    mc("punct", "Which shows a dash used correctly?", ["Our team has one weakness—defense.", "Our team has one weakness — defense.", "Our team—has one weakness defense.", "Our team has one—weakness, defense."],
      "A dash sets off a short, emphatic ending with no spaces around it.");
    mc("punct", "How do you show words were left out at the end of a quoted sentence?", ["An ellipsis plus a period (. . . .)", "Three spaced dots only (. . .)", "Brackets around the word [omitted]", "A dash at the end of the quote (—)"],
      "The fourth dot is the sentence's period.");

    const ap = (text, opts, why) => k.choice(["apos"], S.apos, text, opts, opts[0], [why], {shuffle:true, label:"Which possessive is correct?"});
    ap("the tail of one cat", ["the cat's tail", "the cats' tail", "the cats tail", "the cat' tail"], "Singular noun → add 's.");
    ap("the house that belongs to James", ["James's house", "James' house", "Jame's house", "Jameses house"], "One syllable ending in s → add 's (class rule).");
    ap("the brother of Moses", ["Moses' brother", "Moses's brother", "Mose's brother", "Moseses brother"], "Two syllables ending in s → add just the apostrophe.");
    ap("the books that belong to the girls", ["the girls' books", "the girl's books", "the girls's books", "the girls books"], "Plural ending in s → add just the apostrophe.");
    ap("the toys that belong to the children", ["the children's toys", "the childrens' toys", "the childrens toys", "the children' toys"], "Plural not ending in s → add 's.");
    ap("the pool that belongs to the Smith family", ["the Smiths' pool", "the Smith's pool", "the Smiths's pool", "the Smiths pool"], "Make it plural (Smiths), then add the apostrophe.");
    ap("the dens of the wolves", ["the wolves' dens", "the wolf's dens", "the wolves's dens", "the wolve's dens"], "Plural (wolves) ending in s → add just the apostrophe.");
    ap("the coat that belongs to Mr. Collins", ["Mr. Collins' coat", "Mr. Collins's coat", "Mr. Collin's coat", "Mr. Collinses coat"], "Two syllables ending in s → just the apostrophe.");
  },

  drills: {
    "apos": k => {
      const OBJ = ["backpack", "phone", "jacket", "locker", "notebook", "bike"];
      const N = [
        ["one dog", "dog", "the dog's", ["the dogs'", "the dogs", "the dog'"], "Singular → add 's."],
        ["one teacher", "teacher", "the teacher's", ["the teachers'", "the teachers", "the teacher'"], "Singular → add 's."],
        ["Chris", "Chris", "Chris's", ["Chris'", "Chri's", "Chrises"], "One syllable ending in s → add 's."],
        ["Jess", "Jess", "Jess's", ["Jess'", "Jes's", "Jesses"], "One syllable ending in s → add 's."],
        ["Carlos", "Carlos", "Carlos'", ["Carlos's", "Carlo's", "Carloses"], "Two syllables ending in s → add just '."],
        ["Mr. Perez", "Mr. Perez", "Mr. Perez'", ["Mr. Perez's", "Mr. Pere'z", "Mr. Perezes"], "Two syllables ending in z → add just '."],
        ["the students", "students", "the students'", ["the student's", "the students's", "the students"], "Plural ending in s → add just '."],
        ["the players", "players", "the players'", ["the player's", "the players's", "the players"], "Plural ending in s → add just '."],
        ["the men", "men", "the men's", ["the mens'", "the mens", "the men'"], "Plural not ending in s → add 's."],
        ["the women", "women", "the women's", ["the womens'", "the womens", "the women'"], "Plural not ending in s → add 's."],
        ["the Garcias", "Garcias", "the Garcias'", ["the Garcia's", "the Garciases", "the Garcias's"], "Plural family name ending in s → add just '."]
      ];
      const [who, , a, wrong, why] = pick(N), o = pick(OBJ);
      const opts = [a, ...wrong].map(x => `${x} ${o}`);
      return {kind:"choice", text:`the ${o} that belongs to ${who}`, fields:[k.F.choice("Which possessive is correct?", opts, `${a} ${o}`, true)], steps:[why]};
    }
  }
});
})();
