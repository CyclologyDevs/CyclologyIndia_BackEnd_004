/* 
const dotenv = require('dotenv')
require("dotenv").config();

var nodemailer = require('nodemailer');


function sendEmail(email, token) {

    var email = email;
    var token = token;


    console.log(email)
    console.log(token)

    var mail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        auth: {
            user: '', // Your email id
            pass: '' // Your password
        }
    });

    var mailOptions = {
        from: 'me@gmail.com',
        to: 'imrudraroy10@gmail.com',
        subject: 'Reset Password Link Of Cycology',
        html: '<p>You requested for reset password, kindly use this <a href="http://localhost:8080/reset-password?token=' + token + '">link</a> to reset your password</p>'

    };

    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log("Email not sent !")
            console.log(error)
        } else {
            console.log("Email sent successfully !")
        }
    });
}

module.exports = sendEmail
*/

require("dotenv").config();   //For use .env file
const nodemailer = require("nodemailer");

const sendEmail = async (email, token) => {
    var email = email;
    var token = token;

    // console.log(email)
    // console.log(token)

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: 'iamishika1441@gmail.com',
                pass: 'thwwajpvnyehzjsn',
            },
        });

        await transporter.sendMail({
            from: 'iamishika1441@gmail.com',
            to: email,
            subject: `Reset Password Link Of Cycology`,
            html: `<p>You requested for reset password, kindly use this <a href="http://qa.cyclologyindia.com/update-password?token=' + token + '">link</a> to reset your password</p></br>DON't SAHRE IT WITH ANYONE!`
        });
        console.log("email sent sucessfully");
    } catch (error) {
        console.log("email not sent");
        console.log(error);
    }
};

module.exports = sendEmail;
