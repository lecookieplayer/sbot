module.exports = {
    name: 'clear',
    description: "this is a clear command",
   async execute(message, args){
    if(message.member.roles.cache.has('914305214071332894')){
       if(!args[0]) return message.reply("please enter the number of messages you want to clear");
       if(isNaN(args[0])) return message.reply("please enter a real number!");
       if(args[0] > 100) return message.reply("you canno't delete more than 100 messages");
       if(args[0] < 1) return message.reply("you cannot delete less than 1 message");

       await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
           message.channel.bulkDelete(messages)
       })
    }else message.channel.send('you need to be admin to do that!')
}
}