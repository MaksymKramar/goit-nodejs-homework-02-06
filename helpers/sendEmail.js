const nodemailer = require("nodemailer");

const {SERVER_NAME,EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: SERVER_NAME,
    port: 465,
    secure: true,
    auth: {
        user: "biuro@blueleaf.com.pl",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data)=> {
    const email = {
        ...data, 
        from: "biuro@blueleaf.com.pl",
    }
    await transporter.sendMail(email);
};

module.exports = sendEmail;