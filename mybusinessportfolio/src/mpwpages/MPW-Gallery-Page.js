// src/linkpages/GalleryPage.js
import React, { useState } from "react";
import styles from "../linkstyles/Multi-Page-Website.module.css";
import {
  retroPhotoImages,
  photographerImages,
  clientImages,
} from "../linkdata/Link-Data";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState(null);

  const handleOpen = (image) => setModalImage(image);
  const handleClose = () => setModalImage(null);

  const handlePrint = () => {
    const { src, alt, name, years, about, experience } = modalImage;
    const imgWindow = window.open("", "_blank");

    imgWindow.document.write(`
    <html>
      <head>
        <title>Print Image</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          .caption {
            margin-top: 20px;
            font-size: 16px;
            color: #333;
            text-align: left;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
        </style>
      </head>
      <body>
        <img src="${src}" alt="${alt}" />
        <div class="caption">
          <p><strong>${alt}</strong></p>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
          ${
            years
              ? `<p><strong>Time with Retro Photo Shop:</strong> ${years}</p>`
              : ""
          }
          ${about ? `<p><strong>About:</strong> ${about}</p>` : ""}
          ${
            experience
              ? `<p><strong>Experience:</strong> ${experience}</p>`
              : ""
          }
        </div>
      </body>
    </html>
  `);

    imgWindow.document.close();

    imgWindow.onload = () => {
      imgWindow.focus();
      imgWindow.print();
    };
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.container}>
      {/* Navigation Links */}
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <a href="/" style={{ color: "#cc0000", textDecoration: "none" }}>
            Retro Photo Shop
          </a>
        </h1>

        {/* Hamburger toggler button */}
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

        {/* Navigation list */}
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
      {/* Page Title */}
      <h1 className={styles.pageTitle2}>Gallery</h1>

      {/* Separate container for features section */}
      <div className={styles.featuresContainer}>
        <section className={styles.features}>
          <div className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Retro Collection</h2>
            <p className={styles.paragraph}>
              Example of our business and cameras we have used in the past and
              now!
            </p>
            <div className={styles.galleryGrid}>
              {retroPhotoImages.map((img) => (
                <div
                  key={img.id}
                  className={styles.imageBox}
                  onClick={() => handleOpen(img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleOpen(img)}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className={styles.featuresContainer}>
        <section className={styles.features}>
          <div className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Photographers</h2>
            <p className={styles.paragraph}>
              Meet our Photographers by clicking on a photo!
            </p>
            <div className={styles.galleryGrid}>
              {photographerImages.map((img) => (
                <div
                  key={img.id}
                  className={styles.imageBox}
                  onClick={() => handleOpen(img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleOpen(img)}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className={styles.featuresContainer}>
        <section className={styles.features}>
          <div className={styles.featureBox}>
            <h2 className={styles.sectionTitle}>Returning Clients</h2>
            <p className={styles.paragraph}>
              Here are some of our repeat clients!
            </p>
            <div className={styles.galleryGrid}>
              {clientImages.map((img) => (
                <div
                  key={img.id}
                  className={styles.imageBox}
                  onClick={() => handleOpen(img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleOpen(img)}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {modalImage && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className={styles.enlargedImage}
            />
            <div className={styles.caption}>
              <p>{modalImage.alt}</p>
              {modalImage.name && (
                <>
                  <p>
                    <strong>Name:</strong> {modalImage.name}
                  </p>
                  <p>
                    <strong>Time with Retro Photo Shop:</strong>{" "}
                    {modalImage.years}
                  </p>
                  <p>
                    <strong>About:</strong> {modalImage.about}
                  </p>
                  <p>
                    <strong>Experience:</strong> {modalImage.experience}
                  </p>
                </>
              )}
            </div>

            <div className={styles.buttonRow}>
              <a href={modalImage.src} download className={styles.button}>
                Download
              </a>
              <button onClick={handlePrint} className={styles.button}>
                Print
              </button>
              <button onClick={handleClose} className={styles.button}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
        reserved.
      </footer>
    </div>
  );
}
