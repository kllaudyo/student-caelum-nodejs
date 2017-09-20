/**
 * Created by claudio on 19/09/17.
 */

var http = require('http');

var settings = {
    hostname : 'localhost',
    port : 3000,
    path : '/produtos',
    method : 'post',
    headers : {'Accept':'application/json','Content-type':'application/json'}
};

var produto = {
    titulo : 'Expressão regular',
    descricao : 'Livro de expressão regular',
    preco : 90
};

var client = http.request(settings, function(response){
    console.log(response.statusCode);
    response.on('data', function (body) {
        console.log('Corpo: ' + body);
    })
});

client.end(JSON.stringify(produto));