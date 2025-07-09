import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

import screenshotHome from "../wrlinkimages/screen-shot-Home.jpeg";
import screenshotGallery from "../wrlinkimages/screen-shot-Gallery.jpeg";
import screenshotGallery2 from "../wrlinkimages/screen-shot-Gallery2.jpeg"
import screenshotContact from "../wrlinkimages/screen-shot-Contact.jpeg";


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
            <a
              href={screenshotHome}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlarge screenshot of Home Page"
            >
              <img
                src={screenshotHome}
                alt="Screen Shot of WR-Old-Website-Design's Home Page"
              />
            </a>
            <a
              href={screenshotGallery}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlarge screenshot of Contact Page"
            >
              <img
                src={screenshotGallery}
                alt="Screen Shot of WR-Old-Website-Design's Contact Page"
              />
            </a>
            <a
              href={screenshotGallery2}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlarge screenshot of Gallery Page"
            >
              <img
                src={screenshotGallery2}
                alt="Screen Shot of WR-Old-Website-Design's Gallery Page"
              />
            </a>

            <a
              href={screenshotContact}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlarge screenshot of Contact Page"
            >
              <img
                src={screenshotContact}
                alt="Screen Shot of WR-Old-Website-Design's Contact Page"
              />
            </a>
          </div>

          <Link to="/website-redesign" className={styles.customButton}>
            ← Back to Redesign Overview
          </Link>
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

export default WROldWebsiteDesign;
