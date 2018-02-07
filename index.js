var express = require('express');
var mysql = require('mysql');
var app = express();
var http = require('http');

app.get('', function(req,res){
	
	res.send("HELLO");
	
});
