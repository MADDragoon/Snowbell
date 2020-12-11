module.exports = client => {
    const channelId = '783331590578634773'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', member => updateMembers(member.guild))
    client.on('guildMemberRemove', member => updateMembers(member.guild))

    const guild = client.guilds.cache.get('782267635047858186')
    updateMembers(guild)
}