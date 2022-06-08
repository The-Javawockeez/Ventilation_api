const mongoose = require('../db/connection')

const userDataSchema = new mongoose.Schema({
    userName: String,
    userDetails: String,
    title: String,
    content: String
})


module.exports = mongoose.model("UserData", userDataSchema)