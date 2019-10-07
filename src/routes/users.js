const express = require('express');
const passport = require("../middleware/passport");

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
 *         description: User data
 *       401:
 *         description: Unauthorized
 */
router.get('/:userId', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('respond with a resource: ' + req.params.userId);
});

module.exports = router;
