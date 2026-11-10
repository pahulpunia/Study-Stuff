/* AP Biology · "A closer look": extra explanation added to every section's notes.
   Each entry is a list of paragraphs for one section. A paragraph that starts with "!" is shown as a
   common-mistake warning. Content follows Ms. Ravuri's notes; it explains the why behind them. */
(() => {
const plus = (unit, secs) => Study.extendUnit("apbio", unit, {notes: Object.fromEntries(Object.entries(secs).map(([sec, list]) =>
  [sec, [{h:"A closer look"}, ...list.map(t => t[0] === "!" ? {warn: t.slice(1)} : {p: t})]]))});

plus("u0", {
  "0.1": ["The reason for a control group is comparison. If the fish moved to a 20°C bowl also changed its breathing rate, then simply being moved (not temperature) is having an effect, and you'd know to subtract that out. Without the control you couldn't tell.",
    "More trials and bigger samples matter because any single fish could be unusual. Averaging many fish cancels out individual quirks, which is also why the second version of the goldfish experiment used 8 fish per group and reported a mean with an SEM.",
    "!A control group is not the same as the constants. Constants are conditions kept the same for every group (bowl size, fish species). The control group is one of the groups: the one that doesn't get the treatment."],
  "0.2": ["Ask two questions to choose a graph. First, is the x-axis variable a set of categories or a number on a scale? Categories mean a bar graph. Second, if both axes are numbers, do you care about the overall trend (scatter plot with a best-fit line) or about what happened between one measurement and the next (line graph)?",
    "A box plot is useful for comparing groups because it shows the middle 50% of the data (the box, from Q1 to Q3) and the full range (the whiskers) at once. Two groups whose boxes barely overlap are behaving differently; two whose boxes sit on top of each other are not.",
    "!Don't force a best-fit line through the origin or through the first and last points. It only has to pass through the middle of the cloud of points."],
  "0.3": ["Think of the mean ± 2 SEM range as the zone where the true population mean very probably is (95% confidence). If two zones overlap, the two true means could be the same number, so you can't claim a difference. If they don't overlap, the same number can't be in both zones, so the difference is real.",
    "SEM shrinks as sample size grows, because a bigger sample pins down the mean more precisely. That's why two groups with the same means can go from \"not significant\" to \"significant\" just by collecting more data.",
    "!\"Not statistically significant\" does not mean \"no difference exists.\" It means the data can't rule out chance."],
  "0.4": ["χ² measures how far the observed counts are from the expected counts, scaled by the expected count. Squaring makes every difference positive and punishes big misses more than small ones. A χ² of 0 means the data matched the prediction perfectly; the bigger χ² gets, the worse the fit.",
    "The critical value is the cut-off for \"too big to be chance.\" More categories give more chances for random differences to add up, so the critical value rises with the degrees of freedom.",
    "!Expected values come from the null hypothesis and the total count, not from the observed data. For a 3:1 ratio with 140 offspring, expect 105 and 35, even if you saw 78 and 62. Always use counts, never percents, in the formula."]
});

plus("u1", {
  "1.1a": ["Polarity comes from unequal sharing. Oxygen and nitrogen pull shared electrons more strongly than carbon or hydrogen do, so an O–H or N–H bond has a slightly negative end and a slightly positive end. Molecules with many such bonds (sugars, water) are polar; molecules made almost entirely of C–C and C–H bonds (fats, oils) are nonpolar.",
    "\"Like dissolves like\" works because water molecules stick to anything with a charge or partial charge. They surround ions and polar molecules and pull them into solution. Nonpolar molecules give water nothing to grab, so water molecules stick to each other instead and push the nonpolar ones together. That is all \"hydrophobic\" means.",
    "!Dissolving is not the same as bonds breaking. Sugar dissolves with every covalent bond intact; salt dissolves because its ionic bonds come apart."],
  "1.1b": ["Every property on the list is hydrogen bonding seen from a different angle. Molecules that cling to each other resist being pulled apart (cohesion, surface tension), resist speeding up (high specific heat) and resist escaping into the air (high heat of vaporization).",
    "Ice floats because, as water cools, its molecules slow down enough for each to lock into four stable hydrogen bonds. That fixed lattice holds the molecules farther apart than they sit in liquid water, so the solid is less dense.",
    "On an FRQ, name the property, tie it to hydrogen bonding, then give the biological result. Example: \"Water has a high specific heat because energy must first break hydrogen bonds; this keeps an organism's internal temperature stable.\""],
  "1.1c": ["The pH scale is logarithmic: each step is a 10× change in H⁺ concentration. Stomach acid at pH 2 has 10,000 times more H⁺ than urine at pH 6. That is why small pH changes matter so much to proteins.",
    "Dehydration and hydrolysis are the same reaction run in opposite directions. To join two monomers, one loses an –OH and the other an –H (together, H₂O), and the freed bonds connect. To split them, a water molecule is put back. Cells build with dehydration and digest with hydrolysis.",
    "!Count bonds, not monomers, when counting water molecules. A chain of n monomers has n − 1 bonds."],
  "1.2a": ["Humans can digest starch but not cellulose even though both are chains of glucose. Our enzymes fit the α linkage in starch; the β linkage in cellulose has a different shape, so the enzyme's active site can't bind it. Cows and termites rely on microbes that make the right enzyme.",
    "Glycogen is more highly branched than starch. More branches mean more ends where glucose can be clipped off at once, which suits animals that need energy quickly.",
    "!Structure, not ingredients, sets function. Starch, glycogen and cellulose have identical monomers and very different jobs."],
  "1.2b": ["Read the four levels as a chain of cause and effect. The sequence of amino acids (primary) decides where hydrogen bonds can form along the backbone (secondary) and which R groups end up near each other (tertiary). So a single change in primary structure can ripple all the way up to the shape of the whole protein.",
    "Secondary structure comes from the backbone, which is the same in every amino acid. Tertiary structure comes from the R groups, which differ. That's the quick way to tell them apart in a question.",
    "!Denaturation does not break peptide bonds. The chain is still the same length with the same sequence; it has just lost its folding."],
  "1.2c": ["The 5′ and 3′ labels are just the numbers of the sugar carbons. The 5′ carbon holds the phosphate; the 3′ carbon holds a free –OH. A new nucleotide's phosphate can only attach to that free 3′ –OH, which is why strands always grow 5′ → 3′. This one fact explains leading and lagging strands in Unit 6.",
    "A purine always pairs with a pyrimidine, so every rung of the ladder is three rings wide and the helix has a constant width. G–C pairs, with three hydrogen bonds, hold tighter than A–T pairs, so DNA rich in G and C takes more heat to separate.",
    "!Chargaff's rule (A = T, G = C) only holds for double-stranded DNA. In single-stranded DNA or RNA the bases aren't paired, so the percentages don't have to match."],
  "1.2d": ["Double bonds put kinks in a fatty acid tail. Kinked tails can't pack tightly, so unsaturated fats stay liquid; straight saturated tails pack like pencils in a box and form solids. The same idea controls membrane fluidity: more unsaturated tails make a more fluid membrane.",
    "Fats store more than twice as much energy per gram as carbohydrates because they are almost all C–H bonds, which release a lot of energy when oxidized. That makes fat the better long-term store and glycogen the quick one.",
    "!A phospholipid is not a triglyceride with a phosphate added on. It has two fatty acids, not three; the third position on the glycerol holds the phosphate head."],
  "1.3a": ["An enzyme lowers activation energy by holding the substrates in the right orientation, straining the bonds that need to break, or providing a favorable micro-environment in the active site. It does not change the energy of the reactants or products, so it can't make an unfavorable reaction favorable; it only gets a reaction to its end point faster.",
    "On a rate-versus-temperature graph the curve rises steadily and then drops off steeply: rising because of more collisions, dropping because the enzyme denatures. On a rate-versus-pH graph the curve is a hill centered on the optimum, because too many or too few H⁺ ions disrupt the charges that hold the active site in shape.",
    "!The rate levelling off at high substrate concentration is saturation, not denaturation. The enzymes are fine; they are simply all busy."],
  "1.3b": ["To tell the two inhibitors apart from data, look at what happens when substrate is added. If a high substrate concentration brings the rate back up to the normal maximum, the inhibitor was competing for the active site. If the maximum stays lower no matter how much substrate is added, the inhibitor is noncompetitive: it has changed the enzyme itself.",
    "Feedback inhibition is a negative feedback loop at the molecular level. The product is the signal, the first enzyme of the pathway is the target, and the response (less product) opposes the stimulus (too much product). When the product is used up it falls off the enzyme and the pathway restarts on its own.",
    "!Allosteric means \"other site.\" An allosteric regulator never binds the active site, whether it activates or inhibits."]
});

plus("u2", {
  "2.1a": ["Compartments are the real difference between the two cell types. A prokaryote runs all of its reactions in one shared space. A eukaryote separates them with membranes, so it can keep an acidic lysosome, a DNA-filled nucleus and an ATP-making mitochondrion in the same cell at the same time. That is what lets eukaryotic cells be so much larger.",
    "Ribosomes are in every cell because every cell must make proteins. They are not surrounded by a membrane, which is why prokaryotes can have them.",
    "!\"Prokaryotes have no organelles\" is too strong. They have no membrane-bound organelles; they do have ribosomes."],
  "2.1b": ["Follow a protein to see how the system works as a unit. Its mRNA leaves the nucleus through a pore; a ribosome on the rough ER threads the new chain into the ER lumen, where it folds; a vesicle buds off and fuses with the cis face of the Golgi; the Golgi modifies and sorts it; a vesicle leaves the trans face and fuses with the plasma membrane, releasing the protein. The membrane of the vesicle becomes part of the plasma membrane.",
    "Cell type predicts organelle content. Cells that secrete proteins (pancreas, antibody-producing cells) are packed with rough ER and Golgi. Cells that make steroid hormones or detoxify drugs (testes, liver) have extensive smooth ER. Cells that digest (macrophages) are full of lysosomes.",
    "!The Golgi does not make proteins. It modifies, sorts and ships what the ER made."],
  "2.1c": ["Both organelles are built around the same strategy: fold a membrane to get more surface area, then use that membrane to hold the proteins that make ATP. In mitochondria the folded membrane is the cristae; in chloroplasts it is the thylakoids.",
    "The double membrane is good evidence for endosymbiosis because of where the two layers come from. The inner membrane is the engulfed bacterium's own; the outer one is the piece of host membrane that wrapped around it during engulfing.",
    "!Plants do not use chloroplasts instead of mitochondria. Chloroplasts make sugar; mitochondria turn sugar into ATP. Plant cells need both."],
  "2.1d": ["The three junctions do three different jobs, so match the job to the name: tight junctions stop leaks between cells, desmosomes resist pulling forces, and gap junctions let neighboring cells share ions and small signals directly. Plasmodesmata are the plant version of gap junctions, needed because the cell wall would otherwise seal cells off from each other.",
    "The cytoskeleton is not a fixed scaffold. Its fibers are constantly assembled and taken apart, which is how a cell changes shape, moves vesicles along tracks and, in Unit 4, pulls chromosomes apart with spindle microtubules.",
    "!Animal cells have no cell wall. Their outer boundary is the plasma membrane."],
  "2.2a": ["Selective permeability follows from the structure. The middle of the bilayer is an oily, nonpolar zone. Small nonpolar molecules dissolve in it and pass through. Ions and polar molecules are repelled by it and need a protein with a hydrophilic channel or a binding site to get across.",
    "Surface area grows with the square of a cell's size while volume grows with the cube. Double the side of a cube and its surface area goes up 4× but its volume goes up 8×, so each unit of volume has half as much membrane serving it. Cells get around this by staying small, being long and thin, or folding their membranes.",
    "!A higher SA:V ratio means more efficient exchange. The smallest cell in a comparison nearly always wins."],
  "2.2b": ["The three tonicity words always describe the solution compared with the cell, and they refer to solute. Hypertonic means more solute outside. Water follows solute, so water leaves the cell. A reliable shortcut: water moves toward the hypertonic side.",
    "Plant and animal cells react differently to the same solution because of the cell wall. In a hypotonic solution an animal cell keeps swelling until it bursts; a plant cell swells until the wall pushes back, and that pressure (turgor) is what keeps the plant upright.",
    "!Facilitated diffusion is still passive. A protein is involved, but no energy is spent and the solute still moves down its gradient."],
  "2.2c": ["Solute lowers water potential because water molecules that are busy clinging to solute particles are less free to move. More dissolved particles mean fewer free water molecules and a more negative Ψ. That is why i matters: one NaCl gives two particles, so it lowers Ψ twice as much as one sucrose at the same molarity.",
    "Pressure works the other way. Squeezing water (as a rigid cell wall does to a swollen plant cell) raises its tendency to leave, so Ψp is positive. A turgid plant cell can be in equilibrium with pure water because its positive pressure potential cancels its negative solute potential.",
    "!\"Higher\" water potential means closer to zero. −4.95 bars is higher than −19.81 bars, so water flows from the −4.95 side to the −19.81 side."],
  "2.2d": ["The pump works by changing shape. Three Na⁺ bind from inside the cell; ATP donates a phosphate to the pump (phosphorylation), which flips it open to the outside and releases the Na⁺; two K⁺ bind; the phosphate comes off and the pump flips back, releasing K⁺ inside. Phosphorylation changing a protein's shape is the same trick used in cell signaling.",
    "The gradients the pump builds are stored energy, like water behind a dam. Cotransporters use that stored energy to drag other solutes uphill, and neurons use it to fire signals.",
    "!Carrier proteins appear in both passive and active transport. What makes transport active is moving against the gradient with an energy input, not the kind of protein."]
});

plus("u3", {
  "3.1a": ["Cells obey both laws of thermodynamics. They never create energy; they convert it (light to chemical, chemical to motion). And every conversion loses some energy as heat, which increases the disorder of the surroundings. An organism stays ordered only by taking in energy constantly and releasing heat and simpler waste molecules.",
    "!Living things do not violate the second law. They build order inside themselves by creating even more disorder outside."],
  "3.1b": ["ATP coupling works because the phosphate removed from ATP is usually transferred onto another molecule, not just released. The phosphorylated molecule is less stable and more reactive, so a reaction that would not happen by itself now runs downhill. The overall change in free energy for the two reactions together is negative.",
    "!Energy is not \"stored in the bond\" and released by breaking it. Breaking any bond costs energy; the release comes from the more stable products formed afterward."],
  "3.1c": ["Small animals have a higher metabolic rate per gram than large ones because they have more surface area for their volume and lose heat faster. A mouse burns far more energy per gram than an elephant, though the elephant uses more in total.",
    "Endotherms pay a high, steady energy cost to keep their temperature constant, which lets them stay active in the cold. Ectotherms spend far less energy but depend on the environment for warmth."],
  "3.2a": ["Glycolysis and the Krebs cycle make very little ATP directly. Their main output is high-energy electrons carried by NADH and FADH₂. Think of these stages as stripping electrons from glucose and loading them onto carriers; the payoff comes later at the electron transport chain.",
    "!Glycolysis does not need oxygen and happens in the cytosol. Only the stages in the mitochondrion depend on oxygen."],
  "3.2b": ["The electron transport chain does not make ATP itself. It uses the energy of electrons to pump H⁺ into the intermembrane space, building a gradient. ATP synthase then lets H⁺ flow back down that gradient and uses the flow to attach phosphate to ADP. Oxygen's only job is to take the spent electrons at the end, forming water, so the chain doesn't back up.",
    "!Without oxygen the chain stops, the gradient is not rebuilt and ATP synthase stops, even though ATP synthase never touches oxygen."],
  "3.2c": ["Fermentation exists to recycle NAD⁺. Glycolysis needs NAD⁺ to accept electrons; with no oxygen, NADH piles up and glycolysis would halt. Fermentation hands those electrons to pyruvate (making lactate or ethanol), freeing NAD⁺ so glycolysis can keep making its 2 ATP.",
    "!Fermentation makes no additional ATP. All the ATP comes from glycolysis."],
  "3.3a": ["A leaf looks green because chlorophyll absorbs red and blue-violet light and reflects green. Accessory pigments absorb other wavelengths and pass the energy along, widening the range of light a plant can use. The action spectrum (rate of photosynthesis at each wavelength) therefore matches the combined absorption of all the pigments.",
    "!Photosynthesis is slowest, not fastest, in green light."],
  "3.3b": ["The light reactions mirror cellular respiration: an electron transport chain in a membrane pumps H⁺ into an enclosed space (the thylakoid), and ATP synthase uses the gradient. The differences are the energy source (light instead of food) and the final electron acceptor (NADP⁺ instead of oxygen). Water is split to replace the electrons chlorophyll loses, which is where the O₂ comes from.",
    "!The oxygen released in photosynthesis comes from water, not from carbon dioxide."],
  "3.3c": ["The Calvin cycle spends the ATP and NADPH from the light reactions to attach CO₂ to an existing five-carbon molecule and reduce it to sugar. It doesn't use light directly, but it stops soon after dark because its supply of ATP and NADPH runs out.",
    "!The mass of a plant comes mostly from CO₂ in the air, fixed in the Calvin cycle, not from the soil."]
});

plus("u4", {
  "4.1a": ["Where a receptor sits tells you what its ligand is like. A ligand that can't cross the nonpolar interior of the membrane (large or polar, like insulin or epinephrine) must be caught at the surface. A ligand that can cross (small and nonpolar, like steroid hormones) can be met inside, and its receptor often goes straight to the DNA to change gene expression.",
    "The ligand never enters the cell in most membrane-receptor pathways. Only the message does: the receptor changes shape on the inside, and that shape change starts the relay.",
    "!A cell without the receptor cannot respond no matter how much ligand is present. Sensitivity depends on receptors, not on the signal."],
  "4.1b": ["A long pathway looks wasteful but buys three things. Amplification: each activated enzyme activates many of the next. Control: every step is a place where the cell can speed up, slow down or shut off the response. Specificity: different cells install different relay proteins, so one hormone can mean different things in different tissues.",
    "To predict the effect of a mutation or drug, find the broken step and ask what comes after it. Everything downstream of a blocked step stays off. A component stuck in the \"on\" position (for example a G protein that can't release GTP) keeps everything downstream active even with no ligand.",
    "!Kinases add phosphates; phosphatases remove them. Removing the phosphatase leaves a pathway stuck on, not off."],
  "4.1c": ["Classify signaling by asking how far the signal travels and whether anything is secreted. Nothing secreted, cells touching: juxtacrine. Secreted and received by the sender: autocrine. Secreted to neighbors: paracrine. Secreted into the blood for distant targets: endocrine.",
    "Quorum sensing lets single-celled organisms act like a group. One bacterium glowing or releasing a toxin achieves nothing; a dense population doing it together does. Tying gene expression to autoinducer concentration makes sure they only spend the energy when there are enough of them.",
    "!Hormones reach every cell through the blood, but only cells with the matching receptor respond."],
  "4.1d": ["Every feedback loop has the same parts: a stimulus (a variable moves off its set point), a sensor that detects it, and an effector that responds. To classify a loop, ask one question: does the response push the variable back toward the set point (negative) or further from it (positive)?",
    "Blood glucose is the standard negative feedback example and uses two hormones. High glucose triggers insulin, which moves glucose into cells and lowers it. Low glucose triggers glucagon, which makes the liver release glucose and raises it. Diabetes is what happens when the insulin half of the loop fails.",
    "!\"Positive\" does not mean good and \"negative\" does not mean bad. Negative feedback is what keeps you alive; positive feedback is used for events that need to run to completion."],
  "4.2a": ["Track two things separately: the number of chromosomes and the amount of DNA. In S phase the DNA doubles but the chromosome number does not, because the two copies (sister chromatids) are still joined at one centromere and count as one chromosome. At anaphase the chromatids separate and each is counted as its own chromosome.",
    "A human cell has 46 chromosomes in G1, 46 chromosomes (92 chromatids) in G2 and metaphase, briefly 92 chromosomes in anaphase, and 46 again in each daughter cell.",
    "!Interphase is not a resting phase. The cell is growing, copying its DNA and doing its normal job."],
  "4.2b": ["Checkpoints work like a series of locked doors, and an active cyclin-CDK complex is the key. A CDK is always present but does nothing until its cyclin partner accumulates. Once the complex has pushed the cell through the checkpoint, the cyclin is destroyed, which resets the lock for the next cycle.",
    "External and internal signals act by changing cyclin levels or by blocking the complex. Growth factors raise cyclin levels (go). DNA damage activates p53, which leads to inhibition of the complex (stop). Crowding removes the growth signals (stop).",
    "!On a graph, CDK concentration is a flat line. It is cyclin concentration, and therefore cyclin-CDK activity, that rises and falls."],
  "4.2c": ["Cancer usually needs several mutations in one cell line: at least one that speeds division and others that remove the safeguards. That is why it becomes more common with age, and why inheriting one faulty tumor suppressor allele raises risk without guaranteeing cancer.",
    "The two gene types behave differently at the genetic level. One overactive copy of a proto-oncogene is enough to push division (it acts like a dominant change). Tumor suppressors usually need both copies knocked out before the brake is gone (it acts like a recessive change).",
    "!A proto-oncogene is a normal, necessary gene. It only becomes an oncogene when mutated or overexpressed."]
});

plus("u5", {
  "5.1a": ["\"Diploid\" describes sets, not totals. A cell is diploid if every chromosome type comes in a matching pair, whatever the number. Copying the DNA in S phase does not make a cell tetraploid; it still has two sets, each now made of two chromatids.",
    "Homologous chromosomes carry the same genes in the same order, but the versions (alleles) can differ because one came from each parent. That difference is the raw material for everything in genetics.",
    "!Sister chromatids are identical copies. Homologous chromosomes are similar, not identical."],
  "5.1b": ["Meiosis creates variety in two ways. Crossing over in prophase I swaps segments between homologs, making chromatids that are new mixtures of the mother's and father's DNA. Independent assortment at metaphase I lines each homologous pair up at random, so with 23 pairs there are 2²³ (over 8 million) possible combinations in a gamete before crossing over is even counted.",
    "The quickest way to identify a stage in a diagram is to look at what is at the metaphase plate or being pulled apart. Pairs of homologs: meiosis I. Single chromosomes made of two chromatids, in a cell with half the chromosome number: meiosis II.",
    "!The chromosome number is halved in meiosis I, when homologs separate, not in meiosis II."],
  "5.1c": ["A Punnett square is a picture of segregation plus random fertilization. The letters along the edges are the gametes each parent can make; each box is one equally likely fertilization. For two genes you can skip the 16-box square: work out each gene separately and multiply the probabilities.",
    "Example: for AaBb × AaBb, the chance of A_ is 3/4 and the chance of bb is 1/4, so the chance of an A_bb offspring is 3/4 × 1/4 = 3/16. That is where the 3s in 9:3:3:1 come from.",
    "!Ratios are predictions for large numbers. Four offspring from Aa × Aa will not necessarily be exactly 3 to 1."],
  "5.2a": ["Incomplete dominance and codominance are both easy to spot because the heterozygote has its own phenotype, so the phenotypic ratio from a monohybrid cross is 1:2:1 instead of 3:1. The difference is what the heterozygote looks like: a blend (pink) or both traits showing side by side (black and white feathers, A and B carbohydrates).",
    "None of these patterns breaks Mendel's laws. Alleles still segregate and assort; what changes is how the genotype is turned into a phenotype.",
    "!Type O is recessive, so two parents with type A or B blood can have a type O child if both carry an i allele."],
  "5.2b": ["Sex-linked crosses follow from who gives which chromosome. A father gives his X to all of his daughters and his Y to all of his sons, so he can never pass an X-linked trait to a son. A mother gives one of her two X chromosomes to every child, so an affected son always got the allele from his mother.",
    "Always write the sex chromosomes in the cross (XᴺXⁿ × XᴺY) and read the sons and daughters separately. \"What fraction of sons\" and \"what fraction of all children\" have different answers.",
    "!A carrier is heterozygous and unaffected. Males cannot be carriers of X-linked recessive traits: with one X, they either have the trait or don't."],
  "5.2c": ["Recombination frequency measures how often a crossover falls between two genes. Two genes at opposite ends of a chromosome almost always have a crossover between them; two genes side by side almost never do. So the percentage of recombinant offspring works as a ruler for distance.",
    "The frequency cannot go above 50%. At 50% the genes behave as if they assort independently, which is why genes far apart on the same chromosome can look unlinked.",
    "!In a testcross the two largest classes of offspring are the parental types and the two smallest are the recombinants. Only the recombinants go in the numerator."],
  "5.2d": ["Work a pedigree in a fixed order. First decide dominant or recessive: two unaffected parents with an affected child means recessive; two affected parents with an unaffected child means dominant. Then check for sex linkage: mostly males affected, and affected sons from unaffected mothers, points to X-linked recessive. Only then assign genotypes, starting with the people whose genotype is certain (anyone showing a recessive trait).",
    "A nondisjunction gamete carries either two copies of a chromosome (n + 1) or none (n − 1). After fertilization the zygote has three copies (trisomy) or one (monosomy). Most are lethal; trisomy 21 and sex-chromosome changes are the main ones seen at birth.",
    "!An unaffected child of two carriers is not automatically a carrier. Of the three unaffected outcomes, two are carriers, so the chance is 2/3."]
});

plus("u6", {
  "6.1a": ["Each experiment closed a gap the last one left open. Griffith showed that hereditary information can pass between cells but not what it is made of. Avery's group destroyed one kind of molecule at a time and found that only destroying DNA stopped transformation. Hershey and Chase confirmed it in a different system by following which molecule physically entered the cell.",
    "!Griffith did not show that DNA is the genetic material. He showed only that some \"transforming principle\" exists."],
  "6.1b": ["DNA's structure fits its two jobs. The sequence of bases stores information, and because each base has only one partner, either strand is enough to rebuild the other. The weak hydrogen bonds in the middle let the strands be unzipped for copying or reading without breaking the strong covalent backbone.",
    "RNA's single strand can fold back on itself and base-pair internally, giving it specific three-dimensional shapes. That is why some RNAs (tRNA, rRNA, ribozymes) can do jobs, not just carry information.",
    "!The two strands are not identical. They are complementary and run in opposite directions."],
  "6.1c": ["Leading and lagging strands exist because of two fixed rules: DNA polymerase only adds to a 3′ end, and the two template strands are antiparallel. On one template the polymerase can follow the fork as it opens. On the other it has to work backward, away from the fork, starting again each time more template is exposed. Those restarts are the Okazaki fragments.",
    "In Meselson and Stahl's results, the conservative model is ruled out after one round (it predicts separate heavy and light bands, not one hybrid band). The dispersive model is ruled out after two rounds (it predicts a single band that keeps getting lighter, not a light band plus a hybrid band).",
    "!Every replication bubble has both leading and lagging strands on each side, because replication runs in both directions from the origin."],
  "6.2a": ["Only one strand of a gene is transcribed, and only genes that are switched on are transcribed at all. That is the main difference from replication, which copies both strands of everything. The mRNA ends up with the same sequence as the coding strand (U in place of T) because both are complementary to the template.",
    "Introns seem wasteful, but they make alternative splicing possible: by keeping different sets of exons, a cell can make several proteins from one gene. Humans have about 20,000 genes but far more proteins.",
    "!The promoter is not transcribed and is not the start codon. The promoter is DNA where RNA polymerase binds; AUG is in the mRNA, where translation starts."],
  "6.2b": ["The tRNA is the actual translator. One end has an anticodon that base-pairs with a codon; the other end carries the amino acid that codon stands for. The ribosome just holds the mRNA and tRNAs together and joins the amino acids with peptide bonds.",
    "Redundancy in the code protects against mutation. Several codons for one amino acid often differ only in the third base, so many single-base changes there are silent.",
    "!Look up the mRNA codon in a codon chart, never the tRNA anticodon or the DNA triplet."],
  "6.2c": ["Both operons are logical for the cell's economy. Enzymes that break down a food (lactose) are only worth making when the food is present, so that operon is off until the food itself switches it on. Enzymes that build a needed molecule (tryptophan) should run until there is plenty, so that operon is on until the product itself switches it off.",
    "To predict a mutant, ask whether the repressor can still bind the operator. A broken repressor or a damaged operator means nothing can block RNA polymerase, so the genes are always on, with or without lactose or tryptophan.",
    "!The inducer and corepressor bind the repressor protein, not the DNA."],
  "6.2d": ["Eukaryotes regulate genes at every stage: whether the chromatin is open (acetylation and methylation), whether transcription starts (transcription factors on enhancers), how the transcript is spliced, how long the mRNA lasts (miRNA), and whether the protein is activated or destroyed. Earlier control saves more energy; later control is faster.",
    "Cell differentiation is the result. A muscle cell and a neuron hold identical DNA but different sets of transcription factors, so they read different parts of the same instructions.",
    "!Epigenetic marks change which genes are used, not the base sequence, and some can be passed to daughter cells."],
  "6.3a": ["The effect of a mutation depends on what it does to the protein. A silent change does nothing. A missense change swaps one amino acid, which can be harmless or serious depending on where it lands (sickle-cell disease is a single missense change). A nonsense change or a frameshift usually destroys the protein.",
    "An insertion or deletion of three nucleotides, or a multiple of three, does not shift the reading frame. It adds or removes whole amino acids and is usually less damaging than a one- or two-base change.",
    "!Mutations are random. They do not arise because an organism needs them; selection acts afterward on whatever variation exists."],
  "6.3b": ["Horizontal gene transfer explains how antibiotic resistance spreads so quickly. A resistance gene on a plasmid can be copied to neighboring bacteria by conjugation, even to different species, in a single generation instead of waiting for each lineage to mutate.",
    "RNA viruses such as influenza and HIV change faster than vaccines and immune systems can track because of three things together: no proofreading, huge numbers of new viruses per infection, and recombination between strains.",
    "!Transduction is transfer by a virus; transformation is uptake of loose DNA. The names are easy to swap."]
});

plus("u7", {
  "7.1a": ["Natural selection has no goal and no foresight. Variation arises first, by chance. The environment then determines which variants leave more offspring. Change the environment and a different variant may win, which is why \"fitness\" always depends on the setting.",
    "Write selection answers in four steps to earn full credit: there is variation in the trait; the variation is heritable; individuals with one version survive and reproduce more in this environment; so the frequency of that version rises in the population over generations.",
    "!Organisms do not adapt because they need or want to, and individuals do not change. Say \"the population evolved,\" not \"the animals adapted.\""],
  "7.1b": ["Homologous structures show divergent evolution: one ancestral structure modified for different uses. Analogous structures show convergent evolution: unrelated lineages arriving at similar solutions to the same problem. Homology is evidence of common ancestry; analogy is evidence of similar selection pressures.",
    "Molecular evidence is the most precise. The more differences between two species' DNA or protein sequences, the longer ago they shared an ancestor, because mutations build up over time.",
    "!Similar function does not mean close relationship. Check the underlying structure or the DNA."],
  "7.1c": ["Hardy-Weinberg is a null hypothesis for evolution. It tells you what genotype frequencies to expect if nothing is acting on a population. When real data differ from the prediction, at least one of the five conditions is being broken, and that tells you evolution is happening.",
    "For any problem, decide first whether you were given an allele frequency (p or q) or a genotype frequency (p², 2pq or q²). The fraction of individuals showing the recessive trait is q², so take its square root before doing anything else.",
    "!The fraction of individuals showing the dominant phenotype is p² + 2pq, not p². You can't take its square root to get p."],
  "7.1d": ["Drift and selection both change allele frequencies; the difference is why. In selection, an allele spreads because it helps its carriers reproduce. In drift, an allele spreads or disappears through luck, such as which individuals happened to survive a flood or found a colony. Drift can even remove a helpful allele or fix a harmful one.",
    "Gene flow makes populations more alike, because it mixes their alleles. Drift and selection in different environments make populations more different. Speciation requires gene flow to stop.",
    "!The bottleneck and founder effects are examples of genetic drift, not separate mechanisms."],
  "7.2a": ["All the barriers do the same thing: they stop gene flow between two groups. Prezygotic barriers are the less costly ones for the organism, because no time or energy is spent on offspring that will fail.",
    "To classify a barrier, ask whether a zygote ever forms. If mating or fertilization is prevented, it is prezygotic. If a hybrid forms but dies, is sterile, or has weak offspring, it is postzygotic.",
    "!Two populations that look different can still be one species if they interbreed successfully, and two that look alike can be separate species."],
  "7.2b": ["Speciation is usually slow because reproductive isolation builds up as a side effect of two populations changing independently. Once they can no longer interbreed, they stay separate even if they meet again.",
    "Polyploidy is the exception: it can create a new species in one generation. A tetraploid plant's gametes are diploid; crossed with a normal plant's haploid gametes they give triploid offspring, which are sterile. The polyploid can reproduce only with other polyploids or by self-fertilizing.",
    "!Sympatric does not mean the groups never separate at all. They share a geographic area but stop exchanging genes."],
  "7.2c": ["Read a tree from the branch points, not the tips. You can rotate any branch around its node without changing the meaning, so the left-to-right order of species tells you nothing. To compare two species, trace each back until the lines meet; the more recently they meet, the closer the relationship.",
    "Shared derived characters mark groups. A trait that appears at one point on the tree is expected in every lineage that branches off after it, unless it was lost later.",
    "!No living species is an ancestor of another living species. Humans did not evolve from chimpanzees; both evolved from a common ancestor."],
  "7.2d": ["The sequence of events makes sense as a chain. No free oxygen at first, so the earliest life was anaerobic. Cyanobacteria evolve photosynthesis and release oxygen as a waste product. Oxygen builds up, which poisons many anaerobes but makes aerobic respiration, with its much larger ATP yield, possible. That energy supply supports larger, more complex eukaryotic cells.",
    "Mass extinctions reset the competition. Groups that had been held back by dominant competitors suddenly find empty niches and diversify. Mammals stayed small for over 100 million years alongside the dinosaurs and radiated only after the dinosaurs were gone.",
    "!The Miller-Urey experiment did not create life. It showed that organic molecules can form without living things."]
});

plus("u8", {
  "8.1": ["The two models differ in one assumption. Exponential growth assumes unlimited resources, so each individual keeps reproducing at the maximum rate and the population grows faster the bigger it gets. Logistic growth multiplies that by (K − N)/K, the fraction of the carrying capacity still unused. When the population is small that fraction is near 1 and growth looks exponential; as N approaches K it shrinks toward 0.",
    "The (K − N)/K term stands for density-dependent limits such as food, space, disease and predation, which press harder as the population gets denser.",
    "!The growth rate (dN/dt) is highest at about half the carrying capacity, not when the population is largest."],
  "8.2": ["Trophic level is about what an organism eats, so the same species can occupy more than one level. An omnivore eating berries is a primary consumer; the same animal eating a mouse is a secondary or tertiary consumer.",
    "To predict the effect of removing a species, follow the arrows both ways. Whatever it ate usually increases. Whatever ate it usually decreases. Then follow one more step, because those changes pass on to the next species in the web.",
    "!Arrows show where the energy goes, so they point from the food to the feeder."],
  "8.3": ["Energy and matter behave differently, and questions often test the contrast. Energy passes through an ecosystem once and must be supplied continuously by the sun. Matter is recycled: the same carbon and nitrogen atoms move between organisms, air, water and soil indefinitely.",
    "The 10% rule limits food chains to about four or five levels and explains why eating lower on the food chain supports more individuals from the same area of land.",
    "!Decomposers recycle matter, not energy. The energy they release leaves as heat."],
  "8.4": ["Simpson's index rewards two things: more species (richness) and a more even spread of individuals among them (evenness). The two ecosystems in the example have the same four species, but one is dominated by two of them, so its index is lower.",
    "A keystone species matters far more than its numbers suggest. Removing a top predator, for instance, can let one prey species multiply and crowd out many others, lowering diversity across the whole community.",
    "!High biodiversity is not just a large number of individuals. A field of one crop has many individuals and almost no diversity."]
});
})();
