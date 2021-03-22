const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Link`)
    .setColor("RANDOM")
    .setDescription(
      `[Invite Link](https://discord.com/api/oauth2/authorize?client_id=784959799036346388&permissions=8&scope=bot)`
    );

  return message.channel.send(embed);
};

exports.help = {
  name: "invite",
  description: "Mengirim Link invite Bot Ini",
  usage: ";invite",
  example: ";invite"
};

exports.conf = {
  aliases: ["inv"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};
