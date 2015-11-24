var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var User = mongoose.model('User');
module.exports = {
    showAll: function(req,res){
        User.find({}, function(err, users){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('getting users!');
                res.json(users);
            }
        })
    },
    storeUser: function(req, res) {
        var user = new User({name: req.body.name,
        given_name: req.body.given_name,
        family_name: req.body.family_name,
        picture: req.body.picture,
        location: req.body.location.name,
        user_id: req.body.user_id});
        user.save(function(err){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('successfully added user!');
                res.redirect('/');
            }
        })
    },
    // showOne: function(req, res){
    //     User.find({_id: req.params.id}, function(err, profile){
    //         if(err){
    //             console.log('something went wrong and i am in the showOne function');
    //         } else{
    //             console.log('getting a user!');
    //             console.log(profile);
    //             res.json(profile);
    //         }
    //     })
    // },
    getUser: function(req, res){
        User.find({name: req.body.name}, function(err, user){
            console.log(req.body.name)
            if(err){
                console.log('something went wrong with getting user');
            } else{
                console.log('getting a user!');
                console.log(user);
                res.json(user);
            }
        })
    },
    getUserById: function(req, res){
        console.log(req.body);
        User.find({user_id: req.body.user_id}).exec( function(err, user){
            console.log(user);
            if(err){
                console.log('something went wrong with getting user');
            } else{
                console.log('getting a user!');
                console.log(user);
                res.json(user);
            }
        })
    }
    // increaseTopicCount: function(req, res){
    //     console.log('made it to increaseTopicCount');
    //     var conditions = {name: req.body.name}, update = {$inc: {topicCount: 1}}, options = {multi: false};
    //     User.update(conditions, update, options, callback);
    //     function callback(err, user){
    //         if(err){
    //             console.log("increasing topic didn't work");
    //         }
    //         else{
    //             console.log('increased topic count for ' + req.body.name);
    //             res.redirect('/');
    //         }
    //     }
    // },
    // increasePostCount: function(req, res){
    //     console.log('made it to increasePostCount');
    //     var conditions = {name: req.body.name}, update = {$inc: {postCount: 1}}, options = {multi: false};
    //     User.update(conditions, update, options, callback);
    //     function callback(err, user){
    //         if(err){
    //             console.log("increasing post didn't work");
    //         }
    //         else{
    //             console.log('increased post count for ' + req.body.name);
    //             res.redirect('/');
    //         }
    //     }
    // }
}
