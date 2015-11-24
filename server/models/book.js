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
//     title: "Economics in One Lesson",
//     subtitle: "",
//     author: "Henry Hazlitt",
//     ISBN: 0517548232,
//     numPages: 218,
//     price: "$8.42",
//     coverURL: "http://www.google.com/imgres?imgurl=http://www.intellectualtakeout.org/sites/ito/files/economics_in_one_lesson.jpeg&imgrefurl=http://www.intellectualtakeout.org/blog/11-painfully-accurate-quotes-hazlitts-economics-one-lesson&h=700&w=459&tbnid=0Ttv0FLXcHudRM:&docid=oz7YfjilpRDn9M&ei=HN1UVtTvLsOkeob9nOgI&tbm=isch&ved=0ahUKEwjU7aDXhqrJAhVDkh4KHYY-B40QMwgfKAIwAg",
//     amazonURL: "http://www.amazon.com/Economics-One-Lesson-Shortest-Understand/dp/0517548232/ref=tmm_pap_title_0?_encoding=UTF8&qid=&sr=",
//     finished: false,
//     categoryName: "Economics",
//     audio: true
// })

// db.books.update(
//     {"title": "Smithsonian Timelines of History"},
//     {
//         $set:{
//             audio: false
//         }
//     }
// )
// http://www.intellectualtakeout.org/sites/ito/files/economics_in_one_lesson.jpeg
