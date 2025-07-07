// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className='page-header'>Welcome to Mom & Pop Web Design</h1>
        <p className="lead mb-4">
          Helping local businesses build simple, beautiful websites that grow their customer base.
        </p>
        <p>
          Whether you need a brand new website or a refresh, I specialize in creating easy-to-manage,
          responsive sites using HTML, CSS, JavaScript, and React.
        </p>

        <a href="/services" className="btn btn-primary btn-lg mt-4">
          View Our Services
        </a>
      </div>
    </div>
  );
}

export default Home;
