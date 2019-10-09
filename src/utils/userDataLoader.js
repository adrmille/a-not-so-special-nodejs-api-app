require('../database/database');
const fetch = require("node-fetch");
const User = require('../models/User');
const config = require('../config/config.js');

fetch(global.gConfig.clients_url, {
  method: 'get',
})
.then(function (response) {
  return response.json();
})
.then(function (json) {
  loadUsersInDatabase(json);
})
.catch((err) => {
  console.error('Failed to fetch users informations from: '
      + global.gConfig.clients_url);
  console.error(err);
  process.exit(1);
});

function loadUsersInDatabase(users) {
  try {
    users.clients.forEach(function (client) {
      const user = new User(client);
      user.save().then(console.log("insert user: " + user));
    });
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
}
