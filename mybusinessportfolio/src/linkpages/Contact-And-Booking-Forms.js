import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function ContactAndBookingForms() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleContactDropdown = () =>
    setContactDropdownOpen(!contactDropdownOpen);
  const toggleBookingDropdown = () =>
    setBookingDropdownOpen(!bookingDropdownOpen);

  return (
    <div className="container-fluid">
      {/* Responsive Navbar */}
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
          {/* Home Link */}
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

      {/* Page Title */}
      <h1 className={styles["page-header"]}>Contact and Booking Forms</h1>
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

      {/* Section List */}
      <div
        className={styles.section}
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {[
          {
            title: "Simple Contact Form",
            desc: "Basic contact with name, email, and message.",
            route: "/simple-contact-form",
          },
          {
            title: "Student Inquiry Contact Form",
            desc: "For student inquiries: student and parent info, subject, teacher's name, message.",
            route: "/student-inquiry-form",
          },
          {
            title: "HR Contact Form",
            desc: "Contact HR with name, employee ID, subject, and message.",
            route: "/hr-contact-form",
          },
          {
            title: "Simple Booking Form",
            desc: "Book with name, email, and message.",
            route: "/simple-booking-form",
          },
          {
            title: "Ski Resort Cabin Booking",
            desc: "Book a ski resort cabin with family size, days, member number, and contact info.",
            route: "/ski-resort-cabin-booking-form",
          },
          {
            title: "Dance Lessons Booking",
            desc: "Book dance lessons with participant names, number of lessons, phone, and email.",
            route: "/dance-lessons-booking-form",
          },
        ].map((form, index) => (
          <div key={index}>
            <h3 className={styles.subheader}>{form.title}</h3>
            <p>{form.desc}</p>
            <button
              className={styles["custom-button"]}
              onClick={() => navigate(form.route)}
            >
              Go to {form.title}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        <div>
          &copy; {new Date().getFullYear()} Corinne Padilla — All rights
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
            <strong>Contact Person:</strong> Corinne Padilla
          </p>
          <p>
            <strong>Contact Number:</strong> 209.446.9209
          </p>
          <p>
            <strong>Office Hours:</strong>
          </p>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginBottom: "1rem",
            }}
          >
            <li>Monday - Friday: 9:00am to 7:00pm</li>
            <li>Closed for lunch: 1:00pm to 2:00pm</li>
            <li>Closed Wednesdays</li>
            <li>Saturday: 10:00am to 4:00pm</li>
            <li>Sunday: Closed</li>
            <li>Holidays: Closed</li>
          </ul>
          <p>
            <strong>Email Address:</strong>{" "}
            <a
              href="mailto:corinnepadilla@yahoo.com"
              style={{ color: "#f8f5f2" }}
            >
              corinnepadilla@yahoo.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
