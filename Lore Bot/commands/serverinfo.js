const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    const moment = require("moment")
    moment.locale("pt-BR")
    let online = message.guild.members.cache.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.cache.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.cache.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.cache.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.cache.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.cache.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.cache.filter(a => a.type === "voice").size;
    let avatar = message.author.displayAvatarURL({format: 'png'});
    
        const embed = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`**INFORMAÇÕES PRINCIPAIS: \n\n Nome: \`\`${message.guild.name}\`\` \n ID do servidor: \`\`${message.guild.id}\`\` \n Dono: <@${message.guild.owner.id}> \n Região: \`\`Brazil\`\` \n Criado em: \`\`${moment(message.guild.createdAt).format('LLLL')}\`\` \n\n INFORMAÇÕES MEMBROS: \n\n Membros: \`\`${totalmembros}\`\` \n Onlines: \`\`${online}\`\` \n Ausentes: \`\`${ausente}\`\`\n Ocupados: \`\`${ocupado}\`\`\n Offlines: \`\`${offline}\`\`\n BOT's: \`\`${bot}\`\` \n\n INFORMAÇÕES CANAIS: \n\n Canais: \`\`${canaistexto+canaisvoz}\`\`\n Texto: \`\`${canaistexto}\`\`\n Voz: \`\`${canaisvoz}\`\`**`)
        .setTimestamp()
        .setFooter(message.author.tag, avatar)
        message.channel.send(embed)
}