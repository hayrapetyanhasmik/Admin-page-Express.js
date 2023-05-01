const nodemailer = require('nodemailer');

function send_Mail(mail, token){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { 
               user: "hasmikhayrapetyan1988@gmail.com",
               pass: "vlxobeicunmjwhel"
              },tls:{
                     rejectUnauthorized: false
                    }
    });
        
    const mailOptions = {
        from: "hasmikhayrapetyan1988@gmail.com",
        to: mail,
        subject: 'Sending Email using Node.js',
        text: `http://localhost:5000/verify/${token}`
    };
    
    transporter.sendMail(mailOptions, function(err, info){ //sendMail() մեթոդա
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

    module.exports = {send_Mail}