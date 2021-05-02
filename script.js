"use strict";

/***** DICTIONARY *****/
let dictionary = []
dictionary['en_US'] = {
	gs:"Great Sword",
	ls:"Long Sword",
	sns:"Sword & Shield",
	db:"Dual Blades",
	ha:"Hammer",
	hh:"Hunting Horn",
	la:"Lance",
	gl:"Gunlance",
	sa:"Switch Axe",
	ig:"Insect Glaive",
	cb:"Charge Blade",
	lbg:"Light Bowgun",
	hbg:"Heavy Bowgun",
	bow:"Bow"
}
dictionary = dictionary['en_US']


/***** WEAPONS *****/
let WeaponList = []
class Weapon{
	constructor(id, name=id, vanity=""){
		this.id = id
		this.name = name;
		this.vanity = vanity ? vanity : name;
	}
}
WeaponList.push(
	new Weapon("gs", dictionary.gs),
	new Weapon("ls", dictionary.ls),
	new Weapon("sns", dictionary.sns),
	new Weapon("db", dictionary.db),
	new Weapon("ha", dictionary.ha),
	new Weapon("hh", dictionary.hh),
	new Weapon("la", dictionary.la),
	new Weapon("gl", dictionary.gl),
	new Weapon("sa", dictionary.sa),
	new Weapon("ig", dictionary.ig),
	new Weapon("cb", dictionary.cb),
	new Weapon("lbg", dictionary.lbg),
	new Weapon("hbg", dictionary.hbg),
	new Weapon("bow", dictionary.bow)
)
//console.log("WeaponList = ");
//console.log(WeaponList);




/***** QUESTS *****/
class Quest{
	constructor(id, name, rank, star, monsters, type = "hunting", keyQuest = true){
		const questTypes = ["hunting","slaying","capture","endurance"]
		this.id = id;
		this.name = name;
		this.vanity = name;
		this.rank = rank;
		this.star = star;
		this.monsters = monsters;
		this.type = questTypes.includes(type) ? type : "hunting";
		this.keyQuest = keyQuest;
	}
}
let QuestList = [];
QuestList.push(
	//new Quest(id, "name", "rank", star, "monsters", "type", keyQuestTF)
new Quest(102, "Roly-poly Lanterns", "lr", 1, "", "gathering", true),
new Quest(103, "Fungal Frustrations", "lr", 1, "", "gathering", true),
new Quest(104, "Unpious Peons", "lr", 1, "", "slaying", true),
new Quest(105, "Help with Maintenance", "lr", 1, "", "slaying", false),
new Quest(203, "Grizzly Glutton", "lr", 2, "arzuros", "hunting", true),
new Quest(204, "Plump and Juicy", "lr", 2, "", "gathering", true),
new Quest(205, "A Frosty Paradise", "lr", 2, "", "slaying", true),
new Quest(206, "Out Cold", "lr", 2, "greatbaggi", "hunting", true),
new Quest(207, "Rabid Rabbit", "lr", 2, "lagombi", "hunting", true),
new Quest(202, "Great Izuchi, Great Pain", "lr", 2, "greatizuchi", "hunting", false),
new Quest(208, "Case of the Creepy Crawlies", "lr", 2, "", "slaying", false),
new Quest(209, "Hmmm, Not So Tasty...", "lr", 2, "", "gathering", false),
new Quest(304, "The Rampage Approaches", "lr", 3, "", "rampage", true),
new Quest(305, "Can't Stomach the Thought", "lr", 3, "tetranadon", "hunting", true),
new Quest(306, "Walking on Eggshells", "lr", 3, "kuluyaku", "hunting", true),
new Quest(307, "Fightin' Dirty", "lr", 3, "barroth", "hunting", true),
new Quest(308, "Obnoxious Lord, Noxious Monster", "lr", 3, "greatwroggi", "hunting", true),
new Quest(309, "Spongy Oasis", "lr", 3, "", "hunting", true),
new Quest(303, "Feathered Frenzy", "lr", 3, "aknosom", "hunting", false),
new Quest(310, "Supply Run", "lr", 3, "", "gathering", false),
new Quest(311, "Faceless Foe", "lr", 3, "khezu", "hunting", false),
new Quest(312, "The Cactus Diet", "lr", 3, "", "gathering", false),
new Quest(313, "A Sandy Cabal", "lr", 3, "", "slaying", false),
new Quest(314, "Breath of the Past", "lr", 3, "", "gathering", false),
new Quest(315, "Ladies of the Lake", "lr", 3, "", "slaying", false),
new Quest(403, "Special License Test 1", "lr", 4, "aknosom,rathian", "hunting", false),
new Quest(404, "Infernal Lacrimosa", "lr", 4, "somnacanth", "hunting", true),
new Quest(405, "Raging White-out", "lr", 4, "barioth", "hunting", true),
new Quest(406, "The Queen's Procession", "lr", 4, "rathian", "hunting", true),
new Quest(407, "Streaking Shadow", "lr", 4, "tobikadachi", "hunting", true),
new Quest(408, "A Song of Red and Fire", "lr", 4, "volvidon", "hunting", true),
new Quest(409, "Off Your Rocker", "lr", 4, "basarios", "hunting", true),
new Quest(402, "Monkey Wrench in your Plans", "lr", 4, "bishaten", "hunting", false),
new Quest(410, "Getting Back the Groceries", "lr", 4, "", "gathering", false),
new Quest(411, "A Poisonous Project", "lr", 4, "pukeipukei", "hunting", false),
new Quest(412, "Deliver the Liver", "lr", 4, "", "gathering", false),
new Quest(413, "So Hot, It Melts Iron", "lr", 4, "", "gathering", false),
new Quest(414, "THE BEST Quest", "lr", 4, "", "slaying", false),
new Quest(415, "Third Wheel", "lr", 4, "arzuros,tetranadon", "arena", false),
new Quest(502, "Special License Test 2", "lr", 5, "magnamalo,bishaten", "hunting", false),
new Quest(503, "Wind Speed Wyvern", "lr", 5, "nargacuga", "hunting", true),
new Quest(504, "Electrifying Epiphany", "lr", 5, "zinogre", "hunting", true),
new Quest(505, "Nocturnal Tracker", "lr", 5, "anjanath", "hunting", true),
new Quest(506, "Waltzing by Moonlight", "lr", 5, "mizutsune", "hunting", true),
new Quest(507, "Rathalos Alert!", "lr", 5, "rathalos", "hunting", true),
new Quest(501, "Comeuppance", "lr", 5, "magnamalo", "hunting", false),
new Quest(508, "The Secret Ingredient", "lr", 5, "somnacanth", "capture", false),
new Quest(509, "BZZZZZ or ZZZZzzzz", "lr", 5, "khezu,somnacanth", "hunting", false),
new Quest(510, "Nosey Nuisances", "lr", 5, "kuluyaku,anjanath", "hunting", false),
new Quest(511, "The Hottest Around", "lr", 5, "tetranadon,volvidon", "hunting", false),
new Quest(602, "Hermit of the Swamp", "lr", 6, "almudron", "hunting", false),
new Quest(603, "Advanced: The Veterans Gala", "lr", 6, "rajang,magnamalo", "arena", false),
new Quest(604, "Abominable Snow-beast", "lr", 6, "gossharag", "hunting", false),
new Quest(605, "Thundering Voice", "lr", 6, "tigrex", "hunting", false),
new Quest(606, "Twisted Desire", "lr", 6, "diablos", "hunting", false),
new Quest(607, "A Test of Courage", "lr", 6, "magnamalo,zinogre", "hunting", false),
new Quest(608, "Like a Flash of Lightning", "lr", 6, "tobikadachi,mizutsune", "hunting", false),
new Quest(609, "King of the Sky, Bane of the Land", "lr", 6, "rathalos,tigrex", "hunting", false),
new Quest(10104, "Shady Monster", "hr", 1, "aknosom", "hunting", false),
new Quest(10105, "Tired and Feathered", "hr", 1, "kuluyaku", "hunting", false),
new Quest(10106, "Jumped in the Frost Islands", "hr", 1, "greatizuchi", "hunting", false),
new Quest(10107, "No Cure for the Common Baggi", "hr", 1, "greatbaggi", "hunting", false),
new Quest(10108, "A Snowball's Chance...", "hr", 1, "lagombi", "hunting", false),
new Quest(10109, "Wroggi Place, Wroggi Time", "hr", 1, "greatwroggi", "hunting", false),
new Quest(10110, "A Grizzly Encounter", "hr", 1, "arzuros", "hunting", false),
new Quest(10111, "Off the Beaten Path", "hr", 1, "", "slaying", false),
new Quest(10112, "Hot Topic Hooligans", "hr", 1, "", "slaying", false),
new Quest(10204, "I Want Off This Ride", "hr", 2, "bishaten", "hunting", false),
new Quest(10205, "Way of the Pukei", "hr", 2, "pukeipukei", "hunting", false),
new Quest(10206, "The Flooding Flooded Forest", "hr", 2, "royalludroth", "hunting", false),
new Quest(10207, "So Muddy Hardheaded!", "hr", 2, "barroth", "hunting", false),
new Quest(10208, "A Pale Shadow", "hr", 2, "khezu", "hunting", false),
new Quest(10209, "Reinventing the Wheel", "hr", 2, "volvidon", "hunting", false),
new Quest(10210, "Blasted Basarios!", "hr", 2, "basarios", "hunting", false),
new Quest(10211, "The Path to Royalty", "hr", 2, "rathian", "hunting", false),
new Quest(10203, "Dead Ringer", "hr", 2, "tetranadon", "hunting", false),
new Quest(10212, "Dawn of the Kestodon", "hr", 2, "", "slaying", false),
new Quest(10213, "Hide, Hide, Hide!", "hr", 2, "", "slaying", false),
new Quest(10214, "Bouncing Brawlers", "hr", 2, "lagombi,tetranadon", "slaying", false),
new Quest(10215, "Fried and Baptized", "hr", 2, "royalludroth,rathian", "slaying", false),
new Quest(10303, "Beckoning Slumber", "hr", 3, "somnacanth", "hunting", false),
new Quest(10304, "The Blizzard Blender", "hr", 3, "gossharag", "hunting", false),
new Quest(10305, "Zigzagging Zapper", "hr", 3, "tobukadachi", "hunting", false),
new Quest(10306, "Down 'n' Dirty", "hr", 3, "almudron", "hunting", false),
new Quest(10307, "Bully of the Caverns", "hr", 3, "anjanath", "hunting", false),
new Quest(10308, "Twilit Twin Stars", "hr", 3, "nargacuga", "hunting", false),
new Quest(10309, "My Muse the Mizutsune", "hr", 3, "mizutsune", "hunting", false),
new Quest(10310, "Champion of the Caverns", "hr", 3, "rathalos", "hunting", false),
new Quest(10311, "Wavering Moon and Thunder", "hr", 3, "zinogre", "hunting", false),
new Quest(10312, "White Knight vs. Hunter", "hr", 3, "barioth", "hunting", false),
new Quest(10313, "A Friend in Need", "hr", 3, "tigrex", "hunting", false),
new Quest(10314, "A Few Bumps Along the Way", "hr", 3, "diablos", "hunting", false),
new Quest(10302, "Hellfire", "hr", 3, "magnamalo", "hunting", false),
new Quest(10315, "Tail to Tail", "hr", 3, "bishaten,almudron", "hunting", false),
new Quest(10316, "Beastly Chaos", "hr", 3, "tigrex,gossharag", "hunting", false),
new Quest(10317, "Disastrously Beautiful", "hr", 3, "barroth,magnamalo,tobikadachi", "arena", false),
new Quest(10403, "The Blue Apex", "hr", 4, "apexarzuros", "hunting", false),
new Quest(10404, "The Swirling Gale", "hr", 4, "greatizuchi", "hunting", false),
new Quest(10405, "Divine Comedy", "hr", 4, "arzuros,kuluyaku", "hunting", false),
new Quest(10406, "Didn't Get the Memo", "hr", 4, "greatbaggi,greatbaggi", "hunting", false),
new Quest(10407, "Dancing A-purr-ition", "hr", 4, "aknosom", "hunting", false),
new Quest(10408, "The Frost Islands Arena", "hr", 4, "tetranadon", "hunting", false),
new Quest(10409, "Even Cute Things Have Fangs", "hr", 4, "lagombi", "hunting", false),
new Quest(10410, "Donning Toxicity", "hr", 4, "greatwroggi", "hunting", false),
new Quest(10411, "Night of the Khezu", "hr", 4, "khezu", "hunting", false),
new Quest(10412, "Dango Duty", "hr", 4, "", "slaying", false),
new Quest(10413, "Totally Not Cool, Kulu!", "hr", 4, "kuluyaku,kuluyaku", "hunting", false),
new Quest(10414, "Study the Sword & Shield", "hr", 4, "aknosom", "capture", false),
new Quest(10415, "Honing Your Hunting Horn", "hr", 4, "greatizuchi,tetranadon", "hunting", false),
new Quest(10416, "Study the Switch Axe", "hr", 4, "lagombi,khezu", "hunting", false),
new Quest(10417, "Learning the Light Bowgun", "hr", 4, "greatbaggi,greatwroggu", "arena", false),
new Quest(10418, "Lost and Found", "hr", 4, "", "slaying", false),
new Quest(10419, "Blue, Round, and Cute", "hr", 4, "arzuros", "capture", false),
new Quest(10504, "Foul Play in the Forest", "hr", 5, "royalludroth", "hunting", false),
new Quest(10505, "Rise above the Mud", "hr", 5, "barroth", "hunting", false),
new Quest(10506, "Bowled Over", "hr", 5, "volvidon,volvidon", "hunting", false),
new Quest(10507, "Rotten Fruit", "hr", 5, "bishaten", "hunting", false),
new Quest(10508, "Go Away, Pukei!", "hr", 5, "pukeipukei", "hunting", false),
new Quest(10509, "Miner Problem", "hr", 5, "basarios", "hunting", false),
new Quest(10510, "Charmed by a Queen", "hr", 5, "rathian", "hunting", false),
new Quest(10503, "The Restless Swamp", "hr", 5, "jyuratodus", "hunting", false),
new Quest(10511, "Grasp the Great Sword", "hr", 5, "bishaten,bishaten", "hunting", false),
new Quest(10512, "Honing Your Hammer", "hr", 5, "pukeipukei,barroth", "hunting", false),
new Quest(10513, "Learn the Lance", "hr", 5, "rathian", "capture", false),
new Quest(10514, "Charge Blade Coalescing", "hr", 5, "royalludroth,jyuratodus", "hunting", false),
new Quest(10515, "Hone Your Heavy Bowgun", "hr", 5, "basarios,volvidon", "hunting", false),
new Quest(10516, "Bad Review", "hr", 5, "", "slaying", false),
new Quest(10517, "Flooded Forest Fiasco", "hr", 5, "", "slaying", false),
new Quest(10518, "Shadows Over the Frost", "hr", 5, "khezu,tetranadon", "hunting", false),
new Quest(10603, "Serpent God of Wind", "hr", 6, "ibushi", "hunting", false),
new Quest(10604, "Skies Flash, Clouds Boom", "hr", 6, "zinogre", "hunting", false),
new Quest(10605, "A Somniferous Elegy", "hr", 6, "somnacanth", "hunting", false),
new Quest(10606, "Sharpening Amber Fangs", "hr", 6, "barioth", "hunting", false),
new Quest(10607, "Skies are Gray", "hr", 6, "tobikadachi", "hunting", false),
new Quest(10608, "Closer Than it Appears", "hr", 6, "anjanath", "hunting", false),
new Quest(10609, "The Abyss Stares Back", "hr", 6, "nargacuga", "hunting", false),
new Quest(10610, "Red Skies at Night", "hr", 6, "rathalos", "hunting", false),
new Quest(10602, "A Bewitching Dance", "hr", 6, "mizutsune", "hunting", false),
new Quest(10611, "Do It for the Dango!", "hr", 6, "nargacuga,jyuratodus", "hunting", false),
new Quest(10612, "Learn the Long Sword", "hr", 6, "zinogre,mizutsune", "hunting", false),
new Quest(10613, "Dissect the Dual Blades", "hr", 6, "anjanath,rathian", "hunting", false),
new Quest(10614, "Grasp the Gunlance", "hr", 6, "barioth", "capture", false),
new Quest(10615, "Invoke the Insect Glaive", "hr", 6, "somnacanth,aknosom", "hunting", false),
new Quest(10616, "Be One with the Bow", "hr", 6, "tobikadachi,tobikadachi", "hunting", false),
new Quest(10617, "The Lava Caverns Sweep", "hr", 6, "", "slaying", false),
new Quest(10618, "Showdown in the Arena", "hr", 6, "zinogre,mizutsune,anjanath", "arena", false),
new Quest(10708, "It's Gonna Get You!", "hr", 7, "gossharag", "hunting", false),
new Quest(10709, "Clad in Hellfire", "hr", 7, "magnamalo", "hunting", false),
new Quest(10710, "A Muddy Invitation", "hr", 7, "almudron", "hunting", false),
new Quest(10711, "Subterranean Disturbances", "hr", 7, "diablos", "hunting", false),
new Quest(10712, "A Resounding Roar", "hr", 7, "tigrex", "hunting", false),
new Quest(10713, "Evil Afoot", "hr", 7, "rajang", "hunting", false),
new Quest(10701, "Can't Kill It with Fire", "hr", 7, "raknakadaki", "hunting", false),
new Quest(10702, "Serpent Goddess of Thunder", "hr", 7, "narwa", "hunting", false),
new Quest(10714, "Seared Situation", "hr", 7, "rathalos,magnamalo", "hunting", false),
new Quest(10721, "A Quartet of Horns", "hr", 7, "diablos,diablos", "hunting", false),
new Quest(10722, "A Blaze Among Beasts", "hr", 8, "rathian,tigrex,raknakadaki", "hunting", false),
new Quest(10723, "May Fire Quell Fury", "hr", 8, "rajang", "capture", false),
new Quest(10715, "Ruckus in the Ruins", "hr", 7, "almudron,mizutsune", "hunting", false),
new Quest(10716, "A Frosty Stalemate", "hr", 7, "gossharag,tetranadon", "hunting", false),
new Quest(10717, "Fought, Failed, Fired Up", "hr", 7, "diablos,anjanath", "hunting", false),
new Quest(10718, "Occupational Hazards", "hr", 7, "rajang,zinogre", "hunting", false),
new Quest(10719, "Omnidirectional Threats", "hr", 7, "raknakadaki,khezu", "hunting", false),
new Quest(10720, "A Whirlwind of a Stage", "hr", 7, "tigrex,nargacuga,tobikadachi", "hunting", false),
new Quest(10703, "Ancient Illusion", "hr", 8, "chameleos", "hunting", false),
new Quest(10704, "The Steely Storm", "hr", 8, "kushaladaora", "hunting", false),
new Quest(10705, "The Emperor of Flame", "hr", 8, "teostra", "hunting", false),
new Quest(10729, "Death From Above", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10730, "Return of the Bazelgeuse", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10731, "Return of the Bazelgeuse", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10732, "Return of the Bazelgeuse", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10733, "Return of the Bazelgeuse", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10734, "Return of the Bazelgeuse", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10735, "The Avaricious Apex Arzuros", "hr", 8, "apexarzuros", "hunting", false),
new Quest(10736, "The Graceful Apex Rathian", "hr", 8, "apexrathian", "hunting", false),
new Quest(10737, "The Harlequin Apex Mizutsune", "hr", 8, "apexmizutsune", "hunting", false),
new Quest(10748, "Master Utsushi's Challenge Part 1", "hr", 8, "zinogre,almudron", "hunting", false),
new Quest(10749, "Master Utsushi's Challenge Part 2", "hr", 8, "rajang,gossharag", "hunting", false),
new Quest(10750, "Master Utsushi's Challenge Part 3", "hr", 8, "nargacuga,magnamalow", "hunting", false)
/*** end update 2.0 ***/
);
//console.log("QuestList = ")
//console.log(QuestList)
/*console.log("search QuestList for Arzuros")
let test = QuestList.filter(element => element.monsters.toLowerCase().includes("Arzuros".toLowerCase()))
const found = test ? "found" : "nope"
console.log(found)
console.log(test)*/



/***** Local Data *****/
let localRecord = '[]'
if(!localStorage.getItem('mhrRecords')){

	localStorage.setItem('mhrRecords', localRecord)
}
else{
	localRecord = localStorage.getItem('mhrRecords')
}

let localData = JSON.parse(localRecord)
console.log("localData = ");
console.log(localData);


console.log("end base data")



function displayRecords(q, w="any", highlight=""){
	const timeTable = document.getElementById("timeTable");
	const weaponIcon = document.getElementById("weaponIcon");
	const questName = document.getElementById("questName");
	const monsterIcons = document.getElementById("monsterIcons");
	const compareBox = document.getElementById("compareBox").checked;
	
	//search
	let localResults = "";
	if(w=="any" || compareBox){
		localResults = localData.filter( record => record.quest == q );
	}
	else{
		localResults = localData.filter( record => record.quest == q && record.weapon == w );
	}

		
	if(!localResults.hasOwnProperty(0)){
		questName.innerHTML = "Better get huntin'!";
		weaponIcon.innerHTML = "";
		monsterIcons.innerHTML = "";
		displayInTable(0)
		return;
	}

	//sort by time
	//localResults.sort((a, b) => a.time-b.time);

	//get quest info.
	const qArr = QuestList.find( record => record.id == q)

	//set quest name
	questName.innerHTML = qArr.rank.toUpperCase() + qArr.star + '⭐ ' + qArr.vanity;
	
	//set weapon image
	weaponIcon.innerHTML = (w=="any" || compareBox) ? '' : '<img src="img/weapons/' + w + '.png" />';

	//set monster icons.
	let newMonsterIcon = "";
	if(qArr.monsters!=""){
		qArr.monsters.split(",").forEach(m => {
			newMonsterIcon += '<img src="img/mons/' + m + '.png" />';
		});
	}
	monsterIcons.innerHTML = newMonsterIcon;

	//display results
	if(w=="any" || compareBox){
		displayInTable(localResults, highlight, true);
	}
	else{
		displayInTable(localResults, highlight);
	}
	
}


//expects an array of times/datetime objects
function displayInTable(tArr, highlight="", weaponList=false){
	let timeTable = document.getElementById("timeTable");

	//empty out the previous table
	while(timeTable.firstChild){timeTable.removeChild(timeTable.firstChild)}

	if(!tArr.length > 0){return;}
	
	//there is a better way than innerHTML, but this is so much easier. Ain't it always that way?
	let weaponHead = weaponList ? "<th>Weapon</th>" : "";
	let tableString = '<table id="timeAttack" class="xx" border="1"><tr><th>Rank</th><th>Time</th>' + weaponHead + '<th>Date</th></tr>'
	
	const parser = new DOMParser();
	let rank = 1;
	let rankDisplay = "";
	tArr.forEach(t => {
		
		switch(rank){
			case 1:  rankDisplay = "S";break;
			case 2:  rankDisplay = "A";break;
			case 3:  rankDisplay = "B";break;
			default: rankDisplay = rank;
		}
		rank++;

		
		const datetime = new Date(t.datetime);
		const offsetMs = datetime.getTimezoneOffset() * 60 * 1000;
		const dateLocal = new Date(datetime.getTime() - offsetMs);
		const str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
		let highlightClass = "";

		if(t.datetime == highlight){
			highlightClass = ' class="highlight" '
		}

		let weaponImage = weaponList ? '<td' + highlightClass + '>' + '<img style="height:40px;" src="img/weapons/' + t.weapon + '.png" />' + '</td>' : '';
		const newstring = (`
		<tr>
			<td` + highlightClass + `>` + rankDisplay + `</td>
			<td` + highlightClass + `>` + msToTime(t.time) + `</td>`
			+ weaponImage + 
			`<td` + highlightClass + `>` + str + `</td>
		</tr>
		`)
		tableString += newstring;

	});
	tableString += '</td></tr></table>'
	timeTable.innerHTML = tableString
}


function addRecord(){
	let inputW = document.querySelector('#inputW').value;
	let inputQ = document.querySelector('#inputQ').value;
	let inputT = parseInt(document.querySelector('#inputT').value);
	const datetime = Date.now();

	localData.push({
					weapon : inputW,
					quest : inputQ,
					time : timeToMs(inputT),
					datetime : datetime
				});
	sortRecords();
	saveRecords();

	//update table with new records
	document.getElementById('quest').value=inputQ;
	displayRecords(inputQ, inputW, datetime);
}

function saveRecords(){
	localStorage.setItem('mhrRecords', JSON.stringify(localData))	
}

function sortRecords(){
	localData.sort((a, b) => a.time-b.time);	
}

function clearRecords(){
	console.log("clearing...waiting for confirm")
	let confirm = window.confirm("Are you sure you want to reset? This cannot be undone!")
	if(confirm === true){
		console.log("Goodbye data...")
		localStorage.removeItem('mhrRecords');
	}
	else{
		console.log("Nevermind then!")
	}
	displayRecords(0)
}

function msToTime(t){
	const ms = Math.floor((t % 1000) / 10);
	const s = Math.floor((t / 1000) % 60);
	const m = Math.floor((t / (1000 * 60)) % 60);
	let string = "";

	//string = (h < 10) ? "0" + h : h;
	//string+= ":"
	string += (m < 10) ? "0" + m : m;
	string+= "'"
	string += (s < 10) ? "0" + s : s;
	string += "\""
	string += (ms < 10) ? "0" + ms : ms;



	return string;
}

function timeToMsOld(m, s, ms){
	return (m*60*1000) + (s*1000) + (ms*10);
}

function timeToMs(t){
	t = t.toString();
	const length = t.length
	const ms = t.substring(length - 2)
	const s = t.substring(length - 2, length - 4)
	const m = t.substring(length - 4, length - 6)
	const returning = (m*60*1000) + (s*1000) + (ms*10);
	return returning;
}