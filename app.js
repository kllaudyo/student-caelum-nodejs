/**
 * Created by claudio on 17/09/17.
 */
//importando um arquivo meu
// ./ signinfica apartir da raiz do projeto

var app = require('./config/express')();

//configurando o metodo get para url /produtos
app.get("/produtos", function(request, response){
    //objeto response do express, metodo send que envia
    //retorno para o cliente
    //response.send("<html><body><h1>Listagem de Produtos</h1></body></html>");
    console.log("listando produto");
    response.render("produtos/lista");
});

app.listen(3000, function () {
    console.log("Servidor rodando");
});