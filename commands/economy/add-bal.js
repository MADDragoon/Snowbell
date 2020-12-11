const economy = require('../../economy')

module.exports = {
    commands: ['addbalance', 'addbal'],
    description: 'Adds balance to th ementioned user',
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: "<The target's @> <coins amount>",
    permissionError: 'You must be an administrator to use this command',
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments) => {
        const mention = message.mentions.users.first()

        if(!mention) {
            message.reply('Please tag a user to add coins to.')
            return
        }

        const coins = arguments[1]
        if (isNaN(coins)) {
            message.reply('Please provide a valid number of coins.')
            return
        }

        const guildId = message.guild.id
        const userId = mention.id

        const newCoins = await economy.addCoins(guildId, userId, coins)

        message.channel.send(`You have given <@${userId}> ${coins} coin(s). They now have ${newCoins} coins`)
    }
}