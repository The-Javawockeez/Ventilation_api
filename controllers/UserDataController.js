const express = require('express')
const UserData = require('../models/UserData')

const router = express.Router()

//Show all posts
router.get('/', (req, res) => {
    UserData.find()
        .then(data => res.status(200).json({ data: data }))
})

// Make a new post
router.post('/', (req, res) => {
    const data = req.body
    UserData.create(data)
        .then(post => res.status(201).json({ post: post }))
})

//Update one post by ID
router.patch('/:id', (req, res) => {
    UserData.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((updatedPost) => res.status(201).json({updatedPost: updatedPost}))
})

//Delete a post by ID
router.delete('/:id', (req, res) => {
    UserData.findByIdAndDelete(req.params.id)
    .then((updatedPost) => res.status(204).json({updatedPost: updatedPost}))
})

// get all the posts that have the same username 
router.get('/:username', (req, res) => {
    UserData.find({ userName: req.params.username })
        .then((username) => res.status(201).json({ username: username }))
})

module.exports = router 