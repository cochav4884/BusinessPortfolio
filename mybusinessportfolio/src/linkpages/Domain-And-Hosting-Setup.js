import React from "react";

export default function DomainAndHostingSetup() {
  return (
    <div className="container-fluid">
      <header className="page-header">Domain & Hosting Setup</header>

      <section className="section">
        <h2 className="subheader">Secure Your Digital Presence</h2>
        <p>
          A custom domain name and reliable hosting are the foundation of your online identity. 
          We handle all technical aspects—from purchasing the domain to launching your website.
        </p>
      </section>

      <section className="section">
        <h2 className="subheader">What We Offer</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
          <li><strong>Domain Registration:</strong> I help you choose and secure a memorable, brand-appropriate domain name.</li>
          <li><strong>Hosting Setup:</strong> I'll set up and configure hosting to suit your site’s performance and scalability needs.</li>
          <li><strong>Custom Email:</strong> Set up personalized email addresses using your domain (e.g., you@yourdomain.com).</li>
          <li><strong>SSL Certificate:</strong> I enable HTTPS for secure browsing and improved SEO.</li>
          <li><strong>Ongoing Support:</strong> Need to transfer or renew your domain? I’ve got you covered.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="subheader">Need Help With Setup?</h2>
        <p>
          Whether you're starting from scratch or need assistance switching providers, our team will handle all the details so you can focus on your business.
        </p>
        <p>
          <a href="/contact" className="custom-button">Get in Touch</a>
        </p>
      </section>
    </div>
  );
}
