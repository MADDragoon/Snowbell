const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const firstMessage = require('./first-message')
const privateMessage = require('./private-message')
const roleClaim = require('./role-claim')
const poll = require('./poll')
const welcome = require('./welcome')
const membercount = require('./member-count')
const mongo = require('./mongo')
const messageCount = require('./message-counter')
const antiAd = require('./anti-ad')
const advancedPoll = require('./advanced-poll')
const levels = require('./levels')
const loadCommands = require('./commands/load-commands')
require('events').EventEmitter.defaultMaxListeners = 100;

client.on('ready', async () =>{
    console.log(`${client.user.tag} is online`)
    client.user.setActivity('Bot will be ready soon....', {type: 'PLAYING'})

    await mongo().then(mongoose => {
        try {
            console.log('Connected to mongo!')
        } finally{
            mongoose.connection.close()
        }
    })

    
    loadCommands(client)
    firstMessage(client, '782275416190746650', 'Rules and Regulation \nTo be Added...', ['☑️'])
    privateMessage(client, 'hello', `Hi!`)
    roleClaim(client)
    poll(client)
    welcome(client)
    membercount(client)
    messageCount(client)
    antiAd(client)
    advancedPoll(client)
    levels(client)

})

client.login(config.token)