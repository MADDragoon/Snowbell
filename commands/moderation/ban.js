const Discord = require('discord.js')

module.exports = {
    commands: 'ban',
    description: 'Ban the user mentioned',
    expectedArgs: '<user>',
    permissionError: 'You do not have appropriate permission to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, client) => {
        const taggedUser = message.mentions.members.first()
        if(taggedUser.hasPermission('ADMINISTRATOR') || taggedUser.hasPermission('MANAGE_MESSAGES')){
            const errorcode3 = new Discord.MessageEmbed()
                .setTitle('Error code - 2')
                .setColor('FF0000')
                .setDescription(`You can't use this command on Moderators or Administrators.`);
            message.channel.send(errorcode3)
            return
        }else {
            const banned = new Discord.MessageEmbed()
                .setColor('90EE90')
                .setTitle('Command Has Executed Successfully')
                .setDescription(`${taggedUser} has been banned!`);
            message.channel.send(banned);
            taggedUser.ban();
        }
    },
    permissions: ['ADMINISTRATOR', 'BAN_MEMBERS']
}