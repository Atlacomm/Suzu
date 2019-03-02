/****************************************
 *
 *   Balance: Command for Suzu
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
  embed.setTitle("About Bot");
  embed.setColor(0x16ff00);
  embed.setDescription('Suzu is a multi purpose bot designed to function in the Thompson Developer Studios discord server')
  embed.addField("IMPORTANT:", "this is a development build, it may not be stable.")
  embed.addField("Developers", "Swingin30#9105\nServerLion#1789\nAlee#0014");
  embed.addField("Links", "[Github](https://github.com/cjthomp2005/Suzu)\n[Discord](https://discord.gg/t9JTUb)");
  embed.setFooter("Use "+require('../settings.json').prefix+"help to see all of my commands");
  msg.channel.send({embed})

};
exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'about',
  description: 'The about command',
  usage: 'about',
  category: '- Utility Commands',
};
