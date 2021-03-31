//A função describe onde passamos a descrição do teste.
//Apontamos quem será o alvo do teste e uma função de callback, com os casos de teste
describe("Elevador", function(){
    
    var Elevador = require('../app.js');

    //Utilizamos a função it(), para cada caso de teste
    it('deve estar no andar 0', function(){
        //A função expect() espera um valor que deverá ser passado
        //O tobe() representa o de retorno esperado para o teste.
        expect(Elevador.andar).toBe(0);
    });

    it("deve ir ao andar 1", function(){
        Elevador.subir();
        expect(Elevador.andar).toBe(1);
    });

    it("deve voltar ao andar 0", function(){
        Elevador.descer();
        expect(Elevador.andar).toBe(0);
    });
});