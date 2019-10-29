const User = require('../models/User');

exports.roles = (...roles) => {
  return (req, res, next) => {
    User.findOne({id: req.user})
    .then((user) => {
      if (user  && roles.find(v => v === user.role) !== undefined) {
        req.role = user.role;
        next();
      } else {
        res.status(401).json({message: "Unauthorized"});
      }
    })
    .catch(err => {
      console.error(err);
      res.status(401).json({message: "Unauthorized"});
    })
  };
};
