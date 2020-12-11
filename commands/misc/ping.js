module.exports = {
    commands: 'ping',
    description: 'Pong!',
    minArgs: '0',
    maxArgs: '0',
    callback: (message, arguments, text) => {
        message.reply('Pong!')
    },
} 