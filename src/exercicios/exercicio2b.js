const { ProdutoService } = require('../services');

async function adicionaProduto(nomeProduto, valor){  
  let produto = await ProdutoService.createProduto(nomeProduto, valor);
  return produto.codigo
}

module.exports = {
  adicionaProduto
}