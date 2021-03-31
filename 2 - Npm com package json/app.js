//Instalando o pacote promises:
//npm install promise

//Entendendo o estilo de carregamento de arquivo com o sinal: ./
//Caminho relativo ao arquivo
//var teste = require('promise');

//Quando não colocamos nada, o node vai procurar no node_modulos
//var teste = require('./promise');

var promise = require('./promise');

//O package json possui uma lista das dependências do projeto
//Para criarmos o nosso package.json, utilizamos o comando npm init

//É importante lembrar que através do package.json conseguimos mapear as dependências do nosso projeto.
//A grande vantagem de possuirmos este arquivo, é que podemos utilizar o comando npm install ou npm i, e o npm baixará todas as dependências necessárias para rodar o projeto

//-S -> --save (Adiciona nas dependências de desenvolvimento e de produção)
//-D -> --save-dev (Adiciona somente nas dependências de desenvolvimento)

//rodando scripts com o npm:
//npm run nome-script