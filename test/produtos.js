/**
 * Created by claudio on 20/09/17.
 */

var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){

    it('#listagem json', function(done){
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#listagem html', function(done){
        request.get('/produtos')
            .expect('Content-Type',/html/)
            .expect(200, done);
    });

});