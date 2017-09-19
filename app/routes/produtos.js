/**
 * Created by claudio on 18/09/17.
 */

module.exports = function(app){
    app.get('/produtos', function(request, response){
        response.render('produtos/lista');
    });
};
