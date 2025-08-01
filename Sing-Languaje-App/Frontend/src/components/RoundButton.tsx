import type { ReactNode } from 'react';
import '../styles/variables.css';

interface RoundButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const RoundButton = ({ children, onClick, className = '' }: RoundButtonProps) => {
  return (
    <button
      className={`rounded-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;