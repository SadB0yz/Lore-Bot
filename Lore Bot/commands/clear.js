const discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
  name:"clear",
  aliases: ['cc','limpar'],
  run: async (client, message, args) => {
    let error = new discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle("**APAGAR O LOG DO CHAT**")
    .addField("**Uso:**",`**${prefix}clear <número de 1 a 99>**`)
    .addField(":green_book: **Exemplo:**", `**${prefix}clear 85**`)
    .addField(":bookmark: **Permissão**", `**MANAGE_MESSAGES**`)
    .addField(":leftwards_arrow_with_hook: **Alternativas**", `**${prefix}cc**`)
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você não tem permissão para utilizar este comando!`)
    
    const deleteCount = parseInt(args[0], 10)
    if(!deleteCount || deleteCount < 1 || deleteCount > 99) return message.channel.send(error)
    if(isNaN(args[0])) return message.channel.send("NÚMERO!!!!")
    const fetched = await message.channel.messages.fetch({ limit : deleteCount + 1})
    
    message.channel.bulkDelete(fetched);
    message.channel.send(`**Algumas mensagens do Chat foram apagada!**`).then
      .catch(error => console.log(`**não foi possivel deletar as mensagens, Motivo: ${error}**`))    
  }
}