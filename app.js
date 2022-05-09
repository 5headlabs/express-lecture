// Import express
const express = require('express');

// Get the connection script
const connection = require("./models/connection");


// Create express instance
const app = express();

// Connect to the database
connection.connectToDB();

// Import router
const router = require('./routes/fruitRouter');

// Set ejs as view engine
app.set('view engine', 'ejs');

// Direct request handling
app.get('/', function(req, res) {
  res.redirect("/fruits");
});

// Forward request to fruit router
app.use('/fruits', router);

// Handling 404 error
app.use('*', function(req, res) {
  res.redirect("/");
});

// Handling any other error
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Error 500 - Something broke!");
});

module.exports = app;
