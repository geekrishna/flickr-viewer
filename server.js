var express = require('express');
var http = require('http');
var app = express().use(express.static('public'));

app.get('/*', function  (req, res) {
	res.status(404).json({status: 'Not found'});
});

http.createServer(app).listen(8080, function () {
	console.log("Server is up and running at http://localhost:8080");
});