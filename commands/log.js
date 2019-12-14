const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  if (message.channel.type == "dm") return;
  
  var embed = new Discord.RichEmbed()
  .setTitle('Developer Log')
  .setColor('RANDOM')
  .setDescription('***Memperbaiki Commands dapat digunakan di DM\nPenambahan Ujicoba Feature Economy***')
  .setTimestamp()
  .setFooter('Terimakasih telah melaporkan bug kepada kami')
  message.channel.send(embed)
}