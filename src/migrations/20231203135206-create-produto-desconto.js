'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ProdutoDescontos', {
      codigo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT(10),
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'codigo',
        references: {
          model: 'produtos',
          key: 'codigo',
        },
      },
      quantidade: {
        type: Sequelize.BIGINT(10),
        primaryKey: true
      },
      valor: {
        type: Sequelize.FLOAT(10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ProdutoDescontos');
  }
};