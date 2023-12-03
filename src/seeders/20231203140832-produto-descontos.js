'use strict';
const { Produto } = require('../models/');

const codigoDVD =  async () => {
  let dvd = await Produto.findOne({ where: { nome: 'DVD' } });
  return dvd.codigo
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('ProdutoDescontos',
    [
      {
        codigo: await codigoDVD(),
        quantidade: 10,
        valor: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        codigo: await codigoDVD(),
        quantidade: 20,
        valor: 0.9,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('ProdutoDescontos', null, {}),

};
