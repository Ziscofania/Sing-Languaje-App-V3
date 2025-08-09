import React from "react";
import "../styles/navbar.css";
import "../styles/general.css";
import "../styles/footer.css";

export const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay"></div>
        <h1>Explora el Lenguaje de Señas</h1>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de Nosotros</a></li>
          <li><a href="/traductor">Traductor</a></li>
          <li><a href="/cursos">Cursos</a></li>
        </ul>
      </nav>

      {/* Sección Situación */}
      <div className="text-container">
        <h2 className="title situacion">Situación</h2>
        <p>
          En Colombia, cerca de 459,772 personas viven con discapacidad auditiva,
          enfrentándose a barreras significativas en su comunicación diaria...
        </p>
      </div>

      {/* Sección Aporte */}
      <div className="text-container">
        <h2 className="subtitulo">Aporte</h2>
        <p>
          Estamos transformando la comunicación y derribando barreras para la comunidad sordomuda...
        </p>
      </div>

      {/* Sección de gráficas */}
      <div className="charts-container">
        <h2>Datos en contexto: Discapacidad Auditiva en Colombia</h2>

        {[1, 2, 3, 4, 5, 6, 7].map((chartId, index) => (
          <div
            key={chartId}
            className={`chart-row ${index === 6 ? "full-width" : ""}`}
          >
            <div className="chart-box">
              <canvas id={`chart${chartId}`}></canvas>
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="info-box">
        <h2 className="recuadro">¿Necesitas más información?</h2>
        <button className="comunicate">Comunícate con nosotros</button>
      </div>

      {/* Frase */}
      <div className="frase">
        <h2>
          "Rompiendo Barreras, Conectando Mundos: La app que transforma señas en
          palabras para una comunicación sin límites."
        </h2>
      </div>

      {/* Video */}
      <div className="video-container">
        <video controls>
          <source src="/assets/videos/video.mp4" type="video/mp4" />
        </video>
        <div className="text-content">
          <h3>Video ilustrativo de la realidad cultural de las personas sordomudas</h3>
          <p>Agradecimientos al canal de CuriosaMente por prestar los derechos de autor para fines educativos.</p>
          <p>
            Haz clic en el siguiente enlace para visitar el canal de YouTube:{" "}
            <a href="https://www.youtube.com/curiosamente" target="_blank" rel="noreferrer">
              CuriosaMente
            </a>
          </p>
        </div>
      </div>

      {/* Manos */}
      <div className="hand left-hand">
        <img src="/assets/left-hand.png" alt="Mano izquierda" />
      </div>
      <div className="hand right-hand">
        <img src="/assets/right-hand.png" alt="Mano derecha" />
      </div>

      {/* Contenido de bienvenida */}
      <div className="content">
        <h1>Bienvenido a la aplicación de lenguaje de señas</h1>
        <a href="/traductor" className="start-button">Iniciar</a>
      </div>

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

export default LandingPage;
