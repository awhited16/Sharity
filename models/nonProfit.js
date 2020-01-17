// bcrypt used for password hashing. use bcryptjs version as the regular bcrypt module can cause errors on Windows machines
var bcrypt = require("bcryptjs");
// create User model
module.exports = function (sequelize, DataTypes) {
    var nonProfit = sequelize.define("nonProfit", {
        // email cannot be null and must be proper email
        //user ID how do I use

        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taxNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },


        missionStatement: {
            type: DataTypes.STRING,
            allowNull: false
        },


    });





    return nonProfit;
};