/**
 * Created by claudio on 19/09/17.
 */

var ProdutosDAO = function (connection) {
    this._connection = connection;
};

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
};

module.exports = function(){
    return ProdutosDAO;
};