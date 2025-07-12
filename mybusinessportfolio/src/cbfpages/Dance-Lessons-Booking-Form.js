import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

import danceLessonsBg from "../linkimages/Dance-form.jpg";

export default function DanceLessonsBookingForm() {
  const [danceBooking, setDanceBooking] = useState({
    participant1: "",
    participant2: "",
    lessons: "",
    phone: "",
    email: "",
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
  };

  return (
    <div className="container-fluid">
      {/* Dropdown Navbar */}
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

      {/* Page Header & Form */}
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
        className={styles.danceLessonsBackground}
        style={{ backgroundImage: `url(${danceLessonsBg})` }}
      >
        <div className={styles.danceLessonsOverlay}>
          <h2 className={styles.subheader}>Dance Lessons Booking</h2>
          <form
            onSubmit={(e) =>
              handleSubmit(e, "Dance Lessons Booking", danceBooking)
            }
            noValidate
          >
            <input
              type="text"
              placeholder="Participant 1 Name"
              value={danceBooking.participant1}
              onChange={(e) =>
                setDanceBooking((prev) => ({
                  ...prev,
                  participant1: e.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              placeholder="Participant 2 Name"
              value={danceBooking.participant2}
              onChange={(e) =>
                setDanceBooking((prev) => ({
                  ...prev,
                  participant2: e.target.value,
                }))
              }
            />
            <input
              type="number"
              placeholder="Number of Lessons"
              min="1"
              value={danceBooking.lessons}
              onChange={(e) =>
                setDanceBooking((prev) => ({
                  ...prev,
                  lessons: e.target.value,
                }))
              }
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={danceBooking.phone}
              onChange={(e) =>
                setDanceBooking((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={danceBooking.email}
              onChange={(e) =>
                setDanceBooking((prev) => ({
                  ...prev,
                  email: e.target.value,
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
        <div>
          &copy; {new Date().getFullYear()} Rhythm & Grace Dance Studio — All
          rights reserved.
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
            <strong>Studio Manager:</strong> Emily Carter
          </p>
          <p>
            <strong>Phone:</strong> (555) 333-2244
          </p>
          <p>
            <strong>Studio Hours:</strong>
          </p>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginBottom: "1rem",
            }}
          >
            <li>Monday - Friday: 9:00am to 7:00pm</li>
            <li>Saturday: 10:00am to 3:00pm</li>
            <li>Closed Sundays</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@rhythmandgrace.com"
              style={{ color: "#f8f5f2" }}
            >
              info@rhythmandgrace.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
