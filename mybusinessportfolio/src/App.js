// src/App.js
import "./App.css";
import { Routes, Route } from "react-router-dom"; // ✅ No HashRouter here

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import TermsOfUse from "./pages/TermsofUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MaintenanceAndUpdates from "./linkpages/Maintenance-And-Updates";
import DomainAndHostingSetup from "./linkpages/Domain-And-Hosting-Setup";
import Author from "./pages/Author";
// Demo example page (does NOT use global NavBar/Footer)
import SinglePageWebsite from "./linkpages/Single-Page-Website";
import MultiPageWebsite from "./linkpages/Multi-Page-Website";
import MPWGalleryPage from "./mpwpages/MPW-Gallery-Page";
import MPWBookingPage from "./mpwpages/MPW-Booking-Page";
import MPWContactPage from "./mpwpages/MPW-Contact-Page";
import WebsiteRedesign from "./linkpages/Website-Redesign";
import WROldWebsiteDesign from "./wrpages/WR-Old-Website-Design";
import WRNewAbout from "./wrpages/WR-New-About";
import WRNewGallery from "./wrpages/WR-New-Gallery";
import WRNewService from "./wrpages/WR-New-Service";
import WRNewContact from "./wrpages/WR-New-Contact";
import ContactAndBookingForms from "./linkpages/Contact-And-Booking-Forms";
import SimpleContactForm from "./cbfpages/Simple-Contact-Form";
import StudentInquiryForm from "./cbfpages/Student-Inquiry-Form";
import HRContactForm from "./cbfpages/HR-Contact-Form";
import SimpleBookingForm from "./cbfpages/Simple-Booking-Form";
import SkiResortCabinBookingForm from "./cbfpages/Ski-Resort-Cabin-Booking-Form";
import DanceLessonsBookingForm from "./cbfpages/Dance-Lessons-Booking-Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      {/* ✅ Main Pages */}
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <LandingPage />
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
      <Route
        path="/maintenance-and-updates"
        element={
          <>
            <NavBar />
            <MaintenanceAndUpdates />
            <Footer />
          </>
        }
      />
      <Route
        path="/domain-and-hosting-setup"
        element={
          <>
            <NavBar />
            <DomainAndHostingSetup />
            <Footer />
          </>
        }
      />
      <Route
        path="/author"
        element={
          <>
            <NavBar />
            <Author />
            <Footer />
          </>
        }
      />

      {/* ✅ Demo Pages (no global NavBar/Footer) */}
      <Route path="/single-page-website" element={<SinglePageWebsite />} />
      <Route path="/multi-page-website" element={<MultiPageWebsite />} />
      <Route path="/mpw-gallery-page" element={<MPWGalleryPage />} />
      <Route path="/mpw-booking-page" element={<MPWBookingPage />} />
      <Route path="/mpw-contact-page" element={<MPWContactPage />} />
      <Route path="/website-redesign" element={<WebsiteRedesign />} />
      <Route path="/wr-old-website-design" element={<WROldWebsiteDesign />} />
      <Route path="/wr-new-about" element={<WRNewAbout />} />
      <Route path="/wr-new-gallery" element={<WRNewGallery />} />
      <Route path="/wr-new-service" element={<WRNewService />} />
      <Route path="/wr-new-contact" element={<WRNewContact />} />
      <Route
        path="/contact-and-booking-forms"
        element={<ContactAndBookingForms />}
      />
      <Route path="/simple-contact-form" element={<SimpleContactForm />} />
      <Route path="/student-inquiry-form" element={<StudentInquiryForm />} />
      <Route path="/hr-contact-form" element={<HRContactForm />} />
      <Route path="/simple-booking-form" element={<SimpleBookingForm />} />
      <Route
        path="/ski-resort-cabin-booking-form"
        element={<SkiResortCabinBookingForm />}
      />
      <Route
        path="/dance-lessons-booking-form"
        element={<DanceLessonsBookingForm />}
      />
    </Routes>
  );
}

export default App;
