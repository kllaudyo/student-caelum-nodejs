/**
 * Created by claudio on 19/09/17.
 */
var http = require('http');

var settings = {
    hostname : 'localhost',
    port : 3000,
    path: '/produtos',
    headers : {'Accept':'application/json'}
};

http.get(settings, function(response){
    console.log(response.statusCode);
    response.on('data', function(body){
        console.log('Corpo: ' + body);
    });
});