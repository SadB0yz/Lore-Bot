exports.run = (client, message, [mention, ...reason]) => {
  if (!message.member.hasPermission("KICK_MEMBERS"))
  return message.channel.send("Você não tem permissão para utilizar este comando!");    

  if (message.mentions.members.size === 0)
    return message.channel.send(`**${message.author.username} você se esqueceu de mencionar alguém valido para kickar.**`);    

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    const embed = {
      "title": `✅ ${message.author.username} o usuário foi kickado com sucesso!!! ✅`,
      "description": "",
      "color": 91291,
      "footer": {
        "text": ""
      }
    };
    message.channel.send({ embed });
  });
};