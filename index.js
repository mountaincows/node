var http = require('http');

var port = process.env.port || 1337;

http.createServer(function(req,res){
	res.wirteHead(200, {'content-Type': 'text/plain'});
	res.end("Hello");
}).listen(port);