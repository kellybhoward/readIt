var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var CategorySchema = new mongoose.Schema({
    name: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
    badge: {}
})
//validation paths for the attributes in the object
CategorySchema.path('name').required(true, "Name cannot be blank");
CategorySchema.plugin(deepPopulate);

var Category = mongoose.model('Category', CategorySchema);
