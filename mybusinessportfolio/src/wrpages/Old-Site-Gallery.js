import React from "react";
import { Link } from "react-router-dom";
import styles from "../wroldwebdesignstyles/Old-Site-Gallery.module.css";

function OldSiteGallery() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Tony's Auto Repair Shop</h1>
      </header>

      <nav className={styles.nav}>
        <Link to="/Website-Redesign" className={styles.navLink}>
          WR Old Website Design
        </Link>
        <Link to="/Old-Site-About" className={styles.navLink}>
          Old About Page
        </Link>
        <Link to="/Old-Site-Gallery" className={styles.navLink}>
          Old Gallery Page
        </Link>
        <Link to="/Old-Site-Contact" className={styles.navLink}>
          Old Contact Page
        </Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.employees}>
          <h2 className={styles.header}>Meet Our Team</h2>
          <p className={styles.slogan}>
            “Serving Trust, One Car at a Time — Since '78!”
          </p>

          <div className={styles.flipCardContainer}>
            <div className={styles.flipCard} tabIndex="0">
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src={require("../wrlinkimages/old-worker4.jpg")}
                    alt="John Doe"
                    className={styles.flipCardImage}
                  />
                  <h3>Tony Auto</h3>
                  <p>Senior Mechanic</p>
                </div>
                <div className={styles.flipCardBack}>
                  <p>
                    Tony has over 20 years experience specializing in engine
                    repair and diagnostics.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.flipCard} tabIndex="0">
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src={require("../wrlinkimages/auto-contract3.jpg")}
                    alt="Mary Smith"
                    className={styles.flipCardImage}
                  />
                  <h3>Mary Smith</h3>
                  <p>Service Advisor</p>
                </div>
                <div className={styles.flipCardBack}>
                  <p>
                    Mary coordinates customer service and scheduling with a
                    friendly approach.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.flipCard} tabIndex="0">
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src={require("../wrlinkimages/auto-discuss.jpg")}
                    alt="David Lee"
                    className={styles.flipCardImage}
                  />
                  <h3>David Lee</h3>
                  <p>Brake Specialist</p>
                </div>
                <div className={styles.flipCardBack}>
                  <p>
                    Expert in brake repair and safety inspections with over 10
                    years experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.workGallery}>
          <h2>Work in Progress</h2>
          <div className={styles.workImages}>
            <div className={styles.workItem}>
              <img
                src={require("../wrlinkimages/new-worker6.jpg")}
                alt="Car Engine Repair"
              />
              <div className={styles.caption}>Car Engine Repair</div>
            </div>

            <div className={styles.workItem}>
              <img
                src={require("../wrlinkimages/new-worker2.jpg")}
                alt="Brake Replacement"
              />
              <div className={styles.caption}>Brake Replacement</div>
            </div>

            <div className={styles.workItem}>
              <img
                src={require("../wrlinkimages/old-worker2.jpg")}
                alt="Oil Change"
              />
              <div className={styles.caption}>Oil Change</div>
            </div>

            <div className={styles.workItem}>
              <img
                src={require("../wrlinkimages/old-worker.jpg")}
                alt="Tire Service"
              />
              <div className={styles.caption}>Tire Service</div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 Tony's Auto Repair Shop — All rights reserved.
      </footer>
    </div>
  );
}

export default OldSiteGallery;
