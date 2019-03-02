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
    embed.setTitle("Bot functions");
    embed.setColor(0xFFFF00);
    embed.setDescription('a private message has been sent to you containing everything the bot does and what data it collects.')
    embed.setFooter("Use "+require('../settings.json').prefix+"help to see all of my commands. these commands can only be used in Servers and not DMs");
    msg.channel.send({embed})
    
    let sembed = new Discord.RichEmbed
    sembed.setTitle("Bot functions")
    sembed.setColor(0xFFFF00);
    sembed.setDescription("you requested that I send all of my functions too you.")
    sembed.addField("moderation", "the bot collects to following information and alerts the moderation team\n-edited messages\n-deleted messages\n-name changes\n-times at which messages were edited or deleted\n-times at which members joined or leaved the server")
    sembed.addField("what can Suzu do?", "suzu can do many things, right now Suzu is able to\n-grab a users profile picture\n-find the client ping\n-restart itself\n-kick and ban people\n-nuke channels\n-read and write information for economy")
    sembed.setFooter("Use "+require('../settings.json').prefix+"help to see all of my commands. these commands can only be used in Servers and not DMs");
    msg.author.send({sembed})
};
exports.conf = {
  aliases: ['f'],
  guildOnly: true,
};
exports.help = {
  name: 'functions',
  description: 'sends a private message to the author of all of the functions of the bot, and what data the bot collects.',
  usage: 'functions',
  category: '- Utility Commands',
};
