const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// We create the schema that we will use for our books
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    authors: {
        // This will accept either one or multiple authors
        // and store them in our db as an array https://mongoosejs.com/docs/schematypes.html#strings
        type: [String]
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    }
});

// We create our Book Constructor to use it in the app
const Book = mongoose.model("Book", bookSchema);

// We export our Book schema to use it un our app
module.exports = Book;