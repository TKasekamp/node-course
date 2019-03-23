const axios = require('axios');

const darkSky = 'https://api.darksky.net/forecast/29319c2379e6494906970d6add51aa00';

const formatData = ({currently, daily}) => {
  return `${daily.summary} It is currently ${currently.apparentTemperature} degrees out. There is ${currently.precipProbability} % chance of rain`;
};

const params = {
  units: 'si',
  lang: 'et'
};

const darkSkyRequest = ({latitude, longitude}) => {
  const fullUrl = `${darkSky}/${latitude},${longitude}`;
  // if (latitude typeof !== 'number') {
  //   return Promise.reject(new Error(''))
  // }
  return axios.get(fullUrl, {params}).then(
    response => {
      const data = response.data;
      console.log(formatData(data))
    }
  )
};

module.exports = {
  darkSkyRequest
};
