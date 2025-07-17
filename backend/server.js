const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter verification failed:", error);
  } else {
    console.log("Email transporter is ready to send messages");
  }
});

// ✅ 1) /send-message (Only works locally)
app.post("/send-message", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    return res.status(200).json({ message: "✅ Message sent (dev only)" });
  }
  res.status(403).json({ message: "🚫 This route is disabled in production." });
});

// ✅ 2) /send — Real Contact Form (your working version)
app.post("/send", async (req, res) => {
  // ✅ Log the incoming request body for debugging
  console.log("📥 Incoming /send request body:", req.body);

  // ✅ Prevent destructuring error if body is undefined
  if (!req.body) {
    return res.status(400).json({ message: "Missing JSON body." });
  }

  const {
    name,
    email,
    subject = "General Inquiry",
    message,
    doNotSell = false,
    acceptedTermsAndPrivacy = false,
  } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  // ✅ Ensure terms and privacy checkbox was accepted
  if (!acceptedTermsAndPrivacy) {
    return res
      .status(400)
      .json({ message: "You must accept the terms and privacy policy." });
  }

  const mailOptions = {
    from: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
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
    console.log("Email sent successfully to:", process.env.EMAIL_USER);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email.", error: error.message });
  }
});

// ✅ 3) /booking (Only works locally)
app.post("/booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    return res.status(200).json({ message: "✅ Booking sent (dev only)" });
  }
  res.status(403).json({ message: "🚫 This route is disabled in production." });
});

// ✅ 4) /api/service-booking (Only works locally)
app.post("/api/service-booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    return res
      .status(200)
      .json({ message: "✅ Service booking sent (dev only)" });
  }
  res.status(403).json({ message: "🚫 This route is disabled in production." });
});

// ✅ Temporary test route for email testing
app.get("/test-email", async (req, res) => {
  const testMail = {
    from: `"Test Email" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Test from your deployed backend",
    text: "This is a test email sent directly from your Node backend.",
  };

  try {
    await transporter.sendMail(testMail);
    console.log("✅ Test email sent.");
    res.send("✅ Test email sent successfully!");
  } catch (error) {
    console.error("❌ Failed to send test email:", error);
    res.status(500).send("❌ Failed to send test email.");
  }
});

// ✅ Default root route
app.get("/", (req, res) => {
  res.send("Backend is live. Welcome to the API.");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
