// src/linkpages/MultiPageWebsite.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

export default function MultiPageWebsite() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.navTitle}>Retro Photo Shop</h1>
        <ul className={styles.navList}>
          <li>
            <Link to="/multi-page-website">Home</Link>
          </li>
          <li>
            <Link to="/mpw-gallery-page">Gallery</Link>
          </li>
          <li>
            <Link to="/mpw-booking-page">Booking</Link>
          </li>
          <li>
            <Link to="/mpw-contact-page">Contact</Link>
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

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
        reserved.
      </footer>
    </div>
  );
}
