var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Book = mongoose.model('Book');
module.exports = {
    getAll: function(req,res){
        Book.find({}, function(err, books){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('getting books!');
                res.json(books);
            }
        })
    }
//     showOne: function(req, res){
//         Product.findById(req.params.id).deepPopulate(['bids', 'bids._user', 'comments._post']).exec(function(err, product){
//             if(err){
//                 console.log('something went wrong getting the deeply populated product');
//             }
//             else{
//                 console.log('success in getting deep product!');
//                 console.log(product);
//                 res.json(product);
//             }
//         })
//     }
}
