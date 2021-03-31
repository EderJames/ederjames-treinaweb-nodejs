var gulp = require("gulp");
var uglify = require("gulp-uglify");
var watch = require('gulp-watch');

//Criando uma task:
gulp.task("minha_task", function(){
    //Para carregarmos o nosso arquivo, utilizamos o gulp.src(), esta função recebe um vetor de arquivos
    //Isso significa que podemos passar vários arquivos para o gulp, assim como também podemos passar um padrão de extensão.
    //Para criarmos um padrão de extensão, utilizamos o seguinte código: gulp.src(['./*.js']);
    //É importante perceber que o gulp trabalha através de promises
    
   return  gulp.src(['./app.js'])          //carregando os arquivos
               .pipe(uglify())             //passando os arquivos para o pipe e minificando ele, através da função uglify()
               .pipe(gulp.dest('./dist'));  //apontando um destino para o novo arquivo, neste caso, o arquivo minificado
})

//Para acionarmos esta task no npm, utilizamos o seguinte comando: gulp minha_task

gulp.task("observar", function(){
    //A função gulp.watch(), tem a função de observar as mudanças no arquivo
    //A função watch(), nos permite passarmos uma lista com os nomes dos arquivos que serão alterados e uma segunda lista, com
    //as tasks que serão executadas com aquele watch
    return watch(['./app.js'], function(){
        gulp.src(['./app.js'])          //carregando os arquivos
               .pipe(uglify())             //passando os arquivos para o pipe e minificando ele, através da função uglify()
               .pipe(gulp.dest('./dist'))
    }); //Este código fará com que todas as alterações no arquivo app.js disparem a chamada da minificação
})

//Verificando quais tasks temos disponíveis no nosso arquivo gulpfile.js, através do terminal:
//gulp --tasks