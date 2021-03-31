//A função require tem o objetivo de carregar um módulo
//Para os arquivos .js, não sr faz necessário colocar a extensão do arquivo. Entretanto para outros tipos de arquivo, devemos colocar a extensão.
var ModuloCachorro = require('./cachorro');

console.log(ModuloCachorro.nome);

ModuloCachorro.latir();

//Também podemos acionar as informações do módulo, sem necessariamente coloca-los em uma variável
require('./cachorro').latir();
console.log(require('./cachorro').idade);
