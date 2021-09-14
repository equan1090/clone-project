const express = require('express');
const asyncHandler = require('express-async-handler');
const {Song} = require("../../db/models")


const router = express.Router();


// router.get('/')

router.post('/', asyncHandler(async(req, res) => {
    const song = await Song.create(req.body);
    res.json(song)
}))


module.exports = router;
