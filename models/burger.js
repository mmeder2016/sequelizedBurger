var connection = require("../config/connection.js");

var burger = {

    // Render the Webpage with all the current data
    getAll: function(req, res) {
        console.log('getAll: function(req, res) {');
        var all_query = "SELECT * FROM burgers";
        connection.query(all_query, function(err, data) {
            if (err) {
                throw err;
            }
            // Create handlebars object
            var hbsObj = {
                burger_db: data
            };
            //console.log(hbsObj);
            res.render("index", hbsObj);
        });
    },

    // Add new item and then redirect to router.get("/"
    addBurger: function(req, res) {
        console.log('addBurger: function(req, res) {');
        var add_query = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(add_query, [req.body.name, false], function(err, data) {
            if (err) {
                throw err;
            }
            res.redirect("/");
            console.log("addBurger res:\n" + res);
        });
    },

    // Update item and then redirect to router.get("/"
    devourBurger: function(req, res) {
        console.log('devourBurger: function(req, res) {');
        console.log('req.params.id:' + req.params.id);
        var update_query = "UPDATE burgers SET devoured=true WHERE id=?";
        connection.query(update_query, [req.params.id], function(err, data) {
            if (err) {
                throw err;
            }
            res.redirect("/");
            console.log("devourBurger res:\n" + res);
        });
    }

};
// Export the mysql functions
module.exports = burger;