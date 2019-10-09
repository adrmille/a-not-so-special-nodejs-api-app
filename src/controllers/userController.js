const User = require('../models/User');
const Role = require('../models/Role');

exports.findUserById = async (req, res) => {
  try {
    const authorizedToAccessDatas = req.role === Role.ADMIN || req.user
        === req.params.id;
    if (!authorizedToAccessDatas) {
      res.status(401).send(
          {error: 'Unauthorized - as a simple user you can only search for your details'})
    }
    const user = await User.findOne({id: req.params.id});
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

exports.findUserByName = async (req, res) => {
  try {
    console.log(req.query.name);
    let user;
    if (req.role === Role.ADMIN) {
      user = await User.findOne({name: req.query.name});
    } else { // simple user can only request for its name
      user = await User.findOne({name: req.query.name, id: req.user});
    }
    if (user) {
      res.send(user);
    } else {
      res.status(401).send(
          {error: 'User not found, also note that only admin users can search for other users datas'})
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
};