var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var SuggestionSchema = new mongoose.Schema({
    bookTitle: String,
    reason: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

//use deepPopulate plugin
SuggestionSchema.plugin(deepPopulate);

//create an instance of the model
var Suggestion = mongoose.model('Suggestion', SuggestionSchema);
