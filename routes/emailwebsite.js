const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'bulsuoso127@gmail.com',
      pass: 'BulsuOSO#127'
    },
    tls:{
        rejectUnauthorized: false
    }
  }));

  
module.exports = (router) =>{

    router.post('/sendMessage', (req, res)=>{
        var mailOptions = {
            from: req.body.email,
            to: 'bulsuoso127@gmail.com',
            subject: 'OSO Website Help',
            html: req.body.message + '<br/><br/> Reply @: ' + req.body.email
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              res.json({ success: true, message: "Email sent"});
            }
        });

    });

    return router;
}