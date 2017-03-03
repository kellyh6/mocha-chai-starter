'use strict';
module.exports = function(sequelize, DataTypes) {
  var candy1 = sequelize.define('candy1', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return candy1;
};