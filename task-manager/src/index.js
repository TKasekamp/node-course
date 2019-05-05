const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const getList = model => (req, res) => {
  model.find({}).then(models => {
    res.status(200).send(models)
  }).catch(error => {
    res.status(500).send(error)
  })
};

const getById = model => (req, res) => {
  model.findById(req.params.id).then(m => {
    if (!m) {
      return res.status(404).send()
    }
    res.status(200).send(m)
  }).catch(error => {
    res.status(500).send(error)
  })
};

const createModel = model => (req, res) => {
  const m = new model(req.body);

  m.save().then(() => {
    res.status(201).send(m)
  }).catch(error => {
    res.status(400).send(error)
  })
};

app.post('/users', (req, res) => {
  createModel(User)(req, res)
});

app.get('/users', (req, res) => {
  getList(User)(req, res)
});

app.get('/users/:id', (req, res) => {
  getById(User)(req, res)
});

app.post('/tasks', (req, res) => {
  createModel(Task)(req, res)
});

app.get('/tasks', (req, res) => {
  getList(Task)(req, res)
});

app.get('/tasks/:id', (req, res) => {
  getById(Task)(req, res)
});

app.listen(port, () => {
  console.log('server up on port ', port)
});
