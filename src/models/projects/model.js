'use strict';


const  mongoose = require('mongoose');

const trophySchema = mongoose.Schema({
  
  projectName: { type: String, required: true },
  authors: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true },
  productionDate: { type: String, required: true },
  classCode: { type: String, required: true },
  githubRepo: { type: String, required: true },
  isLiveUrl: { type: String, required: false },
  isLiveStatus: { type: Boolean, required: true },
  upvotes: { type: Number, required: false },
  tags: { type: Array, required: false },
  postedBy:{type: String, required: true},
  upVotedBy:{type: Array, required:false},
  approved:{type:Boolean,required:false},
  courseLevel:{type:String,required:true}
})

const trophyModel = mongoose.model('trophy', trophySchema);

module.exports = trophyModel;

