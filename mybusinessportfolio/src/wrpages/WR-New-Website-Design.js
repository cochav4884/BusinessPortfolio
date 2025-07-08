import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

function WRNewWebsiteDesign() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {/* Responsive Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <a href="/">Tony's Auto Repair Shop</a>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
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

      <section className={styles.section}>
        <h2 className={styles.subheader}>
          Redesigned Version | 2025 – React, JS, HTML, CSS
        </h2>
        <div className={styles.card}>
          <p>
            This updated version was built with React and modern CSS, including
            responsive design, improved accessibility, and a cleaner layout.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
        reserved.
      </footer>
    </div>
  );
}

export default WRNewWebsiteDesign;
