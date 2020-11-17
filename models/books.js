const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    language: {
        type: String
    },
    pageCount: {
        type: String
    },
    publisher: {
        type: String
    }
});

module.exports = Book = mongoose.model("book", bookSchema);