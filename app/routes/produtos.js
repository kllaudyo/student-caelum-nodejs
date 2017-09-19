/**
 * Created by claudio on 18/09/17.
 */
module.exports = function(app){

    app.get('/produtos', function(request, response) {

        //após ser carregado no express-load, ele vai pelo caminho da pasta
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function (err, result) {
            if(err){
                console.error('erro aconteceu na consulta', err);
            }else{
                response.render('produtos/lista', {'lista':result});
            }
        });

        connection.end();

    });

    app.get('/produtos/form', function (request,response) {
        console.log("cheguei aqui");
        response.render('produtos/form');
    });

    app.post('/produtos/salva',function(request, response){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salvar(request.body, function (err, result) {
            if(err){
                console.error('erro aconteceu no insert', err);
            }else{
                response.render('produtos/form');
            }
        });

    });

};