import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import employeeData from "../linkdata/WRData";

import job1 from "../wrlinkimages/new-worker6.jpg";
import job2 from "../wrlinkimages/new-worker2.jpg";
import job3 from "../wrlinkimages/old-worker2.jpg";
import job4 from "../wrlinkimages/old-worker.jpg";

function WRNewGallery() {
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
        <h2 className={styles.subheader}>Meet Our Team</h2>
        <p className={styles.slogan}>
          “Serving Trust, One Car at a Time — Since '78!”
        </p>

        <div className={styles.flipCardContainer}>
          {employeeData.map((member, index) => (
            <div className={styles.flipCard} key={index}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.flipCardBack}>
                  <h3>{member.name}</h3>
                  <h4>{member.title}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheader}>Work in Progress</h2>
        <div className={styles.screenshotContainer}>
          <img src={job1} alt="Car Engine Repair" />
          <img src={job2} alt="Brake Replacement" />
          <img src={job3} alt="Oil Change" />
          <img src={job4} alt="Tire Service" />
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; 2025 Tony's Auto Repair Shop — All rights reserved.
      </footer>
    </div>
  );
}

export default WRNewGallery;
