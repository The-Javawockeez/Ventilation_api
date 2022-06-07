const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema(
     {
        title: String,
        content: String
    }
)
const userDataSchema = new mongoose.Schema({
    userName: String,
    userDetails: String,
    userPosts: [postSchema]
})



const Post = mongoose.model('Post', postSchema)
module.exports = mongoose.model("UserData", userDataSchema)
