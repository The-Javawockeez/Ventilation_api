const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:3000/Ventilation-api", { useNewUrlParser: true })


module.exports = mongoose