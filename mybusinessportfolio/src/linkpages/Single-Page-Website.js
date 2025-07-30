import React from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Single-Page-Website.module.css";
import CollectionPreview from "../components/CollectionPreview";

// === Imported images ===
import furniture from "../spimages/furniture.jpg";
import furniture2 from "../spimages/furniture2.jpg";
import furniture3 from "../spimages/furniture3.jpg";

import jewlery from "../spimages/jewlery.jpg";
import jewlery2 from "../spimages/jewlery2.jpg";
import jewlery3 from "../spimages/jewlery3.jpg";

import porcelain from "../spimages/porcelain.jpg";
import porcelain2 from "../spimages/porcelain2.jpg";
import porcelain3 from "../spimages/porcelain3.jpg";

import decor from "../spimages/decor.jpg";
import decor2 from "../spimages/decor2.jpg";
import decor3 from "../spimages/decor3.jpg";

import books from "../spimages/books.jpg";
import books2 from "../spimages/books2.jpg";
import books3 from "../spimages/books3.jpg";

// Import the reusable LogoImage component
import LogoImage from "../components/LogoImage";

// === Collection Data ===
const collections = [
  {
    name: "Victorian Era Furniture",
    images: [
      { src: furniture, caption: "Victorian Settee" },
      { src: furniture2, caption: "Victorian Drawing Room Set" },
      { src: furniture3, caption: "Victorian Parlor Table" },
    ],
  },
  {
    name: "Art Deco Jewelry",
    images: [
      { src: jewlery, caption: "Art Deco Pendant" },
      { src: jewlery2, caption: "Art Deco Jewlery Set" },
      { src: jewlery3, caption: "Art Deco Silver Lace Earrings" },
    ],
  },
  {
    name: "Classic Porcelain & Ceramics",
    images: [
      { src: porcelain, caption: "Blue Porcelain Vase Set" },
      { src: porcelain2, caption: "Antique Vase Set" },
      { src: porcelain3, caption: "Painted Ceramic Tea Set" },
    ],
  },
  {
    name: "Retro Home Decor",
    images: [
      { src: decor, caption: "Retro Lamp" },
      { src: decor2, caption: "Retro Table Clock" },
      { src: decor3, caption: "Retro Vanity Mirror" },
    ],
  },
  {
    name: "Rare Vintage Books",
    images: [
      { src: books, caption: "Leather-Bound Novels" },
      { src: books2, caption: "Classic Poetry" },
      { src: books3, caption: "Collector’s Set" },
    ],
  },
];

export default function SinglePageWebsite() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <h1 className={styles.navTitle}>Timeless Treasures Antiques</h1>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.brandLink}>
              LandingPage
            </Link>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Timeless Treasures Antiques</h1>
        <p>
          {" "}
          Please be advised: The form presented herein serves solely as an
          example, and the contact information displayed in the page is for
          illustrative purposes only. Accurate contact details are available
          exclusively by navigating back to the original website at any time by
          clicking the LandingPage button in the navigation bar, where you can access
          the official Contact page.
        </p>
        <p className={styles.tagline}>
          Discover unique vintage finds & classic collectibles
        </p>
      </header>

      {/* About Us */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <p className={styles.paragraph}>
          At <span className={styles.highlight}>Timeless Treasures</span>, we
          specialize in carefully curated antiques from around the world...
        </p>
      </section>

      {/* Featured Collections */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Collections</h2>
        <ul className={styles.list}>
          {collections.map((collection, i) => (
            <CollectionPreview key={i} collection={collection} />
          ))}
        </ul>
      </section>

      {/* Visit Us */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Visit Us</h2>
        <p className={styles.paragraph}>
          Located in the heart of downtown...
          <br />
          <strong>Address:</strong> 123 Heritage Lane, Oldtown
          <br />
          <strong>Hours:</strong> Mon–Fri: 10am – 6pm | Sat: 11am – 4pm
          <br />
          <strong>Contact:</strong> (555) 123-4567 |{" "}
          <a className={styles.link} href="mailto:info@timelesstreasures.com">
            info@timelesstreasures.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          {/* Use reusable LogoImage component here */}
          <LogoImage />
        </p>
        &copy; {new Date().getFullYear()} Timeless Treasures Antiques — All
        rights reserved.
      </footer>
    </div>
  );
}
