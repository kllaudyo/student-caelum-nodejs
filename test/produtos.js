/**
 * Created by claudio on 20/09/17.
 */

var http = require('http');
var assert = require('assert');

describe('#ProdutosController', function(){

    it('#listagem json', function(done){

        var request = {
            hostname:'localhost',
            port:3000,
            path:'/produtos',
            headers:{
                'Accept':'application/json'
            }
        };

        http.get(request, function(response){

            assert.equal(response.statusCode, 302);
            assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
            done();

        });

    });

});