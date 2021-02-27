const User = require('../models/User')

module.exports = {
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