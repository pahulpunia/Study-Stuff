/* =====================================================================
   AP Biology: free-response practice (short-answer style, parts a–d).
   Original prompts built from the unit notes (Ravuri's course order).
   Each part: q, a model answer, and lowercase "look" words the checker
   scans for. Shown under Practice as "Short Answer".
   ===================================================================== */
(() => {
  const P = (secs, stim, parts) => ({sec:secs[0], secs, stim, parts:parts.map(([q, model, look]) => ({q, model, look}))});
  const add = (u, saq) => Study.extendUnit("apbio", u, {saq});

  /* ---------- Unit 0: Experiments & Data ---------- */
  add("u0", [
    P(["0.1", "0.2"], "A student grows 30 bean plants in three groups of 10: no fertilizer, 5 g of fertilizer, and 10 g of fertilizer. All plants get the same light, water, and soil. After 3 weeks the student measures each plant's height.", [
      ["Identify the independent and dependent variables.", "The independent variable is the amount of fertilizer (0, 5, or 10 g). The dependent variable is plant height after 3 weeks.", ["independent", "dependent", "fertilizer", "height"]],
      ["Explain why the group with no fertilizer is included.", "The 0 g group is the control. It gives a baseline to compare against, so the student can tell whether a change in height was caused by the fertilizer and not by light, water, or normal growth.", ["control", "baseline", "compare"]],
      ["Describe one way the student could make the results more reliable.", "Use more plants per group or repeat the experiment, because a larger sample size reduces the effect of random differences between individual plants.", ["repeat", "more plants", "sample size", "trials", "replicate"]],
      ["Predict the results if fertilizer has no effect on growth, and justify your prediction.", "The mean heights of all three groups would be about the same, with overlapping error bars, because any differences would only come from random variation.", ["same", "similar", "overlap", "no difference"]],
    ]),
    P(["0.3", "0.2"], "Mean root length (± 2 SEM) after 10 days under three light colors: Light A: 4.2 ± 0.3 cm. Light B: 5.1 ± 0.2 cm. Light C: 4.4 ± 0.4 cm.", [
      ["Identify the treatment with the longest mean root length.", "Light B, with a mean root length of 5.1 cm.", ["light b", "5.1"]],
      ["Describe what the ± 2 SEM error bars show.", "They show the range where the true population mean very likely falls (about 95% confidence), so a smaller SEM means the sample mean is a more precise estimate.", ["95", "true mean", "population mean", "confidence", "precise"]],
      ["Explain whether Light A and Light C produced significantly different root lengths.", "They are not significantly different, because their ranges (3.9–4.5 cm and 4.0–4.8 cm) overlap, so the difference could be due to chance.", ["overlap", "not significant", "no significant", "chance"]],
      ["Explain how measuring more plants would affect the SEM.", "The SEM would get smaller, because SEM is the standard deviation divided by the square root of n, so a larger sample makes the error bars narrower.", ["smaller", "decrease", "square root", "narrower"]],
    ]),
    P(["0.4"], "A cross between two heterozygous pea plants (Pp × Pp) produced 160 offspring: 110 purple and 50 white. The critical value for p = 0.05 with 1 degree of freedom is 3.84.", [
      ["Calculate the expected number of purple and white offspring.", "A 3:1 ratio is expected, so 3/4 × 160 = 120 purple and 1/4 × 160 = 40 white.", ["120", "40"]],
      ["Calculate the chi-square value.", "χ² = (110 − 120)²/120 + (50 − 40)²/40 = 0.83 + 2.5 ≈ 3.33.", ["3.33", "3.3"]],
      ["Explain whether the null hypothesis should be rejected.", "Fail to reject the null hypothesis, because 3.33 is less than the critical value of 3.84, so the difference from a 3:1 ratio could be due to chance.", ["fail to reject", "less than", "3.84", "chance"]],
      ["Explain why there is 1 degree of freedom.", "There are two phenotype categories (purple and white), and degrees of freedom equal the number of categories minus 1, so 2 − 1 = 1.", ["categories", "minus 1", "two phenotypes", "classes"]],
    ]),
  ]);

  /* ---------- Unit 1: Chemistry of Life ---------- */
  add("u1", [
    P(["1.1b", "1.1a"], "", [
      ["Describe the features of a water molecule that make it polar.", "Oxygen is more electronegative than hydrogen, so it pulls the shared electrons closer. Oxygen gets a partial negative charge and each hydrogen a partial positive charge, and the bent shape keeps those charges on opposite sides.", ["electronegative", "partial", "bent", "polar covalent"]],
      ["Explain how hydrogen bonding gives water a high specific heat.", "Heat energy must first break hydrogen bonds between water molecules before the molecules can move faster, so water absorbs a lot of heat with only a small rise in temperature.", ["hydrogen bond", "break", "absorb"]],
      ["Explain how water moves up through a plant's xylem.", "As water evaporates from leaves (transpiration), cohesion between water molecules and adhesion to the polar xylem walls let it be pulled up as a continuous column.", ["cohesion", "adhesion", "transpiration", "evaporat"]],
      ["Predict what would happen to lakes in winter if ice were denser than liquid water, and justify your prediction.", "Ice would sink, so lakes would freeze from the bottom up and could freeze solid, because there would be no floating layer of ice to insulate the water below.", ["sink", "bottom", "freeze solid", "insulat"]],
    ]),
    P(["1.1c", "1.1a"], "", [
      ["Describe what pH measures.", "pH measures the concentration of hydrogen ions (H+) in a solution. A lower pH means a higher H+ concentration.", ["hydrogen ion", "h+", "concentration"]],
      ["Explain how a buffer keeps human blood near pH 7.4.", "Bicarbonate accepts extra H+ and carbonic acid releases H+ when there is too little, so the H+ concentration and the pH stay nearly constant.", ["bicarbonate", "carbonic acid", "accept", "release"]],
      ["Calculate how many times more H+ is in a pH 4 solution than in a pH 6 solution.", "Each pH unit is a tenfold change, so 2 units means 10 × 10 = 100 times more H+.", ["100", "tenfold", "10 times"]],
      ["Explain why carbon can form so many different kinds of molecules.", "Carbon has four valence electrons, so it can form four covalent bonds, which lets it build chains, branches, and rings with many other atoms.", ["four", "valence", "covalent bond"]],
    ]),
    P(["1.2a", "1.2d"], "", [
      ["Describe how a disaccharide forms from two monosaccharides.", "A dehydration synthesis reaction removes a water molecule and joins the two sugars with a covalent glycosidic bond.", ["dehydration", "water", "glycosidic"]],
      ["Explain why starch and cellulose have different functions even though both are glucose polymers.", "Starch uses alpha linkages that form coiled chains enzymes can easily break down for energy storage, while cellulose uses beta linkages that form straight chains that hydrogen bond into strong structural fibers.", ["alpha", "beta", "linkage", "structural", "storage"]],
      ["Explain why phospholipids form a bilayer in water.", "Each phospholipid has a hydrophilic phosphate head and two hydrophobic fatty acid tails, so the heads face the water on both sides while the tails hide from it in the middle.", ["hydrophilic", "hydrophobic", "head", "tail"]],
      ["Predict how a membrane with more unsaturated fatty acids would behave in the cold, and justify your prediction.", "It would stay more fluid, because double bonds put kinks in the tails so they cannot pack tightly together and solidify.", ["fluid", "kink", "double bond"]],
    ]),
    P(["1.2b", "1.2c"], "", [
      ["Describe the four levels of protein structure.", "Primary is the amino acid sequence. Secondary is alpha helices and beta sheets held by hydrogen bonds in the backbone. Tertiary is the overall 3-D fold from R-group interactions. Quaternary is two or more polypeptides joined together.", ["primary", "secondary", "tertiary", "quaternary"]],
      ["Explain how changing one amino acid can change a protein's function.", "If the new R group has different properties, such as nonpolar instead of charged, it changes the R-group interactions, so the protein folds into a different shape and may no longer bind its target.", ["r group", "shape", "fold"]],
      ["Describe two structural differences between DNA and RNA.", "DNA has deoxyribose sugar and the base thymine and is usually double-stranded. RNA has ribose sugar and uracil instead of thymine and is usually single-stranded.", ["deoxyribose", "ribose", "uracil", "thymine", "single"]],
      ["Explain what it means that the two strands of DNA are antiparallel.", "The strands run in opposite directions: one runs 5' to 3' and its partner runs 3' to 5', which lets the bases line up and pair.", ["opposite", "direction", "5'", "3'"]],
    ]),
    P(["1.3a", "1.3b"], "A stomach enzyme was tested at different pH values. Reaction rate (µmol product per minute): pH 1: 40. pH 2: 95. pH 3: 70. pH 5: 15. pH 7: 2.", [
      ["Identify the optimal pH for this enzyme.", "The optimal pH is pH 2, where the rate is highest (95 µmol per minute).", ["ph 2", "ph of 2"]],
      ["Explain why the reaction rate drops at pH 7.", "The change in H+ concentration disrupts the hydrogen and ionic bonds holding the enzyme's shape, so the active site changes shape (denatures) and the substrate no longer fits.", ["denature", "active site", "shape"]],
      ["Describe how a competitive inhibitor lowers the reaction rate.", "A competitive inhibitor resembles the substrate and binds the active site, blocking the substrate from binding. Adding more substrate can outcompete it.", ["active site", "resemble", "compete", "block"]],
      ["Predict the effect of adding much more substrate when a noncompetitive inhibitor is present, and justify your prediction.", "The rate would stay low, because a noncompetitive inhibitor binds an allosteric site and changes the active site's shape, so extra substrate cannot overcome it.", ["allosteric", "stay low", "not increase", "shape"]],
    ]),
  ]);

  /* ---------- Unit 2: Cells & Transport ---------- */
  add("u2", [
    P(["2.1a", "2.1b"], "", [
      ["Describe two differences between prokaryotic and eukaryotic cells.", "Prokaryotes have no nucleus or membrane-bound organelles and keep one circular chromosome in a nucleoid region. Eukaryotes have a nucleus, membrane-bound organelles, and linear chromosomes.", ["nucleus", "membrane-bound", "nucleoid", "circular"]],
      ["Describe the path of a secreted protein from where it is made to where it leaves the cell.", "It is made by ribosomes on the rough ER and folded inside the ER, carried in a vesicle to the Golgi to be modified and packaged, then carried in another vesicle to the plasma membrane and released by exocytosis.", ["rough er", "golgi", "vesicle", "exocytosis"]],
      ["Explain why a cell with a damaged Golgi apparatus would have trouble secreting proteins.", "The Golgi modifies, sorts, and packages proteins into vesicles, so without it proteins from the ER would not be tagged and shipped to the plasma membrane.", ["modif", "packag", "sort", "vesicle"]],
      ["Predict which cell has more rough ER, a pancreas cell that makes digestive enzymes or a fat-storage cell, and justify your prediction.", "The pancreas cell, because it makes and secretes large amounts of protein enzymes, and secreted proteins are made by ribosomes on the rough ER.", ["pancrea", "secret", "enzyme"]],
    ]),
    P(["2.1c", "2.1d"], "", [
      ["Describe two pieces of evidence for the endosymbiotic theory.", "Mitochondria and chloroplasts have their own circular DNA and bacteria-like ribosomes, they have double membranes, and they divide by a process like binary fission.", ["circular dna", "own dna", "double membrane", "ribosome", "binary fission"]],
      ["Explain how the folds of the inner mitochondrial membrane (cristae) help the cell.", "Cristae increase the surface area for electron transport chains and ATP synthase, so the mitochondrion can make more ATP.", ["surface area", "electron transport", "atp synthase", "atp"]],
      ["Describe one role of the cytoskeleton.", "Microtubules form the spindle that separates chromosomes and act as tracks for motor proteins that move vesicles. Microfilaments help maintain cell shape and movement.", ["microtubule", "microfilament", "spindle", "motor protein", "shape"]],
      ["Explain how gap junctions and tight junctions differ in function.", "Gap junctions are channels that let ions and small molecules pass directly between neighboring animal cells, while tight junctions seal cells together so fluid cannot leak between them.", ["gap junction", "tight junction", "channel", "seal", "leak"]],
    ]),
    P(["2.2a", "2.2b"], "Three cube-shaped cells have side lengths of 1 µm, 2 µm, and 4 µm.", [
      ["Calculate the surface area-to-volume ratio of the 2 µm cell.", "Surface area = 6 × 2² = 24 µm² and volume = 2³ = 8 µm³, so the ratio is 24/8 = 3:1.", ["3:1", "3 to 1", "ratio of 3", "24/8"]],
      ["Explain why cells stay small.", "As a cell grows, its volume increases faster than its surface area, so the ratio drops and the membrane cannot exchange materials fast enough for the larger volume.", ["surface area", "volume", "ratio", "exchange"]],
      ["Describe the fluid mosaic model of the cell membrane.", "The membrane is a fluid phospholipid bilayer with proteins scattered through it like a mosaic. Phospholipids and many proteins drift sideways, and cholesterol helps regulate fluidity.", ["phospholipid", "bilayer", "protein", "fluid", "cholesterol"]],
      ["Explain why glucose needs a transport protein to cross the membrane but oxygen does not.", "Oxygen is small and nonpolar, so it diffuses straight through the hydrophobic interior. Glucose is large and polar, so it needs a channel or carrier protein (facilitated diffusion) to get past the hydrophobic core.", ["nonpolar", "polar", "hydrophobic", "facilitated"]],
    ]),
    P(["2.2c"], "A potato core with a water potential of −0.6 MPa is placed in a sucrose solution with a water potential of −0.98 MPa.", [
      ["Identify the direction water will move.", "Water will move out of the potato into the solution, from higher water potential (−0.6 MPa) to lower water potential (−0.98 MPa).", ["out of", "higher", "lower"]],
      ["Predict how the mass of the potato core will change, and justify your prediction.", "The potato core will lose mass, because water leaves its cells and moves into the solution.", ["lose", "decrease"]],
      ["Explain what happens to the turgor pressure of the potato cells.", "As water leaves, the central vacuole shrinks and the membrane pulls away from the cell wall (plasmolysis), so turgor pressure drops and the tissue goes soft.", ["plasmolysis", "turgor", "vacuole", "pulls away"]],
      ["Describe the water potential of pure water in an open container and why it has that value.", "It is 0 MPa, the highest possible value, because there are no solutes and no added pressure.", ["0 mpa", "zero", "no solute", "highest"]],
    ]),
    P(["2.2d"], "", [
      ["Describe how the sodium-potassium pump works.", "The pump uses energy from ATP to move 3 Na+ out of the cell and 2 K+ into the cell, both against their concentration gradients.", ["atp", "against", "gradient", "3 na", "sodium"]],
      ["Explain how the pump helps create a membrane potential.", "It moves more positive charges out (3) than in (2), so the inside of the cell becomes more negative than the outside, which builds a voltage across the membrane.", ["negative", "charge", "voltage", "membrane potential"]],
      ["Explain how a cotransporter can move glucose against its gradient without using ATP directly.", "It uses an ion gradient made by a pump: as Na+ or H+ flows back down its gradient through the cotransporter, the protein carries glucose with it (secondary active transport).", ["gradient", "cotransport", "secondary", "down"]],
      ["Predict what would happen to Na+ and K+ levels if a drug stopped ATP production, and justify your prediction.", "Na+ would leak in and K+ would leak out until the concentrations evened out, because the pump could no longer move them against their gradients without ATP.", ["even out", "equal", "leak", "run down"]],
    ]),
  ]);

  /* ---------- Unit 3: Energetics ---------- */
  add("u3", [
    P(["3.1a", "3.1b"], "", [
      ["Describe the difference between an exergonic and an endergonic reaction.", "An exergonic reaction releases free energy (negative ΔG) and is spontaneous. An endergonic reaction requires free energy (positive ΔG) and is not spontaneous.", ["release", "negative", "positive", "spontaneous", "require"]],
      ["Explain how cells use ATP to drive endergonic reactions.", "ATP hydrolysis is exergonic. The cell couples it to the endergonic reaction, often by transferring a phosphate to a reactant, so the overall ΔG is negative.", ["hydrolysis", "coupl", "phosphat", "overall"]],
      ["Explain how the second law of thermodynamics applies to living things.", "Every energy transfer loses some energy as heat, which increases entropy, so organisms need a constant input of energy from food or light to stay organized.", ["entropy", "heat", "disorder", "input"]],
      ["Explain how an enzyme affects activation energy and ΔG.", "An enzyme lowers the activation energy so the reaction goes faster, but it does not change ΔG, because the energy of the reactants and products stays the same.", ["activation energy", "lower", "does not change", "same"]],
    ]),
    P(["3.1c"], "A 20 g mouse and a 5,000 kg elephant are both endotherms. A lizard with the same mass as the mouse is an ectotherm.", [
      ["Identify which animal has the higher metabolic rate per gram of body mass, the mouse or the elephant.", "The mouse has the higher metabolic rate per gram.", ["mouse"]],
      ["Explain why that animal has a higher metabolic rate per gram.", "The mouse has a much higher surface area-to-volume ratio, so it loses heat faster and must burn more energy per gram to keep its body temperature up.", ["surface area", "heat", "ratio", "lose"]],
      ["Explain why the lizard needs less food than the mouse.", "The lizard is an ectotherm that gets body heat from its environment instead of making it through metabolism, so it spends far less energy keeping warm.", ["ectotherm", "environment", "less energy", "heat"]],
      ["Predict how the mouse's oxygen use changes if it moves from 25 °C to 5 °C, and justify your prediction.", "Oxygen use would increase, because the mouse would speed up cellular respiration to make more heat and keep its body temperature constant.", ["increase", "respiration", "more heat"]],
    ]),
    P(["3.2a", "3.2b"], "", [
      ["Identify where glycolysis, the Krebs cycle, and the electron transport chain occur in a eukaryotic cell.", "Glycolysis occurs in the cytosol, the Krebs cycle in the mitochondrial matrix, and the electron transport chain in the inner mitochondrial membrane.", ["cytosol", "cytoplasm", "matrix", "inner membrane", "inner mitochondrial"]],
      ["Describe the role of NADH and [[FADH2]] in cellular respiration.", "They are electron carriers that pick up high-energy electrons during glycolysis and the Krebs cycle and deliver them to the electron transport chain.", ["electron carrier", "electrons", "electron transport"]],
      ["Explain how the electron transport chain leads to ATP synthesis.", "As electrons pass down the chain, the energy released pumps H+ into the intermembrane space. The H+ then flows back through ATP synthase, which uses that flow to make ATP (chemiosmosis).", ["h+", "proton", "gradient", "atp synthase", "chemiosmosis"]],
      ["Predict the effect of a drug that makes the inner mitochondrial membrane leaky to H+, and justify your prediction.", "ATP production would decrease and more energy would be released as heat, because H+ would leak back without passing through ATP synthase, so the gradient could not drive ATP synthesis.", ["less atp", "decrease", "heat", "leak"]],
    ]),
    P(["3.2c"], "", [
      ["Describe what happens to pyruvate in lactic acid fermentation.", "NADH gives its electrons to pyruvate, reducing it to lactate and turning NADH back into NAD+.", ["lactate", "lactic", "nad+"]],
      ["Explain why fermentation lets glycolysis continue without oxygen.", "Glycolysis needs NAD+ to accept electrons. Without oxygen the electron transport chain stops and NADH builds up, so fermentation regenerates NAD+ and glycolysis keeps making its 2 ATP.", ["nad+", "regenerat", "recycle"]],
      ["Explain why aerobic respiration makes much more ATP per glucose than fermentation.", "Fermentation only makes the 2 ATP from glycolysis. Aerobic respiration also breaks pyruvate down fully in the Krebs cycle and uses oxygen as the final electron acceptor in the electron transport chain, making about 30–32 ATP.", ["oxygen", "final electron acceptor", "krebs", "30"]],
      ["Predict whether yeast in a sealed jar of sugar water will keep producing [[CO2]] after the oxygen runs out, and justify your prediction.", "Yes. Without oxygen the yeast switch to alcohol fermentation, which turns pyruvate into ethanol and releases [[CO2]].", ["ethanol", "alcohol", "yes"]],
    ]),
    P(["3.3a", "3.3b"], "", [
      ["Explain why most plant leaves look green.", "Chlorophyll absorbs mostly red and blue light and reflects green light, so the green wavelengths are what reach our eyes.", ["reflect", "absorb", "chlorophyll"]],
      ["Describe the role of water in the light reactions.", "Water is split (photolysis) to replace the electrons lost by photosystem II, which releases [[O2]] and H+.", ["split", "photolysis", "electron", "oxygen", "o2"]],
      ["Explain how the light reactions make ATP.", "Electrons moving through the electron transport chain in the thylakoid membrane pump H+ into the thylakoid space. The H+ flows back out to the stroma through ATP synthase, which makes ATP.", ["thylakoid", "h+", "atp synthase", "gradient"]],
      ["Predict the effect of a herbicide that blocks electron flow out of photosystem II, and justify your prediction.", "The plant would stop making ATP and NADPH, because no electrons would flow to build the H+ gradient or reduce NADP+. Without them the Calvin cycle would also stop, so the plant could not make sugar.", ["nadph", "atp", "calvin", "stop"]],
    ]),
    P(["3.3c"], "", [
      ["Identify the enzyme that fixes [[CO2]] in the Calvin cycle.", "Rubisco fixes [[CO2]] by attaching it to RuBP.", ["rubisco"]],
      ["Describe what the Calvin cycle uses from the light reactions.", "It uses ATP and NADPH from the light reactions to turn the fixed carbon into the sugar G3P.", ["atp", "nadph"]],
      ["Explain why the Calvin cycle stops soon after the lights go off, even though it does not use light directly.", "It depends on ATP and NADPH from the light reactions, so once these run out in the dark it cannot make G3P or regenerate RuBP.", ["atp", "nadph", "run out", "light reactions"]],
      ["Predict what would happen to the amount of RuBP if [[CO2]] were suddenly removed, and justify your prediction.", "RuBP would build up, because it keeps being regenerated from G3P but is no longer being used up by rubisco to fix [[CO2]].", ["build up", "increase", "accumulate"]],
    ]),
  ]);

  /* ---------- Unit 4: Cell Communication & Cell Cycle ---------- */
  add("u4", [
    P(["4.1a", "4.1b"], "Epinephrine binds a G protein-coupled receptor on liver cells. The G protein activates adenylyl cyclase, which makes cAMP. cAMP activates protein kinase A, which leads to glycogen breakdown.", [
      ["Identify the second messenger in this pathway.", "cAMP is the second messenger.", ["camp"]],
      ["Explain why epinephrine does not need to enter the cell to have an effect.", "Epinephrine is a hydrophilic signal that binds a receptor on the cell surface. The receptor changes shape and passes the signal inside through the pathway.", ["surface", "receptor", "shape", "hydrophilic", "polar"]],
      ["Explain how a phosphorylation cascade amplifies the signal.", "Each activated kinase phosphorylates and activates many molecules of the next kinase, so one epinephrine molecule can lead to the breakdown of a huge amount of glycogen.", ["amplif", "many", "phosphorylat", "kinase"]],
      ["Predict the effect of a mutation that keeps the G protein from hydrolyzing GTP, and justify your prediction.", "Glycogen breakdown would continue even without epinephrine, because the G protein would stay bound to GTP and keep activating adenylyl cyclase.", ["stay on", "continue", "always active", "constant"]],
    ]),
    P(["4.1c", "4.1d"], "", [
      ["Describe the difference between paracrine and endocrine signaling.", "Paracrine signals act on nearby cells over short distances, while endocrine signals (hormones) travel through the blood to target cells far away.", ["nearby", "local", "blood", "hormone", "far"]],
      ["Describe how negative feedback regulates blood glucose.", "When blood glucose rises, the pancreas releases insulin, so cells take in glucose and the liver stores it as glycogen, bringing glucose back down. When glucose falls, glucagon raises it again.", ["insulin", "glucagon", "negative feedback", "back down"]],
      ["Explain how positive feedback differs from negative feedback, using childbirth as an example.", "Positive feedback amplifies a change instead of reversing it: the baby pushing on the cervix triggers oxytocin release, which causes stronger contractions and more pushing, until birth.", ["oxytocin", "amplif", "stronger", "reversing"]],
      ["Predict what would happen to blood glucose in a person whose cells lack insulin receptors, and justify your prediction.", "Blood glucose would stay high, because without receptors the cells cannot respond to insulin and take in glucose, even when insulin is present.", ["high", "cannot respond", "can't respond"]],
    ]),
    P(["4.2a", "4.2b"], "", [
      ["Describe what happens during S phase.", "DNA is replicated, so each chromosome becomes two identical sister chromatids.", ["replicat", "sister chromatid", "copied"]],
      ["Explain the role of cyclins and CDKs in the cell cycle.", "Cyclin levels rise and fall during the cycle. When a cyclin binds a CDK it activates the kinase, which phosphorylates proteins that push the cell past a checkpoint into the next phase.", ["cyclin", "cdk", "kinase", "phosphorylat", "checkpoint"]],
      ["Explain why the M checkpoint is important.", "It makes sure every chromosome is attached to spindle fibers before anaphase, so each daughter cell gets a complete set of chromosomes.", ["spindle", "attach", "anaphase", "complete"]],
      ["Predict what happens to a cell with damaged DNA at the G1 checkpoint, and justify your prediction.", "The cell stops dividing to repair the damage, or undergoes apoptosis if it cannot be fixed, because proteins like p53 halt the cycle to prevent copying damaged DNA.", ["g0", "p53", "apoptosis", "repair", "stop"]],
    ]),
    P(["4.2c"], "", [
      ["Describe the process of apoptosis.", "Apoptosis is programmed cell death. Enzymes called caspases take the cell apart in an orderly way, and the pieces are packaged and eaten by other cells without harming nearby tissue.", ["programmed", "caspase", "orderly"]],
      ["Explain why apoptosis is important during development.", "It removes cells that are not needed, such as the webbing between a human embryo's fingers, which shapes body parts.", ["webbing", "finger", "remove", "shape"]],
      ["Explain how a mutation in the tumor suppressor gene p53 can lead to cancer.", "p53 normally stops the cycle or triggers apoptosis when DNA is damaged. If it is mutated, damaged cells keep dividing and build up more mutations.", ["p53", "damaged", "keep dividing", "apoptosis"]],
      ["Describe the difference between proto-oncogenes and tumor suppressor genes.", "Proto-oncogenes promote normal cell division and cause cancer when they become overactive oncogenes (a stuck gas pedal). Tumor suppressor genes slow division and cause cancer when they are inactivated (broken brakes).", ["proto-oncogene", "oncogene", "promote", "slow", "brake"]],
    ]),
  ]);

  /* ---------- Unit 5: Heredity ---------- */
  add("u5", [
    P(["5.1b", "5.1a"], "", [
      ["Describe two differences between mitosis and meiosis.", "Mitosis makes two diploid cells identical to the parent cell. Meiosis has two divisions and makes four haploid cells that are genetically different from each other.", ["haploid", "diploid", "four", "identical"]],
      ["Explain how crossing over increases genetic variation.", "During prophase I, homologous chromosomes swap segments, creating chromatids with new combinations of alleles from both parents.", ["homologous", "swap", "exchange", "new combination", "prophase i"]],
      ["Explain how independent assortment increases genetic variation.", "Homologous pairs line up randomly at metaphase I, so each gamete gets a random mix of maternal and paternal chromosomes (over 8 million combinations in humans).", ["random", "metaphase i", "maternal", "paternal"]],
      ["An organism has a diploid number of 12. Predict the chromosome number in its gametes, and justify your prediction.", "Each gamete has 6 chromosomes, because meiosis halves the chromosome number so gametes are haploid.", ["6", "six", "haploid"]],
    ]),
    P(["5.1c"], "In pea plants, round seeds (R) are dominant to wrinkled (r), and yellow seeds (Y) are dominant to green (y). A plant heterozygous for both traits is crossed with a plant that has wrinkled, green seeds.", [
      ["Identify the genotypes of both parent plants.", "The parents are RrYy and rryy.", ["rryy"]],
      ["Predict the expected phenotype ratio of the offspring, and justify your prediction.", "1 round yellow : 1 round green : 1 wrinkled yellow : 1 wrinkled green (1:1:1:1), because the RrYy parent makes four gamete types equally and the other parent only gives ry.", ["1:1:1:1", "equal"]],
      ["Explain why this type of cross is useful.", "It is a testcross. The homozygous recessive parent only passes on recessive alleles, so the offspring's phenotypes reveal exactly which alleles the other parent passed on.", ["testcross", "test cross", "recessive"]],
      ["Describe how the results would change if the two genes were linked and close together.", "Most offspring would be parental types (round yellow and wrinkled green) with only a few recombinants, because linked genes are usually inherited together.", ["parental", "recombinant", "together"]],
    ]),
    P(["5.2a", "5.2b"], "", [
      ["Describe the difference between incomplete dominance and codominance.", "In incomplete dominance the heterozygote shows a blend, like red × white giving pink. In codominance both alleles show fully, like AB blood type showing both A and B antigens.", ["blend", "pink", "both", "ab"]],
      ["A colorblind man (XbY) and a carrier woman (XBXb) have a son. Calculate the probability that the son is colorblind.", "The probability is 1/2, because a son gets his X from his mother, and she has a 50% chance of passing on Xb.", ["1/2", "50"]],
      ["Explain why X-linked recessive traits are more common in males.", "Males have only one X chromosome, so a single recessive allele shows up, while females need two copies to show the trait.", ["one x", "only one", "two copies"]],
      ["Explain how the environment can affect phenotype, using an example.", "Hydrangea flower color depends on soil pH: acidic soil gives blue flowers and basic soil gives pink flowers, even with the same genotype.", ["hydrangea", "soil", "temperature", "environment"]],
    ]),
    P(["5.2c", "5.2d"], "A testcross produces 1,000 offspring: 410 AaBb, 415 aabb, 90 Aabb, and 85 aaBb.", [
      ["Identify the recombinant offspring.", "Aabb and aaBb are the recombinant offspring, since they are the least common.", ["recombinant", "least", "fewest"]],
      ["Calculate the recombination frequency and the map distance between the genes.", "(90 + 85) / 1,000 = 0.175, so the recombination frequency is 17.5% and the genes are 17.5 map units apart.", ["17.5"]],
      ["Explain why genes that are farther apart have a higher recombination frequency.", "There is more distance between them where crossing over can happen, so they are more likely to be separated during prophase I.", ["crossover", "crossing over", "more likely", "distance"]],
      ["Describe how nondisjunction can cause Down syndrome.", "If the chromosome 21 homologs or sister chromatids fail to separate during meiosis, a gamete gets an extra copy, and fertilization produces a zygote with three copies (trisomy 21).", ["fail to separate", "trisomy", "extra", "three copies"]],
    ]),
  ]);

  /* ---------- Unit 6: Gene Expression ---------- */
  add("u6", [
    P(["6.1a", "6.1b"], "", [
      ["Describe the result of Griffith's experiment.", "Heat-killed smooth (deadly) bacteria mixed with live rough (harmless) bacteria killed the mice, showing the rough bacteria were transformed by something from the dead smooth bacteria.", ["transform", "heat-killed", "smooth", "rough"]],
      ["Explain how Hershey and Chase showed that DNA is the genetic material.", "They labeled phage DNA with radioactive phosphorus and phage protein with radioactive sulfur. Only the phosphorus entered the bacteria, which showed DNA carries the instructions to make new phages.", ["phosphorus", "sulfur", "radioactive"]],
      ["Explain why Chargaff's rules (A = T and G = C) make sense.", "A always pairs with T and G with C through hydrogen bonds, so their amounts are equal in double-stranded DNA.", ["pair", "hydrogen bond", "complementary"]],
      ["Explain why DNA rich in G-C pairs is harder to separate than DNA rich in A-T pairs.", "G-C pairs have three hydrogen bonds and A-T pairs have two, so more energy is needed to separate G-C rich DNA.", ["three", "3 hydrogen", "two"]],
    ]),
    P(["6.1c"], "", [
      ["Describe the roles of helicase, DNA polymerase III, and ligase in replication.", "Helicase unzips the DNA by breaking hydrogen bonds. DNA polymerase III adds nucleotides to the 3' end of the new strand. Ligase joins Okazaki fragments together.", ["helicase", "polymerase", "ligase", "okazaki"]],
      ["Explain why one new strand is made in Okazaki fragments.", "DNA polymerase can only build in the 5' to 3' direction, so the lagging strand, which runs the opposite way, has to be made in short pieces as the fork opens.", ["5' to 3'", "direction", "lagging", "opposite"]],
      ["Describe what semiconservative replication means.", "Each new DNA molecule has one original parent strand and one newly made strand.", ["one original", "old strand", "parent strand", "new strand"]],
      ["Predict what happens if primase does not work, and justify your prediction.", "Replication could not start, because DNA polymerase can only add to an existing 3' end, and primase makes the RNA primer that provides it.", ["primer", "can't start", "cannot start", "could not start"]],
    ]),
    P(["6.2a", "6.2b"], "", [
      ["Describe how a eukaryotic pre-mRNA is processed before it leaves the nucleus.", "A 5' cap and a poly-A tail are added, and introns are spliced out so only the exons remain.", ["5' cap", "poly-a", "intron", "splic", "exon"]],
      ["Explain why the genetic code is described as redundant.", "There are 64 codons but only 20 amino acids, so most amino acids are coded for by more than one codon.", ["64", "20", "more than one", "redundan"]],
      ["Describe the role of tRNA in translation.", "Each tRNA carries a specific amino acid and has an anticodon that pairs with the matching mRNA codon, bringing the right amino acid to the ribosome.", ["anticodon", "amino acid", "codon"]],
      ["Predict the effect of a mutation that creates a stop codon early in a gene, and justify your prediction.", "The protein would be cut short and probably not work, because translation ends at the stop codon (a nonsense mutation).", ["short", "nonsense", "not work", "truncat"]],
    ]),
    P(["6.2c"], "", [
      ["Describe the state of the lac operon when lactose is absent.", "The repressor binds the operator and blocks RNA polymerase, so the genes for breaking down lactose are not transcribed.", ["repressor", "operator", "block"]],
      ["Explain how lactose turns the lac operon on.", "Allolactose binds the repressor and changes its shape so it releases the operator, letting RNA polymerase transcribe the genes.", ["allolactose", "shape", "falls off", "release"]],
      ["Explain the difference between an inducible operon and a repressible operon.", "An inducible operon like lac is normally off and is turned on by a signal. A repressible operon like trp is normally on and is turned off when its product, tryptophan, builds up.", ["inducible", "repressible", "normally off", "normally on", "trp"]],
      ["Predict the result of an operator mutation that keeps the repressor from binding, and justify your prediction.", "The lac genes would be transcribed all the time, even without lactose, because the repressor could never block RNA polymerase.", ["always", "all the time", "constant", "even without"]],
    ]),
    P(["6.2d"], "", [
      ["Describe how DNA methylation and histone acetylation affect gene expression.", "Methylation usually silences genes by keeping chromatin tightly packed. Histone acetylation loosens chromatin so the genes are easier to transcribe.", ["methylation", "acetylation", "loosen", "tight"]],
      ["Explain how alternative splicing lets one gene make several proteins.", "Different combinations of exons can be kept in the mature mRNA, so one gene produces different mRNAs and therefore different proteins.", ["exon", "combination", "different"]],
      ["Explain how cells with the same DNA, like muscle and nerve cells, become different.", "Different cells express different genes because they contain different transcription factors, so they make different proteins.", ["transcription factor", "express", "different genes"]],
      ["Describe one way gene expression can be regulated after translation.", "Proteins can be activated by modification, such as phosphorylation or cleavage, or tagged with ubiquitin and broken down by proteasomes.", ["ubiquitin", "proteasome", "phosphorylat", "cleav", "broken down"]],
    ]),
    P(["6.3a", "6.3b"], "", [
      ["Describe the difference between a substitution and a frameshift mutation.", "A substitution changes one base. A frameshift inserts or deletes bases (not in a multiple of 3), shifting the reading frame so every codon after it changes.", ["one base", "reading frame", "insert", "delet"]],
      ["Explain why a frameshift mutation usually has a bigger effect than a substitution.", "It changes every codon after the mutation, so many amino acids change and an early stop codon may appear, while a substitution changes at most one amino acid, or none if it is silent.", ["every codon", "many amino acids", "silent", "reading frame"]],
      ["Explain how bacteria can gain genetic variation without sexual reproduction.", "Through transformation (taking up DNA from the environment), transduction (viruses carrying DNA between cells), and conjugation (passing plasmids through a pilus), along with mutations.", ["transformation", "transduction", "conjugation", "plasmid"]],
      ["Explain why mutations are the original source of new alleles.", "Mutations change the DNA sequence itself, which creates new alleles, while processes like crossing over only shuffle alleles that already exist.", ["new allele", "shuffle", "dna sequence"]],
    ]),
  ]);

  /* ---------- Unit 7: Natural Selection ---------- */
  add("u7", [
    P(["7.1a", "7.1b"], "A population of beetles lives on dark tree bark. Most beetles are dark and a few are light. Birds eat the beetles they can see most easily.", [
      ["Identify the selective pressure in this population.", "Predation by birds is the selective pressure.", ["bird", "predation", "predator"]],
      ["Explain how natural selection would change this population over many generations.", "Light beetles are seen and eaten more often, so dark beetles survive and reproduce more and pass on the dark allele. Over generations the frequency of the dark allele rises.", ["survive", "reproduce", "allele frequency", "pass on"]],
      ["Explain why an individual beetle cannot evolve.", "Evolution is a change in allele frequencies in a population over generations. An individual's genes do not change during its life, so only populations evolve.", ["population", "allele frequenc", "generation"]],
      ["Describe one type of evidence for common ancestry.", "Homologous structures, like the same arm bones in humans and whale flippers, along with shared DNA sequences and similar embryos, show that organisms came from a common ancestor.", ["homologous", "dna", "embryo", "fossil", "vestigial"]],
    ]),
    P(["7.1c"], "In a population of 1,000 flowers, 160 are white (recessive, aa) and the rest are red. Assume Hardy-Weinberg equilibrium.", [
      ["Calculate the frequency of the recessive allele (q).", "q² = 160/1,000 = 0.16, so q = 0.4.", ["0.4"]],
      ["Calculate the number of heterozygous flowers.", "p = 1 − 0.4 = 0.6, and 2pq = 2(0.6)(0.4) = 0.48, so 480 flowers are heterozygous.", ["480", "0.48"]],
      ["Describe two conditions required for Hardy-Weinberg equilibrium.", "No mutation, random mating, no natural selection, a very large population (no genetic drift), and no gene flow.", ["random mating", "no mutation", "large population", "no selection", "no natural selection", "no gene flow", "no migration"]],
      ["Predict how q would change if herbivores ate white flowers more often, and justify your prediction.", "q would decrease, because white (aa) plants would leave fewer offspring and pass on fewer a alleles.", ["decrease", "fewer", "lower"]],
    ]),
    P(["7.1d"], "", [
      ["Describe the bottleneck effect.", "A disaster sharply reduces a population's size, so the survivors' alleles, kept by chance, make up the new gene pool, which has less variation.", ["disaster", "reduc", "chance", "less variation"]],
      ["Explain why genetic drift has a bigger effect in small populations.", "In a small population, chance events that remove a few individuals change allele frequencies a lot, while in a large population those random effects average out.", ["chance", "random", "small", "average out"]],
      ["Explain how gene flow affects the differences between two populations.", "Gene flow moves alleles between populations when individuals migrate, which makes the populations more genetically similar.", ["migrat", "similar", "move alleles", "moves alleles"]],
      ["Describe the difference between directional and stabilizing selection.", "Directional selection favors one extreme phenotype and shifts the average. Stabilizing selection favors the average phenotype and reduces variation, as with human birth weight.", ["extreme", "average", "intermediate", "shift"]],
    ]),
    P(["7.2a", "7.2b"], "", [
      ["Describe the biological species concept.", "A species is a group of populations whose members can interbreed in nature and produce fertile offspring.", ["interbreed", "fertile"]],
      ["Explain how allopatric speciation happens.", "A geographic barrier separates a population. Each group faces different selection, mutations, and drift, so over time they become reproductively isolated.", ["geographic", "barrier", "isolat", "separate"]],
      ["Describe one prezygotic barrier and one postzygotic barrier.", "Prezygotic: mating in different seasons (temporal isolation) keeps mating from happening. Postzygotic: hybrid sterility, like the mule, keeps hybrids from having offspring.", ["prezygotic", "postzygotic", "temporal", "behavioral", "steril", "mule"]],
      ["Explain how polyploidy can cause sympatric speciation in plants.", "An error in meiosis makes gametes with extra chromosome sets. The polyploid plant cannot produce fertile offspring with the parent species, so a new species forms in the same area.", ["polyploid", "extra", "same area", "meiosis"]],
    ]),
    P(["7.2c", "7.2d"], "Number of amino acid differences in cytochrome c compared with humans: chimpanzee 0, rhesus monkey 1, dog 11, chicken 13, yeast 45.", [
      ["Identify the organism most closely related to humans other than the chimpanzee.", "The rhesus monkey, with only 1 difference.", ["rhesus", "monkey"]],
      ["Explain why fewer differences show a closer relationship.", "Mutations build up over time, so species that shared a common ancestor more recently have had less time to build up differences.", ["common ancestor", "recent", "time", "mutation"]],
      ["Describe what a node on a phylogenetic tree represents.", "A node represents the most recent common ancestor of the groups that branch from it.", ["common ancestor", "ancestor"]],
      ["Describe one piece of evidence about how organic molecules formed on early Earth.", "The Miller-Urey experiment made amino acids from simple gases (methane, ammonia, hydrogen, and water vapor) with electric sparks, suggesting early Earth's conditions could produce organic molecules.", ["miller", "urey", "spark", "amino acid", "rna world"]],
    ]),
  ]);

  /* ---------- Unit 8: Ecology ---------- */
  add("u8", [
    P(["8.1"], "A deer population of 200 has a per capita growth rate (r) of 0.2 per year. The carrying capacity (K) is 800.", [
      ["Calculate the population's growth in one year using the exponential growth model.", "dN/dt = rN = 0.2 × 200 = 40 deer per year.", ["40"]],
      ["Calculate the population's growth in one year using the logistic growth model.", "dN/dt = rN(K − N)/K = 0.2 × 200 × (800 − 200)/800 = 40 × 0.75 = 30 deer per year.", ["30"]],
      ["Explain why population growth slows as N gets close to K.", "Resources like food and space become limited, so competition increases, birth rates fall, and death rates rise.", ["resource", "limit", "competition"]],
      ["Describe one density-dependent factor that limits population size.", "Disease, which spreads faster in crowded populations. Competition and predation also have stronger effects at high density.", ["disease", "competition", "predation", "density"]],
    ]),
    P(["8.2", "8.3"], "The grass in a grassland stores 10,000 kcal of energy.", [
      ["Calculate the energy available to tertiary consumers using the 10% rule.", "Primary consumers get 1,000 kcal, secondary consumers 100 kcal, and tertiary consumers 10 kcal.", ["10 kcal"]],
      ["Explain why only about 10% of energy passes to the next trophic level.", "Most energy is used for cellular respiration and lost as heat, or is never eaten or digested, so only about 10% is stored as new biomass.", ["heat", "respiration", "not eaten", "never eaten", "biomass"]],
      ["Explain why food chains rarely have more than four or five levels.", "So little energy reaches the top level that there is not enough to support another level of consumers.", ["energy", "not enough", "little"]],
      ["Describe how nitrogen-fixing bacteria help cycle matter.", "They convert nitrogen gas ([[N2]]) from the air into ammonia, which plants use to make proteins and nucleic acids.", ["ammonia", "nitrogen gas", "n2", "fix"]],
    ]),
    P(["8.4", "8.2"], "", [
      ["Describe a keystone species, using an example.", "A keystone species has a large effect on its community compared with its numbers, like sea otters that keep sea urchins from destroying kelp forests.", ["sea otter", "otter", "large effect", "keystone"]],
      ["Explain why ecosystems with high biodiversity are more resilient.", "More species means more of them can fill each role, so if one species is lost, others can take its place and the ecosystem keeps working.", ["more species", "resilien", "take its place", "role"]],
      ["Explain how fertilizer runoff can create a dead zone in a lake.", "Extra nitrogen and phosphorus cause an algal bloom. When the algae die, decomposers use up the oxygen, so fish and other organisms suffocate (eutrophication).", ["algae", "algal", "oxygen", "eutrophication", "decompos"]],
      ["Predict the effect of an invasive species with no natural predators, and justify your prediction.", "It would grow rapidly and outcompete native species for resources, lowering biodiversity, because nothing keeps its population in check.", ["outcompete", "native", "biodiversity", "no predators"]],
    ]),
  ]);
})();
