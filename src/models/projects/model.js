'use strict';


const  mongoose = require('mongoose');

const trophySchema = mongoose.Schema({
  
  projectName: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  productionDate: { type: String, required: true },
  classCode: { type: String, required: true },
  githubRepo: { type: String, required: true },
  isLiveUrl: { type: String, required: false },
  isLiveStatus: { type: Boolean, required: true },
  upvotes: { type: Number, required: false },
  tags: { type: Array, required: false },

})

const trophyModel = mongoose.model('trophy', trophySchema);

module.exports = trophyModel;

