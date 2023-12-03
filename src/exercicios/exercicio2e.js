const { ProdutoService, ProdutoDescontoService } = require('../services');

async function calculaTotal(codigoProduto, qtdeVendida){
  let produto = await ProdutoService.getByCodigo(codigoProduto);
  let produtoDescontos = await ProdutoDescontoService.getAllByCodigo(codigoProduto);
  let total = 0;

  if(qtdeVendida < produtoDescontos[0].quantidade)
    return produto.valor * qtdeVendida;

  total = produto.valor * produtoDescontos[0].quantidade;
  for(let index = 0 ; index < produtoDescontos.length ; index = index +1){
    let quantidadeFaixaDesconto = 0;
    //Se existe uma faixa de descontos acima
    if((index + 1) <  produtoDescontos.length){
        quantidadeFaixaDesconto = produtoDescontos[index +1].quantidade - produtoDescontos[index].quantidade;
        //E se quantidadeVendida for superior a quantidade da faixa de descontos atual
        if((qtdeVendida - produtoDescontos[index].quantidade) > quantidadeFaixaDesconto)
          total += quantidadeFaixaDesconto * produtoDescontos[index].valor;
        else
          total += (qtdeVendida - produtoDescontos[index].quantidade) * produtoDescontos[index].valor;
    }
    else
      total += (qtdeVendida - produtoDescontos[index].quantidade) * produtoDescontos[index].valor;
  }

  return total;
}

module.exports = {
    calculaTotal
};
