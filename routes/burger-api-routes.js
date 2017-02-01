var db = require("../models");

module.exports = function(app) {
    // Find all SequelizeBurger and return them to the user with res.json
    app.get("/", function(req, res) {
        console.log('app.get("/", function(req, res) {')

        db.SequelizeBurger.findAll({}).then(function(dbResults) {
            // Create handlebars object
            var hbsObj = {
                burger_db: dbResults
            };
            console.log(dbResults);
            console.log(hbsObj);
            res.render("index", hbsObj);
        });
    });

    app.post("/", function(req, res) {
        console.log('app.post("/", function(req, res) {')

        // Create an SequelizeBurger with the data available to us in req.body
        db.SequelizeBurger.create({
            burger_name: req.body.name
        }).then(function(dbResults) {
            //Call app.get - refresh page with database info
            console.log('dbResults:\n' + dbResults);
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res) {
        console.log('app.put("/:id", function(req, res) {')

        db.SequelizeBurger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbResults) {
            console.log(dbResults);
            res.redirect("/");
        });
    });
};