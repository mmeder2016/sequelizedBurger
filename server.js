// INITIALIZE DEPENDENCIES
var express = require('express');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// Requiring our models for syncing
var db = require("./models");

// Initialize a port number
var PORT = process.env.PORT || 8080;

// Create the express object
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Configure the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Initialize routes
//var routes = require("./controllers/burgers_controller.js");
// var routes = require("./controllers/sequelize_burgers_controller.js");
// app.use("/", routes);
require("./routes/burger-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});