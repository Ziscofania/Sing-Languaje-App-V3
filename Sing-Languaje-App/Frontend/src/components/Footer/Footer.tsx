import SocialIcons from './SocialIcons';
import './Footer.css';

interface FooterProps {
  companyName?: string;
  year?: number;
  links?: Array<{ text: string; url: string }>;
  legalLinks?: Array<{ text: string; url: string }>;
  className?: string;
}

const Footer = ({
  companyName = "SeñasApp",
  year = new Date().getFullYear(),
  links = [
    { text: "Works", url: "#works" },
    { text: "Services", url: "#services" },
    { text: "About", url: "#about" },
    { text: "Pricing", url: "#pricing" },
    { text: "Contact us", url: "#contact" }
  ],
  legalLinks = [
    { text: "Terms & Conditions", url: "#terms" },
    { text: "Privacy Policy", url: "#privacy" },
    { text: "Disclosures", url: "#disclosures" }
  ],
  className = ""
}: FooterProps) => {
  return (
    <footer className={`footer-container ${className}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">{companyName}</h3>
          <div className="footer-categories">
            <div className="category">
              <p>ANIMATIONS & ILLUSTRATION</p>
              <p>SHORT FORM & ENTERTAINMENT</p>
              <p>GRAPHIC CREATIVES</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="footer-link">
              {link.text}
            </a>
          ))}
        </div>

        <div className="footer-social">
          <SocialIcons />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          {legalLinks.map((link, index) => (
            <a key={index} href={link.url} className="legal-link">
              {link.text}
            </a>
          ))}
        </div>
        <p className="copyright">
          © {year} {companyName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;