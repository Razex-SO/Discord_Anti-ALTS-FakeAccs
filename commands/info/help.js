const Discord = require('discord.js');

module.exports = {
	name: 'antialt',
	run: async (client, message, args) => {
		const embed = new Discord.MessageEmbed()
			.setTitle(client.user.username + ` | <a:settings:870251958869585970> AntiAlt settings`)
			.setThumbnail(client.user.displayAvatarURL())
			.addField(`Anti Alt usage :`, '`+config-alt` | `+bypass-alt` | `+fetch-alts`')
      
			.setDescription(`**The commands are listed below**`)
			.setColor(`GREEN`)
			.setFooter(message.guild.name + " | Server Share 2021", message.guild.iconURL({ dynamic: true }));
		return message.channel.send({ embed: embed });
	}
};
