const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:8080/Ventilation-api")


module.exports = mongoose