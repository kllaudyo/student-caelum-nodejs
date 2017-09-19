/**
 * Created by claudio on 19/09/17.
 */

var dao = function (connection) {

    this.lista = function(callback){
        connection.query('select * from livros', callback);
    };
    console.log(this);
    return this;
};


module.exports = function(){
    return dao;
};