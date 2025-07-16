// backend/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter on startup to catch issues early
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter verification failed:", error);
  } else {
    console.log("Email transporter is ready to send messages");
  }
});

// ✅ 1. Simple Contact Route: /send-message
app.post("/send-message", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

// ✅ 2. Full Contact Form Route: /send
app.post("/send", async (req, res) => {
  const {
    name,
    email,
    subject = "General Inquiry",
    message,
    doNotSell = false,
    acceptedTermsAndPrivacy = false,
  } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  if (!acceptedTermsAndPrivacy) {
    return res
      .status(400)
      .json({ message: "You must accept the terms and privacy policy." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // your own verified email (to avoid spoofing)
    replyTo: email, // user's email so you can reply directly
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject} (from ${name})`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      <p><strong>Do Not Sell Opt-Out:</strong> ${doNotSell ? "Yes" : "No"}</p>
      <p><strong>Agreed to Terms:</strong> ${
        acceptedTermsAndPrivacy ? "Yes" : "No"
      }</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// ✅ 3. Booking Route: /booking
app.post("/booking", async (req, res) => {
  const {
    name,
    email,
    phone,
    date,
    time = "N/A",
    package: pkg,
    notes,
  } = req.body;

  if (!name || !email || !date || !pkg) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Booking Request from ${name}`,
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Package:</strong> ${pkg}</p>
      <p><strong>Notes:</strong><br/>${
        notes ? notes.replace(/\n/g, "<br/>") : "None"
      }</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Booking request sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send booking request." });
  }
});

// ✅ 4. Service Booking Route: /api/service-booking
app.post("/api/service-booking", async (req, res) => {
  const { name, email, date, serviceType, paymentPlan } = req.body;

  if (!name || !email || !date || !serviceType) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Service Booking from ${name}`,
    html: `
      <h2>New Service Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Payment Plan:</strong> ${paymentPlan} || "None Selected"</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Service booking sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send service booking." });
  }
});

// ✅ Optional: Basic GET route for testing in browser
app.get("/", (req, res) => {
  res.send("Backend is live. Welcome to the API.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
