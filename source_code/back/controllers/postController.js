const Post = require('../models/Post')
const Date = require('../modules/date')

module.exports = {
    addPost(req, res) {
        const post = new Post({
            infos: {
                date: Date.getCurrentDate(),
                nb_likes: 0,
                user: req.body.user,
                liked_by: [],
                liked_by_user: false
            },
            content: 'do not copy paste ;)'
        })
        console.log(post)
        post.save()
            .then(post => res.status(200).json({
                post: post,
                message: 'post added'
            }))
            .catch(error => res.status(400).json({
                error: error,
                message: `can't add post`
            }))
    },
    getPost(req, res) {
        Post.find()
            .then(posts => {
                posts.forEach(post => {
                    post.infos.liked_by.forEach(user => {
                        if (user == req.body.username)
                            post.infos.liked_by_user = true
                    })
                })
                res.status(200).json({
                    posts: posts,
                })
            })
            .catch(error => res.status(400).json({
                error: error,
                message: 'impossible to find posts'
            }))
    },
}

        /* USE THIS TO DROP POST DATABASE
        Post.remove({}, function(err) {
            console.log('collection removed')
        });*/
