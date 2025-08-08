const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

// Debug: log critical env vars
console.log("HOST:", process.env.EMAIL_HOST);
console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS ? "***MASKED***" : "❌ MISSING");
console.log("TO:", process.env.EMAIL_TO);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ✅ Email transporter config (Gmail SMTP)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP verification failed:", error);
  } else {
    console.log("SMTP server is ready to take our messages");
  }
});

// 📤 Main /send route
app.post("/send", async (req, res) => {
  console.log("📥 Incoming /send request body:", req.body);

  const { name, email, subject, message, doNotSell, acceptedTermsAndPrivacy } =
    req.body;

  const formSubject =
    subject === "technical" || subject === "general"
      ? "General Inquiry"
      : subject;

  const mailOptions = {
    from: `"Mom & Pop Shop Web Design" <${process.env.EMAIL_USER}>`, // Your verified Yahoo email
    to: process.env.EMAIL_TO, // Your inbox
    subject: formSubject,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${formSubject}\nMessage: ${message}\nDo Not Sell: ${doNotSell}\nAccepted Terms: ${acceptedTermsAndPrivacy}`,
    html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${formSubject}</p>
    <p><strong>Message:</strong><br>${message}</p>
    <p><strong>Do Not Sell:</strong> ${doNotSell}</p>
    <p><strong>Accepted Terms:</strong> ${acceptedTermsAndPrivacy}</p>
  `,
  };

  try {
    // Send email to yourself
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    // Send confirmation to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message!",
      text: `
Hi ${name},

Thanks for reaching out to Mom Pop Shop Web Design!
We've received your message and will get back to you shortly.

Here's a copy of what you submitted:
----------------------------------------
Subject: ${formSubject}
Message: ${message}

Talk soon,  
Corinne Padilla  
Mom Pop Shop Web Design
      `,
    };

    await transporter.sendMail(confirmationMailOptions);
    console.log("✅ Confirmation email sent to user");

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
    console.log(
      "📨 [DEV] /send-message: Simulating local message send",
      req.body
    );
    return res.status(200).json({ message: "✅ Message sent (dev only)" });
  }
  console.log("📨 [PROD] /send-message (fake success):", req.body);
  return res
    .status(200)
    .json({ message: "✅ Message sent successfully (demo only)" });
});

app.post("/booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📨 [DEV] /booking: Simulating booking message send", req.body);
    return res.status(200).json({ message: "✅ Booking sent (dev only)" });
  }
  console.log("📨 [PROD] /booking (fake success):", req.body);
  return res
    .status(200)
    .json({ message: "✅ Booking sent successfully (demo only)" });
});

app.post("/api/service-booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      "📨 [DEV] /api/service-booking: Simulating service booking",
      req.body
    );
    return res
      .status(200)
      .json({ message: "✅ Service booking sent (dev only)" });
  }
  console.log("📨 [PROD] /api/service-booking (fake success):", req.body);
  return res
    .status(200)
    .json({ message: "✅ Service booking sent successfully (demo only)" });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// 🌍 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
