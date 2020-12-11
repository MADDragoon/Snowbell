const Discord = require('discord.js')

module.exports = {
    commands: ['ctc', 'createtextchannel'],
    description: 'Creates a text channel',
    permissionError: 'You do not have appropriate permission',
    minArgs: '1',
    callback: (message, arguments, text) => {
        message.guild.channels.create(arguments, {
            type: 'text'
        })
        const ctc = new Discord.MessageEmbed()
        .setColor('RANDOM') 
        .setTitle('Created Text Channel Successfully')
        .setDescription(`${arguments} text channel was created successfully`);
        message.channel.send(ctc)
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: []
} 