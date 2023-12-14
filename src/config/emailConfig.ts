const nodemailer = require('nodemailer');

const emailConfig  = {
  service: process.env.SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(emailConfig);

export default transporter;