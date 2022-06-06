// Require in dependencies
require('dotenv').config()
const express = require('express')
const UserDataController = require('./controllers/UserDataController')
const cors = require('cors')
const res = require('express/lib/response')

// Define port
const PORT = process.env.PORT

// Create express app
const app = express()

app.use(express.urlencoded({ extended: false }))

// Cors
app.use(cors())

// Accept Json as req.body
app.use(express.json())

// Routes
// app.use('/user', UserDataController)
app.post('/', (req, res) => {
    res.json("hello world")
})

// Set port
app.listen(PORT, () => {
    console.log(`listening in on port: ${PORT}`)
})