const Discord = require("discord.js") 
const intents = new Discord.Intents() 
const client = new Discord.Client({ intents: 32767 }) 

client.on("ready", () => { 
    console.log("Tu monito atrevido a llegado 🐒"); // Console Log Sender
    client.channels.cache.get("946568607909937153").messages.fetch("946571901285838910").then(msg =>{
        let ifilter = i => !i.user.bot;

        const collector = msg.createMessageComponentCollector({ filter: ifilter }) //945926983722868756

        collector.on("collect", async i => {
            if(i.customId === "demonio"){
                if(!i.member.roles.cache.has("946573203348803585")){
                    await i.member.roles.add("946573203348803585")
                    i.reply({ content: "Se te ha otorgado el rol <@&946573203348803585>", ephemeral: true})
                } else {
                    i.reply({ content: "Ya tienes el rol <@&946573203348803585>", ephemeral: true})
                }
            }
            if(i.customId === "angel"){
                if(!i.member.roles.cache.has("946573298391724032")){
                    await i.member.roles.add("946573298391724032")
                    i.reply({ content: "Se te ha otorgado el rol <@&946573298391724032>", ephemeral: true})
                } else {
                    i.reply({ content: "Ya tienes el rol <@&946573298391724032>", ephemeral: true})
                }
            }
            if(i.customId === "sun"){
                if(!i.member.roles.cache.has("946573323305898015")){
                    await i.member.roles.add("946573323305898015")
                    i.reply({ content: "Se te ha otorgado el rol <@&946573323305898015>", ephemeral: true})
                } else {
                    i.reply({ content: "Ya tienes el rol <@&946573323305898015>", ephemeral: true})
                }
            }
            if(i.customId === "namemc"){
                if(!i.member.roles.cache.has("946573350686318622")){
                    await i.member.roles.add("946573350686318622")
                    i.reply({ content: "Se te ha otorgado el rol <@&946573350686318622>", ephemeral: true})
                } else {
                    i.reply({ content: "Ya tienes el rol <@&946573350686318622>", ephemeral: true})
                }
            }
        })
    })
});

const fs = require("fs");
let { readdirSync } = require("fs");
const { Stream } = require("stream");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("guildMemberAdd", (member) => {
    const captcha = new Captcha();
        captcha.async = true
        captcha.addDecoy(); 
        captcha.drawTrace(); 
        captcha.drawCaptcha();

        const captchaAttachment = new MessageAttachment(
            await captcha.png,
            "captcha.png"
        );

        const msg = await member.send({})
});

client.on('guildMemberAdd', (member) => { // Arrivals Code

    if(member.guild.id === '945694126890950666'){ // Network ID
    
    const embed = new Discord.MessageEmbed()
  
    .setTitle('<a:MonkeyRainbow:656716630096609290>  This is the arrival of a monkey <a:MonkeyRainbow:656716630096609290>')
    .setDescription(`Welcome **${member.user.username}** to the server and I hope you like it, remember that thanks to you we are already \`${member.guild.memberCount}\`!`)
    .setFooter({ text: "Thanks for join, you will have a good time!" })
    .setColor("WHITE")
    .setImage("https://i.pinimg.com/474x/09/80/55/09805593c4acb648970b7050da37ead6.jpg")
  
  client.channels.cache.get("945925105765203999").send({ embeds: [embed] }) // Channel ID
   }
   })

   function presence() {
    client.user.setPresence({
      status: 'on',
      activities: [{
        name: 'Under Developing',
        type: 'STREAMING',
      }]
    })
  };
  
  client.on("ready", () => {
    console.log(client.user.tag);
    presence();
  }

)


client.on("messageCreate", (message) => {
    
    let prefix = "-" // Command Execute Prefix

    if(message.author.bot) return;

    if (message.channel.type === "DM") return;

    if(message.content.startsWith(prefix)) return;

    let member = message.mentions.members.first() || message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

    if(cmd){
        cmd.execute(client, message, args)
    }

});

client.on("guildMemberAdd", async (member) => { // Command for member join to the Server
    if (member.guild.id === "945694126890950666"){ // Server ID
    } 
})

client.login("OTQ1NjkwMTg5NDM3NzM5MDU4.YhT0nw.VofG_1tdJdUsHtz1jd6FuP35Guk"); // Token ID