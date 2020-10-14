const ms = require('ms')
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const { id } = require("common-tags");
const client = new Discord.Client();
const config = require('./config.json')
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Carregando o comando ${commandName} espere um segundo ...`);
    client.commands.set(commandName, props);
  });
});

client.on("ready",  () => {
let activities = [
  ``,
]
i = 0;
setInterval(() => client.user.setActivity(`${activities[i ++ % activities.length]}`, {
  type: ""
}), 60000); //WATCHING // LISTENING // PLAYING // STREAMING
console.log(`Bot foi iniciado com sucesso!`)
client.user
   .setStatus("online") // dnd // online // idle // invisible
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content === `<@${client.user.id}>`) 
  message.reply(`***meu prefixo é \`\`${config.prefix}\`\`, para ver o que eu posso fazer, use \`\`${config.prefix}ajuda\`\`. |***`)
})

client.login(config.token);