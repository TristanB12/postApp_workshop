const User = require('../models/User')

module.exports = {
    login(req, res) {
        User.findOne({username : req.body.username})
            .then(user => {
                if(!user) {
                    return res.status(400).json({
                        message: 'Username not found'
                    })
                }
                console.log(user.username)
                if(req.body.password == user.password) {
                    return res.status(200).json({
                        user: user,
                        message: 'Connected'
                    })
                }
                else {
                    return res.status(400).json({
                        message: 'wrong password'
                    })
                }
            })
    },
    register(req, res) {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })
        if (req.body.password != req.body.confirm_password)
            res.status(400).json({
                message: 'Passwords are differents'
            })
        else {
            user.save()
                .then(user => res.status(200).json({
                    user: user,
                    message: 'Your account has been created'
                }))
                .catch(error => res.status(400).json({
                    error: error,
                    message: 'Username already used'
                }))
        }
    }
}

        /* USE THIS TO DROP USER DATABASE
        User.remove({}, function(err) {
            console.log('collection removed')
        });*/