const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.generateJwsToken = async (req, res) => {
  // TODO sanitize request inputs
  if (!req.body.userId || !req.body.password) {
    res.status(400).json({message: "bad request, missing parameter"});
  }

  const user = await User.findOne({id: req.body.userId});
  if (user) {
    const payload = {id: user.id};
    const token = jwt.sign(payload, global.gConfig.jwt_secret_key);
// TODO database call to store the token
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message: "no such user found"});
  }

};

