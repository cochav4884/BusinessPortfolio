import React from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

function DesignCard({ title, description, image, altText, linkTo, buttonText }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.subheader}>{title}</h2>
      <div className={styles.card}>
        <p>{description}</p>
        <img src={image} alt={altText} className={styles.imgPreview} />
        <Link to={linkTo} className={styles.customButton}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export default DesignCard;
