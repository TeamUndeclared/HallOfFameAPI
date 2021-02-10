'use strict';

//third party dependencies

const express = require('express');
const ProjectCollection = require('../models/projects/projectCollection')

const project = new ProjectCollection();
//server constants

const router = express.Router();

router.get('/projects', handleGetAll);
router.get('/projects/:id', handleGetOne);
router.post('/projects', handleCreate);
router.put('/projects/:id', handleUpdate);
router.delete('/projects/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await project.get();
  res.status(200).json(allRecords);
}
async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await project.get(id);
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await project.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await project.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await project.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = router;
