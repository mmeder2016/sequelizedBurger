// INITIALIZE DEPENDENCIES
var express = require('express');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Initialize a port number
var PORT = process.env.PORT || 3000;

// Create the express object
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Configure the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Initialize routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Listen for incoming requests
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});