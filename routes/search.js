const router = require("express").Router();
const books = require('google-books-search');
const Book = require("../models/books");
const Library = require("../models/userLibrary");

router.post("/book", async (req, res) => {
    try {
        let { data } = req.body;

        books.search(`${data}`, function (error, results) {
            if (!error) {
                console.log(results)
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

        async function addToLibrary(idBook, idUser) {
            console.log('funcion ' + idBook, idUser);
            let newBookInLibrary = { userID: idUser, bookID: idBook }
            console.log(newBookInLibrary);
            let saveInLibrary = await Library.create(newBookInLibrary);
            console.log(saveInLibrary);

        }

        const { data, userData } = req.body;
        const { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher } = data;


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

        console.log(1);
        console.log(newBook);

        if (!existingBook) {
            console.log('hey')
            let savedBook = await Book.create(newBook);
            console.log(savedBook);
            addToLibrary(savedBook._id, userData.user.id)
            //res.json(savedBook);
        } else {
            console.log('reee')
            addToLibrary(existingBook._id, userData.user.id);
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;