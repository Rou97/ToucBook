const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`El server esta en el puerto: ${PORT}`));

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        if (err) throw err;
        console.log("Conexión establecida con MongoDB");
    }
);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('app/build'))
}

// set up routes

app.use("/users", require("./routes/userRouter"));
app.use("/search", require("./routes/search"));
app.use("/library", require("./routes/library"));
app.use("/match", require("./routes/match"));