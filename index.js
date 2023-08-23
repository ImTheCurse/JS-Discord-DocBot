#!/Rani/bin / env node

const getLinkIndex = require('./src/search');
const cleanIndex = require("./src/linksIndex");
const findLanguage = require('./src/search');

require('dotenv').config();

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const getImage = require('./src/toImage');
const getSnapshot = require('./src/toImage');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



client.on('ready', () => {
    console.log('Bot is running succefully!');
})

client.on('messageCreate', async (message) => {
    msg = message.content;
    if(!message.author.bot && (msg.includes('!js') || msg.includes('!HTML') || msg.includes('!CSS'))){
        message.reply({
        content: cleanIndex[getLinkIndex(message.content)],
        })
    }
    //TODO getting an image of syntax.
  //getSnapshot(cleanIndex[getLinkIndex(message.content)]);
     
    

})


client.login(process.env.DISCORD_BOT_ID);