let leetcode = require("./../data.json");
const Discord = require("discord.js");
const leetcode_channel = process.env.LEETCODE_CHANNEL;
module.exports = {
  name: "leetcode",
  description: "Sends a random Leetcode question",
  args: "true",
  execute(message, args) {
    let leetcodeChannel = message.guild.channels.cache.get(leetcode_channel);
    if (!leetcodeChannel) {
      message.channel.send(
        `Sorry, it seems there is no leetcode_channel on this server ${message.author}, Go ahead and create one in config.json`
      );
      return;
    }
    if (message.channel.name != leetcodeChannel.name) {
      message.delete();
      message.channel.send(
        `Please use the leetcode channel ${message.author}.`
      );
      return;
    }

    let id = Math.floor(Math.random() * Math.floor(leetcode.length));
    premiumArg = args[1] == "true";
    while (
      leetcode[id].difficulty.toLowerCase() != args[0].toLowerCase() ||
      leetcode[id].premium != premiumArg
    ) {
      id = Math.floor(Math.random() * Math.floor(leetcode.length));
    }

    let premium;
    if (leetcode[id].premium) premium = "Yes";
    else premium = "No";

    const question = new Discord.MessageEmbed()
      .setColor("#1db55f")
      .setTitle(leetcode[id].name)
      .setURL(leetcode[id].url)
      .setAuthor("Requested by " + message.author.tag)
      .addFields(
        { name: "Difficulty", value: leetcode[id].difficulty, inline: true },
        { name: "Pattern", value: leetcode[id].pattern, inline: true },
        { name: "Premium", value: premium, inline: true }
      )
      .addField("Companies", leetcode[id].companies)
      .setTimestamp();

    try {
      leetcodeChannel.send(question);
    } catch (error) {
      console.log(error);
    }
  },
};
