CREATE DATABASE IF NOT EXISTS loja;

CREATE TABLE IF NOT EXISTS Produto (
	codigo int(10) AUTO_INCREMENT,
    nome varchar(50),
    valor float(10),
    CONSTRAINT PK_Produto PRIMARY KEY(codigo)
);

CREATE TABLE IF NOT EXISTS ProdutoDesconto (
	codigo int(10),
    quantidade int(10),
    valor float(10),
    CONSTRAINT PK_ProdutoDesconto PRIMARY KEY(codigo, quantidade)
    CONSTRAINT FK_ProdutoDesconto FOREIGN KEY (codigo) REFERENCES Produto(codigo)
);