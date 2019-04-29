const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'alperen@siberstrateji.com',
        pass: 'HaY5t4rdsenTSt5'
    }

});

exports.sendEmail = function (receiver, sender, subject, message, callback) {
    var emailOption = {
        from: sender,
        to: receiver,
        subject: subject,
        text: message
    };
    transporter.sendMail(emailOption, function (err, info) {
        callback(err,info);
    });
};