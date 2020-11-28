const router = require("express").Router();
const books = require('google-books-search');
const Book = require("../models/books");
const Library = require("../models/userLibrary");
const User = require("../models/userModel");
//const auth = require("../middleware/auth");

router.post("/book", async (req, res) => {
    try {
        let { data } = req.body;

        books.search(`${data}`, function (error, results) {
            if (!error) {
                res.json(results);
            } else {
                res.json(error);
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/addBook", async (req, res) => {
    try {

        async function addToLibrary(idBook, idUser, provincia) {
            let newBookInLibrary = { userID: idUser, bookID: idBook, bookMood: true, bookLocation: provincia }
            let saveInLibrary = await Library.create(newBookInLibrary);
        }

        const { data, userData } = req.body;
        const { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher } = data;

        const user = await User.findById({ _id: userData.user.id });

        const ISBN = industryIdentifiers[1].identifier;
        const image = thumbnail;
        const existingBook = await Book.findOne({ ISBN: ISBN });

        const newBook = {
            title,
            authors,
            ISBN,
            language,
            image,
            description,
            pageCount,
            publisher
        };

        if (!existingBook) {
            let savedBook = await Book.create(newBook);
            addToLibrary(savedBook._id, userData.user.id, user.provincia)
        } else {
            addToLibrary(existingBook._id, userData.user.id, user.provincia);
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/removeBook", async (req, res) => {
    try {
        const { data, userData } = req.body;

        const { id } = userData.user;
        const { title } = data;
        const checkUser = await User.findOne({ _id: id });
        const checkBook = await Book.findOne({ title })

        const removeLibrary = await Library.findOneAndDelete({ userID: checkUser._id, bookID: checkBook._id });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;