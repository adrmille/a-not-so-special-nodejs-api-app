const express = require('express');
const passport = require("../middleware/passport");
const userController = require("../controllers/userController");
const authorize = require("../middleware/authorize");
const Role = require("../models/Role");

const router = express.Router();

/**
 * @swagger
 *
 * /users/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: User data filtered by user id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: Id of the user.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User data as json
 *       401:
 *         description: Unauthorized
 */
router.get('/:userId', passport.authenticate('jwt', {session: false}),
    authorize.roles(Role.ADMIN, Role.USER),
    userController.findUserById);

/**
 * @swagger
 *
 * /users/search/q:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: User data filtered by user name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: The name of the user.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User data as json.
 *       401:
 *         description: Unauthorized.
 */
router.get('/search/q', passport.authenticate('jwt', {session: false}),
    authorize.roles(Role.ADMIN, Role.USER),
    userController.findUserByName);

module.exports = router;
