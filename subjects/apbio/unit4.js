/* AP Biology · Unit 4: Cell Communication & Cell Cycle
   Source: Ms. Ravuri's interactive notes 4.1 (Cell Communication & Homeostasis) and 4.2 (The Cell Cycle) with their keys.
   Class wording kept: neurotransmitters, morphogens and quorum sensing are paracrine signaling;
   p53 acts at the G1 and G2 checkpoints; mitotic cyclins act at G2. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

/* relative DNA per cell through one cell cycle, with five numbered stretches */
function dnaGraph(){
  const pts = [[70, 190], [190, 190], [290, 90], [430, 90], [432, 190], [545, 190]];
  const d = pts.map(([x, y], i) => (i ? "L" : "M") + x + " " + y).join(" ");
  const lab = [[130, 178, "1"], [228, 130, "2"], [360, 78, "3"], [446, 140, "4"], [490, 178, "5"]];
  return `<svg viewBox="0 0 600 270" role="img" aria-label="Graph of the relative amount of DNA per cell over time. Stretch 1 is flat at a low level. Stretch 2 rises steadily to double the starting level. Stretch 3 is flat at the doubled level. Stretch 4 drops straight back down to the starting level. Stretch 5 is flat at the starting level.">
    <line class="axis" x1="70" y1="25" x2="70" y2="232" stroke-width="2"/><line class="axis" x1="70" y1="232" x2="555" y2="232" stroke-width="2"/>
    <text x="60" y="194" font-size="12" text-anchor="end">1×</text><text x="60" y="94" font-size="12" text-anchor="end">2×</text>
    <text x="20" y="130" font-size="13" transform="rotate(-90 20 130)" text-anchor="middle">DNA per cell</text>
    <text x="312" y="258" font-size="13" text-anchor="middle">Time</text>
    <path class="ln" d="${d}"/>
    ${lab.map(([x, y, t]) => `<text x="${x}" y="${y}" font-size="16" font-weight="700" text-anchor="middle">${t}</text>`).join("")}
  </svg>`;
}

Study.addUnit("apbio", {
  id: "u4",
  name: "Unit 4: Cell Communication & Cell Cycle",
  short: "Unit 4",
  sections: [
    {id:"4.1a", name:"4.1 Signal Reception"},
    {id:"4.1b", name:"4.1 Transduction & Response"},
    {id:"4.1c", name:"4.1 Signaling Distances"},
    {id:"4.1d", name:"4.1 Homeostasis & Feedback"},
    {id:"4.2a", name:"4.2 Cell Cycle & Mitosis"},
    {id:"4.2b", name:"4.2 Checkpoints & Cyclins"},
    {id:"4.2c", name:"4.2 Apoptosis & Cancer"}
  ],

  notes: {
    "4.1a": [
      {sum:["Cell signaling has three stages: reception, transduction, response.", "A ligand binds a specific receptor protein; only target cells with that receptor respond.", "Small or nonpolar ligands (steroid hormones) cross the membrane to intracellular receptors. Large or polar ligands bind membrane receptors such as ligand-gated ion channels and G-protein linked receptors."]},
      {p:"A **signal transduction pathway** turns a signal from outside the cell into a specific response. Similar pathways are found in all organisms, which is evidence that signaling evolved early, in prokaryotes."},
      {p:"A **ligand** is the signal molecule. Binding to its receptor is **noncovalent and reversible**, so the cell can stop responding once the job is done."},
      {table:{head:["Receptor", "Where", "How it works"], rows:[
        ["Intracellular receptor", "cytosol or nucleus", "a small or hydrophobic ligand (testosterone, estrogen) diffuses in; the activated receptor can act as a transcription factor and turn genes on"],
        ["Ligand-gated ion channel", "plasma membrane", "a closed channel opens when the ligand binds, letting ions diffuse through (acetylcholine receptors on muscle let in Na⁺ and Ca²⁺)"],
        ["G-protein linked receptor", "plasma membrane", "ligand binds → receptor activates a G protein by swapping its GDP for GTP → the G protein activates another membrane protein"]
      ]}},
      {p:"All G-protein linked receptors have **7 transmembrane domains**, and all G proteins have three subunits (alpha, beta, gamma). That shared structure across eukaryotes suggests they evolved very early."},
      {check:[{q:"A ligand is released, but only some nearby cells respond. Why?", a:"Only cells with the receptor for that ligand (target cells) can respond."}, {q:"A drug blocks every membrane receptor, yet estrogen still works. How?", a:"Estrogen is a nonpolar steroid, so it crosses the membrane and binds an intracellular receptor."}, {q:"What makes a G protein active?", a:"GTP bound in place of GDP."}]}
    ],
    "4.1b": [
      {sum:["Transduction relays the signal through many steps, often a phosphorylation cascade: kinases add phosphates (on), phosphatases remove them (off).", "Second messengers such as cAMP and Ca²⁺ are small, non-protein, hydrophilic and spread the signal fast.", "Multi-step pathways amplify the signal and allow regulation; different cells can respond differently to the same signal."]},
      {steps:["**Protein kinases** move a phosphate from ATP onto a protein (**phosphorylation**), usually switching it on.", "A chain of kinases activating kinases is a **phosphorylation cascade**.", "**Protein phosphatases** remove the phosphates (**dephosphorylation**), turning the pathway off and resetting the kinases."]},
      {p:"**cAMP:** the membrane enzyme **adenylyl cyclase** converts ATP to cAMP, which usually activates protein kinase A. **Ca²⁺:** a pathway releases calcium ions into the cytosol, where they bind and activate proteins (muscle contraction, cell division)."},
      {ex:{q:"Put the calcium pathway in order.", a:["1. Ligand binds a G-protein linked receptor.", "2. The G protein is activated.", "3. Phospholipase C is activated and makes IP₃.", "4. IP₃ opens calcium ion channels.", "5. Ca²⁺ floods the cytosol and activates proteins.", "6. Activated proteins produce the response."]}},
      {p:"**Amplification:** each step activates more molecules than the last. One epinephrine molecule on a liver cell can release up to 100,000,000 glucose molecules."},
      {p:"**Specificity:** liver and heart cells both have epinephrine receptors but different relay proteins. The liver breaks down glycogen and releases glucose; the heart beats faster."},
      {p:"**Responses:** opening ion channels, changing gene expression (activating transcription factors), or switching enzymes on or off."},
      {h:"When signaling breaks"},
      {table:{head:["Condition", "What goes wrong"], rows:[["Anthrax toxin", "inhibits adenylyl cyclase, so no cAMP is made"], ["Type 1 diabetes", "the pancreas makes little or no insulin, so target cells never get the signal"], ["Type 2 diabetes", "insulin binds, but the pathway from the receptor is defective, so Glut-4 isn't activated"]]}},
      {check:[{q:"What turns a phosphorylation cascade off?", a:"Phosphatases, which remove the phosphate groups."}, {q:"A toxin inhibits adenylyl cyclase. What happens?", a:"No cAMP is made, so the pathway stops before a response."}, {q:"Three traits of second messengers?", a:"Small, non-protein, and hydrophilic, so they diffuse quickly."}]}
    ],
    "4.1c": [
      {sum:["Juxtacrine: direct contact. Autocrine: a cell signals itself. Paracrine: nearby cells. Endocrine: hormones travel in the blood to distant cells.", "Morphogens and quorum sensing are short-distance examples where the response depends on ligand concentration.", "Insulin and growth hormone are long-distance (endocrine) signals."]},
      {table:{head:["Type", "Distance", "Examples"], rows:[
        ["Juxtacrine", "direct contact, no ligand secreted", "plasmodesmata, gap junctions, a helper T cell binding an antigen-presenting cell"],
        ["Autocrine", "the same cell", "cancer cells releasing growth factors that bind their own receptors; an activated T cell signaling itself to multiply"],
        ["Paracrine", "nearby cells", "neurotransmitters crossing a synapse, morphogens, quorum sensing, cytokines from an APC"],
        ["Endocrine", "long distance, through blood", "insulin, growth hormone"]
      ]}},
      {p:"**Morphogens** spread from a source in an embryo and form a concentration gradient. Cells near the source get many receptors activated, far cells get few, so different genes turn on and cells differentiate into different types."},
      {p:"**Quorum sensing:** bacteria release **autoinducers**. When the population is dense enough for the autoinducer concentration to pass a threshold, all the bacteria switch on the same genes together (for example, bioluminescence)."},
      {p:"**Insulin** is released by the pancreas when blood glucose is high. It tells fat, muscle and liver cells to take glucose in: fat cells build triglycerides, liver and muscle build glycogen. **Growth hormone** from the pituitary gland stimulates bone and muscle growth and makes fat cells release stored energy."},
      {check:[{q:"What type of signaling uses hormones in the blood?", a:"Endocrine."}, {q:"In quorum sensing and morphogen signaling, what decides the response?", a:"The concentration of the ligand, and so how many receptors are activated."}, {q:"An APC bound to a helper T cell releases cytokines onto it. What type?", a:"Paracrine (the binding itself is juxtacrine)."}]}
    ],
    "4.1d": [
      {sum:["Homeostasis is keeping a stable internal environment despite outside changes.", "Negative feedback: the response opposes the stimulus and returns the variable to its set point.", "Positive feedback: the response amplifies the stimulus and pushes the variable further from the set point."]},
      {table:{head:["", "Negative feedback", "Positive feedback"], rows:[["Response", "opposite of the stimulus", "amplifies the stimulus"], ["Effect", "back toward the set point", "further from the set point"], ["Examples", "body temperature, blood glucose, blood pH and breathing rate, stomata closing", "childbirth (oxytocin), fruit ripening (ethylene), blood clotting"]]}},
      {p:"**Too hot:** skin blood vessels dilate and sweat glands activate. **Too cold:** skin blood vessels constrict and muscles shiver."},
      {p:"**Plants:** when water is scarce, the hormone **abscisic acid** makes guard cells shrink, closing the **stomata** and slowing transpiration."},
      {p:"**Childbirth:** the baby pushes on the cervix → the pituitary releases **oxytocin** → the uterus contracts and pushes the baby harder against the cervix → more oxytocin, until birth."},
      {check:[{q:"Exercise lowers blood pH, and the brain speeds up breathing to remove CO₂. Which feedback?", a:"Negative: the response reverses the change."}, {q:"Platelets at a wound release signals that attract more platelets. Which feedback?", a:"Positive: the response amplifies the stimulus."}, {q:"How is a thermostat like negative feedback?", a:"When the temperature drifts from the set point, it turns on heating or cooling to bring it back."}]}
    ],
    "4.2a": [
      {sum:["The cell cycle = interphase (G1, S, G2; about 90% of the cycle) + the mitotic phase (mitosis and cytokinesis).", "DNA is copied in S phase; each chromosome becomes two sister chromatids joined at the centromere.", "Mitosis (PMAT) makes two genetically identical diploid cells."]},
      {table:{head:["Phase", "What happens"], rows:[
        ["G1", "the cell grows and starts doubling its organelles"],
        ["S", "DNA is replicated; each chromosome is now two sister chromatids"],
        ["G2", "more growth and preparation for division; two centrosomes are present"],
        ["Prophase / prometaphase", "chromosomes condense, the nuclear envelope breaks down, centrosomes move to opposite poles, spindle microtubules attach to kinetochores"],
        ["Metaphase", "chromosomes line up at the metaphase plate"],
        ["Anaphase", "kinetochore microtubules shorten and pull sister chromatids apart"],
        ["Telophase", "two nuclear envelopes re-form; chromosomes uncondense; the spindle breaks down"],
        ["Cytokinesis", "the cytoplasm divides: a cleavage furrow in animal cells, a cell plate in plant cells"]
      ]}},
      {p:"A **diploid (2n)** cell has two sets of chromosomes, one from each parent. Human **somatic** (body) cells have 2n = 46. Mitosis starts with one diploid cell and ends with two."},
      {p:"**Why cells divide:** unicellular organisms reproduce; multicellular organisms develop, grow, and repair or replace damaged cells."},
      {p:"**Binary fission:** prokaryotes copy their single circular chromosome starting at the origin of replication, the copies move apart as the cell elongates, and the membrane pinches in. Mitosis probably evolved from it."},
      {check:[{q:"When in the cell cycle does the amount of DNA double?", a:"S phase."}, {q:"What holds two sister chromatids together?", a:"The centromere."}, {q:"A cell with 46 chromosomes divides by mitosis. How many in each daughter cell?", a:"46."}]}
    ],
    "4.2b": [
      {sum:["Checkpoints stop the cycle until conditions are right: G1 (the most important), G2 and M.", "CDKs are always present but only work when bound to cyclins, whose levels rise and fall.", "Growth factors push cells past G1; crowding (density-dependent inhibition) and p53 hold them back; mitotic cyclins (MPF) trigger entry into mitosis."]},
      {table:{head:["Checkpoint", "When", "Checks for"], rows:[
        ["G1", "end of G1, before S", "cell size, enough materials and energy, room to divide, undamaged DNA, growth factors"],
        ["G2", "end of G2, before mitosis", "DNA replicated correctly and undamaged; enough materials and energy"],
        ["M", "metaphase, before anaphase", "every kinetochore attached to spindle microtubules"]
      ]}},
      {p:"A cell that doesn't get the go-ahead at G1 can leave the cycle for **G0**, a non-dividing state. Most specialized cells are in G0. Nerve and muscle cells never divide; liver cells can be called back by growth factors after injury."},
      {h:"Cyclins and CDKs"},
      {p:"**Cyclin-dependent kinases (CDKs)** phosphorylate other proteins. They are **always present** but **inactive until a cyclin binds**. Cyclins are made and destroyed during the cycle, so the activity of each cyclin-CDK complex rises and falls with its cyclin's concentration."},
      {table:{head:["Signal", "Checkpoint", "Effect"], rows:[
        ["Growth factors (e.g. PDGF from platelets at a wound)", "G1", "stimulate: G1 cyclins rise, CDKs activate, the cell divides"],
        ["High cell density", "G1", "inhibits (density-dependent inhibition)"],
        ["Mitotic cyclins (form MPF with CDK)", "G2", "stimulate: the cell enters mitosis"],
        ["p53 (responds to DNA damage)", "G1 and G2", "inhibits; stalls for repair, or starts apoptosis if the damage can't be fixed"]
      ]}},
      {check:[{q:"Which checkpoint makes sure chromosomes are attached to the spindle?", a:"The M checkpoint."}, {q:"CDK levels stay constant. Why does CDK activity change?", a:"CDKs only work when bound to cyclins, and cyclin levels rise and fall."}, {q:"What is G0?", a:"A non-dividing state outside the cell cycle."}]}
    ],
    "4.2c": [
      {sum:["A cell can divide, differentiate, or undergo apoptosis (programmed cell death).", "Proto-oncogenes code for proteins that promote division; tumor suppressor genes code for proteins that inhibit division or trigger apoptosis.", "Cancer comes from mutations that make proto-oncogenes overactive (oncogenes: foot on the gas) or disable tumor suppressors (foot off the brake)."]},
      {p:"**Apoptosis** removes cells with DNA damage that can't be repaired and cells that are no longer needed during development."},
      {table:{head:["", "Proto-oncogene", "Tumor suppressor gene"], rows:[["Normal protein", "stimulates the cell cycle", "inhibits the cell cycle; promotes apoptosis"], ["Cancer-causing mutation", "makes the protein hyperactive (now an oncogene)", "makes the protein nonfunctional"], ["Analogy", "foot stuck on the gas", "foot off the brake"], ["Example", "a growth-factor receptor or CDK that signals nonstop", "p53 (mutated in about half of human cancers)"]]}},
      {check:[{q:"Protein X is a receptor that tells the cell to divide when growth factors bind. What kind of gene codes for it?", a:"A proto-oncogene."}, {q:"What mutation in that gene could cause cancer?", a:"One that makes the receptor signal even with no growth factor present."}, {q:"What happens if p53 stops working?", a:"Cells with damaged DNA keep dividing instead of being stopped or destroyed."}]}
    ]
  },

  problems(k){
    const SRC = {"4.1a":"4.1 Reception", "4.1b":"4.1 Transduction", "4.1c":"4.1 Signaling distances", "4.1d":"4.1 Feedback", "4.2a":"4.2 Cell cycle", "4.2b":"4.2 Checkpoints", "4.2c":"4.2 Cancer"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 4.1a ===== */
    mc("4.1a", "What are the three stages of cell signaling, in order?", ["Reception, transduction, response", "Transduction, reception, response", "Response, reception, transduction", "Reception, response, transduction"], "The signal is received, relayed, then acted on.");
    mc("4.1a", "A cell releases a ligand, but only some nearby cells respond. Why?", ["Only cells with a receptor for that ligand can respond", "Only cells that are dividing can take in a ligand", "The ligand is destroyed before reaching most cells", "Most cells lack the ATP needed to bind a ligand"], "Target cells have the matching receptor.");
    mc("4.1a", "Why is it important that ligand-receptor binding is reversible?", ["The cell can stop responding once the response has happened", "The ligand can be changed into a different kind of ligand", "The receptor can be used up after a single signal", "The cell can respond without making any receptors"], "Signals need an off switch.");
    mc("4.1a", "A drug blocks all of a cell's membrane receptors, but estrogen still affects the cell. Why?", ["Estrogen is nonpolar and binds a receptor inside the cell", "Estrogen is a protein that enters through ion channels", "Estrogen binds directly to the phospholipid heads", "Estrogen is pumped into the cell by active transport"], "Steroid hormones are lipids, so they diffuse through the membrane.");
    const rc = cat("4.1a", ["Intracellular receptor", "Ligand-gated ion channel", "G-protein linked receptor"], "Which receptor?");
    rc("Found in the cytosol or nucleus", "Intracellular receptor", "Its ligand crosses the membrane.");
    rc("Binds testosterone", "Intracellular receptor", "A steroid hormone.");
    rc("Can act as a transcription factor once activated", "Intracellular receptor", "It turns specific genes on.");
    rc("Opens to let ions diffuse through when its ligand binds", "Ligand-gated ion channel", "A gated channel protein.");
    rc("The acetylcholine receptor on skeletal muscle cells", "Ligand-gated ion channel", "It lets Na⁺ and Ca²⁺ in, leading to contraction.");
    rc("Has seven transmembrane domains", "G-protein linked receptor", "True of all of them.");
    rc("Activates a partner protein by swapping its GDP for GTP", "G-protein linked receptor", "The activated G protein then moves on to another membrane protein.");
    mc("4.1a", "What kinds of ligands use intracellular receptors?", ["Small or nonpolar ones that can cross the membrane", "Large or polar ones that cannot cross the membrane", "Only ions such as sodium and calcium", "Only proteins made by the same cell"], "Large or polar ligands need membrane receptors.");
    mc("4.1a", "A neuron's Na⁺/K⁺ pumps keep Na⁺ high outside the cell. When a ligand-gated Na⁺ channel opens, what happens?", ["Na⁺ diffuses into the cell", "Na⁺ diffuses out of the cell", "K⁺ is pumped out by the channel", "Nothing moves without ATP"], "Ions flow down their concentration gradient through an open channel.");
    mc("4.1a", "Similar signaling pathways are found in bacteria, yeast, plants and animals. What does this suggest?", ["Cell signaling evolved very early in the history of life", "Each group invented cell signaling separately", "Signaling pathways are not important for survival", "Eukaryotes passed their pathways to bacteria"], "Shared features point to common ancestry.");
    mc("4.1a", "What is allosteric regulation?", ["A molecule binding one site changes a protein's shape at another site", "A molecule binding the active site blocks the substrate directly", "A protein being broken down after it has been used once", "A receptor moving from the membrane into the nucleus"], "Signal transduction often relies on these shape changes.");

    /* ===== 4.1b ===== */
    const kp = cat("4.1b", ["Kinase", "Phosphatase"], "Kinase or phosphatase?");
    kp("Adds a phosphate group to a protein", "Kinase", "Phosphorylation.");
    kp("Removes a phosphate group from a protein", "Phosphatase", "Dephosphorylation.");
    kp("Turns a signal transduction pathway off", "Phosphatase", "It deactivates the relay proteins.");
    kp("Takes its phosphate from ATP", "Kinase", "ATP → ADP.");
    kp("Makes kinases available to be used again", "Phosphatase", "It resets them.");
    mc("4.1b", "Which describes second messengers?", ["Small, non-protein, hydrophilic molecules or ions", "Large proteins embedded in the membrane", "Nonpolar lipids that stay inside the bilayer", "Enzymes that add phosphates to proteins"], "cAMP and Ca²⁺ diffuse quickly through the cytosol.");
    mc("4.1b", "What does adenylyl cyclase do?", ["Converts ATP into cAMP", "Converts cAMP into ATP", "Removes phosphates from kinases", "Opens calcium ion channels"], "cAMP then usually activates protein kinase A.");
    mc("4.1b", "The anthrax toxin inhibits adenylyl cyclase. What is the result?", ["No cAMP is made, so the pathway stops before a response", "Too much cAMP is made, so the response never ends", "The ligand can no longer bind to its receptor", "The G protein can no longer bind to GTP"], "The pathway is blocked partway through.");
    set("4.1b", {stim: "In one pathway, a ligand binds a G-protein linked receptor. The G protein activates phospholipase C, which makes IP₃. IP₃ opens calcium channels, and Ca²⁺ activates proteins that carry out the response.", cite: "Calcium as a second messenger (class notes)"}, [
      ["What happens right after the ligand binds its receptor?", ["The G protein is activated", "IP₃ opens calcium channels", "Ca²⁺ enters the cytosol", "Phospholipase C makes IP₃"], "Receptor → G protein → phospholipase C → IP₃ → Ca²⁺ → response."],
      ["What directly opens the calcium ion channels?", ["IP₃", "The ligand", "The G protein", "Phospholipase C"], "IP₃ is made by phospholipase C."],
      ["What is the second messenger that activates the final proteins?", ["Ca²⁺", "GTP", "The ligand", "Phospholipase C"], "The ligand is the first messenger."]
    ]);
    num("4.1b", "In a cascade, active kinase 1 activates kinase 2, which activates the final protein. Each active kinase can phosphorylate 10 proteins. Starting from ONE active kinase 1, how many final proteins are activated?", 100, "1 → 10 kinase 2 → 100 final proteins.");
    mc("4.1b", "Why are multi-step pathways useful?", ["They amplify the signal and give more points for regulation", "They use up less ATP than a one-step pathway would", "They stop the cell from responding to any ligand", "They make every cell respond in exactly the same way"], "A few signal molecules can produce a large response.");
    mc("4.1b", "Liver cells and heart cells both respond to epinephrine, but differently. Why?", ["They have different signal transduction proteins", "They have completely different DNA", "Only liver cells have epinephrine receptors", "Epinephrine changes shape in the blood"], "Liver: breaks down glycogen. Heart: beats faster.");
    mc("4.1b", "Which is NOT a typical cellular response to a signal?", ["Destroying all of the cell's receptors forever", "Opening ion channels in the plasma membrane", "Changing which genes are expressed", "Activating or inhibiting enzymes"], "The other three are the main responses in the class notes.");
    const db = cat("4.1b", ["Normal", "Type 1 diabetes", "Type 2 diabetes"], "Which case?");
    db("Insulin binds its receptor and Glut-4 brings glucose into the cell", "Normal", "The pathway works.");
    db("The pancreas makes little or no insulin", "Type 1 diabetes", "No signal reaches the target cells.");
    db("Insulin binds, but the pathway from the receptor is defective", "Type 2 diabetes", "Glut-4 is never activated.");
    mc("4.1b", "How do signal transduction pathways benefit a cell?", ["They let it respond to signals that can't cross the membrane", "They let ligands enter the nucleus without a receptor", "They remove the need for ATP in the cytosol", "They prevent any change in gene expression"], "They also amplify signals and allow different responses to the same signal.");

    /* ===== 4.1c ===== */
    const sg = cat("4.1c", ["Juxtacrine", "Autocrine", "Paracrine", "Endocrine"], "Which type of signaling?");
    sg("Signals pass through gap junctions between touching cells", "Juxtacrine", "Direct contact.");
    sg("Signals pass through plasmodesmata between plant cells", "Juxtacrine", "Direct contact.");
    sg("A cancer cell releases growth factors that bind its own receptors", "Autocrine", "The cell signals itself.");
    sg("Neurotransmitters cross a synapse to the next neuron", "Paracrine", "A nearby cell.");
    sg("Morphogens diffuse through embryonic tissue", "Paracrine", "Local regulators.");
    sg("Bacteria detect autoinducers released by neighboring bacteria", "Paracrine", "Quorum sensing.");
    sg("The pancreas releases insulin into the blood", "Endocrine", "A hormone traveling in blood.");
    sg("The pituitary gland releases growth hormone", "Endocrine", "Long distance.");
    sg("A helper T cell's receptor binds an antigen on an APC", "Juxtacrine", "Membrane-to-membrane contact.");
    sg("An APC releases cytokines that activate the T cell bound to it", "Paracrine", "They diffuse to the neighboring cell.");
    sg("An activated helper T cell releases cytokines that tell itself to multiply", "Autocrine", "It signals itself.");
    mc("4.1c", "What do morphogens do in an embryo?", ["Form a concentration gradient that tells cells which type to become", "Carry oxygen from the mother's blood to all of the embryo's cells", "Destroy any cells that are too far from the center", "Join the cells together with tight junctions"], "Different concentrations turn on different genes.");
    mc("4.1c", "In quorum sensing, when do the bacteria all switch on a gene together?", ["When autoinducer concentration passes a threshold", "When a single bacterium releases one autoinducer", "When the bacteria run out of nutrients", "When the temperature of the water rises"], "The concentration reflects how dense the population is.");
    mc("4.1c", "What do quorum sensing and morphogen signaling have in common?", ["The response depends on the concentration of the ligand", "Both rely on hormones carried long distances in blood", "Both happen only in multicellular animals", "Neither one involves any receptor proteins"], "More ligand → more receptors activated.");
    mc("4.1c", "What does insulin tell liver, muscle and fat cells to do?", ["Take glucose in from the blood", "Release glucose into the blood", "Stop making Glut-4 transporters", "Break down glycogen and fat"], "It's released when blood glucose is high.");
    mc("4.1c", "What do liver and muscle cells do with the glucose they take in?", ["Build glycogen", "Build triglycerides", "Build cellulose", "Build insulin"], "Fat cells build triglycerides for long-term storage.");
    mc("4.1c", "Which is an effect of human growth hormone?", ["It increases cell division in bone and muscle", "It makes fat cells store more triglyceride", "It lowers the amount of glucose in the blood", "It stops the pituitary gland from working"], "It also makes fat cells break down fat and the liver release glucose.");
    mc("4.1c", "Most hormones are proteins. Which are steroids instead?", ["Testosterone and estrogen", "Insulin and growth hormone", "Oxytocin and insulin", "Cytokines and morphogens"], "The sex hormones are lipids.");

    /* ===== 4.1d ===== */
    const fb = cat("4.1d", ["Negative feedback", "Positive feedback"], "Negative or positive feedback?");
    fb("You get hot, so you sweat and your skin blood vessels dilate", "Negative feedback", "The response brings temperature back down.");
    fb("You get cold, so you shiver and your skin blood vessels constrict", "Negative feedback", "The response brings temperature back up.");
    fb("Contractions release oxytocin, which causes stronger contractions", "Positive feedback", "The response amplifies the stimulus.");
    fb("Ripening fruit releases ethylene, which ripens nearby fruit", "Positive feedback", "More ripening → more ethylene.");
    fb("Platelets at a wound release signals that attract more platelets", "Positive feedback", "The response increases the stimulus.");
    fb("Blood pH drops during exercise, so breathing rate rises to remove CO₂", "Negative feedback", "pH returns toward its set point.");
    fb("Water is scarce, so abscisic acid closes the stomata", "Negative feedback", "Water loss is reduced.");
    fb("Blood glucose rises, so insulin is released and cells take glucose in", "Negative feedback", "Blood glucose returns to normal.");
    fb("A thermostat turns on the AC when a room gets too warm", "Negative feedback", "It returns the room to the set point.");
    mc("4.1d", "What is homeostasis?", ["Keeping a stable internal environment as conditions change", "Keeping every cell in the body exactly the same", "Changing the body to match whatever the outside conditions are", "Stopping all chemical reactions inside a cell"], "It's a dynamic balance.");
    mc("4.1d", "In negative feedback, how does the response relate to the stimulus?", ["It opposes the stimulus", "It amplifies the stimulus", "It ignores the stimulus", "It repeats the stimulus"], "The variable goes back toward its set point.");
    mc("4.1d", "What do guard cells do when a plant is losing water too fast?", ["Shrink, which closes the stomata", "Swell, which opens the stomata", "Divide to form new stomata", "Release water into the leaf"], "Triggered by abscisic acid.");
    mc("4.1d", "Why would an organism ever use positive feedback?", ["To finish a process quickly, such as childbirth", "To hold a variable steady at its set point", "To undo the effect of a stimulus", "To keep body temperature constant"], "It pushes the system further from the set point until the event is over.");

    /* ===== 4.2a ===== */
    const ph = cat("4.2a", ["G1", "S", "G2", "Prophase", "Metaphase", "Anaphase", "Telophase", "Cytokinesis"], "Which phase?");
    ph("The first phase of the cell cycle; the cell grows", "G1", "First gap.");
    ph("Chromosomes are duplicated", "S", "Synthesis.");
    ph("The cell keeps growing and prepares for the mitotic phase", "G2", "Second gap.");
    ph("Chromosomes condense and the nuclear envelope breaks down", "Prophase", "The spindle begins to form.");
    ph("Chromosomes line up in the middle of the cell", "Metaphase", "At the metaphase plate.");
    ph("Microtubules pull sister chromatids apart", "Anaphase", "The kinetochore microtubules shorten.");
    ph("Two new nuclear envelopes form", "Telophase", "Chromosomes begin to uncondense.");
    ph("The cytoplasm splits into two daughter cells", "Cytokinesis", "Cleavage furrow or cell plate.");
    set("4.2a", {svg: dnaGraph(), cite: "Relative amount of DNA per cell during the cell cycle"}, [
      ["Which phase is stretch 2?", ["S", "G1", "G2", "Cytokinesis"], "The DNA is doubling, so it's being replicated."],
      ["Which phases are stretch 3?", ["G2 and mitosis", "G1 and S", "S and G2", "Cytokinesis and G1"], "The DNA has doubled but the cell hasn't split yet."],
      ["What happens at stretch 4?", ["Cytokinesis", "DNA replication", "Prophase", "The G1 checkpoint"], "DNA per cell halves when the cell divides in two. Stretches 1 and 5 are G1."]
    ]);
    mc("4.2a", "About how much of the cell cycle is spent in interphase?", ["90%", "50%", "10%", "25%"], "The cell does its normal job during interphase.");
    mc("4.2a", "What are the two parts of the mitotic phase?", ["Mitosis and cytokinesis", "G1 and G2", "S phase and mitosis", "Prophase and interphase"], "The nucleus divides, then the cytoplasm.");
    mc("4.2a", "What do centrosomes do?", ["Organize microtubules into the mitotic spindle", "Copy the DNA during S phase", "Hold the two sister chromatids together", "Form the new nuclear envelope"], "Each is made of a pair of centrioles.");
    mc("4.2a", "Where do spindle microtubules attach to a chromosome?", ["At the kinetochores", "At the centrosomes", "At the nuclear envelope", "At the cell plate"], "Each sister chromatid has one, at the centromere.");
    mc("4.2a", "How does cytokinesis differ in animal and plant cells?", ["Animals form a cleavage furrow; plants form a cell plate", "Animals form a cell plate; plants form a cleavage furrow", "Animals divide the nucleus; plants divide the cytoplasm", "Animals use spindles; plants do not divide at all"], "The plant's cell plate becomes a new cell wall.");
    num("4.2a", "A human somatic cell has 46 chromosomes. After mitosis and cytokinesis, how many are in each daughter cell?", 46, "Daughter cells are identical to the parent.");
    num("4.2a", "A diploid cell with 8 chromosomes divides by mitosis. How many daughter cells form?", 2, "One division makes two cells.");
    mc("4.2a", "How do prokaryotes divide?", ["Binary fission", "Mitosis", "Meiosis", "Budding of the nucleus"], "They copy one circular chromosome and pinch in two.");
    mc("4.2a", "Why is cell division important to a multicellular organism?", ["Development, growth and replacing damaged cells", "It is the organism's only way to make ATP", "It lets each cell have different DNA", "It prevents cells from specializing"], "In a unicellular organism, division reproduces the whole organism.");
    mc("4.2a", "What does a cell look like at the end of G2?", ["Duplicated but uncondensed chromosomes and two centrosomes", "Condensed chromosomes lined up at the metaphase plate", "Unduplicated chromosomes and a single centrosome", "Two nuclei and a cleavage furrow in the middle"], "The nuclear envelope is still intact.");

    /* ===== 4.2b ===== */
    const cp = cat("4.2b", ["G1 checkpoint", "G2 checkpoint", "M checkpoint"], "Which checkpoint?");
    cp("Checks that growth factors are present", "G1 checkpoint", "External go-ahead signals.");
    cp("Checks that DNA replication happened correctly", "G2 checkpoint", "After S phase, before mitosis.");
    cp("Checks that all kinetochores are attached to spindle microtubules", "M checkpoint", "During metaphase, before anaphase.");
    cp("The most important checkpoint in mammalian cells", "G1 checkpoint", "Pass it and the cell usually completes the cycle.");
    cp("Cells that fail it may enter G0", "G1 checkpoint", "A non-dividing state.");
    cp("Checks that the cell is large enough before S phase", "G1 checkpoint", "Along with materials, energy, room and DNA.");
    cp("Mitotic cyclins (MPF) act here", "G2 checkpoint", "They trigger entry into mitosis.");
    const si = cat("4.2b", ["Stimulates division", "Inhibits division"], "Stimulates or inhibits cell division?");
    si("Growth factors", "Stimulates division", "They raise G1 cyclin levels.");
    si("High cell density", "Inhibits division", "Density-dependent inhibition.");
    si("Mitotic cyclins", "Stimulates division", "They form MPF with CDKs.");
    si("p53", "Inhibits division", "It responds to DNA damage.");
    mc("4.2b", "When is a CDK active?", ["Only when it is bound to a cyclin", "Only when no cyclin is present", "At all times in every cell", "Only during G0"], "Cyclin-dependent kinase.");
    mc("4.2b", "CDK concentration stays constant during the cell cycle. Why does CDK activity rise and fall?", ["Cyclin concentration rises and falls", "The CDKs are destroyed in each phase", "ATP is only present during mitosis", "The nucleus blocks CDKs in G1"], "Cyclins are made and broken down on a schedule.");
    mc("4.2b", "What is G0?", ["A non-dividing state outside the cell cycle", "The first stage of mitosis", "The phase when DNA is replicated", "The last checkpoint before cytokinesis"], "Most specialized cells are in it.");
    mc("4.2b", "Which cells can be called back from G0 by growth factors after an injury?", ["Liver cells", "Mature nerve cells", "Mature muscle cells", "Red blood cells"], "Nerve and muscle cells never divide.");
    mc("4.2b", "Platelets at a wound release PDGF. What does it do?", ["Activates the G1 cyclin-CDK complex in fibroblasts so they divide", "Inhibits the G1 cyclin-CDK complex in fibroblasts so they rest", "Activates p53 in fibroblasts so they undergo apoptosis", "Breaks down the mitotic spindle in dividing fibroblasts"], "Dividing fibroblasts help heal the wound.");
    mc("4.2b", "What does p53 do when DNA is damaged?", ["Halts the cycle for repair, or starts apoptosis if repair fails", "Speeds the cell through the checkpoints to finish dividing", "Copies the damaged DNA so there is a spare", "Binds to growth factors outside the cell"], "It inhibits cyclin-CDK complexes.");
    mc("4.2b", "A cell reaches metaphase with one chromosome not attached to the spindle. What happens?", ["The M checkpoint halts mitosis before anaphase", "The G1 checkpoint sends the cell to G0", "Anaphase begins and the cell divides normally", "The cell goes back and repeats S phase"], "Anaphase waits for every kinetochore to be attached.");
    mc("4.2b", "What is density-dependent inhibition?", ["Crowded cells signal each other to stop dividing", "Crowded cells divide faster to fill empty space", "Cells stop dividing when they are too far apart", "Cells stop making CDKs when they are small"], "It acts on cyclin-CDK complexes at G1.");

    /* ===== 4.2c ===== */
    const gn = cat("4.2c", ["Proto-oncogene", "Tumor suppressor gene"], "Proto-oncogene or tumor suppressor gene?");
    gn("Codes for a protein that promotes the cell cycle", "Proto-oncogene", "Normal 'gas pedal' genes.");
    gn("Codes for a protein that inhibits the cell cycle", "Tumor suppressor gene", "Normal 'brake' genes.");
    gn("The gene for p53", "Tumor suppressor gene", "p53 halts the cycle and can start apoptosis.");
    gn("The gene for a receptor that signals the cell to divide when growth factors bind", "Proto-oncogene", "Its protein stimulates division.");
    gn("Causes cancer when its protein becomes hyperactive", "Proto-oncogene", "It becomes an oncogene.");
    gn("Causes cancer when its protein stops working", "Tumor suppressor gene", "Foot off the brake.");
    gn("The gene for a CDK", "Proto-oncogene", "CDKs drive the cycle forward.");
    mc("4.2c", "What is apoptosis?", ["Programmed cell death", "Uncontrolled cell division", "Cell differentiation", "DNA replication"], "It removes unneeded or damaged cells.");
    mc("4.2c", "Which is a reason a cell might be programmed to die?", ["Its DNA is damaged and can't be repaired", "It has just finished copying its DNA", "It received growth factors", "It passed the G1 checkpoint"], "The other is that it's no longer needed during development.");
    mc("4.2c", "What is differentiation?", ["A cell stops dividing and specializes in structure and function", "A cell divides by mitosis into two identical daughter cells", "A cell destroys itself with its own enzymes", "A cell copies its DNA before mitosis"], "One of the three fates of a cell.");
    mc("4.2c", "Which mutation in a growth-factor receptor gene could cause cancer?", ["One that makes the receptor signal even with no growth factor", "One that stops the receptor from ever being made", "One that makes the receptor ignore all growth factors nearby", "One that removes the receptor from the membrane"], "A hyperactive protein keeps telling the cell to divide.");
    mc("4.2c", "Which mutation in the p53 gene could cause cancer?", ["One that makes p53 nonfunctional", "One that makes p53 more active", "One that makes extra copies of p53", "One that makes p53 bind DNA damage faster"], "Cells with damaged DNA would keep dividing.");
    mc("4.2c", "What do mutations in proto-oncogenes and in tumor suppressor genes have in common?", ["Both can lead to uncontrolled cell division", "Both always stop the cell from dividing", "Both make the cell enter G0 for good", "Both only happen in nerve cells"], "Gas stuck on, or brake removed.");
    mc("4.2c", "'Taking the foot off the brake' describes which mutation?", ["A tumor suppressor gene that no longer works", "A proto-oncogene that becomes an oncogene", "A CDK that becomes hyperactive", "A growth factor that is overproduced"], "The brake proteins are gone.");
  },

  drills: {
    /* cascade amplification */
    "4.1b": k => {
      const per = pick([2, 3, 5, 10]), steps = rint(1, 3), a = per ** steps;
      return {kind:"num", text:`A phosphorylation cascade has ${steps} step${steps === 1 ? "" : "s"} after the first active kinase. Each active protein activates ${per} proteins at the next step. Starting from ONE active kinase, how many proteins are active at the last step?`,
        fields:[k.F.num("Proteins", a)], steps:[`${Array(steps).fill(per).join(" × ")} = ${a}`]};
    },
    /* chromosomes and cells after rounds of mitosis */
    "4.2a": k => {
      const n2 = pick([4, 8, 14, 24, 46, 78]), r = rint(1, 5);
      if (Math.random() < 0.5)
        return {kind:"num", text:`One cell goes through ${r} round${r === 1 ? "" : "s"} of mitosis and cytokinesis. How many cells are there at the end?`, fields:[k.F.num("Cells", 2 ** r)], steps:[`The number doubles each round: 2^${r} = ${2 ** r}.`]};
      return {kind:"num", text:`A somatic cell with ${n2} chromosomes goes through ${r} round${r === 1 ? "" : "s"} of mitosis. How many chromosomes does each final cell have?`, fields:[k.F.num("Chromosomes", n2)], steps:[`Mitosis makes identical cells, so each still has ${n2}.`]};
    }
  }
});
})();
