// src/pages/WROldWebsiteDesign.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import LogoImage from "../components/LogoImage";


function WROldWebsiteDesign() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);


  return (
    <div className={styles.container}>
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
            <Link to="../WR-Old-About" className={styles.navItem}>
              Old About Page
            </Link>
          </li>
          <li>
            <Link to="../WR-Old-Gallery" className={styles.navItem}>
              Old Gallery Page
            </Link>
          </li>
          <li>
            <Link to="../WR-Old-Contact" className={styles.navItem}>
              Old Contact Page
            </Link>
          </li>
        </ul>
      </nav>

      <p>Please be advised: ... click the title to return to Contact page.</p>
      <p className={styles.slogan}>
        "Every great upgrade starts with a classic foundation."
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheader}>
          Original Design | 1978 – HTML & CSS
        </h2>
        <div className={styles.card}>
          <p>
            This version was created using only HTML and CSS. It has a basic
            layout...
          </p>

          <Link to="/website-redesign" className={styles.customButton}>
            ← Back to Redesign Overview
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <LogoImage />
        </p>
        <div>
          © {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
          reserved.
        </div>
        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2>Contact Information</h2>
          <p>
            <strong>Contact Person:</strong> Tony Auto
          </p>
          <p>
            <strong>Contact Number:</strong> (023) 456-7890
          </p>
          <p>
            <strong>Business Hours:</strong>
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>Mon–Fri: 8 am–5 pm</li>
            <li>Sat: 12 pm–4 pm</li>
            <li>Closed Sun & Holidays</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:TonyAuto@Example.com" style={{ color: "#ffd700" }}>
              TonyAuto@Example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WROldWebsiteDesign;
