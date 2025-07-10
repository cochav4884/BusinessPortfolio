// src/components/CollectionPreview.js
import React, { useState, useEffect } from "react";
import styles from "../linkstyles/Single-Page-Website.module.css";

export default function CollectionPreview({ collection }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePreview = () => {
    setVisible(prev => !prev);
  };

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <li
        className={styles.collectionItem}
        onMouseEnter={!isMobile ? () => setVisible(true) : undefined}
        onMouseLeave={!isMobile ? () => setVisible(false) : undefined}
        onClick={isMobile ? togglePreview : undefined}
      >
        {collection.name}

        {visible && (
          <div className={`${styles.imagePreview} ${styles.fadeIn}`}>
            {collection.images.map((img, i) => (
              <figure key={i} className={styles.imageFigure}>
                <img
                  src={img.src}
                  alt={img.caption}
                  onClick={() => openImage(img)}
                  className={styles.clickableImage}
                />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </li>

      {/* Enlarged image modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeImage}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className={styles.modalImage}
            />
            <p className={styles.modalCaption}>{selectedImage.caption}</p>
            <button onClick={closeImage} className={styles.closeButton}>×</button>
          </div>
        </div>
      )}
    </>
  );
}
