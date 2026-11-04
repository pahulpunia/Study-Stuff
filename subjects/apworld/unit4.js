/* AP World History · Ch 22–27 (c. 1450–1800)
   Source: Bentley, Traditions & Encounters (chapters numbered like the class term lists).
   Same format as unit3.js: teaching notes, AP-style source questions, SAQ and LEQ prompts. No memorization drills. */
(() => {
/* simple horizontal bar chart (SVG) for chart-based questions; colors come from the theme */
const hbar = (title, rows, fmt) => {
  const W = 600, rowH = 34, top = 40, left = 190, max = Math.max(...rows.map(r => r[1])), H = top + rows.length * rowH + 16;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}"><text x="0" y="20" font-size="16" font-weight="700">${esc(title)}</text>` +
    rows.map(([label, v], i) => { const y = top + i * rowH, w = Math.max(2, (W - left - 70) * v / max);
      return `<text x="${left - 10}" y="${y + 20}" font-size="14" text-anchor="end">${esc(label)}</text><rect class="bar" x="${left}" y="${y + 5}" width="${w.toFixed(1)}" height="22" rx="4"/><text x="${left + w + 8}" y="${y + 21}" font-size="14" font-weight="700">${esc(fmt(v))}</text>`; }).join("") +
    `<line class="axis" x1="${left}" y1="${top}" x2="${left}" y2="${H - 12}" stroke-width="1.5"/></svg>`;
};
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
    const pic = (sec, file, alt, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], "Ch " + sec, t, o, o[0], [w], {shuffle:true, img:{file, alt}, cite}));
    const chart = (sec, svg, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], "Ch " + sec, t, o, o[0], [w], {shuffle:true, svg, cite}));

    /* ===== Ch 22 ===== */
    set("22", "When the people of Calicut asked what they had come for, the Portuguese replied: “We have come to seek Christians and spices.”",
      "Adapted from an account of Vasco da Gama's voyage to India, 1498", [
      ["The reply best reflects which motives for European exploration?", ["Both religious and economic goals", "Mainly scientific curiosity", "Escaping persecution at home", "Finding new farmland to settle"],
        "Spreading Christianity and profiting from the spice trade went hand in hand."],
      ["Portuguese power in the Indian Ocean after 1500 depended most on", ["armed ships and fortified ports used to control trade", "producing more goods than Asian societies could make", "a lasting alliance with the Ming navy against rivals", "conquering the interior of India with large armies"],
        "A trading-post empire: Albuquerque seized ports like Goa and Melaka and taxed shipping."],
      ["The reply suggests the Portuguese expected to find in India", ["Christian allies and access to the spice trade", "empty land where Portuguese farmers could settle", "silver mines to pay for Portugal's wars", "a land route that led on to China"],
        "Europeans hoped to find Christian allies against Muslim powers as well as spices."]
    ]);
    chart("22", hbar("Indigenous population of Mexico (millions)", [["1519", 17], ["About a century later", 1.3]], v => `${v} million`),
      "Estimates given in Bentley, Traditions & Encounters", [
      ["Which best explains the change shown in the chart?", ["Epidemic diseases such as smallpox", "Famine after a series of failed potato harvests", "Large numbers of natives emigrating to Spain", "Wars between the Aztec and Inca empires"],
        "Disease killed far more people than warfare did. Native Americans had never been exposed to Afro-Eurasian diseases."],
      ["A historian could best use this chart as evidence of", ["the demographic impact of the Columbian Exchange", "the encomienda system protecting native peoples", "rapid population growth in Mexico after 1519", "the effects of the Little Ice Age in Europe"],
        "A loss of as much as 90 percent in a century is the clearest effect of the exchange of diseases."],
      ["The change shown most directly encouraged Europeans to", ["import enslaved Africans to replace native workers", "abandon their American colonies and return home", "shut down the silver mines of Mexico and Peru", "stop trading with China and India altogether"],
        "With native workers dying, colonists turned to the Atlantic slave trade."]
    ]);
    set("22", "The Dutch East India Company (VOC) raised money from many investors, kept its own army and navy, and was allowed by the Dutch government to make treaties and wage war in Asia.",
      BG, [
      ["The VOC is best described as", ["a joint-stock company with government-like powers", "a Catholic missionary order working in the East Indies", "a Chinese tributary mission sent to Dutch ports", "a land-based gunpowder empire ruling Java"],
        "It was a private company that could act almost like a state."],
      ["Joint-stock companies helped Europeans dominate maritime trade mainly because they", ["raised large sums and spread the risk among investors", "were funded entirely by the pope and the Catholic Church", "avoided any use of force against Asian rulers or rivals", "traded only within Europe and left Asian trade to others"],
        "Long voyages were risky; pooling investment made them possible."],
      ["The VOC's powers suggest that European states", ["used private companies to extend their power overseas", "opposed overseas expansion and tried to limit it", "allowed China to keep control of Asian trade", "relied on missionaries to govern their colonies"],
        "Chartering companies let states expand without paying for everything themselves."]
    ]);
    set("22", "Each year Spanish galleons carried silver from Acapulco to Manila, where Chinese merchants exchanged silk and porcelain for it. Much of the silver mined in the Americas ended up in China.",
      BG, [
      ["The pattern described most directly shows that", ["American silver tied the Americas, Asia, and Europe together", "China depended on European manufactured goods to grow", "Spain ruled China through its base in the Philippines", "most of the silver mined in the Americas stayed in Spain"],
        "This is a classic example of the first truly global trade network."],
      ["Which best explains why so much silver flowed to China?", ["China's huge economy demanded silver, and its goods sold abroad", "China had banned all foreign trade except for payments in silver", "Spain owed regular tribute to the Ming emperor", "Japan forced Spain to send its silver to China"],
        "Chinese goods were in demand everywhere, and China's economy and taxes increasingly ran on silver."],
      ["Which groups benefited most directly from the trade described?", ["Spanish merchants and Chinese silk producers", "Aztec nobles who still controlled the silver mines", "Portuguese traders buying captives in Angola", "Russian fur traders crossing Siberia"],
        "Silver went to China; silk and porcelain went back across the Pacific."]
    ]);
    Q("22", "The Seven Years' War (1756–1763) showed that by the 1750s", ["European rivalries were being fought around the world", "European states had agreed to stop competing for colonies", "Spain had taken control of most of the Indian subcontinent", "Asian empires had come to dominate European politics and trade"],
      "Britain and France fought in Europe, North America, and India at the same time.");
    Q("22", "Russian expansion across Siberia was similar to European maritime expansion in that both", ["sought valuable goods and conquered indigenous peoples", "depended mainly on long sea voyages across the oceans", "began only after the year 1900 with railroads", "were organized and funded by Chinese merchants"],
      "Russia wanted furs; maritime empires wanted spices and silver. Both conquered local peoples.");

    /* ===== Ch 23 ===== */
    set("23", "They preach only human doctrines who say that as soon as the money clinks in the chest, the soul flies out of purgatory. Every truly repentant Christian has full forgiveness of punishment and guilt, even without letters of pardon.",
      "Adapted from Martin Luther, Ninety-Five Theses, 1517", [
      ["Luther's argument most directly challenged", ["the Church's power to forgive sins through indulgences", "the existence of God and the truth of the Bible itself", "the power of absolute kings to rule without limits", "the heliocentric theory of Nicholas Copernicus"],
        "He attacked selling pardons, and with it the Church's control over salvation."],
      ["Which development most helped Luther's ideas spread so quickly?", ["The printing press", "The Columbian Exchange", "The Peace of Westphalia", "The founding of the Jesuits"],
        "Printed copies of his writings spread across Germany within weeks."],
      ["Luther's ideas appealed to many German princes most likely because", ["breaking with Rome let them control church lands and money", "they wanted to strengthen the pope's power in Germany", "they opposed the printing press and wanted it banned", "they hoped to make Germany a Muslim land"],
        "Political and economic motives helped the Reformation spread."]
    ]);
    set("23", "The Bible was written to teach us how to go to heaven, not how the heavens go.",
      "Adapted from Galileo Galilei, letter to the Grand Duchess Christina, 1615", [
      ["Galileo's statement best reflects the idea that", ["nature should be explained by observation, not church authority", "religion should be rejected entirely in favor of science", "the Inquisition was right to judge scientific claims", "ancient Greek texts are the best guide to nature"],
        "He wasn't rejecting faith; he argued science and scripture answer different questions."],
      ["The Scientific Revolution most directly influenced the Enlightenment by", ["encouraging thinkers to apply reason to government and society", "ending the Protestant Reformation and uniting the churches", "causing the Thirty Years' War between Catholics and Protestants", "reviving scholasticism and the authority of medieval theologians"],
        "If nature followed rational laws, thinkers asked whether society could too."],
      ["The Catholic Church most likely opposed Galileo's position because", ["it challenged the Church's authority to interpret nature", "he denied that God existed or had created the world", "he led a Protestant army against the Catholic states", "he refused to use mathematics to support his claims"],
        "The issue was who had the authority to explain the world."]
    ]);
    set("23", "People are by nature free, equal, and independent, and no one can be put under the political power of another without his own consent. When a government violates the people's rights to life, liberty, and property, the people may resist it.",
      "Adapted from John Locke, Second Treatise of Government, 1690", [
      ["Locke's ideas most directly challenged", ["absolutism and divine right", "Adam Smith's free-market ideas", "the Protestant Reformation", "the Scientific Revolution"],
        "If power comes from the people's consent, kings don't rule by God's will alone."],
      ["Which later development was most influenced by ideas like Locke's?", ["Revolutions based on natural rights and consent", "The Peace of Westphalia ending the wars of religion", "The Catholic Reformation and the founding of the Jesuits", "The Ming dynasty's restrictions on foreign trade"],
        "The American and French revolutions drew directly on Locke."],
      ["Locke's argument is most similar to ideas later found in", ["the Declaration of Independence", "Bossuet's defense of divine right", "Qianlong's letter to George III", "Luther's Ninety-Five Theses"],
        "Natural rights and consent of the governed appear directly in the Declaration."]
    ]);
    set("23", "The royal throne is not the throne of a man but the throne of God himself. The prince need give account of his acts to no one.",
      "Adapted from Bishop Jacques-Bénigne Bossuet, writing for Louis XIV, late 1600s", [
      ["This view was used to justify", ["absolute monarchy like Louis XIV's", "constitutional limits on royal power", "Protestant church government", "Enlightenment demands for rights"],
        "Divine right said kings answered only to God."],
      ["Compared to Louis XIV, Peter the Great used absolute power especially to", ["modernize Russia by adopting western European ways", "restore Catholicism as the religion of the Russian state", "break Russia into smaller states ruled by nobles", "cut Russia off from contact with western Europe"],
        "He built a navy, a new capital, and forced western dress and education on nobles."],
      ["Bossuet, a bishop writing for the king, most likely wrote this to", ["strengthen Louis XIV's authority with religious backing", "limit the king's power by placing him under church law", "support the Protestants in their conflict with Rome", "promote Enlightenment ideas about natural rights"],
        "Sourcing: a royal advisor defending royal power."]
    ]);
    Q("23", "The Peace of Westphalia (1648) marked a shift in Europe from", ["religion as the main cause of war toward rivalry among sovereign states", "monarchy toward democracy and elected parliaments across Europe", "trade toward farming as the main source of national wealth", "science toward religion as the main basis of knowledge"],
      "States recognized each other's sovereignty and began balancing power, regardless of religion.");
    Q("23", "Adam Smith's argument for free markets was mainly a criticism of", ["mercantilist policies that tightly regulated trade", "the Protestant work ethic that encouraged hard work and saving", "the encomienda system used in Spanish America", "Locke's argument that people have natural rights"],
      "Mercantilism tried to hoard gold and control trade; Smith argued open markets created more wealth.");

    /* ===== Ch 24 ===== */
    set("24", "The Spaniards entered among these gentle peoples like ravening wolves. They forced them into the mines and the fields, where great numbers died of hunger and overwork.",
      "Adapted from Bartolomé de las Casas, A Short Account of the Destruction of the Indies, 1542", [
      ["Las Casas, a Spanish priest, most likely wrote this account to", ["persuade Spanish authorities to reform the treatment of natives", "recruit more conquistadores for the conquest of Peru", "celebrate the encomienda system and its results", "describe Aztec religion and temples for readers in Spain"],
        "He lobbied the king, and his writing helped produce the New Laws of 1542."],
      ["Las Casas's account is limited as evidence for the overall population collapse because", ["it focuses on cruelty, while disease caused most deaths", "he never visited the Americas and relied on rumors", "it was written centuries after the events it describes", "he supported the conquistadores and hid their crimes"],
        "Brutality was real, but smallpox and other diseases killed far more people."],
      ["Which group would most likely disagree with Las Casas?", ["Spanish settlers who profited from native labor", "Dominican friars who supported reform", "Indigenous leaders in the Caribbean", "royal officials who wrote the New Laws"],
        "Settlers depended on native labor and resisted reform."]
    ]);
    set("24", "At Potosí, Spanish officials used the mita to require indigenous villages to send workers in rotation to the silver mines, where many died from accidents and mercury poisoning.",
      BG, [
      ["The mita at Potosí is an example of", ["Europeans adapting an existing indigenous labor system", "the Atlantic slave trade bringing captives from Africa", "free wage labor paid at market rates", "a land grant given to the Catholic Church in Peru"],
        "The Inca had used the mita for public works; Spain turned it to mining."],
      ["Silver from mines like Potosí most directly", ["fueled global trade, especially with China", "paid for the Protestant Reformation in Germany", "stayed in Peru to build schools and hospitals", "ended Spain's costly wars in Europe"],
        "American silver flowed to Europe and across the Pacific to China."],
      ["The effects described suggest that colonial authorities valued", ["silver over Indigenous lives", "Indigenous religious freedom", "free and fairly paid labor", "protecting the environment"],
        "Deadly conditions continued because the silver was so valuable."]
    ]);
    set("24", "In 1519 Cortés landed with about 600 soldiers. Tens of thousands of Tlaxcalans and other enemies of the Aztecs joined him, and a smallpox epidemic struck Tenochtitlan in 1520.",
      BG, [
      ["Which best explains the Spanish conquest of the Aztecs?", ["Native allies and disease, along with Spanish weapons", "Spain's much larger and better-supplied army", "The Aztecs having no army or weapons of their own", "Help from Portuguese troops sent from Brazil"],
        "Six hundred Spaniards could not have won alone; allies and smallpox were decisive."],
      ["Pizarro's conquest of the Inca was similar because it", ["took advantage of disease and a recent civil war", "relied on Aztec allies who sailed south with him", "happened without any fighting or resistance at all", "took place in the 1700s, long after Mexico fell"],
        "Smallpox had killed the Inca emperor, and his sons fought a civil war just before Pizarro arrived."],
      ["The role of the Tlaxcalans suggests that the conquest of Mexico was", ["partly a war among native peoples", "carried out by Spanish soldiers alone", "welcomed peacefully by every native people", "won mainly by Portuguese troops"],
        "Native allies did much of the fighting against the Aztecs."]
    ]);
    set("24", "Colonial Spanish America ranked people by birth: peninsulares (born in Spain) at the top, then creoles (Spaniards born in the Americas), then mestizos, with indigenous and African people at the bottom.",
      BG, [
      ["This system most directly shows that colonial societies", ["were organized around ancestry and race", "treated all colonists equally regardless of birth", "gave Indigenous nobles the highest offices", "ranked people only by how wealthy they were"],
        "Birth decided opportunity, and these divisions later fed independence movements."],
      ["Spain's use of viceroys and audiencias shows that the crown", ["tried to keep tight royal control over distant colonies", "let the colonies govern themselves with little oversight", "shared power over its colonies with Portugal", "ruled mainly through Aztec and Inca kings"],
        "Audiencias reviewed viceroys so no governor became too independent."],
      ["Which group most resented this system, which later fed independence movements?", ["Creoles, who were kept out of top offices", "Peninsulares, who held most of the top offices", "Spanish kings, who wanted more colonial taxes", "Portuguese merchants trading in Spanish ports"],
        "American-born Spaniards resented peninsulares' privileges."]
    ]);
    pic("24", "Map_of_Tenochtitlan,_1524.jpg",
      "A woodcut map of a round city in the middle of a lake, linked to the shore by long, straight causeways. At its center is a large walled square with temples.",
      "Map of Tenochtitlan printed in Nuremberg (Germany), 1524, published with Hernán Cortés's letters to Emperor Charles V", [
      ["The map's layout best shows that Tenochtitlan", ["was built on an island linked to land by causeways", "was a port city on the coast of the Gulf of Mexico", "was surrounded by miles of open, dry desert", "had been founded by earlier Spanish settlers"],
        "The Mexica built their capital on an island in Lake Texcoco."],
      ["The map was published in Europe with Cortés's letters most likely to", ["publicize the conquest and the riches of the new lands", "help Aztec rulers plan the defense of their remaining cities", "warn Europeans of the dangers of traveling to Mexico", "record the roads of the Inca empire for Spanish officials"],
        "Sourcing: Cortés wrote to the emperor to justify and celebrate his conquest."],
      ["The large temple complex at the center of the city suggests that", ["religion was central to Mexica political life", "the Mexica had already converted to Christianity", "markets and trade were banned in Tenochtitlan", "the city had no government or rulers of its own"],
        "The sacred precinct, with its great temple, stood at the heart of the city and the empire."]
    ]);
    pic("24", "De_español_e_india,_mestiza.jpg",
      "A painting of a well-dressed Spanish man, an Indigenous woman, and their young daughter. A label names the child's category by her parents' ancestry.",
      "Miguel Cabrera, From a Spanish man and an Indigenous woman, a mestiza, casta painting, New Spain (Mexico), 1763", [
      ["Paintings like this were made mainly to", ["classify colonial people by ancestry in a social hierarchy", "celebrate Aztec religion and its gods for colonial viewers", "record the trade in silk and porcelain with China", "spread Enlightenment ideas about equality and rights"],
        "Casta paintings showed and ranked the categories of colonial society."],
      ["The painting's subject reflects which colonial development?", ["Widespread mixing between Spanish and Indigenous peoples", "The absence of Spanish settlers in colonial Mexico", "The end of the encomienda system in New Spain", "Portuguese rule over Mexico after 1580"],
        "Most Spanish migrants were men, so mixed families became common."],
      ["Where would the child in this painting most likely rank in colonial society?", ["Below Spaniards but above most Indigenous people", "At the very top, above even the peninsulares", "Outside the social order with no rank at all", "Equal in rank to the Spanish viceroy himself"],
        "Mestizos had a middle position: below peninsulares and creoles, above Indigenous and enslaved people."]
    ]);
    Q("24", "The Treaty of Tordesillas (1494) is best understood as", ["European states dividing lands without regard for the people there", "an alliance between Spain and the Aztecs against Portugal", "a treaty ending the Atlantic slave trade between Spain and Portugal", "Portugal agreeing to give up all of its claims to Brazil"],
      "The pope-backed line split claims between Spain and Portugal; Brazil fell on Portugal's side.");
    Q("24", "The rapid collapse of the Taino population in the Caribbean foreshadowed", ["population collapse among native peoples elsewhere", "the rise of the Inca empire in the Andes mountains", "the end of Spanish colonization in the Caribbean", "large-scale Taino migration to Spain and Portugal"],
      "Disease and forced labor devastated the first people the Spanish met, and the pattern repeated everywhere.");

    /* ===== Ch 25 ===== */
    set("25", "Each day merchants carry away our people, sons of the land and of our nobles and vassals. So great is the corruption that our country is being completely depopulated. We need from your kingdoms nothing but priests and teachers for schools.",
      "Adapted from a letter by King Afonso I of Kongo to King João III of Portugal, 1526", [
      ["Afonso's letter best shows that", ["African rulers tried to limit the slave trade's damage", "Kongo rejected all contact and trade with the Portuguese", "Afonso hoped to expand the slave trade to enrich his court", "Portugal had already conquered Kongo and ruled it directly"],
        "He wanted Christianity and education, not the kidnapping of his subjects."],
      ["Afonso's request for priests and teachers most likely reflects", ["his Catholic faith and interest in European learning", "a plan to convert the people of Portugal to Kongolese religion", "his hostility toward Christianity and its missionaries", "pressure on Kongo from the Ottoman empire"],
        "Afonso was a devout Catholic who saw Christianity as strengthening his kingdom."],
      ["Afonso's letter foreshadows which later development?", ["The slave trade's destruction of central African states", "Kongo conquering Portugal and its overseas colonies", "An end to the Atlantic slave trade in the 1500s", "Kongo converting to Islam under Fulani rule"],
        "The disruption he describes grew worse over the next two centuries."]
    ]);
    set("25", "The closeness of the place and the heat, with so many people that each had scarcely room to turn, almost suffocated us. The shrieks of the women and the groans of the dying made it a scene of horror almost beyond imagining.",
      "Adapted from Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, 1789", [
      ["Equiano published this account in 1789 most likely to", ["build support for abolishing the slave trade", "advertise enslaved people for sale in London", "defend plantation owners against their critics", "describe the profits made in the triangular trade"],
        "His book was a key text of the British abolition movement."],
      ["The conditions described help explain", ["high death rates during the Middle Passage", "why few Africans were ever taken to Brazil", "why the triangular trade ended around 1600", "why European sailors refused to work on slave ships"],
        "Crowding, heat, and disease killed many captives before they reached the Americas."],
      ["Equiano's account is especially valuable to historians because", ["it is a firsthand account by a formerly enslaved African", "it was written by a ship captain who saw many voyages", "it lists the profits earned on each voyage", "it was written in Africa around the year 1500"],
        "Sourcing: few enslaved people were able to publish their own accounts."]
    ]);
    set("25", "Most of the enslaved Africans brought to the Americas between 1500 and 1800 went to Brazil and the Caribbean, where the majority worked on sugar plantations.",
      BG, [
      ["The pattern described is best explained by", ["the huge labor demands of sugar plantations", "demand for household servants in Europe", "cotton farming in North America before 1700", "silver mining in Siberia and Russia"],
        "Sugar was brutal, labor-intensive work, and plantations constantly needed new workers."],
      ["Compared to slavery within Africa before 1500, Atlantic slavery was", ["far larger, hereditary, tied to race, and centered on plantation labor", "smaller in scale and less organized than slavery within Africa", "usually ended with freedom for the enslaved within one generation", "organized and run entirely by African states without Europeans"],
        "Slavery existed in Africa, but the Atlantic system was different in scale and in its racial, hereditary nature."],
      ["Which conclusion does the passage best support?", ["The slave trade was driven mainly by plantation agriculture", "Most enslaved Africans were taken to North America", "Slavery in the Americas was mostly household service", "Sugar was grown mainly on farms in southern Europe"],
        "Sugar plantations in Brazil and the Caribbean absorbed most captives."]
    ]);
    set("25", "In 1704 Dona Beatriz claimed that St. Anthony spoke through her. She taught that Jesus and Mary had been Kongolese and urged Kongo's rival leaders to reunite the kingdom. Authorities burned her as a heretic in 1706.",
      BG, [
      ["Dona Beatriz's movement best illustrates", ["syncretism, as Africans reshaped Christianity", "the spread of Islam into central Africa", "the Portuguese conquest and rule of Kongo", "the Protestant Reformation reaching Africa"],
        "She blended Catholic saints with Kongolese beliefs and identity."],
      ["The political message of her movement was a response to", ["civil war and disruption worsened by the slave trade", "an Ottoman invasion of Kongo from the north", "crop failures caused by the Columbian Exchange", "Mughal expansion into Africa across the Indian Ocean"],
        "Kongo had split into rival factions, and slaving made the turmoil worse."],
      ["Authorities executing Dona Beatriz as a heretic suggests that", ["they saw her movement as a threat to order", "they agreed with her teachings but feared her", "Portugal had no influence at all in Kongo", "Kongo's rulers had converted to Islam"],
        "Her movement challenged both church teaching and Kongo's rival leaders."]
    ]);
    pic("25", "Slaveshipposter.jpg",
      "A diagram of the slave ship Brookes seen from above and in cross-section. Hundreds of enslaved Africans are drawn lying packed side by side, filling every deck.",
      "Description of a Slave Ship, poster printed by the Society for Effecting the Abolition of the Slave Trade, London, 1789", [
      ["The poster was most likely created to", ["build public support for ending the slave trade", "show investors how efficiently the ship could be loaded", "train new sailors to stow cargo below deck", "celebrate the power of the British navy"],
        "Abolitionists printed thousands of copies, and a model of the ship was shown in Parliament."],
      ["The conditions shown help explain", ["the high death rates of the Middle Passage", "why slave ships rarely crossed the Atlantic", "the end of the triangular trade in the 1600s", "why most captives were taken to Europe"],
        "Crowding, heat, and disease killed many captives during the crossing."],
      ["Which later development was most influenced by images like this?", ["Britain's abolition of the slave trade", "The start of the triangular trade", "The Columbian Exchange in the Americas", "The Peace of Westphalia in Europe"],
        "The abolition campaign this poster supported succeeded in 1807."]
    ]);
    chart("25", hbar("Enslaved Africans arriving in the Americas (millions)", [["Brazil", 4.9], ["British Caribbean", 2.3], ["Spanish Americas", 1.3], ["French Caribbean", 1.1], ["Dutch Americas", 0.4], ["North America", 0.4]], v => `${v}M`),
      "Estimated arrivals, 1501–1866, rounded. Source: Trans-Atlantic Slave Trade Database estimates", [
      ["Which conclusion is best supported by the chart?", ["Brazil and the Caribbean received most enslaved Africans", "North America received the largest number of enslaved Africans", "Spanish America received more enslaved Africans than Brazil", "Enslaved Africans were spread evenly across the Americas"],
        "Brazil and the Caribbean together account for most of the total."],
      ["The pattern in the chart is best explained by", ["the labor demands of sugar plantations", "cotton farming in North America before 1700", "Spanish laws that banned slavery in Mexico", "the use of enslaved workers in European factories"],
        "Sugar was the most labor-intensive cash crop of the era."],
      ["Which factor helps explain why Brazil and the Caribbean kept importing so many captives?", ["High death rates from brutal labor and disease", "Laws that freed enslaved people after five years", "Most enslaved people being returned to Africa", "A shortage of European ships to carry the sugar"],
        "So many died that planters kept buying new captives instead of relying on births."]
    ]);
    Q("25", "Songhay's defeat in 1591 by a Moroccan army armed with guns best shows", ["the growing military importance of gunpowder", "the spread of Christianity in west Africa", "the decline of trans-Saharan trade before 1500", "the strength of the Portuguese navy in Africa"],
      "Firearms gave a much smaller army the advantage, as in the gunpowder empires.");
    Q("25", "Maroon communities are best described as", ["resistance in which escaped slaves built their own societies", "plantations owned and run by free Africans in the Caribbean", "European trading forts built along the west African coast", "African states that captured and sold people to Europeans"],
      "Escaping was one of the most serious forms of resistance, and some maroon communities lasted for generations.");

    /* ===== Ch 26 ===== */
    set("26", "Our Celestial Empire possesses all things in abundance and lacks no product within its borders. There is therefore no need to import the manufactures of outside barbarians.",
      "Adapted from the Qianlong emperor's letter to King George III of Britain, 1793", [
      ["Qianlong's response most directly reflects", ["the view of China as the superior, self-sufficient Middle Kingdom", "China's growing dependence on British manufactured goods and tea", "Japan's closed-country policy toward European traders", "Confucian respect for merchants and foreign commerce"],
        "He treated Britain like any other tributary state."],
      ["Which development best explains Qianlong's confidence?", ["The Qing empire's prosperity and expansion", "China's defeat by Britain in the Opium War", "Mongol rule over China under the Yuan", "European control of China's major ports"],
        "In 1793 the Qing was at its largest and richest; the Opium War came later."],
      ["Qianlong's attitude helps explain why, in the 1800s,", ["Britain later used force to open Chinese trade", "China quickly built factories and railroads", "Britain stopped trading with China entirely", "Japan conquered the Qing dynasty"],
        "British frustration with Qing trade limits led to the Opium War (1839–1842)."]
    ]);
    set("26", "Japanese ships are strictly forbidden to leave for foreign countries. Any Japanese who returns from living overseas must be put to death. Wherever the teachings of the padres are practiced, investigate thoroughly.",
      "Adapted from the Tokugawa shogunate's Closed Country Edict, 1635", [
      ["The edict was mainly intended to", ["protect Tokugawa stability by limiting foreign influence", "expand Japanese trade throughout southeast Asia", "welcome European missionaries to Japanese cities", "prepare an invasion of Ming China and Korea"],
        "The shogunate saw Christianity and foreign ties as threats to its control."],
      ["Compared to Tokugawa Japan, Ming and Qing China", ["also limited foreign trade and missionaries, though less strictly", "allowed unlimited trade with any European merchants who arrived", "banned every form of contact with foreign countries", "converted to Christianity under Jesuit influence"],
        "Both kept Europeans at arm's length; China confined trade to certain ports."],
      ["The edict's focus on Christianity most likely came from", ["fear that converts would be loyal to foreigners, not the shogun", "a desire to increase trade with Spain and Portugal", "Buddhist monks taking control of the government", "pressure from the Chinese emperor to ban it"],
        "The shogunate saw divided loyalty as a threat to order."]
    ]);
    set("26", "The entire kingdom is administered by the order of the learned, commonly known as the philosophers. Responsibility for the orderly management of the whole realm is entrusted entirely to them.",
      "Adapted from the journals of Matteo Ricci, Jesuit missionary in China, c. 1600", [
      ["Ricci is describing", ["the power of officials chosen through Confucian exams", "the dominance of Buddhist monks at the imperial court", "Manchu military rule over the Chinese provinces", "merchant control of the Ming government"],
        "Confucian scholars who passed the exams ran the Ming government."],
      ["Ricci's strategy of studying the Confucian classics and dressing as a scholar shows", ["missionaries adapting to local culture", "the Jesuits rejecting Chinese culture", "Chinese officials converting in large numbers", "Qing emperors supporting Protestant missionaries"],
        "He won respect at court, though very few converts."],
      ["Ricci's description suggests that European observers", ["were impressed by China's government of educated officials", "thought China was poorly governed and disorderly", "believed most Chinese officials were already Christian", "saw Confucianism mainly as a threat to European trade"],
        "Many Europeans admired China's exam-based bureaucracy."]
    ]);
    set("26", "In Tokugawa Japan, merchants officially ranked below samurai, peasants, and artisans, yet many grew rich. Cities like Osaka and Edo developed “floating worlds” of kabuki theater, teahouses, and woodblock prints.",
      BG, [
      ["This passage best illustrates", ["growing merchant influence despite their low official status", "the decline of Japanese cities under Tokugawa rule", "samurai being required by law to become merchants", "European artists shaping Japanese painting and theater"],
        "Wealth gave merchants cultural power the official hierarchy didn't recognize."],
      ["A similar development in Ming and Qing China was", ["merchants gaining wealth and status as the economy grew", "merchants becoming the top social class by law", "the government ending the civil service exams", "a long decline in China's population and cities"],
        "In both societies, economic change outpaced the Confucian ranking of classes."],
      ["Which development in Europe is most similar to the one described?", ["Merchant wealth paying for art in Renaissance cities", "The Thirty Years' War between Catholic and Protestant states", "The Spanish Inquisition's campaign against heresy", "Absolutism and court culture under Louis XIV"],
        "In both, merchant wealth paid for new urban culture."]
    ]);
    pic("26", "Matteo_Ricci_and_Ly_Paulos_RMG_PW7431.jpg",
      "An engraving of two men in long Chinese scholar's robes: the Italian Jesuit Matteo Ricci and the Chinese official Xu Guangqi. They stand before an altar with a cross and a picture of the Virgin and Child.",
      "Matteo Ricci and Xu Guangqi, engraving from Athanasius Kircher's China Illustrata, published in Europe, 1667", [
      ["Ricci is shown dressed as a Chinese scholar. This best reflects", ["the Jesuit strategy of adapting to Chinese culture", "Ricci's conversion from Christianity to Confucianism", "Chinese laws requiring all foreigners to dress alike", "Ricci's appointment as an official of the Qing"],
        "Jesuits learned the classics and dressed as scholars to win respect from the educated elite."],
      ["Xu Guangqi, a Ming official who converted, worked with Ricci to translate European geometry into Chinese. This suggests the Jesuits gained influence in China mainly through", ["science and learning", "military force", "trade monopolies", "preaching to peasants"],
        "Their knowledge of mathematics and astronomy opened doors at court."],
      ["The engraving was published in Europe in the 1660s most likely to", ["promote the Jesuit missions to European readers", "warn European readers about a coming Chinese invasion", "celebrate the Qing conquest of the Ming dynasty", "advertise Chinese porcelain to European buyers"],
        "Sourcing: Kircher, a Jesuit, wrote to show off the missionaries' work."]
    ]);
    Q("26", "The Ming rebuilding of the Great Wall and the end of Zheng He's voyages both reflect", ["a focus on defending the northern frontier", "Ming plans to invade and conquer Japan", "growing European naval pressure on China", "the collapse of the Ming dynasty in 1644"],
      "The Ming considered the Mongols the real threat and put resources into the north.");
    Q("26", "Manchu Qing emperors like Kangxi supported Confucian learning mainly to", ["win the support of Chinese scholar-officials", "convert the Chinese people to Christianity", "abolish the civil service examination system", "weaken the power of the Confucian bureaucracy"],
      "As outsiders, the Manchus ruled through Chinese traditions to gain legitimacy.");

    /* ===== Ch 27 ===== */
    set("27", "In making appointments, the Sultan pays no attention to wealth or rank. Those who hold the highest offices are very often sons of shepherds or herdsmen; they owe their positions to their own merit.",
      "Adapted from Ogier Ghiselin de Busbecq, Habsburg ambassador to the Ottoman court, 1550s", [
      ["Which comparison is most valid?", ["Like China's exams, Ottoman practice aimed to staff government with capable, loyal officials", "Like Europe's nobility, Ottoman officials usually inherited their offices from their fathers", "Like the Aztecs, the Ottomans ruled conquered lands only by collecting tribute", "Like the Holy Roman Emperor, the sultan had little real power over his officials"],
        "Both systems chose officials loyal to the ruler rather than to powerful families."],
      ["Busbecq, a European diplomat, most likely included this observation to", ["contrast Ottoman merit with European nobility", "praise the Habsburg system of choosing officials", "explain why the Ottomans failed to take Vienna", "describe the religious practices of the Ottomans"],
        "Sourcing: he was writing for European readers, implicitly criticizing his own society."],
      ["Busbecq's observation would be most useful to a historian studying", ["how the Ottomans chose officials", "the tactics of the Ottoman navy", "the religion of the Safavid empire", "the economy of the Mughal empire"],
        "It describes Ottoman appointments by merit and loyalty."]
    ]);
    set("27", "His Majesty abolished the jizya, the tax on non-Muslims. He invited learned men of every religion to debate in his House of Worship.",
      "Adapted from Abul Fazl, court historian of the Mughal emperor Akbar, late 1500s", [
      ["Akbar's policies were most likely meant to", ["win the loyalty of the Hindu majority", "convert all of India's people to Islam", "weaken the power of his own government", "win the favor of the Ottoman sultan"],
        "A Muslim dynasty ruling a mostly Hindu land needed broad support."],
      ["How did Aurangzeb's approach differ, and with what result?", ["He restored the jizya and persecuted Hindus, sparking revolts", "He continued Akbar's tolerance, and the empire grew stronger and more united", "He converted to Hinduism, which angered the Muslim nobility", "He handed northern India to Persia in exchange for peace"],
        "The empire reached its largest size under him, but resentment and rebellion followed."],
      ["Abul Fazl was Akbar's court historian. A historian should keep in mind that", ["he wrote to praise Akbar and may stress his virtues", "he opposed Akbar and wrote to expose his failures", "he was a Jesuit missionary at the Mughal court", "he wrote centuries after Akbar had died"],
        "Sourcing: an official court historian has reasons to flatter the ruler."]
    ]);
    set("27", "In 1501 Shah Ismail declared Shia Islam the official religion of his new Safavid state. In 1514 the Sunni Ottomans defeated Safavid cavalry at Chaldiran using artillery and soldiers with firearms.",
      BG, [
      ["The rivalry described was intensified by", ["the Sunni–Shia religious divide", "competition over silver from the Americas", "a shared alliance against European powers", "a Mughal invasion of Persia from India"],
        "Religion added to their struggle over borderlands."],
      ["The Ottoman victory at Chaldiran best illustrates", ["the advantage of gunpowder weapons", "the decline of the Ottoman empire", "the success of Mongol cavalry tactics", "the importance of naval power"],
        "Cannons and muskets beat traditional cavalry, a key reason these are called gunpowder empires."],
      ["The rivalry described most directly helped", ["Safavid Persia develop a distinct Shia identity", "the Mughals conquer Persia and unite it with India", "the Ottomans convert from Sunni to Shia Islam", "European armies defeat the Ottomans in 1514"],
        "Iran remains mostly Shia today, a legacy of Safavid policy."]
    ]);
    set("27", "After capturing Constantinople in 1453, Mehmed II made it his capital, Istanbul, turned Hagia Sophia into a mosque, and invited Greeks, Armenians, and Jews to resettle the city.",
      BG, [
      ["Mehmed's actions best show Ottoman rulers", ["combining Islamic rule with tolerance of diverse subjects", "forcing all Christian subjects to convert to Islam", "abandoning the city for a new capital in Anatolia", "keeping the Byzantine government in place"],
        "The mosque announced Islamic rule; resettlement rebuilt a thriving, diverse capital."],
      ["The Ottoman, Safavid, and Mughal empires were similar in that all three", ["used gunpowder and ruled religiously diverse peoples", "were all Shia Muslim states ruled by shahs", "were founded directly by Mongol khans", "avoided building large monuments or mosques"],
        "Only the Safavids were Shia; all three used gunpowder and governed diverse peoples."],
      ["Inviting diverse peoples to resettle Istanbul most likely helped Mehmed", ["revive the city's economy and trade", "convert all Greek residents to Islam", "prepare to abandon the city", "weaken his own power over the city"],
        "Merchants and craftsmen of many faiths made Istanbul thrive again."]
    ]);
    pic("27", "Jesuits_at_Akbar's_court.jpg",
      "A Mughal court painting: the emperor Akbar sits on a raised platform surrounded by scholars and courtiers. Two priests in black robes sit among them, taking part in a debate.",
      "Akbar holds a religious assembly in the Ibadat Khana (House of Worship); the two men in black are Jesuit missionaries. Painting by Nar Singh for the Akbarnama, Akbar's official history, c. 1605", [
      ["The painting best illustrates Akbar's", ["interest in debate among many religions", "persecution of Hindus and other non-Muslims", "conversion to Christianity late in life", "military campaigns in southern India"],
        "He invited Muslim, Hindu, Christian, and other scholars to discuss their faiths."],
      ["Akbar's religious policies were most likely intended to", ["build loyalty among a diverse population", "make Christianity the official religion", "win the favor of the Safavid shah", "end trade with European merchants"],
        "A Muslim ruler of a mostly Hindu land needed broad support."],
      ["Because the painting was made for Akbar's official history, it most likely", ["presents the emperor in a favorable light", "shows the scene with no point of view", "was meant to criticize Akbar's policies", "was made by the Jesuits to mock him"],
        "Sourcing: court art was made to glorify the ruler."]
    ]);
    Q("27", "The Taj Mahal best reflects", ["Mughal wealth and a blend of Persian and Indian art", "Ottoman military power and the use of gunpowder", "Safavid Shia identity and the rivalry with the Ottomans", "European influence on Indian architecture"],
      "Shah Jahan's tomb for his wife mixes Persian design with Indian craftsmanship.");
    Q("27", "Suleyman's reign is often seen as the Ottoman peak because the empire", ["reached its greatest power and issued major law codes", "first captured Constantinople and made it the capital", "converted from Sunni to Shia Islam under his rule", "began to lose territory to Russia and Austria"],
      "He besieged Vienna in 1529, and Ottomans remember him as \"the Lawgiver.\"");
  }
});
})();
