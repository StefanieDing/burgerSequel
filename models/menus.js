'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menus = sequelize.define('Menus', {
    item: DataTypes.STRING,
    entree: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Menus;
};