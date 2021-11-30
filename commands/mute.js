module.exports = {
  name: "mute",
  description: "this mutes a member",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (target) {
      let mainrole = message.guild.roles.chache.find(
        (role) => role.name === "member"
      );
      let muterole = message.guild.roles.chache.find(
        (role) => role.name === "mute"
      );

      let membertartget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        membertartget.role.remove(mainrole.id);
        membertartget.role.add(muterole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        return;
      }

      membertartget.role.remove(mainrole.id);
      membertartget.role.add(muterole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

      setTimeout(function () {
        membertartget.role.remove(muterole.id);
        membertartget.role.add(mainrole.id);
      
      }, ms(args[1]));
    } else {
      message.channel.send("cant find that member");
    }
  },
};
