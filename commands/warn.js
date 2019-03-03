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
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));



module.exports.run = async (client, msg, args) => {
   if(!msg.member.hasPermission("MANAGE_MEMBERS")) return msg.reply(":warning:insufficient permissions");
   let wUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0])
   if(!wUser) return msg.reply(":x:error, couldn't find the member.")
   if(wUser.hasPermission("MANAGE_MEMBERS")) return msg.reply(":warning:insufficient permissions\nThis user is a moderator, and therefor is excempt from warns.");
   let reason = args.join(" ").slice(22);

   if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
   };

   warns[wUser.id].warns++;

   fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
       console.log(err)
   });

   let warnEmbed = new Discord.RichEmbed()
   .setDescription("warns")
   .setColor(0xffff00)
   .addField("Warned user", `<@${wUser.tag}>`)
   .addField("Warned in", msg.channel)
   .addField("Warned on", new Date())
   .addField("Number of warnings", warns[wUser.id].warns)
   .addField("Reason", reason);

   let garage = client.channels.find(ch => ch.id === '539142431552176139');

   msg.channel.send({warnEmbed})
   garage.send({warnEmbed});

   if(warns[wUser.id].warns == 3){
    let muterole = msg.guild.roles.find(`name`, "Muted");
    if(!muterole) return garage.send(":warning:failed to give a user the \"Muted\" role. please create a role called `Muted`, change the permissions of this role so that the user cannot send messages.")
    
    let mutetime = "12h";
    await(wUser.addRole(muterole.id));
    garage.send(`<@${wUser.tag}> has been tempmuted for ${mutetime}`);

    setTimeout(function(){
        wUser.removeRole(muterole.id)
        garage.send(`<@${wUser.tag}> has been unmuted.`)
    }, mutetime)
   }

   if(warns[wUser.id].warns == 4){
    let muterole = msg.guild.roles.find(`name`, "Muted");
    if(!muterole) return garage.send(":warning:failed to give a user the \"Muted\" role. please create a role called `Muted`, change the permissions of this role so that the user cannot send messages.")
    
    let mutetime = "12h";
    await(wUser.addRole(muterole.id));
    garage.send(`<@${wUser.tag}> has been tempmuted for ${mutetime}`);

    setTimeout(function(){
        wUser.removeRole(muterole.id)
        garage.send(`<@${wUser.tag}> has been unmuted.`)
    }, mutetime)
   }

   if(warns[wUser.id].warns == 5){
       
   }



   

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