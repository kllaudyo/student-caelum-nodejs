/**
 * Created by claudio on 17/09/17.
 */
var app = require('./config/express')();

app.listen(3000, function () {
    console.log("Servidor rodando");
});