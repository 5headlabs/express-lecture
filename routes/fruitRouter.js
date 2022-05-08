//import express
const express = require("express");
//create router instance
const router = express.Router();

//import controllers
const fruitController = require("../controllers/fruitController");
const logController   = require("../controllers/logController");


const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

//forward requests to controllers
router.get("/"              , logController.logActivity, fruitController.listFruits);
router.post("/fruit/create" , fruitController.createFruit);
router.get("/fruit/:fruitID", fruitController.getFruitDetails);

//export router
module.exports = router;
