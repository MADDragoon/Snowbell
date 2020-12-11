const Discord = require('discord.js')

module.exports = {
    commands: ['serverinfo'],
    description: 'Gives the info of the server.',
    minArgs: '0',
    maxArgs: '0',
    callback: (message, arguments, text) => {
        const { guild } = message
        const { name, region, memberCount, owner, createdAt, verificationLevel } = guild
        const icon = guild.iconURL();
        const voiceChannelCount = message.guild.channels.cache.filter(c => c.type === 'voice').size;
        const textChannelCount = message.guild.channels.cache.filter(c => c.type === 'text').size;

        const servinv = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Server info for **${name}**`)
        .setThumbnail(icon)
        .addFields({
            name: 'Region',
            value: region,
        },
        {
            name: 'Members',
            value: memberCount,
        },
        {
            name: 'Owner',
            value: owner.user.tag,
        },
        {
            name: 'Created At',
            value: moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')
        },
        {
            name: 'Voice Channels',
            value: voiceChannelCount,
        },
        {
            name: 'Text Channels',
            value: textChannelCount,
        },
        {
            name: 'Verification Level',
            value: verificationLevel,
        })
        message.channel.send(servinv)
    },
} 