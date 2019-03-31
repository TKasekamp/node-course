const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('hello express')
});

app.get('/help', (req, res) => {
  res.send('<h1>help</h1>')
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>')
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'bad',
    location: 'Tartu'
  })
});

app.listen(3000, () => {
  console.log('started')
});
