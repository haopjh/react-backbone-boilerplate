var express = require('express');
var fs = require('fs');

var app = express();
var port = 8080;


//Serves the bundle
app.use('/dist', express.static(__dirname + '/dist'));


//Serves the html file
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/src/client/index.html');
});

app.listen(port, function() {
	console.log("App started on port:"+port);
});

