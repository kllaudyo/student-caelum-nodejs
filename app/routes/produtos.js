/**
 * Created by claudio on 18/09/17.
 */

module.exports = function(app){
    app.get('/produtos', function(request, response){

        //objeto driver do mysql
        var mysql = require('mysql');

        //criando a conexão mysql
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'root',
            database : 'casadocodigo'
        });

        connection.query('select * from livros', function (err, result) {
            if(err){
                console.log('erro',err);
            }else{
                response.send(result);
            }
        });

        connection.end();

    });
};
