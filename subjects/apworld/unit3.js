/* AP World History · Unit 3 (Ch 13–21, c. 600–1450)
   Source: Bentley, Traditions & Encounters (chapters numbered like the class term lists).
   No memorization drills. Questions are AP-style: a short source (adapted/paraphrased) or background summary,
   then causation / comparison / continuity / context questions. The right answer is listed first; options shuffle on screen.
   saq: short-answer prompts (a, b, c) with model answers. leq: essay prompts for the thesis builder.
   **text** = bold in notes. */
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

  // Short answer: three parts each, with a model answer and the evidence words a grader would want to see
  saq: [
    {sec:"13", parts:[
      {q:"Identify ONE way the expansion of Islam encouraged trade between c. 600 and c. 1450.", model:"Muslim rule created the dar al-Islam, a huge zone where merchants shared one faith, one law (sharia), and Arabic, so they could trade safely from Spain to India.", look:["dar al-islam","sharia","hajj","merchant","caravan","silk road","indian ocean","arabic"]},
      {q:"Explain ONE way Muslim rulers adapted to governing diverse peoples.", model:"The Abbasids brought Persians and other non-Arabs into government and used Persian administrative traditions, which reduced the resentment the Umayyads had caused and made the empire easier to govern.", look:["abbasid","persian","jizya","non-arab","convert","bureaucra","toleran","umayyad"]},
      {q:"Explain ONE reason Islam spread to regions that Arab armies never conquered.", model:"Muslim merchants and Sufi missionaries carried Islam along trade routes to west Africa and southeast Asia, and Sufis' tolerance of local customs made conversion easier.", look:["sufi","merchant","trade","syncretism","missionar","indian ocean","west africa","southeast asia"]}
    ]},
    {sec:"14", parts:[
      {q:"Identify ONE policy that helped the Tang dynasty govern China effectively.", model:"The bureaucracy of merit chose officials through Confucian civil service exams, giving the state capable administrators instead of only aristocrats.", look:["exam","merit","bureaucra","equal-field","equal field","grand canal","tribut"]},
      {q:"Explain ONE way Tang or Song China influenced its neighbors.", model:"Japan imitated Tang government and adopted Chinese writing and Buddhism because Tang China's power and prestige made it a model worth copying.", look:["japan","korea","vietnam","heian","tribut","buddhis","writing","confucian"]},
      {q:"Explain ONE effect of Song economic growth on the wider Afro-Eurasian world.", model:"Song porcelain and silk fueled Indian Ocean trade, and Chinese inventions like the compass and gunpowder spread west, changing navigation and warfare elsewhere.", look:["compass","gunpowder","printing","porcelain","silk","paper money","indian ocean","trade"]}
    ]},
    {sec:"15", parts:[
      {q:"Identify ONE technology or kind of knowledge that made Indian Ocean trade possible.", model:"Sailors' knowledge of the monsoon winds, which reverse direction by season, let them plan round-trip voyages.", look:["monsoon","dhow","junk","lateen","compass","astrolabe"]},
      {q:"Explain ONE way Indian Ocean trade spread religion.", model:"Muslim merchants settled in port cities such as Melaka, and local rulers converted to strengthen ties with them, spreading Islam across southeast Asia.", look:["melaka","merchant","islam","port","diaspora","sufi","conver","southeast asia","hindu","buddhis"]},
      {q:"Explain ONE way Hindu society responded to the arrival of Islam in India.", model:"The bhakti movement stressed personal devotion open to all castes and women, which helped Hinduism keep followers who might have been drawn to Islam.", look:["bhakti","devotion","caste","vijayanagar","kabir","women"]}
    ]},
    {sec:"16", parts:[
      {q:"Identify ONE political difference between Byzantium and western Europe after c. 500.", model:"Byzantium kept a centralized emperor and bureaucracy, while western Europe broke into small territories ruled by local lords.", look:["emperor","centraliz","justinian","decentraliz","lord","feudal","retainer","theme"]},
      {q:"Explain ONE cause of the schism of 1054.", model:"The pope claimed authority over the patriarch in Constantinople, and together with differences in language and ritual, this led the two churches to excommunicate each other.", look:["pope","patriarch","authority","excommunicat","iconoclasm","latin","greek","ritual"]},
      {q:"Explain ONE effect of the crusades on Europe.", model:"Crusaders and merchants brought home a taste for Asian goods, so Italian cities like Venice grew rich expanding trade with the eastern Mediterranean.", look:["trade","venice","genoa","spice","italian","merchant","knowledge","aristotle","demand"]}
    ]},
    {sec:"17", stim:"The road from Tana to Cathay is perfectly safe, by day and by night, according to what the merchants say who have used it.", cite:"Adapted from Francesco Pegolotti, a Florentine merchant's handbook, c. 1340", parts:[
      {q:"Identify ONE historical development that explains the conditions Pegolotti describes.", model:"Mongol control of Eurasia (the Pax Mongolica) protected merchants along the Silk Roads.", look:["mongol","pax mongolica","khan","silk road","protect","empire"]},
      {q:"Explain ONE method the Mongols used to rule conquered peoples.", model:"They tolerated local religions and used local officials, like Uighur scribes or Russian princes who collected tribute, which reduced resistance to their rule.", look:["tolera","uighur","tribute","golden horde","local","persian","religion","official"]},
      {q:"Explain ONE negative effect of the connections described in the source.", model:"The same trade routes carried the bubonic plague, which killed huge numbers of people in China, southwest Asia, and Europe in the 1340s.", look:["plague","black death","disease","1340","population","died"]}
    ]},
    {sec:"18", parts:[
      {q:"Identify ONE way trade contributed to state-building in west Africa.", model:"Taxing the trans-Saharan trade of gold for salt made Ghana and Mali wealthy enough to build large states.", look:["gold","salt","trans-saharan","tax","ghana","mali","caravan","camel"]},
      {q:"Explain ONE reason west African rulers adopted Islam.", model:"Islam gave rulers literate advisors and closer ties with Muslim merchants, which helped them manage trade and govern their states.", look:["merchant","trade","literate","scholar","advisor","mansa musa","timbuktu","legitima"]},
      {q:"Explain ONE way Swahili culture reflected its Indian Ocean connections.", model:"Swahili is a Bantu language full of Arabic words, and coastal elites became Muslim, showing how trade mixed African and Arab cultures.", look:["swahili","arabic","bantu","islam","kilwa","mosque","indian ocean"]}
    ]},
    {sec:"20", parts:[
      {q:"Identify ONE way the Mexica fed and supplied the population of Tenochtitlan.", model:"They farmed chinampas, raised fields built up in the lake, and collected food as tribute from conquered peoples.", look:["chinampa","tribute","lake","maize"]},
      {q:"Explain ONE difference between Aztec and Inca methods of rule.", model:"The Aztecs mostly collected tribute and left local rulers in place, while the Inca ruled more directly through roads, resettlement, and required labor service.", look:["tribute","mita","labor","road","direct","local","quipu"]},
      {q:"Explain ONE way religion supported Aztec power.", model:"The Aztecs believed human sacrifice kept the sun moving, which justified wars to capture prisoners, expanding the empire and frightening subject peoples.", look:["sacrifice","sun","huitzilopochtli","god","war","captive"]}
    ]},
    {sec:"21", parts:[
      {q:"Identify ONE effect of the Black Death on Afro-Eurasian societies.", model:"It killed so many people that it caused labor shortages, which pushed wages up and led to social unrest.", look:["labor","wage","population","serf","peasant","revolt","unrest"]},
      {q:"Explain ONE reason the Ming dynasty ended Zheng He's voyages.", model:"The voyages were very expensive, and the court decided to spend its resources defending the northern frontier against the Mongols instead.", look:["cost","mongol","north","defen","confucian","great wall","expens"]},
      {q:"Explain ONE motive for Portuguese exploration in the 1400s.", model:"Portugal wanted direct access to gold and spices without paying Muslim and Venetian middlemen, and it also hoped to spread Christianity.", look:["spice","gold","middlem","venice","christian","profit","prince henry"]}
    ]}
  ],

  // Long essay: prompt, the skill it tests, a counterpoint idea, an evidence bank, and a sample thesis
  leq: [
    {secs:["13","15","18","21"], skill:"Causation",
      prompt:"Evaluate the extent to which trade networks contributed to the spread of religion in the period c. 600–1450.",
      context:"Before 600, classical empires like Han China and Rome had already linked Afro-Eurasia, and Buddhism and Christianity had begun spreading along their roads.",
      counter:"Conquest also spread religion: Arab armies took Sind and Delhi sultans ruled northern India.",
      evidence:["Sufi missionaries","Muslim merchants in Indian Ocean ports","Melaka's rulers converting","Mali and Mansa Musa","Swahili city-states","Buddhism on the Silk Roads into Tang China","Arab conquest of Sind (counter)","Crusades and Reconquista (counter)"],
      thesis:"Although conquest spread Islam into places like Sind and northern India, trade networks were the main reason religions spread from 600 to 1450, because Muslim merchants and Sufis carried Islam to west Africa and southeast Asia, and Silk Road merchants brought Buddhism into China."},
    {secs:["17","21"], skill:"Continuity and change",
      prompt:"Evaluate the extent to which the Mongol conquests changed Eurasia in the period c. 1200–1450.",
      context:"Before the Mongols, Eurasia was divided among many states, such as the Song in China, the Abbasids in Baghdad, and Kievan Rus, and Silk Road trade had declined.",
      counter:"Much stayed the same: the Ilkhanate adopted Islam and Persian government, and the Yuan relied on Chinese institutions.",
      evidence:["Pax Mongolica and safer Silk Roads","Marco Polo's travels","Spread of the bubonic plague","Destruction of Baghdad (1258)","Golden Horde and the rise of Moscow","Ilkhanate converting to Islam (continuity)","Uighur and Persian officials","Religious tolerance at Karakorum"],
      thesis:"Although many local cultures continued under Mongol rule, as when the Ilkhanate adopted Islam and Persian government, the Mongol conquests greatly changed Eurasia by reviving Silk Road trade and by spreading the bubonic plague across the continent."},
    {secs:["16"], skill:"Comparison",
      prompt:"Compare the political organization of Byzantium and western Europe in the period c. 600–1450.",
      context:"After the western Roman empire fell in 476, the eastern half survived as Byzantium while the west was divided among Germanic kingdoms.",
      counter:"Both relied on Christianity to support rulers and used land in exchange for military service (themes in Byzantium, retainers in the west).",
      evidence:["Justinian's law code","Theme system","Emperor appointing the patriarch","Western lords, retainers, and serfs","Holy Roman Empire's weakness","Investiture Contest","Schism of 1054","Regional monarchies in France and England"],
      thesis:"Both Byzantium and western Europe used Christianity to support their rulers, but Byzantium kept a centralized emperor who controlled the church, while western Europe was divided among local lords and kings who competed with a powerful pope."},
    {secs:["14","15","21"], skill:"Causation",
      prompt:"Evaluate the extent to which China's economic growth affected other societies in Afro-Eurasia in the period c. 600–1450.",
      context:"After more than 350 years of division following the fall of the Han, the Sui and Tang reunified China and rebuilt its infrastructure.",
      counter:"China's influence had limits: Japan kept its own emperor and Shinto, and the Ming eventually ended overseas voyages.",
      evidence:["Champa rice and population growth","Grand Canal","Porcelain and silk exports","Junks in the Indian Ocean","Compass, gunpowder, and printing spreading west","Paper money","Tributary system","Zheng He's voyages"],
      thesis:"Although China's influence had limits, as Japan kept its own emperor and Shinto, Tang and Song economic growth deeply affected Afro-Eurasia because Chinese goods fueled Indian Ocean and Silk Road trade, and Chinese inventions such as the compass and gunpowder transformed navigation and warfare elsewhere."}
  ],

  problems(k){
    const lab = s => "Ch " + (s === "16" ? "16 & 19" : s);
    // one source excerpt with its questions: [question, [right answer, ...wrong answers], why]
    const set = (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], lab(sec), t, o, o[0], [w], {shuffle:true, stim, cite}));
    const Q = (sec, t, o, w) => k.choice([sec], lab(sec), t, o, o[0], [w], {shuffle:true});
    const BG = "Background summary";
    const pic = (sec, file, alt, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], lab(sec), t, o, o[0], [w], {shuffle:true, img:{file, alt}, cite}));

    /* ===== Ch 13 ===== */
    set("13", "If the study of philosophy leads to truth, then the Law does not forbid it, for truth cannot contradict truth. Where reason and scripture seem to disagree, scripture should be interpreted in a way that agrees with reason.",
      "Adapted from Ibn Rushd (Averroes), The Decisive Treatise, 1100s", [
      ["Ibn Rushd's argument most directly reflects which development in the Abbasid era?", ["Muslim scholars translating and building on Greek philosophy", "Sufi mystics spreading Islam through poetry, music, and dance", "Qadis applying sharia to settle disputes across a diverse empire", "Conservative ulama rejecting all learning from outside Islam"],
        "He is defending the use of Aristotle's reasoning, a product of the Abbasid translation movement. The ulama point is partly true later, but the passage argues the opposite."],
      ["Ideas like Ibn Rushd's had the greatest influence on which later development?", ["Scholastics like Aquinas using Aristotle to explain Christian faith", "The Protestant Reformation's challenge to the authority of the pope", "The Mongol destruction of Baghdad and the Abbasid caliphate", "The spread of neo-Confucian philosophy through Song China"],
        "His commentaries reached Europe through Spain and shaped scholasticism's effort to harmonize faith and reason."],
      ["Based on the passage, Ibn Rushd would most likely agree that", ["reason and faith can both lead to truth", "philosophy should replace the Quran as a guide", "only scripture can explain how nature works", "Greek ideas are too dangerous for Muslims to study"],
        "He argues truth can't contradict truth, so careful reasoning and revelation fit together."]
    ]);
    set("13", "By the 800s, Muslim rulers maintained roads, wells, lodgings, and police along the routes to Mecca. Merchants arranged business deals with pilgrims from other lands, and students and scholars exchanged ideas during the weeks they traveled together.",
      "Summary of accounts of the hajj, 800s–900s", [
      ["The developments described best illustrate how the hajj", ["encouraged commercial and cultural exchange across the dar al-Islam", "kept Muslim regions apart by limiting travel to holy seasons", "was mainly a way for the Umayyads to collect taxes from Arabs", "spread Islam mostly into Christian kingdoms of western Europe"],
        "Pilgrims from Spain to India met, traded, and shared ideas, tying the Islamic world together."],
      ["Muslim rulers most likely paid for pilgrimage routes in order to", ["strengthen their legitimacy as protectors of the faith", "end the split between Sunni and Shia Muslims for good", "avoid the cost of keeping large standing armies in the provinces", "prepare their armies for an invasion of the Byzantine empire"],
        "Supporting a pillar of Islam showed rulers as good Muslim leaders, which helped justify their rule."],
      ["Which can be inferred from the passage?", ["Religious practice and commerce reinforced each other in the Islamic world", "Pilgrims usually avoided merchants so the hajj would stay purely religious", "Only wealthy Muslims and rulers were allowed to make the pilgrimage", "Muslim rulers saw the hajj as a threat and tried to discourage it"],
        "Pilgrims, merchants, and scholars traveled together, so faith and trade fed each other."]
    ]);
    set("13", "Under the Umayyads, many non-Arab converts still paid extra taxes and were kept out of high positions. Their resentment, along with Shia opposition, helped Abbasid forces win support in Persia and overthrow the Umayyads in 750.",
      BG, [
      ["Which best explains the Abbasids' success against the Umayyads?", ["They gained support from non-Arab Muslims and Shia who resented Umayyad rule", "They formed an alliance with the Byzantine emperor against Damascus", "They restored rule to Ali's descendants, just as they had promised", "They used new cavalry tactics borrowed from the Mongols of central Asia"],
        "Discontent with Arab favoritism was their base. They did not actually hand power to Ali's line, and gunpowder came centuries later."],
      ["Compared to Umayyad rule, Abbasid rule is best described as", ["more cosmopolitan, with Persians and other non-Arabs in government", "more dependent on the Arab military aristocracy that had led the conquests", "centered in Damascus, closer to the old Byzantine provinces", "based on Persian royal law instead of the Quran and sharia"],
        "The Abbasids ruled from Baghdad with Persian officials and administrative traditions while upholding sharia."],
      ["The situation described most directly contradicted which Islamic ideal?", ["The equality of all believers", "The duty of every able Muslim to make the hajj", "The ban on worshipping idols or other gods", "The final authority of the Quran in law"],
        "Islam taught that all Muslims were equal, yet non-Arab converts were treated as second-class."]
    ]);
    set("13", "Sufi teachers often lived among ordinary people, taught through poetry, music, and dance, and allowed converts to keep honoring local saints and customs. In Anatolia, India, and southeast Asia they won large numbers of converts.",
      BG, [
      ["The Sufi approach described is an example of", ["syncretism, blending Islam with local traditions", "Islam spreading mainly through military conquest and force", "Muslim scholars rejecting the Quran in favor of poetry", "a political movement to bring back the Umayyad caliphs"],
        "Letting converts keep familiar practices made Islam feel approachable rather than foreign."],
      ["Sufis were often more successful than legal scholars at winning converts because they", ["emphasized personal devotion over strict legal scholarship", "were backed by the caliph's armies wherever they went to preach", "required every convert to learn Arabic before joining", "refused to trade with or live among non-Muslims"],
        "Emotional, personal faith appealed to people who had no training in Islamic law."],
      ["A historian would most likely use this passage as evidence that", ["Islam often spread by adapting to local cultures, not only by conquest", "Sufis worked against the official spread of Islam in these regions", "Islam spread mostly among Arabs and rarely reached other peoples", "converts were required to give up all of their local customs and festivals at once"],
        "Adaptation (syncretism) explains much of Islam's growth beyond the lands Arab armies conquered."]
    ]);
    Q("13", "Which statement best describes the significance of the Sunni–Shia split?", ["A dispute over who should succeed Muhammad became a lasting religious division", "A disagreement over trade routes split Arab merchants into rival camps", "Persian converts rejected the Quran and founded a separate religion", "The Abbasids ended the split by bringing both groups into their court"],
      "It began as a political question about leadership (Ali vs. the early caliphs) and grew into separate doctrines and rituals.");

    /* ===== Ch 14 ===== */
    set("14", "When my brother studied the Chinese classics, I learned the passages faster than he did, and my father sighed that I had not been born a boy. Later I hid the fact that I could read Chinese characters, because people said a woman showing off such learning was improper.",
      "Adapted from the diary of Lady Murasaki Shikibu, Japan, c. 1010", [
      ["The passage best illustrates that in Heian Japan", ["Chinese learning was prestigious but treated as a male domain", "women were forbidden from writing in any language at court", "the court rejected Chinese culture in favor of Shinto traditions", "Buddhist teachings barred women from any kind of education"],
        "Chinese characters were the language of government and scholarship. Women still wrote, famously in Japanese (The Tale of Genji)."],
      ["Japan's adoption of Chinese writing and Confucian ideas most directly resulted from", ["Japanese rulers imitating the prestige and government of Tang China", "Tang armies conquering the islands and installing governors", "Mongol invasions forcing Japan to adopt Chinese institutions", "Korean kings ruling Japan and bringing Chinese books with them"],
        "China never conquered Japan; Japanese elites chose to borrow from the Tang model."],
      ["Lady Murasaki's own career most directly shows that", ["Heian women found other paths to fame, such as writing in Japanese", "women ran the Heian government from behind the emperor's throne", "Chinese characters disappeared from Japanese writing in the Heian era", "women were completely excluded from life at the imperial court"],
        "She wrote The Tale of Genji in Japanese script while hiding her Chinese learning."]
    ]);
    set("14", "By 1127 Song China's population had passed 100 million. Fast-ripening Champa rice allowed two harvests a year in the south, and canals and coastal shipping moved food to growing cities. Merchants used paper money and credit, and workshops mass-produced porcelain and iron.",
      BG, [
      ["Which factor most directly made this population growth possible?", ["Larger food supplies from new rice strains and better farming", "Expansion of the equal-field land system under the Song emperors", "Mongol protection of trade routes across central Asia", "Conquest of new farmland in Korea and northern Vietnam"],
        "More food supported more people. The equal-field system had already broken down, and Mongol rule came later."],
      ["The economic changes described most likely led to", ["more commercialization and urban growth across east Asia", "a decline in Chinese manufacturing as farming took over", "China cutting off trade with Korea, Japan, and southeast Asia", "a return to barter as merchants stopped trusting coins"],
        "Song prosperity drove trade with southeast Asia, Korea, Japan, and beyond."],
      ["Which evidence would best support the claim that the Song economy was becoming commercialized?", ["Merchants' use of paper money and credit", "The growing wealth of Buddhist monasteries", "The spread of foot binding among elite families", "Japan's imitation of Tang government and writing"],
        "Money, credit, and markets are the marks of a commercial economy."]
    ]);
    set("14", "Song emperors expanded the civil service exams, paid scholar-officials generously, and kept generals firmly under civilian control. In 1127 the Jurchen captured the capital at Kaifeng, and the Song retreated to the south.",
      BG, [
      ["Which best explains the connection between these two developments?", ["Favoring civilian officials over the military left the Song open to nomadic attack", "The exam system produced so many unemployed scholars that they rebelled", "Confucian officials invited the Jurchen to rule in place of the emperor", "The Song had stopped maintaining the Grand Canal, cutting off food supplies"],
        "A strong bureaucracy but a weak army meant the Song repeatedly lost ground to northern nomads."],
      ["Compared to the Tang dynasty, the Song dynasty", ["expanded the bureaucracy of merit but was militarily weaker", "conquered more of central Asia but had a smaller bureaucracy", "relied more strictly on the equal-field system for taxes", "rejected Confucian education in favor of Buddhist schools"],
        "The Song's strength was administration and economy, not conquest."],
      ["A historian arguing that the Song valued scholarship over conquest would most likely cite", ["the expansion of the exams and generous pay for scholar-officials", "Song armies pushing the empire's borders far into central Asia", "Song cavalry defeating the Jurchen and recapturing the north", "the Song moving its capital to the port city of Hangzhou"],
        "The passage shows resources going to civilian scholars rather than generals."]
    ]);
    set("14", "Neo-Confucian scholars such as Zhu Xi rejected Buddhism's call to withdraw from family and society. Yet they borrowed Buddhist interest in the nature of reality, teaching that the universe follows a rational principle that people can understand through study and moral behavior.",
      BG, [
      ["Neo-Confucianism is best understood as an example of", ["a tradition absorbing ideas from a rival belief system", "Buddhism replacing Confucianism as China's official philosophy", "a new religion brought to China by Muslim merchants", "Chinese scholars rejecting the duties owed to family"],
        "It kept Confucian ethics but adapted Buddhist ways of thinking."],
      ["Neo-Confucianism shows continuity in Chinese society because it", ["kept family, hierarchy, and social order at the center of life", "gave Buddhist monasteries control over the imperial government", "expanded the legal rights of women in marriage and property", "replaced the civil service exams with Buddhist teachings"],
        "Its core concerns were the same as Confucius's, and it shaped east Asian thought for centuries."],
      ["Neo-Confucianism's long-term influence is best shown by", ["its adoption in Korea, Japan, and Vietnam for centuries", "its spread to west Africa along Indian Ocean trade routes", "its role in shaping the debates that started the crusades", "its adoption by Abbasid scholars in the House of Wisdom"],
        "It shaped east Asian thought for centuries after the Song."]
    ]);
    Q("14", "After 1185, shoguns and samurai held real power in Japan while the emperor remained a symbol. This most closely resembles", ["decentralized rule by lords and warriors in medieval Europe", "the centralized bureaucracy of officials in Song China", "the rule of the Abbasid caliphs at the height of their power", "the Inca system of roads, resettlement, and labor service"],
      "Both featured regional lords, professional warriors bound by loyalty, and a weak central monarch.");

    /* ===== Ch 15 ===== */
    set("15", "Mahmud utterly ruined the prosperity of the country, and the Hindus became like atoms of dust scattered in all directions. Their scattered remnants cherish the most bitter dislike of all Muslims, and this is why Hindu sciences have retreated far from the parts of the country we have conquered.",
      "Adapted from al-Biruni, a Muslim scholar who traveled with Mahmud of Ghazni, c. 1030", [
      ["Al-Biruni's account suggests that Mahmud of Ghazni's raids", ["deepened hostility between Hindus and Muslims in northern India", "spread Islam peacefully through the teaching of Sufi missionaries", "united northern and southern India into a single lasting empire", "led many Hindu scholars to move to Baghdad and Cairo for safety"],
        "Plundering temples created lasting resentment, as this Muslim observer admits."],
      ["Which is the best evidence that Islam also spread in India without conquest?", ["Muslim merchant communities settled in Indian Ocean port cities", "Mahmud of Ghazni carrying away treasure from Hindu temples", "The Delhi sultans collecting special taxes from their Hindu subjects", "Arab armies conquering Sind and making it an Umayyad province"],
        "The other three are all political or military. Merchants built mosques and communities through trade."],
      ["Al-Biruni was a Muslim scholar criticizing a Muslim ruler. This most likely makes his account", ["more believable about the damage the raids caused", "less reliable, because a Muslim scholar would always hate Islam", "irrelevant to Indian history, since he was not an Indian writer", "official propaganda written to celebrate Mahmud's victories"],
        "Sourcing: when a writer admits harm done by his own side, it is less likely to be propaganda."]
    ]);
    set("15", "Arab, Persian, Indian, Malay, and Chinese merchants used the monsoon winds to sail between ports. Many settled abroad, married local women, and built mosques and temples. Port cities such as Calicut and Melaka became crowded, cosmopolitan centers.",
      BG, [
      ["The pattern described most directly led to", ["merchant communities abroad that spread culture and religion", "a single empire that controlled all trade in the Indian Ocean", "a sharp decline in Indian Ocean trade after the year 1000", "European merchants taking control of the trade before 1450"],
        "These diasporic communities are how Islam and other traditions spread around the ocean basin."],
      ["Compared to Silk Road trade, Indian Ocean trade in this period", ["could move much larger volumes of bulk goods by sea", "relied mainly on camel caravans moving between oasis cities", "was controlled by a single empire that set every price", "carried only small, light luxury goods like silk and gems"],
        "Ships could carry cotton, rice, timber, and other heavy goods that caravans couldn't."],
      ["The passage suggests that Indian Ocean port cities were", ["cosmopolitan places where many cultures lived side by side", "closed to foreign merchants except during the monsoon season", "ruled directly by a single Indian Ocean empire", "mainly military bases with little trade or settlement"],
        "Merchants from many lands settled, married, and built places of worship there."]
    ]);
    set("15", "Melaka is a city made for merchandise, fitter than any other in the world. Whoever is lord of Melaka has his hand on the throat of Venice.",
      "Adapted from Tomé Pires, Portuguese official, 1515", [
      ["Pires's statement best reflects that Melaka", ["controlled a key strait between two major trade zones", "was the capital of a large land empire in southeast Asia", "grew most of the world's pepper and cloves within its walls", "had defeated Venice and taken over its Mediterranean trade"],
        "Spices bound for Venice passed through the Strait of Melaka, so controlling it meant controlling that trade."],
      ["Melaka's rulers sponsored Islam in the 1400s most likely because it", ["strengthened ties with the Muslim merchants who dominated regional trade", "was required of every subject by the Mongol khans who ruled them", "was encouraged by Portuguese missionaries who visited the port", "had been ordered by the Ming emperor as part of the tribute system"],
        "Sharing the faith of major trading partners brought commerce and allies."],
      ["Pires, a Portuguese official, was most likely interested in Melaka because", ["Portugal hoped to control the spice trade by seizing key ports", "Portugal hoped to spread Islam to southeast Asia from there", "Portugal and Venice had agreed to share the spice trade", "Portugal needed new farmland to feed its growing population"],
        "Portugal captured Melaka in 1511 for exactly the reason his remark gives."]
    ]);
    set("15", "Kings in Funan and at Angkor brought in brahmin advisors from India, built Hindu and Buddhist temples, and took Sanskrit titles, while keeping many local customs and beliefs.",
      BG, [
      ["Southeast Asian rulers adopted these Indian traditions mainly because", ["Hindu and Buddhist ideas supported the authority of kings", "Indian empires had conquered the whole region and imposed them", "they were required to join the overland Silk Roads", "Islam had already been banned by the local rulers"],
        "Divine kingship and sacred order made rulers look powerful and legitimate."],
      ["This process is best described as", ["cultural diffusion through trade", "forced conversion by foreign armies", "European colonization of the coast", "migration of nomads from central Asia"],
        "Indian merchants and priests brought these ideas; no Indian empire ruled southeast Asia."],
      ["Which feature of Angkor best supports the passage?", ["Temples designed as a model of the Hindu universe", "A cathedral modeled on Hagia Sophia in Constantinople", "Mosques built by Arab and Persian merchants", "A hall for Confucian civil service examinations"],
        "Angkor's temples show Indian religious ideas adopted by Khmer kings."]
    ]);
    Q("15", "Unlike Tang China or the Abbasid caliphate, postclassical India", ["stayed politically divided while thriving economically", "had very little contact with Islam or Muslim merchants", "was united under the Delhi Sultanate for many centuries", "saw its economy shrink as Indian Ocean trade declined"],
      "Regional kingdoms competed, but trade and manufacturing made India rich.");
    Q("15", "The bhakti movement's openness to all castes and to women most likely", ["helped Hinduism compete with Buddhism and Islam for followers", "abolished the caste system throughout southern India", "made Hinduism the official faith of the Delhi Sultanate", "carried Hindu devotion to Europe through Italian merchants"],
      "Personal devotion offered spiritual equality, much like the appeal of Sufism.");

    /* ===== Ch 16 & 19 ===== */
    set("16", "Let those who have been robbers now become soldiers of Christ. All who die on the way, whether by land or by sea, or in battle against the pagans, shall have immediate forgiveness of their sins.",
      "Adapted from Pope Urban II's speech at Clermont, 1095, as recorded by Fulcher of Chartres", [
      ["Urban II's appeal most directly drew on", ["the Church's power to offer spiritual rewards for fighting", "the Holy Roman Emperor's authority to give orders to the pope", "Byzantine control of Jerusalem and the holy places", "humanist interest in reviving classical Greek and Roman texts"],
        "Promising forgiveness of sins shows how much authority the papacy held."],
      ["Which was a major long-term effect of the crusades?", ["Greater European demand for and trade in Asian goods", "Permanent Christian rule over Jerusalem and the Holy Land", "The end of the pope's power to influence European kings", "The conversion of the Saljuq Turks to Roman Catholicism"],
        "Militarily they failed, but contact with the eastern Mediterranean boosted trade and exchange."],
      ["Fulcher of Chartres, a priest who went on the First Crusade, recorded this speech. A historian should consider that", ["he may have shaped the speech to glorify the crusade", "he opposed the crusades and wanted to discourage new recruits", "he was a Muslim writer recording the speech for Saladin", "the speech was actually given in Jerusalem, not Clermont"],
        "Sourcing: the recorder supported the cause and wrote the speech down years later."]
    ]);
    set("16", "The pope alone can be called universal. He alone may depose emperors. His decree can be annulled by no one, and he himself may be judged by no one.",
      "Adapted from Pope Gregory VII, Dictatus Papae, 1075", [
      ["These claims are most directly connected to", ["the Investiture Contest between popes and Holy Roman Emperors", "the schism of 1054 between the eastern and western churches", "the Byzantine policy of destroying religious images", "the Christian reconquest of Spain from Muslim rulers"],
        "Gregory VII and Emperor Henry IV fought over who could appoint bishops."],
      ["A consequence of conflicts like the one reflected here was that", ["the Holy Roman Empire never became a strong centralized state", "the pope took the title of Holy Roman Emperor for himself", "western Europe was reunited under a single Frankish king", "the Byzantine empire conquered Italy and deposed the pope"],
        "Papal opposition, plus German princes, kept the emperors weak."],
      ["Gregory VII's claims would most likely be opposed by", ["the Holy Roman Emperor, who appointed bishops in his lands", "Benedictine monks, who wanted bishops to obey their abbots", "Byzantine iconoclasts, who banned images in churches", "Muslim rulers in Spain, who wanted to choose Christian bishops"],
        "Emperor Henry IV fought Gregory over exactly these powers."]
    ]);
    set("16", "In Byzantium the emperor appointed the patriarch and often settled church disputes himself. In the west, popes increasingly claimed authority independent of kings.",
      BG, [
      ["This difference helps explain", ["the growing split that led to the schism of 1054", "the rise of the Hanseatic League in northern Europe", "the success of the Byzantine theme system against invaders", "the Viking raids on western European monasteries"],
        "Different ideas about church authority, plus language and ritual, drove the churches apart."],
      ["Compared to western Europe after 500, Byzantium", ["kept a centralized imperial government and strong economy", "was more politically divided among many local lords and kings", "lost all of its territory to the Franks and the Lombards", "had no organized church or clergy of its own"],
        "The west broke into local lordships; Byzantium kept Roman institutions."],
      ["The arrangement described suggests that in Byzantium", ["religious and political authority were joined under the emperor", "the church was completely independent of the emperor's power", "Islam had become the official religion of the empire", "the pope in Rome chose and crowned each new emperor"],
        "The emperor led both state and church, unlike the west."]
    ]);
    set("16", "Idleness is the enemy of the soul. Therefore the brothers should be occupied at fixed times in manual labor, and at other fixed hours in holy reading.",
      "Adapted from the Rule of St. Benedict, 500s", [
      ["Monasteries following rules like this most contributed to European society by", ["preserving learning and clearing and farming land", "leading raids against Viking settlements in the north", "collecting taxes on behalf of kings and lords", "replacing bishops as the leaders of the Church"],
        "Monks copied books, cleared land, and served as missionaries during a disordered era."],
      ["The rule's fixed hours for work, reading, and prayer suggest that monasteries valued", ["discipline and order in daily life", "wealth, comfort, and luxury in daily life", "military training for knights and lords", "long-distance trade and merchant profit"],
        "A strict schedule kept monks focused on work and worship."],
      ["Monasteries following rules like this helped spread Christianity mainly by", ["sending missionaries and serving as rural centers of learning", "conquering pagan lands with armies of armed monks", "running the government of the Byzantine empire", "translating the Bible into English and German for peasants"],
        "Monks carried the faith to new peoples and kept literacy alive."]
    ]);
    set("16", "After 1000, heavier plows, horse collars, and three-field crop rotation increased harvests. Population grew, towns revived, and merchants and craftsmen organized guilds and trading leagues such as the Hanseatic League.",
      BG, [
      ["Which best explains the revival of European towns after 1000?", ["Better farming created food surpluses and population growth", "Viking raids pushed peasants into walled towns for protection", "The Black Death killed so many peasants that farms emptied", "The pope banned trade outside towns to control merchants"],
        "More food meant more people and more workers free for crafts and trade. The plague came much later."],
      ["The growth of merchants and guilds challenged the idea of the three estates because", ["wealthy townspeople didn't fit into clergy, nobles, or peasants", "merchants were required to join the clergy to do business", "nobles banned guilds and forced craftsmen back to farms", "peasants stopped farming and moved to towns all at once"],
        "Those who pray, fight, and work left no clear place for a rising urban middle class."],
      ["Which development most likely followed from the changes described?", ["The rise of universities and wider trade networks", "A collapse of Europe's population and the decline of cities", "The end of the Church's influence over European society", "A new wave of Viking raids on the growing towns"],
        "Growing towns and wealth supported schools, universities, and long-distance trade."]
    ]);
    Q("16", "Thomas Aquinas's effort to show that faith and reason do not conflict was made possible partly by", ["translations of Aristotle that came through Muslim scholars", "the invention of the printing press, which spread his books", "the Protestant Reformation's call to read scripture closely", "Byzantine scholars fleeing the iconoclast emperors"],
      "Works preserved and commented on by Muslim thinkers like Ibn Rushd entered Europe through Spain and Sicily.");
    Q("16", "The crusades and the Reconquista both show", ["religion being used to justify military expansion", "close cooperation between Christian and Muslim rulers", "the decline of the pope's influence over European knights", "the end of private warfare among European lords"],
      "Church leaders blessed both campaigns as holy wars.");

    /* ===== Ch 17 ===== */
    set("17", "The road from Tana to Cathay is perfectly safe, by day and by night, according to what the merchants say who have used it.",
      "Adapted from Francesco Pegolotti, a Florentine merchant's handbook, c. 1340", [
      ["Pegolotti's observation is best explained by", ["Mongol control of Eurasia making travel safer", "Ming China opening its borders to foreign merchants", "Ottoman armies protecting caravans on the Silk Roads", "the end of nomadic raiding after Tamerlane's death"],
        "Unified Mongol rule (the Pax Mongolica) protected merchants across the steppe."],
      ["Which unintended result came from the conditions described?", ["The rapid spread of plague along trade routes", "The collapse of trade across the Indian Ocean", "The conversion of most of Europe to Islam", "The immediate fall of the Byzantine empire"],
        "The same routes that carried merchants carried the Black Death in the 1340s."],
      ["Pegolotti's handbook was most likely written for", ["Italian merchants planning trade journeys to Asia", "Mongol tax collectors traveling to the Italian ports", "Chinese officials planning trips to Europe", "crusading knights marching to the Holy Land"],
        "Sourcing: a merchant's handbook gives practical advice to other merchants."]
    ]);
    set("17", "In Karakorum there are mosques, a Christian church, and Buddhist temples. The khan held a debate among Christians, Muslims, and Buddhists, and told me that just as God gave the hand several fingers, he has given people several ways.",
      "Adapted from William of Rubruck, a European friar visiting Möngke Khan, 1254", [
      ["The account best shows that Mongol rulers", ["tolerated many religions to help rule diverse peoples", "forced their subjects to convert to Buddhism", "refused to use any advisors from conquered lands", "tried to ban Christianity throughout their empire"],
        "Religious tolerance reduced resistance and let the Mongols use talented people of every faith."],
      ["Mongol rulers often relied on Uighurs, Persians, and Chinese as officials mainly because", ["they needed skilled people to govern settled societies", "they had no army of their own and hired local soldiers", "the pope required them to employ Christian advisors", "they wanted to return their people to nomadic life"],
        "Conquering is different from governing; the Mongols borrowed expertise from those they ruled."],
      ["William of Rubruck, a Christian friar, most likely traveled to the Mongol court to", ["seek converts and gather information for Europe", "sell spices and silk to merchants in Karakorum", "serve as an advisor and general in the Mongol army", "escape punishment for opposing the crusades"],
        "European rulers sent friars hoping for converts and alliances."]
    ]);
    set("17", "For several years I avoided mentioning this event because of its horror. It is a disaster the like of which the world has never seen. They spared no one, killing women, men, and children.",
      "Adapted from Ibn al-Athir, an Arab historian, writing about the Mongol invasions, c. 1220s", [
      ["Ibn al-Athir's perspective was most likely shaped by", ["his life in a Muslim society attacked by the Mongols", "his many years of service as an official for the Mongols", "his travels through western Europe and Byzantium", "his admiration for Chinggis Khan's military genius"],
        "Sourcing: he wrote as a member of the communities being destroyed."],
      ["The Ilkhanate's later conversion to Islam best illustrates", ["conquerors adopting the culture of the people they ruled", "Islam spreading east from Persia into Mongol China", "Mongols forcing Persians to give up farming for herding", "the complete disappearance of Persian language and culture"],
        "Within two generations, Mongol rulers in Persia became Muslim and governed through Persian traditions."],
      ["Which evidence would most complicate Ibn al-Athir's view of the Mongols?", ["Mongol protection of trade and tolerance of religions", "The Mongol sack of Baghdad and the killing of the caliph in 1258", "Mongol massacres of the people of cities that resisted them", "Chinggis Khan's campaigns against the Khwarazm shah"],
        "His account shows the destruction; later Mongol rule also encouraged exchange."]
    ]);
    set("17", "Saljuq Turks entered the Abbasid realm as soldiers and converted to Islam. By the 1050s they held real power in Baghdad, keeping the caliph as a religious figurehead. In 1071 they defeated the Byzantines, opening Anatolia to Turkish settlement.",
      BG, [
      ["The Saljuqs' relationship with the Abbasid caliph is an example of", ["outsiders taking real power while keeping a figurehead ruler", "a peaceful merger of two equal states that agreed to share power", "the Byzantine empire taking control of the Muslim world", "a return to rule by the Umayyad family from Damascus"],
        "Compare Japan, where shoguns ruled while emperors remained symbols."],
      ["Turkish settlement of Anatolia after 1071 most directly set the stage for", ["the rise of the Ottoman empire", "the Mongol conquest of Song China", "the founding of the Mughal empire in India", "the Christian reconquest of Spain"],
        "Osman's state began in Anatolia around 1300."],
      ["Converting to Islam before taking power most likely helped the Saljuqs", ["gain acceptance as rulers in the Abbasid realm", "defeat the Mongol armies that invaded Persia", "win support from the Byzantine emperor", "spread Buddhism among the Turkish peoples of Anatolia"],
        "Sharing the faith of their subjects made Turkish rule acceptable."]
    ]);
    Q("17", "By letting Russian princes rule as long as they collected tribute, the Golden Horde most directly", ["helped Moscow grow into a powerful center", "turned Russia into a homeland for Mongol herders", "converted the Russian people to Buddhism", "ended trade between Russia and western Europe"],
      "Moscow's princes grew rich and strong as tribute collectors, then later threw off Mongol rule.");
    Q("17", "Unlike the Mongol empire under Chinggis Khan's successors, Tamerlane's empire", ["fell apart soon after his death", "lasted for centuries under his descendants", "was ruled from Beijing as a Chinese dynasty", "depended on a powerful navy to control trade"],
      "Tamerlane conquered brilliantly but built little administration to hold his lands together.");

    /* ===== Ch 18 ===== */
    set("18", "The city of Ghana consists of two towns. One is inhabited by Muslims and has twelve mosques; the king's town is six miles away. The king's interpreters, treasurer, and most of his ministers are Muslims. All gold nuggets found in the mines belong to the king; only gold dust is left to the people.",
      "Adapted from al-Bakri, a Muslim geographer in Spain, 1068", [
      ["Ghana's king most likely employed Muslim officials because", ["literate Muslims helped manage trade with north African merchants", "he had already converted all of his subjects and nobles to Islam", "Islamic law required non-Muslim kings to hire Muslims", "Portuguese traders insisted on dealing with Muslims"],
        "The king kept his own religion but used Muslims' literacy and trade connections."],
      ["The king's control of gold nuggets most directly helped him", ["keep gold scarce and valuable while funding his power", "spread Christianity among the miners of the south", "end the trans-Saharan trade so that outsiders stayed away", "pay tribute to the Abbasid caliphs in Baghdad"],
        "Controlling supply kept prices high and filled the royal treasury."],
      ["Separate Muslim and royal towns in Ghana suggest that", ["the king let Muslim merchants worship while keeping his own faith", "Ghana was governed directly by the caliphs in faraway Baghdad", "Muslims had been banned from living anywhere near the king", "the king had become a Christian and rejected Islam"],
        "Trade brought Muslims in, but the king kept his own religion."]
    ]);
    set("18", "The people of Mali have a great hatred of injustice. There is complete security in their country; neither traveler nor resident fears robbers. They carefully observe the prayers. But their women go about uncovered, which I disapproved of.",
      "Adapted from Ibn Battuta's account of Mali, 1352", [
      ["Ibn Battuta's account suggests that in Mali", ["Islam was practiced alongside local customs", "Islam had completely replaced all local traditions", "most people rejected Islam and its teachings", "Christian kings governed and limited Muslim worship"],
        "Mali was devoutly Muslim in some ways but kept its own social customs."],
      ["Ibn Battuta's criticism of Malian women was most likely shaped by", ["his training as a Moroccan legal scholar", "his job as an official in the government of Mali", "his Christian upbringing in Portugal", "his strong opposition to Islam and its laws"],
        "Sourcing: he judged Mali by the standards of the Islamic world he came from."],
      ["Ibn Battuta's praise of Mali's security most likely reflects", ["a strong state that protected trade routes", "Mali's lack of trade, which left few goods to steal", "Mongol armies patrolling the roads of west Africa", "Portuguese soldiers guarding Mali's trade routes"],
        "Safe roads were good for merchants, and Mali's rulers enforced them."]
    ]);
    set("18", "When Mansa Musa passed through Cairo on pilgrimage, he gave away so much gold that its value fell in Egypt, and it had not recovered twelve years later.",
      "Adapted from al-Umari, an Egyptian official, c. 1340", [
      ["Mansa Musa's pilgrimage most directly demonstrated", ["the wealth west Africa gained from trans-Saharan trade", "Mali's dependence on Egyptian armies to protect it", "the spread of Christianity among the rulers of west Africa", "a decline in the gold trade across the Sahara"],
        "Mali's gold made it famous across the Muslim world and even in Europe."],
      ["A long-term result of pilgrimages and trade like Mansa Musa's was that", ["Timbuktu became a major center of Islamic learning", "Mali conquered Egypt and took over the Red Sea trade", "Europeans began colonizing west Africa in the 1300s", "trade across the Sahara came to a sudden end"],
        "Musa brought back scholars and architects, and Timbuktu's mosques and schools flourished."],
      ["Al-Umari, an Egyptian official, was especially interested in Musa's visit most likely because", ["it affected Cairo's economy and showed Mali's importance", "Mali had recently conquered Cairo and taxed its markets", "Musa was a Christian king seeking an alliance with Egypt", "Egypt relied on Mali's army to defend it from the Mongols"],
        "The gold changed prices in Cairo, a big deal for an Egyptian official."]
    ]);
    set("18", "In coastal cities such as Kilwa, Mombasa, and Zanzibar, African merchants married into families of traders from Arabia and Persia. Ruling families became Muslim and built stone mosques, while the Swahili language combined a Bantu base with many Arabic words.",
      BG, [
      ["Swahili coastal culture is best described as", ["a blend of Bantu African and Arab–Islamic influences created by trade", "an Arab colony where African languages and customs disappeared", "a culture created by Portuguese traders in the 1400s", "a society cut off from trade across the Indian Ocean"],
        "The language itself shows the mix: Bantu grammar, Arabic vocabulary."],
      ["Great Zimbabwe's wealth was most closely connected to", ["supplying gold to coastal trading cities", "the trans-Saharan trade in salt and horses", "the Atlantic slave trade with Portugal", "trade with the Roman empire in ivory"],
        "Gold from the interior flowed to ports like Kilwa and into the Indian Ocean network."],
      ["Which would be the best evidence for the passage's claims about Swahili culture?", ["Coral-stone mosques and Arabic words in Swahili", "Hindu temples built along the east African coast", "Portuguese churches built along the coast in the 1300s", "Stone pyramids built in the style of the Maya"],
        "Both architecture and language show the blending described."]
    ]);
    pic("18", "Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg",
      "On a map of north and west Africa, a crowned African king sits on a throne holding a golden scepter and a large gold nugget. A rider on a camel approaches him.",
      "Detail from the Catalan Atlas, a world map made in Majorca (Spain), 1375. The king shown is Mansa Musa of Mali.", [
      ["The mapmaker's choice to show Mansa Musa holding gold most likely reflects", ["European awareness of Mali's gold wealth", "European rule over the gold mines of west Africa", "Mali's conversion to Christianity in the 1300s", "Mali's direct trade with Yuan dynasty China"],
        "Europeans knew Mali as a source of gold that reached the Mediterranean through north African traders."],
      ["Which development most directly spread news of Mali's wealth to the Mediterranean world?", ["Mansa Musa's pilgrimage through Cairo in 1324", "Portuguese voyages along the west African coast", "The Mongol conquest of Egypt and north Africa", "Zheng He's voyages to the coast of east Africa"],
        "Portugal's African voyages began after 1415, decades after this map was made."],
      ["The camel rider approaching the king best represents", ["trans-Saharan trade with north Africa", "the Atlantic slave trade to the Americas", "Indian Ocean trade with Ming China", "Mongol armies invading north Africa"],
        "Camel caravans carried gold north across the Sahara and brought salt and goods south."]
    ]);
    Q("18", "Many sub-Saharan societies were organized by kinship rather than by formal states. This shows that", ["complex societies could function without formal states", "Africa had no political organization before Islam arrived", "kings and bureaucracies ruled every African village", "Islamic law required rule by kinship groups"],
      "Kin groups settled disputes and organized work; states formed mostly where trade and conflict required them.");

    /* ===== Ch 20 ===== */
    set("20", "When we saw so many cities and villages built in the water, and that straight causeway leading to Mexico, we were amazed. It was like the enchantments in the old romances, with great towers and temples rising from the water. Some of our soldiers asked whether it was all a dream.",
      "Adapted from Bernal Díaz del Castillo, a Spanish soldier, describing Tenochtitlan in 1519", [
      ["Díaz's reaction is best explained by", ["Tenochtitlan's size and engineering rivaling or exceeding European cities", "the Spanish never having seen large stone buildings in Europe", "the city having been built by earlier European visitors", "the Aztecs using iron tools, wheels, and draft animals to build it"],
        "Tenochtitlan was among the largest cities in the world, larger than any in Spain."],
      ["Which feature most directly allowed Tenochtitlan to feed its huge population?", ["Chinampas, farmland built up in the lake", "Wheat and barley brought over from Europe", "Food imported through trade with the Inca", "Large herds of cattle and sheep"],
        "These \"floating gardens\" were extremely productive. Cattle and wheat arrived only with the Spanish."],
      ["Díaz wrote his account decades after the conquest. This means that", ["his memory and later views may have shaped it", "he never actually saw Tenochtitlan himself", "it was secretly written by an Aztec noble", "it has no value at all as historical evidence"],
        "Sourcing: time and hindsight can change how events are remembered."]
    ]);
    set("20", "Mexica rulers left conquered peoples' local leaders in place but demanded heavy tribute: food, cloth, feathers, gold, and captives for sacrifice. Many subject peoples deeply resented these demands.",
      BG, [
      ["This method of rule most directly contributed to", ["Aztec weakness once the Spanish found native allies", "a peaceful union between the Aztecs and the Inca", "the end of human sacrifice well before 1519", "a centralized bureaucracy much like that of Ming China"],
        "Tens of thousands of resentful subjects later fought alongside Cortés."],
      ["Compared to the Aztecs, the Inca governed more directly by", ["using roads, resettlement, and labor service to unite the empire", "letting conquered peoples govern themselves with no outside officials", "relying on detailed written law codes posted in every town", "using horses and iron weapons to patrol their mountain roads"],
        "The Inca integrated their realm; the Aztecs mostly collected tribute."],
      ["Which evidence would best support the passage?", ["Tribute lists of goods sent by conquered towns", "Inca quipu records kept by royal officials in Cuzco", "Spanish encomienda grants issued after 1521", "Maori oral traditions recorded in New Zealand"],
        "Records of tribute payments directly show the system described."]
    ]);
    Q("20", "Without a writing system, Inca officials kept census and tribute records on quipu (knotted cords). This shows that the Inca", ["developed effective record-keeping to run a large state", "borrowed a writing system from European traders", "had little need for organized administration", "traded regularly with Ming China across the Pacific"],
      "Running roads, storehouses, and labor service required careful records.");
    Q("20", "Which comparison between the Inca and Afro-Eurasian empires is most valid?", ["Both used roads and records to control large territories", "Both relied on horses and iron weapons in battle", "Both were connected to each other by Silk Road trade", "Both were ruled by monarchs who had become Christian"],
      "Like Rome or Persia, the Inca built roads and kept records to hold an empire together.");
    Q("20", "Iroquois women could choose and remove clan leaders. This best shows that", ["some societies gave women real political influence", "Iroquois women ruled their nations as queens", "the Iroquois had copied customs from European settlers", "women had no role in Iroquois farming or households"],
      "Women controlled farming and households, and that gave them political power.");

    /* ===== Ch 21 ===== */
    set("21", "So great was the terror that brother abandoned brother, and wives their husbands. Even fathers and mothers avoided visiting or tending their own children. Many died in the streets, and the dead were piled in trenches.",
      "Adapted from Giovanni Boccaccio, The Decameron, Florence, c. 1350", [
      ["The passage best illustrates that the Black Death", ["broke down social bonds and traditional institutions", "affected only the poor and left the wealthy untouched", "was quickly cured once doctors understood its cause", "strengthened the nobles' control over the peasants"],
        "Fear of contagion destroyed normal family and community life."],
      ["A long-term economic result of the plague in western Europe was", ["labor shortages that raised wages and weakened serfdom", "a population boom as survivors had large families", "a shift to enslaved labor on most European farms", "the end of all trade between Europe and Asia"],
        "With so many dead, surviving workers could demand more and move more freely."],
      ["Boccaccio's description suggests that people in Florence", ["did not understand how the disease spread", "had found a reliable cure but refused to share it", "were mostly unaffected because the city was walled", "blamed the Mongols directly and attacked their envoys"],
        "Abandoning family members shows panic about an unknown contagion."]
    ]);
    set("21", "We have traveled more than 100,000 li across immense waters. The countries beyond the horizon, to the ends of the earth, have all become subjects and come bringing tribute.",
      "Adapted from an inscription by Zheng He and his officers, 1431", [
      ["The inscription suggests the main purpose of Zheng He's voyages was to", ["display Ming power and expand the tributary system", "conquer overseas colonies and settle Chinese farmers there", "find a sea route to Europe to trade directly with Venice", "convert the peoples of east Africa to Confucianism"],
        "Tribute and prestige, not conquest or settlement, were the goals."],
      ["Which best explains why the Ming ended these voyages after 1433?", ["Their cost and the need to defend the north against nomads", "Zheng He's fleet was destroyed in a battle with the Portuguese", "The voyages found no other societies worth contacting", "Japan invaded and conquered the Ming dynasty"],
        "The court shifted resources to rebuilding defenses in the north."],
      ["The inscription's main purpose was most likely to", ["honor the voyages and display their success", "criticize the emperor for wasting money on ships", "record the profits merchants made from the voyages", "announce plans for an invasion of Japan"],
        "Sourcing: Zheng He's own officers wrote it to celebrate the expeditions."]
    ]);
    set("21", "You, constrained by no limits, may by your own free will shape yourself into whatever form you prefer.",
      "Adapted from Pico della Mirandola, Oration on the Dignity of Man, 1486", [
      ["Pico's statement best reflects which Renaissance idea?", ["Humanism's confidence in human potential", "Scholasticism's reliance on the authority of the Church", "Protestant belief in predestination and God's will", "Neo-Confucian emphasis on fixed social roles"],
        "Humanists celebrated human ability and achievement, while still writing as Christians."],
      ["The Renaissance began in Italy partly because", ["rich trading cities could afford to support art and learning", "Italy had escaped the worst effects of the Black Death", "the Ottomans encouraged Italian artists and scholars", "Italy was united under a single powerful king"],
        "Merchant wealth in cities like Florence and Venice paid for artists and scholars."],
      ["Pico's view most directly contrasts with the medieval idea that", ["people's places in life were fixed by birth", "trade was important to the growth of medieval cities", "Aristotle's logic was a useful tool for theology", "towns should grow and attract new merchants"],
        "Humanists stressed individual potential; medieval thinkers stressed fixed social order."]
    ]);
    Q("21", "Compared to Zheng He's voyages, Portuguese voyages in the 1400s were driven more by", ["the search for trade profits and new routes to Asia", "the desire to collect tribute and gifts from foreign rulers", "larger and more powerful fleets than China's", "Confucian ideals of order and harmony abroad"],
      "Portugal wanted gold and spices without Muslim and Venetian middlemen.");
    Q("21", "Which factor best explains why European states kept exploring after the Ming stopped?", ["Competition among many rival European states", "Europe had a much larger population than Ming China", "European ships were larger than Zheng He's treasure ships", "The pope required every Christian king to explore"],
      "If one kingdom stopped, a rival might profit. China, as one large empire, had no such pressure.");
    Q("21", "Which combination of factors most weakened Afro-Eurasian societies in the 1300s?", ["The Little Ice Age, famine, and the Black Death", "The Columbian Exchange and the spread of smallpox", "Viking raids and the collapse of the theme system", "The Reformation and the Thirty Years' War"],
      "Cooler weather and famine left populations weak just before the plague struck.");
    Q("21", "The journeys of Marco Polo and Ibn Battuta were made easier by", ["large networks that connected distant regions, like the Mongol empire", "European colonial empires that linked Africa, Asia, and the Americas", "steamships and railroads that made long journeys faster and safer", "the Columbian Exchange, which tied the eastern and western hemispheres"],
      "Shared rule (Mongols) or shared faith and law (Islam) let travelers move and find work far from home.");

    /* ================= Skill builders: sourcing, causation, comparison, context, evidence ================= */
    /* ===== Ch 13 ===== */
    set("13", "The sultan of Delhi made me a judge (qadi) because I knew Islamic law, and paid me well. Years later, in the Maldive Islands, the ruler also made me qadi, even though I was a stranger there and did not speak the local language.",
      "Adapted from Ibn Battuta, a Moroccan scholar, describing his travels, c. 1355", [
      ["Ibn Battuta's experience best illustrates that in the 1300s", ["a shared legal tradition let educated Muslims find work across the dar al-Islam", "the Abbasid caliph still appointed every judge from Delhi to the Maldives", "Muslim rulers preferred foreign judges because locals could not read Arabic", "Islamic law had replaced local customs completely in every Muslim land"],
        "Sharia scholarship was portable: a trained qadi was valued from India to the Maldives. (The Abbasid caliphate had fallen in 1258, so the second choice is wrong.)"],
      ["Which development most directly made a career like Ibn Battuta's possible?", ["The spread of Islam along trade routes from Africa to Southeast Asia", "The Abbasid conquest of India and East Africa during the 700s", "European navies keeping Indian Ocean shipping lanes safe for pilgrims", "The Mongol conversion to Islam, which united all Muslim lands"],
        "Islam spread mostly through merchants and missionaries, creating Muslim communities that needed judges and scholars."],
      ["A historian would most likely question how typical Ibn Battuta's experience was because", ["as a learned scholar he received honors ordinary travelers did not", "he wrote centuries after the events, using only other people's stories", "his account was written down by Portuguese officials in Lisbon", "he traveled only within North Africa and copied other travelers"],
        "Sourcing: his elite status shaped his experience. Most merchants or pilgrims were not offered judgeships."]
    ]);
    set("13", "The caliph al-Ma'mun wrote to the Byzantine emperor asking for permission to send scholars to collect old Greek books on philosophy, medicine, and mathematics. When they were brought to Baghdad, he paid translators to put them into Arabic.",
      "Adapted from Ibn al-Nadim, The Fihrist, a Baghdad book catalog, 987", [
      ["The caliph's actions best illustrate", ["Abbasid patronage that preserved and built on Greek learning", "a Byzantine attempt to convert the Abbasid caliphs to Christianity", "Muslim rejection of knowledge from outside Arabia", "the Umayyad policy of separating Arabs from converts"],
        "The House of Wisdom translated Greek, Persian, and Indian works, and Muslim scholars then added their own advances."],
      ["Over the following centuries, works translated in Baghdad most directly", ["reached western Europe through Muslim Spain and helped revive learning", "led Abbasid rulers to replace Islamic law with Greek law", "caused the Byzantines to adopt Arabic as their official language", "ended the use of Persian at the Abbasid court"],
        "Translations from Arabic into Latin in places like Toledo fed European scholasticism and, later, the Renaissance."],
      ["Which condition most helped Baghdad become a center of learning?", ["Its wealth and location on trade routes linking many cultures", "Its isolation, which protected scholars from outside ideas", "Its role as a former capital of the Byzantine Empire", "A ban on paper that made scholars memorize every text"],
        "Trade brought wealth, scholars, and even papermaking (learned from Chinese prisoners after 751), which made books cheaper."]
    ]);
    set("13", "Dynasties have natural life spans, like people. The first generation keeps the toughness and group loyalty of desert life. By the third or fourth generation, rulers have forgotten that toughness; luxury weakens them, and a tougher group replaces them.",
      "Adapted from Ibn Khaldun, the Muqaddimah, 1377", [
      ["Ibn Khaldun's argument is best described as", ["a cyclical theory of how dynasties rise and fall", "a religious prophecy about the coming end of the world", "a defense of permanent rule by one family", "an argument that trade is the main cause of war"],
        "He saw history in cycles driven by group solidarity (asabiyya) and its loss."],
      ["Which example would best support Ibn Khaldun's argument?", ["Abbasid caliphs losing real power to Turkish soldiers within two centuries", "Islam spreading into Southeast Asia through merchants and Sufi teachers", "The Byzantine Empire surviving for about a thousand years after Rome", "Mecca growing as a trading city on caravan routes before Islam began"],
        "Supports the cycle: a once-strong dynasty weakened and tougher outsiders (Turks, later Seljuks) took control. The Byzantine example would challenge it."],
      ["Ibn Khaldun's theory is most similar to which idea from another region?", ["The Chinese dynastic cycle and the Mandate of Heaven", "The Confucian focus on filial piety", "The Christian belief in salvation through faith", "The Hindu idea of dharma tied to caste"],
        "Both explain why dynasties grow corrupt and are replaced."]
    ]);
    Q("13", "Which comparison between the spread of Islam and the spread of Buddhism is most accurate?", ["Both spread largely along trade routes through merchants and missionaries", "Both spread mainly by forcing conquered peoples to convert to the faith", "Both began in the Arabian Peninsula and moved east along the Silk Roads", "Both rejected written scriptures and relied only on teachers' memories"],
      "Silk Roads and sea lanes carried both faiths. Conquest played a role for Islam early on, but most conversion was gradual.");
    Q("13", "Which piece of evidence would most weaken the claim that Islam spread mainly by the sword?", ["Large Muslim populations grew in Indonesia, where no Muslim army conquered", "Arab armies quickly defeated the Sasanian Persian Empire in the 600s", "The Umayyads ruled their empire from Damascus with mostly Arab officials", "The Abbasids defeated a Tang army at the Talas River in Central Asia"],
      "Indonesia became mostly Muslim through trade and Sufi teaching, not conquest. The other choices are about military events.");

    /* ===== Ch 14 ===== */
    set("14", "Harmony is to be valued. When you receive the emperor's commands, obey them carefully. Sincerely revere the three treasures: the Buddha, the law, and the monks. Officials should treat good manners as the basis of government.",
      "Adapted from Prince Shotoku's Seventeen Article Constitution, Japan, 604", [
      ["The document best shows Japan", ["borrowing Confucian and Buddhist ideas from China to build a stronger state", "rejecting Chinese influence and building government around Shinto alone", "copying the Mongol system of rule after the invasions of the 1200s", "following a samurai warrior code written for the Kamakura shogunate"],
        "Harmony, obedience to the ruler, and proper conduct are Confucian; the three treasures are Buddhist. Both came from China."],
      ["Japan's later history differed from China's in that", ["real power passed to military shoguns while emperors became figureheads", "Japan adopted China's civil service exams more fully than China itself", "Japan was conquered by the Tang and ruled as a province for centuries", "Japanese emperors ruled directly, without powerful noble families"],
        "Japan never fully adopted the exams; power went to aristocrats like the Fujiwara and then to shoguns from 1185."],
      ["A similar pattern of selective borrowing from China appeared in", ["Korea and Vietnam, which adopted Confucian ideas but kept their independence", "the Abbasid caliphate, which adopted Confucian ideas for its government", "Mali, which used Chinese characters to keep records of its gold trade", "the Byzantine Empire, which copied Tang law codes for its own courts"],
        "Korea and Vietnam both adopted Chinese writing, Confucian exams, and Buddhism while resisting Chinese rule."]
    ]);
    set("14", "Envoys from Silla, Japan, and other neighbors came to the Tang capital, presented gifts, and performed the kowtow before the emperor. In return the emperor gave them gifts that were often worth more than what they brought, along with permission to trade.",
      BG, [
      ["The tributary system is best described as", ["a way for China to show its status while allowing trade and diplomacy", "a heavy tax that drained neighboring states' wealth into China", "a military alliance of East Asian states against the Abbasids", "a form of direct Chinese rule over the governments of Korea and Japan"],
        "It was mostly symbolic: neighbors accepted China's superiority, and in return got trade and gifts."],
      ["Neighboring states most likely took part mainly because", ["it gave them access to Chinese goods, trade, and prestige", "Tang armies occupied their capitals and forced them to come", "they had adopted Confucianism as their official religion", "Chinese law required every Asian ruler to visit the capital"],
        "The return gifts and trading rights made it worth the bow."],
      ["Which later event is the clearest continuation of this system?", ["Zheng He's voyages collecting tribute for the early Ming", "Japan's Closed Country Edict limiting foreign contact", "The Mongol fleets sent to invade Japan in 1274 and again in 1281", "Britain's demand for open ports during the Opium War"],
        "Zheng He's fleets brought back envoys and tribute to show Ming prestige, the same logic as the Tang system."]
    ]);
    set("14", "Song China produced gunpowder weapons, the magnetic compass for sailing, movable type printing, and paper money. Over the next few centuries, versions of these appeared in Southwest Asia and Europe.",
      BG, [
      ["These technologies most likely reached Europe through", ["trade and warfare along routes linked by the Mongols and Indian Ocean ports", "Portuguese ships that sailed directly to Song China during the 1100s", "Chinese armies that conquered eastern Europe and settled along the Danube", "Byzantine missionaries who lived in Song cities and sent letters home"],
        "The Mongol era and Muslim merchants carried Chinese technology west. Europeans didn't sail to China until the 1500s."],
      ["In Europe, the magnetic compass most directly contributed to", ["longer ocean voyages in the 1400s", "the Crusades of the 1000s", "the end of the manorial system", "the invention of paper"],
        "Along with the astrolabe and better ships, the compass made Atlantic exploration possible."],
      ["The spread of gunpowder weapons later helped the rise of", ["the Ottoman, Safavid, and Mughal empires", "the Swahili city-states of East Africa", "the Maya city-states of southern Mexico and Central America", "the Viking kingdoms of Scandinavia"],
        "These land empires used cannons and muskets to conquer and hold territory after 1450."]
    ]);
    Q("14", "Foot binding among Song elites and the seclusion of elite women in Abbasid cities were similar in that both", ["marked high status while limiting women's public lives", "were required by law for women of every social class", "began as Buddhist practices and spread along with the monks", "were introduced to both regions by Mongol rulers"],
      "Both were mostly elite practices that showed a family could afford for women not to work outside the home.");
    Q("14", "The Grand Canal, completed under the Sui, most directly", ["linked the rice-growing south to the political north", "connected China to the Indian Ocean by an overland route", "kept nomadic armies from crossing into northern China", "carried silk west to the markets of the Abbasid caliphate"],
      "It moved grain and goods north, tying China's economy together under later dynasties too.");

    /* ===== Ch 15 ===== */
    set("15", "In the port of Calicut there were thirteen large Chinese ships in harbor when we arrived. Merchants come here from China, Java, Ceylon, the Maldives, Yemen, and Persia. The ruler is a Hindu, but Muslim merchants live here in great numbers and have their own judge.",
      "Adapted from Ibn Battuta, describing Calicut in southern India, c. 1342", [
      ["The passage best illustrates", ["the Indian Ocean as a network linking many regions through monsoon trade", "Chinese conquest and direct rule over the Malabar coast of southern India", "a single empire's monopoly on trade across the whole Indian Ocean", "a sharp decline in Indian trade caused by the spread of the Black Death"],
        "Merchants of many faiths and regions met in Calicut. Nobody controlled the whole ocean."],
      ["The detail about the Hindu ruler and the Muslim judge suggests that", ["port rulers allowed foreign merchant communities to govern their own affairs", "the Delhi Sultanate had recently conquered Calicut and installed judges", "Hindus and Muslims in Calicut were usually at war over control of the port", "the ruler had made Islamic law the law for every person living in Calicut"],
        "Rulers welcomed merchants because trade made them rich, so they let communities keep their own laws."],
      ["Compared to the Silk Roads, Indian Ocean trade in this era carried", ["larger amounts of bulk goods like grain, timber, and cotton", "only luxury goods because ships were too small", "fewer goods because the monsoons made sailing unpredictable", "mainly enslaved people rather than goods"],
        "Ships could carry far more than camels, so everyday goods moved by sea."]
    ]);
    set("15", "The city is so built that the pupil of the eye has never seen a place like it. It has seven walls, one inside another. The bazaars are wide and full of jewels, and the king's treasury holds pits filled with gold.",
      "Adapted from Abdur Razzaq, an envoy from the Timurid ruler of Persia, describing Vijayanagar in southern India, 1443", [
      ["The wealth described most likely came from", ["farming, temple economies, and trade through south Indian ports", "silver mines in the Americas, shipped across the Pacific to India", "tribute paid to Vijayanagar by the defeated Mughal emperors", "the Portuguese spice trade, which the city's kings controlled"],
        "This is 1443, before the Mughals (1526) and before the Portuguese arrived (1498)."],
      ["Vijayanagar's rise is best understood in the context of", ["Hindu kingdoms in the south resisting the Delhi Sultanate's expansion", "the Mongol conquest of southern India and the fall of its old kingdoms", "the collapse of the Gupta dynasty and the end of Buddhist rule in India", "British colonial rule pushing Hindu rulers into the far south"],
        "Vijayanagar was founded in 1336 as the Delhi Sultanate pushed south."],
      ["Because Abdur Razzaq was an envoy reporting to his ruler, his description was most likely meant to", ["show how powerful and rich this possible partner or rival was", "convince Persian readers to convert to the Hindu religion", "attract European merchants to trade directly with the city", "warn the people of India that a Mongol army was coming"],
        "Point of view and purpose: a diplomat sizes up a foreign court for his own king."]
    ]);
    set("15", "Hindus say Ram is the beloved, Muslims say Rahim. They fight and kill each other, but no one knows the truth. The same God lives in every heart; seek him there, not in temple or mosque.",
      "Adapted from the poems of Kabir, a north Indian poet, 1400s", [
      ["Kabir's message best reflects", ["devotional movements stressing a personal bond with God over ritual", "the official religion that the Delhi Sultanate required of its subjects", "the Buddhist teaching that there is no creator God in the universe", "brahmin insistence that people keep strict caste and temple rituals"],
        "Like bhakti and Sufism, Kabir valued inner devotion more than temples, mosques, or caste."],
      ["Ideas like Kabir's spread in north India mainly because", ["Hindus and Muslims lived side by side under the Delhi Sultanate", "the Mughals had banned Hinduism", "Christian missionaries carried them from village to village", "the caste system had already disappeared"],
        "Centuries of shared life produced blending, not just conflict."],
      ["Which later development is most closely connected to ideas like Kabir's?", ["The founding of Sikhism by Guru Nanak around 1500", "The Portuguese conquest of the port of Goa in 1510", "Aurangzeb's decision to bring back the jizya in 1679", "The spread of Buddhism to Tibet from northern India"],
        "Sikhism drew on both bhakti and Sufi ideas and rejected caste. Aurangzeb's policy was the opposite of this spirit."]
    ]);
    Q("15", "Islam spread into South Asia mainly through", ["Turkish conquests, coastal merchants, and Sufi teachers", "Arab armies that conquered all of India by 750", "Portuguese traders converting coastal rulers", "Mongol rulers who made Islam India's only religion"],
      "Merchants reached the coasts early, Turkish rulers set up the Delhi Sultanate (1206), and Sufis won converts.");
    Q("15", "Which claim about the Delhi Sultanate is best supported by the evidence?", ["Its Muslim rulers governed a mostly Hindu population", "It converted most of India's population to Islam", "It ruled all of southern India by 1300", "It was founded by Mughal emperors from Persia"],
      "Most Indians remained Hindu. The south stayed largely independent, and the Mughals came later (1526).");

    /* ===== Ch 16 & 19 ===== */
    set("16", "No free man shall be seized, imprisoned, or stripped of his rights or possessions except by the lawful judgment of his equals or by the law of the land. No special tax shall be imposed except by the common counsel of our kingdom.",
      "Adapted from the Magna Carta, England, 1215", [
      ["The document most directly limited", ["the power of the English king over his nobles", "the power of the pope over English bishops", "the rights of serfs to own land", "the ability of merchants to form guilds"],
        "Nobles forced King John to accept that he was bound by law and needed their consent for taxes."],
      ["The Magna Carta was produced in the context of", ["conflict between a king and powerful nobles in a feudal system", "a peasant revolt in England that followed the Black Death", "the Viking invasions and conquest of Anglo-Saxon England", "England's break with the Catholic Church under Henry VIII"],
        "Feudal nobles had their own armies and pushed back against royal taxes and abuses."],
      ["Historians see long-term significance in the document mainly because it", ["set a precedent that rulers are bound by law", "created a democracy where all men could vote", "ended feudalism in England immediately", "made England a Catholic theocracy"],
        "At first it protected nobles, but later generations used it to argue for limits on all rulers."]
    ]);
    set("16", "The Franks, a countless host, came toward Constantinople. The simpler among them truly wished to worship at the tomb of the Lord, but the more cunning ones, like Bohemond, secretly hoped to seize the capital itself.",
      "Adapted from Anna Komnene, a Byzantine princess, writing about the First Crusade, c. 1148", [
      ["Anna's account shows that Byzantines viewed the Crusaders with", ["suspicion that some wanted land and power more than Jerusalem", "complete trust, since they were fellow Christians coming to help", "fear that the western knights had secretly converted to Islam", "gratitude for saving Constantinople from the Mongol invasions"],
        "Her father Alexios had asked for help, but she worried the western knights had their own goals."],
      ["Anna's point of view was most shaped by", ["her position as daughter of the emperor who dealt with the Crusaders", "the years she spent living in France as the wife of a Crusader", "her own role as a commander leading Byzantine troops to Jerusalem", "her decision to convert from Orthodox to Latin Christianity"],
        "She wrote to defend her father's policies and Byzantine interests."],
      ["Her suspicion was later supported when", ["Crusaders sacked Constantinople in 1204", "the Ottomans took Constantinople in 1453", "the pope and patriarch split in 1054", "Saladin retook Jerusalem in 1187"],
        "The Fourth Crusade attacked the Byzantine capital itself, a blow it never fully recovered from."]
    ]);
    set("16", "Faith and reason cannot contradict each other, since both come from God. Using the methods of the Philosopher [Aristotle], we can show by reason that a first mover must exist, and this all people call God.",
      "Adapted from Thomas Aquinas, Summa Theologica, 1270s", [
      ["Aquinas's work is best described as", ["scholasticism, using Aristotle's logic to explain Christian faith", "a humanist work rejecting religion in favor of praising human achievement", "a call for a new crusade to take Jerusalem back from the Muslims", "a defense of the pope's power to choose and remove kings"],
        "Scholastics tried to fit Greek philosophy and Christian theology together."],
      ["Aquinas could draw on Aristotle largely because", ["Muslim scholars had preserved Greek works, later translated into Latin", "Byzantine emperors had sent all their Greek books to the pope in Rome", "Aristotle's works had been taught in every European school since Rome", "Mongol traders had carried Greek manuscripts to Europe from China"],
        "Many of Aristotle's works reached western Europe through Arabic translations in Spain."],
      ["Aquinas's goal was most similar to the work of", ["Ibn Rushd, who argued philosophy and Islamic law agree", "Martin Luther, who attacked the church's authority", "Ibn Battuta, who traveled across the Muslim world", "Zheng He, who sailed to East Africa"],
        "Both thinkers used reason (and Aristotle) to support their faith."]
    ]);
    Q("16", "Which development most weakened feudalism and serfdom in western Europe by the 1400s?", ["Labor shortages after the Black Death and the growth of towns and money", "The flood of American silver into Europe after the conquest of Mexico", "The Byzantine conquest of Italy and its free cities in the 1300s", "Mongol armies that conquered western Europe and freed the serfs"],
      "Fewer workers meant peasants could demand wages or leave. Towns offered other ways to make a living.");
    Q("16", "How did the role of the church differ between Byzantium and western Europe?", ["Byzantine emperors controlled the church; western popes often challenged kings", "Byzantium had no church leaders at all; the west had a pope and many bishops", "Western kings chose the pope, while Byzantine patriarchs chose the emperors", "Both regions had churches that were completely independent from their rulers"],
      "This is caesaropapism vs. the papacy's claims, as in the investiture controversy.");

    /* ===== Ch 17 ===== */
    set("17", "All his subjects accept the Great Khan's paper money without hesitation, because wherever they go they can use it to buy anything. Anyone who refuses it is put to death. In this way the Khan has more treasure than any lord in the world.",
      "Adapted from Marco Polo, The Travels, dictated c. 1298", [
      ["Polo's description shows that Yuan rulers", ["kept and expanded Chinese practices like paper money", "replaced Chinese paper money with Mongol silver coins", "banned trade with foreign merchants across their lands", "forced Chinese farmers to give up farming for herding"],
        "Paper money began under the Song. The Mongols kept useful Chinese systems."],
      ["Historians use Polo's account carefully mainly because", ["he dictated it years later in prison to a writer of romances", "he never traveled farther east than the borders of Persia", "it was written by Chinese officials who disliked Europeans", "it was banned in Europe, so only a few lines survive today"],
        "Sourcing: memory, a co-author who liked drama, and later copyists all affect accuracy."],
      ["Kublai Khan's use of foreigners like Polo as officials most directly reflects", ["Mongol distrust of Chinese scholar-officials", "a Confucian belief in hiring by merit through exams", "Christian influence at the Yuan court", "an alliance between the Yuan and Venice"],
        "The Yuan suspended the civil service exams for decades and favored Mongols, Central Asians, and other outsiders."]
    ]);
    set("17", "Mongol rule linked China, Central Asia, Persia, and Russia. Merchants, envoys, and armies moved along the Silk Roads faster than before. In the 1340s plague spread from Central Asia to the Black Sea ports, and from there by ship to Europe and North Africa.",
      BG, [
      ["The passage suggests the Black Death spread so quickly mainly because", ["Mongol-era trade and travel tightly connected distant regions", "Europeans brought the disease back from the Americas", "Mongols deliberately carried it to every city they ruled", "ships from West Africa brought it to China"],
        "The same roads that carried silk carried rats, fleas, and infected people."],
      ["In western Europe, one effect of the plague was", ["labor shortages that gave surviving peasants more bargaining power", "rapid population growth as families had more children after 1350", "a stronger manor system that tied even more peasants to the land", "the immediate collapse of the Catholic Church across all of Europe"],
        "With a third or more of people dead, workers could demand higher wages."],
      ["The same connections that spread plague also helped spread", ["technologies like gunpowder and the compass westward", "Christianity, which became China's main religion", "maize and potatoes from the Americas into Eurasia", "the European printing press eastward into Song China"],
        "Maize and potatoes came after 1492, and Europe's press came after China's printing, not before."]
    ]);
    set("17", "Ghazan, the Mongol ruler of Persia, converted to Islam in 1295. He lowered taxes on peasants, rebuilt irrigation, and employed Persian officials such as the scholar Rashid al-Din to run his government.",
      BG, [
      ["Ghazan's policies best illustrate", ["Mongol rulers adapting to the cultures of the lands they ruled", "Mongol rulers rejecting all local religions and customs", "the Persian conquest of the Mongol homeland in Central Asia", "the Mongol restoration of the Abbasid caliphate in Baghdad"],
        "Ruling settled people well meant using their religion, officials, and methods."],
      ["Which is most similar to Ghazan's approach?", ["Kublai Khan taking a Chinese dynasty name and capital", "Chinggis Khan refusing to rule settled peoples", "Timur destroying Delhi in 1398", "The Golden Horde forcing Russians to become nomads"],
        "Kublai founded the Yuan dynasty and ruled from Beijing, using Chinese ceremonies and many Chinese institutions."],
      ["Lowering taxes and rebuilding irrigation most likely aimed to", ["restore farming and tax revenue damaged by conquest", "punish Persian landowners for rebelling", "turn Persia's farmland into pasture for herds", "pay for an invasion of Europe"],
        "Early Mongol conquests wrecked irrigation; Ghazan tried to rebuild the economy that paid for his state."]
    ]);
    Q("17", "The Mongols' ability to conquer settled empires is best explained by", ["skilled cavalry, discipline, and siege methods learned from conquered peoples", "gunpowder weapons they invented themselves and kept secret from enemies", "a large navy that controlled the Indian Ocean and its port cities", "an alliance with the Abbasid caliph, who sent troops to help them"],
      "They borrowed Chinese and Persian engineers to take walled cities.");
    Q("17", "Which is the best evidence that Mongol rule was not only destructive?", ["Trade and travel across Eurasia grew safer and more frequent", "Baghdad was sacked and its libraries destroyed in 1258", "Large parts of Persia's irrigation systems were ruined", "Many cities that resisted were completely destroyed"],
      "The other choices show destruction. The Pax Mongolica shows a benefit.");

    /* ===== Ch 18 ===== */
    set("18", "In Timbuktu there are many judges, scholars, and priests, all well paid by the king. Many handwritten books are brought here from North Africa and sold for more money than any other merchandise.",
      "Adapted from Leo Africanus, a North African traveler, writing for European readers, 1526", [
      ["High prices for books best show", ["Timbuktu's role as a center of Islamic learning", "a shortage of paper in Europe", "that Timbuktu was ruled by Portugal", "that West Africans had no writing system of their own"],
        "Scholars and mosques made Timbuktu famous; books were prized."],
      ["Timbuktu's wealth came mostly from", ["trans-Saharan trade in gold, salt, and other goods", "Atlantic trade with Brazil and the Caribbean", "silver mines along the banks of the Niger River", "Indian Ocean trade through the port of Kilwa"],
        "Camel caravans linked West Africa to North Africa and the Mediterranean."],
      ["Because Leo Africanus wrote for European readers, his account most likely", ["introduced a rich African region that Europeans knew little about", "aimed to recruit European soldiers to fight in Songhai's army", "was meant to convert Timbuktu's scholars to Christianity", "was written to help Portuguese traders find captives to buy"],
        "Audience matters: he described Africa for Italian and European readers."]
    ]);
    set("18", "At Great Zimbabwe, builders fit huge stone walls together without mortar. Archaeologists found Chinese porcelain, Persian pottery, and glass beads there. The city's rulers controlled gold that was sent to Swahili ports on the coast.",
      BG, [
      ["The objects found at Great Zimbabwe best support the claim that", ["the city was tied to Indian Ocean trade through the coast", "Chinese merchants founded the city and ruled it for centuries", "the city traded mainly with western Europe by way of Portugal", "its people had no contact with anyone outside their region"],
        "Goods from China and Persia arrived through Swahili ports in exchange for gold."],
      ["Which evidence would best answer European colonial claims that outsiders built the city?", ["Archaeology linking the site to the ancestors of the local Shona people", "The Chinese porcelain found inside the walls of the Great Enclosure", "Swahili records listing the gold sent from the interior to the coast", "Portuguese maps of the East African coast drawn in the 1500s"],
        "Using evidence: excavations show local Africans built it. Foreign goods show trade, not foreign builders."],
      ["Great Zimbabwe's role in trade was most similar to that of", ["Ghana and Mali, which grew rich supplying gold to long-distance trade", "the Inca, who used mit'a labor to build roads across the Andes", "Venice, which built a navy to control trade in the Mediterranean", "the Mongols, who grew rich by taxing caravans on the Silk Roads"],
        "All three controlled gold sources and traded them to distant buyers."]
    ]);
    set("18", "King Lalibela had churches carved downward into solid rock, around 1200. They were meant to be a 'new Jerusalem' for Ethiopian Christians, whose kingdom had been Christian since the 300s.",
      BG, [
      ["The churches best show", ["a long-standing Christian kingdom in East Africa", "Portuguese missionaries building churches in Africa", "the spread of Islam into the Ethiopian highlands", "Byzantine rule over Ethiopia"],
        "Ethiopian Christianity went back to the kingdom of Axum and developed its own traditions."],
      ["Calling the churches a 'new Jerusalem' most likely reflects that", ["pilgrimage to Jerusalem had become hard after Muslim conquests", "Ethiopians believed the real Jerusalem had been destroyed", "the pope had ordered Ethiopian Christians to stay at home", "Ethiopia had recently conquered Jerusalem and its churches"],
        "Muslim states lay between Ethiopia and Jerusalem, so a holy site at home made sense."],
      ["Ethiopia's Christianity is most similar to Byzantine Christianity in that both", ["developed separately from the Roman Catholic Church", "accepted the pope in Rome as their highest leader", "began only after the Crusades had reached Jerusalem", "spread mainly through conquest by Mongol armies"],
        "Both were eastern churches outside the pope's authority."]
    ]);
    Q("18", "Which statement best compares Islam in Mali with Islam in the Swahili cities?", ["In both, rulers and merchants adopted Islam while many rural people kept older beliefs", "In both, Islam arrived with Arab armies that conquered the whole region by force", "Mali's rulers rejected Islam entirely, while the Swahili cities embraced it fully", "In both, Islam replaced all the local languages with Arabic within a century"],
      "Islam was strongest among elites and traders. Swahili stayed a Bantu language with Arabic words.");
    Q("18", "Bantu migrations most directly explain", ["why related languages and iron-working spread across central and southern Africa", "why Islam spread across West Africa with merchants crossing the Sahara desert", "why the kingdom of Axum in the Ethiopian highlands became Christian in the 300s", "why camels became the main way to carry gold and salt across the Sahara"],
      "Over centuries, Bantu speakers spread farming, iron tools, and their languages.");

    /* ===== Ch 20 ===== */
    set("20", "I believe that since the history of man there has been no account of such grandeur as this road. Every so many leagues there were storehouses with food, clothing, and weapons, so that armies passing through lacked nothing.",
      "Adapted from Pedro de Cieza de León, a Spanish soldier, Chronicle of Peru, 1553", [
      ["The roads and storehouses most directly helped the Inca", ["move armies and govern a long, mountainous empire", "carry trade goods north to the Aztec markets", "spread the worship of the sun to Spanish settlers", "store gold to pay the Spanish who invaded them"],
        "Runners, armies, and officials used the road network to hold the empire together."],
      ["The Inca built projects like these mainly with", ["mit'a labor that communities owed the state", "enslaved Africans brought from the coast", "paid workers using silver coins", "prisoners captured from the Aztecs"],
        "Each community sent workers for a set time. The Spanish later turned the mit'a into the mining mita."],
      ["Cieza de León's praise is especially useful to historians because", ["he was part of the conquest, so he had no reason to flatter the Inca", "he was an Inca noble writing proudly about his own people's empire", "he wrote before the Spanish ever arrived in the Andes of Peru", "he was a Chinese visitor comparing the Inca roads to China's"],
        "Sourcing: praise from an enemy carries extra weight."]
    ]);
    set("20", "The captive warriors were led up the temple steps and their hearts were offered to the sun, so that it would keep moving across the sky. The warrior who had taken the captive was honored and given fine cloaks.",
      "Adapted from the Florentine Codex, compiled by Spanish friar Bernardino de Sahagún from Nahua accounts, 1500s", [
      ["This passage helps explain why Mexica warfare aimed to", ["take captives rather than simply kill enemies", "conquer land for farming only", "spread Christianity to neighboring peoples", "capture silver mines"],
        "Captives were needed for sacrifice, and taking them brought warriors status."],
      ["Historians use this source carefully because", ["a Spanish friar compiled it from Nahua accounts after the conquest", "it was written by Cortés himself to justify his own actions", "the Nahua kept no records, so the friar invented most of it", "it actually describes the Inca of Peru rather than the Mexica"],
        "It preserves Nahua voices but was shaped by Spanish goals and post-conquest memory."],
      ["Mexica sacrifice and tribute demands most directly", ["led many subject peoples to ally with the Spanish", "made the Mexica the most popular rulers in Mesoamerica", "ended warfare in central Mexico", "caused the Inca to invade Mexico"],
        "Groups like the Tlaxcalans joined Cortés against their Mexica enemies."]
    ]);
    set("20", "Polynesian navigators sailed double-hulled canoes across thousands of miles of open ocean, reading the stars, ocean swells, and the flight of birds. By about 1200 they had settled Hawai'i and New Zealand, bringing taro, sweet potatoes, pigs, and chickens.",
      BG, [
      ["Polynesian expansion depended most on", ["skilled navigation without compasses or written charts", "routes and sailing methods learned from Arab traders", "large ships borrowed from Chinese treasure fleets", "maps of the Pacific made by European explorers"],
        "Knowledge passed down orally let them find tiny islands in a huge ocean."],
      ["Carrying crops and animals to new islands is most similar to", ["the Columbian Exchange, though on a smaller scale", "the Mongols taxing caravans on the Silk Roads", "the spread of the bubonic plague along trade routes", "the camel caravans carrying salt across the Sahara"],
        "Settlers moved plants and animals to transform new lands."],
      ["Sweet potatoes in Polynesia (a plant from South America) suggest that", ["Polynesians likely made contact with South America before Europeans", "Spanish sailors brought them to Hawai'i around the year 1200", "sweet potatoes first grew in Asia and spread east across the sea", "Polynesia was first settled by sailors coming from East Africa"],
        "Many scholars see this as evidence of Polynesian voyages reaching the Americas."]
    ]);
    set("20", "Cahokia, near present-day St. Louis, may have held 10,000 to 20,000 people around 1100. Its people built huge earthen mounds, farmed maize, and traded for copper from the Great Lakes and shells from the Gulf of Mexico. By 1350 the city had been abandoned.",
      BG, [
      ["Cahokia's large population was made possible mainly by", ["maize farming that produced a surplus", "silver mining for trade with Europe", "herding horses and cattle", "fishing in the Pacific"],
        "Surplus food supports cities, priests, and builders."],
      ["Copper and shells found at Cahokia best show", ["trade networks reaching across much of North America", "regular contact with Spanish traders in Florida", "that Cahokia had a navy on the Mississippi River", "that its people were nomads who moved every season"],
        "Goods came from hundreds of miles away."],
      ["Cahokia differs from Tenochtitlan in that Cahokia", ["was abandoned well before Europeans arrived", "was built on a lake", "collected tribute from a large empire", "was conquered by the Spanish"],
        "Tenochtitlan was thriving in 1519; Cahokia had declined by about 1350."]
    ]);
    Q("20", "The Aztec and Inca empires differed most in how they ruled conquered peoples: the Inca", ["governed directly through officials and roads; the Aztec let local rulers collect tribute", "let local rulers stay in charge; the Aztec sent their own officials to run every town", "used alphabetic writing and coins; the Aztec used neither writing nor any money", "ruled mainly by sea with a navy; the Aztec ruled their empire mainly over land"],
      "Inca rule was more centralized. Aztec rule was loose, which left many resentful subjects.");

    /* ===== Ch 21 ===== */
    set("21", "The prince's first reason was to know the land beyond the Canary Islands. The second was that if Christian people lived there, trade might be opened with them. The third was to learn the strength of the Moors. The fifth was his great desire to spread the faith of Christ.",
      "Adapted from Gomes Eanes de Zurara, Chronicle of the Discovery of Guinea, 1453", [
      ["The passage shows that Portuguese exploration was driven by", ["a mix of curiosity, trade, rivalry with Muslims, and religion", "the need to escape religious persecution back in Portugal", "orders from the Mongol khans to find a route to Europe", "a plan to settle Portuguese farmers on empty land in Asia"],
        "Gold, God, and glory: several motives worked together."],
      ["Zurara's chronicle was written for Prince Henry's family, so it most likely", ["presented Henry's motives in the most honorable light", "criticized Henry for wasting the kingdom's money", "was secretly written to be read by Muslim rulers", "focused mostly on the hardships of ordinary sailors"],
        "Sourcing: an official chronicle praises its patron and puts faith up front."],
      ["Learning 'the strength of the Moors' reflects which earlier development?", ["Centuries of Christian-Muslim conflict, including the Reconquista", "The Mongol conquest of Portugal and Spain during the 1200s", "Portugal's long alliance with the Ottoman Empire against Spain", "The Ming ban on sea voyages after Zheng He's last voyage"],
        "Iberian kingdoms had fought Muslim states for centuries and wanted allies behind them."]
    ]);
    Q("21", "Which is the best evidence that the Ming decision to stop Zheng He's voyages did not cut China off from world trade?", ["Chinese merchants kept trading in Southeast Asia, and silver later poured into China", "The Ming burned their ships and banned every kind of foreign contact forever", "Portugal seized control of all of China's major ports in the 1430s and 1440s", "China stopped making silk and porcelain because no one would buy them"],
      "Official voyages ended, but private and later global trade continued.");
    Q("21", "Which best explains why the Renaissance began in northern Italy rather than elsewhere?", ["Rich trading cities, Roman ruins nearby, and contact with Byzantine and Muslim scholars", "Italy was the only part of Europe with a working printing press by the year 1350", "Italy had escaped the Black Death entirely, so its cities stayed large and rich", "Italian kings ruled most of Europe and paid artists using the taxes they collected"],
      "Money from trade, classical remains, and scholars fleeing Byzantium all came together there.");
  },
});
})();
