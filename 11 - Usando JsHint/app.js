/*
O JsHint é uma ferramenta que avalia a qualidade do nosso código, além disso ele também aponta possíveis erros de escritas, 
tais como a falta de um ponto e vírgula no fim de um comando, ou a falta de chaves em um if e coisas do gênero.
Também podemos configurar o módulo como o nosso código será escrito.

Documentação do JsHint:
https://jshint.com/docs/options/

Acionando o jshint com um arquivo de configuração:
jshint nome-arquivo.js --config ./config.json

*/

//Diferenças entre == e ===:
//O símbolo == é utilizado para comparação de valores de duas variáveis.
//O símbolo === compara o valor das duas variáveis e também compara o tipo delas.
/*
    Um exemplo de como o triplo igual pode ser utilizado, está na função main
*/
function main(a, b){
    /*
    Neste teste estamos verificando se a é igual a null, porém, estamos verificando somente os valores e não os tipos.
    A questão que pode gerar um impacto negativo nesta situação, esta associada ao fato de que o null é considerado 'false' para o JavaScript, portanto se o valor da variável a for false,
    o JavaScript entenderá que 'a' é igual null, entretanto, 'a' é igual a false.
    */
    if(b){
        return a === null;
    }
    
    /*
    Nesta situação, caso 'a' fosse false, não teríamos o problema dela ser confundida com o null, porque o sinal ===, tem a capacidade verificar o valor e o tipo da varíavel
    tipo do valor null -> object
    tipo do valor a -> pode ser uma string, boolean, number, int e object
    */
    if(b){
      return b == null;
    }
}

function testeParaJsHint(v1, v2, v3){
    if(v1)
        console.log("v1");

    if(v2)
        console.log("v2");

    var count = 3;
    for(var i = 0; i < count; i++)
        console.log("valor de i: " + i);
}