const User = require('../models/User');

exports.findUserById = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.userId });
    if (user) {
      res.send(user);
    } else {
      res.status(401).send({error: 'user not found'})
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
};