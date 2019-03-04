/****************************************
 *
 *   Command here: Command for Suzu
 *   Copyright (C) 2019 Designed and Programed by Ree and ServerLion
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/
const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));



module.exports.run = async (client, msg, args) => {
   try{
    if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.reply(":warning:insufficient permissions");
    let wUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0])
    if(!wUser) return msg.reply(":x:error, couldn't find the member.")
    if(wUser.hasPermission("KICK_MEMBERS")) return msg.reply(":warning:insufficient permissions\nThis user is a moderator, and therefor is excempt from warns.");
    let reason = args.join(" ").slice(22);
 
    if(!warns[wUser.id]) warns[wUser.id] = {
         warns: 0
    };
 
    warns[wUser.id].warns++;
 
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    let warnchannel = client.channels.find(ch => ch.id === '539142431552176139');
    let warnEmbed = new Discord.RichEmbed();
    warnEmbed.setTitle("USER WARNING")
    warnEmbed.setDescription("warns")
    warnEmbed.setColor(0xffff00)
    warnEmbed.addField("Warned user", `<@${wUser.tag}>`)
    warnEmbed.addField("Warned in", `${msg.channel.name}`)
    warnEmbed.addField("Warned on", `${new Date()}`)
    warnEmbed.addField("Number of warnings", `${warns[wUser.id].warns}`)
    warnEmbed.addField("Reason", `${reason}`)
    warnEmbed.setFooter("Use "+require('../settings.json').prefix+"help to see all of my commands");
    warnchannel.send({warnEmbed});
    msg.reply(`<@${wUser.id}> has been warned for \`${reason}\`! they currently have ${warns[wUser.id].warns} warnings.`);
 
    
    
    
 
    if(warns[wUser.id].warns == 3){
     let muterole = msg.guild.roles.find(`name`, "Muted");
     if(!muterole) return warnchannel.send(":warning:failed to give a user the \"Muted\" role. please create a role called `Muted`, change the permissions of this role so that the user cannot send messages.");
     
     let mutetime = "12h";
     await(wUser.addRole(muterole.id));
     warnchannel.send(`<@${wUser.id}> has been tempmuted for ${mutetime}`);
 
     setTimeout(function(){
         wUser.removeRole(muterole.id)
         warnchannel.send(`<@${wUser.if}> has been unmuted.`);
     }, 43200000)
    }
 
    if(warns[wUser.id].warns == 4){
     let muterole = msg.guild.roles.find(`name`, "Muted");
     if(!muterole) return warnchannel.send(":warning:failed to give a user the \"Muted\" role. please create a role called `Muted`, change the permissions of this role so that the user cannot send messages.");
     
     let mutetime = "24h";
     await(wUser.addRole(muterole.id));
     warnchannel.send(`<@${wUser.tag}> has been tempmuted for ${mutetime}`);
 
     setTimeout(function(){
         wUser.removeRole(muterole.id)
         warnchannel.send(`<@${wUser.tag}> has been unmuted.`);
     }, 86400000)
    }
   }catch (e) {
    console.error(e);}



   

};

exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'warn',
  description: 'The warn command',
  usage: 'warn',
  category: '- Moderation Commands',
};