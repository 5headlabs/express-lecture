// Import express
const express = require("express");
// Create router instance
const router = express.Router();

// Import controllers
const fruitController = require("../controllers/fruitController");
const logController   = require("../controllers/logController");

// Using a body parser for form parsing
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// Forward requests to controllers
router.get("/"              , fruitController.listFruits);
router.post("/fruit/create" , fruitController.createFruit);
router.get("/fruit/:fruitID", logController.logActivity, fruitController.getFruitDetails);

// Export router
module.exports = router;
