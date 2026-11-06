/* AP Biology · Unit 3: Cellular Energetics
   Source: class interactive notes 3.1 (Free Energy & Metabolism), 3.2 (Cellular Respiration),
   3.3 (Photosynthesis) and the Unit 3 warm-up questions.
   ATP counting follows the class notes: each NADH → 3 ATP, each FADH2 → 2 ATP. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

/* ---------- figures (simple SVG, themed by CSS) ---------- */
const W = 600;
function energyDiagram(){
  // exergonic reaction, with and without an enzyme; arrows A (Ea, no enzyme), B (Ea, enzyme), C (ΔG)
  const x0 = 70, x1 = 560, yR = 150, yP = 225, yTop = 45, yEnz = 105;
  const curve = top => `M${x0} ${yR} L170 ${yR} C 230 ${yR}, 250 ${top}, 300 ${top} S 370 ${yP}, 430 ${yP} L${x1} ${yP}`;
  return `<svg viewBox="0 0 ${W} 280" role="img" aria-label="Energy diagram: reactants start higher than products. A tall solid curve and a lower dashed curve connect them. Arrow A spans from the reactants up to the top of the solid curve, arrow B from the reactants to the top of the dashed curve, and arrow C from the reactants down to the products.">
    <line class="axis" x1="${x0}" y1="20" x2="${x0}" y2="255" stroke-width="2"/><line class="axis" x1="${x0}" y1="255" x2="${x1}" y2="255" stroke-width="2"/>
    <text x="16" y="140" font-size="14" transform="rotate(-90 16 140)" text-anchor="middle">Free energy</text>
    <text x="315" y="275" font-size="14" text-anchor="middle">Progress of the reaction</text>
    <path class="ln" d="${curve(yTop)}"/><path class="ln dash" d="${curve(yEnz)}"/>
    <text x="95" y="${yR - 10}" font-size="13">Reactants</text><text x="470" y="${yP - 10}" font-size="13">Products</text>
    <line class="arw" x1="225" y1="${yR}" x2="225" y2="${yTop + 6}"/><text x="210" y="95" font-size="16" font-weight="700">A</text>
    <line class="arw" x1="275" y1="${yR}" x2="275" y2="${yEnz + 4}"/><text x="281" y="135" font-size="16" font-weight="700">B</text>
    <line class="arw" x1="400" y1="${yR}" x2="400" y2="${yP - 4}"/><line class="axis dash" x1="170" y1="${yR}" x2="410" y2="${yR}"/><text x="408" y="195" font-size="16" font-weight="700">C</text>
    <text x="450" y="50" font-size="12" class="muted">solid: no enzyme</text><text x="450" y="68" font-size="12" class="muted">dashed: with enzyme</text>
  </svg>`;
}
function spectrum(){
  // approximate absorption spectra (relative), 400–700 nm
  const g = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s));
  const P = {
    a: x => 0.95 * g(x, 430, 16) + 0.15 * g(x, 410, 12) + 0.75 * g(x, 662, 12) + 0.08 * g(x, 615, 18),
    b: x => 0.9 * g(x, 455, 14) + 0.5 * g(x, 642, 12) + 0.05 * g(x, 600, 20),
    c: x => 0.6 * g(x, 450, 22) + 0.55 * g(x, 482, 16) + 0.25 * g(x, 425, 14)
  };
  const X = nm => 70 + (nm - 400) * 1.6, Y = v => 230 - v * 190;
  const path = f => { let d = ""; for (let nm = 400; nm <= 700; nm += 4) d += (d ? " L" : "M") + X(nm).toFixed(1) + " " + Y(Math.min(1, f(nm))).toFixed(1); return d; };
  return `<svg viewBox="0 0 ${W} 285" role="img" aria-label="Absorption spectrum from 400 to 700 nanometers. Chlorophyll a peaks near 430 and 662 nm. Chlorophyll b peaks near 455 and 642 nm. Carotenoids absorb only from about 400 to 520 nm. All three absorb very little from about 520 to 600 nm.">
    <line class="axis" x1="70" y1="25" x2="70" y2="232" stroke-width="2"/><line class="axis" x1="70" y1="232" x2="555" y2="232" stroke-width="2"/>
    ${[400, 500, 600, 700].map(n => `<text x="${X(n)}" y="250" font-size="12" text-anchor="middle">${n}</text>`).join("")}
    <text x="312" y="275" font-size="13" text-anchor="middle">Wavelength (nm)</text>
    <text x="18" y="130" font-size="13" transform="rotate(-90 18 130)" text-anchor="middle">Light absorbed</text>
    <path class="ln c1" d="${path(P.a)}"/><path class="ln c2 dash" d="${path(P.b)}"/><path class="ln c3 dot" d="${path(P.c)}"/>
    <text x="440" y="40" font-size="12" class="lg1">— Chlorophyll a</text><text x="440" y="58" font-size="12" class="lg2">- - Chlorophyll b</text><text x="440" y="76" font-size="12" class="lg3">··· Carotenoids</text>
  </svg>`;
}
function metabolicGraph(){
  const X = t => 70 + t * 11, Y = v => 230 - v * 1.9;
  const end = [[0, 92], [5, 80], [10, 66], [15, 52], [20, 40], [25, 34], [30, 33], [35, 38], [40, 46]];
  const ect = [[0, 6], [5, 9], [10, 13], [15, 18], [20, 25], [25, 33], [30, 43], [35, 55], [40, 68]];
  const p = pts => pts.map(([t, v], i) => (i ? "L" : "M") + X(t).toFixed(1) + " " + Y(v).toFixed(1)).join(" ");
  return `<svg viewBox="0 0 ${W} 285" role="img" aria-label="Graph of metabolic rate versus environmental temperature from 0 to 40 degrees Celsius. Animal X's metabolic rate is highest at 0 degrees and falls until about 30 degrees, then rises slightly. Animal Y's metabolic rate starts low and rises steadily as temperature increases.">
    <line class="axis" x1="70" y1="25" x2="70" y2="232" stroke-width="2"/><line class="axis" x1="70" y1="232" x2="520" y2="232" stroke-width="2"/>
    ${[0, 10, 20, 30, 40].map(t => `<text x="${X(t)}" y="250" font-size="12" text-anchor="middle">${t}</text>`).join("")}
    <text x="295" y="275" font-size="13" text-anchor="middle">Environmental temperature (°C)</text>
    <text x="18" y="130" font-size="13" transform="rotate(-90 18 130)" text-anchor="middle">Metabolic rate</text>
    <path class="ln c1" d="${p(end)}"/><path class="ln c3 dash" d="${p(ect)}"/>
    <text x="${X(1)}" y="${Y(92) - 8}" font-size="13" font-weight="700">Animal X</text><text x="${X(33)}" y="${Y(68) + 4}" font-size="13" font-weight="700">Animal Y</text>
  </svg>`;
}

Study.addUnit("apbio", {
  id: "u3",
  name: "Unit 3: Cellular Energetics",
  short: "Unit 3",
  sections: [
    {id:"3.1a", name:"3.1 Metabolism & Thermodynamics"},
    {id:"3.1b", name:"3.1 Free Energy & ATP Coupling"},
    {id:"3.1c", name:"3.1 Metabolic Rate & Body Temp"},
    {id:"3.2a", name:"3.2 Redox, Glycolysis & Krebs"},
    {id:"3.2b", name:"3.2 Oxidative Phosphorylation"},
    {id:"3.2c", name:"3.2 Fermentation & Anaerobes"},
    {id:"3.3a", name:"3.3 Photosynthesis & Pigments"},
    {id:"3.3b", name:"3.3 Light Reactions"},
    {id:"3.3c", name:"3.3 Calvin Cycle"}
  ],

  notes: {
    "3.1a": [
      {sum:["Metabolism is all the chemical reactions in a cell; pathways either build molecules (anabolic) or break them down (catabolic).", "First law: energy can't be created or destroyed, only changed in form.", "Second law: every energy change increases the universe's entropy (disorder) and loses some energy as heat."]},
      {p:"**Metabolism** is all of an organism's chemical reactions, organized into **metabolic pathways**. Each step of a pathway is catalyzed by its own enzyme, so a 4-step pathway (V → W → X → Y → Z) needs 4 enzymes."},
      {table:{head:["", "Catabolic", "Anabolic"], rows:[
        ["Does what", "breaks complex molecules into simpler ones", "builds complex molecules from simpler ones"],
        ["Energy", "releases energy", "requires energy"],
        ["Example", "cellular respiration (glucose → CO₂ + H₂O)", "protein synthesis, photosynthesis"]
      ]}},
      {h:"Kinetic vs. potential energy"},
      {p:"**Kinetic** = energy of motion: thermal energy, heat, light, muscle movement. **Potential** = energy from location or structure: chemical energy, glucose, ATP, water behind a dam."},
      {h:"Laws of thermodynamics"},
      {steps:["**First law:** energy can be transferred and transformed but not created or destroyed. (A bear eating a fish turns the fish's chemical energy into its own chemical energy and movement.)",
        "**Second law:** every energy transfer increases the **entropy** (disorder) of the universe, because some energy is lost as heat.",
        "Organisms decrease entropy inside themselves (building proteins) but increase it more in their surroundings (heat, CO₂ and H₂O), so the second law still holds."]},
      {tip:"Life needs a constant input of energy to stay ordered. Loss of order or energy flow means death."},
      {check:[{q:"What kind of energy is stored in glucose's bonds?", a:"Potential (chemical) energy."}, {q:"Is building a protein from amino acids anabolic or catabolic?", a:"Anabolic: it builds a bigger molecule and needs energy."}, {q:"How can living things be so organized if entropy always increases?", a:"They use energy to stay organized, and they release heat and simple molecules that increase the entropy of their surroundings, so the universe's total entropy still rises."}, {q:"Why does no energy transfer in a cell work at 100% efficiency?", a:"The second law: some energy is always lost as heat."}]}
    ],
    "3.1b": [
      {sum:["ΔG < 0: exergonic (releases energy, can happen on its own). ΔG > 0: endergonic (needs energy).", "Enzymes speed reactions by lowering activation energy; they do NOT change ΔG.", "Cells drive endergonic reactions by coupling them to ATP hydrolysis (ΔG = −7.3 kcal/mol), usually by phosphorylating a molecule."]},
      {p:"**Free energy (G)** is the part of a system's energy that can do work; think of it as instability. **ΔG = G(final) − G(initial)**."},
      {table:{head:["", "Exergonic", "Endergonic"], rows:[
        ["ΔG", "negative", "positive"],
        ["Free energy", "released", "required (absorbed)"],
        ["Spontaneous?", "yes", "no"],
        ["Products vs. reactants", "products have less G", "products have more G"],
        ["Pathway", "catabolic", "anabolic"],
        ["Examples", "cell respiration (ΔG = −686 kcal/mol), ATP hydrolysis", "photosynthesis (+686 kcal/mol), ATP synthesis"]
      ]}},
      {p:"More free energy: large complex molecules, a concentration gradient, water behind a dam. Lower free energy = more stable."},
      {h:"Activation energy & enzymes"},
      {p:"**Activation energy (Eₐ)** is the energy reactants must absorb to start a reaction. **Enzymes** are protein catalysts that **lower Eₐ**, speeding the reaction up. They do **not** change ΔG."},
      {h:"ATP coupling"},
      {p:"ATP hydrolysis (ATP → ADP + Pᵢ) is exergonic: **ΔG = −7.3 kcal/mol**, because the three negative phosphates repel each other. Cells couple it to endergonic reactions. It only works if the **overall** ΔG is negative, so ATP can drive a reaction that needs **less than 7.3 kcal/mol**."},
      {ex:{q:"Which can ATP drive? Rxn 1: ΔG = +8.5. Rxn 2: ΔG = −9.0. Rxn 3: ΔG = +4.5. Rxn 4: ΔG = −4.0.", a:["Only Rxn 3: it's endergonic and needs less than 7.3.", "Rxn 1 needs too much (+8.5 − 7.3 = +1.2, still positive). Rxns 2 and 4 are already spontaneous."]}},
      {p:"Cells use ATP for **chemical, transport, and mechanical work**, usually by **phosphorylating** another molecule. ATP is regenerated from ADP + Pᵢ (endergonic), powered by catabolism, mainly cellular respiration."},
      {check:[{q:"A reaction has ΔG = +5 kcal/mol. Can ATP hydrolysis drive it?", a:"Yes: −7.3 + 5 = −2.3, so the coupled reaction is exergonic overall."}, {q:"What does an enzyme change: the activation energy or ΔG?", a:"Only the activation energy. ΔG stays the same."}, {q:"Name the three kinds of work ATP powers.", a:"Chemical, transport, and mechanical work."}, {q:"Is cellular respiration exergonic or endergonic?", a:"Exergonic: it breaks glucose down and releases energy."}]}
    ],
    "3.1c": [
      {sum:["Smaller animals have a higher metabolic rate per gram of body mass.", "Endotherms make their own heat from metabolism; ectotherms get heat mostly from their surroundings.", "Torpor lowers metabolic rate and body temperature to save energy."]},
      {table:{head:["", "Endotherms", "Ectotherms"], rows:[
        ["Heat source", "metabolic heat", "the environment"],
        ["Body temperature", "stays fairly constant", "changes with the environment"],
        ["Metabolic rate", "much higher", "lower"],
        ["When it gets colder", "metabolic rate goes up to make heat", "metabolic rate goes down"],
        ["Main way to regulate", "metabolism (plus behavior)", "behavior (basking, burrowing)"]
      ]}},
      {p:"Both can regulate their body temperature, and in both, metabolic rate rises with activity. **Smaller** organisms have **higher** per-gram metabolic rates (more surface area per gram, so they lose heat faster)."},
      {p:"**Torpor** is a state of lowered metabolic rate and body temperature that saves energy when food is scarce or it's cold (daily torpor in hummingbirds, hibernation in bears and ground squirrels)."},
      {check:[{q:"Which uses more energy per gram: a mouse or an elephant?", a:"The mouse. Smaller animals have more surface area for their volume and lose heat faster."}, {q:"Why do endotherms need more food than ectotherms of the same size?", a:"They burn energy to keep their body temperature up."}, {q:"What is torpor?", a:"A state of lowered activity, metabolism, and body temperature that saves energy (hibernation is long-term torpor)."}, {q:"Why might a hummingbird go into torpor at night?", a:"Its small size gives it a very high metabolic rate, so lowering it overnight saves energy when it can't feed."}]}
    ],
    "3.2a": [
      {sum:["Redox: oxidation is losing electrons, reduction is gaining them (LEO goes GER).", "In respiration, glucose is oxidized and oxygen is reduced.", "Glycolysis (cytoplasm) splits glucose into 2 pyruvate; the Krebs cycle (mitochondrial matrix) finishes breaking it to CO₂, filling NADH and FADH₂ with electrons."]},
      {h:"Redox"},
      {p:"**LEO goes GER**: Loses Electrons is Oxidation, Gains Electrons is Reduction. Electrons usually travel with hydrogen atoms. Oxidized: loses H / gains O. Reduced: gains H / loses O."},
      {p:"In respiration, **glucose is oxidized** to CO₂ and **oxygen is reduced** to H₂O. The carriers **NAD⁺ + 2e⁻ + H⁺ → NADH** and **FAD + 2e⁻ + 2H⁺ → FADH₂** are reductions; they carry the electrons to the electron transport chain."},
      {table:{head:["Stage (per glucose)", "Where", "Makes", "CO₂"], rows:[
        ["Glycolysis", "cytoplasm (no O₂ needed)", "2 pyruvate, 2 NADH, 2 ATP net (4 made − 2 used)", "0"],
        ["Pyruvate oxidation", "mitochondrial matrix", "2 acetyl CoA, 2 NADH", "2"],
        ["Krebs cycle (runs ×2)", "mitochondrial matrix", "6 NADH, 2 FADH₂, 2 ATP", "4"]
      ]}},
      {p:"Glycolysis: 10 reactions. **Energy investment** (2 ATP phosphorylate glucose, which splits into two 3-carbon G3P) then **energy harvest** (each G3P → pyruvate, making 2 NADH and 4 ATP by **substrate-level phosphorylation**: an enzyme moves a phosphate from a substrate to ADP)."},
      {p:"Krebs: acetyl CoA (2C) + oxaloacetate (4C) → citrate (6C), which is oxidized back to oxaloacetate. 8 reactions; runs twice per glucose; uses 3 H₂O per turn."},
      {tip:"Totals before the ETC: 10 NADH, 2 FADH₂, 4 ATP, 6 CO₂."},
      {check:[{q:"Where does glycolysis happen?", a:"In the cytoplasm."}, {q:"When NAD⁺ becomes NADH, is it oxidized or reduced?", a:"Reduced: it gains electrons."}, {q:"What's the net ATP from glycolysis?", a:"2 ATP (4 made, 2 invested), by substrate-level phosphorylation."}, {q:"Where does the CO₂ you breathe out come from?", a:"From pyruvate oxidation and the Krebs cycle, as the carbons from glucose are removed."}]}
    ],
    "3.2b": [
      {sum:["NADH and FADH₂ hand electrons to the electron transport chain in the inner mitochondrial membrane.", "The chain pumps H⁺ into the intermembrane space; H⁺ flows back through ATP synthase, making most of the ATP (chemiosmosis).", "Oxygen is the final electron acceptor and becomes water."]},
      {p:"**Oxidative phosphorylation** = electron transport chain + chemiosmosis, on the **inner mitochondrial membrane**."},
      {steps:["NADH and FADH₂ drop their electrons off at protein complexes in the ETC.",
        "Electrons lose free energy as they pass down the chain; that energy pumps H⁺ from the **matrix** into the **intermembrane space** (active transport). In the class model: each NADH pumps 3 H⁺ (complexes I, III, IV), each FADH₂ pumps 2 H⁺ (III, IV).",
        "**Oxygen is the final electron acceptor**: ½ O₂ + 2e⁻ + 2H⁺ → H₂O. 12 electron pairs need 6 O₂ and make 12 H₂O.",
        "**Chemiosmosis:** H⁺ diffuses back into the matrix through **ATP synthase** (the proton-motive force), which makes ATP. Each H⁺ → 1 ATP, so NADH → 3 ATP and FADH₂ → 2 ATP."]},
      {p:"Intermembrane space: high H⁺, low pH. Matrix: low H⁺."},
      {h:"Uncoupling"},
      {p:"If H⁺ leaks back through **uncoupling proteins** instead of ATP synthase, the energy becomes **heat** instead of ATP. Endotherms (like animals with brown fat) use this to stay warm. Less ATP, more heat."},
      {h:"More to know"},
      {p:"Aerobic **prokaryotes** do all four stages, but their ETC is on the **cell (plasma) membrane**, so H⁺ is pumped **out of the cell**. Fats, proteins, and other carbs can also feed respiration; a gram of fat yields **more than twice** the ATP of a gram of carbohydrate. **Feedback inhibition**: lots of ATP inhibits an enzyme early in glycolysis; low ATP speeds respiration up. Glycolysis is found in all three domains and needs no O₂ or mitochondria, evidence that it **evolved early**."},
      {check:[{q:"What would happen if oxygen ran out?", a:"Electrons would back up in the chain, H⁺ pumping would stop, and ATP synthase would make very little ATP."}, {q:"What directly powers ATP synthase?", a:"H⁺ ions flowing down their gradient from the intermembrane space back into the matrix."}, {q:"What do uncoupling proteins do?", a:"They let H⁺ leak back without going through ATP synthase, so the energy is released as heat instead of ATP."}, {q:"Where does oxidative phosphorylation happen in prokaryotes?", a:"Across the plasma membrane (they have no mitochondria)."}]}
    ],
    "3.2c": [
      {sum:["Without oxygen, cells can make ATP only by glycolysis; fermentation recycles NADH back to NAD⁺ so glycolysis can continue.", "Alcohol fermentation (yeast) makes ethanol and CO₂; lactic acid fermentation (muscle) makes lactate.", "Facultative anaerobes can switch between respiration and fermentation; obligate anaerobes can't use oxygen."]},
      {p:"Without O₂ the ETC stops, NADH piles up, and NAD⁺ runs out, which would stop glycolysis. **Fermentation = glycolysis + steps that regenerate NAD⁺** so glycolysis can keep making 2 ATP. It happens in the **cytoplasm**."},
      {table:{head:["", "Alcohol fermentation", "Lactic acid fermentation"], rows:[
        ["Steps", "pyruvate → acetaldehyde + CO₂; acetaldehyde reduced by NADH → ethanol", "pyruvate reduced by NADH → lactate"],
        ["CO₂ released?", "yes", "no"],
        ["Who", "yeast", "human muscle (low O₂), bacteria/fungi for cheese and yogurt"],
        ["ATP", "2 per glucose (from glycolysis)", "2 per glucose"]
      ]}},
      {p:"Final electron acceptor: an organic molecule in fermentation (pyruvate or acetaldehyde) vs. O₂ in aerobic respiration (more than 30 ATP per glucose)."},
      {p:"**Anaerobic respiration** still uses an ETC, but the final acceptor isn't O₂: sulfate, nitrate, sulfur, or CO₂. **Facultative anaerobes** switch between aerobic respiration and anaerobic pathways depending on O₂. **Obligate anaerobes** can only live without O₂; oxygen is toxic to them."},
      {check:[{q:"Why is fermentation needed if it makes no extra ATP?", a:"It regenerates NAD⁺, which glycolysis needs to keep making its 2 ATP."}, {q:"Which makes more ATP per glucose: aerobic respiration or fermentation?", a:"Aerobic respiration (about 30–32 ATP vs. 2)."}, {q:"What does yeast make in alcohol fermentation?", a:"Ethanol and CO₂ (the CO₂ makes bread rise)."}, {q:"Where does fermentation happen?", a:"In the cytoplasm."}]}
    ],
    "3.3a": [
      {sum:["Photosynthesis: 6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂. Water is oxidized; CO₂ is reduced.", "Pigments absorb some wavelengths and reflect others; leaves look green because chlorophyll reflects green.", "Chlorophyll a is the main pigment; chlorophyll b and carotenoids are accessory pigments that widen the range of light absorbed."]},
      {p:"**Autotrophs** make their own food: **photoautotrophs** use light (plants, algae, cyanobacteria); **chemoautotrophs** use energy from inorganic compounds like H₂S (bacteria and archaea at hydrothermal vents). **Heterotrophs** (animals, fungi, many prokaryotes) eat other organisms."},
      {p:"**6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂**, the reverse of cellular respiration. It's redox: **water is oxidized** (→ O₂) and **CO₂ is reduced** (→ sugar)."},
      {table:{head:["Structure", "What it is"], rows:[
        ["Stomata", "pores; CO₂ in, O₂ out, water lost in transpiration"],
        ["Mesophyll", "interior leaf tissue; cells with 30–40 chloroplasts each"],
        ["Thylakoids", "membrane sacs holding chlorophyll; light reactions here"],
        ["Grana", "stacks of thylakoids"],
        ["Thylakoid lumen", "the space inside a thylakoid"],
        ["Stroma", "fluid outside the thylakoids; Calvin cycle here"]
      ]}},
      {h:"Light and pigments"},
      {p:"Light travels as photons in waves. Pigments absorb some wavelengths and **reflect or transmit** the rest, which is the color you see. Chlorophyll reflects green. **Chlorophyll a** is the main pigment; **chlorophyll b** and **carotenoids** are accessory pigments that broaden the range of light used. Very little 500–600 nm (green–yellow) light is absorbed."},
      {check:[{q:"Where does the O₂ released in photosynthesis come from?", a:"From splitting water."}, {q:"Why are plants green?", a:"Chlorophyll absorbs red and blue light and reflects green."}, {q:"What's the difference between photoautotrophs and chemoautotrophs?", a:"Both make their own food; photoautotrophs use light energy and chemoautotrophs use energy from chemicals."}, {q:"Why do leaves turn yellow and orange in fall?", a:"Chlorophyll breaks down, revealing the carotenoids that were there all along."}]}
    ],
    "3.3b": [
      {sum:["The light reactions happen in the thylakoid membranes and turn light energy into ATP and NADPH.", "Photosystem II splits water (releasing O₂); electrons move down a transport chain to Photosystem I, pumping H⁺ into the thylakoid lumen.", "H⁺ flows through ATP synthase into the stroma (chemiosmosis); NADP⁺ is the final electron acceptor and becomes NADPH."]},
      {p:"The light reactions (thylakoid membrane) move electrons from **water** to **NADP⁺**, making **ATP and NADPH** for the Calvin cycle and releasing O₂."},
      {steps:["**Photosystem II (P680):** light excites electrons from two special chlorophyll a molecules. Water is split (2 H⁺ + ½ O₂ + 2e⁻) and its electrons replace the ones P680 lost.",
        "**Electron transport chain:** electrons lose energy, which pumps H⁺ from the stroma into the **thylakoid lumen** (high H⁺, low pH).",
        "**Photosystem I (P700):** light excites electrons again; they're replaced by the electrons arriving from PSII.",
        "**NADP⁺ reductase:** gives the electrons to NADP⁺ → **NADPH**. NADP⁺ is the **final electron acceptor** (O₂ is the final acceptor in respiration).",
        "**Chemiosmosis:** H⁺ flows from the lumen to the stroma through ATP synthase, making ATP in the **stroma**."]},
      {tip:"Mitochondria pump H⁺ into the intermembrane space; chloroplasts pump H⁺ into the thylakoid lumen. ATP is made on the matrix side and the stroma side."},
      {check:[{q:"What are the products of the light reactions?", a:"ATP, NADPH, and O₂."}, {q:"Where do the H⁺ ions build up during the light reactions?", a:"In the thylakoid lumen (space)."}, {q:"What replaces the electrons Photosystem II loses?", a:"Electrons from splitting water."}, {q:"What's the final electron acceptor in the light reactions?", a:"NADP⁺ (it becomes NADPH)."}]}
    ],
    "3.3c": [
      {sum:["The Calvin cycle (in the stroma) uses ATP and NADPH to turn CO₂ into sugar.", "Rubisco fixes CO₂ onto RuBP; the products are reduced to G3P, and most G3P is recycled to rebuild RuBP.", "It takes 6 turns (6 CO₂) to make the 2 G3P that become one glucose."]},
      {p:"The Calvin cycle (stroma) uses **ATP and NADPH** to build sugar from CO₂. Like the Krebs cycle, it regenerates its starting molecule, **RuBP** (5 carbons)."},
      {table:{head:["Phase (3 turns)", "What happens"], rows:[
        ["1. Carbon fixation", "3 CO₂ + 3 RuBP → 6 3-PGA (catalyzed by **rubisco**)"],
        ["2. Reduction", "ATP and NADPH turn 6 3-PGA → 6 G3P; 1 G3P leaves the cycle"],
        ["3. Regeneration", "5 G3P + ATP → 3 RuBP"]
      ]}},
      {p:"Per G3P exported: 3 CO₂, 3 turns, 9 ATP, 6 NADPH. One glucose needs **2 G3P = 6 CO₂ and 6 turns**. G3P is also used to build fructose, starch, cellulose, fatty acids and glycerol, and amino acids."},
      {ex:{q:"The lights go out. What happens to RuBP and 3-PGA?", a:["No light → no ATP or NADPH.", "3-PGA can't be reduced, so it **builds up**; RuBP can't be regenerated, so it **drops**."]}},
      {check:[{q:"What enzyme fixes CO₂ in the Calvin cycle?", a:"Rubisco."}, {q:"If the light stops, what happens to RuBP and 3-PGA?", a:"RuBP drops (it can't be rebuilt without ATP and NADPH) and 3-PGA builds up."}, {q:"Does the Calvin cycle need light directly?", a:"Not directly, but it needs the ATP and NADPH the light reactions make."}, {q:"How many CO₂ molecules does it take to make one glucose?", a:"6."}]}
    ]
  },

  problems(k){
    const SRC = {"3.1a":"3.1 Thermodynamics", "3.1b":"3.1 Free energy", "3.1c":"3.1 Thermoregulation", "3.2a":"3.2 Glycolysis & Krebs", "3.2b":"3.2 Ox phos",
      "3.2c":"3.2 Fermentation", "3.3a":"3.3 Photosynthesis", "3.3b":"3.3 Light reactions", "3.3c":"3.3 Calvin cycle"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 3.1 Metabolism & thermodynamics ===== */
    const ke = cat("3.1a", ["Kinetic", "Potential"], "Kinetic or potential energy?");
    ke("Light from the sun", "Kinetic", "Light is photons in motion.");
    ke("Glucose", "Potential", "Energy stored in its chemical bonds.");
    ke("ATP", "Potential", "Chemical energy stored in its phosphate bonds.");
    ke("Thermal energy (heat)", "Kinetic", "Random movement of atoms and molecules.");
    ke("Water held behind a dam", "Potential", "Energy from its location.");
    ke("A muscle contracting", "Kinetic", "Movement of matter.");
    const ca = cat("3.1a", ["Catabolic", "Anabolic"], "Catabolic or anabolic?");
    ca("Running a mile (the pathways supplying the energy)", "Catabolic", "Breaking down glucose releases the energy muscles use.");
    ca("Photosynthesis making glucose from CO₂ and H₂O", "Anabolic", "Builds a complex molecule from simple ones and needs energy.");
    ca("Amino acids joined into a polypeptide", "Anabolic", "Building a bigger molecule requires energy.");
    ca("Digesting starch into glucose", "Catabolic", "Breaking a large molecule into smaller ones.");
    num("3.1a", "A metabolic pathway turns substance V into Z through intermediates W, X, and Y. How many different enzymes does it need?", 4,
      "V→W, W→X, X→Y, Y→Z: four reactions, each with its own enzyme.");
    mc("3.1a", "A cheetah sprints after prey. How does this show the second law of thermodynamics?",
      ["Turning chemical energy into motion makes heat and CO₂, raising the universe's entropy", "The cheetah creates new energy in its muscles, so the universe gains usable energy", "Its chemical energy is destroyed as it runs, so the total energy of the universe drops", "Its body becomes more ordered as it runs, which lowers the entropy of the universe"],
      "Every energy transformation loses some energy as heat and produces less-ordered molecules.");
    mc("3.1a", "A bear eats a fish. Which statement best shows the first law of thermodynamics?",
      ["The fish's chemical energy is transformed into the bear's energy, not created or destroyed", "The bear creates new chemical energy as it breaks down the proteins in the fish", "All of the fish's energy is destroyed during digestion and leaves the bear as waste", "The bear ends up with more energy than the fish contained, since digestion adds energy"],
      "Energy is transferred and transformed but never created or destroyed.");
    mc("3.1a", "Organisms build highly ordered structures like proteins. Why doesn't this break the second law?",
      ["They raise their surroundings' entropy by more than they lower their own", "The second law of thermodynamics only applies to nonliving systems", "Building proteins releases more energy than it uses up in the cell", "Organisms create new energy, which cancels out the entropy they make"],
      "Heat and simple waste molecules released by catabolism raise the surroundings' entropy a lot.");
    mc("3.1a", "Which change decreases entropy?", ["A plant converting light energy into stored chemical energy", "An animal turning the chemical energy in food into ATP and heat", "Glucose being broken down into many CO₂ and H₂O molecules", "A sugar cube dissolving and spreading through a cup of tea"],
      "From the warm-up: photosynthesis builds order. The other three increase disorder.");

    /* ===== 3.1 Free energy & ATP coupling ===== */
    const eg = cat("3.1b", ["Exergonic", "Endergonic"], "Exergonic or endergonic?");
    eg("ΔG is positive", "Endergonic", "Free energy must be absorbed.");
    eg("The products have less free energy than the reactants", "Exergonic", "Energy is released, so ΔG < 0.");
    eg("Cellular respiration: glucose + O₂ → CO₂ + H₂O", "Exergonic", "ΔG = −686 kcal/mol.");
    eg("ATP synthesis: ADP + Pᵢ → ATP", "Endergonic", "Making ATP requires energy (from respiration).");
    eg("ATP hydrolysis: ATP → ADP + Pᵢ", "Exergonic", "ΔG = −7.3 kcal/mol.");
    eg("Happens spontaneously", "Exergonic", "Negative ΔG processes are spontaneous (though not necessarily fast).");
    eg("Building a starch molecule from glucose", "Endergonic", "Anabolic reactions need energy.");
    const mg = cat("3.1b", ["A", "B"], "Which has MORE free energy?");
    mg("(A) large, complex molecules or (B) small, simple molecules", "A", "Complex molecules store more energy and are less stable.");
    mg("(A) a concentration gradient or (B) equilibrium", "A", "A gradient can do work; equilibrium can't.");
    mg("(A) water in a pond or (B) water behind a dam", "B", "Water behind a dam can do work as it flows down.");
    mc("3.1b", "How do enzymes speed up reactions?", ["They lower the activation energy", "They make ΔG more negative",
      "They add heat to the reactants", "They raise the energy of the products"],
      "Enzymes lower Eₐ. They never change ΔG.");
    mc("3.1b", "A reaction has ΔG = −20 kcal/mol but doesn't happen at a noticeable rate at room temperature. Best explanation?",
      ["Its activation energy is high, so it's spontaneous but very slow", "A negative ΔG means it needs a big input of energy to get going", "It is really endergonic, so it can never happen without help", "Spontaneous reactions can only take place at high temperatures"],
      "Spontaneous ≠ fast. Without enough energy to reach Eₐ (or an enzyme), it barely moves.");
    mc("3.1b", "Why does ATP release so much energy when its last phosphate is removed?",
      ["Its three negatively charged phosphates repel each other", "The phosphate bonds are the strongest bonds in the cell",
       "Removing a phosphate adds electrons to adenine", "ATP is a large polymer that breaks into many monomers"],
      "The crowded negative charges make ATP unstable (high free energy).");
    mc("3.1b", "ATP hydrolysis has ΔG = −7.3 kcal/mol. Which reaction could it be coupled to drive?",
      ["A + C → AC (ΔG = +4.5 kcal/mol)", "A + B → AB (ΔG = +8.5 kcal/mol)", "CD → C + D (ΔG = −9.0 kcal/mol)", "BD → B + D (ΔG = −4.0 kcal/mol)"],
      "+4.5 − 7.3 = −2.8, so the overall process is spontaneous. +8.5 needs too much; the negative ones don't need ATP.");
    mc("3.1b", "ATP coupling requires an ______ reaction paired with ATP hydrolysis so that the overall ΔG is ______.",
      ["endergonic; negative", "exergonic; positive", "endergonic; positive", "exergonic; zero"],
      "From the warm-up: the coupled process as a whole must be exergonic.");
    mc("3.1b", "How does ATP usually power cellular work?", ["An enzyme transfers a phosphate from ATP to another molecule", "ATP releases heat that nearby molecules absorb and use as fuel", "ATP donates its electrons directly to the electron transport chain", "ATP binds to DNA and switches on the genes that do the work"],
      "Phosphorylating a molecule changes its shape or energy so it can do chemical, transport, or mechanical work.");
    mc("3.1b", "Which statement about living systems and energy is correct?", ["Energy input must exceed energy lost to keep order", "Cells can recycle all their energy with no new input",
      "Once a cell is built, it no longer needs energy", "Losing order makes cells work more efficiently"],
      "Life needs a constant energy input; loss of order or energy flow leads to death.");

    set("3.1b", {svg: energyDiagram(), cite: "Free energy diagram of one reaction, with and without an enzyme"}, [
      ["Which arrow represents ΔG for this reaction?", ["C", "A", "B", "A minus B"], "ΔG is the difference between the reactants and products, which is arrow C."],
      ["Based on the diagram, this reaction is", ["exergonic, because the products have less free energy than the reactants", "endergonic, because the products have more free energy than the reactants",
        "endergonic, because it needs activation energy A to start", "neither, because the enzyme cancels out the energy change"], "Every reaction needs activation energy; the sign of ΔG comes from where products sit relative to reactants."],
      ["Adding the enzyme changes the reaction from", ["arrow A to arrow B, with arrow C unchanged", "arrow C to arrow B, with arrow A unchanged", "arrow B to arrow A, making the reaction slower", "arrow A to arrow C, releasing more energy"],
        "Enzymes lower activation energy (A → B) but never change ΔG (C)."]
    ]);

    /* ===== 3.1 Metabolic rate & thermoregulation ===== */
    const et = cat("3.1c", ["Endotherms", "Ectotherms", "Both", "Neither"], "Endotherms, ectotherms, both, or neither?");
    et("Generally have much higher metabolic rates", "Endotherms", "Making their own heat takes a lot of energy.");
    et("Body temperature changes with the environment's temperature", "Ectotherms", "They rely on outside heat.");
    et("Rely mostly on behavior (basking, burrowing) to regulate body temperature", "Ectotherms", "Lizards bask; they don't make much metabolic heat.");
    et("When the environment gets colder, metabolic rate increases", "Endotherms", "They burn more fuel to make heat.");
    et("When the environment gets warmer, metabolic rate increases", "Ectotherms", "Their reactions speed up as they warm.");
    et("Able to regulate their body temperature", "Both", "Endotherms with metabolism, ectotherms with behavior.");
    et("Metabolic rate increases as activity level increases", "Both", "Activity needs more ATP in every animal.");
    et("Smaller organisms have LOWER per-gram metabolic rates", "Neither", "It's the reverse: smaller animals have higher per-gram rates (more surface area per gram).");
    mc("3.1c", "Why do some hummingbirds enter torpor at night?", ["To lower metabolic rate and body temperature and save energy", "To raise their body temperature so food digests more quickly", "To store extra ATP in their muscles for the next day's flight", "To switch from aerobic respiration to fermentation for the night"],
      "Torpor saves energy when it's cold or food is unavailable.");
    mc("3.1c", "A shrew and a moose are both endotherms. Which statement is most likely true?", ["The shrew has a higher metabolic rate per gram", "The moose has a higher metabolic rate per gram",
      "Both have the same metabolic rate per gram", "Neither uses metabolism to make heat"],
      "Smaller animals lose heat faster relative to their mass, so they burn more per gram.");
    set("3.1c", {svg: metabolicGraph(), cite: "Metabolic rate of two animals at different environmental temperatures"}, [
      ["Which animal is most likely an endotherm?", ["Animal X, because its metabolic rate rises as it gets colder", "Animal Y, because its metabolic rate rises as it gets warmer",
        "Animal X, because its metabolic rate is always lower than Y's", "Animal Y, because it has the higher rate at 40 °C"], "Endotherms burn more fuel to stay warm when the environment is cold."],
      ["Animal Y's body temperature most likely", ["rises and falls with the environment's temperature", "stays constant at every temperature on the graph", "is highest when the environment is at its coldest", "is controlled mainly by its uncoupling proteins"], "An ectotherm's metabolism tracks outside temperature."],
      ["At 5 °C, which animal would need to eat more food per day for its size?", ["Animal X, since its metabolic rate is much higher", "Animal Y, since it must warm itself by basking",
        "Both equally, since they're at the same temperature", "Neither, since neither animal is active at 5 °C"], "Higher metabolic rate means more fuel needed."]
    ]);

    /* ===== 3.2 Redox, glycolysis & Krebs ===== */
    const ox = cat("3.2a", ["Oxidation", "Reduction"], "Oxidation or reduction?");
    ox("C₆H₁₂O₆ → CO₂", "Oxidation", "Glucose loses electrons (and H); the proportion of O goes up.");
    ox("NAD⁺ → NADH", "Reduction", "NAD⁺ gains electrons.");
    ox("O₂ → H₂O", "Reduction", "Oxygen gains electrons (and H).");
    ox("FAD → FADH₂", "Reduction", "FAD gains electrons and hydrogens.");
    ox("A molecule loses hydrogen atoms", "Oxidation", "Electrons usually leave with the hydrogens.");
    num("3.2a", "Glycolysis starts with one 6-carbon glucose. How many 3-carbon pyruvate molecules does it end with?", 2, "Glucose splits into two 3-carbon molecules.");
    num("3.2a", "How many CO₂ molecules are released during glycolysis?", 0, "None. The carbon is still in the two pyruvates.");
    num("3.2a", "How many CO₂ are released when both pyruvates from one glucose are oxidized to acetyl CoA?", 2, "One CO₂ per pyruvate (3C → 2C).");
    num("3.2a", "How many CO₂ are released by the Krebs cycle per glucose (both turns)?", 4, "Two per turn, and the cycle runs twice.");
    num("3.2a", "How many total CO₂ are produced from one glucose in cellular respiration?", 6, "0 + 2 + 4 = 6, matching the 6 carbons in glucose.");
    num("3.2a", "What is the NET ATP made by glycolysis per glucose?", 2, "4 made by substrate-level phosphorylation − 2 invested = 2.");
    num("3.2a", "How many NADH are made in the two turns of the Krebs cycle for one glucose?", 6, "3 per turn × 2 turns.");
    num("3.2a", "How many FADH₂ are made per glucose?", 2, "Only the Krebs cycle makes FADH₂: 1 per turn × 2.");
    mc("3.2a", "Where do pyruvate oxidation and the Krebs cycle take place?", ["The mitochondrial matrix", "The cytoplasm", "The inner mitochondrial membrane", "The intermembrane space"],
      "Pyruvate is transported into the matrix if O₂ is present.");
    mc("3.2a", "What is substrate-level phosphorylation?", ["An enzyme moves a phosphate from a substrate directly to ADP", "ATP synthase uses the energy of an H⁺ gradient to make ATP", "NADH hands a phosphate group to oxygen at the end of the ETC", "Light energy attaches a phosphate to ADP in the thylakoids"],
      "This is how glycolysis and the Krebs cycle make their small amount of ATP.");
    mc("3.2a", "In cellular respiration, how do you know glucose is oxidized?", ["It loses electrons and hydrogens as it becomes CO₂", "It gains oxygen atoms as it is turned into water", "It gains electrons from NAD⁺ during glycolysis", "It is phosphorylated by ATP before it splits"],
      "C₆H₁₂O₆ → CO₂: hydrogen proportion drops, oxygen proportion rises.");
    mc("3.2a", "Why are NAD⁺ and FAD called oxidizing agents?", ["They take electrons from glucose, oxidizing it", "They give electrons to glucose, reducing it",
      "They carry oxygen to the mitochondria", "They break down oxygen into water"],
      "Whatever accepts electrons oxidizes the molecule it takes them from.");
    mc("3.2a", "What happens in the energy investment phase of glycolysis?", ["2 ATP phosphorylate glucose, which then splits into two G3P", "Glucose is oxidized to pyruvate, making 4 ATP and 2 NADH", "Pyruvate is converted into acetyl CoA, releasing CO₂", "NADH drops its electrons off at the electron transport chain"],
      "The cell spends 2 ATP first, then earns 4 back in the harvest phase.");
    set("3.2a", {stim: "A student adds a drug to cells that blocks the enzyme that joins acetyl CoA to oxaloacetate. The cells still have plenty of glucose and oxygen.", cite: "Experiment scenario"}, [
      ["Which molecule would most likely build up in the cells?", ["Acetyl CoA", "Citrate", "FADH₂", "Carbon dioxide"], "The step after acetyl CoA is blocked, so acetyl CoA accumulates."],
      ["How would the cells' production of NADH change?", ["Krebs NADH drops; glycolysis and pyruvate oxidation still make some", "NADH production stops completely in every stage of respiration", "NADH production rises, because glycolysis speeds up to make up for it", "Only glycolysis stops making NADH; the Krebs cycle keeps going"], "Glycolysis and pyruvate oxidation come before the blocked step."],
      ["Over time, the cells would most likely make", ["far less ATP, because the ETC gets fewer electrons", "more ATP, because acetyl CoA stores energy",
        "the same ATP, because glycolysis makes most of it", "more CO₂, because the Krebs cycle runs faster"], "Most ATP comes from the ETC, which depends on NADH and FADH₂ from the Krebs cycle."]
    ]);

    /* ===== 3.2 Oxidative phosphorylation ===== */
    const loc = cat("3.2b", ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Intermembrane space"], "Where?");
    loc("Glycolysis", "Cytoplasm", "It doesn't need mitochondria or O₂.");
    loc("The Krebs cycle", "Mitochondrial matrix", "Along with pyruvate oxidation.");
    loc("The electron transport chain", "Inner mitochondrial membrane", "Its protein complexes are embedded there.");
    loc("The highest concentration of H⁺ (lowest pH)", "Intermembrane space", "Protons are pumped there from the matrix.");
    loc("Where ATP synthase releases ATP", "Mitochondrial matrix", "H⁺ flows back into the matrix through ATP synthase.");
    mc("3.2b", "What is the final electron acceptor in aerobic cellular respiration?", ["Oxygen", "NAD⁺", "Pyruvate", "Carbon dioxide"],
      "½ O₂ accepts an electron pair and H⁺ to form water.");
    mc("3.2b", "What provides the energy to pump H⁺ against its concentration gradient?", ["Electrons losing free energy as they move down the ETC", "ATP hydrolysis by ATP synthase in the inner membrane", "Heat released by the reactions of the Krebs cycle", "Light energy absorbed by the ETC's protein complexes"],
      "The drop in electron energy powers the active transport of H⁺.");
    mc("3.2b", "What is chemiosmosis?", ["Using the energy of an H⁺ gradient to make ATP", "Pumping electrons across a membrane", "Splitting water to release oxygen", "Diffusion of glucose into the mitochondria"],
      "H⁺ diffuses through ATP synthase, which phosphorylates ADP.");
    num("3.2b", "In your class's model, how many ATP does one NADH produce through oxidative phosphorylation?", 3, "NADH pumps 3 H⁺, and each H⁺ → 1 ATP.");
    num("3.2b", "In your class's model, how many ATP does one FADH₂ produce?", 2, "FADH₂ drops its electrons later (complex III), pumping 2 H⁺.");
    num("3.2b", "How many O₂ molecules are used to accept the 12 electron pairs from one glucose?", 6, "Each ½ O₂ takes one pair: 12 pairs → 12 O atoms = 6 O₂.");
    num("3.2b", "Using the class counts (NADH = 3 ATP, FADH₂ = 2 ATP), how many ATP does oxidative phosphorylation make from one glucose's 10 NADH and 2 FADH₂?", 34, "10 × 3 + 2 × 2 = 34.");
    num("3.2b", "Add the 4 ATP from substrate-level phosphorylation. Using the class counts, how many total ATP come from one glucose?", 38, "34 + 4 = 38 (the notes say \"more than 30\").");
    mc("3.2b", "Uncoupling proteins let H⁺ leak back into the matrix without passing through ATP synthase. What happens?", ["Less ATP is made and more energy is released as heat", "More ATP is made because H⁺ moves faster",
      "The ETC stops because oxygen can't accept electrons", "Glycolysis stops because NAD⁺ runs out"],
      "The gradient's energy becomes heat. Endotherms use this (brown fat) to stay warm.");
    mc("3.2b", "Where is the electron transport chain in an aerobic prokaryote?", ["In the cell (plasma) membrane", "In the inner mitochondrial membrane", "In the cytoplasm, free-floating", "In the nucleoid region"],
      "Prokaryotes have no mitochondria, so the chain sits in the plasma membrane.");
    mc("3.2b", "Would the inside or outside of an aerobic prokaryote be more acidic?", ["Outside, because H⁺ is pumped out across the plasma membrane", "Inside, because the ETC pumps H⁺ into the cytoplasm of the cell", "Inside, because glycolysis releases acid into the cytoplasm", "Neither, because prokaryotes never build up H⁺ gradients"],
      "More H⁺ = lower pH. Their ETC pumps protons out of the cell.");
    mc("3.2b", "A cheetah stops sprinting and its muscle cells have plenty of ATP. How does feedback inhibition respond?", ["ATP inhibits an enzyme early in glycolysis, slowing respiration", "Extra ATP speeds up glycolysis so the cell can store energy", "ADP builds up and physically blocks the electron transport chain", "Oxygen stops entering the muscle cells until ATP runs low again"],
      "The end product (ATP) slows its own pathway down.");
    mc("3.2b", "Why is glycolysis seen as evidence for evolution?", ["All three domains use it, and it needs no O₂ or mitochondria", "It makes more ATP per glucose than any other pathway", "It is found only in eukaryotes that have mitochondria", "It needs oxygen, which was plentiful on the early Earth"],
      "A shared pathway in every domain points to a common ancestor before O₂ was abundant.");
    mc("3.2b", "Per gram, which fuel yields the most ATP?", ["Fat", "Carbohydrate", "Protein", "Nucleic acid"], "A gram of fat yields more than twice the ATP of a gram of carbohydrate.");
    set("3.2b", {stim: "Mitochondria were placed in a solution with glucose breakdown products and oxygen. At 10 minutes, the chemical DNP was added; DNP makes the inner membrane leaky to H⁺. Oxygen use rose by 60%, ATP production fell by 80%, and the temperature of the solution rose.", cite: "Experiment summary (DNP is a real uncoupler)"}, [
      ["Why did ATP production fall after DNP was added?", ["H⁺ leaked across the membrane instead of flowing through ATP synthase", "DNP blocked oxygen from accepting electrons at the end of the chain", "DNP destroyed the NADH and FADH₂ that the Krebs cycle had made", "The ETC switched to pumping protons into the matrix instead of out"], "The gradient was lost, so ATP synthase had little to work with."],
      ["Why did oxygen use go UP?", ["The ETC kept running (even faster) to try to rebuild the H⁺ gradient", "DNP acted as a second final electron acceptor alongside oxygen", "Oxygen was converted directly into ATP once the gradient was gone", "Glycolysis began using oxygen once the mitochondria were damaged"], "Electrons still flowed to O₂; with no backed-up gradient, the chain ran faster."],
      ["The rise in temperature is best explained by", ["energy from the H⁺ gradient being released as heat", "ATP hydrolysis speeding up throughout the solution", "oxygen reacting chemically with the DNP molecules", "glucose being rebuilt from CO₂ inside the matrix"], "This is the same effect uncoupling proteins create in brown fat."]
    ]);

    /* ===== 3.2 Fermentation & anaerobes ===== */
    mc("3.2c", "Where in the cell does fermentation take place?", ["The cytoplasm", "The mitochondrial matrix", "The inner mitochondrial membrane", "The chloroplast stroma"],
      "Fermentation is glycolysis plus a step or two, all in the cytoplasm.");
    mc("3.2c", "Why must glycolysis be paired with fermentation when there's no oxygen?", ["Fermentation regenerates NAD⁺ so glycolysis can keep going", "Fermentation produces most of the ATP the cell needs to live", "Fermentation turns pyruvate back into glucose for reuse", "Fermentation delivers oxygen to the electron transport chain"],
      "Without O₂, NADH can't drop electrons at the ETC; NAD⁺ would run out and glycolysis would stop.");
    mc("3.2c", "In alcohol fermentation, which molecule is reduced by NADH?", ["Acetaldehyde", "Pyruvate", "Ethanol", "Glucose"],
      "Pyruvate first loses CO₂ to become acetaldehyde, which NADH reduces to ethanol.");
    mc("3.2c", "In lactic acid fermentation, which molecule is reduced by NADH?", ["Pyruvate", "Acetaldehyde", "Lactate", "Oxygen"], "Pyruvate is reduced directly to lactate; no CO₂ is released.");
    mc("3.2c", "During intense exercise, muscle cells can't get oxygen fast enough. What happens?", ["They use lactic acid fermentation, making lactate and only 2 ATP each", "They switch to alcohol fermentation and release CO₂ and ethanol", "They stop making ATP entirely until enough oxygen returns", "They use anaerobic respiration, with sulfate as the final acceptor"],
      "Human muscle cells use lactic acid fermentation when O₂ is scarce.");
    num("3.2c", "How many ATP does fermentation make per glucose?", 2, "Only the net 2 ATP from glycolysis.");
    const fa = cat("3.2c", ["Fermentation", "Anaerobic respiration", "Both", "Neither"], "Fermentation, anaerobic respiration, both, or neither?");
    fa("Uses an electron transport chain", "Anaerobic respiration", "It's like aerobic respiration but with a different final acceptor.");
    fa("Can make ATP without oxygen", "Both", "Neither one uses O₂.");
    fa("Uses an organic molecule (like pyruvate) as the final electron acceptor", "Fermentation", "Anaerobic respiration uses inorganic acceptors like sulfate or nitrate.");
    fa("Uses oxygen as the final electron acceptor", "Neither", "That's aerobic respiration.");
    fa("Begins with glycolysis", "Both", "Every pathway that breaks down glucose starts with glycolysis.");
    mc("3.2c", "Where would you most expect to find obligate anaerobes?", ["Deep, oxygen-free mud or the inside of an animal's gut", "On the surface of a leaf sitting in bright sunlight", "In the open ocean, near the well-mixed surface water", "On human skin that is exposed to the air all day"],
      "Oxygen is toxic to them, so they live only where O₂ is absent.");
    mc("3.2c", "What advantage do facultative anaerobes have?", ["They make more ATP with O₂ but can still survive without it", "They make the same amount of ATP with or without oxygen", "They can survive only in places where there is no oxygen", "They never need to regenerate NAD⁺ to keep glycolysis going"],
      "Switching pathways lets them use O₂ when it's there and keep living when it isn't.");
    set("3.2c", {stim: "Yeast was mixed with glucose solution in sealed flasks with no air space. CO₂ produced in 30 minutes: 10 °C: 2 mL; 25 °C: 9 mL; 35 °C: 15 mL; 55 °C: 1 mL.", cite: "Student lab data"}, [
      ["Which process produced the CO₂ in the sealed flasks?", ["Alcohol fermentation", "Lactic acid fermentation", "Photosynthesis", "The Calvin cycle"], "With no O₂, yeast ferment glucose to ethanol and CO₂."],
      ["The best explanation for the low CO₂ at 55 °C is that", ["high heat denatured the yeast's enzymes", "the yeast switched to aerobic respiration",
        "glucose stops dissolving at high temperatures", "fermentation only works below room temperature"], "Enzymes lose their shape at high temperatures, so reaction rates drop."],
      ["What is the independent variable in this experiment?", ["Temperature", "Volume of CO₂ produced", "Amount of glucose", "Type of yeast"], "The variable the student changed on purpose."]
    ]);

    /* ===== 3.3 Photosynthesis & pigments ===== */
    const at = cat("3.3a", ["Autotrophs", "Heterotrophs", "Both"], "Autotrophs, heterotrophs, or both?");
    at("Producers at the base of food chains", "Autotrophs", "They make organic molecules from CO₂.");
    at("Includes decomposers like fungi", "Heterotrophs", "Decomposers get carbon from dead organisms.");
    at("Perform cellular respiration", "Both", "Plants respire too; photosynthesis doesn't replace respiration.");
    at("Chemosynthetic bacteria at hydrothermal vents", "Autotrophs", "They're chemoautotrophs, using energy from inorganic compounds like H₂S.");
    at("Cyanobacteria", "Autotrophs", "Prokaryotic photoautotrophs.");
    mc("3.3a", "During photosynthesis, which substance is oxidized, and what does it become?", ["Water, which becomes O₂", "Carbon dioxide, which becomes glucose",
      "Glucose, which becomes CO₂", "Oxygen, which becomes water"],
      "Water loses electrons in photosystem II, releasing O₂.");
    mc("3.3a", "During photosynthesis, which substance is reduced, and what does it become?", ["Carbon dioxide, which becomes sugar", "Water, which becomes oxygen gas", "NADPH, which turns back into NADP⁺", "Oxygen, which becomes more water"],
      "CO₂ gains electrons (via NADPH) in the Calvin cycle.");
    mc("3.3a", "How are photosynthesis and cellular respiration related?", ["The products of one are the reactants of the other", "Both build glucose from carbon dioxide and water", "Both happen only in the cells of green plants", "Both release oxygen into the air as a waste product"],
      "6 CO₂ + 6 H₂O ⇄ C₆H₁₂O₆ + 6 O₂.");
    const lp = cat("3.3a", ["Stomata", "Mesophyll", "Thylakoid membrane", "Stroma"], "Which part of the leaf or chloroplast?");
    lp("Where CO₂ enters the leaf and O₂ exits", "Stomata", "Microscopic pores, also where water evaporates (transpiration).");
    lp("Leaf tissue whose cells hold 30–40 chloroplasts each", "Mesophyll", "The interior tissue of the leaf.");
    lp("Where chlorophyll is located", "Thylakoid membrane", "Pigments are embedded in the thylakoid membranes.");
    lp("The fluid outside the thylakoids", "Stroma", "Where the Calvin cycle runs.");
    mc("3.3a", "What does the thylakoid lumen refer to?", ["The space inside a thylakoid", "A stack of thylakoids", "The fluid outside the thylakoids", "The pore that lets CO₂ into the leaf"],
      "Grana are stacks; the stroma is outside; the lumen is inside.");
    mc("3.3a", "A pigment absorbs green and yellow light but reflects blue and red. What color does it look?", ["Purple (blue + red)", "Green (what it absorbs)", "Yellow (what it absorbs)", "Black (no color at all)"],
      "You see the reflected colors.");
    mc("3.3a", "In fall, chlorophyll breaks down and other pigments absorb most colors except red and yellow. What color are the leaves?", ["Orange", "Green", "Blue", "Violet"],
      "Red + yellow reflected light looks orange (from the warm-up).");
    mc("3.3a", "Why do plants have accessory pigments like chlorophyll b and carotenoids?", ["They broaden the range of wavelengths used for photosynthesis", "They replace chlorophyll a as the main photosynthetic pigment", "They reflect all incoming light to protect the leaf from damage", "They are what make leaves look green in spring and summer"],
      "Each pigment absorbs a slightly different range.");
    set("3.3a", {svg: spectrum(), cite: "Absorption spectra of three chloroplast pigments (approximate)"}, [
      ["Which wavelengths are absorbed LEAST by all three pigments?", ["About 520–600 nm (green to yellow)", "About 400–450 nm (violet to blue)", "About 640–680 nm (red)", "About 450–500 nm (blue)"],
        "All three curves are near zero in the green–yellow range, which is why leaves look green."],
      ["Which pigment absorbs the most light at about 680 nm?", ["Chlorophyll a", "Chlorophyll b", "Carotenoids", "All three equally"], "Chlorophyll a's red peak extends furthest toward 680 nm; carotenoids absorb nothing there."],
      ["A mutant plant makes no carotenoids. It would lose the most absorption", ["between about 450 and 500 nm", "between about 600 and 700 nm", "between about 520 and 600 nm", "only at exactly 662 nm"],
        "Carotenoids absorb blue to blue-green light, filling the dip in chlorophyll a's curve."]
    ]);

    /* ===== 3.3 Light reactions ===== */
    mc("3.3b", "What is the final electron acceptor of the light reactions?", ["NADP⁺", "Oxygen", "Water", "Carbon dioxide"], "NADP⁺ reductase gives the electrons to NADP⁺, making NADPH.");
    mc("3.3b", "Where do the electrons that replace those lost by photosystem II come from?", ["Splitting water", "Photosystem I", "NADPH", "Carbon dioxide"],
      "Water is split into ½ O₂, 2 H⁺, and 2 electrons.");
    mc("3.3b", "How are the electrons lost by photosystem I replaced?", ["By electrons arriving from photosystem II through the ETC", "By electrons from splitting a second water molecule at PSI", "By electrons returned from NADPH after the Calvin cycle", "By electrons released by ATP synthase as protons flow"], "The chain links PSII to PSI.");
    mc("3.3b", "What does the energy from electrons moving through the ETC (between PSII and PSI) do?", ["Pumps H⁺ from the stroma into the thylakoid lumen", "Splits water into oxygen and hydrogen",
      "Reduces CO₂ into sugar", "Pumps H⁺ out of the thylakoid into the stroma"], "This builds the gradient that powers ATP synthase.");
    mc("3.3b", "Where in the chloroplast is the pH lowest?", ["The thylakoid lumen", "The stroma", "The outer membrane", "The space between the two outer membranes"],
      "H⁺ is pumped into the lumen, so it has the most H⁺ (lowest pH).");
    mc("3.3b", "ATP synthase in the chloroplast is located ______ and makes ATP in the ______.", ["in the thylakoid membrane; stroma", "in the stroma; thylakoid lumen",
      "in the outer membrane; cytoplasm", "in the thylakoid lumen; stroma"], "From the warm-up: H⁺ flows from the lumen to the stroma through it.");
    mc("3.3b", "What are P680 and P700?", ["Special chlorophyll a molecules named for the light they absorb best", "Two enzymes of the Calvin cycle named for their molecular weights", "Accessory pigments that absorb mostly green and yellow light", "Proteins that pump H⁺ across the inner mitochondrial membrane"], "680 and 700 are wavelengths in nanometers.");
    mc("3.3b", "What is the role of light in a photosystem?", ["Its energy boosts electrons in chlorophyll a to a higher energy level", "Its energy splits CO₂ into carbon and oxygen atoms inside the leaf", "It attaches phosphate groups directly to ADP in the thylakoid", "It heats the leaf so the enzymes of the Calvin cycle work faster"], "Pigments pass the energy to the reaction-center chlorophyll, exciting an electron.");
    const lr = cat("3.3b", ["Mitochondria", "Chloroplasts", "Both"], "Mitochondria, chloroplasts, or both?");
    lr("Use an electron transport chain to pump H⁺", "Both", "Both build an H⁺ gradient for chemiosmosis.");
    lr("H⁺ is pumped into the thylakoid lumen", "Chloroplasts", "In mitochondria, H⁺ goes into the intermembrane space.");
    lr("Oxygen is the final electron acceptor", "Mitochondria", "In chloroplasts it's NADP⁺.");
    lr("Make ATP with ATP synthase", "Both", "Chemiosmosis in both.");
    lr("Electrons come from water", "Chloroplasts", "In mitochondria, they come from glucose via NADH and FADH₂.");
    set("3.3b", {stim: "Leaf disks were placed in a solution with dissolved CO₂, and the air was pulled out of them so they sank. The time for half the disks to float (as O₂ built up) was: lamp at 10 cm: 6 min; 20 cm: 11 min; 40 cm: 24 min; no light: none floated in 40 min.", cite: "Floating leaf disk lab data"}, [
      ["What gas made the disks float?", ["Oxygen made when water was split", "Carbon dioxide released by the Calvin cycle", "Water vapor from transpiration", "Nitrogen absorbed from the air"], "O₂ is a product of the light reactions."],
      ["The results best support the claim that", ["the rate of photosynthesis increases with light intensity", "photosynthesis is fastest with the lamp farthest away",
        "light distance has no effect on photosynthesis", "leaf disks float faster in the dark"], "Closer lamp = more light = faster O₂ production."],
      ["Why did no disks float in the dark?", ["Without light, the light reactions can't split water to make O₂", "The Calvin cycle needs light to pull CO₂ into the leaf directly", "Cellular respiration in the disks stops completely in the dark", "The disks absorbed all the CO₂ and became too heavy to rise"], "No light energy → no excited electrons → no water splitting."]
    ]);

    /* ===== 3.3 Calvin cycle ===== */
    num("3.3c", "How many CO₂ molecules are used in three turns of the Calvin cycle?", 3, "One CO₂ is fixed per turn.");
    num("3.3c", "How many G3P molecules leave the cycle after three turns?", 1, "6 G3P are made; 5 are recycled into RuBP.");
    num("3.3c", "How many G3P molecules are needed to make one glucose?", 2, "Two 3-carbon G3P make one 6-carbon glucose.");
    num("3.3c", "How many turns of the Calvin cycle are needed to make one glucose?", 6, "One G3P per 3 turns, two G3P per glucose.");
    num("3.3c", "How many carbons are in RuBP?", 5, "Ribulose bisphosphate is a 5-carbon sugar.");
    const ph = cat("3.3c", ["Carbon fixation", "Reduction", "Regeneration of RuBP"], "Which phase?");
    ph("Rubisco attaches CO₂ to RuBP", "Carbon fixation", "This makes unstable 6-carbon molecules that split into 3-PGA.");
    ph("NADPH and ATP turn 3-PGA into G3P", "Reduction", "NADPH supplies the electrons.");
    ph("Five G3P are rearranged into three RuBP using ATP", "Regeneration of RuBP", "So the cycle can continue.");
    mc("3.3c", "Where does the Calvin cycle take place?", ["The stroma", "The thylakoid lumen", "The thylakoid membrane", "The mitochondrial matrix"], "It uses ATP and NADPH released into the stroma.");
    mc("3.3c", "What does the enzyme rubisco do?", ["Fixes CO₂ by attaching it to RuBP", "Splits water in photosystem II", "Makes ATP using an H⁺ gradient", "Reduces NADP⁺ to NADPH"],
      "It catalyzes the carbon fixation step.");
    mc("3.3c", "If a plant is moved into darkness, which Calvin cycle molecule increases and which decreases?", ["3-PGA increases; RuBP decreases", "RuBP increases; 3-PGA decreases",
      "Both increase", "Both decrease"], "Without ATP and NADPH, 3-PGA can't be reduced (piles up) and RuBP can't be regenerated (runs out).");
    mc("3.3c", "A scientist stimulates the Calvin cycle enzymes, but glucose production doesn't increase. Best explanation?", ["The light reactions limit the supply of ATP and NADPH", "Calvin cycle enzymes can't be stimulated",
      "The plant switched to cellular respiration", "Glucose is made in the light reactions, not the Calvin cycle"],
      "Faster enzymes don't help if the cycle is waiting on ATP, NADPH, or CO₂.");
    mc("3.3c", "A plant is given CO₂ with radioactive ¹⁴C. Later, its lipids and proteins are radioactive. Why?", ["G3P from the Calvin cycle is used to build many organic molecules", "Radioactive carbon damages lipids and proteins wherever it goes", "Lipids and proteins absorb CO₂ directly from the air in the leaf", "The light reactions build proteins directly from carbon dioxide"],
      "G3P is used to make fatty acids, glycerol, amino acids, and more.");
    mc("3.3c", "The Calvin cycle is most similar to the Krebs cycle in that both", ["regenerate their starting molecule each turn", "release carbon dioxide as one of their products", "take place in the thylakoid membrane", "produce NADH for the electron transport chain"], "RuBP is regenerated like oxaloacetate.");
    set("3.3c", {stim: "Algae were grown in light with plenty of CO₂. At 5 minutes, the CO₂ supply was cut off, but the light stayed on. Researchers measured RuBP and 3-PGA every minute.", cite: "Experiment scenario"}, [
      ["What most likely happened to RuBP after the CO₂ was cut off?", ["It increased, because it was still regenerated but not used", "It decreased, because no light was available",
        "It stayed the same, because CO₂ isn't involved with RuBP", "It turned directly into glucose"], "Fixation uses RuBP; without CO₂, RuBP keeps being made but isn't consumed."],
      ["What most likely happened to 3-PGA?", ["It decreased, because no new 3-PGA was being made", "It increased, because light kept making ATP",
        "It stayed the same, because rubisco stopped", "It became RuBP directly"], "No CO₂ → no carbon fixation → no new 3-PGA, while reduction keeps using it up."],
      ["How would the supply of ATP and NADPH in the stroma change at first?", ["Increase, since the light reactions continue but the Calvin cycle slows", "Decrease, since the light reactions need CO₂ to split water molecules", "Stay the same, since they aren't connected to the Calvin cycle at all", "Drop to zero right away, since the chloroplast shuts down without CO₂"], "The light reactions don't need CO₂, so their products pile up for a while."]
    ]);
  },

  drills: {
    /* ATP coupling: which reaction can ATP drive? */
    "3.1b": k => {
      const r1 = (rint(15, 70) / 10), hi = (rint(76, 130) / 10), ex1 = -(rint(20, 110) / 10), ex2 = -(rint(20, 110) / 10);
      const L = ["A + B → AB", "C + D → CD", "EF → E + F", "GH → G + H"];
      const vals = [[r1, true], [hi, false], [ex1, false], [ex2, false]].sort(() => Math.random() - 0.5);
      const opts = vals.map(([v], i) => `Rxn ${i + 1}: ${L[i]} (ΔG = ${v > 0 ? "+" : "−"}${Math.abs(v).toFixed(1)})`);
      const ai = vals.findIndex(v => v[1]);
      return {kind:"choice", text:"ATP hydrolysis has ΔG = −7.3 kcal/mol. Which reaction could it be coupled to drive? (ΔG in kcal/mol)",
        fields:[k.F.choice("Answer", opts, opts[ai])],
        steps:[`It must be endergonic (positive ΔG) and need less than 7.3: ${r1.toFixed(1)} − 7.3 = ${(r1 - 7.3).toFixed(1)}, so the coupled ΔG is negative.`,
          `+${hi.toFixed(1)} is too much (+${(hi - 7.3).toFixed(1)} overall), and the negative reactions are already spontaneous.`]};
    },
    /* counting molecules for N glucose */
    "3.2a": k => {
      const n = rint(2, 6);
      const Q = [
        [`How many CO₂ are released when ${n} glucose are completely oxidized?`, 6 * n, `6 per glucose × ${n}.`],
        [`How many NADH are made in pyruvate oxidation from ${n} glucose?`, 2 * n, `2 per glucose × ${n}.`],
        [`How many NADH are made in the Krebs cycle from ${n} glucose?`, 6 * n, `6 per glucose (3 per turn × 2 turns) × ${n}.`],
        [`How many FADH₂ are made from ${n} glucose?`, 2 * n, `2 per glucose × ${n}.`],
        [`How many pyruvate does glycolysis make from ${n} glucose?`, 2 * n, `2 per glucose × ${n}.`],
        [`How many O₂ are used to fully oxidize ${n} glucose?`, 6 * n, `6 O₂ per glucose × ${n}.`],
        [`What is the net ATP from glycolysis for ${n} glucose?`, 2 * n, `2 net per glucose × ${n}.`],
        [`How many total NADH (all stages) come from ${n} glucose?`, 10 * n, `2 + 2 + 6 = 10 per glucose × ${n}.`]
      ];
      const [t, a, w] = pick(Q);
      return {kind:"num", text:t, fields:[k.F.num("Answer", a)], steps:[w]};
    },
    /* ATP from carriers (class counts) */
    "3.2b": k => {
      const x = rint(1, 12), y = rint(0, 6);
      return {kind:"num", text:`Using the class counts (NADH → 3 ATP, FADH₂ → 2 ATP), how many ATP does oxidative phosphorylation make from ${x} NADH and ${y} FADH₂?`,
        fields:[k.F.num("ATP", 3 * x + 2 * y)], steps:[`${x} × 3 + ${y} × 2 = ${3 * x + 2 * y}`]};
    },
    /* Calvin cycle counts */
    "3.3c": k => {
      const g = rint(1, 5), what = pick(["CO₂", "turns", "ATP", "NADPH"]);
      const per = {"CO₂": 3, turns: 3, ATP: 9, NADPH: 6}[what];
      const glucose = Math.random() < 0.4;
      const units = glucose ? 2 * g : g;
      return {kind:"num", text:`How many ${what === "turns" ? "turns of the Calvin cycle" : what + " molecules"} are needed to make ${g} ${glucose ? "glucose" : "G3P"} (exported)?`,
        fields:[k.F.num("Answer", per * units)], steps:[glucose ? `${g} glucose = ${units} G3P.` : null, `Each exported G3P takes ${per} ${what}. ${units} × ${per} = ${per * units}.`].filter(Boolean)};
    }
  }
});
})();
