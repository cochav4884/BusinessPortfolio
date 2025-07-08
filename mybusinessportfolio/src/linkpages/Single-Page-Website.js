// src/linkpages/SinglePageWebsite.js
import React from "react";
import styles from "../linkstyles/Single-Page-Website.module.css";

export default function SinglePageWebsite() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <h1 className={styles.navTitle}>Timeless Treasures Antiques</h1>
        <ul className={styles.navList}>
          <li>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>
        </ul>
      </nav>
      <header className={styles.header}>
        <h1 className={styles.title}>Timeless Treasures Antiques</h1>
        <p className={styles.tagline}>
          Discover unique vintage finds & classic collectibles
        </p>
      </header>

      {/* Section Container */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <p className={styles.paragraph}>
          At <span className={styles.highlight}>Timeless Treasures</span>, we
          specialize in carefully curated antiques from around the world...
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Collections</h2>
        <ul className={styles.list}>
          <li>Victorian Era Furniture</li>
          <li>Art Deco Jewelry</li>
          <li>Classic Porcelain & Ceramics</li>
          <li>Retro Home Decor</li>
          <li>Rare Vintage Books</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Visit Us</h2>
        <p className={styles.paragraph}>
          Located in the heart of downtown...
          <br />
          <strong>Address:</strong> 123 Heritage Lane, Oldtown
          <br />
          <strong>Hours:</strong> Mon-Fri: 10am - 6pm | Sat: 11am - 4pm
          <br />
          <strong>Contact:</strong> (555) 123-4567 |{" "}
          <a className={styles.link} href="mailto:info@timelesstreasures.com">
            info@timelesstreasures.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Timeless Treasures Antiques — All
        rights reserved.
      </footer>
    </div>
  );
}
