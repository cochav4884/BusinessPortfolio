import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";

// Import restoration images
import restore from "../linkimages/restore.jpg";
import restore2 from "../linkimages/restore2.jpg";
import restore3 from "../linkimages/restore3.jpg";
import restore4 from "../linkimages/restore4.jpg";
import restore5 from "../linkimages/restore5.jpg";
import restore6 from "../linkimages/restore6.jpg";

// Import classic images
import classic from "../linkimages/classic.jpg";
import classic2 from "../linkimages/classic2.jpg";
import classic3 from "../linkimages/classic3.jpg";
import classic4 from "../linkimages/classic4.jpg";
import classic5 from "../linkimages/classic5.jpg";
import classic6 from "../linkimages/classic6.jpg";

// Import event images
import event from "../linkimages/event.jpg";
import event2 from "../linkimages/event2.jpg";
import event3 from "../linkimages/event3.jpg";
import event4 from "../linkimages/event4.jpg";
import event5 from "../linkimages/event5.jpg";
import event6 from "../linkimages/event6.jpg";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

export default function MultiPageWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <Link to="/" style={{ color: "#cc0000", textDecoration: "none" }}>
            Retro Photo Shop
          </Link>
        </h1>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul
          className={`${styles.navList} ${menuOpen ? styles.navListOpen : ""}`}
        >
          <li>
            <Link to="/multi-page-website" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mpw-gallery-page" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/mpw-booking-page" onClick={closeMenu}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/mpw-contact-page" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <header className={styles.header} style={{ marginBottom: "2rem" }}>
          <h1>Retro Photo Shop</h1>
          <p>
            {" "}
            Please Note: The forms presented on this site are for demonstration
            purposes only, and the contact information shown in the footer is
            fictitious and intended solely for illustrative use. For accurate
            and current contact details, please refer to the original website's
            Landing Page. You may return to that page at any time by clicking
            the site title in the navigation bar. Once in the official website,
            you will find a link to the official Contact Me page at:
            www.mompopshopwebdesign.com.
          </p>
          <p className={styles.tagline}>
            Welcome to our vintage-inspired photo studio. We capture timeless
            moments with a nostalgic twist.
          </p>
        </header>

        {/* Classic Portraits */}
        <section className={styles.featuresContainer}>
          <div className={styles.features}>
            <article className={styles.featureBox}>
              <h2 className={styles.sectionTitle}>Classic Portraits</h2>
              <p className={styles.paragraph}>
                Beautifully crafted portraits that take you back in time.
              </p>
              <div className={styles.imageGrid}>
                {[
                  classic,
                  classic2,
                  classic3,
                  classic4,
                  classic5,
                  classic6,
                ].map((img, index) => (
                  <div key={index} className={styles.imageCard2}>
                    <img
                      src={img}
                      alt={`Classic Portrait ${index + 1}`}
                      className={styles.classicImage}
                    />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Photo Restoration */}
        <section className={styles.featuresContainer}>
          <article className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Photo Restoration</h2>
            <p className={styles.paragraph}>
              We restore and preserve your precious old photographs.
            </p>
            <div className={styles.imageGrid}>
              {[restore, restore2, restore3, restore4, restore5, restore6].map(
                (img, index) => (
                  <div key={index} className={styles.imageCard}>
                    <img src={img} alt={`Restoration Example ${index + 1}`} />
                  </div>
                )
              )}
            </div>
          </article>
        </section>

        {/* Event Photography */}
        <section className={styles.featuresContainer}>
          <article className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Event Photography</h2>
            <p className={styles.paragraph}>
              Capture your special moments with our vintage style.
            </p>
            <div className={styles.imageGrid}>
              {[event, event2, event3, event4, event5, event6].map(
                (img, index) => (
                  <div key={index} className={styles.imageCard}>
                    <img src={img} alt={`Restoration Example ${index + 1}`} />
                  </div>
                )
              )}
            </div>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        <div>
          &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
          reserved.
        </div>

        <div
          style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
        >
          <h2 style={{ marginBottom: "0.5rem" }}>Contact Information</h2>
          <p>
            <strong>Owners:</strong> Steve and Gary
          </p>
          <p>
            <strong>Phone Number:</strong> (555) 123-4567
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
            <li>Monday - Friday: 10:00am to 6:00pm</li>
            <li>Saturday: 11:00am to 3:00pm</li>
            <li>Closed Sunday and Holidays</li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@retrophotoshop.com"
              style={{ color: "#ffd700" }}
            >
              contact@retrophotoshop.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
