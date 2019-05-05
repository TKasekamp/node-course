const express = require('express');
const {createModel, updateCheck, deleteModel, getById, getList, updateModel} = require('./crud');

const Task = require('../models/Task');
const router = new express.Router();

router.post('/tasks', (req, res) => {
  createModel(Task)(req, res)
});

router.patch('/tasks/:id', (req, res) => {
  const allowedUpdates = ['description', 'completed'];
  updateCheck(req, res, allowedUpdates);
  updateModel(Task)(req, res)
});

router.get('/tasks', (req, res) => {
  getList(Task)(req, res)
});

router.get('/tasks/:id', (req, res) => {
  getById(Task)(req, res)
});

router.delete('/tasks/:id', (req, res) => {
  deleteModel(Task)(req, res)
});

module.exports = router;
