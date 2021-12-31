const express = require('express');
const asyncHandler = require('express-async-handler');
const {Song, Comment} = require("../../db/models")
const {singleMulterUpload, singlePublicFileUpload} = require('../../awsS3')
// const {setTokenCookie} = require('../../utils/auth')
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

//Get all comments from a song
router.get('/:songId/comments', asyncHandler(async(req, res) => {
    const {songId} = req.params
    const comments = await Comment.findAll({
        where: {
            songId
        }
    })
    res.json(comments);
}))

router.post('/:songId/comments', asyncHandler(async(req, res) => {

    const comment = await Comment.create(req.body);
    res.json(comment)
}))

router.post('/', singleMulterUpload("url"), asyncHandler(async (req, res) => {

    const {userId, name, albumId} = req.body;
    const url = await singlePublicFileUpload(req.file);
    const newSong = await Song.create({
        userId,
        name,
        albumId,
        url
    })

    return res.json({
        newSong,
    })
}))




module.exports = router;
