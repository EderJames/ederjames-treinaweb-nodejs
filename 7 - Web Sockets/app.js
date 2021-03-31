/*
    Em requisições comuns, o cliente solicita algum dado para o servidor, o servidor responde e a conexão é finalizada.
    Porém, utilizando Web Sockets, essa conexão de cliente e servidor permanece aberta, permitindo que o cliente envie várias requisições para o servidor,
    permitindo também que o servidor envie várias respostas para o cliente, até mesmo sem que ele solicite uma nova requisição

    Os Web Sockets são muito utilizados em salas de bate-papo, vídeos de redes sociais, jogos multiplayer e entre outros. 

    Este código está utilizando a biblioteca socket.io -> nm i socket.io

*/

//Neste exemplo, subimos um servidor através do comando http-server. É importante observar que o módulo http-server deve ser instalado via NPM, através do comando npm i http-server -g, colocamos o '-g', para determinar que a instalaçao deve ser global.
//Estamos carregando o socket.io e apontando qual porta desejamos utilizar
var io = require('socket.io')(3000);

//O primeiro evento do io.on() deve ser o 'connection'
io.on('connection', (socket) => {
    console.log('novo usuário conectado');

    //A função on(), faz com que o servidor fique esperando uma mensagem, o primeiro parâmetro é o nome da mensagem, este nome fica a escolha do dev
    //O segundo parâmetro é uma função de callback
    socket.on('client_message', (dadoEnviadoCliente) => {
        console.log(dadoEnviadoCliente)
    })

    socket.on('client_hello', (dadoEnviadoCliente) => {
        //Envia a mensagem somente para o cliente que enviou uma msg para o servidor
        //socket.emit();

        //Para que a mensagem chegue em todos os membros, devemos utilizar o socket.broadcast.emit, este comando fará com que a mensagem seja enviada a todos, menos para nós
        //socket.broadcast.emit('nome_evento', () => {
        //
        //});

        //Para que a mensagem chegue a todos os membros, incluindo nós, devemos utilizar o io.sockets.emit
        io.sockets.emit('server_hello', dadoEnviadoCliente);
    })
});
