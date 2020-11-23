const router = require("express").Router();
const Library = require("../models/userLibrary");
const User = require("../models/userModel");
const Book = require("../models/books");


router.get("/", async (req, res) => {

    async function makeMatches(matches) {
        let match = [];
        let info = [];
        let count = 0;

        matches.forEach(async (element) => {
            const user = await User.findById({ _id: element.userID });
            const book = await Book.findById({ _id: element.bookID });

            if (count !== matches.length) {
                match = [];
            }

            match.push(user, book);
            info.push(match)
            count += 1;

            if (count === matches.length) {
                console.log(info)
                res.json(info);
            }
        })
    }

    let { id } = req.query;
    let matches = [];
    if (id) {
        const bookOffered = await Library.find({ userID: id, bookMood: false })

        bookOffered.forEach(async (element) => {
            const a = await Library.find({ userID: { $ne: id }, bookID: element.bookID, bookMood: true })
            matches.push(a[0]);
            if (matches.length === bookOffered.length) {
                makeMatches(matches)
            }
        });
    }
});

module.exports = router;