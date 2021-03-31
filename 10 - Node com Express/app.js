/*
    npm install express 
    npm install jade
    npm install mongodb (Driver para trabalhar com mongoDB através do NodeJS)
    npm install body-parser
    Conceito de Express:

*/

//Instâncias

//Instanciando o express:
var express = require('express');

//Chamada da API do mongodb
var MongoClient = require('mongodb').MongoClient;

//Chamada do body-parser
//O bodyParser é um middeware que auxiliará a receber dados do cliente
var bodyParser = require('body-parser');

//Iniciando o express:
var app = express();


//Fim das instâncias

//Conceito de Middlewares:
/*
    Middlewares são basicamente funções que tem acesso ao objeto de requisição e de resposta,
    portanto eles podem fazer alterações ou processamentos, no meio do processo de recebimento e envio de requisições para o cliente.
    Podemos utilizar Middlewares já existentes e podemos criar novos Middlewares

*/
//Estamos apontanto para o express usar a pasta public como nossa fonte de arquivos estáticos
//Quando acionarmos colocarmos o nome de um dos arquivos, presentes na pasta public, o Node nos direcionará para ele, tal como neste exemplo:
// http://3000/index
//app.use(express.static('public'));

//Também podemos definir um caminho na url, para acessar esta pasta estática, como neste exemplo:
app.use('/static', express.static('public'));

//Este middleware transforma todos os dados recebidos do cliente em json, e nos permite a interpretação deste json
app.use(bodyParser.json());

//Este middleware permite que a aplicação pegue os dados enviados através da url
app.use(bodyParser.urlencoded({
    extended: true
}))

//Fim da declaração dos Middlewares


//End-points da API

//A função get() representa o caminho de url que estamos vigiando, passamos como parâmetro o nome do caminho que queremos escutar e uma função de callback
//Neste exemplo do /abc/:id, a nosso url seria a seguinte: http://localhost:3000/abc/4
//O abc seria o caminho, e o 4 seria o id.
//Colocamos o :id, porque para declararmos que estamos esperando um valores de variável, devemos colocar o : + nome da variável, portanto :id
//Se colocarmos :id?, estamos apontanto que a variável id não é obrigatória
//app.get('/abc/:id?', function(req, resp){
//    resp.send('Hello World! ' + req.params.id);
//});

//Também podemos passar expressões regulares para a requisição
//Nesta expressão regular, estamos apontando que o nosso caminho pode começar com sh ou x, deve ter amp no meio e deve finaliar com u ou dois o's
//Nesta situação, nosso caminho de requisição pode ser shampoo e shampu, ou xampoo e xampu
app.get('/((sh)|(x))amp(o{2}|u)/', function(req, resp){
    resp.render('Hello World! ');
});

//app.get('/', function(req, resp){
    //Passando uma variável para o arquivo index.jade:
    //Para passarmos variáveis, passamos um objeto json, como parâmetro para a renderização do arquivo, como no exemplo abaixo, para a renderização do arquivo index.jade
    //resp.render('index', {nome: 'TreinaWeb'});
//});

//A função route, nos permite criarmos uma rota 
app.route('/')
    .get(function(req, resp){
        listarCursos(resp);
    })
    .post(function(req, resp){
        //console.log(req);
        console.log(req.body);
        var curso = {nome: req.body.nome, categoria: req.body.categoria}
        inserirCurso(curso, function(){
            listarCursos(resp);
        })
    })
    .put(function(req, resp){

    })
    .delete(function (req, resp){

    })

    //Responde a todos os tipos de requisições
    .all(function(req, resp){

    })

//Fim dos end-points

//Acionamos um listen na porta 3000, fazendo com que capturemos o conteúdo quando o usuário acessar a porta 3000.
app.listen(3000, function(){
    console.log('App rodando na porta 3000');
})

//Variáveis

//Através da função set(), conseguimos adicionar variáveis para a nossa aplicação, além disso, também podemos utilizar variáveis já existentes
//Exemplo, criando uma variável:
app.set('minhaVariavel', 123);

//Também podemos alterar variáveis existentes no Node, nesse caso, estamos alterando a variável views
//A variável views, indica para o express, qual é o diretório que possui os nossos arquivos de view(páginas da aplicação).
app.set('views', './views');

//A variável view engine, aponta qual engine será utilizada para renderizar as views, nesse caso, será o jade
app.set('view engine', 'jade');

//Fim das Variáveis


//Fazendo conexão com o banco de dados
//
function listarCursos(resp){
    MongoClient.connect('mongodb://localhost:27017/treinaweb', {useNewUrlParser: true}, function(err, database){
        const myDB = database.db("treinaweb");
        myDB.collection('cursos').find().sort({nome: 1}).toArray(function (err, result){
            resp.render('index', {data: result});
        })
    })
}

function inserirCurso(obj, callback){
    MongoClient.connect('mongodb://localhost:27017/treinaweb', function(err, database){
        const myDB = database.db("treinaweb");
        myDB.collection('cursos').insertOne(obj, function(err, result){
            callback();
        })
    })
}
