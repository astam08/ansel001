exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
    message.channel.send("pong!").catch(console.error);
}