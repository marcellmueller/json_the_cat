const args = process.argv.slice(2);
const request = require("request");

const options = {
  url: `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
  method: "GET",
};

request(options, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  body = JSON.parse(body);
  if (body[0]) {
    console.log(body[0].name);
  } else {
    console.log("Breed not found!");
  }
  console.log();
});
