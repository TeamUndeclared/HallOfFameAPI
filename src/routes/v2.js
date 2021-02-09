'use strict';

//third party dependencies

const fs = require('fs');
const express = require('express');
const Collection = require('../models/data-collection')

//server constants
const router = express.Router();

// const { auth, requiresAuth } = require('express-openid-connect');

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.AUTH_CLIENT_ID,
//   issuerBaseURL: process.env.ISSUER_BASE_URL
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));


const models = new Map();

router.param('model', (req, res, next) => {
  console.log('request', req)
  const modelName = req.params.model;
  if (models.has(modelName)) {
    req.model = models.get(modelName);
    console.log('model name', modelName)
    next();
  } else {
    const fileName = `${__dirname}/../models/${modelName}/model.js`;
    console.log('file name', fileName)
    if (fs.existsSync(fileName)) {
      const model = require(fileName);
      models.set(modelName, new Collection(model));
      req.model = models.get(modelName);
      next();
    }
    else {
      next('Invalid Model');
    }
  }
});
console.log("ima a model",models)
//router.get('/:model', handleGetAll);
//router.get('/:model/:id', handleGetOne);
router.post('/:model', handleCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id);
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;
