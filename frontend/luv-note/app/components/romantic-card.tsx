import React from 'react';
import { motion } from 'motion/react';

interface RomanticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function RomanticCard({ children, className = '', hover = false }: RomanticCardProps) {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { scale: 1.02, y: -4 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component
      className={`
        bg-[var(--card)] 
        rounded-[var(--radius-xl)] 
        shadow-[var(--shadow-md)]
        p-8
        border border-[var(--border-light)]
        transition-shadow duration-300
        ${hover ? 'hover:shadow-[var(--shadow-lg)] cursor-pointer' : ''}
        ${className}
      `}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}
