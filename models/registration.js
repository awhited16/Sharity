//what should this line of code below be?
// const db = require('../database/db.js')
const db = require('./models');



// module.exports = db.sequelize.define(
//     'user', {
module.exports = function (sequelize, DataTypes) {
    var Registration = sequelize.define("Registration", {


        firstName: {
            type: Sequelize.STRING
        },

        lastname: {
            type: Sequelize.STRING
        },

        title: {
            type: Sequelize.STRING
        },

        phone: {
            type: Sequelize.STRING
        },

        locationId: {
            type: Sequelize.STRING
        },

        vendorId: {
            type: Sequelize.STRING
        },

        nonProfitId: {
            type: Sequelize.STRING
        },

    });
    return Registration;
}