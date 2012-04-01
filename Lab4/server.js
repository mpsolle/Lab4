var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (req, res) {
	
	client.mget(['awesome'], function (error, response){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('awesomeCount:'+ response[0])
	});
}).listen(3000);

console.log('Server running on port 3000');

