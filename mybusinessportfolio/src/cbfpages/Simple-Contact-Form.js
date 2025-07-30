import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

import simpleContactFormBg from "../linkimages/Simple-Contact-Form.jpg";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function ContactAndBookingForms() {
  const [simpleContact, setSimpleContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleContactDropdown = () =>
    setContactDropdownOpen(!contactDropdownOpen);
  const toggleBookingDropdown = () =>
    setBookingDropdownOpen(!bookingDropdownOpen);

  const handleSubmit = (e, formName, data) => {
    e.preventDefault();
    console.log(`Submitting ${formName}`, data);
    alert(`Submitted ${formName}! Check console for data.`);

    // ✅ Clear the form inputs
    setSimpleContact({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid">
      {/* ✅ Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.brandLink}>
            Contact & Booking Forms
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
            <Link to="/contact-and-booking-forms" className={styles.navItem}>
              Home
            </Link>
          </li>

          {/* Contact Dropdown */}
          <li className={styles.dropdown}>
            <button
              type="button"
              onClick={toggleContactDropdown}
              className={styles.dropdownToggle}
              aria-expanded={contactDropdownOpen}
            >
              Contact Forms ▼
            </button>
            <ul
              className={`${styles.dropdownMenu} ${
                contactDropdownOpen ? styles.showDropdown : ""
              }`}
            >
              <li>
                <Link to="/simple-contact-form" className={styles.dropdownItem}>
                  Simple
                </Link>
              </li>
              <li>
                <Link
                  to="/student-inquiry-form"
                  className={styles.dropdownItem}
                >
                  Student Inquiry
                </Link>
              </li>
              <li>
                <Link to="/hr-contact-form" className={styles.dropdownItem}>
                  HR Contact
                </Link>
              </li>
            </ul>
          </li>

          {/* Booking Dropdown */}
          <li className={styles.dropdown}>
            <button
              type="button"
              onClick={toggleBookingDropdown}
              className={styles.dropdownToggle}
              aria-expanded={bookingDropdownOpen}
            >
              Booking Forms ▼
            </button>
            <ul
              className={`${styles.dropdownMenu} ${
                bookingDropdownOpen ? styles.showDropdown : ""
              }`}
            >
              <li>
                <Link to="/simple-booking-form" className={styles.dropdownItem}>
                  Simple
                </Link>
              </li>
              <li>
                <Link
                  to="/ski-resort-cabin-booking-form"
                  className={styles.dropdownItem}
                >
                  Ski Resort Cabin
                </Link>
              </li>
              <li>
                <Link
                  to="/dance-lessons-booking-form"
                  className={styles.dropdownItem}
                >
                  Dance Lessons
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* ✅ Page Header */}
      <h1 className={styles.pageHeader}>Contact and Booking Forms</h1>
      <p>
        {" "}
        Please be advised: The forms presented herein serve solely as examples,
        and the contact information displayed in the footers is for illustrative
        purposes only. Accurate contact details are available exclusively on the
        Home page. You may also navigate back to the original website at any
        time by clicking the website title in the navigation bar, where you can
        access the official Contact page.
      </p>

      {/* ✅ Simple Contact Form */}
      <section
        className={styles.simpleContactFormBg}
        style={{ backgroundImage: `url(${simpleContactFormBg})` }}
      >
        <div className={styles.simpleContactFormOverlay}>
          <h2 className={styles.subheader}>Simple Contact Form</h2>
          <form
            onSubmit={(e) =>
              handleSubmit(e, "Simple Contact Form", simpleContact)
            }
            noValidate
          >
            <input
              type="text"
              placeholder="Name"
              value={simpleContact.name}
              onChange={(e) =>
                setSimpleContact((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={simpleContact.email}
              onChange={(e) =>
                setSimpleContact((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <textarea
              placeholder="Message"
              value={simpleContact.message}
              onChange={(e) =>
                setSimpleContact((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              required
            />
            <button type="submit" className={styles.customButton}>
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        <div>
          &copy; {new Date().getFullYear()} Your Company Name — All rights
          reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2>Contact Information</h2>
          <p>
            <strong>Contact Person:</strong> Customer Support
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@yourcompany.com"
              style={{ color: "#f0f4f8" }}
            >
              support@yourcompany.com
            </a>
          </p>
          <p>
            <strong>Business Hours:</strong>
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>Monday - Friday: 9:00am to 6:00pm</li>
            <li>Saturday - Sunday: Closed</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
