/* =====================================================================
   THE LIST OF SUBJECTS. Adding content = add a file + edit this list.

   id       short, unique, never rename it (your stats are saved under it)
   name     shown on the subject switcher
   short    shorter name for the phone switcher when there are 3+ subjects ("Chem")
   icon     an icon name from js/icons.js: book, graph, globe, flask, atom, quill (or an emoji)
   type     "terms"    → type the word from its definition/sentence/audio (vocab, AP World terms…)
            "problems" → typed-answer problems with hints + solutions (math, chem calculations…)
   group    which class group it sits under (see GROUPS below): english, math, science, history
   inGroup  optional shorter name shown inside its group ("Vocab" under Honors English 10)
   tools    round tools: "pad" scratchpad, "calc" calculator, "pt" periodic table
   files    content files, loaded the first time the subject is opened (in this order)
   blurb    optional short tip under the section picker (leave it out if it isn't needed)

   terms-only:     setLabel ("Chapter"), groupLabel/groupsLabel ("Root"/"Roots"), itemLabel ("word"), defaultSet
   problems-only:  defaultSection (e.g. "u4:4.3")
   ===================================================================== */
window.GROUPS = [
  {id: "english", name: "Honors English 10", short: "English", icon: "book"},
  {id: "math", name: "Math", icon: "graph"},
  {id: "science", name: "Science", icon: "flask"},
  {id: "history", name: "History", icon: "globe"}
];
window.SUBJECTS = [
  {
    id: "vocab", name: "English Vocab", short: "Vocab", inGroup: "Vocab", group: "english", icon: "book", type: "terms",
    files: ["subjects/english/vocab.js"],
    setLabel: "Chapter", groupLabel: "Root", groupsLabel: "Roots", itemLabel: "word", defaultSet: 2
  },
  {
    id: "grammar", name: "English Grammar", short: "Grammar", inGroup: "Grammar", group: "english", icon: "quill", type: "problems",
    files: ["subjects/grammar/sentences.js", "subjects/grammar/basics.js", "subjects/grammar/mechanics.js", "subjects/grammar/phrases.js", "subjects/grammar/clauses.js"],
    defaultSection: "ph:ger"
  },
  {
    id: "math3", name: "Honors Math 3", short: "Math 3", group: "math", icon: "graph", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/math3/unit4.js"],          // add "subjects/math3/unit5.js" etc. here
    blurb: "Any equivalent form works, like (2x+1)/(x-2) or DNE",
    defaultSection: "u4:4.3"
  },
  {
    id: "calc", name: "Calculus BC", short: "Calc BC", group: "math", icon: "graph", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/calc/kit.js", "subjects/calc/ch2.js", "subjects/calc/ch3.js", "subjects/calc/ch4.js", "subjects/calc/ch5.js", "subjects/calc/ch6.js", "subjects/calc/ch7.js", "subjects/calc/ch8.js", "subjects/calc/ch9.js", "subjects/calc/ch10.js", "subjects/calc/notes-plus.js"],
    blurb: "Exact answers work, like ln(3), π/4, or e^2. Integrals need their + C",
    defaultSection: "c2:1"
  },
  {
    id: "hchem", name: "Honors Chemistry", short: "Chem", group: "science", icon: "flask", type: "problems", tools: ["pad", "calc", "pt"],
    files: ["subjects/chem/unit4.js"],
    defaultSection: "u4:4.1"
  },
  {
    id: "apbio", name: "AP Biology", short: "AP Bio", group: "science", icon: "leaf", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/apbio/unit0.js", "subjects/apbio/unit1.js", "subjects/apbio/unit2.js", "subjects/apbio/unit3.js", "subjects/apbio/unit4.js", "subjects/apbio/unit5.js", "subjects/apbio/unit6.js", "subjects/apbio/unit7.js", "subjects/apbio/unit8.js", "subjects/apbio/notes-plus.js"],
    defaultSection: "u3:3.1a"
  },
  {
    id: "apwh", name: "AP World History", short: "AP World", group: "history", icon: "globe", type: "problems",
    files: ["subjects/apworld/unit3.js", "subjects/apworld/unit4.js", "subjects/apworld/extra.js"],
    defaultSection: "u3:13"
  }
];
