//import express
const express = require("express");
//create router instance
const router = express.Router();

//import controllers
const fruit_Controller = require("../controllers/fruitController");
const apple_Controller = require("../controllers/appleController");
const pear_Controller  = require("../controllers/pearController");
const log_Controller   = require("../controllers/logController");

//forward requests to controllers
router.get("/"              , log_Controller.logActivity, fruit_Controller.listFruits);
router.post("/apple/create" , apple_Controller.createApple);
router.get("/apple/:appleID", apple_Controller.getAppleDetails);
router.post("/pear/create"  , pear_Controller.createPear);
router.get("/pear/:pearID"  , pear_Controller.getPearDetails);

//export router
module.exports = router;
