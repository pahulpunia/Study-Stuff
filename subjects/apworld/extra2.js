/* AP World History · more original question sets for Ch 16 & 19 and Ch 21.
   Built from the textbook chapters (Bentley, Traditions & Encounters). Primary sources are adapted
   (shortened and reworded) from the documents named in each citation. Sets marked "A historian's
   interpretation" are written for this site in the style of AP exam secondary sources; they are not
   quotations from a published historian. No test-bank or released-exam questions are used. */
(() => {
const HIST = "A modern historian's interpretation, written in the style of AP exam secondary sources";
const hbar = (title, rows, fmt) => {
  const W = 600, rowH = 34, top = 40, left = 190, max = Math.max(...rows.map(r => r[1])), H = top + rows.length * rowH + 16;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}"><text x="0" y="20" font-size="16" font-weight="700">${esc(title)}</text>` +
    rows.map(([label, v], i) => { const y = top + i * rowH, w = Math.max(2, (W - left - 70) * v / max);
      return `<text x="${left - 10}" y="${y + 20}" font-size="14" text-anchor="end">${esc(label)}</text><rect class="bar" x="${left}" y="${y + 5}" width="${w.toFixed(1)}" height="22" rx="4"/><text x="${left + w + 8}" y="${y + 21}" font-size="14" font-weight="700">${esc(fmt(v))}</text>`; }).join("") +
    `<line class="axis" x1="${left}" y1="${top}" x2="${left}" y2="${H - 12}" stroke-width="1.5"/></svg>`;
};

Study.extendUnit("apwh", "u3", {
  problems(k){
    const lab = s => "Ch " + (s === "16" ? "16 & 19" : s);
    const set = (sec, stim, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], lab(sec), t, o, o[0], [w], {shuffle:true, stim, cite}));
    const chart = (sec, svg, cite, qs) => qs.forEach(([t, o, w]) => k.choice([sec], lab(sec), t, o, o[0], [w], {shuffle:true, svg, cite}));
    const Q = (sec, t, o, w) => k.choice([sec], lab(sec), t, o, o[0], [w], {shuffle:true});

    /* ===== Ch 16 & 19 ===== */
    set("16", "The imperial majesty should be armed with laws as well as glorified with arms, so that the state may be governed well in war and in peace. We have gathered the scattered laws of earlier emperors and the opinions of the old jurists into one body, cutting out whatever was repeated or contradictory.",
      "Adapted from the preface to Justinian's Institutes, Byzantine Empire, 533", [
      ["Justinian's project best shows that the Byzantine Empire", ["saw itself as the continuation of the Roman Empire", "rejected Roman traditions in favor of Persian ones", "was governed by the pope in Rome", "had no central government before Justinian"],
        "The Corpus Iuris Civilis organized centuries of Roman law. Byzantines called themselves Romans."],
      ["Which was a long-term effect of the legal work described?", ["Roman law shaped later legal systems in Europe", "Christianity was banned in the Byzantine Empire", "Byzantium broke up into independent city-states", "Islamic law replaced Roman law in Constantinople"],
        "Rediscovered in the West around 1100, Justinian's code influenced church law and the law codes of many European states."],
      ["The phrase “armed with laws as well as glorified with arms” suggests Justinian believed", ["strong government needed both military power and law", "the army should be replaced by a council of trained judges", "laws mattered only during times of war", "the church should control all the courts of the empire"],
        "He saw law and the army as the two supports of imperial rule."]
    ]);
    set("16", "He also tried to learn to write, and he used to keep tablets under his pillow so that in his spare hours he could practice forming letters, but he began too late in life. He brought scholars to his court from across Europe and ordered that schools be opened in monasteries and cathedrals.",
      "Adapted from Einhard, Life of Charlemagne, c. 830", [
      ["Charlemagne's actions in the passage are best understood as part of", ["an effort to revive learning in western Europe", "a campaign to convert the Byzantine Empire", "the rise of universities in the 1200s", "a plan to replace Latin with local languages"],
        "The Carolingian revival trained clergy and copied classical and Christian texts in monastery schools."],
      ["Which event in 800 most strengthened the tie between the Frankish kings and the papacy?", ["Pope Leo III crowning Charlemagne as emperor", "The Viking raid on the monastery at Lindisfarne", "The split between the Catholic and Orthodox churches", "Pope Urban II calling for the First Crusade"],
        "The coronation linked the Frankish monarchy to the pope's authority. Lindisfarne was 793, the schism 1054, and Urban II's call 1095."],
      ["Which best explains why Charlemagne's empire broke apart after his death?", ["His heirs divided it while invaders attacked", "A plague killed most of the Frankish population", "The pope ordered it divided among the bishops", "The Byzantine army reconquered all of Gaul"],
        "His grandsons split the empire in 843, and Viking, Magyar and Muslim raids pushed power down to local lords."]
    ]);
    set("16", "Whoever swears loyalty to his lord should always keep in mind that he must not harm his lord in body or property, nor weaken his honor or his power. The lord in turn must do the same for his faithful vassal. If he fails to do so, he will rightly be judged a man of bad faith.",
      "Adapted from a letter of Bishop Fulbert of Chartres on the duties of lords and vassals, 1020", [
      ["The relationship described is best characterized as", ["a set of mutual duties between lord and vassal", "a contract between a merchant and his guild", "the payment of taxes by peasants to a king", "a religious vow taken by monks in a monastery"],
        "Feudal ties were reciprocal: vassals owed loyalty and service, and lords owed protection and land."],
      ["Which condition in western Europe most encouraged relationships like this one?", ["Weak central governments facing frequent raids", "Strong kings collecting taxes through a bureaucracy", "The rapid growth of trading cities and banks", "A shortage of farmland caused by overpopulation"],
        "With no strong state to defend them, people turned to local lords and their armed retainers."],
      ["Which group did most of the farm labor that supported lords and vassals?", ["Serfs bound to the manor", "Enslaved Africans on plantations", "Free wage workers in towns", "Monks living in monasteries"],
        "Serfs worked the lord's land in exchange for protection and could not leave the manor freely."]
    ]);
    set("16", "Then we went among the Greeks, and they led us to the place where they worship their God. We did not know whether we were in heaven or on earth, for on earth there is no such splendor or beauty, and we cannot describe it.",
      "Adapted from the Russian Primary Chronicle, describing envoys sent by Prince Vladimir of Kiev, c. 987", [
      ["The decision that followed this report most directly led to", ["the spread of Orthodox Christianity among the Rus", "the conversion of the Rus to Roman Catholicism", "the Mongol conquest of the city of Kiev", "the adoption of Islam across eastern Europe"],
        "Vladimir converted around 989, and Kievan Rus adopted Byzantine Orthodox Christianity."],
      ["Which Byzantine contribution most shaped writing among Slavic peoples?", ["The Cyrillic alphabet developed by missionaries", "The use of Arabic numerals in government", "The printing press brought from Song China", "The Latin alphabet used by the pope's clerks"],
        "The missionaries Cyril and Methodius created a Slavic script in the 800s, and Cyrillic grew from it."],
      ["The building the envoys most likely visited in Constantinople was", ["the Hagia Sophia", "the Dome of the Rock", "the Great Mosque of Córdoba", "the cathedral of Notre-Dame"],
        "Justinian's great domed church was the center of Orthodox worship in Constantinople."]
    ]);
    set("16", "No one of the trade shall work longer than from the beginning of the day until curfew, nor at night by candlelight, for no man can work as neatly by night as by day. No one shall take on an apprentice for less than seven years. No stranger from outside the city may set up shop until the masters of the trade have admitted him.",
      "Adapted from the rules of a craft guild of spur makers, London, 1345", [
      ["These rules best show that guilds", ["controlled the quality of goods and who could compete", "encouraged anyone to open a shop in the city", "were run by the Catholic Church to train priests", "set the rents that peasants paid to their lords"],
        "Guilds set standards, trained apprentices, and limited outside competition."],
      ["Guilds like this one became common in western Europe mainly because", ["towns and trade grew after 1000", "the Black Death killed most merchants", "kings banned all trade outside of towns", "the crusades ended trade with the Islamic world"],
        "More food meant larger towns, and artisans organized to protect their trades."],
      ["A historian would most likely use these rules as evidence of", ["economic life in high medieval towns", "the causes of the schism of 1054", "the spread of Christianity to Scandinavia", "Byzantine control of the silk trade"],
        "The rules show how town craftsmen organized work, training and competition."]
    ]);
    set("16", "They smashed the holy images and threw the relics of the martyrs into filthy places. They broke apart the altar of the great church, a work of art admired by all nations, and divided the pieces among themselves. Even the Saracens are merciful compared with these men who bear the cross on their shoulders.",
      "Adapted from Niketas Choniates, a Byzantine official, describing the sack of Constantinople in the Fourth Crusade, 1204", [
      ["Choniates' point of view is best explained by the fact that he", ["was a Byzantine who saw his own city plundered", "was a Venetian merchant who profited from the crusade", "was a Muslim scholar writing about Christian wars", "was a western knight who joined the crusade"],
        "As a Byzantine official he watched western crusaders loot his capital."],
      ["The events described most directly contributed to", ["a weaker Byzantine Empire that later fell to the Ottomans", "the conversion of the Rus to Orthodox Christianity", "the end of the split between the eastern and western churches", "the expulsion of Muslims from the Iberian Peninsula"],
        "Byzantium never fully recovered from 1204 and fell to the Ottoman Turks in 1453."],
      ["The comparison to the “Saracens” is meant to show that", ["the crusaders acted worse than the empire's Muslim enemies", "Muslim armies had joined the crusaders in the attack", "the crusade was led by converts from Islam", "Byzantines generally preferred Muslim rule to their own emperors"],
        "Saracen was a Christian term for Muslims. He is saying fellow Christians behaved worse than enemies."]
    ]);
    chart("16", hbar("Population of Europe (millions, rough estimates)", [["1000", 36], ["1100", 44], ["1200", 58], ["1300", 79]], v => `${v}M`),
      "Rough modern estimates; historians' figures vary", [
      ["Which best explains the trend shown in the chart?", ["New farming methods and more land under cultivation", "Large numbers of migrants arriving from the Americas", "The end of all warfare between European kingdoms", "Improved medicine that ended outbreaks of disease"],
        "Heavy plows, horse collars, three-field rotation and cleared forests raised harvests."],
      ["Which development was most directly supported by the trend in the chart?", ["The growth of towns, guilds, and trade fairs", "The decline of the Hanseatic League", "The collapse of the manorial system by 1100", "The end of the Reconquista in 1100"],
        "Surplus food and people filled towns, where guilds and fairs like those of Champagne grew."],
      ["The trend shown in the chart reversed sharply in the mid-1300s because of", ["the Black Death", "the Viking invasions", "the First Crusade", "the Mongol conquest of Europe"],
        "Plague killed perhaps a third or more of Europe's people after 1347."]
    ]);
    Q("16", "Which was a key difference between the Eastern Orthodox and Roman Catholic churches after 1054?", ["Orthodox priests could marry and services were in Greek", "Orthodox Christians rejected the use of any icons forever", "Catholic services were held in Greek, not Latin", "Catholics rejected the authority of the pope"],
      "Besides papal authority, the churches differed over language, leavened bread, and clerical marriage. Icons were restored in the East in 843.");
    Q("16", "Which best describes the Byzantine theme system?", ["Soldiers received land in return for military service", "Merchant guilds elected the governors of each province", "The patriarch appointed the governors of each province", "Peasants were forbidden to own land in the provinces"],
      "Generals ran the themes (provinces), and soldiers got land to farm in exchange for serving in the army.");
    Q("16", "The rise of universities in Europe after 1100 was helped most by", ["Greek works reaching Europe through Muslim Spain and Sicily", "a ban on church schools ordered by the Holy Roman Emperor", "Byzantine scholars fleeing the fall of Constantinople", "printed books produced on Gutenberg's press"],
      "Translations of Aristotle and Muslim commentaries fed scholasticism. Constantinople fell in 1453 and printing came after 1450, both too late.");
    Q("16", "The Hanseatic League is best described as", ["an alliance of trading cities in the Baltic and North Sea", "a military order that fought in the crusades", "a council of bishops that elected the pope", "an alliance of Italian cities against the Holy Roman Empire"],
      "Hansa towns like Lübeck controlled trade in grain, timber, fish and furs in northern Europe.");
    Q("16", "Mendicant orders such as the Franciscans differed from earlier monks because they", ["preached in towns instead of living apart in monasteries", "were allowed to marry and own large country estates", "rejected the authority of the pope over the church", "served as soldiers protecting pilgrims to Jerusalem"],
      "Franciscans and Dominicans lived in poverty among townspeople, preaching and serving the poor.");

    /* ===== Ch 21 ===== */
    set("21", "The people of Mali are seldom unjust, and they hate injustice more than any other people. There is complete safety in their country, and neither traveler nor resident needs to fear robbers. They are careful to pray, and on Fridays the mosque is so crowded that you must send a servant early to save you a place.",
      "Adapted from Ibn Battuta's account of his visit to the kingdom of Mali, 1352–1353", [
      ["Ibn Battuta's praise of Mali most clearly reflects his perspective as", ["a Muslim legal scholar judging by Islamic standards", "a Portuguese explorer seeking gold for his king", "a Christian missionary hoping to convert Africans", "a Mali official writing to impress foreign rulers"],
        "He was a qadi (judge) trained in Islamic law, and he praised what fit his standards and criticized what did not."],
      ["The passage provides the best evidence that by the 1300s", ["Islam had become important among West African elites", "West Africa was cut off from trans-Saharan trade", "Mali had converted to Christianity under Mansa Musa", "the Mongols had conquered most of West Africa"],
        "Mali's rulers and merchants practiced Islam, which linked them to the wider dar al-Islam."],
      ["A historian studying Mali might be careful with this source because", ["it is one outsider's view from a short visit", "it was written centuries after Mali collapsed", "Ibn Battuta never left the Arabian Peninsula", "it was written to recruit settlers for Mali"],
        "He stayed about a year and judged Mali by the customs he knew."]
    ]);
    set("21", "In the city of Khanbaliq is the Great Khan's mint. He has the inner bark of mulberry trees made into sheets like paper, cut into pieces, and stamped with his seal. Everyone in his lands accepts these pieces in payment, and with them people can buy anything. Merchants who arrive with gold, silver, and pearls must sell them to the Khan for this paper.",
      "Adapted from The Travels of Marco Polo, c. 1300", [
      ["Polo described this practice in detail most likely because", ["paper money was unknown in Europe at the time", "Europeans had used paper money for centuries", "the Khan had copied it from Italian bankers", "he wanted to warn Europeans about Mongol taxes"],
        "Paper money began in Song China. Europeans would not use it for centuries, so it amazed him."],
      ["The use of paper money in Khanbaliq best shows that", ["Chinese financial practices continued under Mongol rule", "Mongol rulers rejected every Chinese tradition of government", "Europe's economy was more advanced than China's", "trade in Yuan China depended entirely on barter"],
        "The Yuan kept many Song institutions, including paper currency."],
      ["Over-printing of paper money by the Yuan most likely contributed to", ["inflation that weakened the dynasty in the 1300s", "the rise of the Hanseatic League along the Baltic coast", "the decision to send Zheng He's fleets to the Indian Ocean", "the rapid spread of Buddhism from China into Japan"],
        "Printing too much paper money caused inflation, one of the troubles that helped bring down the Yuan in 1368."]
    ]);
    set("21", "Because a great part of the people, and especially of workers and servants, has died in the pestilence, many, seeing the needs of their masters and the shortage of servants, will not serve unless they receive excessive wages. Therefore every man and woman able to work shall serve for the wages that were customary before the plague, and no one shall pay or take more.",
      "Adapted from the Statute of Laborers, England, 1351", [
      ["The law was passed mainly in response to", ["a labor shortage caused by the Black Death", "a flood of workers arriving from the countryside", "the end of the Hundred Years' War", "falling wages caused by population growth"],
        "So many workers died that survivors could demand much higher pay."],
      ["The law best shows that English lords and officials wanted to", ["keep wages low despite the shortage of workers", "end serfdom and free every peasant in the kingdom", "encourage peasants to move to the growing towns", "raise taxes from peasants to pay for new crusades"],
        "It tried to freeze wages at pre-plague levels."],
      ["Which longer-term development was most closely connected to the conditions described?", ["Peasant revolts and the gradual decline of serfdom", "The rise of new manors run by enslaved workers", "Rapid population growth across western Europe", "The return of the Roman Empire in the West"],
        "Workers gained bargaining power, efforts to hold them down sparked revolts like the English Peasants' Revolt of 1381, and serfdom faded in western Europe."]
    ]);
    set("21", "Since the Yuan took the realm, many Chinese have adopted the dress, hairstyles, names, and speech of the northern barbarians. All of this is now forbidden. Clothing and caps shall follow the style of the Tang, and the old rites and customs shall be restored.",
      "Adapted and summarized from edicts of the Hongwu emperor, founder of the Ming dynasty, 1368–1370", [
      ["The edicts best reflect the Ming effort to", ["remove Mongol influence and restore Chinese traditions", "open China more widely to trade with Central Asian nomads", "spread Mongol customs more widely throughout East Asia", "replace Confucian teachings with Buddhist monastic rules"],
        "After driving out the Yuan, the Ming tried to erase signs of Mongol rule."],
      ["Which other policy of the early Ming fit the goal of these edicts?", ["Bringing back the Confucian civil service exams", "Keeping Mongols in the highest government posts", "Banning the study of Confucius in schools", "Inviting European merchants to run the treasury"],
        "Restoring the exams brought back a Chinese, Confucian-trained bureaucracy."],
      ["Which best describes how Hongwu governed?", ["He ruled as a harsh autocrat and centralized power", "He shared power with an elected council of merchants", "He let regional warlords rule their own provinces", "He handed power to Mongol princes in the north"],
        "Hongwu abolished the chief minister's post, ruled directly, and relied on loyal eunuchs and officials."]
    ]);
    set("21", "The captain had prepared these presents for the king: twelve pieces of striped cloth, four scarlet hoods, six hats, four strings of coral, a case of basins, a case of sugar, two casks of oil, and two of honey. When the king's officials saw them, they laughed and said this was no gift for a king; the poorest merchant from Mecca would give more.",
      "Adapted from an anonymous journal of Vasco da Gama's first voyage to India, 1498", [
      ["The officials' reaction best shows that", ["European goods held little value in Indian Ocean markets", "the king of Calicut refused all trade with outsiders", "Indian merchants had never seen foreign traders", "Portugal already controlled trade in the Indian Ocean"],
        "Europeans had few goods Asian markets wanted, which is why they usually paid in silver or used force."],
      ["The mention of merchants from Mecca shows that", ["Muslim traders were already active in Indian Ocean trade", "Arab armies had recently conquered the kingdom of Calicut", "the Portuguese had reached India by sailing up the Red Sea", "Christian pilgrims often traveled through India"],
        "Calicut was part of a long-established Indian Ocean network where Muslim merchants were common."],
      ["In later voyages, the Portuguese most often responded to problems like this by", ["using armed ships to force their way into the trade", "giving up on trade in Asia altogether", "converting the rulers of Calicut to Christianity", "paying Chinese merchants to trade for them"],
        "Cannon-armed ships let Portugal seize ports and demand fees from other traders."]
    ]);
    set("21", "The Renaissance was paid for before it was painted. Bankers such as the Medici of Florence and merchants in Venice and Milan competed for prestige by funding churches, statues and libraries. Their money hired artists like Brunelleschi and Donatello, and their agents bought Greek manuscripts from a shrinking Byzantine Empire.",
      HIST, [
      ["The author's argument most strongly emphasizes the role of", ["wealth from trade and banking in funding the arts", "the Catholic Church's attempt to ban all secular art", "peasant demands for new and more realistic art", "Italian military victories over the Ottoman Turks"],
        "The passage credits merchant and banking money for the art and learning of the Renaissance."],
      ["The reference to Greek manuscripts best relates to which Renaissance development?", ["Humanist scholars studying classical texts", "Scholars rejecting all ancient learning", "The spread of the Cyrillic alphabet", "The translation of the Quran into Latin"],
        "Humanists studied Greek and Roman works to learn about rhetoric, ethics and history."],
      ["Which statement would a historian who disagreed with the author most likely make?", ["New ideas, not just money, drove the Renaissance", "Wealthy patrons paid for much Renaissance art", "Italian merchants grew rich from trade", "Byzantine decline sent manuscripts to Italy"],
        "The other choices agree with the passage. A critic would stress humanist ideas over patrons' money."]
    ]);
    Q("21", "Which best explains why the Little Ice Age added to the crises of the 1300s?", ["Colder weather shortened growing seasons, causing famine", "Rising seas flooded most of the port cities of Europe", "Warmer weather spread malaria into northern Europe", "Frozen rivers ended all trade along the Silk Roads"],
      "Cooler temperatures after about 1300 cut harvests, and hungry populations were hit harder by plague.");
    Q("21", "Fernando and Isabel strengthened royal power in Spain by", ["conquering Granada and enforcing religious unity", "sharing power with an elected parliament of nobles", "making peace with the Muslim kingdom of Granada", "letting each region keep its own separate church"],
      "They completed the Reconquista in 1492 and expelled Jews and Muslims who would not convert.");
    Q("21", "Which technology most helped Portuguese sailors work their way home against the winds off Africa?", ["The caravel's triangular lateen sail", "Paper money printed by the crown", "Steam-powered engines on large ships", "Gunpowder weapons mounted on horses"],
      "The lateen sail, borrowed from Indian Ocean sailors, let ships sail closer to the wind.");
    Q("21", "Bartolomeu Dias's voyage in 1488 was important because he", ["rounded the Cape of Good Hope into the Indian Ocean", "reached the islands of the Caribbean by sailing west", "became the first European to reach the Ming court", "led the first voyage to sail around the entire world"],
      "Dias proved ships could sail around Africa, opening the way for da Gama's voyage to India in 1497–1498.");
    Q("21", "Which combination of events most weakened the Yuan dynasty in the 1300s?", ["Plague, famine, and peasant rebellions", "A Portuguese blockade of Chinese ports", "A long war against the Byzantine Empire", "The arrival of Christian missionaries"],
      "Epidemics, floods and famine, plus revolts and quarrels among Mongol nobles, ended Yuan rule in 1368.");
    Q("21", "The Hundred Years' War (1337–1453) helped build stronger monarchies in England and France because", ["kings raised standing armies and new taxes", "nobles gained the power to choose the kings", "the pope took over both kingdoms' governments", "both countries returned to feudal knights"],
      "Paying for long wars pushed kings to collect regular taxes and keep professional armies with cannons.");
  },
  saq: [
    {sec:"16", parts:[
      {q:"Identify ONE way the Byzantine Empire influenced Kievan Rus.", model:"After Prince Vladimir converted around 989, Kievan Rus adopted Orthodox Christianity, Byzantine-style churches and icons, and the Cyrillic alphabet.", look:["orthodox","cyrillic","vladimir","icon","architecture","church"]},
      {q:"Explain ONE reason towns grew in western Europe after 1000.", model:"New tools like the heavy plow and three-field rotation produced surplus food, so more people could leave farms and work as artisans and merchants in towns.", look:["heavy plow","three-field","surplus","trade","population","guild"]},
      {q:"Explain ONE way the crusades affected western Europe.", model:"Crusaders came home wanting Asian goods like spices and silk, which led to more trade through Italian cities like Venice and Genoa and helped towns grow.", look:["spice","silk","venice","genoa","trade","aristotle","muslim"]}
    ]},
    {sec:"21", parts:[
      {q:"Describe ONE effect of the Black Death on European society.", model:"Because a third or more of the population died, workers were scarce, so survivors demanded higher wages, which weakened serfdom and led to laws like the Statute of Laborers.", look:["labor shortage","wage","serfdom","statute of laborers","revolt","population"]},
      {q:"Explain ONE reason the Ming dynasty stopped Zheng He's voyages after 1433.", model:"Ming officials decided the fleets cost too much because money was needed to defend the northern border against the Mongols, so they ended the voyages.", look:["cost","expensive","mongol","northern border","confucian","defense","defend"]},
      {q:"Identify ONE technology that made Portuguese voyages along the African coast possible.", model:"The caravel, a small ship with a lateen sail, could sail against the wind, and the magnetic compass and astrolabe helped sailors find their position.", look:["caravel","lateen","compass","astrolabe","rudder"]}
    ]}
  ]
});
})();
