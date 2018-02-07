var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();

app.get('/:id', function(req,res){
	res.send("Hello " + id);
});

app.listen(3000);