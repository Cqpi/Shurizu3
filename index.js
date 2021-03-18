const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./welcome");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

welcome(client);
});

client.on('message', msg => {
  if (msg.content === '!sourcecode') {
    msg.reply('how i see u wanna have my source code no problem here are my github link https://github.com/Cqpi/Shurizu-source/tree/main');
  }
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('ok here are my contact things: Whatsapp number: +972 55-727-0147 2 Whatsapp Number: +1 (209) 286-6963 Email: Cqpicontact@gmail.com');
  }
});

  client.login('ODE2MjA5ODc0NjUyMTAyNjc3.YD3org.wLJCjywQ9Lq6jvTJ4S9wk_jjmco');
  