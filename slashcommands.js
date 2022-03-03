const fs = require("fs")
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guild } = require("./config.json")
const commands = []
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${file}`)
    commands.push(slash.data.toJSON())
}

const rest = new REST ({ version: "9" }).setToken("OTQ1NjkwMTg5NDM3NzM5MDU4.YhT0nw.VofG_1tdJdUsHtz1jd6FuP35Guk")

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientId), { // Agregar guild si no quieres que sea global
                body: commands
            }
        )
        console.log("Slash Commands Added")
    } catch(e) {
        console.error(e)
    }
}