const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


let replies = [
	"Pong!",
	"ping pong, gong kong",
	"лови пингово понговый мяч в лицо"
];

let authors = {
	"kwdev2k7": "developer.",
	"doshirak": "ideas.",
	"LEON": "ideas.",
	"Demetry": "ideas."
}

let gifs = [
	"https://cdn.discordapp.com/attachments/696409263727181854/761683813624840222/pingpong.gif",
	"https://cdn.discordapp.com/attachments/696409263727181854/761685682393448459/pingpong1.gif",
	"https://cdn.discordapp.com/attachments/696409263727181854/761685683122733066/pingpong2.gif",
	"https://cdn.discordapp.com/attachments/696409263727181854/761880544526598154/pingpong3.jpg"
]

function timeformat(ms){
	let s = parseInt(ms / 1000);
	let m = parseInt(s / 60);
	s = s % 60;
	let h = parseInt(m / 60);
	m = m % 60;
	return (h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
}

client.on('message', msg => {
  if (msg.content === '!ping' || msg.content === "!p") {
    msg.reply(':ping_pong: '+replies[Math.floor(Math.random()*replies.length)]+"\n--- Random 3 authors: \n"+Object.keys(authors).map(key=>[key, authors[key]]).sort(()=>Math.random()-Math.random()).slice(0,3).map(author=>author.join(": ")).join("\n")+"\n---\n"+gifs[Math.floor(Math.random()*gifs.length)]);
  }
  if(msg.content === "!info" || msg.content === "!i"){
  	msg.reply("\n---\n"+"Guilds: "+client.guilds.cache.size+".\nUsers: "+client.guilds.cache.map(g=>g.members.cache.size).reduce((a,b)=>a+b)+".\nUptime: "+timeformat(Date.now()-client.readyAt)+".\nAuthors of this masterpiece:\n"+Object.keys(authors).map(key=>[key, authors[key]]).map(author=>author.join(": ")).join("\n")+"\n---");
  }
});

client.login(process.env.BOT_TOKEN);
