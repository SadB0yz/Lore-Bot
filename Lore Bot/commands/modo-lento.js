const Discord = require("discord.js")
exports.run = (client, message, args) => {
    try{
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Você não tem permissão para utilizar este comando!`)
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Eu não tenho permissão para fazer isso!");
        if(!args[0] || args[0] > 21600) return message.channel.send(`**${message.author.username} insira um tempo em segundos. Máximo: 21600 segundos.**`)
        message.channel.setRateLimitPerUser(args[0])
        let avatar = message.author.displayAvatarURL({format: 'png'});
        var embed = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setFooter(message.author.tag, avatar)
        .setTimestamp()
        .setDescription(`**Modo Lento foi ativado para**: **${args.join(' ')} segundos!**`)
        message.channel.send({embed});
    }catch(err){
        message.channel.send(`**${message.author.username} erro ao colocar ${args[0]} no Modo Lento.**`)
    }
}
