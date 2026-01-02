import React, { useState } from 'react';
import { motion } from 'motion/react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface RomanticTabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function RomanticTabs({ tabs, defaultTab }: RomanticTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className="flex gap-2 border-b border-[var(--border)] mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-6 py-3 transition-colors duration-300
              ${activeTab === tab.id 
                ? 'text-[var(--rose)]' 
                : 'text-[var(--charcoal-lighter)] hover:text-[var(--charcoal)]'
              }
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--rose)]"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeContent}
      </motion.div>
    </div>
  );
}
