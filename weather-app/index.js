const axios = require('axios');

const darkSky = 'https://api.darksky.net/forecast/29319c2379e6494906970d6add51aa00';

const formatData = ({currently, daily}) => {
  return `${daily.summary} It is currently ${currently.apparentTemperature} degrees out. There is ${currently.precipProbability} % chance of rain`;
};

const access_token = 'pk.eyJ1IjoiZWlvczIxIiwiYSI6ImNqdGxjMGF5NTFleXYzeW82bjJoeDhncjgifQ.5WyuxaXZgOC0-w0wyZIC5g';

const mapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

const params = {
  units: 'si',
  lang: 'et'
};

const darkSkyRequest = ({latitude, longitude}) => {
  const fullUrl = `${darkSky}/${latitude},${longitude}`;
  return axios.get(fullUrl, {params}).then(
    response => {
      const data = response.data;
      console.log(formatData(data))
    }
  );
};


const mapBoxRequest = (searchTerm = 'Los%20Angeles') => {
  const fullUrl = `${mapBox}/${searchTerm}.json`;
  return axios.get(fullUrl, {params: {access_token, limit: 1, language: 'et'}}).then(
    response => {
      const data = response.data;
      console.log(data.features[0])
      return data;
    }
  );
};

// darkSkyRequest('37.8267', '-122.4233');

mapBoxRequest().then(
  data => {
    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];
    return {latitude, longitude};
  }
).then(
  coords => {
    console.log(coords)
    return darkSkyRequest(coords)
  }
);
