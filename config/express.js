var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function () {

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //adicionando um middleware que trata a requisição e entrega para a sua função
    app.use(bodyParser.urlencoded({extended:true}));
    //extende setado para true garante que o bodyParser consiga interpretar
    //formularios aninhando estrutura json.

    //tudo que for carregado automaticamente deve ser incluido no app
    //cwd informa a pasta padrão pra producurar as pastas routes e infra
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};
