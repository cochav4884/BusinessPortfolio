const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
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
    from: `"${name}" <${email}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: formSubject,
    text: `
Name: ${name}
Email: ${email}
Subject: ${formSubject}
Message: ${message}
Do Not Sell: ${doNotSell}
Accepted Terms: ${acceptedTermsAndPrivacy}
    `,
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

// ✅ 1) /send-message (Only works locally)
app.post("/send-message", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📨 [DEV] /send-message: Simulating local message send", req.body);
    return res.status(200).json({ message: "✅ Message sent (dev only)" });
  }
  console.log("📨 [PROD] /send-message (fake success):", req.body);
  return res.status(200).json({ message: "✅ Message sent successfully (demo only)" });
});

// ✅ 2) /booking (Only works locally)
app.post("/booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📨 [DEV] /booking: Simulating booking message send", req.body);
    return res.status(200).json({ message: "✅ Booking sent (dev only)" });
  }
  console.log("📨 [PROD] /booking (fake success):", req.body);
  return res.status(200).json({ message: "✅ Booking sent successfully (demo only)" });
});

// ✅ 3) /api/service-booking (Only works locally)
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
