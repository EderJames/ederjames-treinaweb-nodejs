//O módulo http é nativo do node e disponibiliza funções para criarmos um servidor http
var http = require('http');
//O módulo url é nativo do node e disponibiliza funções para manipularmos as url's das requisições
var url = require('url');
var fs = require('fs');

//O comando createServer é utilizado para criarmos um servidor
var server = http.createServer(function(req, resp){
    
    var url_parts = url.parse(req.url);
    var path = url_parts.pathname;

    //a variável __dirname é nativa do node, ele representa o diretórial atual da aplicação
    //O comando writeHead, permite que escrevamos no cabeçalho da resposta da requisição
    //O segundo parâmetro está representando o tipo de dado que será retornado, neste caso, um text/html
    fs.readFile(__dirname + path, function(err, data){
        
        if(err){
            resp.writeHead(404, {'Content-Type': 'text/html'});
            resp.write('Not Found');
        }
        else{
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(data);
        }

        resp.end();
    })
    
});

//Aqui estamos setando a porta que será escutada, para realização de requisições
server.listen(3000);

