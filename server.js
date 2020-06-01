// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Set up Express APP
const PORT = process.env.PORT || 3000;
const app = express();

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
app.get('/', (req, res) => {
    res.send("Hello")
});
// app.use(require("./routes/api.js"));

// Start server
app.listen(PORT, () => {
    console.log(`App running on localhost ${PORT}!`);
  });