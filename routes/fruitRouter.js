//import express
const express = require("express");
//create router instance
const router = express.Router();

//import controllers
const fruitController = require("../controllers/fruitController");
const logController   = require("../controllers/logController");

//using a body parser for form parsing
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

//forward requests to controllers
router.get("/"              , fruitController.listFruits);
router.post("/fruit/create" , fruitController.createFruit);
router.get("/fruit/:fruitID", logController.logActivity, fruitController.getFruitDetails);

//export router
module.exports = router;
