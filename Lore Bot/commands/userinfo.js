const Discord = require("discord.js")

module.exports.run = async (bot, message, args) =>{

    let user = message.mentions.users.first()
    if(!user) {
    return message.channel.send(`**${message.author.username} você se esqueceu de mencionar alguém!`);
    }
    let avatar = message.author.displayAvatarURL({format: 'png'});
    let sEmbed = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**INFO DE: ${user.username}**`, user.displayAvatarURL)
    .setAuthor('')
    .addField(`**Nome do Usuário:**`, `${user.username}`, true)
    .addField(`**Tag:**`, `${user.discriminator}`, true)
    .addField(`**ID:**`, `${user.id}`, true)
    .addField(`**Status:**`, `${message.author.presence.status}`, true)
    .setTimestamp()
    .setFooter(message.author.tag, avatar);
    message.channel.send({embed: sEmbed})
}