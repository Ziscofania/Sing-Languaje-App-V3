import { useNavigate } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';
import '../styles/Home.css';
import "../styles/footer.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <FloatingBubbles />
      
      <header className="header">
        <nav className="nav-links">
          <a href="#nosotros">Nosotros</a>
          <a href="#proyecto">Proyecto</a>
          <a href="https://github.com/tu-usuario/tu-repositorio" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#vision">Visión</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-text">
          <h1 className="title">Conoce el lenguaje de señas</h1>
          <p className="subtitle">Desarrollamos una solución a la comunicación</p>
          <button 
            onClick={() => navigate('/landing')}
            className="cta-button"
          >
            Continuar
          </button>
        </div>
      </main>

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
    </div>
  );
};

export default Home;
