const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log('${client.user.tag} - rich presence started!');

  const r = new Discord.RichPresence()
    .setApplicationId('1103491371005915176')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=zdfacEpzDIA') //Must be a youtube video link 
    .setState('agony')
    .setName('worstgen')
    .setDetails('black star')


 .setAssetsLargeImage('https://i.pinimg.com/originals/f5/8b/0d/f58b0d9db0c1167ba887316b0657b22e.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('shadow') //Text when you hover the Large image
    .setAssetsSmallImage('https://i.pinimg.com/originals/62/55/0f/62550f0baeb01b9a1a9683d2ba600c17.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ok') //Text when you hover the Small image
    .addButton('silent', 'https://youtu.be/MgKebqcV8o4?si=dgHDldkwXhPvTXw4')
    .addButton('cart', 'https://youtu.be/cb5jYBG71-0?si=r3ZDEmsXqMRAL-_y');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = 'black star' ;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
