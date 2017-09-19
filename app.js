/**
 * Created by claudio on 17/09/17.
 */
//importando um arquivo meu
// ./ signinfica apartir da raiz do projeto

var app = require('./config/express')();
var routesProdutos = require('./app/routes/produtos')(app);

app.listen(3000, function () {
    console.log("Servidor rodando");
});