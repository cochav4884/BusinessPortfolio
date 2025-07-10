// src/components/CollectionPreview.js
import React, { useState, useEffect } from "react";
import styles from "../linkstyles/Single-Page-Website.module.css";

export default function CollectionPreview({ collection }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  return (
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
              <img src={img.src} alt={img.caption} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </li>
  );
}
