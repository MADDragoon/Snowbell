const economy = require('../../economy')

module.exports = {
    commands: ['bal', 'balance'],
    description: 'Shows your or mentioned users balance',
    maxArgs: 1,
    expectedArgs: "[Target user's @]",
    callback: async (message) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        message.channel.send(`${target.username} has ${coins} coins!`)
    }
}