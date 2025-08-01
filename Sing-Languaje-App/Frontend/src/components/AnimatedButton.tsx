import type { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const AnimatedButton = ({ children, onClick }: AnimatedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden px-8 py-3 rounded-full bg-white text-purple-900 font-medium text-lg
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r
                before:from-purple-400 before:to-blue-400 before:opacity-0 hover:before:opacity-100
                before:transition-opacity before:duration-300 z-10"
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;