/*
Antes de visualizarmos as funções de escrita e leitura de arquivo,
precisamos atentar para o fato de que o NodeJS abre e fecha o arquivo para nós,
diferente das linguagens tradicionais como C# e Java, em que precisamos abrir o arquivo e depois fechar
*/

//O módulo FyleSystem ou fs, é nativo do NodeJS e nos permite trabalhar com arquivos.
var fs = require('fs');

//Para criarmos um arquivo, utilizamos a função writeFile.
//O parâmetro recebido por esse arquivo, representa os dados que serão inseridos nele
//O terceiro parâmetro é uma função de callback, esta função é obrigatória, porque o writeFile é um método assíncrono
//A variável err, é responsável por representar se ocorreu um erro na execução da função.
fs.writeFile('my_file.txt', 'Treina Web', function(err){
    if(err){
        consoel.log(err);
    }
    console.log('Arquivo criado com sucesso.');
});

//A função readFile é utilizada para executar a leitura do arquivo
//A variável err, é responsável por representar se ocorreu um erro na execução da função.
fs.readFile('my_file.txt', function(err, data) {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

//Função appendFile
//A diferença entre appendFile e writeFile está na questão de que writeFile sempre cria um novo arquivo,
//enquanto que o appendFile criará apenas se o arquivo não existir e colocará os dados no final do arquivo.
//A variável err, é responsável por representar se ocorreu um erro na execução da função.
fs.appendFile('my_file.txt', 'Treina Web', function(err){
    if(err){
        consoel.log(err);
    }
    console.log('Arquivo criado com sucesso.');
});

//Também temos as opções de funções síncronas para trabalhar com arquivos, para isso,
//basta colocarmos a palavra Sync após a função 

//writeFileSync
fs.writeFileSync('my_fileSync.txt', 'TreinaWebSync');

//readFileSync
var data = fs.readFileSync('my_file.txt');
console.log(data);

//appendFileSync
var arquivoSyncCriado = fs.appendFileSync('my_fileSync.txt', 'TreinaWebSync');
