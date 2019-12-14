const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.members.first() || message.author
let bal = await db.fetch(`money_${user.id}`)

var embed = new Discord.RichEmbed()
.setTitle(` profile ${message.author.tag}`)
.setColor('RANDOM')
.addField('Credit', +bal+  '💰')
.setThumbnail(`${message.author.displayAvatarURL}`)
.setTimestamp()
.setFooter('beta Build v.1')

message.channel.send(embed)
}