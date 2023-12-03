'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Produtos',
    [
      {
        nome: 'DVD',
        valor: 1.1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),

      },

    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Produtos', null, {}),

};
