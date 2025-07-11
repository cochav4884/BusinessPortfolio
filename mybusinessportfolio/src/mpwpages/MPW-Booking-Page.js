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
      } else {
        alert(data.message || "Failed to submit booking. Please try again.");
      }
    } catch (error) {
      alert("Error submitting booking. Please check your connection.");
      console.error("Booking submission error:", error);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navigation Links */}
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <a href="/" style={{ color: "#cc0000", textDecoration: "none" }}>
            Retro Photo Shop
          </a>
        </h1>

        {/* Hamburger toggler button */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation list */}
        <ul
          className={`${styles.navList} ${menuOpen ? styles.navListOpen : ""}`}
        >
          <li>
            <Link to="/multi-page-website" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mpw-gallery-page" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/mpw-booking-page" onClick={closeMenu}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/mpw-contact-page" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Title */}
      <header className={styles.header} style={{ marginBottom: "2rem" }}>
        <h1 className={styles.pageTitle2}>Book Your Photo Session</h1>
        <p className={styles.intro}>
          Choose your preferred date, time, and package below.
        </p>
        <p className={styles.intro}>
          We look forward to capturing your memories!
        </p>
      </header>

      {/* Booking Form */}
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
            maxWidth: "600px",
            margin: "20px auto",
          }}
          role="alert"
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

      {/* Footer */}
      <footer className={styles.footer}>
        <div>
          &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
          reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2 style={{ marginBottom: "0.5rem" }}>Contact Information</h2>
          <p>
            <strong>Owners:</strong> Steve and Gary
          </p>
          <p>
            <strong>Phone Number:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Business Hours:</strong>
          </p>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginBottom: "1rem",
            }}
          >
            <li>Monday - Friday: 10:00am to 6:00pm</li>
            <li>Saturday: 11:00am to 3:00pm</li>
            <li>Closed Sunday and Holidays</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@retrophotoshop.com"
              style={{ color: "#ffd700" }}
            >
              contact@retrophotoshop.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
