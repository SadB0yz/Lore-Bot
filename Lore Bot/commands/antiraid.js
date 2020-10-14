const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const roleA = await message.guild.roles.cache.find(role => role.id === "763935972496244736"); 
  
    if (
      !message.member.roles.cache.some(r =>
        [
          "763938902381166604",
          "764311084886523945",
          "."
        ].includes(r.id) )) {
      return message.channel.send(`${message.author.username} este comando é restrito.`);
    } else if (message.content.includes("on")) {
      await roleA.setPermissions(67109889).catch(console.error);
  //Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
      await message.channel.send(`O sistema de Antiraid foi **ativado** por ${message.author.username}`);
    } else if (message.content.includes("off")) {
      await roleA.setPermissions(67111937).catch(console.error);
  //Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
      await message.channel.send(
        `O sistema de Antiraid foi **desativado** por ${message.author.username}`);
    } else {
      return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
    }
  };