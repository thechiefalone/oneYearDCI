var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {


    res.writeHead(200, {
        'content-type': 'text/html'
    });
    // res.write("Hello World by <span style=color:red;>@LPeReN</span><br>");

    var myUrl = url.parse(req.url, true);

    if (myUrl.pathname == '/' || myUrl.pathname == '/home' || myUrl.pathname == '/home/') {
        fs.readFile('index.html', function (err, data) {
            if (!err) {
                res.end(data);
            }

        });
    } else

    if (myUrl.pathname == '/about' || myUrl.pathname == '/about/') {
        fs.readFile('about.html', function (err, data) {
            if (!err) {
                res.end(data);
            }

        });
    } else
    if (myUrl.pathname == '/contact' || myUrl.pathname == '/contact/') {
        if(typeof(myUrl.query.firstname)!=="undefined" && myUrl.query.firstname !==""){
            var senderName = myUrl.query.firstname;
            var senderLastName = myUrl.query.lastname;
            var senderEmail = myUrl.query.email;
            var senderMessage = myUrl.query.subject;
            var responsHtml = "<html>"+
            "<head></head>"+
            "<body><h1>thank you "+senderName+" for your message</h1></body>"+
            "</html>";
            res.end(responsHtml);
        }else{
            fs.readFile('contact.html', function (err, data) {
                if (!err) {
                    res.end(data);
                }

            });
        }

    } else {
        res.end('404 NOT FOUND');
    }



}).listen(3000);