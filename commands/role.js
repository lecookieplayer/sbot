module.exports = {
    name: 'role',
    description: "role command",
    execute(message, args){

        if(message.member.roles.cache.has('914305214071332894')){
            message.channel.send('stv')
        }else{
            message.channel.send('you do not have the role to do that!')
        }
        }
 
    }
