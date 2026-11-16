/* AP Computer Science Principles: Unit 2, The Internet (Code.org CSP Unit 2)
   From the class slides "CSP2 1-2-3 Internet / Network" (journal pages 1-10): the network warm-up,
   the four internet layers and the postal analogy, the string-network activity, the vocabulary
   (computing device, system, network, path, bandwidth, protocol, IP, router, redundancy, fault tolerance),
   the simulator and router-log activities, and the "why know the Internet" discussion.
   The journal lists packets, TCP, UDP, HTTP, DNS and "WWW vs. the Internet" as unit vocabulary, but the
   slides stop before those lessons, so those two sections follow the AP CSP course framework. */
(() => {
const {ri, pick} = POLY;
const SL = "Unit 2 slides", AP = "AP CSP practice";
const nf = (label, a) => ({l:label, t:"num", a:String(a), ph:"number"});

/* ---- network graphs: six routers A-F laid out like the warm-up slide ---- */
const POS = {A:[34, 98], B:[130, 34], C:[130, 162], D:[222, 98], E:[318, 34], F:[318, 162]};
const WARM = [["A","B",5], ["A","C",2], ["B","C",1], ["B","D",3], ["C","D",3], ["D","E",2], ["D","F",4], ["E","F",5], ["C","F",8]];
function graphSVG(edges, hl = ""){
  const on = new Set(); for (let i = 0; i + 1 < hl.length; i++) on.add([hl[i], hl[i + 1]].sort().join(""));
  const lines = edges.map(([a, b, w]) => {
    const [x1, y1] = POS[a], [x2, y2] = POS[b], mx = (x1 + x2) / 2, my = (y1 + y2) / 2, h = on.has([a, b].sort().join(""));
    return `<line class="edge${h ? " hl" : ""}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>` +
      (w == null ? "" : `<circle class="wbg" cx="${mx}" cy="${my}" r="10"/><text class="wt" x="${mx}" y="${my + 4.5}" text-anchor="middle">${w}</text>`);
  }).join("");
  const nodes = Object.entries(POS).map(([n, [x, y]]) => `<circle class="node" cx="${x}" cy="${y}" r="16"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-weight="800">${n}</text>`).join("");
  return `<svg viewBox="0 0 352 196" role="img" aria-label="A network of six routers, A to F, with a cost on each connection">${lines}${nodes}</svg>`;
}
// cheapest path (Dijkstra) between two routers
function cheapest(edges, from, to){
  const adj = {}; edges.forEach(([a, b, w]) => { (adj[a] = adj[a] || []).push([b, w]); (adj[b] = adj[b] || []).push([a, w]); });
  const dist = {[from]: 0}, prev = {}, done = new Set();
  for (;;){
    let u = null; Object.keys(dist).forEach(n => { if (!done.has(n) && (u === null || dist[n] < dist[u])) u = n; });
    if (u === null || u === to) break; done.add(u);
    (adj[u] || []).forEach(([v, w]) => { if (dist[v] == null || dist[u] + w < dist[v]){ dist[v] = dist[u] + w; prev[v] = u; } });
  }
  let path = to; for (let n = to; prev[n]; n = prev[n]) path = prev[n] + path;
  return {cost: dist[to], path};
}
const STRINGS = "Mr. F's string activity: each string connects exactly two people, so they can talk directly.";

Study.addUnit("apcsp", {
  id: "u2", name: "Unit 2: The Internet", short: "Internet",
  sections: [
    {id:"2.1", name:"2.1 Internet Layers"},
    {id:"2.2", name:"2.2 Building a Network"},
    {id:"2.3", name:"2.3 IP Addresses & Protocols"},
    {id:"2.4", name:"2.4 Routers & Redundancy"},
    {id:"2.5", name:"2.5 Packets, TCP & UDP"},
    {id:"2.6", name:"2.6 HTTP, DNS & the Web"},
    {id:"2.7", name:"2.7 The Internet & Society"}
  ],
  notes: {
    "2.1": [
      {sum:["The Internet works in four layers, from high to low abstraction: Application, Transport, Network, Physical.", "Each layer does one job and relies on the layer below it without needing to know how that layer works.", "This is the same idea as abstraction with data: hide the details you don't need so you can focus on what you do."]},
      {p:"Unit 2's essential question is **How do the layers of the internet impact politics, culture, and the economy?** To answer it, you first need to know what the layers are. When you send a message, it travels down through the layers on your device, across the physical connection, and back up through the layers on the other device."},
      {table:{head:["Layer", "Job", "Examples"], rows:[
        ["4 Application", "Formats data into the web pages and apps people see", "HTTP, HTTPS, DNS, email"],
        ["3 Transport", "Breaks data into numbered packets and puts them back in order", "TCP (and UDP)"],
        ["2 Network", "Gives every device an address and routes packets to it", "IP addresses, routers"],
        ["1 Physical", "Sends the raw 0s and 1s as signals", "Fiber optic (light), Wi-Fi (radio), copper (electricity)"]]}},
      {h:"The postal mail analogy"},
      {table:{head:["Internet layer", "In the mail"], rows:[
        ["Application", "The letter you wrote inside the envelope"],
        ["Transport", "Page numbers (\"Page 1 of 3\") so the reader can tell if a page went missing"],
        ["Network", "The street address and ZIP code on the front"],
        ["Physical", "The mail trucks, planes, roads and postal workers"]]}},
      {h:"Why use layers?"},
      {steps:["**Separation of concerns:** each layer handles one job without worrying about the rest of the system.", "**Hardware independence:** a website works whether it travels over Wi-Fi, copper or an undersea fiber cable.", "**Simpler development:** an app maker can build software without dealing with electrical signals."]},
      {tip:"To place something in a layer, ask what it's doing. Turning bits into light or radio waves is Physical. Deciding where data goes is Network. Splitting and reordering is Transport. Anything a person reads or clicks is Application."},
      {check:[{q:"Wi-Fi carries your data as radio waves. Which layer is that?", a:"Physical."}, {q:"Which layer would still work the same if you switched from Wi-Fi to a cable?", a:"All the layers above Physical. That's the point of layering."}]}
    ],
    "2.2": [
      {sum:["A computing network is a group of connected computing devices that can send or receive data.", "A path is the series of connections from sender to receiver. Bandwidth is how much data can be sent per second.", "Network design is a trade-off between cost (fewer connections), reliability (extra connections) and speed (more direct connections)."]},
      {table:{head:["Term", "Meaning"], rows:[
        ["Computing device", "A machine that can run a program: computers, tablets, servers, routers, smart sensors"],
        ["Computing system", "A group of computing devices and programs working together for a common purpose"],
        ["Computing network", "A group of interconnected computing devices capable of sending or receiving data"],
        ["Path", "The series of connections between devices, starting with a sender and ending with a receiver"],
        ["Bandwidth", "The maximum amount of data that can be sent in a fixed amount of time, usually in bits per second"]]}},
      {h:"The string activity"},
      {p:"Each string is a direct connection between two people. The four challenges show the trade-offs:"},
      {steps:["**Everyone talks directly to everyone:** every pair needs its own string. Fast, and very redundant, but expensive.", "**Fewest strings:** with n people you need only n − 1 (a line or a star). Cheap, but one cut string splits the group.", "**Survive one cut:** a ring (everyone holds two strings) stays connected if any single string breaks.", "**Balance all three:** cost, staying connected when lines break, and speed (direct connections are faster than long indirect paths)."]},
      {h:"Counting connections"},
      {p:"For everyone to connect directly, person 1 needs strings to the other n − 1 people, person 2 needs n − 2 new ones, and so on. That adds to n(n − 1) ÷ 2. Groups of 4, 5, 6 and 7 need 6, 10, 15 and 21 strings; a group of 8 needs 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28."},
      {h:"Cheapest path"},
      {p:"When each connection has a cost, add the costs along a path and compare. In the warm-up, A to E could go ABDE (10), ACDE (7) or ACFE (15), so ACDE is cheapest. The cheapest path with four connections is ACBDE (8)."},
      {h:"Real \"strings\""},
      {p:"Undersea cables connect the continents. Most use **fiber optic** cable, which sends data as pulses of light. Compared with copper, fiber has higher bandwidth, faster transmission, works over longer distances and is more flexible."},
      {check:[{q:"How many strings for 9 people to all connect directly?", a:"9 × 8 ÷ 2 = 36."}, {q:"Why was the simulator's single wire a problem?", a:"Only two people were connected, and if that wire broke there was no other way to communicate."}]}
    ],
    "2.3": [
      {sum:["A protocol is an agreed-upon set of rules that specify the behavior of a system.", "The Internet Protocol (IP) gives every connected device a unique number, its IP address, so data can be sent to it.", "The Internet's protocols are open: anyone can see and use them, so devices from any maker can work together."]},
      {p:"In the address activity, groups had to invent their own rules for sending messages to the right person. The collective rules your class agreed on are exactly what a protocol is."},
      {table:{head:["Term", "Meaning"], rows:[
        ["Protocol", "Agreed-upon rules that specify how a system behaves"],
        ["IP address", "The unique number assigned to each device on the Internet"],
        ["Internet Protocol (IP)", "The protocol for sending data across the Internet that assigns unique numbers (IP addresses) to each connected device"]]}},
      {h:"Would rules work if they were secret?"},
      {p:"No. If only one company knew the rules, only its devices could talk to each other. Because Internet protocols are **open** (published for anyone to use), a phone from one company can load a website hosted on another company's server."},
      {h:"How IP is like mail, and how it isn't"},
      {p:"Like a letter, each message carries the address of where it's going and where it came from. Unlike the mail, the address is a number, the whole trip can take a fraction of a second, and many copies of the data can travel at once by different routes."},
      {h:"How many addresses?"},
      {p:"An IP address is stored in a fixed number of bits. The older IPv4 uses 32 bits, about 4.3 billion addresses, which ran out as more devices came online. IPv6 uses 128 bits. Each extra bit doubles the number of possible addresses: n bits give 2ⁿ addresses."},
      {check:[{q:"Why does each device need a unique IP address?", a:"So data can be delivered to exactly that device, like a unique mailing address."}, {q:"How many addresses can 8 bits represent?", a:"2⁸ = 256."}]}
    ],
    "2.4": [
      {sum:["A router is a type of computer that forwards data across a network.", "Redundancy means including extra components so a system keeps working even if some fail. Extra paths make the Internet redundant.", "A fault-tolerant system keeps working when individual parts fail. Parts of complex systems fail at unexpected times, often in groups."]},
      {p:"In the router simulator, your message didn't go straight to its receiver. It passed through one or more routers, and the router logs recorded each step."},
      {h:"What the router logs showed"},
      {steps:["The same message can appear several times in the logs, because each router it passes through records it.", "Three messages to the same person didn't always take the same path. Routers choose a path for each piece of data based on the network at that moment.", "If a router or connection goes down, data can be sent around it on another path."]},
      {table:{head:["Term", "Meaning"], rows:[
        ["Router", "A type of computer that forwards data across a network"],
        ["Redundancy", "The inclusion of extra components so that a system can continue to work even if individual components fail"],
        ["Fault tolerant", "Can continue to function even in the event of individual component failures"]]}},
      {ex:{q:"In the warm-up network, the C–D connection breaks. Can A still reach E?", a:["Yes. A–B–D–E and A–C–F–E don't use C–D.", "That's redundancy: more than one path between the same two devices."]}},
      {warn:"Redundancy costs money: every extra connection is more cable and more equipment. The Internet accepts that cost because a network that fails when one line breaks isn't usable."},
      {check:[{q:"What makes a network fault tolerant?", a:"Redundant paths, so it keeps working when a connection or router fails."}]}
    ],
    "2.5": [
      {sum:["Data sent over the Internet is broken into small chunks called packets. Each packet has data plus metadata, such as where it's from, where it's going and its place in the order.", "Packets can take different paths, arrive out of order, or not arrive at all.", "TCP numbers the packets, puts them back in order and asks for any missing ones to be resent. UDP sends packets without checking, which is faster but less reliable."]},
      {p:"The journal's essential question for this lesson: **How do the protocols of the internet affect the reliability of sending data?** Packets are why the Internet can share its connections among millions of users at once: no one message ties up a line."},
      {table:{head:["", "TCP", "UDP"], rows:[
        ["Puts packets in order", "Yes", "No"],
        ["Resends lost packets", "Yes", "No"],
        ["Speed", "Slower (it checks)", "Faster"],
        ["Good for", "Web pages, email, files: every bit must arrive", "Live video, voice calls, games: speed matters more than a lost packet"]]}},
      {ex:{q:"A 3-packet message arrives as packets 1, 3. What does TCP do?", a:["It sees packet 2 is missing from the numbering.", "It asks the sender to resend packet 2, then reassembles 1, 2, 3."]}},
      {p:"This is the Transport layer at work, and it connects to the postal analogy: the page numbers on a long letter let the reader notice a missing page."},
      {check:[{q:"Why can packets from one message arrive out of order?", a:"Each one may take a different path through the network, and some paths are faster than others."}]}
    ],
    "2.6": [
      {sum:["The Internet is the worldwide network of networks: the hardware and protocols that move data.", "The World Wide Web is a system of linked pages and files that you reach using the Internet. It's one of many things that run on the Internet, alongside email, games and video calls.", "HTTP is the protocol the Web uses to request and send pages. DNS translates domain names like example.com into IP addresses."]},
      {p:"Your journal saves page 10 for **Application Layer: HTTP & HTML** and the question **What is the difference between the World Wide Web and the Internet?** People use the words interchangeably, but they aren't the same thing."},
      {h:"What happens when you type a web address"},
      {steps:["Your browser asks **DNS** for the IP address that belongs to the domain name.", "Using that address, it sends an **HTTP** request to the web server.", "The server sends back the page (written in **HTML**), broken into packets that travel by IP and are reassembled by TCP.", "Your browser displays it. HTTPS is the same thing with the data encrypted."]},
      {p:"DNS is like a phone book for the Internet: people remember names, computers need numbers. It's spread across many servers worldwide, so no single computer has to hold every name."},
      {check:[{q:"Is email part of the World Wide Web?", a:"No. Email uses the Internet but its own protocols, not the Web."}, {q:"Which layer do HTTP and DNS belong to?", a:"Application."}]}
    ],
    "2.7": [
      {sum:["Understanding how the Internet works lets you form an informed opinion about the issues it raises.", "Open protocols let anyone build on the Internet, which helps innovation but also lets people take advantage of it.", "Big questions include net neutrality, censorship and equal access (the digital divide)."]},
      {p:"The Unit 2 project asks you to research a societal issue the Internet raises. The slides list three to start from."},
      {table:{head:["Issue", "What it's about"], rows:[
        ["Net neutrality", "Whether Internet providers must treat all data the same, or may speed up, slow down or charge more for some kinds"],
        ["Censorship", "Whether and how governments or companies block or filter what people can see online"],
        ["Open protocols", "Anyone can use the Internet's rules, which makes it easy to build new things, and also easy to misuse"],
        ["Equal access", "The digital divide: differences in who can get online, because of cost, location or skills"]]}},
      {p:"Each of these comes with **unintended consequences**: effects nobody planned when the technology was designed. The Internet's designers made it open so universities could share data; they didn't plan for spam or misinformation."},
      {tip:"For the project, describe the issue fairly from more than one side, and connect it to a layer or protocol. Net neutrality, for example, is about how routers treat packets."},
      {check:[{q:"What is the digital divide?", a:"The gap between people who have access to the Internet and computing devices and people who don't."}]}
    ]
  },
  problems(k){
    const mc = (sec, src, text, opts, why, o = {}) => k.choice([sec], src, text, opts, opts[0], [].concat(why), Object.assign({shuffle:true}, o));
    const num = (sec, src, text, ans, why, label) => k.ask([sec], src, text, [nf(label || "Answer", ans)], [].concat(why));
    const LAYERS = ["Application", "Transport", "Network", "Physical"];
    const lay = (sec, src, text, ans, why) => mc(sec, src, text, [ans].concat(LAYERS.filter(x => x !== ans)), why);

    /* ---- 2.1 layers ---- */
    mc("2.1", SL, "Which list puts the internet layers in order from highest abstraction to lowest?", ["Application, Transport, Network, Physical", "Physical, Network, Transport, Application", "Application, Network, Transport, Physical", "Transport, Application, Physical, Network"], ["Highest abstraction is what people see (Application); lowest is the raw signals (Physical)."]);
    lay("2.1", SL, "Which layer breaks a message into numbered packets and reassembles them in order?", "Transport", ["TCP, at the Transport layer, chops messages into numbered packets and guarantees the order."]);
    lay("2.1", SL, "Which layer assigns IP addresses and routes packets across routers?", "Network", ["Addressing and routing happen at the Network layer."]);
    lay("2.1", SL, "Which layer turns digital data into light pulses, radio waves or electricity?", "Physical", ["Fiber, Wi-Fi and copper carry the raw 0s and 1s: the Physical layer."]);
    lay("2.1", SL, "HTTP, HTTPS, DNS and email belong to which layer?", "Application", ["These format data into the pages and apps people use."]);
    lay("2.1", SL, "In the postal analogy, the street address and ZIP code on the envelope match which layer?", "Network", ["The address tells the system where to deliver, like an IP address."]);
    lay("2.1", SL, "In the postal analogy, writing \"Page 1 of 3\" on each page matches which layer?", "Transport", ["Numbering lets the receiver notice a missing piece, which is what TCP does with packets."]);
    lay("2.1", SL, "In the postal analogy, the mail trucks, planes and roads match which layer?", "Physical", ["They physically carry the message."]);
    mc("2.1", SL, "A website loads the same way whether the data travels over Wi-Fi, copper or an undersea fiber cable. Which benefit of layers does this show?", ["Hardware independence", "Separation of concerns", "Simpler development", "More bandwidth"], ["The upper layers don't depend on which physical hardware carries the bits."]);
    mc("2.1", SL, "An app developer builds a chat app without writing any code about electrical signals. Which benefit of layers does this show most directly?", ["Simpler development", "Hardware independence", "Fault tolerance", "Redundancy"], ["The developer works at the Application layer and lets the lower layers handle the rest."]);
    mc("2.1", SL, "How are the internet layers like abstraction with data?", ["Each level hides details the level above doesn't need", "Each level stores its own full copy of the same data to be safe", "Each level adds more bits so the data is more precise", "Each level can only be used by one kind of device"], ["Like data abstraction, each layer exposes only what the next layer needs."]);

    /* ---- 2.2 networks ---- */
    const warm = graphSVG(WARM);
    mc("2.2", SL, "In the warm-up network, which of these paths from A to E is cheapest?", ["ACDE", "ABDE", "ACFE", "ABCDE"], ["ABDE = 5 + 3 + 2 = 10", "ACDE = 2 + 3 + 2 = 7", "ACFE = 2 + 8 + 5 = 15", "ABCDE = 5 + 1 + 3 + 2 = 11"], {svg: warm});
    num("2.2", SL, "In the warm-up network, what is the cost of the cheapest path from A to E that uses exactly four connections?", 8, ["ACBDE = 2 + 1 + 3 + 2 = 8"], "Cost");
    num("2.2", SL, "What is the total cost of the path A, B, D, F in the warm-up network?", 12, ["5 + 3 + 4 = 12"], "Cost");
    mc("2.2", AP, "In the warm-up network, which connection could be removed without changing the cheapest cost from A to E?", ["C–F", "C–D", "D–E", "A–C"], ["The cheapest path is ACDE (7). Removing A–C, C–D or D–E would break it.", "C–F isn't on it."], {svg: warm});
    num("2.2", SL, STRINGS + " How many strings does a group of 8 need so that everyone can talk directly to everyone else?", 28, ["7 + 6 + 5 + 4 + 3 + 2 + 1 = 28", "Or 8 × 7 ÷ 2 = 28"], "Strings");
    num("2.2", SL, STRINGS + " What is the fewest strings that keeps a group of 6 connected (everyone can reach everyone, directly or through others)?", 5, ["A line or a star of 6 people uses 6 − 1 = 5 strings."], "Strings");
    mc("2.2", SL, STRINGS + " Which design keeps a group of 5 connected even if any one string is cut, using the fewest strings?", ["A ring: each person holds two strings, 5 strings total", "A line: people hold hands in a row, 4 strings total", "A star: one person holds a string to each other person", "Everyone connected to everyone, 10 strings total"], ["A ring has two ways around, so one cut leaves a line.", "A line or star splits if the wrong string is cut. The full mesh works but uses twice as many strings."]);
    mc("2.2", SL, "In the string activity, why are direct connections between two people better than long indirect paths?", ["They are faster, since data passes through fewer devices", "They are cheaper, since they use fewer strings in the network overall", "They are always more secure than any indirect path", "They let more people join without adding strings"], ["Mr. F's fourth guideline: direct connections are faster than long paths with indirect connections."]);
    mc("2.2", SL, "Which term means \"the maximum amount of data that can be sent in a fixed amount of time\"?", ["Bandwidth", "Path", "Protocol", "Redundancy"], ["Bandwidth is usually measured in bits per second."]);
    mc("2.2", SL, "Which term means \"a group of computing devices and programs working together for a common purpose\"?", ["Computing system", "Computing network", "Computing device", "Path"], ["A system is devices plus programs with a shared purpose. A network is devices that send or receive data."]);
    mc("2.2", SL, "Which of these is NOT a computing device?", ["A paper map", "A router", "A smart sensor", "A server"], ["A computing device is a machine that can run a program."]);
    mc("2.2", SL, "Which is an advantage of fiber optic cable over copper?", ["It carries more data over longer distances", "It is easier to splice without any special tools", "It sends data as electricity, which is faster", "It doesn't need any undersea connections"], ["Fiber: higher bandwidth, faster, longer distances, more flexible. It uses light, not electricity."]);
    num("2.2", AP, "A connection has a bandwidth of 8 megabits per second. How many seconds does it take to send a 40-megabit file?", 5, ["40 ÷ 8 = 5 seconds"], "Seconds");
    mc("2.2", SL, "In the first simulator, you were connected to one other person by a single wire. What was the biggest problem with that setup?", ["If the wire failed, there was no other way to talk", "The wire had far too much bandwidth for sending such a short message", "Messages had to be broken into many numbered packets", "Each person needed a different IP address protocol"], ["One connection, no backup: no redundancy."]);

    /* ---- 2.3 IP and protocols ---- */
    mc("2.3", SL, "What is a protocol?", ["An agreed-upon set of rules that specify the behavior of a system", "A unique number that is assigned to each device on the Internet", "A type of computer that forwards data along across a network", "The maximum amount of data sent in a fixed time"], ["The other choices define an IP address, a router and bandwidth."]);
    mc("2.3", SL, "What is an IP address?", ["A unique number assigned to each device on the Internet", "The name of a website, such as example.com or school.org", "A set of rules that every router must follow", "The path a message takes through the routers"], ["The name of a website is a domain name; DNS turns it into an IP address."]);
    mc("2.3", SL, "Why are the Internet's protocols open (public) and not secret?", ["So devices made by anyone can communicate with each other", "So that no one can ever send data to the wrong address", "So that each company can charge other companies for using the rules", "So that data never has to be broken into packets"], ["Secret rules would only work for whoever knew them. Open rules let any device join."]);
    mc("2.3", SL, "In the address activity, your group agreed on collective rules for sending messages. What Internet idea do those rules represent?", ["A protocol", "A router", "Bandwidth", "Redundancy"], ["Shared, agreed-upon rules are a protocol: IP is the Internet Protocol."]);
    mc("2.3", SL, "How is sending data with IP addresses most like sending a letter?", ["Each message carries the address of where it's going", "Each message is carried by a truck along one road", "Each message must be written out by hand on a sheet of paper", "Each message is always delivered the next day"], ["Both use a destination address. IP is much faster and can use many routes at once."]);
    num("2.3", AP, "An address is stored in 8 bits. How many different addresses can it represent?", 256, ["Each bit doubles the count: 2⁸ = 256"], "Addresses");
    mc("2.3", AP, "An address system goes from 16 bits to 17 bits. What happens to the number of possible addresses?", ["It doubles", "It increases by one", "It increases by 17", "It stays the same"], ["n bits give 2ⁿ addresses, so one more bit doubles it."]);
    mc("2.3", AP, "The world began running out of IPv4 addresses. What is the main reason the newer IPv6 solves this?", ["It uses more bits, so there are far more addresses", "It reuses the same address for every single device in a home or school", "It removes the need for routers to forward any packets", "It stores each address as a word instead of a number"], ["IPv4 uses 32 bits (about 4.3 billion addresses); IPv6 uses 128 bits."]);

    /* ---- 2.4 routers and redundancy ---- */
    mc("2.4", SL, "What is a router?", ["A type of computer that forwards data across a network", "A cable that carries data from place to place as pulses of light", "A rule that says how data should be formatted", "A program that displays web pages for a user"], ["Routers pass data along toward its destination."]);
    mc("2.4", SL, "Which term means \"the inclusion of extra components so a system can keep working even if individual components fail\"?", ["Redundancy", "Bandwidth", "Abstraction", "Protocol"], ["Extra paths and routers are redundant on purpose."]);
    mc("2.4", SL, "What does it mean for a system to be fault tolerant?", ["It keeps working even when individual parts fail", "It never has any parts that fail at all", "It shuts itself down safely whenever a single part fails", "It finds and fixes every bug in its own code"], ["Fault tolerance doesn't mean nothing fails; it means the system survives failures."]);
    mc("2.4", SL, "In the router simulator, why did some messages appear several times in the router logs?", ["Each router the message passed through recorded it", "The sender pressed send more than one time", "The network made extra copies of the message to be safe", "Routers repeat every message to all devices"], ["A message hops through routers, and each one logs it."]);
    mc("2.4", SL, "You sent three separate messages to the same person, then checked the router logs. What were you most likely to find?", ["The messages did not all take the same path", "The messages all took exactly the same path", "Only the first message reached the person", "The messages arrived combined into one"], ["Routers pick a path for each piece of data based on the network at that moment."]);
    mc("2.4", SL, "The slides warn that elements of complex systems like a computer network fail at unexpected times, often in groups. What does this suggest about designing a network?", ["It needs more than one path between devices", "It needs exactly one path between devices", "It should use only one very reliable router", "It should be as small as it possibly can be"], ["If parts fail together, one backup may not be enough. Redundant paths keep data moving."]);
    mc("2.4", AP, "In the warm-up network, the connection between C and D breaks. Which statement is true?", ["A can still reach E, because other paths exist", "A can no longer reach E by any path at all", "Only router B can still reach router E after the break", "The cheapest path from A to E stays the same"], ["A–B–D–E and A–C–F–E don't use C–D.", "The cheapest path was ACDE, so its cost goes up (ACBDE costs 8)."], {svg: graphSVG(WARM.filter(e => e[0] + e[1] !== "CD"))});
    num("2.4", AP, "After the C–D connection breaks, what is the new cheapest cost from A to E?", 8, ["ACBDE = 2 + 1 + 3 + 2 = 8", "ABDE = 10 and ACFE = 15 cost more."], "Cost");
    mc("2.4", AP, "What is the main trade-off of adding redundancy to a network?", ["It costs more, but the network survives failures", "It is cheaper, but the network is less reliable", "It is faster, but every message takes one path", "It uses less hardware, but every connection needs more bandwidth"], ["Extra connections cost money; in return, a broken line doesn't cut anyone off."]);

    /* ---- 2.5 packets ---- */
    mc("2.5", AP, "Which statement about packets is true?", ["Packets from one message can arrive out of order", "Packets always follow the same path through a network", "Each packet holds a complete copy of the message", "Packets only travel through the Physical layer"], ["Packets can take different paths, so they may arrive out of order or not at all."]);
    mc("2.5", AP, "Besides the data itself, what does a packet contain?", ["Metadata such as the source, destination and order", "A copy of every other packet in the message", "The full web page that the data came from", "The bandwidth of every router along the path it takes"], ["The metadata lets routers deliver packets and lets the receiver put them in order."]);
    mc("2.5", AP, "A message is sent as packets 1 through 5. Packet 4 is lost. What does TCP do?", ["Notices the gap and asks for packet 4 to be resent", "Delivers packets 1, 2, 3 and 5 as a full message", "Discards the whole message and starts over again", "Sends packet 5 a second time, in place of the missing packet 4"], ["TCP numbers packets, so it can detect a missing one and request it again."]);
    mc("2.5", AP, "Which is the best use for UDP instead of TCP?", ["A live video call, where speed matters more than a lost packet", "Downloading a bank statement, where every bit must arrive", "Sending an email with an important attachment that must arrive whole", "Loading a web page that must look exactly right"], ["UDP skips the checking, so it's faster. A dropped video frame is fine; a missing digit on a bank statement is not."]);
    mc("2.5", AP, "Why does sending data in packets help the Internet handle so many users at once?", ["Many users' packets can share the same connections", "Each user gets a private cable that runs to every single website", "Packets never need to be checked for any errors", "Packets let data skip the routers along the way"], ["No single message ties up a connection, so lines are shared."]);
    num("2.5", AP, "A 2,000-byte message is split into packets that each carry 300 bytes of data. How many packets are needed?", 7, ["2,000 ÷ 300 ≈ 6.7", "You can't send part of a packet, so round up: 7."], "Packets");
    lay("2.5", AP, "TCP and UDP both belong to which internet layer?", "Transport", ["They handle how packets are sent and reassembled."]);
    mc("2.5", SL, "The unit asks: how do the protocols of the internet affect the reliability of sending data? Which answer fits best?", ["TCP makes delivery reliable by reordering and resending packets", "IP makes delivery reliable by sending one big chunk of data", "DNS makes delivery reliable by checking every packet", "HTTP makes delivery reliable by choosing which path the routers use"], ["Reliability comes from TCP's numbering, reordering and resending."]);

    /* ---- 2.6 web ---- */
    mc("2.6", AP, "What is the difference between the Internet and the World Wide Web?", ["The Internet is the network; the Web is linked pages reached through it", "The Web is the network; the Internet is the pages reached through it", "They are two names for exactly the same thing", "The Internet is wireless only, while the Web always runs over cables"], ["The Web is one service that runs on the Internet."]);
    mc("2.6", AP, "What does DNS do?", ["Translates domain names into IP addresses", "Breaks messages into numbered packets", "Encrypts data sent between two devices", "Sends the raw bits as pulses of light"], ["DNS is like a phone book: names in, numbers out."]);
    mc("2.6", AP, "Which protocol does a browser use to request a web page from a server?", ["HTTP", "DNS", "UDP", "TCP/IP"], ["HTTP is the protocol of the Web. HTTPS is the encrypted version."]);
    mc("2.6", AP, "Which of these uses the Internet but is NOT part of the World Wide Web?", ["Email", "A news website", "An online encyclopedia page", "A page of linked recipes"], ["Email has its own protocols. The others are web pages."]);
    mc("2.6", AP, "You type a web address into a browser. What usually happens first?", ["The browser asks DNS for the IP address", "The server sends the page as packets", "TCP reassembles all the packets of the page in order", "The browser displays the finished page"], ["It needs the IP address before it can send the HTTP request."]);
    mc("2.6", AP, "How is HTTPS different from HTTP?", ["HTTPS encrypts the data sent between browser and server", "HTTPS sends data without breaking it into packets", "HTTPS finds IP addresses instead of the DNS servers", "HTTPS only works on a wired network, never on a wireless one"], ["The S stands for secure: the data is encrypted."]);
    lay("2.6", SL, "HTTP and DNS belong to which internet layer?", "Application", ["They're part of the top layer, closest to what people use."]);

    /* ---- 2.7 society ---- */
    mc("2.7", SL, "What is net neutrality about?", ["Whether providers must treat all data the same", "Whether governments are allowed to block certain websites", "Whether every home has access to the Internet", "Whether protocols should be public or secret"], ["The others describe censorship, the digital divide and open protocols."]);
    mc("2.7", AP, "What is the digital divide?", ["Differences in who can get online and use computers", "The split between the Internet and the World Wide Web", "The gap in speed between fiber optic cables and copper cables", "The line between the Transport and Network layers"], ["It can come from cost, location, age, skills and more."]);
    mc("2.7", SL, "The slides say \"people take advantage\" of open protocols. Which is the best example?", ["Anyone can build a site that spreads spam or scams", "Only one company can make devices that use the Internet", "Routers refuse to forward data from new devices", "Packets from open protocols can never arrive out of order"], ["Openness lets anyone build on the Internet, including people who misuse it."]);
    mc("2.7", SL, "Why does the class say you should know the basics of how the Internet works?", ["To form an informed opinion about issues like censorship", "To be able to repair undersea cables when they break", "To memorize the IP address of every major website", "To build a faster replacement for the Internet one day"], ["From the slides: know the basics to understand the issues and form an informed opinion."]);
    mc("2.7", AP, "An effect of a technology that its designers didn't plan is called", ["an unintended consequence", "a fault-tolerant system", "a protocol violation", "an extra redundant connection"], ["The Internet was built to share research; spam and misinformation were unintended."]);
  },
  drills: {
    // cheapest path on random costs, or strings for a full mesh
    "2.2": k => Math.random() < 0.6 ? pathDrill() : stringDrill(),
    // n bits → 2^n addresses
    "2.3": k => { const n = ri(2, 12);
      return {src:"Random drill", kind:"ask", text:`An address is stored in ${n} bits. How many different addresses can it represent?`, fields:[nf("Addresses", 2 ** n)],
        steps:[`Each bit doubles the count: 2 to the power ${n}.`, `2^${n} = ${2 ** n}`]}; },
    // packets needed
    "2.5": k => { const size = pick([300, 500, 800, 1000, 1200, 1500]), msg = size * ri(2, 9) + pick([0, ri(1, size - 1)]), ans = Math.ceil(msg / size);
      return {src:"Random drill", kind:"ask", text:`A ${msg.toLocaleString("en-US")}-byte message is split into packets that each carry ${size} bytes of data. How many packets are needed?`, fields:[nf("Packets", ans)],
        steps:[`${msg.toLocaleString("en-US")} ÷ ${size} = ${(msg / size).toFixed(2).replace(/\.00$/, "")}`, msg % size ? `Round up, since part of a packet is still a packet: ${ans}.` : `It divides evenly: ${ans}.`]}; }
  }
});

function pathDrill(){
  const edges = WARM.map(([a, b]) => [a, b, ri(1, 9)]);
  const [s, t] = pick([["A","E"], ["A","F"], ["B","F"], ["A","D"], ["B","E"], ["C","E"]]), best = cheapest(edges, s, t);
  return {src:"Random drill", kind:"ask", svg: graphSVG(edges), text:`What is the cost of the cheapest path from ${s} to ${t}?`, fields:[nf("Cost", best.cost)],
    steps:["Try the short routes and add the costs along each one.", `The cheapest is ${best.path.split("").join("–")}, costing ${best.cost}.`]};
}
function stringDrill(){
  const n = ri(3, 14), ans = n * (n - 1) / 2;
  return {src:"Random drill", kind:"ask", text:`${STRINGS} How many strings does a group of ${n} need so everyone can talk directly to everyone else?`, fields:[nf("Strings", ans)],
    steps:[`Each of the ${n} people connects to ${n - 1} others, and each string is shared by two people.`, `${n} × ${n - 1} ÷ 2 = ${ans}`]};
}
})();
