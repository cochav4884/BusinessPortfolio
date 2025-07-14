import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

function WROldWebsiteDesign() {
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
            <Link to="/wr-old-website-design" className={styles.navItem}>
              Old
            </Link>
          </li>
          <li>
            <Link to="/wr-new-about" className={styles.navItem}>
              New
            </Link>
          </li>
        </ul>
      </nav>

      <p>
        Please be advised: The forms presented herein serve solely as examples,
        and the contact information displayed in the footers is for illustrative
        purposes only. Accurate contact details are available exclusively on the
        Home page. You may also navigate back to the original website at any
        time by clicking the website title in the navigation bar, where you can
        access the official Contact page.
      </p>

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
            layout, fixed-width design, and limited mobile support.
          </p>

          {/* New screenshots container */}
          <div className={styles.screenshotContainer}>
            <div className={styles.imageWrapper}>
              <a
                href={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Home.jpeg`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlarge screenshot of Home Page"
              >
                <img
                  src={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Home.jpeg`}
                  alt="Screen Shot of WR-Old-Website-Design's Home Page"
                />
              </a>
            </div>
            <div className={styles.imageWrapper}>
              <a
                href={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Gallery.jpeg`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlarge screenshot of Gallery Page"
              >
                <img
                  src={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Gallery.jpeg`}
                  alt="Screen Shot of WR-Old-Website-Design's Gallery Page"
                />
              </a>
            </div>
            <div className={styles.imageWrapper}>
              <a
                href={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Gallery2.jpeg`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlarge screenshot of Gallery Page 2"
              >
                <img
                  src={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Gallery2.jpeg`}
                  alt="Screen Shot of WR-Old-Website-Design's Gallery Page 2"
                />
              </a>
            </div>
            <div className={styles.imageWrapper}>
              <a
                href={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Contact.jpeg`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enlarge screenshot of Contact Page"
              >
                <img
                  src={`${process.env.REACT_APP_CLOUDFRONT_URL}/cloudfrontwrlinkimages/screen-shot-Contact.jpeg`}
                  alt="Screen Shot of WR-Old-Website-Design's Contact Page"
                />
              </a>
            </div>
          </div>

          <Link to="/website-redesign" className={styles.customButton}>
            ← Back to Redesign Overview
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        <div>
          &copy; {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
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
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginBottom: "1rem",
            }}
          >
            <li>Monday - Friday: 8:00am to 5:00pm</li>
            <li>Saturday: 12:00pm to 4:00pm</li>
            <li>Closed Sunday and Holidays</li>
          </ul>
          <p>
            <strong>Email Address:</strong>{" "}
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
