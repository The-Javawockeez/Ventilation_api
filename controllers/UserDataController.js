const express = require('express')
const UserData = require('../models/UserData')

const router = express.Router()

router.get('/', (req, res) => {
    UserData.find()
        .then(data => res.status(200).json({ data: data }))
})

module.exports = router 