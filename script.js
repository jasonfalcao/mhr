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
new Quest(102, "Roly-poly Lanterns", "vr", 1, "", "gathering", true),
new Quest(103, "Fungal Frustrations", "vr", 1, "", "gathering", true),
new Quest(104, "Unpious Peons", "vr", 1, "", "slaying", true),
new Quest(105, "Help with Maintenance", "vr", 1, "", "slaying", false),
new Quest(203, "Grizzly Glutton", "vr", 2, "arzuros", "hunting", true),
new Quest(204, "Plump and Juicy", "vr", 2, "", "gathering", true),
new Quest(205, "A Frosty Paradise", "vr", 2, "", "slaying", true),
new Quest(206, "Out Cold", "vr", 2, "greatbaggi", "hunting", true),
new Quest(207, "Rabid Rabbit", "vr", 2, "lagombi", "hunting", true),
new Quest(202, "Great Izuchi, Great Pain", "vr", 2, "greatizuchi", "hunting", false),
new Quest(208, "Case of the Creepy Crawlies", "vr", 2, "", "slaying", false),
new Quest(209, "Hmmm, Not So Tasty...", "vr", 2, "", "gathering", false),
new Quest(304, "The Rampage Approaches", "vr", 3, "", "rampage", true),
new Quest(305, "Can't Stomach the Thought", "vr", 3, "tetranadon", "hunting", true),
new Quest(306, "Walking on Eggshells", "vr", 3, "kuluyaku", "hunting", true),
new Quest(307, "Fightin' Dirty", "vr", 3, "barroth", "hunting", true),
new Quest(308, "Obnoxious Lord, Noxious Monster", "vr", 3, "greatwroggi", "hunting", true),
new Quest(309, "Spongy Oasis", "vr", 3, "", "hunting", true),
new Quest(303, "Feathered Frenzy", "vr", 3, "aknosom", "hunting", false),
new Quest(310, "Supply Run", "vr", 3, "", "gathering", false),
new Quest(311, "Faceless Foe", "vr", 3, "khezu", "hunting", false),
new Quest(312, "The Cactus Diet", "vr", 3, "", "gathering", false),
new Quest(313, "A Sandy Cabal", "vr", 3, "", "slaying", false),
new Quest(314, "Breath of the Past", "vr", 3, "", "gathering", false),
new Quest(315, "Ladies of the Lake", "vr", 3, "", "slaying", false),
new Quest(403, "Special License Test 1", "vr", 4, "aknosom,rathian", "hunting", false),
new Quest(404, "Infernal Lacrimosa", "vr", 4, "somnacanth", "hunting", true),
new Quest(405, "Raging White-out", "vr", 4, "barioth", "hunting", true),
new Quest(406, "The Queen's Procession", "vr", 4, "rathian", "hunting", true),
new Quest(407, "Streaking Shadow", "vr", 4, "tobikadachi", "hunting", true),
new Quest(408, "A Song of Red and Fire", "vr", 4, "volvidon", "hunting", true),
new Quest(409, "Off Your Rocker", "vr", 4, "basarios", "hunting", true),
new Quest(402, "Monkey Wrench in your Plans", "vr", 4, "bishaten", "hunting", false),
new Quest(410, "Getting Back the Groceries", "vr", 4, "", "gathering", false),
new Quest(411, "A Poisonous Project", "vr", 4, "pukeipukei", "hunting", false),
new Quest(412, "Deliver the Liver", "vr", 4, "", "gathering", false),
new Quest(413, "So Hot, It Melts Iron", "vr", 4, "", "gathering", false),
new Quest(414, "THE BEST Quest", "vr", 4, "", "slaying", false),
new Quest(415, "Third Wheel", "vr", 4, "arzuros,tetranadon", "arena", false),
new Quest(502, "Special License Test 2", "vr", 5, "magnamalo,bishaten", "hunting", false),
new Quest(503, "Wind Speed Wyvern", "vr", 5, "nargacuga", "hunting", true),
new Quest(504, "Electrifying Epiphany", "vr", 5, "zinogre", "hunting", true),
new Quest(505, "Nocturnal Tracker", "vr", 5, "anjanath", "hunting", true),
new Quest(506, "Waltzing by Moonlight", "vr", 5, "mizutsune", "hunting", true),
new Quest(507, "Rathalos Alert!", "vr", 5, "rathalos", "hunting", true),
new Quest(501, "Comeuppance", "vr", 5, "magnamalo", "hunting", false),
new Quest(508, "The Secret Ingredient", "vr", 5, "somnacanth", "capture", false),
new Quest(509, "BZZZZZ or ZZZZzzzz", "vr", 5, "khezu,somnacanth", "hunting", false),
new Quest(510, "Nosey Nuisances", "vr", 5, "kuluyaku,anjanath", "hunting", false),
new Quest(511, "The Hottest Around", "vr", 5, "tetranadon,volvidon", "hunting", false),
new Quest(602, "Hermit of the Swamp", "vr", 6, "almudron", "hunting", false),
new Quest(603, "Advanced: The Veterans Gala", "vr", 6, "rajang,magnamalo", "arena", false),
new Quest(604, "Abominable Snow-beast", "vr", 6, "gossharag", "hunting", false),
new Quest(605, "Thundering Voice", "vr", 6, "tigrex", "hunting", false),
new Quest(606, "Twisted Desire", "vr", 6, "diablos", "hunting", false),
new Quest(607, "A Test of Courage", "vr", 6, "magnamalo,zinogre", "hunting", false),
new Quest(608, "Like a Flash of Lightning", "vr", 6, "tobikadachi,mizutsune", "hunting", false),
new Quest(609, "King of the Sky, Bane of the Land", "vr", 6, "rathalos,tigrex", "hunting", false),
new Quest(10104, "Shady Monster", "lr", 1, "aknosom", "hunting", false),
new Quest(10105, "Tired and Feathered", "lr", 1, "kuluyaku", "hunting", false),
new Quest(10106, "Jumped in the Frost Islands", "lr", 1, "greatizuchi", "hunting", false),
new Quest(10107, "No Cure for the Common Baggi", "lr", 1, "greatbaggi", "hunting", false),
new Quest(10108, "A Snowball's Chance...", "lr", 1, "lagombi", "hunting", false),
new Quest(10109, "Wroggi Place, Wroggi Time", "lr", 1, "greatwroggi", "hunting", false),
new Quest(10110, "A Grizzly Encounter", "lr", 1, "arzuros", "hunting", false),
new Quest(10111, "Off the Beaten Path", "lr", 1, "", "slaying", false),
new Quest(10112, "Hot Topic Hooligans", "lr", 1, "", "slaying", false),
new Quest(10204, "I Want Off This Ride", "lr", 2, "bishaten", "hunting", false),
new Quest(10205, "Way of the Pukei", "lr", 2, "pukeipukei", "hunting", false),
new Quest(10206, "The Flooding Flooded Forest", "lr", 2, "royalludroth", "hunting", false),
new Quest(10207, "So Muddy Hardheaded!", "lr", 2, "barroth", "hunting", false),
new Quest(10208, "A Pale Shadow", "lr", 2, "khezu", "hunting", false),
new Quest(10209, "Reinventing the Wheel", "lr", 2, "volvidon", "hunting", false),
new Quest(10210, "Blasted Basarios!", "lr", 2, "basarios", "hunting", false),
new Quest(10211, "The Path to Royalty", "lr", 2, "rathian", "hunting", false),
new Quest(10203, "Dead Ringer", "lr", 2, "tetranadon", "hunting", false),
new Quest(10212, "Dawn of the Kestodon", "lr", 2, "", "slaying", false),
new Quest(10213, "Hide, Hide, Hide!", "lr", 2, "", "slaying", false),
new Quest(10214, "Bouncing Brawlers", "lr", 2, "lagombi,tetranadon", "slaying", false),
new Quest(10215, "Fried and Baptized", "lr", 2, "royalludroth,rathian", "slaying", false),
new Quest(10303, "Beckoning Slumber", "lr", 3, "somnacanth", "hunting", false),
new Quest(10304, "The Blizzard Blender", "lr", 3, "gossharag", "hunting", false),
new Quest(10305, "Zigzagging Zapper", "lr", 3, "tobukadachi", "hunting", false),
new Quest(10306, "Down 'n' Dirty", "lr", 3, "almudron", "hunting", false),
new Quest(10307, "Bully of the Caverns", "lr", 3, "anjanath", "hunting", false),
new Quest(10308, "Twilit Twin Stars", "lr", 3, "nargacuga", "hunting", false),
new Quest(10309, "My Muse the Mizutsune", "lr", 3, "mizutsune", "hunting", false),
new Quest(10310, "Champion of the Caverns", "lr", 3, "rathalos", "hunting", false),
new Quest(10311, "Wavering Moon and Thunder", "lr", 3, "zinogre", "hunting", false),
new Quest(10312, "White Knight vs. Hunter", "lr", 3, "barioth", "hunting", false),
new Quest(10313, "A Friend in Need", "lr", 3, "tigrex", "hunting", false),
new Quest(10314, "A Few Bumps Along the Way", "lr", 3, "diablos", "hunting", false),
new Quest(10302, "Hellfire", "lr", 3, "magnamalo", "hunting", false),
new Quest(10315, "Tail to Tail", "lr", 3, "bishaten,almudron", "hunting", false),
new Quest(10316, "Beastly Chaos", "lr", 3, "tigrex,gossharag", "hunting", false),
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
new Quest(10730, "Return of the Bazelgeuse (Ruins)", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10731, "Return of the Bazelgeuse (Frost Islands)", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10732, "Return of the Bazelgeuse (Sandy Plains)", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10733, "Return of the Bazelgeuse (Flooded Forest)", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10734, "Return of the Bazelgeuse (Lava Caverns)", "hr", 8, "bazelgeuse", "hunting", false),
new Quest(10735, "The Avaricious Apex Arzuros", "hr", 8, "apexarzuros", "hunting", false),
new Quest(10736, "The Graceful Apex Rathian", "hr", 8, "apexrathian", "hunting", false),
new Quest(10737, "The Harlequin Apex Mizutsune", "hr", 8, "apexmizutsune", "hunting", false),
new Quest(10748, "Master Utsushi's Challenge Part 1", "hr", 8, "zinogre,almudron", "hunting", false),
new Quest(10749, "Master Utsushi's Challenge Part 2", "hr", 8, "rajang,gossharag", "hunting", false),
new Quest(10750, "Master Utsushi's Challenge Part 3", "hr", 8, "nargacuga,magnamalo", "hunting", false),
/*** end update 2.0 ***/
/*** event quests ***/
new Quest(60101, "Out of Sight, Out of Mind's Eye", "hr", 6, "tetranadon", "hunting", false),
new Quest(60102, "Beast of the Shadows", "hr", 7, "nargacuga", "hunting", false),
new Quest(60103, "Haste Makes Waste", "hr", 8, "apexarzuros", "hunting", false),
new Quest(60002, "Heart of a Warrior", "hr", 3, "gossharag,magnamalo", "arena", false),
new Quest(70001, "Challenge Quest 01", "lr", 2, "tetranadon", "hunting", false)
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
	const compareMonster = document.getElementById("compareMonster").checked;
	const rarityBox = document.getElementById("rarityBox").checked;
	//get quest info.
	const qArr = QuestList.find( record => record.id == q)

	if(!qArr){
		return;
	}
	
	//search
	let localResults = "";
	if(compareMonster){

		// TODO vr vs lr vs hr - right now this only checks records that match the current quest rank. Does it need to change?
		// TODO match all monsters or only look at the first monster in a list?
		//let mSearch = qArr.monsters.split(",")[0];
		let mSearch = qArr.monsters; 
		/* group by monster */

		//let searchQuest = QuestList.filter(quest => quest.monsters.toLowerCase().includes(mSearch.toLowerCase()));
		let searchQuest = QuestList.filter(quest => quest.monsters.toLowerCase() == mSearch.toLowerCase() && quest.rank == qArr.rank);
		const found = searchQuest ? "found" : "nope";
		//there is a list of quests with this monster. filter localData for records where record.quest is in searchQuest.id
		let tArr = [];
		let questString = ""
		searchQuest.forEach( function(q){
			let findRecord = "";
			if(w=="any" || compareBox){
				findRecord = localData.filter(record => record.quest == q.id)
			}
			else{
				findRecord = localData.filter(record => record.quest == q.id && record.weapon == w)
			}			
			findRecord.forEach( record => tArr.push(record) )
			//findRecord ? tArr.push(findRecord.pop()) : "";
			questString += findRecord ? "<h3>" + q.rank.toUpperCase() + q.star + "⭐ " + q.vanity + "</h3>" : "";
		})
		localResults = tArr;
		questName.innerHTML = questString;
		//localResults = localData.filter( record => record.quest == q );
		//localResults = localData
	}
	else if(w=="any" || compareBox){
		localResults = localData.filter( record => record.quest == q );
	}
	else{
		localResults = localData.filter( record => record.quest == q && record.weapon == w );
	}

	//set quest name
	if(!qArr){
		questName.innerHTML = "No matching quest found";
	}
	else if(compareMonster){
		
	}
	else{
		questName.innerHTML = "<h3>" + qArr.rank.toUpperCase() + qArr.star + '⭐ ' + qArr.vanity + "</h3>";
	}
	
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
	if(!localResults.hasOwnProperty(0)){
		displayInTable(0)
	}
	else if(w=="any" || compareBox){
		displayInTable(localResults, highlight, true, rarityBox);
	}
	else{
		displayInTable(localResults, highlight, false, rarityBox);
	}
	
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



//expects an array of times/datetime objects
function displayInTable(tArr, highlight="", weaponList=false, rarity=false ){
	let timeTable = document.getElementById("timeTable");

	//empty out the previous table
	while(timeTable.firstChild){timeTable.removeChild(timeTable.firstChild)}

	if(!tArr.length > 0){
		timeTable.innerHTML = "<h3>Better get huntin'!</h3>";
		return;
	}
	
	//there is a better way than innerHTML, but this is so much easier. Ain't it always that way?
	const weaponHead = weaponList ? "<th></th>" : "";
	const rarityHead = rarity ? "<th></th>" : "";
	let tableString = '<table border="1"><tr><th></th><th>Time</th>' + weaponHead + rarityHead + '<th></th><th>Date</th></tr>'
	
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
		const weaponImage = weaponList ? '<td' + highlightClass + '>' + '<img style="height:42px;" src="img/weapons/' + t.weapon + '.png" />' + '</td>' : '';
		const methodString = t.method ? `<img style="height:25px;margin:5px;" src="img/icons/${t.method}.png" />` : `<img style="height:25px;margin:5px;" src="img/icons/slay.png" />`;
		const rarityString = rarity ? t.weaponRarity ? `<td ${highlightClass}>&nbsp;${t.weaponRarity}&nbsp;</td>` : `<td ${highlightClass}></td>` : '';
		const newstring = (`
		<tr>
			<td ${highlightClass}>${rankDisplay}</td>
			<td ${highlightClass}>${msToTime(t.time)}</td>
			${weaponImage}
			${rarityString}
			<td ${highlightClass}>${methodString}</td>
			<td ${highlightClass}>${str}</td>
		</tr>
		`)
		tableString += newstring;

	});
	tableString += '</td></tr></table>'
	timeTable.innerHTML = tableString
}


function addRecord(method = ""){	
	let inputQ = document.querySelector('#quest').value;
	let inputW = document.querySelector('#weapon').value;	
	let inputT = parseInt(document.querySelector('#inputT').value);
	let inputR = document.getElementById('rarity').value;
	const datetime = Date.now();
	if(method == ""){method = "slay"}

	if(!(inputT > 0)){return ;}

	localData.push({
					weapon : inputW,
					quest : inputQ,
					time : timeToMs(inputT),
					datetime : datetime,
					method : method,
					...inputR && { weaponRarity : inputR }
				});
	sortRecords();
	saveRecords();

	//set display list to the newly added quest
	document.getElementById('quest').value=inputQ;
	//update table with new records
	displayRecords(inputQ, inputW, datetime);
	//reset input to empty
	document.querySelector('#inputT').value = ""
	//scroll to top of table
	document.getElementById("timeAttack").scrollIntoView();
}

function saveRecords(){
	localStorage.setItem('mhrRecords', JSON.stringify(localData))	
}

function sortRecords(arr=""){
	if(arr){
		arr.sort((a, b) => a.time-b.time);
	}
	else{
		localData.sort((a, b) => a.time-b.time);
	}
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

function questSearch(targetSelect, search=""){
	let buildString = "";
	let qArr = QuestList;

	//get options
	const rank = document.getElementById("rankSelect").value
	const solo = document.getElementById("soloMonster").checked

	//search by monster and applicable options
	if(solo == true && rank != "" && search != ""){
		//let searchQuest = QuestList.filter(quest => quest.monsters.toLowerCase() == mSearch.toLowerCase() && quest.rank == qArr.rank);
		console.log('condition 1')
		qArr = QuestList.filter(quest => !quest.monsters.includes(",") && quest.monsters.toLowerCase().includes(search.toLowerCase()) && quest.rank == rank)
	}
	else if(solo == true && search != ""){
		console.log('condition 2')
		qArr = QuestList.filter(quest => !quest.monsters.includes(",") && quest.monsters.toLowerCase().includes(search.toLowerCase()))
	}
	else if(solo == true && rank != ""){
		console.log('condition 3')
		qArr = QuestList.filter(quest => !quest.monsters.includes(",") && quest.rank == rank)
	}
	else if(rank != "" && search != ""){
		console.log('condition 4')
		qArr = QuestList.filter(quest => quest.monsters.toLowerCase().includes(search.toLowerCase()) && quest.rank == rank)
	}
	else if(search != ""){
		console.log('condition 5')
		qArr = QuestList.filter(quest => quest.monsters.toLowerCase().includes(search.toLowerCase()))
	}
	else if(rank != ""){
		console.log('condition 6')
		qArr = QuestList.filter(quest => quest.rank == rank)
	}
	else{
		console.log('condition 7')
	}

	//build the option list
	if(qArr.length){
		qArr.forEach(key => buildString += `<option value="${key.id}">${key.rank.toUpperCase()}${key.star}⭐ ${key.name}</option>`)
	}
	
	document.getElementById(targetSelect).innerHTML = buildString;
}



/***** page load, add event listeners *****/
document.addEventListener("DOMContentLoaded", function() {

	const questSearchEle = document.getElementById("questSearch")
	const addRecordSearch = document.getElementById("addRecordSearch")

	//add search for display time questlist and initialize
	document.getElementById("questSearch").addEventListener("input", function(){questSearch("quest", this.value)});
	document.getElementById("soloMonster").addEventListener("input", function(){questSearch("quest", questSearchEle.value)});
	document.getElementById("rankSelect").addEventListener("input", function(){questSearch("quest", questSearchEle.value)});
	questSearch("quest", questSearchEle.value);

	//add search for add record questlist and init
	/*document.getElementById("addRecordSearch").addEventListener("input", function(){questSearch("inputQ", this.value)});
	document.getElementById("soloMonster").addEventListener("input", function(){questSearch("inputQ", addRecordSearch.value)});
	document.getElementById("rankSelect").addEventListener("input", function(){questSearch("inputQ", addRecordSearch.value)});
	questSearch("inputQ", addRecordSearch.value);*/

	

});