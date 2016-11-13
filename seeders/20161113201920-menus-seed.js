'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [
      { item: 'Mushroom Swiss Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Southwestern Veggie Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Spinach Artichoke Turkey Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Black & Bleu Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Grilled Teriyaki Chicken Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Portobello Bacon Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cheeseburger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cowboy Whiskey Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Garden & shroom Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Chef Special Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Monster Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },

      { item: 'French Fries', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cheese Fries', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Onion  Rings', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Garden Salad', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Caesar Salad', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Curly Fries', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Waffle Fries', entree: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {truncate : true});
  }
};
