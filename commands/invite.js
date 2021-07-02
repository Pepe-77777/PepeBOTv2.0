const Discord = require("discord.js"); 

module.exports.help = {
    name:"invite",
    description:"Invite o bot!"
  }

  exports.run = async (client, message, args) => {
    message.delete();
      message.channel.send(`**<:Bot:860665342400135208> Adicione o BOT ao seu servidor!**` + " https://discord.com/api/oauth2/authorize?client_id=860645612104712242&permissions=8&redirect_uri=https%3A%2F%2Fwww.pepebot.ga&scope=applications.commands%20bot");
      
    }