const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


let replies = [
	"Pong!",
	"лови пингово понговый мячик обезьяна ебаная",
	"ping pong, gong kong"
];

let authors = {
	"kwdev2k7": "developer.",
	"durak": "ideas.",
	"LEON": "ideas.",
	"Demetry": "ideas."
}

let gifs = [
	"https://cdn.discordapp.com/attachments/696409263727181854/761683813624840222/pingpong.gif",
	"https://cdn.discordapp.com/attachments/696409263727181854/761685682393448459/pingpong1.gif",
	"https://cdn.discordapp.com/attachments/696409263727181854/761685683122733066/pingpong2.gif"
]

client.on('message', msg => {
  if (msg.content === '!ping' || msg.content === "!p") {
    msg.reply(':ping_pong: '+replies[Math.floor(Math.random()*replies.length)]+"\n--- Random 3 authors: \n"+Object.keys(authors).map(key=>[key, authors[key]]).sort(()=>Math.random()-Math.random()).slice(0,3).map(author=>author.join(": ")).join("\n")+"\n---\n"+gifs[Math.floor(Math.random()*gifs.length)]);
  }
});

client.login(process.env.BOT_TOKEN);
