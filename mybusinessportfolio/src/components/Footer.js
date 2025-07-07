import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Mom & Pop Web Design. All rights reserved.</p>
        <p>
          Created by Corinne Padilla | Contact: <a href="mailto:corinnepadilla@yahoo.com" style={linkStyle}>corinnepadilla@yahoo.com</a>
        </p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '1.5rem 0',
  marginTop: 'auto',
};

const linkStyle = {
  color: '#6a0dad',  // Eggplant purple accent
  textDecoration: 'none',
};

export default Footer;
