import React from "react";
import styles from "../wroldwebdesignstyles/Old-Site-About.module.css";

function OldSiteAbout() {
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
        <h2>Established | 1978</h2>
        <p>Welcome to Tony's Auto Repair Shop — where quality meets honesty!</p>
        <p>
          Many of our customers keep coming back because they know good work means
          a safe ride.
        </p>
        <p>
          Come on down and meet our friendly staff — experience service that goes
          the extra mile, at prices that won’t break the bank!
        </p>

        <div className={styles.imageRow}>
          <img
            src={require("../wrlinkimages/old-shop2.jpg")}
            alt="Tony working on a car"
            className={styles.image}
          />
          <img
            src={require("../wrlinkimages/old-worker3.jpg")}
            alt="Another worker in the shop"
            className={styles.image}
          />
        </div>

        <p>
          I’m not just one of the mechanics... I’m Tony, founder and proud owner
          of Tony's Auto Repair Shop.
        </p>

        <p className={styles.slogan}>
          “Driven by trust, powered by experience!”
        </p>
      </main>

      <footer className={styles.footer}>
        &copy; 1978 Tony's Auto Repair Shop — All rights reserved.
      </footer>
    </div>
  );
}

export default OldSiteAbout;
