var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var EventSchema = new mongoose.Schema({
    bookTopic: String,
    locationName: String,
    city: String,
    state: String,
    date: Date,
    time: String,
    notes: String
})

//use deepPopulate plugin
EventSchema.plugin(deepPopulate);

var Event = mongoose.model('Event', EventSchema);
