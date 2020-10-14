const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Você não tem permissão para utilizar este comando!");
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Eu não tenho permissão para fazer isso!");
    
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const embed = new Discord.MessageEmbed()
          .setColor("GOLD")
          .setTitle(`**${message.author.username}** o canal foi trancado com sucesso!`)
          .setTimestamp()
          .setFooter(message.author.tag, avatar)
    message.channel.send(embed);
    message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: false });
  }