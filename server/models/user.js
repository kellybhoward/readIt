var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var UserSchema = new mongoose.Schema({
    name: String,
    bids: [{type: Schema.Types.ObjectId, ref: 'Bid'}]
})
//validation paths for the attributes in the object
UserSchema.path('name').required(true, "Name cannot be blank");

//use deepPopulate plugin
UserSchema.plugin(deepPopulate);

var User = mongoose.model('User', UserSchema);
