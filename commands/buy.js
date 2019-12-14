const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {

  if (message.channel.type == "dm") return;
  const channel = '563504116685471744';
 const pesan2 = ["di server ini silahkan hubungi Owner Server!"];
  const pesan1 = ["Saya tidak menemukan Role"];
    let author = db.fetch(`money_${message.author.id}`)

    if (args[0] == 'moderator') {
        if (!message.guild.roles.find("name", 'Moderator')) return message.channel.send('Saya tidak menemukan Role `Moderator`, di Server ini, silahkan hubungi Owner Server!')
        if (author < 700) return message.channel.send('credit kamu akan terpotong `700$` Untuk membeli Role') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Moderator'))

        db.subtract(`money_${message.author.id}`, 700)
        message.channel.send(message.author.tag + ' Berhasil membeli Role seharga  `700$`')
      return client.channels.get(channel).send(`${message.author.username} Telah membeli Role Administrator`)
    } else if(args[0] == 'admin') {
        if (!message.guild.roles.find("name", 'Admin')) return message.channel.send(`${pesan1}` + `Admin` + `${pesan2}`)
        if (author < 1800) return message.channel.send('credit kamu akan terpotong `1800$` Untuk membeli Role') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Admin')) // get the role & add it

        db.subtract(`money_${message.author.id}`, 1800)
        message.channel.send(message.author.tag + ' Berhasil membeli Role Seharga `1800$`')
      return client.channels.get(channel).send(`${message.author.username} Telah membeli Role Admin`)
    } else if(args[0] == 'Family') {
      if (!message.guild.roles.find("name", 'Family')) return message.channel.send(`${pesan1}` + `Family` + `${pesan2}`)
      if (author < 2000) return message.channel.send('credit kamu akan terpotong `2000$` Untuk membeli Role')
      message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Family'))
      
      db.subtract(`money_${message.author.id}`, 2000)
      message.channel.send('Berhasil membeli Role Seharga `2000$`')
      return client.channels.get(channel).send(`${message.author.username} Telah membeli Role Family`)
    }





}