var fs = require("fs");
var promise = require("promise");

//Evitando o callback hell: utilizar as promises, através de bibliotecas muito conhecidas, como: BlueBird, PromiseJS e Kil
//Porém, na nova versão do js, as promises já são nativas do js

function read(file){
    return new Promise(function(sucess, reject){
        fs.readFile(file, function(err, data){
            if(err){
                reject();
            }
            else{
                sucess(data.toString());
            }
        });
    });
}

read('my_file.txt')
.then((data) => {
    console.log(data);
    return '1111';
})
.then((data) => {
    console.log(data);
})