import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.container}>
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
      <h1 className={styles.pageTitle2}>Contact Us</h1>
      <p className={styles.intro}>
        Got a question or comment? Reach out and we'll get back to you soon!
      </p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
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

        <label htmlFor="subject" className={styles.formLabel}>
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={styles.formInput}
          placeholder="Subject"
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
      </form>
      {/* Footer*/}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
        reserved.
      </footer>
    </div>
  );
}
