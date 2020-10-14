const Discord = require('discord.js');

exports.run = (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Você não tem permissão para utilizar este comando!");
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Eu não tenho permissão para fazer isso!");
    
        let banMember = message.mentions.members.first();
        if(!banMember) return message.channel.send("Por favor, mencione um usuário para banir!");

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "A razão não foi informada.";

        
        try {
            banMember.ban(banMember, {days: 7}).then(() => {
                message.guild.unban(banMember);
            }).catch((e) => {
                console.log(e);
            });
        } catch (e) {
            console.log(e);
    }
    
    message.channel.send(`**BANIMENTO** \n O usuário ${banMember.user.username} foi **banido** do servidor. \n **MOTIVO**: ${reason}`);
}