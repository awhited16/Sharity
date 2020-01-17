// bcrypt used for password hashing. use bcryptjs version as the regular bcrypt module can cause errors on Windows machines
var bcrypt = require("bcryptjs");
// create User model
module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        // email cannot be null and must be proper email
        //user ID how do I use
        foodItemDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        amout: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherComments: {
            type: DataTypes.STRING,
            allowNull: false
        },


        storageRequirements: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pickUpDeadline: {
            type: DataTypes.STRING,
            allowNull: false
        },

        vendorId: {
            type: DataTypes.STRING,
            allowNull: false
        },



        isActive: {
            type: DataTypes.STRING,
            allowNull: false
        },
        claimedBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dollarValue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pickUpDate: {
            type: DataTypes.STRING,
            allowNull: false
        },



    });

    return Inventory;
};