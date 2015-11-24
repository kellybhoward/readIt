var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var BookSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    author: String,
    ISBN: Number,
    numPages: Number,
    price: String,
    coverURL: String,
    amazonURL: String,
    finished: Boolean,
    categoryName: String,
    audio: Boolean
})
//validation paths for the attributes in the object
BookSchema.path('title').required(true, "Title cannot be blank");
BookSchema.plugin(deepPopulate);

var Book = mongoose.model('Book', BookSchema);

// db.books.insert({
//     title: "Smithsonian Timelines of History",
//     subtitle: "",
//     author: "D.K. Publishing",
//     ISBN: 0756686814,
//     numPages: 512,
//     price: "$33.55",
//     coverURL: "http://www4.alibris-static.com/smithsonian-timelines-of-history/isbn/9780756686819_l.jpg",
//     amazonURL: "http://www.amazon.com/Timelines-History-DK-Publishing/dp/0756686814/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=",
//     finished: false,
//     categoryName: "History"
// })

// db.books.update(
//     {"title": "Smithsonian Timelines of History"},
//     {
//         $set:{
//             audio: false
//         }
//     }
// )
