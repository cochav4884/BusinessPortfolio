import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_small.jpeg";

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <img
          src={logo}
          alt="Mom & Pop Logo - Click to scroll to top"
          title="Back to Top"
          style={{ height: "60px", marginBottom: "15px", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <p>
          © {new Date().getFullYear()} Mom & Pop Shop Web Design. All rights
          reserved.
        </p>
        <p>
          Created by Corinne Padilla |{" "}
          <Link to="/contact" className="privacy-inline-link ">
            corinnepadilla@yahoo.com
          </Link>
          |
        </p>
        <p>
          <Link to="/termsofuse" className="privacy-inline-link ">
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link to="/privacypolicy" className="privacy-inline-link ">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
