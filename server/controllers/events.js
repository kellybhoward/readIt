var mongoose = require('mongoose');
//include necessary mongoose model to do the functions through
var Event = mongoose.model('Event');
module.exports = {
    getAll: function(req,res){
        Event.find({}, function(err, events){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('getting events!');
                res.json(events);
            }
        })
    },
    addEvent: function(req, res) {
        var event = new Event(req.body);
        event.save(function(err){
            if(err){
                console.log('something went wrong');
            } else{
                console.log('successfully added event!');
                res.redirect('/');
            }
        })
    },
}
