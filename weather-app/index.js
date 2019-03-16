const axios = require('axios');

const url = 'https://api.darksky.net/forecast/29319c2379e6494906970d6add51aa00/37.8267,-122.4233';

axios.get(url).then(
  response => {
    const data = response.data;
    console.log(data.currently)
  }
)
