// backend/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post("/send", async (req, res) => {
  const {
    name,
    email,
    subject,
    message,
    doNotSell,
    acceptedTermsAndPrivacy,
  } = req.body;

  // Basic validation
  if (!name || !email || !message || !subject) {
    return res.status(400).json({ message: "Please fill in all required fields." });
  }

  if (!acceptedTermsAndPrivacy) {
    return res.status(400).json({ message: "You must accept the terms and privacy policy." });
  }

  // Create transporter with your email service config
  let transporter = nodemailer.createTransport({
    service: "Yahoo",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Message: ${subject} (from ${name})`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      <p><strong>California Resident Do Not Sell Opt-Out:</strong> ${doNotSell ? "Yes" : "No"}</p>
      <p><strong>Agreed to Terms and Privacy:</strong> ${acceptedTermsAndPrivacy ? "Yes" : "No"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});