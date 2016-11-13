'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Mushroom Swiss Burger', devoured: 0 },
      { burger_name: 'Southwestern Veggie Burger', devoured: 0 },
      { burger_name: 'Spinach Artichoke Turkey Burger', devoured: 0 },
      { burger_name: 'Black & Bleu Burger', devoured: 0 }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};
