"use client";

import { motion } from "motion/react";
import { RomanticButton } from "../../../romantic-button";
import { OpenCardAnimation } from "../../../open-card-animation";
import { SparkleDecoration } from "../../../micro-illustrations";
import { heroBadge } from "../content";
import { Heart, Play, Check, Sparkles } from "lucide-react";

export function Hero() {
  const BadgeIcon = heroBadge.icon;

  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--blush-pink-light)] px-4 py-2 rounded-[var(--radius-full)] mb-6">
              <Sparkles size={16} className="text-[var(--rose)]" />
              <span className="text-[var(--rose-dark)]">{heroBadge.text}</span>
            </div>

            <h1 className="text-[var(--charcoal)] mb-6 leading-tight">
              Send love that feels like opening a real card
            </h1>

            <p className="text-[var(--charcoal-light)] mb-8 max-w-lg mx-auto md:mx-0">
              Bridge the distance with beautiful digital cards that capture the magic of receiving
              something special in the mail. Perfect for couples separated by miles, not hearts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <RomanticButton variant="primary" className="group">
                Create a Love Card
                <Heart size={18} className="ml-2 group-hover:scale-110 transition-transform" />
              </RomanticButton>

              <RomanticButton variant="ghost" className="group">
                <Play size={18} className="mr-2" />
                See How It Works
              </RomanticButton>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start text-[var(--charcoal-lighter)]">
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[var(--rose)]" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[var(--rose)]" />
                <span>No credit card</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-[var(--rose)]/10 to-[var(--gold)]/10 rounded-[var(--radius-xl)] blur-3xl" />
            <div className="relative bg-white/50 backdrop-blur-sm rounded-[var(--radius-xl)] p-8 border border-[var(--border)]">
              <OpenCardAnimation />
            </div>
            <SparkleDecoration className="absolute -top-4 -right-4" />
            <SparkleDecoration className="absolute -bottom-4 -left-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}