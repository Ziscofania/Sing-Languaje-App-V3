import type { ReactNode } from 'react';
import '../styles/effects.css';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div className={`glass-effect p-8 ${className} smooth-transition hover:bg-opacity-30`}>
      {children}
    </div>
  );
};

export default GlassCard;   