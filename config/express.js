var express = require('express');
var load = require('express-load');

module.exports = function () {

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //tudo que for carregado automaticamente deve ser incluido no app
    //cwd informa a pasta padrão pra producurar as pastas routes e infra
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};
