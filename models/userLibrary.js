const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    email: {
        type: ObjectId,
        ref: 'User'
    },

    books: [{
        ISBN: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
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
        }
    }]
});

const Library = mongoose.model('library', userSchema);

module.exports = Library;