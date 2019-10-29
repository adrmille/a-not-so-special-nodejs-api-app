const mongoose = require('mongoose')
const config = require('../config/config.js');

mongoose.connect(global.gConfig.mongodb_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(r => console.info("DB connection successful"));
