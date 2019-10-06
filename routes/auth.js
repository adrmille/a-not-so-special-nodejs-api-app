const express = require('express');
const router = express.Router();

/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
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
 */
router.post('/login', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
