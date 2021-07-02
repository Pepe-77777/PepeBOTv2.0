const Discord = require("discord.js");
const fs = require("fs");

module.exports.help = {
    name:"help",
    description:"Veja os comandos do bot!"
  }

  exports.run = async (client, message, args) => {

    fs.readdir("./commands/", (err, files) => {
        let jsfile = files.filter(f => f.split(".").pop() === "js")     
    message.delete();
    message.channel.send('<:Bot:860665342400135208> Sejá bem vindo ao PepeBOT **2.0**! *qualquer erro vá para o server de suporte e mande em <#860661836415107075> (#bugs-report)*')
    message.channel.send(`<:dev:817101482263707700> *Comandos:*\n<a:Seta:860665332988510238> **pepe2!help** | *Veja os comandos do bot!*\n<a:Seta:860665332988510238> **pepe2!ping** | *Veja o ping do bot!*\n<a:Seta:860665332988510238> **pepe2!invite** | *Invite o bot!*\n*<:Discord:860655722098589726> No total existem ${jsfile.length} comandos* **xD**`)
      
      });
};