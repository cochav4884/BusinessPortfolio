import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

export default function MultiPageWebsite() {
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

      <header className={styles.header}>
        <h1>Retro Photo Shop</h1>
        <p className={styles.tagline}>
          Welcome to our vintage-inspired photo studio. We capture timeless
          moments with a nostalgic twist.
        </p>
      </header>

      {/* Separate container for features section */}
      <div className={styles.featuresContainer}>
        <section className={styles.features}>
          <div className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Classic Portraits</h2>
            <p className={styles.paragraph}>
              Beautifully crafted portraits that take you back in time.
            </p>
          </div>
          <div className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Photo Restoration</h2>
            <p className={styles.paragraph}>
              We restore and preserve your precious old photographs.
            </p>
          </div>
          <div className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Event Photography</h2>
            <p className={styles.paragraph}>
              Capture your special moments with our vintage style.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
        reserved.
      </footer>
    </div>
  );
}
