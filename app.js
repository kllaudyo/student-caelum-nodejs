/**
 * Created by claudio on 17/09/17.
 */
var app = require('./config/express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
    console.log('usuario conectado');
    socket.on('disconnect',function(){
        console.log('usuario disconectado');
    });
});

var server = server.listen(3000, function () {
    console.log('teste');
});
//
// app.listen(3000, function () {
//     console.log("Servidor rodando");
// });