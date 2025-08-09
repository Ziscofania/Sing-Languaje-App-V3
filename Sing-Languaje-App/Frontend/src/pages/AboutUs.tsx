import React from "react";
import "../styles/About.css";
import "../styles/general.css";
import "../styles/navbar.css";

// Importar FontAwesome (puedes ponerlo en index.html también)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faBehance,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";

const AboutUs: React.FC = () => {
  return (
    <>
      <header className="hero">
        <h1>Nuestra Historia</h1>
        <div className="scroll-indicator">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de Nosotros</a></li>
          <li><a href="/translator">Traductor</a></li>
          <li><a href="/courses">Cursos</a></li>
        </ul>
      </nav>

      {/* Historia */}
      <section className="history">
        <div className="container">
          <div className="section fade-in">
            <h2>Nuestros Inicios</h2>
            <p>Fundada en 2020, nuestra empresa comenzó como un pequeño proyecto entre amigos con una visión compartida de innovación y excelencia.</p>
          </div>

          <div className="section fade-in">
            <h2>Misión</h2>
            <p>Proporcionar soluciones innovadoras y de alta calidad que superen las expectativas de nuestros clientes, manteniendo siempre nuestros valores de integridad y pasión.</p>
          </div>

          <div className="section fade-in">
            <h2>Visión</h2>
            <p>Ser reconocidos como líderes en nuestro sector, transformando la industria a través de la creatividad y el compromiso con la excelencia.</p>
          </div>

          <div className="section fade-in">
            <h2>Objetivo</h2>
            <p>Crear un impacto positivo en nuestros clientes y comunidad, mientras construimos un equipo talentoso y motivado que comparta nuestra pasión.</p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="team">
        <h2>Nuestro Equipo</h2>
        <div className="team-container">
          {/* Card 1 */}
          <div className="team-card">
            <div className="card-image">
              <img src="/images/team-member1.jpg" alt="Miembro del equipo" />
            </div>
            <div className="card-content">
              <h3>Ana Rodríguez</h3>
              <p className="title">CEO & Fundadora</p>
              <div className="hover-content">
                <p>Con más de 10 años de experiencia en el sector, Ana lidera nuestra visión estratégica.</p>
                <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="team-card">
            <div className="card-image">
              <img src="/images/team-member2.jpg" alt="Miembro del equipo" />
            </div>
            <div className="card-content">
              <h3>Carlos Méndez</h3>
              <p className="title">CTO</p>
              <div className="hover-content">
                <p>Experto en tecnología con pasión por la innovación y desarrollo de productos.</p>
                <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="team-card">
            <div className="card-image">
              <img src="/images/team-member3.jpg" alt="Miembro del equipo" />
            </div>
            <div className="card-content">
              <h3>María López</h3>
              <p className="title">Directora de Diseño</p>
              <div className="hover-content">
                <p>Combina estética y funcionalidad para crear experiencias de usuario excepcionales.</p>
                <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
                  <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Información */}
          <div className="footer-section">
            <div className="logo-container">
              <h4>SilentEcho</h4>
            </div>
            <p className="footer-description">
              Aplicación innovadora que facilita la comunicación...
            </p>
            <div className="app-badges">
              <img src="/assets/google-play-badge.png" alt="Disponible en Google Play" className="badge" />
              <img src="/assets/app-store-badge.png" alt="Descarga en App Store" className="badge" />
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Bogotá, Colombia</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:contacto@silentecho.com">contacto@silentecho.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-headset"></i>
                <p>Soporte técnico: soporte@silentecho.com</p>
              </div>
            </div>
          </div>

          {/* Redes y newsletter */}
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/SilentEchoApp" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/SilentEchoApp" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/SilentEchoApp" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/c/SilentEchoApp" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/silentecho" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            <div className="newsletter">
              <h4>Newsletter</h4>
              <p>Suscríbete para recibir actualizaciones</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>&copy; 2024 SilentEcho. Todos los derechos reservados.</p>
            <div className="legal-links">
              <a href="/terminos">Términos de Servicio</a>
              <span>|</span>
              <a href="/privacidad">Política de Privacidad</a>
              <span>|</span>
              <a href="/cookies">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
    
  );
};

export default AboutUs;
