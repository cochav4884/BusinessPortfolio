import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    console.log("Contact form submitted:", formData);
    alert("Message submitted! Check the console for details.");

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <a href="/" style={{ color: "#cc0000", textDecoration: "none" }}>
            Retro Photo Shop
          </a>
        </h1>
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

      <main>
        <header className={styles.header} style={{ marginBottom: "2rem" }}>
          <h1>Contact Us</h1>
          <p>
            {" "}
            Please Note: The forms presented on this site are for demonstration
            purposes only, and the contact information shown in the footer is
            fictitious and intended solely for illustrative use. For accurate
            and current contact details, please refer to the original website's
            Landing Page. You may return to that page at any time by clicking
            the site title in the navigation bar. Once in the official website,
            you will find a link to the official Contact Me page at:
            www.mompopshopwebdesign.com.
          </p>
          <p className={styles.intro}>
            Got a question or comment? Reach out and we'll get back to you soon!
          </p>
        </header>

        <section>
          <form
            onSubmit={handleSubmit}
            className={styles.contactForm}
            noValidate
          >
            <label htmlFor="name" className={styles.formLabel}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className={styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone" className={styles.formLabel}>
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.formInput}
              placeholder="(optional) Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="subject" className={styles.formLabel}>
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.formInput}
              placeholder="Subject (optional)"
              value={formData.subject}
              onChange={handleChange}
            />

            <label htmlFor="message" className={styles.formLabel}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formInput}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.button}>
              Send Message
            </button>

            {status === "success" && (
              <p style={{ color: "green", marginTop: "1rem" }}>
                Thank you for your message! We'll get back to you shortly.
              </p>
            )}

            {status === "error" && (
              <p style={{ color: "red", marginTop: "1rem" }}>
                {errorMsg || "Please fill in all required fields."}
              </p>
            )}
          </form>
        </section>
      </main>

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
              style={{ color: "#cc0000" }}
            >
              contact@retrophotoshop.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
