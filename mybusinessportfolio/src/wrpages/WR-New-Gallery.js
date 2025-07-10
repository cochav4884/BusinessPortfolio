import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";
import employeeData from "../linkdata/WRData";

import job1 from "../wrlinkimages/new-worker6.jpg";
import job2 from "../wrlinkimages/auto-brake.jpg";
import job3 from "../wrlinkimages/auto-oil.jpg";
import job4 from "../wrlinkimages/old-worker.jpg";
import job5 from "../wrlinkimages/auto-paint.jpg";
import job6 from "../wrlinkimages/new-worker16.jpg";

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

      <p className={styles.slogan}>
        "The Skilled Team Behind Every Smooth Ride”
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheader}>Meet Our Team</h2>
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

      <p className={styles.slogan}>“Serving Trust, One Car at a Time!”</p>

      <section className={styles.section}>
        <h2 className={styles.subheader}>Work in Progress</h2>
        <div className={styles.screenshotContainer}>
          <div className={styles.imageWrapper}>
            <img src={job1} alt="Car Transmission Repair" />
            <div className={styles.caption}>Car Transmission Repair</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={job2} alt="Brake Replacement" />
            <div className={styles.caption}>Brake Replacement</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={job3} alt="Oil Change" />
            <div className={styles.caption}>Oil Change</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={job4} alt="Tire Service" />
            <div className={styles.caption}>Tire Service</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={job5} alt="Paint & Body Work" />
            <div className={styles.caption}>Paint & Body Work</div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={job6} alt="Diagnostics" />
            <div className={styles.caption}>Diagnostics</div>
          </div>
        </div>
      </section>

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

export default WRNewGallery;
