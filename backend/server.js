const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ✅ Email transporter config (Yahoo SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter failed to initialize:", error);
  } else {
    console.log("✅ Email transporter is ready to send messages");
  }
});

// 📤 Main /send route
app.post("/send", async (req, res) => {
  console.log("📥 Incoming /send request body:", req.body);

  const {
    name,
    email,
    subject,
    message,
    doNotSell,
    acceptedTermsAndPrivacy,
  } = req.body;

  const formSubject = subject === "technical" || subject === "general"
    ? "General Inquiry"
    : subject;

  const mailOptions = {
    from: `"Corinne Padilla" <${process.env.EMAIL_USER}>`, // ✅ Must match EMAIL_USER
    to: process.env.EMAIL_TO,
    replyTo: email, // ✅ So replies go to sender, but from matches Yahoo
    subject: formSubject,
    text: `
Name: ${name}
Email: ${email}
Subject: ${formSubject}
Message: ${message}
Do Not Sell: ${doNotSell}
Accepted Terms: ${acceptedTermsAndPrivacy}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${formSubject}</p>
      <p><strong>Message:</strong><br>${message}</p>
      <p><strong>Do Not Sell:</strong> ${doNotSell}</p>
      <p><strong>Accepted Terms:</strong> ${acceptedTermsAndPrivacy}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ message: "✅ Message sent successfully" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ message: "❌ Failed to send message" });
  }
});

//
// 🔧 DEMO-ONLY ROUTES
//
app.post("/send-message", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📨 [DEV] /send-message: Simulating local message send", req.body);
    return res.status(200).json({ message: "✅ Message sent (dev only)" });
  }
  console.log("📨 [PROD] /send-message (fake success):", req.body);
  return res.status(200).json({ message: "✅ Message sent successfully (demo only)" });
});

app.post("/booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📨 [DEV] /booking: Simulating booking message send", req.body);
    return res.status(200).json({ message: "✅ Booking sent (dev only)" });
  }
  console.log("📨 [PROD] /booking (fake success):", req.body);
  return res.status(200).json({ message: "✅ Booking sent successfully (demo only)" });
});

app.post("/api/service-booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📨 [DEV] /api/service-booking: Simulating service booking", req.body);
    return res.status(200).json({ message: "✅ Service booking sent (dev only)" });
  }
  console.log("📨 [PROD] /api/service-booking (fake success):", req.body);
  return res.status(200).json({ message: "✅ Service booking sent successfully (demo only)" });
});

// 🌍 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
