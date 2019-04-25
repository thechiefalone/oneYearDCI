var http = require('http');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:'thechiefalone@gmail.com',
        pass : 'fuRkok-memnyz-gopba9'
    }
});
http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/HTML'});

var mailOptions = {
from : 'thechiefalone@gmail.com',
to: 'alperenozkan@gmail.com',
subject: 'Hello this is first mail',
text: 'Hello my friend how are you ?'
};
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        res.end(err.stack);
    }
    else{
        res.end(info.response);
    }
});
}).listen(3000);