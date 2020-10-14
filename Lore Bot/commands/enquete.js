const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Você não tem permissão para utilizar este comando.`)  
  

    let vote = args.join(" ");
    if (!vote) return message.channel.send(`**${message.author.username} você se esqueceu de dizer o motivo da enquete.**`)

    let embed = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`Enquete: \n **${vote}**`)
        .addField("**SIM** -  👍", "Para votar em **SIM**, basta reagir abaixo.")
        .addField("**NÃO** - 👎", "Para votar em **NÃO**, basta reagir abaixo.")
        .setTimestamp()
        .setFooter(`Enquete iniciada por: ${message.author.tag}`)


    message.delete();
    message.channel.send(embed).then(msg => msg.react("👍").then(r => msg.react("👎")));
}
