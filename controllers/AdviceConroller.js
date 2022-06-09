const express = require('express')
const Advice = require('../models/Advice')
const router = express.Router()

// get all current data
router.get('/', (req, res) => {
    Advice.find()
        .then(data => res.status(200).json({ data: data }))
})

// post advice to the api
router.post('/', (req, res) => {
    Advice.create(req.body).then((data) => res.status(201).json({data:data}))
})

// Find by username
router.get('/:username', (req, res) => {
    Advice.find({ userName: req.params.username })
        .then((username) => res.status(201).json({ username: username }))
})

// update a post by id
router.patch('/:id', (req, res) => {
    Advice.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedPost) => res.status(201).json({ updatedPost: updatedPost }))
})

//delete a post by id
router.delete('/:id', (req, res) => {
    Advice.findByIdAndDelete(req.params.id)
    .then((deletedPost) => res.status(204).json({deletedPost: deletedPost}))
})

module.exports = router