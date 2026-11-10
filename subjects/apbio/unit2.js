/* AP Biology · Unit 2: The Basic Unit of Life
   Source: Ms. Ravuri's interactive notes 2.1 (Cell Structure & Function) and 2.2 (The Cell Membrane) with their keys.
   Water potential: Ψ = Ψp + Ψs, Ψs = −iCRT, R = 0.0831 L·bar/mol·K, T in kelvin (°C + 273). */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const bars = (i, C, tC) => -(i * C * 0.0831 * (tC + 273));
const f2 = x => (x < 0 ? "−" : "") + Math.abs(x).toFixed(2);

Study.addUnit("apbio", {
  id: "u2",
  name: "Unit 2: The Basic Unit of Life",
  short: "Unit 2",
  sections: [
    {id:"2.1a", name:"2.1 Types of Cells"},
    {id:"2.1b", name:"2.1 Endomembrane System"},
    {id:"2.1c", name:"2.1 Energy Organelles & Endosymbiosis"},
    {id:"2.1d", name:"2.1 Cytoskeleton, Walls & Junctions"},
    {id:"2.2a", name:"2.2 Membrane Structure & Cell Size"},
    {id:"2.2b", name:"2.2 Passive Transport & Tonicity"},
    {id:"2.2c", name:"2.2 Water Potential"},
    {id:"2.2d", name:"2.2 Active & Bulk Transport"}
  ],

  notes: {
    "2.1a": [
      {sum:["All cells have a plasma membrane, cytoplasm, genetic material (DNA) and ribosomes.", "Prokaryotes (Bacteria and Archaea) have no nucleus and circular DNA in a nucleoid. Eukaryotes (Eukarya) have a nucleus, linear chromosomes and membrane-bound organelles.", "Plant cells have a cell wall, a large central vacuole and chloroplasts; animal cells have centrioles and lysosomes."]},
      {p:"The **cell** is the basic unit of life, and cells only come from other cells. The **plasma membrane** is a phospholipid bilayer with embedded proteins; it is **selectively (semi-) permeable**. The **cytoplasm** is everything inside the membrane; the **cytosol** is its fluid. **Ribosomes** (rRNA + protein, a large and a small subunit) build proteins from the instructions in DNA."},
      {table:{head:["", "Prokaryotic", "Eukaryotic"], rows:[
        ["Nucleus", "none; DNA sits in a nucleoid region", "DNA enclosed in a nucleus"],
        ["Chromosomes", "circular", "linear"],
        ["Organelles", "no membrane-bound organelles", "many membrane-bound organelles"],
        ["Size", "small and simple", "much larger and more complex"],
        ["Organisms", "Bacteria, Archaea (always single-celled)", "animals, plants, fungi, protists"]
      ]}},
      {p:"Many prokaryotes also have a **cell wall** of **peptidoglycan**, a jelly-like **capsule** outside it, and **flagella** for movement."},
      {p:"**Archaea** are known for living in extreme places (hot springs, deep-sea vents, very salty or acidic water) and in guts, where they make methane. **Bacteria** are known for disease, decomposition and partnerships with plants and animals. The two look alike but differ genetically and biochemically."},
      {check:[{q:"A biologist sees a single-celled organism. Prokaryote or eukaryote?", a:"Can't tell yet: both can be unicellular. Look for a nucleus."}, {q:"A cell has a nucleus and mitochondria. Must it be an animal cell?", a:"No. Plant cells have both too."}, {q:"Two things about a cell's DNA that show it's eukaryotic?", a:"The chromosomes are linear and they're inside a nucleus."}]}
    ],
    "2.1b": [
      {sum:["The endomembrane system: nucleus, ER, Golgi, lysosomes, vesicles and vacuoles, and the plasma membrane.", "Rough ER makes proteins that are secreted, put in membranes, or sent to lysosomes; smooth ER makes lipids and detoxifies; free ribosomes make proteins that stay in the cytosol.", "Path of a secreted protein: rough ER → transport vesicle → Golgi (cis face in, trans face out) → vesicle → plasma membrane."]},
      {table:{head:["Organelle", "Structure", "Job"], rows:[
        ["Nucleus", "double membrane (nuclear envelope) with pores; DNA wrapped around proteins = chromatin", "holds the DNA; the nucleolus makes ribosomes"],
        ["Rough ER", "membrane network studded with ribosomes, continuous with the nuclear envelope", "makes proteins for secretion, membranes and lysosomes"],
        ["Smooth ER", "membrane network without ribosomes", "makes lipids (fats, steroids, phospholipids); detoxifies"],
        ["Golgi apparatus", "stacks of flattened sacs (cisternae)", "modifies, sorts and ships products of the ER"],
        ["Lysosome", "vesicle of hydrolytic enzymes, acidic inside", "digests food, recycles worn-out organelles, apoptosis"],
        ["Vacuoles", "large vesicles", "food vacuoles, contractile vacuoles (pump water out of protists), central vacuole (plants)"]
      ]}},
      {p:"Internal membranes **increase surface area** for reactions and **compartmentalize** the cell so competing reactions stay apart."},
      {ex:{q:"Macrophages engulf and digest pathogens. Which organelles should be extra large or numerous?", a:["Lysosomes, to digest what they engulf.", "Rough ER and Golgi, to make and package the hydrolytic enzymes.", "Food vacuoles, formed by phagocytosis."]}},
      {check:[{q:"How do ribosomes get from the nucleolus to the cytoplasm?", a:"Through nuclear pores."}, {q:"Where is testosterone made in a cell?", a:"In the smooth ER, because it's a steroid (a lipid)."}, {q:"An enzyme works in the cytosol. Where was it made?", a:"On free ribosomes, not the rough ER."}]}
    ],
    "2.1c": [
      {sum:["Mitochondria carry out aerobic cellular respiration and are in nearly all eukaryotes; chloroplasts carry out photosynthesis.", "Both have a double membrane. Mitochondria: cristae and matrix. Chloroplasts: thylakoids stacked into grana, surrounded by stroma.", "Endosymbiotic theory: both began as prokaryotes engulfed by a larger cell. Mitochondria came first."]},
      {table:{head:["", "Mitochondrion", "Chloroplast"], rows:[
        ["Process", "aerobic cellular respiration", "photosynthesis"],
        ["Reaction", "sugar + oxygen → carbon dioxide + water + ATP", "light + carbon dioxide + water → carbohydrate + oxygen"],
        ["Inside", "inner membrane folded into cristae (more surface area); matrix; intermembrane space", "thylakoids (stack = granum); stroma; intermembrane space"],
        ["Found in", "nearly all eukaryotes", "plants (not animals or prokaryotes)"]
      ]}},
      {h:"Endosymbiotic theory"},
      {p:"An early prokaryote engulfed an **aerobic prokaryote**. The small cell supplied energy, the big cell supplied nutrients, and over time they became dependent on each other: the engulfed cell became the **mitochondrion**. Later, one of these cells engulfed a **photosynthetic prokaryote**, which became the **chloroplast**."},
      {steps:["Both have a **double membrane**, as expected after being engulfed.", "Both have their own **ribosomes**, similar to prokaryotic ribosomes.", "Both have their own **circular DNA**, like prokaryotes.", "That DNA has **genes** for some of their own proteins.", "Both **grow and reproduce independently** inside the cell."]},
      {check:[{q:"Which came first, mitochondria or chloroplasts? Why?", a:"Mitochondria: they're in both plant and animal cells, while chloroplasts are only in plant cells."}, {q:"Why are cristae folded?", a:"More surface area for the reactions of cellular respiration."}, {q:"Do plant cells have mitochondria?", a:"Yes. They use the sugar from photosynthesis for cellular respiration."}]}
    ],
    "2.1d": [
      {sum:["The cytoskeleton supports the cell, anchors organelles and moves things. Microtubules are thickest, microfilaments (actin) thinnest, intermediate filaments in between.", "Plant cell walls are cellulose; bacterial cell walls are peptidoglycan.", "Plant cells connect through plasmodesmata. Animal cells use tight junctions (seal), desmosomes (rivets) and gap junctions (channels)."]},
      {p:"**Cilia** (short, many) and **flagella** (long, usually one) are built from microtubules. They move the cell (sperm) or move fluid across a tissue (cilia in the trachea sweep mucus and debris away from the lungs)."},
      {table:{head:["Junction", "What it does", "Example"], rows:[
        ["Plasmodesmata", "channels through plant cell walls; cytosol is continuous", "water and signals pass between plant cells"],
        ["Tight junctions", "membranes pressed tightly together, forming a seal", "skin and other epithelial layers don't leak"],
        ["Desmosomes", "fasten cells into strong sheets, like rivets (keratin anchors)", "muscle cells attached to each other"],
        ["Gap junctions", "protein channels that let ions and small molecules pass", "heart muscle cells sharing calcium ions"]
      ]}},
      {check:[{q:"Which cytoskeletal fiber is easiest to see with a microscope?", a:"Microtubules, the thickest."}, {q:"Which human cells have flagella?", a:"Sperm cells."}, {q:"Labeled calcium ions spread from one heart muscle cell to its neighbors. Which junction?", a:"Gap junctions."}]}
    ],
    "2.2a": [
      {sum:["Fluid mosaic model: a phospholipid bilayer in which proteins and cholesterol move around.", "Small nonpolar molecules (O₂, CO₂) cross the bilayer directly; polar molecules and ions need transport proteins.", "Cells are small because a high surface-area-to-volume ratio makes exchange with the surroundings efficient."]},
      {table:{head:["Component", "Role"], rows:[
        ["Phospholipids", "hydrophilic heads face the cytosol and the outside; hydrophobic tails in the middle"],
        ["Integral proteins", "embedded in or spanning the bilayer; amphipathic (hydrophobic and hydrophilic regions)"],
        ["Peripheral proteins", "sit on the membrane's inner surface"],
        ["Cholesterol", "controls how fluid the membrane is as temperature changes"],
        ["Glycoproteins, glycolipids", "carbohydrate chains on the outside; the cell's 'fingerprint' for recognition"]
      ]}},
      {p:"**Membrane protein jobs:** channel, carrier, cell recognition, receptor, enzymatic, junction."},
      {p:"Transplanted organs can be rejected because the carbohydrate chains on the donor's cells don't match the recipient's."},
      {h:"Cell size"},
      {p:"Materials enter and leave through the surface, but the volume is what needs supplying. **Small cells have a large SA:V ratio** and exchange efficiently. Folds such as intestinal **microvilli** add surface area for absorbing nutrients."},
      {ex:{q:"Which exchanges materials best: a 3×3×3 μm cube, a 2×2×4 μm box, or a sphere of radius 2 μm?", a:["Cube: SA = 54, V = 27, SA:V = 2.", "Box: SA = 40, V = 16, SA:V = 2.5.", "Sphere: SA = 50.24, V = 33.49, SA:V = 1.5.", "The 2×2×4 box, with the highest ratio."]}},
      {check:[{q:"Besides integral proteins, what membrane molecule is amphipathic?", a:"A phospholipid."}, {q:"Can a sodium ion cross the bilayer on its own?", a:"No. It's charged, so it needs a transport protein."}, {q:"As a cell grows, what happens to its SA:V ratio?", a:"It decreases, so exchange becomes less efficient."}]}
    ],
    "2.2b": [
      {sum:["Passive transport needs no energy: substances move down their concentration gradient (high → low). Types: diffusion, osmosis, facilitated diffusion.", "Osmosis: water moves toward the side with more solute.", "Hypotonic solution → water enters the cell (plant cells turgid, animal cells may burst). Hypertonic → water leaves (cells shrink; plants plasmolyze). Isotonic → no net movement."]},
      {p:"At **dynamic equilibrium** molecules still move both ways, but at equal rates, so there is no net movement."},
      {table:{head:["Solution around the cell", "Solute outside vs. inside", "Net water movement", "Result"], rows:[
        ["Isotonic", "equal", "none", "no change in mass; ideal for animal cells"],
        ["Hypotonic", "lower outside", "into the cell", "cell gains mass; plant cells turgid (ideal), animal cells may lyse"],
        ["Hypertonic", "higher outside", "out of the cell", "cell loses mass; animal cells shrivel, plant cells plasmolyze and wilt"]
      ]}},
      {h:"Facilitated diffusion"},
      {p:"Ions and larger polar molecules cross through **transport proteins**, still down their gradient and with no energy. **Channel proteins** are hydrophilic tunnels (ion channels, **aquaporins** for water). **Carrier proteins** bind the solute and change shape (glucose, amino acids)."},
      {check:[{q:"Two things simple and facilitated diffusion share?", a:"Neither needs energy, and both move solute from high to low concentration."}, {q:"Two differences?", a:"Facilitated diffusion needs a transport protein and moves polar or charged solutes; simple diffusion moves small nonpolar ones straight through the bilayer."}, {q:"Does water stop moving at equilibrium?", a:"No. It moves both ways at equal rates."}]}
    ],
    "2.2c": [
      {sum:["Water potential (Ψ, in bars) measures how likely water is to move. Water moves from high Ψ to low Ψ.", "Ψ = Ψp + Ψs. Pure water in an open container has Ψ = 0; adding solute makes Ψ negative.", "Ψs = −iCRT, with i = number of particles per molecule, C = molarity, R = 0.0831, T = °C + 273."]},
      {steps:["**i** (ionization constant): sucrose and glucose = 1, NaCl = 2, CaCl₂ = 3.", "**C** = molar concentration.", "**R** = 0.0831 L·bar/mol·K.", "**T** = temperature in kelvin = °C + 273.", "**Pressure potential (Ψp)** comes from the cell wall pushing back on a turgid plant cell. In an open beaker it is 0."]},
      {ex:{q:"Find Ψ of an open beaker of 0.1 M NaCl at 25°C.", a:["Ψp = 0, so Ψ = Ψs.", "Ψs = −(2)(0.1)(0.0831)(298) = −4.95 bars."]}},
      {ex:{q:"A potato cell (0.4 M NaCl, Ψp = 0, 25°C) is put in that beaker. Which way does water move?", a:["Cell: Ψ = −(2)(0.4)(0.0831)(298) = −19.81 bars.", "Water moves from high Ψ (−4.95, the beaker) to low Ψ (−19.81, the cell): into the potato cell.", "At equilibrium the cell's Ψ equals the beaker's, −4.95 bars."]}},
      {h:"Potato lab"},
      {p:"Percent change in mass = (final − initial) ÷ initial × 100. Graph percent change against sucrose concentration and draw a line of best fit. Where the line crosses **0% change**, the solution is isotonic with the potato, so that concentration equals the potato's solute concentration. (In the class data it was about 0.5 M, giving Ψ = −(1)(0.5)(0.0831)(295) = −12.26 bars at 22°C.)"},
      {check:[{q:"Which has higher water potential: pure water or salt water?", a:"Pure water (0). Solute makes Ψ negative."}, {q:"A cube goes from 10 g to 13 g. Percent change?", a:"(13 − 10) / 10 × 100 = +30%."}, {q:"A cube gained mass. Was the solution hypotonic or hypertonic to it?", a:"Hypotonic: water moved in."}]}
    ],
    "2.2d": [
      {sum:["Active transport moves substances against their gradient (low → high) using carrier proteins and energy, usually ATP.", "The sodium-potassium pump moves 3 Na⁺ out and 2 K⁺ in per ATP, making the inside of the cell more negative.", "Bulk transport uses vesicles: exocytosis (out) and endocytosis (in: phagocytosis, pinocytosis, receptor-mediated)."]},
      {p:"The Na⁺/K⁺ pump leaves **high Na⁺ outside** and **high K⁺ inside**, an **electrochemical gradient**. Because 3 positive charges leave for every 2 that enter, a resting neuron has a **membrane potential** of about −60 to −70 mV."},
      {p:"A **cotransporter** moves one solute against its gradient using the downhill flow of another. The sucrose–H⁺ cotransporter lets H⁺ diffuse in and drags sucrose in with it. ATP built the H⁺ gradient, so ATP is used indirectly."},
      {table:{head:["Bulk transport", "What happens"], rows:[
        ["Exocytosis", "a vesicle (often from the Golgi) fuses with the plasma membrane and releases its contents outside"],
        ["Phagocytosis", "'cell eating': the membrane engulfs large solid material (white blood cells engulfing bacteria)"],
        ["Pinocytosis", "'cell drinking': vesicles form around fluid or very small particles"],
        ["Receptor-mediated endocytosis", "specific molecules bind receptors in a coated pit, which triggers the vesicle to form"]
      ]}},
      {check:[{q:"Which transport types use carrier proteins?", a:"Both facilitated diffusion (passive) and active transport."}, {q:"Which cells do a lot of exocytosis?", a:"Cells that secrete lots of protein, such as stomach cells releasing digestive enzymes."}, {q:"Why is a neuron's inside negative?", a:"The pump sends 3 positive ions out for every 2 it brings in."}]}
    ]
  },

  problems(k){
    const SRC = {"2.1a":"2.1 Types of cells", "2.1b":"2.1 Endomembrane system", "2.1c":"2.1 Energy organelles", "2.1d":"2.1 Cytoskeleton & junctions", "2.2a":"2.2 Membrane structure", "2.2b":"2.2 Passive transport", "2.2c":"2.2 Water potential", "2.2d":"2.2 Active transport"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 2.1a ===== */
    mc("2.1a", "Which four things do all cells have?", ["Plasma membrane, cytoplasm, DNA and ribosomes", "Plasma membrane, nucleus, DNA and ribosomes", "Cell wall, cytoplasm, DNA and mitochondria", "Plasma membrane, cytoplasm, nucleus and Golgi"], "Prokaryotes have no nucleus or membrane-bound organelles.");
    const pe = cat("2.1a", ["Prokaryotic", "Eukaryotic", "Both"], "Prokaryotic cells, eukaryotic cells, or both?");
    pe("Has ribosomes", "Both", "All cells make proteins.");
    pe("DNA is enclosed in a nucleus", "Eukaryotic", "The defining feature.");
    pe("DNA is in a nucleoid region", "Prokaryotic", "No membrane around it.");
    pe("Circular chromosome", "Prokaryotic", "Eukaryotic chromosomes are linear.");
    pe("Linear chromosomes", "Eukaryotic", "Wrapped around proteins in the nucleus.");
    pe("Membrane-bound organelles", "Eukaryotic", "ER, Golgi, mitochondria and so on.");
    pe("Has a plasma membrane", "Both", "Every cell has one.");
    pe("Can be a single-celled organism", "Both", "Bacteria, archaea and protists are all unicellular.");
    pe("Cell wall made of peptidoglycan", "Prokaryotic", "Found in bacteria.");
    const dm = cat("2.1a", ["Bacteria", "Archaea", "Eukarya"], "Which domain?");
    dm("Animals, plants, fungi and protists", "Eukarya", "All eukaryotes.");
    dm("Prokaryotes known for thriving in hot springs and deep-sea vents", "Archaea", "Extreme environments.");
    dm("Prokaryotes best known for causing disease and decomposing dead matter", "Bacteria", "Also important partners of plants and animals.");
    dm("Methane-producing prokaryotes in the guts of cattle and humans", "Archaea", "They help with digestion.");
    const pa = cat("2.1a", ["Plant cells", "Animal cells", "Both"], "Plant cells, animal cells, or both?");
    pa("Cell wall", "Plant cells", "Made of cellulose.");
    pa("Large central vacuole", "Plant cells", "Stores water, nutrients, pigments and wastes.");
    pa("Chloroplasts", "Plant cells", "For photosynthesis.");
    pa("Centrioles", "Animal cells", "Absent in most plant cells.");
    pa("Lysosomes", "Animal cells", "Not usually found in plants.");
    pa("Mitochondria", "Both", "Nearly all eukaryotes have them.");
    pa("Nucleus", "Both", "Both are eukaryotic.");
    mc("2.1a", "Why is the plasma membrane called semi-permeable?", ["Some substances can cross it and others cannot", "Nothing at all can cross it without energy", "Everything can cross it at the same speed", "Only water is ever able to cross it"], "It's a selective barrier; embedded transport proteins help decide what crosses.");
    mc("2.1a", "How are ribosomes and DNA related?", ["Ribosomes build proteins using instructions in the DNA", "Ribosomes build DNA using instructions in proteins", "Ribosomes store the DNA when the cell is not dividing", "Ribosomes break down DNA once it has been copied"], "Each is useless without the other.");
    mc("2.1a", "A human pancreas cell makes huge amounts of digestive enzymes. What would you expect it to have a lot of?", ["Ribosomes", "Chloroplasts", "Flagella", "Cell walls"], "Enzymes are proteins, and ribosomes make proteins.");

    /* ===== 2.1b ===== */
    const og = cat("2.1b", ["Nucleus", "Rough ER", "Smooth ER", "Golgi", "Lysosome", "Vacuole"], "Which organelle?");
    og("Holds the cell's chromatin", "Nucleus", "DNA wrapped around proteins.");
    og("Makes proteins that will be secreted from the cell", "Rough ER", "Its bound ribosomes thread the proteins into its lumen.");
    og("Makes lipids such as steroids and phospholipids", "Smooth ER", "No ribosomes.");
    og("Detoxifies the cell", "Smooth ER", "A major job in some cell types.");
    og("Modifies, sorts and ships proteins in vesicles", "Golgi", "Receives at the cis face, ships from the trans face.");
    og("Contains hydrolytic enzymes that digest macromolecules", "Lysosome", "Acidic inside.");
    og("Breaks down worn-out organelles for recycling", "Lysosome", "It recycles cell parts.");
    og("Pumps excess water out of freshwater protists", "Vacuole", "A contractile vacuole.");
    og("Stores water and pushes against the plant cell wall", "Vacuole", "The large central vacuole.");
    og("Contains the nucleolus, where ribosomes are made", "Nucleus", "A dense region inside the nucleus.");
    og("Makes the membrane proteins of the plasma membrane", "Rough ER", "Membrane proteins are made by bound ribosomes.");
    og("Produces lysosomes", "Golgi", "Some vesicles leaving the Golgi become lysosomes.");
    mc("2.1b", "A protein is secreted from a cell. Which path did it take?", ["Rough ER → vesicle → Golgi → vesicle → plasma membrane", "Smooth ER → lysosome → Golgi → nucleus → plasma membrane", "Golgi → rough ER → vesicle → nucleus → plasma membrane", "Nucleus → Golgi → smooth ER → vesicle → plasma membrane"], "Made in the rough ER, processed in the Golgi, released by exocytosis.");
    mc("2.1b", "Where do the proteins made by free ribosomes end up?", ["They stay and work in the cytosol", "They are secreted out of the cell", "They become part of the cell membrane", "They become enzymes inside lysosomes"], "The other three destinations are for proteins made on the rough ER.");
    mc("2.1b", "How does about six feet of DNA fit inside each tiny human cell?", ["It is wrapped tightly around proteins, forming chromatin", "It is cut into pieces that are stored in lysosomes", "It is kept as single nucleotides until it is needed", "It is folded inside the membranes of the smooth ER"], "Proteins help condense the DNA.");
    mc("2.1b", "The cis face of a cell's Golgi apparatus is damaged. Coordination with which organelle is most affected?", ["The endoplasmic reticulum", "The plasma membrane", "The mitochondrion", "The nucleolus"], "The cis face receives vesicles from the ER.");
    mc("2.1b", "Which is a benefit of the internal membranes of eukaryotic cells?", ["They keep competing reactions in separate compartments", "They let the cell survive without any ribosomes", "They stop all materials from entering the cell", "They allow the cell to live without making ATP"], "They also add surface area where reactions can occur.");
    mc("2.1b", "During apoptosis, what do lysosomes do?", ["Release their enzymes to break the cell down", "Fuse together to form a new nucleus", "Build new proteins to repair the cell", "Pump water out of the dying cell"], "Programmed cell death uses the cell's own hydrolytic enzymes.");
    mc("2.1b", "Where is new plasma membrane lipid first made, and where does it go?", ["Smooth ER → Golgi → cell membrane", "Golgi → smooth ER → cell membrane", "Nucleus → rough ER → cell membrane", "Lysosome → Golgi → cell membrane"], "Phospholipids are made in the smooth ER.");
    mc("2.1b", "Which two vacuoles fill with water as part of their function?", ["Contractile vacuoles and central vacuoles", "Food vacuoles and transport vesicles", "Lysosomes and contractile vacuoles", "Food vacuoles and central vacuoles"], "Contractile vacuoles in protists; the central vacuole in plants.");

    /* ===== 2.1c ===== */
    const mcl = cat("2.1c", ["Mitochondrion", "Chloroplast", "Both"], "Mitochondrion, chloroplast, or both?");
    mcl("Aerobic cellular respiration", "Mitochondrion", "Sugar + oxygen → CO₂ + water + ATP.");
    mcl("Photosynthesis", "Chloroplast", "Light + CO₂ + water → carbohydrate + oxygen.");
    mcl("Double membrane", "Both", "Evidence of being engulfed.");
    mcl("Cristae and a matrix", "Mitochondrion", "Folds of the inner membrane and the space inside it.");
    mcl("Thylakoids, grana and stroma", "Chloroplast", "The internal membrane system and the fluid around it.");
    mcl("Its own circular DNA and ribosomes", "Both", "Like prokaryotes.");
    mcl("Contains chlorophyll", "Chloroplast", "The green pigment.");
    mcl("Found in plant cells", "Both", "Plants respire too.");
    mcl("Found in animal cells", "Mitochondrion", "Animals have no chloroplasts.");
    mcl("Reproduces independently inside the cell", "Both", "Both are autonomous.");
    mc("2.1c", "According to the endosymbiotic theory, where did mitochondria come from?", ["An aerobic prokaryote engulfed by a larger cell", "A piece of the nucleus that pinched off", "A lysosome that stopped digesting food", "A virus that infected an early eukaryote"], "The two cells became dependent on each other.");
    mc("2.1c", "Which evolved first according to the theory, and why?", ["Mitochondria, since they are in both plant and animal cells", "Chloroplasts, since they are in both plant and animal cells", "Mitochondria, since they are found only in animal cells", "Chloroplasts, since they can make their own sugar"], "A mitochondria-containing cell later engulfed a photosynthetic prokaryote.");
    mc("2.1c", "Which is NOT evidence for the endosymbiotic theory?", ["Mitochondria are surrounded by a single membrane", "Mitochondria have their own circular DNA", "Chloroplasts have prokaryote-like ribosomes", "Both organelles divide on their own schedule"], "They have a double membrane, which is part of the evidence.");
    mc("2.1c", "Why is the inner mitochondrial membrane folded into cristae?", ["To increase surface area for respiration reactions", "To make room for extra copies of the cell's DNA", "To keep oxygen from getting into the matrix", "To store the sugar made in photosynthesis"], "More membrane = more room for the reactions.");
    mc("2.1c", "In which organisms would you NOT find mitochondria?", ["Prokaryotes", "Plants", "Fungi", "Protists"], "Nearly all eukaryotes have them.");
    mc("2.1c", "Which cell type would you expect to have hundreds of mitochondria?", ["A muscle cell", "A bacterium", "A dead skin cell", "A red blood cell"], "Muscle needs lots of ATP.");

    /* ===== 2.1d ===== */
    const cy = cat("2.1d", ["Microtubules", "Microfilaments", "Intermediate filaments"], "Which cytoskeleton fiber?");
    cy("The thickest fibers", "Microtubules", "Easiest to see.");
    cy("The thinnest fibers, also called actin filaments", "Microfilaments", "Made of actin.");
    cy("Fibers with a diameter in the middle range", "Intermediate filaments", "Between the other two.");
    cy("Build cilia and flagella", "Microtubules", "Specialized arrangements of microtubules.");
    const jn = cat("2.1d", ["Plasmodesmata", "Tight junction", "Desmosome", "Gap junction"], "Which cell junction?");
    jn("Channels through the walls of neighboring plant cells", "Plasmodesmata", "The cytosol of the cells is continuous.");
    jn("Seals cells together so fluid can't leak between them", "Tight junction", "Found in epithelial layers like skin.");
    jn("Fastens cells into strong sheets, like rivets", "Desmosome", "Anchored by keratin filaments.");
    jn("Protein channels that pass ions and small molecules between animal cells", "Gap junction", "Important for cell-to-cell communication.");
    jn("Lets heart muscle cells share calcium ions", "Gap junction", "From the class notes.");
    jn("Attaches muscle cells to one another", "Desmosome", "Strong mechanical links.");
    jn("Lets plant cells signal each other without secreting anything", "Plasmodesmata", "Signals travel through the channels.");
    mc("2.1d", "Which is a function of the cytoskeleton?", ["Supporting the cell and moving materials within it", "Storing all of the cell's genetic information", "Making ATP by cellular respiration", "Digesting worn-out organelles"], "Vesicles can 'walk' along cytoskeleton tracks.");
    mc("2.1d", "What do cilia in the trachea do?", ["Sweep mucus and trapped debris away from the lungs", "Propel the cells of the trachea through the blood", "Absorb oxygen from the air and pass it to the blood", "Make the mucus that traps dust and bacteria"], "They move fluid across the tissue surface.");
    mc("2.1d", "How do cilia and flagella differ?", ["Cilia are short and many; flagella are long and few", "Cilia are long and few; flagella are short and many", "Cilia are made of actin; flagella of microtubules", "Cilia are in plants; flagella are in animals"], "Both are made of microtubules.");
    mc("2.1d", "How do plant and bacterial cell walls differ?", ["Plant walls are cellulose; bacterial walls are peptidoglycan", "Plant walls are peptidoglycan; bacterial walls are cellulose", "Plant walls are chitin; bacterial walls are cellulose", "Plant walls are protein; bacterial walls are lipid"], "Both are polysaccharide-based.");
    mc("2.1d", "Which is NOT a function of the plant cell wall?", ["Carrying out photosynthesis", "Protecting the cell", "Maintaining the cell's shape", "Preventing too much water uptake"], "Photosynthesis happens in chloroplasts.");

    /* ===== 2.2a ===== */
    const mp = cat("2.2a", ["Phospholipid", "Cholesterol", "Integral protein", "Peripheral protein", "Glycoprotein"], "Which membrane component?");
    mp("Forms the bilayer, with hydrophilic heads and hydrophobic tails", "Phospholipid", "The main lipid of the membrane.");
    mp("Controls the fluidity of the membrane as temperature changes", "Cholesterol", "Embedded among the phospholipids.");
    mp("Spans the membrane and is amphipathic", "Integral protein", "Hydrophobic in the middle, hydrophilic at the ends.");
    mp("Sits on the inner surface of the membrane", "Peripheral protein", "Not embedded.");
    mp("A protein with a carbohydrate chain, used in cell recognition", "Glycoprotein", "Part of the cell's 'fingerprint'.");
    const pr = cat("2.2a", ["Channel", "Carrier", "Receptor", "Enzymatic", "Recognition", "Junction"], "Which type of membrane protein?");
    pr("Lets specific ions tunnel straight through the membrane", "Channel", "A hydrophilic passageway.");
    pr("Binds a solute, then changes shape to move it across", "Carrier", "Used for glucose and amino acids.");
    pr("Has a shape that lets a specific signal molecule bind", "Receptor", "Lets the cell respond to signals.");
    pr("Catalyzes a specific reaction at the membrane", "Enzymatic", "An enzyme embedded in the membrane.");
    pr("Helps cells identify one another", "Recognition", "Glycoproteins.");
    pr("Attaches adjacent cells so a tissue can function", "Junction", "Holds cells together.");
    mc("2.2a", "What does the fluid mosaic model describe?", ["Phospholipids and proteins moving freely around each other", "A rigid wall of proteins that never change position", "A single layer of lipids with water in the middle", "A membrane made entirely of carbohydrate chains"], "Proteins float like icebergs in a sea of phospholipids.");
    mc("2.2a", "Which crosses the phospholipid bilayer most easily on its own?", ["Oxygen gas (O₂)", "A sodium ion (Na⁺)", "Glucose", "A protein"], "Small nonpolar molecules pass straight through.");
    mc("2.2a", "Why can a transplanted organ be rejected?", ["The carbohydrate chains on its cells don't match the recipient's", "The phospholipids in its cells are a slightly different shape", "Its cells have more cholesterol than the recipient's", "Its membranes are not fluid enough for the new body"], "The immune system reads the carbohydrate 'fingerprint'.");
    mc("2.2a", "Which organelle adds carbohydrate chains to membrane proteins and lipids?", ["The Golgi apparatus", "The lysosome", "The nucleolus", "The mitochondrion"], "After the ER makes the proteins and lipids.");
    mc("2.2a", "Why do intestinal cells have microvilli?", ["More surface area for absorbing nutrients", "More volume for storing nutrients", "Less surface area so less water is lost", "More cytoskeleton for moving the cell"], "Folds raise the surface-area-to-volume ratio.");
    mc("2.2a", "Why are cells small?", ["A large SA:V ratio makes exchange with the surroundings efficient", "A small SA:V ratio makes exchange with the surroundings efficient", "Small cells need no transport proteins in their membranes", "Small cells contain more DNA than large cells do"], "Surface area supplies the volume.");
    num("2.2a", "A cube-shaped cell is 3 μm on each side. What is its surface area in μm²?", 54, "6 × 3² = 54.");
    num("2.2a", "A cube-shaped cell is 3 μm on each side. What is its surface-area-to-volume ratio?", 2, "54 / 27 = 2.");
    num("2.2a", "A cell is a 2 × 2 × 4 μm rectangular solid. What is its surface area in μm²?", 40, "Four 2×4 sides (32) + two 2×2 ends (8) = 40.");
    num("2.2a", "A cell is a 2 × 2 × 4 μm rectangular solid. What is its surface-area-to-volume ratio?", 2.5, "40 / 16 = 2.5.");
    mc("2.2a", "Cell X has SA:V = 2.5, cell Y has 2 and cell Z has 1.5. Which absorbs nutrients and removes waste most efficiently?", ["Cell X", "Cell Y", "Cell Z", "All the same"], "The highest ratio wins.");

    /* ===== 2.2b ===== */
    const tn = cat("2.2b", ["Hypotonic", "Isotonic", "Hypertonic"], "The cell is in which kind of solution?");
    tn("Net movement of water into the cell", "Hypotonic", "Less solute outside than inside.");
    tn("Net movement of water out of the cell", "Hypertonic", "More solute outside.");
    tn("The cell neither gains nor loses mass", "Isotonic", "No net water movement.");
    tn("Ideal for animal cells", "Isotonic", "They neither swell nor shrink.");
    tn("Ideal for plant cells", "Hypotonic", "Water fills the vacuole and makes the cell turgid.");
    tn("Solute concentration is greater outside the cell", "Hypertonic", "Water follows the solute out.");
    tn("Solute concentration is greater inside the cell", "Hypotonic", "Water moves in.");
    tn("An animal cell may lyse (burst)", "Hypotonic", "No wall to stop the swelling.");
    tn("A plant cell plasmolyzes and the plant wilts", "Hypertonic", "The membrane shrinks away from the wall.");
    tn("The cell gains mass", "Hypotonic", "Water moves in.");
    mc("2.2b", "What is true at dynamic equilibrium?", ["Molecules move both ways at equal rates", "All molecules have stopped moving", "Molecules move in only one direction", "The concentration gradient is at its largest"], "No net movement, but movement continues.");
    mc("2.2b", "Oxygen moves from the lungs to the blood to a muscle cell. Why?", ["It diffuses down its concentration gradient at each step", "It is pumped against its concentration gradient by ATP", "It is carried in vesicles by exocytosis and endocytosis", "It moves toward wherever its concentration is highest"], "Lungs have the most O₂, muscle cells the least.");
    mc("2.2b", "A membrane lets water through but not the solute. Which way does water have a net movement?", ["Toward the side with more solute", "Toward the side with less solute", "It doesn't move in either direction", "Toward whichever side is larger"], "Water moves to where water is less concentrated.");
    mc("2.2b", "What are aquaporins?", ["Channel proteins that let water cross membranes quickly", "Carrier proteins that pump water using energy from ATP", "Vesicles that carry water out of freshwater protists", "Lipids that stop water from crossing the bilayer"], "Water can cross the bilayer slowly; aquaporins speed it up.");
    const sf = cat("2.2b", ["Simple diffusion", "Facilitated diffusion", "Both"], "Simple diffusion, facilitated diffusion, or both?");
    sf("Requires no energy", "Both", "Both are passive.");
    sf("Requires a transport protein", "Facilitated diffusion", "A channel or carrier.");
    sf("Moves solute from high to low concentration", "Both", "Down the gradient.");
    sf("How ions cross the membrane passively", "Facilitated diffusion", "Charged particles can't cross the bilayer.");
    sf("How O₂ and CO₂ cross the membrane", "Simple diffusion", "Small and nonpolar.");
    sf("How glucose enters a cell down its gradient", "Facilitated diffusion", "Through a carrier protein.");

    /* ===== 2.2c ===== */
    mc("2.2c", "In which direction does water move?", ["From high water potential to low water potential", "From low water potential to high water potential", "From high solute concentration to low", "From low pressure to high pressure only"], "High Ψ → low Ψ.");
    mc("2.2c", "What is the water potential of pure water in an open beaker?", ["0 bars", "1 bar", "−1 bar", "100 bars"], "No solute and no pressure. It's usually the highest value.");
    mc("2.2c", "What happens to water potential when solute is added?", ["It decreases and becomes negative", "It increases and becomes positive", "It stays at exactly zero bars", "It doubles for every mole added"], "Ψs is always negative in a solution.");
    const iv = (name, i, why) => num("2.2c", `What is the ionization constant (i) for ${name}?`, i, why);
    iv("sucrose", 1, "It doesn't break apart in water.");
    iv("glucose", 1, "It doesn't break apart in water.");
    iv("NaCl", 2, "Na⁺ and Cl⁻.");
    iv("CaCl₂", 3, "One Ca²⁺ and two Cl⁻.");
    num("2.2c", "A solution is at 25°C. What temperature (in kelvin) goes into Ψs = −iCRT?", 298, "25 + 273.");
    mc("2.2c", "What is the water potential of an open beaker of 0.1 M NaCl at 25°C?", ["−4.95 bars", "−2.48 bars", "+4.95 bars", "−0.42 bars"], "Ψ = Ψs = −(2)(0.1)(0.0831)(298) = −4.95.");
    mc("2.2c", "What is the solute potential of a potato cell with 0.4 M NaCl at 25°C?", ["−19.81 bars", "−9.91 bars", "−4.95 bars", "+19.81 bars"], "−(2)(0.4)(0.0831)(298) = −19.81.");
    set("2.2c", {stim: "A potato cell (Ψ = −19.81 bars) is placed in an open beaker of solution (Ψ = −4.95 bars).", cite: "Class notes practice"}, [
      ["Which has the higher water potential?", ["The beaker solution", "The potato cell", "They are equal", "It can't be determined"], "−4.95 is higher (less negative) than −19.81."],
      ["Which way is the net movement of water?", ["Into the potato cell", "Out of the potato cell", "No net movement", "Back and forth evenly"], "From higher Ψ (−4.95) to lower Ψ (−19.81)."],
      ["After net movement stops, what is the water potential inside the potato cell?", ["−4.95 bars", "−19.81 bars", "−24.76 bars", "0 bars"], "At equilibrium it matches the beaker."]
    ]);
    set("2.2c", {stim: "Potato cubes sat in sucrose solutions for 15 minutes at 22°C. 0 M: 10 g → 13 g. 0.2 M: 12 g → 14 g. 0.4 M: 9 g → 10 g. 0.6 M: 10 g → 9.5 g. 0.8 M: 11 g → 9 g.", cite: "Potato lab practice (class notes)"}, [
      ["What is the percent change in mass in 0 M sucrose?", ["+30%", "+3%", "+23%", "−30%"], "(13 − 10) / 10 × 100."],
      ["What is the percent change in mass in 0.6 M sucrose?", ["−5%", "−0.5%", "+5%", "−50%"], "(9.5 − 10) / 10 × 100."],
      ["Why did the cubes in 0 M and 0.2 M gain mass?", ["Those solutions were hypotonic, so water moved in", "Those solutions were hypertonic, so water moved in", "Sucrose moved into the cubes from the solution", "The potato cells divided during the 15 minutes"], "The potato had more solute than the solution."],
    ]);
    set("2.2c", {stim: "In a potato lab at 22°C, percent change in mass is graphed against sucrose concentration. The line of best fit crosses 0% change at 0.5 M.", cite: "Potato lab practice (class notes)"}, [
      ["What is a 0.5 M sucrose solution to the potato cells?", ["Isotonic", "Hypotonic", "Hypertonic", "Saturated"], "No change in mass means no net water movement."],
      ["What is the solute concentration of the potato cells?", ["About 0.5 M", "About 0 M", "About 0.8 M", "About 0.2 M"], "At 0% change the solution is isotonic with the cells."],
      ["What is the water potential of the potato cells (Ψp = 0)?", ["−12.26 bars", "−24.51 bars", "−0.91 bars", "+12.26 bars"], "−(1)(0.5)(0.0831)(295) = −12.26."]
    ]);
    mc("2.2c", "What does pressure potential measure in a plant cell?", ["The pressure of the cell wall on the water inside", "The amount of solute dissolved in the cytosol", "The temperature of the water in the vacuole", "The number of aquaporins in the membrane"], "The more turgid the cell, the higher Ψp.");

    /* ===== 2.2d ===== */
    const ap = cat("2.2d", ["Active", "Passive", "Both"], "Active transport, passive transport, or both?");
    ap("Exocytosis and endocytosis", "Active", "Forming vesicles takes energy.");
    ap("Uses carrier proteins", "Both", "Facilitated diffusion and pumps both use them.");
    ap("Moves substances against their concentration gradient", "Active", "Low → high needs energy.");
    ap("Moves substances down their concentration gradient", "Passive", "High → low needs no energy.");
    ap("Requires energy", "Active", "Usually ATP.");
    ap("Substances move straight through the phospholipid bilayer", "Passive", "Simple diffusion.");
    ap("The sodium-potassium pump", "Active", "It uses ATP.");
    num("2.2d", "How many Na⁺ ions does the sodium-potassium pump move out of the cell per ATP?", 3, "3 Na⁺ out, 2 K⁺ in.");
    num("2.2d", "How many K⁺ ions does the sodium-potassium pump move into the cell per ATP?", 2, "3 Na⁺ out, 2 K⁺ in.");
    mc("2.2d", "A neuron has many sodium-potassium pumps. What are the ion concentrations like?", ["High K⁺ inside, high Na⁺ outside", "High Na⁺ inside, high K⁺ outside", "High Na⁺ and high K⁺ inside", "Equal amounts on both sides"], "The pump sends Na⁺ out and K⁺ in.");
    mc("2.2d", "Why does a resting neuron have a negative membrane potential?", ["The pump moves 3 positive ions out for every 2 it moves in", "The pump moves 3 negative ions in for every 2 it moves out", "Negative proteins are pumped in through the channels", "All of the positive ions have left the cell entirely"], "More positive charge ends up outside, about −60 to −70 mV.");
    mc("2.2d", "How does a sucrose–H⁺ cotransporter bring sucrose into a cell that already has a lot of it?", ["H⁺ diffusing down its gradient powers sucrose's uphill movement", "Sucrose diffuses in down its own concentration gradient", "A vesicle engulfs the sucrose by receptor-mediated endocytosis", "ATP binds the cotransporter directly and changes its shape"], "ATP is used indirectly: it built the H⁺ gradient.");
    const bt = cat("2.2d", ["Exocytosis", "Phagocytosis", "Pinocytosis", "Receptor-mediated"], "Which type of bulk transport?");
    bt("A vesicle fuses with the plasma membrane and releases its contents", "Exocytosis", "Out of the cell.");
    bt("A white blood cell engulfs a bacterium", "Phagocytosis", "Cell eating.");
    bt("Vesicles form around fluid and very small particles", "Pinocytosis", "Cell drinking.");
    bt("A hormone binds receptors in a coated pit and is taken in", "Receptor-mediated", "Specific to certain molecules.");
    bt("Stomach cells release digestive enzymes", "Exocytosis", "Secretion.");
    mc("2.2d", "Why can't a protein be moved across the membrane by a carrier protein?", ["It is too large, so it has to travel in a vesicle", "It is nonpolar, so it dissolves in the bilayer", "It has no charge, so pumps can't bind it", "It is too small to fit a carrier's binding site"], "Large molecules use bulk transport.");
    mc("2.2d", "Which human cells do a lot of phagocytosis?", ["Macrophages", "Neurons", "Red blood cells", "Sperm cells"], "They engulf debris and pathogens.");
  },

  drills: {
    /* SA:V of a cube or box */
    "2.2a": k => {
      const a = rint(1, 5), b = pick([a, a, rint(1, 5)]), c = pick([a, rint(1, 6)]);
      const sa = 2 * (a * b + a * c + b * c), v = a * b * c, what = pick(["sa", "v"]);
      return {kind:"num", text:`A cell is a ${a} × ${b} × ${c} μm rectangular solid. What is its ${what === "sa" ? "surface area in μm²" : "volume in μm³"}?`,
        fields:[k.F.num(what === "sa" ? "Surface area" : "Volume", what === "sa" ? sa : v)],
        steps:[what === "sa" ? `2(${a}×${b}) + 2(${a}×${c}) + 2(${b}×${c}) = ${sa}` : `${a} × ${b} × ${c} = ${v}`]};
    },
    /* percent change in mass */
    "2.2c": k => {
      if (Math.random() < 0.5){
        const init = pick([10, 20, 25, 40, 50]), pct = pick([-20, -12, -8, -4, 4, 8, 12, 20, 30]), fin = Math.round(init * (100 + pct)) / 100;
        return {kind:"num", text:`A potato cube has a mass of ${init} g before soaking and ${fin} g after. What is its percent change in mass? (Use a minus sign for a loss.)`,
          fields:[k.F.num("Percent", pct)], steps:[`(${fin} − ${init}) / ${init} × 100 = ${pct}%`]};
      }
      const sol = pick([["sucrose", 1], ["glucose", 1], ["NaCl", 2], ["CaCl₂", 3]]), C = rint(1, 9) / 10, t = pick([20, 22, 25, 27]);
      const right = bars(sol[1], C, t), wrong = [bars(sol[1] === 1 ? 2 : 1, C, t), -right, bars(sol[1], C, t - 273) || -0.5];
      const opts = [right, ...wrong].map(x => f2(x) + " bars").sort(() => Math.random() - 0.5);
      return {kind:"choice", text:`What is the solute potential of a ${C.toFixed(1)} M ${sol[0]} solution at ${t}°C?`,
        fields:[k.F.choice("Ψs", opts, f2(right) + " bars")],
        steps:[`i = ${sol[1]}, C = ${C.toFixed(1)}, R = 0.0831, T = ${t} + 273 = ${t + 273} K.`, `Ψs = −(${sol[1]})(${C.toFixed(1)})(0.0831)(${t + 273}) = ${f2(right)} bars`]};
    },
    /* tonicity from concentrations */
    "2.2b": k => {
      const inC = rint(1, 9) / 10, outC = pick([inC, rint(1, 9) / 10, rint(1, 9) / 10]);
      const a = outC < inC ? "Hypotonic" : outC > inC ? "Hypertonic" : "Isotonic";
      return {kind:"choice", text:`A cell with ${inC.toFixed(1)} M solute inside is placed in a ${outC.toFixed(1)} M solution. (The solute can't cross the membrane.) The solution is...`,
        fields:[k.F.choice("The solution is", ["Hypotonic", "Isotonic", "Hypertonic"], a)],
        steps:[a === "Isotonic" ? "The concentrations are equal, so there's no net water movement." : a === "Hypotonic" ? "Less solute outside than inside, so water moves into the cell." : "More solute outside than inside, so water moves out of the cell."]};
    }
  }
});
})();
