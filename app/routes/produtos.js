/**
 * Created by claudio on 18/09/17.
 */
module.exports = function(app){

    app.get('/produtos', function(request, response) {

        //após ser carregado no express-load, ele vai pelo caminho da pasta
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, result) {
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

    app.post('/produtos',function(request, response){

        var produto = request.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salvar(produto, function (err, result) {
            if(err){
                console.error('erro aconteceu no insert', err);
            }else{
                response.redirect('/produtos');
            }
        });

        connection.end();

    });

};