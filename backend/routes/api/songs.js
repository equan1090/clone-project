const express = require('express');
const asyncHandler = require('express-async-handler');
const {Song} = require("../../db/models")


const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll();
    res.json(songs)
}))
router.get('/:songId', asyncHandler(async(req, res) => {
    const id = req.params
    const songs = await Song.findByPk(id.songId);
    res.json(songs)
}))

router.post('/', asyncHandler(async(req, res) => {
    const song = await Song.create(req.body);
    res.json(song)
}))

router.delete('/:songId', asyncHandler(async(req, res) => {
    const id = req.params
    const song = await Song.findByPk(id.songId)
    await song.destroy();
    res.json(song)
}))


module.exports = router;
