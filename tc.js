const Discord = require('discord.js')
const bot = new Discord.Client()
const db = require('quick.db');
const owner = "";
//const Welcome = require('discord-welcome')
const channel = '583345997724516362';
const quiz = require('./quiz.json');
let duit = ['10', '2', '1', '5', '7', '9'];
var bs = duit[Math.floor(Math.random() * duit.length)];

setInterval (() => {
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answer.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
  
const embed = new Discord.RichEmbed()
.setTitle('Tebak-Tebakan')
.setColor('RED')
.setDescription(''+`${item.question}`+'')
.setTimestamp()
.setFooter('Jawab dalam 15 detik')
bot.channels.get(channel).send(embed).then(m => m.delete(6000)).then(() => {
	bot.channels.get(channel).awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
		.then(collected => {
		bot.channels.get(channel).send(`${collected.first().author} Benarr ${item.answer}  🤣`).then(m => m.delete(7000));
  
		})
///}, 50000)
		.catch(collected => {
    const oembed = new Discord.RichEmbed()
    .setTitle('⏱️ Waktu Telah Habis')
    .setColor('RED')
    .setDescription('Jawabannya Adalah  `' +`${item.answer}`+ '`  🤣')
    .setFooter(' Makanya cepetan 🤣🤣')
			 bot.channels.get(channel).send(oembed).then(m => m.delete(5000));
		});

})
}, 50000)

bot.login(process.env.TOKEN);