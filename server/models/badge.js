var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
//name schema and include document attributes
var BadgeSchema = new mongoose.Schema({
    src: String,
    name: String,
})

//use deepPopulate plugin
BadgeSchema.plugin(deepPopulate);

var Badge = mongoose.model('Badge', BadgeSchema);
