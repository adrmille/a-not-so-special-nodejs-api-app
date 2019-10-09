const express = require('express');
const passport = require("../middleware/passport");
const policyController = require("../controllers/policyController");
const authorize = require("../middleware/authorize");
const Role = require("../models/Role");

const router = express.Router();

/**
 * @swagger
 *
 * /policies/search/q:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: List of policies linked to a user name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName
 *         description: The name of the user linked to polices.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: List of policies as json.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: No policy found.
 */
router.get('/search/q', passport.authenticate('jwt', {session: false}),
    authorize.roles(Role.ADMIN),
    policyController.findUserByName);

/**
 * @swagger
 *
 * /policies/{policyId}/user:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Find a user linked to a policy id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: policyId
 *         description: A policy id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A user id.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: No policy found.
 */
router.get('/:policyId/user', passport.authenticate('jwt', {session: false}),
    authorize.roles(Role.ADMIN),
    policyController.findUserIdByPolicyId);

module.exports = router;