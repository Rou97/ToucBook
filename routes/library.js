const router = require("express").Router();
const books = require('google-books-search');
const User = require("../models/userModel");
const Library = require("../models/userLibrary");

router.get("/", async (req, res) => {
    try {
        let { userID } = req.query;
        console.log(userID);


        const user = await User.findOne({ _id: userID });
        console.log(user); s



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