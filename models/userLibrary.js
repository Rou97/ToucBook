const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const librarySchema = new mongoose.Schema({
    userID: {
        type: ObjectId,
        ref: 'User'
    },
    bookID: {
        type: ObjectId,
        ref: 'Book'
    },
    bookMood: {
        type: Boolean,
    }
});

module.exports = Library = mongoose.model("library", librarySchema);