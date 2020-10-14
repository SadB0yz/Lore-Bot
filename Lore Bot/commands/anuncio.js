const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Você não tem permissão para utilizar este comando!`)
 
    message.channel.send(`**Por favor, marque o canal para aonde será enviado o anuncio**`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                message.channel.send(`**${message.author.username} você precisa mencionar um canal!**`)
            } else {
                message.channel.send(`**Qual será a mensagem do anúncio?**`).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                   
                        message.channel.send(`**Qual será o titulo do anúncio?**`).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content
 
                                message.channel.send(`**O anúncio foi enviado para o canal ${canal} com sucesso**`)
 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('GOLD')
                                .setTimestamp()
                                .setFooter(`Este anuncio foi criado por: ${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
                                .setTitle(title)
                                .setDescription(desc)
 
                                canal.send("", embed)
                            })
                        })
                    })
                })
            }
        })
    })
 
}