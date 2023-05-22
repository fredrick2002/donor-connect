const nodemailer = require('nodemailer');
const express = require("express");
const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mysql = require("mysql");
// const nodemailer = require('nodemailer');


// const db = mysql.createPool({
//     host : "localhost",
//     user : "root",
//     password : "password",
//     database : "donorblood",
// });

// app.use(cors());

// app.use(express.json());

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    // TODO: Implement email sending logic
  const email = req.body.email;
// Create a transporter object with your SMTP server configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'donorconn@gmail.com',
    pass: 'Donor@1234',
  },
});

// Define your email content with HTML styles
const emailContent = `
  <div style="background-color: #f2f2f2; padding: 20px;">
    <h1 style="color: #006699; font-size: 28px;">Hello World!</h1>
    <p style="color: #333; font-size: 16px;">This is a test email sent using nodemailer with styled HTML content.</p>
  </div>
`;

// Define your email options
const mailOptions = {
  from: 'donorconn@gmail.com',
  to: 'fredricksolomon2002@gmail.com',
  subject: 'Test Email with HTML Styles',
  html: emailContent,
};

// Send your email using nodemailer
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error occurred while sending email:', error.message);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
});

app.listen(3002, () =>{
  console.log("running mail on port 3002");
});
