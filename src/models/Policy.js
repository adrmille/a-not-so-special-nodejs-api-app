const mongoose = require('mongoose');
const validator = require('validator');

const policySchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  amountInsured: {
    type: Number,
    required: true
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
  inceptionDate: {
    type: Date,
    required: true
  },
  installmentPayment: {
    type: Boolean,
    required: true
  },
  clientId: {
    type: String,
    required: true,
    trim: true
  }
});

policySchema.set('toJSON', { versionKey: false });
policySchema.set('toObject', { versionKey: false });

policySchema.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
  return ret;
}

policySchema.options.toJSON.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
  return ret;
}

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;