const Produto = require('./produto.model.js');
const { Deferrable } = require("sequelize");

const ProdutoDescontoModel = (sequelize, DataTypes) => {
    const ProdutoDesconto = sequelize.define('ProdutoDesconto', {
      codigo: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        references: {
            model: Produto,
            key: 'codigo',
            deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      quantidade: { 
        type: DataTypes.BIGINT(10),
        primaryKey: true,
      },
      valor: DataTypes.FLOAT(10),
    });

    ProdutoDesconto.associate = (models) => {
      ProdutoDesconto.belongsTo(models.Produto,
            { foreignKey: 'codigo', as: 'codigoProduto' });
    };

    return ProdutoDesconto;
  };
  
module.exports = ProdutoDescontoModel;
