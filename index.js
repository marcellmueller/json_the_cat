// index.js
const breedName = process.argv.slice(2);
const { fetchBreedDescription } = require("./breedFetcher");
// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
