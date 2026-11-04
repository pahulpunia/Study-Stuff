/* AP World History · Unit 3 (Ch 13–21, c. 600–1450)
   Source: Bentley, Traditions & Encounters (chapters numbered like the class term lists).
   No memorization drills: questions ask what things were, why they happened, and what they changed.
   **text** = bold in notes. Q(...) lists the right answer first; options are shuffled on screen. */
(() => {
const key = rows => ({table:{head:["Term", "What it is · why it matters"], rows}});

Study.addUnit("apwh", {
  id: "u3",
  name: "Unit 3: Ch 13–21",
  short: "Unit 3",
  sections: [
    {id:"13", name:"Ch 13: The Realm of Islam"},
    {id:"14", name:"Ch 14: Empire in East Asia"},
    {id:"15", name:"Ch 15: India & the Indian Ocean"},
    {id:"16", name:"Ch 16 & 19: Christian Europe"},
    {id:"17", name:"Ch 17: Nomadic Empires"},
    {id:"18", name:"Ch 18: Sub-Saharan Africa"},
    {id:"20", name:"Ch 20: Americas & Oceania"},
    {id:"21", name:"Ch 21: Expanding Horizons"}
  ],

  notes: {
    "13": [
      {p:"In about a century, Islam went from one man's message in Arabia to the faith of an empire stretching from Spain to India. Its spread built the **dar al-Islam** (\"house of Islam\"), a huge zone tied together by one faith, one holy law, and busy trade, and it became one of the richest and most cosmopolitan societies of the era."},
      {h:"Muhammad and the beginnings"},
      {p:"**Muhammad** (570–632) was a merchant in **Mecca**, a trading city that held the Ka'ba, a shrine pilgrims already visited. He taught that he had received revelations from Allah, the one God, completing the message of earlier Jewish and Christian prophets. His followers later wrote the revelations down as the **Quran** (compiled in the 650s). Facing hostility, he moved to Medina in 622 (the hijra), returned to take Mecca in 630, and made the pilgrimage himself, the example for the **hajj** every Muslim should make once if able."},
      {h:"Who leads after the prophet? Sunni and Shia"},
      {p:"Muhammad was the last prophet, so his successors were caliphs (\"deputies\"), not prophets. His friend **Abu Bakr** became the first caliph. Some Muslims believed leadership belonged instead to **Ali**, Muhammad's cousin and son-in-law, and his descendants. Ali did become the fourth caliph but was murdered in 661. His supporters became the **Shia**. The majority, who accepted the early caliphs, became the **Sunni**. The split began as a political question about succession and grew into a lasting religious division."},
      {h:"Two dynasties"},
      {p:"The **Umayyad Dynasty** (661–750, capital Damascus) conquered from Spain to India but ruled as an Arab military elite and favored Arabs over non-Arab converts, which bred resentment. The **Abbasid Dynasty** (750–1258, capital Baghdad) overthrew them and ran a more cosmopolitan empire with Persians and other non-Arabs in government. Under the Abbasids, scholars (ulama) and judges (**qadis**) spread **sharia**, the holy law built from the Quran and Muhammad's example, giving very different lands a shared legal culture. Abbasid power faded as regions broke away; Seljuq Turks held real power by the 1050s, and the Mongols destroyed Baghdad in 1258."},
      {h:"How Islam spread and blended"},
      {p:"Conquest brought lands under Muslim rule, but conversion came mostly through trade and missionaries. **Sufis**, mystics who stressed personal devotion, were the most effective missionaries because they tolerated local customs and made Islam feel familiar. Muslim scholars absorbed Persian political ideas, Indian math (\"Arabic\" numerals), and Greek philosophy. **Ibn Rushd** (Averroes), a qadi in Spain, wrote on Aristotle; his work later shaped European scholasticism."},
      key([
        ["Muhammad", "Prophet of Islam (570–632). United most of Arabia under the new faith by his death."],
        ["Quran", "Islam's holy book: Allah's revelations to Muhammad, written down in the 650s."],
        ["Mecca", "Muhammad's home city and site of the Ka'ba; Islam's holiest city and the goal of the hajj."],
        ["Hajj", "Pilgrimage to Mecca. Brought Muslims from everywhere together, spreading ideas and business ties."],
        ["Sharia", "Islamic holy law, based on the Quran and Muhammad's example. Gave the whole Muslim world a common legal culture."],
        ["Qadis (Gadis)", "Judges who decided cases using the Quran and sharia."],
        ["Dar al-Islam", "\"House of Islam\": all lands under Islamic rule, linked by faith, law, and trade."],
        ["Abu Bakr", "First caliph, chosen right after Muhammad died. Led as the prophet's deputy, not a prophet."],
        ["Ali", "Muhammad's cousin and son-in-law, fourth caliph. Shia Muslims believe leadership belonged to him and his heirs."],
        ["Shia", "Muslims who believe only Ali's descendants should lead. A minority that developed its own doctrines and rituals."],
        ["Sunni", "The majority of Muslims, who accepted the early caliphs as legitimate."],
        ["Sufism", "Mystical Islam focused on personal devotion. Sufi missionaries spread Islam by blending it with local customs."],
        ["Umayyad Dynasty", "First dynasty of caliphs (661–750), Damascus. Huge conquests, but favored Arabs, which caused resentment."],
        ["Abbasid Dynasty", "Caliphs from 750 to 1258, Baghdad. More cosmopolitan; a golden age of trade and learning."],
        ["Ibn Rushd", "Muslim philosopher (Averroes) whose writing on Aristotle influenced European scholasticism."]
      ]),
      {tip:"AP connection: compare how Islam, Christianity, and Buddhism each spread along trade routes and adapted to local cultures. Sufis are a great example of syncretism."}
    ],
    "14": [
      {p:"After 350 years of division, China was reunified under the Sui, Tang, and Song dynasties. A strong state, a merit-based bureaucracy, and an economic boom made China the most productive society in the world, and its neighbors (Korea, Vietnam, Japan) borrowed heavily from it."},
      {h:"Sui and Tang: rebuilding the empire"},
      {p:"The **Sui** (589–618) reunified China and built the **Grand Canal**, linking the Yellow River in the north to the rice-growing Yangzi valley in the south so food and trade could move north. The heavy taxes and millions of forced laborers it took, plus failed wars in Korea, led to revolt. The **Tang** (618–907) kept the Sui's ideas and ran them better: good roads and canals, the **Equal Field System** (the state gave land to families based on need, so aristocrats couldn't build giant estates), and a **Bureaucracy of Merit** (officials chosen by civil service exams on Confucian learning, not by birth). Tang China saw itself as the **Middle Kingdom**, the center of the world, and expected neighbors to send tribute."},
      {h:"Song: rich but militarily weak"},
      {p:"The **Song** (960–1279) expanded the exam system and put civilian scholars above generals. That made government strong but the army weak. The nomadic **Jurchen** took northern China in 1127, and the Song moved south to Hangzhou until the Mongols conquered them. Even so, the Song economy boomed: fast-ripening rice, population over 100 million, huge cities, paper money, printing, gunpowder, and the magnetic compass."},
      {h:"Society and ideas"},
      {p:"Patriarchy grew stronger. **Foot Binding** (tightly wrapping girls' feet) spread among elite families during the Song, limiting women's movement. Buddhism became very popular, and Confucian thinkers answered it with **Neo-Confucianism**, which kept Confucian values about family and society but borrowed Buddhist ideas about the soul and logic. It shaped East Asian thought for centuries."},
      {h:"Japan"},
      {p:"Japan was never conquered by China but copied Tang government and culture. During the **Heian Period** (794–1185) a refined court culture flourished, best captured in **The Tale of Genji**, written by Lady Murasaki, a woman at court. Real power shifted to regional lords and their **Samurai**, professional warriors who served them. In 1185 the Minamoto clan set up a **Shogun**, a military ruler governing in the emperor's name. Samurai later followed **Bushido**, a code of loyalty, honor, and discipline."},
      key([
        ["Sui", "Short dynasty (589–618) that reunified China; fell because of high taxes and forced labor."],
        ["Grand Canal", "Waterway linking north and south China; moved rice and trade, tying the empire together."],
        ["Tang", "Dynasty (618–907) that ran China efficiently and spread its influence to Korea, Vietnam, and central Asia."],
        ["Equal Field System", "State gave land to families based on need, limiting aristocratic estates. Broke down as population grew."],
        ["Bureaucracy of Merit", "Officials chosen by Confucian civil service exams rather than family background."],
        ["Middle Kingdom", "China's view of itself as the center of the world, with neighbors sending tribute."],
        ["Song", "Dynasty (960–1279): booming economy and technology, but a weak military."],
        ["Jurchen", "Nomads who conquered northern China in 1127, pushing the Song south."],
        ["Foot Binding", "Wrapping girls' feet to keep them small; spread in the Song and shows strengthened patriarchy."],
        ["Neo-Confucianism", "Confucian values mixed with Buddhist ideas about the soul and logic; lasted for centuries."],
        ["Heian Period", "Japanese era (794–1185) of elegant court culture modeled partly on Tang China."],
        ["Tale of Genji", "Novel by Lady Murasaki about Heian court life; often called the world's first novel."],
        ["Shogun", "Military ruler of Japan who governed in the emperor's name (starting 1185)."],
        ["Samurai", "Professional warriors who served regional lords in Japan."],
        ["Bushido", "\"Way of the warrior\": the samurai code of loyalty, honor, and discipline."]
      ]),
      {tip:"AP connection: Tang/Song innovations (printing, gunpowder, compass) spread west along the Silk Roads and sea lanes. That's a classic \"effects of trade networks\" answer."}
    ],
    "15": [
      {p:"Unlike China or the Abbasids, postclassical India never rebuilt a lasting central empire. It was a patchwork of Hindu and Muslim kingdoms. But it sat at the center of the busiest trade network of the age, the Indian Ocean, and its religions and culture spread across southeast Asia."},
      {h:"Politics: many kingdoms, and Islam arrives"},
      {p:"**Harsha** briefly reunited northern India in the 600s, but his realm fell apart when he died. Islam reached India three ways: Arab armies conquered **Sind** (the Indus valley) in 711, Muslim merchants settled in coastal cities, and Turks invaded from Afghanistan. **Mahmud of Ghazni** raided northern India repeatedly after 1000, looting Hindu temples. His successors set up the **Sultanate of Delhi** (1206–1526), Muslim rulers over a mostly Hindu population. In the south, Hindu kingdoms stayed strong: the **Chola Kingdom** (850–1267) grew rich from sea trade, and **Vijayanagar** (1336–1565) became the major Hindu power."},
      {h:"The Indian Ocean trade network"},
      {p:"**Monsoons**, winds that blow one direction in summer and the other in winter, let sailors plan round trips. Arab and Indian **dhows** and big Chinese **junks** carried silk, spices, cotton, and porcelain. India was the hub: it sold cotton, pepper, and steel and passed along goods from both directions. The **Kingdom of Axum** (Christian Ethiopia) traded through the Red Sea into this network."},
      {h:"Society and religion"},
      {p:"The **Caste System** adapted to all this trade: subcastes (jati) often worked like guilds, and newcomers and merchants could be absorbed as new castes. Hinduism grew more popular through devotion to Vishnu and Shiva, and the **Bhakti** movement welcomed people of every caste and both sexes. That made Hinduism compete better with Islam, and some bhakti teachers blended the two."},
      {h:"Southeast Asia"},
      {p:"Southeast Asian rulers adopted Indian religions mostly because Hinduism and Buddhism supported strong kings. **Funan** on the Mekong was the first Indian-influenced state. The Khmer built **Angkor**, a capital designed as a model of the Hindu universe. In the 1400s **Melaka**, a port controlling the strait between the Indian Ocean and the South China Sea, grew rich and spread Islam across the region."},
      key([
        ["Harsha", "King who briefly reunited northern India (600s); the realm collapsed after him."],
        ["Mahmud of Ghazni", "Turkish ruler from Afghanistan who raided northern India and plundered temples."],
        ["Sind", "Indus River valley, conquered by Arab Muslims in 711: Islam's first foothold in India."],
        ["Sultanate of Delhi", "Muslim state ruling northern India (1206–1526) over a Hindu majority."],
        ["Chola Kingdom", "Hindu kingdom of southern India (850–1267) that profited from Indian Ocean trade."],
        ["Vijayanagar", "Powerful Hindu kingdom of southern India (1336–1565)."],
        ["Monsoons", "Seasonal winds that reverse direction, making Indian Ocean trade predictable."],
        ["Dhows / Junks", "Arab and Indian sailing ships / large Chinese ships that carried Indian Ocean trade."],
        ["Kingdom of Axum", "Christian kingdom in Ethiopia that traded through the Red Sea."],
        ["Caste System", "Hindu social order; subcastes worked like guilds and absorbed newcomers."],
        ["Bhakti", "Hindu devotional movement open to all castes and women."],
        ["Angkor", "Khmer capital in Cambodia, built as a model of the Hindu universe."],
        ["Melaka", "Port state on a key strait; rich from trade and a center for spreading Islam."],
        ["Funan", "Early Indian-influenced trading state on the Mekong River."]
      ]),
      {tip:"AP connection: the Indian Ocean is the go-to example of a sea-based trade network. Know its technology (monsoons, dhows, junks) and its effects (diasporic merchant communities, spread of Islam to southeast Asia)."}
    ],
    "16": [
      {p:"After Rome fell in the west, Christendom split into two worlds. **Byzantium**, the surviving eastern Roman empire, stayed rich and centralized. Western Europe broke into small, local powers. Over time the eastern and western churches split too. From 1000 to 1300 the west recovered: farming improved, towns and trade grew, and the Church shaped everything from universities to wars."},
      {h:"Byzantium"},
      {p:"**Justinian** (527–565) tried to win back the western empire, codified Roman law (his code later shaped European law), and built **Hagia Sophia**, the great domed church in Constantinople. After Muslim armies took much of its land, Byzantium survived with the **Theme System**: generals ran provinces and gave free peasants land in return for military service, giving the empire a strong local defense. Emperors also tried **Iconoclasm**, banning religious images, which caused bitter conflict."},
      {h:"The church splits"},
      {p:"Eastern and western Christians drifted apart over language, rituals, and above all whether the pope in Rome had authority over the patriarch in Constantinople. In 1054 they excommunicated each other (**Excommunication** means being cut off from the church). That **Schism** created the Eastern Orthodox and Roman Catholic churches, which are still separate."},
      {h:"Early medieval western Europe"},
      {p:"With no strong central government and **Vikings** raiding from Scandinavia, local lords protected their lands with armed **retainers**, who served in return for land. **Serfs** were peasants bound to the land: not slaves, but they owed labor and rent to their lord. **Monasticism** (monks and nuns living by rules like St. Benedict's) kept learning alive, cleared land, and sent missionaries."},
      {h:"The high middle ages (1000–1300)"},
      {p:"The **Holy Roman Empire** (from 962) never became a real central state; its emperors clashed with popes in the **Investiture Contest** over who could appoint bishops. Better farming meant more people, towns, and trade. **Guilds** organized each craft, setting quality, prices, and helping members. In the north, the **Hanseatic League** linked trading cities around the Baltic and North Sea. Writers described **Three Estates**: those who pray (clergy), fight (nobles), and work (peasants), though merchants didn't fit neatly."},
      {p:"Universities spread **Scholasticism**, using Aristotle's logic to support Christian faith; **St. Thomas Aquinas** was its greatest thinker. **St. Francis** founded the Franciscans, friars who lived in poverty and preached in towns. The Church also backed war: the **Crusades** (from 1095) tried to take the Holy Land from Muslims, and the **Reconquista** pushed Muslims out of Spain (finished 1492). The crusades failed long term but increased Europe's contact and trade with the Islamic world."},
      key([
        ["Justinian", "Byzantine emperor: codified Roman law, built Hagia Sophia, tried to retake the west."],
        ["Hagia Sophia", "Huge domed church in Constantinople; later an Ottoman mosque."],
        ["Theme System", "Byzantine provinces run by generals; peasants got land for military service."],
        ["Iconoclasm", "Byzantine policy of destroying religious images; caused major conflict."],
        ["Excommunication", "Expelling someone from the church community."],
        ["Schism", "1054 split into the Eastern Orthodox and Roman Catholic churches."],
        ["Vikings", "Scandinavian raiders and traders who struck across Europe in the 800s–900s."],
        ["Retainers", "Armed followers who served a lord in return for land and support."],
        ["Serf", "Peasant bound to the land, owing labor and rent to a lord."],
        ["Monasticism", "Life in monasteries under a rule; preserved learning and spread Christianity."],
        ["Holy Roman Empire", "German-Italian empire (from 962) that never became centralized."],
        ["Investiture Contest", "Popes vs. emperors over who appoints bishops."],
        ["Guilds", "Associations of craft workers that set standards and protected members."],
        ["Hanseatic League", "Alliance of northern trading cities around the Baltic and North Sea."],
        ["Three Estates", "Clergy, nobles, and peasants: the medieval idea of society."],
        ["Scholasticism", "Using Aristotle's logic to explain and support Christian faith."],
        ["St Thomas Aquinas", "Leading scholastic thinker; blended faith and reason."],
        ["St Francis", "Founder of the Franciscans: friars living in poverty, preaching in towns."],
        ["Crusades", "Christian wars from 1095 to take the Holy Land from Muslims."],
        ["Reconquista", "Christian reconquest of Spain from Muslims, finished in 1492."]
      ])
    ],
    "17": [
      {p:"From 1000 to 1500, nomads from the central Asian steppe built the biggest empires the world had seen. Turkish peoples built long-lasting ones, and the Mongols built the largest. By connecting Eurasia under one rule, they boosted trade and travel, and also helped spread the plague."},
      {h:"Nomadic life"},
      {p:"Steppe peoples were herders who moved with their animals and lived in **yurts** (round felt tents). Their early religion centered on **shamans**, who communicated with spirits, though many later became Buddhist, Christian, or Muslim. Clans grouped into tribes led by a **khan**. Horse-riding and archery made them fearsome soldiers."},
      {h:"The Turks"},
      {p:"The **Uighur Turks** lived in oasis cities and later served the Mongols as clerks and gave them a script. The **Saljuq Turks** moved into the Abbasid realm, took real power in Baghdad, and beat the Byzantines in 1071, opening Anatolia to Turks. There, **Osman** founded the **Ottoman Turks**' state around 1300, and **Mehmed II** captured Constantinople in 1453, ending the Byzantine empire."},
      {h:"The Mongols"},
      {p:"Chinggis Khan united the Mongols in 1206 and ruled from **Karakorum**. After his death the empire divided: the **Yuan Dynasty** in China (Khubilai Khan, 1279–1368), the **Ilkhanate of Persia** (which destroyed Baghdad in 1258, then converted to Islam), the **Chagatai** khanate in central Asia, and the **Golden Horde** in Russia, which let Russian princes rule as long as they paid tribute. Mongol rule made the Silk Roads safer, so merchants, missionaries, and diplomats traveled widely."},
      {p:"**Tamerlane** (Timur), a Turkish conqueror from the Chagatai lands, built a brutal empire from Samarkand in the late 1300s, attacking Persia, Russia, and India. It fell apart soon after he died."},
      key([
        ["Turks", "Steppe nomads who built durable empires (Saljuqs, Ottomans) across southwest Asia."],
        ["Yurts", "Round felt tents nomads lived in; easy to move."],
        ["Shaman", "Religious specialist who communicated with spirits for the community."],
        ["Khan", "Ruler of a nomadic tribe or confederation."],
        ["Uigher Turks", "Turkish oasis people who became key Mongol allies and administrators."],
        ["Saljuq Turks", "Turks who took over the Abbasid realm and seized Anatolia from Byzantium."],
        ["Karakorum", "The Mongol capital in Mongolia."],
        ["Yuan Dynasty", "Mongol dynasty ruling China (1279–1368)."],
        ["Chagatai", "Mongol khanate in central Asia."],
        ["Ilkhanate of Persia", "Mongol state in Persia; sacked Baghdad in 1258, later converted to Islam."],
        ["Golden Horde", "Mongol khanate ruling Russia through tribute-paying Russian princes."],
        ["Tamerlane", "Turkish conqueror who built a short-lived empire from Samarkand (late 1300s)."],
        ["Osman", "Founder of the Ottoman state in Anatolia (around 1300)."],
        ["Ottoman Turks", "Turkish dynasty that grew into a huge empire."],
        ["Mehmed II", "Ottoman sultan who captured Constantinople in 1453."]
      ]),
      {tip:"AP connection: the Mongols are a top example of how empires boost trade and exchange (Pax Mongolica) and of how trade spreads disease (the plague, Ch 21)."}
    ],
    "18": [
      {p:"Most sub-Saharan societies were organized by kinship rather than states. Where trade with Muslim merchants grew, though, Africans built powerful states: empires in west Africa rich from gold, and trading city-states on the east coast. Rulers often adopted Islam, which blended with African traditions."},
      {h:"Kinship and village life"},
      {p:"In **kin-based societies**, families and clans ran villages and settled disputes without kings or bureaucracies. **Age Grades** were groups of people born around the same time who went through life stages together and created loyalties that crossed family lines. **Bananas**, brought from southeast Asia across the Indian Ocean, grew well in forested areas and fueled population growth and migration."},
      {h:"West Africa: gold, salt, and Islam"},
      {p:"Camel caravans across the Sahara traded west African gold for salt and goods. The **Kingdom of Ghana** grew rich taxing this trade. The **Mali Empire** replaced it: **Sundiata** founded Mali in the 1230s, and **Mansa Musa** made a famous pilgrimage to Mecca in 1324, giving away so much gold that he advertised Mali's wealth across the Muslim world. Mali's rulers became Muslim and built mosques and schools (Timbuktu), but most people kept their traditional religions."},
      {h:"East and central Africa"},
      {p:"Along the east coast, **Swahili City States** like **Kilwa**, Mombasa, and Zanzibar traded gold, ivory, and slaves into the Indian Ocean network. **Swahili** is a Bantu language with many Arabic words, a sign of the mixing there. Ruling elites became Muslim. Inland, **Zimbabwe** (Great Zimbabwe, known for its stone walls) controlled gold that flowed to the coast. The **Kingdom of Kongo** in central Africa built a centralized state. In Ethiopia, **Axum** stayed Christian."},
      {p:"Slavery existed in Africa, and slaves were also sent to Muslim lands. The **Zanj Revolt** (869–883) was a long uprising of east African slaves forced to work in Mesopotamia."},
      {p:"**Ibn Battuta**, a Muslim traveler, visited both Mali and Kilwa, and his writings are a key source on them."},
      key([
        ["Kin-based Society", "Society run by families and clans instead of a formal state."],
        ["Age Grades", "Groups of people the same age who shared duties and loyalties across families."],
        ["Bananas", "Crop from southeast Asia that boosted African population growth and migration."],
        ["Kingdom of Ghana", "West African kingdom rich from taxing the trans-Saharan gold trade."],
        ["Mali Empire", "West African empire (1200s–1400s) built on gold and trade."],
        ["Sundiata", "Founder of the Mali Empire (1230s)."],
        ["Mansa Musa", "Mali ruler whose 1324 hajj showed off Mali's huge gold wealth."],
        ["Swahili", "Bantu language and culture of the east African coast, mixed with Arabic."],
        ["Swahili City States", "East African coastal trading cities (Kilwa, Mombasa, Zanzibar)."],
        ["Kilwa", "One of the richest Swahili cities; traded gold from Zimbabwe."],
        ["Zimbabwe", "Inland kingdom famous for stone enclosures; controlled gold trade."],
        ["Kingdom of Kongo", "Centralized kingdom in central Africa (from the 1300s)."],
        ["Axum", "Christian kingdom in Ethiopia."],
        ["Zanj Revolt", "Uprising of east African slaves in Mesopotamia (869–883)."],
        ["Ibn Battuta", "Muslim traveler whose accounts describe Mali and Kilwa."]
      ]),
      {tip:"AP connection: Mali and the Swahili coast show how trade spread Islam, and how African elites adopted Islam while ordinary people often kept local beliefs."}
    ],
    "20": [
      {p:"The Americas and Oceania developed with almost no contact with Afro-Eurasia. Without iron tools, wheels, or large pack animals, they still built big, complex societies, including two empires: the Aztecs in Mexico and the Incas in the Andes."},
      {h:"Mexico"},
      {p:"The **Toltec** (950–1150) built a militaristic state that later peoples admired. The **Mexica**, who arrived in central Mexico in the 1200s, founded **Tenochtitlan** around 1345 on an island in Lake Texcoco. They farmed **chinampas**, \"floating gardens\" built up from the lake bed, which fed a huge city. Their empire, usually called the **Aztec** empire, collected tribute from conquered peoples and practiced human sacrifice, believing it kept the sun and gods alive."},
      {h:"The Andes"},
      {p:"The **Inca** built the largest empire in the Americas in the 1400s, ruled from Cuzco. Without writing, they kept records with **quipu**, knotted cords recording numbers and information. They linked the empire with roads and demanded labor from subjects."},
      {h:"North America and Oceania"},
      {p:"The **Iroquois** in the northeastern woodlands farmed maize, beans, and squash. Women controlled the fields and chose the men who served as leaders. In the Pacific, Polynesian voyagers settled New Zealand, becoming the **Maori**, who relied on sweet potatoes since tropical crops couldn't grow there."},
      key([
        ["Toltec", "Militaristic Mexican state (950–1150) that later peoples saw as a model."],
        ["Mexica", "The people who built the Aztec empire (their name for themselves)."],
        ["Aztec", "Empire of the Mexica in central Mexico; ran on tribute and sacrifice."],
        ["Tenochtitlan", "Aztec capital on an island in Lake Texcoco; one of the world's biggest cities."],
        ["Chinampas", "\"Floating gardens\" in the lake that fed Tenochtitlan."],
        ["Inca", "Largest empire in the Americas, in the Andes; famous for roads and labor service."],
        ["Quipu", "Knotted cords the Inca used to keep records."],
        ["Iroquois", "Woodland farming peoples of northeastern North America; women held real power."],
        ["Maori", "Polynesian settlers of New Zealand."]
      ])
    ],
    "21": [
      {p:"From 1300 to 1500, long-distance travel grew, then disaster struck, then recovery led to a new age of exploration. These centuries set up the voyages that would connect the whole world."},
      {h:"Travelers"},
      {p:"**Marco Polo**, a Venetian merchant, lived at the Mongol Yuan court in China, and his book made Europeans eager for Asian trade. **Ibn Battuta**, a Moroccan legal scholar, traveled across the dar al-Islam from west Africa to India and China, often serving as a qadi."},
      {h:"Crisis"},
      {p:"Around 1300 the **Little Ice Age** began: cooler weather shortened growing seasons and caused famine. In the 1340s the **Black Plague** (bubonic plague) spread from central Asia along trade routes to China, southwest Asia, and Europe, killing about a third of Europe's people. The resulting labor shortages led to higher wages and social unrest."},
      {h:"Recovery: China"},
      {p:"**Hongwu** drove out the Mongols and founded the **Ming Dynasty** (1368), working to erase Mongol influence. In the early 1400s the admiral **Zheng He** led huge fleets around the Indian Ocean to east Africa, showing off Ming power. Then the Ming stopped the voyages and focused on defending against nomads."},
      {h:"Recovery: Europe"},
      {p:"The **Renaissance** in Italy revived classical art and learning, and **Humanism** studied Greek and Roman texts for moral and practical lessons, not to reject religion. Strong monarchies formed: **Fernando and Isabel** united Spain, finished the **Reconquista** in 1492, and sponsored Columbus. Portugal's **Prince Henry** sponsored voyages down Africa's coast; **Bartolomeu Dias** rounded the Cape of Good Hope (1488), and **Vasco da Gama** reached India by sea (1498)."},
      key([
        ["Marco Polo", "Venetian who served the Mongol court in China; his book fueled European interest in Asia."],
        ["Ibn Battuta", "Moroccan traveler across the whole Muslim world."],
        ["Little Ice Age", "Cooling that began around 1300, causing famine and hardship."],
        ["Black Plague", "Bubonic plague of the 1340s that spread along trade routes, killing huge numbers."],
        ["Hongwu", "Founder of the Ming Dynasty; wiped out Mongol influence."],
        ["Ming Dynasty", "Chinese dynasty (1368–1644) that restored Chinese rule after the Mongols."],
        ["Zheng He", "Ming admiral whose fleets sailed to the Indian Ocean and east Africa (1405–1433)."],
        ["Renaissance", "Italian revival of classical art and learning."],
        ["Humanism", "Study of Greek and Roman texts for moral and practical lessons."],
        ["Fernando and Isabel", "Rulers who united Spain, finished the Reconquista, and sponsored Columbus."],
        ["Reconquista", "Christian reconquest of Spain, completed in 1492."],
        ["Prince Henry", "Portuguese prince who sponsored exploration of west Africa's coast."],
        ["Bartolomeu Dias", "Portuguese captain who rounded the Cape of Good Hope (1488)."],
        ["Vasco da Gama", "Portuguese captain who reached India by sea (1498)."]
      ]),
      {tip:"AP connection: contrast Zheng He with the Portuguese. China had the bigger fleets but chose to stop; Europe's competing states kept sending explorers."}
    ]
  },

  problems(k){
    const Q = (sec, text, opts, why) => k.choice([sec], "Ch " + (sec === "16" ? "16 & 19" : sec), text, opts, opts[0], [].concat(why), {shuffle:true});

    /* Ch 13 */
    Q("13", "The split between Sunni and Shia Muslims began as a disagreement over:", ["Who should lead the Muslim community after Muhammad died", "Whether the Quran should be written down", "Whether Muslims should make the hajj", "Whether Muslims could trade with Christians"],
      "Some backed Ali and his descendants as leaders; the majority accepted the early caliphs. A political question became a lasting religious divide.");
    Q("13", "Shia Muslims believe leadership of the Islamic community belonged to:", ["Ali and his descendants", "Abu Bakr and the early caliphs", "The Umayyad family", "Whoever the ulama elected"],
      "Ali was Muhammad's cousin and son-in-law. Shia Muslims see his line as the only rightful leaders.");
    Q("13", "What was Abu Bakr's role?", ["The first caliph, leading as Muhammad's deputy rather than as a prophet", "The last prophet of Islam", "Founder of the Abbasid dynasty", "A Sufi mystic who spread Islam to India"],
      "Muhammad was the \"seal of the prophets,\" so his successors were caliphs (deputies).");
    Q("13", "Which best explains why Umayyad rule caused resentment?", ["It favored Arabs over non-Arab converts", "It banned long-distance trade", "It moved the capital to Mecca", "It refused to collect taxes"],
      "The Umayyads ruled as an Arab military elite. Non-Arab Muslims felt treated as second-class, which helped the Abbasids overthrow them.");
    Q("13", "Compared to the Umayyads, the Abbasid caliphate was:", ["More cosmopolitan, with Persians and other non-Arabs in government", "Smaller and cut off from trade", "Ruled only by Arab generals", "Opposed to Islamic law"],
      "From Baghdad, the Abbasids relied on Persian ideas and officials and presided over a golden age of trade and learning.");
    Q("13", "Which statement best describes the dar al-Islam?", ["The lands under Islamic rule, connected by faith, law, and trade", "The holy city of Mecca", "A collection of Muhammad's sayings", "A Sufi religious order"],
      "\"House of Islam\": a vast zone from Spain to India where Muslims could travel and trade under a shared culture.");
    Q("13", "How did the hajj help tie the Islamic world together?", ["It brought Muslims from many regions together, spreading ideas and business connections", "It closed borders between Muslim states", "It was open only to Arabs", "It replaced the need for trade"],
      "Pilgrims, merchants, and scholars traveled together and exchanged goods and ideas on the way to Mecca.");
    Q("13", "Sufis were especially effective at spreading Islam because they:", ["Stressed personal devotion and tolerated local customs", "Forced conversions with armies", "Refused to leave Arabia", "Taught only Arabic-speaking elites"],
      "Sufis let converts keep familiar practices, which made Islam feel approachable.");
    Q("13", "Sharia is best described as:", ["Islamic holy law based on the Quran and Muhammad's example", "The pilgrimage to Mecca", "A tax on non-Muslims", "The title of the Abbasid ruler"],
      "Sharia gave Muslim societies from Spain to India a common legal and moral framework.");
    Q("13", "Qadis were:", ["Judges who decided cases using the Quran and sharia", "Caliphs' tax collectors", "Persian poets", "Byzantine generals"],
      "Qadis and ulama spread Islamic values and law in local communities.");
    Q("13", "Why is Ibn Rushd important beyond the Islamic world?", ["His writing on Aristotle influenced European scholasticism", "He founded the Abbasid dynasty", "He compiled the Quran", "He led the conquest of Spain"],
      "Europeans knew him as Averroes. His work helped Christian scholars like Aquinas engage with Aristotle.");
    Q("13", "Muslims believe the Quran is:", ["Allah's revelations to Muhammad", "A collection of Persian poetry", "A law code written by the caliphs", "Muhammad's personal diary"],
      "Muhammad recited the revelations; followers compiled them in writing in the 650s.");
    Q("13", "Which best explains the decline of Abbasid power?", ["Regions broke away, Seljuq Turks took real power, and the Mongols sacked Baghdad in 1258", "Byzantium conquered Baghdad in the 700s", "The caliphs converted to Christianity", "A plague wiped out Baghdad in 800"],
      "The caliphs became figureheads long before the Mongols ended the dynasty.");

    /* Ch 14 */
    Q("14", "The Grand Canal's main purpose was to:", ["Link the Yellow River north with the rice-growing Yangzi south", "Defend China from steppe nomads", "Connect China to India", "Irrigate farmland in Korea"],
      "It moved southern rice and goods north, tying the empire's economy together.");
    Q("14", "Which best explains why the Sui dynasty fell so quickly?", ["High taxes and forced labor, plus failed wars in Korea, sparked revolt", "A Mongol invasion", "An outbreak of plague", "A Japanese invasion"],
      "Projects like the Grand Canal took millions of conscripted laborers and made the Sui hated.");
    Q("14", "The equal-field system:", ["Gave land to families based on need, limiting aristocratic estates", "Gave land only to samurai", "Gave land to Buddhist monasteries", "Divided China into equal provinces"],
      "It kept land in peasant hands and taxes flowing. It broke down as the population grew.");
    Q("14", "The Tang \"bureaucracy of merit\" meant officials were chosen by:", ["Civil service exams on Confucian learning", "Inheritance from their fathers", "Election by local villages", "Appointment of Buddhist monks"],
      "Exams opened government to talented men instead of only aristocrats.");
    Q("14", "Calling China the \"Middle Kingdom\" reflected the belief that:", ["China was the center of the world, and neighbors owed it tribute", "China lay between India and Japan", "The emperor shared power with nobles", "China should stay out of foreign affairs"],
      "The tributary system expected neighbors to acknowledge the emperor with gifts.");
    Q("14", "A major weakness of the Song dynasty was that:", ["Favoring civilian officials over generals left its military weak", "It spent too much on its army", "It rejected Confucian education", "It had almost no bureaucracy"],
      "The Song couldn't stop nomads; the Jurchen took northern China in 1127.");
    Q("14", "The Jurchen were:", ["Nomads who conquered northern China and pushed the Song south", "Japanese warrior clans", "A Korean dynasty", "Buddhist missionaries from India"],
      "After 1127 the Song ruled only the south, from Hangzhou.");
    Q("14", "The spread of foot binding during the Song era is evidence of:", ["Strengthening patriarchy and limits on elite women", "Growing equality between men and women", "The influence of Buddhist teaching", "Mongol customs spreading into China"],
      "Bound feet limited women's movement and became a status symbol for wealthy families.");
    Q("14", "Neo-Confucianism is best described as:", ["Confucian values combined with Buddhist ideas and reasoning", "A rejection of Confucius' teachings", "A Japanese nature religion", "A Chinese form of Islam"],
      "It shows Buddhism's deep influence on China and shaped east Asian thought for centuries.");
    Q("14", "Early Japanese rulers responded to Tang China by:", ["Copying Tang government and culture while keeping their own emperor and Shinto", "Being conquered by Tang armies", "Rejecting all Chinese influence", "Converting entirely to Islam"],
      "China never invaded Japan, but its model was too impressive to ignore.");
    Q("14", "The Tale of Genji is significant because it:", ["Shows the refined court culture of Heian Japan, written by a woman at court", "Describes samurai battles in Kamakura", "Records the history of Tang China", "Is a Buddhist scripture"],
      "Lady Murasaki's novel is a window into Heian aristocratic life.");
    Q("14", "A shogun was:", ["A military ruler who governed in the emperor's name", "The Japanese emperor", "A Buddhist high priest", "A Chinese governor in Korea"],
      "From 1185 shoguns held real power while emperors stayed in Kyoto as symbols.");
    Q("14", "Samurai were:", ["Professional warriors who served regional lords", "Peasant farmers", "Merchants in port cities", "Court poets in Heian"],
      "They enforced lords' authority and fought their wars; bushido was their code.");
    Q("14", "Bushido stressed:", ["Loyalty, honor, and discipline", "Trade and profit", "Nonviolence and withdrawal", "Equality of all classes"],
      "The \"way of the warrior\" defined how samurai were supposed to live and die.");
    Q("14", "Which Tang and Song technologies spread across Eurasia?", ["Paper, printing, gunpowder, and the magnetic compass", "The steam engine and railroads", "The telescope and the printing press with metal type", "Iron plows and the wheel"],
      "They traveled along the Silk Roads and sea lanes and changed societies far from China.");

    /* Ch 15 */
    Q("15", "Unlike Tang China or the Abbasids, postclassical India:", ["Never restored a lasting centralized empire", "Had almost no trade", "Rejected Hinduism", "Was ruled by Byzantium"],
      "India stayed a patchwork of regional kingdoms, but it thrived on trade.");
    Q("15", "Harsha is best known for:", ["Briefly reuniting northern India in the 600s", "Founding the Delhi Sultanate", "Building Angkor", "Leading the Chola navy"],
      "His kingdom collapsed after he died, and India returned to regional rule.");
    Q("15", "Islam came to India through:", ["Arab conquest of Sind, Muslim merchants on the coasts, and Turkish invasions", "Mongol conquest only", "European missionaries", "Chinese merchants"],
      "Three different paths, over several centuries.");
    Q("15", "Mahmud of Ghazni was:", ["A Turkish ruler from Afghanistan who raided northern India and looted temples", "The builder of Angkor", "A Chola king", "The founder of Melaka"],
      "His raids opened the way for the later Sultanate of Delhi.");
    Q("15", "The Sultanate of Delhi was:", ["A Muslim state ruling northern India over a mostly Hindu population", "A Hindu kingdom in the far south", "A Buddhist state in Sri Lanka", "A Chinese colony"],
      "Its sultans never fully controlled the subcontinent.");
    Q("15", "The Chola and Vijayanagar kingdoms were:", ["Hindu kingdoms in southern India", "Muslim sultanates in the north", "Buddhist states in southeast Asia", "Persian provinces"],
      "The Chola grew rich from sea trade; Vijayanagar was the great Hindu power of the 1300s–1500s.");
    Q("15", "Monsoons made Indian Ocean trade work because they:", ["Reverse direction by season, so sailors could plan round trips", "Stopped all sailing for half the year", "Kept the ocean calm all year", "Only blew near China"],
      "Merchants timed voyages to ride one monsoon out and the other back.");
    Q("15", "Dhows and junks were:", ["Arab/Indian sailing ships and large Chinese ships", "Mongol tents", "Indian war elephants", "Viking longboats"],
      "Bigger ships increased the volume of Indian Ocean trade.");
    Q("15", "The Kingdom of Axum was:", ["A Christian kingdom in Ethiopia that traded through the Red Sea", "A Hindu kingdom in India", "A Persian trading city", "A west African gold empire"],
      "Axum linked Africa to the Mediterranean and Indian Ocean trade.");
    Q("15", "How did the caste system adapt to growing trade?", ["Subcastes worked like guilds and absorbed merchants and newcomers", "It was abolished by the Delhi sultans", "It disappeared in southern India", "It banned all trade"],
      "Flexibility let caste survive and even expand.");
    Q("15", "The bhakti movement helped Hinduism by:", ["Welcoming people of all castes and both sexes through devotion", "Banning the worship of Vishnu", "Requiring Sanskrit study for all", "Merging with Christianity"],
      "Emotional devotion helped Hinduism compete with Islam.");
    Q("15", "Southeast Asian rulers adopted Hinduism and Buddhism mainly because:", ["Those faiths supported the idea of a powerful king", "Indian armies conquered them", "China required it", "They had no religion before"],
      "Indian merchants brought the faiths; rulers saw political benefits.");
    Q("15", "Angkor was:", ["The Khmer capital, built as a model of the Hindu universe", "A Muslim port in Sumatra", "The capital of the Chola", "A Chinese fortress"],
      "Its temples are among the largest religious monuments in the world.");
    Q("15", "Melaka became important because it:", ["Controlled a key strait and spread Islam through southeast Asia", "Was the capital of the Mughal empire", "Was a Hindu temple city in India", "Was the main Chinese navy base"],
      "Trade through the strait made it rich, and its rulers sponsored Islam.");
    Q("15", "Funan was:", ["An early trading state on the Mekong that adopted Indian culture", "An Arab city in Sind", "A Turkish khanate", "A kingdom in Ethiopia"],
      "It was the first southeast Asian state to show strong Indian influence.");

    /* Ch 16 & 19 */
    Q("16", "Justinian's most lasting achievement was:", ["Codifying Roman law", "Conquering Persia", "Converting the Vikings", "Ending the Crusades"],
      "His code later shaped law across Europe. He also built Hagia Sophia.");
    Q("16", "Hagia Sophia is:", ["A huge domed church in Constantinople, later an Ottoman mosque", "A monastery rule", "A Byzantine law code", "A Viking settlement"],
      "It shows Byzantine wealth and later Ottoman power.");
    Q("16", "The Byzantine theme system strengthened the empire by:", ["Giving peasants land in return for military service, under local generals", "Hiring Viking mercenaries", "Banning all trade with Muslims", "Moving the capital to Rome"],
      "It created a strong local defense after Muslim conquests.");
    Q("16", "Iconoclasm was:", ["A Byzantine policy of destroying religious images", "The Pope's power to appoint bishops", "A crusade against Spain", "A guild rule"],
      "It caused bitter conflict within Byzantium and with the western church.");
    Q("16", "What happened in the Schism of 1054?", ["The pope and patriarch excommunicated each other, splitting Catholic and Orthodox churches", "Muslims captured Constantinople", "The Holy Roman Empire was founded", "Vikings sacked Paris"],
      "Disputes over the pope's authority, language, and ritual made the split permanent.");
    Q("16", "Excommunication means:", ["Being cut off from the church community", "Being named a bishop", "Paying a church tax", "Joining a monastery"],
      "It was a powerful weapon because salvation depended on the church.");
    Q("16", "Western Europe after Rome's fall was organized around local lords mainly because:", ["There was no strong central government and invasions (like the Vikings) kept coming", "Kings wanted to share power", "The pope ordered it", "Trade was booming"],
      "Lords with armed retainers provided local protection.");
    Q("16", "Retainers were:", ["Armed followers who served a lord in return for land", "Peasants bound to the land", "Monks who copied books", "Merchants in guilds"],
      "Lords and retainers formed the warrior elite of early medieval Europe.");
    Q("16", "Serfs were:", ["Peasants bound to the land who owed labor and rent to a lord", "Slaves who could be sold", "Knights who fought for kings", "Town merchants"],
      "Not slaves, but not free to leave either.");
    Q("16", "Monasteries were important in early medieval Europe because they:", ["Preserved learning, cleared land, and sent missionaries", "Ran the royal armies", "Collected taxes for kings", "Organized the Crusades"],
      "Rules like St. Benedict's organized monks' days around prayer, study, and work.");
    Q("16", "The Investiture Contest was a conflict between:", ["Popes and Holy Roman Emperors over appointing bishops", "Byzantium and the Vikings", "Guilds and merchants", "Spain and Portugal"],
      "It weakened the emperors and boosted papal authority.");
    Q("16", "The Holy Roman Empire:", ["Never became a strong centralized state", "Ruled all of Europe", "Was based in Constantinople", "Was founded by Muslims"],
      "Its emperors fought popes and German princes and couldn't unify their lands.");
    Q("16", "Guilds were:", ["Associations of craft workers that set standards and protected members", "Armies of crusaders", "Church courts", "Peasant villages"],
      "They regulated quality and prices and supported members' families.");
    Q("16", "The Hanseatic League was:", ["An alliance of trading cities around the Baltic and North Sea", "A Byzantine army", "A group of monasteries", "A crusading order"],
      "It shows Europe's growing trade in the high middle ages.");
    Q("16", "The \"three estates\" were:", ["Those who pray, those who fight, and those who work", "Kings, popes, and emperors", "Spain, France, and England", "Guilds, banks, and universities"],
      "Clergy, nobles, and peasants. Growing merchant classes didn't fit the scheme.");
    Q("16", "Scholasticism tried to:", ["Use Aristotle's logic to explain and support Christian faith", "Reject all Greek philosophy", "Translate the Bible into English", "Replace the pope with councils"],
      "St. Thomas Aquinas, drawing partly on Ibn Rushd, was its greatest thinker.");
    Q("16", "St. Francis is known for:", ["Founding an order of friars who lived in poverty and preached in towns", "Leading the First Crusade", "Writing the Summa Theologica", "Founding the Hanseatic League"],
      "Franciscans served crowded towns where churches couldn't keep up.");
    Q("16", "A long-term effect of the Crusades was:", ["More contact and trade between Europe and the Islamic world", "Permanent Christian control of Jerusalem", "The end of the papacy", "The conversion of most Muslims"],
      "They failed militarily, but Europeans gained a taste for eastern goods and ideas.");
    Q("16", "The Reconquista was:", ["The Christian reconquest of Spain from Muslims", "A Byzantine law code", "A Viking invasion", "A Holy Roman tax"],
      "It ended in 1492 with the fall of Granada.");

    /* Ch 17 */
    Q("17", "Why could nomads like the Mongols defeat much larger settled empires?", ["Horse-riding, archery, and mobility made them superb soldiers", "They had gunpowder first", "They had larger populations", "They built the best navies"],
      "Nomadic life trained every man as a mounted archer.");
    Q("17", "Yurts were:", ["Portable felt tents nomads lived in", "Mongol war chariots", "Turkish mosques", "Steppe trade taxes"],
      "Easy to take down and move with the herds.");
    Q("17", "In early Turkish and Mongol religion, shamans:", ["Communicated with spirits on behalf of the community", "Led Islamic prayers", "Ran Buddhist monasteries", "Served as tax collectors"],
      "Many nomads later became Buddhist, Christian, or Muslim.");
    Q("17", "The Saljuq Turks are significant because they:", ["Took real power in the Abbasid realm and opened Anatolia to Turks", "Founded the Yuan dynasty", "Built Karakorum", "Converted Russia to Islam"],
      "Their victory over Byzantium in 1071 led to Turkish Anatolia.");
    Q("17", "The Uighur Turks were valuable to the Mongols because they:", ["Served as clerks and administrators and gave the Mongols a script", "Built the Mongol navy", "Were Christian missionaries", "Conquered Japan for them"],
      "Mongols used talented allies and conquered peoples to run their empire.");
    Q("17", "After Chinggis Khan, the Mongol empire split into:", ["The Yuan, Ilkhanate, Chagatai, and Golden Horde", "The Ottoman, Safavid, and Mughal empires", "Ghana, Mali, and Songhay", "The Sui, Tang, and Song"],
      "Each khanate ruled a different region of Eurasia.");
    Q("17", "The Golden Horde ruled Russia by:", ["Letting Russian princes rule as long as they paid tribute", "Settling Mongols in every village", "Converting Russians to Buddhism", "Building a new capital at Moscow"],
      "Indirect rule; Moscow grew strong by collecting tribute for the Mongols.");
    Q("17", "The Ilkhanate of Persia is remembered for:", ["Sacking Baghdad in 1258, then converting to Islam", "Conquering China", "Ruling Russia", "Building the Great Wall"],
      "Conquerors who eventually adopted the faith of the conquered.");
    Q("17", "The Yuan dynasty was:", ["The Mongol dynasty that ruled China", "A Turkish sultanate in India", "A Japanese shogunate", "A Persian dynasty"],
      "Khubilai Khan finished conquering China in 1279; the Ming drove the Mongols out in 1368.");
    Q("17", "Karakorum was:", ["The Mongol capital", "The Ottoman capital", "A Chinese canal", "A Silk Road oasis in Persia"],
      "Envoys and merchants from across Eurasia came there.");
    Q("17", "How did Mongol rule affect Eurasia?", ["It made the Silk Roads safer, boosting trade and travel", "It cut off all trade between east and west", "It ended the use of horses", "It spread Christianity to China"],
      "Unified rule over vast lands let merchants, missionaries, and diseases travel.");
    Q("17", "Tamerlane (Timur) was:", ["A Turkish conqueror who built a brutal, short-lived empire from Samarkand", "The founder of the Ottoman state", "A Yuan emperor", "A Russian prince"],
      "His empire broke apart after his death in 1405.");
    Q("17", "Mehmed II is significant because he:", ["Captured Constantinople in 1453, ending the Byzantine empire", "Founded the Mongol empire", "Built the Taj Mahal", "Defeated the Crusaders at Jerusalem"],
      "Constantinople became Istanbul, the Ottoman capital.");
    Q("17", "Osman is known as:", ["The founder of the Ottoman state", "The last Byzantine emperor", "A Mongol khan", "A Saljuq sultan who took Baghdad"],
      "His followers became known as Ottomans (Osmanlis).");

    /* Ch 18 */
    Q("18", "In a kin-based society:", ["Families and clans run local affairs without a formal state", "A king rules through a bureaucracy", "Merchants control the government", "Religious leaders own all the land"],
      "Most sub-Saharan villages were run this way.");
    Q("18", "Age grades were important because they:", ["Created loyalties that crossed family lines", "Decided who could own land", "Set prices in markets", "Picked the next king"],
      "People born around the same time went through life stages together.");
    Q("18", "Bananas affected sub-Saharan Africa by:", ["Boosting population growth and migration into forested regions", "Ending the trans-Saharan trade", "Spreading Christianity", "Replacing gold as currency"],
      "They came from southeast Asia via the Indian Ocean.");
    Q("18", "The Kingdom of Ghana grew rich mainly by:", ["Taxing the trans-Saharan trade in gold", "Exporting bananas to Europe", "Controlling the Indian Ocean", "Mining silver"],
      "Gold went north; salt and goods came south.");
    Q("18", "Mansa Musa's pilgrimage to Mecca in 1324 is significant because it:", ["Showed off Mali's enormous gold wealth to the Muslim world", "Began the Atlantic slave trade", "Spread Christianity in west Africa", "Ended Mali's trade with Egypt"],
      "He gave away so much gold that its value dropped in Cairo.");
    Q("18", "Sundiata is known as:", ["The founder of the Mali Empire", "The builder of Great Zimbabwe", "A Swahili merchant", "A Christian king of Axum"],
      "He founded Mali in the 1230s.");
    Q("18", "Why did many west African rulers adopt Islam?", ["It helped them deal with Muslim merchants and gave them literate advisors", "Muslim armies forced every subject to convert", "It was required to grow bananas", "European missionaries encouraged it"],
      "Elites converted; many ordinary people kept traditional beliefs alongside it.");
    Q("18", "The Swahili city-states (like Kilwa) were:", ["Coastal trading cities in east Africa tied to the Indian Ocean network", "Inland farming villages", "Christian kingdoms in Ethiopia", "West African desert towns"],
      "They traded gold, ivory, and slaves for goods from Asia.");
    Q("18", "The Swahili language shows:", ["Mixing of Bantu African and Arab cultures through trade", "Portuguese influence", "Mongol conquest", "Chinese colonization"],
      "It is a Bantu language with many Arabic words.");
    Q("18", "Great Zimbabwe was:", ["An inland kingdom whose stone walls show wealth from the gold trade", "A Swahili port", "A Muslim university town", "A Christian monastery"],
      "It supplied gold to coastal cities like Kilwa.");
    Q("18", "The Kingdom of Kongo was:", ["A centralized state in central Africa", "A city on the Swahili coast", "A Mongol khanate", "A Christian kingdom in Ethiopia"],
      "It formed in the 1300s and later dealt with the Portuguese (Ch 25).");
    Q("18", "The Zanj Revolt was:", ["An uprising of east African slaves in Mesopotamia", "A war between Mali and Ghana", "A Christian revolt in Axum", "A peasant revolt in Europe"],
      "It lasted from 869 to 883 and reveals the slave trade into Muslim lands.");
    Q("18", "Ibn Battuta matters to African history because he:", ["Wrote firsthand accounts of Mali and Kilwa", "Founded the Mali Empire", "Led the Zanj Revolt", "Brought bananas to Africa"],
      "Travelers' accounts are key sources on these societies.");

    /* Ch 20 */
    Q("20", "Which challenge did the Americas face that Afro-Eurasia didn't?", ["No iron tools, wheels, or large pack animals", "No farming", "No cities", "No religion"],
      "They still built large, complex societies with stone, wood, and human labor.");
    Q("20", "Chinampas were:", ["\"Floating gardens\" in Lake Texcoco that fed Tenochtitlan", "Inca knotted cords", "Aztec temples", "Iroquois longhouses"],
      "They made very productive farming possible in the lake.");
    Q("20", "The Aztec empire held power mainly through:", ["Tribute from conquered peoples, backed by military force", "A large Confucian bureaucracy", "Trade with Europe", "Shared religion with all neighbors"],
      "Conquered peoples resented the tribute, and some later helped the Spanish.");
    Q("20", "Mexica and Aztec refer to:", ["The same people, who built the empire centered on Tenochtitlan", "Two rival empires", "The Inca and the Toltec", "Spanish colonists"],
      "Mexica is what they called themselves.");
    Q("20", "The Toltec are significant because they:", ["Built a militaristic state that later Mexican peoples admired", "Founded Cuzco", "Built the first Inca roads", "Settled New Zealand"],
      "The Aztecs claimed connection to Toltec greatness.");
    Q("20", "Quipu were:", ["Knotted cords the Inca used to keep records", "Aztec floating gardens", "Inca roads", "Maori canoes"],
      "The Inca ran a huge empire without writing.");
    Q("20", "The Inca connected their empire mainly through:", ["A large road network and labor service from subjects", "A powerful navy", "Horse-drawn wagons", "Written law codes"],
      "Roads moved armies, messengers, and goods through the Andes.");
    Q("20", "Among the Iroquois, women:", ["Controlled farming and chose the men who served as leaders", "Had no role in public life", "Served as the main warriors", "Ran long-distance trade by sea"],
      "An example of women holding real social and political power.");
    Q("20", "The Maori were:", ["Polynesian settlers of New Zealand", "An Andean people", "Iroquois allies", "Aztec priests"],
      "They depended on sweet potatoes in New Zealand's cooler climate.");
    Q("20", "Tenochtitlan was:", ["The Aztec capital, built on an island in Lake Texcoco", "The Inca capital in the Andes", "A Toltec temple", "An Iroquois village"],
      "Later Mexico City was built on its ruins.");

    /* Ch 21 */
    Q("21", "Marco Polo's travels mattered because:", ["His book made Europeans eager for direct trade with Asia", "He discovered the Americas", "He founded the Ming dynasty", "He brought the plague to Europe"],
      "He lived at Khubilai Khan's court during Mongol rule.");
    Q("21", "How did the Black Plague spread so widely in the 1340s?", ["Along trade routes linking central Asia, China, southwest Asia, and Europe", "Through Viking raids", "Only by sea from the Americas", "Through Crusader armies alone"],
      "The same networks that carried goods also carried disease.");
    Q("21", "A major effect of the plague in Europe was:", ["Labor shortages that led to higher wages and social unrest", "A population boom", "The end of trade with Asia", "The rise of the Mongols"],
      "So many died that surviving workers could demand more.");
    Q("21", "The Little Ice Age:", ["Brought cooler weather that shortened growing seasons and caused famine", "Froze all trade for a century", "Ended the Mongol empire overnight", "Caused the Renaissance"],
      "It began around 1300 and weakened societies just before the plague.");
    Q("21", "Hongwu's main goal as the first Ming emperor was to:", ["Erase Mongol influence and restore Chinese rule", "Expand Mongol rule into Europe", "Open China to European merchants", "Convert China to Christianity"],
      "He centralized power and revived Chinese traditions.");
    Q("21", "Zheng He's voyages are significant because:", ["Huge Ming fleets reached east Africa, then China chose to stop exploring", "They discovered the Americas", "They started the Atlantic slave trade", "They conquered India"],
      "Contrast with Europe, where competing states kept funding voyages.");
    Q("21", "Humanism focused on:", ["Studying Greek and Roman texts for moral and practical lessons", "Rejecting all religion", "Scholastic logic only", "Military conquest"],
      "Humanists stayed Christian but admired classical learning and writing.");
    Q("21", "The Renaissance was:", ["A revival of classical art and learning that began in Italy", "A plague in 1348", "A Portuguese voyage", "A Mongol khanate"],
      "Wealthy Italian cities paid for art and scholarship.");
    Q("21", "Fernando and Isabel are significant because they:", ["United Spain, finished the Reconquista, and sponsored Columbus", "Led the First Crusade", "Ruled the Holy Roman Empire", "Founded the Hanseatic League"],
      "All in or around 1492.");
    Q("21", "Prince Henry of Portugal is known for:", ["Sponsoring voyages down the west African coast", "Sailing to India himself", "Conquering Mexico", "Founding the Jesuits"],
      "His sponsorship led toward Dias and da Gama.");
    Q("21", "Bartolomeu Dias:", ["Rounded the Cape of Good Hope in 1488", "Reached India in 1498", "Reached the Caribbean in 1492", "Circled the globe"],
      "He proved ships could sail from the Atlantic into the Indian Ocean.");
    Q("21", "Vasco da Gama's voyage of 1498 was important because it:", ["Opened a direct sea route from Europe to India", "Reached the Americas", "Ended Ming exploration", "Started the Crusades"],
      "Europeans could now reach Indian Ocean trade without Muslim middlemen.");
    Q("21", "Ibn Battuta traveled mostly:", ["Across the dar al-Islam, from west Africa to India and China", "Through the Americas", "Around Europe's monasteries", "With Zheng He's fleet"],
      "As a legal scholar he often found work as a qadi.");
  }
});
})();
