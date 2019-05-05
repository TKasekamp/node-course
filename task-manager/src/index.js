const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const getList = model => async (req, res) => {
  try {
    const models = await model.find({});
    res.status(200).send(models)
  } catch (error) {
    res.status(500).send(error)
  }
};

const getById = model => async (req, res) => {
  try {
    const m = await model.findById(req.params.id)
    if (!m) {
      return res.status(404).send()
    }
    res.status(200).send(m)
  } catch (error) {
    res.status(500).send(error)
  }
};

const createModel = model => async (req, res) => {
  const m = new model(req.body);

  try {
    await m.save();
    res.status(201).send(m)
  } catch (e) {
    res.status(400).send(error)
  }
};

const updateModel = model => async (req, res) => {
  try {
    const m = await model.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if (!m) {
      return res.status(404).send()
    }
    res.send(m)
  } catch (e) {
    res.status(500).send(error)
  }
};

app.post('/users', (req, res) => {
  createModel(User)(req, res)
});

app.patch('/users/:id', (req, res) => {
  updateModel(User)(req, res)
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

app.patch('/tasks/:id', (req, res) => {
  updateModel(Task)(req, res)
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
