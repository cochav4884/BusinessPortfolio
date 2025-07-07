import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Mom & Pop Shop Web Design. All rights reserved.</p>
        <p>
          Created by Corinne Padilla |{" "}
          <Link to="/contact" className='privacy-inline-link '>
            corinnepadilla@yahoo.com
          </Link>
          |
        </p>
        <p>
          <Link to="/termsofuse" className='privacy-inline-link '>
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link to="/privacypolicy" className='privacy-inline-link '>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}


export default Footer;
