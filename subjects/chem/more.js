/* Honors Chemistry · Unit 4 extra practice for the two thinnest sections (4.3 lattices & Coulomb's law,
   4.9 bond strength & energy), following the Unit 4 Notes Guide. Bond energies are given in each question. */
(() => {
Study.extendUnit("hchem", "u4", {problems(k){
  const mc = (sec, src, text, opts, why) => k.choice([sec], src, text, opts, opts[0], [].concat(why), {shuffle:true});
  const num = (sec, src, text, ans, why, label) => k.ask([sec], src, text, [{l:label || "Answer", t:"num", a:String(ans), ph:"number"}], [].concat(why));
  const P3 = "4.3 Practice", P9 = "4.9 Practice";
  /* 4.3 */
  mc("4.3", P3, "Which has the stronger ionic bond?", ["[[MgS]]", "[[NaCl]]", "[[KBr]]", "[[LiF]]"], ["[[Mg^2+]] and [[S^2-]] have charges of 2, the rest only 1. Bigger charges win first."]);
  mc("4.3", P3, "Which has the stronger ionic bond?", ["[[NaF]]", "[[NaI]]", "[[NaBr]]", "[[NaCl]]"], ["Same charges, so compare size: [[F^-]] is the smallest anion, so the ions sit closest."]);
  mc("4.3", P3, "Which compound most likely has the highest melting point?", ["[[Al2O3]]", "[[NaCl]]", "[[KCl]]", "[[CaCl2]]"], ["[[Al^3+]] and [[O^2-]] have the biggest charges, so the strongest attraction and highest melting point."]);
  mc("4.3", P3, "Which compound is most likely the most soluble in water?", ["[[KI]]", "[[MgO]]", "[[CaO]]", "[[Al2O3]]"], ["Weaker ionic bonds (small charges, big ions) let water pull the ions apart more easily."]);
  mc("4.3", "4.3 Notes", "According to Coulomb's law, the force between two ions gets weaker when", ["the distance between them increases", "their charges increase", "the ions get smaller", "they are packed into a lattice"], ["Force grows with charge and shrinks with distance."]);
  mc("4.3", "4.3 Notes", "Why is an ionic crystal brittle?", ["A shift lines up like charges, which repel", "Its ions are held together by very weak forces", "Its electrons move freely through the crystal", "It contains no positive ions"], ["A small shift puts + next to + and − next to −; the repulsion cracks it."]);
  mc("4.3", P3, "Rank by ionic bond strength, strongest first: [[KCl]], [[CaO]], [[NaCl]]", ["[[CaO]] > [[NaCl]] > [[KCl]]", "[[KCl]] > [[NaCl]] > [[CaO]]", "[[NaCl]] > [[CaO]] > [[KCl]]", "[[CaO]] > [[KCl]] > [[NaCl]]"], ["[[CaO]] has 2+ and 2− charges.", "Between [[NaCl]] and [[KCl]], [[Na^+]] is smaller, so [[NaCl]] is stronger."]);
  /* 4.9 */
  mc("4.9", P9, "Which bond is the longest?", ["C–C", "C=C", "C≡C", "All three are the same length"], ["Single bonds are the weakest and longest."]);
  mc("4.9", P9, "Which molecule has the strongest bond between its two atoms?", ["[[N2]] (triple bond)", "[[O2]] (double bond)", "[[F2]] (single bond)", "[[Cl2]] (single bond)"], ["Triple bond = strongest."]);
  num("4.9", P9, "Breaking the bonds in the reactants takes 1,000 kJ. Forming the bonds in the products releases 1,200 kJ. What is the reaction energy, in kJ?", -200, ["Reaction energy ≈ energy to break − energy released forming.", "1,000 − 1,200 = −200 kJ."], "kJ");
  mc("4.9", P9, "Breaking the bonds in the reactants takes 1,000 kJ. Forming the bonds in the products releases 1,200 kJ. Is the reaction endothermic or exothermic?", ["Exothermic: more energy is released than absorbed", "Endothermic: more energy is absorbed than released", "Neither: the energies cancel out", "It can't be told from bond energies"], ["−200 kJ: energy comes out overall."]);
  num("4.9", P9, "Breaking reactant bonds takes 850 kJ, and forming product bonds releases 600 kJ. What is the reaction energy, in kJ?", 250, ["850 − 600 = +250 kJ (endothermic)."], "kJ");
  num("4.9", P9, "An H–H bond takes 436 kJ/mol to break and a Cl–Cl bond takes 243 kJ/mol. Forming one H–Cl bond releases 432 kJ/mol. Find the reaction energy for [[H2]] + [[Cl2]] → 2[[HCl]], in kJ.", -185, ["Break: 436 + 243 = 679 kJ.", "Form: 2 × 432 = 864 kJ.", "679 − 864 = −185 kJ."], "kJ");
  mc("4.9", "4.9 Notes", "Why are triple bonds shorter than single bonds?", ["More shared electrons pull the nuclei closer", "Triple bonds are always made of larger atoms", "Single bonds share more electrons overall", "Triple bonds have weaker attractions"], ["More shared pairs = more attraction pulling the nuclei in."]);
  mc("4.9", "4.9 Notes", "If a reaction's products have stronger bonds than its reactants, the reaction most likely", ["releases energy (exothermic)", "absorbs energy (endothermic)", "doesn't change energy at all", "can't happen at room temperature"], ["Forming strong bonds releases more energy than breaking the weaker ones takes."]);
}});
})();
