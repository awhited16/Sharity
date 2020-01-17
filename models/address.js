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

        EIN: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
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
    // // custom method for our User model to check if an unhashed password entered
    // // by user can be compared to hashed password in database
    // User.prototype.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password);
    // };
    // // hooks are automatic methods run during various phases of User Model lifecycle
    // // before a User is created, automatically hash their password
    // User.addHook("beforeCreate", function (user) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // });

    // // one user can have many events


    return Vendor;
};