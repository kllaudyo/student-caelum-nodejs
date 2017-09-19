/**
 * Created by claudio on 18/09/17.
 */

var doConnection = require('../infra/connectionFactory');

module.exports = function(app){

    app.get('/produtos', function(request, response) {
        var connection = doConnection();
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