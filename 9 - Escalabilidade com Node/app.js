/*
Conceito de clusters:
Ter a capacidade de dividir a aplicação em vários módulos menores, isso é chamado de clusterização
*/

var cluster = require('cluster'),
    http = require('http'),

    //Acionamos o módulo 'os', este módulo nos permite obter informações da máquina
    //Através da função cpus(), temos a capacidade de determinar quantos núcleos de cpu temos no computador
    numCPus = require('os').cpus().length;

//A função cluster.master, verifica se o processo rodado é o processo principal
if(cluster.isMaster){
    //Caso estejamos no processo principal, vamos criar um processo novo para cada núcleo de processador
    for(var i = 0; i < numCPus; i++){
        cluster.fork();
    }

    //Os clusters também herdam da classe EventEmitter
    //Aqui estamos definindo eventos para eles

    //Evento para quando o cluster estiver online
    cluster.on('online', (worker) => {
        console.log(`worker ${worker.process.pid} is online`);       
    })

    //Quando o cluster estiver escutando
    cluster.on('listening', (addres) => {
        console.log('worker is listening');
    })

    //Quando o worker sair
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    })
}
//Indica que estamos nos clusters filhos, e não no processo principal
else{
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`process ${process.pid} says hello!`);

    }).listen(8000);
}