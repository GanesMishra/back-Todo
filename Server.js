
const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TodoRoute");


const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connect hua mongodb..."))
    .catch((err) => console.error(err));

app.use(express.static('build'), routes);


app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
