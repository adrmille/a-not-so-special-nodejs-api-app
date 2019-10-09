const Policy = require('../models/Policy');
const User = require('../models/User');

exports.findUserByName = async (req, res) => {
  try {
    const user = await User.findOne({name: req.query.userName});
    if (!user) {
      res.status(404).send({error: 'no policies found'})
    }
    const policies = await Policy.find({ clientId: user.id });
    if (policies) {
      res.send(policies);
    } else {
      res.status(404).send({error: 'no policies found'})
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
};