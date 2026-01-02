import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface RomanticModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
}

export function RomanticModal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  maxWidth = 'md'
}: RomanticModalProps) {
  const maxWidthClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--charcoal)] bg-opacity-40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`
              fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-full ${maxWidthClasses[maxWidth]} mx-4
              bg-[var(--card)]
              rounded-[var(--radius-xl)]
              shadow-[var(--shadow-xl)]
              p-8
              z-50
            `}
          >
            {title && (
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[var(--charcoal)]">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-[var(--charcoal-lighter)] hover:text-[var(--charcoal)] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            )}
            {!title && (
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-[var(--charcoal-lighter)] hover:text-[var(--charcoal)] transition-colors"
              >
                <X size={24} />
              </button>
            )}
            <div>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
