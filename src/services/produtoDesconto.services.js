const { ProdutoDesconto } = require('../models');

const getAll = async () => {
  let produtos = await ProdutoDesconto.findAll();
  return produtos;
};

const getAllByCodigo = async (codigo) => {
    let produtos = await ProdutoDesconto.findAll({ where: { codigo: codigo } });
    return produtos;
};

const getAllByQuantidade =  async (quantidade) => {
    let produtos = await ProdutoDesconto.findAll({ where: { quantidade: quantidade } });
    return produtos
}

const getAllByValor = async (valor) => {
    let produtos = await ProdutoDesconto.findAll({ where: { valor: valor } });
    return produtos;
};


const createProdutoDesconto = async (codigo, quantidade, valor) => {
    const newProduto = await Produto.create({ codigo, quantidade, valor }); 
    return newProduto;
  };
  
const updateProdutoDesconto = async (codigo, quantidade, valor) => {
    const [updatedProduto] = await Produto.update(
      { valor },
      { where: { codigo, quantidade } },
    );
      return updatedProduto;
  };
    
const deleteProdutoDesconto = async (codigo, quantidade) => {
    const produto = await Produto.destroy(
      { where: { codigo, quantidade } },
    );
    return produto;
  };
  
module.exports = {
  createProdutoDesconto,
  updateProdutoDesconto,
  deleteProdutoDesconto,
  getAll,
  getAllByQuantidade,
  getAllByValor,
  getAllByCodigo,
};