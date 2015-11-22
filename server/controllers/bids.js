var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Product = mongoose.model('Product');
var Bid = mongoose.model('Bid');
var User = mongoose.model('User');
module.exports = {
    addBid: function(req, res){
        console.log(req.body.bid.amount + req.body.user.name + req.body.product._id);
        Product.findOne({_id: req.body.product._id}, function(err, product){
            var bid = new Bid({amount: req.body.bid.amount, _user: req.body.user, _product: req.body.product});
            console.log(bid);
            bid._product = product._id;
            product.bids.push(bid);
            bid.save(function(err){
                product.save(function(err){
                    if(err){
                        console.log('something wrong add bid');
                    } else{
                        console.log('success adding bid');
                        res.redirect('/');
                    }
                });
            })
        })
    },
    destroyAll: function(req, res){
        console.log('made it to the destroy method in bids');
        // var conditions = {}, update = {_user: {}, _product:{}, amount: 0}, options = {multi: true};
        Bid.remove({}).exec(
        function(err, bid){
            if(err){
                console.log('something went wrong with bids');
            } else{
                console.log('deleted bids');
                var conditions = {}, update = {bids: [], highestBid: 0}, options = {multi: true};

                Product.update(conditions, update, options, callback);
                function callback(err, product){
                    if(err){
                        console.log('something went wrong with products');
                    } else{
                        console.log('updated products');
                        res.redirect('/');
                    }
                }
            }
        })
    }
}
