const router = require("express").Router();
const books = require('google-books-search');

router.post("/", async (req, res) => {
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

module.exports = router;