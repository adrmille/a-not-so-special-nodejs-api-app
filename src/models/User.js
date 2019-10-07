const mongoose = require('mongoose');
const validator = require('validator');
const Role = require('./Role');

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({error: 'Invalid Email address'})
      }
    }
  },
  role: {
    type: String,
    required: true,
    validate: value => {
      if (!Role.isRole(value)) {
        throw new Error({error: 'Invalid Role type'})
      }
    }
  }
});

userSchema.set('toJSON', { versionKey: false });
userSchema.set('toObject', { versionKey: false });

userSchema.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
  return ret;
}

userSchema.options.toJSON.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
  return ret;
}

const User = mongoose.model('User', userSchema);

module.exports = User;