
module.exports.run = (client, message, args) => {

  var quotes = [
    "tess",
    "doang",
    "coy"
  ];
  
  var tex = quotes[Math.floor(Math.random() * quotes.length)]
  message.channel.send(tex)
}

