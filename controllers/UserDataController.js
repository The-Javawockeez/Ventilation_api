const express = require('express')
const UserData = require('../models/UserData')

const router = express.Router()

router.get('/', (req, res) => {
    UserData.find()
        .then(data => res.status(200).json({ data: data }))
})

router.post('/', (req, res) => {
    const data = req.body
    UserData.create(data)
        .then(post => res.status(201).json({ post: post }))
})

module.exports = router 