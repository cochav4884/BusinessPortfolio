const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Yahoo Mail transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error('❌ Email transporter error:', err);
  } else {
    console.log('✅ Email transporter is ready to send messages');
  }
});

// Real contact form: /send
app.post('/send', async (req, res) => {
  const {
    name,
    email,
    subject,
    message,
    doNotSell,
    acceptedTermsAndPrivacy,
  } = req.body;

  console.log('📥 Received contact form:', req.body);

  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    acceptedTermsAndPrivacy !== true
  ) {
    return res.status(400).json({
      message: 'Missing or invalid required fields.',
    });
  }

  const doNotSellNote = doNotSell
    ? '\n\n⚠️ The user checked "Do Not Sell".'
    : '';

  const toYouMail = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `Website Contact Form: ${subject}`,
    text: `New message from your website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}${doNotSellNote}`,
  };

  const toUserMail = {
    from: `"Mom Pop Shop Web Design" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `We received your message: ${subject}`,
    text: `Hi ${name},\n\nThanks for contacting Mom Pop Shop Web Design! Here's a copy of your message:\n\n"${message}"\n\nWe'll get back to you as soon as possible.\n\n- Mom Pop Shop Web Design`,
  };

  try {
    await transporter.sendMail(toYouMail);
    await transporter.sendMail(toUserMail);

    return res.status(200).json({
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return res.status(500).json({
      message: 'Something went wrong while sending your message.',
    });
  }
});

// Demo route: /send-message
app.post("/send-message", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log('🛠️ [DEV] /send-message called with:', req.body);
    return res.status(200).json({ message: "✅ Message sent (dev only)" });
  }
  console.log('🛠️ [PROD DEMO] /send-message called - no real email sent');
  return res
    .status(200)
    .json({ message: "✅ Message sent successfully (demo mode)" });
});

// Demo route: /booking
app.post("/booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log('🛠️ [DEV] /booking called with:', req.body);
    return res.status(200).json({ message: "✅ Booking sent (dev only)" });
  }
  console.log('🛠️ [PROD DEMO] /booking called - no real email sent');
  return res
    .status(200)
    .json({ message: "✅ Booking sent successfully (demo mode)" });
});

// Demo route: /api/service-booking
app.post("/api/service-booking", (req, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log('🛠️ [DEV] /api/service-booking called with:', req.body);
    return res.status(200).json({ message: "✅ Service booking sent (dev only)" });
  }
  console.log('🛠️ [PROD DEMO] /api/service-booking called - no real email sent');
  return res
    .status(200)
    .json({ message: "✅ Service booking sent successfully (demo mode)" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
