module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready')

        client.user.setPresence({ activities: [{ name: `Official Zard Bot | Maintenance `, type: `STREAMING` }], status: 'dnd' });
    },
};