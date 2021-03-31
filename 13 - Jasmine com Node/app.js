/*
    Automação de testes com Jasmine
    nom install jasmine -g
*/

var Elevador = {
    andar: 0,
    subir: function(){
        this.andar++;
    },
    descer: function(){
        this.andar--;
    }
}

module.exports = Elevador;