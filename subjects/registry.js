/* =====================================================================
   THE LIST OF SUBJECTS. Adding content = add a file + edit this list.

   id       short, unique, never rename it (your stats are saved under it)
   name     shown on the subject switcher
   short    shorter name for the phone switcher when there are 3+ subjects ("Chem")
   icon     an icon name from js/icons.js: book, graph, globe, flask, atom, quill (or an emoji)
   type     "terms"    → type the word from its definition/sentence/audio (vocab, AP World terms…)
            "problems" → typed-answer problems with hints + solutions (math, chem calculations…)
   files    content files, loaded the first time the subject is opened (in this order)
   blurb    optional short tip under the section picker (leave it out if it isn't needed)

   terms-only:     setLabel ("Chapter"), groupLabel/groupsLabel ("Root"/"Roots"), itemLabel ("word"), defaultSet
   problems-only:  defaultSection (e.g. "u4:4.3")
   ===================================================================== */
window.SUBJECTS = [
  {
    id: "vocab", name: "English Vocab", short: "Vocab", icon: "book", type: "terms",
    files: ["subjects/english/vocab.js"],
    setLabel: "Chapter", groupLabel: "Root", groupsLabel: "Roots", itemLabel: "word", defaultSet: 2
  },
  {
    id: "grammar", name: "English Grammar", short: "Grammar", icon: "quill", type: "problems",
    files: ["subjects/grammar/basics.js", "subjects/grammar/phrases.js", "subjects/grammar/clauses.js", "subjects/grammar/sentences.js", "subjects/grammar/mechanics.js"],
    defaultSection: "ph:ger"
  },
  {
    id: "math3", name: "Honors Math 3", short: "Math 3", icon: "graph", type: "problems",
    files: ["subjects/math3/unit4.js"],          // add "subjects/math3/unit5.js" etc. here
    blurb: "Any equivalent form works, like (2x+1)/(x-2) or DNE",
    defaultSection: "u4:4.3"
  },
  {
    id: "hchem", name: "Honors Chemistry", short: "Chem", icon: "flask", type: "problems",
    files: ["subjects/chem/unit4.js"],
    defaultSection: "u4:4.1"
  },
  {
    id: "apwh", name: "AP World History", short: "AP World", icon: "globe", type: "problems",
    files: ["subjects/apworld/unit3.js", "subjects/apworld/unit4.js"],
    defaultSection: "u3:13"
  }
];
