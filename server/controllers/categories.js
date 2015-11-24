var mongoose = require('mongoose');
//include necessary mongoose model to do the functions

var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Book = mongoose.model('Book');
var Category = mongoose.model('Category');

//controller methods as referenced in the routes file
module.exports = {
    showAll: function(req,res){
        Category.find({}).deepPopulate(['books', 'posts', 'posts._user', 'posts._category', 'posts.comments', 'posts.comments._user', 'posts.comments._post']).exec(function(err, categories){
            if(err){
                console.log('something went wrong with showing categories');
            } else{
                console.log('getting categories!');
                res.json(categories);
            }
        })
    },
    getCategory: function(req, res){
        Category.findOne({name: req.body.name}).deepPopulate(['posts', 'books', 'books._category', 'posts._user', 'posts.comments', 'posts.comments._user']).exec(function(err, category){
            if(err){
                console.log('something went wrong getting the deeply populated category');
            }
            else{
                console.log('success in getting deep category!');
                console.log(category);
                res.json(category);
            }
        })
    },
    // addTopic: function(req, res) {
    //     console.log(req.body.topic.title + req.body.topic.description + req.body.topic.category);
    //     var topic = new Topic({title: req.body.topic.title, description: req.body.topic.description, category: req.body.topic.category, _user: req.body.user});
    //     console.log(topic);
    //     topic.save(function(err){
    //         if(err){
    //             console.log('something went wrong with adding a topic');
    //         } else{
    //             console.log('successfully added topic!');
    //             res.redirect('/');
    //         }
    //     })
    // }
}
