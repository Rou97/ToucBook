const router = require("express").Router();
const books = require('google-books-search');
const Book = require("../models/books");

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
        const data = req.body;
        const { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher } = data;

        const ISBN = industryIdentifiers[1].identifier;
        //const author = authors[0];
        const existingBook = await Book.findOne({ ISBN: ISBN });

        const newBook = {
            title,
            authors,
            ISBN,
            language,
            thumbnail,
            description,
            pageCount,
            publisher
        };

        // console.log(newBook);
        // console.log(existingBook);

        if (!existingBook) {
            console.log('hey')
            let savedBook = await Book.create(newBook);
            console.log(savedBook);
            res.json(savedBook);
        } else {
            console.log('reee')
        }


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;