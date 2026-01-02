// app/components/landing/sections/TemplatesSection.tsx
"use client";

import { motion } from "motion/react";
import { templates } from "../content";
import { RomanticButton } from "../../../romantic-button";
import { Heart } from "lucide-react";

export function TemplatesSection() {
  return (
    <section
      id="templates"
      className="py-20 md:py-32 bg-gradient-to-br from-[var(--blush-pink-light)] to-[var(--cream)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-[var(--charcoal)]">Cards for Every Moment</h2>
            <Heart size={24} className="text-[var(--rose)]" fill="var(--rose)" />
          </div>
          <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
            Beautiful templates designed for all the occasions that matter
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="cursor-pointer"
            >
              <div
                className={`
                  aspect-[3/4] rounded-[var(--radius-xl)]
                  bg-gradient-to-br ${template.color}
                  shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
                  transition-all duration-300
                  flex flex-col items-center justify-center
                  p-6 text-white
                `}
              >
                <template.icon size={40} className="mb-3" />
                <h4 className="text-white mb-2">{template.title}</h4>
                <p className="text-white/80 text-center hidden md:block">
                  {template.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--charcoal-lighter)] mb-6">
            Plus many more templates to explore
          </p>
          <RomanticButton variant="secondary">Browse All Templates</RomanticButton>
        </div>
      </div>
    </section>
  );
}