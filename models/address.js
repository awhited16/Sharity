// bcrypt used for password hashing. use bcryptjs version as the regular bcrypt module can cause errors on Windows machines
// var bcrypt = require("bcryptjs");
// create User model
module.exports = function (sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        // email cannot be null and must be proper email
        //user ID how do I use


        StreetAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },


        City: {
            type: DataTypes.STRING,
            allowNull: false
        },

        State: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Zip: {
            type: DataTypes.STRING,
            allowNull: true
        },

        Country: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });



    return Address;
};