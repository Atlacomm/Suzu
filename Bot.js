/* 
Suzu! A bot for the Hovercar Dodge! server
Designed and Programed by Ree (but serverlion and cylex helped me because my programming is gei)
*/
const Discord = require('discord.js');
const config = require ("./config.json");
const client = new Discord.Client();
const prefix = ("suzu:");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  if (!msg.guild) return;
  //And now, commands
  if (msg.content === prefix + 'ping') {
    msg.reply('im not dead! it took ' + client.ping + 'ms to respond.');
  }
  else if (msg.content === prefix + 'help'){
    msg.channel.send ('Hi there! below you can see some of my commands\n\nFirst off, you should know that my prefix is `suzu:` and will always be `suzu:`, use this in front of each command.\n\nping\nhi\npic (mention someone here)\n\nim always being updated because ree has the flu and has litteraly nothing else to do so if you have a suggestion, ping him!')
  }
  else if (msg.content.startsWith (prefix + 'pic')){
    let user = msg.mentions.users.first();
      if (user) {
        // Now we get the member from the user
        const member = msg.guild.member(user);
        // If the member is in the guild
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
    // Assuming we mention someone in the msg, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    let user = msg.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = msg.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the msg author know we were able to kick the person
          msg.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          msg.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        msg.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      msg.reply('You didn\'t mention the user to kick!');
    }
  }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'general');
    channel.send(`Welcome to the server, ${member}`);
  });



  



client.login(config.token);