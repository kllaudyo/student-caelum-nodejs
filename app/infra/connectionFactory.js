/**
 * Created by claudio on 18/09/17.
 */

var driver = require('mysql');

var doConnection = function () {

    if(!process.env.NODE_ENV) {
        return driver.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo'
        });
    }

    if(process.env.NODE_ENV == 'test'){
        return driver.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_test'
        });
    }

};

//wrapper, função embrulha outra função
module.exports = function () {
    return doConnection;
};