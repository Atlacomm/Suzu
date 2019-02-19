/****************************************
 *
 *   Ping: Command for Suzu
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
    console.log(client.ping);
    let embed = new Discord.RichEmbed();
    embed.setTitle("Client Ping");
    embed.setColor(0x16ff00);
    embed.setDescription(":signal_strength: It took me **  ${Math.round(client.ping)} ms ** to respond.");
    embed.setFooter("Use "+ require('../settings.json').prefix +"help to see all of my commands");
    msg.channel.send({embed});
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'ping',
  description: 'The ping command',
  usage: 'ping',
  category: '- Utility Commands',
};
