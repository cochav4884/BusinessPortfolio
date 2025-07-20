// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoModal from "../components/LogoModal";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const faviconPath = "/favicon.ico"; // reliable public path

  return (
    <div className="container-fluid">
      <h1 className="page-header">Welcome to Mom & Pop Shop Web Design</h1>
      <div className="text-center">
        <img
          src={faviconPath}
          alt="Mom & Pop Shop Logo"
          style={{ cursor: "pointer", maxWidth: "500px", marginBottom: "1rem" }}
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
        <p>
          <Link to="/services" className="custom-button">
            View My Services
          </Link>
        </p>
      </div>

      {/* Modal for Download/Print */}
      <LogoModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default LandingPage;
