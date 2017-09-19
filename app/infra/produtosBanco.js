/**
 * Created by claudio on 19/09/17.
 */
module.exports = function(){

    this.lista = function(connection, callback){
        connection.query('select * from livros',callback);
    };

    return this;
};