/**
 * Created by claudio on 22/09/17.
 */
module.exports = function(app){
    app.get('/promocoes/form', function (request, response, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err, result){
            if(err){
                return next(err);
            }else{
                response.render('promocoes/form',{livros:result});
            }
        });
        connection.end();
    });

    app.post('/promocoes',function (request, response, next) {
        var promocoes = request.body;
        var io = app.get('io');
        io.emit('novaPromocao', promocoes);
        response.redirect('promocoes/form');
    });
};