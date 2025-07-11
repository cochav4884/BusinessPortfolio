import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import DesignCard from "../components/DesignCard";

/* Images from WR-Link-Images */
import oldauto from "../wrlinkimages/old-shop2.jpg";
import newauto4 from "../wrlinkimages/new-auto4.jpg";

function WebsiteRedesign() {
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
            <Link to="/wr-new-service" className={styles.navItem}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/wr-new-contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.slogan}>
        <p>
          “Classic since 1978 — where old-school pride meets modern quality!”
        </p>
      </div>

      <p>
        {" "}
        Please be advised: The forms presented herein serve solely as examples,
        and the contact information displayed in the footers is for illustrative
        purposes only. Accurate contact details are available exclusively on the
        Home page. You may also navigate back to the original website at any
        time by clicking the website title in the navigation bar, where you can
        access the official Contact page.
      </p>

      <DesignCard
        title="Original Design | 1978 – HTML & CSS"
        description="This version was created using only HTML and CSS. It has a basic layout, fixed-width design, and limited mobile support."
        image={oldauto}
        altText="Screenshot of Tony's original 1978 auto repair website design"
        linkTo="/wr-old-website-design"
        buttonText="View HTML Website Design"
      />

      <p className={styles.slogan}>
        “We don't just fix cars—we keep your wheels rollin'!”
      </p>

      <DesignCard
        title="Redesigned Version | 2025 – React, JS, HTML, CSS"
        description=" This version uses React components, modular CSS for scoped styling, and responsive design using Flexbox and media queries. It is optimized for mobile devices and includes improved accessibility features such as semantic HTML and ARIA support."
        image={newauto4}
        altText="Screenshot of Tony's 2025 auto repair website redesign"
        linkTo="/wr-new-about"
        buttonText="View React Redesign Version"
      />

      {/* Footer */}
      <footer className={styles.footer}>
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

export default WebsiteRedesign;
