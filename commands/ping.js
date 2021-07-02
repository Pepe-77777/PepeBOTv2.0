const Discord = require("discord.js"); 

module.exports.help = {
    name:"ping",
    description:"Veja o ping do bot!"
  }

  exports.run = async (client, message, args) => {
    message.delete();
    message.channel.send('Carregando...').then (async (msg) =>{
      msg.delete()
      let ping = `${msg.createdTimestamp - message.createdTimestamp}`
      let apiping = `${Math.round(client.ws.ping)}`
      let ping2 = "";

      message.channel.send(`**<:nitro:821599274542170113> PepeBOT Ping** *(pepe2!ping)* **|\n<:dev:817101482263707700> Ping: ${ping}\n<:Discord:860655722098589726> Ping de API: ${apiping}**`)
      
    })
  }