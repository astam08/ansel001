const Discord = require('discord.js')
const bot = new Discord.Client()
const channel = '581196883792363587';
const quiz = [
  {
    "question": "https://cdn.glitch.com/75cf1e90-88d1-4751-8070-6e88701dcd09%2Fimages%20(11).jpeg?1558540319359",
    "answer": ["Luffy"]
  }
  
];
setInterval (() => {
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answer.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
  //setTimeout (() => {
const embed = new Discord.RichEmbed()
.setTitle('Tebak-Tebakan')
.setColor('RED')
.setImage(''+`${item.question}`+'')
.setTimestamp()
.setFooter('Jawab dalam 10 detik')
bot.channels.get(channel).send(embed).then(m => m.delete(7000)).then(() => {
	bot.channels.get(channel).awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
		.then(collected => {
		bot.channels.get(channel).send(`${collected.first().author} Benarrr`).then(m => m.delete(7000));
		})
//}, 3000)
///}, 50000)
		.catch(collected => {
    const oembed = new Discord.RichEmbed()
    .setTitle('⏱️ Waktu Telah Habis')
    .setColor('RED')
    .setDescription('Jawabannya Adalah  ' +`${item.answer}`+ '  🤣')
    .setFooter(' Makanya cepetan 🤣🤣')
			 bot.channels.get(channel).send(oembed).then(m => m.delete(4000));
		});
})
  //})
}, 30000);
  
bot.login(process.env.TOKEN);