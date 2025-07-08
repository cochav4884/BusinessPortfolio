// src/linkpages/GalleryPage.js
import React, { useState } from "react";
import styles from "../linkstyles/Multi-Page-Website.module.css";
import { retroPhotoImages, photographerImages, clientImages } from "../linkdata/Link-Data";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState(null);

  const handleOpen = (image) => setModalImage(image);
  const handleClose = () => setModalImage(null);

  const handlePrint = () => {
    const imgWindow = window.open("", "_blank");
    imgWindow.document.write(
      `<img src="${modalImage.src}" style="width:100%" />`
    );
    imgWindow.document.close();
    imgWindow.focus();
    imgWindow.print();
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li><Link to="/multi-page-website">Home</Link></li>
                <li><Link to="/mpw-gallery-page">Gallery</Link></li>
                <li><Link to="/mpw-booking-page">Booking</Link></li>
                <li><Link to="/mpw-contact-page">Contact</Link></li>
              </ul>
            </nav>

      <h1 className={styles.header}>Gallery</h1>

      <h2 className={styles.subheader}>Retro Collection</h2>
      <div className={styles.grid}>
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

      <h2 className={styles.subheader}>Photographers</h2>
      <div className={styles.grid}>
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

      <h2 className={styles.subheader}>Clients</h2>
      <div className={styles.grid}>
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
            <p className={styles.caption}>{modalImage.alt}</p>
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
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Retro Photo Shop — All rights
        reserved.
      </footer>
    </div>
  );
}
