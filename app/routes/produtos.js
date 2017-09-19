/**
 * Created by claudio on 18/09/17.
 */

var dbConnection = require('../infra/dbConnection');

module.exports = function(app){

    app.get('/produtos', function(request, response) {
        var connection = dbConnection();
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