const express = require('express');
const asyncHandler = require('express-async-handler');

const {Comment} = require('../../db/models')

const router = require('express').Router();


// router.get('/:songId', asyncHandler(async(req, res) => {
//     const songId = req.params
//     const comments = await
// }))
