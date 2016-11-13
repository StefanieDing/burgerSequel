'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [
      { item: 'Mushroom Swiss Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Southwestern Veggie Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Spinach Artichoke Turkey Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Black & Bleu Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Grilled Teriyaki Chicken Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Portobello Bacon Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cheeseburger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cowboy Whiskey Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Garden & shroom Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Chef Special Burger', createdAt: new Date(), updatedAt: new Date() },
      { item: 'Monster Burger', createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {truncate : true});
  }
};
