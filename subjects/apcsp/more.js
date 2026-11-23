/* AP Computer Science Principles · more practice for every section of Unit 2 (The Internet), the error
   types, and AP exam pseudocode. Unit 2 questions follow the class slides' vocabulary and the AP CSP
   course framework; all questions are original, and every code trace was worked by hand. */
(() => {
const AP = "AP CSP practice", EX = "AP exam style";
const TYPES = ["Syntax error", "Logic error", "Runtime error", "Overflow error"];
const GOAL = g => `Goal: ${g}. Which kind of error is this?`;

Study.extendUnit("apcsp", "u2", {problems(k){
  const mc = (sec, text, opts, why) => k.choice([sec], AP, text, opts, opts[0], [].concat(why), {shuffle:true});
  const num = (sec, text, ans, why) => k.ask([sec], AP, text, [{l:"Answer", t:"num", a:String(ans), ph:"number"}], [].concat(why));
  /* 2.1 layers */
  mc("2.1", "Which layer of the Internet breaks a message into packets and makes sure they all arrive?", ["Transport (TCP)", "Application (HTTP)", "Internet (IP)", "Physical (wires and radio)"], ["TCP, at the transport layer, numbers packets and resends lost ones."]);
  mc("2.1", "Which layer decides where each packet goes next, using addresses?", ["Internet (IP)", "Transport (TCP)", "Application (HTTP)", "Physical"], ["IP addresses packets so routers can forward them."]);
  mc("2.1", "Why is the Internet built in layers?", ["A layer can change without changing the others", "Each added layer makes the data more secure", "Layers make every single connection faster", "Each layer is owned by a different company"], ["Layers hide details from each other (abstraction), so new apps and new cables work with what already exists."]);
  mc("2.1", "Fiber-optic cable, copper wire and Wi-Fi radio waves all belong to which layer?", ["Physical", "Transport", "Internet", "Application"], ["They are the actual hardware that carries bits."]);
  /* 2.2 building a network */
  mc("2.2", "What is a computer network?", ["Connected devices that exchange data", "Any single computer that is connected to a printer", "A program that stores files on one hard drive", "A set of websites created by the same company"], ["A network is interconnected devices exchanging data."]);
  mc("2.2", "Bandwidth is", ["the most data that can be sent per second", "the time it takes one bit to travel from sender to receiver", "the number of devices connected to a network", "the physical length of the cables in a network"], ["Usually measured in bits per second. The time for a bit to travel is latency."]);
  mc("2.2", "Latency is", ["the time data takes to arrive", "the largest file a network can send", "the number of routers on a path", "the cost of building a network"], ["Low latency means a fast response, like in online games."]);
  num("2.2", "A connection has a bandwidth of 50 megabits per second. How many seconds does it take to send a 400-megabit file?", 8, ["400 ÷ 50 = 8 seconds."]);
  /* 2.3 IP and protocols */
  num("2.3", "IPv4 addresses use 32 bits. IPv6 uses 128 bits. How many times longer is an IPv6 address?", 4, ["128 ÷ 32 = 4."]);
  mc("2.3", "Why was IPv6 created?", ["IPv4 could not provide enough unique addresses", "IPv4 addresses were too long to type", "IPv4 did not work over Wi-Fi", "IPv4 could only be used in the United States"], ["32 bits give about 4.3 billion addresses, fewer than the number of devices online. 128 bits give about 3.4 × 10³⁸."]);
  mc("2.3", "How many different values can 8 bits represent?", ["256", "8", "16", "255"], ["2⁸ = 256 values (0 through 255)."]);
  num("2.3", "How many bits are needed to give a unique number to each of 50 devices?", 6, ["5 bits give 32 values: too few.", "6 bits give 64 values: enough."]);
  mc("2.3", "A protocol is", ["agreed rules for how devices communicate", "a physical cable that connects two routers", "a program that blocks viruses", "a unique number given to each device"], ["Open protocols let any manufacturer's devices work together."]);
  mc("2.3", "Why does it matter that Internet protocols are open (not owned by one company)?", ["Anyone can build devices that work with it", "It makes all data on the Internet encrypted", "It guarantees the Internet can never fail", "It stops anyone from making new protocols"], ["Open standards let the Internet grow and stay compatible."]);
  /* 2.4 routers and redundancy */
  mc("2.4", "A system is fault tolerant when it", ["keeps working even if some parts fail", "never has any parts that fail", "repairs broken cables automatically", "refuses data that has errors"], ["Fault tolerance comes from redundancy: extra paths and parts."]);
  mc("2.4", "What is a cost of adding redundancy to a network?", ["Extra devices and links cost money", "It makes the whole network fail more often", "It removes all of the alternate paths", "It makes packets arrive out of order"], ["Redundancy trades extra cost for reliability."]);
  mc("2.4", "Routers on the Internet choose paths for packets", ["dynamically, so routes can change", "once, and every packet always follows that same route", "only after asking the sender's permission", "by sending every packet through one central computer"], ["There's no central control: routers adapt to traffic and failures."]);
  mc("2.4", "Two computers are connected through a single path. One router on that path fails. What happens?", ["They can no longer communicate", "Packets take another path", "The failure is fixed automatically", "Only half the packets are lost"], ["With one path, there's no redundancy, so the connection breaks."]);
  mc("2.4", "Why is the Internet considered scalable?", ["New networks can join without a redesign", "It can only grow to a fixed number of devices", "It runs faster as more people use it", "Each new device needs its own central server"], ["Open protocols and a decentralized design let it keep growing."]);
  /* 2.5 packets, TCP, UDP */
  mc("2.5", "Packets from the same message can arrive", ["out of order, by different paths", "only in the exact order they were sent", "all at once as a single block", "only if they use the same router"], ["TCP reassembles them in order using sequence numbers."]);
  mc("2.5", "Besides part of the data, what does every packet carry?", ["Metadata, like source and destination", "A full copy of the whole message", "The password of the sender", "A list of every router on the Internet"], ["Metadata tells routers where to send it and how to reassemble the message."]);
  mc("2.5", "A video call uses UDP instead of TCP. Why?", ["Speed matters more than every packet", "UDP guarantees every packet arrives", "UDP encrypts the video automatically", "TCP cannot send video data at all"], ["Resending a lost packet would arrive too late to be useful; a small glitch is better than a delay."]);
  mc("2.5", "What does TCP do when a packet goes missing?", ["Asks for the missing packet to be sent again", "Ignores it and moves on", "Cancels the entire message", "Sends the packet to a different computer"], ["TCP is reliable: it detects and resends lost packets."]);
  mc("2.5", "Which task most needs TCP's reliability?", ["Downloading a program file", "Watching a live sports stream", "Playing a fast online game", "A live voice call"], ["A program with even one missing piece won't work. The others can tolerate small losses."]);
  /* 2.6 HTTP, DNS, web */
  mc("2.6", "What does DNS do?", ["Turns domain names into IP addresses", "Encrypts data sent between websites", "Breaks messages into packets", "Decides which router a packet uses next"], ["Computers route by IP address; DNS looks up the number for a name."]);
  mc("2.6", "What is the difference between the Internet and the World Wide Web?", ["The Web is a system of linked pages that runs on the Internet", "They are two names for the same thing", "The Internet runs on top of the Web", "The Web is the cables and the Internet is the websites"], ["The Internet is the network of networks. The Web is one service using it, through HTTP."]);
  mc("2.6", "HTTP is the protocol used to", ["request and send web pages", "assign IP addresses to devices", "find the fastest path for packets", "turn domain names into IP addresses"], ["Your browser sends an HTTP request; the server sends back the page."]);
  mc("2.6", "What does the S in HTTPS add?", ["Encryption of the data in transit", "Speed, by compressing every page", "Search, by indexing the page", "Storage, by saving pages on your device"], ["HTTPS = HTTP secured with encryption."]);
  mc("2.6", "When you type a web address, what usually happens first?", ["A DNS lookup finds the IP address", "The page is downloaded with UDP", "Your computer gets a new IP address", "Every router copies the page"], ["Your device needs the IP address before it can send the HTTP request."]);
  /* 2.7 society */
  mc("2.7", "The digital divide refers to", ["unequal access to computers and the Internet", "the split between the Internet and the Web", "the separation of data into packets", "the boundary between two networks"], ["It can depend on income, location, age and more."]);
  mc("2.7", "Who controls the Internet as a whole?", ["No one; it runs on open standards", "The United States government", "The company that invented TCP/IP", "The largest search engine"], ["Groups like the IETF develop open standards, but no one owns the whole network."]);
  mc("2.7", "Which is an example of the Internet enabling crowdsourcing?", ["Thousands of volunteers classifying galaxy photos online", "One scientist analyzing data alone", "A company keeping its data on one offline computer", "A teacher grading papers by hand"], ["Crowdsourcing gathers help or ideas from many people online."]);
  mc("2.7", "Why does a basic understanding of how the Internet works matter for everyday users?", ["It helps them make informed choices", "It is required before connecting to Wi-Fi", "It makes their own connection run faster", "It lets them avoid using any protocols"], ["From the slides' discussion: knowing the system helps you use it wisely."]);
}});

Study.extendUnit("apcsp", "ps", {problems(k){
  const code = (sec, c, text, opts, why) => k.choice([sec], EX, text, opts, opts[0], [].concat(why), {shuffle:true, code:c});
  const num = (sec, c, text, ans, why) => k.ask([sec], EX, text, [{l:"Answer", t:"num", a:String(ans), ph:"number"}], [].concat(why), {code:c});
  const SHOW = "What is displayed?";
  num("p1", "a ← 2\nb ← a * 3\na ← b - a\nb ← a + b\nDISPLAY(b)", SHOW, 10, ["b = 6, then a = 6 − 2 = 4, then b = 4 + 6 = 10."]);
  num("p1", "x ← 45\ny ← x MOD 7\nz ← x MOD 9\nDISPLAY(y + z)", SHOW, 3, ["45 MOD 7 = 3 (42 + 3).", "45 MOD 9 = 0.", "3 + 0 = 3."]);
  code("p1", "x ← RANDOM(1, 4) * 2\nDISPLAY(x)", "Which value could NOT be displayed?", ["5", "2", "6", "8"], ["RANDOM(1, 4) gives 1–4, so x is 2, 4, 6 or 8: always even."]);
  num("p2", "n ← 12\nIF(n MOD 3 = 0 AND n MOD 4 = 0)\n{\n   n ← n / 12\n}\nELSE\n{\n   n ← n + 1\n}\nDISPLAY(n)", SHOW, 1, ["12 is divisible by 3 and by 4, so n ← 12 / 12 = 1."]);
  code("p2", "a ← TRUE\nb ← FALSE\nIF(NOT(a AND b))\n{\n   DISPLAY(\"one\")\n}\nELSE\n{\n   DISPLAY(\"two\")\n}", SHOW, ["one", "two", "one two", "Nothing"], ["a AND b is false; NOT false is true."]);
  num("p2", "x ← 4\nIF(x > 2)\n{\n   x ← x * 3\n}\nIF(x > 10)\n{\n   x ← x - 10\n}\nELSE\n{\n   x ← x + 10\n}\nDISPLAY(x)", SHOW, 2, ["x becomes 12.", "12 > 10, so x ← 2."]);
  num("p3", "count ← 0\nREPEAT 10 TIMES\n{\n   count ← count + 1\n   IF(count = 4)\n   {\n      count ← count + 3\n   }\n}\nDISPLAY(count)", SHOW, 13, ["After 4 passes count is 4, then jumps to 7.", "6 more passes: 7 + 6 = 13."]);
  num("p3", "x ← 2\ny ← 0\nREPEAT UNTIL(x ≥ 50)\n{\n   x ← x * 3\n   y ← y + 1\n}\nDISPLAY(y)", SHOW, 3, ["x: 2 → 6 → 18 → 54.", "Three passes."]);
  code("p3", "i ← 0\nREPEAT UNTIL(i = 5)\n{\n   i ← i + 1\n   DISPLAY(i)\n}", SHOW, ["1 2 3 4 5", "0 1 2 3 4", "1 2 3 4", "0 1 2 3 4 5"], ["i is increased before it's displayed, and the loop stops after i reaches 5."]);
  num("p4", "list ← [2, 4, 6, 8, 10]\nsum ← 0\ni ← 1\nREPEAT UNTIL(i > LENGTH(list))\n{\n   sum ← sum + list[i]\n   i ← i + 2\n}\nDISPLAY(sum)", SHOW, 18, ["i takes 1, 3, 5: list[1] + list[3] + list[5].", "2 + 6 + 10 = 18."]);
  code("p4", "list ← [7, 3, 9]\nlist[2] ← list[1] + list[3]\nDISPLAY(list)", SHOW, ["[7, 16, 9]", "[7, 12, 9]", "[10, 3, 9]", "[7, 3, 16]"], ["list[1] = 7 and list[3] = 9, so list[2] becomes 16."]);
  num("p4", "nums ← [5, 12, 8, 3]\ncount ← 0\nFOR EACH n IN nums\n{\n   IF(n MOD 2 = 0)\n   {\n      count ← count + 1\n   }\n}\nDISPLAY(count)", SHOW, 2, ["12 and 8 are even."]);
  code("p4", "list ← [1, 2, 3, 4]\nREMOVE(list, 1)\nAPPEND(list, 1)\nDISPLAY(list)", SHOW, ["[2, 3, 4, 1]", "[1, 2, 3, 4]", "[2, 3, 4]", "[1, 2, 3, 4, 1]"], ["REMOVE index 1 deletes the 1; APPEND puts it at the end."]);
  num("p5", "PROCEDURE mystery(a, b)\n{\n   RETURN(a * b - a)\n}\nDISPLAY(mystery(4, mystery(2, 3)))", SHOW, 12, ["Inner: mystery(2, 3) = 6 − 2 = 4.", "Outer: mystery(4, 4) = 16 − 4 = 12."]);
  num("p5", "PROCEDURE countBig(list, limit)\n{\n   c ← 0\n   FOR EACH x IN list\n   {\n      IF(x > limit)\n      {\n         c ← c + 1\n      }\n   }\n   RETURN(c)\n}\nDISPLAY(countBig([3, 9, 12, 5, 10], 8))", SHOW, 3, ["9, 12 and 10 are greater than 8."]);
  code("p5", "PROCEDURE isEven(n)\n{\n   RETURN(n MOD 2 = 0)\n}\nDISPLAY(isEven(7))", SHOW, ["false", "true", "1 (the remainder)", "7 (the input)"], ["7 MOD 2 = 1, and 1 = 0 is false."]);
  code("p6", "PROCEDURE average(list)\n{\n   total ← 0\n   FOR EACH x IN list\n   {\n      total ← total + x\n      RETURN(total / LENGTH(list))\n   }\n}", "The goal is to return the average. What is wrong?", ["RETURN is inside the loop", "total should start at 1, not 0", "It should divide by LENGTH(list) − 1", "Nothing; it works correctly"], ["RETURN ends the procedure immediately on the first pass.", "Move RETURN below the loop."]);
  code("p6", "count ← 0\ni ← 1\nREPEAT UNTIL(i > 10)\n{\n   IF(i MOD 2 = 0)\n   {\n      count ← count + 1\n   }\n}", "The goal is to count even numbers from 1 to 10. What goes wrong?", ["It loops forever", "It counts the odd numbers instead", "It stops after only one pass", "It shows an error for using MOD"], ["Nothing increases i, so i > 10 is never true.", "Add i ← i + 1 inside the loop."]);
}});

Study.extendUnit("apcsp", "py", {problems(k){
  const kind = (sec, goal, c, ans, why) => k.choice([sec], AP, GOAL(goal), [ans].concat(TYPES.filter(t => t !== ans)), ans, [].concat(why), {shuffle:true, code:c});
  kind("e5", "label each circle with its number, 1 to 5", "for i in range(5):\n    Circle(40 + i * 80, 200, 30, fill='lightBlue')\n    Label(i, 40 + i * 80, 200)", "Logic error", ["range(5) gives 0 to 4, so the labels say 0, 1, 2, 3, 4.", "It should be Label(i + 1, …)."]);
  kind("e5", "show the average of three test scores", "a = 90\nb = 80\nc = 70\nLabel((a + b + c) / 2, 200, 200)", "Logic error", ["It divides by 2 instead of 3, so it shows 120 instead of 80."]);
  kind("e5", "draw a circle at the mouse's position", "def onMousePress(x, y):\n    Circle(x, y, 20, fill='red'", "Syntax error", ["The parenthesis after Circle is never closed."]);
  kind("e5", "show how many items are in the shopping list", "items = ['milk', 'eggs', 'bread']\nLabel('Items: ' + len(items), 200, 200)", "Runtime error", ["len gives a number, and a string can't be added to a number (TypeError).", "Use str(len(items))."]);
  kind("e4", "a circle whose radius is 10 raised to the score", "score = 400\nr = 10.0 ** score\nCircle(200, 200, r)", "Overflow error", ["`10.0 ** 400` is larger than the biggest decimal Python can store (about 1.8 × 10³⁰⁸)."]);
  kind("e2", "a red light that turns green when clicked", "light = Circle(200, 200, 50, fill='red')\n\ndef onMousePress(x, y):\n    light.fill = 'red'", "Logic error", ["It runs, but it sets the color to red again instead of green."]);
  kind("e3", "divide the pizza slices evenly among the people", "slices = 8\npeople = 0\nLabel(slices / people, 200, 200)", "Runtime error", ["Dividing by zero crashes when the line runs (ZeroDivisionError)."]);
  kind("e1", "a yellow circle if the score is high", "if score >= 90:\n    Circle(200, 200, 40, fill='yellow')\nelse\n    Circle(200, 200, 40, fill='gray')", "Syntax error", ["else needs a colon: else:"]);
}});
})();
