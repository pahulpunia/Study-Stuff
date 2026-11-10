/* AP Biology · Unit 7: Evolution
   Source: Ms. Ravuri's interactive notes 7.1 (Natural Selection & Microevolution) and 7.2 (Speciation & Macroevolution) with their keys.
   Hardy-Weinberg: p + q = 1 and p² + 2pq + q² = 1. */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const r4 = x => Math.round(x * 10000) / 10000;

Study.addUnit("apbio", {
  id: "u7",
  name: "Unit 7: Evolution",
  short: "Unit 7",
  sections: [
    {id:"7.1a", name:"7.1 Darwin & Natural Selection"},
    {id:"7.1b", name:"7.1 Evidence for Evolution"},
    {id:"7.1c", name:"7.1 Hardy-Weinberg"},
    {id:"7.1d", name:"7.1 Drift, Flow & Selection"},
    {id:"7.2a", name:"7.2 Species & Isolation"},
    {id:"7.2b", name:"7.2 Speciation"},
    {id:"7.2c", name:"7.2 Phylogenetic Trees"},
    {id:"7.2d", name:"7.2 Origin of Life 7.2 Origin of Life & Extinctions Mass Loss"}
  ],

  notes: {
    "7.1a": [
      {sum:["Natural selection: individuals with favorable inherited traits are more likely to survive and reproduce, so those traits become more common.", "It needs four things: competition, variation, adaptation and heritability.", "Individuals don't evolve; populations do. Selection only works on traits that already vary."]},
      {p:"**Lamarck** thought organisms pass on traits acquired during their lifetime (a giraffe stretching its neck). **Darwin**, after his voyage on the HMS Beagle, proposed **natural selection** in *On the Origin of Species* (1859). He called evolution **\"descent with modification\"**."},
      {p:"On the Galápagos, Darwin saw many finch species that resembled each other and a species on the South American mainland. He concluded that a common ancestor from the mainland colonized the islands and its descendants developed **adaptations** for different **niches**."},
      {steps:["**Competition:** more offspring are produced than the environment can support.", "**Variation:** individuals differ in their traits.", "**Adaptation:** some variations give a better chance of surviving and reproducing (higher **fitness**).", "**Heritability:** the favorable trait is genetic and can be passed on."]},
      {p:"In **artificial selection**, humans choose which individuals breed. In natural selection, the environment does."},
      {check:[{q:"Green beetles are eaten more than brown beetles. What happens over generations?", a:"Brown beetles survive and reproduce more, so brown becomes more common."}, {q:"What is a niche?", a:"The role of a species in its ecosystem: its food, where it lives, what it does."}, {q:"Can natural selection create a new trait when one is needed?", a:"No. It can only increase or decrease heritable traits that already vary."}]}
    ],
    "7.1b": [
      {sum:["Evidence for evolution: comparative anatomy, the fossil record, DNA sequences, and directly observed evolution.", "Homologous structures share a structure because of common ancestry; analogous structures share a function because of convergent evolution.", "Vestigial structures are leftovers that had a function in an ancestor."]},
      {table:{head:["Structure", "Meaning", "Example"], rows:[["Homologous", "same basic structure from a common ancestor, maybe different functions", "whale flipper, bat wing, cat leg, human arm"], ["Vestigial", "reduced structure that was useful in an ancestor", "pelvis bones in whales and snakes; human appendix and tailbone"], ["Analogous", "similar function, different structure, no recent common ancestor", "shark fin, penguin wing, dolphin flipper"]]}},
      {p:"**Embryology** shows homologies not seen in adults (gill slits and tails in vertebrate embryos). **Fossils** document extinctions, new groups and transitions, such as land mammals to whales. **DNA and protein sequences** show molecular homologies: more similar sequences mean closer relatives."},
      {p:"**Observed evolution:** after the 1977 Galápagos drought, the Grants found medium ground finches had larger average beaks, because large-beaked birds could crack the big seeds that were left. In Lenski's lab, E. coli grown for over 50,000 generations evolved new abilities, including using citrate. Dark peppered moths became common when soot darkened trees."},
      {check:[{q:"Bird wings and insect wings: homologous or analogous?", a:"Analogous: same function, different structure and ancestry."}, {q:"What does a vestigial structure tell you?", a:"The species evolved from an ancestor that used that structure."}, {q:"Which species pair has the most similar DNA?", a:"The pair with the most recent common ancestor."}]}
    ],
    "7.1c": [
      {sum:["p = frequency of the dominant allele, q = frequency of the recessive allele, and p + q = 1.", "Genotype frequencies: p² (homozygous dominant) + 2pq (heterozygous) + q² (homozygous recessive) = 1.", "A population in Hardy-Weinberg equilibrium is not evolving. It requires no mutation, random mating, no selection, a very large population and no gene flow."]},
      {p:"A **gene pool** is all the alleles in a population. To count alleles directly: total alleles = individuals × 2; each homozygote carries two copies of its allele and each heterozygote one of each."},
      {ex:{q:"A flower population has 320 red (CᴿCᴿ), 160 pink (CᴿCᵂ) and 20 white (CᵂCᵂ). Find the allele frequencies.", a:["500 plants × 2 = 1,000 alleles.", "Cᴿ: 2(320) + 160 = 800 → 0.8.", "Cᵂ: 2(20) + 160 = 200 → 0.2."]}},
      {ex:{q:"PKU, a recessive disorder, occurs in 1 of 10,000 births. Find the carrier frequency.", a:["q² = 1/10,000 = 0.0001.", "q = √0.0001 = 0.01.", "p = 1 − 0.01 = 0.99.", "Carriers = 2pq = 2(0.99)(0.01) = 0.0198, about 2%."]}},
      {tip:"Start from the homozygous recessive group. It's the only phenotype that tells you a genotype for certain, so it gives you q²."},
      {check:[{q:"p = 0.35 and q = 0.65. What fraction is heterozygous?", a:"2pq = 2(0.35)(0.65) = 0.455."}, {q:"Observed genotype frequencies don't match the Hardy-Weinberg prediction. What does that suggest?", a:"The population may be evolving."}, {q:"Name the five conditions.", a:"No mutations, random mating, no natural selection, very large population, no gene flow."}]}
    ],
    "7.1d": [
      {sum:["Microevolution is a change in allele frequencies over generations. Its main causes are genetic drift, gene flow and natural selection.", "Genetic drift is random and strongest in small populations (founder effect, bottleneck effect); it reduces variation.", "Only natural selection consistently produces adaptation. Its modes are directional, stabilizing and disruptive."]},
      {table:{head:["Mechanism", "What happens"], rows:[["Founder effect", "a few individuals start a new population whose allele frequencies differ by chance"], ["Bottleneck effect", "a disaster kills most of a population at random; survivors' gene pool differs from the original"], ["Gene flow", "alleles move between populations through migration, pollen or seeds"], ["Natural selection", "alleles that improve fitness become more common"], ["Sexual selection", "traits that help win mates become more common; can cause sexual dimorphism"]]}},
      {table:{head:["Mode", "Favors", "Example"], rows:[["Directional", "one extreme", "larger beaks after small seeds disappear"], ["Stabilizing", "the middle", "medium fur color where both extremes stand out"], ["Disruptive", "both extremes", "light and dark fur when predators target medium"]]}},
      {p:"Selection acts directly on **phenotypes** and so indirectly on genotypes. **Heritable variation** comes from mutations and from genetic shuffling in sexual reproduction (crossing over, independent assortment, random fertilization)."},
      {p:"**Heterozygote advantage:** people with one sickle-cell allele don't get sickle-cell disease and resist malaria, so selection keeps both alleles where malaria is common."},
      {p:"Habitat loss shrank Illinois' greater prairie chicken population. The survivors had little genetic variation and only half their eggs hatched: a bottleneck caused by people."},
      {check:[{q:"Why aren't drift and gene flow adaptive evolution?", a:"They change allele frequencies by chance or movement, not by favoring fitter individuals."}, {q:"Where is the sickle-cell allele most common?", a:"Where malaria is common, because heterozygotes are protected."}, {q:"Which populations feel genetic drift most?", a:"Small ones."}]}
    ],
    "7.2a": [
      {sum:["Biological species concept: a species is a group whose members can interbreed in nature and produce viable, fertile offspring.", "Prezygotic barriers act before fertilization: habitat, temporal, behavioral, mechanical, gametic isolation.", "Postzygotic barriers act after: reduced hybrid viability, reduced hybrid fertility, hybrid breakdown."]},
      {table:{head:["Barrier", "What keeps the species apart", "Example"], rows:[
        ["Habitat isolation", "they live or mate in different places", "apple vs. blueberry maggot flies"],
        ["Temporal isolation", "they breed at different times", "western (summer) vs. eastern (winter) spotted skunks"],
        ["Behavioral isolation", "different courtship rituals", "blue-footed booby dance"],
        ["Mechanical isolation", "body parts don't fit", "snails whose shells spiral opposite ways"],
        ["Gametic isolation", "sperm can't fertilize the egg", "red and purple sea urchins"],
        ["Reduced hybrid viability", "hybrids don't develop or are frail", "salamander hybrids"],
        ["Reduced hybrid fertility", "hybrids are sterile", "mules"],
        ["Hybrid breakdown", "hybrids are fertile but their offspring are weak or sterile", "cultivated rice strains"]
      ]}},
      {p:"**Gene flow** holds the populations of one species together genetically. The biological species concept can't be used for **fossils or asexual organisms**; alternatives are the **morphological** (structure), **ecological** (niche) and **phylogenetic** (smallest branch on a tree) species concepts."},
      {check:[{q:"Two frogs can mate but the tadpoles die. Which barrier?", a:"Reduced hybrid viability (postzygotic)."}, {q:"Lenski's citrate-eating E. coli could be called a new species under which concept?", a:"The ecological species concept."}, {q:"Why can't the biological species concept apply to bacteria?", a:"They reproduce asexually, so interbreeding can't be tested."}]}
    ],
    "7.2b": [
      {sum:["Speciation is one species splitting into two or more. Reproductive isolation drives it.", "Allopatric: a geographic barrier cuts off gene flow. Sympatric: gene flow drops between groups living in the same area.", "Sympatric speciation can come from polyploidy (common in plants), habitat differentiation or sexual selection."]},
      {p:"**Microevolution** is change in allele frequencies within a population. **Macroevolution** is broad change above the species level. Speciation bridges the two."},
      {p:"**Allopatric:** separated populations evolve independently through mutation, selection and drift. Mosquitofish in separate Bahamas ponds evolved different body shapes; snapping shrimp split when the Isthmus of Panama formed."},
      {p:"**Sympatric:** **polyploidy** (extra chromosome sets from a cell-division accident) can make offspring that breed with each other but not the parent species, an instant new species. Maggot flies using hawthorn vs. apple trees, and cichlids choosing mates by color, are diverging without a physical barrier."},
      {check:[{q:"A pond dries into two separate ponds and the fish diverge. Which type?", a:"Allopatric speciation."}, {q:"What do both types of speciation disrupt?", a:"Gene flow."}, {q:"Why is polyploidy a fast route to a new species?", a:"Polyploid offspring can't produce fertile offspring with the parent species right away."}]}
    ],
    "7.2c": [
      {sum:["A phylogenetic tree (cladogram) shows evolutionary relationships. Each branch point is a common ancestor and a speciation event.", "The two species with the most recent common ancestor are the most closely related and share the most homologies.", "Maximum parsimony: the tree needing the fewest evolutionary events is the most likely."]},
      {p:"Trees are built from **homologies** (shared derived characters): morphological traits and DNA or protein sequences. **Analogies** from convergent evolution must be left out."},
      {p:"Trees let scientists infer traits of extinct groups: birds and crocodiles both build nests, brood eggs and have four-chambered hearts, so dinosaurs probably did too."},
      {warn:"A tree doesn't say one living species evolved from its neighbor, and it usually doesn't show when a species evolved or how much it changed. Being next to each other at the tips means nothing; only the branch points matter."},
      {check:[{q:"How do you find the closest relatives on a tree?", a:"Find the pair that shares the most recent common ancestor."}, {q:"Two trees fit the data; one needs 7 changes and one needs 9. Which is preferred?", a:"The one with 7 (most parsimonious)."}, {q:"Is a hypothesized tree final?", a:"No. Trees are revised when new evidence appears."}]}
    ],
    "7.2d": [
      {sum:["Earth is 4.6 billion years old; prokaryote fossils date to 3.5 billion years ago, eukaryotes to 1.8 billion.", "Possible steps to life: abiotic synthesis of small organic molecules → macromolecules → protocells → self-replicating RNA.", "Mass extinctions end the dominance of some groups and are followed by adaptive radiations of others."]},
      {p:"Early Earth had a **reducing atmosphere** with no free oxygen, full of volcanic gases. **Miller and Urey (1953)** ran electric sparks through a mix of such gases and got organic molecules, including amino acids."},
      {p:"**Organic soup model:** concentrated solutions near shores or vents let monomers join into polymers. **Clay hypothesis:** clay surfaces acted like enzymes. **Protocells:** lipid vesicles that can reproduce simply, keep an internal chemistry and run simple reactions. **RNA world hypothesis:** RNA came before DNA because it stores information and also catalyzes reactions (ribozymes)."},
      {p:"**Cyanobacteria**, the first photosynthesizers (their fossils are **stromatolites**), slowly filled the atmosphere with oxygen. Anaerobic prokaryotes declined and eukaryotes later flourished."},
      {table:{head:["Mass extinction", "When", "Cause", "Effect"], rows:[["Permian", "252 million years ago", "extreme volcanism → CO₂ → global warming and ocean acidification", "about 96% of marine animal species lost"], ["Cretaceous", "66 million years ago", "asteroid impact; dust blocked sunlight", "over half of marine species and the dinosaurs (except birds) lost"]]}},
      {p:"**Adaptive radiation** is the rapid evolution of many species from one ancestor. It follows mass extinctions (mammals after the dinosaurs), new traits, or colonizing new places (Galápagos finches, Hawaiian Islands). Populations with more **genetic diversity** are more likely to have survivors when the environment changes."},
      {check:[{q:"What did Miller and Urey show?", a:"Organic molecules can form from inorganic ones under early-Earth conditions."}, {q:"What marks the big boundaries in the geologic record?", a:"Extinction events in the fossil record."}, {q:"Why did mammals diversify after the Cretaceous extinction?", a:"With the dinosaurs gone, many niches opened up."}]}
    ]
  },

  problems(k){
    const SRC = {"7.1a":"7.1 Natural selection", "7.1b":"7.1 Evidence", "7.1c":"7.1 Hardy-Weinberg", "7.1d":"7.1 Microevolution", "7.2a":"7.2 Species", "7.2b":"7.2 Speciation", "7.2c":"7.2 Phylogeny", "7.2d":"7.2 Macroevolution"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 7.1a ===== */
    const rq = cat("7.1a", ["Competition", "Variation", "Adaptation", "Heritability"], "Which requirement for natural selection?");
    rq("There aren't enough carrots for every bunny to survive", "Competition", "More offspring than the environment supports.");
    rq("Some bunnies have a better sense of smell than others", "Variation", "Individuals differ.");
    rq("Bunnies with a better sense of smell find more food and have more offspring", "Adaptation", "The trait raises fitness.");
    rq("Sense of smell is genetic and passed to offspring", "Heritability", "It has to be inherited.");
    mc("7.1a", "How would Lamarck explain giraffes' long necks?", ["Giraffes stretched their necks and passed the longer necks on", "Giraffes born with longer necks survived and reproduced more", "Giraffes with short necks chose not to reproduce", "Giraffes' necks grew when the trees got taller"], "Lamarck proposed inheritance of acquired characteristics.");
    mc("7.1a", "What is natural selection?", ["Individuals with favorable inherited traits survive and reproduce more", "Individuals change their own traits to suit the environment better", "Humans choose which individuals are allowed to breed", "Alleles change frequency purely by random chance"], "It's the mechanism of evolution.");
    mc("7.1a", "What phrase did Darwin use instead of 'evolution'?", ["Descent with modification", "Survival of the species", "Inheritance of acquired traits", "Random genetic change"], "All organisms descend from an ancient ancestor.");
    mc("7.1a", "What evolves?", ["Populations", "Individuals", "Single cells", "Single genes in one organism"], "An individual's genes don't change in response to selection.");
    mc("7.1a", "What is fitness in biology?", ["An organism's ability to survive and reproduce", "An organism's physical strength and speed", "An organism's size compared with others", "An organism's total lifespan in years"], "Reproductive success is what counts.");
    mc("7.1a", "How do artificial and natural selection differ?", ["Humans do the selecting in one; the environment in the other", "One changes populations; the other changes individuals", "One needs variation; the other does not need it", "One is very fast; the other never produces change"], "Breeders choose traits in artificial selection.");
    mc("7.1a", "Why did Darwin think the Galápagos finches resembled a mainland species?", ["They descended from mainland finches that colonized the islands", "The islands and the mainland have exactly identical environments", "The finches fly back and forth to the mainland daily", "The mainland finches descended from island finches"], "They then adapted to different niches.");
    mc("7.1a", "Would African desert species be more like African savanna species or California desert species?", ["African savanna species, due to more recent shared ancestry", "California desert species, due to the identical climate", "Neither, since deserts have unique species", "Both equally, since all species are related"], "Nearby species share more evolutionary history.");
    mc("7.1a", "Green beetles are eaten by birds more often than brown beetles. What is expected over many generations?", ["Brown beetles become more common", "Green beetles become more common", "The beetles all turn brown as adults", "The two colors stay equally common"], "Brown beetles survive and pass on their alleles more.");
    mc("7.1a", "What is an adaptation?", ["An inherited trait that makes an organism more fit for its environment", "A trait an organism develops through practice during its lifetime", "A change in the environment that kills a population", "A behavior an organism learns from its parents"], "Camouflage and whale tail fins are examples.");

    /* ===== 7.1b ===== */
    const hs = cat("7.1b", ["Homologous", "Analogous", "Vestigial"], "Which kind of structure?");
    hs("A whale's flipper and a human arm", "Homologous", "Same bones from a common ancestor.");
    hs("A shark fin and a dolphin flipper", "Analogous", "Same job, different structure and ancestry.");
    hs("The pelvis bones of a whale", "Vestigial", "Left over from legged ancestors.");
    hs("The human appendix", "Vestigial", "Little or no function now.");
    hs("A bat's wing and a cat's leg", "Homologous", "Same bone pattern.");
    hs("The result of convergent evolution", "Analogous", "Similar environments, similar solutions.");
    hs("A penguin's wing and a shark's fin", "Analogous", "Both for swimming, built differently.");
    const ev = cat("7.1b", ["Comparative anatomy", "Fossil record", "DNA sequencing", "Observed evolution"], "Which kind of evidence?");
    ev("Transitional species between land mammals and whales", "Fossil record", "Fossils document transitions.");
    ev("Horse and zebra genes are nearly identical", "DNA sequencing", "Molecular homology.");
    ev("Finch beaks got larger after the 1977 drought", "Observed evolution", "The Grants measured it.");
    ev("Vertebrate embryos all have gill slits and tails", "Comparative anatomy", "Comparative embryology.");
    ev("E. coli evolved the ability to use citrate in the lab", "Observed evolution", "Lenski's long-term experiment.");
    mc("7.1b", "After the 1977 drought, why did average beak size in medium ground finches increase?", ["Large-beaked birds could crack the big seeds that remained", "Each bird's beak grew larger as it tried to eat harder seeds", "Small-beaked birds flew away to other islands", "The drought caused mutations for larger beaks"], "Small seeds ran out, and small-beaked birds starved.");
    mc("7.1b", "Why did dark peppered moths become common during the Industrial Revolution?", ["Soot darkened the trees, so dark moths were hidden from predators", "Soot stained the light moths' wings until they were all dark", "Dark moths could fly farther from the factories", "Light moths stopped being able to reproduce"], "Light moths became easy prey.");
    mc("7.1b", "What causes analogous structures?", ["Convergent evolution in similar environments", "Recent common ancestry between species", "Mutations that are identical in two species", "Inheritance of acquired characteristics"], "Different lineages adapt in similar ways.");
    mc("7.1b", "What does a vestigial structure reveal?", ["The species evolved from an ancestor that used the structure", "The species is about to go extinct in the very near future", "The species is developing a brand new organ", "The species has no close living relatives"], "It's a remnant of evolutionary history.");
    mc("7.1b", "Which pair of species would have the most similar DNA sequences?", ["The pair with the most recent common ancestor", "The pair that live in the same habitat", "The pair with the most analogous structures", "The pair that are about the same size"], "Less time apart means fewer differences.");

    /* ===== 7.1c ===== */
    const hw = cat("7.1c", ["p", "q", "p²", "2pq", "q²"], "Which Hardy-Weinberg term?");
    hw("Frequency of the dominant allele", "p", "p + q = 1.");
    hw("Frequency of the recessive allele", "q", "p + q = 1.");
    hw("Frequency of homozygous dominant individuals", "p²", "Two dominant alleles.");
    hw("Frequency of heterozygous individuals", "2pq", "Carriers.");
    hw("Frequency of homozygous recessive individuals", "q²", "The only genotype you can see for certain.");
    set("7.1c", {stim: "A population of wildflowers has 320 red (CᴿCᴿ), 160 pink (CᴿCᵂ) and 20 white (CᵂCᵂ) plants.", cite: "Class notes practice"}, [
      ["How many alleles for flower color are in the population?", ["1,000", "500", "480", "2,000"], "500 diploid plants × 2."],
      ["What is the frequency of the Cᴿ allele?", ["0.8", "0.64", "0.32", "0.96"], "(2 × 320 + 160) / 1,000."],
      ["What is the frequency of the Cᵂ allele?", ["0.2", "0.04", "0.36", "0.02"], "(2 × 20 + 160) / 1,000."]
    ]);
    set("7.1c", {stim: "PKU is a recessive disorder that occurs in 1 of every 10,000 births. Assume the population is in Hardy-Weinberg equilibrium.", cite: "Class notes practice"}, [
      ["What is q, the frequency of the PKU allele?", ["0.01", "0.0001", "0.1", "0.001"], "q² = 0.0001, so q = 0.01."],
      ["What is p, the frequency of the normal allele?", ["0.99", "0.9999", "0.9", "0.999"], "p = 1 − q."],
      ["What fraction of people are carriers?", ["0.0198", "0.0001", "0.9801", "0.01"], "2pq = 2(0.99)(0.01)."]
    ]);
    num("7.1c", "The dominant allele has a frequency of 0.7. What is the frequency of the recessive allele?", 0.3, "q = 1 − p.");
    num("7.1c", "q = 0.4. What fraction of the population is homozygous recessive?", 0.16, "q² = 0.4².");
    num("7.1c", "p = 0.5 and q = 0.5. What fraction of the population is heterozygous?", 0.5, "2pq = 2(0.5)(0.5).");
    num("7.1c", "In a population, 9% of individuals show the recessive phenotype. What is q?", 0.3, "q² = 0.09, so q = 0.3.");
    num("7.1c", "p = 0.35 and q = 0.65. What fraction is heterozygous?", 0.455, "2(0.35)(0.65).");
    const cd = cat("7.1c", ["Keeps equilibrium", "Breaks equilibrium"], "Does this keep or break Hardy-Weinberg equilibrium?");
    cd("Random mating", "Keeps equilibrium", "One of the five conditions.");
    cd("A very large population", "Keeps equilibrium", "No genetic drift.");
    cd("Individuals migrating in from another population", "Breaks equilibrium", "That's gene flow.");
    cd("Females preferring the brightest males", "Breaks equilibrium", "Nonrandom mating (sexual selection).");
    cd("Predators eating more of one phenotype", "Breaks equilibrium", "Natural selection.");
    cd("New mutations in the gene", "Breaks equilibrium", "Mutation changes allele frequencies.");
    mc("7.1c", "What does Hardy-Weinberg equilibrium describe?", ["A population that is not evolving", "A population that is evolving quickly", "A population with only one allele", "A population with no heterozygotes"], "Allele and genotype frequencies stay constant.");
    mc("7.1c", "What is a gene pool?", ["All the alleles of all genes in a population", "All the genes carried by one individual", "The dominant alleles in a population", "The offspring of a single pair of parents"], "It's what the next generation can inherit.");

    /* ===== 7.1d ===== */
    const me = cat("7.1d", ["Founder effect", "Bottleneck effect", "Gene flow", "Natural selection", "Sexual selection"], "Which mechanism?");
    me("A few birds are blown to an island and start a new population", "Founder effect", "A small group's alleles differ by chance.");
    me("A wildfire kills most of a population at random", "Bottleneck effect", "Survival had nothing to do with traits.");
    me("Pollen blows from one field of wildflowers into another", "Gene flow", "Alleles move between populations.");
    me("Bacteria with a resistance allele survive an antibiotic", "Natural selection", "The allele improves fitness.");
    me("Peahens choose males with the showiest tails", "Sexual selection", "Traits that win mates spread.");
    me("Habitat loss leaves only a handful of prairie chickens", "Bottleneck effect", "The survivors had little genetic variation.");
    me("Adult frogs move between two nearby ponds", "Gene flow", "Migration in and out.");
    const md = cat("7.1d", ["Directional", "Stabilizing", "Disruptive"], "Which mode of selection?");
    md("Small-seed plants die out, so finches with larger beaks do best", "Directional", "One extreme is favored.");
    md("Snow covers the forest all year, so the lightest bunnies survive best", "Directional", "The population shifts toward light fur.");
    md("Very light and very dark bunnies both stand out, so medium ones survive best", "Stabilizing", "The middle is favored.");
    md("Foxes hunt medium-colored bunnies, so light and dark ones survive best", "Disruptive", "Both extremes are favored.");
    md("Human babies of average birth weight survive best", "Stabilizing", "Extremes are selected against.");
    const dr = cat("7.1d", ["Small populations", "Large populations"], "Genetic drift has the bigger effect in...");
    dr("…which kind of population?", "Small populations", "Chance matters more with few individuals.");
    mc("7.1d", "What is microevolution?", ["A change in allele frequencies in a population over generations", "A change in one individual's alleles during its lifetime", "The formation of a new group above the species level", "The extinction of most of the species on Earth"], "Drift, gene flow and selection cause most of it.");
    mc("7.1d", "Which describes genetic drift?", ["Random, and it reduces genetic variation", "Nonrandom, and it increases variation", "Random, and it increases variation", "Nonrandom, and it favors the fittest"], "Alleles are lost by chance.");
    mc("7.1d", "Which mechanism consistently produces adaptive evolution?", ["Natural selection", "Genetic drift", "Gene flow", "The founder effect"], "Only selection favors alleles that improve fitness.");
    mc("7.1d", "What does natural selection act on directly?", ["Phenotypes", "Genotypes", "Allele frequencies", "Mutations"], "Genotypes are affected indirectly.");
    mc("7.1d", "Which does NOT produce heritable variation?", ["Traits acquired by exercise", "Mutations in gametes", "Crossing over", "Random fertilization"], "Acquired traits aren't genetic.");
    mc("7.1d", "Why does the sickle-cell allele stay common where malaria is common?", ["Heterozygotes resist malaria and don't have sickle-cell disease", "Homozygotes for the allele are the healthiest people of all", "The allele is dominant, so it cannot be removed", "Malaria causes new sickle-cell mutations"], "Heterozygote advantage keeps both alleles.");
    mc("7.1d", "What is sexual dimorphism?", ["Males and females differing in size or appearance", "Individuals having both male and female organs", "Two species that look alike but can't mate", "Offspring that look different from both parents"], "Often the result of female choice.");

    /* ===== 7.2a ===== */
    const br = cat("7.2a", ["Habitat", "Temporal", "Behavioral", "Mechanical", "Gametic"], "Which prezygotic barrier?");
    br("Two fly species mate on different fruits in the same region", "Habitat", "They rarely meet.");
    br("One skunk species mates in late summer, the other in late winter", "Temporal", "Different breeding times.");
    br("A female responds only to her own species' courtship dance", "Behavioral", "Courtship rituals differ.");
    br("Two snails' shells spiral in opposite directions, so they can't align", "Mechanical", "The anatomy doesn't fit.");
    br("Sea urchin sperm can't bind the eggs of another species", "Gametic", "Egg and sperm proteins don't match.");
    br("Two flower species release pollen in different months", "Temporal", "Timing.");
    br("Bird species sing different mating songs", "Behavioral", "Signals are species-specific.");
    const pz = cat("7.2a", ["Reduced hybrid viability", "Reduced hybrid fertility", "Hybrid breakdown"], "Which postzygotic barrier?");
    pz("A mule is healthy but sterile", "Reduced hybrid fertility", "Horse × donkey.");
    pz("Hybrid salamanders rarely finish developing", "Reduced hybrid viability", "They're frail or die early.");
    pz("Hybrid rice plants are fertile, but their offspring are small and sterile", "Hybrid breakdown", "The problem shows up a generation later.");
    const pp = cat("7.2a", ["Prezygotic", "Postzygotic"], "Prezygotic or postzygotic?");
    pp("Acts before fertilization", "Prezygotic", "Pre = before the zygote.");
    pp("Acts after fertilization", "Postzygotic", "The hybrid zygote already exists.");
    pp("Gametic isolation", "Prezygotic", "Fertilization is blocked.");
    pp("Hybrid sterility", "Postzygotic", "The hybrid can't reproduce.");
    mc("7.2a", "What defines a species under the biological species concept?", ["Members can interbreed in nature and have viable, fertile offspring", "Members look very similar to each other in shape and structure", "Members occupy the same ecological niche", "Members live in the same geographic area"], "They don't breed successfully with other groups.");
    mc("7.2a", "What keeps separate populations of one species genetically similar?", ["Gene flow", "Genetic drift", "Reproductive isolation", "Polyploidy"], "Alleles keep moving between them.");
    mc("7.2a", "To which organisms can the biological species concept NOT be applied?", ["Fossils and asexual organisms", "Mammals and birds", "Insects and flowering plants", "Any organisms that live in water"], "Interbreeding can't be tested.");
    const sc = cat("7.2a", ["Morphological", "Ecological", "Phylogenetic"], "Which species concept?");
    sc("Defines a species by its structural features", "Morphological", "Useful for fossils.");
    sc("Defines a species by its niche", "Ecological", "Useful for asexual organisms.");
    sc("Defines a species as the smallest branch on an evolutionary tree", "Phylogenetic", "Based on common ancestry.");

    /* ===== 7.2b ===== */
    const as = cat("7.2b", ["Allopatric", "Sympatric"], "Allopatric or sympatric speciation?");
    as("A pond dries into two ponds and the fish populations diverge", "Allopatric", "A geographic barrier.");
    as("The Isthmus of Panama separates populations of snapping shrimp", "Allopatric", "Land split the sea.");
    as("A plant produces polyploid offspring that can't breed with the parent species", "Sympatric", "No physical separation.");
    as("Flies in the same area split between hawthorn trees and apple trees", "Sympatric", "Habitat differentiation.");
    as("Cichlid females in one lake choose mates by color", "Sympatric", "Sexual selection.");
    as("Mosquitofish in separate ponds evolve different body shapes", "Allopatric", "Isolated populations.");
    mc("7.2b", "What is speciation?", ["One species splitting into two or more species", "One population losing all of its variation", "Two species merging back into a single one", "A species dying out across its whole range"], "It links microevolution and macroevolution.");
    mc("7.2b", "What drives speciation?", ["Reproductive isolation", "Gene flow", "Stabilizing selection", "Random mating"], "Once gene flow stops, populations diverge.");
    mc("7.2b", "What do allopatric and sympatric speciation both disrupt?", ["Gene flow", "Mutation", "Meiosis", "Fertility"], "With or without a geographic barrier.");
    mc("7.2b", "What is polyploidy?", ["Having extra sets of chromosomes", "Having one extra chromosome", "Having no sex chromosomes", "Having a single set of chromosomes"], "From an accident in cell division; common in plants.");
    mc("7.2b", "How does macroevolution differ from microevolution?", ["It is broad change above the species level", "It is change in allele frequencies in one population", "It happens only in very large organisms", "It happens within a single generation"], "For example, the origin of flight or of land vertebrates.");
    mc("7.2b", "Lab fruit flies raised on different foods for many generations prefer mates raised on the same food. What does this show?", ["Reproductive barriers can arise in isolated populations", "Fruit flies cannot adapt to any new source of food", "Gene flow increases when diets are different", "Speciation requires millions of years"], "Evidence for allopatric speciation.");

    /* ===== 7.2c ===== */
    mc("7.2c", "What does a branch point on a phylogenetic tree represent?", ["A common ancestor and a speciation event", "The extinction of a species", "A living species evolving into its neighbor", "The exact date a species appeared"], "One lineage splits into two.");
    mc("7.2c", "Which two species on a tree are most closely related?", ["The two that share the most recent common ancestor", "The two drawn next to each other at the tips", "The two that look the most alike", "The two at the top of the diagram"], "Relatedness is about branch points, not position.");
    mc("7.2c", "What is a shared derived characteristic?", ["A trait species share because it evolved in their common ancestor", "A trait two species evolved separately in similar habitats", "A trait that only one species on the tree has", "A trait that every living organism has"], "It's a homology.");
    mc("7.2c", "Why must analogies be left out when building a tree?", ["They come from convergent evolution, not shared ancestry", "They are always caused by recent common ancestors", "They are found only in fossil species", "They are coded by the same DNA sequences"], "They would group unrelated species.");
    mc("7.2c", "What does maximum parsimony assume?", ["The tree with the fewest evolutionary events is most likely", "The tree with the most evolutionary events is most likely", "Every possible tree is equally likely to be true", "Species at the tips evolved from each other"], "The simplest explanation is preferred.");
    mc("7.2c", "One tree needs 7 evolutionary changes and another needs 9. Which is the most parsimonious?", ["The tree with 7 changes", "The tree with 9 changes", "Both equally", "Neither tree"], "Fewest changes.");
    mc("7.2c", "Birds and crocodiles both build nests and brood their eggs. What can be inferred about dinosaurs?", ["They probably did too, inherited from a common ancestor", "They could not have done either one", "They evolved from modern crocodiles", "They are completely unrelated to birds and crocodiles"], "Fossils support nesting and brooding in dinosaurs.");
    mc("7.2c", "Mice and humans sit side by side on a tree. What does that mean?", ["They share a common ancestor", "Humans evolved from mice", "Mice evolved from humans", "They evolved at the same moment"], "Neighbors on a tree didn't evolve from each other.");
    mc("7.2c", "Fish have two heart chambers, amphibians and reptiles three, birds and mammals four. Which group branched off first?", ["Fish", "Mammals", "Birds", "Reptiles"], "They lack the derived three- and four-chambered hearts.");
    mc("7.2c", "What happens to a phylogenetic tree when new evidence arises?", ["It is revised to fit the new data", "It is kept the same no matter what", "It is thrown out with no replacement", "It becomes a scientific law"], "Trees are hypotheses.");

    /* ===== 7.2d ===== */
    const ol = cat("7.2d", ["Miller-Urey", "Organic soup", "Clay hypothesis", "Protocells", "RNA world"], "Which idea about the origin of life?");
    ol("Sparks in a mix of early-Earth gases produced amino acids", "Miller-Urey", "Abiotic synthesis of organic molecules.");
    ol("Concentrated solutions near shores or vents let monomers join", "Organic soup", "Polymers from concentrated monomers.");
    ol("A mineral surface acted like an enzyme for joining monomers", "Clay hypothesis", "Clay as a substrate.");
    ol("Lipid vesicles that reproduce and keep an internal chemistry", "Protocells", "Membrane-bound droplets.");
    ol("The first genetic material could both store information and catalyze reactions", "RNA world", "Ribozymes support this.");
    const xt = cat("7.2d", ["Permian", "Cretaceous"], "Which mass extinction?");
    xt("Caused by extreme volcanic activity", "Permian", "252 million years ago.");
    xt("Caused by an asteroid impact", "Cretaceous", "66 million years ago.");
    xt("Wiped out about 96% of marine animal species", "Permian", "The largest extinction.");
    xt("Wiped out the dinosaurs (except birds)", "Cretaceous", "Dust blocked sunlight.");
    xt("Involved global warming and ocean acidification from CO₂", "Permian", "From the eruptions.");
    xt("Left a crater in the Gulf of Mexico", "Cretaceous", "Evidence of the impact.");
    mc("7.2d", "How was early Earth's atmosphere different from today's?", ["It had no free oxygen and was full of volcanic gases", "It had far more oxygen than today's atmosphere", "It was made almost entirely of water vapor", "It had no carbon dioxide or nitrogen at all"], "A reducing atmosphere.");
    mc("7.2d", "What are the oldest known fossils?", ["Stromatolites made by cyanobacteria", "Dinosaur bones from the Cretaceous", "Shells of early marine animals", "Imprints of the first land plants"], "About 3.5 billion years old.");
    mc("7.2d", "Why are cyanobacteria important in Earth's history?", ["Their photosynthesis filled the atmosphere with oxygen", "They were the very first eukaryotic cells on Earth", "They caused the Permian mass extinction", "They were the first organisms to live on land"], "Anaerobic prokaryotes declined as oxygen rose.");
    mc("7.2d", "Why do scientists think RNA came before DNA?", ["RNA can store information and catalyze reactions", "RNA is more stable than DNA", "RNA is found only in the cells of prokaryotes", "RNA cannot be copied"], "DNA later took over as the more stable genetic material.");
    mc("7.2d", "What is adaptive radiation?", ["Rapid evolution of many species from one common ancestor", "The loss of most species in a short time", "The spread of radiation after a large asteroid impact", "The slow change of a single species over time"], "It follows extinctions, new traits or colonizing new places.");
    mc("7.2d", "Why did mammals diversify after the Cretaceous extinction?", ["The loss of the dinosaurs opened up many niches", "Mammals caused the extinction of the dinosaurs", "The asteroid created new mammal species directly", "Mammals first appeared after the extinction"], "Less competition, more opportunities.");
    mc("7.2d", "Why is genetic diversity important to a population?", ["It raises the chance that some individuals survive a change", "It guarantees that no individuals in it will ever die out", "It stops natural selection from acting", "It keeps allele frequencies from changing"], "More variation, more chances that a useful trait exists.");
    mc("7.2d", "Put these in order from earliest to latest: (1) eukaryotes appear, (2) Earth forms, (3) prokaryotes appear.", ["2, 3, 1", "1, 2, 3", "3, 2, 1", "2, 1, 3"], "4.6, 3.5 and 1.8 billion years ago.");
  },

  drills: {
    /* Hardy-Weinberg from the recessive phenotype */
    "7.1c": k => {
      const q = pick([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]), p = r4(1 - q), q2 = r4(q * q), ask = pick(["q", "p", "het", "dom"]);
      const A = {q:["the frequency of the recessive allele (q)", q], p:["the frequency of the dominant allele (p)", p], het:["the frequency of heterozygotes (2pq)", r4(2 * p * q)], dom:["the frequency of homozygous dominant individuals (p²)", r4(p * p)]}[ask];
      return {kind:"num", text:`In a population in Hardy-Weinberg equilibrium, ${r4(q2 * 100)}% of individuals show the recessive phenotype. What is ${A[0]}? Answer as a decimal.`,
        fields:[k.F.num("Answer", A[1])], steps:[`q² = ${q2}, so q = ${q}.`, `p = 1 − q = ${p}.`, ask === "het" ? `2pq = 2(${p})(${q}) = ${A[1]}.` : ask === "dom" ? `p² = ${A[1]}.` : null].filter(Boolean)};
    },
    /* allele frequencies from genotype counts */
    "7.1d": k => {
      const n = pick([100, 200, 500]), aa = rint(1, 4) * n / 10, ab = rint(1, 4) * n / 10, bb = n - aa - ab, wantA = Math.random() < 0.5;
      const fa = r4((2 * aa + ab) / (2 * n)), fb = r4(1 - fa);
      return {kind:"num", text:`A population has ${aa} AA, ${ab} Aa and ${bb} aa individuals. What is the frequency of the ${wantA ? "A" : "a"} allele? Answer as a decimal.`,
        fields:[k.F.num("Frequency", wantA ? fa : fb)], steps:[`Total alleles: ${n} × 2 = ${2 * n}.`, wantA ? `A alleles: 2(${aa}) + ${ab} = ${2 * aa + ab}. ${2 * aa + ab} / ${2 * n} = ${fa}.` : `a alleles: 2(${bb}) + ${ab} = ${2 * bb + ab}. ${2 * bb + ab} / ${2 * n} = ${fb}.`]};
    }
  }
});
})();
