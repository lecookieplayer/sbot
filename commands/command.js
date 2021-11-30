module.exports = {
    name: 'command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
   .setColor('#304281')
   .setTitle('commands')
   .setDescription('all commands for sbbot')
   .addFields(

{name: 'ping', value: 'plays ping pong'},
{name: 'role', value: 'command de test'},
{name: 'command', value: 'ne pas faire'},
{name: 'clear', value: 'clear les message max 100'},
{name: 'kick', value: 'kick des persone(-kick @...)'},
{name: 'ban', value: 'ban des personne(-ban @...)'}





   )
   
   .setFooter('make sure to use the bot')
   message.channel.send({ embeds: [newEmbed] });
    },

};