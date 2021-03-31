var fs = require("fs");

//Neste formato de leitura, assíncrona, todas as requisições de leitura são feitas de uma só vez.
//As leituras são entregues a media que seus processamento vão terminando
//Nesta situação, temos acesso a todo o potêncial do processador
//Tempo: 475.089ms
console.time('Assincrono');
var counter = 0;
for(var i = 0; i < 1000; i++){
    fs.readFile('my_file.txt', function(err, data){
        if(err){
            return console.log(err);
        }
        counter++;

        console.log("Assíncrono: " + data.toString());
        if(counter === 1000){
            console.timeEnd('Assincrono');
        }
    });
}

//Nesta situação, o código executa a requisição de leitura de dados, espera a leitura finalizar e após a finalização, aciona outra requisição de leitura
//Tempo: 616.776ms
//Nesta situação, não temos acesso a todo o potêncial do processador, isso porque a cada requisição de leitura do arquivo, acaba bloquenado o processamento, até a sua finalização. 
/*
console.time('Sincrono');
for(var i = 0; i < 1000; i++){
    var data = fs.readFileSync('my_file.txt');
    console.log('Sincrono:' + data);
}
console.timeEnd('Sincrono');*/


//Evitando o callback hell: utilizar as promises, através de bibliotecas muito conhecidas, como: BlueBird, PromiseJS e Kil
//Porém, na nova versão do js, as promises já são nativas do js
