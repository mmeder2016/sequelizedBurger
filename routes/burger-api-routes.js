var db = require("../models");

module.exports = function(app) {
    // Find all SequelizeBurger and return them to the user with res.json
    app.get("/", function(req, res) {
        db.SequelizeBurger.findAll({}).then(function(dbSequelizeBurger) {
            // Create handlebars object
            var hbsObj = {
                burger_db: dbSequelizeBurger
            };
            //console.log(hbsObj);
            res.render("index", hbsObj);
        });
    });

    app.post("/", function(req, res) {
        // Create an SequelizeBurger with the data available to us in req.body
        console.log(req.body);

        db.SequelizeBurger.create({
            burger_name: req.body.name
        }).then(function(results) {
            // `results` here would be the newly created chirp
            res.redirect("/");
        });



        // db.SequelizeBurger.create(req.body).then(function(dbSequelizeBurger) {
        //     res.redirect("/");
        // });
    });

    //router.put("/:id", function(req, res) {
    // app.post("/:id", function(req, res) {
    //     db.SequelizeBurger.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbSequelizeBurger) {
    //         res.json(dbSequelizeBurger);
    //     });
    // });
};