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


    embed.setTitle("ONLINE");
    embed.setColor(0xfffd00);
    embed.addField('BOT RESET SUCCESSFULLY', 'SUZU IS NOW ONLINE. **WARNING, IF THIS BOT KEEPS SENDING THIS MESSAGE, PLEASE PING AN ADMIN IMMEDIATELY**. if the bot was not told to reset please contact **Rest in peace, Opportunity.#9105** immediately as this message is now unsolicited and needs to be addressed as soon as possible, for it could be due to a crash.');
    

    embed.setFooter("running startup commands in 6 seconds");
    let msg = await channel.send({embed})
    setTimeout(() => {
        embed.setFooter("running startup commands in 5 seconds");
        msg.edit({embed});
    }, 1000)
    setTimeout(() => {
      embed.setFooter("running startup commands in 4 seconds");
      msg.edit({embed});
    }, 2000)
    setTimeout(() => {
      embed.setFooter("running startup commands in 3 seconds");
     msg.edit({embed});
    }, 3000)
    setTimeout(() => {
      embed.setFooter("running startup commands in 2 seconds");
     msg.edit({embed});
    }, 4000)
    setTimeout(() => {
      embed.setFooter("running startup commands in 1 seconds");
     msg.edit({embed});
    }, 5000)
    setTimeout(() => {
      var round =Math.round(client.ping);
        embed.setColor(0x16ff00);
        embed.addField('Client Ping', 'the client took ' + round + 'ms to respond.' )
        embed.setFooter("use suzu:help to see all of my commands");
        msg.edit({embed});
    }, 6000).catch(err => {
      console.log("on ready event error");
      console.error(err);
    })
    

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
  if (!msg.guild) return;
  if (msg.content === prefix + 'ping') {
    console.log(client.ping);
    var round =Math.round(client.ping); 
    let embed = new Discord.RichEmbed();
    embed.setTitle("Client Ping");
    embed.setColor(0x16ff00);
    embed.addField("ping", "it took me " + round + " ms to respond")
    embed.setFooter("use suzu:help to see all of my commands");
    msg.channel.send({embed});
  }
  else if (msg.content === prefix + 'help'){
    let embed = new Discord.RichEmbed();
    embed.setTitle("Help for Suzu");
    embed.setColor(0x16ff00);
    embed.addField("Commands", "ping\npic")
    embed.addField("Moderation", "\nkick\nban")
    embed.addField("Bot Managment", "\nRESET")
    embed.setFooter("Note: my code is mostly ServerLion's because Ree cant code.");
    msg.channel.send({embed});
  }else if (msg.content.startsWith (prefix + 'pic')){
    let user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          let embed = new Discord.RichEmbed();
          embed.setTitle("profile picture");
          embed.setColor(0x16ff00);
          embed.addField("here is the profile picture!", "need anything else?:grin:");
          embed.setImage(user.avatarURL);
          embed.setFooter("use suzu:help to see all of my commands");
          msg.channel.send({embed});
          
          
        }
    }
    else{
      let embed = new Discord.RichEmbed();
      embed.setTitle("profile picture");
      embed.setColor(0x16ff00);
      embed.addField("here is your profile picture!", "I must say, you look flattering!:stuck_out_tongue_winking_eye:")
      embed.setImage(msg.author.avatarURL);
      embed.setFooter("use suzu:help to see all of my commands");
      msg.channel.send({embed});
      
      
    }
  } 
  else if (msg.content.startsWith (prefix + 'kick')){
    if (msg.author.id != "472923135965003786"){
      msg.reply("Hold up! You aren't Ree!:thinking:");
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
      msg.reply("Hold up! You aren't Ree!:thinking:");
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
  else if(msg.content === prefix + 'RESET'){
    if (msg.author.id != "472923135965003786"){
      msg.reply("Hold up! You aren't Ree!:thinking:");
      return;
    }
    console.log('RESETTING BOT')
    let embed = new Discord.RichEmbed();
    embed.setTitle("RESET");
    embed.setColor(0xff0000);
    embed.addField('NOW RESETTING SUZU', 'REBOOTING');
    embed.setFooter("CLIENT MAY TAKE A WHILE TO COME BACK ONLINE");
    msg.channel.send({embed})
    setTimeout(function(){ 
      resetBot(); 
    }, 3000);
  }
  else if(msg.content === prefix + 'about'){
    let embed = new Discord.RichEmbed();
    embed.setTitle("About Bot");
    embed.setColor(0x16ff00);
    embed.addField('information:', 'Suzu is a multi purpose bot designed to function in the Hovercar Dodge discord server, it was developed by **Rest in peace, Opportunity#9105** and **ServerLion#1789**. you can go to the github repository [here](https://github.com/cjthomp2005/Suzu/) and you can go to the Hovercar Dodge discord server [here](https://discord.gg/3VNHTBg).')
    embed.setFooter("use suzu:help to see all of my commands");
    msg.channel.send({embed})
  }
  else if(msg.content === prefix + 'yell at cylex'){
    msg.channel.send("cylex, nobody cares about the caps lock.")
  }
  else if(msg.content.startsWith(prefix)){
    let embed = new Discord.RichEmbed();
    embed.setTitle("UNKNOWN COMMAND");
    embed.setColor(0xff0000);
    embed.addField('ERROR: unknown command', 'please use **suzu:help** to see all available commands.')
    embed.setFooter("use suzu:help to see all of my commands");
    msg.channel.send({embed})
  }
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'general');
    let embed = new Discord.RichEmbed();
    embed.setTitle("New Member!");
    embed.setColor(0x16ff00);
    embed.addField('oh, you must be new.', 'welcome to the server, ' + member.user.username);
    embed.setFooter("use suzu:help to see all of my commands");
    channel.send({embed});
    
  });
function resetBot(channel) {
    process.exit(0)
  }
client.login(config.token);
