"use client";

import { motion } from "motion/react";
import { testimonials } from "../content";
import { RomanticCard } from "../../../romantic-card";
import { GoldAccent } from "../../../micro-illustrations";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--cream)] to-[var(--blush-pink-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-[var(--charcoal)]">Loved by Couples Worldwide</h2>
            <GoldAccent />
          </div>
          <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
            Real stories from long-distance couples staying connected
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RomanticCard className="h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[var(--gold)]"
                      fill="var(--gold)"
                    />
                  ))}
                </div>

                <p className="text-[var(--charcoal)] mb-6 italic">"{t.quote}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center text-white">
                    {t.name.split("&")[0].trim()[0]}
                    {t.name.split("&")[1]?.trim()[0]}
                  </div>
                  <div>
                    <p className="text-[var(--charcoal)]">{t.name}</p>
                    <p className="text-[var(--charcoal-lighter)]">{t.location}</p>
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