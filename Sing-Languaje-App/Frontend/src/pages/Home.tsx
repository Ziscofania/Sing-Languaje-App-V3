import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
const navigate = useNavigate();

const handleStart = () => {
    // Navegar a la página principal de la app cuando esté lista
    navigate('/main');
};

return (
    <div className="home-container">
    <main className="main-content">
        <h1 className="title">Utiliza el lenguaje de señas</h1>
        <button 
        className="start-button"
        onClick={handleStart}
        >
        Comenzar
        </button>
    </main>
    <footer className="footer">
        <p>© {new Date().getFullYear()} Sistema de Traducción de Lenguaje de Señas</p>
        <div className="footer-links">
        <a href="/about">Acerca de</a>
        <a href="/contact">Contacto</a>
        <a href="/privacy">Privacidad</a>
        </div>
    </footer>
    </div>
);
};

export default Home;