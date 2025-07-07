import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const PrivacyPolicy = () => {
  return (
    <div className="main_container" id="top">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Mom &amp; Pop Web Design</h1>
        </header>

        <h2 className="section">* Privacy Policy *</h2>

        <ul className="container">
          <div id="top" aria-label="Top of page" tabIndex="-1"></div>
          <h2 className="section text-dark">* Table of Contents *</h2>
          <li>
            <a className="btn-link" href="#P01">
              Introduction
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P02">
              Information We Collect
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P03">
              How We Use Your Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P04">
              Sharing Your Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P05">
              Cookies and Tracking Technologies
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P06">
              Your Choices and Rights
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P07">
              California Privacy Rights
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P08">
              Data Security
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P09">
              Children’s Privacy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P10">
              International Users
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P11">
              Changes to This Privacy Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#P12">
              Contact Us
            </a>
          </li>
        </ul>

        <h3>* Last updated June 24, 2025 *</h3>

        <div className="container">
          <ol>
            {/* 1. Introduction */}
            <li>
              <h2 className="section-title" id="P01">
                Introduction
              </h2>
              <p className="text">
                Welcome to Mom &amp; Pop Web Design (
                <em>https://mompopwebdesign.com</em>). Your privacy is important
                to us. This Privacy Policy explains how we collect, use, and
                protect your personal information when you visit or use our
                website.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 2. Information We Collect */}
            <li>
              <h2 className="section-title" id="P02">
                Information We Collect
              </h2>
              <p className="text">
                We may collect personal information you provide directly, such
                as your name, email address, and any messages you send through
                our contact forms.
              </p>
              <p className="text">
                Additionally, we automatically collect certain information about
                your device and usage via cookies and similar technologies (see
                Cookies section).
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 3. How We Use Your Information */}
            <li>
              <h2 className="section-title" id="P03">
                How We Use Your Information
              </h2>
              <p className="text">
                We use your information to respond to your inquiries, provide
                and improve our services, and communicate important updates.
              </p>
              <p className="text">
                We do not sell or rent your personal data to third parties.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 4. Sharing Your Information */}
            <li>
              <h2 className="section-title" id="P04">
                Sharing Your Information
              </h2>
              <p className="text">
                We may share your information with trusted service providers who
                assist us in operating our website and services, under
                confidentiality agreements.
              </p>
              <p className="text">
                We may also disclose information if required by law or to
                protect our rights.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 5. Cookies and Tracking Technologies */}
            <li>
              <h2 className="section-title" id="P05">
                Cookies and Tracking Technologies
              </h2>
              <p className="text">
                Our website uses cookies to enhance your experience. Cookies are
                small data files stored on your device.
              </p>
              <p className="text">
                You can set your browser to refuse cookies or alert you when
                cookies are being sent, but some parts of the site may not
                function properly.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 6. Your Choices and Rights */}
            <li>
              <h2 className="section-title" id="P06">
                Your Choices and Rights
              </h2>
              <p className="text">
                You can update or request deletion of your personal information
                by contacting us.
              </p>
              <p className="text">
                Depending on your location, you may have additional rights under
                applicable laws.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 7. California Privacy Rights */}
            <li>
              <h2 className="section-title" id="P07">
                California Privacy Rights
              </h2>
              <p className="text">
                California residents have rights under the California Consumer
                Privacy Act (CCPA), including the right to request access to or
                deletion of personal information. For details, see our full
                Privacy Policy or contact us.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 8. Data Security */}
            <li>
              <h2 className="section-title" id="P08">
                Data Security
              </h2>
              <p className="text">
                We implement reasonable security measures to protect your
                information but cannot guarantee absolute security.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 9. Children’s Privacy */}
            <li>
              <h2 className="section-title" id="P09">
                Children’s Privacy
              </h2>
              <p className="text">
                Our website is not intended for children under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 10. International Users */}
            <li>
              <h2 className="section-title" id="P10">
                International Users
              </h2>
              <p className="text">
                If you access our website from outside the U.S., please be aware
                your information may be transferred to, stored, and processed in
                the United States.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 11. Changes to This Privacy Policy */}
            <li>
              <h2 className="section-title" id="P11">
                Changes to This Privacy Policy
              </h2>
              <p className="text">
                We may update this Privacy Policy from time to time. Changes
                will be posted here with an updated effective date.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 12. Contact Us */}
            <li>
              <h2 className="section-title" id="P12">
                Contact Us
              </h2>
              <p className="text">
                If you have questions or concerns about this Privacy Policy,
                please{" "}
                <Link className="btn-link2" to="/contact">
                  contact us
                </Link>
                .
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
          </ol>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PrivacyPolicy;
