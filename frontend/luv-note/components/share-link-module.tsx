import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';
import { RomanticButton } from './romantic-button';
import { motion, AnimatePresence } from 'motion/react';

interface ShareLinkModuleProps {
  link: string;
  title?: string;
  description?: string;
}

export function ShareLinkModule({ 
  link, 
  title = "Share Your Love Card",
  description = "Send this link to your special someone"
}: ShareLinkModuleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: link,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-[var(--blush-pink-light)] to-[var(--cream)] p-8 rounded-[var(--radius-xl)] border border-[var(--border)] shadow-[var(--shadow-md)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[var(--rose)] flex items-center justify-center shadow-[var(--shadow-pink)]">
          <Share2 size={20} className="text-white" />
        </div>
        <div>
          <h4 className="text-[var(--charcoal)]">{title}</h4>
          <p className="text-[var(--charcoal-lighter)] mt-1">{description}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <div className="flex-1 bg-white px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border)] flex items-center gap-3">
          <code className="flex-1 text-[var(--charcoal)] truncate">
            {link}
          </code>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="px-5 py-3 bg-[var(--rose)] text-white rounded-[var(--radius-lg)] hover:bg-[var(--rose-deep)] transition-colors shadow-[var(--shadow-md)] flex items-center gap-2"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy size={18} />
              </motion.div>
            )}
          </AnimatePresence>
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>

        {navigator.share && (
          <RomanticButton
            variant="secondary"
            onClick={handleShare}
            className="px-5"
          >
            <Share2 size={18} />
          </RomanticButton>
        )}
      </div>
    </div>
  );
}
