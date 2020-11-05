const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (err, res, body) => {
    if (err) {
      callback(err, null);
    }
    body = JSON.parse(body);
    if (body[0]) {
      callback(null, body[0].description);
    } else {
      callback(null, "Breed not found!");
    }
  });
};

module.exports = { fetchBreedDescription };
