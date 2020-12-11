const firstMessage = require('./first-message')

module.exports = client => {
    const channelId = '783272961477181440'

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

    const emojis = {
        pubgm_india: 'Pubg Mobile India',
        valorant: 'Valorant',
        csgo: 'CS:GO',
        codm: 'Call Of Duty Mobile',
        among_us: 'Among Us',
        pubgm_global: 'Pubg Mobile Global',
        pubgm_kr: 'Pubg Mobile KR',
        pubg_pc: 'Pubg PC'
    }

    const reactions = []

    let emojiText = 'React to this message and claim your role!\n\n'
    for  (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojiText += `${emoji} = ${role}\n` 
    }
    
    firstMessage(client, channelId, emojiText, reactions)

    const handleReaction = (reaction, user, add) => {
        if (user.id === '782477836610175007') {
            return
        }

        const emoji = reaction._emoji.name

        const { guild } = reaction.message

        const roleName = emojis[emoji]
        if(!roleName){
            return
        }

        const role = guild.roles.cache.find(role => role.name === roleName)
        const member = guild.members.cache.find(member => member.id === user.id)

        if(add) {
            member.roles.add(role)
        }else {
            member.roles.remove(role)
        }
    }

    client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, true)
        }
    })
    client.on('messageReactionRemove', (reaction, user) => {
        if(reaction.message.channel.id) {
            handleReaction(reaction, user, false)
        }
    })
}