// bcrypt used for password hashing. use bcryptjs version as the regular bcrypt module can cause errors on Windows machines
var bcrypt = require("bcryptjs");
// create User model
module.exports = function (sequelize, DataTypes) {
    var Vendor = sequelize.define("Vendor", {
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

        EIN: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        businessType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        pickUpDeadLine: {
            type: DataTypes.STRING,
            allowNull: false
        },

        preferredTime: {
            type: DataTypes.STRING,
            allowNull: true
        },


    });



    return Vendor;
};