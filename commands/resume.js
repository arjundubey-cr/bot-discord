const { resume_channel } = require("../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "rsml",
  description: "Gathers Resume",
  args: true,
  execute(message, args) {
    message.react("👍");
    let generalChannel = message.guild.channels.cache.get(resume_channel);
    if (!generalChannel) {
      message.channel.send(
        `Sorry, it seems there is no resume-channel on this server ${message.author}, Go ahead and create one.`
      );
      return;
    }
    if (!args) {
    }
    let embedMessage = new Discord.MessageEmbed()
      .setColor("#E83350")
      .setTitle(`Resume from ${message.author.username}`)
      .setDescription(`Link to ${message.author}'s CV/Resume:\n${args}`)
      .setTimestamp();
    try {
      generalChannel.send(embedMessage);
    } catch (error) {
      console.log(error);
    }
  },
};
