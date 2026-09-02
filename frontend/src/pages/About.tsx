import { ImageWithFallback } from "../components/ImageWithFallback";
import "../styles/About.css";
import quality from "../assets/quality_about.png";
import improvement from "../assets/improvement.png";
import growth from "../assets/growth.png";
import consistency from "../assets/consistency.png";
import customer from "../assets/customer.png";
import integrity from "../assets/integrity.png";
import msme from "../assets/msme-certificate.png";
import fssai from "../assets/fssai-certificate.png";
import apeda from "../assets/apeda-certificate.png";
import iec from "../assets/iec-certificate.png";
import mandi from "../assets/mandi-licence.png";
import gumasta from "../assets/gumasta-certificate.png";
import tan from "../assets/tan-certificate.png";
import gst from "../assets/gst-certificate.png";
import story from "../assets/our_history.png";

export default function About() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
  ];

  const values = [
    {
      title: "Uncompromising Quality",
      description:
        "Quality is the foundation of everything we do. Every product is processed and delivered to meet international standards.",
      icon: quality,
    },
    {
      title: "Integrity & Transparency",
      description:
        "We believe in honest communication, fair practices, and complete clarity in every transaction.",
      icon: integrity,
    },
    {
      title: "Customer Commitment",
      description:
        "We prioritize our clients by understanding their needs and delivering solutions that build long-term trust.",
      icon: customer,
    },
    {
      title: "Consistency & Reliability",
      description:
        "We ensure dependable service and consistent quality across every shipment.",
      icon: consistency,
    },
    {
      title: "Responsible Growth",
      description:
        "We grow sustainably in both international and domestic markets by focusing on long-term relationships and ethical business practices.",
      icon: growth,
    },
    {
      title: "Continuous Improvement",
      description:
        "We continuously enhance our processes and capabilities to meet evolving global standards.",
      icon: improvement,
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Building excellence through quality, dedication, and
            innovation
          </p>
        </div>
      </section>

      <section className="story-section">
        <h2 className="section-title">Our Story</h2>

        <div className="story-container">
          <div className="story-content">
            <p className="story-text">
              Shree Meera Maa Trading Company (SMTC) is an
              export-focused agri-business delivering
              premium-quality chickpeas (Kabuli and Desi) and
              other agricultural products to global markets.
              Built on a philosophy of quality over volume, we
              prioritize consistent international standards over
              large-scale trading, backed by 35+ years of
              industry expertise and deep market understanding.
            </p>

            <p className="story-text">
              We specialize only in products where we have
              proven knowledge and operational strength,
              enabling strict quality control, efficient
              sourcing, and reliable processing. At SMTC, we
              believe global trade is built on trust, and we
              focus on long-term relationships, transparent
              dealings, and honouring every commitment.
            </p>

            <p className="story-text">
              Our processes ensure timely deliveries, providing
              clients with consistency and confidence in every
              shipment. Supported by modern infrastructure,
              skilled manpower, and a strong supply chain, we
              aim to position Indian agricultural products as a
              symbol of quality and reliability worldwide.
            </p>
          </div>
          <div className="story-image">
            <ImageWithFallback
              src={story}
              alt="Our History"
              className="story-img"
            />
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="history">
          <h2 className="section-title">Our History</h2>
          <p className="history-story-text">
            Shree Meera Maa Trading Company was established in
            2022 with a vision to expand a strong domestic
            agri-business legacy into international markets.
          </p>
          <p className="history-story-text">
            With over three decades of experience in the Indian
            market, the foundation of SMTC comes from its parent
            company, M/s Anand Kumar Ajay Kumar, known for
            manufacturing premium-quality chickpeas and Agri
            products.
          </p>
          <p className="history-story-text">
            Leveraging this legacy, SMTC was created to serve
            global clients with the same commitment to quality,
            supported by modern machinery, experienced teams,
            and efficient processes. Our journey reflects a
            transition from a trusted domestic player to a
            reliable global export partner, focused on quality,
            integrity, and timely delivery.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="value-icon"><img src={value.icon} alt={value.title} /></div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="stats-section">
        <div className="history certificate-box">
          <h2 className="section-title">Our Licenses</h2>

          <div className="certificates-wrapper">
            <div className="certificates-track">
              {[gst, iec, fssai, msme, apeda, gumasta, mandi, tan,
                gst, iec, fssai, msme, apeda, gumasta, mandi, tan
              ].map((img, i) => (
                <img key={i} src={img} alt="certificate" />
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}