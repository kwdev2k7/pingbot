const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let authors = {
	"kwdev2k7": "developer.",
	"doshirak": "ideas.",
	"LEON": "ideas.",
	"Demetry": "ideas."
}

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
    msg.channel.send(":ping_pong: Pong!");
  }
  if(msg.content === "!info" || msg.content === "!i"){
  	msg.channel.send("\n---\n"+"Guilds: "+client.guilds.cache.size+".\nUsers: "+client.guilds.cache.map(g=>g.members.cache.size).reduce((a,b)=>a+b)+".\nUptime: "+timeformat(Date.now()-client.readyAt)+".\nAuthors of this masterpiece:\n"+Object.keys(authors).map(key=>[key, authors[key]]).map(author=>author.join(": ")).join("\n")+"\n---");
  }
});

client.login(process.env.BOT_TOKEN);
