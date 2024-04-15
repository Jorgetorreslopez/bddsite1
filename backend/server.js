const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); //! TODO: Limit to our frontend domain
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendEmail(name, email, message);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).send({ message: "Failed to send email" });
  }
});

async function sendEmail(name, email, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_RECEIVER, // can be a list
    subject: "Home Page Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`,
  };

  await transporter.sendMail(mailOptions);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
