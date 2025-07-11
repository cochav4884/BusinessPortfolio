import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

export default function StudentInquiryForm() {
  const [studentContact, setStudentContact] = useState({
    studentName: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    subject: "",
    teacherName: "",
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
    console.log("Submitting Student Inquiry Contact Form:", studentContact);
    alert("Submitted Student Inquiry Contact Form! Check console for data.");
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

      <section className={styles.section}>
        <h2 className={styles.subheader}>Student Inquiry Contact Form</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Student Name"
            value={studentContact.studentName}
            onChange={(e) =>
              setStudentContact((prev) => ({
                ...prev,
                studentName: e.target.value,
              }))
            }
            required
          />
          <input
            type="text"
            placeholder="Parent Name"
            value={studentContact.parentName}
            onChange={(e) =>
              setStudentContact((prev) => ({
                ...prev,
                parentName: e.target.value,
              }))
            }
            required
          />
          <input
            type="tel"
            placeholder="Parent Phone Number"
            value={studentContact.parentPhone}
            onChange={(e) =>
              setStudentContact((prev) => ({
                ...prev,
                parentPhone: e.target.value,
              }))
            }
            required
          />
          <input
            type="email"
            placeholder="Parent Email"
            value={studentContact.parentEmail}
            onChange={(e) =>
              setStudentContact((prev) => ({
                ...prev,
                parentEmail: e.target.value,
              }))
            }
            required
          />
          <select
            value={studentContact.subject}
            onChange={(e) =>
              setStudentContact((prev) => ({
                ...prev,
                subject: e.target.value,
              }))
            }
            required
          >
            <option value="" disabled>
              Select Subject (High School Class)
            </option>
            <option value="Algebra">Algebra</option>
            <option value="Biology">Biology</option>
            <option value="English Literature">English Literature</option>
            <option value="History">History</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          <input
            type="text"
            placeholder="Teacher's Name"
            value={studentContact.teacherName}
            onChange={(e) =>
              setStudentContact((prev) => ({
                ...prev,
                teacherName: e.target.value,
              }))
            }
            required
          />
          <textarea
            placeholder="Message"
            value={studentContact.message}
            onChange={(e) =>
              setStudentContact((prev) => ({
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
      </section>

      {/* ✅ Footer */}
      <footer className={styles.footer}>
        <div>
          &copy; {new Date().getFullYear()} Springfield School District — All
          rights reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2>Contact Information</h2>
          <p>
            <strong>District Office:</strong> Springfield School District
          </p>
          <p>
            <strong>Phone:</strong> (555) 987-6543
          </p>
          <p>
            <strong>Office Hours:</strong>
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>Monday - Friday: 7:30am to 4:30pm</li>
            <li>Closed Saturday and Sunday</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:studentservices@springfieldschools.edu"
              style={{ color: "#f0f4f8" }}
            >
              studentservices@springfieldschools.edu
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
