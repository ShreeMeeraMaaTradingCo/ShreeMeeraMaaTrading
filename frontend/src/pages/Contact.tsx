import { useState, useMemo } from "react";
import "../styles/Contact.css";
import { getNames, getCode } from "country-list";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import type { FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    quantity: "",
    packaging: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [showCodeDropdown, setShowCodeDropdown] = useState(false);

  const countries = useMemo(() => {
    const list = getNames().sort();
    return ["India", ...list.filter((c) => c !== "India")];
  }, []);

  const countryCodes = getCountries().map((code) => ({
    code,
    dial: `+${getCountryCallingCode(code)}`,
  })).sort((a, b) => a.dial.localeCompare(b.dial));

  const Label = ({
    text,
    htmlFor,
    required = false,
  }: {
    text: string;
    htmlFor: string;
    required?: boolean;
  }) => (
    <label htmlFor={htmlFor}>
      {text} {required && <span className="required">*</span>}
    </label>
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "country") {
      const isoCode = getCode(value);
      const dial = isoCode
        ? `+${getCountryCallingCode(isoCode as any)}`
        : "";
      setFormData((prev) => ({
        ...prev,
        country: value,
        countryCode: dial,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((value) => value.trim() === "");
    if (isEmpty) {
      setFormStatus("Please fill all required fields.");
      return;
    }

    setFormStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          to: "admin@shreemeeramaatrading.com",
          subject: `New Inquiry: ${formData.subject} from ${formData.company}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          // phone: formData.phone,
          phone: `${formData.countryCode} ${formData.phone}`,
          product: formData.subject,
          quantity: formData.quantity,
          packaging: formData.packaging,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("Thank you! Your message has been sent successfully.");
        // setFormData({
        //   name: "", email: "", company: "", country: "",
        //   phone: "", subject: "", quantity: "", packaging: "", message: "",
        // });
        setFormData({
          name: "", email: "", company: "", country: "",
          countryCode: "+91",
          phone: "", subject: "", quantity: "", packaging: "", message: "",
        });
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("Network error. Please check your connection.");
    }

    setTimeout(() => setFormStatus(""), 6000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="info-title">Get In Touch</h2>
            <p className="info-text">
              Have a question or want to work together? Fill out
              the form or reach us through the contact details below.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">📧</div>
                <div className="detail-content">
                  <h3>Email</h3>
                  <p>admin@shreemeeramaatrading.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <h3>Phone</h3>
                  <p>+91 9009220308</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <h3>Address</h3>
                  <p>Warehouse No. 27, New Anaj Mandi, Chhawani</p>
                  <p>Indore - 452001, India</p>
                </div>
              </div>
            </div>

            <section className="map-section">
              <div className="map-container">
                <h2 className="section-title visit-title">
                  Visit Our Office
                </h2>

                <a
                  href="https://www.google.com/maps?q=Warehouse+No.+27,+New+Anaj+Mandi,+Chhawani,+Indore+-+452001,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <div className="map-wrapper">
                    <iframe
                      title="Location"
                      src="https://www.google.com/maps?q=Warehouse+No.+27,+New+Anaj+Mandi,+Chhawani,+Indore+-+452001,+India&output=embed"
                      width="100%"
                      height="350"
                      style={{
                        border: 0,
                        borderRadius: "12px",
                      }}
                      loading="lazy"
                    ></iframe>

                    <div className="map-overlay">
                      <span>📍 Click to open in Google Maps</span>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>

          <div className="contact-form-wrapper">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <Label text="Full Name" htmlFor="name" required />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your Name" />
              </div>

              <div className="form-group">
                <Label text="Company Name" htmlFor="company" required />
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Enter your Company Name" />
              </div>

              <div className="form-group">
                <Label text="Email Address" htmlFor="email" required />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <Label text="Country" htmlFor="country" required />
                <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <Label text="Phone Number" htmlFor="phone" required />
                <div style={{ display: "flex", position: "relative" }}>
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) => {
                      handleChange(e);
                      setShowCodeDropdown(true);
                    }}
                    onFocus={() => setShowCodeDropdown(true)}
                    onBlur={() => setTimeout(() => setShowCodeDropdown(false), 200)}
                    style={{ width: "110px", flexShrink: 0, borderRadius: "10px 0 0 10px", borderRight: "none" }}
                    placeholder="+91"
                    autoComplete="off"
                  />
                  {showCodeDropdown && (
                    <div className="code-dropdown">
                      {countryCodes
                        .filter(({ dial }) => dial.includes(formData.countryCode))
                        .map(({ code, dial }) => (
                          <div
                            key={code}
                            className="code-option"
                            onMouseDown={() => {
                              setFormData((prev) => ({ ...prev, countryCode: dial }));
                              setShowCodeDropdown(false);
                            }}
                          >
                            {dial} ({code})
                          </div>
                        ))}
                    </div>
                  )}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="98765 43210"
                    style={{ flex: 1, borderRadius: "0 10px 10px 0" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <Label text="Product Interested In" htmlFor="subject" required />
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select Product</option>
                  <option>Chawla (Black Eyed Beans)</option>
                  <option>Chickpeas</option>
                  <option>Desi Chana</option>
                  <option>Kabuli Chickpeas</option>
                  <option>Moong (Green Gram)</option>
                  <option>Mustard Seeds</option>
                  <option>Peanuts</option>
                  <option>Pulses</option>
                  <option>Rajma (Kidney Beans)</option>
                  <option>Soyabean</option>
                  <option>Other Agri Products</option>
                </select>
              </div>

              <div className="form-group">
                <Label text="Quantity Required" htmlFor="quantity" />
                <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required placeholder="e.g. 50kg, 10 tons, 100 bags" />
              </div>

              <div className="form-group">
                <Label text="Packaging Preferences" htmlFor="packaging" />
                <input type="text" id="packaging" name="packaging" value={formData.packaging} onChange={handleChange} required placeholder="e.g. 50kg bags, bulk, custom packing" />
              </div>

              <div className="form-group">
                <Label text="Message" htmlFor="message" required />
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Write your message here..." />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {formStatus && (
                <div className="form-status">{formStatus}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}