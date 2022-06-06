const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema({
    post: [{
        title: String,
        content: String
    }]
})

const userDataSchema = new mongoose.Schema({
    username: String,
    userDetails: String,
    userPosts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }]
})

const Post = mongoose.model('Post', postSchema)

module.exports = mongoose.model("UserData", userDataSchema)