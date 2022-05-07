//import express
const express = require('express');
//create express instance
const app = express();

//import router
const router = require('./routes/fruits');

//set ejs as view engine
app.set('view engine', 'ejs');

//direct request handling
app.get('/', function(req, res) {
  res.redirect("/fruits");
});

//forward request to fruit router
app.use('/fruits', router);

module.exports = app;
