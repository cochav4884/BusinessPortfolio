import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const PrivacyPolicy = () => {
  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Mom &amp; Pop Web Design</h1>
        </header>
        <h2 className="section">* Privacy Policy *</h2>
        <ul className="container">
          <div id="top" aria-label="Top of Page" tabIndex="-1"></div>
          <h2 className="section text-dark">* Table of Contents *</h2>
          <li>
            <a className="btn-link" href="#S01">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S02">
              Coverage
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S03">
              Definitions of Types of Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S04">
              Collection and Use of Personally Identifiable Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S05">
              Website Accessibility Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S06">
              Do Not Sell My Personal Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S07">
              Updates to this Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S08">
              Intellectual Property and Content Ownership
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S09">
              Contact Me
            </a>
          </li>
        </ul>
        <h3>* Last updated June 24, 2025 *</h3>
        <div className="container">
          {/* Change domain url when you have it */}
          <p>
            Welcome to our website at{" "}
            <a
              href="https://mompopwebdesign.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mompopwebdesign.com/
            </a>
            . I am committed to protecting the personal privacy of visitors and
            guests using my Site.
          </p>
          <ol>
            {/* 1. Privacy Poclicy Section */}
            <li>
              <h2 className="section-title" id="S01">
                Privacy Policy
              </h2>
              <p className="text">
                This policy explains how I collect, use, and protect your
                personal information in compliance with applicable laws,
                including the California Consumer Privacy Act (CCPA) and U.S.
                privacy regulations.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 2. Coverage Section */}{" "}
            {/* Change domain url when you have it */}
            <li>
              <h2 className="section-title" id="S02">
                Coverage
              </h2>
              <p className="text">
                This privacy policy applies to all pages, features, and content
                of this website, regardless of the domain or platform used to
                access it. (This privacy policy applies to all pages and content
                on{" "}
                <a
                  href="https://mompopwebdesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://mompopwebdesign.com/
                </a>
                .)
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 3. Definitions of Types of Information Section */}
            <li>
              <h2 className="section-title" id="S03">
                Definitions of Types of Information
              </h2>
              <p className="text">
                I collect different types of information from users, including
                personally identifiable information (PII) such as your name,
                mailing and email addresses, financial data like credit card
                numbers, and demographic data including age and zip code. PII is
                information that can specifically identify you.
              </p>
              <p className="text">
                I also collect Traffic Data automatically, such as your IP
                address, browser type, domain server, and computer type, which
                is anonymous and used for analytics and improving your
                experience.
              </p>
              <p className="text">
                Cookies and similar technologies may be used to collect Traffic
                Data and remember your preferences.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 4. Use of Information Section */}
            <li>
              <h2 className="section-title" id="S04">
                Collection and Use of Personally Identifiable Information
              </h2>
              <h4>* Registration *</h4>
              <p className="text">
                Access to some parts of my Site may require you to provide
                personal information voluntarily. You are never obligated to
                provide such information, but if you choose not to, some
                features may be inaccessible.
              </p>

              <h4>
                * Sharing Personally Identifiable Information with Third Parties
                *
              </h4>
              <p className="text">
                I may share your personal information with trusted service
                providers to help operate the Site and improve your experience.
                I will not sell your personal information without your explicit
                consent, consistent with CCPA requirements. You may opt out of
                such sharing by contacting us through the contact page.
              </p>

              <h4>* Legal Disclosures *</h4>
              <p className="text">
                I may disclose your personal information if required by law or
                to protect my rights, comply with legal processes, or enforce
                our Terms of Use.
              </p>

              <h4>* Traffic Data *</h4>
              <p className="text">
                Traffic Data is collected regardless of registration status to
                help me analyze usage patterns and improve services. This data
                may be shared with partners but does not identify you
                personally.
              </p>

              <h4>* Cookies *</h4>
              <p className="text">
                Cookies are small data files stored on your device that help
                enhance website functionality and user experience. You can
                disable cookies through your browser settings, but some Site
                features may not work properly without them.
              </p>

              <h4>* Children’s Privacy *</h4>
              <p className="text">
                My Site is not intended for children under 13, and we do not
                knowingly collect personal information from minors without
                parental consent, in compliance with the Children’s Online
                Privacy Protection Act (COPPA).
              </p>

              <h4>* IP Addresses *</h4>
              <p className="text">
                IP addresses may be collected for system administration, audit,
                and security purposes. I do not link IP addresses to personally
                identifiable information unless necessary to enforce Site
                policies or legal requirements.
              </p>

              <h4>* Third-Party Relationships *</h4>
              <p className="text">
                My Site may include links or services provided by trusted third
                parties. I am not responsible for their privacy policies and
                recommend reviewing those separately. If you have concerns
                regarding any third-party use of your information, please
                contact us.
              </p>

              <h4>* Security *</h4>
              <p className="text">
                I employ industry-standard security measures to protect your
                data but cannot guarantee absolute security. Please promptly
                notify me of any unauthorized use of your account information.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 5. Website Accessibility Policy Section */}
            <li>
              <h2 className="section-title" id="S05">
                Website Accessibility Policy
              </h2>
              <p className="text">
                I am committed to providing accessible digital experiences in
                accordance with WCAG 2.0 “A” and “AA” guidelines, including
                support for screen readers, keyboard navigation, and
                color-independent information.
              </p>
              <p className="text">
                I welcome feedback to improve accessibility; please contact me
                through my{" "}
                <Link className="privacy-inline-link" to="/Contact">
                  contact me
                </Link>{" "}
                page.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 6. Do Not Sell My Personal Information Section */}
            <li>
              <h2 className="section-title" id="S06">
                Do Not Sell My Personal Information
              </h2>

              <h4 className="subsection-title">* Global Privacy Rights *</h4>
              <p className="text">
                I respect the privacy rights of all my users worldwide.
                Depending on your jurisdiction, you may have rights regarding
                your personal information under laws such as the European
                Union’s General Data Protection Regulation (GDPR), Canada’s
                Personal Information Protection and Electronic Documents Act
                (PIPEDA), or other applicable laws.
              </p>

              <h4 className="subsection-title">
                * How to Exercise Your Rights *
              </h4>
              <p className="text">
                If you wish to exercise your privacy rights — including access,
                correction, deletion, objection to processing, or data
                portability — please{" "}
                <Link className="btn-link2" to="/Contact">
                  contact me
                </Link>{" "}
                with your request and specify your jurisdiction. When submitting
                a request, please select the “Do Not Sell” option in the “Select
                a Subject” dropdown on the contact form if you wish to opt out
                of the sale or sharing of your personal information. Otherwise,
                you may provide your consent to the processing of your personal
                data by selecting the corresponding consent checkbox.
              </p>

              <h4 className="subsection-title">
                * California Privacy Rights *
              </h4>
              <p className="text">
                Under the California Consumer Privacy Act (CCPA) and California
                Privacy Rights Act (CPRA), California residents have the right
                to opt out of the sale or sharing of their personal information.
                While this website does not sell personal information for
                monetary consideration, I may share personal data with trusted
                service providers to improve functionality and services.
              </p>

              <h4 className="subsection-title">* How to Opt Out *</h4>
              <p className="text">
                If you are a California resident and would like to exercise your
                right to opt out, please{" "}
                <Link className="btn-link2" to="/Contact">
                  contact me
                </Link>{" "}
                and include "Do Not Sell My Info" in your message subject or
                body. I will respond to your request promptly and in accordance
                with applicable laws.
              </p>

              <h4 className="subsection-title">* Accessibility Support *</h4>
              <p className="text">
                For assistance with your privacy rights requests, including
                those related to accessibility needs, please reach out to me
                through my{" "}
                <Link className="btn-link2" to="/Contact">
                  contact page
                </Link>
                .
              </p>

              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 07. Updates to this Policy Section */}
            <li>
              <h2 className="section-title" id="S07">
                Updates to this Policy
              </h2>
              <p className="text">
                I may update this policy periodically. Changes will be posted on
                this page with a new effective date.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 08. Intellectual Property and Content Ownership Section */}
            <li>
              <h2 className="section-title" id="S08">
                Intellectual Property and Content Ownership
              </h2>
              <p className="text">
                All content, including text, design, graphics, and images, on
                this website are the intellectual property of Corinne Padilla
                (the site creator), unless otherwise indicated.
              </p>
              <p className="text">
                Unauthorized use, reproduction, modification, or distribution of
                any website content or photographs without explicit written
                permission from Corinne Padilla is strictly
                prohibited.
              </p>
              <p className="text">
                Visitors and users may view and download content for personal,
                non-commercial use only. Any other use, including commercial
                exploitation or publication, requires prior written consent.
              </p>
              <p className="text">
                I actively protect my copyrights and may take legal action
                against infringement or unauthorized use.
              </p>
              <p className="text">
                For permissions or licensing inquiries, please contact me via
                the{" "}
                <Link className="btn-link2" to="/contact">
                  contactme
                </Link>
                <br />
                page.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
            {/* 09. Contact Us Section */}
            <li>
              <h2 className="section-title" id="S09">
                Contact Me
              </h2>
              <p className="text">
                If you have any questions about this privacy policy, please{" "}
                <Link className="btn-link2" to="/Contact">
                  contact me
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
