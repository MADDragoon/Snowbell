module.exports = {
    commands: 'avatar',
    description: 'Sends your or mentioned user\'s avatar in embed.',
    cooldown: '5',
    execute(message, args) {
        if (!message.mentions.users.size) {
            const yourAv = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`${message.author.username}#${message.author.discriminator}`)
                .setDescription(`[Avatar Link](${message.author.displayAvatarURL({ size: 4096, dynamic: true})})`)
                .setImage(message.author.displayAvatarURL({ size: 4096, dynamic : true}));
                
            return message.channel.send(yourAv)
        }
    
        const taggedUser = message.mentions.users.first();
        const av = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${taggedUser.username}#${taggedUser.discriminator}`)
            .setDescription(`[Avatar Link](${taggedUser.displayAvatarURL({ size: 4096, dynamic: true})})`)
            .setImage(taggedUser.displayAvatarURL({ size: 4096, dynamic : true}));

        message.channel.send(av);
    }
}