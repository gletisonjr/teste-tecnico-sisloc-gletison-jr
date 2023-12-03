const { Produto } = require('../models');

const getAll = async () => {
  const produtos = await Produto.findAll();
  return produtos;
};

const getByCodigo = async (codigo) => {
  const produto = await Produto.findByPk(codigo);
  return produto;
};

const getByNome =  async (nome) => {
  let produto = await Produto.findOne({ where: { nome } });
  return produto.codigo
}

const getAllByNome = async (nome) => {
  const produtos = await Produto.findAll({ where: { nome } });
  return produtos;
};

const getAllByValor = async (valor) => {
  const produtos = await Produto.findAll({ where: { valor } });
  return produtos;
};

const createProduto = async (nome, valor) => {
  const newProduto = await Produto.create({ nome, valor }); 
  return newProduto;
};

const updateProduto = async (codigo, nome, valor) => {
  const [updatedProduto] = await Produto.update(
    { nome, valor },
    { where: { codigo } },
  );
    return updatedProduto;
};
  
const deleteProduto = async (codigo) => {
  const produto = await Produto.destroy(
    { where: { codigo } },
  );
  return produto;
};

module.exports = {
  createProduto,
  updateProduto,
  deleteProduto,
  getAll,
  getAllByNome,
  getAllByValor,
  getByCodigo,
  getByNome,
};