'use strict';
module.exports = function(sequelize, DataTypes) {
    var SequelizeBurger = sequelize.define('SequelizeBurger', {
        id: {
            // sequelize-cli allows declarations differently
            // type: Sequelize.INTEGER,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // length minimum 1 len[1,16] [min,max]
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: false
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return SequelizeBurger;
};