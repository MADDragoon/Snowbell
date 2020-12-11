module.exports = {
    commands: 'invites',
    description: 'Displays top 3 most used invite links.',
    callback: (message) => {
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            let replyText = 'Invites'

            const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a]) 

            for(const invite of sortedInvites){
                const count = inviteCounter[invite]
                replyText += `\n${invite} has invited ${count} members`
            }

            message.reply(replyText)
        })
    }
}