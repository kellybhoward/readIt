var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Badge = mongoose.model('Badge');
module.exports = {
    getAll: function(req,res){
        Badge.find({}, function(err, badges){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('getting badges!');
                res.json(badges);
            }
        })
    }
}
