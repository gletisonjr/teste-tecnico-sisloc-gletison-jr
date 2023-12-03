const { ProdutoDescontoService } = require('../services');

async function adicionaProdutoDesconto(codigoProduto, quantidade, valor){  
  let produtoDesconto = await ProdutoDescontoService.createProdutoDesconto(
    codigoProduto,
    quantidade,
    valor
    );
  return produtoDesconto;
}

module.exports = {
  adicionaProdutoDesconto
}