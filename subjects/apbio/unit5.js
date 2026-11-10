/* AP Biology · Unit 5: Heredity
   Source: Ms. Ravuri's interactive notes 5.1 (Sexual Reproduction & Basic Genetics) and 5.2 (Advanced Genetics) with their keys.
   Class wording kept: sex-linked = on the X chromosome; nondisjunction in meiosis I makes all four
   gametes abnormal, in meiosis II half of them. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

Study.addUnit("apbio", {
  id: "u5",
  name: "Unit 5: Heredity",
  short: "Unit 5",
  sections: [
    {id:"5.1a", name:"5.1 Chromosomes & Gametes"},
    {id:"5.1b", name:"5.1 Meiosis"},
    {id:"5.1c", name:"5.1 Mendel & Punnett Squares"},
    {id:"5.2a", name:"5.2 Non-Mendelian Inheritance"},
    {id:"5.2b", name:"5.2 Sex-Linked Genes"},
    {id:"5.2c", name:"5.2 Gene Linkage & Mapping"},
    {id:"5.2d", name:"5.2 Pedigrees & Nondisjunction"}
  ],

  notes: {
    "5.1a": [
      {sum:["Somatic cells are diploid (2n): two sets of chromosomes, one from each parent. Gametes are haploid (n).", "Homologous chromosomes carry the same genes but are not identical; sister chromatids are identical copies joined at the centromere.", "Meiosis makes haploid gametes; fertilization joins two gametes into a diploid zygote, which grows by mitosis."]},
      {p:"Humans: **2n = 46** (two sets of 23) in body cells, **n = 23** in sperm and eggs. A **gene** is a DNA sequence with instructions for a protein or functional RNA; its position on a chromosome is its **locus**."},
      {table:{head:["", "Homologous chromosomes", "Sister chromatids"], rows:[["What they are", "two separate chromosomes, one from mom and one from dad", "two copies of one chromosome made in S phase"], ["DNA", "same genes, possibly different alleles", "identical"], ["Joined?", "no (they pair up only in meiosis I)", "yes, at the centromere"]]}},
      {p:"A **karyotype** is an ordered display of a cell's chromosome pairs. Pairs 1–22 are **autosomes**; the last pair is the **sex chromosomes** (XX female, XY male). The Y is much smaller and carries few genes, so X and Y aren't truly homologous."},
      {check:[{q:"A skin cell has two of each chromosome type. Diploid or haploid?", a:"Diploid: it has two sets, and it's a somatic cell."}, {q:"A species has 2n = 18. How many chromosomes are in its gametes?", a:"9."}, {q:"A karyotype shows an X and a Y. Male or female?", a:"Male."}]}
    ],
    "5.1b": [
      {sum:["Meiosis is two divisions: meiosis I separates homologous chromosomes (diploid → haploid); meiosis II separates sister chromatids.", "One diploid cell becomes four genetically different haploid cells.", "Three things only meiosis does: crossing over in prophase I, homologous pairs (tetrads) at the metaphase I plate, homologs separating in anaphase I."]},
      {table:{head:["Phase", "What happens"], rows:[
        ["Prophase I", "homologs pair up gene by gene into tetrads; nonsister chromatids swap segments (crossing over) at chiasmata"],
        ["Metaphase I", "tetrads (homologous pairs) line up at the middle"],
        ["Anaphase I", "homologous chromosomes are pulled apart; sister chromatids stay together"],
        ["Telophase I + cytokinesis", "two haploid cells, each chromosome still duplicated"],
        ["Metaphase II", "duplicated chromosomes line up individually"],
        ["Anaphase II", "sister chromatids are pulled apart"],
        ["Telophase II + cytokinesis", "four haploid cells with unduplicated chromosomes"]
      ]}},
      {p:"DNA replicates once, in interphase **before** meiosis I. There is no replication between meiosis I and II. Meiosis I is called the **reduction division**."},
      {table:{head:["", "Mitosis", "Meiosis"], rows:[["Divisions", "one", "two"], ["Daughter cells", "2, diploid, genetically identical", "4, haploid, genetically different"], ["Homologs pair and cross over?", "no", "yes"], ["Used for", "growth, development, repair", "making gametes"]]}},
      {check:[{q:"What separates in anaphase I?", a:"Homologous chromosomes."}, {q:"What separates in anaphase II?", a:"Sister chromatids."}, {q:"Why are sister chromatids no longer identical in meiosis II?", a:"Crossing over in prophase I swapped segments with the homolog."}]}
    ],
    "5.1c": [
      {sum:["Alleles are versions of a gene. An organism has two alleles per gene, one from each parent.", "Law of dominance: in a heterozygote the dominant allele shows. Law of segregation: the two alleles separate, so each gamete gets one. Law of independent assortment: alleles of different genes sort into gametes independently.", "Monohybrid cross (Pp × Pp): 1 PP: 2 Pp: 1 pp, 3 dominant: 1 recessive. Dihybrid cross: 9:3:3:1."]},
      {p:"Mendel crossed **true-breeding** (homozygous) parents, the **P generation**. Their hybrid offspring, the **F₁**, all showed one trait (all purple). Self-pollinating the F₁ gave an **F₂** with a **3:1** ratio."},
      {p:"**Genotype** = the alleles (PP, Pp, pp). **Phenotype** = the appearance (purple, white). **Homozygous** = two identical alleles; **heterozygous** = two different alleles."},
      {h:"Testcross"},
      {p:"To find the genotype of an individual showing the dominant trait, cross it with a **homozygous recessive**. If any offspring show the recessive trait, the mystery parent is heterozygous; if all show the dominant trait, it is homozygous dominant."},
      {h:"Two genes at once"},
      {p:"A **dihybrid** is heterozygous for two genes (YyRr). It makes four kinds of gametes in equal numbers: YR, Yr, yR, yr. Crossing two dihybrids gives **9** yellow round, **3** yellow wrinkled, **3** green round, **1** green wrinkled. Independent assortment happens because each pair of homologs lines up at metaphase I independently of the others."},
      {ex:{q:"Cross ttPp × TtPp (T tall, t short, P purple, p white). What phenotype ratio is expected?", a:["Height: tt × Tt gives 1 tall: 1 short.", "Color: Pp × Pp gives 3 purple: 1 white.", "Together: 3 tall purple: 1 tall white: 3 short purple: 1 short white."]}},
      {check:[{q:"What gametes can a YyRR plant make?", a:"YR and yR, half each."}, {q:"Rr × rr: what fraction of offspring are wrinkled (rr)?", a:"One half."}, {q:"What explains the law of segregation today?", a:"Homologous chromosomes, each carrying one allele, separate in meiosis."}]}
    ],
    "5.2a": [
      {sum:["Incomplete dominance: the heterozygote is in between (red × white → pink). Codominance: both alleles show separately (black and white feathers).", "Multiple alleles: ABO blood type has three alleles; Iᴬ and Iᴮ are codominant and i is recessive.", "Polygenic traits show a continuous range; the environment can change a phenotype; mitochondrial and chloroplast genes are inherited from the mother."]},
      {table:{head:["Blood type", "Genotypes"], rows:[["A", "IᴬIᴬ or Iᴬi"], ["B", "IᴮIᴮ or Iᴮi"], ["AB", "IᴬIᴮ"], ["O", "ii"]]}},
      {p:"Blood type is set by the carbohydrate chains on red blood cells. The Iᴬ allele's enzyme adds the A carbohydrate, Iᴮ's adds B, and i adds neither."},
      {p:"**Polygenic inheritance:** two or more genes shape one trait, giving a spectrum of phenotypes (height, skin tone, eye color). **Environment:** hydrangea color depends on soil acidity; identical twins can differ. **Nonnuclear inheritance:** mitochondrial DNA comes only from the egg, so those traits pass from the mother."},
      {ex:{q:"A mother is type A, her son is type O, and a man with type AB blood claims to be the father. Is that possible?", a:["The son is ii, so he got an i from each parent.", "An AB man is IᴬIᴮ and has no i allele to give.", "He cannot be the father."]}},
      {check:[{q:"Two pink snapdragons are crossed. Expected ratio?", a:"1 red: 2 pink: 1 white."}, {q:"How can you tell a trait is polygenic?", a:"It shows a wide, continuous range of phenotypes."}, {q:"Can a father pass on a mitochondrial disease?", a:"No. Mitochondria come from the egg."}]}
    ],
    "5.2b": [
      {sum:["Morgan's fruit fly work showed that genes are located on chromosomes.", "Sex-linked genes are on the X chromosome. Females (XX) have two alleles; males (XY) have only one.", "A recessive X-linked trait shows up far more often in males, and a sign of sex linkage is different phenotype ratios in male and female offspring."]},
      {p:"**Wild type** = the normal, common phenotype (red eyes). **Mutant** = different from wild type (white eyes). When Morgan crossed F₁ red-eyed flies, the F₂ was 3 red: 1 white as Mendel predicted, but **every white-eyed fly was male**. He concluded the eye-color gene is on the X chromosome."},
      {p:"Write the allele as a superscript on the X; the Y carries no allele. A **carrier** is a heterozygous female (XᴺXⁿ) who doesn't show the trait."},
      {ex:{q:"A carrier woman (XᴺXⁿ) and a man with normal vision (XᴺY) have children. What are the chances of a colorblind girl and of a colorblind boy?", a:["Offspring: XᴺXᴺ, XᴺXⁿ, XᴺY, XⁿY.", "Colorblind girl: 0% (every daughter gets Xᴺ from her father).", "Colorblind boy: 25% of all children (half of the sons)."]}},
      {check:[{q:"Why do males show X-linked recessive traits more often?", a:"They have one X, so one recessive allele is enough."}, {q:"A colorblind man and a non-carrier woman: any colorblind children?", a:"No. Sons get the mother's normal X; daughters are carriers."}, {q:"What result in offspring suggests a gene is sex-linked?", a:"The phenotype ratios differ between males and females."}]}
    ],
    "5.2c": [
      {sum:["Linked genes are on the same chromosome, so they tend to be inherited together and don't assort independently.", "Crossing over between them makes recombinant offspring. Recombination frequency = recombinants ÷ total offspring × 100.", "1% recombination = 1 map unit. Genes farther apart recombine more often."]},
      {p:"Morgan testcrossed a dihybrid gray, normal-winged fly (BbVv) with a black, vestigial-winged fly (bbvv). Independent assortment predicts 1:1:1:1. Instead most offspring had the **parental phenotypes** (gray normal, black vestigial) and few had **recombinant phenotypes** (gray vestigial, black normal)."},
      {ex:{q:"Morgan counted 965 gray normal, 944 black vestigial, 206 gray vestigial and 185 black normal. What is the recombination frequency?", a:["Recombinants: 206 + 185 = 391.", "Total: 2,300.", "391 / 2,300 = 17%, so the genes are 17 map units apart."]}},
      {ex:{q:"Recombination frequencies: X–Y 45%, Y–Z 30%, X–Z 15%. What is the gene order?", a:["X and Y are farthest apart, so they're on the ends.", "Z is between them: 15 + 30 = 45.", "Order: X, Z, Y."]}},
      {h:"Chi-squared for linkage"},
      {p:"Null hypothesis: the genes assort independently, so a dihybrid testcross gives 25% of each phenotype. For Morgan's data, expected = 575 each, χ² = 1,002.64, far above the critical value for 3 degrees of freedom (7.82). Reject the null: the genes are linked."},
      {check:[{q:"How can linked alleles ever end up in different gametes?", a:"Crossing over between the two genes."}, {q:"Two genes show 8% recombination. How far apart are they?", a:"8 map units."}, {q:"What is a recombinant phenotype?", a:"A combination of traits not seen in either parent."}]}
    ],
    "5.2d": [
      {sum:["Dominant trait in a pedigree: doesn't skip generations; two affected parents can have an unaffected child.", "Recessive trait: can skip generations; two unaffected parents can have an affected child. X-linked recessive: mostly males affected.", "Nondisjunction (chromosomes failing to separate in meiosis) causes aneuploidy, such as trisomy 21 (Down syndrome)."]},
      {table:{head:["Pattern", "Clues", "Example"], rows:[["Autosomal dominant", "two parents with the trait have a child without it; never skips a generation", "widow's peak, achondroplasia"], ["Autosomal recessive", "two parents without the trait have a child with it; can skip generations", "PTC tasting, albinism"], ["X-linked recessive", "most affected individuals are male; no affected daughters when the father is unaffected", "colorblindness, hemophilia"]]}},
      {p:"**Carriers** are heterozygotes who have a recessive disorder allele but look normal. Most people with recessive disorders have two carrier parents."},
      {h:"Nondisjunction"},
      {p:"In **meiosis I**, homologs fail to separate and **all four** gametes are abnormal. In **meiosis II**, sister chromatids fail to separate and **half** the gametes are abnormal. Fertilization with such a gamete gives **aneuploidy**, an abnormal number of one chromosome."},
      {table:{head:["Condition", "Chromosomes"], rows:[["Down syndrome", "three copies of chromosome 21"], ["Klinefelter syndrome", "XXY male"], ["Turner syndrome", "XO female (one X), sterile"], ["Trisomy X", "XXX female"], ["XYY", "male with an extra Y, no defined syndrome"]]}},
      {check:[{q:"Two parents with widow's peak (both Ww) have a child. Chance of no widow's peak?", a:"1/4 (ww)."}, {q:"A karyotype shows a single X and no second sex chromosome. Which condition?", a:"Turner syndrome."}, {q:"Which is worse for the gametes, nondisjunction in meiosis I or II?", a:"Meiosis I: all four gametes are abnormal instead of half."}]}
    ]
  },

  problems(k){
    const SRC = {"5.1a":"5.1 Sexual reproduction", "5.1b":"5.1 Meiosis", "5.1c":"5.1 Mendel", "5.2a":"5.2 Non-Mendelian", "5.2b":"5.2 Sex-linked genes", "5.2c":"5.2 Gene linkage", "5.2d":"5.2 Pedigrees"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 5.1a ===== */
    const dh = cat("5.1a", ["Diploid", "Haploid"], "Diploid or haploid?");
    dh("A human skin cell", "Diploid", "Somatic cells have two sets.");
    dh("A human sperm cell", "Haploid", "Gametes have one set.");
    dh("A zygote", "Diploid", "Two haploid gametes fused.");
    dh("A human egg cell", "Haploid", "n = 23.");
    dh("A cell with 2n chromosomes", "Diploid", "2n is the diploid number.");
    num("5.1a", "Human somatic cells have 46 chromosomes. How many are in a human gamete?", 23, "n = 23.");
    num("5.1a", "A species has a haploid number of 12. How many chromosomes are in its somatic cells?", 24, "2n = 24.");
    num("5.1a", "How many pairs of autosomes do humans have?", 22, "The 23rd pair is the sex chromosomes.");
    mc("5.1a", "How do homologous chromosomes differ from sister chromatids?", ["Homologs carry the same genes but may have different alleles", "Homologs are identical copies joined at the centromere", "Homologs are found only in haploid gamete cells", "Homologs are made when DNA replicates in S phase"], "Sister chromatids are the identical copies.");
    mc("5.1a", "What is fertilization?", ["Two haploid gametes fusing into a diploid zygote", "A diploid cell dividing into four haploid gametes", "A zygote dividing by mitosis to form an embryo", "Homologous chromosomes pairing during meiosis"], "Egg + sperm → zygote.");
    mc("5.1a", "What is a gene locus?", ["The specific location of a gene on a chromosome", "One of the versions of a particular gene", "The protein that a particular gene codes for", "A picture of all the chromosomes in a cell"], "Plural: loci.");
    mc("5.1a", "What does a karyotype show?", ["An ordered display of a cell's chromosome pairs", "The sequence of bases in one gene", "The alleles an organism has for one trait", "A family tree of an inherited trait"], "It can reveal sex and chromosome-number disorders.");
    mc("5.1a", "Why aren't X and Y truly homologous?", ["The Y is much smaller and carries very few genes", "The Y is found only in the cells of females", "The X is found only in the cells of males", "They carry identical alleles of every gene"], "Females are XX, males XY.");
    mc("5.1a", "Which process produces gametes?", ["Meiosis", "Mitosis", "Fertilization", "Binary fission"], "Meiosis makes haploid cells from diploid cells.");

    /* ===== 5.1b ===== */
    const ph = cat("5.1b", ["Prophase I", "Metaphase I", "Anaphase I", "Metaphase II", "Anaphase II"], "Which phase of meiosis?");
    ph("Homologous chromosomes pair up and crossing over occurs", "Prophase I", "Tetrads form.");
    ph("Paired homologous chromosomes line up in the middle of the cell", "Metaphase I", "Tetrads at the plate.");
    ph("Homologous chromosomes are pulled apart", "Anaphase I", "Sister chromatids stay together.");
    ph("Duplicated chromosomes line up individually in the middle of the cell", "Metaphase II", "Like mitosis, but haploid.");
    ph("Sister chromatids are pulled apart", "Anaphase II", "Each becomes its own chromosome.");
    ph("Chiasmata are visible", "Prophase I", "The X-shaped crossover sites.");
    const mm = cat("5.1b", ["Mitosis", "Meiosis", "Both"], "Mitosis, meiosis, or both?");
    mm("DNA replicates during interphase beforehand", "Both", "Once, before division begins.");
    mm("The nucleus divides once", "Mitosis", "One division.");
    mm("The nucleus divides twice", "Meiosis", "Meiosis I and II.");
    mm("Homologous chromosomes pair up", "Meiosis", "In prophase I.");
    mm("Crossing over occurs", "Meiosis", "Between nonsister chromatids.");
    mm("Produces gametes", "Meiosis", "Sperm and eggs.");
    mm("Used for growth and replacing damaged cells", "Mitosis", "Body cells.");
    mm("Produces genetically identical daughter cells", "Mitosis", "Clones of the parent.");
    mm("Starts with a diploid cell", "Both", "Both begin with 2n.");
    mm("Produces haploid cells", "Meiosis", "Half the chromosome number.");
    num("5.1b", "How many daughter cells does one cell produce by meiosis?", 4, "Two divisions.");
    num("5.1b", "A cell with 2n = 8 goes through meiosis. How many chromosomes are in each daughter cell?", 4, "Haploid: half of 8.");
    mc("5.1b", "What is crossing over?", ["Nonsister chromatids of a homologous pair exchange DNA segments", "Sister chromatids of one chromosome exchange DNA segments", "Two nonhomologous chromosomes fuse into a single one", "Homologous chromosomes move to opposite poles of the cell"], "It makes chromatids with new allele combinations.");
    mc("5.1b", "Why is meiosis I called the reduction division?", ["It turns a diploid cell into two haploid cells", "It makes the chromosomes shorter and thicker", "It removes half the genes from each chromosome", "It reduces four cells down to two cells"], "The chromosome sets go from two to one.");
    mc("5.1b", "What are the cells like at the end of meiosis I?", ["Haploid, with duplicated chromosomes", "Diploid, with duplicated chromosomes", "Haploid, with unduplicated chromosomes", "Diploid, with unduplicated chromosomes"], "Sister chromatids are still attached.");
    mc("5.1b", "Does DNA replicate between meiosis I and meiosis II?", ["No, the chromosomes are already duplicated", "Yes, every chromosome is copied again", "Yes, but only the sex chromosomes", "Only if crossing over did not happen"], "Replication happens once, before meiosis I.");
    mc("5.1b", "What is a tetrad?", ["A pair of duplicated homologs: four chromatids", "The four cells made at the end of meiosis", "Four chromosomes that are not related", "A chromosome with four centromeres"], "It forms in prophase I.");

    /* ===== 5.1c ===== */
    const gt = cat("5.1c", ["Homozygous dominant", "Heterozygous", "Homozygous recessive"], "Which genotype?");
    gt("PP", "Homozygous dominant", "Two dominant alleles.");
    gt("Pp", "Heterozygous", "Two different alleles.");
    gt("pp", "Homozygous recessive", "Two recessive alleles.");
    gt("A true-breeding white-flowered pea plant (white is recessive)", "Homozygous recessive", "True-breeding plants are homozygous.");
    gt("An F₁ hybrid from PP × pp", "Heterozygous", "Every offspring is Pp.");
    const lw = cat("5.1c", ["Dominance", "Segregation", "Independent assortment"], "Which of Mendel's laws?");
    lw("A Pp plant has purple flowers, not a blend", "Dominance", "The dominant allele masks the recessive one.");
    lw("Half of a Pp plant's gametes carry P and half carry p", "Segregation", "The two alleles separate into different gametes.");
    lw("A YyRr plant makes YR, Yr, yR and yr gametes in equal numbers", "Independent assortment", "The alleles of one gene sort independently of the other's.");
    lw("Explained by homologous chromosomes separating in meiosis", "Segregation", "Each homolog carries one allele.");
    lw("Explained by each homologous pair lining up at metaphase I on its own", "Independent assortment", "Pairs orient randomly.");
    mc("5.1c", "Mendel crossed true-breeding purple and white pea plants. What did the F₁ look like?", ["All purple", "All white", "Half purple, half white", "3 purple: 1 white"], "Purple is dominant, and all F₁ are Pp.");
    mc("5.1c", "What phenotypic ratio appears when F₁ hybrids (Pp × Pp) are crossed?", ["3 purple: 1 white", "1 purple: 1 white", "All purple", "9:3:3:1"], "1 PP: 2 Pp: 1 pp.");
    mc("5.1c", "What is the genotypic ratio of Tt × Tt?", ["1 TT: 2 Tt: 1 tt", "3 TT: 1 tt", "1 TT: 1 tt", "All Tt"], "A monohybrid cross.");
    mc("5.1c", "Yellow (Y) is dominant to green (y). What do the offspring of YY × yy look like?", ["All yellow", "All green", "3 yellow: 1 green", "1 yellow: 1 green"], "All Yy.");
    mc("5.1c", "Round (R) is dominant to wrinkled (r). What is expected from rr × Rr?", ["1 round: 1 wrinkled", "3 round: 1 wrinkled", "All round", "All wrinkled"], "1 Rr: 1 rr.");
    mc("5.1c", "Green pods (G) are dominant to yellow (g). What is expected from GG × Gg?", ["All green pods", "3 green: 1 yellow", "1 green: 1 yellow", "All yellow pods"], "1 GG: 1 Gg, all green.");
    mc("5.1c", "What is a testcross?", ["Crossing a dominant-phenotype individual with a homozygous recessive", "Crossing two heterozygous individuals to look for a 3 to 1 ratio", "Crossing two true-breeding dominant individuals", "Self-pollinating a plant of unknown genotype"], "It reveals whether the mystery parent is PP or Pp.");
    mc("5.1c", "A purple plant is testcrossed and some offspring are white. What is the purple parent's genotype?", ["Pp", "PP", "pp", "It can't be determined"], "A white (pp) offspring needs a p from each parent.");
    mc("5.1c", "A purple plant is testcrossed and all the offspring are purple. What is its most likely genotype?", ["PP", "Pp", "pp", "Either Pp or pp"], "PP × pp gives all Pp.");
    mc("5.1c", "What phenotypic ratio comes from crossing two dihybrids (YyRr × YyRr)?", ["9:3:3:1", "3:1", "1:1:1:1", "1:2:1"], "9 yellow round, 3 yellow wrinkled, 3 green round, 1 green wrinkled.");
    num("5.1c", "How many different kinds of gametes can a YyRr plant make?", 4, "YR, Yr, yR, yr.");
    num("5.1c", "How many different kinds of gametes can a YyRR plant make?", 2, "YR and yR.");
    num("5.1c", "How many different kinds of gametes can a YYRR plant make?", 1, "Only YR.");
    mc("5.1c", "Cross ttPp × TtPp (tall T, purple P are dominant). What phenotypic ratio is expected?", ["3 tall purple: 1 tall white: 3 short purple: 1 short white", "9 tall purple: 3 tall white: 3 short purple: 1 short white", "1 tall purple: 1 tall white: 1 short purple: 1 short white", "3 tall purple: 3 tall white: 1 short purple: 1 short white"], "Height is 1:1 and color is 3:1.");
    mc("5.1c", "What is an allele?", ["An alternative version of a gene", "The location of a gene on a chromosome", "An organism's physical appearance", "A cell with one set of chromosomes"], "Each allele is a slightly different DNA sequence at the same locus.");

    /* ===== 5.2a ===== */
    const dom = cat("5.2a", ["Complete dominance", "Incomplete dominance", "Codominance"], "Which pattern?");
    dom("Red × white snapdragons give pink offspring", "Incomplete dominance", "The heterozygote is in between.");
    dom("Black × white chickens give chickens with black and white feathers", "Codominance", "Both alleles show separately.");
    dom("Purple × white pea plants give all purple offspring", "Complete dominance", "One allele masks the other.");
    dom("Type AB blood", "Codominance", "Both the A and B carbohydrates are made.");
    dom("Dark brown × white hamsters give tan offspring", "Incomplete dominance", "A blend.");
    dom("Dark brown × white hamsters give spotted offspring", "Codominance", "Both colors appear.");
    const nm = cat("5.2a", ["Multiple alleles", "Polygenic", "Environmental", "Nonnuclear"], "Which kind of non-Mendelian inheritance?");
    nm("ABO blood type has the alleles Iᴬ, Iᴮ and i", "Multiple alleles", "More than two alleles exist for the gene.");
    nm("Human height varies along a continuous range", "Polygenic", "Many genes contribute.");
    nm("Hydrangea flowers are blue or purple depending on soil acidity", "Environmental", "Same genotype, different phenotype.");
    nm("A mitochondrial disease is passed only from mothers", "Nonnuclear", "Mitochondrial DNA comes from the egg.");
    nm("Skin tone", "Polygenic", "A spectrum of phenotypes.");
    nm("Identical twins with different phenotypes", "Environmental", "Their genotypes are the same.");
    mc("5.2a", "What ratio is expected from crossing two pink snapdragons?", ["1 red: 2 pink: 1 white", "2 red: 1 pink: 1 white", "All pink", "1 red: 1 white"], "With incomplete dominance the genotypic and phenotypic ratios match.");
    mc("5.2a", "A white chicken is crossed with a checkered (black and white) chicken. Can they have a black chick?", ["No: 1 checkered: 1 white", "Yes: 1 black: 1 white", "Yes: 1 black: 2 checkered: 1 white", "No: all checkered"], "The white parent has no black allele to give.");
    mc("5.2a", "Which genotypes give type A blood?", ["IᴬIᴬ or Iᴬi", "IᴬIᴮ only", "ii only", "IᴮIᴮ or Iᴮi"], "i is recessive to Iᴬ.");
    mc("5.2a", "Parents are Iᴬi and Iᴮi. Which blood types could their children have?", ["A, B, AB or O", "A or B only", "AB only", "A, B or AB only"], "IᴬIᴮ, Iᴬi, Iᴮi and ii are all possible.");
    mc("5.2a", "A mother is type A and her son is type O. Could a type AB man be the father?", ["No, he has no i allele to pass on", "Yes, AB parents can have any type", "Yes, if the mother is IᴬIᴬ", "No, because sons inherit only from mothers"], "The son is ii and needs an i from each parent.");
    mc("5.2a", "What determines ABO blood type at the cell level?", ["Carbohydrate chains on the surface of red blood cells", "The number of chromosomes in each red blood cell", "The amount of hemoglobin inside red blood cells", "The shape of the nucleus in white blood cells"], "The A and B alleles code for enzymes that add different carbohydrates.");
    mc("5.2a", "A man has a disease caused by a mutation in his mitochondrial DNA. Can he pass it to his children?", ["No, mitochondria are inherited from the mother's egg", "Yes, but only to his sons through the Y chromosome", "Yes, to half of his children on average", "No, because mitochondria have no DNA"], "Sperm don't contribute mitochondria.");

    /* ===== 5.2b ===== */
    mc("5.2b", "What did Thomas Hunt Morgan discover?", ["Genes are located on chromosomes", "DNA is a double helix", "Traits blend in offspring", "Pea plants have seven traits"], "His fruit fly crosses gave Mendel's model a physical basis.");
    mc("5.2b", "What surprised Morgan about his F₂ fruit flies?", ["Only males had white eyes", "Only females had white eyes", "No flies had white eyes", "All flies had white eyes"], "The ratio was still 3:1, but the trait followed sex.");
    mc("5.2b", "What is a sex-linked gene, as used in class?", ["A gene located on the X chromosome", "A gene found only in females", "A gene that decides an organism's sex", "A gene located on an autosome"], "Males get only one allele of it.");
    const wt = cat("5.2b", ["Wild type", "Mutant"], "Wild type or mutant?");
    wt("Red eyes in fruit flies", "Wild type", "The normal, common phenotype.");
    wt("White eyes in fruit flies", "Mutant", "Different from the common form.");
    wt("Vestigial wings in fruit flies", "Mutant", "Normal wings are wild type.");
    set("5.2b", {stim: "Colorblindness is X-linked recessive. A woman who is a carrier (XᴺXⁿ) has children with a man who has normal vision (XᴺY).", cite: "Class notes practice"}, [
      ["What is the chance that a child is a colorblind girl?", ["0%", "25%", "50%", "100%"], "Every daughter gets Xᴺ from her father."],
      ["What is the chance that a child is a colorblind boy?", ["25%", "0%", "50%", "75%"], "XⁿY is one of the four equally likely outcomes."],
      ["What fraction of their sons are expected to be colorblind?", ["1/2", "1/4", "All", "None"], "Sons get Xᴺ or Xⁿ from their mother."]
    ]);
    mc("5.2b", "A colorblind man and a woman with normal vision who is not a carrier have children. What is the chance of a colorblind child?", ["0%", "25%", "50%", "100%"], "Sons get the mother's Xᴺ; daughters are carriers.");
    mc("5.2b", "A woman who carries hemophilia (X-linked recessive) has children with an unaffected man. What is the chance a child has hemophilia?", ["25%", "0%", "50%", "75%"], "Only the XʰY sons are affected: 1 of 4 outcomes.");
    mc("5.2b", "Why are X-linked recessive traits more common in males?", ["Males have only one X, so one recessive allele shows", "Males have two X chromosomes, doubling the allele", "The Y chromosome carries the same recessive allele", "Females cannot inherit recessive alleles at all"], "A female needs two copies.");
    mc("5.2b", "A new gene in mice gives different phenotype ratios in male and female offspring. What does that suggest?", ["The gene is sex-linked", "The gene is polygenic", "The gene is in mitochondria", "The gene has no alleles"], "Autosomal genes give the same ratios in both sexes.");
    mc("5.2b", "From whom does a son inherit his X chromosome?", ["His mother", "His father", "Either parent", "Both parents"], "His father gives him the Y.");

    /* ===== 5.2c ===== */
    mc("5.2c", "What is gene linkage?", ["Two genes located on the same chromosome", "Two alleles of the same gene", "A gene located on the X chromosome", "Two genes that control one trait"], "Linked genes tend to be inherited together.");
    const pr = cat("5.2c", ["Parental", "Recombinant"], "BbVv (gray, normal wings) × bbvv (black, vestigial wings): parental or recombinant phenotype?");
    pr("Gray body, normal wings", "Parental", "Matches the dihybrid parent.");
    pr("Black body, vestigial wings", "Parental", "Matches the recessive parent.");
    pr("Gray body, vestigial wings", "Recombinant", "A new combination.");
    pr("Black body, normal wings", "Recombinant", "A new combination.");
    set("5.2c", {stim: "Morgan crossed BbVv flies with bbvv flies and counted 965 gray normal, 944 black vestigial, 206 gray vestigial and 185 black normal offspring (2,300 total).", cite: "Morgan's linkage data (class notes)"}, [
      ["How did the results differ from the 1:1:1:1 ratio expected?", ["Parental types were far more common than recombinants", "Recombinant types were far more common than parentals", "Only two of the four phenotypes appeared at all", "All four phenotypes appeared in equal numbers"], "Linked alleles usually travel together."],
      ["What is the recombination frequency?", ["17%", "8.5%", "34%", "83%"], "(206 + 185) / 2,300 = 17%."],
      ["A chi-squared test against 575 of each gives χ² = 1,002.64 (critical value 7.82). What is the conclusion?", ["Reject the null: the genes are linked", "Accept the null: the genes are linked", "Reject the null: the genes are unlinked", "Accept the null: the genes are unlinked"], "The difference from independent assortment is significant."]
    ]);
    num("5.2c", "A testcross gives 40 recombinant offspring out of 500. What is the recombination frequency, in percent?", 8, "40 / 500 × 100.");
    num("5.2c", "Two genes have a recombination frequency of 17%. How many map units apart are they?", 17, "1% = 1 map unit.");
    mc("5.2c", "Recombination frequencies: X–Y 45%, Y–Z 30%, X–Z 15%. What is the order of the genes?", ["X, Z, Y", "X, Y, Z", "Z, X, Y", "Y, X, Z"], "X and Y are farthest apart; Z sits between (15 + 30 = 45).");
    mc("5.2c", "Why do genes that are farther apart have higher recombination frequencies?", ["Crossing over is more likely to happen between them", "They are more likely to be on different chromosomes", "They are copied at different times in S phase", "Their alleles are more likely to be dominant"], "More distance, more places for a crossover.");
    mc("5.2c", "Which of Mendel's laws do linked genes NOT follow?", ["Independent assortment", "Segregation", "Dominance", "Segregation and dominance"], "Their alleles travel on the same chromosome.");
    mc("5.2c", "What is the null hypothesis in a chi-squared test for linkage?", ["The genes assort independently, giving a 1:1:1:1 ratio", "The genes are linked, giving mostly parental types", "The genes are sex-linked, giving different ratios by sex", "The genes are identical, giving a single phenotype"], "Rejecting it supports linkage.");

    /* ===== 5.2d ===== */
    const pd = cat("5.2d", ["Autosomal dominant", "Autosomal recessive", "X-linked recessive"], "Which inheritance pattern?");
    pd("Two parents with the trait have a child without it", "Autosomal dominant", "Both parents must be heterozygous.");
    pd("Two parents without the trait have a child with it", "Autosomal recessive", "Both parents are carriers.");
    pd("The trait never skips a generation", "Autosomal dominant", "Every affected person has an affected parent.");
    pd("Most affected individuals are male", "X-linked recessive", "Males need only one copy.");
    pd("Widow's peak", "Autosomal dominant", "From the class pedigree.");
    pd("The ability to taste PTC", "Autosomal recessive", "From the class pedigree.");
    pd("Hemophilia", "X-linked recessive", "A blood clotting disorder.");
    pd("Albinism", "Autosomal recessive", "Shows only in homozygotes.");
    pd("Achondroplasia", "Autosomal dominant", "A form of dwarfism.");
    mc("5.2d", "Two parents with widow's peak (Ww × Ww) have another child. What is the chance the child has no widow's peak?", ["1/4", "1/2", "3/4", "0"], "ww is 1 of 4.");
    mc("5.2d", "A woman without widow's peak (ww) and a heterozygous man (Ww) have a child. What is the chance the child has widow's peak?", ["1/2", "1/4", "3/4", "1"], "Ww × ww gives 1 Ww: 1 ww.");
    mc("5.2d", "What is a carrier?", ["A heterozygote with a recessive disorder allele and a normal phenotype", "A homozygote who shows every symptom of a recessive disorder allele", "Anyone who has a dominant disorder allele", "A person with an extra chromosome"], "Most people with recessive disorders have two carrier parents.");
    mc("5.2d", "What is nondisjunction?", ["Chromosomes failing to separate normally in meiosis", "Chromosomes exchanging segments in prophase I", "Chromosomes condensing before cell division", "Chromosomes replicating twice in interphase"], "Some gametes get an extra chromosome and others are missing one.");
    mc("5.2d", "What is aneuploidy?", ["Having an abnormal number of a particular chromosome", "Having two complete sets of every type of chromosome", "Having a mutation in a single gene", "Having no sex chromosomes at all"], "It results from fertilization with a nondisjunction gamete.");
    const nd = cat("5.2d", ["Meiosis I", "Meiosis II"], "Nondisjunction in meiosis I or meiosis II?");
    nd("Homologous chromosomes fail to separate", "Meiosis I", "Homologs separate in anaphase I.");
    nd("Sister chromatids fail to separate", "Meiosis II", "Chromatids separate in anaphase II.");
    nd("All four gametes have the wrong chromosome number", "Meiosis I", "Both cells from meiosis I are already abnormal.");
    nd("Half of the gametes have the wrong chromosome number", "Meiosis II", "Only one of the two cells is affected.");
    const sy = cat("5.2d", ["Down syndrome", "Klinefelter syndrome", "Turner syndrome"], "Which condition?");
    sy("Three copies of chromosome 21", "Down syndrome", "Trisomy 21.");
    sy("An XXY male", "Klinefelter syndrome", "An extra X.");
    sy("An XO female with a single X", "Turner syndrome", "Monosomy X.");
    sy("More frequent as the mother's age increases", "Down syndrome", "From the class notes.");
  },

  drills: {
    /* chromosome counts */
    "5.1a": k => {
      const n = pick([4, 7, 9, 12, 19, 23, 39]);
      return Math.random() < 0.5
        ? {kind:"num", text:`A species has a diploid number of ${2 * n} (2n = ${2 * n}). How many chromosomes are in one of its gametes?`, fields:[k.F.num("Chromosomes", n)], steps:[`Gametes are haploid: ${2 * n} / 2 = ${n}.`]}
        : {kind:"num", text:`A species' gametes have ${n} chromosomes. How many chromosomes are in one of its somatic cells?`, fields:[k.F.num("Chromosomes", 2 * n)], steps:[`Somatic cells are diploid: ${n} × 2 = ${2 * n}.`]};
    },
    /* monohybrid crosses */
    "5.1c": k => {
      const C = [["Aa", "Aa", 75, 25], ["Aa", "aa", 50, 50], ["AA", "aa", 100, 0], ["AA", "Aa", 100, 0], ["aa", "aa", 0, 100]], [p1, p2, d, r] = pick(C), wantDom = Math.random() < 0.5;
      return {kind:"num", text:`A is dominant to a. In the cross ${p1} × ${p2}, what percent of the offspring are expected to show the ${wantDom ? "dominant" : "recessive"} phenotype?`,
        fields:[k.F.num("Percent", wantDom ? d : r)], steps:[`Set up the Punnett square for ${p1} × ${p2}.`, `${d}% show the dominant trait and ${r}% show the recessive trait.`]};
    },
    /* recombination frequency */
    "5.2c": k => {
      const total = pick([200, 400, 500, 1000, 2000]), f = rint(2, 40), rec = total * f / 100, a = Math.floor(rec / 2), b = rec - a;
      return {kind:"num", text:`A dihybrid testcross produces ${total} offspring. ${a} and ${b} of them have the two recombinant phenotypes. What is the recombination frequency, in percent?`,
        fields:[k.F.num("Percent", f)], steps:[`Recombinants: ${a} + ${b} = ${rec}.`, `${rec} / ${total} × 100 = ${f}% (${f} map units).`]};
    }
  }
});
})();
