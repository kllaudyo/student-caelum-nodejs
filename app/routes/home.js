/**
 * Created by claudio on 22/09/17.
 */
module.exports = function(app){
    app.get('/', function(request, response, next){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err, result){
            if(err){
                return next(err);
            }else{
                response.render('home/index',{livros:result});
            }
        });
        connection.end();
    });

};