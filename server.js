// Dependencies
const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");

// Set up Express APP
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));

// Set up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Mongodb
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:h6TH!shSfGsfei!@ds155130.mlab.com:55130/heroku_pkdv7vsl";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useMongoClient: true
});

//Creating Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
// app.use(require("./routes/api.js"));

// Start server
app.listen(PORT, () => {
    console.log(`App running on localhost ${PORT}!`);
  });