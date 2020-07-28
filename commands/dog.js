const querystring = require("querystring");
const r2 = require("r2");

const DOG_API_URL = "https://api.thedogapi.com/";
const DOG_API_KEY = process.env.DOG_API_KEY;
const image_channel = process.env.IMAGES_CHANNEL;
module.exports = {
  name: "dog",
  description: "Get a random dog image",
  args: false,
  async execute(message, args) {
    if (message.channel.name != image_channel) {
      message.react("💔");
      message.channel.send("Can't post images in this channel");
      return;
    }
    message.react("🐕");
    var imagesDog = await loadImageDog(message.author.username);
    var imageDog = imagesDog[0];
    await message.channel.send("", { files: [imageDog.url] });
  },
};

async function loadImageDog(sub_id) {
  var headers = {
    "X-API-KEY": DOG_API_KEY,
  };
  var query_params = {
    has_breeds: true,
    mime_types: "jpg,png",
    size: "small",
    limit: 1,
  };
  let queryString = querystring.stringify(query_params);

  try {
    let _url = DOG_API_URL + `v1/images/search?${queryString}`;
    var response = await r2.get(_url, { headers }).json;
  } catch (e) {
    console.log(e);
  }
  return response;
}
