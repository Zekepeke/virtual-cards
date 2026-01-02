"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cta } from "../content";
import { RomanticInput } from "../../../romantic-input";
import { RomanticButton } from "../../../romantic-button";
import { Heart, Mail, Sparkles } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Heart size={40} fill="white" className="text-white" />
        </div>
        <div className="absolute top-20 right-20">
          <Sparkles size={32} className="text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Mail size={36} className="text-white" />
        </div>
        <div className="absolute bottom-10 right-1/3">
          <Heart size={28} fill="white" className="text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">{cta.heading}</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">{cta.subheading}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <RomanticInput
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-xs bg-white"
            />
            <RomanticButton variant="secondary" className="whitespace-nowrap">
              Create Free Account
            </RomanticButton>
          </div>

          <p className="text-white/70">{cta.footnote}</p>
        </motion.div>
      </div>
    </section>
  );
}