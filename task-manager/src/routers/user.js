const express = require('express');
const {createModel, updateCheck, deleteModel, getById, getList, updateModel} = require('./crud');

const User = require('../models/user');
const router = new express.Router();

router.post('/users', (req, res) => {
  createModel(User)(req, res)
});

router.patch('/users/:id', (req, res) => {
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  updateCheck(req, res, allowedUpdates);
  updateModel(User)(req, res)
});

router.get('/users', (req, res) => {
  getList(User)(req, res)
});

router.get('/users/:id', (req, res) => {
  getById(User)(req, res)
});

router.delete('/users/:id', (req, res) => {
  deleteModel(User)(req, res)
});

module.exports = router;
