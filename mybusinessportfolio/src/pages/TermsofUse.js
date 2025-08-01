import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const TermsOfUse = () => {
  return (
    <div className="main_container" id="top">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Mom &amp; Pop Web Design</h1>
        </header>

        <h2 className="section">* Terms of Use *</h2>

        <ul className="container">
          <div id="top" aria-label="Top of page" tabIndex="-1"></div>
          <h2 className="section text-dark">* Table of Contents *</h2>
          <li>
            <a className="btn-link" href="#S01">
              Agreements to Terms
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S02">
              Intellectual Property Rights
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S03">
              User Representations
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S04">
              Prohibited Activities
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S05">
              User Generated Contributions
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S06">
              Contribution License
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S07">
              Guidelines For Reviews
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S08">
              Mobile Application License
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S09">
              Submissions
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S10">
              Third-Party Website and Content
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S11">
              Advertisers
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S12">
              Site Management
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S13">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S14">
              Term and Termination
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S15">
              Modifications and Interruptions
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S16">
              Governing Law
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S17">
              Dispute Resolution
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S18">
              Corrections
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S19">
              Disclaimer
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S20">
              Limitations and Liability
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S21">
              Indemnification
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S22">
              User Data
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S23">
              Electronic Communications, Transactions, and Signatures
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S24">
              California Users and Residents
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S25">
              Miscellaneous
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S26">
              Content Ownership and Licensing
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S27">
              Contact Me
            </a>
          </li>
        </ul>

        <h3>* Last updated July 7, 2025 *</h3>

        <div className="container">
          <ol>
            {/* 1. Agreements to Terms */}
            <li>
              <h2 className="section-title" id="S01">
                Agreements to Terms
              </h2>
              <p className="text">
                By accessing or using this website (
                <em>https://www.mompopwebdesign.com</em>), operated by Corinne
                Padilla, you agree to comply with and be legally bound by these
                Terms of Use and all applicable laws, including federal and
                California state laws. If you do not agree to any part of these
                Terms, you must discontinue use immediately.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 2. Intellectual Property Rights */}
            <li>
              <h2 className="section-title" id="S02">
                Intellectual Property Rights
              </h2>
              <p className="text">
                All content on the Site, including text, graphics, logos,
                images, and software, is owned by Corinne Padilla (site creator)
                or licensed to us, and is protected by copyright, trademark, and
                other laws.
              </p>
              <p className="text">
                Unauthorized use, reproduction, distribution, or modification of
                any content, including photographs, without explict prior
                written persmission from Corinne Padilla is strictly prohibited.
              </p>
              <p className="text">
                Users may view and download content solely for personal,
                non-commercial use. Any other use, including commercial use or
                redistribution requires prior written consent.
              </p>
              <p className="text">
                We reserve the right to take legal action against infringement
                or unauthorized use of my intellectual property.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 3. User Representations */}
            <li>
              <h2 className="section-title" id="S03">
                User Representations
              </h2>
              <p className="text">
                By using this Site, you affirm you are at least 18 years old or
                have consent of a parent or guardian, and that your use of this
                Site will comply with all applicable laws and regulations.
              </p>
              <p className="text">
                You agree not to use the Site unlawful purposes or in any way
                that could damage, disable, or impair the Site or interfere with
                function or other users' experience.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 4. Prohibited Activities */}
            <li>
              <h2 className="section-title" id="S04">
                Prohibited Activities
              </h2>
              <p className="text">
                You agree not to:
                <ul>
                  <li>Violate any applicable laws or regulations;</li>
                  <li>Upload or transmit viruses, malware, or harmful code;</li>
                  <li>
                    Attempt unauthorized access to the Site or other systems;
                  </li>
                  <li>Harass, abuse, or harm others;</li>
                  <li>
                    Use the Site for commercial purposes without permission;
                  </li>
                  <li>
                    Copy, reproduce, or distribute Site content except as
                    expressly permitted;
                  </li>
                  <li>
                    Use automated systems, bots, or scripts to access or collect
                    data from the Site.
                  </li>
                </ul>
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 5. User Generated Contributions */}
            <li>
              <h2 className="section-title" id="S05">
                User Generated Contributions
              </h2>
              <p className="text">
                If you submit content such as comments or other materials to the
                Site, you grant Corinne Padilla a perpetual, worldwide,
                royalty-free, sublicensable license to use, reproduce, modify,
                adapt, publish, translate, distribute, and display such content
                in any media.
              </p>
              <p className="text">
                You represent and warrant that you own all rights to your
                contributions or have obtained all necessary permissions for the
                content submitted.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 6. Contribution License */}
            <li>
              <h2 className="section-title" id="S06">
                Contribution License
              </h2>
              <p className="text">
                Contributions you submit are licensed under terms that allow me
                to freely use, modify, and distribute your content, including
                commercial purposes. You waive any moral rights or claims to
                inspect or approve the use of your contributions.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 7. Guidelines For Reviews */}
            <li>
              <h2 className="section-title" id="S07">
                Guidelines For Reviews
              </h2>
              <p className="text">
                Reviews of feedback submitted should be should be respectful,
                truthful, and not infringe on others' rights. Content that is
                defamatory, offensive, obscene, or discriminatory will be
                removed.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 8. Mobile Application License */}
            <li>
              <h2 className="section-title" id="S08">
                Mobile Application License
              </h2>
              <p className="text">
                If you download or use any mobile applications linked to the
                Site, your use is governed by additional license agreements and
                terms, which you must accept before installation or use.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 9. Submissions */}
            <li>
              <h2 className="section-title" id="S09">
                Submissions
              </h2>
              <p className="text">
                Any submissions such as ideas, feedback, or suggestions sent to
                me become my exclusive property. You agree not to submit
                confidential or proprietary information.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 10. Third-Party Website and Content */}
            <li>
              <h2 className="section-title" id="S10">
                Third-Party Website and Content
              </h2>
              <p className="text">
                The Site may contain links to third-party websites. I do not
                control or endorse such content, and I am not responsible for
                any damages or losses resulting from your interaction with those
                sites.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 11. Advertisers */}
            <li>
              <h2 className="section-title" id="S11">
                Advertisers
              </h2>
              <p className="text">
                Advertisements displayed on the Site are solely the
                responsibility of advertisers. I do not guarantee the accuracy
                of legality of their ads and disclaim all liability related to
                them.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 12. Site Management */}
            <li>
              <h2 className="section-title" id="S12">
                Site Management
              </h2>
              <p className="text">
                I reserve the right to monitor, restrict, suspend, or remove
                content or users from this Site for any reason, including
                violations of these Terms or harmful conduct.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 13. Privacy Policy */}
            <li>
              <h2 className="section-title" id="S13">
                Privacy Policy
              </h2>
              <p className="text">
                Your use of the Site is also governed by my Privacy Policy,
                which explains how we collect, use, and protect your
                information. Please review it carefully.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 14. Term and Termination */}
            <li>
              <h2 className="section-title" id="S14">
                Term and Termination
              </h2>
              <p className="text">
                I may terminate or suspend your access to this Site immediately,
                without notice, if you breach these Terms or engage in conduct I
                deem harmful.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 15. Modifications and Interruptions */}
            <li>
              <h2 className="section-title" id="S15">
                Modifications and Interruptions
              </h2>
              <p className="text">
                I reserve the right to modify or discontinue the Site without
                notice or any features without prior notice. I am not liable for
                any loss or damage resulting from such modifications or
                interruptions.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 16. Governing Law */}
            <li>
              <h2 className="section-title" id="S16">
                Governing Law
              </h2>
              <p className="text">
                These Terms and your use of the Site are governed by the laws of
                the State of California and applicable U.S. federal laws,
                without regard to conflict of law principles.
              </p>
              <p className="text">
                You agree to submit to the jurisdiction of courts located in
                California for any disputes arising under these terms.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 17. Dispute Resolution */}
            <li>
              <h2 className="section-title" id="S17">
                Dispute Resolution
              </h2>
              <h3>Informal Negotiations</h3>
              <p className="text">
                Before initiating formal proceedings, parties agree to attempt
                in good faith to resolve disputes informally.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 18. Corrections */}
            <li>
              <h2 className="section-title" id="S18">
                Corrections
              </h2>
              <p className="text">
                I strive for accuracy but do not guarantee the site will be
                error-free. I may correct errors or ommisions at any time
                without liability.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 19. Disclaimer */}
            <li>
              <h2 className="section-title" id="S19">
                Disclaimer
              </h2>
              <p className="text">
                The Site and all content are provided “as is” without warranties
                of any kind, express or implied, including merchantablity or
                fitness for a particular purpose.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 20. Limitations and Liability */}
            <li>
              <h2 className="section-title" id="S20">
                Limitations and Liability
              </h2>
              <p className="text">
                To the fullest extent permitted by law, Corinne Padilla nor
                her affiliates are not liable for any indirect, incidental,
                consequental, or punitive damages arising from your use of this
                Site.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 21. Indemnification */}
            <li>
              <h2 className="section-title" id="S21">
                Indemnification
              </h2>
              <p className="text">
                You agree to indemnify, defend, and hold harmless Corinne
                Padilla and her affiliates from any claims, damages,
                liabilitites, and expenses arising from your violation of these
                Terms or your misuse of the Site.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 22. User Data */}
            <li>
              <h2 className="section-title" id="S22">
                User Data
              </h2>
              <p className="text">
                I collect and maintain user data as described in my Privacy
                Policy. You are responsible for the accuracy of any information
                you provide.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 23. Electronic Communications, Transactions, and Signatures */}
            <li>
              <h2 className="section-title" id="S23">
                Electronic Communications, Transactions, and Signatures
              </h2>
              <p className="text">
                By using the Site, you consent to receive electronic
                communications and agree that electronic signatures, contracts,
                and records satisfy any legal requirements.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 24. California Users and Residents */}
            <li>
              <h2 className="section-title" id="S24">
                California Users and Residents
              </h2>
              <p className="text">
                If you are a California resident, you have specific rights under
                the California Consumer Privacy Act (CCPA). For more
                information, please review my Privacy Policy or contact me.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 25. Miscellaneous */}
            <li>
              <h2 className="section-title" id="S25">
                Miscellaneous
              </h2>
              <p className="text">
                These Terms constitute the entire agreement between you and me
                regarding the Site and supersede any prior agreements. If any
                provision is found invalid, the remaining Terms remain in
                effect.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 26. Content Ownership and Licensing */}
            <li>
              <h2 className="section-title" id="S26">
                Content Ownership and Licensing
              </h2>
              <p className="text">
                All photographs on this Site are the property of Corinne Padilla
                and are protected by copyright laws.
              </p>
              <p className="text">
                Website design, code, and textual content are owned by Corinne
                Padilla.
              </p>
              <p className="text">
                Visitors agree not to copy, sell, distribute, or create
                derivative works from any Site content or photographs without
                prior written permission from Corinne Padilla.
              </p>
              <p className="text">
                For permission requests or licensing inquires, please contact me
                via the{" "}
                <Link className="btn-link2" to="/contact">
                  Contact Me
                </Link>{" "}
                page.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 27. Contact Me */}
            <li>
              <h2 className="section-title" id="S27">
                Contact Me
              </h2>
              <p className="text">
                For any questions or concerns regarding these Terms, please{" "}
                <Link className="btn-link2" to="/contact">
                  Contact Me
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

export default TermsOfUse;
