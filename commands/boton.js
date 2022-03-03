const Discord = require("discord.js")

module.exports = {
    name: "boton",
    alias: [],

    execute(client, message, args){

        const row = new Discord.MessageActionRow()
            .addComponents(
                [
                new Discord.MessageButton()
                .setCustomId("demonio")
                .setLabel("Demonio")
                .setStyle("DANGER")
                .setEmoji("😈")
                ],
                [
                    new Discord.MessageButton()
                    .setCustomId("angel")
                    .setLabel("Angel")
                    .setStyle("PRIMARY")
                    .setEmoji("😇")
                ],
                [
                    new Discord.MessageButton()
                    .setCustomId("sun")
                    .setLabel("Sun")
                    .setStyle("SUCCESS")
                    .setEmoji("☀️")
                ],
                [
                    new Discord.MessageButton()
                    .setCustomId("namemc")
                    .setLabel("NameMC")
                    .setStyle("SECONDARY")
                    .setEmoji("🌕")
                ],
        )

        const embed = new Discord.MessageEmbed()
        .setTitle("Monkey Autorole")
        .setDescription("Select any role, and get the roles for your profile nulleeeeeeeeeed:\n\n😈 Demonio\n\n😇 Angel\n\n☀️ Sun\n\n🌕 NameMC")
        .setColor("WHITE")

        message.channel.send({ embeds: [embed], components: [row] })
    }
}