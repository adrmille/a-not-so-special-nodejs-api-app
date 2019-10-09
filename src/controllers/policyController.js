const Policy = require('../models/Policy');
const User = require('../models/User');

exports.findUserByName = async (req, res) => {
  try {
    const user = await User.findOne({name: req.query.userName});
    if (!user) {
      res.status(404).send({error: 'no user found'})
    }
    const policies = await Policy.find({clientId: user.id});
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

exports.findUserIdByPolicyId = async (req, res) => {
  try {
    console.log(req.params.policyId);
    const policy = await Policy.findOne({id: req.params.id});
    if (!policy) {
      res.status(404).send({error: 'no policy found'})
    }
    const user = await User.findOne({id: policy.clientId});
    if (user) {
      res.send({userid: user.id});
    } else {
      res.status(404).send({error: 'no user found'})
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
};