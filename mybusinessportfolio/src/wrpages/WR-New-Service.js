import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../linkstyles/Website-Redesign.module.css";

function WRNewService() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    serviceType: "",
    paymentPlan: "",
  });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type.";
    if (!formData.paymentPlan) newErrors.paymentPlan = "Please select a payment plan.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitSuccess(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/service-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking. Please try again.");

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        date: "",
        serviceType: "",
        paymentPlan: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitSuccess(false);
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      {/* Responsive Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.brandLink}>
            Tony's Auto Repair Shop
          </Link>
        </div>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>
            <Link to="/website-redesign" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/wr-new-about" className={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/wr-new-gallery" className={styles.navItem}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/wr-new-service" className={styles.navItem}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/wr-new-contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Slogan */}
      <div className={styles.slogan}>
        <p>"Where decades of experience meet today’s top-quality service."</p>
      </div>

      {/* Service Booking Form */}
      <section className={styles.section}>
        <h2 className={styles.subheader}>Book Your Service Appointment</h2>
        <p>
          Choose your preferred date, the type of service you need, and your payment
          option below.
        </p>

        <form onSubmit={handleSubmit} noValidate className={styles.contactForm}>
          <label htmlFor="name" className={styles.contactForm__label}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.contactForm__input} ${
              errors.name ? styles.contactForm__errorInput : ""
            }`}
            aria-describedby="nameError"
          />
          {errors.name && (
            <div id="nameError" style={{ color: "red" }}>
              {errors.name}
            </div>
          )}

          <label htmlFor="email" className={styles.contactForm__label}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.contactForm__input} ${
              errors.email ? styles.contactForm__errorInput : ""
            }`}
            aria-describedby="emailError"
          />
          {errors.email && (
            <div id="emailError" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}

          <label htmlFor="date" className={styles.contactForm__label}>
            Select Date:
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`${styles.contactForm__input} ${
              errors.date ? styles.contactForm__errorInput : ""
            }`}
            aria-describedby="dateError"
          />
          {errors.date && (
            <div id="dateError" style={{ color: "red" }}>
              {errors.date}
            </div>
          )}

          <label htmlFor="serviceType" className={styles.contactForm__label}>
            Type of Service:
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`${styles.contactForm__input} ${
              errors.serviceType ? styles.contactForm__errorInput : ""
            }`}
            aria-describedby="serviceTypeError"
          >
            <option value="">-- Select Service --</option>
            <option value="Car Engine & Transmission Repair">Car Engine Repair</option>
            <option value="Brake Replacement">Brake Replacement</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Tire Service">Tire Service</option>
            <option value="Paint & Body Repair">Body Repair</option>
            <option value="Electrical Work">Electrical Work</option>
          </select>
          {errors.serviceType && (
            <div id="serviceTypeError" style={{ color: "red" }}>
              {errors.serviceType}
            </div>
          )}

          <fieldset style={{ marginTop: "1rem" }}>
            <legend className={styles.contactForm__label}>
              Payment Options:
            </legend>
            <div>
              <label className={styles["radio-label"]}>
                <input
                  type="radio"
                  name="paymentPlan"
                  value="Payment plan under $250"
                  checked={formData.paymentPlan === "Payment plan under $250"}
                  onChange={handleChange}
                />
                Payment plan through Tony's Auto Repair Shop under $250
              </label>
            </div>
            <div>
              <label className={styles["radio-label"]}>
                <input
                  type="radio"
                  name="paymentPlan"
                  value="Income-based payment plan $250 - $500"
                  checked={formData.paymentPlan === "Income-based payment plan $250 - $500"}
                  onChange={handleChange}
                />
                Income-based payment plan $250 - $500
              </label>
            </div>
            <div>
              <label className={styles["radio-label"]}>
                <input
                  type="radio"
                  name="paymentPlan"
                  value="Personal car repair loan above $500"
                  checked={formData.paymentPlan === "Personal car repair loan above $500"}
                  onChange={handleChange}
                />
                Personal car repair loan above $500
              </label>
            </div>
            {errors.paymentPlan && (
              <div id="paymentPlanError" style={{ color: "red" }}>
                {errors.paymentPlan}
              </div>
            )}
          </fieldset>

          <button
            type="submit"
            className={styles.contactForm__button}
            style={{ marginTop: "1rem" }}
          >
            Book Appointment
          </button>

          {submitSuccess && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              Thank you! Your appointment has been booked.
            </p>
          )}
          {submitSuccess === false && !Object.keys(errors).length && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              Sorry, there was an error submitting your booking.
            </p>
          )}
        </form>
      </section>

      {/* Footer */}
       <footer className={styles.footer}>
              <div>
                &copy; {new Date().getFullYear()} Tony's Auto Repair Shop — All rights
                reserved.
              </div>
      
              <div
                style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}
              >
                <h2>Contact Information</h2>
                <p>
                  <strong>Contact Person:</strong> Tony Auto
                </p>
                <p>
                  <strong>Contact Number:</strong> (023) 456-7890
                </p>
                <p>
                  <strong>Business Hours:</strong>
                </p>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: 0,
                    marginBottom: "1rem",
                  }}
                >
                  <li>Monday - Friday: 8:00am to 5:00pm</li>
                  <li>Saturday: 12:00pm to 4:00pm</li>
                  <li>Closed Sunday and Holidays</li>
                </ul>
                <p>
                  <strong>Email Address:</strong>{" "}
                  <a href="mailto:TonyAuto@Example.com" style={{ color: "#ffd700" }}>
                    TonyAuto@Example.com
                  </a>
                </p>
              </div>
            </footer>
    </div>
  );
}

export default WRNewService;
