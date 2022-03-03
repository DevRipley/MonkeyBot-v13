const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("Ping")
    .setDescription("El bot te mostrara su latencia en ms."),

    async run(client, interaction){
        interaction.reply({ content: `Ping **${client.ws.ping}ms**`})
    }
}