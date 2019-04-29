const http = require('http');
const uc = require ('upper-case');


http.createServer(function(req, res){

res.writeHead(200,{'content-type':'text/HTML'});

res.end(uc('Hello World'));


}).listen(3000);