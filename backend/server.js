const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true, // Enable logger to console
  debug: true, // Show SMTP traffic in console
});

// Verify transporter connection configuration on server startup
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter verification failed:", error);
  } else {
    console.log("Email transporter is ready to send messages");
  }
});

// Development-only test message route
app.post("/send-message", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    return res.status(200).json({ message: "✅ Message sent (dev only)" });
  }
  res.status(403).json({ message: "🚫 This route is disabled in production." });
});

// Main contact form email route
app.post("/send", async (req, res) => {
  console.log("📥 Incoming /send request body:", req.body);

  if (!req.body) {
    return res.status(400).json({ message: "Missing JSON body." });
  }

  const {
    name,
    email,
    subject: contactSubject = "General Inquiry",
    message,
    doNotSell = false,
    acceptedTermsAndPrivacy = false,
  } = req.body;

  // Basic email format validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return res.status(400).json({ message: "Invalid email address." });
  }

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

  // Ensure from email is a valid email format (helps prevent SMTP 550 errors)
  const fromEmail = process.env.EMAIL_USER;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    return res
      .status(500)
      .json({ message: "Invalid sender email configured on server." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${contactSubject} (from ${name})`,
    text: `
Name: ${name}
Email: ${email}
Subject: ${contactSubject}
Message: ${message}

Do Not Sell Opt-Out: ${doNotSell ? "Yes" : "No"}
Agreed to Terms: ${acceptedTermsAndPrivacy ? "Yes" : "No"}
    `.trim(),
  };
  try {
    // Send email with contact info to yourself
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact form email sent to:", fromEmail);
  } catch (err) {
    console.error("❌ Error sending main contact email:", err.stack || err);
    return res.status(500).json({
      message: "Server error while sending contact email.",
      error: err.message || err.toString(),
    });
  }

  res.status(200).json({ message: "Email sent successfully!" });
});

// Development-only booking routes (disabled in production)
app.post("/booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    return res.status(200).json({ message: "✅ Booking sent (dev only)" });
  }
  res.status(403).json({ message: "🚫 This route is disabled in production." });
});

app.post("/api/service-booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    return res
      .status(200)
      .json({ message: "✅ Service booking sent (dev only)" });
  }
  res.status(403).json({ message: "🚫 This route is disabled in production." });
});

// Test email route
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

// View env variable status (for debugging only, be careful with sensitive info)
app.get("/env-check", (req, res) => {
  res.json({
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS ? "✅ set" : "❌ not set",
    EMAIL_HOST: process.env.EMAIL_HOST,
    NODE_ENV: process.env.NODE_ENV,
  });
});

// Favicon handler
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "favicon.ico"));
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend is live. Welcome to the API.");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
