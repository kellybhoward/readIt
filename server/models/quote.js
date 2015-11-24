var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var QuoteSchema = new mongoose.Schema({
    quote: String,
    author: String,
    number: Number
})

//use deepPopulate plugin
QuoteSchema.plugin(deepPopulate);

var Quote = mongoose.model('Quote', QuoteSchema);
