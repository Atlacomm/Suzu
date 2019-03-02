/* 
    Suzu! A bot for the Hovercar Dodge! server
    Copyright (C) 2019 Designed and Programed by Ree and ServerLion

    Bot improvments by Alee
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
const Discord = require('discord.js');
const colors = require("colors");
const fs = require("fs");
const config = require ("./config.json");
const settings = require ("./settings.json");
const client = new Discord.Client();
const activities_list = [
  "with the "+settings.prefix+"help command.", 
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
  
  console.log(`Suzu: Copyright (C) 2019 Designed and Programed by Ree and ServerLion`.gray);
  console.log('This program comes with ABSOLUTELY NO WARRANTY; for details type `show w\'.'.gray);
  console.log ('This is free software, and you are welcome to redistribute it'.gray);
  console.log ('under certain conditions; type `show c\' for details.\n'.gray)

// Command Handler by jtsshieh and modified by Alee

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands into the memory.`.cyan);
  files.forEach(file => {
    try {
      const command = require(`./commands/${file}`);
      console.log(`Attempting to load the command "${command.help.name}".`.cyan);
      client.commands.set(command.help.name, command);
      command.conf.aliases.forEach(alias => {
        client.aliases.set(alias, command.help.name);
        console.log(`Attempting to load "${alias}" as an alias for "${command.help.name}"`.cyan);
      });
    }
    catch (err) {
      console.log('An error has occured trying to load a command. Here is the error.'.red);
      console.log(err.stack);
    }
  });
  console.log('Command Loading complete!'.green);
});

  client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`.green);
  let channel = client.channels.find(ch => ch.id === '539142431552176139');
  let embed = new Discord.RichEmbed(); 
  
  try{  
    embed.setTitle("Bot is online");
    embed.addField('SuzuBETA is now starting up', 'The bot has started. This may be due to a crash or an owner calling the reset function. please wait for the inicator to turn green before sending any commands, just incase.');
    embed.setColor(0xfff400);
    embed.setThumbnail('https://media.giphy.com/media/12zgfBTa1weBvoGGNn/giphy.gif');
    embed.setFooter("Use " + settings.prefix + "help to see all of my commands");
    let msg = await channel.send({embed})
    setTimeout(() => {
      var round = Math.round(client.ping);
        embed.setColor(0xfff400);
        embed.addField('Client Ping', ':signal_strength: The client took ' + round + 'ms to respond.' )
        msg.edit({embed});
      console.log(`Bot is ready!`.green);
    }, 6000);
    setTimeout(() => {
        embed.setColor(0x16ff00);
        embed.setThumbnail("https://cdn.discordapp.com/attachments/547952873355476992/547958234812514305/done.png");
        embed.addField('you may now use Suzu', `client successfully started on ${new Date()}`)
        msg.edit({embed});
    }, 9000);
    
  } catch (error) {
    console.log(error);
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

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (!msg.content.startsWith(settings.prefix)) return;
  const args = msg.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift();
  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
    if (cmd.conf.guildOnly == true) {
      if (!msg.channel.guild) {
        return msg.channel.createMessage('This command can only be ran in a guild.');
      }
    }
    try {
      cmd.run(client, msg, args);
    }
    catch (e) {
      console.error(e);
    }
  }

  try{

  if(msg.content === 'Yell at cylex'){
    msg.channel.send("cylex, nobody cares about the caps lock.")
  }
  if(msg.content.startsWith('y\'all')){
    msg.reply('I can see you are a southerner as well')
  }
  else if(msg.content.startsWith(settings.prefix) == null){
    let embed = new Discord.RichEmbed();
    embed.setTitle("Unknown Command");
    embed.setColor(0xff0000);
    embed.setDescription('Please use **'+settings.prefix+'help** to see all available commands. some commands may not be available to you depending on your role.')
    msg.channel.send({embed})
  }
} catch (error) {
  console.log(error)
}
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'general');
    let embed = new Discord.RichEmbed();
    embed.setTitle("New Member!");
    embed.setColor(0x16ff00);
    embed.setDescription('Welcome to the server, ' + member.user.username);
    embed.setFooter("Use "+settings.prefix+"help to see all of my commands");
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
    embed.setTitle(":wastebasket: Message Delete");
    embed.setColor(0xFF0000);
    embed.setDescription('Message by ' + message.author.username + ' deleted on ' + new Date());
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
    embed.setTitle(":pencil: Message Edit");
    embed.setColor(0xFF4500);
    embed.setDescription('Message by ' + oldMessage.author.username + ' edited on ' + new Date());
    embed.addField("Old Message", oldMessage);
    embed.addField("New Message", newMessage);
    channel.send({embed});  
    } catch (error) {
      console.log(error)
    }  
  });
client.login(config.token).catch(function() {
  console.log('Login failed. The token that you put in is invalid, please put in a new one...'.red);
  process.exit(0);
});