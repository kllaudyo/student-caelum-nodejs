/**
 * Created by claudio on 17/09/17.
 */

//importa modulo express baixado com sudo npm install express -save
var express = require('express');
//chama a função para conseguir trabalhar com o modulo
var app = express();

//injetando embeded javascript no express
app.set('view engine', 'ejs');

//configurando o metodo get para url /produtos
app.get("/produtos", function(request, response){
    //objeto response do express, metodo send que envia
    //retorno para o cliente
    //response.send("<html><body><h1>Listagem de Produtos</h1></body></html>");
    response.render("produtos/lista");
});

app.listen(3000, function () {
    console.log("Servidor rodando");
});