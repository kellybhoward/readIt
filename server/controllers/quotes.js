var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Quote = mongoose.model('Quote');
module.exports = {
    getAll: function(req,res){
        Quote.find({}, function(err, quotes){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('getting quotes!');
                res.json(quotes);
            }
        })
    }
}
