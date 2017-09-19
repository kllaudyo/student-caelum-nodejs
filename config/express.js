module.exports = function () {
    console.log("modulo carregado");
    var app = require('express')();
    app.set('view engine', 'ejs');
    return app;
};
