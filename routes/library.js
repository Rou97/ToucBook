const router = require("express").Router();
const books = require('google-books-search');
const User = require("../models/userModel");
const Library = require("../models/userLibrary");
const Book = require("../models/books");


router.get("/", async (req, res) => {
    try {
        let { userID } = req.query;
        let a = [];
        let listOfBooks = [];

        const library = await Library.find({ userID: userID });


        library.forEach(async (element) => {
            a.push(element.bookID);
        });

        //console.log(a);

        listOfBooks = await Book.find({ _id: { $in: a } });

        res.json(listOfBooks);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;