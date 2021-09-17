const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const {Album, Song} = require("../../db/models")




const router = express.Router();

//Can find all by user, will change in the future!!
router.get('/', asyncHandler(async function (_req, res) {
    const albums = await Album.findAll()
    res.json(albums)
}))


router.get('/:albumId', asyncHandler(async(req, res) => {
    const id = req.params
    const album = await Album.findByPk(id.albumId)
    res.json(album)

}))

router.get('/:albumId/songs', asyncHandler(async(req, res) => {
    const id = req.params
    const songs = await Song.findAll({
        where: {
            albumId: id.albumId
        }
    })
    res.json(songs)
}))

router.post('/new', asyncHandler(async(req,res) => {
    const album = await Album.create(req.body);
    res.json(album)
}))

router.delete('/:albumId/songs', asyncHandler(async(req, res) => {
    const id = req.params
    const album = await Album.findByPk(id.albumId)
    
    await album.destroy()
    return res.json(album)
}))


module.exports = router;
