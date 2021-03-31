/*
    Trabalhando com transpilação
    O processo de transpilação consiste em transformar o código de uma linguagem ou de uma síntese, para outra linguagem ou outra síntese,
    temos como exemplo, a utilização do CoffeScript.
    O CoffeScript é uma linguagem que pode ser transpilada para JavaScript, a partir da transpilação, temos a capacidade de utilizar o código
    tanto no navegador, quanto no Node.
    O TypeScript é uma linguagem de programação da microsoft, ela nos permite trabalhar com tipagem para JavaScript.

    Para fazermos a transpilação do código em TypeScript, através do Node, utilizamos o seguinte comando:
    tsc app.ts
*/

interface Pessoa{
    nome: string;
}

function Ola(pessoa: Pessoa){
    return 'Olá, ' + pessoa.nome
}

Ola({nome: 'TreinaWeb'});