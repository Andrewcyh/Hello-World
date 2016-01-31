var http = require('http');

http.createServer(function(req,res){
	var body = 'Hello World\n';
	var content_length = body.length;
	res.writeHead(200, {
		'Content-Length': content_length,
		'Content-Type': 'text/plain'
	});
	res.end(body);
}).listen(8080);
