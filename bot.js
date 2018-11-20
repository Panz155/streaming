const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  https://discord.gg/ZmmsvYp  `,'https://www.twitch.tv/MeeRcY')

});

client.login(process.env.BOT_TOKEN); 
