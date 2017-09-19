/**
 * Created by claudio on 18/09/17.
 */
var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'casadocodigo'
});

module.exports = function(){
    return conn;
};