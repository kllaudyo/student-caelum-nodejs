/**
 * Created by claudio on 19/09/17.
 */

var ProdutosDAO = function (connection) {
    this._connection = connection;
};

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
};

ProdutosDAO.prototype.salvar = function(produto, callback){
    this._connection.query('insert into livros set ?', produto, callback);
};

module.exports = function(){
    return ProdutosDAO;
};