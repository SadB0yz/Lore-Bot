const Discord = require("discord.js");

module.exports = async (client, member, members) => {
    
    let rEmbed = new Discord.MessageEmbed()
       .setThumbnail(member.user.AvatarURL)
       .setTitle(`**Novo Membro - ${member.user.tag}**`)
     .setDescription("**:wave:Bem-vindo(a)!**")
     .setImage('https://media1.tenor.com/images/f907fce12bf03d54525df89bd9e09f1c/tenor.gif?itemid=16329777')
       .addFields(
         { name: `Olá ${member.user.tag}, Bem-vindo à Sky Store !!!:moneybag:`, value: `\n**Você é o membro de número ${member.guild.memberCount} na nossa loja!**`}
       )
       .setFooter(`ID do usuário: ${member.user.id}`)
    message.guild.channels.cache.get('764123568211886101').send(rEmbed)
    
  }