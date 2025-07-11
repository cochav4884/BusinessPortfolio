// src/App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import TermsOfUse from "./pages/TermsofUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Demo example page (does NOT use global NavBar/Footer)
/* Single Page Website */
import SinglePageWebsite from "./linkpages/Single-Page-Website";
/* Multi Page Website */
import MultiPageWebsite from "./linkpages/Multi-Page-Website";
import MPWGalleryPage from "./mpwpages/MPW-Gallery-Page";
import MPWBookingPage from "./mpwpages/MPW-Booking-Page";
import MPWContactPage from "./mpwpages/MPW-Contact-Page";
/* Website Redesign */
import WebsiteRedesign from "./linkpages/Website-Redesign";
import WROldWebsiteDesign from "./wrpages/WR-Old-Website-Design";
import WRNewAbout from "./wrpages/WR-New-About";
import WRNewGallery from "./wrpages/WR-New-Gallery";
import WRNewService from "./wrpages/WR-New-Service";
import WRNewContact from "./wrpages/WR-New-Contact";
/* Maintenance & Updates */
import MaintenanceAndUpdates from "./linkpages/Maintenance-And-Updates";
/* Contact & Booking Forms */
import ContactAndBookingForms from "./linkpages/Contact-Booking-Forms";
/* Domain & Hosting Setup */
import DomainAndHostingSetup from "./linkpages/Domain-And-Hosting-Setup";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // includes Popper

function App() {
  return (
    <Routes>
      {/* ✅ Main Website Pages (with NavBar + Footer) */}
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <NavBar />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/services"
        element={
          <>
            <NavBar />
            <Services />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <NavBar />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/termsofuse"
        element={
          <>
            <NavBar />
            <TermsOfUse />
            <Footer />
          </>
        }
      />
      <Route
        path="/privacypolicy"
        element={
          <>
            <NavBar />
            <PrivacyPolicy />
            <Footer />
          </>
        }
      />
      <Route path="/maintenance-and-updates" element={
        <>
          <NavBar />
          <MaintenanceAndUpdates />
          <Footer />
        </>
      }
      />

      {/* ✅ Demo Page Route — without site-wide NavBar/Footer */}
      {/* Single Page Website */}
      <Route path="/single-page-website" element={<SinglePageWebsite />} />
      {/* Multi Page Website */}
      <Route path="/multi-page-website" element={<MultiPageWebsite />} />
      <Route path="/mpw-gallery-page" element={<MPWGalleryPage />} />
      <Route path="/mpw-booking-page" element={<MPWBookingPage />} />
      <Route path="/mpw-contact-page" element={<MPWContactPage />} />
      {/* Website Redesign */}
      <Route path="/website-redesign" element={<WebsiteRedesign />} />
      <Route path="/wr-old-website-design" element={<WROldWebsiteDesign />} />
      <Route path="/wr-new-about" element={<WRNewAbout />} />
      <Route path="/wr-new-gallery" element={<WRNewGallery />} />
      <Route path="/wr-new-service" element={<WRNewService />} />
      <Route path="/wr-new-contact" element={<WRNewContact />} />
      <Route
        path="/maintenance-and-updates"
        element={<MaintenanceAndUpdates />}
      />
      {/* Contact & Booking Forms */}
      <Route
        path="/contact-and-booking-forms"
        element={<ContactAndBookingForms />}
      />
      {/* Domain & Hosting Setup */}
      <Route
        path="/domain-and-hosting-setup"
        element={<DomainAndHostingSetup />}
      />
    </Routes>
  );
}

export default App;
