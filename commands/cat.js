require("dotenv").config();
const querystring = require("querystring");
const r2 = require("r2");

const CAT_API_URL = "https://api.thecatapi.com/";
const CAT_API_KEY = process.env.CAT_API_KEY;
const image_channel = process.env.IMAGES_CHANNEL;
module.exports = {
  name: "cat",
  description: "Get a random cat image",
  args: false,
  async execute(message, args) {
    if (message.channel.name != image_channel) {
      message.react("💔");
      message.channel.send("Can't post images in this channel");
      return;
    }
    message.react("🐈");
    var imagesCat = await loadImageCat(message.author.username);
    var imageCat = imagesCat[0];
    await message.channel.send("", { files: [imageCat.url] });
  },
};

async function loadImageCat(sub_id) {
  var headers = {
    "X-API-KEY": CAT_API_KEY,
  };
  var query_params = {
    mime_types: "jpg,png",
    size: "small",
    limit: 1,
  };
  let queryString = querystring.stringify(query_params);

  try {
    let _url = CAT_API_URL + `v1/images/search?${queryString}`;
    var response = await r2.get(_url, { headers }).json;
  } catch (e) {
    console.log(e);
  }
  return response;
}
