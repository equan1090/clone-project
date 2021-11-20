const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const {Album, Song} = require("../../db/models")

const router = express.Router();

//Can find all by user, will change in the future!!
router.get('/', asyncHandler(async function (_req, res) {
    const albums = await Album.findAll({
        order: [['updatedAt', 'ASC']],
        LIMIT: 6
    })
    res.json(albums)
}))


router.get('/:albumId', asyncHandler(async(req, res) => {
    const id = req.params
    const album = await Album.findByPk(id.albumId)
    res.json(album)

}))

router.get('/created', asyncHandler(async(req, res) => {
    const albums = await Album.findAll({
        order: [['updatedAt', 'DESC']],
        LIMIT: 6
    })
    res.json(albums)
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

router.put('/:albumId', asyncHandler(async(req,res) => {
    const {albumId} = req.params
    const {title, imageUrl} = req.body
    const album = await Album.findByPk(albumId)

    if(album){
        await album.update({title, imageUrl})
        return res.status(301).json(album)
    }
    else{
        return res.status(404).json('NOT FOUND')
    }
}))

router.delete('/:albumId/songs', asyncHandler(async(req, res) => {
    const id = req.params
    const album = await Album.findByPk(id.albumId)

    await album.destroy()
    return res.json(album)
}))


module.exports = router;
