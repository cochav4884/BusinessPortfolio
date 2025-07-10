import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Single-Page Website",
    description:
      "A simple, responsive one-page website perfect for menus, contact info, or service listings.",
    price: "$300",
    link: "/single-page-website",
  },
  {
    title: "Multi-Page Website",
    description:
      "Up to 5 pages including Home, About, Services, Gallery, and Contact with custom navigation.",
    price: "$500",
    link: "/multi-page-website",
  },
  {
    title: "Website Redesign",
    description:
      "Modernize your existing website for better mobile support, speed, and user experience.",
    price: "Starting at $400",
    link: "/website-redesign",
  },
  {
    title: "Maintenance & Updates",
    description:
      "Keep your website fresh and up-to-date with monthly or on-demand edits.",
    price: "Contact for pricing",
    link: "/maintenance-and-updates",
  },
  {
    title: "Contact & Booking Forms",
    description:
      "Add simple, easy-to-use contact or booking forms to engage your customers.",
    price: "$100",
    link: "/contact-and-booking-forms",
  },
  {
    title: "Domain & Hosting Setup",
    description:
      "Assistance with purchasing a domain and setting up free hosting on GitHub Pages or Netlify.",
    price: "$50",
    link: "/domain-and-hosting-setup",
  },
];

function Services() {
  return (
    <div className="container-fluid">
      <h2 className="page-header">My Services</h2>
      <div className="row">
        {services.map(({ title, description, price, link }, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <Link
              to={link}
              style={{ textDecoration: "none", color: "inherit" }}
              aria-label={`Learn more about ${title}`}
            >
              <div
                className="card h-100 shadow-sm card-hover-effect"
                style={{ cursor: "pointer" }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text flex-grow-1">{description}</p>
                  <div className="mt-auto">
                    <strong className="text-primary">{price}</strong>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
