const router = require("express").Router();
const books = require('google-books-search');
const User = require("../models/userModel");
const Library = require("../models/userLibrary");
const Book = require("../models/books");


router.get("/", async (req, res) => {
    try {
        let { userID } = req.query;

        const library = await Library.find({ userID: userID });

        let a = [];

        library.forEach((element) => {
            a.push(element.bookID);
        });

        res.json(a);

        //console.log(a); arr de los id de los libros

        // let b = [];
        // a.forEach(async (element) => {
        //     console.log(element); lista de id books
        //     let c = await Book.find({ _id: element });
        //     console.log(c); arr de objetos de toda la info de los libros
        //     b.push(c);
        // });

        //console.log(b); arr vacia




        // books.search(`${data}`, function (error, results) {
        //     if (!error) {
        //         res.json(results);
        //     } else {
        //         res.json(error);
        //     }
        // });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;