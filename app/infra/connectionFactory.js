/**
 * Created by claudio on 18/09/17.
 */

var driver = require('mysql');

var doConnection = function () {
    return driver.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'casadocodigo'
    });
};

//wrapper, função embrulha outra função
module.exports = function () {
    return doConnection;
};