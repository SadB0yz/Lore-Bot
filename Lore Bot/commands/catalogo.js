const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async(bot, message, args) => { 

    let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
   .setColor('GOLD')
    .setDescription(`Olá **${message.author.username}**, aqui estão alguns produtos no meu Catálogo **`)
    .setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=2048`)
    .addField("**Catálogo de Produtos da Lore Shopping :**", "**Nitro, Spotify, PrimeVideo, Crunchyroll e Minecraft(ALT, SFA, FA e Capa da OF)**")
    .setTimestamp()
    .setFooter(message.author.tag, avatar);

    message.channel.send(embed);
}