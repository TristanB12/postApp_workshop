const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    infos: {
        date: {
            type: String,
            required: true,
        },
        nb_likes: {
            type: Number,
            required: true,
        },
        user: {
            type: String,
            required: true,
        }
    },
    content: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Post', PostSchema)