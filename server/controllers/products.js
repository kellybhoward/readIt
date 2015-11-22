var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Product = mongoose.model('Product');
var Bid = mongoose.model('Bid');
var User = mongoose.model('User');
module.exports = {
    show: function(req,res){
        Product.find({}).deepPopulate(['bids', 'bids._user']).exec( function(err, products){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('getting products!');
                res.json(products);
            }
        })
    },
    showOne: function(req, res){
        Product.findById(req.params.id).deepPopulate(['bids', 'bids._user', 'comments._post']).exec(function(err, product){
            if(err){
                console.log('something went wrong getting the deeply populated product');
            }
            else{
                console.log('success in getting deep product!');
                console.log(product);
                res.json(product);
            }
        })
    }
}
