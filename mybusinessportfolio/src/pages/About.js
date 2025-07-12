// src/pages/About.js
import React from "react";
import { Link } from "react-router-dom";
import corinneBW from "/public/images/corinne_bw.jpg";

function About() {
  return (
    <div className="container-fluid">
      <h1 className="page-header">About Mom & Pop Shop Web Design</h1>

      <p className="subheader">
        I specialize in creating simple, beautiful, and functional websites tailored for local mom and pop shops.
        My goal is to help small businesses build a strong and professional online presence — without the high cost or complexity of big design firms.
      </p>

      <p className="subheader">
        I use modern technologies like React, HTML, CSS, and JavaScript to create responsive, mobile-friendly websites
        that reflect the unique charm of each business I serve.
      </p>

      <p className="subheader">
        With a deep respect for community, strong communication, and a creative mindset, I bring every project to life
        with purpose and personal attention.
      </p>

      {/* Meet the Founder Section */}
      <div className="text-center mt-4">
        <img
          src={corinneBW}
          alt="Corinne Padilla"
          style={{ width: "140px", borderRadius: "50%", boxShadow: "0 4px 6px #000" }}
        />
        <p className="mt-3 subheader" style={{ fontSize: "1.2rem" }}>
          Curious about the story behind the work?{" "}
          <Link to="/author" className="privacy-inline-link">
            Meet the founder →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
