module.exports = function(){
  var controller = {};

  controller.index = function(req, res){
    //Retorna a pagina index.ejs
    res.render('index', {nome:'Express'})
  };

  return controller;
}
