const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );
  // Restore session user
router.get(
    '/',
    restoreUser,
    (req, res) => {
      const { user } = req;
      if (user) {
        return res.json({
          user: user.toSafeObject()
        });
      } else return res.json({});
    }
  );

  //Gets all albums of a specific user
router.get('/:userId/albums', async(req, res) => {
  const id = req.params
  const albums = await Album.findAll({
    where: {
      userId: id.userId
    }
  })
  res.json(albums)
})

module.exports = router;
