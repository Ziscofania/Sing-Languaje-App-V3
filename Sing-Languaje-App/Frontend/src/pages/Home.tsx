import { useNavigate } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';
import '../styles/Home.css';
import Footer from '../components/Footer/Footer';

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
            onClick={() => navigate('/main')}
            className="cta-button"
          >
            Continuar
          </button>
        </div>
      </main>

      <Footer 
        companyName="SeñasApp"
        links={[
          { text: "Trabajos", url: "#works" },
          { text: "Servicios", url: "#services" },
          { text: "Nosotros", url: "#about" },
          { text: "Precios", url: "#pricing" },
          { text: "Contacto", url: "#contact" }
        ]}
        className="custom-footer-class"
      />
    </div>
  );
};

export default Home;