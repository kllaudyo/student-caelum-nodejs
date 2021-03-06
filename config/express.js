var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {

    var app = express();

    //configurando caminho public estatico
    app.use(express.static('./app/public'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //adicionando um middleware que trata a requisição e entrega para a sua função
    app.use(bodyParser.urlencoded({extended:true}));
    //extende setado para true garante que o bodyParser consiga interpretar
    //formularios aninhando estrutura json.

    //para dizer que aceita tambem body data em json
    app.use(bodyParser.json());

    //adicionando a validação atráves de middleware
    app.use(expressValidator());

    //tudo que for carregado automaticamente deve ser incluido no app
    //cwd informa a pasta padrão pra producurar as pastas routes e infra
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    //criando meus próprios middleware
    app.use(function(request, response, next){
        response.status(404).render('erros/404');
        next();
    });

    app.use(function (error, request, response, next) {
        if(process.env.NODE_ENV == 'production') {
            response.status(500).render('erros/500');
            return;
        }
        next();
    });

    return app;
};
