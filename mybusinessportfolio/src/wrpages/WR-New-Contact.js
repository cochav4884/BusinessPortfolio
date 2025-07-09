import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

function WRNewContact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
            <Link to="/wr-new-contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <section className={styles.section}>
        <h2 className={styles.subheader}>Contact Information</h2>

        <p>
          <strong>Contact Person:</strong> Tony Auto
        </p>
        <p>
          <strong>Contact Number:</strong> (023) 456-7890
        </p>
        <p>
          <strong>Business Hours:</strong>
        </p>
        <ul>
          <li>Monday - Friday: 8:00am to 5:00pm</li>
          <li>Saturday: 12:00pm to 4:00pm</li>
          <li>Closed Sunday and Holidays</li>
        </ul>
        <p>
          <strong>Email Address:</strong>{" "}
          <a href="mailto:TonyAuto@Example.com">TonyAuto@Example.com</a>
        </p>

        <p className={styles.slogan}>
          “We don't just fix cars—we keep your wheels rollin'!”
        </p>
      </section>

      <footer className={styles.footer}>
        &copy; 1978 Tony's Auto Repair Shop — All rights reserved.
      </footer>
    </div>
  );
}

export default WRNewContact;
