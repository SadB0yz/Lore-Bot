const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    // Aqui é para definir a permissão de cargo para o uso do comando.
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Você não tem permissão para utilizar este comando.`)

    // Aqui o bot menciona o usuário para  que ele mencione um membro para punir.
    let membro = message.mentions.users.first()
    if (!membro) return message.channel.send(`**${message.author.username} você se esqueceu de mencionar o usuário!**`)

    
    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send(`**${message.author.username} você se esqueceu de dizer o motivo!**`)


    let embed = new Discord.MessageEmbed()
    .setTitle(`WARN - ${membro.username}`)
    .setColor('GOLD')
    .setFooter(`STAFF: ${message.author.username}`, message.author.displayAvatarURL())
    .setDescription(`**Você levou um aviso no servidor ${message.guild.name}, pelo motivo:** ${motivo}`)

    
    membro.send(embed)


    message.channel.send(`**${message.author.username} aviso enviado com sucesso!**`)
}