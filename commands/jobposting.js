const { job_channel, job_board } = require("./../bot_data.json");
const Discord = require("discord.js");

module.exports = {
  name: "job",
  description: "Job posting",
  args: true,
  execute(message, args) {
    message.delete();
    if (message.channel.name != job_channel) {
      message.send("Please post job description in intended channel");
      return;
    }
    let company, title, level, description;
    let url = args[0].split(/ +/)[1];

    company = args[1];
    title = args[2];
    level = args[3];
    description = args[4];

    const job = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("New Job Posting at" + company)
      .setURL(url)
      .setAuthor("Posted by " + message.author.tag)
      .addFields(
        { name: "Job Title", value: title, inline: true },
        { name: "Experience Level", value: level, inline: true }
      )
      .addField("Description", description)
      .setTimestamp();

    try {
      jobBoard.send(job);
    } catch (error) {
      console.log(error);
    }
  },
};
