/****************************************
 *
 *   About: Command for Suzu
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
    let embed = new Discord.RichEmbed();
    embed.setTitle("hold up cowboy");
    embed.setColor(0xff0000);
    embed.setDescription('this is a development version of suzu, this command has not been implemented and is just a placeholder. we really are sorry, but if your seeing this message it means we are working on it!')
    embed.setFooter("Use "+require('../settings.json').prefix+"help to see all of my commands");
    msg.channel.send({embed})
};
exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'balance',
  description: 'The about command',
  usage: 'balance',
  category: '- Economy Commands',
};
