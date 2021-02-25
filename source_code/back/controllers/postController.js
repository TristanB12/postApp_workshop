const User = require('../models/Post')
const Date = require('../modules/date')

module.exports = {
    addPost(req, res) {
        const post = new Post({
            infos: {
                date: Date.getCurrentDate(),
                nb_likes: 0,
                user: req.body.user
            },
            content: req.body.content
        })
        post.save()
            .then(post => res.status(200).json({
                post: post,
                message: 'post added'
            }))
            .catch(error => res.status(400).json({
                error: error,
                message: `can't add post`
            }))
    }
}