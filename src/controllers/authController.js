const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.generateJwsToken = async (req, res) => {
  // TODO sanitize request inputs
  const {userId} = req.body;
  if (!userId || !req.body.password) {
    res.status(400).json({message: "bad request, missing parameter"});
  }
  const user = await User.findOne({id: userId});
  if (user) {
    const payload = {id: user.id};
    const {gConfig} = global;
    const {jwt_secret_key} = gConfig;
    const token = jwt.sign(payload, jwt_secret_key);
// TODO database call to store the token
    await res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message: "no such user found"});
  }
};

