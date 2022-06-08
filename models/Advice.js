const mongoose = require('../db/connection')

const adviceSchema = new mongoose.Schema({
    problem: "String",
    solution: "String",
    comments: ["String"]
})

module.exports = mongoose.model("Advice", adviceSchema)