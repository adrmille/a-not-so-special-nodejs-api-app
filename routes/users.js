const express = require('express');
const router = express.Router();

/**
 * @swagger
 *
 * /users/{userId}:
 *   get:
 *     description: User data filtered by user id
 *     produces:
 *       - application/json
 *     parameters:
 *       - userId: userId
 *         description: Id of the user.
 *         name: userId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User data
 */
router.get('/:userId', function(req, res) {
  res.send('respond with a resource' + req.params.userId);
});

module.exports = router;
