/* =====================================================================
   THE LIST OF SUBJECTS. Adding content = add a file + edit this list.

   id       short, unique, never rename it (your stats are saved under it)
   name     shown on the subject switcher
   short    shorter name for the phone switcher when there are 3+ subjects ("Chem")
   icon     an icon name from js/icons.js. Every subject and group needs its own (tools/verify.js checks)
   type     "terms"    → type the word from its definition/sentence/audio (vocab, AP World terms…)
            "problems" → typed-answer problems with hints + solutions (math, chem calculations…)
   group    which class group it sits under (see GROUPS below): english, math, science, history
   inGroup  optional shorter name shown inside its group ("Vocab" under Honors English 10)
   tools    round tools: "pad" scratchpad, "calc" calculator, "pt" periodic table
   files    content files, loaded the first time the subject is opened (in this order)
   blurb    optional short tip under the section picker (leave it out if it isn't needed)
   passageSets  true when passages carry sets of any size (ACT Reading and Science)
   singlePassage true when each passage has just one question (SAT), so the checker doesn't expect sets of three
   timed    optional {q, min}: the real test's length, for the Timed Test mode
   practiceDesc  optional line under the Practice button, for subjects whose questions aren't from class notes

   terms-only:     setLabel ("Chapter"), groupLabel/groupsLabel ("Root"/"Roots"), itemLabel ("word"), defaultSet
   problems-only:  defaultSection (e.g. "u4:4.3")
   ===================================================================== */
window.GROUPS = [
  {id: "english", name: "Honors English 10", short: "English", icon: "letters"},
  {id: "math", name: "Math", icon: "sigma"},
  {id: "science", name: "Science", icon: "atom"},
  {id: "history", name: "History", icon: "column"},
  {id: "prep", name: "SAT & ACT", short: "SAT/ACT", icon: "bubbles"}
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
    id: "math3", name: "Honors Math 3", short: "Math 3", group: "math", icon: "parabola", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/math3/unit4.js", "subjects/math3/unit5.js"],          // add "subjects/math3/unit6.js" etc. here
    blurb: "Any equivalent form works, like (2x+1)/(x-2) or DNE",
    defaultSection: "u4:4.3"
  },
  {
    id: "calcab", name: "AP Calculus AB", short: "Calc AB", group: "math", icon: "fx", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/calc/kit.js", "subjects/calcab/unit1.js", "subjects/calcab/unit2.js", "subjects/calcab/unit3.js", "subjects/calcab/unit4.js", "subjects/calcab/more.js"],
    blurb: "Exact answers work, like 1/4, 5/(2π), or ln(7) + 3/7",
    defaultSection: "u1:1.1"
  },
  {
    id: "calc", name: "Calculus BC", short: "Calc BC", group: "math", icon: "integral", type: "problems", tools: ["pad", "calc"],
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
    id: "apbio", name: "AP Biology", short: "AP Bio", group: "science", icon: "dna", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/apbio/unit0.js", "subjects/apbio/unit1.js", "subjects/apbio/unit2.js", "subjects/apbio/unit3.js", "subjects/apbio/unit4.js", "subjects/apbio/unit5.js", "subjects/apbio/unit6.js", "subjects/apbio/unit7.js", "subjects/apbio/unit8.js", "subjects/apbio/notes-plus.js", "subjects/apbio/frq.js"],
    saqTag: "FRQ",
    defaultSection: "u3:3.1a"
  },
  {
    id: "apcsp", name: "AP Computer Science Principles", short: "AP CSP", group: "science", icon: "code", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/apcsp/unit2.js", "subjects/apcsp/errors.js", "subjects/apcsp/pseudo.js"],
    passageSets: true,
    defaultSection: "u2:2.1"
  },
  {
    id: "apwh", name: "AP World History", short: "AP World", group: "history", icon: "globe", type: "problems",
    files: ["subjects/apworld/unit3.js", "subjects/apworld/unit4.js", "subjects/apworld/extra.js", "subjects/apworld/extra2.js"],
    defaultSection: "u3:13"
  },
  {
    id: "satm", name: "SAT Math", short: "SAT Math", group: "prep", icon: "pi", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/testprep/sat-math.js", "subjects/testprep/sat-math2.js"],
    blurb: "The real section is 44 questions in 70 minutes, calculator allowed",
    practiceDesc: "Test-style questions, shuffled",
    timed: {q:44, min:70},
    defaultSection: "alg:a1"
  },
  {
    id: "satrw", name: "SAT Reading & Writing", short: "SAT R&W", group: "prep", icon: "write", type: "problems",
    files: ["subjects/testprep/sat-rw.js", "subjects/testprep/sat-rw2.js", "subjects/testprep/sat-rw3.js"],
    blurb: "The real section is 54 questions in 64 minutes, one question per passage",
    practiceDesc: "Test-style questions, shuffled",
    singlePassage: true,
    timed: {q:54, min:64},
    defaultSection: "cs:w"
  },
  {
    id: "actm", name: "ACT Math", short: "ACT Math", group: "prep", icon: "setsq", type: "problems", tools: ["pad", "calc"],
    files: ["subjects/testprep/act-math.js", "subjects/testprep/act-math2.js", "subjects/testprep/act-math3.js"],
    blurb: "The real section is 45 questions in 50 minutes, with no formula sheet",
    practiceDesc: "Test-style questions, shuffled",
    timed: {q:45, min:50},
    defaultSection: "nq:n1"
  },
  {
    id: "acte", name: "ACT English", short: "ACT English", group: "prep", icon: "pilcrow", type: "problems",
    files: ["subjects/testprep/act-english.js", "subjects/testprep/act-english2.js", "subjects/testprep/act-english3.js"],
    blurb: "The real section is 50 questions in 35 minutes, about 42 seconds each",
    practiceDesc: "Test-style questions, shuffled",
    singlePassage: true,
    timed: {q:50, min:35},
    defaultSection: "cse:p"
  },
  {
    id: "actr", name: "ACT Reading", short: "ACT Reading", group: "prep", icon: "glasses", type: "problems",
    files: ["subjects/testprep/act-reading.js", "subjects/testprep/act-reading2.js"],
    blurb: "The real section is 36 questions in 40 minutes: four passages, nine questions each",
    practiceDesc: "Test-style questions, shuffled",
    passageSets: true,
    timed: {q:36, min:40},
    defaultSection: "rd:lit"
  },
  {
    id: "acts", name: "ACT Science", short: "ACT Science", group: "prep", icon: "scope", type: "problems",
    files: ["subjects/testprep/act-science.js", "subjects/testprep/act-science2.js"],
    blurb: "The real section is 40 questions in 40 minutes and is optional",
    practiceDesc: "Test-style questions, shuffled",
    passageSets: true,
    timed: {q:40, min:40},
    defaultSection: "sci:dr"
  }
];
