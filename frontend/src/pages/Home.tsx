import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import moong from "../assets/hero_moong.png";
import kabuliChana from "../assets/hero_kabulichana.png";
import desiChana from "../assets/hero_desichana.png";
import soyabean from "../assets/hero_soyabean.png";
import mustard from "../assets/hero_mustard.png";
import peanut from "../assets/hero_peanut.jpg";

import office from "../assets/office.png";
import quality from "../assets/quality.png";
import expert from "../assets/expert.png";
import experience from "../assets/experienced.png";
import commitment from "../assets/commitment.png";
import longterm from "../assets/longterm.png";
import delivery from "../assets/fast-delivery.png";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const grains = [
    {
      name: "Moong",
      description: "Premium quality moong dal, rich in protein and ideal for healthy everyday meals.",
      image: moong,
    },
    {
      name: "Soyabean",
      description: "High-protein soyabeans perfect for cooking, oil extraction, and nutritious diets.",
      image: soyabean,
    },
    {
      name: "Mustard Seeds",
      description: "Fresh and aromatic mustard seeds, ideal for tempering and adding flavor to dishes.",
      image: mustard,
    },
    {
      name: "Desi Chana",
      description: "Nutritious desi chana packed with fiber and protein, perfect for traditional recipes.",
      image: desiChana,
    },
    {
      name: "Kabuli Chana",
      description: "Large, premium kabuli chana ideal for curries, salads, and wholesome meals.",
      image: kabuliChana,
    },
    {
      name: "Peanut",
      description: "Crisp and delicious peanuts, perfect for snacks and various culinary applications.",
      image: peanut,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % grains.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % grains.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + grains.length) % grains.length);
  };

  const features = [
    {
      title: "Quality Over Volume",
      description: "We deliver premium-grade products that meet international standards—every time.",
      icon: quality,
    },
    {
      title: "Specialized Expertise",
      description: "Focused product range ensures deep knowledge, better sourcing, and superior quality control.",
      icon: expert,
    },
    {
      title: "35+ Years of Experience",
      description: "Strong industry foundation with proven reliability in Agri trade.",
      icon: experience,
    },
    {
      title: "Commitment-Driven Approach",
      description: "We value transparency, accountability, and honouring every agreement.",
      icon: commitment,
    },
    {
      title: "Long-Term Business Philosophy",
      description: "We grow with our clients through consistency and trust.",
      icon: longterm,
    },
    {
      title: "Timely Deliveries",
      description: "Efficient supply chain ensures fast and dependable global shipments.",
      icon: delivery,
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="slideshow-container">
          <div className="slideshow-wrapper">
            {grains.map((grain, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <ImageWithFallback
                  src={grain.image}
                  alt={grain.name}
                  className="slide-img"
                />
                <div className="slide-info">
                  <h3 className="slide-title">{grain.name}</h3>
                  <p className="slide-description">{grain.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slide-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="slide-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>

      <section className="about-preview-section">
        <div className="about-preview-container">
          <div className="about-preview-image">
            <ImageWithFallback
              src={office}
              alt="Office Workspace"
              className="about-img"
            />
          </div>
          <div className="about-preview-content">
            <h2 className="section-title">About Our Company</h2>
            <p className="about-preview-text">
              We are a trusted exporter of premium-quality chickpeas and agricultural products from India. Built on a legacy of over 35 years in the agri-business, we combine deep industry expertise with reliable processes to deliver consistent quality and timely shipments to global markets. Our focus is on building long-term partnerships through trust, commitment, and excellence.
            </p>
            <p className="about-preview-text">
              Our team of experts works tirelessly to ensure that every product meets the
              highest standards of quality and every customer receives the best service possible.
            </p>
            <Link to="/about" className="btn btn-primary btn-large preview-btn">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                   <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">Contact us today to learn more about our products and services</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}