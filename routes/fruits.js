//import express
const express = require("express");
//create router instance
const router = express.Router();

//import controllers
const fruitController = require("../controllers/fruitController");
const appleController = require("../controllers/appleController");
const pearController  = require("../controllers/pearController");
const logController   = require("../controllers/logController");

//forward requests to controllers
router.get("/"              , logController.logActivity, fruitController.listFruits);
router.post("/apple/create" , appleController.createApple);
router.get("/apple/:appleID", appleController.getAppleDetails);
router.post("/pear/create"  , pearController.createPear);
router.get("/pear/:pearID"  , pearController.getPearDetails);

//export router
module.exports = router;
