/**
 * Created by claudio on 18/09/17.
 */
module.exports = function(app){

    app.get('/produtos', function(request, response) {

        //após ser carregado no express-load, ele vai pelo caminho da pasta
        var connection = app.infra.connectionFactory();

        connection.query('select * from livros', function (err, result) {
            if(err){
                console.log('erro',err);
            }else{
                response.render('produtos/lista', {'lista':result});
            }
        });
        connection.end();

    });

};