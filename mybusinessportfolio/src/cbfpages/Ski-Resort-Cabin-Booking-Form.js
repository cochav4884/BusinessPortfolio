import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Contact-And-Booking-Forms.module.css";

import tamarackformBg from "../linkimages/tamarack-form.jpg";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function SkiResortCabinBookingForm() {
  const [skiBooking, setSkiBooking] = useState({
    name: "",
    phone: "",
    email: "",
    adults: "",
    children: "",
    days: "",
    memberNumber: "",
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

    // ✅ Clear the form after submission
    setSkiBooking({
      name: "",
      phone: "",
      email: "",
      adults: "",
      children: "",
      days: "",
      memberNumber: "",
    });
  };

  return (
    <div className="container-fluid">
      {/* Navbar Dropdown */}
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
        className={styles.tamarackformBackground}
        style={{ backgroundImage: `url(${tamarackformBg})` }}
      >
        <div className={styles.studentInquiryOverlay}>
          <h2 className={styles.subheader}>Ski Resort Cabin Booking</h2>
          <form
            onSubmit={(e) =>
              handleSubmit(e, "Ski Resort Cabin Booking", skiBooking)
            }
            noValidate
          >
            <input
              type="text"
              placeholder="Name"
              value={skiBooking.name}
              onChange={(e) =>
                setSkiBooking((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={skiBooking.phone}
              onChange={(e) =>
                setSkiBooking((prev) => ({ ...prev, phone: e.target.value }))
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={skiBooking.email}
              onChange={(e) =>
                setSkiBooking((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <input
              type="number"
              placeholder="Number of Adults"
              min="0"
              value={skiBooking.adults}
              onChange={(e) =>
                setSkiBooking((prev) => ({ ...prev, adults: e.target.value }))
              }
              required
            />
            <input
              type="number"
              placeholder="Number of Children (17 and under)"
              min="0"
              value={skiBooking.children}
              onChange={(e) =>
                setSkiBooking((prev) => ({ ...prev, children: e.target.value }))
              }
              required
            />
            <input
              type="number"
              placeholder="Number of Days"
              min="1"
              value={skiBooking.days}
              onChange={(e) =>
                setSkiBooking((prev) => ({ ...prev, days: e.target.value }))
              }
              required
            />
            <input
              type="text"
              placeholder="Member Number (optional)"
              value={skiBooking.memberNumber}
              onChange={(e) =>
                setSkiBooking((prev) => ({
                  ...prev,
                  memberNumber: e.target.value,
                }))
              }
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
          &copy; {new Date().getFullYear()} Tamarack Ski Resort — All rights
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
            <strong>Reservations Desk:</strong> Tamarack Ski Resort
          </p>
          <p>
            <strong>Phone:</strong> (555) 765-4321
          </p>
          <p>
            <strong>Reservation Hours:</strong>
          </p>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginBottom: "1rem",
            }}
          >
            <li>Monday - Sunday: 8:00am to 8:00pm</li>
            <li>Closed Major Holidays</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:reservations@tamrackski.com"
              style={{ color: "#f8f5f2" }}
            >
              reservations@tamrackski.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
