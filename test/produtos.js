/**
 * Created by claudio on 20/09/17.
 */

var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){

    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query("delete from livros",function(err, result){
            if(!err){
                done();
            }
        });
    });

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

    it('#cadastro de novo produto com dados inválidos', function(done){
        request.post('/produtos')
            .send({titulo:'',descricao:'teste',preco:0})
            .expect(400,done);
    });

    it('#cadastro de produto com dados válidos', function (done) {
        request.post('/produtos')
            .send({titulo:'livro testando', descricao:'testando', preco:30.50})
            .expect(302, done);
    });

});