exports.run = async (client, message, args) => {
    const Discord = require('discord.js');

let avatar = message.author.displayAvatarURL({format: 'png'});
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('GOLD')
	.setTitle('**__Minhas informações:__ **')
	.setThumbnail('https://cdn.discordapp.com/icons/762401851072577618/a4b355cdcef6c028c7b086df848b3419.png?size=2048')
	.addFields(
		{ name: '**Servidores:**', value: `**\`\`${client.guilds.cache.size}\`\`**`, inline: true },
		{ name: '** Usuários:**', value: `**\`\`${client.users.cache.size}\`\`**`, inline: true },
		{ name: '**Canais:**', value: `**\`\`${client.channels.cache.size}\`\`**`, inline: true },
		{ name: '**NickName:**', value: '``Lore Shopping#2736``', inline: true },
		{ name: '**Prefixo:**', value: '``/``', inline: true },
		{ name: '**Linguagem:**', value: '``JavaScript``', inline: true },
		{ name: '**Commands:**', value: `\`\`${client.commands.size}\`\``, inline: true },
		{ name: '**Livraria:**', value: '**[Discord.js](https://discordbot.com)**', inline: true },
		{ name: '**Versão:**', value: '``v12``', inline: true },
		{ name: '**Criação:**', value: '``10/09/2020``', inline: true },
		{ name: '**Developer:**', value: '**<! SadBoy#0999>**', inline: true },
	)
	.setTimestamp()
	.setFooter(message.author.tag, avatar);
    
    message.channel.send(exampleEmbed);

}