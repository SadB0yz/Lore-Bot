const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async(bot, message, args) => { 

    let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
   .setColor('GOLD')
    .setDescription(`Olá **${message.author.username}**, meu prefixo neste servidor **\`\`${message.guild.name}\`\`** é: **${config.prefix}** . Este é minha **central de comandos**, abaixo você poderá ver todos meus comandos, **separados por categorias**.`)
    .setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=2048`)
    .addField("**Comandos Moderação**", "**``/warn`` ``/listban`` ``/warn`` ``/ban`` ``/kick``**")
    .addField("**Comandos Úteis**", "**``/anuncio`` ``/enquete`` ``/sorteio`` ``/lock`` ``/deslock`` ``/modo-lento`` ``/criar_canal`` ``/clear`` **")
    .setTimestamp()
    .setFooter(message.author.tag, avatar);

    message.channel.send(embed);
}