const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("If you can dream it you can do it",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('2Wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('1Ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('3St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`${argresult} \` `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '..1') {
  let channel = client.channels.get('511744532992229377');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
 
const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("If you can dream it you can do it",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('2Wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('1Ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('3St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`${argresult} \` `)
  
  }
          
});
client.login(process.env.BOT_TOKEN);
 
