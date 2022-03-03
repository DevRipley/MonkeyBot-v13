const client = require ("../index");

client.on("guildMemberAdd", (member) => {
    console.log(member.user.tag);
});