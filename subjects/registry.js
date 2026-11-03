/* =====================================================================
   THE LIST OF SUBJECTS. Adding content = add a file + edit this list.

   id       short, unique, never rename it (your stats are saved under it)
   name     shown on the subject switcher
   icon     one emoji
   type     "terms"    → type the word from its definition/sentence/audio (vocab, AP World terms…)
            "problems" → typed-answer problems with hints + solutions (math, chem calculations…)
   files    content files, loaded the first time the subject is opened (in this order)
   blurb    one line under the switcher

   terms-only:     setLabel ("Chapter"), groupLabel/groupsLabel ("Root"/"Roots"), itemLabel ("word"), defaultSet
   problems-only:  defaultSection (e.g. "u4:4.3")
   ===================================================================== */
window.SUBJECTS = [
  {
    id: "vocab", name: "English Vocab", icon: "📚", type: "terms",
    files: ["subjects/english/vocab.js"],
    blurb: "Pick a chapter, pick a mode. Exact spelling only (accents optional).",
    setLabel: "Chapter", groupLabel: "Root", groupsLabel: "Roots", itemLabel: "word", defaultSet: 2
  },
  {
    id: "math3", name: "Honors Math 3", icon: "📐", type: "problems",
    files: ["subjects/math3/unit4.js"],          // add "subjects/math3/unit5.js" etc. here
    blurb: "Type answers any equivalent way, e.g. (2x+1)/(x-2), 3/5, DNE, ∞, none.",
    defaultSection: "u4:4.3"
  }

  // Example for later (make the file first, then uncomment):
  // {
  //   id: "apwh", name: "AP World", icon: "🌍", type: "terms",
  //   files: ["subjects/apworld/unit1.js"],
  //   blurb: "Type the term from its description.",
  //   setLabel: "Unit", groupLabel: "Topic", groupsLabel: "Topics", itemLabel: "term"
  // },
];
