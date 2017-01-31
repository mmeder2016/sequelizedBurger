// Import express for router, burger for database interface
var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
    console.log('router.get("/", function(req, res) {');
    // Calls function to render the Webpage with the current data
    burger.getAll(req, res);
});

router.post("/", function(req, res) {
    console.log('router.post("/", function(req, res) {');
 	// Calls function to add new data to database and then redirects to the 
 	// get "/" function above
    burger.addBurger(req, res);
});
  
router.put("/:id", function(req, res) {
    console.log('router.put("/:'+req.params.id, +'", function(req, res) {');
    // Calls function to update the database and then redirects to the 
 	// get "/" function above
    burger.devourBurger(req, res);
});

// Export routes for server.js to use.
module.exports = router;