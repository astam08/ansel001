exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let gantinama = args.join(' ')
  message.user.setNickname(gantinama)
  message.reply(`namakamu sudah diganti ke\`${gantinama}\``);
}