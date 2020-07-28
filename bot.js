require("dotenv").config();
//file-system module of node.js
const fs = require("fs");
const Discord = require("discord.js");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

//Here we read through all the files in the command folder ending with .js with a fs module.
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

//In this we add files we read through fs module into the collection declared above
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.once("ready", () => {
  console.log("Ready!");
});

bot.on("message", (message) => {
  //checks if the message is intended for bot or not
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot)
    return;

  //seperates the arguments and the command from message
  const mess = message;
  let args = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/);
  const commandName = args.shift().toLowerCase();
  if (commandName == "job") {
    args = mess.content.slice(process.env.PREFIX.length).trim().split("|");
  }

  //Checks if a particular command exist or not
  if (!bot.commands.has(commandName)) return;

  //from the collection picks out the command with commandName
  const command = bot.commands.get(commandName);

  //Checks if command require arguments
  //if true then it will check if arguments are present or not
  if (command.args && !args.length) {
    try {
      message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    } catch (error) {
      console.log(error);
      return;
    }
  }

  //execute the command
  //logs for error on console by checking them
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

// (async () => {
//   await try
// })();

bot.login(process.env.TOKEN);
