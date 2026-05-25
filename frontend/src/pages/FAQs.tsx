import { useState } from "react";
import "../styles/FAQs.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null,
  );

  const faqs = [
    {
      question: "What products do you export?",
      answer:
        "We export premium-quality agricultural products including Kabuli Chickpeas, Desi Chickpeas (Chana), Mustard Seeds, Soyabean, Moong, and other agri commodities based on buyer requirements.",
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "Our standard MOQ is one full container load (20ft or 40ft). However, we can discuss flexible quantities depending on the product and order requirements.",
    },
    {
      question: "Do you provide customized packaging?",
      answer:
        "Yes, we offer customized packaging options including private labeling, branding, and different bag sizes as per client requirements.",
    },
    {
      question: "What quality standards do you follow?",
      answer:
        "We follow strict quality control processes to ensure our products meet international export standards. Third-party inspection (such as SGS) can also be arranged upon request.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We generally work with standard international payment terms such as T/T (Telegraphic Transfer) and L/C (Letter of Credit). Terms can be discussed based on order size and relationship.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Our typical delivery timeline is 10–15 days after order confirmation, depending on product availability and shipment schedule.",
    },
    {
      question: "Which countries do you export to?",
      answer:
        "We supply to buyers across multiple international markets and are open to expanding into new regions based on demand.",
    },
    {
      question:
        "Can you provide samples before placing an order?",
      answer:
        "Yes, samples can be provided for quality evaluation. Shipping costs may apply depending on the requirement.",
    },
    {
      question: "Do you offer third-party inspection?",
      answer:
        "Yes, we can arrange third-party inspections (like SGS or equivalent) to ensure transparency and quality assurance before shipment.",
    },
    {
      question:
        "How do you ensure product quality and consistency?",
      answer:
        "We work with trusted sourcing networks, advanced processing methods, and strict quality checks to maintain consistency across all shipments.",
    },
    {
      question:
        "Can you handle bulk and long-term supply contracts?",
      answer:
        "Yes, we specialize in building long-term relationships and can handle bulk orders with consistent supply.",
    },
    {
      question: "How can I place an order or get a quotation?",
      answer:
        "You can fill out our inquiry form or contact us directly via WhatsApp or email. Our team will respond within 24 hours with complete details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <section className="faqs-hero">
        <div className="faqs-hero-content">
          <h1 className="page-title">
            Frequently Asked Questions
          </h1>
          <p className="page-subtitle">
            Find answers to common questions about our products
            and services
          </p>
        </div>
      </section>

      <section className="faqs-section">
        <div className="faqs-container">
          <div className="faqs-intro">
            <h2 className="section-title">
              How Can We Help You?
            </h2>
            <p className="intro-text">
              Browse through our frequently asked questions
              below. If you can't find what you're looking for,
              feel free to contact our support team.
            </p>
          </div>

          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">
                    {faq.question}
                  </span>
                  <span
                    className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta-section">
        <div className="faq-cta-content">
          <h2 className="cta-title">Still Have Questions?</h2>
          <p className="cta-text">
            Our support team is here to help you with any
            additional questions
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Support
          </a>
        </div>
      </section>      
    </div>
  );
}