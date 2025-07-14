import React from "react";
import { Link } from "react-router-dom";

function MaintenanceUpdates() {
  return (
    <div className="container py-4">
      <h2 className="page-header">Maintenance & Updates</h2>

      <section className="section">
        <p>
          Keep your website running like new with regular maintenance and
          on-demand updates. Whether you're looking to refresh content, fix
          bugs, or optimize performance, I’ve got you covered.
        </p>
      </section>

      <section className="section">
        <h3 className="subheader">What’s Included</h3>
        <ul
          className="text-start mx-auto"
          style={{ maxWidth: "800px", lineHeight: "1.8", fontSize: "1.1rem" }}
        >
          <li>✔️ Monthly or one-time updates</li>
          <li>✔️ Edits to text, images, or layout</li>
          <li>✔️ Link and bug fixes</li>
          <li>✔️ SEO tweaks and content optimization</li>
          <li>✔️ Speed and performance improvements</li>
          <li>✔️ Assistance with adding new pages or features</li>
        </ul>
      </section>

      <section className="section">
        <h3 className="subheader">Pricing</h3>
        <p>
          Maintenance and update pricing is flexible and based on the scope of
          work. Small one-time edits can start as low as <strong>$25</strong>.
          For ongoing monthly maintenance, please{" "}
          <Link to="/contact" className="privacy-inline-link">
            contact me
          </Link>{" "}
          for a custom quote.
        </p>
      </section>

      <section className="section">
        <h3 className="subheader">Ready to Refresh Your Site?</h3>
        <p>
          I'm here to help keep your website modern, functional, and bug-free.
        </p>
        <Link to="/contact" className="custom-button">
          Contact Me for Updates
        </Link>
      </section>
    </div>
  );
}

export default MaintenanceUpdates;
