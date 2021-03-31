/*
    Automação de tarefas com Gulp
    É uma forma de executar processamento de dados, arquivos, comunicação com alguma api e entre outro, sejam executados a partir de um determinado momento

    Para o desenvolvimento deste código, instalamos o gulp de forma global: npm i gulp -g
    Também instalamos o gulp localmente: npm i gulp
    Em conjunto com estas instalações, também utilizamos o plugin do gulp, chamado de gulp-uglify, o gulp-uglify é utilizado para a minificação dos arquivos: npm i gulp-uglify

    */
//Faremos a minificação deste arquivo, através do gulp, o processo de minificação consiste em remover os espaços e deixar tudo em uma linha só, permitindo que o arquivo fique em uma linha só.
var abc = 80, cde = 111;

function teste(){
    return abc+cde;
}

function teste2(){
    return 1 + 1;
}