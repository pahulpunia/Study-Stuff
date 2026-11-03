/* TEMPLATE: a "terms" subject (vocab, AP World, bio terms…).
   1. Copy this file to subjects/<subject>/<name>.js   (e.g. subjects/apworld/unit1.js)
   2. Change "apwh" below to the subject's id from subjects/registry.js
   3. Add the file to that subject's `files` list in subjects/registry.js

   Each set (chapter/unit) has groups (roots/topics); each term is:
     [term, part of speech or category, definition, example sentence with the term in [brackets] or null, [other accepted answers]]
   - The sentence is optional. Without sentences, Fill in the Blank is hidden automatically.
   - Answers are case-insensitive and accents are optional. Put alternate spellings in the last list. */
Study.addTerms("apwh", [
  {n: 1, title: "The Global Tapestry", groups: [
    {r: "Song China", w: [
      ["Neo-Confucianism", "belief system", "A blend of Confucian ideas with Buddhist and Daoist thought that shaped Song China's government and family life.", "[Neo-Confucianism] reinforced filial piety and the civil service exams.", ["Neo Confucianism"]],
      ["Champa rice", "agriculture", "A fast-ripening, drought-resistant rice from Vietnam that boosted Song China's food supply and population.", null]
    ]},
    {r: "Dar al-Islam", w: [
      ["House of Wisdom", "institution", "A center of learning in Abbasid Baghdad where scholars translated and built on Greek, Persian, and Indian texts.", null]
    ]}
  ]}
]);
