const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/Ventilation-api")


module.exports = mongoose