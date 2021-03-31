/*
Conceito de streaming:
Streaming é um modelo de destribuição de dados em formato de pacotes, esse modelo é muito utilizado para download de vídeos e de sons. Temos como exemplo,
os serviços do YouTube, Netflix e do Spotify.
Nesse modelo, nós fazemos o download de vários pacotes de dados, estes pacotes são descompactados e renderizados em tempo real e a medida que novos pacotes são baixados,
novas informações são baixadas. Através deste formato, fazemos o download de vídeos 
*/
"use strict"

//Utilizando stream
var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

http.createServer((req, res) => {
    if(req.url !== "/video2.mp4"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<video src='http://localhost:3000/video2.mp4' controls></video>");

    }
    else{
        var file = path.resolve(__dirname, "video2.mp4");
        
        //Nesta linha, estamos pegando o range do vídeo, ou seja, a posição do vídeo que devemos carregar e disponibilizar para o cliente
        var range = req.headers.range;

        //Nesta linha estamos obtendo os bytes da posição que devemos carregar
        var positions = range.replace("bytes=", "").replace("-");
        console.log(range);
        console.log(positions[0]);
        console.log(positions[1]);
        //O parâmetro passado para a função parseInt, significa que o número deve ser convertido para decimal
        //Os tipos de parâmetros são os seguintes:
        //16 -> converter para hexadecimal
        //8 -> converter para octal
        //10 -> converter para decimal
        
        var start = parseInt(positions[0], 10);
        console.log(range)
        console.log(positions[0]);
        console.log(start);
        
        //A função para carregar o arquivo
        fs.stat(file, (err, stats) => {
            //Obtemos o tamanho total do arquivo
            var total = stats.size;

            //Obtemos a posição final do arquivo
            //Caso não seja possível pegar o final do arquivo, definimos que o final é total -1
            var end = (positions[1] && !isNaN(positions[1])) ? parseInt(positions[1], 10) : total -1;
            console.log(end);
            var chunksize = (end - start) + 1;

            //Content-range: Indica o início do arquivo, o final do arquivo e o total
            //Accept-Ranges: Indica que a nossa requisição aceitará que o arquivo seja cortado em pedaços
            //Content-Length: tamanho do arquivo
            //Content-Type: Indica o tipo do arquivo, no nosso caso, é um tipo mp4

            res.writeHead(200, {
                "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type": "video/mp4"
            });

            //Estamos mandando o node fazer uma leitura do arquivo por stream, passando por parâmetro o arquivo, a parte inicial e a parte final
            //A função createReadStrean() retorna uma promise
            var stream = fs.createReadStream(file, {start: start, end: end})
            .on('open', () => {
                //A conexão não é finalizada quando estamos executando o stream, isso porque estamos enviando dados constantemente.
                stream.pipe(res);
            })
            .on('error', () => {
                //Caso ocorra um erro, finalizamos a conexão
                res.end(err);
            })
        })
    }
}).listen(3000);

//Sem utilizar stream
http.createServer((req, res) => {
    if(req.url !== '/gatosDormindo.mp4'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<video src="http://localhost:3001/gatosDormindo.mp4" controls></video>');
    }
    else{
        var file = path.resolve(__dirname, "gatosDormindo.mp4");
        fs.readFile(file, (err, content) => {
            if(err){
                res.writeHead(500);
                res.end();
            }
            else{
                //Nesta situação, enviamos o arquivo por completo
                res.writeHead(200, {
                    "Content-Type": "video/mp4"
                });
                res.end(content);
            }
        })
    }
}).listen(3001)