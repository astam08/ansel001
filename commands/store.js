const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {
if (message.channel.type == "dm") return;


     
    let embed = new Discord.RichEmbed()
    .setTitle(`${client.user.tag} Store!`)
    .setDescription('Gunakan `F!buy`<item>')
    .addField(`Family`, '`2000$`\nDapatkan Role Family')
    .addField(`Sold Out`, '`1800$`\n') // can add up to 25(I believe)
    .setColor("RANDOM") 
    .setTimestamp()
    .setFooter('Buka 24 jam | economy v.1')

    message.channel.send(embed)



}