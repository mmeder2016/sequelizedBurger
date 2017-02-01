// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
    app.get("/", function(req, res) {
        var html_file = path.join(__dirname + "/../public/test.html");
        console.log('app.get("/", function(req, res) { \nSending: ' + html_file)
        res.sendFile(html_file);
    });
};