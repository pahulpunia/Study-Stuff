/* AP Biology · Unit 6: The Genetic Material
   Source: Ms. Ravuri's interactive notes 6.1 (DNA Structure & Replication), 6.2 (Gene Expression & Regulation)
   and 6.3 (Genetic Variation) with their keys.
   Class wording kept: the 5' cap is called a GTP cap; the template strand is the noncoding strand;
   repressible and inducible operons are both negative control. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const COMP = {A:"T", T:"A", G:"C", C:"G"}, RNA = {A:"U", T:"A", G:"C", C:"G"};
const CODON = {AUG:"Met", UUU:"Phe", UUC:"Phe", GGU:"Gly", GGC:"Gly", GCU:"Ala", GCA:"Ala", AAA:"Lys", AAG:"Lys", CCU:"Pro", CCA:"Pro", GAA:"Glu", GAG:"Glu", UGG:"Trp", CGC:"Arg", ACU:"Thr", GUA:"Val", CAU:"His", UCU:"Ser", AAC:"Asn"};

Study.addUnit("apbio", {
  id: "u6",
  name: "Unit 6: The Genetic Material",
  short: "Unit 6",
  sections: [
    {id:"6.1a", name:"6.1 DNA Experiments"},
    {id:"6.1b", name:"6.1 Structure of DNA & RNA"},
    {id:"6.1c", name:"6.1 DNA Replication"},
    {id:"6.2a", name:"6.2 Transcription"},
    {id:"6.2b", name:"6.2 Translation & the Code"},
    {id:"6.2c", name:"6.2 Operons"},
    {id:"6.2d", name:"6.2 Eukaryotic Regulation"},
    {id:"6.3a", name:"6.3 Mutations"},
    {id:"6.3b", name:"6.3 Genetic Variation"}
  ],

  notes: {
    "6.1a": [
      {sum:["Griffith: something from dead pathogenic bacteria transformed harmless bacteria.", "Avery, McCarty and MacLeod: that transforming substance is DNA.", "Hershey and Chase: viruses inject DNA, not protein, into bacteria."]},
      {timeline:[["1860s", "Mendel finds that 'heritable factors' pass from parent to offspring."], ["1910", "Morgan shows genes are carried on chromosomes, which are made of DNA and protein."], ["1928", "Griffith: heat-killed S (smooth, pathogenic) bacteria mixed with living R (rough, harmless) bacteria kill a mouse. He calls it transformation."], ["1944", "Avery, McCarty and MacLeod: transformation still happens when protein or RNA is destroyed, but not when DNA is destroyed."], ["1952", "Hershey and Chase: T2 phages labeled with radioactive phosphorus (DNA) make bacteria radioactive; phages labeled with radioactive sulfur (protein) do not."], ["1953", "Watson and Crick publish the double helix, using Franklin's X-ray images."]]},
      {p:"Sulfur is in protein but not DNA; phosphorus is in DNA but not protein. That let Hershey and Chase follow each molecule separately. (Nitrogen is in both, so it couldn't tell them apart.)"},
      {check:[{q:"Why did the mouse die when living R cells were mixed with heat-killed S cells?", a:"The R cells took up genetic material from the dead S cells and became pathogenic S cells."}, {q:"What is transformation?", a:"A change in genotype and phenotype from taking up foreign DNA."}, {q:"What is a bacteriophage?", a:"A virus that infects bacteria."}]}
    ],
    "6.1b": [
      {sum:["DNA is a double helix: two antiparallel sugar-phosphate backbones with paired bases inside, held by hydrogen bonds.", "Chargaff's rule: A = T and G = C, though the percentages differ between species.", "RNA is usually single-stranded, has ribose and uses uracil. mRNA carries the code, tRNA brings amino acids, rRNA builds ribosomes."]},
      {p:"**Franklin and Wilkins'** X-ray crystallography showed two outer sugar-phosphate backbones, bases paired in the interior, and a helix. **Watson and Crick** worked out that a purine must pair with a pyrimidine to keep the width uniform: **A–T (2 hydrogen bonds)** and **G–C (3)**."},
      {p:"Prokaryotes have a single **circular** chromosome; eukaryotes have several **linear** ones. **Plasmids** are small circular DNA molecules separate from the chromosome, often carrying useful genes such as antibiotic resistance."},
      {table:{head:["RNA", "Job"], rows:[["mRNA", "copies the code from DNA and carries it to the ribosome; read three bases (a codon) at a time"], ["tRNA", "brings a specific amino acid; its anticodon pairs with the mRNA codon"], ["rRNA", "combines with proteins to form the ribosome's large and small subunits"], ["miRNA", "helps regulate which genes are expressed"], ["Ribozymes", "RNA molecules that catalyze reactions"]]}},
      {ex:{q:"An organism's genome is 33% A, 28% G, 27% T and 12% C. What is its genetic material?", a:["It has thymine, so it's DNA.", "A ≠ T and G ≠ C, so the bases aren't paired.", "Single-stranded DNA."]}},
      {check:[{q:"What holds the two strands of DNA together?", a:"Hydrogen bonds between the bases."}, {q:"Three differences between RNA and DNA?", a:"RNA is usually single-stranded, has ribose instead of deoxyribose, and has uracil instead of thymine."}, {q:"What is conjugation?", a:"Transfer of a plasmid between bacteria in direct contact."}]}
    ],
    "6.1c": [
      {sum:["Replication is semiconservative: each new DNA molecule has one old strand and one new strand.", "DNA polymerase only adds nucleotides to the 3′ end, so it builds 5′→3′. The leading strand is continuous; the lagging strand is made in Okazaki fragments.", "Helicase unwinds, topoisomerase relieves strain, primase lays RNA primers, DNA polymerase builds, ligase joins fragments."]},
      {p:"**Meselson and Stahl** grew bacteria with heavy ¹⁵N DNA, then moved them to light ¹⁴N. After one round all DNA was half heavy, half light (hybrid). After two rounds, half was hybrid and half was all light. Only the semiconservative model fits."},
      {table:{head:["Enzyme", "Job"], rows:[["Helicase", "unwinds the double helix at the replication fork"], ["Topoisomerase", "relieves the twisting strain ahead of the fork"], ["Primase", "makes a short RNA primer"], ["DNA polymerase", "adds complementary DNA nucleotides to the 3′ end; another DNA polymerase replaces the primers with DNA"], ["Ligase", "joins Okazaki fragments on the lagging strand"]]}},
      {p:"Replication starts at **origins of replication** and moves in both directions, forming a bubble with a **replication fork** at each end. Eukaryotic chromosomes have many origins. The leading strand needs one primer; every Okazaki fragment needs its own."},
      {p:"**Accuracy:** DNA polymerase **proofreads** and removes mispaired nucleotides; afterward, **mismatch repair** proteins fix what it missed. Errors drop from 1 in 100,000 to 1 in 10 billion."},
      {check:[{q:"Why is one strand made in fragments?", a:"The strands are antiparallel and DNA polymerase only builds 5′→3′, so on one template it has to work away from the fork."}, {q:"Which enzyme joins Okazaki fragments?", a:"DNA ligase."}, {q:"New DNA has some A–U pairs. What was missing?", a:"The DNA polymerase that replaces RNA primers with DNA."}]}
    ],
    "6.2a": [
      {sum:["Central dogma: DNA → RNA (transcription) → protein (translation).", "RNA polymerase binds the promoter with help from transcription factors, reads the template strand 3′→5′ and builds mRNA 5′→3′.", "Eukaryotes process pre-mRNA: a GTP cap on the 5′ end, a poly-A tail on the 3′ end, introns removed and exons joined."]},
      {p:"The **promoter** is the DNA sequence where RNA polymerase attaches; in eukaryotes it contains a **TATA box**. Transcription ends at the **termination sequence**."},
      {p:"The **template (noncoding, antisense) strand** is the one transcribed. The **coding (sense, nontemplate) strand** matches the mRNA, with T in place of U."},
      {p:"The cap and tail help the mRNA leave the nucleus, protect it from enzymes, and help ribosomes attach. **Introns** are noncoding stretches that are cut out; **exons** are expressed. Prokaryotes have no introns and don't process their mRNA."},
      {ex:{q:"Template DNA: 5′-AGTTCGAAACTC-3′. What mRNA is made?", a:["Pair each base: A→U, G→C, T→A, C→G.", "3′-UCAAGCUUUGAG-5′."]}},
      {check:[{q:"What happens if a gene's promoter is deleted?", a:"RNA polymerase can't bind, so the gene isn't transcribed."}, {q:"What must be in the test tube besides DNA and RNA polymerase?", a:"RNA nucleotides and transcription factors."}, {q:"An animal gene put in bacteria gives a much longer, different protein. Why?", a:"Bacteria don't splice out introns, so the introns get translated too."}]}
    ],
    "6.2b": [
      {sum:["Ribosomes read mRNA codons 5′→3′, starting at AUG; tRNAs with matching anticodons deliver amino acids until a stop codon.", "The genetic code is redundant (several codons per amino acid) but not ambiguous (each codon means one amino acid).", "The code is nearly universal, evidence that all life shares a common ancestor."]},
      {steps:["**Initiation:** the ribosome's rRNA binds the mRNA at the start codon, **AUG** (Met).", "**Elongation:** each tRNA's **anticodon** pairs with a codon and its amino acid is added to the chain.", "**Termination:** at a **stop codon** the finished polypeptide is released."]},
      {p:"There are **64 codons** for **20 amino acids**. UUU and UUC both mean phenylalanine (redundant), but UUU never means anything else (not ambiguous)."},
      {p:"In **prokaryotes**, with no nuclear envelope, translation starts while the mRNA is still being transcribed. In **eukaryotes** the mRNA is made and processed in the nucleus, then translated in the cytoplasm or on the rough ER."},
      {check:[{q:"Translate 5′-CCA AAG CGC UGG-3′.", a:"Pro–Lys–Arg–Trp."}, {q:"Where is the anticodon?", a:"On the tRNA."}, {q:"Why can a human gene work in a bacterium?", a:"The genetic code is nearly universal."}]}
    ],
    "6.2c": [
      {sum:["An operon is a promoter, an operator and the genes they control. A repressor on the operator blocks RNA polymerase.", "Repressible (trp): normally on; tryptophan is the corepressor that activates the repressor and turns it off.", "Inducible (lac): normally off; allolactose is the inducer that inactivates the repressor and turns it on."]},
      {p:"**Gene regulation** is a cell changing which genes it expresses and how much. **Regulatory genes** code for **regulatory proteins**, which bind **regulatory sequences** (promoters, operators). **Negative control** uses repressors that block transcription; **positive control** uses activators that boost it."},
      {table:{head:["", "trp operon", "lac operon"], rows:[["Type", "repressible", "inducible"], ["Default", "on", "off"], ["Repressor is made", "inactive", "active"], ["Small molecule", "tryptophan (corepressor) activates the repressor", "allolactose (inducer) inactivates the repressor"], ["Pathway", "anabolic: makes tryptophan", "catabolic: digests lactose"]]}},
      {p:"**Positive control of lac:** when glucose is scarce, **cAMP** rises and activates **CRP**, which helps RNA polymerase bind and increases transcription. When glucose returns, CRP lets go."},
      {p:"Some genes, such as ribosomal genes, are expressed **all the time**."},
      {check:[{q:"Tryptophan builds up in a bacterium. What happens to the trp operon?", a:"Tryptophan activates the repressor, which binds the operator and shuts the operon off."}, {q:"Compare corepressors and inducers.", a:"Corepressors activate repressors (operon off). Inducers inactivate repressors (operon on)."}, {q:"Genes for making a needed nutrient: inducible or repressible?", a:"Repressible: on by default, off only when there's plenty."}]}
    ],
    "6.2d": [
      {sum:["Every cell has the whole genome; different cell types express different genes.", "Histone acetylation loosens chromatin (more transcription); DNA methylation compacts it (less). These are epigenetic changes.", "Activators bind enhancers, repressors bind silencers. After transcription, alternative splicing and miRNA adjust expression further."]},
      {p:"DNA wraps around eight **histone** proteins to form **nucleosomes**. Loose **euchromatin** is transcribed; tightly packed **heterochromatin** is not."},
      {p:"**General transcription factors** are needed for every gene. **Specific transcription factors** act on particular genes. A gene is transcribed only when the right activators for its enhancers are present, which is why liver cells make albumin and lens cells make crystallin from the same DNA."},
      {p:"Eukaryotic genes each have their own promoter. Genes that work together share **identical regulatory sequences**, so the same transcription factors turn them on together."},
      {p:"**Alternative RNA splicing** makes different mRNAs from one gene by joining different exons. **RNA interference:** a **microRNA** binds a target mRNA, blocking translation and causing the mRNA to be degraded."},
      {check:[{q:"What does histone acetylation do?", a:"Loosens chromatin and promotes transcription."}, {q:"What is an epigenetic change?", a:"A change in gene expression without a change in the DNA sequence."}, {q:"Which regulatory sequence is found in all cells?", a:"Promoters."}]}
    ],
    "6.3a": [
      {sum:["Mutations are changes in DNA and the ultimate source of genetic variation.", "Substitutions can be silent (same amino acid), missense (different amino acid) or nonsense (stop codon). Insertions and deletions can shift the reading frame.", "Only germ-line mutations are inherited. Mutagens such as radiation and some chemicals cause mutations."]},
      {table:{head:["Mutation", "Effect"], rows:[["Silent (synonymous)", "the new codon codes for the same amino acid"], ["Missense", "the codon codes for a different amino acid"], ["Nonsense", "the codon becomes a stop codon; the protein is cut short"], ["Frameshift", "an insertion or deletion changes every codon after it"]]}},
      {p:"**Somatic** mutations are passed to daughter cells by mitosis but not to offspring. **Germ-line** mutations are in the cells that make gametes and can be inherited."},
      {p:"Mutations can be **beneficial** (raw material for evolution), **harmful** (loss of a needed function; in somatic cells they can lead to cancer) or **silent** (same amino acid, or in noncoding DNA such as an intron)."},
      {ex:{q:"Template DNA: 3′-TAC TTG ACA CCA ATT-5′. What polypeptide does it code for?", a:["mRNA: 5′-AUG AAC UGU GGU UAA-3′.", "Met–Asn–Cys–Gly, then stop."]}},
      {check:[{q:"Which is usually worse, a substitution or a one-base deletion?", a:"The deletion: it shifts the reading frame and changes every later amino acid."}, {q:"A mutation occurs in an intron. Likely effect?", a:"Silent, because introns are removed before translation."}, {q:"Where must a mutation occur to be inherited?", a:"In germ-line cells (gametes)."}]}
    ],
    "6.3b": [
      {sum:["Mutation creates variation in all life. Eukaryotes add sexual reproduction: crossing over, independent assortment, segregation and random fertilization.", "Prokaryotes add horizontal gene transfer: transformation, transduction, conjugation, transposition.", "Viruses evolve fast: high mutation rates (especially RNA viruses), rapid reproduction, and recombination."]},
      {table:{head:["Process", "How DNA moves"], rows:[["Transformation", "a cell takes up 'naked' DNA from its surroundings"], ["Transduction", "a bacteriophage carries bacterial DNA into another cell"], ["Conjugation", "DNA (usually a plasmid) passes through a pilus between cells in direct contact"], ["Transposition", "a DNA segment moves to a new position, often between a plasmid and the chromosome"]]}},
      {p:"**Horizontal** gene transfer is between unrelated organisms; **vertical** transfer is parent to offspring."},
      {p:"A **retrovirus** is an RNA virus that uses **reverse transcriptase** to copy its RNA into DNA, which is inserted into the host's chromosome. That reverses the usual DNA → RNA flow."},
      {p:"**RNA viruses mutate faster** than DNA viruses because their RNA polymerases don't proofread. **Recombination** happens when related viruses infect the same cell and their genetic material is packaged together (influenza)."},
      {check:[{q:"Which transfer needs direct contact?", a:"Conjugation."}, {q:"What does reverse transcriptase do?", a:"Makes DNA from an RNA template."}, {q:"Which process creates variation in all organisms?", a:"Mutation."}]}
    ]
  },

  problems(k){
    const SRC = {"6.1a":"6.1 Classic experiments", "6.1b":"6.1 DNA & RNA structure", "6.1c":"6.1 Replication", "6.2a":"6.2 Transcription", "6.2b":"6.2 Translation", "6.2c":"6.2 Operons", "6.2d":"6.2 Eukaryotic regulation", "6.3a":"6.3 Mutations", "6.3b":"6.3 Genetic variation"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 6.1a ===== */
    const sci = cat("6.1a", ["Griffith", "Avery, McCarty & MacLeod", "Hershey & Chase", "Morgan"], "Which scientist(s)?");
    sci("Discovered transformation in pneumonia bacteria", "Griffith", "1928, with R and S strains in mice.");
    sci("Showed that the transforming substance is DNA", "Avery, McCarty & MacLeod", "Transformation stopped only when DNA was destroyed.");
    sci("Used radioactive sulfur and phosphorus to label phages", "Hershey & Chase", "Sulfur marks protein, phosphorus marks DNA.");
    sci("Showed that genes are carried on chromosomes", "Morgan", "Narrowing the genetic material to DNA or protein.");
    sci("Showed that a virus injects DNA, not protein, into bacteria", "Hershey & Chase", "Only the phosphorus label entered the cells.");
    set("6.1a", {stim: "Griffith injected mice with pneumonia bacteria. Living S (smooth) cells killed the mice. Living R (rough) cells did not. Heat-killed S cells did not. A mixture of heat-killed S cells and living R cells killed the mice.", cite: "Griffith's experiment (class notes)"}, [
      ["Why are S cells pathogenic?", ["A sugar capsule protects them from the immune system", "They divide much faster than the R cells do", "They contain protein and R cells contain none", "They are viruses rather than bacteria"], "R cells lack the capsule."],
      ["Why did the mixture kill the mice?", ["Living R cells took up genetic material from the dead S cells", "The heat-killed S cells came back to life in the mouse", "Living R cells mutated on their own into S cells", "The mice were allergic to the dead S cells"], "The R cells were transformed into S cells."],
      ["What did Griffith not know?", ["Which molecule was the transforming principle", "Whether the S strain could cause disease", "Whether heat could kill the S strain", "Whether mice could catch pneumonia"], "It could have been carbohydrate, protein or nucleic acid."]
    ]);
    mc("6.1a", "Why did Hershey and Chase use sulfur and phosphorus?", ["Sulfur is only in protein and phosphorus only in DNA", "Sulfur is only in DNA and phosphorus only in protein", "Both elements are found only in the phage's DNA", "Both elements are found in protein and in DNA"], "Each label follows one kind of molecule.");
    mc("6.1a", "What would have happened if Hershey and Chase had used radioactive nitrogen instead?", ["They couldn't tell whether DNA or protein entered the cells", "The bacteria would not have become radioactive at all", "Only the phage proteins would have been labeled", "The phages could not have infected the bacteria"], "Nitrogen is in both DNA and protein.");
    mc("6.1a", "After Morgan's work, which two molecules were candidates for the genetic material?", ["DNA and protein", "DNA and lipid", "RNA and carbohydrate", "Protein and lipid"], "Chromosomes are made of DNA and protein.");
    mc("6.1a", "What is transformation?", ["A change in a cell's genotype and phenotype from taking up foreign DNA", "A change in a cell's shape and size caused by losing its cell wall", "The copying of a cell's DNA before it divides", "The making of mRNA from a DNA template"], "Griffith named it.");

    /* ===== 6.1b ===== */
    const fx = cat("6.1b", ["Franklin", "Chargaff", "Watson & Crick"], "Whose contribution?");
    fx("X-ray crystallography images of DNA", "Franklin", "With Maurice Wilkins.");
    fx("The amount of A equals T and the amount of G equals C", "Chargaff", "Chargaff's rule.");
    fx("The final double helix model, published in 1953", "Watson & Crick", "Built from Franklin's measurements.");
    fx("Base percentages differ from species to species", "Chargaff", "Found by analyzing many species.");
    fx("A purine must pair with a pyrimidine to keep a uniform width", "Watson & Crick", "Like-with-like pairing didn't fit the X-ray data.");
    mc("6.1b", "What makes up each backbone of a DNA strand?", ["Alternating sugars and phosphate groups", "Alternating sugars and nitrogenous bases", "Pairs of hydrogen-bonded bases", "Chains of amino acids"], "The bases point inward.");
    mc("6.1b", "What holds the two DNA strands together?", ["Hydrogen bonds between bases", "Covalent bonds between bases", "Peptide bonds between sugars", "Ionic bonds between phosphates"], "A–T has 2, G–C has 3.");
    mc("6.1b", "What does antiparallel mean?", ["The strands run in opposite 5′→3′ directions", "The strands have identical base sequences", "The strands are made of different sugars", "The strands never touch each other"], "One is 5′→3′, its partner 3′→5′.");
    num("6.1b", "A double-stranded DNA sample is 18% thymine. What percent is cytosine?", 32, "A = 18%, leaving 64% split between G and C.");
    mc("6.1b", "A genome is 33% A, 28% G, 27% T and 12% C. What is it?", ["Single-stranded DNA", "Double-stranded DNA", "Single-stranded RNA", "Double-stranded RNA"], "It has T (so DNA), but A ≠ T and G ≠ C (so not paired).");
    mc("6.1b", "What is a plasmid?", ["A small circular DNA molecule separate from the chromosome", "A protein that DNA wraps around in the nucleus", "A short piece of RNA that starts replication", "The region of the cell where a prokaryote's chromosome sits"], "They often carry genes such as antibiotic resistance.");
    const rn = cat("6.1b", ["mRNA", "tRNA", "rRNA", "miRNA"], "Which RNA?");
    rn("Carries the genetic code from DNA to the ribosome", "mRNA", "Messenger RNA.");
    rn("Brings amino acids to the ribosome", "tRNA", "Transfer RNA.");
    rn("Combines with proteins to form ribosomes", "rRNA", "Ribosomal RNA.");
    rn("Contains codons", "mRNA", "Three bases per codon.");
    rn("Contains an anticodon", "tRNA", "It pairs with the codon.");
    rn("Helps regulate which genes are expressed", "miRNA", "MicroRNA.");
    mc("6.1b", "How does DNA differ in prokaryotes and eukaryotes?", ["Prokaryotes: one circular chromosome; eukaryotes: several linear ones", "Prokaryotes: several linear chromosomes; eukaryotes: one circular one", "Prokaryotes use uracil in DNA; eukaryotes use thymine", "Prokaryotes have single-stranded DNA; eukaryotes double"], "Both use the same four bases.");

    /* ===== 6.1c ===== */
    const ez = cat("6.1c", ["Helicase", "Topoisomerase", "Primase", "DNA polymerase", "Ligase"], "Which enzyme?");
    ez("Unwinds the DNA and separates the two strands", "Helicase", "At the replication fork.");
    ez("Relieves coiling tension ahead of the replication fork", "Topoisomerase", "Unwinding causes over-twisting.");
    ez("Adds a short strand of RNA nucleotides to start synthesis", "Primase", "The RNA primer.");
    ez("Adds complementary DNA nucleotides to the 3′ end", "DNA polymerase", "It builds 5′→3′.");
    ez("Joins Okazaki fragments together", "Ligase", "On the lagging strand.");
    ez("Proofreads the new strand and removes mispaired bases", "DNA polymerase", "Its proofreading function.");
    ez("Replaces RNA primers with DNA", "DNA polymerase", "A different DNA polymerase does this.");
    const ll = cat("6.1c", ["Leading strand", "Lagging strand", "Both"], "Leading strand, lagging strand, or both?");
    ll("Synthesized continuously", "Leading strand", "Toward the replication fork.");
    ll("Synthesized as Okazaki fragments", "Lagging strand", "Away from the fork.");
    ll("Needs only one primer", "Leading strand", "One start is enough.");
    ll("Needs many primers", "Lagging strand", "One per fragment.");
    ll("Built in the 5′→3′ direction", "Both", "DNA polymerase only works that way.");
    ll("Needs DNA ligase to become one piece", "Lagging strand", "Ligase seals the fragments.");
    mc("6.1c", "What does semiconservative replication mean?", ["Each new DNA molecule has one old strand and one new strand", "One new molecule is all old DNA and the other is all new", "Every strand is a patchwork of old and new segments", "Only half of the DNA molecule is ever copied"], "Each parent strand is a template.");
    set("6.1c", {stim: "Meselson and Stahl grew bacteria until all their DNA contained heavy nitrogen (¹⁵N), then moved them to a medium with light nitrogen (¹⁴N) and let the DNA replicate.", cite: "Meselson–Stahl experiment (class notes)"}, [
      ["What did the DNA look like after one round of replication?", ["All of it was half heavy and half light", "Half was all heavy and half was all light", "All of it was entirely light", "All of it was entirely heavy"], "Each molecule has one old heavy strand and one new light strand."],
      ["What did the DNA look like after two rounds?", ["Half hybrid and half all light", "All hybrid", "All light", "A quarter heavy and the rest light"], "The light strands from round one become templates for all-light molecules."],
      ["Which model did the results support?", ["Semiconservative", "Conservative", "Dispersive", "None of them"], "The conservative model predicts an all-heavy band after round one."]
    ]);
    mc("6.1c", "Why is the lagging strand made in fragments?", ["DNA polymerase only builds 5′→3′, away from the fork on that template", "The lagging template strand is made of RNA nucleotides, not DNA", "Helicase unwinds only one of the two parent strands", "Ligase can only work on short pieces of new DNA"], "The two templates are antiparallel.");
    mc("6.1c", "Why can't DNA polymerase start a new strand by itself?", ["It can only add nucleotides to an existing 3′ end", "It can only read RNA and not DNA templates", "It works only after ligase joins the fragments", "It needs the nuclear envelope to be gone"], "That's why primase lays down a primer first.");
    mc("6.1c", "DNA polymerase makes about 1 error per 100,000 bases, but finished DNA has about 1 per 10 billion. Why?", ["Proofreading and mismatch repair fix most errors", "Most of the errors happen in introns", "Helicase removes the mistakes as it unwinds", "The errors are fixed during transcription"], "Polymerase proofreads; other proteins repair mismatches afterward.");
    mc("6.1c", "Where does replication begin?", ["At origins of replication", "At the promoter", "At the start codon", "At the centromere only"], "Eukaryotic chromosomes have hundreds or thousands.");

    /* ===== 6.2a ===== */
    mc("6.2a", "What is the central dogma?", ["DNA → RNA → protein", "RNA → DNA → protein", "Protein → RNA → DNA", "DNA → protein → RNA"], "Transcription, then translation.");
    mc("6.2a", "Which enzyme carries out transcription?", ["RNA polymerase", "DNA polymerase", "Helicase", "Primase"], "It unwinds the DNA and joins RNA nucleotides.");
    mc("6.2a", "What is a promoter?", ["The DNA sequence where RNA polymerase attaches", "The mRNA sequence where a ribosome attaches", "The protein that brings RNA polymerase to DNA", "The sequence that signals the end of a gene"], "Eukaryotic promoters contain a TATA box.");
    mc("6.2a", "A mutation deletes most of a gene's promoter. What happens?", ["RNA polymerase can't bind, so the gene isn't transcribed", "The gene is transcribed about twice as often as before", "The mRNA is made but cannot leave the nucleus", "The protein is made with the wrong amino acids"], "No promoter, no transcription.");
    mc("6.2a", "In which direction does RNA polymerase build the mRNA?", ["5′→3′", "3′→5′", "Both at once", "It depends on the gene"], "It reads the template 3′→5′.");
    mc("6.2a", "The template strand is 5′-AGTTCGAAACTC-3′. What is the mRNA?", ["3′-UCAAGCUUUGAG-5′", "3′-TCAAGCTTTGAG-5′", "5′-AGUUCGAAACUC-3′", "3′-AGUUCGAAACUC-5′"], "Complementary and antiparallel, with U instead of T.");
    const st = cat("6.2a", ["Template strand", "Coding strand"], "Template strand or coding strand?");
    st("The strand RNA polymerase transcribes", "Template strand", "Also called noncoding or antisense.");
    st("Matches the mRNA, with T in place of U", "Coding strand", "Also called sense or nontemplate.");
    st("Complementary to the mRNA", "Template strand", "The mRNA is built by pairing with it.");
    const pm = cat("6.2a", ["GTP cap", "Poly-A tail", "Splicing"], "Which mRNA modification?");
    pm("Added to the 5′ end of pre-mRNA", "GTP cap", "Helps ribosomes attach.");
    pm("Added to the 3′ end of pre-mRNA", "Poly-A tail", "Protects the mRNA from enzymes.");
    pm("Removes introns and joins exons", "Splicing", "Makes a continuous coding sequence.");
    mc("6.2a", "What are introns?", ["Noncoding stretches removed from pre-mRNA", "Coding stretches that are translated", "Proteins that help RNA polymerase bind", "The caps added to the ends of mRNA"], "Exons are the parts that are expressed.");
    mc("6.2a", "Which is true of prokaryotic mRNA?", ["It is not modified and has no introns", "It gets a cap and a tail in the nucleus", "It is spliced before it is translated", "It is made in the cytoplasm from RNA"], "Prokaryotes have no nucleus and no introns.");
    mc("6.2a", "An animal gene placed in a bacterium yields a much longer, different protein. Why?", ["Bacteria don't remove introns, so they get translated", "Bacteria use a completely different genetic code", "Bacteria add extra exons to every mRNA they make", "Bacteria translate each mRNA twice in a row"], "Only eukaryotes splice.");
    mc("6.2a", "What do transcription factors do?", ["Help RNA polymerase bind to the promoter", "Carry amino acids to the ribosome", "Cut the introns out of pre-mRNA", "Copy the DNA before cell division"], "Together they form the transcription initiation complex.");

    /* ===== 6.2b ===== */
    const tt = cat("6.2b", ["Transcription", "Translation", "Both", "Neither"], "Involved in transcription, translation, both, or neither?");
    tt("RNA polymerase", "Transcription", "It makes the mRNA.");
    tt("tRNA", "Translation", "It brings amino acids.");
    tt("mRNA", "Both", "Made in one, read in the other.");
    tt("Ribosome", "Translation", "The site of protein synthesis.");
    tt("Promoter", "Transcription", "Where RNA polymerase binds.");
    tt("DNA polymerase", "Neither", "It's for replication.");
    tt("Amino acids", "Translation", "The monomers being joined.");
    tt("Helicase", "Neither", "It's for replication.");
    tt("Anticodons", "Translation", "On tRNA.");
    num("6.2b", "How many nucleotides are in one codon?", 3, "Codons are triplets.");
    num("6.2b", "How many different codons are there?", 64, "4 × 4 × 4.");
    num("6.2b", "An mRNA's coding region has 300 nucleotides, including a 3-nucleotide stop codon. How many amino acids are in the polypeptide?", 99, "100 codons, and the stop codon adds no amino acid.");
    mc("6.2b", "What is the start codon?", ["AUG", "UAA", "UUU", "TAC"], "It codes for methionine.");
    mc("6.2b", "UUU and UUC both code for phenylalanine. What does this show?", ["The genetic code is redundant", "The genetic code is ambiguous", "The genetic code is not universal", "The genetic code has no stop codons"], "More than one codon per amino acid.");
    mc("6.2b", "UUU codes for phenylalanine and nothing else. What does this show?", ["The genetic code is not ambiguous", "The genetic code is redundant", "The genetic code varies by species", "The genetic code is read in pairs"], "Each codon means exactly one thing.");
    mc("6.2b", "The genetic code is nearly the same in all organisms. What does that suggest?", ["All life shares a common ancestor", "All organisms have identical DNA", "Every protein is found in every species", "Mutations never change the code"], "It's also why genetic engineering works.");
    mc("6.2b", "What does an anticodon do?", ["Pairs with the complementary mRNA codon", "Pairs with the DNA template strand", "Signals the ribosome to release the protein", "Joins two amino acids with a peptide bond"], "It makes sure the right amino acid is delivered.");
    mc("6.2b", "What ends translation?", ["A stop codon", "A promoter", "A poly-A tail", "An intron"], "The polypeptide is released.");
    mc("6.2b", "Why can prokaryotes translate an mRNA while it is still being transcribed?", ["They have no nuclear envelope separating the two processes", "Their ribosomes are found inside the nucleus with the DNA", "Their mRNA is made of DNA rather than RNA", "They do not use tRNA to build proteins"], "Transcription and translation are coupled.");
    mc("6.2b", "Using the codons CCA = Pro, AAG = Lys, CGC = Arg, UGG = Trp, translate 5′-CCAAAGCGCUGG-3′.", ["Pro–Lys–Arg–Trp", "Trp–Arg–Lys–Pro", "Pro–Arg–Lys–Trp", "Lys–Pro–Trp–Arg"], "Read 5′→3′, three bases at a time.");

    /* ===== 6.2c ===== */
    const op = cat("6.2c", ["Promoter", "Operator", "Repressor", "Regulatory gene"], "Which part?");
    op("The DNA where RNA polymerase attaches", "Promoter", "Transcription starts here.");
    op("The DNA 'on-off switch' that a repressor binds", "Operator", "Usually within the promoter.");
    op("A protein that blocks transcription when active", "Repressor", "Negative control.");
    op("The DNA that codes for the repressor protein", "Regulatory gene", "It has its own promoter outside the operon.");
    const tl = cat("6.2c", ["trp operon", "lac operon", "Both"], "trp operon, lac operon, or both?");
    tl("Repressible", "trp operon", "On unless turned off.");
    tl("Inducible", "lac operon", "Off unless turned on.");
    tl("Usually on", "trp operon", "The cell normally needs tryptophan made.");
    tl("Usually off", "lac operon", "Lactose usually isn't around.");
    tl("Its repressor is made in the inactive form", "trp operon", "It needs a corepressor.");
    tl("Its repressor is made in the active form", "lac operon", "It needs an inducer to let go.");
    tl("Controlled by a repressor (negative control)", "Both", "Both are negative control.");
    tl("Codes for enzymes of an anabolic pathway", "trp operon", "It builds tryptophan.");
    tl("Codes for enzymes of a catabolic pathway", "lac operon", "It digests lactose.");
    tl("Also stimulated by CRP when glucose is scarce", "lac operon", "Positive control.");
    mc("6.2c", "What is an operon?", ["A promoter, an operator and the genes they control", "A protein that binds DNA and blocks transcription", "A group of ribosomes reading the same mRNA", "A plasmid that carries a single gene"], "One switch for several related genes.");
    mc("6.2c", "What does tryptophan do in the trp operon?", ["Acts as a corepressor: it activates the repressor", "Acts as an inducer: it inactivates the repressor", "Binds to the promoter in place of RNA polymerase", "Destroys the mRNA made from the operon"], "Plenty of tryptophan → operon off.");
    mc("6.2c", "What does allolactose do in the lac operon?", ["Acts as an inducer: it inactivates the repressor", "Acts as a corepressor: it activates the repressor", "Binds the operator and blocks RNA polymerase", "Breaks lactose down into simple sugars"], "Lactose present → operon on.");
    mc("6.2c", "Why is it useful for the trp operon to turn off when tryptophan is plentiful?", ["The cell saves energy and resources", "The cell needs to destroy tryptophan", "Tryptophan is toxic to RNA polymerase", "The enzymes work only without tryptophan"], "No point making what's already there.");
    mc("6.2c", "E. coli has no glucose but has lactose. What happens at the lac operon?", ["cAMP rises and activates CRP, which boosts transcription", "cAMP falls and CRP releases, which stops transcription", "The repressor binds the operator more tightly", "Tryptophan binds to and activates the repressor"], "Positive control on top of the inducer removing the repressor.");
    mc("6.2c", "What is the difference between negative and positive control?", ["Negative uses repressors; positive uses activators", "Negative uses activators; positive uses repressors", "Negative happens in eukaryotes; positive in bacteria", "Negative acts on mRNA; positive acts on proteins"], "Repressors block transcription; activators stimulate it.");
    mc("6.2c", "Which genes are expressed continuously?", ["Ribosomal genes", "The lac genes", "Genes in heterochromatin", "Genes with an active repressor"], "The cell always needs ribosomes.");

    /* ===== 6.2d ===== */
    const ch = cat("6.2d", ["Increases transcription", "Decreases transcription"], "Increases or decreases transcription?");
    ch("Histone acetylation", "Increases transcription", "It loosens the chromatin.");
    ch("DNA methylation", "Decreases transcription", "It compacts the chromatin.");
    ch("An activator bound to an enhancer", "Increases transcription", "Positive control.");
    ch("A repressor bound to a silencer", "Decreases transcription", "Negative control.");
    ch("Packing a gene into heterochromatin", "Decreases transcription", "Tightly coiled DNA can't be read.");
    ch("Unpacking a gene into euchromatin", "Increases transcription", "Loose chromatin is accessible.");
    mc("6.2d", "A liver cell and a lens cell have the same genes. Why do they make different proteins?", ["They have different activator proteins, so different genes are on", "They have different DNA sequences in their nuclei", "The lens cell has lost its albumin gene entirely", "The liver cell has many more chromosomes than the lens cell does"], "Differential gene expression makes cells specialize.");
    mc("6.2d", "What is a nucleosome?", ["DNA wound around a group of eight histone proteins", "A ribosome attached to the nuclear envelope", "The region of the nucleus that makes rRNA", "A loop of DNA with no proteins attached"], "The 'beads on a string'.");
    mc("6.2d", "What is an epigenetic change?", ["A change in gene expression without a change in DNA sequence", "A change in the DNA sequence of a gene's exons", "A change in the number of chromosomes in a cell", "A change in the amino acids that are used to build histones"], "Acetylation and methylation are examples.");
    mc("6.2d", "Eukaryotic genes each have their own promoter. How are genes that work together turned on together?", ["They share identical regulatory sequences for the same factors", "They are placed side by side on the DNA under one shared operator", "They are all located on the same chromosome arm", "They are transcribed onto a single long mRNA"], "The same activators find all of them.");
    mc("6.2d", "What is alternative RNA splicing?", ["Making different mRNAs from one gene by joining different exons", "Making the same mRNA from several different genes at one time", "Adding a different cap to each copy of an mRNA", "Removing the poly-A tail before translation"], "One gene, several proteins.");
    mc("6.2d", "What does a microRNA do?", ["Binds a target mRNA, blocking translation and causing its breakdown", "Binds DNA at the promoter and recruits RNA polymerase", "Carries specific amino acids to the ribosome during translation", "Forms part of the large subunit of the ribosome"], "RNA interference.");
    mc("6.2d", "Which transcription factors are needed for every protein-coding gene?", ["General transcription factors", "Specific transcription factors", "Repressors", "Enhancers"], "Specific ones act on particular genes.");
    mc("6.2d", "A cell has activators A, B and C. A gene's enhancers need A, B and D. Is the gene transcribed?", ["No, activator D is missing", "Yes, two of three is enough", "Yes, any one activator works", "No, it has too many activators"], "The right combination must all be present.");

    /* ===== 6.3a ===== */
    const mu = cat("6.3a", ["Silent", "Missense", "Nonsense", "Frameshift"], "Which kind of mutation?");
    mu("A substitution that still codes for the same amino acid", "Silent", "Also called synonymous.");
    mu("A substitution that codes for a different amino acid", "Missense", "The protein may or may not still work.");
    mu("A substitution that creates a stop codon", "Nonsense", "The protein is cut short.");
    mu("One nucleotide is inserted, changing every codon after it", "Frameshift", "The reading frame shifts.");
    mu("One nucleotide is deleted from the middle of a gene", "Frameshift", "All later codons change.");
    mu("The mutation that causes sickle-cell anemia (one amino acid changed)", "Missense", "Glutamic acid becomes valine.");
    const sg = cat("6.3a", ["Somatic", "Germ line"], "Somatic or germ-line mutation?");
    sg("Can be passed to offspring", "Germ line", "It's in cells that make gametes.");
    sg("Occurs in a skin cell", "Somatic", "A body cell.");
    sg("Can lead to cancer but is not inherited", "Somatic", "Passed on only by mitosis.");
    sg("Occurs in a cell that becomes a sperm", "Germ line", "It reaches the zygote.");
    mc("6.3a", "Why do insertions and deletions usually do more damage than substitutions?", ["They shift the reading frame and change all later codons", "They always turn the first codon into a stop codon", "They prevent RNA polymerase from finding the gene", "They can occur only in the promoter of a gene"], "A substitution changes at most one amino acid.");
    mc("6.3a", "Which is a mutagen?", ["Ultraviolet radiation", "DNA ligase in the nucleus", "A transfer RNA", "A histone protein"], "Mutagens are physical or chemical agents that cause mutations.");
    mc("6.3a", "A mutation occurs in an intron. What is the most likely effect?", ["Silent, because introns are removed before translation", "Harmful, because introns code for the active site", "Beneficial, because introns are always helpful", "A frameshift in every exon of the gene"], "Noncoding DNA doesn't change the protein.");
    mc("6.3a", "How are mutations connected to evolution?", ["They create the new alleles that selection acts on", "They stop populations from changing over time", "They only occur after a species has evolved", "They always make organisms less fit"], "Mutation is the ultimate source of genetic variation.");
    mc("6.3a", "Template DNA 3′-TAC TTG-5′ is transcribed. What is the mRNA?", ["5′-AUG AAC-3′", "5′-ATG AAC-3′", "5′-UAC UUG-3′", "5′-AUG UUG-3′"], "T→A, A→U, C→G, G→C.");
    mc("6.3a", "What is a spontaneous mutation?", ["One that occurs with no outside influence, such as a replication error", "One caused by exposure to X-rays or ultraviolet light from the sun", "One caused by chemicals such as benzene", "One that is always repaired by the cell"], "Most are repaired, but some become permanent.");

    /* ===== 6.3b ===== */
    const hg = cat("6.3b", ["Transformation", "Transduction", "Conjugation", "Transposition"], "Which kind of horizontal gene transfer?");
    hg("A bacterium takes up naked DNA from a nearby lysed cell", "Transformation", "DNA from the surroundings.");
    hg("A bacteriophage carries bacterial DNA into a new cell", "Transduction", "A virus is the carrier.");
    hg("A plasmid passes through a pilus between two cells", "Conjugation", "Direct contact.");
    hg("A DNA segment moves from a plasmid into the chromosome", "Transposition", "DNA relocating.");
    hg("Requires direct contact between the cells", "Conjugation", "The other two transfers between cells don't.");
    hg("What Griffith's R cells did with DNA from dead S cells", "Transformation", "Uptake of foreign DNA.");
    const vr = cat("6.3b", ["All life", "Eukaryotes", "Prokaryotes"], "Creates genetic variation in all life, eukaryotes, or prokaryotes?");
    vr("Mutation", "All life", "The ultimate source.");
    vr("Crossing over", "Eukaryotes", "Part of meiosis.");
    vr("Independent assortment", "Eukaryotes", "Part of meiosis.");
    vr("Conjugation", "Prokaryotes", "Horizontal gene transfer.");
    vr("Random fertilization", "Eukaryotes", "Sexual reproduction.");
    vr("Transduction", "Prokaryotes", "Horizontal gene transfer.");
    mc("6.3b", "What is horizontal gene transfer?", ["Getting genetic material from an organism that isn't a parent", "Passing genetic material from a parent down to its offspring", "Copying genetic material before the cell divides", "Losing genetic material during cell division"], "Parent to offspring is vertical transfer.");
    mc("6.3b", "What does reverse transcriptase do?", ["Makes DNA from an RNA template", "Makes RNA from a DNA template", "Makes protein from an RNA template", "Makes RNA from a protein template"], "Retroviruses carry it.");
    mc("6.3b", "How does a retrovirus break the usual flow of genetic information?", ["Information goes from RNA to DNA", "Information goes from protein to RNA", "Information goes from DNA to protein directly", "Information never reaches protein"], "Its RNA genome is copied into DNA and inserted into the host chromosome.");
    mc("6.3b", "Why do RNA viruses usually mutate faster than DNA viruses?", ["Their RNA polymerases have no proofreading function", "Their genomes are copied by the host's DNA polymerase", "They reproduce much more slowly than DNA viruses", "They cannot undergo recombination with other viruses"], "More copying mistakes survive.");
    mc("6.3b", "What is viral recombination?", ["Related viruses in one cell end up with mixed genetic material", "A virus copies its genome using only the host cell's enzymes", "A virus turns its RNA genome into DNA", "A virus loses its protein coat inside a cell"], "It happens with influenza viruses.");
    mc("6.3b", "Prokaryotes reproduce asexually. How do they gain genetic variation?", ["Mutation and horizontal gene transfer", "Crossing over and independent assortment", "Random fertilization of gametes", "Alternative splicing of mRNA"], "Asexual reproduction alone makes clones.");
  },

  drills: {
    /* complementary strands and transcription */
    "6.2a": k => {
      const n = rint(6, 9), s = Array.from({length:n}, () => pick("ATGC".split(""))).join("");
      const toRNA = Math.random() < 0.6, a = s.split("").map(c => (toRNA ? RNA : COMP)[c]).join("");
      const wrongs = new Set();
      wrongs.add(s.split("").map(c => (toRNA ? COMP : RNA)[c]).join(""));
      wrongs.add(toRNA ? s.replace(/T/g, "U") : s);
      wrongs.add(a.split("").reverse().join(""));
      wrongs.delete(a);
      const w = [...wrongs]; while (w.length < 3) w.push(a.slice(1) + a[0] === a ? a.replace(/./, c => (c === "G" ? "C" : "G")) : a.slice(1) + a[0]);
      const fmt = (x, l, r) => `${l}′-${x}-${r}′`;
      const opts = [a, ...w.slice(0, 3)].filter((x, i, A) => A.indexOf(x) === i).map(x => fmt(x, 5, 3).replace("5′", "3′").replace(/3′$/, "5′")).sort(() => Math.random() - 0.5);
      return {kind:"choice", text:`A DNA template strand reads 5′-${s}-3′. What is the ${toRNA ? "mRNA transcribed from it" : "complementary DNA strand"}?`,
        fields:[k.F.choice(toRNA ? "mRNA" : "DNA", opts, `3′-${a}-5′`)],
        steps:[toRNA ? "Pair each base with its RNA partner: A→U, T→A, G→C, C→G." : "Pair each base: A→T, T→A, G→C, C→G.", `The new strand is antiparallel: 3′-${a}-5′.`]};
    },
    /* translation with a mini codon table */
    "6.2b": k => {
      const keys = Object.keys(CODON).filter(c => c !== "AUG"), sh = keys.slice().sort(() => Math.random() - 0.5), cs = ["AUG", sh[0], sh[1], sh[2]];
      const right = cs.map(c => CODON[c]).join("–");
      const alt = [cs.slice().reverse().map(c => CODON[c]).join("–"), [cs[0], cs[2], cs[1], cs[3]].map(c => CODON[c]).join("–"), [cs[0], cs[1], cs[3], cs[2]].map(c => CODON[c]).join("–"), ["AUG", pick(keys), cs[2], cs[3]].map(c => CODON[c]).join("–"), ["AUG", cs[1], pick(keys), pick(keys)].map(c => CODON[c]).join("–")];
      const opts = [right, ...alt].filter((x, i, A) => A.indexOf(x) === i).slice(0, 4).sort(() => Math.random() - 0.5);
      const used = [...new Set(cs)].map(c => `${c} = ${CODON[c]}`).join(", ");
      return {kind:"choice", text:`Translate the mRNA 5′-${cs.join("")}-3′. (${used})`, fields:[k.F.choice("Polypeptide", opts, right)],
        steps:[`Split into codons: ${cs.join(" ")}.`, `Read 5′→3′: ${right}.`]};
    },
    /* amino acids from mRNA length */
    "6.3a": k => {
      const aa = rint(20, 400);
      return Math.random() < 0.5
        ? {kind:"num", text:`A polypeptide is ${aa} amino acids long. How many mRNA nucleotides coded for those amino acids (not counting the stop codon)?`, fields:[k.F.num("Nucleotides", aa * 3)], steps:[`Each amino acid needs one 3-nucleotide codon: ${aa} × 3 = ${aa * 3}.`]}
        : {kind:"num", text:`A coding sequence has ${aa * 3 + 3} nucleotides from the start codon through the stop codon. How many amino acids are in the polypeptide?`, fields:[k.F.num("Amino acids", aa)], steps:[`${aa * 3 + 3} / 3 = ${aa + 1} codons.`, `The stop codon adds no amino acid: ${aa + 1} − 1 = ${aa}.`]};
    }
  }
});
})();
