import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    doNotSell: false,
    consentChoice: "",
    acceptedTermsAndPrivacy: false,
  });

  const [status, setStatus] = useState("");

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  console.log("Backend URL is:", process.env.REACT_APP_BACKEND_URL);
  // Place the useEffect here — runs once when component mounts
  useEffect(() => {
    console.log("Backend URL is:", backendUrl);
  }, [backendUrl]);

  // ... rest of your code (handleChange, handleSubmit, return JSX)

  const handleChange = (e) => {
    setStatus(""); // Clear any existing status message on new input

    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.subject) {
      setStatus("Please select a subject for your message.");
      return;
    }

    if (!formData.consentChoice) {
      setStatus("Please indicate your consent preference.");
      return;
    }

    if (
      formData.consentChoice === "no_consent" &&
      (formData.subject !== "donotsell" || formData.message.trim() === "")
    ) {
      setStatus(
        'To decline consent, please select "Do Not Sell" as the subject and include a comment.'
      );
      return;
    }

    if (!formData.acceptedTermsAndPrivacy) {
      setStatus("Please accept the terms and privacy policy to proceed.");
      return;
    }

    // Prepare payload without consentChoice since backend doesn't expect it
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      doNotSell: formData.doNotSell,
      acceptedTermsAndPrivacy: formData.acceptedTermsAndPrivacy,
    };

    try {
      const response = await fetch(`${backendUrl}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          doNotSell: false,
          consentChoice: "",
          acceptedTermsAndPrivacy: false,
        });
      } else {
        setStatus(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="main_container">
      <div className="container-fluid">
        <div className="page">
          <header>
            <h1 className="page-header">Contact Me</h1>
          </header>
          <h2 className="section">
            * I would love to hear from you! Please fill out the form below. *
          </h2>

          <section className="container">
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                type="email"
                required
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a Subject
                </option>
                <option value="general">General Question</option>
                <option value="talent">Suggestion</option>
                <option value="comment">Comment</option>
                <option value="technical">Technical Issue</option>
                <option value="donotsell">Do Not Sell</option>
              </select>

              <textarea
                name="message"
                placeholder="What would you like to ask, suggest, or share?"
                onChange={handleChange}
                value={formData.message}
                required
              />

              {/* Consent Radio Buttons */}
              <div className="radio-container">
                <p className="radio-label">
                  Please select your data processing preference:
                </p>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="consentChoice"
                    value="consent"
                    checked={formData.consentChoice === "consent"}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I consent to the processing of my personal data as described
                    in the{" "}
                    <Link to="/privacypolicy" className="privacy-inline-link">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="consentChoice"
                    value="no_consent"
                    checked={formData.consentChoice === "no_consent"}
                    onChange={handleChange}
                  />
                  <span>
                    I do not consent to the processing of my personal data as
                    described in the{" "}
                    <Link to="/privacypolicy" className="privacy-inline-link">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Do Not Sell */}
              <div className="checkbox-container">
                <label className="checkbox-label" htmlFor="doNotSell">
                  <input
                    id="doNotSell"
                    type="checkbox"
                    name="doNotSell"
                    checked={formData.doNotSell}
                    onChange={handleChange}
                  />
                  &nbsp;I am a California resident and I wish to opt out of the
                  sale or sharing of my personal information.
                </label>
              </div>

              {/* Terms and Privacy */}
              <div className="checkbox-container">
                <label
                  className="checkbox-label"
                  htmlFor="acceptedTermsAndPrivacy"
                >
                  <input
                    id="acceptedTermsAndPrivacy"
                    type="checkbox"
                    name="acceptedTermsAndPrivacy"
                    checked={formData.acceptedTermsAndPrivacy}
                    onChange={handleChange}
                    required
                  />
                  &nbsp;I agree to the{" "}
                  <Link className="privacy-inline-link" to="/termsofuse">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link className="privacy-inline-link" to="/privacypolicy">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button className="custom-button" type="submit">
                Send
              </button>
            </form>

            {status && (
              <p
                className={`status-message ${
                  status.includes("successfully")
                    ? "status-success"
                    : "status-error"
                }`}
              >
                {status}
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
