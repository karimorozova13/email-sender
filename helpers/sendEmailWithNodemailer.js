const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_PASSWORD, USER_SENDER, GMAIL_HOST, GMAIL_PORT } = process.env;

// customer mail server, using nodemailer
const nodemailerConfig = {
  host: GMAIL_HOST,
  port: GMAIL_PORT,
  //   secure: true,
  auth: {
    user: USER_SENDER,
    pass: GMAIL_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmailWithNodemailer = async (data) => {
  const email = { ...data, from: "karimorozova13@gmail.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmailWithNodemailer;
