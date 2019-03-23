const darkSkyRequest = require('./darkSky').darkSkyRequest;
const {mapBoxRequest} = require('./geocode');

// darkSkyRequest('37.8267', '-122.4233');

console.log(process.argv)
const searchTerm = process.argv[2];

if (!searchTerm) {
  console.log('no search term provided')
  return process.exit(1)
}
mapBoxRequest(searchTerm).then(
  coords => {
    console.log(coords)
    return darkSkyRequest(coords)
  }
).catch(error => console.error(error));
