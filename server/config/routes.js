var mongoose = require('mongoose');
//include all necessary controllers for all the server routes
var users = require('../controllers/users.js');
// var products = require('../controllers/products.js');
// var bids = require('../controllers/bids.js');

module.exports = function(app){

    app.get('/users', function(req, res) {
        users.show(req, res)
    })
    app.post('/users/add', function(req, res) {
        users.addUser(req, res)
    })
    app.post('/users/getUser', function(req, res){
        console.log('made it to routes - getUser');
        users.getUser(req, res)
    })
    // app.get('/products', function(req, res) {
    //     products.show(req, res)
    // })
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
