const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Login
 *       401:
 *         description: No such user found
 */
router.post('/login', (req, res) => {
  if(req.body.userId && req.body.password){
    var userId = req.body.userId;
    // var password = req.body.password;
  } else {
    res.status(401).json({message:"no such user found"});
  }
  // TODO sanitize request inputs
  // TODO replace by a database call, to fetch user credentials

  const payload = {id: userId};
  const token = jwt.sign(payload, global.gConfig.jwt_secret_key);
  // TODO database call to store the token
  res.json({message: "ok", token: token});
});

module.exports = router;
