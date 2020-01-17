const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  })
  
  return user;
}