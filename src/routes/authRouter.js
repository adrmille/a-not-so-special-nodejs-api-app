const express = require('express');
const authController = require("../controllers/authController");

const router = express.Router();

/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     description: Login to the application.
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
 *         description: Login.
 *       401:
 *         description: No such user found.
 */
router.post('/login', authController.generateJwsToken);

module.exports = router;
