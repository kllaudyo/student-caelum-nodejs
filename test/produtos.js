/**
 * Created by claudio on 20/09/17.
 */

var http = require('http');

describe('#ProdutosController', function(){

    it('#listagem json', function(funcaoDeFinalizacao){

        var request = {
            hostname:'localhost',
            port:3000,
            path:'/produtos',
            headers:{
                'Accept':'application/json'
            }
        };

        http.get(request, function(response){


            if(response.statusCode===200 && response.headers['content-type'] == 'application/json; charset=utf-8'){
                console.log(response.statusCode);
                for(x in response.headers){
                    console.log(x,'=',response.headers[x]);
                }
                funcaoDeFinalizacao();
            }

        });

    });

});