const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`Ping Kamu Adalah ${client.ws.ping}ms!`);
}

exports.help = {
  name: "ping",
  description: "Menampilkan Ping Mu!",
  usage: ";ping",
  example: ";ping"
};

exports.conf = {
  aliases: ["p"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
