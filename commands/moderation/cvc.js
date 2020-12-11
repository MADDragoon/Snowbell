const Discord = require('discord.js')

module.exports = {
    commands: ['cvc', 'createvoicechannel'],
    description: 'Creates a voice channel',
    permissionError: 'You do not have appropriate permission',
    minArgs: '1',
    callback: (message, arguments, text) => {
        message.guild.channels.create(arguments, {
            type: 'voice'
        })
        const cvc = new Discord.MessageEmbed()
        .setColor('RANDOM') 
        .setTitle('Created Voice Channel Successfully')
        .setDescription(`${arguments} voice channel was created successfully`);
        message.channel.send(cvc)
    },
    permissions: ['ADMINISTRATOR'],
} 
