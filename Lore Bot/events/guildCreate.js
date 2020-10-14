module.exports = (client, guild, message) => {
    console.log(`[GUILD JOIN] ${guild.name} (${guild.id}) adicinou o bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
    client.user.setActivity(`${client.guilds.cache.size} guilds, ${client.users.cache.size} users.`)
  };