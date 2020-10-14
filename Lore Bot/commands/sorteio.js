const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
 name: "giveaway",
 description: "Cria um evento/sorteio/giveaway",
 usage: "<tempo> <canal> <prêmio>",
 category: "fun",
 run: async (bot, message, args) => {
     if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Você não tem permissão para utilizar este comando!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Eu não tenho permissão para fazer isso!");
 if (!args[0]) return message.channel.send(`**${message.author.username}** utilize: **t!sorteio <tempo> <#canal> <prêmio>**`);
 if (
 !args[0].endsWith("d") &&
 !args[0].endsWith("h") &&
 !args[0].endsWith("m")
 )
 return message.channel.send(
 `**${message.author.username}** Você não usou a forma correta para a hora!`
 );
 if (isNaN(args[0][0])) return message.channel.send(`**${message.author.username}** Isso não é um número!`);
 let channel = message.mentions.channels.first();
 if (!channel)
 return message.channel.send(
 `**${message.author.username}** Eu não consegui encontrar aquele canal na guilda!`
 );
 let prize = args.slice(2).join(" ");
 if (!prize) return message.channel.send(`Nenhum prêmio especificado!`);
 message.channel.send(`**O Sorteio de ${prize} foi criado no canal ${channel} com sucesso!**`);
 let Embed = new Discord.MessageEmbed()
 .setTitle(`:tada: SORTEIO!! :tada:`)
 .setDescription(`Sorteio: **${prize}** \n **Reaja com :tada: para participar !**`)
 .setTimestamp()
 .setColor('GOLD')
 .setFooter(`Sorteio iniciado por: ${message.author.tag}`);
 let m = await channel.send(Embed);
 m.react("🎉");
 setTimeout(() => {
 if (m.reactions.cache.get("🎉").count <= 1) {
 message.channel.send(`Reações do Sorteio: ${m.reactions.cache.get("🎉").count}`);
 return message.channel.send(
 `**Não houve pessoas suficientes** para eu começar a **sortear um vencedor**!`
 );
 }

 let winner = m.reactions.cache
 .get("🎉")
 .users.cache.filter((u) => !u.bot)
 .random();
 channel.send(
 `O vencedor do sorteio **(${prize})** foi... **${winner}**, parabéns ! :tada:`
 );
 }, ms(args[0]));
 },
};