var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var BidSchema = new mongoose.Schema({
    amount: Number,
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

//use deepPopulate plugin
BidSchema.plugin(deepPopulate);

//create an instance of the model
var Bid = mongoose.model('Bid', BidSchema);
