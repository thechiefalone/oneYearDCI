var http = require('http');
var url = require('url');

http.createServer(function(req,res){
res.writeHead(200, {'content-type':'text/html'});
res.write("Hello World by <span style=color:red;font-weight:bold;>@LPeReN</span><br>");

var myUrl=url.parse(req.url,true);
res.end(myUrl.path);
}).listen(3000);