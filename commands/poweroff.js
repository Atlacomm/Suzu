/****************************************
 *
 *   Poweroff: Command for Suzu
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
    if (msg.author.id == "472923135965003786" || msg.author.id == "299314446428274689" || msg.author.id == "242775871059001344"){ 
        let channel = client.channels.find(ch => ch.id === '539142431552176139');
        msg.reply("Suzu is now powering off...");
        console.log('Powering off...');
        let embed = new Discord.RichEmbed();
        embed.setTitle("Powering off...");
        embed.setColor(0xff0000);
        embed.setDescription('Suzu will now poweroff.');
        embed.setThumbnail('https://media.giphy.com/media/12zgfBTa1weBvoGGNn/giphy.gif');
        embed.setFooter("This may take a while...");
        let reply = await channel.send({embed})
        client.user.setStatus('invisible');
        setTimeout(() =>{
          embed.setThumbnail("https://cdn.discordapp.com/attachments/547952873355476992/547958234812514305/done.png");
          embed.setDescription("suzu has powered off!");
          embed.setFooter("done!");
          reply.edit({embed})
        }, 3000);
        setTimeout(() =>{
          process.exit(0);
        }, 4000);
      } else {
        msg.reply("Hold up! You aren't a dev! :thinking:");
        return;
      }
};

exports.conf = {
  aliases: [],
  guildOnly: false,
};
exports.help = {
  name: 'poweroff',
  description: 'The power off command',
  usage: 'poweroff',
  category: '- DEV commands',
};
