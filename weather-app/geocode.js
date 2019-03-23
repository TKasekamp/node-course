const axios = require('axios');

const access_token = 'pk.eyJ1IjoiZWlvczIxIiwiYSI6ImNqdGxjMGF5NTFleXYzeW82bjJoeDhncjgifQ.5WyuxaXZgOC0-w0wyZIC5g';

const mapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

const extractLocation = (data) => {
  const longitude = data.features[0].center[0];
  const latitude = data.features[0].center[1];
  return {latitude, longitude, location: data.features[0].place_name};
};

const mapBoxRequest = (searchTerm = 'Los%20Angeles') => {
  const fullUrl = `${mapBox}/${encodeURIComponent(searchTerm)}.json`;
  return axios.get(fullUrl, {params: {access_token, limit: 1, language: 'et'}}).then(
    response => {
      const data = response.data;
      console.log(data)

      if (data.features.length === 0) {
        return Promise.reject(new Error('No features'));
      }
      return extractLocation(data);
    }
  );
};

module.exports = {
  mapBoxRequest
};
