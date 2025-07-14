import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.date) newErrors.date = "Please select a preferred date.";
    if (!formData.time) newErrors.time = "Please select a preferred time.";
    if (!formData.package) newErrors.package = "Please select a package.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Log data to console
    console.log("Booking submitted:", formData);

    // Show popup alert instead of backend call
    alert("Booking successfully submitted! Check the console for details.");

    // Optionally clear form or show success message below
    setSubmitted(true);
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
        <p>
          {" "}
          Please be advised: The forms presented herein serve solely as
          examples, and the contact information displayed in the footers is for
          illustrative purposes only. Accurate contact details are available
          exclusively on the Home page. You may also navigate back to the
          original website at any time by clicking the website title in the
          navigation bar, where you can access the official Contact page.
        </p>
        <p className={styles.intro}>
          Choose your preferred date, time, and package below.
        </p>
        <p className={styles.intro}>
          We look forward to capturing your memories!
        </p>
      </header>

      {/* Booking Form or Success Message */}
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
          {errors.name && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errors.name}
            </div>
          )}

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
          {errors.email && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errors.email}
            </div>
          )}

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
          {errors.date && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errors.date}
            </div>
          )}

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
          {errors.time && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errors.time}
            </div>
          )}

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
          {errors.package && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errors.package}
            </div>
          )}

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
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
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
