import { Link } from "react-router-dom";
import "../styles/Footer.css";
import owner from "../assets/owner.png";
import location from "../assets/location.png"
import mail from "../assets/email.png"
import phone from "../assets/phone.png"
import id from "../assets/id-card.png"
import logo from "../assets/footer-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <img src={logo} alt="Business Logo" className="footer-logo"/>
            <p className="footer-description">
              Providing quality products and exceptional service to our customers since 2022.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li><img src={id} alt="Owner" className="owner"/> SARTHAK AGRAWAL</li>
              <li><img src={owner} alt="Mail" /> Proprietor</li>
              <li><img src={phone} alt="Phone" /> +91 9009220308</li>
              <li><img src={mail} alt="Mail" className="owner" /> shreemeeramaatrading@gmail.com</li>
              <li><img src={location} alt="Location" /> Warehouse No. 27, New Anaj Mandi, Chhawani, Indore - 452001, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shree Meera Maa Trading Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
