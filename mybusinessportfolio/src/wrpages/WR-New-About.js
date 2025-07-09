import React from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import shopImg from "../wrlinkimages/old-shop2.jpg";
import workerImg from "../wrlinkimages/old-worker3.jpg";

import { useState } from "react";

function WRNewAbout() {
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
        <h2 className={styles.subheader}>Established | 1978</h2>
        <p>Welcome to Tony's Auto Repair Shop — where quality meets honesty!</p>
        <p>
          Many of our customers keep coming back because they know good work
          means a safe ride.
        </p>
        <p>
          Come on down and meet our friendly staff — experience service that
          goes the extra mile, at prices that won’t break the bank!
        </p>

        <div className={styles.screenshotContainer}>
          <div className={styles.imageWrapper}>
            <img src={shopImg} alt="Tony working on a car" />
            <span className={styles.caption}>
              Tony's Auto Repair Shop | Established 1978
            </span>
          </div>
          <div className={styles.imageWrapper}>
            <img src={workerImg} alt="Tony Auto, Founder and Owner" />
            <span className={styles.caption}>
              Tony Auto | Founder and Owner
            </span>
          </div>
        </div>

        <p>
          I’m not just one of the mechanics... I’m Tony, founder and proud owner
          of Tony's Auto Repair Shop.
        </p>
        <p className={styles.slogan}>
          “Driven by trust, powered by experience!”
        </p>
      </section>

      <div className={styles.slogan2}>
        <h4>We offer a variety of auto repair services:</h4>

        <div className={styles.serviceLists}>
          <ul>
            <li>Car Engine Repair</li>
            <li>Brake Replacement</li>
            <li>Oil Change</li>
            <li>Tire Servie</li>
          </ul>
          <ul>
            <li>Minor Body Repair</li>
            <li>Fluid Topping with Fluid Check</li>
            <li>Undercarage Sealant</li>
            <li>Protective Top Paint Coating</li>
          </ul>
          <ul>
            <li>Payment Plans</li>
            <li>Income-Based Loans</li>
            <li>Contracted Personal Loans</li>
            <li>One-Time Payment Deferment</li>
          </ul>
        </div>

        <h5>Check out our Gallery page located in the navbar!</h5>
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
      </div>

      <footer className={styles.footer}>
        &copy; 1978 Tony's Auto Repair Shop — All rights reserved.
      </footer>
    </div>
  );
}

export default WRNewAbout;
