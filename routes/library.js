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

        listOfBooks = await Book.find({ _id: { $in: a } });

        const info = {
            listOfBooks,
            library
        }

        res.json(info);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/changemood", async (req, res) => {

    let { _id, bookMood } = req.body;

    const updateMoodBook = await Library.findByIdAndUpdate(_id, { bookMood });

    res.json(updateMoodBook);
})

module.exports = router;