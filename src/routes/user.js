'use strict';

//third party dependencies

const express = require('express');
const UserCollection = require('../models/users/userCollection')

const users = new UserCollection();
//server constants
const jwtCheck = require('../auth/jwt-checker');

const router = express.Router();
// router.use(jwtCheck)
router.get('/users', handleGetAll);
router.get('/users/:id',jwtCheck, handleGetOne);
router.post('/users', jwtCheck,handleCreate);
router.put('/users/:id', jwtCheck,handleUpdate);
router.delete('/users/:id', jwtCheck,handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await users.get();
  res.status(200).json(allRecords);
}
async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await users.get(id);
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await users.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await users.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await users.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;
