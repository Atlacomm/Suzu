/****************************************
 *
 *   Pic: Command for Suzu
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
module.exports.run = async (client, msg) => {
    const Discord = require('discord.js');
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
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'pic',
  description: 'The pic command',
  usage: 'pic <mention>',
  category: '- Utility Commands',
};
