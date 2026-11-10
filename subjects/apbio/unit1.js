/* AP Biology · Unit 1: The Chemistry of Life
   Source: Ms. Ravuri's interactive notes 1.1 (Foundational Chemistry), 1.2 (Diversity of Macromolecules)
   and 1.3 (Enzyme Structure & Function).
   Class wording kept: new amino acids join the carboxyl end; new nucleotides join the 3' end;
   allosteric inhibition = noncompetitive inhibition. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

Study.addUnit("apbio", {
  id: "u1",
  name: "Unit 1: The Chemistry of Life",
  short: "Unit 1",
  sections: [
    {id:"1.1a", name:"1.1 Atoms, Bonds & Polarity"},
    {id:"1.1b", name:"1.1 Properties of Water"},
    {id:"1.1c", name:"1.1 pH & Carbon Chemistry"},
    {id:"1.2a", name:"1.2 Carbohydrates"},
    {id:"1.2b", name:"1.2 Proteins"},
    {id:"1.2c", name:"1.2 Nucleic Acids"},
    {id:"1.2d", name:"1.2 Lipids"},
    {id:"1.3a", name:"1.3 How Enzymes Work"},
    {id:"1.3b", name:"1.3 Inhibitors & Regulation"}
  ],

  notes: {
    "1.1a": [
      {sum:["Living things are built mostly from six elements: C, H, N, O, P, S (CHNOPS).", "Ionic bonds transfer electrons and make salts; covalent bonds share electrons and make molecules.", "Polar molecules and ions are hydrophilic; nonpolar molecules are hydrophobic. Like dissolves like."]},
      {p:"**Matter** has mass and takes up space. It's made of **elements**, and the smallest unit of an element is an **atom**: protons (+) and neutrons in the nucleus, electrons (−) in shells around it. The number of protons decides which element it is."},
      {h:"Isotopes"},
      {p:"**Isotopes** are atoms of the same element with different numbers of neutrons. Some are **radioactive** and decay over time. A **half-life** is the time it takes for half of a sample to decay (carbon-14: 5,730 years)."},
      {ex:{q:"A fossil has 0.04 mg of C-14. It started with 0.32 mg. How old is it?", a:["0.32 → 0.16 → 0.08 → 0.04 is three half-lives.", "3 × 5,730 = 17,190 years."]}},
      {p:"Radioactive isotopes are also used as **tracers**. Viruses built with radioactive phosphorus in their DNA made the bacteria they infected radioactive, which showed that viruses inject their DNA."},
      {h:"Bonds"},
      {table:{head:["", "Ionic compounds (salts)", "Covalent compounds (molecules)"], rows:[
        ["Electrons", "transferred, making charged ions", "shared"],
        ["In water", "ions separate (dissociate); the bonds break", "bonds don't break, though whole molecules may dissolve"],
        ["To break the bonds", "dissolving is enough", "needs a chemical reaction"],
        ["Example", "NaCl", "glucose, water, CO₂"]
      ]}},
      {h:"Polar vs. nonpolar"},
      {p:"**Nonpolar** molecules share electrons equally (fats, oils) and are **hydrophobic**. **Polar** molecules share unequally, giving partial + and − regions (water, glucose); they and ions are **hydrophilic**."},
      {p:"A molecule's **shape** decides its function. Morphine works because part of it is shaped like an endorphin, so it fits the same receptors."},
      {check:[{q:"Carbon-14 has 6 protons. How many neutrons?", a:"14 − 6 = 8 (carbon-12 has 6)."}, {q:"Glucose dissolves in water. Polar or nonpolar?", a:"Polar: like dissolves like."}, {q:"What kind of bonds are broken and re-formed in photosynthesis?", a:"Covalent bonds, which need a chemical reaction to break."}]}
    ],
    "1.1b": [
      {sum:["Water is polar, so its molecules hydrogen-bond to each other. One hydrogen bond is weak; many together are strong.", "Hydrogen bonding gives water cohesion, adhesion, surface tension, high specific heat, high heat of vaporization, less-dense ice and great solvent ability.", "Each property has a biological payoff: water transport in plants, stable temperatures, sweating, floating ice, blood as a transport fluid."]},
      {p:"A **hydrogen bond** is the attraction between a partially positive H (bonded to N, O or F) on one molecule and a partially negative N, O or F on another."},
      {table:{head:["Property", "What it means", "Why it matters"], rows:[
        ["Cohesion", "water sticks to water", "water columns hold together; droplets form"],
        ["Adhesion", "water sticks to other polar surfaces", "with cohesion gives capillary action, pulling water up a plant"],
        ["Surface tension", "the surface resists breaking", "insects walk on water; a paperclip can float"],
        ["High specific heat", "absorbs lots of heat with little temperature change", "stable body and coastal temperatures"],
        ["High heat of vaporization", "takes lots of heat to evaporate", "evaporative cooling (sweat)"],
        ["Expands when frozen", "ice is less dense than liquid water", "ice floats and insulates lakes so life survives below"],
        ["Universal solvent", "dissolves polar and charged substances", "blood and cytosol carry dissolved nutrients and wastes"]
      ]}},
      {check:[{q:"Why is Palm Springs hotter than Los Angeles in summer?", a:"LA is next to the ocean, and water's high specific heat absorbs heat and keeps coastal temperatures steady."}, {q:"Elephants spray themselves with water to cool off. Which property?", a:"High heat of vaporization: body heat is used up evaporating the water."}, {q:"What would happen to lake life in winter if ice sank?", a:"Lakes would freeze solid from the bottom up instead of being insulated by a floating layer of ice."}]}
    ],
    "1.1c": [
      {sum:["Acids raise [H⁺] and lower pH; bases raise [OH⁻] and raise pH. Neutral is pH 7.", "Carbon has 4 valence electrons, so it forms 4 covalent bonds and builds huge, varied molecules.", "Dehydration reactions join monomers and release water; hydrolysis adds water to split polymers."]},
      {table:{head:["", "Acidic", "Neutral", "Basic (alkaline)"], rows:[["Ions", "[H⁺] > [OH⁻]", "[H⁺] = [OH⁻]", "[H⁺] < [OH⁻]"], ["pH", "below 7", "7", "above 7"]]}},
      {p:"The lower the pH, the more H⁺. Stomach acid (pH 2) is more acidic than urine (pH 6), which is more acidic than blood (pH 7.4)."},
      {h:"Organic chemistry"},
      {p:"**Organic molecules** contain carbon. Chains of carbon and hydrogen (**hydrocarbons**) are nonpolar. **Functional groups** attached to the carbon skeleton change a molecule's reactivity and polarity: swapping one H on ethane for an −OH makes ethanol, which is hydrophilic. Estrogen and testosterone differ only in their functional groups."},
      {h:"Building and breaking macromolecules"},
      {steps:["**Monomers** are the repeating units; a **polymer** is many monomers bonded together.", "**Dehydration reaction:** joins two subunits with a covalent bond and **releases one water** per bond.", "**Hydrolysis:** **adds one water** to break each bond.", "Both need **enzymes**, catalysts that speed reactions up without being used up or changed."]},
      {ex:{q:"Five monomers are joined into one chain. What reaction is used and how many waters are involved?", a:["Dehydration synthesis.", "Five monomers need four bonds, so four water molecules are produced."]}},
      {check:[{q:"Which has more H⁺: a pH 3 or a pH 9 solution?", a:"pH 3. Lower pH means more H⁺."}, {q:"How many covalent bonds does carbon form?", a:"Four."}, {q:"Digesting starch into glucose: dehydration or hydrolysis?", a:"Hydrolysis: water is added to break the bonds."}]}
    ],
    "1.2a": [
      {sum:["Carbohydrates (C, H, O) give short-term energy and building material. Monomer: monosaccharide. Bond: glycosidic linkage.", "Storage polysaccharides: starch (plants) and glycogen (animals). Structural: cellulose (plant cell walls) and chitin (exoskeletons, fungal cell walls).", "Starch and cellulose are both made of glucose, but α vs. β linkages give them different shapes and jobs."]},
      {p:"A macromolecule's **structure determines its function**. **Monosaccharides** (simple sugars such as glucose, C₆H₁₂O₆) have C, H and O in a 1:2:1 ratio. Two joined by dehydration synthesis make a **disaccharide**: sucrose = glucose + fructose; lactose = galactose + glucose."},
      {p:"People who are **lactose intolerant** lack the enzyme **lactase**, which hydrolyzes lactose."},
      {table:{head:["", "Starch", "Cellulose"], rows:[["Monomer", "glucose (α form)", "glucose (β form)"], ["Shape", "helical, some branching", "straight, unbranched; strands hydrogen-bond into strong microfibrils"], ["Job", "energy storage in plants", "structure: plant cell walls"]]}},
      {check:[{q:"Where do animals store glucose?", a:"As glycogen, mostly in liver and muscle cells."}, {q:"What bond joins two monosaccharides?", a:"A glycosidic linkage."}, {q:"Name two structural polysaccharides.", a:"Cellulose (plant cell walls) and chitin (insect and crustacean exoskeletons, fungal cell walls)."}]}
    ],
    "1.2b": [
      {sum:["Proteins (C, H, O, N, S) are polymers of 20 amino acids joined by peptide bonds into polypeptides.", "Four levels of structure: primary (sequence), secondary (α helices and β sheets from hydrogen bonds), tertiary (overall 3-D shape from R-group interactions), quaternary (several polypeptides).", "A protein works only in its correct shape. Mutations change the primary structure; denaturation unfolds everything except the primary structure."]},
      {p:"Every **amino acid** has an **amino group**, a **carboxyl group** and an **R group** on a central carbon. The R group makes each amino acid **nonpolar (hydrophobic)**, **polar (hydrophilic)** or **ionic (charged, hydrophilic)**."},
      {p:"A **polypeptide** has an amino (N) terminus and a carboxyl (C) terminus, so it has **directionality**. New amino acids are added to the **carboxyl end**."},
      {table:{head:["Level", "What it is", "Held by"], rows:[
        ["Primary", "the sequence of amino acids", "peptide bonds"],
        ["Secondary", "α helices and β pleated sheets", "hydrogen bonds between amino acids"],
        ["Tertiary", "the overall globular 3-D shape", "R-group interactions: hydrophobic, hydrogen, ionic, covalent (disulfide bridges)"],
        ["Quaternary", "two or more polypeptides (subunits) together", "the same kinds of interactions; only some proteins have it"]
      ]}},
      {p:"In a globular protein, **hydrophobic** amino acids fold to the **inside** and **hydrophilic** ones face the water **outside**."},
      {h:"Mutations and denaturation"},
      {p:"A **mutation** can swap one amino acid for another. If the new one has different properties (glutamic acid → valine in sickle-cell hemoglobin), the folding and function can change. Swapping similar amino acids may change nothing."},
      {p:"**Denaturation** is the loss of a protein's shape from changes in pH, temperature or salt. It disrupts secondary, tertiary and quaternary structure but **not** the primary sequence, and it can often be reversed (renaturation)."},
      {p:"**Jobs of proteins:** enzymes, transport, contractile/motor, receptor, hormonal/signaling, defense (antibodies), structural (keratin, collagen)."},
      {check:[{q:"A polypeptide is rich in polar serine. Inside or outside of the folded protein?", a:"Outside, where it can interact with water."}, {q:"Which level of structure does a flat iron NOT change in hair's keratin?", a:"Primary. Heat breaks hydrogen bonds and R-group interactions, not peptide bonds."}, {q:"Insulin travels in the blood and binds INSR on liver cells. What types of proteins are these?", a:"Insulin is a hormonal (signaling) protein; INSR is a receptor protein."}]}
    ],
    "1.2c": [
      {sum:["Nucleic acids (C, H, O, N, P) are polymers of nucleotides: a phosphate, a 5-carbon sugar and a nitrogenous base.", "Purines (A, G) have two rings; pyrimidines (C, T, U) have one. A pairs with T (or U in RNA) with 2 hydrogen bonds; C pairs with G with 3.", "Strands have a 5′ (phosphate) end and a 3′ (hydroxyl) end. New nucleotides are added to the 3′ end, and DNA's two strands are antiparallel."]},
      {table:{head:["", "DNA", "RNA"], rows:[["Sugar", "deoxyribose", "ribose"], ["Bases", "A, T, G, C", "A, U, G, C"], ["Strands", "double helix", "usually single"], ["Job", "stores genetic information", "protein synthesis, gene regulation"]]}},
      {p:"The base attaches to the sugar's **1′ carbon** and the phosphate to the **5′ carbon**. Nucleotides are joined by dehydration reactions into **phosphodiester linkages** between the 3′ carbon of one sugar and the phosphate of the next, forming the **sugar-phosphate backbone** (the sides of the ladder). Paired bases are the rungs."},
      {tip:"\"CUT Py\": Cytosine, Uracil, Thymine are Pyrimidines (one word, one ring). \"Pure As Gold\": Purines are Adenine and Guanine (two words, two rings)."},
      {ex:{q:"A DNA sample is 35% adenine. What are the other three percentages?", a:["A pairs with T, so T = 35%.", "That leaves 30% for G and C, which are equal: 15% each."]}},
      {p:"**ATP** is a nucleotide: adenine, ribose and three phosphates. Hydrolyzing the last phosphate gives **ADP + Pᵢ** and releases energy for cell work."},
      {check:[{q:"Which base is only in RNA?", a:"Uracil."}, {q:"Which pair is harder to pull apart, A–T or C–G?", a:"C–G, with three hydrogen bonds instead of two."}, {q:"What does antiparallel mean?", a:"The two DNA strands run in opposite directions: one 5′→3′, the other 3′→5′."}]}
    ],
    "1.2d": [
      {sum:["Lipids (C, H, O, sometimes P) are mostly hydrophobic because they're mostly nonpolar hydrocarbon. They are not true polymers.", "Triglyceride (fat) = glycerol + 3 fatty acids joined by ester linkages; long-term energy storage and insulation.", "Phospholipid = glycerol + 2 fatty acids + phosphate head; it forms the bilayer of every cell membrane. Steroids have four fused carbon rings."]},
      {table:{head:["", "Saturated fat", "Unsaturated fat"], rows:[["Carbon-carbon bonds", "all single", "one or more double bonds"], ["At room temperature", "usually solid", "usually liquid (oils)"], ["Typical source", "animals (butter)", "plants and fish"]]}},
      {p:"**Phospholipids** have a polar, hydrophilic **head** and two nonpolar, hydrophobic **tails**. In water they form a **bilayer**: heads face the water on both sides, tails hide in the middle."},
      {p:"**Steroids** include **cholesterol** (in animal cell membranes) and the sex hormones **testosterone** and **estrogen**."},
      {check:[{q:"How many water molecules are released when one triglyceride forms?", a:"Three, one for each ester linkage."}, {q:"Why are lipids not true polymers?", a:"They aren't built from monomers that repeat into long chains."}, {q:"Which lipid has both a polar and a nonpolar region?", a:"A phospholipid."}]}
    ],
    "1.3a": [
      {sum:["Enzymes are protein catalysts that speed up reactions by lowering the activation energy. They aren't used up.", "The substrate binds the active site (induced fit). Each enzyme fits specific substrates, so it catalyzes specific reactions.", "Rate rises with substrate concentration until the enzymes are saturated. Each enzyme has an optimal temperature and pH; outside it, the enzyme denatures."]},
      {p:"**Activation energy (Eₐ)** is the energy reactants must absorb before a reaction can happen. High Eₐ = slow reaction. Enzymes **lower Eₐ**; they don't supply energy."},
      {steps:["The **substrate** binds the enzyme's **active site** by weak interactions (hydrogen bonds, ionic attractions), forming an **enzyme-substrate complex**.", "**Induced fit:** the enzyme shifts shape to hug the substrate.", "Bonds break and form; the **products** are released.", "The enzyme is unchanged and ready to go again."]},
      {p:"Enzyme names end in **-ase** and usually name the substrate or the reaction: **lactase** hydrolyzes lactose; **ATP synthase** makes ATP."},
      {h:"What changes enzyme activity"},
      {table:{head:["Factor", "Effect"], rows:[
        ["Substrate concentration", "rate rises, then levels off when every enzyme is busy (saturation); only adding enzyme raises it further"],
        ["Temperature", "warmer = more collisions and a faster rate, until the enzyme denatures (human enzymes: about 35–40°C)"],
        ["pH", "each enzyme has an optimum, usually 6–8; pepsin in the stomach works best at pH 2, trypsin in the intestine at pH 8"],
        ["Mutation", "a changed amino acid in or near the active site can stop substrate binding"],
        ["Cofactors", "non-protein helpers: inorganic metal ions (zinc, iron, copper) or organic coenzymes (vitamins)"]
      ]}},
      {check:[{q:"Do enzymes add energy to a reaction?", a:"No. They lower the activation energy."}, {q:"A reaction is at enzyme saturation. How can it go faster?", a:"Add more enzyme."}, {q:"Why can vitamin C deficiency stop collagen production?", a:"Vitamin C is a coenzyme that collagen-building enzymes need to work."}]}
    ],
    "1.3b": [
      {sum:["Competitive inhibitors block the active site; adding more substrate can overcome them.", "Noncompetitive (allosteric) inhibitors bind somewhere else and change the active site's shape; more substrate doesn't help.", "Feedback inhibition: the end product of a pathway shuts off an enzyme early in the pathway so the cell doesn't make more than it needs."]},
      {table:{head:["", "Competitive inhibitor", "Noncompetitive inhibitor"], rows:[["Binds", "the active site", "another site (allosteric site)"], ["Looks like", "the substrate", "not the substrate"], ["Effect", "blocks the substrate from binding", "changes the enzyme's shape so the substrate can't bind"], ["More substrate?", "overcomes it (if reversible)", "doesn't overcome it"]]}},
      {p:"**Reversible** inhibitors bind weakly and fall off. **Irreversible** inhibitors bond covalently and shut the enzyme down for good."},
      {h:"Allosteric regulation"},
      {p:"Enzymes have active and inactive shapes. A regulatory molecule binding at one site changes what happens at another site. An **activator** stabilizes the active shape; an **inhibitor** stabilizes the inactive shape."},
      {h:"Feedback inhibition"},
      {p:"In a **metabolic pathway**, each step has its own enzyme. When the end product builds up, it binds and inhibits an enzyme near the start. Example: extra **isoleucine** shuts down the first enzyme of the five-step pathway that makes it from threonine. This saves resources."},
      {p:"Cells also **compartmentalize** enzymes: ATP synthase sits in the inner mitochondrial membrane, where ATP is made."},
      {check:[{q:"Molecule D resembles the substrate, and adding more substrate reduces D's effect. What is D?", a:"A competitive inhibitor."}, {q:"What does an allosteric activator do?", a:"It binds away from the active site and stabilizes the enzyme's active shape."}, {q:"Why is feedback inhibition useful?", a:"The cell stops making a product once it has enough, so it doesn't waste materials or energy."}]}
    ]
  },

  problems(k){
    const SRC = {"1.1a":"1.1 Chemistry review", "1.1b":"1.1 Water", "1.1c":"1.1 pH & carbon", "1.2a":"1.2 Carbohydrates", "1.2b":"1.2 Proteins", "1.2c":"1.2 Nucleic acids", "1.2d":"1.2 Lipids", "1.3a":"1.3 Enzymes", "1.3b":"1.3 Regulation"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 1.1a ===== */
    mc("1.1a", "Which six elements make up most of every living thing?", ["C, H, N, O, P, S", "C, H, Na, O, K, S", "Ca, H, N, O, P, Fe", "C, He, N, O, P, Si"], "CHNOPS: more than 97% of the human body.");
    mc("1.1a", "What determines which element an atom is?", ["Its number of protons", "Its number of neutrons", "Its number of electrons", "Its number of shells"], "The atomic number is the number of protons.");
    mc("1.1a", "How do carbon-12 and carbon-14 differ?", ["Carbon-14 has two more neutrons", "Carbon-14 has two more protons", "Carbon-14 has two more electrons", "Carbon-14 has two fewer neutrons"], "Isotopes have the same protons but different neutrons (6 vs. 8).");
    num("1.1a", "Carbon has 6 protons. How many neutrons does carbon-14 have?", 8, "14 − 6 = 8.");
    num("1.1a", "Carbon-14's half-life is 5,730 years. A fossil has 0.04 mg of C-14 and started with 0.32 mg. How old is it, in years?", 17190, "0.32 → 0.16 → 0.08 → 0.04 is 3 half-lives. 3 × 5,730 = 17,190.");
    num("1.1a", "You start with 10 g of carbon-14. How many grams are still carbon-14 after two half-lives?", 2.5, "10 → 5 → 2.5.");
    mc("1.1a", "Viruses were made with radioactive phosphorus in their DNA. After they infected bacteria, the bacteria were radioactive. What did this show?", ["Viruses pass their DNA into the cells they infect", "Viruses pass their proteins into the cells they infect", "Bacteria destroy viral DNA before it can enter", "Radioactive phosphorus kills the bacteria it enters"], "The labeled DNA acted as a tracer.");
    const ic = cat("1.1a", ["Ionic", "Covalent", "Both"], "Ionic compounds, covalent compounds, or both?");
    ic("Atoms transfer electrons", "Ionic", "Transfer makes charged ions.");
    ic("Atoms share electrons", "Covalent", "Sharing makes molecules.");
    ic("Called salts", "Ionic", "Ionic compounds are salts, like NaCl.");
    ic("Can dissolve in water", "Both", "Salts dissociate; many polar molecules dissolve whole.");
    ic("The bonds break when it dissolves in water", "Ionic", "Water pulls the ions apart.");
    ic("Needs a chemical reaction to break its bonds", "Covalent", "Covalent bonds don't break just by dissolving.");
    const hp = cat("1.1a", ["Hydrophilic", "Hydrophobic"], "Hydrophilic or hydrophobic?");
    hp("Polar molecules", "Hydrophilic", "They mix with polar water.");
    hp("Nonpolar molecules", "Hydrophobic", "They don't mix with water.");
    hp("Ions", "Hydrophilic", "Charged particles are attracted to water.");
    hp("Oil", "Hydrophobic", "Oils are nonpolar.");
    hp("Glucose", "Hydrophilic", "It dissolves in water, so it's polar.");
    mc("1.1a", "Morphine relieves pain like the body's endorphins do. Why?", ["Part of it has a shape like an endorphin, so it fits the same receptors", "It is made of exactly the same atoms in the same order as an endorphin", "It breaks down into endorphin molecules once it is inside a cell", "It makes cells build more endorphin receptors on their membranes"], "Similar shapes can have similar biological effects.");
    mc("1.1a", "How many valence electrons does an atom usually need for a full outer shell?", ["8", "2", "4", "6"], "Atoms bond to reach a full valence shell of 8.");

    /* ===== 1.1b ===== */
    const wp = cat("1.1b", ["Cohesion", "Adhesion", "Surface tension", "High specific heat", "Heat of vaporization", "Ice is less dense", "Universal solvent"], "Which property of water?");
    wp("Water molecules cling to each other and form droplets", "Cohesion", "Water sticking to water.");
    wp("Water drops stick to a glass window", "Adhesion", "Water sticking to another polar surface.");
    wp("A water strider walks on a pond", "Surface tension", "The surface resists breaking.");
    wp("A carefully placed paperclip floats on water", "Surface tension", "Cohesion at the surface holds it up.");
    wp("Coastal cities have milder temperatures than inland deserts", "High specific heat", "The ocean absorbs heat with little temperature change.");
    wp("Your body temperature stays steady on a hot day", "High specific heat", "You're mostly water, which resists temperature change.");
    wp("Sweating cools you down", "Heat of vaporization", "Evaporating water carries body heat away.");
    wp("An elephant sprays itself with water to cool off", "Heat of vaporization", "Evaporative cooling.");
    wp("Fish survive winter under a frozen lake surface", "Ice is less dense", "Floating ice insulates the liquid water below.");
    wp("Blood carries dissolved nutrients, minerals and wastes", "Universal solvent", "Water's polarity dissolves many substances.");
    mc("1.1b", "How does water climb from a tree's roots to its leaves?", ["Cohesion and adhesion pull it up narrow tubes (capillary action)", "High specific heat warms the water until it rises as steam", "Surface tension pushes it upward from the soil below", "Ice crystals in the trunk expand and force it upward"], "Water sticks to itself and to the tube walls.");
    mc("1.1b", "Which atoms must hydrogen be bonded to for hydrogen bonding to happen?", ["Nitrogen, oxygen or fluorine", "Carbon, sulfur or phosphorus", "Sodium, potassium or calcium", "Only other hydrogen atoms"], "N, O and F pull electrons strongly, leaving H partially positive.");
    mc("1.1b", "What is a hydrogen bond?", ["An attraction between a partly positive H and a partly negative atom nearby", "A strong covalent bond in which two hydrogen atoms share one pair of electrons", "An ionic bond formed when hydrogen gives away its only electron", "A bond inside one water molecule between its two hydrogen atoms"], "It's a weak attraction between molecules, not a bond within one.");
    mc("1.1b", "Lysozyme is a large protein that works dissolved in tears and saliva. Is it likely polar or nonpolar overall?", ["Polar, because it dissolves in watery fluids", "Nonpolar, because all proteins repel water", "Nonpolar, because it has to kill bacteria", "Polar, because it is made mostly of lipids"], "Like dissolves like.");

    /* ===== 1.1c ===== */
    const ab = cat("1.1c", ["Acidic", "Neutral", "Basic"], "Acidic, neutral or basic?");
    ab("pH of 2", "Acidic", "Below 7.");
    ab("[H⁺] is equal to [OH⁻]", "Neutral", "Like pure water, pH 7.");
    ab("[OH⁻] is greater than [H⁺]", "Basic", "More hydroxide than hydrogen ions.");
    ab("Blood, pH 7.4", "Basic", "Slightly above 7.");
    ab("Urine, pH 6", "Acidic", "Slightly below 7.");
    ab("An alkaline solution", "Basic", "Alkaline means basic.");
    mc("1.1c", "Blood is pH 7.4, stomach acid is pH 2.0 and urine is pH 6.0. Rank them from least to most acidic.", ["Blood, urine, stomach acid", "Stomach acid, urine, blood", "Urine, blood, stomach acid", "Blood, stomach acid, urine"], "Lower pH = more acidic.");
    mc("1.1c", "Which has the highest concentration of OH⁻ ions?", ["Blood (pH 7.4)", "Urine (pH 6.0)", "Stomach acid (pH 2.0)", "Pure water (pH 7.0)"], "The highest pH has the most OH⁻.");
    num("1.1c", "How many covalent bonds does a carbon atom form to fill its valence shell?", 4, "It has 4 valence electrons and needs 8.");
    mc("1.1c", "What do functional groups do?", ["Change a molecule's chemical reactivity and polarity", "Remove all the carbon atoms from a molecule", "Turn every organic molecule into a hydrocarbon", "Keep a molecule from reacting with anything"], "For example, −OH turns nonpolar ethane into polar ethanol.");
    mc("1.1c", "Estrogen and testosterone have nearly identical carbon skeletons. Why do they act so differently?", ["They have different functional groups", "They have different numbers of rings", "One is a lipid and the other a protein", "One is polar and the other is ionic"], "Functional groups decide how a molecule behaves.");
    const dh = cat("1.1c", ["Dehydration", "Hydrolysis"], "Dehydration reaction or hydrolysis?");
    dh("Joins monomers into a polymer", "Dehydration", "Builds bonds, releases water.");
    dh("Breaks a polymer into monomers", "Hydrolysis", "Adds water to split bonds.");
    dh("A water molecule is produced", "Dehydration", "One water per new bond.");
    dh("A water molecule is used up", "Hydrolysis", "One water per broken bond.");
    dh("Digesting a protein into amino acids", "Hydrolysis", "Breaking a polymer down.");
    dh("Building glycogen from glucose", "Dehydration", "Linking monomers.");
    num("1.1c", "Four monomers are joined into one chain. How many water molecules are produced?", 3, "Four monomers need three bonds, one water each.");
    num("1.1c", "A chain of 10 monomers is completely hydrolyzed. How many water molecules are needed?", 9, "Nine bonds to break, one water each.");
    mc("1.1c", "Which statement about enzymes is true?", ["They speed up reactions and are not used up", "They are consumed each time they are used", "They are changed into the products", "They slow reactions down so cells stay cool"], "Catalysts can be reused over and over.");

    /* ===== 1.2a ===== */
    const mm = (sec) => cat(sec, ["Carbohydrate", "Protein", "Nucleic acid", "Lipid"], "Which macromolecule?");
    const m1 = mm("1.2a");
    m1("Its monomers are monosaccharides", "Carbohydrate", "Simple sugars.");
    m1("Contains C, H and O in a 1:2:1 ratio", "Carbohydrate", "Like glucose, C₆H₁₂O₆.");
    m1("Starch, glycogen, cellulose and chitin", "Carbohydrate", "All polysaccharides.");
    m1("Its monomers are joined by glycosidic linkages", "Carbohydrate", "The bond between sugars.");
    const ps = cat("1.2a", ["Starch", "Glycogen", "Cellulose", "Chitin"], "Which polysaccharide?");
    ps("How plants store glucose", "Starch", "Storage in plants.");
    ps("How animals store glucose", "Glycogen", "Storage in liver and muscle.");
    ps("Makes up plant cell walls", "Cellulose", "Structural, made of β glucose.");
    ps("Makes up insect exoskeletons", "Chitin", "Structural.");
    ps("Makes up the cell walls of fungi", "Chitin", "Structural.");
    ps("Straight, unbranched chains that hydrogen-bond into microfibrils", "Cellulose", "That's what makes it strong.");
    ps("Helical chains of α glucose with some branching", "Starch", "Its shape suits storage.");
    mc("1.2a", "Why are some people lactose intolerant?", ["They lack lactase, the enzyme that breaks down lactose", "They lack lactose, the enzyme that breaks down lactase", "Their cells cannot take in glucose or galactose", "Their bodies make too much of the enzyme lactase"], "Without lactase, lactose isn't hydrolyzed into galactose and glucose.");
    mc("1.2a", "Starch and cellulose are both made only of glucose. Why do they have different functions?", ["Their glycosidic linkages differ, which gives them different shapes", "Starch contains nitrogen atoms in its rings and cellulose does not", "Cellulose is a protein and starch is a carbohydrate", "Starch is made of fructose once it is inside a cell"], "α vs. β glucose → helical vs. straight → storage vs. structure.");
    mc("1.2a", "Which two monosaccharides make up sucrose?", ["Glucose and fructose", "Glucose and galactose", "Glucose and glucose", "Fructose and galactose"], "Table sugar = glucose + fructose. Lactose = galactose + glucose.");
    mc("1.2a", "What ultimately determines a macromolecule's function?", ["Its structure", "Its size alone", "Its color", "Its age"], "Structure determines function.");

    /* ===== 1.2b ===== */
    const lv = cat("1.2b", ["Primary", "Secondary", "Tertiary", "Quaternary"], "Which level of protein structure?");
    lv("The sequence of amino acids", "Primary", "Coded by genes in DNA.");
    lv("Alpha helices and beta pleated sheets", "Secondary", "Coils and folds from hydrogen bonding.");
    lv("Hydrogen bonding between amino acids along the backbone", "Secondary", "This makes the helices and sheets.");
    lv("The overall globular shape of one polypeptide", "Tertiary", "The final 3-D folding.");
    lv("Interactions between R groups", "Tertiary", "Hydrophobic, hydrogen, ionic and covalent.");
    lv("A disulfide bridge between two R groups", "Tertiary", "A strong covalent bond between sulfur atoms.");
    lv("Hydrophobic amino acids folding to the inside", "Tertiary", "A hydrophobic interaction among R groups.");
    lv("Several polypeptides joined into one protein", "Quaternary", "Each polypeptide is a subunit.");
    lv("Found in only some proteins", "Quaternary", "Hemoglobin has it: four subunits.");
    mc("1.2b", "Which three groups are attached to the central carbon of every amino acid?", ["An amino group, a carboxyl group and an R group", "A phosphate group, a sugar and a base", "A glycerol and two fatty acid chains", "A hydroxyl group, a methyl group and a ketone"], "Only the R group differs among the 20 amino acids.");
    mc("1.2b", "What bond joins amino acids?", ["Peptide bond", "Glycosidic linkage", "Ester linkage", "Phosphodiester linkage"], "Formed by dehydration between a carboxyl group and an amino group.");
    mc("1.2b", "To which end of a growing polypeptide are new amino acids added?", ["The carboxyl (C) terminus", "The amino (N) terminus", "Either end, at random", "The middle of the chain"], "Polypeptides have directionality.");
    mc("1.2b", "In sickle-cell anemia, a glutamic acid in hemoglobin is replaced by valine and the protein changes shape. What is most likely true?", ["The two amino acids have different properties, such as polar vs. nonpolar", "The two amino acids have identical R groups and identical properties", "The mutation removed all four of hemoglobin's polypeptide subunits", "The mutation changed hemoglobin from a protein into a nucleic acid"], "Swapping a charged amino acid for a nonpolar one changes the folding.");
    mc("1.2b", "A mutation replaces one small nonpolar amino acid with another small nonpolar one. What is the likely effect?", ["Little or none, since the two have similar properties", "The protein can no longer be made by the cell at all", "The protein's primary structure is unchanged", "The protein will always fold into a new shape"], "Similar amino acids usually fold the same way.");
    mc("1.2b", "Which levels of structure are lost when a protein denatures?", ["Secondary, tertiary and quaternary", "Primary, secondary and tertiary", "Primary and quaternary only", "Primary structure only"], "The amino acid sequence stays intact.");
    mc("1.2b", "A hot flat iron straightens curly hair, but the curls come back later. Why?", ["Heat breaks hydrogen bonds in keratin, which re-form afterward", "Heat breaks the peptide bonds in keratin, which re-form afterward", "Heat changes keratin's amino acid sequence for a short time", "Heat turns the keratin into a different protein called collagen"], "Denaturation doesn't touch primary structure and is often reversible.");
    const pt = cat("1.2b", ["Enzyme", "Transport", "Receptor", "Hormone", "Defense", "Structural"], "Which type of protein?");
    pt("Insulin, released into the blood after a meal", "Hormone", "A signaling protein carried in blood.");
    pt("INSR, which insulin binds on liver cells", "Receptor", "It binds the signal and starts a response.");
    pt("Glut-4, which moves glucose into the cell", "Transport", "A membrane transport protein.");
    pt("Glycogen synthase, which joins glucose into glycogen", "Enzyme", "It catalyzes a reaction (and ends in -ase).");
    pt("Antibodies", "Defense", "They help destroy viruses and bacteria.");
    pt("Keratin in hair and nails", "Structural", "A long fibrous protein.");
    pt("Collagen in connective tissue", "Structural", "It holds organs together.");

    /* ===== 1.2c ===== */
    const m3 = mm("1.2c");
    m3("Its monomers are nucleotides", "Nucleic acid", "DNA and RNA.");
    m3("Always contains phosphorus and nitrogen", "Nucleic acid", "C, H, O, N, P.");
    m3("Its monomers are amino acids", "Protein", "Joined into polypeptides.");
    m3("Stores the instructions for making proteins", "Nucleic acid", "DNA.");
    const dr = cat("1.2c", ["DNA", "RNA", "Both"], "DNA, RNA or both?");
    dr("Contains thymine", "DNA", "RNA uses uracil instead.");
    dr("Contains uracil", "RNA", "Only in RNA.");
    dr("Contains adenine, guanine and cytosine", "Both", "A, G and C are in both.");
    dr("Its sugar is ribose", "RNA", "DNA has deoxyribose.");
    dr("Usually single-stranded", "RNA", "DNA is a double helix.");
    dr("Has a sugar-phosphate backbone", "Both", "Alternating sugars and phosphates.");
    dr("Two antiparallel strands", "DNA", "One runs 5′→3′, the other 3′→5′.");
    const pp = cat("1.2c", ["Purine", "Pyrimidine"], "Purine or pyrimidine?");
    pp("Adenine", "Purine", "Pure As Gold: two rings.");
    pp("Guanine", "Purine", "Pure As Gold: two rings.");
    pp("Cytosine", "Pyrimidine", "CUT Py: one ring.");
    pp("Thymine", "Pyrimidine", "CUT Py: one ring.");
    pp("Uracil", "Pyrimidine", "CUT Py: one ring.");
    mc("1.2c", "What are the three parts of a nucleotide?", ["A phosphate group, a pentose sugar and a nitrogenous base", "An amino group, a carboxyl group and an R group", "A glycerol, a fatty acid and a phosphate group", "A glucose ring, a peptide bond and a nitrogenous base"], "The base is on the 1′ carbon and the phosphate on the 5′ carbon.");
    mc("1.2c", "To which end of a growing DNA or RNA strand are nucleotides added?", ["The 3′ end", "The 5′ end", "Both ends at once", "The 1′ end"], "The 3′ hydroxyl bonds to the next nucleotide's phosphate.");
    mc("1.2c", "What makes up the 'sides of the ladder' in DNA?", ["Alternating sugars and phosphates", "Pairs of nitrogenous bases", "Hydrogen bonds between bases", "Chains of amino acids"], "The sugar-phosphate backbone. The base pairs are the steps.");
    num("1.2c", "How many hydrogen bonds form between cytosine and guanine?", 3, "C–G has 3; A–T (or A–U) has 2.");
    num("1.2c", "A DNA sample is 35% adenine. What percent is guanine?", 15, "T = 35%, leaving 30% split equally between G and C.");
    num("1.2c", "A DNA sample is 22% cytosine. What percent is thymine?", 28, "G = 22%, leaving 56% split equally between A and T.");
    mc("1.2c", "What happens when ATP is hydrolyzed?", ["Its last phosphate is removed, giving ADP + Pᵢ and releasing energy", "A phosphate is added, giving a higher-energy molecule and storing energy", "Its adenine base is removed, giving ribose and three phosphates", "It is joined to another ATP, giving a short strand of nucleic acid"], "The energy powers cellular work.");

    /* ===== 1.2d ===== */
    const m4 = mm("1.2d");
    m4("Mostly hydrophobic", "Lipid", "Mostly nonpolar hydrocarbon.");
    m4("Does not form true polymers", "Lipid", "No repeating chain of monomers.");
    m4("Fats, phospholipids and steroids", "Lipid", "The three main kinds.");
    m4("Used for long-term energy storage and insulation", "Lipid", "Fats (triglycerides).");
    const tp = cat("1.2d", ["Triglyceride", "Phospholipid", "Both"], "Triglyceride, phospholipid or both?");
    tp("Contains three fatty acids", "Triglyceride", "Glycerol + 3 fatty acids.");
    tp("Contains two fatty acids", "Phospholipid", "Glycerol + 2 fatty acids + phosphate.");
    tp("Contains a glycerol molecule", "Both", "Both are built on glycerol.");
    tp("Has a polar region and a nonpolar region", "Phospholipid", "Polar head, nonpolar tails.");
    tp("Used for energy storage", "Triglyceride", "Fats store energy.");
    tp("Builds cell membranes", "Phospholipid", "It forms the bilayer.");
    tp("A lipid", "Both", "Both are lipids.");
    const su = cat("1.2d", ["Saturated", "Unsaturated"], "Saturated or unsaturated fat?");
    su("All single bonds between its carbon atoms", "Saturated", "No double bonds.");
    su("Has one or more carbon-carbon double bonds", "Unsaturated", "The double bonds bend the chains.");
    su("Usually solid at room temperature", "Saturated", "Straight chains pack tightly.");
    su("Vegetable and fish oils", "Unsaturated", "Liquid at room temperature.");
    su("Butter", "Saturated", "Animal fat.");
    num("1.2d", "How many water molecules are produced when one triglyceride forms from glycerol and fatty acids?", 3, "Three ester linkages, one water each.");
    mc("1.2d", "What bond joins a fatty acid to glycerol?", ["Ester linkage", "Peptide bond", "Glycosidic linkage", "Hydrogen bond"], "Formed by dehydration synthesis.");
    mc("1.2d", "How do phospholipids arrange themselves in water?", ["Heads face the water and tails face each other in a bilayer", "Tails face the water and heads face each other in a bilayer", "Heads and tails mix evenly through a single flat layer", "They dissolve completely and do not form any layers"], "Hydrophilic heads out, hydrophobic tails in.");
    mc("1.2d", "What structure do all steroids share?", ["Four fused carbon rings", "Three fatty acid chains", "A phosphate head group", "A long chain of sugars"], "Cholesterol, testosterone and estrogen all have it.");

    /* ===== 1.3a ===== */
    const tf = cat("1.3a", ["True", "False"], "True or false?");
    tf("Enzymes speed up reactions by providing energy to them.", "False", "They lower the activation energy; they don't supply energy.");
    tf("A reaction is faster when its activation energy is lower.", "True", "Less energy is needed to get started.");
    tf("Enzymes bind their substrates with strong covalent bonds.", "False", "They use weak interactions such as hydrogen bonds and ionic attractions.");
    tf("Enzymes are used up in the reactions they catalyze.", "False", "They're unchanged and reusable.");
    tf("An enzyme's shape fits only specific substrates.", "True", "That's enzyme specificity.");
    mc("1.3a", "What is the active site?", ["The region of the enzyme where the substrate binds", "The region of the substrate that the enzyme breaks", "The place where an allosteric inhibitor binds", "The part of the cell where an enzyme is made"], "Substrate + active site = enzyme-substrate complex.");
    mc("1.3a", "What is induced fit?", ["The enzyme changes shape slightly to hold the substrate", "The substrate changes into the enzyme as it binds", "The enzyme permanently bonds to its substrate", "The product pushes a new substrate into place"], "The fit tightens once the substrate binds.");
    mc("1.3a", "What does lactase do?", ["Hydrolyzes lactose into glucose and galactose", "Builds lactose from glucose and galactose", "Hydrolyzes proteins in the stomach", "Synthesizes ATP in the mitochondria"], "The -ase name comes from its substrate.");
    mc("1.3a", "As substrate concentration keeps rising, the reaction rate levels off. Why?", ["Every enzyme is already bound to substrate (saturation)", "The substrate has started to denature the enzyme", "The enzymes have all been used up by the reaction", "The activation energy has risen back to its old value"], "At saturation, only adding more enzyme speeds things up.");
    mc("1.3a", "A bacterium from a 20°C stream is moved to a 50°C hot spring. What most likely happens to its enzymes?", ["They denature and stop working", "They work faster than ever before", "They change into different enzymes", "They are not affected at all"], "The heat is far past their optimal temperature.");
    mc("1.3a", "Why does warming a reaction (below the denaturing point) speed it up?", ["Molecules move faster, so enzymes and substrates collide more", "Heat adds extra active sites to every enzyme molecule present", "Heat changes the substrate into a better-fitting one", "Warm enzymes no longer need any activation energy"], "More collisions mean more reactions per second.");
    mc("1.3a", "Pepsin works in the stomach and trypsin works in the small intestine. What are their optimal pH values?", ["Pepsin about 2, trypsin about 8", "Pepsin about 8, trypsin about 2", "Both about 7", "Both about 2"], "Each enzyme is suited to where it works.");
    mc("1.3a", "Which mutation would be least likely to affect an enzyme's function?", ["One amino acid far from the active site swapped for a similar one", "One amino acid in the active site swapped for a charged one", "A change that stops the enzyme from folding at all", "A change that removes the whole active site"], "Similar amino acid, away from the active site: the shape barely changes.");
    const cf = cat("1.3a", ["Inorganic cofactor", "Coenzyme"], "Inorganic cofactor or coenzyme?");
    cf("A zinc ion", "Inorganic cofactor", "Metal ions are inorganic.");
    cf("Vitamin C", "Coenzyme", "Vitamins are organic cofactors.");
    cf("An iron ion", "Inorganic cofactor", "A metal ion.");
    mc("1.3a", "Severe vitamin C deficiency stops the body from making collagen. What is the best explanation?", ["Vitamin C is a coenzyme that collagen-making enzymes need", "Vitamin C is the substrate that is turned into collagen", "Vitamin C is a competitive inhibitor of collagen enzymes", "Vitamin C is the amino acid collagen is made from"], "Enzymes are only active when their cofactors are bound.");

    /* ===== 1.3b ===== */
    const ih = cat("1.3b", ["Competitive", "Noncompetitive", "Both"], "Competitive inhibitor, noncompetitive inhibitor, or both?");
    ih("Binds to the active site", "Competitive", "It competes with the substrate for the same spot.");
    ih("Binds somewhere other than the active site", "Noncompetitive", "An allosteric site.");
    ih("Resembles the substrate", "Competitive", "That's why it fits the active site.");
    ih("Changes the shape of the active site", "Noncompetitive", "Binding elsewhere distorts the enzyme.");
    ih("Can be overcome by adding more substrate", "Competitive", "Substrate outcompetes it.");
    ih("Slows the reaction", "Both", "All inhibitors reduce the rate.");
    ih("Also called allosteric inhibition", "Noncompetitive", "Same thing in the class notes.");
    set("1.3b", {stim: "Molecule A catalyzes the conversion of molecule B to molecule C. The reaction is inhibited by molecule D, which resembles molecule B. Increasing the ratio of B to D reduces D's effect.", cite: "Class notes practice"}, [
      ["Which molecule is the enzyme?", ["A", "B", "C", "D"], "A catalyzes the reaction."],
      ["Which molecule is the substrate?", ["B", "A", "C", "D"], "B is what gets converted."],
      ["What kind of inhibitor is D?", ["Competitive", "Noncompetitive", "Irreversible", "Allosteric"], "It resembles the substrate and is overcome by more substrate."]
    ]);
    mc("1.3b", "How do reversible and irreversible inhibitors differ?", ["Irreversible ones bond covalently and don't come off", "Reversible ones bond covalently and don't come off", "Irreversible ones only bind at the active site", "Reversible ones permanently destroy the enzyme"], "Reversible inhibitors bind weakly and eventually fall off.");
    mc("1.3b", "What does an allosteric activator do?", ["Stabilizes the enzyme's active shape", "Stabilizes the enzyme's inactive shape", "Blocks the active site from the substrate", "Breaks the enzyme into amino acids"], "It binds a regulatory site and keeps the enzyme 'on'.");
    mc("1.3b", "What is feedback inhibition?", ["A pathway's end product inhibits an enzyme early in the pathway", "A pathway's first substrate inhibits the enzyme that binds it", "An enzyme's product speeds up the enzyme that made it", "A cell destroys every enzyme once a pathway finishes"], "It shuts the pathway down when there's enough product.");
    mc("1.3b", "Five enzymes turn threonine into isoleucine. What happens when isoleucine builds up?", ["It inhibits the first enzyme, so the pathway slows", "It activates the first enzyme, so the pathway speeds up", "It is converted back into threonine by the last enzyme", "It denatures all five of the enzymes in the pathway"], "Feedback inhibition keeps the cell from wasting resources.");
    mc("1.3b", "How do cells make sure certain reactions happen only in certain places?", ["They keep specific enzymes in specific membranes or organelles", "They make every enzyme in every part of the cell at once", "They change the pH of the whole cell for each reaction", "They only run one kind of reaction at a time"], "Compartmentalization, e.g. ATP synthase in the inner mitochondrial membrane.");
    mc("1.3b", "Adding a lot more substrate does not restore an inhibited enzyme's rate. What kind of inhibitor is present?", ["Noncompetitive", "Competitive", "A cofactor", "A coenzyme"], "Extra substrate can't fix an active site whose shape has changed.");
  },

  drills: {
    /* half-life */
    "1.1a": k => {
      const n = rint(1, 4), end = pick([1, 2, 5, 10]), start = end * 2 ** n, hl = pick([5730, 10, 30, 100]);
      if (Math.random() < 0.5)
        return {kind:"num", text:`An isotope has a half-life of ${hl.toLocaleString()} years. A sample started with ${start} g and now has ${end} g. How old is it, in years?`, fields:[k.F.num("Years", n * hl)], steps:[`${start} g to ${end} g is ${n} half-li${n === 1 ? "fe" : "ves"}.`, `${n} × ${hl.toLocaleString()} = ${(n * hl).toLocaleString()} years.`]};
      return {kind:"num", text:`A sample starts with ${start} g of a radioactive isotope. How many grams are left after ${n} half-li${n === 1 ? "fe" : "ves"}?`, fields:[k.F.num("Grams", end)], steps:[`Halve it ${n} time${n === 1 ? "" : "s"}: ${start} → ${end}.`]};
    },
    /* base-pairing percents */
    "1.2c": k => {
      const given = pick(["adenine", "thymine", "guanine", "cytosine"]), p = rint(11, 39);
      const partner = {adenine:"thymine", thymine:"adenine", guanine:"cytosine", cytosine:"guanine"}[given];
      const other = pick(["adenine", "thymine", "guanine", "cytosine"].filter(b => b !== given));
      const a = other === partner ? p : 50 - p;
      return {kind:"num", text:`A double-stranded DNA sample is ${p}% ${given}. What percent is ${other}?`, fields:[k.F.num("Percent", a)],
        steps:[`${given[0].toUpperCase() + given.slice(1)} pairs with ${partner}, so ${partner} is also ${p}%.`, other === partner ? null : `The other two bases share the remaining ${100 - 2 * p}%, so each is ${50 - p}%.`].filter(Boolean)};
    },
    /* waters in dehydration / hydrolysis */
    "1.1c": k => {
      const n = rint(3, 30), build = Math.random() < 0.5;
      return {kind:"num", text: build ? `${n} monomers are joined into a single chain. How many water molecules are produced?` : `A chain of ${n} monomers is completely hydrolyzed. How many water molecules are used?`,
        fields:[k.F.num("Waters", n - 1)], steps:[`${n} monomers are connected by ${n - 1} bonds, and each bond involves one water.`]};
    }
  }
});
})();
