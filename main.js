const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");

const client = new Client({
  intents: 32767,
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const prefix = "-";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("sbbot is online");
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args, Discord);
  } else if (command === "role") {
    client.commands.get("role").execute(message, args, Discord);
  } else if (command === "command") {
    client.commands.get("command").execute(message, args, Discord);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args, Discord);
  } else if (command === "kick") {
    client.commands.get("kick").execute(message, args, Discord);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args, Discord);
  } else if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(message, args, Discord, client);
  } else if (command === "mute") {
    client.commands.get("mute").execute(message, args);
  }
});

client.login("OTE0NTY5Njc5NTM4ODk2OTA3.YaO9Yw.AeiSwTi39FdVj8byMkVK3mMcGdQ");
