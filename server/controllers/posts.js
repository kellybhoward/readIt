var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Category = mongoose.model('Category');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
module.exports = {
    addPost: function(req, res){
        Category.findOne({_id: req.body.category._id}, function(err, category){
            var post = new Post({text: req.body.post.text, _user: req.body.user[0], _category: req.body.category, comments: [], up: 0, down: 0});
            console.log(post);
            post._category = category._id;
            category.posts.push(post);
            post.save(function(err){
                category.save(function(err){
                    if(err){
                        console.log('something is wrong adding post');
                    } else{
                        console.log('success adding post!');
                        res.redirect('/');
                    }
                });
            })
        })
    },
    // addPost: function(req, res){
    //     console.log(req.body.post.text + req.body.user.name + req.body.topic._id);
    //     Topic.findOne({_id: req.body.topic._id}, function(err, topic){
    //         var post = new Post({text: req.body.post.text, _user: req.body.user, _topic: req.body.topic, up: 0, down: 0});
    //         console.log(post);
    //         post._topic = topic._id;
    //         topic.posts.push(post);
    //         post.save(function(err){
    //             topic.save(function(err){
    //                 if(err){
    //                     console.log('something is wrong adding post');
    //                 } else{
    //                     console.log('success adding post!');
    //                     res.redirect('/');
    //                 }
    //             });
    //         })
    //     })
    // },
    getPostById: function(req, res){
        Post.findById(req.body.id).deepPopulate(['_user', '_category', 'comments', 'comments._user', 'comments._post']).exec(function(err, post){
            if(err){
                console.log('something went wrong getting the deeply populated post');
            }
            else{
                console.log('success in getting deep post!');
                console.log(post);
                res.json(post);
            }
        })
    },
    // increaseUps: function(req, res){
    //     var conditions = {_id: req.body.id}, update = {$inc: {up: 1}}, options = {multi: false};
    //     Post.update(conditions, update, options, callback);
    //     function callback(err, post){
    //         if(err){
    //             console.log('increasing up did not work');
    //         } else{
    //             console.log('increased ups!');
    //             res.redirect('/');
    //         }
    //     }
    // },
    // increaseDowns: function(req, res){
    //     var conditions = {_id: req.body.id}, update = {$inc: {down: 1}}, options = {multi: false};
    //     Post.update(conditions, update, options, callback);
    //     function callback(err, post){
    //         if(err){
    //             console.log('increasing down did not work');
    //         } else{
    //             console.log('increased downs!');
    //             res.redirect('/');
    //         }
    //     }
    // }
}
