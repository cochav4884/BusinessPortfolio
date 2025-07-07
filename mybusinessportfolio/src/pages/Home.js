// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className='page-header'>Welcome to Mom & Pop Shop Web Design</h1>
        <p className="subheader">
          Helping local businesses build simple, beautiful websites that grow their customer base.
        </p>
        <p className='subheader'>
          Whether you need a brand new website or a refresh, I specialize in creating easy-to-manage,
          responsive sites using HTML, CSS, JavaScript, and React.
        </p>

        <a href="/services" className="custom-button">
          View Our Services
        </a>
      </div>
    </div>
  );
}

export default Home;
