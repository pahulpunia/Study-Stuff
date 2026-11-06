/* Honors Chemistry · Unit 4: Chemical Bonds
   Source: Unit 4 Notes Guide (4.1–4.9). Blanks in the guide are filled in the notes below.
   [[Al2O3]] in any text renders as a formula (subscripts); [[Mg^2+]] / [[NO3^-]] for ions. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- data ---------- */
// electronegativity (Pauling values, the ones most class tables use)
const EN = {H:2.1, Li:1.0, Be:1.5, B:2.0, C:2.5, N:3.0, O:3.5, F:4.0, Na:0.9, Mg:1.2, Al:1.5, Si:1.8, P:2.1, S:2.5, Cl:3.0, K:0.8, Ca:1.0, Br:2.8, I:2.5, Ba:0.9};
const METALS = new Set(["Li","Na","K","Mg","Ca","Ba","Al","Be"]);
const NAME = {H:"hydrogen", Li:"lithium", Na:"sodium", K:"potassium", Mg:"magnesium", Ca:"calcium", Ba:"barium", Al:"aluminum", Be:"beryllium", B:"boron",
  C:"carbon", Si:"silicon", N:"nitrogen", P:"phosphorus", O:"oxygen", S:"sulfur", F:"fluorine", Cl:"chlorine", Br:"bromine", I:"iodine"};
const GROUP = {H:1, Li:1, Na:1, K:1, Be:2, Mg:2, Ca:2, Ba:2, B:13, Al:13, C:14, Si:14, N:15, P:15, O:16, S:16, F:17, Cl:17, Br:17, I:17};
const VE = el => GROUP[el] <= 2 ? GROUP[el] : GROUP[el] - 10;

// ions for ionic formulas. size: rank within its group (0 = smallest)
const CATIONS = [
  {s:"Li", n:"lithium", q:1, size:0}, {s:"Na", n:"sodium", q:1, size:1}, {s:"K", n:"potassium", q:1, size:2},
  {s:"Mg", n:"magnesium", q:2, size:0}, {s:"Ca", n:"calcium", q:2, size:1}, {s:"Ba", n:"barium", q:2, size:2},
  {s:"Al", n:"aluminum", q:3, size:0}];
const ANIONS = [
  {s:"F", n:"fluoride", q:-1, size:0}, {s:"Cl", n:"chloride", q:-1, size:1}, {s:"Br", n:"bromide", q:-1, size:2}, {s:"I", n:"iodide", q:-1, size:3},
  {s:"O", n:"oxide", q:-2, size:0}, {s:"S", n:"sulfide", q:-2, size:1},
  {s:"N", n:"nitride", q:-3, size:0}, {s:"P", n:"phosphide", q:-3, size:1}];
const ionTag = i => `[[${i.s}^${Math.abs(i.q) === 1 ? "" : Math.abs(i.q)}${i.q > 0 ? "+" : "-"}]]`;
function ionic(cat, an){
  const c = cat.q, a = -an.q, g = gcd(c, a), nc = a / g, na = c / g;
  return {f: cat.s + (nc > 1 ? nc : "") + an.s + (na > 1 ? na : ""), raw: cat.s + a + an.s + c, reduced: g > 1, name: `${cap(cat.n)} ${an.n}`};
}

// molecules: c = central atom, sur = surrounding atoms, lp = lone pairs on the central atom
const MOLS = [
  {f:"CH4", c:"C", sur:{H:4}, lp:0}, {f:"NH3", c:"N", sur:{H:3}, lp:1}, {f:"H2O", c:"O", sur:{H:2}, lp:2},
  {f:"CO2", c:"C", sur:{O:2}, lp:0}, {f:"BF3", c:"B", sur:{F:3}, lp:0}, {f:"SO2", c:"S", sur:{O:2}, lp:1},
  {f:"CH2O", c:"C", sur:{H:2, O:1}, lp:0}, {f:"PH3", c:"P", sur:{H:3}, lp:1}, {f:"H2S", c:"S", sur:{H:2}, lp:2},
  {f:"CCl4", c:"C", sur:{Cl:4}, lp:0}, {f:"SiH4", c:"Si", sur:{H:4}, lp:0}, {f:"PCl3", c:"P", sur:{Cl:3}, lp:1},
  {f:"HCN", c:"C", sur:{H:1, N:1}, lp:0}, {f:"CS2", c:"C", sur:{S:2}, lp:0}, {f:"NF3", c:"N", sur:{F:3}, lp:1},
  {f:"OF2", c:"O", sur:{F:2}, lp:2}, {f:"CH3Cl", c:"C", sur:{H:3, Cl:1}, lp:0}, {f:"SO3", c:"S", sur:{O:3}, lp:0},
  {f:"BeCl2", c:"Be", sur:{Cl:2}, lp:0}];
const DIATOMIC = [{f:"N2", a:["N","N"]}, {f:"O2", a:["O","O"]}, {f:"Cl2", a:["Cl","Cl"]}, {f:"F2", a:["F","F"]}, {f:"H2", a:["H","H"]},
  {f:"HCl", a:["H","Cl"]}, {f:"HF", a:["H","F"]}, {f:"HBr", a:["H","Br"]}];
const IONIC_CPDS = ["NaCl", "CaCl2", "MgO", "KBr", "LiF", "Na2S"];

const GEOS = ["Linear", "Trigonal planar", "Bent", "Tetrahedral", "Trigonal pyramidal"];
function shape(bonds, lp){
  const d = bonds + lp;
  if (d === 2) return "Linear";
  if (d === 3) return lp ? "Bent" : "Trigonal planar";
  return lp === 0 ? "Tetrahedral" : lp === 1 ? "Trigonal pyramidal" : "Bent";
}
const nBonds = m => Object.values(m.sur).reduce((a, b) => a + b, 0);
const isPolar = m => m.lp > 0 || Object.keys(m.sur).length > 1;
const hasHB = m => !!m.sur.H && ["N","O","F"].includes(m.c);
const listSur = m => Object.entries(m.sur).map(([e, n]) => `${n} ${e}`).join(" + ");
function shapeWhy(m){
  const b = nBonds(m), d = b + m.lp;
  return `Central ${m.c}: ${b} bonded atom${b > 1 ? "s" : ""}${m.lp ? ` + ${m.lp} lone pair${m.lp > 1 ? "s" : ""}` : " and no lone pairs"} = ${d} electron domains.`;
}
function veWhy(f, parts, charge){
  const terms = parts.map(([e, n]) => n > 1 ? `${n}(${VE(e)})` : `${VE(e)}`);
  let tot = parts.reduce((s, [e, n]) => s + n * VE(e), 0);
  let line = `${parts.map(([e, n]) => `${e} has ${VE(e)}`).join(", ")}.`;
  let sum = terms.join(" + ");
  if (charge){ sum += charge < 0 ? ` + ${-charge} (for the ${-charge}− charge)` : ` − ${charge} (for the ${charge}+ charge)`; tot -= charge; }
  return [line, `${sum} = ${tot} valence electrons`];
}
const veOf = (parts, charge = 0) => parts.reduce((s, [e, n]) => s + n * VE(e), 0) - charge;

/* ===================================================================== */
Study.addUnit("hchem", {
  id: "u4",
  name: "Unit 4: Chemical Bonds",
  short: "Unit 4",
  sections: [
    {id:"4.1", name:"4.1 Types of Compounds"},
    {id:"4.2", name:"4.2 Ionic Compounds & Formulas"},
    {id:"4.3", name:"4.3 Lattices & Coulomb's Law"},
    {id:"4.4", name:"4.4 Covalent Compounds"},
    {id:"4.5", name:"4.5 VSEPR Shapes"},
    {id:"4.6", name:"4.6 Bond Polarity"},
    {id:"4.7", name:"4.7 Molecule Polarity"},
    {id:"4.8", name:"4.8 Intermolecular Forces"},
    {id:"4.9", name:"4.9 Bond Strength & Energy"}
  ],

  notes: {
    "4.1": [
      {sum:["**Ionic**: a metal gives electrons to a nonmetal; the ions attract.", "**Covalent**: nonmetals share electrons to form molecules.", "**Metallic**: metal atoms share a \"sea\" of free-moving electrons."]},
      {p:"Atoms bond so they can end up with a full outer (valence) shell, usually 8 electrons (the octet rule). There are three ways to get there, and which one happens depends on what kinds of elements are involved."},
      {table:{head:["","Ionic","Covalent","Metallic"], rows:[
        ["Made of","metal + nonmetal","nonmetals only","metals only"],
        ["Electrons","transferred (metal → nonmetal)","shared in pairs","a “sea” shared by all the atoms"],
        ["Dissolves in water?","usually yes","can","no"],
        ["Conducts electricity?","only when melted or dissolved","no","yes, even as a solid"]
      ]}},
      {h:"Ionic"},
      {p:"Metals have low electronegativity (they hold their electrons loosely), so they lose electrons and become positive ions called cations. Nonmetals have high electronegativity, so they gain those electrons and become negative ions called anions. The opposite charges pull on each other: that pull is called electrostatic attraction, and it is the ionic bond."},
      {tip:"Ionic compounds conduct only when melted or dissolved because electricity needs moving charges. In a solid the ions are locked in place; once they're loose, they can carry current."},
      {h:"Covalent"},
      {p:"Two nonmetals both want electrons, so neither gives any up. Instead they share pairs of valence electrons, and each shared pair counts toward both atoms' octets. The result is a molecule. Molecules have no free charges, so they don't conduct, even dissolved."},
      {warn:"Hydrogen is the exception to the octet rule: it only needs 2 electrons, since it has just one energy level."},
      {h:"Metallic"},
      {p:"Metal atoms give their valence electrons to a shared “sea” that moves around all of the atoms. That moving sea is why metals conduct electricity. There are no fixed bonds between specific atoms, so atoms can slide past each other without breaking apart, which is why metals bend instead of shattering. More valence electrons in the sea usually means a harder metal with a higher melting point."},
      {check:[{q:"What type of bonding is in [[NaCl]]?", a:"Ionic: sodium (a metal) gives an electron to chlorine (a nonmetal)."}, {q:"What type of bonding is in [[CO2]]?", a:"Covalent: carbon and oxygen are both nonmetals, so they share electrons."}, {q:"Why do metals conduct electricity?", a:"Their electrons aren't tied to one atom; the sea of electrons can flow through the metal."}, {q:"Which conducts electricity as a solid: an ionic compound, a covalent compound, or a metal?", a:"A metal. Ionic compounds conduct only when melted or dissolved (when the ions can move)."}]}
    ],
    "4.2": [
      {sum:["Metals lose electrons to become positive ions; nonmetals gain electrons to become negative ions, usually reaching 8 valence electrons.", "An ionic formula has to be neutral: the total positive charge equals the total negative charge.", "Criss-cross shortcut: each ion's charge number becomes the other ion's subscript, then reduce."]},
      {h:"Lewis dot structures"},
      {p:"A Lewis dot structure shows ONLY the valence electrons (the outer shell) as dots around the element symbol. The group number tells you how many: groups 1–2 have 1–2, and groups 13–18 have the last digit (3–8). Place one dot on each side before pairing them up."},
      {h:"Ions"},
      {p:"Metals lose all their valence electrons, and nonmetals gain enough to reach 8. The charge is how many electrons moved: lose 2 → 2+, gain 3 → 3−. An ion dot structure goes in brackets, with the charge written outside."},
      {table:{head:["Group","1","2","13","15","16","17"], rows:[
        ["Valence e⁻","1","2","3","5","6","7"],
        ["Ion charge","1+","2+","3+","3−","2−","1−"]
      ]}},
      {h:"Drawing an ionic compound"},
      {steps:[
        "Draw the dot structure for each element.",
        "Draw arrows to show the electrons moving from the metal to the nonmetal.",
        "Add more atoms if needed, until every atom has a full octet (and the metal has none left).",
        "Write each ion's charge after the transfer.",
        "Write the formula, metal first: one Mg gives 2 electrons, each F takes 1, so you need 2 F → [[MgF2]]."
      ]},
      {h:"Criss-cross method (the shortcut)"},
      {steps:[
        "Write each ion's charge: [[Al^3+]] and [[O^2-]].",
        "Cross the charge NUMBERS over to become the other ion's subscript: Al gets 2, O gets 3 → [[Al2O3]].",
        "Reduce if both subscripts share a factor: [[Mg^2+]] and [[O^2-]] give Mg₂O₂, which reduces to [[MgO]]."
      ]},
      {tip:"Check it: the total positive charge should cancel the total negative. In [[Al2O3]], 2 × (3+) = 6+ and 3 × (2−) = 6−."},
      {check:[{q:"What's the charge on an aluminum ion?", a:"3+ (it's in group 13 and loses 3 valence electrons)."}, {q:"Write the formula for aluminum and oxygen.", a:"Al³⁺ and O²⁻ → criss-cross: [[Al2O3]]."}, {q:"Write the formula for magnesium and oxygen.", a:"Mg²⁺ and O²⁻ → [[Mg2O2]] reduces to [[MgO]]."}, {q:"How many valence electrons does a nitrogen atom have, and what ion does it form?", a:"5, so it gains 3 to make N³⁻."}]}
    ],
    "4.3": [
      {sum:["Ionic compounds form a repeating 3-D **crystal lattice**, not separate molecules.", "Coulomb's law: the attraction is stronger with **bigger charges** and **smaller ions** (closer together).", "A stronger attraction means a higher melting point and more energy needed to pull the lattice apart."]},
      {h:"The crystal lattice"},
      {p:"Ionic compounds don't form separate molecules. They form a crystal lattice: a highly ordered, three-dimensional repeating pattern of positive and negative ions. Each positive ion is surrounded by negative ions and vice versa. The formula only gives the ratio of ions: [[NaCl]] means one Na⁺ for every Cl⁻, not a pair stuck together."},
      {h:"Coulomb's law: what makes an ionic bond stronger"},
      {p:"The pull between two charges gets stronger when the charges are bigger and when they're closer together. That gives two rules for comparing ionic bonds:"},
      {steps:[
        "Compare charges first. Greater charges = stronger bonds: [[CaO]] (2+ and 2−) beats [[LiCl]] (1+ and 1−).",
        "If the charges are the same, compare size. Smaller ions = stronger bonds, because they get closer together. Size grows going DOWN a group, so [[MgO]] beats [[CaO]]."
      ]},
      {ex:{q:"Strongest and weakest of [[NaCl]], [[LiCl]], [[MgO]]?", a:["[[MgO]] has 2+/2− ions, so it's strongest. [[NaCl]] and [[LiCl]] both have 1+/1−, and Na is bigger than Li, so [[NaCl]] is weakest."]}},
      {h:"Why it matters"},
      {table:{head:["Stronger ionic bonds →","Why"], rows:[
        ["more hard and more brittle","the ions hold tighter; when the layers shift, like charges line up and repel, so it cracks"],
        ["higher melting point","more energy is needed to pull the ions apart"],
        ["less soluble in water","water has a harder time pulling the ions out of the lattice"]
      ]}},
      {check:[{q:"Which has the stronger ionic bond: [[NaCl]] or [[MgO]]?", a:"MgO: its ions have charges of 2+ and 2−, versus 1+ and 1− in NaCl."}, {q:"Which has a higher melting point: [[NaF]] or [[NaI]]?", a:"NaF: the fluoride ion is smaller than the iodide ion, so the ions are closer and attract more strongly."}, {q:"Why are ionic solids hard but brittle?", a:"The lattice holds ions tightly, but a hard hit shifts the layers so like charges line up and repel, and the crystal cracks."}, {q:"In Coulomb's law, what happens to the force if the distance between ions doubles?", a:"It drops to one-fourth, because force depends on 1 over the distance squared."}]}
    ],
    "4.4": [
      {sum:["Covalent bonds are shared pairs of electrons between nonmetals.", "Seven elements exist as diatomic molecules: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂.", "Lewis structures: count the valence electrons, connect the atoms, give everyone an octet (hydrogen gets 2), and use double or triple bonds if you run short."]},
      {h:"Diatomic elements"},
      {p:"There are 7 elements that never exist as single atoms. They are always found as molecules of two of the same atom bonded together: [[H2]], [[N2]], [[O2]], [[F2]], [[Cl2]], [[Br2]], [[I2]]."},
      {tip:"Memory trick: they make a “7” on the periodic table (N, O, F, Cl, Br, I), plus H."},
      {h:"Molecular formulas"},
      {p:"A molecular formula shows exactly how many of each atom are in one molecule. Glucose, [[C6H12O6]], has 6 C, 12 H, and 6 O. Unlike ionic formulas, you do NOT reduce it."},
      {h:"Bonds"},
      {table:{head:["Bond","Lines","Shared electrons"], rows:[
        ["Single","–","2"], ["Double","=","4"], ["Triple","≡","6"]
      ]}},
      {p:"Each line in a structure is one shared pair, so 1 line = 2 electrons."},
      {h:"Method #1 (pairing up electrons)"},
      {steps:[
        "Draw the dot structure for the central atom.",
        "Arrange the other atoms so unpaired electrons pair up and every atom gets an octet (H only needs 2).",
        "Circle each shared pair, then replace each circled pair with a line."
      ]},
      {h:"Method #2 (counting electrons)"},
      {steps:[
        "Count the total valence electrons in the molecule. For a negative ion, add one per minus charge; for a positive ion, subtract.",
        "Pick the central atom: the one with the LOWEST electronegativity. Hydrogen is never in the middle.",
        "Connect every other atom to the center with a single bond.",
        "Put the remaining electrons around the atoms as pairs to complete octets (H only gets 2).",
        "Count the electrons in your drawing. If it matches step 1, you're done.",
        "If you used too many: extra bonds needed = (electrons used − electrons you started with) ÷ 2. For each extra bond, take 1 lone pair off each of the two atoms and make one more line between them."
      ]},
      {ex:{q:"[[O2]]: 6 + 6 = 12 valence electrons.", a:["With a single bond and full octets, the drawing uses 14. (14 − 12) ÷ 2 = 1 extra bond, so it's a double bond: O=O."]}},
      {check:[{q:"How many valence electrons are in [[CO2]]?", a:"4 + 6 + 6 = 16."}, {q:"How many bonds are between the two nitrogens in [[N2]]?", a:"A triple bond, so each nitrogen has an octet."}, {q:"In [[H2O]], how many lone pairs does oxygen have?", a:"Two (plus two single bonds to hydrogen)."}, {q:"Name the seven diatomic elements.", a:"Hydrogen, nitrogen, oxygen, fluorine, chlorine, bromine, iodine (H, N, O, F, Cl, Br, I)."}]}
    ],
    "4.5": [
      {sum:["VSEPR: electron domains (bonds and lone pairs) around the central atom spread as far apart as they can.", "Count the domains to get the arrangement; lone pairs change the shape's name.", "Lone pairs push harder than bonds, so they squeeze the bond angles a little."]},
      {p:"Molecules are 3-D. Their shape comes from electron domains around the central atom pushing each other as far apart as possible. That's VSEPR theory (Valence Shell Electron Pair Repulsion)."},
      {h:"Counting electron domains"},
      {p:"An electron domain is any area around the central atom where electrons are. Each bond counts as ONE domain, whether it's single, double, or triple. Each lone pair on the central atom is also one domain."},
      {ex:{q:"[[NH3]]: 3 bonds + 1 lone pair = 4 domains. [[SO2]]: 2 bonds + 1 lone pair = 3 domains.", a:[]}},
      {h:"Shapes"},
      {table:{head:["Bonds","Lone pairs","Domains","Shape","Example"], rows:[
        ["2","0","2","Linear (180°)","[[CO2]]"],
        ["3","0","3","Trigonal planar (120°)","[[BF3]], [[CH2O]]"],
        ["2","1","3","Bent","[[SO2]]"],
        ["4","0","4","Tetrahedral (109.5°)","[[CH4]]"],
        ["3","1","4","Trigonal pyramidal","[[NH3]], [[PH3]]"],
        ["2","2","4","Bent","[[H2O]]"]
      ]}},
      {tip:"Lone pairs take up room but don't count in the shape's name. [[NH3]] has 4 domains like [[CH4]], but one is a lone pair, so you only “see” a pyramid of 3 H's."},
      {check:[{q:"What is the shape of [[CH4]]?", a:"Tetrahedral (4 bonds, no lone pairs), about 109.5°."}, {q:"What is the shape of [[NH3]]?", a:"Trigonal pyramidal (3 bonds and 1 lone pair), about 107°."}, {q:"What is the shape of [[H2O]]?", a:"Bent (2 bonds and 2 lone pairs), about 104.5°."}, {q:"What is the shape of [[CO2]]?", a:"Linear (2 double bonds, no lone pairs on carbon), 180°."}]}
    ],
    "4.6": [
      {sum:["Electronegativity is how strongly an atom pulls on shared electrons.", "A bigger electronegativity difference makes a more polar bond; very large differences are ionic.", "The more electronegative atom gets a partial negative charge (δ−)."]},
      {p:"Electronegativity (EN) is how strongly an atom pulls on shared electrons. When two different atoms share, it's a tug of war: the electrons sit closer to the more electronegative atom. That's a polar bond. Only covalent bonds can be polar."},
      {h:"Partial charges"},
      {p:"The more electronegative atom gets a partial negative charge (δ−), and the less electronegative atom gets a partial positive charge (δ+). A dipole arrow points toward the NEGATIVE end."},
      {h:"Which kind of bond?"},
      {steps:[
        "Metal + nonmetal → ionic (don't bother subtracting).",
        "Two nonmetals → subtract their EN values (bigger − smaller).",
        "Difference 0 to 0.4 → nonpolar covalent. Example: C–H, 2.5 − 2.1 = 0.4.",
        "Difference more than 0.4 → polar covalent. Example: N–O, 3.5 − 3.0 = 0.5."
      ]},
      {table:{head:["H","C","N","O","F","P","S","Cl","Br","I"], rows:[["2.1","2.5","3.0","3.5","4.0","2.1","2.5","3.0","2.8","2.5"]]}},
      {p:"Metals for reference: Li 1.0, Na 0.9, K 0.8, Mg 1.2, Ca 1.0, Al 1.5. Use your class's table if its numbers differ slightly."},
      {tip:"EN goes up toward the top right of the periodic table (F is the highest), ignoring noble gases."},
      {check:[{q:"Which atom is δ− in an H–Cl bond?", a:"Chlorine: it's more electronegative, so it pulls the shared electrons closer."}, {q:"Is the bond in [[Cl2]] polar?", a:"No. Both atoms are the same, so they share equally (nonpolar covalent)."}, {q:"Which bond is more polar: H–F or H–Cl?", a:"H–F, because fluorine is more electronegative than chlorine."}, {q:"What's the most electronegative element?", a:"Fluorine."}]}
    ],
    "4.7": [
      {sum:["A molecule is polar if it has polar bonds AND an uneven shape, so the pulls don't cancel.", "Symmetric shapes with identical surrounding atoms (like CO₂ or CH₄) are nonpolar even with polar bonds.", "Like dissolves like: polar dissolves polar, nonpolar dissolves nonpolar."]},
      {p:"A molecule can have polar bonds and still be nonpolar overall. What matters is whether the pulls cancel out, which depends on the shape."},
      {steps:[
        "Symmetrical molecules are NONPOLAR: the bond pulls cancel, so there's no net dipole. [[CO2]] has two polar C=O bonds pulling in opposite directions.",
        "Asymmetrical molecules are POLAR: the electrons are unevenly spread. [[H2O]] is bent, so both O–H pulls point the same general way."
      ]},
      {h:"Quick rule"},
      {p:"A molecule can only be nonpolar if there are NO lone pairs on the central atom AND all the surrounding atoms are the same. Break either part and it's polar."},
      {table:{head:["Molecule","Lone pairs on center?","All outer atoms the same?","Result"], rows:[
        ["[[CH4]]","no","yes","nonpolar"],
        ["[[CH3Cl]]","no","no (H and Cl)","polar"],
        ["[[NH3]]","yes","yes","polar"],
        ["[[BF3]]","no","yes","nonpolar"]
      ]}},
      {h:"Like dissolves like"},
      {p:"Polar molecules are hydrophilic: they dissolve in water (which is polar). Nonpolar molecules are hydrophobic: they don't dissolve in water. That's why oil (nonpolar) and water separate."},
      {check:[{q:"Is [[CO2]] polar?", a:"No. Its bonds are polar, but it's linear and symmetric, so the pulls cancel."}, {q:"Is [[H2O]] polar?", a:"Yes. Its bent shape means the bond pulls don't cancel."}, {q:"Why doesn't oil mix with water?", a:"Oil is nonpolar and water is polar. Like dissolves like."}, {q:"Is [[NH3]] polar?", a:"Yes. It's trigonal pyramidal with a lone pair, so it's uneven."}]}
    ],
    "4.8": [
      {sum:["Intermolecular forces (IMFs) are attractions between molecules, much weaker than bonds.", "From weakest to strongest: London dispersion (all molecules), dipole–dipole (polar molecules), hydrogen bonding (H bonded to N, O, or F).", "Stronger IMFs mean higher boiling and melting points."]},
      {p:"Intermolecular forces (IMFs) are attractions BETWEEN molecules, not the bonds inside them. They're what holds a liquid or solid together, so they get loosened or broken during a phase change (melting, boiling). Boiling water doesn't break H₂O apart; it just pulls the molecules away from each other."},
      {h:"The three types (weakest to strongest)"},
      {table:{head:["Force","Between","How it works"], rows:[
        ["London dispersion (LDF)","ALL molecules","electrons shift for an instant and make a brief, weak dipole. Nonpolar molecules ONLY have LDFs."],
        ["Dipole-dipole","polar molecules","the δ+ end of one molecule attracts the δ− end of another"],
        ["Hydrogen bonding","polar molecules with H bonded to N, O, or F","an extra-strong dipole-dipole force. NOT a real bond, just a force."]
      ]}},
      {h:"Finding a substance's IMFs"},
      {steps:[
        "Ionic compound (metal + nonmetal)? It's held by ionic bonds, which are stronger than any IMF.",
        "Every molecule has LDF.",
        "If it's polar, add dipole-dipole.",
        "If it has H bonded directly to N, O, or F, add hydrogen bonding."
      ]},
      {ex:{q:"[[NaCl]]: ionic. [[O2]]: LDF only. [[PH3]]: LDF + dipole-dipole. [[HF]]: LDF + dipole-dipole + H-bonding.", a:[]}},
      {h:"Strength and properties"},
      {p:"Strength: ionic > hydrogen bonding > dipole-dipole > LDF. Stronger IMFs mean higher boiling and melting points, since more energy is needed to pull the particles apart. Weaker IMFs mean faster evaporation."},
      {ex:{q:"Order by boiling point: [[SO2]], [[H2O]], [[N2]], [[CaCl2]]", a:["Strongest force in each: [[N2]] LDF, [[SO2]] dipole-dipole, [[H2O]] H-bonding, [[CaCl2]] ionic. So [[N2]] < [[SO2]] < [[H2O]] < [[CaCl2]]."]}},
      {check:[{q:"What IMF does every molecule have?", a:"London dispersion forces."}, {q:"Why does water have such a high boiling point for its size?", a:"Hydrogen bonding: H is bonded to O, so water molecules attract each other strongly."}, {q:"Which has the higher boiling point: [[CH4]] or [[NH3]]?", a:"NH₃, because it has hydrogen bonding and CH₄ has only dispersion forces."}, {q:"When water boils, are the O–H bonds breaking?", a:"No. Boiling only overcomes the forces between molecules; the molecules stay whole."}]}
    ],
    "4.9": [
      {sum:["Breaking bonds takes energy; forming bonds releases energy.", "More shared pairs make a shorter, stronger bond: triple > double > single.", "Reaction energy ≈ energy to break the old bonds − energy released forming the new ones."]},
      {p:"Bonds hold energy. Energy must be ADDED to break a bond, and energy is RELEASED when a bond forms. (You'll also hear these called endothermic and exothermic.)"},
      {table:{head:["Bond","Strength","Length"], rows:[
        ["Single (C–C)","weakest","longest"],
        ["Double (C=C)","middle","middle"],
        ["Triple (C≡C)","strongest","shortest"]
      ]}},
      {p:"More shared electrons pull the two nuclei closer together and hold them tighter. So the stronger the bond, the shorter the bond length."},
      {check:[{q:"Which is stronger: a C=C double bond or a C–C single bond?", a:"The double bond (it's also shorter)."}, {q:"Is breaking a bond endothermic or exothermic?", a:"Endothermic: it takes energy."}, {q:"If forming the new bonds releases more energy than breaking the old ones takes, is the reaction endo- or exothermic?", a:"Exothermic: energy is released overall."}, {q:"Why is [[N2]] so unreactive?", a:"Its triple bond is very strong, so breaking it takes a lot of energy."}]}
    ]
  },

  problems(k){
    const IOC = ["Ionic", "Covalent", "Metallic"];
    const BT = ["Nonpolar covalent", "Polar covalent", "Ionic"];
    const PN = ["Polar", "Nonpolar"];
    const IMF4 = ["LDF only", "LDF + dipole-dipole", "LDF + dipole-dipole + H-bonding", "Ionic bonding"];
    const STRONG = ["LDF", "Dipole-dipole", "Hydrogen bonding", "Ionic"];
    // shuffle answer order so the right one isn't always in the same spot (fixed lists keep their order)
    const FIXED = [IOC, BT, PN, IMF4, STRONG, GEOS];
    const choice0 = k.choice;
    k = Object.assign({}, k, {choice: (secs, src, text, opts, ans, steps, o = {}) =>
      choice0(secs, src, text, opts, ans, steps, Object.assign({shuffle: !FIXED.includes(opts)}, o))});

    /* ---- 4.1 ---- */
    const n41 = "4.1 Notes";
    k.choice(["4.1"], n41, "Ionic bonds form between which kinds of elements?", ["Metals + nonmetals", "Nonmetals only", "Metals only"], "Metals + nonmetals",
      ["Metals have low electronegativity, so they give electrons away. Nonmetals have high electronegativity, so they take them. An ionic bond needs one of each."]);
    k.choice(["4.1"], n41, "Covalent compounds (molecules) form between:", ["Metals + nonmetals", "Nonmetals only", "Metals only"], "Nonmetals only",
      ["Nonmetals all want electrons, so none give them up. They share pairs instead."]);
    k.choice(["4.1"], n41, "Metallic bonding happens between:", ["Metals + nonmetals", "Nonmetals only", "Metals only"], "Metals only",
      ["Metal atoms pool their valence electrons into a shared “sea”."]);
    const E3 = ["Transferred (metal → nonmetal)", "Shared in pairs", "In a “sea” around all the atoms"];
    k.choice(["4.1"], n41, "In an IONIC bond, what happens to the electrons?", E3, E3[0], ["The metal loses electrons (becoming a cation) and the nonmetal gains them (becoming an anion)."]);
    k.choice(["4.1"], n41, "In a COVALENT bond, what happens to the electrons?", E3, E3[1], ["Each shared pair counts toward both atoms' octets."]);
    k.choice(["4.1"], n41, "In METALLIC bonding, what happens to the electrons?", E3, E3[2], ["The valence electrons move freely around all of the metal atoms. That's the “sea of electrons” model."]);
    k.choice(["4.1"], n41, "When does an ionic compound conduct electricity?", ["Only when melted or dissolved in water", "As a solid, since its ions are charged", "Never, because its electrons are shared"], "Only when melted or dissolved in water",
      ["Electricity needs moving charges. In a solid the ions are locked in place, but melted or dissolved, they're free to move."]);
    k.choice(["4.1"], n41, "Do covalent compounds conduct electricity?", ["No", "Yes, when dissolved", "Yes, as a solid"], "No",
      ["Molecules are neutral, with no ions or free electrons, so they don't conduct even when dissolved."]);
    k.choice(["4.1"], n41, "Do metals conduct electricity?", ["Yes, even as a solid", "Only when melted into a liquid", "No, its electrons are locked in place"], "Yes, even as a solid",
      ["The sea of electrons moves freely through the metal, so current can flow through a solid wire."]);
    k.choice(["4.1"], n41, "Do metallic compounds dissolve in water?", ["No", "Yes"], "No", ["Metals are not soluble in water."]);
    k.choice(["4.1"], n41, "A metal LOSES electrons. It becomes a:", ["Cation (+)", "Anion (−)"], "Cation (+)", ["Losing negative electrons leaves more protons than electrons, so the charge is positive."]);
    k.choice(["4.1"], n41, "A nonmetal GAINS electrons. It becomes a:", ["Cation (+)", "Anion (−)"], "Anion (−)", ["Extra electrons make the charge negative."]);
    k.txt(["4.1"], n41, "The attraction between oppositely charged ions is called ______ attraction.", ["electrostatic", "electrostatic attraction"],
      ["Opposite charges attract. Between ions, that's called electrostatic attraction."]);
    k.num(["4.1"], n41, "Hydrogen is an exception to the octet rule. How many electrons does it need?", 2,
      ["Hydrogen only has one energy level, which holds 2 electrons."]);
    k.choice(["4.1"], n41, "Why do metals bend instead of shattering?", ["No fixed bonds, so atoms slide while the electron sea holds them", "Their atoms are smaller than the atoms in ionic solids", "They are held together by very strong ionic bonds"],
      "No fixed bonds, so atoms slide while the electron sea holds them", ["There aren't specific bonds between individual atoms, so shifting the atoms doesn't break anything."]);
    k.choice(["4.1"], n41, "What roughly decides how hard a metal is and how high its melting point is?", ["The number of valence electrons in the sea", "How many neutrons are in each nucleus", "How shiny and reflective its surface is"],
      "The number of valence electrons in the sea", ["More electrons in the sea hold the atoms together more strongly."]);
    [["NaCl", "Ionic", "Na is a metal and Cl is a nonmetal."], ["CO2", "Covalent", "C and O are both nonmetals."], ["MgO", "Ionic", "Mg is a metal and O is a nonmetal."],
     ["H2O", "Covalent", "H and O are both nonmetals."], ["CH4", "Covalent", "C and H are both nonmetals."], ["KBr", "Ionic", "K is a metal and Br is a nonmetal."]].forEach(([f, a, why]) =>
      k.choice(["4.1"], "4.1 Practice", `What type of compound is [[${f}]]?`, IOC, a, [why + (a === "Ionic" ? " Metal + nonmetal → ionic." : " Nonmetals only → covalent.")]));
    k.choice(["4.1"], "4.1 Practice", "What type of bonding holds a copper wire together?", IOC, "Metallic", ["Copper is a metal, and metal atoms bond to each other with a sea of electrons."]);
    k.choice(["4.1"], "4.1 Practice", "Brass is copper mixed with zinc. What type of bonding does it have?", IOC, "Metallic", ["Copper and zinc are both metals → metallic."]);

    /* ---- 4.2 ---- */
    const n42 = "4.2 Notes";
    k.choice(["4.2"], n42, "A Lewis dot structure shows:", ["Only the valence electrons", "All of the electrons", "The protons and neutrons"], "Only the valence electrons",
      ["Only the outer-shell electrons take part in bonding, so those are the only ones drawn."]);
    [["Mg", 2], ["F", 7], ["Na", 1], ["S", 6], ["P", 5], ["O", 6]].forEach(([e, v]) =>
      k.num(["4.2"], n42, `How many valence electrons (dots) does ${NAME[e]} (${e}) have?`, v, [`${e} is in group ${GROUP[e]}, so it has ${v} valence electron${v > 1 ? "s" : ""}.`]));
    [["Mg", 2], ["F", -1], ["Na", 1], ["S", -2], ["Li", 1], ["K", 1], ["P", -3], ["Al", 3]].forEach(([e, q]) =>
      k.charge(["4.2"], n42, `What charge does a ${NAME[e]} (${e}) ion have?`, q,
        [`${e} has ${VE(e)} valence electron${VE(e) > 1 ? "s" : ""}.`, q > 0 ? `It's a metal, so it loses ${q === 1 ? "that one" : `all ${q}`} → ${q}+.` : `It's a nonmetal, so it gains ${-q} to reach 8 → ${-q}−.`]));
    k.choice(["4.2"], n42, "How do you show that a dot structure is an ion?", ["Brackets around it, with the charge outside", "Circles around each pair of shared electrons", "Lines connecting it to the other atoms"], "Brackets around it, with the charge outside",
      ["Example: Mg becomes [Mg]²⁺ with no dots left, and F becomes [F]⁻ with a full 8."]);
    k.choice(["4.2"], n42, "When you draw an ionic compound, the arrows show electrons moving from:", ["The metal to the nonmetal", "The nonmetal to the metal"], "The metal to the nonmetal",
      ["Metals lose electrons and nonmetals gain them."]);
    k.choice(["4.2"], n42, "In an ionic formula, which element is written first?", ["The metal", "The nonmetal"], "The metal", ["Metal (cation) first, nonmetal (anion) second: [[NaCl]], not ClNa."]);
    k.num(["4.2"], "4.2 Practice", "Sodium sulfide: how many sodium atoms does one sulfur atom need?", 2,
      ["S has 6 valence electrons and needs 2 more. Each Na gives only 1.", "So it takes 2 Na → [[Na2S]]."]);
    k.num(["4.2"], "4.2 Practice", "Potassium phosphide: how many potassium atoms does one phosphorus atom need?", 3,
      ["P has 5 valence electrons and needs 3 more. Each K gives 1.", "So it takes 3 K → [[K3P]]."]);
    [["Sodium sulfide", "Na2S", "Na", 1, "S", 2], ["Lithium sulfide", "Li2S", "Li", 1, "S", 2], ["Potassium phosphide", "K3P", "K", 1, "P", 3], ["Magnesium fluoride", "MgF2", "Mg", 2, "F", 1],
     ["Lithium fluoride", "LiF", "Li", 1, "F", 1], ["Aluminum oxide", "Al2O3", "Al", 3, "O", 2], ["Magnesium oxide", "MgO", "Mg", 2, "O", 2], ["Aluminum nitride", "AlN", "Al", 3, "N", 3]].forEach(([nm, f, c, cq, a, aq]) => {
      const red = cq === aq && cq > 1;
      k.formula(["4.2"], "4.2 Criss-cross", `Write the formula for ${nm.toLowerCase()}.`, f,
        [`Ions: [[${c}^${cq > 1 ? cq : ""}+]] and [[${a}^${aq > 1 ? aq : ""}-]].`,
         red ? `Criss-cross gives ${c}${aq}${a}${cq}, which reduces to [[${f}]] (the charges already cancel 1 to 1).` : `Criss-cross the charge numbers into subscripts → [[${f}]].`]);
    });
    k.formula(["4.2"], n42, "Criss-crossing [[Mg^2+]] and [[O^2-]] gives Mg2O2. What's the final formula?", "MgO", ["Both subscripts share a factor of 2, so reduce: [[MgO]]."]);

    /* ---- 4.3 ---- */
    const n43 = "4.3 Notes";
    k.txt(["4.3"], n43, "Ionic compounds form a crystal ______ structure.", ["lattice", "crystal lattice"], ["A lattice is a highly ordered, 3-D repeating pattern of ions."]);
    k.choice(["4.3"], n43, "A crystal lattice is a highly ______, three-dimensional repeating pattern of ions.", ["Ordered", "Random", "Flexible"], "Ordered", ["The ions sit in a regular, repeating arrangement."]);
    k.choice(["4.3"], n43, "In the lattice, each positive ion is:", ["Surrounded by negative ions", "Paired with exactly one negative ion", "Surrounded by other positive ions"], "Surrounded by negative ions",
      ["Positive ions are surrounded by negative ions and vice versa, which maximizes the attraction."]);
    k.choice(["4.3"], n43, "The chemical formula of an ionic compound, like [[MgCl2]], tells you:", ["The ratio of ions in the lattice", "The exact number of ions in the crystal", "The shape of one molecule"],
      "The ratio of ions in the lattice", ["[[MgCl2]] means 2 Cl⁻ for every Mg²⁺. The crystal itself can have trillions of ions."]);
    k.choice(["4.3"], n43, "By Coulomb's law, greater ion charges make an ionic bond:", ["Stronger", "Weaker"], "Stronger", ["Bigger charges pull on each other harder."]);
    k.choice(["4.3"], n43, "If two ionic compounds have the same charges, the one with SMALLER ions has:", ["Stronger bonds", "Weaker bonds"], "Stronger bonds",
      ["Smaller ions can get closer together, and closer charges attract more strongly."]);
    k.choice(["4.3"], "4.3 Practice", "Which has the stronger ionic bond?", ["[[LiCl]]", "[[CaO]]"], "[[CaO]]",
      ["[[CaO]] has 2+ and 2− ions; [[LiCl]] has only 1+ and 1−. Greater charges → stronger."]);
    k.choice(["4.3"], "4.3 Practice", "Which has the stronger ionic bond?", ["[[CaO]]", "[[MgO]]"], "[[MgO]]",
      ["Both are 2+ and 2−, so compare size. Mg is above Ca in group 2, so Mg²⁺ is smaller → stronger."]);
    k.choice(["4.3"], "4.3 Practice", "Which has the STRONGEST ionic bonds?", ["[[NaCl]]", "[[LiCl]]", "[[MgO]]"], "[[MgO]]",
      ["[[MgO]] is the only one with 2+/2− charges, so it's the strongest."]);
    k.choice(["4.3"], "4.3 Practice", "Which has the WEAKEST ionic bonds?", ["[[NaCl]]", "[[LiCl]]", "[[MgO]]"], "[[NaCl]]",
      ["[[MgO]] has bigger charges, so it's out. [[NaCl]] and [[LiCl]] are both 1+/1−, and Na⁺ is bigger than Li⁺, so [[NaCl]] is weakest."]);
    k.choice(["4.3"], n43, "Stronger ionic bonds make a compound:", ["More hard and more brittle", "Less hard and less brittle", "Softer and bendier"], "More hard and more brittle",
      ["The ions hold tighter (harder). But if the layers shift, like charges line up and repel, so it shatters (brittle)."]);
    k.choice(["4.3"], n43, "Stronger ionic bonds give a ______ melting point.", ["Higher", "Lower"], "Higher", ["It takes more energy to pull the ions apart."]);
    k.choice(["4.3"], n43, "Stronger ionic bonds make a compound ______ soluble in water.", ["Less", "More"], "Less", ["Water can't pull the ions out of the lattice as easily."]);

    /* ---- 4.4 ---- */
    const n44 = "4.4 Notes";
    k.num(["4.4"], n44, "How many elements exist as diatomic molecules?", 7, ["They're H₂, N₂, O₂, F₂, Cl₂, Br₂, and I₂."]);
    k.choice(["4.4"], n44, "A diatomic element is a molecule made of:", ["Two of the same atom bonded together", "Two different atoms sharing electrons", "A positive ion and a negative ion"], "Two of the same atom bonded together",
      ["These elements never exist as single atoms, always in pairs: [[O2]], [[N2]], …"]);
    k.choice(["4.4"], n44, "Which of these elements exists as a diatomic molecule?", ["Nitrogen", "Neon", "Potassium", "Carbon"], "Nitrogen", ["The 7 diatomics are H, N, O, F, Cl, Br, I."]);
    k.num(["4.4"], n44, "How many hydrogen atoms are in one molecule of glucose, [[C6H12O6]]?", 12, ["The subscript after H is 12."]);
    k.choice(["4.4"], n44, "Should you reduce a molecular formula like [[C6H12O6]] to [[CH2O]]?", ["No, it shows the actual atoms in one molecule", "Yes, always reduce"], "No, it shows the actual atoms in one molecule",
      ["Only ionic formulas get reduced. Molecular formulas show exactly what's in the molecule."]);
    k.num(["4.4"], n44, "How many valence electrons are shared in a SINGLE bond?", 2, ["One shared pair = 2 electrons."]);
    k.num(["4.4"], n44, "How many valence electrons are shared in a DOUBLE bond?", 4, ["Two shared pairs = 4 electrons."]);
    k.num(["4.4"], n44, "How many valence electrons are shared in a TRIPLE bond?", 6, ["Three shared pairs = 6 electrons."]);
    k.num(["4.4"], n44, "In a Lewis structure, 1 line = how many electrons?", 2, ["Each line is one shared pair."]);
    k.choice(["4.4"], n44, "In [[N2]], the bond is drawn N≡N. What kind of bond is it?", ["Single", "Double", "Triple"], "Triple", ["Three lines = triple bond = 6 shared electrons."]);
    k.choice(["4.4"], n44, "In [[O2]], the bond is drawn O=O. What kind of bond is it?", ["Single", "Double", "Triple"], "Double", ["Two lines = double bond = 4 shared electrons."]);
    [["CH4", [["C", 1], ["H", 4]], 0], ["N2", [["N", 2]], 0], ["O2", [["O", 2]], 0], ["NO3^-", [["N", 1], ["O", 3]], -1], ["CO2", [["C", 1], ["O", 2]], 0],
     ["H2O", [["H", 2], ["O", 1]], 0], ["NH3", [["N", 1], ["H", 3]], 0]].forEach(([f, parts, ch]) =>
      k.num(["4.4"], "4.4 Method #2", `Step 1 of Method #2: how many total valence electrons are in [[${f}]]?`, veOf(parts, ch), veWhy(f, parts, ch)));
    k.choice(["4.4"], n44, "In [[CO2]], which atom goes in the middle?", ["C", "O"], "C", ["The central atom has the lowest electronegativity: C is 2.5, O is 3.5."]);
    k.choice(["4.4"], n44, "In [[NH3]], which atom goes in the middle?", ["N", "H"], "N", ["Hydrogen is NEVER the central atom, since it can only make one bond."]);
    k.choice(["4.4"], n44, "In [[NO3^-]], which atom goes in the middle?", ["N", "O"], "N", ["N (3.0) has a lower electronegativity than O (3.5)."]);
    k.num(["4.4"], "4.4 Method #2", "Your drawing uses 14 electrons, but the molecule only has 12. How many extra bonds do you need?", 1, ["(14 − 12) ÷ 2 = 1 extra bond."]);
    [["O2", 14, 12, "a double bond, O=O"], ["N2", 14, 10, "a triple bond, N≡N"], ["CO2", 20, 16, "two double bonds, O=C=O"], ["NO3^-", 26, 24, "one N=O double bond"]].forEach(([f, used, start, res]) =>
      k.num(["4.4"], "4.4 Method #2", `With only single bonds and full octets, [[${f}]] uses ${used} electrons. How many extra bonds does it need?`, (used - start) / 2,
        [`[[${f}]] only has ${start} valence electrons.`, `(${used} − ${start}) ÷ 2 = ${(used - start) / 2}, so it gets ${res}.`]));

    /* ---- 4.5 ---- */
    const n45 = "4.5 Notes";
    k.choice(["4.5"], n45, "VSEPR stands for:", ["Valence Shell Electron Pair Repulsion", "Valence Shared Electron Pair Rotation", "Variable Shape Electron Position Rule"], "Valence Shell Electron Pair Repulsion",
      ["Electron pairs repel each other, and that repulsion sets the shape."]);
    k.choice(["4.5"], n45, "According to VSEPR, electron domains arrange themselves:", ["As far apart as possible", "As close together as possible", "In a flat line every time"], "As far apart as possible",
      ["Electrons repel, so they spread out as much as they can around the central atom."]);
    k.num(["4.5"], n45, "A double bond counts as how many electron domains?", 1, ["Single, double, or triple: any bond is ONE domain."]);
    k.num(["4.5"], n45, "A lone pair on the central atom counts as how many electron domains?", 1, ["Each lone pair is one domain."]);
    const M = f => MOLS.find(m => m.f === f);
    ["NH3", "SO2", "PH3", "H2O", "CO2", "CH4", "CH2O"].forEach(f => { const m = M(f);
      k.num(["4.5"], "4.5 Practice", `How many electron domains are around the central atom in [[${f}]]?`, nBonds(m) + m.lp, [shapeWhy(m)]); });
    ["CO2", "CH2O", "BF3", "SO2", "CH4", "NH3", "PH3", "H2O"].forEach(f => { const m = M(f);
      k.choice(["4.5"], "4.5 Practice", `What is the molecular geometry of [[${f}]]?`, GEOS, shape(nBonds(m), m.lp), [shapeWhy(m), `That's ${shape(nBonds(m), m.lp).toLowerCase()}.`]); });
    k.choice(["4.5"], n45, "A central atom has 2 bonds and 2 lone pairs. What's the shape?", GEOS, "Bent", ["4 domains, but 2 are lone pairs, so you only see the 2 bonded atoms in a bent shape (like [[H2O]])."]);
    k.choice(["4.5"], n45, "A central atom has 3 bonds and 1 lone pair. What's the shape?", GEOS, "Trigonal pyramidal", ["4 domains with 1 lone pair: a pyramid of 3 atoms (like [[NH3]])."]);

    /* ---- 4.6 ---- */
    const n46 = "4.6 Notes";
    k.choice(["4.6"], n46, "Electronegativity is:", ["An atom's ability to attract electrons", "The number of valence electrons it has", "The energy stored in one of its bonds"], "An atom's ability to attract electrons",
      ["Higher EN = pulls shared electrons harder."]);
    k.choice(["4.6"], n46, "In a polar bond, the shared electrons are closer to the:", ["More electronegative atom", "Less electronegative atom"], "More electronegative atom", ["It wins the tug of war."]);
    k.choice(["4.6"], n46, "The MOST electronegative atom in a bond gets a partial ______ charge.", ["Negative (δ−)", "Positive (δ+)"], "Negative (δ−)", ["Electrons are negative, and they spend more time near it."]);
    k.choice(["4.6"], n46, "The dipole arrow points toward the:", ["Negative end", "Positive end"], "Negative end", ["The arrow points at the δ− (more electronegative) atom."]);
    k.choice(["4.6"], n46, "Can an ionic bond be polar covalent?", ["No: metal + nonmetal is ionic", "Yes"], "No: metal + nonmetal is ionic", ["Polarity is about covalent bonds only."]);
    const btWhy = (a, b) => {
      if (METALS.has(a) || METALS.has(b)) return [`${METALS.has(a) ? a : b} is a metal and the other is a nonmetal → ionic.`];
      const d = Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10;
      return [`EN: ${a} = ${EN[a].toFixed(1)}, ${b} = ${EN[b].toFixed(1)}.`, `Difference = ${d.toFixed(1)}, which is ${d <= 0.4 ? "0 to 0.4 → nonpolar covalent" : "more than 0.4 → polar covalent"}.`];
    };
    const btAns = (a, b) => METALS.has(a) || METALS.has(b) ? "Ionic" : Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10 <= 0.4 ? "Nonpolar covalent" : "Polar covalent";
    [["Li", "S"], ["F", "O"], ["O", "O"], ["H", "O"], ["C", "H"], ["N", "O"], ["H", "Cl"], ["Na", "Cl"], ["C", "S"]].forEach(([a, b]) =>
      k.choice(["4.6"], "4.6 Practice", `What type of bond forms between ${a} and ${b}?`, BT, btAns(a, b), btWhy(a, b)));
    [["N", "O"], ["C", "H"], ["H", "O"], ["H", "Cl"]].forEach(([a, b]) =>
      k.num(["4.6"], "4.6 Practice", `What is the electronegativity difference in a ${a}–${b} bond? (${a} = ${EN[a].toFixed(1)}, ${b} = ${EN[b].toFixed(1)})`,
        (Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10).toFixed(1), [`Bigger minus smaller: ${Math.max(EN[a], EN[b]).toFixed(1)} − ${Math.min(EN[a], EN[b]).toFixed(1)} = ${(Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10).toFixed(1)}`]));
    k.choice(["4.6"], "4.6 Practice", "In an H–Cl bond, which atom gets the partial negative charge (δ−)?", ["Cl", "H"], "Cl", ["Cl (3.0) is more electronegative than H (2.1)."]);
    k.choice(["4.6"], "4.6 Practice", "In an O–H bond, which way does the dipole arrow point?", ["Toward O", "Toward H"], "Toward O", ["O (3.5) is more electronegative, so it's the negative end."]);

    /* ---- 4.7 ---- */
    const n47 = "4.7 Notes";
    k.choice(["4.7"], n47, "Symmetrical molecules are:", PN, "Nonpolar", ["The bond pulls cancel out, so there's no net dipole."]);
    k.choice(["4.7"], n47, "Asymmetrical molecules are:", PN, "Polar", ["The electrons are spread unevenly, so one side is more negative."]);
    k.choice(["4.7"], n47, "Can a nonpolar molecule have polar bonds?", ["Yes, if the bonds are symmetrical and cancel", "No, never"], "Yes, if the bonds are symmetrical and cancel",
      ["[[CO2]] has two polar C=O bonds pulling in opposite directions, so the molecule is nonpolar."]);
    k.choice(["4.7"], n47, "A molecule can only be nonpolar if:", ["No lone pairs on the central atom AND identical outer atoms", "It has only single bonds and no double or triple bonds", "It has an even number of atoms and of electrons"],
      "No lone pairs on the central atom AND identical outer atoms", ["Break either condition and the molecule is lopsided, so it's polar."]);
    ["CO2", "H2O", "NH3", "CH4", "BF3", "SO2", "CH2O", "CCl4", "CH3Cl"].forEach(f => { const m = M(f), p = isPolar(m);
      k.choice(["4.7"], "4.7 Practice", `Is [[${f}]] polar or nonpolar?`, PN, p ? "Polar" : "Nonpolar",
        [`Central ${m.c}: ${m.lp ? `${m.lp} lone pair${m.lp > 1 ? "s" : ""}` : "no lone pairs"}; surrounding atoms: ${listSur(m)}.`,
         p ? (m.lp ? "A lone pair on the center makes it lopsided → polar." : "The surrounding atoms aren't all the same, so the pulls don't cancel → polar.") : "No lone pairs and identical outer atoms → symmetrical → nonpolar."]); });
    k.choice(["4.7"], n47, "Which shape is ALWAYS polar?", ["Trigonal pyramidal", "Linear", "Trigonal planar"], "Trigonal pyramidal",
      ["It always has a lone pair on the central atom. (Bent is always polar too.)"]);
    k.choice(["4.7"], n47, "Polar molecules are hydrophilic. That means they:", ["Dissolve in water", "Don't dissolve in water"], "Dissolve in water", ["“Like dissolves like”: water is polar."]);
    k.choice(["4.7"], n47, "Nonpolar molecules are hydrophobic. That means they:", ["Dissolve in water", "Don't dissolve in water"], "Don't dissolve in water", ["Nonpolar and polar don't mix."]);
    k.choice(["4.7"], "4.7 Practice", "Oil is nonpolar. Will it dissolve in water?", ["No", "Yes"], "No", ["Like dissolves like: nonpolar oil and polar water separate."]);

    /* ---- 4.8 ---- */
    const n48 = "4.8 Notes";
    k.choice(["4.8"], n48, "Intermolecular forces act:", ["Between molecules", "Inside a molecule, holding its atoms together"], "Between molecules",
      ["“Inter” means between. The bonds inside a molecule are intRAmolecular."]);
    k.choice(["4.8"], n48, "IMFs are loosened or broken during a:", ["Phase change (melting, boiling)", "Chemical reaction (burning)", "Nuclear reaction (decay)"], "Phase change (melting, boiling)",
      ["Melting and boiling pull molecules away from each other without breaking the molecules."]);
    k.choice(["4.8"], n48, "London dispersion forces exist between:", ["All molecules", "Only polar molecules", "Only ions"], "All molecules", ["Every molecule has electrons that can shift, so every molecule has LDF."]);
    k.choice(["4.8"], n48, "Nonpolar molecules have:", ["Only LDFs", "LDFs and dipole-dipole", "Hydrogen bonding"], "Only LDFs", ["No dipoles, so the only attraction is LDF."]);
    k.choice(["4.8"], n48, "Dipole-dipole forces happen between:", ["Polar molecules", "Nonpolar molecules"], "Polar molecules", ["The δ+ end of one attracts the δ− end of another."]);
    k.choice(["4.8"], n48, "Hydrogen bonding happens when hydrogen is bonded to:", ["N, O, or F", "C, S, or P", "Any nonmetal"], "N, O, or F",
      ["N, O, and F are so electronegative that the H becomes very positive, making an extra-strong dipole-dipole force."]);
    k.choice(["4.8"], n48, "Is a hydrogen bond an actual chemical bond?", ["No, it's a force between molecules", "Yes, it's a covalent bond"], "No, it's a force between molecules",
      ["Despite the name, hydrogen bonds are intermolecular forces."]);
    k.choice(["4.8"], n48, "Rank the IMFs from strongest to weakest:", ["H-bonding > dipole-dipole > LDF", "LDF > dipole-dipole > H-bonding", "Dipole-dipole > H-bonding > LDF"], "H-bonding > dipole-dipole > LDF",
      ["Hydrogen bonding is a supercharged dipole-dipole force, and LDF is the weakest. (Ionic bonds beat all of them.)"]);
    [["NaCl", "Ionic bonding", "Na is a metal and Cl is a nonmetal: it's held by ionic bonds."], ["O2", "LDF only", "[[O2]] is nonpolar (two identical atoms), so it only has LDF."],
     ["PH3", "LDF + dipole-dipole", "[[PH3]] has a lone pair, so it's polar → dipole-dipole. Its H is bonded to P, not N/O/F, so no H-bonding."],
     ["HF", "LDF + dipole-dipole + H-bonding", "[[HF]] is polar, and H is bonded to F → all three."]].forEach(([f, a, why]) =>
      k.choice(["4.8"], "4.8 Example", `Which intermolecular forces does [[${f}]] have?`, IMF4, a, [why]));
    [["SO2", "Dipole-dipole", "[[SO2]] is bent and polar, but has no H → dipole-dipole."], ["H2O", "Hydrogen bonding", "H is bonded to O → hydrogen bonding."],
     ["N2", "LDF", "[[N2]] is nonpolar → LDF only."], ["CaCl2", "Ionic", "Ca is a metal and Cl a nonmetal → ionic."]].forEach(([f, a, why]) =>
      k.choice(["4.8"], "4.8 Practice", `What is the STRONGEST attractive force in [[${f}]]?`, STRONG, a, [why]));
    const ORD = ["[[N2]] < [[SO2]] < [[H2O]] < [[CaCl2]]", "[[CaCl2]] < [[H2O]] < [[SO2]] < [[N2]]", "[[N2]] < [[H2O]] < [[SO2]] < [[CaCl2]]", "[[SO2]] < [[N2]] < [[CaCl2]] < [[H2O]]"];
    k.choice(["4.8"], "4.8 Practice", "Put these in order of INCREASING boiling point.", ORD, ORD[0],
      ["Strongest force: [[N2]] LDF, [[SO2]] dipole-dipole, [[H2O]] H-bonding, [[CaCl2]] ionic.", "Weaker forces → lower boiling point, so LDF first and ionic last."]);
    k.choice(["4.8"], n48, "Stronger IMFs give ______ boiling and melting points.", ["Higher", "Lower"], "Higher", ["More energy is needed to pull the molecules apart."]);
    k.choice(["4.8"], n48, "Weaker IMFs mean ______ evaporation.", ["Faster", "Slower"], "Faster", ["Molecules escape into the gas more easily when they aren't held tightly."]);

    /* ---- 4.9 ---- */
    const n49 = "4.9 Notes";
    k.choice(["4.9"], n49, "To BREAK a bond, energy must be:", ["Added (absorbed)", "Released"], "Added (absorbed)", ["Bonds hold atoms together, so pulling them apart takes energy."]);
    k.choice(["4.9"], n49, "When a bond FORMS, energy is:", ["Released", "Added (absorbed)"], "Released", ["Forming a bond is the reverse of breaking one, so energy comes out."]);
    k.choice(["4.9"], n49, "Which type of bond is the strongest?", ["Triple", "Double", "Single"], "Triple", ["More shared electrons hold the atoms together more tightly."]);
    k.choice(["4.9"], n49, "The stronger the bond, the ______ the bond length.", ["Shorter", "Longer"], "Shorter", ["More shared electrons pull the nuclei closer together."]);
    k.choice(["4.9"], "4.9 Practice", "Which bond is the shortest?", ["C–C", "C=C", "C≡C"], "C≡C", ["Triple bonds are strongest, and stronger bonds are shorter."]);
    k.choice(["4.9"], "4.9 Practice", "Which bond takes the most energy to break?", ["N≡N", "O=O", "F–F"], "N≡N", ["The triple bond is the strongest, so it needs the most energy."]);
  },

  drills: {
    "4.1": k => {
      const pool = [["NaCl","Ionic"],["KBr","Ionic"],["MgO","Ionic"],["CaF2","Ionic"],["Li2O","Ionic"],["Na2S","Ionic"],["BaCl2","Ionic"],
        ["H2O","Covalent"],["CO2","Covalent"],["CH4","Covalent"],["NH3","Covalent"],["SO2","Covalent"],["HCl","Covalent"],["PCl3","Covalent"],["C6H12O6","Covalent"]];
      if (Math.random() < 0.2){ const [m, nm] = pick([["Fe","iron"],["Cu","copper"],["Al","aluminum"],["Ag","silver"],["Zn","zinc"]]);
        return {kind:"choice", text:`What type of bonding holds a piece of ${nm} (${m}) together?`, fields:[k.F.choice("Answer", ["Ionic","Covalent","Metallic"], "Metallic")], steps:[`${cap(nm)} is a metal, so it's held by a sea of electrons → metallic.`]}; }
      const [f, a] = pick(pool), els = f.match(/[A-Z][a-z]?/g), metal = els.find(e => METALS.has(e));
      return {kind:"choice", text:`What type of compound is [[${f}]]?`, fields:[k.F.choice("Answer", ["Ionic","Covalent","Metallic"], a)],
        steps:[metal ? `${metal} is a metal and ${els.find(e => e !== metal)} is a nonmetal → ionic.` : (u => `${u.join(", ").replace(/, (?=[^,]*$)/, " and ")} are ${u.length > 2 ? "all" : "both"} nonmetals → covalent.`)([...new Set(els)])]};
    },
    "4.2": k => {
      const r = Math.random();
      if (r < 0.55){
        const cat = pick(CATIONS), an = pick(ANIONS), c = ionic(cat, an);
        return {kind:"formula", text:`Write the formula for ${c.name.toLowerCase()}.`, fields:[k.F.formula("Formula", c.f)],
          steps:[`Ions: ${ionTag(cat)} and ${ionTag(an)}.`, c.reduced ? `Criss-cross gives ${c.raw.replace(/1(?=[A-Z]|$)/g, "")}, which reduces to [[${c.f}]].` : `Criss-cross the charge numbers into subscripts → [[${c.f}]].`]};
      }
      const ion = pick(CATIONS.concat(ANIONS)), v = VE(ion.s);
      if (r < 0.8) return {kind:"charge", text:`What charge does a ${NAME[ion.s]} (${ion.s}) ion have?`, fields:[k.F.charge("Charge", ion.q)],
        steps:[`${ion.s} is in group ${GROUP[ion.s]}, so it has ${v} valence electron${v > 1 ? "s" : ""}.`, ion.q > 0 ? `Metal → loses ${v} → ${ion.q}+.` : `Nonmetal → gains ${-ion.q} to reach 8 → ${-ion.q}−.`]};
      return {kind:"num", text:`How many valence electrons does ${NAME[ion.s]} (${ion.s}) have?`, fields:[k.F.num("Answer", v)], steps:[`${ion.s} is in group ${GROUP[ion.s]} → ${v}.`]};
    },
    "4.3": k => {
      let A, B, why;
      if (Math.random() < 0.5){
        // same charges, one ion swapped for a bigger one in its group
        const swapCat = Math.random() < 0.5;
        const all = swapCat ? CATIONS : ANIONS, pool = all.filter(x => all.some(y => y !== x && y.q === x.q));
        const a1 = pick(pool), a2 = pick(pool.filter(x => x.q === a1.q && x !== a1)), other = swapCat ? pick(ANIONS) : pick(CATIONS);
        const [small, big] = a1.size < a2.size ? [a1, a2] : [a2, a1];
        A = swapCat ? ionic(small, other) : ionic(other, small); B = swapCat ? ionic(big, other) : ionic(other, big);
        why = [`Both have the same charges, so compare size.`, `${small.s} is above ${big.s} in its group, so its ion is smaller → closer together → stronger: [[${A.f}]].`];
      } else return drillCoulomb(k);
      const opts = shuffle([`[[${A.f}]]`, `[[${B.f}]]`]);
      return {kind:"choice", text:"Which has the stronger ionic bond?", fields:[k.F.choice("Answer", opts, `[[${A.f}]]`)], steps:why};
    },
    "4.4": k => {
      const pool = MOLS.map(m => ({f:m.f, parts:[[m.c, 1]].concat(Object.entries(m.sur)), ch:0}))
        .concat([{f:"NO3^-", parts:[["N",1],["O",3]], ch:-1}, {f:"CO3^2-", parts:[["C",1],["O",3]], ch:-2}, {f:"NH4^+", parts:[["N",1],["H",4]], ch:1}, {f:"OH^-", parts:[["O",1],["H",1]], ch:-1}]);
      const p = pick(pool);
      return {kind:"num", text:`How many total valence electrons are in [[${p.f}]]?`, fields:[k.F.num("Answer", veOf(p.parts, p.ch))], steps:veWhy(p.f, p.parts, p.ch)};
    },
    "4.5": k => {
      const m = pick(MOLS), g = shape(nBonds(m), m.lp);
      if (Math.random() < 0.3) return {kind:"num", text:`How many electron domains are around the central atom in [[${m.f}]]?`, fields:[k.F.num("Answer", nBonds(m) + m.lp)], steps:[shapeWhy(m)]};
      return {kind:"choice", text:`What is the molecular geometry of [[${m.f}]]?`, fields:[k.F.choice("Answer", GEOS, g)], steps:[shapeWhy(m), `That's ${g.toLowerCase()}.`]};
    },
    "4.6": k => {
      const non = ["H","C","N","O","F","P","S","Cl","Br","I"], met = ["Li","Na","K","Mg","Ca","Al"];
      let a, b;
      if (Math.random() < 0.2){ a = pick(met); b = pick(["N","O","F","P","S","Cl","Br","I"]); } else { a = pick(non); b = pick(non); }
      const ans = METALS.has(a) ? "Ionic" : Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10 <= 0.4 ? "Nonpolar covalent" : "Polar covalent";
      const d = (Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10).toFixed(1);
      return {kind:"choice", text:`What type of bond forms between ${a} and ${b}? (EN: ${a} ${EN[a].toFixed(1)}, ${b} ${EN[b].toFixed(1)})`,
        fields:[k.F.choice("Answer", ["Nonpolar covalent","Polar covalent","Ionic"], ans)],
        steps: METALS.has(a) ? [`${a} is a metal and ${b} is a nonmetal → ionic.`] : [`Difference = ${Math.max(EN[a], EN[b]).toFixed(1)} − ${Math.min(EN[a], EN[b]).toFixed(1)} = ${d}.`, `${+d <= 0.4 ? "0 to 0.4 → nonpolar" : "More than 0.4 → polar"} covalent.`]};
    },
    "4.7": k => {
      if (Math.random() < 0.25){ const d = pick(DIATOMIC), p = d.a[0] !== d.a[1];
        return {kind:"choice", text:`Is [[${d.f}]] polar or nonpolar?`, fields:[k.F.choice("Answer", ["Polar","Nonpolar"], p ? "Polar" : "Nonpolar")],
          steps:[p ? `Two different atoms: ${d.a[1]} pulls harder than ${d.a[0]}, so the molecule is lopsided → polar.` : "Two identical atoms share equally → nonpolar."]}; }
      const m = pick(MOLS), p = isPolar(m);
      return {kind:"choice", text:`Is [[${m.f}]] polar or nonpolar?`, fields:[k.F.choice("Answer", ["Polar","Nonpolar"], p ? "Polar" : "Nonpolar")],
        steps:[`Central ${m.c}: ${m.lp ? `${m.lp} lone pair${m.lp > 1 ? "s" : ""}` : "no lone pairs"}; surrounding atoms: ${listSur(m)}.`,
          p ? (m.lp ? "A lone pair on the center → polar." : "Not all the surrounding atoms are the same → polar.") : "No lone pairs and identical outer atoms → nonpolar."]};
    },
    "4.8": k => {
      const r = Math.random();
      let f, kind, why;
      if (r < 0.15){ f = pick(IONIC_CPDS); kind = "ionic"; why = "Metal + nonmetal → ionic bonds, stronger than any IMF."; }
      else if (r < 0.3){ const d = pick(DIATOMIC); f = d.f; const p = d.a[0] !== d.a[1];
        kind = d.f === "HF" ? "hb" : p ? "dd" : "ldf";
        why = kind === "hb" ? "Polar, and H is bonded to F → hydrogen bonding." : p ? `Polar (two different atoms), and H isn't bonded to N, O, or F → dipole-dipole.` : "Nonpolar → LDF only."; }
      else if (r < 0.4){ f = "CH3OH"; kind = "hb"; why = "Methanol has an O–H, so H is bonded to O → hydrogen bonding."; }
      else { const m = pick(MOLS); f = m.f; kind = hasHB(m) ? "hb" : isPolar(m) ? "dd" : "ldf";
        why = kind === "hb" ? `H is bonded directly to ${m.c} → hydrogen bonding.` : kind === "dd" ? `It's polar${m.sur.H ? ", but its H is bonded to " + m.c + ", not N, O, or F" : ""} → dipole-dipole.` : "Nonpolar → LDF only."; }
      if (Math.random() < 0.5){
        const a = {ionic:"Ionic", hb:"Hydrogen bonding", dd:"Dipole-dipole", ldf:"LDF"}[kind];
        return {kind:"choice", text:`What is the STRONGEST attractive force in [[${f}]]?`, fields:[k.F.choice("Answer", ["LDF","Dipole-dipole","Hydrogen bonding","Ionic"], a)], steps:[why]};
      }
      const a = {ionic:"Ionic bonding", hb:"LDF + dipole-dipole + H-bonding", dd:"LDF + dipole-dipole", ldf:"LDF only"}[kind];
      return {kind:"choice", text:`Which intermolecular forces does [[${f}]] have?`, fields:[k.F.choice("Answer", ["LDF only","LDF + dipole-dipole","LDF + dipole-dipole + H-bonding","Ionic bonding"], a)],
        steps:[(kind === "ionic" || kind === "ldf" ? "" : "Every molecule has LDF. ") + why + (kind === "hb" ? " (It's polar too, so dipole-dipole counts.)" : "")]};
    },
    "4.9": k => {
      const [x, y] = pick([["C","C"],["N","N"],["C","N"],["C","O"]]);
      const b = [`${x}–${y}`, `${x}=${y}`, `${x}≡${y}`];
      const [ask, i, why] = pick([["strongest", 2, "Triple bonds are the strongest."], ["shortest", 2, "Strongest bond = shortest bond, so the triple bond."],
        ["weakest", 0, "Single bonds are the weakest."], ["longest", 0, "Weakest bond = longest bond, so the single bond."], ["hardest to break", 2, "The strongest (triple) bond takes the most energy to break."]]);
      return {kind:"choice", text:`Which bond is the ${ask}?`, fields:[k.F.choice("Answer", b, b[i])], steps:[why]};
    }
  }
});

// Coulomb's law drill with different charges: one compound's ion charges are both ≥ the other's
function drillCoulomb(k){
  for (;;){
    const c1 = pick(CATIONS.filter(c => c.q < 3)), a1 = pick(ANIONS), c2 = pick(CATIONS.filter(c => c.q < 3)), a2 = pick(ANIONS);
    const ge = c2.q >= c1.q && -a2.q >= -a1.q, gt = c2.q > c1.q || -a2.q > -a1.q;
    if (!(ge && gt)) continue;
    const W = ionic(c1, a1), S = ionic(c2, a2);
    const ch = (c, a) => `${c.q}+ and ${-a.q}−`;
    const opts = shuffle([`[[${W.f}]]`, `[[${S.f}]]`]);
    return {kind:"choice", text:"Which has the stronger ionic bond?", fields:[k.F.choice("Answer", opts, `[[${S.f}]]`)],
      steps:[`[[${S.f}]] has ${ch(c2, a2)} ions; [[${W.f}]] has ${ch(c1, a1)}.`, `Greater charges → stronger: [[${S.f}]].`]};
  }
}
})();
