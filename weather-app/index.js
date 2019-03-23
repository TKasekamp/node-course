const darkSkyRequest = require('./darkSky').darkSkyRequest;
const {mapBoxRequest} = require('./geocode');

// darkSkyRequest('37.8267', '-122.4233');

console.log(process.argv)
const searchTerm = process.argv[2];
mapBoxRequest(searchTerm).then(
  coords => {
    console.log(coords)
    return darkSkyRequest(coords)
  }
).catch(error => console.error(error));
