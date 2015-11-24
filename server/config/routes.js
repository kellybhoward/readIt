var mongoose = require('mongoose');
//include all necessary controllers for all the server routes
var users = require('../controllers/users.js');
var quotes = require('../controllers/quotes.js');
var events = require('../controllers/events.js');
var categories = require('../controllers/categories.js');
var comments = require('../controllers/comments.js');
var posts = require('../controllers/posts.js');
var badges = require('../controllers/badges.js');
var books = require('../controllers/books.js');

module.exports = function(app){

    app.get('/users/showAll', function(req, res) {
        users.showAll(req, res)
    })
    app.post('/users/storeUser', function(req, res) {
        users.storeUser(req, res)
    })
    app.post('/users/getUser', function(req, res){
        console.log('made it to routes - getUser');
        users.getUser(req, res)
    })
    app.post('/users/getUserById', function(req, res){
        console.log('made it to routes - getUserById');
        users.getUserById(req, res)
    })
    app.get('/quotes/getAll', function(req, res) {
        quotes.getAll(req, res)
    })
    app.get('/events/getAll', function(req, res) {
        events.getAll(req, res)
    })
    app.post('/events/addEvent', function(req, res) {
        events.addEvent(req, res)
    })
    app.get('/categories/showAll', function(req, res) {
        categories.showAll(req, res)
    })
    app.post('/categories/getCategory', function(req, res){
        console.log('made it to routes - getCategory');
        categories.getCategory(req, res)
    })
    app.post('/posts/addPost', function(req, res){
        posts.addPost(req, res)
    })
    app.post('/posts/getPostById', function(req, res){
        console.log('made it to routes - getPostById');
        posts.getPostById(req, res)
    })
    app.post('/comments/addComment', function(req, res){
        comments.addComment(req, res)
    })
    app.get('/badges/getAll', function(req, res) {
        badges.getAll(req, res)
    })
    app.get('/books/getAll', function(req, res) {
        books.getAll(req, res)
    })
    // app.post('/products/:id', function(req, res){
    //     products.showOne(req, res)
    // })
    // app.post('/bids/add', function(req, res){
    //     bids.addBid(req, res)
    // })
    // app.post('/bids/destroy', function(req, res){
    //     bids.destroyAll(req, res)
    // })
}
