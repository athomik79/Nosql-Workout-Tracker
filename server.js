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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//Creating Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
// app.use(require("./routes/api.js"));

// Start server
app.listen(PORT, () => {
    console.log(`App running on localhost ${PORT}!`);
  });