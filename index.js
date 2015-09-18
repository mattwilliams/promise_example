var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, './')));

app.get('/a', function(req,res,next){
	res.json(
		{
			"text":"the rain in spain"
		}
	);
});

app.get('/b', function(req,res,next){
	res.json(
		{
			"text":"falls mainly on the plain"
		}
	);
});

http.Server(app).listen(8000, function(){
	console.log('listening on *:8000');
});