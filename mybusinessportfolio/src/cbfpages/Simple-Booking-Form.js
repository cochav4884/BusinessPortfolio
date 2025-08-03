import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

import simpleBookingFormBg from "../linkimages/Simple-Booking-Form.jpg"; // adjust path and filename as needed

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function SimpleBookingForm() {
  const [simpleBooking, setSimpleBooking] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Simple Booking Form:", simpleBooking);
    alert("Submitted Simple Booking Form! Check console for data.");

    // ✅ Clear form fields
    setSimpleBooking({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid">
      {/* Navbar with dropdowns */}
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
          {/* Home */}
          <li>
            <Link to="/contact-and-booking-forms" className={styles.navItem}>
              Home
            </Link>
          </li>

          {/* Contact Forms Dropdown */}
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

          {/* Booking Forms Dropdown */}
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

      {/* Page Content */}
      <h1 className={styles.pageHeader}>Contact and Booking Forms</h1>
      <p>
        {" "}
        Please Note: The forms presented on this site are for demonstration
        purposes only, and the contact information shown in the footer is
        fictitious and intended solely for illustrative use. For accurate and
        current contact details, please refer to the original website's Landing
        Page. You may return to that page at any time by clicking the site title
        in the navigation bar. Once in the official website, you will find a
        link to the official Contact Me page at: www.mompopshopwebdesign.com.
      </p>

      <section
        className={styles.simpleBookingFormBackground}
        style={{ backgroundImage: `url(${simpleBookingFormBg})` }}
      >
        <div className={styles.simpleBookingFormOverlay}>
          <h2 className={styles.subheader}>Simple Booking Form</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              placeholder="Name"
              value={simpleBooking.name}
              onChange={(e) =>
                setSimpleBooking((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={simpleBooking.email}
              onChange={(e) =>
                setSimpleBooking((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <textarea
              placeholder="Message"
              value={simpleBooking.message}
              onChange={(e) =>
                setSimpleBooking((prev) => ({
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

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        <div>
          &copy; {new Date().getFullYear()} Your Service Company — All rights
          reserved.
        </div>

        <div
          style={{
            marginTop: "1rem",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          <h2>Contact Information</h2>
          <p>
            <strong>Booking Coordinator:</strong> Alex Johnson
          </p>
          <p>
            <strong>Phone:</strong> (555) 246-8100
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
            <li>Monday - Friday: 9:00am to 6:00pm</li>
            <li>Saturday: 10:00am to 2:00pm</li>
            <li>Closed Sundays and Holidays</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:booking@yourservice.com"
              style={{ color: "#f0f4f8" }}
            >
              booking@yourservice.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
