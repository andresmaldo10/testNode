var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  response.send('hola mundo');
});

app.get('/dato', function(request, response) {
  //response.render('pages/index');
  response.send('esto es un dato');
});

app.post('/envio',function(req,res){
	var param=req.params;
	console.log('req.body');
	res.send('Hola lola!' + req.body.Action);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
