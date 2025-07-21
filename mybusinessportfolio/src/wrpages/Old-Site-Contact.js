import React from "react";
import styles from "../wroldwebdesignstyles/Old-Site-Contact.module.css";

function OldSiteContact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Tony's Auto Repair Shop</h1>
      </header>

      <nav className={styles.nav}>
        <a href="/WR-Old-Website-Design">Home Page</a>
        <a href="/WR-Gallery-Page">Gallery Page</a>
        <a href="/WR-Contact-Page">Contact Page</a>
      </nav>

      <main className={styles.main}>
        <h2>Contact Information</h2>
        <p><strong>Contact Person:</strong> Tony Auto</p>
        <p><strong>Contact Number:</strong> (023) 456-7890</p>
        <p><strong>Business Hours:</strong></p>

        <ul className={styles.hoursList}>
          <li>Monday - Friday: 8:00am to 5:00pm</li>
          <li>Saturday: 12:00pm to 4:00pm</li>
          <li>Closed Sunday and Holidays</li>
        </ul>

        <p>
          <strong>Email Address:</strong>{" "}
          <a href="mailto:TonyExample@Example.com">TonyAuto@Example.com</a>
        </p>

        <p className={styles.slogan}>
          “We don't just fix cars—we keep your wheels rollin'!”
        </p>
      </main>

      <footer className={styles.footer}>
        &copy; 1978 Tony's Auto Repair Shop — All rights reserved.
      </footer>
    </div>
  );
}

export default OldSiteContact;
