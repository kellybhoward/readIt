var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var ProductSchema = new mongoose.Schema({
    name: String,
    bids: [{type: Schema.Types.ObjectId, ref: 'Bid'}]
})

//use deepPopulate plugin
ProductSchema.plugin(deepPopulate);

//create an instance of the model
var Product = mongoose.model('Product', ProductSchema);
