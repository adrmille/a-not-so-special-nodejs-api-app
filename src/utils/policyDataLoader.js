require('../database/database');
const fetch = require("node-fetch");
const Policy = require('../models/Policy');
const config = require('../config/config.js');

fetch(global.gConfig.policies_url, {
  method: 'get',
})
.then(function (response) {
  return response.json();
})
.then(function (json) {
  loadPoliciesInDatabase(json);
})
.catch((err) => {
  console.error('Failed to fetch policies informations from: '
      + global.gConfig.policies_url);
  console.error(err);
  process.exit(1);
});

function loadPoliciesInDatabase(policies) {
  try {
    policies.policies.forEach(function (item) {
      const policy = new Policy(item);
      policy.save().then(console.log("insert policy: " + policy));
    });
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
}
