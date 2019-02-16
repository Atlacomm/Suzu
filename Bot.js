/* 
Suzu! A bot for the Hovercar Dodge! server
Designed and Programed by Ree (but serverlion and cylex helped me because my programming is gei)
*/
const Discord = require('discord.js');
const config = require ("./config.json");
const client = new Discord.Client();
const prefix = ("suzu:");
const pinglist = [
  "heya! ",
  "heya! ",
  "whats up? ",
  "sorry if im late! ",
  "did someone say something? ",
  "tell AstralMod I said hi! ",
  "to ping or not to ping, ",
  "heya! "
];
const activities_list = [
  "with the suzu:help command.", 
  "Hovercar Dodge!",
  "with Unity prefabs", 
  "with JavaScript",
  "Visual studio",
  "Bot Arena!!",
  "the violin",
  "windows XP startup sound",
  "with the lights",
  "DeSpAcItO",
  "Big Chungus PS4",
  "vines on youtube at 3 AM",
  "minecraft 2",
  "some dank memes",
  "Stranger Things on Netflix",
  "Lost In Space on Netflix",
  "A Series Of Unfortunate Events on Netflix",
  "Shrek, the anime",
  "God",
  "Astroneer",
  "Pirates in the car I be in",
  "WhoCanGetTheFluFirst",
  "you thought i would put something funny here didnt you",
  "Subnautica",
  "Minecraft",
  "Mii channel music",
  "Wii",
  "Asphalt 9 Legends",
  "Monument Valley",
  "Rocket League",
  "Geometry Dash",
  "Terra Tech",
  "Cuphead",
  "Cities: Skylines",
  "Scrap Mechanic",
  "with google",
  "Hulu",
  "pinging @Swingin30",
  "the crash report screen"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => 
  {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 10000);
  client.guilds.forEach((guild) => {
    console.log(" - " + guild.name)
  });
});


client.on('message', msg => {
  if (!msg.guild) return;
  if (msg.content === prefix + 'ping') {
    console.log(client.ping);
    const pmessage = Math.floor(Math.random() * (pinglist.length - 1) + 1);
    var round =Math.round(client.ping); 
    msg.reply((pinglist[pmessage]) + 'it took ' + round + 'ms to respond.');
  }
  else if (msg.content === prefix + 'help'){
    let embed = new Discord.RichEmbed();
    embed.setTitle("Help for Suzu");
    embed.setColor("green");
    embed.addField("Commands", "ping\npic\nkick\nban")
    embed.setFooter("Note: my code is mostly ServerLion's because Ree cant code.");
  }else if (msg.content.startsWith (prefix + 'pic')){
    let user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
            msg.reply (user.avatarURL);
        }
    }
    else{
      msg.reply(msg.author.avatarURL);
    }
  } 
  else if (msg.content.startsWith (prefix + 'kick')){
    if (msg.author.id != "472923135965003786"){
      msg.reply("Hold up! You aren't Ree!");
      return;
    }
    let user = msg.mentions.users.first();
      const member = msg.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          msg.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          msg.reply('I was unable to kick the member');
          console.error(err);
        });
    }
  } else if (msg.content.startsWith(prefix + 'ban')) {
    if (msg.author.id != "472923135965003786"){
      msg.reply("Hold up! You aren't Ree!");
      return;
    }
    let user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          msg.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          msg.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        msg.reply('That user isn\'t in this guild!');
      }
    } else {
      msg.reply('You didn\'t mention the user to ban!');
    }
  }
  else if(msg.content.startsWith(prefix)){
    msg.reply('this is an unknown command, you can use `suzu:help` for more information on what my commands are.')
  }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'general');
    channel.send(`Welcome to the server, ${member}`);
  });

client.login(config.token);
