"use client";
import React from 'react';
import { motion } from 'motion/react';

interface RomanticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function RomanticButton({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: RomanticButtonProps) {
  const baseStyles = "px-8 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[var(--rose)] text-white hover:bg-[var(--rose-deep)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-pink)]",
    secondary: "bg-[var(--blush-pink)] text-[var(--rose-dark)] hover:bg-[var(--blush-pink-light)] shadow-[var(--shadow-sm)]",
    ghost: "bg-transparent text-[var(--rose)] hover:bg-[var(--blush-pink-light)] border border-[var(--border)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} rounded-[var(--radius-xl)] ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
