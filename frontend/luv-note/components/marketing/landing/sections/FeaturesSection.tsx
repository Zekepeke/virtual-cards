"use client";

import { motion } from "motion/react";
import { features } from "../content";
import { RomanticCard } from "../../../romantic-card";
import { SparkleDecoration } from "../../../micro-illustrations";

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-[var(--charcoal)]">Everything You Need</h2>
            <SparkleDecoration className="opacity-60" />
          </div>
          <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
            Thoughtful features to make your love cards extra special
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RomanticCard hover className="h-full">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center shadow-[var(--shadow-pink)]">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[var(--charcoal)] mb-2">{feature.title}</h4>
                    <p className="text-[var(--charcoal-lighter)]">{feature.description}</p>
                  </div>
                </div>
              </RomanticCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}