/* AP World History · extra AP-style question sets (three questions per source).
   Primary sources are adapted (shortened and reworded) from the documents named in each citation.
   Sets marked "A historian's interpretation" are written for this site in the style of the AP exam's
   secondary-source stimuli; they are not quotations from a published historian. */
(() => {
const HIST = "A modern historian's interpretation, written in the style of AP exam secondary sources";
const mk = k => (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], "Ch " + sec, t, o, o[0], [w], {shuffle:true, stim, cite}));

Study.extendUnit("apwh", "u3", {problems(k){
  const set = mk(k);

  /* ===== Ch 13 ===== */
  set("13", "We shall not build new churches or monasteries in our cities, nor repair those that fall into ruin. We shall not hold public religious ceremonies or try to convert anyone. We shall show respect to Muslims and rise from our seats when they wish to sit. In return, we receive safe-conduct for ourselves, our families and our possessions.",
    "Adapted from the Pact of Umar, an agreement attributed to Christians in Syria under early Muslim rule, c. 600s–800s", [
    ["The agreement best illustrates which feature of early Islamic empires?", ["Non-Muslims were tolerated but held a lower legal status", "Non-Muslims were forced to convert or leave the empire", "Non-Muslims held most of the positions in government", "Non-Muslims were treated as full equals of Muslims"],
      "Dhimmi (\"protected people\") kept their religion and property in exchange for restrictions and the jizya tax."],
    ["Which practice was most closely linked to the status described in the passage?", ["Payment of the jizya, a tax on non-Muslims", "Service in the caliph's personal bodyguard", "Pilgrimage to Mecca at least once in a lifetime", "Study of the Quran in government madrasas"],
      "The jizya was the head tax that went along with protected status."],
    ["A historian would most likely use this document as evidence for", ["how Muslim rulers governed religiously diverse populations", "why the Sunni and Shia split after Muhammad's death", "how the Abbasids overthrew the Umayyad dynasty", "why trade declined in the dar al-Islam after 750"],
      "It sets the terms under which conquered Christian communities lived."]
  ]);
  set("13", "The Abbasid caliphs did not so much conquer a trading world as stitch one together. A single legal tradition, a common language of learning and reliable coinage let a merchant in Córdoba honor a letter of credit written in Baghdad. Crops moved as well as coins: sugarcane, cotton, citrus and rice spread westward from India, changing diets and farm calendars from Persia to Spain.",
    HIST, [
    ["Which development best supports the author's claim about a letter of credit?", ["The use of sakk, which let merchants draw funds in distant cities", "The spread of the Mongol postal system across Eurasia", "The founding of joint-stock trading companies in northern Europe", "The minting of paper currency by the Song dynasty"],
      "Sakk (the root of the word \"check\") were honored by bankers across the Islamic world."],
    ["The spread of crops described in the passage most directly led to", ["a longer growing season and a larger, more urban population", "the collapse of long-distance trade in luxury goods", "a decline in the use of irrigation across the Middle East", "the end of pastoral nomadism on the Arabian peninsula"],
      "New crops could be grown in summer, raising food supplies and supporting city growth."],
    ["The author's argument most clearly emphasizes which factor in creating a zone of exchange?", ["Shared institutions such as law, language and currency", "The military strength and discipline of the Abbasid armies", "The religious conversion of every merchant", "The geographic isolation of the Middle East"],
      "The passage credits common law, Arabic and coinage, not conquest."]
  ]);

  /* ===== Ch 14 ===== */
  set("14", "The Buddha was a barbarian. He did not speak the language of China and wore clothes of a different fashion. He understood neither the duties that bind ruler and subject nor the affections of father and son. How then can his decayed bone be admitted to the palace? I beg that it be handed to the officials to be thrown into fire and water, so that this evil is rooted out for all time.",
    "Adapted from Han Yu, a Confucian scholar-official, Memorial on the Bone of Buddha, 819", [
    ["Han Yu's objection to Buddhism rests mainly on the claim that it", ["is foreign and undermines Confucian family and political duties", "is too closely tied to the Tang imperial family", "demands heavy taxes from the peasants to support a large army", "encourages merchants to travel the Silk Roads"],
      "He calls the Buddha a barbarian who ignored the ruler-subject and father-son relationships."],
    ["Which later development is most consistent with the views in the passage?", ["Tang emperors closed monasteries and seized their lands in the 840s", "Tang emperors made Buddhism the only legal religion in China", "Song emperors ended the civil service examinations", "Song emperors invited Buddhist monks to run the bureaucracy"],
      "The persecution of the 840s destroyed thousands of monasteries and returned monks to lay life."],
    ["The eventual response of Confucian thinkers to Buddhism's appeal was best shown by", ["neo-Confucianism, which absorbed Buddhist ideas about the soul and nature", "Legalism, which called for harsh punishments and strict laws", "Daoism, which rejected both government service and formal scholarship", "Shinto, which honored the nature spirits of Japan"],
      "Thinkers like Zhu Xi kept Confucian values while taking on Buddhist-style questions."]
  ]);
  set("14", "Between 750 and 1100 China's population roughly doubled, and the balance of the country tilted south. Fast-ripening rice from Vietnam allowed two harvests a year; iron output rose many times over; and merchants who had once carried strings of copper coins began to settle accounts with printed notes. No other part of the world at the time combined so many people, so much production and so commercial an economy.",
    HIST, [
    ["The \"fast-ripening rice\" in the passage refers to", ["Champa rice from Vietnam", "Wheat from Central Asia", "Millet from the Yellow River", "Sorghum from East Africa"],
      "Champa rice from Vietnam ripened quickly and allowed two crops a year in the south."],
    ["The \"printed notes\" described in the passage developed mainly because", ["copper coins were too scarce and heavy for a growing volume of trade", "the Song government wanted to bring an end to private trade altogether", "foreign merchants refused to accept Chinese coins", "Buddhist monasteries had banned the use of metal money"],
      "Merchants first used letters of credit (\"flying cash\"), then paper money."],
    ["Which claim would best extend the author's argument about Song China's economy?", ["Chinese silk and porcelain were in demand across the Indian Ocean basin", "Chinese armies conquered most of Central Asia during the Song dynasty", "Chinese farmers abandoned rice in favor of pastoralism", "Chinese cities shrank as people moved back to the countryside"],
      "A market-oriented, productive economy fed long-distance trade in manufactured goods."]
  ]);

  /* ===== Ch 15 ===== */
  set("15", "In this country it is the women who take charge of trade. For this reason a Chinese man arriving here will, first of all, take a wife, so as to profit from her skill in business. Market is held every day from six in the morning until noon. There are no shops; the sellers spread a mat upon the ground, and each has her own place.",
    "Adapted from Zhou Daguan, a Chinese envoy, describing the Khmer capital of Angkor, 1296", [
    ["The passage is best used as evidence of", ["the role of women in the commercial life of Southeast Asia", "the spread of the caste system to Southeast Asia", "the dominance of Chinese law in the Khmer state", "the decline of trade between China and Southeast Asia"],
      "Zhou notes with surprise that women run the markets."],
    ["Zhou Daguan's point of view is most clearly shaped by his", ["background in a society where trade was mostly carried on by men", "desire to convert the Khmer people to Buddhism", "position as a merchant who was competing with Khmer traders", "hostility toward the Mongol rulers who had sent him"],
      "What stands out to him is what differs from China."],
    ["Angkor's temples, built first for Hindu gods and later used by Buddhists, best illustrate", ["the influence of Indian religions on Southeast Asian states", "the conquest of Southeast Asia by the Delhi sultanate", "the spread of Islam by Arab armies from the Middle East", "the isolation of Southeast Asia from Indian Ocean trade"],
      "Rulers in Funan, Srivijaya and Angkor adopted Indian religion and kingship without being conquered."]
  ]);
  set("15", "The monsoon set the calendar of the Indian Ocean. A captain who reached the Malabar coast with the summer winds had to wait months for them to reverse before sailing home. In those months merchants needed warehouses, lodging, credit and someone to trust. The result was a chain of port cities where settled communities of foreigners, each with its own place of worship, served as brokers between visiting traders and local rulers.",
    HIST, [
    ["The communities described in the passage are best known as", ["diasporic merchant communities", "tributary states of the Ming", "trading-post empires", "nomadic tribal confederations"],
      "Arab, Persian, Jewish, Indian and Chinese merchants settled in ports along the routes."],
    ["Which technology most directly made the trade described in the passage possible?", ["Dhows and junks able to carry bulk cargo on open water", "Stirrups that gave riders a steadier seat in the saddle", "Camel saddles suited to long desert crossings", "Horse collars that let animals pull heavier plows"],
      "Larger ships, along with the compass and astrolabe, carried heavy goods with the monsoons."],
    ["One effect of the pattern described in the passage was", ["the spread of Islam to coastal East Africa and Southeast Asia", "the political unification of the whole Indian Ocean basin", "the end of overland trade along the Silk Roads", "the decline of port cities such as Calicut and Melaka"],
      "Merchants carried their religion with them, and local rulers and traders often converted."]
  ]);

  /* ===== Ch 16 & 19 ===== */
  set("16", "A Frankish knight had an abscess on his leg. A Frankish physician asked him, \"Would you rather live with one leg or die with two?\" He sent for a strong man with a sharp axe, and the leg was cut off; the patient died on the spot. Yet I have also seen Franks who have lived long among us, and they are much better than those newly arrived from their own lands.",
    "Adapted from Usamah ibn Munqidh, a Syrian Muslim noble, in his memoirs, 1100s", [
    ["The author's attitude toward the crusaders is best described as", ["scornful of their learning, yet aware that contact was changing them", "admiring of their medical knowledge and careful scientific method", "fearful that they would convert the Muslims of Syria", "indifferent, because he had little contact with them"],
      "He mocks Frankish medicine but notes that long-settled Franks had adapted."],
    ["The passage best supports which claim about the crusades?", ["They brought western Europeans into closer contact with the Islamic world", "They ended with the permanent Christian conquest of the entire Holy Land", "They cut off all trade between Europe and the Middle East", "They were fought mainly between Byzantines and western Europeans"],
      "Crusader states put Europeans and Muslims side by side for two centuries."],
    ["A long-term result of the contact shown in the passage was that Europeans", ["gained Arabic learning and a taste for sugar, spices and silk", "adopted Islam as the main religion of southern France", "gave up long-distance trade in favor of local self-sufficiency", "lost the classical works of Aristotle for several centuries"],
      "Demand for eastern goods grew, and scholarship flowed in through Spain and Sicily."]
  ]);
  set("16", "After the year 1000 the European countryside filled up. Heavier plows turned the wet soils of the north, horses with padded collars pulled faster than oxen, and villages that left a third of their land fallow each year instead of half fed more people from the same fields. Surpluses went to market; markets became towns; and townspeople, bound by charter rather than by service to a lord, bargained for liberties no peasant could claim.",
    HIST, [
    ["The practice of leaving \"a third of their land fallow\" refers to", ["the three-field system", "the manorial court", "the putting-out system", "the enclosure movement"],
      "Rotating three fields kept more land in use each year than the older two-field system."],
    ["According to the passage, the growth of towns was most directly caused by", ["agricultural surpluses that supported trade and specialization", "royal decrees ordering peasants to move into the growing cities", "the arrival of refugees from the Byzantine Empire", "the collapse of the Catholic Church's authority"],
      "More food freed people to work in crafts and commerce."],
    ["The \"liberties\" won by townspeople most directly challenged", ["the feudal ties that bound people to the service of a lord", "the spiritual authority that popes claimed over kings", "the trade monopoly of the Hanseatic League in the north", "the use of Latin as the language of the universities"],
      "Chartered towns governed themselves and stood outside the lord-and-serf relationship."]
  ]);

  /* ===== Ch 17 ===== */
  set("17", "Chinggis Khan ordered the army arranged so that ten men have one captain, and ten such captains one commander of a hundred, and so on up to ten thousand. When they are in battle, if one or two of a group of ten flee, all ten are put to death; and if one is taken prisoner and his companions do not rescue him, they too are killed.",
    "Adapted from John of Plano Carpini, a Franciscan friar sent by the pope to the Mongols, History of the Mongols, 1240s", [
    ["The system described in the passage helped Chinggis Khan mainly by", ["replacing loyalty to tribes with loyalty to military units", "giving each tribe its own independent army and commander", "allowing soldiers to elect their commanders before battle", "limiting the Mongol army to a few thousand warriors"],
      "Mixing men from different tribes into decimal units broke up older rivalries."],
    ["The author's purpose in recording this information was most likely to", ["inform European leaders about a powerful potential enemy", "encourage Europeans to adopt the nomadic way of life", "persuade the Mongols to invade the Islamic world", "praise the Mongols for their tolerance of Christians"],
      "The pope sent him after the Mongol invasions of eastern Europe to learn what Europe faced."],
    ["Besides organization, Mongol military success depended most on", ["mounted archers able to travel quickly over great distances", "heavy infantry armed with steel swords and iron shields", "a large navy that controlled the Indian Ocean", "alliances with the Byzantine and Song emperors"],
      "Speed, horsemanship and the composite bow were their core strengths."]
  ]);
  set("17", "The conquests themselves were a catastrophe: cities burned, irrigation works ruined, populations scattered. Yet the generation that followed lived in a continent more connected than ever before. A merchant, a missionary or an envoy could ride from the Black Sea to China under the protection of a single family of rulers. So could the fleas. The same roads that carried silk and gunpowder westward carried plague.",
    HIST, [
    ["The period of connection described in the passage is often called", ["the Pax Mongolica", "the Columbian Exchange", "the Abbasid golden age", "the Commercial Revolution"],
      "The \"Mongol peace\" made overland travel safer in the 1200s and 1300s."],
    ["Which piece of evidence would best support the author's claim about travel?", ["Marco Polo and Ibn Battuta crossed Eurasia in the Mongol era", "Zheng He led seven voyages into the Indian Ocean", "Mansa Musa made a pilgrimage from Mali to Mecca", "Vasco da Gama sailed around Africa to reach India in 1498"],
      "Both travelers moved through lands under Mongol rule or influence."],
    ["The author's final point is that Mongol rule", ["spread disease as well as goods and technology", "protected Europe from epidemic disease", "ended trade between China and the Middle East", "prevented the spread of gunpowder to Europe"],
      "The bubonic plague traveled the same routes in the 1300s."]
  ]);

  /* ===== Ch 18 ===== */
  set("18", "I am a griot. We are vessels of speech; we are the memory of mankind. Without us the names of kings would vanish into oblivion. By the spoken word we bring to life the deeds of kings for younger generations. I teach kings the history of their ancestors, so that the lives of the ancients might serve them as an example.",
    "Adapted from the Epic of Sundiata, as recited by the griot Djeli Mamadou Kouyaté and written down in the 1950s", [
    ["The passage shows that in the Mali Empire history was preserved mainly through", ["oral tradition passed on by trained specialists", "written chronicles kept by the king's scribes", "inscriptions carved on stone monuments", "records kept by foreign merchants"],
      "Griots memorized and performed the histories of rulers and families."],
    ["One limitation of this source for studying the 1200s is that it", ["was recorded centuries after the events it describes", "was written by a visitor who did not speak the language", "describes only the trade of the Swahili coast", "was composed by enemies of the Mali Empire"],
      "Oral accounts can change over many generations of retelling."],
    ["According to the passage, griots served rulers by", ["advising them with examples from the past", "collecting taxes from caravan merchants", "commanding the cavalry in wartime", "leading prayers at the royal mosque"],
      "\"I teach kings the history of their ancestors.\""]
  ]);
  set("18", "Kilwa is a Moorish town with many fine houses of stone and mortar, with many windows after our fashion, and very well laid out in streets. Before the king our lord sent his fleet to discover India, the Moors of Sofala, Zimbabwe and Mombasa obeyed the king of Kilwa. The merchants of this town trade in gold, ivory and cloth, and its people go well dressed in rich garments of silk and cotton.",
    "Adapted from Duarte Barbosa, a Portuguese official in the Indian Ocean, c. 1518", [
    ["Kilwa's wealth, as described in the passage, came mainly from", ["controlling the gold trade from the interior to the Indian Ocean", "conquering the wealthy kingdoms of the West African savanna", "selling salt mined in the Sahara desert", "taxing pilgrims on their way to Mecca"],
      "Gold from Zimbabwe passed through Sofala and Kilwa."],
    ["The word \"Moorish\" in the passage reflects the fact that Swahili city-states", ["had ruling and merchant classes that had adopted Islam", "had been conquered and settled by armies from Spain", "were ruled directly by the Abbasid caliph", "had rejected all contact with Arab traders"],
      "Barbosa uses the Iberian term for Muslims."],
    ["Barbosa's reference to the Portuguese fleet points to which change after 1500?", ["Portuguese attacks that disrupted Swahili trade", "Portuguese conversion of the Swahili coast to Christianity", "The end of all gold mining in southern Africa", "The union of the Swahili cities into one empire"],
      "Portuguese ships sacked Kilwa and Mombasa in 1505."]
  ]);

  /* ===== Ch 20 ===== */
  set("20", "The Inca kings never took tribute from their subjects in goods. Instead, each man gave his labor: to till the lands of the Sun and of the Inca, to build roads and bridges, to serve in the army. What was grown on the royal lands was laid up in storehouses along the roads, and in years of hunger it was shared out among the people.",
    "Adapted from Garcilaso de la Vega, \"El Inca,\" son of a Spanish conquistador and an Inca noblewoman, Royal Commentaries of the Incas, 1609", [
    ["The labor obligation described in the passage is known as", ["the mita system", "the encomienda system", "the chinampa system", "the tribute-list system"],
      "Communities owed the state rotating labor service."],
    ["How did the Inca system described here differ from Aztec practice?", ["The Aztecs collected tribute in goods from conquered peoples", "The Aztecs paid wages to all who worked for the state", "The Aztecs had no way to supply their capital with food", "The Aztecs required no service from conquered peoples"],
      "Aztec tribute lists record cloth, cacao, feathers and food sent to Tenochtitlan."],
    ["Garcilaso's background suggests that his account may", ["present Inca rule in an especially favorable light", "show no knowledge of Inca customs or language", "have been written to justify the Spanish conquest", "be based on records kept in the Inca writing system"],
      "As a descendant of Inca nobility writing for Europeans, he defended his mother's people."]
  ]);
  set("20", "The settlement of the Pacific was not an accident of drifting canoes. Islanders built double-hulled vessels that could carry families, pigs, dogs and potted seedlings, and they steered by stars, swells and the flight of birds. By about 1300 they had reached Hawaii, Easter Island and New Zealand. Where land was plentiful, chiefs came to rule thousands; where it was scarce, people cut the forests faster than they could regrow.",
    HIST, [
    ["The passage rejects the idea that Polynesian migration was", ["unplanned and accidental", "carried out by sea", "completed before 1500", "dependent on farming"],
      "The author stresses deliberate voyaging with supplies and navigation skills."],
    ["The crops and animals carried on the voyages suggest that the migrants intended to", ["found permanent farming settlements", "trade with merchants from China", "return home after one fishing season", "raid the islands they discovered"],
      "They brought what was needed to start agriculture in new lands."],
    ["Which development in Hawaii best fits the author's point about places where \"land was plentiful\"?", ["Stratified chiefdoms with powerful ruling classes", "Small egalitarian bands of hunter-gatherers", "City-states ruled by merchant councils", "Empires governed by a paid bureaucracy"],
      "Dense populations in Hawaii and Tonga supported ali'i nui (high chiefs) and distinct classes."]
  ]);

  /* ===== Ch 21 ===== */
  set("21", "When a ship arrives from China, the king's overseer and a Chetti go on board and make an invoice of the goods. A day is settled for fixing the price. When the price has been fixed, all join hands, and the broker says, \"The price is agreed; whether it prove dear or cheap, it shall never be repudiated or changed.\"",
    "Adapted from Ma Huan, a Chinese Muslim translator on Zheng He's voyages, describing Calicut, 1433", [
    ["The passage best supports which conclusion about Indian Ocean trade around 1430?", ["It followed well-established customs that merchants trusted", "It was controlled by a single empire that set all prices", "It was carried on mostly by European trading companies", "It had collapsed since the end of Mongol rule"],
      "Local officials, brokers and fixed procedures made trade predictable."],
    ["The voyages on which Ma Huan served were intended mainly to", ["display Ming power and bring foreign rulers into the tribute system", "found Chinese colonies in India and East Africa", "spread Buddhism among the many peoples of the Indian Ocean basin", "find a sea route to the markets of western Europe"],
      "Zheng He's fleets collected tribute and recognition for the Yongle emperor."],
    ["The Ming government ended these voyages in the 1430s largely because", ["officials saw them as costly and wanted to guard the north instead", "Portuguese fleets had already driven Chinese ships from the ocean", "the fleet had been destroyed in a storm off Arabia", "foreign rulers refused to trade with Chinese merchants"],
      "Confucian ministers distrusted the expense, and the Mongols remained a threat."]
  ]);
  set("21", "I have built a church in the city of Khanbaliq, where the great khan has his chief residence, and I have baptized there, as I reckon, some six thousand persons. I have also bought forty boys, the sons of pagans, and taught them Latin and our rites. It is now twelve years since I have had any news of the papal court.",
    "Adapted from a letter of John of Montecorvino, a Franciscan missionary in China, 1305", [
    ["John of Montecorvino's presence in Khanbaliq was made possible mainly by", ["Mongol rule that protected travel across Eurasia", "Ming voyages that carried Europeans to China", "Portuguese trading posts along the Chinese coast", "Crusader conquests in Central Asia"],
      "The Yuan court of the great khan welcomed foreigners of many faiths."],
    ["The letter's final sentence best illustrates", ["the great distance and slow communication between Europe and China", "the pope's decision to end missions to East Asia", "the growing hostility of the khan toward Christian missionaries", "the collapse of trade along the Silk Roads by 1305"],
      "Twelve years without news shows how far he was from Rome."],
    ["Compared with Islam and Buddhism, Roman Catholic missions in China in this period", ["won few lasting converts", "converted the ruling dynasty", "replaced Confucianism at court", "spread widely among peasants"],
      "The mission faded after the Mongols fell and contact was lost."]
  ]);
}});

Study.extendUnit("apwh", "u4", {problems(k){
  const set = mk(k);

  /* ===== Ch 22 ===== */
  set("22", "The Company may make treaties with princes and rulers in the name of the States General, build fortresses and strongholds, appoint governors, keep soldiers and officers of justice. No one but the Company shall be allowed to sail east of the Cape of Good Hope for twenty-one years.",
    "Adapted from the charter granted by the Dutch States General to the United East India Company (VOC), 1602", [
    ["The charter gave the VOC powers that were normally held by", ["sovereign governments", "religious orders", "town guilds", "noble families"],
      "It could make treaties, wage war and govern territory."],
    ["Companies such as the VOC raised the money for long voyages mainly by", ["selling shares to many investors who split the risk and profit", "borrowing gold and silver from the Spanish royal treasury", "collecting tithes from Protestant churches", "taxing peasants in the Dutch countryside"],
      "Joint-stock companies pooled private capital."],
    ["In Southeast Asia the VOC used these powers chiefly to", ["seize control of the spice trade by force", "convert local rulers to Protestantism", "settle large numbers of Dutch farmers", "build an empire across the Asian interior"],
      "It took Java's ports and the Spice Islands to monopolize cloves, nutmeg and mace."]
  ]);
  set("22", "The ships that crossed the Atlantic after 1492 carried more than soldiers. Wheat, sugarcane, horses, cattle and pigs remade American landscapes, while maize, potatoes and manioc went the other way and fed growing populations in Europe, Africa and Asia. The deadliest passengers were invisible: smallpox, measles and influenza, to which the peoples of the Americas had no inherited resistance.",
    HIST, [
    ["The process described in the passage is known as", ["the Columbian Exchange", "the Commercial Revolution", "the Atlantic System", "the Price Revolution"],
      "The global transfer of plants, animals, people and diseases after 1492."],
    ["The diseases named in the passage contributed most directly to", ["the collapse of the Aztec and Inca empires", "the decline of the population of western Europe", "the end of the trans-Saharan trade in gold", "the failure of Spanish settlement in the Caribbean"],
      "Epidemics killed a large share of indigenous people and weakened resistance to conquest."],
    ["Which long-term effect is best explained by the movement of American food crops?", ["World population growth after 1500", "The decline of Chinese agriculture", "The end of famine in Europe", "The rise of pastoralism in Africa"],
      "Maize, potatoes and manioc added calories on land where older crops did poorly."]
  ]);

  /* ===== Ch 23 ===== */
  set("23", "The pretended power of suspending laws by royal authority, without consent of Parliament, is illegal. Levying money for the use of the Crown without grant of Parliament is illegal. The raising or keeping of a standing army within the kingdom in time of peace, unless with consent of Parliament, is against law. The election of members of Parliament ought to be free.",
    "Adapted from the English Bill of Rights, 1689", [
    ["The document established which form of government in England?", ["A constitutional monarchy", "An absolute monarchy", "A direct democracy", "A military dictatorship"],
      "The monarch ruled within limits set by law and Parliament."],
    ["The document was a direct result of", ["the Glorious Revolution", "the Thirty Years' War", "the Protestant Reformation", "the French Wars of Religion"],
      "Parliament offered the throne to William and Mary on these terms in 1688–1689."],
    ["Which ruler's government contrasts most sharply with the principles of the document?", ["Louis XIV of France", "William III of England", "The stadholders of the Dutch Republic", "The doges of Venice"],
      "Louis XIV ruled as an absolute monarch, claiming divine right."]
  ]);
  set("23", "The merchant who wished to escape the rules of the town guilds simply left town. He bought raw wool, carried it to cottages in the countryside, and paid families by the piece to spin and weave it. He owned the materials and the finished cloth; they owned only their labor. Prices and wages, not custom, now decided what was made and by whom.",
    HIST, [
    ["The arrangement described in the passage is called", ["the putting-out system", "the three-field system", "the encomienda system", "the factory system"],
      "Also called the protoindustrial or domestic system."],
    ["The passage best illustrates which broader development in early modern Europe?", ["The growth of capitalism", "The revival of serfdom", "The spread of absolutism", "The decline of population"],
      "Private owners sought profit in a market that set prices and wages."],
    ["One social effect of the system described was that rural families", ["earned money income and depended less on farming alone", "gained seats in the guilds that governed the towns", "were forced to move into large industrial cities", "paid higher labor dues to their feudal lords"],
      "Cash wages changed village life and family economies."]
  ]);

  /* ===== Ch 24 ===== */
  set("24", "We ask and require that you acknowledge the Church as the ruler of the whole world, and the king and queen of Spain as lords of these islands and this mainland. If you do so, we shall receive you in all love. But if you do not, we shall powerfully enter into your country, make war against you, take you and your wives and children and make slaves of them. The deaths and losses that result shall be your fault.",
    "Adapted from the Requerimiento, a declaration Spanish conquistadors were ordered to read aloud to indigenous peoples, 1513", [
    ["The main purpose of the document was to", ["provide a legal and religious justification for conquest", "set up a lasting trade agreement with indigenous rulers", "protect indigenous peoples from enslavement", "explain Christian beliefs before baptism"],
      "It shifted the blame for war onto those who refused to submit."],
    ["The authority claimed in the document rested on", ["the pope's grant of newly found lands to Spain", "treaties signed with Aztec and Inca rulers", "the consent of indigenous town councils", "the right of first discovery by Portugal"],
      "Papal grants and the Treaty of Tordesillas gave Spain its claim."],
    ["Which person would most likely have criticized the use of this document?", ["Bartolomé de las Casas", "Hernán Cortés", "Francisco Pizarro", "King Ferdinand of Aragon"],
      "Las Casas condemned Spanish treatment of indigenous peoples."]
  ]);
  set("24", "According to His Majesty's warrant, the mine owners of this hill have a right to the labor of 13,300 Indians, brought from the provinces as far as Cuzco. They are sent out every year, and many of them never return. Those who carry the ore climb up from the depths on ladders of hide with the load on their backs.",
    "Adapted from Antonio Vázquez de Espinosa, a Spanish friar, describing the silver mines of Potosí, c. 1620", [
    ["The labor draft described in the passage was adapted by the Spanish from", ["the Inca mita", "the Aztec tribute list", "the European guild", "the Atlantic slave trade"],
      "Spain turned the Inca labor obligation into forced mine work."],
    ["Much of the silver produced at Potosí ended up in", ["China, in exchange for silk and porcelain", "Russia, in exchange for furs and timber", "West Africa, in exchange for gold and salt", "Japan, in exchange for copper and swords"],
      "Manila galleons carried silver across the Pacific; China's economy ran on it."],
    ["The system described in the passage most directly contributed to", ["sharp population decline in Andean communities", "the growth of an indigenous merchant class", "the end of Spanish rule in Peru by 1700", "a shift from mining to plantation farming"],
      "Harsh conditions, mercury poisoning and flight emptied villages."]
  ]);

  /* ===== Ch 25 ===== */
  set("25", "Most of the slaves that are offered to us are prisoners of war, sold by the victors as their booty. When they come to us, our surgeons examine every part of them. Those who are approved are set on one side and marked on the breast with a red-hot iron, bearing the arms or name of the company, so that we may tell them from the slaves of the English and the French.",
    "Adapted from Willem Bosman, a Dutch merchant on the Guinea coast of West Africa, 1700", [
    ["According to the passage, most enslaved people reached European traders by", ["being captured in wars and sold by African rulers", "being kidnapped by European raiding parties inland", "volunteering to work for wages in the Americas", "being sentenced for crimes in European courts"],
      "Europeans mostly stayed on the coast and bought captives from African states and merchants."],
    ["The mention of English and French slaves is evidence that", ["several European states competed in the Atlantic slave trade", "the Dutch held a legal monopoly on the slave trade", "England and France had outlawed the slave trade by 1700", "enslaved people were sent mainly to Europe"],
      "Rival companies traded side by side on the same coast."],
    ["The trade described in the passage grew mainly because of demand for labor on", ["sugar plantations in the Caribbean and Brazil", "silver mines high in the Andes mountains", "wheat farms in northern Europe", "spice plantations in Southeast Asia"],
      "Sugar was the main engine of the Atlantic slave trade."]
  ]);
  set("25", "The Atlantic trade did not affect Africa evenly. Kingdoms such as Dahomey and Asante grew strong by exchanging captives for firearms, then using the firearms to take more captives. Regions that were raided lost young men above all, leaving societies with more women than men. At the same time, manioc and maize brought from the Americas allowed the continent's total population to keep rising slowly even as millions were carried away.",
    HIST, [
    ["The author's main argument is that the slave trade", ["had different effects in different parts of Africa", "destroyed every state on the African continent", "had little effect on African societies", "benefited all Africans who took part in it"],
      "Some states gained power while others were devastated."],
    ["The gender imbalance described in the passage most likely led to", ["a rise in polygamy and more work in farming and trade for women", "the end of slavery within African societies", "a sharp and lasting decline in the authority of African kings", "large-scale migration of European women to Africa"],
      "About two-thirds of those exported were men."],
    ["The crops named in the passage are an example of", ["the Columbian Exchange", "the triangular trade in rum", "trans-Saharan caravan trade", "Indian Ocean monsoon trade"],
      "American food crops spread to Africa after 1500."]
  ]);

  /* ===== Ch 26 ===== */
  set("26", "Esteem most highly filial piety and brotherly submission, in order to give due weight to social relations. Give importance to farming and the tending of mulberry trees, in order to ensure enough clothing and food. Extirpate strange doctrines, in order to exalt the correct doctrine. Pay your taxes fully, in order to avoid being pressed for payment.",
    "Adapted from the Kangxi emperor's Sacred Edict, Qing China, 1670", [
    ["The values promoted in the edict are drawn mainly from", ["Confucianism", "Buddhism", "Christianity", "Legalism"],
      "Filial piety and proper social relations are core Confucian ideas."],
    ["As a Manchu ruler of China, Kangxi issued such teachings mainly to", ["strengthen his legitimacy among the Chinese people", "replace the civil service examination system", "encourage trade with European merchants", "convert the Chinese people to the Manchu religion"],
      "The Qing won support by ruling as Confucian emperors."],
    ["The edict's emphasis on farming reflects the Confucian view that", ["agriculture is the foundation of a stable society", "merchants deserve the highest social rank", "foreign trade is the main source of wealth", "peasants should be free from all taxes"],
      "Farmers ranked above artisans and merchants in the traditional order."]
  ]);
  set("26", "The island of Deshima is the prison in which the Dutch are confined. We may not leave it without permission and a guard. No Japanese may speak with us except the interpreters, and they are sworn to tell us nothing of the country. Once a year our chief travels to the court at Edo with presents for the shogun. We bear all this for the sake of the profit to be had.",
    "Adapted from Engelbert Kaempfer, a German physician serving the Dutch East India Company in Japan, 1690s", [
    ["The restrictions described in the passage were part of the Tokugawa policy of", ["tightly controlling contact with foreigners", "expanding Japanese trade throughout Asia", "welcoming Christian missionaries to Japan", "building a navy to conquer Korea"],
      "The sakoku edicts of the 1630s limited trade to a few controlled ports."],
    ["The shoguns adopted this policy mainly because they feared that", ["Christianity and foreign alliances could threaten their rule", "Dutch merchants would drain Japan of its supply of silk", "Japanese peasants would emigrate to Europe", "Chinese armies would invade through Nagasaki"],
      "Christian daimyo and foreign weapons were seen as dangers to unity."],
    ["Despite the limits described, the Dutch presence allowed Japanese scholars to", ["study European science and medicine", "travel freely to study in Europe", "open embassies in Dutch cities", "import European firearms without limit"],
      "\"Dutch learning\" (rangaku) spread through translated books."]
  ]);

  /* ===== Ch 27 ===== */
  set("27", "You have subjected the upright community of Muhammad to your devious will and undermined the firm foundation of the faith. You have opened the gates of oppression and called it the Shia way. The scholars and doctors of law have therefore ruled that it is a duty to destroy you. I, the sovereign, have set out against you with my soldiers, as numerous as the stars.",
    "Adapted from a letter of the Ottoman sultan Selim I to Shah Ismail of the Safavid Empire, 1514", [
    ["The conflict reflected in the letter was rooted mainly in", ["the rivalry between Sunni and Shia Islam", "competition over the Atlantic trade", "disputes between Muslims and Hindus", "a struggle for control of the Mughal throne"],
      "The Ottomans were Sunni; Shah Ismail made Twelver Shiism the Safavid state religion."],
    ["The letter was followed by the battle of Chaldiran, in which the Ottomans prevailed largely because of", ["their use of gunpowder weapons", "their alliance with the Mughals", "their superior cavalry archers", "their control of the Persian Gulf"],
      "Janissaries with firearms and cannon defeated the Safavid qizilbash cavalry."],
    ["Selim's reference to \"scholars and doctors of law\" shows that he", ["used religious authority to justify his war", "rejected the influence of religion on the state", "planned to convert his empire to Shiism", "had lost the support of the ulama"],
      "Legal rulings from the ulama gave the campaign legitimacy."]
  ]);
  set("27", "The three Islamic empires rose on the strength of cannon, cavalry and conquest, and each began to weaken when conquest stopped. Without new lands to hand out, rulers squeezed more taxes from peasants and sold offices to the highest bidder. Trade increasingly passed into the hands of European companies. And conservative religious leaders who distrusted foreign ideas, from the printing press to the telescope, kept their societies from matching the science and technology of their rivals.",
    HIST, [
    ["The empires discussed in the passage are", ["the Ottoman, Safavid and Mughal", "the Abbasid, Umayyad and Fatimid", "the Mali, Songhay and Ghana", "the Ming, Qing and Tokugawa"],
      "The three \"gunpowder empires\" of the early modern Islamic world."],
    ["Which piece of evidence best supports the author's claim about religious conservatism?", ["Ottoman authorities restricted printing in Turkish and Arabic for centuries", "Akbar invited scholars of many different religions to debate at his court", "Shah Abbas welcomed European merchants to Isfahan", "Suleyman reorganized the law code of the Ottoman Empire"],
      "The other choices show openness or reform."],
    ["According to the passage, a major cause of decline was", ["the end of territorial expansion", "the spread of epidemic disease", "the rise of merchant governments", "the conversion of rulers to Christianity"],
      "The empires depended on new conquests to reward soldiers and officials."]
  ]);
}});
})();
