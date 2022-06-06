const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:8080/ventilation-api")


module.exports = mongoose