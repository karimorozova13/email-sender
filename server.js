const express = require("express");
const app = express();
const http = require("http");
const sendEmailWithNodemailer = require("./helpers/sendEmailWithNodemailer");
const server = http.createServer(app);

const sendEmailWithSideServer = require("./helpers/sendEmailWithSideServer");

app.use(express.json());

// customer mail server, using nodemailer
app.post("/nodemailer", async (req, res) => {
  try {
    if (!Object.values(req.body).length) {
      return res.status(400).json("Incorrect data");
    }
    await sendEmailWithNodemailer(req.body);
    res.status(200).json("Mail sent nodemailer");
  } catch (error) {
    console.log(error.message);
  }
});

// side server logic, using sendgrid
app.post("/sendgrid", async (req, res) => {
  try {
    if (!Object.values(req.body).length) {
      return res.status(400).json("Incorrect data");
    }
    await sendEmailWithSideServer(req.body);
    res.status(200).json("Mail sent");
  } catch (error) {
    console.log(error.message);
  }
});
server.listen(process.env.PORT || 3005, () => {
  console.log("Server is running");
});

// ejs - template for pretty emails
