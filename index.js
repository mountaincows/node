var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/:id', function(req,res){
	
	var id = req.params.id;
	
	res.send("Hello " + id);
});

console.log("hello");

app.listen(2111);