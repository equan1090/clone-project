const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const albumRouter = require('./album')
const songRouter = require('./songs')
router.use('/session', sessionRouter);

router.use('/songs', songRouter)
router.use('/users', usersRouter);
router.use('/album', albumRouter)

module.exports = router;
