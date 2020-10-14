module.exports = (client, guild, message) => {
  console.log(`[GUILD LEAVE] ${guild.name} (${guild.id}) Removeu o bot.`)
  client.user.setActivity(`${client.guilds.cache.size} guilds, ${client.users.cache.size} users.`)
};