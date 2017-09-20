/**
 * Created by claudio on 18/09/17.
 */

module.exports = function(app){

    var renderizar = function(response, status, produto, erros){
        response.status(status).render('produtos/form',{errosValidacao:erros, produto:produto});
    };

    app.get('/produtos', function(request, response) {

        //após ser carregado no express-load, ele vai pelo caminho da pasta
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, result) {
            if(err){
                console.error('erro aconteceu na consulta', err);
            }else{
                response.format({
                    html : function(){
                        response.render('produtos/lista', {'lista':result});
                    },
                    json : function(){
                        response.json(result);
                    }
                });
            }
        });

        connection.end();

    });

    app.get('/produtos/form', function (request,response) {
        console.log("cheguei aqui");
        //response.render('produtos/form',{errosValidacao:{}, produto:{}});
        renderizar(response, 200, {}, {});
    });

    app.post('/produtos',function(request, response){

        var produto = request.body;

        request.assert('titulo','Titulo é obrigatório').notEmpty();
        request.assert('preco','Obrigatorio valor decimal').isFloat();


        var erros = request.validationErrors();
        if(erros){

            response.format({
                html:function(){
                    renderizar(response, 400, produto, erros);
                },
                json:function () {
                    response.status(400).json(erros);
                }
            });

            return;
        }

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