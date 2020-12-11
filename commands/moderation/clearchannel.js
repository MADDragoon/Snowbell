module.exports = {
    commands: ['cc', 'clearchannel'],
    description: 'Deletes all the message in the channel',
    permissionError: 'You do not have appropriate permission',
    minArgs: '0',
    maxArgs: '0',
    callback: (message, arguments, text) => {
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
        })
    },
    permissions: ['ADMINISTRATOR'],
}