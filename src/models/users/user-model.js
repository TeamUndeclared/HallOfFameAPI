'use strict';


const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  slackId: { type: String, required: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },


}, { toJSON: { virtuals: true } });

userSchema.virtual('capabilities').get(function () {
  let acl = {
    user: ['read'],
    student: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete'],
  }
  return acl[this.role];

})

module.exports = mongoose.model('users', userSchema)