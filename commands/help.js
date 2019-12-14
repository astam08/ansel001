const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if (message.channel.type == "dm") return;

let pages = ['***SELAMAT DATANG***\n**Terimakasih telah menggunakan bot ini\nBot Ansel adalah bot pribadi\n``JASA PEMBUATAN APLIKASI ANDROID``,`VIA DM`\nUntuk Melihat fitur bot silahkan ke menu berikutnya**\n`F!log`**untuk melihat log**', '***🔱 ADMINISTRATOR***\n\n**ban,kick,lock,mute,unmute,slow**', '***🎮FUN***\n\n\n**avatar,cuddle,slap,meme,pepe,timer,vote,quiz,invite**', '***💸Economy v.1***\n__Masih dalam ujicoba__\n**daily,balance,store,buy,leaderboard**', '***📢COOMING SOON***\n\n\n**Bot masih dalam pengkodean🖥️\n🙏** '];
let page = 1; 

    const embed = new Discord.RichEmbed() // Define a new embed
    .setColor(0xffffff) // Set the color
    .setFooter(`Bagian ${page} Dari ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
        msg.react('⏩')

        // Filters
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
        const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Bagian ${page} Dari ${pages.length}`);
            msg.edit(embed)
        })

        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Bagian ${page} Dari ${pages.length}`);
            msg.edit(embed)
        })
    })
})






}

///⏪⏩