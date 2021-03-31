//O módulo events nos permite trabalhar com eventos no NodeJS
//Estes eventos estão associados a eventos do servidor, 
//tais como a leitura, gravação e carregamento de dados, ou então a criação de um arquivo, ou até mesmo o login em um banco de dados.
//O módulo events é nativo do NodeJS, portanto, não precisamos baixa-lo através do NPM.
var EventEmitter = require('events');

var emitter = new EventEmitter();
//A nossa função  de callback receberá os parâmetros enviados através da chamada do método emit
emitter.on('meu_evento', function(numero){
    console.log('meu evento', numero);
});


//A função emit executa o emissor de eventos
////Podemos passar N parâmetros
emitter.emit('meu_evento', 123);

class Cao extends EventEmitter{
    latir(){
        console.log('Au au!');
    }
    comer(){
        console.log('Comendo');
    }
}

var Rex = new Cao();
Rex.on('pessoa_no_portao', Rex.latir);
Rex.on('pessoa_no_portao', Rex.comer);

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');

//Removendo um listener
//Podemos remover o listener de associação entre o evento 'pessoa_no_portao' e a função Rex.latir()
//É obrigatório passar a função que vamos remover do listener, isso porque podemos associar várias funções a um evento
Rex.removeListener('pessoa_no_portao', Rex.latir);

//Após a remoção da associação da função Rex.latir com o evento 'pessoa_no_portao', passamos a executar somente a função Rex.comer
Rex.emit('pessoa_no_portao');


//Utilizando o método once
//O método de operação de eventos once() é parecido com o método on(), a diferença esta no fato de que o once() executará o evento somente uma vez
//Essa situação ocorre porque após o once executar um evento, ele automaticamente executa o removeListener()
var Dudo = new Cao();
Dudo.once('pessoa_no_portao', Dudo.latir);
Dudo.emit('pessoa_no_portao');

//Este emit() não acionará o Dudo.latir, isso porque o once() já executou o removeListener()
Dudo.emit('pessoa_no_portao');