const Discord = require('discord.js'),
      db = require("quick.db");

exports.run = async (client, message, args) => {
  let data = db.get(`snipe.${message.guild.id}`);
  if (!data) return message.channel.send("Gak Ada Pesan Yang Di Hapus Barusan");
  
  let content = data.content,
      user = data.user,
      channel = data.channel;
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle("Sniped Message")
  .setDescription(`Nih Pesan nya Dari **${user}** di **<#${channel}>** \n> ${content}`)
  message.channel.send(embed);
}

exports.help = {
  name: "snipe",
  description: "Mau Lihat Pesan Yang Barusan Di Hapus? Bisa Make Ini",
  usage: ";snipe",
  example: ";snipe"
};

exports.conf = {
  aliases: [],
  cooldown: 10
}