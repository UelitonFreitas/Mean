var express = require('express');
var home = require('./app/routes/home');

module.exports = function(){
	var app = express();

	//Configuração de ambiente
	app.set('port', 3000);

	//Midleware
	app.use(express.static('./public'));
	home(app);

	//Definindo views engines
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	//Necessário apenas na versão 3.x
	app.use(app.router);



	return app;
}
