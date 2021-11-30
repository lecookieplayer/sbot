module.exports = {
    name: 'ban',
    description: "this is for banning",
    execute(message, args) {
        if (message.member.roles.cache.has('914305214071332894')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("user has been banned");

            } else {
                message.channel.send('you cant ban that member');
            }
        }
    }
}