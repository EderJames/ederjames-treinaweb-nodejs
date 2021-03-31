var Cachorro = {
    nome: 'Rex',
    idade: 3,
    latir: () =>{
        console.log('Au au!');
    }
}

//Utilizamos o module.exports, para exportarmos um determinado código, neste caso, estamos exportanto o objeto Cachorro.
//O module.exports é uma funcionalidade própria do NodeJS e não do JavaScript.
module.exports = Cachorro;