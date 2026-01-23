import React from 'react'
import { motion } from 'motion/react';

const HeroHeader = () => {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl text-[var(--charcoal)] mb-4">
            Examples couples<br />actually send
          </h1>
          <p className="text-xl text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
            Pick a vibe. Preview the open-card moment.
          </p>
        </motion.div>
      </header>
  )
}

export default HeroHeader