import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import DesignCard from "../components/DesignCard";

/* Images from WR-Link-Images */
import oldauto from "../wrlinkimages/old-auto.jpg";
import newauto7 from "../wrlinkimages/new-auto7.jpg";

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
            <Link to="/wr-old-website-design" className={styles.navItem}>
              Old
            </Link>
          </li>
          <li>
            <Link to="/wr-new-website-design" className={styles.navItem}>
              New
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className={styles.pageHeader}>Tony's Auto Repair Shop</h1>

      <DesignCard
        title="Original Design | 1978 – HTML & CSS"
        description="This version was created using only HTML and CSS. It has a basic layout, fixed-width design, and limited mobile support."
        image={oldauto}
        altText="Screenshot of Tony's original 1978 auto repair website design"
        linkTo="/wr-old-website-design"
        buttonText="View Original HTML Site"
      />

      <DesignCard
        title="Redesigned Version | 2025 – React, JS, HTML, CSS"
        description=" This version uses React components, modular CSS for scoped styling, and responsive design using Flexbox and media queries. It is optimized for mobile devices and includes improved accessibility features such as semantic HTML and ARIA support."
        image={newauto7}
        altText="Screenshot of Tony's 2025 auto repair website redesign"
        linkTo="/wr-new-website-design"
        buttonText="View React Redesign Version"
      />

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
        reserved.
      </footer>
    </div>
  );
}

export default WebsiteRedesign;
