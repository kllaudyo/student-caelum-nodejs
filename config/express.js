var app = require('express')();
    //setando a engine para ejs;
    app.set('view engine', 'ejs');
    //setando o diretório de vies do ejs
    app.set('views', './app/views');

module.exports = function () {
    return app;
};
