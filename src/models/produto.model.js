const ProdutoModel = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      codigo: { type: DataTypes.BIGINT(10), primaryKey: true },
      nome: DataTypes.STRING(50),
      valor: DataTypes.FLOAT(10)
    });

    Produto.associate = (models) => {

      Produto.hasMany(models.ProdutoDesconto,
        { foreignKey: 'codigo', as: 'descontos' });
    };
  
    return Produto;
  };
  
module.exports = ProdutoModel;