// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // make sure this is at the top
import LogoModal from "../components/LogoModal";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
  const [showModal, setShowModal] = useState(false);

  // Direct URLs for public/ images
  const logoSmall = "/images/logo_small.jpeg";
  const logoMedium = "/images/logo_medium.jpeg";
  const logoLarge = "/images/logo_large.jpeg";

  return (
    <div className="container-fluid">
      <h1 className="page-header">Welcome to Mom & Pop Shop Web Design</h1>
      <div className="text-center">
        <img
          src={logoMedium}
          srcSet={`${logoSmall} 150w, ${logoMedium} 300w, ${logoLarge} 600w`}
          sizes="(max-width: 600px) 150px, (max-width: 900px) 300px, 600px"
          alt="Mom & Pop Shop Logo"
          style={{ cursor: "pointer", maxWidth: "100%" }}
          onClick={() => setShowModal(true)}
        />

        <p className="subheader">
          Helping local businesses build simple, beautiful websites that grow
          their customer base.
        </p>
        <p className="subheader">
          Whether you need a brand new website or a refresh, I specialize in
          creating easy-to-manage, responsive sites using HTML, CSS, JavaScript,
          and React. I can use backend code for form submission success!
        </p>

        <Link to="/services" className="custom-button">
          View My Services
        </Link>
      </div>

      {/* Modal for Download/Print */}
      <LogoModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        logoSmall={logoSmall}
        logoMedium={logoMedium}
        logoLarge={logoLarge}
      />
    </div>
  );
}

export default Home;
