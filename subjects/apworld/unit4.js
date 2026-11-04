/* AP World History · Ch 22–27 (c. 1450–1800)
   Source: Bentley, Traditions & Encounters (chapters numbered like the class term lists).
   Same format as unit3.js: teaching notes, AP-style source questions, SAQ and LEQ prompts. No memorization drills. */
(() => {
const key = rows => ({table:{head:["Term", "What it is · why it matters"], rows}});

Study.addUnit("apwh", {
  id: "u4",
  name: "Ch 22–27",
  short: "Ch 22–27",
  sections: [
    {id:"22", name:"Ch 22: Transoceanic Encounters"},
    {id:"23", name:"Ch 23: Transforming Europe"},
    {id:"24", name:"Ch 24: New Worlds (Americas)"},
    {id:"25", name:"Ch 25: Africa & the Atlantic"},
    {id:"26", name:"Ch 26: China & Japan"},
    {id:"27", name:"Ch 27: The Islamic Empires"}
  ],

  notes: {
    "22": [
      {p:"European sailors went looking for sea routes to Asian spices and ended up connecting every part of the world. The result was global trade, the exchange of plants, animals, and diseases between hemispheres, and fierce competition among European states."},
      {h:"Why and how they sailed"},
      {p:"Motives: profit from spices and silk without Muslim and Venetian middlemen, plus spreading Christianity. **Prince Henry** of Portugal sponsored early voyages. Better ships, the compass, and the **volta do mar** (\"turn of the sea\") made it possible: instead of fighting headwinds home, Portuguese ships sailed out into the open Atlantic to catch winds that carried them back."},
      {h:"The voyages"},
      {p:"**Vasco da Gama** reached India in 1498. **Christopher Columbus**, sailing for Spain, reached the Caribbean in 1492 while looking for Asia. **Ferdinand Magellan**'s expedition (1519–1522) went all the way around the world, though he died in the Philippines. Much later, Britain's **James Cook** mapped the Pacific, Australia, and New Zealand (1768–1779)."},
      {h:"Trading-post empires and companies"},
      {p:"The Portuguese, led by **Afonso D'Alboquerque**, used cannons to seize key ports (Hormuz, Goa, Melaka) and tried to control Indian Ocean trade. The English and Dutch used **Joint-Stock Companies**, where many investors pooled money and shared risk: the **English East India Company** and the Dutch **VOC**, which tried to monopolize spices. Spanish **Galleons** carried American silver across the Pacific to Manila, linking the Americas to Chinese markets."},
      {h:"Competition and expansion"},
      {p:"European rivalries went global. The **Seven Years' War** (1756–1763) was fought in Europe, North America, and India; Britain won, gaining Canada and dominance in India. Over land, **Russian Expansion** pushed across Siberia to the Pacific, driven by the fur trade."},
      {h:"The Columbian Exchange"},
      {p:"The **Columbian Exchange** was the transfer of plants, animals, diseases, and people between the Americas and the rest of the world. Smallpox and other diseases killed most of the native population of the Americas. American crops like maize and potatoes spread to Europe, Africa, and Asia and fueled population growth there. Horses, cattle, and pigs came to the Americas."},
      key([
        ["Prince Henry", "Portuguese prince who sponsored exploration of Africa's coast."],
        ["Volta do Mar", "Sailing strategy: swing out into the Atlantic to catch winds home."],
        ["Vasco de Gama", "Reached India by sea (1498), opening direct Europe–Asia trade."],
        ["Christopher Columbus", "Reached the Caribbean in 1492 for Spain, linking the hemispheres."],
        ["Ferdinand Magellan", "Led the first expedition to sail around the world (1519–1522)."],
        ["James Cook", "British captain who explored the Pacific (1768–1779)."],
        ["Afonso D'Alboquerque", "Portuguese commander who seized key Indian Ocean ports with cannons."],
        ["Galleons", "Large Spanish ships; carried American silver to Manila and China."],
        ["Joint-Stock Companies", "Businesses where many investors pooled money and shared risk."],
        ["English East India Company", "English joint-stock company trading in Asia (founded 1600)."],
        ["VOC", "Dutch East India Company (1602); tried to monopolize the spice trade."],
        ["Seven Years' War", "1756–1763: first global war; Britain beat France."],
        ["Columbian Exchange", "Transfer of crops, animals, diseases, and people between hemispheres."],
        ["Russian Expansion", "Russia's push across Siberia to the Pacific, driven by furs."]
      ]),
      {tip:"AP connection: the Columbian Exchange is one of the most tested topics. Know an effect on each side: depopulation in the Americas, population growth in Afro-Eurasia from new crops."}
    ],
    "23": [
      {p:"Between 1500 and 1800, Europe changed from the inside: the church split, kings grew more powerful, science changed how people understood nature, and thinkers began questioning traditional authority."},
      {h:"The Reformation"},
      {p:"In 1517 **Martin Luther** attacked the sale of **indulgences** (church pardons for sins) and argued salvation comes through faith and the Bible, not the church's authority. The printing press spread his ideas fast. **John Calvin** in Geneva taught predestination. **Henry VIII** broke England from the pope (largely to end his marriage) and made himself head of the Church of England."},
      {h:"The Catholic response"},
      {p:"The **Catholic Reformation** fixed abuses and reaffirmed Catholic teaching. **Ignatius Loyola** founded the **Jesuits**, who built schools and sent missionaries worldwide. The **Spanish Inquisition** hunted heresy."},
      {h:"Wars and states"},
      {p:"**Charles V**, ruler of Spain and the Holy Roman Empire, tried and failed to stop Protestantism. Religious conflict peaked in the **30 Years' War** (1618–1648). The **Peace of Westphalia** (1648) ended it and set up Europe as a system of sovereign, competing states. Many rulers turned to **Absolutism**, claiming total power: **Louis XIV** of France (\"I am the state\") and **Peter I** (Peter the Great), who forced Russia to modernize along western lines."},
      {h:"The Scientific Revolution"},
      {p:"**Nicholas Copernicus** argued the earth orbits the sun. **Galileo Galilei** backed this with telescope observations and was tried by the church. **Isaac Newton** explained motion and gravity with mathematical laws. Truth could now come from observation and math, not just tradition."},
      {h:"The Enlightenment"},
      {p:"The **Enlightenment** applied reason to society. **John Locke** said people have natural rights to life, liberty, and property, and government rests on the consent of the governed. **Voltaire** attacked religious intolerance. **Adam Smith** argued free markets work best (capitalism). **Deism** pictured God as a clockmaker who created the universe and then let it run by natural laws."},
      key([
        ["Martin Luther", "Started the Protestant Reformation in 1517."],
        ["Indulgences", "Church pardons for sins, often sold; Luther's first target."],
        ["John Calvin", "Protestant reformer in Geneva; taught predestination."],
        ["Henry VIII", "English king who split from Rome and founded the Church of England."],
        ["Catholic Reformation", "Catholic effort to reform abuses and fight Protestantism."],
        ["Ignatius Loyola", "Founder of the Jesuits."],
        ["Jesuits", "Catholic order focused on education and worldwide missions."],
        ["Spanish Inquisition", "Spanish court that hunted heresy."],
        ["Charles V", "Ruler of Spain and the Holy Roman Empire; fought Protestantism."],
        ["30 Years' War", "1618–1648: Europe's most destructive religious war."],
        ["Peace of Westphalia", "1648 treaty ending the war; set up a system of sovereign states."],
        ["Absolutism", "Kings claiming total power over their states."],
        ["Louis XIV", "French absolute monarch, \"the Sun King.\""],
        ["Peter I", "Russian tsar who westernized and modernized Russia."],
        ["Nicholas Copernicus", "Argued the earth orbits the sun."],
        ["Galileo Galilei", "Used a telescope to support Copernicus; tried by the church."],
        ["Isaac Newton", "Explained motion and gravity with mathematical laws."],
        ["Enlightenment", "Movement applying reason to government and society."],
        ["John Locke", "Natural rights and government by consent."],
        ["Voltaire", "Enlightenment writer who attacked religious intolerance."],
        ["Adam Smith", "Economist who argued for free markets."],
        ["Deism", "Belief in a creator God who doesn't intervene in the world."]
      ]),
      {tip:"AP connection: Locke's ideas lead straight to the American and French revolutions (next units). Westphalia is the start of the modern state system."}
    ],
    "24": [
      {p:"Disease and conquest transformed the Americas. Epidemics killed most indigenous people, Spanish conquistadores toppled the Aztec and Inca empires, and Europeans built colonial societies that relied on forced native labor and, later, enslaved Africans."},
      {h:"First contact"},
      {p:"The **Taino** of the Caribbean met Columbus first. Smallpox and forced labor nearly wiped them out within decades. Spain and Portugal divided the non-European world in the **Treaty of Tordesillas** (1494), which is why Brazil became Portuguese."},
      {h:"Conquest"},
      {p:"**Conquistadores** were Spanish soldier-adventurers. **Hernan Cortes** conquered the Aztecs (1519–1521) with the help of native allies who resented Aztec rule, plus steel weapons, horses, and smallpox. **Francisco Pizarro** conquered the Inca, capturing the emperor **Atahualpa** (who had just won a civil war), taking a huge ransom, and then executing him."},
      {h:"Running the colonies"},
      {p:"Spain ruled through **viceroys** (royal governors of New Spain and Peru), checked by **audiencias**, courts that heard appeals and reviewed the viceroys. The **encomienda** gave Spanish settlers the right to native labor and tribute in return for Christianizing them; it led to terrible abuse. In Peru, Spain adapted the Inca **mita system**, a labor draft, to force natives to work in silver mines like Potosí."},
      {h:"A mixed society"},
      {p:"A **mestizo** was a person of mixed European and indigenous ancestry. Colonial society ranked people by birth and ancestry, with Spanish-born elites at the top."},
      key([
        ["Taino", "Caribbean people first met by Columbus; devastated by disease and forced labor."],
        ["Treaty of Tordesillas", "1494 line dividing claims between Spain and Portugal."],
        ["Conquistadores", "Spanish soldier-adventurers who conquered American empires."],
        ["Hernan Cortes", "Conquered the Aztecs (1519–1521) with native allies and smallpox."],
        ["Francisco Pizarro", "Conquered the Inca empire."],
        ["Atahualpa", "Inca emperor captured, ransomed, and executed by Pizarro."],
        ["Viceroy", "Royal governor ruling a Spanish colony for the king."],
        ["Audiencias", "Spanish colonial courts that checked the viceroys."],
        ["Encomienda", "Settlers got native labor and tribute in return for Christianizing them."],
        ["Mita System", "Inca labor draft that Spain used to force work in silver mines."],
        ["Mestizo", "Person of mixed European and indigenous ancestry."]
      ]),
      {tip:"AP connection: when asked why so few Spaniards beat huge empires, give three causes: disease, native allies, and technology."}
    ],
    "25": [
      {p:"The Atlantic world pulled Africa into a global economy. African states traded with Europeans, adopted (and adapted) Christianity in places, and were devastated by the transatlantic slave trade, which removed 16 million or more people from their home societies."},
      {h:"States and Islam"},
      {p:"**Songhay** replaced Mali as west Africa's great empire; **Sunni Ali** (1464–1493) built it by conquering trade cities like Timbuktu. It fell in 1591 to a Moroccan army with guns. Later, the Muslim **Fulani** led movements to purify Islam in west Africa."},
      {h:"Kongo, Angola, and the Portuguese"},
      {p:"**Afonso I** of Kongo became a devout Catholic and wanted Portuguese trade and teachers, but he wrote to the Portuguese king protesting the slave trade that was tearing his kingdom apart. In Angola, Queen **Nzinga** led armies against the Portuguese for decades. **Dona Beatriz** started the Antonian movement, a Kongolese form of Christianity mixing Catholic and African ideas; she was executed as a heretic in 1706."},
      {h:"The slave trade"},
      {p:"The **Triangular Trade** connected three continents: European goods (guns, cloth) to Africa, enslaved Africans to the Americas, and American sugar, tobacco, and cotton to Europe. The **Middle Passage** was the brutal Atlantic crossing; many died from disease and abuse. **Olaudah Equiano** was enslaved as a boy, bought his freedom, and wrote a famous autobiography that helped the abolition movement. Some enslaved people escaped and formed **Maroon** communities in mountains and forests."},
      key([
        ["Songhay", "West African empire that replaced Mali (1400s–1591)."],
        ["Sunni Ali", "Ruler who built the Songhay empire by conquest."],
        ["Fulani", "West African Muslims who led movements to purify Islam."],
        ["Afonso I", "Catholic king of Kongo who protested the slave trade."],
        ["Nzinga", "Queen in Angola who resisted the Portuguese for decades."],
        ["Dona Beatriz", "Led a Kongolese Christian movement blending African beliefs; executed 1706."],
        ["Triangular Trade", "Goods to Africa, slaves to the Americas, crops to Europe."],
        ["Middle Passage", "The deadly Atlantic crossing of enslaved Africans."],
        ["Olaudah Equiano", "Formerly enslaved writer whose book aided abolition."],
        ["Maroons", "Escaped slaves who formed their own communities."]
      ]),
      {tip:"AP connection: Dona Beatriz is a great example of syncretism, and Afonso I shows Africans were not passive. Rulers made choices and pushed back."}
    ],
    "26": [
      {p:"China and Japan stayed in control of their own affairs. Both brought stability, limited foreign influence, and still changed a lot inside: new American crops, population growth, and rising merchants."},
      {h:"Ming China (1368–1644)"},
      {p:"The **Ming Dynasty** restored Chinese rule after the Mongols. **Yongle** moved the capital to Beijing, built the **Forbidden City** (the walled imperial palace), and sent **Zheng He**'s fleets across the Indian Ocean. The Ming rebuilt the **Great Wall** into the form seen today to keep out the Mongols. **Scholar-Bureaucrats**, who passed the civil service exams, ran the government and held top social status."},
      {h:"Qing China (1644–1911)"},
      {p:"Manchus from the northeast founded the **Qing Dynasty**. **Kangxi** (ruled 1661–1722) was a Confucian scholar and conqueror who took Taiwan. **Qianlong** (ruled 1736–1795) expanded into central Asia and Tibet. Both kept Confucian traditions and controlled foreign trade closely."},
      {p:"**Matteo Ricci**, a Jesuit, learned Chinese and impressed officials with clocks and European science, but won few converts."},
      {h:"Tokugawa Japan (1600–1867)"},
      {p:"**Ieyasu** of the Tokugawa clan unified Japan and founded the **Tokugawa Shogunate**. The **daimyo** (regional lords) had to spend every other year in the capital Edo and leave family there, which kept them under control. Japan banned Christianity and limited European contact to a few Dutch traders. In the cities, merchants enjoyed the **Floating Worlds**, entertainment districts with theater, teahouses, and new art forms."},
      key([
        ["Ming Dynasty", "Chinese dynasty (1368–1644) that restored native rule."],
        ["Yongle", "Ming emperor: moved capital to Beijing, built the Forbidden City, sent Zheng He."],
        ["Forbidden City", "The walled imperial palace in Beijing."],
        ["Great Wall", "Rebuilt by the Ming in its current form to block the Mongols."],
        ["Zheng He", "Ming admiral who led huge fleets to the Indian Ocean."],
        ["Scholar-Bureaucrats", "Officials who passed Confucian exams; China's top class."],
        ["Qing Dynasty", "Manchu dynasty ruling China (1644–1911)."],
        ["Kangxi", "Qing emperor: Confucian scholar and conqueror of Taiwan."],
        ["Qianlong", "Qing emperor who expanded the empire to its largest."],
        ["Matteo Ricci", "Jesuit missionary who used science to win access in China."],
        ["Ieyasu", "Founder of the Tokugawa shogunate."],
        ["Tokugawa Shogunate", "Military government that unified and stabilized Japan (1600–1867)."],
        ["Daimyo", "Regional lords in Japan, controlled by the Tokugawa."],
        ["Floating Worlds", "Urban entertainment districts that catered to merchants."]
      ]),
      {tip:"AP connection: compare how Ming/Qing China and Tokugawa Japan limited European contact to protect stability."}
    ],
    "27": [
      {p:"Three Muslim \"gunpowder empires\" dominated from the eastern Mediterranean to India: the Ottomans, Safavids, and Mughals. All three used cannons and firearms, built splendid capitals, and ruled diverse populations. All three grew weaker in the 1700s."},
      {h:"Ottoman Empire"},
      {p:"Founded by **Osman** around 1300, the **Ottoman** state grew in Anatolia and the Balkans. **Mehmed the Conqueror** took Constantinople in 1453 and made it Istanbul. **Suleyman the Magnificent** (1520–1566) brought the empire to its peak, besieging Vienna and issuing law codes."},
      {h:"Safavid Empire (Persia)"},
      {p:"**Shah Ismail** founded the **Safavid** empire in 1501 and made Shia Islam the state religion, making the Safavids bitter rivals of the Sunni Ottomans. **Shah Abbas** (1588–1629) revived the empire and built a magnificent capital at Isfahan."},
      {h:"Mughal Empire (India)"},
      {p:"**Babur**, a descendant of Tamerlane, invaded from central Asia and took Delhi in 1526, founding the **Mughal** empire. **Akbar** (1556–1605) ruled with religious tolerance, ending the tax on non-Muslims and welcoming Hindus into government. Shah Jahan built the **Taj Mahal** as a tomb for his wife. **Aurangzeb** (1659–1707) expanded the empire to its largest but persecuted Hindus and brought back the non-Muslim tax, which sparked revolts and weakened the empire."},
      key([
        ["Osman", "Founder of the Ottoman state."],
        ["Ottoman", "Turkish Sunni empire centered on Istanbul."],
        ["Mehmed the Conqueror", "Ottoman sultan who took Constantinople (1453)."],
        ["Suleyman the Magnificent", "Ottoman sultan at the empire's peak; besieged Vienna."],
        ["Safavid", "Shia empire in Persia; rivals of the Ottomans."],
        ["Shah Ismail", "Founder of the Safavid empire; made Shia Islam official."],
        ["Shah Abbas", "Safavid ruler who revived the empire; capital at Isfahan."],
        ["Mughal", "Muslim empire ruling most of India."],
        ["Babur", "Founder of the Mughal empire (1526)."],
        ["Akbar", "Mughal emperor known for religious tolerance."],
        ["Taj Mahal", "Tomb built by Shah Jahan; symbol of Mughal wealth."],
        ["Aurangzeb", "Mughal emperor: largest empire, but intolerance sparked revolts."]
      ]),
      {tip:"AP connection: compare Akbar's tolerance with Aurangzeb's intolerance and their effects. It's a classic \"how rulers legitimized and kept power\" example."}
    ]
  },

  saq: [
    {sec:"22", parts:[
      {q:"Identify ONE technology that made European transoceanic voyages possible.", model:"The magnetic compass and astrolabe, along with the volta do mar sailing strategy, let Portuguese ships navigate the open Atlantic and return home.", look:["caravel","lateen","sternpost","astrolabe","compass","volta do mar","galleon","cannon"]},
      {q:"Explain ONE way joint-stock companies helped European states expand overseas trade.", model:"Joint-stock companies like the VOC pooled money from many investors and spread out the risk, so they could fund fleets, forts, and armies in Asia.", look:["investor","risk","capital","voc","east india","monopol","army","share"]},
      {q:"Explain ONE effect of the Columbian Exchange on Afro-Eurasia.", model:"American crops like maize and potatoes produced more calories per acre, which supported population growth in Europe, Africa, and China.", look:["maize","potato","population","manioc","cassava","crop","calorie","sweet potato"]}
    ]},
    {sec:"23", parts:[
      {q:"Identify ONE cause of the Protestant Reformation.", model:"Martin Luther objected to the Church selling indulgences, which he saw as corruption, and the printing press spread his criticism quickly.", look:["indulgence","luther","corrupt","printing","95","church","pope"]},
      {q:"Explain ONE way the Catholic Church responded to Protestantism.", model:"In the Catholic Reformation, the Church corrected abuses and founded the Jesuits, whose schools and missions won back followers and spread Catholicism worldwide.", look:["jesuit","loyola","trent","inquisition","catholic reformation","missionar","education","school"]},
      {q:"Explain ONE way Enlightenment ideas challenged traditional authority.", model:"John Locke argued that people have natural rights and government depends on their consent, which undermined kings' claims to rule by divine right.", look:["locke","natural right","consent","voltaire","toleran","reason","absolut","divine right"]}
    ]},
    {sec:"24", parts:[
      {q:"Identify ONE reason the Spanish were able to conquer the Aztec or Inca empire.", model:"Smallpox epidemics killed huge numbers of native people, weakening the empires before and during the Spanish attacks.", look:["smallpox","disease","all","tlaxcala","steel","horse","civil war","atahualpa"]},
      {q:"Explain ONE way Spain used indigenous labor in its American colonies.", model:"Spain adapted the Inca mita, forcing villages to send workers to silver mines like Potosí, where silver made Spain rich.", look:["encomienda","mita","potos","silver","mine","forced","hacienda"]},
      {q:"Explain ONE way Spanish colonial society was organized by ancestry.", model:"Peninsulares born in Spain held the top offices, creoles ranked below them, and mestizos, indigenous people, and Africans ranked lower, so birth decided opportunity.", look:["peninsular","creole","mestizo","mulatto","casta","hierarch"]}
    ]},
    {sec:"25", stim:"Each day merchants carry away our people, sons of the land and of our nobles and vassals. So great is the corruption that our country is being completely depopulated. We need from your kingdoms nothing but priests and teachers for schools.", cite:"Adapted from a letter by King Afonso I of Kongo to King João III of Portugal, 1526", parts:[
      {q:"Identify ONE concern Afonso I expresses in the letter.", model:"He complains that Portuguese merchants are kidnapping and enslaving his people, including nobles, and depopulating Kongo.", look:["slave","kidnap","merchant","depopul","people","nobles"]},
      {q:"Explain ONE reason Afonso I still wanted ties with Portugal.", model:"Afonso was a devout Catholic who wanted priests and teachers, and European contact also offered trade goods and prestige for his rule.", look:["catholic","christian","priest","teacher","school","trade","goods"]},
      {q:"Explain ONE broader effect of the Atlantic slave trade on African societies.", model:"Demand for captives fueled wars between African states and removed millions of young people, which disrupted societies and economies across west and central Africa.", look:["war","population","depopul","instabil","gun","men","gender","disrupt"]}
    ]},
    {sec:"26", parts:[
      {q:"Identify ONE way the Ming dynasty tried to restore Chinese traditions after Mongol rule.", model:"The Ming revived the Confucian civil service exams and bureaucracy and worked to erase Mongol influence.", look:["confucian","exam","mongol","great wall","forbidden city","bureaucra","scholar"]},
      {q:"Explain ONE way Tokugawa Japan controlled foreign influence.", model:"The shogunate banned Christianity and limited European trade to a few Dutch merchants at Nagasaki, because it feared foreign influence would threaten its stability.", look:["christian","ban","dutch","nagasaki","closed","sakoku","ship","edict"]},
      {q:"Explain ONE way global trade affected the economy of China or Japan.", model:"American silver flowed into China to buy silk and porcelain, while American crops boosted farming, which fueled population growth and enriched merchants.", look:["silver","american crop","population","merchant","porcelain","silk","floating world","maize","sweet potato"]}
    ]},
    {sec:"27", parts:[
      {q:"Identify ONE way gunpowder weapons helped an Islamic empire expand.", model:"Ottoman cannons broke the walls of Constantinople in 1453, letting Mehmed II capture the city.", look:["cannon","artillery","constantinople","chaldiran","janissar","panipat","firearm","musket"]},
      {q:"Explain ONE way a ruler of an Islamic empire legitimized or strengthened his power.", model:"Akbar ended the jizya and brought Hindus into government, which won the loyalty of the Hindu majority and stabilized Mughal rule.", look:["akbar","toleran","jizya","suleyman","law","shia","safavid","taj mahal","mosque","hagia sophia"]},
      {q:"Explain ONE reason for conflict between the Ottoman and Safavid empires.", model:"The Ottomans were Sunni and the Safavids made Shia Islam their state religion, so religious rivalry added to their competition over territory.", look:["sunni","shia","chaldiran","territor","religio","border"]}
    ]}
  ],

  leq: [
    {secs:["22","24","25"], skill:"Continuity and change",
      prompt:"Evaluate the extent to which the Columbian Exchange changed societies in the period c. 1450–1750.",
      context:"Before 1492, the eastern and western hemispheres had developed separately, with different crops, animals, and diseases.",
      counter:"Some things continued: many indigenous peoples kept their languages and traditions, and Afro-Eurasian trade networks stayed active.",
      evidence:["Smallpox and native population collapse","Maize and potatoes in Europe, Africa, and China","Horses and cattle in the Americas","Sugar plantations","Atlantic slave trade","American silver","Taino decline"],
      thesis:"Although many indigenous peoples preserved their cultures, the Columbian Exchange greatly changed societies from 1450 to 1750, because diseases like smallpox caused a population collapse in the Americas, and American crops like maize and potatoes fueled population growth across Afro-Eurasia."},
    {secs:["24","25"], skill:"Causation",
      prompt:"Evaluate the extent to which European colonial economies in the Americas depended on coerced labor in the period c. 1450–1750.",
      context:"After 1492 Spain and Portugal built colonies, and disease rapidly reduced the native population available for work.",
      counter:"Free and wage labor also existed, such as voluntary miners in Mexico and European settlers who worked their own farms.",
      evidence:["Encomienda","Mita at Potosí","Atlantic slave trade","Triangular trade","Middle Passage","Sugar plantations in Brazil and the Caribbean","Maroon resistance"],
      thesis:"Although some colonists and miners worked voluntarily, European colonial economies depended heavily on coerced labor, because Spain forced indigenous people to work through the encomienda and mita, and sugar plantations relied on millions of enslaved Africans."},
    {secs:["23","27","26"], skill:"Causation",
      prompt:"Evaluate the extent to which religion caused conflict in the period c. 1450–1750.",
      context:"By 1450, Christianity and Islam were each divided into rival branches, and powerful states were forming in Europe and southwest Asia.",
      counter:"Politics and power often mattered more: the Peace of Westphalia set up competing states, and Akbar used tolerance to keep peace.",
      evidence:["Protestant Reformation","Thirty Years' War","Peace of Westphalia","Spanish Inquisition","Ottoman–Safavid rivalry (Sunni vs. Shia)","Aurangzeb's policies","Akbar's tolerance (counter)","Tokugawa ban on Christianity"],
      thesis:"Although many conflicts were also struggles for political power, religion was a major cause of conflict from 1450 to 1750, because the Reformation led to wars like the Thirty Years' War in Europe, and the Sunni–Shia split fueled the Ottoman–Safavid rivalry."},
    {secs:["26","27","23"], skill:"Comparison",
      prompt:"Compare the methods that TWO land-based empires used to legitimize and consolidate their power in the period c. 1450–1750.",
      context:"Gunpowder weapons helped empires like the Ottomans, Mughals, Qing, and Russia conquer large, diverse territories, which then had to be held together.",
      counter:"Some methods were similar: most rulers used religion, monuments, and loyal officials.",
      evidence:["Ottoman: Suleyman's laws, Hagia Sophia as a mosque","Mughal: Akbar's tolerance, the Taj Mahal","Safavid: Shia Islam as state religion","Qing: Kangxi supporting Confucian learning","Tokugawa: daimyo forced to live in Edo","Louis XIV: absolutism and divine right","Peter the Great: westernization"],
      thesis:"Both the Mughals under Akbar and the Qing under Kangxi won the loyalty of majority populations different from their rulers, but the Mughals did so through religious tolerance such as ending the jizya, while the Qing did so by embracing Confucian learning and the civil service exams."}
  ],

  problems(k){
    const set = (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], "Ch " + sec, t, o, o[0], [w], {shuffle:true, stim, cite}));
    const Q = (sec, t, o, w) => k.choice([sec], "Ch " + sec, t, o, o[0], [w], {shuffle:true});
    const BG = "Background summary";

    /* ===== Ch 22 ===== */
    set("22", "When the people of Calicut asked what they had come for, the Portuguese replied: “We have come to seek Christians and spices.”",
      "Adapted from an account of Vasco da Gama's voyage to India, 1498", [
      ["The reply best reflects which motives for European exploration?", ["Both religious and economic goals", "Mainly scientific curiosity", "Escaping religious persecution in Europe", "Finding new farmland to settle"],
        "Spreading Christianity and profiting from the spice trade went hand in hand."],
      ["Portuguese power in the Indian Ocean after 1500 depended most on", ["armed ships and fortified ports used to control trade", "producing more goods than Asian societies", "alliances with the Ming navy", "conquering the interior of India"],
        "A trading-post empire: Albuquerque seized ports like Goa and Melaka and taxed shipping."]
    ]);
    set("22", "Within a century after 1519, Mexico's indigenous population fell by as much as 90 percent, from about 17 million to 1.3 million. During the same years, maize and potatoes spread through Europe, Africa, and China.",
      BG, [
      ["The population decline in Mexico is best explained by", ["epidemic diseases like smallpox, to which natives had no immunity", "famine after failed potato harvests", "emigration to Europe", "wars between the Aztecs and the Inca"],
        "Disease killed far more people than warfare did."],
      ["The spread of American crops to Afro-Eurasia most directly led to", ["population growth from larger, more reliable food supplies", "widespread famine in China", "an end to the Atlantic slave trade", "a decline in European farming"],
        "Maize and potatoes produced many calories and grew where other crops failed."]
    ]);
    set("22", "The Dutch East India Company (VOC) raised money from many investors, kept its own army and navy, and was allowed by the Dutch government to make treaties and wage war in Asia.",
      BG, [
      ["The VOC is best described as", ["a state-backed joint-stock company acting with government-like powers", "a Catholic missionary order", "a Chinese tributary mission", "a land-based gunpowder empire"],
        "It was a private company that could act almost like a state."],
      ["Joint-stock companies helped Europeans dominate maritime trade mainly because they", ["raised large amounts of money and spread the risk among investors", "were funded entirely by the pope", "avoided the use of force", "traded only within Europe"],
        "Long voyages were risky; pooling investment made them possible."]
    ]);
    set("22", "Each year Spanish galleons carried silver from Acapulco to Manila, where Chinese merchants exchanged silk and porcelain for it. Much of the silver mined in the Americas ended up in China.",
      BG, [
      ["The pattern described most directly shows that", ["American silver linked the Americas, Asia, and Europe into a global economy", "China depended on European manufactured goods", "Spain ruled China", "most silver stayed in Spain"],
        "This is a classic example of the first truly global trade network."],
      ["Which best explains why so much silver flowed to China?", ["China's huge economy demanded silver, and its goods were highly desired abroad", "China had banned all foreign trade", "Spain owed tribute to the Ming emperor", "Japan forced Spain to send it"],
        "Chinese goods were in demand everywhere, and China's economy and taxes increasingly ran on silver."]
    ]);
    Q("22", "The Seven Years' War (1756–1763) showed that by the 1750s", ["European rivalries were being fought across a global network of colonies", "European states had stopped competing with one another", "Spain controlled most of India", "Asian states dominated European politics"],
      "Britain and France fought in Europe, North America, and India at the same time.");
    Q("22", "Russian expansion across Siberia was similar to European maritime expansion in that both", ["sought valuable commodities and brought indigenous peoples under imperial control", "depended mainly on sea voyages", "began after 1900", "were run by Chinese merchants"],
      "Russia wanted furs; maritime empires wanted spices and silver. Both conquered local peoples.");

    /* ===== Ch 23 ===== */
    set("23", "They preach only human doctrines who say that as soon as the money clinks in the chest, the soul flies out of purgatory. Every truly repentant Christian has full forgiveness of punishment and guilt, even without letters of pardon.",
      "Adapted from Martin Luther, Ninety-Five Theses, 1517", [
      ["Luther's argument most directly challenged", ["the Church's authority to grant forgiveness through indulgences", "the existence of God", "the power of absolutist kings", "the heliocentric theory"],
        "He attacked selling pardons, and with it the Church's control over salvation."],
      ["Which development most helped Luther's ideas spread so quickly?", ["The printing press", "The Columbian Exchange", "The Peace of Westphalia", "The founding of the Jesuits"],
        "Printed copies of his writings spread across Germany within weeks."]
    ]);
    set("23", "The Bible was written to teach us how to go to heaven, not how the heavens go.",
      "Adapted from Galileo Galilei, letter to the Grand Duchess Christina, 1615", [
      ["Galileo's statement best reflects the idea that", ["observation and reason should explain nature, separate from religious authority", "religion should be rejected entirely", "the Inquisition was right to judge science", "ancient texts are the best guide to nature"],
        "He wasn't rejecting faith; he argued science and scripture answer different questions."],
      ["The Scientific Revolution most directly influenced the Enlightenment by", ["encouraging thinkers to apply reason and natural laws to society and government", "ending the Protestant Reformation", "causing the Thirty Years' War", "reviving scholasticism"],
        "If nature followed rational laws, thinkers asked whether society could too."]
    ]);
    set("23", "People are by nature free, equal, and independent, and no one can be put under the political power of another without his own consent. When a government violates the people's rights to life, liberty, and property, the people may resist it.",
      "Adapted from John Locke, Second Treatise of Government, 1690", [
      ["Locke's ideas most directly challenged", ["absolutism and the divine right of kings", "Adam Smith's free-market ideas", "the Protestant Reformation", "the Scientific Revolution"],
        "If power comes from the people's consent, kings don't rule by God's will alone."],
      ["Which later development was most influenced by ideas like Locke's?", ["Revolutions justified by natural rights and the consent of the governed", "The Peace of Westphalia", "The Catholic Reformation", "The Ming dynasty's restrictions on trade"],
        "The American and French revolutions drew directly on Locke."]
    ]);
    set("23", "The royal throne is not the throne of a man but the throne of God himself. The prince need give account of his acts to no one.",
      "Adapted from Bishop Jacques-Bénigne Bossuet, writing for Louis XIV, late 1600s", [
      ["This view was used to justify", ["absolute monarchy, like that of Louis XIV", "constitutional limits on kings", "Protestant church government", "Enlightenment demands for rights"],
        "Divine right said kings answered only to God."],
      ["Compared to Louis XIV, Peter the Great used absolute power especially to", ["modernize Russia by adopting western European technology and customs", "restore Catholicism in Russia", "break Russia into smaller states", "cut Russia off from Europe"],
        "He built a navy, a new capital, and forced western dress and education on nobles."]
    ]);
    Q("23", "The Peace of Westphalia (1648) marked a shift in Europe from", ["religion as the main source of conflict toward competition among sovereign states", "monarchy toward democracy", "trade toward farming", "science toward religion"],
      "States recognized each other's sovereignty and began balancing power, regardless of religion.");
    Q("23", "Adam Smith's argument for free markets was mainly a criticism of", ["mercantilist policies that tightly regulated trade to benefit the state", "the Protestant work ethic", "the encomienda system", "Locke's idea of natural rights"],
      "Mercantilism tried to hoard gold and control trade; Smith argued open markets created more wealth.");

    /* ===== Ch 24 ===== */
    set("24", "The Spaniards entered among these gentle peoples like ravening wolves. They forced them into the mines and the fields, where great numbers died of hunger and overwork.",
      "Adapted from Bartolomé de las Casas, A Short Account of the Destruction of the Indies, 1542", [
      ["Las Casas, a Spanish priest, most likely wrote this account to", ["persuade Spanish authorities to reform the treatment of native peoples", "recruit more conquistadores", "celebrate the encomienda system", "describe Aztec religion"],
        "He lobbied the king, and his writing helped produce the New Laws of 1542."],
      ["Las Casas's account is limited as evidence for the overall population collapse because", ["it focuses on Spanish cruelty, while epidemic disease caused most deaths", "he never visited the Americas", "it was written centuries later", "he supported the conquistadores"],
        "Brutality was real, but smallpox and other diseases killed far more people."]
    ]);
    set("24", "At Potosí, Spanish officials used the mita to require indigenous villages to send workers in rotation to the silver mines, where many died from accidents and mercury poisoning.",
      BG, [
      ["The mita at Potosí is an example of", ["Europeans adapting an existing indigenous labor system for colonial profit", "the Atlantic slave trade", "free wage labor", "a land grant to the Catholic Church"],
        "The Inca had used the mita for public works; Spain turned it to mining."],
      ["Silver from mines like Potosí most directly", ["fueled global trade, especially with China", "paid for the Protestant Reformation", "stayed in Peru to fund local schools", "ended Spain's wars in Europe"],
        "American silver flowed to Europe and across the Pacific to China."]
    ]);
    set("24", "In 1519 Cortés landed with about 600 soldiers. Tens of thousands of Tlaxcalans and other enemies of the Aztecs joined him, and a smallpox epidemic struck Tenochtitlan in 1520.",
      BG, [
      ["Which best explains the Spanish conquest of the Aztecs?", ["Native allies and epidemic disease, along with Spanish weapons", "Spain's much larger army", "The Aztecs having no army", "Help from Portuguese forces"],
        "Six hundred Spaniards could not have won alone; allies and smallpox were decisive."],
      ["Pizarro's conquest of the Inca was similar because it", ["took advantage of disease and a recent civil war", "relied on Aztec allies", "happened without any fighting", "occurred in the 1700s"],
        "Smallpox had killed the Inca emperor, and his sons fought a civil war just before Pizarro arrived."]
    ]);
    set("24", "Colonial Spanish America ranked people by birth: peninsulares (born in Spain) at the top, then creoles (Spaniards born in the Americas), then mestizos, with indigenous and African people at the bottom.",
      BG, [
      ["This system most directly shows that colonial societies", ["were organized around ancestry and race", "treated all colonists equally", "gave indigenous nobles the highest offices", "ranked people only by wealth"],
        "Birth decided opportunity, and these divisions later fed independence movements."],
      ["Spain's use of viceroys and audiencias shows that the crown", ["tried to keep tight royal control over distant colonies", "let colonies govern themselves", "shared power with Portugal", "ruled through native kings"],
        "Audiencias reviewed viceroys so no governor became too independent."]
    ]);
    Q("24", "The Treaty of Tordesillas (1494) is best understood as", ["European states dividing lands they hadn't yet explored, ignoring the people who lived there", "an alliance between Spain and the Aztecs", "a treaty ending the slave trade", "Portugal giving up its claim to Brazil"],
      "The pope-backed line split claims between Spain and Portugal; Brazil fell on Portugal's side.");
    Q("24", "The rapid collapse of the Taino population in the Caribbean foreshadowed", ["population collapse among native peoples throughout the Americas", "the rise of the Inca empire", "the end of Spanish colonization", "large-scale Taino migration to Europe"],
      "Disease and forced labor devastated the first people the Spanish met, and the pattern repeated everywhere.");

    /* ===== Ch 25 ===== */
    set("25", "Each day merchants carry away our people, sons of the land and of our nobles and vassals. So great is the corruption that our country is being completely depopulated. We need from your kingdoms nothing but priests and teachers for schools.",
      "Adapted from a letter by King Afonso I of Kongo to King João III of Portugal, 1526", [
      ["Afonso's letter best shows that", ["African rulers tried to limit the slave trade's damage while keeping ties with Europe", "Kongo rejected all contact with Portugal", "Afonso wanted to expand the slave trade", "Portugal had already conquered Kongo"],
        "He wanted Christianity and education, not the kidnapping of his subjects."],
      ["Afonso's request for priests and teachers most likely reflects", ["his Catholic faith and interest in European learning", "a plan to convert Portugal to Kongolese religion", "his hostility toward Christianity", "pressure from the Ottoman empire"],
        "Afonso was a devout Catholic who saw Christianity as strengthening his kingdom."]
    ]);
    set("25", "The closeness of the place and the heat, with so many people that each had scarcely room to turn, almost suffocated us. The shrieks of the women and the groans of the dying made it a scene of horror almost beyond imagining.",
      "Adapted from Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, 1789", [
      ["Equiano published this account in 1789 most likely to", ["build support for abolishing the slave trade", "advertise enslaved people for sale", "defend plantation owners", "describe the profits of the triangular trade"],
        "His book was a key text of the British abolition movement."],
      ["The conditions described help explain", ["high death rates among enslaved Africans during the Middle Passage", "why few Africans were taken to Brazil", "why the triangular trade ended in 1600", "why European sailors refused to work on slave ships"],
        "Crowding, heat, and disease killed many captives before they reached the Americas."]
    ]);
    set("25", "Most of the enslaved Africans brought to the Americas between 1500 and 1800 went to Brazil and the Caribbean, where the majority worked on sugar plantations.",
      BG, [
      ["The pattern described is best explained by", ["the huge labor demands of sugar plantations", "demand for household servants in Europe", "cotton farming in North America before 1700", "mining in Siberia"],
        "Sugar was brutal, labor-intensive work, and plantations constantly needed new workers."],
      ["Compared to slavery within Africa before 1500, Atlantic slavery was", ["far larger, hereditary, tied to race, and centered on plantation labor", "smaller and less organized", "usually ended with freedom within one generation", "run entirely by African states"],
        "Slavery existed in Africa, but the Atlantic system was different in scale and in its racial, hereditary nature."]
    ]);
    set("25", "In 1704 Dona Beatriz claimed that St. Anthony spoke through her. She taught that Jesus and Mary had been Kongolese and urged Kongo's rival leaders to reunite the kingdom. Authorities burned her as a heretic in 1706.",
      BG, [
      ["Dona Beatriz's movement best illustrates", ["syncretism, as Africans reshaped Christianity to fit their own society", "the spread of Islam into central Africa", "the Portuguese conquest of Kongo", "the Protestant Reformation reaching Africa"],
        "She blended Catholic saints with Kongolese beliefs and identity."],
      ["The political message of her movement was a response to", ["civil war and disruption worsened by the slave trade", "an Ottoman invasion of Kongo", "crop failures from the Columbian Exchange", "Mughal expansion into Africa"],
        "Kongo had split into rival factions, and slaving made the turmoil worse."]
    ]);
    Q("25", "Songhay's defeat in 1591 by a Moroccan army armed with guns best shows", ["the growing military importance of gunpowder weapons", "the spread of Christianity in west Africa", "the decline of trans-Saharan trade before 1500", "the strength of the Portuguese navy"],
      "Firearms gave a much smaller army the advantage, as in the gunpowder empires.");
    Q("25", "Maroon communities are best described as", ["a form of resistance in which escaped slaves built their own societies", "plantations owned by free Africans", "European settlements in Africa", "African states that sold captives"],
      "Escaping was one of the most serious forms of resistance, and some maroon communities lasted for generations.");

    /* ===== Ch 26 ===== */
    set("26", "Our Celestial Empire possesses all things in abundance and lacks no product within its borders. There is therefore no need to import the manufactures of outside barbarians.",
      "Adapted from the Qianlong emperor's letter to King George III of Britain, 1793", [
      ["Qianlong's response most directly reflects", ["the Chinese view of China as the superior, self-sufficient Middle Kingdom", "China's dependence on British goods", "Japan's closed-country policy", "Confucian respect for merchants"],
        "He treated Britain like any other tributary state."],
      ["Which development best explains Qianlong's confidence?", ["The Qing empire's prosperity and expansion in the 1700s", "China's defeat in the Opium War", "Mongol rule over China", "European control of Chinese ports"],
        "In 1793 the Qing was at its largest and richest; the Opium War came later."]
    ]);
    set("26", "Japanese ships are strictly forbidden to leave for foreign countries. Any Japanese who returns from living overseas must be put to death. Wherever the teachings of the padres are practiced, investigate thoroughly.",
      "Adapted from the Tokugawa shogunate's Closed Country Edict, 1635", [
      ["The edict was mainly intended to", ["protect Tokugawa stability by limiting foreign and Christian influence", "expand Japanese trade in southeast Asia", "welcome European missionaries", "prepare an invasion of China"],
        "The shogunate saw Christianity and foreign ties as threats to its control."],
      ["Compared to Tokugawa Japan, Ming and Qing China", ["also restricted foreign trade and missionaries but kept more limited contact", "allowed unlimited European trade", "banned every form of foreign contact", "converted to Christianity"],
        "Both kept Europeans at arm's length; China confined trade to certain ports."]
    ]);
    set("26", "The entire kingdom is administered by the order of the learned, commonly known as the philosophers. Responsibility for the orderly management of the whole realm is entrusted entirely to them.",
      "Adapted from the journals of Matteo Ricci, Jesuit missionary in China, c. 1600", [
      ["Ricci is describing", ["the power of scholar-bureaucrats chosen through Confucian exams", "the dominance of Buddhist monks", "Manchu military rule", "merchant control of government"],
        "Confucian scholars who passed the exams ran the Ming government."],
      ["Ricci's strategy of studying the Confucian classics and dressing as a scholar shows", ["missionaries adapting to local culture to gain acceptance", "the Jesuits rejecting Chinese culture", "Chinese officials converting in large numbers", "Qing support for Protestantism"],
        "He won respect at court, though very few converts."]
    ]);
    set("26", "In Tokugawa Japan, merchants officially ranked below samurai, peasants, and artisans, yet many grew rich. Cities like Osaka and Edo developed “floating worlds” of kabuki theater, teahouses, and woodblock prints.",
      BG, [
      ["This passage best illustrates", ["economic growth raising merchants' influence despite their low official status", "the decline of Japanese cities", "samurai becoming merchants by law", "European influence on Japanese art"],
        "Wealth gave merchants cultural power the official hierarchy didn't recognize."],
      ["A similar development in Ming and Qing China was", ["merchants gaining wealth and status as trade and American crops expanded the economy", "merchants becoming the top class by law", "the end of the civil service exams", "a long population decline"],
        "In both societies, economic change outpaced the Confucian ranking of classes."]
    ]);
    Q("26", "The Ming rebuilding of the Great Wall and the end of Zheng He's voyages both reflect", ["a focus on defending China's northern frontier against nomads", "Ming plans to conquer Japan", "European pressure on China", "the Ming collapse in 1644"],
      "The Ming considered the Mongols the real threat and put resources into the north.");
    Q("26", "Manchu Qing emperors like Kangxi supported Confucian learning mainly to", ["win the support of Chinese scholar-officials for foreign Manchu rule", "convert China to Christianity", "abolish the civil service exams", "weaken the bureaucracy"],
      "As outsiders, the Manchus ruled through Chinese traditions to gain legitimacy.");

    /* ===== Ch 27 ===== */
    set("27", "In making appointments, the Sultan pays no attention to wealth or rank. Those who hold the highest offices are very often sons of shepherds or herdsmen; they owe their positions to their own merit.",
      "Adapted from Ogier Ghiselin de Busbecq, Habsburg ambassador to the Ottoman court, 1550s", [
      ["Which comparison is most valid?", ["Like China's exam system, Ottoman practice aimed to staff government with capable, loyal officials rather than nobles", "Like Europe's nobility, Ottoman offices were inherited", "Like the Aztecs, the Ottomans ruled through tribute alone", "Like the Holy Roman Empire, the sultan had little power"],
        "Both systems chose officials loyal to the ruler rather than to powerful families."],
      ["Busbecq, a European diplomat, most likely included this observation to", ["contrast Ottoman merit with Europe's birth-based nobility", "praise the Habsburg system", "explain the Ottoman defeat at Vienna", "describe Ottoman religion"],
        "Sourcing: he was writing for European readers, implicitly criticizing his own society."]
    ]);
    set("27", "His Majesty abolished the jizya, the tax on non-Muslims. He invited learned men of every religion to debate in his House of Worship.",
      "Adapted from Abul Fazl, court historian of the Mughal emperor Akbar, late 1500s", [
      ["Akbar's policies were most likely meant to", ["win the loyalty of the Hindu majority and strengthen Mughal rule", "convert all Indians to Islam", "weaken his own government", "please the Ottoman sultan"],
        "A Muslim dynasty ruling a mostly Hindu land needed broad support."],
      ["How did Aurangzeb's approach differ, and with what result?", ["He restored the jizya and persecuted Hindus, sparking revolts that weakened the empire", "He continued Akbar's tolerance, and the empire grew stronger", "He converted to Hinduism", "He gave India to Persia"],
        "The empire reached its largest size under him, but resentment and rebellion followed."]
    ]);
    set("27", "In 1501 Shah Ismail declared Shia Islam the official religion of his new Safavid state. In 1514 the Sunni Ottomans defeated Safavid cavalry at Chaldiran using artillery and soldiers with firearms.",
      BG, [
      ["The rivalry described was intensified by", ["religious differences between Sunni Ottomans and Shia Safavids", "competition over American silver", "a shared alliance against Europe", "a Mughal invasion of Persia"],
        "Religion added to their struggle over borderlands."],
      ["The Ottoman victory at Chaldiran best illustrates", ["the military advantage of gunpowder weapons", "the decline of the Ottoman empire", "the success of Mongol cavalry tactics", "the importance of naval power"],
        "Cannons and muskets beat traditional cavalry, a key reason these are called gunpowder empires."]
    ]);
    set("27", "After capturing Constantinople in 1453, Mehmed II made it his capital, Istanbul, turned Hagia Sophia into a mosque, and invited Greeks, Armenians, and Jews to resettle the city.",
      BG, [
      ["Mehmed's actions best show Ottoman rulers", ["combining Islamic legitimacy with tolerance of diverse subjects", "forcing all Christians to convert", "abandoning the city", "keeping Byzantine rule in place"],
        "The mosque announced Islamic rule; resettlement rebuilt a thriving, diverse capital."],
      ["The Ottoman, Safavid, and Mughal empires were similar in that all three", ["used gunpowder weapons and ruled religiously diverse populations", "were Shia Muslim states", "were founded directly by the Mongols", "avoided building monuments"],
        "Only the Safavids were Shia; all three used gunpowder and governed diverse peoples."]
    ]);
    Q("27", "The Taj Mahal best reflects", ["Mughal wealth and a blend of Persian, Islamic, and Indian artistic traditions", "Ottoman military power", "Safavid Shia identity", "European influence on Indian architecture"],
      "Shah Jahan's tomb for his wife mixes Persian design with Indian craftsmanship.");
    Q("27", "Suleyman's reign is often seen as the Ottoman peak because the empire", ["reached its greatest power, expanding into Europe and issuing major law codes", "first captured Constantinople", "converted to Shia Islam", "began to lose territory to Russia"],
      "He besieged Vienna in 1529, and Ottomans remember him as \"the Lawgiver.\"");
  }
});
})();
