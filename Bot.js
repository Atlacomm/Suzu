/* 
Suzu! A bot for the Hovercar Dodge! server
Designed and Programed by Ree (but serverlion and cylex helped me because my programming is gei)
*/
const Discord = require('discord.js');
const config = require ("./config.json");
const client = new Discord.Client();
const prefix = ("suzu:");
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
  "the crash report screen",
  "why do I keep crashing ayy lmao",
  "playing now",
  "i smell like beef",
  "Overwatch",
  "MY DOG JUST RAN OUt tHe dOoR aGaIn",
  "h",
  "BAN ALL FURrIEs",
  "owo",
  "uwu",
  "uwo",
  "OwO",
  "with shit im not supposed to play with"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let channel = client.channels.find(ch => ch.id === '537119674828324890');
  let embed = new Discord.RichEmbed(); 
  try{  
  embed.setTitle("ONLINE");
    embed.addField('Suzu is now online', 'The bot has started. This may be due to a crash or an owner calling the reset function.');
    embed.setColor(0x16ff00);
    embed.addField('Client Ping', `The client took **${Math.round(client.ping)}ms** to respond.`);
    embed.setFooter("Use suzu:help to see all of my commands");
    channel.send({embed});
  } catch (error) {
    console.error(error);
  }
  })
  
  
  setInterval(() => 
  {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 10000);
  client.guilds.forEach((guild) => {
    console.log(" - " + guild.name)
    
  
});


client.on('message', msg=> {
  try{
  if (!msg.guild) return;
  if (msg.content === prefix + 'ping') {
    console.log(client.ping);
    let embed = new Discord.RichEmbed();
    embed.setTitle("Client Ping");
    embed.setColor(0x16ff00);
    embed.setDescription(`It took me **  ${Math.round(client.ping)} ms ** to respond.`);
    embed.setFooter("use suzu:help to see all of my commands");
    msg.channel.send({embed});
  }
  else if (msg.content === prefix + 'help'){
    let embed = new Discord.RichEmbed();
    embed.setTitle("Help for Suzu");
    embed.setColor(0x16ff00);
    embed.addField("Commands", "ping\npic")
    if (msg.member.hasPermission("KICK_MEMBERS")){ embed.addField("Moderation", "\nkick\nban\nnuke")}
    if (msg.author.id == "472923135965003786" || msg.author.id == "299314446428274689"){embed.addField("Bot Managment", "\nRESET")}
    embed.setFooter("Developed by Ree and ServerLion.");
    msg.channel.send({embed});
  } else if (msg.content.startsWith (prefix + 'pic')){
    let user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          let embed = new Discord.RichEmbed();
          embed.setTitle("Profile Picture");
          embed.setColor(0x16ff00);
          embed.setImage(user.avatarURL);
          embed.setFooter("use suzu:help to see all of my commands");
          msg.channel.send({embed});   
       }
    }else{
      let embed = new Discord.RichEmbed();
      embed.setTitle("Profile Picture");
      embed.setColor(0x16ff00);
      embed.setDescription("I must say, you look flattering! :stuck_out_tongue_winking_eye:")
      embed.setImage(msg.author.avatarURL);
      embed.setFooter("use suzu:help to see all of my commands");
      msg.channel.send({embed});     
    }
  } else if (msg.content.startsWith (prefix + 'nuke')){
    if (!msg.member.hasPermission("BAN_MEMBERS")){
      msg.reply("Hold up! You aren't allowed to nuke messages!");
      return;
    }
    msg.channel.send(":radioactive: Nuking Channel...");
    msg.channel.bulkDelete(99, true);
    msg.channel.send(":radioactive: Nuked Channel.");
  } else if (msg.content.startsWith (prefix + 'kick')){
    if (!msg.member.hasPermission("KICK_MEMBERS")){
      msg.reply("Hold up! You aren't allowed to kick members!");
      return;
    }
    let user = msg.mentions.users.first();
      const member = msg.guild.member(user);
      if (member) {
        member.kick('Kicked by ' + msg.author.username + ' using Suzu.').then(() => {
          msg.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          msg.reply('I was unable to kick the member');
          console.error(err);
        });
    }
  } else if (msg.content.startsWith(prefix + 'ban')) {
    if (!msg.member.hasPermission("BAN_MEMBERS")){
      msg.reply("Hold up! You aren't allowed to ban members!");
      return;
    }
    let user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Banned by ' + msg.author.username + ' using Suzu.',
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
  else if(msg.content === prefix + 'RESET'){
    if (msg.author.id == "472923135965003786" || msg.author.id == "299314446428274689"){ 
      console.log('Restarting...')
      let embed = new Discord.RichEmbed();
      embed.setTitle("RESET");
      embed.setColor(0xff0000);
      embed.setDescription('Suzu will now restart.');
      embed.setFooter("This may take a while...");
      msg.channel.send({embed})
      setTimeout(function(){ 
        resetBot(); 
      }, 3000);
    } else {
      msg.reply("Hold up! You aren't a dev! :thinking:");
      return;
    }
  }
  else if(msg.content === prefix + 'about'){
    let embed = new Discord.RichEmbed();
    embed.setTitle("About Bot");
    embed.setColor(0x16ff00);
    embed.setDescription('Suzu is a multi purpose bot designed to function in the Hovercar Dodge discord server')
    embed.addField("Developers", "Rest in peace, Opportunity.#9105\nServerLion#1789");
    embed.addField("Links", "[Github](https://github.com/cjthomp2005/Suzu)\n[Discord](https://discord.gg/t9JTUb)");
    embed.setFooter("Use suzu:help to see all of my commands");
    msg.channel.send({embed})
  }
  else if(msg.content === prefix + 'yell at cylex'){
    msg.channel.send("cylex, nobody cares about the caps lock.")
  }
  else if(msg.content.startsWith(prefix)){
    let embed = new Discord.RichEmbed();
    embed.setTitle("Unknown Command");
    embed.setColor(0xff0000);
    embed.setDescription('Please use **suzu:help** to see all available commands.')
    msg.channel.send({embed})
  }
} catch (error) {
  console.error(error)
}
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'general');
    let embed = new Discord.RichEmbed();
    embed.setTitle("New Member!");
    embed.setColor(0x16ff00);
    embed.setDescription('Welcome to the server, ' + member.user.username);
    embed.setFooter("use suzu:help to see all of my commands");
    channel.send({embed});
    if (member.guild.id != "537101504864190464") return;
    channel = client.channels.find(ch => ch.id === '539142431552176139');
    channel.send(":arrow_right: " + member.user.tag);
  });
  client.on('guildMemberRemove', member => {
    if (member.guild.id != "537101504864190464") return;
    let channel = client.channels.find(ch => ch.id === '539142431552176139');
    channel.send(":arrow_left: " + member.user.tag);
  });
  client.on('guildBanAdd', (guild, user) => {
    if (guild.id != "537101504864190464") return;
    let channel = client.channels.find(ch => ch.id === '539142431552176139');
    channel.send(":hammer: Banned User: " + user.tag)
  });
  client.on('guildBanRemove', (guild, user) => {
    if (user.guild.id != "537101504864190464") return;
    let channel = client.channels.find(ch => ch.id === '539142431552176139');
    channel.send(":no_entry_sign: :hammer: Unbanned User: " + user.tag)
  });
  client.on('channelCreate', channel => {
    if (channel.guild.id != "537101504864190464") return;
    channel.send("First");
  });
  client.on('messageDelete', message => {
    if (message.channel.guild.id != "537101504864190464") return;
    let channel = client.channels.find(ch => ch.id === '539142431552176139');
    let embed = new Discord.RichEmbed();
    embed.setTitle(":wastebasket:");
    embed.setColor('red');
    embed.setDescription('Message by ' + message.author.tag + ' deleted on ' + new Date());
    embed.addField("Message content", message);
    channel.send({embed});
  });
  client.on('messageUpdate', (oldMessage, newMessage) => {
    try{
    if (oldMessage.channel.guild.id != "537101504864190464") return;
    if (oldMessage == newMessage) return;
    if (newMessage == oldMessage) return;
    let channel = client.channels.find(ch => ch.id === '539142431552176139');
    let embed = new Discord.RichEmbed();
    embed.setTitle(":wastebasket:");
    embed.setColor('orange');
    embed.setDescription('Message by ' + oldMessage.author.tag + ' edited on ' + new Date());
    embed.addField("Old Message", oldMessage + " ");
    embed.addField("New Message", newMessage + " ");
    channel.send({embed});  
    } catch (error) {
      console.error(error);
    }  
  });
function resetBot(channel) {
    process.exit(0)
  }
client.login(config.token);