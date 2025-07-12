// src/pages/MpwGalleryPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Multi-Page-Website.module.css";
import logo from "../images/logo_small.jpeg"; // Adjust the path if your logo is in a different location

import {
  retroPhotoImages,
  photographerImages,
  clientImages,
} from "../linkdata/Link-Data";

export default function MpwGalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <a href="/" style={{ color: "#cc0000", textDecoration: "none" }}>
            Retro Photo Shop
          </a>
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

      <main>
        <header className={styles.header} style={{ marginBottom: "2rem" }}>
          <h1 className={styles.pageTitle2}>Gallery</h1>
          <p>
            {" "}
            Please be advised: The forms presented herein serve solely as
            examples, and the contact information displayed in the footers is
            for illustrative purposes only. Accurate contact details are
            available exclusively on the Home page. You may also navigate back
            to the original website at any time by clicking the website title in
            the navigation bar, where you can access the official Contact page.
          </p>
          <p className={styles.intro}>
            Explore our collection of vintage-inspired photos and portraits.
          </p>
        </header>

        {/* Photographers Section */}
        <section className={styles.gallerySection}>
          <h3 className={styles.sectionTitle}>Photographers</h3>
          <div className={styles.galleryGrid}>
            {photographerImages.map((photo) => (
              <div
                key={photo.id}
                className={styles.imageBox}
                onClick={() => openModal(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(photo);
                }}
                aria-label={`View larger portrait: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Retro Color Image Section */}
        <section className={styles.gallerySection}>
          <h3 className={styles.sectionTitle}>Colored Photos</h3>
          <div className={styles.galleryGrid}>
            {retroPhotoImages.map((img) => (
              <div
                key={img.id}
                className={styles.imageBox}
                onClick={() => openModal(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(img);
                }}
                aria-label={`View larger image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Retro Black/White & Specialty Image Section */}
        <section className={styles.gallerySection}>
          <h3 className={styles.sectionTitle}>
            Black/White & Specialty Photos
          </h3>
          <div className={styles.galleryGrid}>
            {clientImages.map((client) => (
              <div
                key={client.id}
                className={styles.imageBox}
                onClick={() => openModal(client)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(client);
                }}
                aria-label={`View larger client portrait: ${client.alt}`}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalOpen && currentImage && (
          <div
            className={styles.modalOverlay}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            tabIndex={-1}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className={styles.enlargedImage}
              />
              <div className={styles.caption}>
                <p id="modalTitle">{currentImage.alt}</p>
                {/* If photographer, show extra info */}
                {"name" in currentImage && (
                  <>
                    <p>
                      <strong>Name:</strong> {currentImage.name}
                    </p>
                    <p>
                      <strong>Years Experience:</strong> {currentImage.years}
                    </p>
                    <p>
                      <strong>About:</strong> {currentImage.about}
                    </p>
                    <p>
                      <strong>Experience:</strong> {currentImage.experience}{" "}
                      years
                    </p>
                  </>
                )}
              </div>
              <button className={styles.button} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          <img
            src={logo}
            alt="Mom & Pop Logo - Click to scroll to top"
            title="Back to Top"
            style={{ height: "60px", marginBottom: "15px", cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
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
