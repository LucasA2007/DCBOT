const Discord = require("discord.js")

module.exports = async (bot, oldMessage, newMessage) => {
    let channel = bot.channels.cache.get("888736417507844127")

    channel.send(`The old message: ${oldMessage}\n The new message: ${newMessage}`);

}