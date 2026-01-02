import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { RomanticButton } from './romantic-button';

interface OpenCardAnimationProps {
  onComplete?: () => void;
}

export function OpenCardAnimation({ onComplete }: OpenCardAnimationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
      onComplete?.();
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {!isOpen ? (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          {/* Envelope */}
          <div className="relative bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-xl)] cursor-pointer"
            onClick={handleOpen}
          >
            {/* Sparkles around envelope */}
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
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="text-[var(--gold)]" size={24} />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-4 -left-4"
            >
              <Sparkles className="text-[var(--gold)]" size={20} />
            </motion.div>

            <div className="flex flex-col items-center gap-6 text-white">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Heart size={64} fill="white" />
              </motion.div>
              <h3 className="text-white text-center">You've received a love card!</h3>
              <p className="text-white/90 text-center">Tap to open</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Card Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              className="bg-white rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-xl)] border border-[var(--border)]"
            >
              <div className="flex flex-col items-center gap-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                >
                  <Heart size={48} className="text-[var(--rose)]" fill="var(--rose)" />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-[var(--charcoal)]"
                >
                  With All My Love
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-[var(--charcoal-lighter)]"
                >
                  Every moment with you is a treasure. Thank you for being my everything. ♡
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 }}
                  className="flex gap-2"
                >
                  <Sparkles className="text-[var(--gold)]" size={20} />
                  <Sparkles className="text-[var(--gold)]" size={16} />
                  <Sparkles className="text-[var(--gold)]" size={20} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export function OpenCardAnimationDemo() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <div className="space-y-6">
      {showDemo ? (
        <OpenCardAnimation onComplete={() => {}} />
      ) : (
        <div className="text-center space-y-4">
          <p className="text-[var(--charcoal-lighter)]">Card opened! ✨</p>
          <RomanticButton onClick={() => setShowDemo(true)} variant="secondary">
            Reset Demo
          </RomanticButton>
        </div>
      )}
    </div>
  );
}
