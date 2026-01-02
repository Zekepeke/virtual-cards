import React from 'react';
import { Heart, Mail, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            y: '100%', 
            x: `${Math.random() * 100}%`,
            opacity: 0
          }}
          animate={{
            y: '-100%',
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear'
          }}
        >
          <Heart 
            size={16 + Math.random() * 16} 
            className="text-[var(--rose)]" 
            fill="var(--rose)" 
            style={{ opacity: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function SparkleDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      className={className}
    >
      <Sparkles className="text-[var(--gold)]" size={20} />
    </motion.div>
  );
}

export function EnvelopeIcon({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Mail size={size} className="text-[var(--rose)]" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute -top-1 -right-1"
      >
        <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
      </motion.div>
    </div>
  );
}

export function HeartDivider() {
  return (
    <div className="flex items-center gap-4 w-full my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--border)]" />
      <div className="flex gap-2">
        <Heart size={12} className="text-[var(--rose)]" fill="var(--rose)" style={{ opacity: 0.4 }} />
        <Heart size={16} className="text-[var(--rose)]" fill="var(--rose)" />
        <Heart size={12} className="text-[var(--rose)]" fill="var(--rose)" style={{ opacity: 0.4 }} />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--border)]" />
    </div>
  );
}

export function GoldAccent({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`inline-flex gap-1 ${className}`}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Star size={16} className="text-[var(--gold)]" fill="var(--gold)" />
      <Star size={12} className="text-[var(--gold)]" fill="var(--gold)" />
      <Star size={16} className="text-[var(--gold)]" fill="var(--gold)" />
    </motion.div>
  );
}
