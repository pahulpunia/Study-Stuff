/* AP Biology · Unit 8: Ecology
   Source: Ms. Ravuri's Population Growth practice worksheet key and Ecosystems graphic notes key.
   (The Unit 8.1 slides and the animal behavior reading are not covered here yet.)
   Formulas: dN/dt = B − D; exponential dN/dt = rmax·N; logistic dN/dt = rmax·N·(K − N)/K;
   Simpson's diversity index = 1 − Σ(n/N)². */
(() => {
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

Study.addUnit("apbio", {
  id: "u8",
  name: "Unit 8: Ecology",
  short: "Unit 8",
  sections: [
    {id:"8.1", name:"8 Population Growth"},
    {id:"8.2", name:"8 Trophic Levels & Food Webs"},
    {id:"8.3", name:"8 Energy Flow & Matter Cycling"},
    {id:"8.4", name:"8 Biodiversity & Human Impact"}
  ],

  notes: {
    "8.1": [
      {sum:["Growth rate: dN/dt = B − D (births minus deaths). Per capita growth rate r = (dN/dt) ÷ N.", "Exponential growth: dN/dt = rmax × N. The curve is J-shaped.", "Logistic growth: dN/dt = rmax × N × (K − N)/K. Growth slows near the carrying capacity K; the curve is S-shaped."]},
      {table:{head:["Symbol", "Meaning"], rows:[["N", "population size"], ["dN/dt", "change in population size over time (growth rate)"], ["B, D", "birth rate, death rate"], ["rmax", "maximum per capita growth rate"], ["K", "carrying capacity: the largest population the environment can support"]]}},
      {ex:{q:"A population of 250 squirrels has 52 births and 25 deaths per year. Find dN/dt, next year's size and r.", a:["dN/dt = 52 − 25 = +27 per year.", "Next year: 250 + 27 = 277.", "r = 27 / 250 = 0.108."]}},
      {ex:{q:"K = 1,500 and rmax = 0.5. Find dN/dt when N is 500, 900, 1,400 and 1,800.", a:["N = 500: 0.5 × 500 × (1,000/1,500) ≈ 167.", "N = 900: 0.5 × 900 × (600/1,500) = 180.", "N = 1,400: 0.5 × 1,400 × (100/1,500) ≈ 47.", "N = 1,800: 0.5 × 1,800 × (−300/1,500) = −180. Above K, the population shrinks."]}},
      {p:"In logistic growth the growth rate rises as the population gets bigger, peaks around **half of K**, then falls toward zero as N approaches K."},
      {tip:"Average growth rate from a graph is a slope: (change in population) ÷ (change in time)."},
      {check:[{q:"What is dN/dt when N = K?", a:"Zero: (K − N) is 0."}, {q:"A crane population goes from 30 in 1960 to 75 in 1980. Average growth rate?", a:"(75 − 30) / 20 = 2.25 cranes per year."}, {q:"Which growth model has a constant per capita growth rate?", a:"Exponential."}]}
    ],
    "8.2": [
      {sum:["Autotrophs (primary producers) build organic molecules from inorganic ones; heterotrophs (consumers) must eat other organisms.", "Primary consumers eat producers, secondary consumers eat primary consumers, tertiary eat secondary. Decomposers break down dead matter.", "In food chains and webs, arrows point the way energy and matter flow: toward the eater."]},
      {p:"**Photoautotrophs** use light energy; **chemoautotrophs** use chemical energy from inorganic molecules. **Decomposers (detritivores)** are heterotrophs that turn dead organic matter back into inorganic molecules producers can reuse."},
      {p:"A **food chain** is one path. A **food web** is many connected chains, so one species can sit at more than one trophic level (a sea star eating both mussels and whelks)."},
      {ex:{q:"In an intertidal web, sea urchins eat kelp, and sheepshead fish eat sea urchins. A disease kills most of the urchins. What happens?", a:["Kelp increases: fewer urchins are eating it.", "Sheepshead decline: they've lost a food source."]}},
      {check:[{q:"Count the arrows from a producer to a secondary consumer.", a:"Two."}, {q:"Are decomposers autotrophs or heterotrophs?", a:"Heterotrophs."}, {q:"Which way does the arrow point between grass and a rabbit?", a:"From the grass to the rabbit."}]}
    ],
    "8.3": [
      {sum:["Energy flows one way: in as sunlight (photosynthesis), out as heat (cellular respiration). Matter cycles and is reused.", "10% rule: only about 10% of the energy stored as biomass at one trophic level is stored at the next.", "So energy and biomass shrink at each higher level, which is why pyramids narrow toward the top."]},
      {p:"**Primary productivity** is the rate at which producers convert energy into chemical energy in organic molecules. **Biomass** is the total mass of living things per unit area."},
      {steps:["Most energy an organism takes in powers its metabolism and is **lost as heat**.", "Some food can't be digested and leaves as **feces**.", "Some organisms **die without being eaten**.", "Decomposers use the feces and dead organisms, releasing that energy as heat too. Nothing disappears; it all ends as heat."]},
      {ex:{q:"Kelp store 100,000 kJ. About how much is stored by the sea urchins, the whelks that eat them, and the octopuses that eat the whelks?", a:["Urchins: 10% → 10,000 kJ.", "Whelks: 1% → 1,000 kJ.", "Octopuses: 0.1% → 100 kJ."]}},
      {p:"**Matter:** carbon enters living things from atmospheric CO₂ by photosynthesis and returns by cellular respiration. Water and nutrients (nitrogen, phosphorus, sulfur) are taken up from the soil by plants and returned by decomposers."},
      {check:[{q:"Where does all the energy in an ecosystem end up?", a:"As heat."}, {q:"Why are there few top predators?", a:"Very little energy reaches the top trophic levels."}, {q:"Is matter used up as it moves through a food web?", a:"No. Atoms are constantly reused."}]}
    ],
    "8.4": [
      {sum:["Biodiversity has three levels: genetic, species and ecosystem diversity. More biodiversity means a more stable, resilient ecosystem.", "Simpson's diversity index = 1 − Σ(n/N)². Closer to 1 means more diverse.", "Keystone species have an outsized effect on an ecosystem; invasive species outcompete natives and lower biodiversity."]},
      {ex:{q:"Ecosystem 1 has 40, 30, 50 and 20 individuals of four species. Find its diversity index.", a:["N = 140.", "Σ(n/N)² = (1,600 + 900 + 2,500 + 400) / 19,600 = 0.28.", "Index = 1 − 0.28 = 0.72."]}},
      {p:"Ecosystem 2 has 80, 65, 10 and 5: index = 1 − 10,750/25,600 = 0.58. Same number of species, but two dominate, so it is less diverse."},
      {p:"A **keystone species** maintains the structure and biodiversity of its ecosystem; losing it can lead to collapse. **Invasive species** are introduced to places where they aren't native, adapt easily and reproduce well at the expense of native species."},
      {p:"**Human impacts:** deforestation, urbanization, overhunting and overfishing, pollution and toxins, agriculture and pesticides, new diseases, and invasive species."},
      {check:[{q:"Which is more stable, a high- or low-biodiversity ecosystem?", a:"High: losing one species has a smaller effect on the rest."}, {q:"An index of 0.72 vs. 0.58: which ecosystem is more diverse?", a:"0.72."}, {q:"What is species diversity?", a:"The number and variety of species in an ecosystem."}]}
    ]
  },

  problems(k){
    const SRC = {"8.1":"Population growth", "8.2":"Trophic levels", "8.3":"Energy & matter", "8.4":"Biodiversity"};
    const mc = (sec, text, opts, why, o = {}) => k.choice([sec], SRC[sec], text, opts, opts[0], [why], Object.assign({shuffle:true}, o));
    const cat = (sec, opts, label) => (text, a, why) => k.choice([sec], SRC[sec], text, opts, a, [why], {label});
    const num = (sec, text, a, why) => k.num([sec], SRC[sec], text, a, [why]);
    const set = (sec, src, list) => list.forEach(([t, o, w]) => mc(sec, t, o, w, src));

    /* ===== 8.1 ===== */
    const vr = cat("8.1", ["N", "dN/dt", "K", "rmax"], "Which variable?");
    vr("Population size", "N", "The number of individuals.");
    vr("The change in population size over time", "dN/dt", "The growth rate.");
    vr("Carrying capacity", "K", "The most the environment can support.");
    vr("Maximum per capita growth rate", "rmax", "Growth per individual under ideal conditions.");
    const gm = cat("8.1", ["Exponential", "Logistic"], "Exponential or logistic growth?");
    gm("A J-shaped curve", "Exponential", "It keeps getting steeper.");
    gm("An S-shaped curve that levels off", "Logistic", "It flattens at K.");
    gm("dN/dt = rmax × N", "Exponential", "No limit term.");
    gm("dN/dt = rmax × N × (K − N)/K", "Logistic", "Growth slows as N nears K.");
    gm("Includes a carrying capacity", "Logistic", "K limits growth.");
    gm("The per capita growth rate stays constant", "Exponential", "Every individual keeps contributing the same.");
    set("8.1", {stim: "A population of 250 squirrels has a birth rate of 52 individuals per year and a death rate of 25 individuals per year.", cite: "Population growth practice (class notes)"}, [
      ["What is the growth rate, dN/dt?", ["+27 per year", "+77 per year", "−27 per year", "+52 per year"], "B − D = 52 − 25."],
      ["How large is the population a year from now?", ["277", "302", "223", "327"], "250 + 27."],
      ["What is the per capita growth rate?", ["0.108", "0.208", "0.100", "9.26"], "27 / 250."]
    ]);
    set("8.1", {stim: "A population has a carrying capacity of 1,500 and an rmax of 0.5. Its growth follows the logistic model.", cite: "Population growth practice (class notes)"}, [
      ["What is dN/dt when N = 900?", ["180", "450", "270", "108"], "0.5 × 900 × (600/1,500)."],
      ["What is dN/dt when N = 1,800?", ["−180", "+180", "−900", "0"], "0.5 × 1,800 × (−300/1,500): above K the population shrinks."],
      ["How does the growth rate change as N approaches K?", ["It rises at first, then falls toward zero", "It keeps rising faster and faster", "It stays the same at every size", "It falls at first, then rises again"], "167 at N = 500, 180 at 900, 47 at 1,400."]
    ]);
    num("8.1", "A pond has 300 fish, rmax = 1.2 and K = 1,800. Using the logistic model, what is the change in population size after one year?", 300, "1.2 × 300 × (1,500/1,800) = 300.");
    num("8.1", "A pond has 300 fish, rmax = 1.2 and K = 1,800. What is the expected population size after one year?", 600, "300 + 300.");
    num("8.1", "A population at its carrying capacity follows the logistic model. What is dN/dt?", 0, "(K − N) = 0.");
    num("8.1", "A crane population grows from 30 in 1960 to 75 in 1980. What is the average growth rate, in cranes per year?", 2.25, "45 / 20.");
    num("8.1", "A crane population grows from 75 in 1980 to 280 in 2000. What is the average growth rate, in cranes per year?", 10.25, "205 / 20.");
    num("8.1", "A population of 200 grows exponentially with rmax = 0.1. What is dN/dt?", 20, "0.1 × 200.");
    mc("8.1", "What is carrying capacity?", ["The largest population an environment can support", "The fastest rate at which a population can grow", "The number of births in a population each year", "The smallest population that can survive"], "It's K in the logistic model.");
    mc("8.1", "What happens to a population that is above its carrying capacity?", ["It decreases, because dN/dt is negative", "It grows faster, because dN/dt is larger", "It stays the same size indefinitely", "It immediately drops to zero"], "(K − N) is negative.");

    /* ===== 8.2 ===== */
    const tr = cat("8.2", ["Producer", "Primary consumer", "Secondary consumer", "Decomposer"], "Which role?");
    tr("Kelp and phytoplankton", "Producer", "They photosynthesize.");
    tr("Sea urchins eating kelp", "Primary consumer", "One arrow from a producer.");
    tr("A whelk eating mussels that ate phytoplankton", "Secondary consumer", "Two arrows from a producer.");
    tr("Fungi breaking down a dead log", "Decomposer", "They return inorganic molecules to the environment.");
    tr("Zooplankton eating phytoplankton", "Primary consumer", "They eat autotrophs.");
    tr("An organism that builds its own organic molecules", "Producer", "An autotroph.");
    const au = cat("8.2", ["Photoautotroph", "Chemoautotroph", "Heterotroph"], "Which kind of organism?");
    au("Uses sunlight to build organic molecules", "Photoautotroph", "Photosynthesis.");
    au("Uses chemical energy from inorganic molecules to build organic molecules", "Chemoautotroph", "No light needed.");
    au("Must eat other organisms for organic molecules", "Heterotroph", "A consumer.");
    au("A decomposer", "Heterotroph", "It feeds on dead organic matter.");
    mc("8.2", "Which way do the arrows point in a food web?", ["Toward the organism doing the eating", "Toward the organism being eaten", "Toward the largest organism", "Toward the producers"], "They show the flow of energy and matter.");
    mc("8.2", "How does a food web differ from a food chain?", ["A web is many interconnected chains", "A web includes only the producers", "A web shows energy flowing to plants", "A web has a single path of arrows"], "A chain is a single path.");
    set("8.2", {stim: "In an intertidal ecosystem, kelp and phytoplankton are the producers. Sea urchins eat kelp. Zooplankton eat phytoplankton. Sheepshead fish eat sea urchins, and mussels and clams eat zooplankton. A disease kills most of the sea urchins.", cite: "Intertidal food web (class notes)"}, [
      ["What happens to the kelp?", ["It increases, with fewer urchins grazing", "It decreases, with fewer urchins to help it", "It dies out along with the sea urchins", "It is unaffected by the urchins' decline"], "Less grazing."],
      ["What happens to the sheepshead?", ["They decline, having lost a food source", "They increase, having less competition", "They switch to eating only kelp", "They are unaffected by the change"], "They eat sea urchins."],
      ["What trophic level are the sea urchins?", ["Primary consumers", "Producers", "Secondary consumers", "Decomposers"], "They eat a producer."]
    ]);
    mc("8.2", "What do decomposers do for an ecosystem?", ["Return inorganic molecules for producers to reuse", "Capture energy from sunlight for the consumers", "Keep producers from growing too quickly", "Stop the flow of energy from reaching the top"], "They recycle matter.");
    mc("8.2", "Can one species be both a secondary and a tertiary consumer?", ["Yes, if it eats prey from different trophic levels", "No, each species has exactly one trophic level", "Only if it is also a producer", "Only if it is a decomposer"], "Food webs overlap.");

    /* ===== 8.3 ===== */
    num("8.3", "Producers store 750,000 kJ. Using the 10% rule, about how many kJ are stored by the primary consumers?", 75000, "10% of 750,000.");
    num("8.3", "Producers store 50,000 kJ. Using the 10% rule, about how many kJ are stored by the secondary consumers?", 500, "50,000 → 5,000 → 500.");
    num("8.3", "What percent of the producers' energy reaches the tertiary consumers, using the 10% rule?", 0.1, "10% → 1% → 0.1%.");
    num("8.3", "Producers have a biomass of 40,000 kg/km². By the 10% rule, about what biomass of primary consumers can they support, in kg/km²?", 4000, "10% of 40,000.");
    mc("8.3", "How does energy enter and leave an ecosystem?", ["In as sunlight, out as heat", "In as heat, out as sunlight", "In as food, out as water", "It cycles and never leaves"], "Photosynthesis in, cellular respiration out.");
    mc("8.3", "Which is NOT a reason only about 10% of energy passes to the next trophic level?", ["Energy is destroyed when an organism is eaten", "Most energy is lost as heat from metabolism", "Some food is undigested and leaves as feces", "Some organisms die without being eaten"], "Energy is never destroyed; it changes form.");
    mc("8.3", "What is primary productivity?", ["The rate producers convert energy into chemical energy", "The number of primary consumers in an ecosystem", "The amount of heat lost by the decomposers", "The total mass of the top predators"], "A measure of how much photosynthesis is happening.");
    mc("8.3", "What is biomass?", ["The total mass of living things per unit area", "The amount of sunlight reaching the producers", "The number of species in an ecosystem", "The mass of inorganic nutrients in soil"], "Measured in units like kg/km².");
    mc("8.3", "Why do energy pyramids get narrower toward the top?", ["Less energy is available at each higher trophic level", "More energy is available at each higher trophic level", "Top predators are physically smaller than producers", "Producers get their energy from the top predators"], "About 90% is lost at each step.");
    const fl = cat("8.3", ["Flows one way", "Cycles"], "Does it flow one way or cycle?");
    fl("Energy", "Flows one way", "Sun → organisms → heat.");
    fl("Carbon", "Cycles", "CO₂ ↔ organic molecules.");
    fl("Nitrogen", "Cycles", "Soil ↔ living things.");
    fl("Water", "Cycles", "Reused over and over.");
    mc("8.3", "How does carbon move from the atmosphere into living things?", ["Photosynthesis", "Cellular respiration", "Decomposition", "Transpiration"], "Producers fix CO₂ into organic molecules.");
    mc("8.3", "How does carbon return from living things to the atmosphere?", ["Cellular respiration", "Photosynthesis", "Plant uptake from soil", "Nitrogen fixation"], "Organic molecules are broken down to CO₂.");
    mc("8.3", "Where does the energy in feces and dead organisms go?", ["Decomposers use it and release it as heat", "It is destroyed once the organism dies", "It returns to the sun as light energy", "It is stored forever in the soil"], "No energy disappears.");

    /* ===== 8.4 ===== */
    const bd = cat("8.4", ["Genetic diversity", "Species diversity", "Ecosystem diversity"], "Which level of biodiversity?");
    bd("Variation in DNA among individuals of a population", "Genetic diversity", "Within one species.");
    bd("The number and variety of species in an ecosystem", "Species diversity", "What Simpson's index measures.");
    bd("The variety of habitats and communities in an area", "Ecosystem diversity", "The largest scale.");
    set("8.4", {stim: "Ecosystem 1 has four species with 40, 30, 50 and 20 individuals (140 total). Ecosystem 2 has four species with 80, 65, 10 and 5 individuals (160 total). Simpson's diversity index = 1 − Σ(n/N)².", cite: "Ecosystems graphic notes"}, [
      ["What is the diversity index of ecosystem 1?", ["0.72", "0.28", "0.58", "0.42"], "1 − 5,400/19,600."],
      ["What is the diversity index of ecosystem 2?", ["0.58", "0.42", "0.72", "0.28"], "1 − 10,750/25,600."],
      ["Which ecosystem has higher species diversity, and why?", ["Ecosystem 1: its individuals are spread more evenly", "Ecosystem 2: it has more individuals in total", "Ecosystem 2: two of its species are very common", "They are equal: both have four species"], "A higher index means more diversity."]
    ]);
    mc("8.4", "Why are ecosystems with high biodiversity more stable?", ["Losing one species has a smaller effect on the others", "Every species in them eats the same food", "They contain no predators or parasites", "Their species never compete with each other for food"], "They recover from disturbances more easily.");
    mc("8.4", "What is a keystone species?", ["A species with a very large effect on its ecosystem's stability", "The single most numerous species found anywhere in an ecosystem", "Any species at the top of a food chain", "A species introduced from another region"], "Its loss can collapse the ecosystem.");
    mc("8.4", "What is an invasive species?", ["A non-native species that outcompetes native species", "A native species whose population is shrinking", "A species that lives in only one small area", "A species that eats only one kind of food"], "It adapts easily and reproduces well.");
    mc("8.4", "What usually happens to biodiversity when an invasive species spreads?", ["It declines", "It increases", "It is unchanged", "It doubles"], "Native species lose out.");
    const hi = cat("8.4", ["Reduces biodiversity", "Supports biodiversity"], "Does this reduce or support biodiversity?");
    hi("Deforestation", "Reduces biodiversity", "Habitat is lost.");
    hi("Overfishing", "Reduces biodiversity", "Populations collapse.");
    hi("Protecting a keystone species", "Supports biodiversity", "The ecosystem's structure is kept.");
    hi("Heavy pesticide use", "Reduces biodiversity", "It kills non-target species too.");
    hi("Introducing a non-native predator", "Reduces biodiversity", "Native prey may be wiped out.");
    mc("8.4", "A Simpson's index close to 1 means what?", ["High species diversity", "Low species diversity", "Only one species is present", "The ecosystem has collapsed"], "The closer to 1, the more diverse.");
  },

  drills: {
    /* exponential and logistic growth */
    "8.1": k => {
      const mode = pick(["bd", "exp", "log"]);
      if (mode === "bd"){ const b = rint(20, 90), d = rint(10, 80); return {kind:"num", text:`A population has ${b} births and ${d} deaths per year. What is dN/dt? (Use a minus sign if it is shrinking.)`, fields:[k.F.num("dN/dt", b - d)], steps:[`B − D = ${b} − ${d} = ${b - d}.`]}; }
      if (mode === "exp"){ const r = pick([0.1, 0.2, 0.5]), N = rint(2, 40) * 10; return {kind:"num", text:`A population of ${N} is growing exponentially with rmax = ${r}. What is dN/dt?`, fields:[k.F.num("dN/dt", Math.round(r * N))], steps:[`rmax × N = ${r} × ${N} = ${Math.round(r * N)}.`]}; }
      const K = pick([1000, 2000]), r = pick([0.5, 1]), N = K * pick([0.1, 0.2, 0.5, 0.8, 1, 1.2]), a = Math.round(r * N * (K - N) / K);
      return {kind:"num", text:`A population of ${N} has rmax = ${r} and a carrying capacity of ${K.toLocaleString()}. Using the logistic model, what is dN/dt? (Use a minus sign if it is shrinking.)`, fields:[k.F.num("dN/dt", a)], steps:[`rmax × N × (K − N)/K = ${r} × ${N} × (${K - N}/${K}) = ${a}.`]};
    },
    /* 10% rule */
    "8.3": k => {
      const P = pick([10000, 50000, 200000, 1000000]), lvl = rint(1, 3), names = ["primary", "secondary", "tertiary"];
      return {kind:"num", text:`Producers store ${P.toLocaleString()} kJ. Using the 10% rule, about how many kJ are stored by the ${names[lvl - 1]} consumers?`, fields:[k.F.num("kJ", P / 10 ** lvl)], steps:[`Multiply by 0.1 for each step up: ${P.toLocaleString()} × 0.1${lvl > 1 ? " × 0.1".repeat(lvl - 1) : ""} = ${(P / 10 ** lvl).toLocaleString()}.`]};
    }
  }
});
})();
