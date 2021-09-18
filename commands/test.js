module.exports.run = async (bot, message, args) => {
    let btn = new bot.disbut.MessageButton()
      .setStyle('red')
      .setLabel('AMONGUS !!! SO SUS !!!!')
      .setID('amogus');
    let msg = await message.channel.send('Click for AMOGUS 😳', {
      button: btn
    });
  }
  
  module.exports.config = {
    name: "test",
    aliases: []
  }