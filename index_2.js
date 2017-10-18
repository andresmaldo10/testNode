var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hola tamara!');
  console.log('hit');
});

app.get('/8', function (req, res) {
  res.send('Hola ocho!');
  console.log('hit');
});

app.post('/envio',function(req,res){
	var param=req.params;
	console.log('req.body');
	res.send('Hola lola!' + req.body.Action);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
