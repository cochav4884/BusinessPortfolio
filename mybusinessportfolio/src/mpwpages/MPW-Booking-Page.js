// src/pages/MPWBookingPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

export default function MPWBookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    package: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(true);
      // Optionally clear form or handle success further
    } else {
      alert(data.message || "Failed to submit booking. Please try again.");
    }
  } catch (error) {
    alert("Error submitting booking. Please check your connection.");
    console.error("Booking submission error:", error);
  }
};


  return (
    <main className={styles.container}>
      {/* ===== NAVIGATION ===== */}
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <a href="/" style={{ color: "#cc0000", textDecoration: "none" }}>
            Retro Photo Shop
          </a>
        </h1>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} to="/multi-page-website">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/mpw-gallery-page">
              Gallery
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/mpw-booking-page">
              Booking
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/mpw-contact-page">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* ===== PAGE TITLE ===== */}
      <h1 className={styles.pageTitle2}>Book Your Photo Session</h1>
      <p className={styles.intro}>
        Choose your preferred date, time, and package below.
      </p>
      <p className={styles.intro}>
        We look forward to capturing your memories!
      </p>

      {/* ===== BOOKING FORM ===== */}
      {submitted ? (
        <div
          style={{
            backgroundColor: "#cc0000",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Thank you for booking with us, {formData.name}! We will contact you
          soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={styles.bookingForm}
          noValidate
          autoComplete="off"
        >
          <label className={styles.formLabel} htmlFor="name">
            Full Name<span style={{ color: "#cc0000" }}>*</span>
          </label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />

          <label className={styles.formLabel} htmlFor="email">
            Email Address<span style={{ color: "#cc0000" }}>*</span>
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <label className={styles.formLabel} htmlFor="phone">
            Phone Number
          </label>
          <input
            className={styles.formInput}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(optional)"
          />

          <label className={styles.formLabel} htmlFor="date">
            Preferred Date<span style={{ color: "#cc0000" }}>*</span>
          </label>
          <input
            className={styles.formInput}
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />

          <label className={styles.formLabel} htmlFor="time">
            Preferred Time<span style={{ color: "#cc0000" }}>*</span>
          </label>
          <input
            className={styles.formInput}
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          />

          <label className={styles.formLabel} htmlFor="package">
            Select Package<span style={{ color: "#cc0000" }}>*</span>
          </label>
          <select
            className={styles.formInput}
            id="package"
            name="package"
            required
            value={formData.package}
            onChange={handleChange}
          >
            <option value="" disabled>
              -- Choose a Package --
            </option>
            <option value="basic">Basic - 30 min session</option>
            <option value="standard">Standard - 1 hour session</option>
            <option value="deluxe">Deluxe - 2 hour session with prints</option>
          </select>

          <label className={styles.formLabel} htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            className={styles.formInput}
            id="notes"
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special requests or info"
          />

          <button
            type="submit"
            className={styles.button}
            style={{ marginTop: "20px" }}
          >
            Submit Booking
          </button>
        </form>
      )}

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
        reserved.
      </footer>
    </main>
  );
}
