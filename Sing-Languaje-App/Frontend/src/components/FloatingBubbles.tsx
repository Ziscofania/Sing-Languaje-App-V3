import { useEffect } from 'react';
import '../styles/effects.css';

const FloatingBubbles = () => {
  useEffect(() => {
    const container = document.querySelector('.bubbles-container');
    if (!container) return;

    // Limpiar burbujas existentes
    container.innerHTML = '';

    // Crear burbujas más grandes y visibles
    for (let i = 0; i < 12; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Tamaños más grandes
      const size = Math.random() * 120 + 80;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 6 + Math.random() * 6;
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${posX}%`;
      bubble.style.top = `${posY}%`;
      bubble.style.animationDelay = `${delay}s`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.opacity = `${Math.random() * 0.3 + 0.2}`;
      
      container.appendChild(bubble);
    }
  }, []);

  return <div className="bubbles-container fixed inset-0 pointer-events-none" />;
};

export default FloatingBubbles;