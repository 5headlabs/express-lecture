//import express
const express = require('express');
const res = require('express/lib/response');

//get the connection script
const connection = require("./models/connection");



//create express instance
const app = express();

//connect to the database
connection.connectToDB();

//import router
const router = require('./routes/fruitRouter');

//set ejs as view engine
app.set('view engine', 'ejs');

//direct request handling
app.get('/', function(req, res) {
  res.redirect("/fruits");
});

//forward request to fruit router
app.use('/fruits', router);

//handling 404 error
app.use('*', function(req, res) {
  res.redirect("/");
});

//handling any other error
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Error 500 - Something broke!");
});

module.exports = app;
