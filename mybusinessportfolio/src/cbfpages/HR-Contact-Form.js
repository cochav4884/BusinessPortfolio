import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

import hrContactFormBg from "../linkimages/HR-form.jpg";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function HRContactForm() {
  const [hrContact, setHrContact] = useState({
    name: "",
    employeeId: "",
    subject: "",
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
    console.log("Submitting HR Contact Form:", hrContact);
    alert("Submitted HR Contact Form! Check console for data.");

    // ✅ Clear the form inputs
    setHrContact({
      name: "",
      employeeId: "",
      subject: "",
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

      {/* ✅ Page Header & Form */}
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

      <section
        className={styles.hrContactFormBackground}
        style={{ backgroundImage: `url(${hrContactFormBg})` }}
      >
        <div className={styles.hrContactFormOverlay}>
          <h2 className={styles.subheader}>HR Contact Form</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              placeholder="Name"
              value={hrContact.name}
              onChange={(e) =>
                setHrContact((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <input
              type="text"
              placeholder="Employee ID"
              value={hrContact.employeeId}
              onChange={(e) =>
                setHrContact((prev) => ({
                  ...prev,
                  employeeId: e.target.value,
                }))
              }
              required
            />
            <select
              value={hrContact.subject}
              onChange={(e) =>
                setHrContact((prev) => ({ ...prev, subject: e.target.value }))
              }
              required
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="Schedule">Schedule</option>
              <option value="Holiday Pay">Holiday Pay</option>
              <option value="Request Vacation">Request Vacation</option>
              <option value="Request Medical Leave">
                Request Medical Leave
              </option>
              <option value="Complaint">Complaint</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              placeholder="Message"
              value={hrContact.message}
              onChange={(e) =>
                setHrContact((prev) => ({ ...prev, message: e.target.value }))
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
          &copy; {new Date().getFullYear()} Acme Corporation — All rights
          reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2>Human Resources Department</h2>
          <p>
            <strong>Contact Person:</strong> Jane Smith, HR Manager
          </p>
          <p>
            <strong>Phone:</strong> (555) 321-7890
          </p>
          <p>
            <strong>Office Hours:</strong>
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>Monday - Friday: 9:00am to 6:00pm</li>
            <li>Closed Saturday and Sunday</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hr@acmecorp.com" style={{ color: "#f0f4f8" }}>
              hr@acmecorp.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
