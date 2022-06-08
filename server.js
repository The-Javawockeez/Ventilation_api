// Require in dependencies
require('dotenv').config()
const express = require('express')
const UserDataController = require('./controllers/UserDataController')
const Advice = require('./controllers/AdviceConroller')
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
app.use('/Ventilation-api/', UserDataController)
app.use('/Ventilation-api/advice/', Advice)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});