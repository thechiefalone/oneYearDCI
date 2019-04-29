const http = require('http');
const uc = require('upper-case');
const url = require('url');
const fs = require('fs');
const emailSender = require('./email-sender');

http.createServer(function (req, res) {

    res.writeHead(200, {
        'content-type': 'text/HTML'
    });
    const myUrl = url.parse(req.url,true);
    // res.end(uc('Hello World <br>')+myUrl.query.email);
    if (myUrl.pathname == '/contact') {
        // res.end('You are in the contact page');
        if (myUrl.query.name == '' || typeof (myUrl.query.name) == 'undefined') {
            fs.readFile('contact.html', function (err, data) {
                if (err) {
                    res.end(err.stack);
                } else {
                    res.end(data);
                }
            });
        } else {
            emailSender.sendEmail('alperenozkan@gmail.com',myUrl.query.email,myUrl.query.subject,myUrl.query.message,function(err,info){
                if(err){
                    res.end(err.stack);
                }else{
                    res.end(info.response+"<br>thank you "+myUrl.query.name+" we got your message and we will response soon");
                }
                res.end();
            });
        }
    } else {
        res.end('You are NOT in the contact page');
    }

}).listen(3000);