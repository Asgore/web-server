var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var PORT = 3000;



app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('express server started! @ PORT: '+ PORT);
});