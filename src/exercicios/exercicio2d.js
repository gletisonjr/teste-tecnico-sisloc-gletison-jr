const adicionaProduto = require('./exercicio2b');
const adicionaProdutoDesconto = require('./exercicio2c');
// Ver Seeders
async function adicionaDescontosDVD(){
    codigoProduto = await adicionaProduto("DVD", 1.1);
    await adicionaProdutoDesconto(codigoProduto, 10 , 1);
    await adicionaProdutoDesconto(codigoProduto, 20 , 0.9);
}

module.exports = {
    adicionaDescontosDVD
};