module.exports = {
    name: 'reactionrole',
    description: "reactionrole",
    async execute(message, args, Discord, client){
    const channel = '914705703912996866';
    const skyblockplayerrole = message.guild.roles.cache.find(role => role.name === "skyblockplayer")

    const skyblockplayeremoji = '✅';

    let embed = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setTitle('are you a skyblock player ?');

    message.channel.send({ embeds: [embed]}).then((sentMessage) => {
        sentMessage.react(skyblockplayeremoji)
    })

    client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === skyblockplayeremoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(skyblockplayerrole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === skyblockplayeremoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(skyblockplayerrole);
                }
            } else {
                return;
            }
        });
    }
}