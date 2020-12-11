const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
    client.on('message', message => {
        const { guild, member } = message

        addXP(guild.id, member.id, 25)
    })
}

const addXP = async (guildId, userId, xpToAdd) => {
    await mongo().then(async mongoose => {
        try{
            await profileSchema.findOneAndUpdate({
                guildId,
                userId
            }, {
                guildId,
                userId,
                $inc: {
                    xp: xpToAdd
                }
            }, {
                upsert: true,
                new: true
            })
        }finally{
            mongoose.connection.close()
        }
    })
}

module.exports.addXP = addXP