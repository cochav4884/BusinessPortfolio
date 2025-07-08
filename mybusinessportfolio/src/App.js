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
    </Routes>
  );
}

export default App;
