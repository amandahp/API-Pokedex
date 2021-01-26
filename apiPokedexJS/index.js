
const express = require('express') //padrão, para chamar o express, não usa import, usa require (igual import no react)
const routes = require('./src/routes/routes.js');
const app = express() //inicializar o express
const port = 4000 //porta que ele roda


app.use(function(req, res, next) { //resolver erro de cors
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'PUT, PATCH,POST, GET, DELETE, OPTIONS');
	next();
});

const bodyParser = require('body-parser'); //biblioteca que já deixa os dados legiveis (já tem json.parse = transforma os dados de string para objeto back ler)

// Configure bodyparser to handle post requests - configura a biblioteca bodyParser, para lidar com requisições post 
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json()); //fala para o bodyParser, que tudo que vier, será convertido para json

app.listen(port, () => { //escutar a porta e executa a api
  app.use('/',routes);
  console.log(`App listening http://localhost:${port}`)
})
