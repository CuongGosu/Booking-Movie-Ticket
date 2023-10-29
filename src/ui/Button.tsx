import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  type: 'primary' | 'small' | 'log' | 'default';
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  children,
  to,
  type,
  isActive = false,
  onClick,
}: ButtonProps) {
  const base =
    'inline-block text-white rounded-3xl font-semibold uppercase border-2 border-solid  transition-colors duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed';

  const activeStyles = {
    primary: `bg-text-highlight text-white border-text-highlight`,
    small: `bg-text-highlight text-white border-text-highlight`,
    log: null,
    default: null,
  };

  const styles = {
    primary: `${base} text-2xl py-2 px-6 hover:bg-text-highlight focus:bg-text-highlight hover:border-text-highlight focus:border-text-highlight`,
    small: `${base} text-xs px-4 py-2 md:px-5 md:py-2.5 hover:bg-text-highlight focus:bg-text-highlight hover:border-text-highlight focus:border-text-highlight`,
    log: `${base} w-36 block text-base bg-secondary-background text-white px-3 py-1 hover:bg-text-highlight focus:bg-text-highlight`,
    default: `${base} block text-base bg-secondary-background text-white px-3 py-1 hover:bg-text-highlight focus:bg-text-highlight`,
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${styles[type]} ${isActive ? activeStyles[type] : ''}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${styles[type]} ${isActive ? activeStyles[type] : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
