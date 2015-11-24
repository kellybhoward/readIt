var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var UserSchema = new mongoose.Schema({
    name: String,
    given_name: String,
    family_name: String,
    picture: String,
    location: String,
    user_id: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    booksRead: [{type: Schema.Types.ObjectId, ref: 'Book'}],
    date_created: {type: Date, default: Date.now}
})

//use deepPopulate plugin
UserSchema.plugin(deepPopulate);

var User = mongoose.model('User', UserSchema);
