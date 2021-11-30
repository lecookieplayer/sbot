module.exports = {
    name: 'kick',
    description: "this is for kicking",
    execute(message, args) {
        if (message.member.roles.cache.has('914305214071332894')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("user has been kicked");

            } else {
                message.channel.send('you cant kick that member');
            }
        }
    }
}