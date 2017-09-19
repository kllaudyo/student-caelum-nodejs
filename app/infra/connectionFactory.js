/**
 * Created by claudio on 18/09/17.
 */

var driver = require('mysql');

module.exports = function () {
    return driver.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'casadocodigo'
    });
};