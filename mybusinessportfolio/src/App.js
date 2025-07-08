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
import SinglePageWebsite from "./linkpages/Single-Page-Website";
import MultiPageWebsite from "./linkpages/Multi-Page-Website";
import MPWGalleryPage from "./mpwpages/MPW-Gallery-Page";
import MPWBookingPage from "./mpwpages/MPW-Booking-Page";
import MPWContactPage from "./mpwpages/MPW-Contact-Page";
import WebsiteDesign from "./linkpages/Website-Redesign";
import MaintenanceAndUpdates from "./linkpages/Maintenance-And-Updates";
import ContactAndBookingForms from "./linkpages/Contact-Booking-Forms";
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

      {/* ✅ Demo Page Route — without site-wide NavBar/Footer */}
      <Route path="/single-page-website" element={<SinglePageWebsite />} />
      <Route path="/multi-page-website" element={<MultiPageWebsite />} />
      <Route path="/mpw-gallery-page" element={<MPWGalleryPage />} />
      <Route path="/mpw-booking-page" element={<MPWBookingPage />} />
      <Route path="/mpw-contact-page" element={<MPWContactPage />} />
      <Route path="/website-redesign" element={<WebsiteDesign />} />
      <Route
        path="/maintenance-and-updates"
        element={<MaintenanceAndUpdates />}
      />
      <Route
        path="/contact-and-booking-forms"
        element={<ContactAndBookingForms />}
      />
      <Route
        path="/domain-and-hosting-setup"
        element={<DomainAndHostingSetup />}
      />
    </Routes>
  );
}

export default App;
