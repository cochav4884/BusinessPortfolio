import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Mom & Pop Web Design. All rights reserved.</p>
        <p>
          Created by Corinne Padilla |{" "}
          <Link to="/contact">
            corinnepadilla@yahoo.com
          </Link>
          |
        </p>
        <p>
          <Link to="/termsofuse">
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link to="/privacypolicy">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}


export default Footer;
