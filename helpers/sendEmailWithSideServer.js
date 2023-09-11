const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, USER_SENDER } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

// side server logic, using sendgrid
const sendEmailWithSideServer = async (data) => {
  const email = { ...data, from: USER_SENDER };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmailWithSideServer;
