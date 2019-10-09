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

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;