import React from "react";
import "./WR-Old-Gallery.css"; // Ensure this CSS file is in the same folder

function WROldGallery() {
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
        <section className="employees">
          <h2 className="header">Meet Our Team</h2>
          <p className="slogan">“Serving Trust, One Car at a Time — Since '78!”</p>

          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../wrlinkimages/old-worker4.jpg")}
                    alt="John Doe"
                  />
                  <h3>Tony Auto</h3>
                  <p>Senior Mechanic</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Tony has over 20 years experience specializing in engine
                    repair and diagnostics.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../wrlinkimages/auto-contract3.jpg")}
                    alt="Mary Smith"
                  />
                  <h3>Mary Smith</h3>
                  <p>Service Advisor</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Mary coordinates customer service and scheduling with a
                    friendly approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../wrlinkimages/auto-discuss.jpg")}
                    alt="David Lee"
                  />
                  <h3>David Lee</h3>
                  <p>Brake Specialist</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Expert in brake repair and safety inspections with over 10
                    years experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="work-gallery">
          <h2>Work in Progress</h2>
          <div className="work-images">
            <div className="work-item">
              <img
                src={require("../wrlinkimages/new-worker6.jpg")}
                alt="Car Engine Repair"
              />
              <div className="caption">Car Engine Repair</div>
            </div>

            <div className="work-item">
              <img
                src={require("../wrlinkimages/new-worker2.jpg")}
                alt="Brake Replacement"
              />
              <div className="caption">Brake Replacement</div>
            </div>

            <div className="work-item">
              <img
                src={require("../wrlinkimages/old-worker2.jpg")}
                alt="Oil Change"
              />
              <div className="caption">Oil Change</div>
            </div>

            <div className="work-item">
              <img
                src={require("../wrlinkimages/old-worker.jpg")}
                alt="Tire Service"
              />
              <div className="caption">Tire Service</div>
            </div>
          </div>
        </section>
      </main>

      <footer>&copy; 2025 Tony's Auto Repair Shop — All rights reserved.</footer>
    </div>
  );
}

export default WROldGallery;
