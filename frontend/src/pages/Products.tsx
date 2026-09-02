import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ImageWithFallback } from "../components/ImageWithFallback";
import "../styles/Products.css";
import kabuliChana from "../assets/Kabuli Chana.avif";
import desichana from "../assets/desichana.webp";
import mustard from "../assets/mustard_seeds.avif";
import soyabean from "../assets/soyabean.jpg";
import moong from "../assets/moong.webp";
import peanuts from "../assets/peanuts.jpg";
import other_agri from "../assets/other_agri.jpg";
import chickpeas from "../assets/chickpea_imp.avif";
import chawla from "../assets/chawla.webp";
import rajma from "../assets/rajma.avif";
import pulses from "../assets/pulses.jpg";
import brand1 from "../assets/brand_Jumbo.png";
import brand2 from "../assets/brand_Rajhans.png";
import brand3 from "../assets/brand_Rajmoti.png";
import brand4 from "../assets/brand_SMMTC.png";

type Product = {
  id: number;
  name: string;
  category: string | string[];
  description: string;
  image: string;
  tables?: SpecTable[];
};

type SpecTable = {
  note: string | null | undefined;
  headers: string[];
  rows: (string | number)[][];
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const hasSpecs = (product: Product) => product.tables && product.tables.length > 0;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); const exportProducts = [
    {
      id: 1,
      name: "Kabuli Chickpeas",
      category: "Exports",
      description: "We offer premium export-quality Kabuli chickpeas known for their large size, uniform color, and superior taste. Sourced from trusted farms and processed with advanced technology to meet international standards.",
      image: kabuliChana,
      tables: [
        {
          headers: ["Count (per ounce)", "Approx Size (mm)", "Grade Description"],
          rows: [
            ["58 – 60", "8 – 9 mm", "Small"],
            ["52 – 54", "9 – 10 mm", "Medium - Small"],
            ["48 – 50", "10 mm", "Medium"],
            ["44 – 46", "11 – 12 mm", "Large"],
            ["42 – 44", "12 mm", "Bold"],
            ["38 – 40", "12 – 13 mm", "Extra Bold"],
            ["36 – 38", "13 mm", "Jumbo"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 2,
      name: "Desi Chana",
      category: "Exports",
      description: "High-quality Desi chickpeas with strong nutritional value and consistent grading, suitable for global food industries.",
      image: desichana,
      tables: [
        {
          headers: ["Count (per ounce)", "Approx Size (mm)", "Grade Description"],
          rows: [
            ["95 – 110", "6 – 7 mm", "Small"],
            ["85 – 95", "7 – 8 mm", "Medium - Small"],
            ["75 – 85", "8 – 9 mm", "Medium"],
            ["65 – 75", "9 – 10 mm", "Large"],
            ["55 – 65", "10 – 11 mm", "Bold"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 3,
      name: "Moong (Green Gram)",
      category: "Exports",
      description: "Premium-grade Moong known for its purity, freshness, and uniform grains.",
      image: moong,
      tables: [
        {
          headers: ["Count (per ounce)", "Grade Description"],
          rows: [
            ["260 – 280", "Very small size, suitable for dal processing, milling, and industrial use"],
            ["240 – 260", "Smaller grains, mainly used for splitting (dal) and processing"],
            ["220 – 240", "Standard export quality, widely accepted in global markets"],
            ["200 – 220", "Premium grade, preferred for whole consumption and sprouts"]
          ],
        note:null
      }
      ]
    },
    {
      id: 4,
      name: "Mustard Seeds",
      category: "Exports",
      description: "Premium mustard seeds with high oil content and purity, ideal for oil extraction and food applications.",
      image: mustard,
      tables: [
        {
          headers: ["Grade", "Approx Size (mm)", "Description"],
          rows: [
            ["Micro", "< 1.2 mm", "Very small seeds, mostly used for oil extraction and industrial purposes"],
            ["Small", "1.2 – 1.5 mm", "Basic grade, used in bulk processing"],
            ["Medium", "1.5 – 2.0 mm", "Standard export quality, balanced size and oil content"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 5,
      name: "Soyabean",
      category: "Exports",
      description: "High-protein soyabeans processed for export with consistent quality and reliable supply.",
      image: soyabean,
      tables: [
        {
          headers: ["Grade", "Approx Size (mm)", "Description"],
          rows: [
            ["Small", "< 5.5 mm", "Smaller grains, generally used for oil extraction and feed industry"],
            ["Medium", "5.5 – 6.5 mm", "Standard export quality, balanced size and oil/protein content"],
            ["Bold / Large", "> 6.5 mm", "Premium grade, preferred for food processing and direct consumption"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 6,
      name: "Peanuts",
      category: "Exports",
      description: "We offer export-quality peanuts (groundnuts) known for their high oil content, uniform size, and excellent taste. Sourced from trusted farms and processed using advanced cleaning and grading techniques, our peanuts are ideal for food processing, snacking, and oil extraction industries worldwide.",
      image: peanuts,
      tables: [
        {
          headers: ["Count (per ounce)", "Approx Size (mm)", "Description"],
          rows: [
            ["60 - 70", "8 – 9 mm", "Small kernels, mainly used for oil extraction and peanut butter processing"],
            ["50 - 60", "9 – 10 mm", "Medium - small grade, suitable for bulk processing and confectionery"],
            ["40 - 50", "10 – 11 mm", "Standard export quality, widely traded globally"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
  ];

  const importProducts = [
    {
      id: 7,
      name: "Chickpeas",
      category: "Imports",
      description: "In addition to our export-quality Indian chickpeas, we also import chickpeas to ensure year-round availability and consistent supply for our clients. These are carefully selected to meet market demand and quality standards.",
      image: chickpeas,
      tables: [
        {
          headers: ["Grade", "Count (per ounce)", "Approx Size (mm)", "Description"],
          rows: [
            ["Small", "58 - 60", "8 – 9 mm", "Smaller grains, used for bulk processing and price - sensitive markets"],
            ["Medium - Small", "52 - 54", "9 – 10 mm", "Balanced grade for general consumption and processing"],
            ["Medium", "48 - 50", "10 mm", "Standard import quality with good uniformity"],
            ["Large / Bold", "44 - 46", "11 – 12 mm", "Preferred for retail and premium markets"],
            ["Bold", "42 - 44", "12 mm", "High-demand export/import grade"],
            ["Extra Bold", "38 - 40", "12 – 13 mm", "Premium quality, used in high-end retail and HORECA"],
            ["Jumbo", "36 - 38", "13 mm+", "Top-grade chickpeas with superior appearance"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 8,
      name: "Chawla (Black Eyed Beans)",
      category: "Imports",
      description: "We import high-quality Black-Eyed Beans (Chawla) sourced from reliable international origins, ensuring uniform size, clean appearance, and excellent cooking quality. Ideal for bulk buyers, wholesalers, and food processors.",
      image: chawla,
      tables: [
        {
          headers: ["Grade", "Count (per ounce)", "Approx Size (mm)", "Description"],
          rows: [
            ["Small", "140 – 170", "< 6.5 mm", "Smaller grains, generally used for bulk processing and price - sensitive markets"],
            ["Medium", "110 – 140", "6.5 – 7.5 mm", "Standard import quality, balanced size and uniform appearance"],
            ["Bold / Large", "90 – 110", "> 7.5 mm", "Premium grade, preferred for retail packing and direct consumption"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 9,
      name: "Rajma (Kidney Beans)",
      category: "Imports",
      description: "We offer premium imported Rajma (Kidney Beans) known for their rich colour, uniform size, and superior taste. Carefully sourced to meet quality expectations of bulk buyers and food industries.",
      image: rajma,
      tables: [
        {
          headers: ["Grade", "Count (per ounce)", "Approx Size (mm)", "Common Types", "Description"],
          rows: [
            ["Small", "55 – 65", "< 10 mm", "DRK / Red Kidney", "Smaller beans, used for bulk processing and price - sensitive markets"],
            ["Medium", "45 – 55", "10 – 12 mm", "LSKB / DRK", "Standard import quality, good uniformity and cooking performance"],
            ["Bold / Large", "35 – 45", "> 12 mm", "LSKB (Preferred)", "Premium grade, ideal for retail packs and direct consumption"]
          ],
          note: "The sizing in MM is a standard approximation."
        }
      ]
    },
    {
      id: 10,
      name: "Pulses",
      category: "Imports",
      description: "Along with our core offerings, we also source and supply a wide range of premium pulses as per client requirements. Through our trusted global sourcing network, we ensure consistent quality, competitive pricing, and reliable availability across diverse pulse varieties.",
      image: pulses,
    },
    {
      id: 11,
      name: "Other Agri Products",
      category: ["Exports", "Imports"],
      description: "Along with our core products, we source and supply a wide range of agricultural commodities for both import and export requirements. Through our trusted global sourcing network, we ensure consistent quality, competitive pricing, timely delivery, and reliable availability across multiple product categories.",
      image: other_agri,
    },
  ];


  const allProducts = [...exportProducts, ...importProducts];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) =>
        Array.isArray(product.category)
          ? product.category.includes(selectedCategory)
          : product.category === selectedCategory
      );

  const [brandIndex, setBrandIndex] = useState(0);
  const brands = [brand1, brand2, brand3, brand4];
  const [visibleBrands, setVisibleBrands] = useState(4);

  useEffect(() => {
    const updateVisibleBrands = () => {
      if (window.innerWidth <= 768) {
        setVisibleBrands(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleBrands(2);
      } else {
        setVisibleBrands(4);
      }
    };

    updateVisibleBrands();
    window.addEventListener("resize", updateVisibleBrands);

    return () =>
      window.removeEventListener("resize", updateVisibleBrands);
  }, []);

  const nextBrands = () => {
    if (brandIndex + visibleBrands < brands.length) {
      setBrandIndex(brandIndex + visibleBrands);
    }
  };

  const prevBrands = () => {
    if (brandIndex - visibleBrands >= 0) {
      setBrandIndex(brandIndex - visibleBrands);
    }
  };

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="products-hero-content">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Premium quality agricultural products for global markets
          </p>
        </div>
      </section>

      <section className="category-filter-section">
        <div className="category-filter">
          <div className="category-buttons">
            {["All", "Exports", "Imports"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <div className="products-list">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`product-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="product-image-circle" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="circle-wrapper">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="product-circle-img"
                    />
                  </div>
                </div>
                <div className="product-content" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  {hasSpecs(product) && (
                    <button
                      className="specs-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Specifications
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            <h2>{selectedProduct.name}</h2>

            {selectedProduct.tables?.map((table, i) => (
              <div key={i} className="spec-table">
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        {table.headers.map((h, idx) => (
                          <th key={idx}>{h}</th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {table.note && (
                  <p className="table-note">
                    <strong>Note:</strong> {table.note}
                  </p>
                )}
              </div>
            ))}

          </div>
        </div>,
        document.body
      )}

      <section className="stats-section brands-section">
        <div className="history certificate-box">
          <h2 className="section-title">Our Brands</h2>

          {/* <div className="brand-wrapper">
            {[brand1, brand2, brand3, brand4
              
            ].map((img, i) => (
              <img key={i} src={img} alt="brand"
                className={img === brand4 ? "brand-img smmtc-logo" : "brand-img"} />
            ))}
          </div> */}
          <div className="brand-slider">

            {visibleBrands < 4 && (
              <button
                className="brand-nav prev"
                onClick={prevBrands}
                disabled={brandIndex === 0}
              >
                ❮
              </button>
            )}

            <div className="brand-wrapper">
              {brands
                .slice(brandIndex, brandIndex + visibleBrands)
                .map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="brand"
                    className={
                      img === brand4
                        ? "brand-img smmtc-logo"
                        : "brand-img"
                    }
                  />
                ))}
            </div>

            {visibleBrands < 4 && (
              <button
                className="brand-nav next"
                onClick={nextBrands}
                disabled={brandIndex + visibleBrands >= brands.length}
              >
                ❯
              </button>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}