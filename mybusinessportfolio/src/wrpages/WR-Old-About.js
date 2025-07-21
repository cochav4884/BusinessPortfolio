import React from "react";
import "./WR-Old-About.css"; // Ensure this CSS file is in the same folder

function WROldAbout() {
  return (
    <div>
      <header>
        <h1>Tony's Auto Repair Shop</h1>
      </header>

      <nav>
        <a href="/WR-Old-Website-Design">Home Page</a>
        <a href="/WR-Gallery-Page">Gallery Page</a>
        <a href="/WR-Contact-Page">Contact Page</a>
      </nav>

      <main>
        <h2>Established | 1978</h2>
        <p>Welcome to Tony's Auto Repair Shop — where quality meets honesty!</p>
        <p>
          Many of our customers keep coming back because they know good work means
          a safe ride.
        </p>
        <p>
          Come on down and meet our friendly staff — experience service that goes
          the extra mile, at prices that won’t break the bank!
        </p>

        <div className="image-row">
          <img
            src={require("../wrlinkimages/old-shop2.jpg")}
            alt="Tony working on a car"
          />
          <img
            src={require("../wrlinkimages/old-worker3.jpg")}
            alt="Another worker in the shop"
          />
        </div>

        <p>
          I’m not just one of the mechanics... I’m Tony, founder and proud owner
          of Tony's Auto Repair Shop.
        </p>

        <p className="slogan">
          “Driven by trust, powered by experience!”
        </p>
      </main>

      <footer>&copy; 1978 Tony's Auto Repair Shop — All rights reserved.</footer>
    </div>
  );
}

export default WROldAbout;
