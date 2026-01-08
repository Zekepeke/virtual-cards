"use client";

import { motion } from "motion/react";
import { steps } from "../content";
import { RomanticCard } from "../../../romantic-card";
import { SparkleDecoration } from "../../../micro-illustrations";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-[var(--charcoal)]">How It Works</h2>
            <SparkleDecoration className="opacity-60" />
          </div>
          <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
            Creating and sending a love card is beautifully simple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RomanticCard className="relative h-full">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center shadow-[var(--shadow-pink)]">
                  <span className="text-white">{step.number}</span>
                </div>

                <div className="pt-8">
                  <step.icon className="text-[var(--rose)] mb-4" size={32} />
                  <h3 className="text-[var(--charcoal)] mb-3">{step.title}</h3>
                  <p className="text-[var(--charcoal-lighter)]">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="text-[var(--rose)]" size={24} />
                  </div>
                )}
              </RomanticCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}