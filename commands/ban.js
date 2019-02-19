/****************************************
 *
 *   Ban: Command for Suzu
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
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'ban',
  description: 'The ban command',
  usage: 'ban',
  category: '- Moderation Commands',
};
