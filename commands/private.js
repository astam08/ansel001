module.exports.run = async (client, message, args) => {
  const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.

let undelivered = 0;

for (let i = 0; i < members.length; i++) {  // Using an array and a for loop rather than
  const member = members[i];                // Collection.forEach() due to the fact that
  await member.send('Sorry Lagi tes :v')         // the latter will move onto the proceeding
    .catch(() => undelivered++);            // code before waiting for the promises to
}                                           // fulfill. https://stackoverflow.com/a/37576787

message.channel.send(`Pesan Terkirim, ${undelivered} Belum terima pesan.`)
  .catch(console.error);
}