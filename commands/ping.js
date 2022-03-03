const Discord = require('discord.js');

module.exports = {
    name: "ping",
    alias: ["hola"],

    execute(client, message, args){

        message.channel.send(`Ping **${client.ws.ping}ms**`)

    }
}