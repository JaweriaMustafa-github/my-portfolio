import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <button className="footer-button">
          <div className="footer-links">
            <Link href="#" className="footer-link">
              Home
            </Link>
            <Link href="#about" className="footer-link">
              About
            </Link>
            <Link href="#projects" className="footer-link">
              Projects
            </Link>
            <Link href="#contact" className="footer-link">
              Contact
            </Link>
          </div>
        </button>
      </div>
      <p className="footer-text">
        © All rights are reserved 2024. Jaweria Mustafa
      </p>
    </footer>
  );
};

export default Footer;