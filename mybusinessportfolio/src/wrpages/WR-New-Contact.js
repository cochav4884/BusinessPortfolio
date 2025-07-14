import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

function WRNewContact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitSuccess(false);
      return;
    }

    // Log form data and show alert instead of sending to backend
    console.log("Contact form submitted:", formData);
    alert(
      "Thank you! Your message has been submitted. Check console for details."
    );

    setSubmitSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className={styles.container}>
      {/* Responsive Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.brandLink}>
            Tony's Auto Repair Shop
          </Link>
        </div>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>
            <Link to="/website-redesign" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/wr-new-about" className={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/wr-new-gallery" className={styles.navItem}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/wr-new-service" className={styles.navItem}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/wr-new-contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <p>
        {" "}
        Please be advised: The forms presented herein serve solely as examples,
        and the contact information displayed in the footers is for illustrative
        purposes only. Accurate contact details are available exclusively on the
        Home page. You may also navigate back to the original website at any
        time by clicking the website title in the navigation bar, where you can
        access the official Contact page.
      </p>

      <section className={styles.section}>
        <p className={styles.slogan}>"We listen. We respond. We care."</p>
        <h2 className={styles.subheader}>Contact Us</h2>

        <form onSubmit={handleSubmit} noValidate className={styles.contactForm}>
          <label htmlFor="name" className={styles.contactForm__label}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={
              errors.name
                ? `${styles.contactForm__input} ${styles.contactForm__errorInput}`
                : styles.contactForm__input
            }
            aria-describedby="nameError"
          />
          {errors.name && (
            <div id="nameError" style={{ color: "red" }}>
              {errors.name}
            </div>
          )}

          <label htmlFor="email" className={styles.contactForm__label}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={
              errors.email
                ? `${styles.contactForm__input} ${styles.contactForm__errorInput}`
                : styles.contactForm__input
            }
            aria-describedby="emailError"
          />
          {errors.email && (
            <div id="emailError" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}

          <label htmlFor="phone" className={styles.contactForm__label}>
            Phone (optional):
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.contactForm__input}
          />

          <label htmlFor="message" className={styles.contactForm__label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={
              errors.message
                ? `${styles.contactForm__textarea} ${styles.contactForm__errorInput}`
                : styles.contactForm__textarea
            }
            aria-describedby="messageError"
          />
          {errors.message && (
            <div id="messageError" style={{ color: "red" }}>
              {errors.message}
            </div>
          )}

          <button type="submit" className={styles.contactForm__button}>
            Send Message
          </button>

          {submitSuccess && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              Thank you! Your message has been sent.
            </p>
          )}
          {submitSuccess === false && !Object.keys(errors).length && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              Sorry, there was an error sending your message.
            </p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        <div>
          &copy; {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
          reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2>Contact Information</h2>
          <p>
            <strong>Contact Person:</strong> Tony Auto
          </p>
          <p>
            <strong>Contact Number:</strong> (023) 456-7890
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
            <li>Monday - Friday: 8:00am to 5:00pm</li>
            <li>Saturday: 12:00pm to 4:00pm</li>
            <li>Closed Sunday and Holidays</li>
          </ul>
          <p>
            <strong>Email Address:</strong>{" "}
            <a href="mailto:TonyAuto@Example.com" style={{ color: "#ffd700" }}>
              TonyAuto@Example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WRNewContact;
