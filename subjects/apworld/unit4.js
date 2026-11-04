/* AP World History · Ch 22–27 (c. 1450–1800)
   Source: Bentley, Traditions & Encounters (chapters numbered like the class term lists).
   Same format as unit3.js: teaching notes + "why / what changed" questions, no memorization drills. */
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

  problems(k){
    const Q = (sec, text, opts, why) => k.choice([sec], "Ch " + sec, text, opts, opts[0], [].concat(why), {shuffle:true});

    /* Ch 22 */
    Q("22", "The main motive for early European voyages was:", ["Reaching Asian spices and silk without Muslim and Venetian middlemen", "Finding new farmland in Africa", "Escaping the plague", "Conquering China"],
      "Spreading Christianity was a second major motive.");
    Q("22", "The volta do mar was:", ["A sailing strategy of swinging into the open Atlantic to catch winds home", "A Portuguese fort in India", "A type of Spanish ship", "A trading company"],
      "It let ships return from Africa without fighting the trade winds.");
    Q("22", "Vasco da Gama's 1498 voyage was significant because it:", ["Opened a direct sea route from Europe to India", "Reached the Caribbean", "Circled the globe", "Mapped Australia"],
      "Europeans could now join Indian Ocean trade directly.");
    Q("22", "Columbus's voyages of 1492 mattered most because they:", ["Began lasting contact between the eastern and western hemispheres", "Reached India by sea", "Proved the earth was round", "Started the Seven Years' War"],
      "That contact started the Columbian Exchange.");
    Q("22", "Magellan's expedition (1519–1522) was the first to:", ["Sail all the way around the world", "Reach India by sea", "Explore Hawaii", "Round the Cape of Good Hope"],
      "Magellan himself died in the Philippines; his crew finished the trip.");
    Q("22", "James Cook is known for:", ["Exploring and mapping the Pacific, Australia, and New Zealand", "Founding the VOC", "Reaching India in 1498", "Conquering the Inca"],
      "His voyages (1768–1779) brought the Pacific into the global network.");
    Q("22", "Afonso d'Alboquerque built Portugal's Indian Ocean power by:", ["Using cannons to seize key ports like Goa, Hormuz, and Melaka", "Marrying into Mughal royalty", "Making peace with the Ottomans", "Settling large farming colonies"],
      "A \"trading-post empire\": control the ports, tax the trade.");
    Q("22", "Joint-stock companies helped Europeans trade overseas because they:", ["Pooled many investors' money and spread out the risk", "Were run directly by the pope", "Banned private profit", "Used only government ships"],
      "The English East India Company and the VOC were the biggest.");
    Q("22", "The VOC was:", ["The Dutch East India Company, which tried to monopolize the spice trade", "A Spanish galleon route", "A Portuguese fort", "A Russian fur company"],
      "It ran its Asian trade from Batavia on Java.");
    Q("22", "Spanish galleons sailing between Mexico and Manila mainly carried:", ["American silver to buy Chinese goods", "Enslaved Africans", "Spices to Europe", "Furs from Siberia"],
      "This linked the Americas, Asia, and Europe into one trade system.");
    Q("22", "The Seven Years' War (1756–1763) is called the first global war because:", ["It was fought in Europe, North America, and India", "Seven countries fought it", "It involved China and Japan", "It lasted seven decades"],
      "Britain's win gave it Canada and dominance in India.");
    Q("22", "Which was an effect of the Columbian Exchange?", ["Smallpox killed most native Americans, while American crops fueled population growth elsewhere", "Horses disappeared from Europe", "The Americas sent diseases that killed most Europeans", "Trade between hemispheres stopped"],
      "Maize and potatoes spread to Afro-Eurasia; horses and cattle came to the Americas.");
    Q("22", "Russian expansion in this era was driven mainly by:", ["The fur trade, pushing across Siberia to the Pacific", "Gold mines in Alaska", "Spices from India", "Converting China to Orthodoxy"],
      "Cossacks and traders claimed Siberia for the tsars.");

    /* Ch 23 */
    Q("23", "Martin Luther's first major complaint was against:", ["The sale of indulgences", "The printing press", "Scientific discoveries", "The Ottoman Empire"],
      "He argued salvation came through faith and scripture, not church pardons.");
    Q("23", "Which helped the Protestant Reformation spread so quickly?", ["The printing press", "The Columbian Exchange", "The telescope", "The Seven Years' War"],
      "Luther's writings were printed and spread across Europe in weeks.");
    Q("23", "John Calvin is known for teaching:", ["Predestination", "Absolutism", "Heliocentrism", "Deism"],
      "His ideas spread from Geneva across Europe.");
    Q("23", "Henry VIII broke from the Catholic Church mainly because:", ["The pope wouldn't end his marriage", "He agreed with Calvin", "Spain invaded England", "He wanted to join the Jesuits"],
      "He made himself head of the Church of England.");
    Q("23", "The Catholic Reformation responded to Protestantism by:", ["Fixing abuses, reaffirming Catholic teaching, and founding the Jesuits", "Accepting Luther's ideas", "Ending all missions", "Banning the Bible"],
      "Ignatius Loyola's Jesuits built schools and missions worldwide.");
    Q("23", "The Jesuits are best known for:", ["Education and worldwide missionary work", "Leading the Protestant Reformation", "Running the Spanish army", "Founding joint-stock companies"],
      "Jesuits like Matteo Ricci reached China and Japan.");
    Q("23", "The Spanish Inquisition was:", ["A church court that hunted heresy in Spain", "A Protestant church", "A trading company", "A scientific society"],
      "It enforced Catholic orthodoxy.");
    Q("23", "Charles V's huge empire was hard to hold together partly because:", ["He had to fight Protestants, France, and the Ottomans at once", "He ruled only Portugal", "He converted to Protestantism", "He had no army"],
      "He gave up and split his lands when he abdicated.");
    Q("23", "The Peace of Westphalia (1648) is significant because it:", ["Ended the Thirty Years' War and set up a system of sovereign states", "Started the Reformation", "United all of Europe under the pope", "Created the Holy Roman Empire"],
      "States recognized each other's independence: the basis of modern international relations.");
    Q("23", "Absolutism means:", ["A monarch claims total, unchecked power", "Power is shared with an elected parliament", "The church rules the state", "Merchants run the government"],
      "Louis XIV is the classic example.");
    Q("23", "Peter the Great is known for:", ["Forcing Russia to modernize along western European lines", "Founding the Jesuits", "Leading the Reformation in Germany", "Exploring the Pacific"],
      "He built a navy and a new capital, St. Petersburg.");
    Q("23", "How did the Scientific Revolution change how Europeans found truth?", ["It relied on observation and math instead of tradition alone", "It rejected all experiments", "It depended only on the Bible", "It ended the use of mathematics"],
      "Copernicus, Galileo, and Newton are the key figures.");
    Q("23", "Galileo got into trouble with the church because he:", ["Supported the idea that the earth orbits the sun", "Denied that God existed", "Joined the Protestants", "Opposed the printing press"],
      "His telescope observations supported Copernicus.");
    Q("23", "Isaac Newton's major contribution was:", ["Laws of motion and gravity explained with math", "The heliocentric theory", "Free-market economics", "Natural rights"],
      "His work showed the universe follows consistent natural laws.");
    Q("23", "John Locke argued that:", ["People have natural rights, and government needs their consent", "Kings rule by divine right", "The economy should be state-controlled", "Science should obey the church"],
      "His ideas inspired later revolutions.");
    Q("23", "Adam Smith argued that:", ["Free markets with little government control create the most wealth", "Kings should control all trade", "Colonies should be abolished at once", "Guilds should set all prices"],
      "His Wealth of Nations is the founding text of capitalism.");
    Q("23", "Deism is the belief that:", ["God created the universe like a clockmaker and lets it run by natural laws", "God controls every event directly", "There is no God", "Many gods rule nature"],
      "It fit the Enlightenment's focus on reason and natural law.");
    Q("23", "Voltaire is best known for:", ["Attacking religious intolerance and championing free thought", "Leading the Thirty Years' War", "Founding the Church of England", "Inventing the telescope"],
      "He was one of the most famous Enlightenment writers.");

    /* Ch 24 */
    Q("24", "The biggest reason the native population of the Americas collapsed was:", ["Epidemic diseases like smallpox", "Wars between native peoples", "Famine from the Little Ice Age", "Migration to Europe"],
      "Native Americans had no immunity to Afro-Eurasian diseases.");
    Q("24", "Which best explains how Cortés conquered the Aztec empire with few soldiers?", ["Native allies who resented Aztec rule, plus smallpox and steel weapons", "A larger army than the Aztecs", "Help from the Inca", "The Aztecs welcomed Spanish rule"],
      "Disease, allies, and technology together.");
    Q("24", "Pizarro conquered the Inca partly because:", ["The empire had just been weakened by civil war and smallpox", "The Inca had no army", "Portugal helped him", "The Inca invited him to rule"],
      "He captured Atahualpa, took a huge ransom, and executed him.");
    Q("24", "The Treaty of Tordesillas (1494):", ["Divided claims to new lands between Spain and Portugal", "Ended the Thirty Years' War", "Gave England control of North America", "Banned the slave trade"],
      "That line is why Brazil became Portuguese.");
    Q("24", "The encomienda system:", ["Gave settlers native labor and tribute in return for Christianizing them", "Freed native peoples from all labor", "Was a court that reviewed viceroys", "Divided land among Inca nobles"],
      "In practice it led to terrible abuse.");
    Q("24", "Spain adapted the Inca mita system to:", ["Draft native laborers for silver mines like Potosí", "Collect taxes in cloth", "Build churches only", "Train soldiers"],
      "A labor draft from the Inca empire, turned to Spanish profit.");
    Q("24", "Audiencias were:", ["Courts that heard appeals and checked the viceroys", "Native labor drafts", "Spanish warships", "Mixed-ancestry communities"],
      "The crown used them to keep viceroys from becoming too independent.");
    Q("24", "A viceroy was:", ["A royal governor ruling a colony for the Spanish king", "A native chief", "A Catholic bishop", "A ship captain"],
      "Main viceroyalties: New Spain (Mexico) and Peru.");
    Q("24", "A mestizo was a person of:", ["Mixed European and indigenous ancestry", "Mixed African and European ancestry", "Pure Spanish birth", "Inca royal descent"],
      "Colonial society ranked people by ancestry.");
    Q("24", "What happened to the Taino after contact with the Spanish?", ["Disease and forced labor nearly wiped them out", "They conquered the Spanish", "They migrated to Europe", "They formed a large empire"],
      "They were the first people to feel the full effects of contact.");
    Q("24", "Conquistadores were:", ["Spanish soldier-adventurers who conquered American empires", "Native allies of the Aztecs", "Portuguese merchants", "Jesuit missionaries"],
      "Cortés and Pizarro are the most famous.");

    /* Ch 25 */
    Q("25", "Songhay became west Africa's major empire by:", ["Conquering trade cities like Timbuktu under Sunni Ali", "Allying with Portugal", "Converting to Christianity", "Controlling the Swahili coast"],
      "It fell in 1591 to a Moroccan army with firearms.");
    Q("25", "Afonso I of Kongo is significant because he:", ["Became Catholic and welcomed Portuguese trade but protested the slave trade", "Led armies against the Portuguese for 40 years", "Founded Songhay", "Wrote a famous autobiography"],
      "He wanted European goods and teachers, but not the destruction slaving caused.");
    Q("25", "Queen Nzinga is known for:", ["Leading resistance against the Portuguese in Angola", "Founding the Antonian movement", "Converting Kongo to Islam", "Ruling Mali"],
      "She fought for about four decades.");
    Q("25", "Dona Beatriz's Antonian movement is an example of:", ["Syncretism, blending Christianity with African beliefs", "The Protestant Reformation", "Islamic reform", "Absolutism"],
      "She was executed as a heretic in 1706.");
    Q("25", "The Fulani are known for:", ["Leading movements to purify Islam in west Africa", "Running the slave ships", "Founding Kongo", "Resisting Islam"],
      "Muslim reformers who felt Islam had become mixed with local practices.");
    Q("25", "The \"triangular trade\" sent:", ["Goods to Africa, enslaved people to the Americas, and crops to Europe", "Spices to Asia, silver to Africa, and furs to Europe", "Only enslaved people between Africa and Europe", "Grain from Russia to Africa"],
      "Sugar, tobacco, and cotton flowed back to Europe.");
    Q("25", "The Middle Passage was:", ["The deadly Atlantic crossing of enslaved Africans", "A trade route through the Sahara", "A Portuguese sea route to India", "An escape route for maroons"],
      "Crowding and disease killed many on board.");
    Q("25", "Olaudah Equiano is important because:", ["His autobiography about being enslaved helped the abolition movement", "He founded a maroon community", "He was king of Kongo", "He led the Fulani"],
      "It gave readers a firsthand account of slavery.");
    Q("25", "Maroons were:", ["Escaped slaves who formed their own communities", "Portuguese slave traders", "African kings who sold slaves", "Plantation owners"],
      "They often lived in mountains, forests, or swamps.");
    Q("25", "How did the Atlantic slave trade affect African societies?", ["It caused political turmoil and social disruption across much of Africa", "It strengthened every African state", "It had little effect in Africa", "It ended warfare between African states"],
      "Demand for captives fueled wars and weakened communities.");

    /* Ch 26 */
    Q("26", "The early Ming emperors' main goal was to:", ["Restore Chinese traditions and erase Mongol influence", "Open China to European trade", "Convert China to Christianity", "Conquer Japan"],
      "They revived Confucian government and the exam system.");
    Q("26", "Yongle is known for:", ["Moving the capital to Beijing, building the Forbidden City, and sending Zheng He's fleets", "Founding the Qing dynasty", "Unifying Japan", "Banning Confucianism"],
      "He ruled from 1403 to 1424.");
    Q("26", "The Ming rebuilt the Great Wall mainly to:", ["Keep out the Mongols", "Stop European ships", "Mark the border with India", "Control the Grand Canal"],
      "Most of the wall seen today is Ming construction.");
    Q("26", "Scholar-bureaucrats held top status in Ming and Qing China because they:", ["Passed the civil service exams and ran the government", "Were the richest merchants", "Were military generals", "Were Buddhist monks"],
      "Confucian learning was the path to power and prestige.");
    Q("26", "The Qing dynasty was founded by:", ["The Manchus", "The Mongols", "The Japanese", "Chinese peasants"],
      "They ruled China from 1644 to 1911.");
    Q("26", "Kangxi is remembered as:", ["A Qing emperor who was a Confucian scholar and conquered Taiwan", "The founder of the Ming", "A Jesuit missionary", "A Japanese shogun"],
      "He ruled from 1661 to 1722.");
    Q("26", "Under Qianlong, the Qing empire:", ["Reached its largest size", "Collapsed", "Became Christian", "Opened completely to foreign trade"],
      "He expanded into central Asia and Tibet.");
    Q("26", "Matteo Ricci won access to the Chinese court mainly by:", ["Learning Chinese and impressing officials with clocks and science", "Threatening war", "Bribing the emperor with silver", "Converting thousands of peasants"],
      "Jesuits gained respect but few converts.");
    Q("26", "The Tokugawa kept the daimyo under control by:", ["Requiring them to live in Edo every other year and leave family there", "Removing all their land", "Letting them make foreign alliances", "Making them Christian"],
      "Alternate attendance was expensive and kept lords loyal.");
    Q("26", "Tokugawa Ieyasu is significant because he:", ["Unified Japan and founded the Tokugawa shogunate", "Invaded Korea", "Welcomed Christian missionaries", "Wrote The Tale of Genji"],
      "His family ruled Japan from 1600 to 1867.");
    Q("26", "How did Tokugawa Japan handle European contact?", ["It banned Christianity and limited trade to a few Dutch merchants", "It welcomed all European traders", "It conquered the Philippines", "It joined the VOC"],
      "Rulers feared foreign influence would bring instability.");
    Q("26", "The \"floating worlds\" were:", ["Urban entertainment districts that catered to merchants", "Japanese floating gardens", "Chinese treasure ships", "Buddhist monasteries"],
      "They show the rising wealth of Japan's merchant class.");
    Q("26", "Zheng He's voyages ended mainly because:", ["Ming leaders chose to focus on threats from the north", "His fleet was destroyed by the Portuguese", "Japan conquered China", "China ran out of wood"],
      "The court also saw little profit in the voyages.");

    /* Ch 27 */
    Q("27", "The Ottoman, Safavid, and Mughal empires are called \"gunpowder empires\" because:", ["They used cannons and firearms to build and defend their power", "They invented gunpowder", "They sold gunpowder to Europe", "They banned firearms"],
      "Gunpowder weapons helped them conquer large territories.");
    Q("27", "Mehmed the Conqueror's capture of Constantinople in 1453:", ["Ended the Byzantine empire and gave the Ottomans a new capital, Istanbul", "Started the Crusades", "Founded the Safavid empire", "Brought Islam to India"],
      "It also made the Ottomans a major Mediterranean power.");
    Q("27", "Suleyman the Magnificent's reign is considered:", ["The peak of Ottoman power", "The founding of the Ottoman state", "The fall of the empire", "The start of Safavid rule"],
      "He besieged Vienna in 1529 and issued major law codes.");
    Q("27", "Shah Ismail made the Safavid empire distinctive by:", ["Making Shia Islam the state religion", "Converting to Christianity", "Allying with the Ottomans", "Conquering India"],
      "That made the Safavids rivals of the Sunni Ottomans.");
    Q("27", "Shah Abbas is known for:", ["Reviving the Safavid empire and building up Isfahan", "Founding the Mughal empire", "Building the Taj Mahal", "Taking Constantinople"],
      "He ruled from 1588 to 1629.");
    Q("27", "Babur founded the Mughal empire by:", ["Invading India from central Asia and taking Delhi in 1526", "Rebelling against the Safavids", "Marrying a Hindu princess", "Allying with Portugal"],
      "He was a descendant of Tamerlane.");
    Q("27", "Akbar strengthened Mughal rule mainly through:", ["Religious tolerance, including ending the tax on non-Muslims", "Forcing all Hindus to convert", "Banning trade", "Moving the capital to Persia"],
      "He brought Hindus into government and encouraged religious debate.");
    Q("27", "Aurangzeb's policies weakened the Mughal empire because they:", ["Persecuted Hindus and restored the non-Muslim tax, sparking revolts", "Gave too much power to Hindus", "Ended all military campaigns", "Made the empire Christian"],
      "The empire reached its largest size under him, but resentment grew.");
    Q("27", "The Taj Mahal was built as:", ["A tomb for the Mughal emperor Shah Jahan's wife", "An Ottoman mosque", "A Safavid palace", "A Hindu temple"],
      "It symbolizes Mughal wealth and artistry.");
    Q("27", "Why were the Ottomans and Safavids rivals?", ["The Ottomans were Sunni and the Safavids were Shia", "They competed for the Americas", "They fought over China", "The Safavids were Christian"],
      "Religious difference added to competition over territory.");
    Q("27", "Osman is known as:", ["The founder of the Ottoman state", "The founder of the Safavids", "The first Mughal emperor", "The builder of the Taj Mahal"],
      "His state began in Anatolia around 1300.");
  }
});
})();
