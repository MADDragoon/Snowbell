const { MessageEmbed } = require("discord.js");
const moment = require('moment')

module.exports = {
    commands: 'info',
    description: 'Gives information about the user',
    cooldown: '5',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const userinfo = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${taggedUser.username}'s info`)
            .setDescription(`Here is ${taggedUser.username}'s info - \n [Avatar](${taggedUser.displayAvatarURL({ size: 4096, dynamic: true})}) \n\ **Joined At** : \n\ ${moment.utc(taggedUser.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} UTC \n\ **Account Created At** : \n\ ${moment.utc(taggedUser.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} UTC `)
        message.channel.send(userinfo)
    }
}