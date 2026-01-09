'use client';
import React, { useState } from 'react';
import { RomanticButton } from '@/components/romantic-button';
import { RomanticCard } from '@/components/romantic-card';
import { RomanticInput } from '@/components/romantic-input';
import { RomanticModal } from '@/components/romantic-modal';
import { 
  Heart, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Crown,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { templates, categories } from './content';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  isPremium: boolean;
  sampleMessage: string;
  gradient: string;
}

type FilterType = 'all' | 'sweet' | 'funny' | 'minimal';

export function TemplatePage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [premiumOnly, setPremiumOnly] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const filteredTemplates = templates.filter(template => {
    if (premiumOnly && !template.isPremium) return false;
    if (searchQuery && !template.name.toLowerCase().includes(searchQuery.toLowerCase()) && !template.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const getTemplatesByCategory = (categoryId: string) => {
    return filteredTemplates.filter(t => t.category === categoryId);
  };

  const handlePreview = (template: Template) => {
    setPreviewTemplate(template);
    setEnvelopeOpened(false);
    setShowPreviewModal(true);
  };

  const handleNextTemplate = () => {
    if (!previewTemplate) return;
    const currentIndex = templates.findIndex(t => t.id === previewTemplate.id);
    const nextTemplate = templates[(currentIndex + 1) % templates.length];
    setPreviewTemplate(nextTemplate);
    setEnvelopeOpened(false);
  };

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
  };

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center">
                <Heart size={18} className="text-white" fill="white" />
              </div>
              <span className="text-lg text-[var(--charcoal)]">LuvNote</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors">Templates</a>
              <a href="#" className="text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors">How it works</a>
              <a href="#" className="text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors">Pricing</a>
            </div>

            {/* CTA */}
            <RomanticButton variant="primary" className="hidden sm:flex">
              <Heart size={16} className="mr-2" fill="currentColor" />
              Create a Love Card
            </RomanticButton>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
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

      {/* Filter Row */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Segmented Control */}
          <div className="inline-flex bg-white rounded-[var(--radius-lg)] p-1 border border-[var(--border)] shadow-[var(--shadow-sm)]">
            {(['all', 'sweet', 'funny', 'minimal'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`
                  px-4 py-2 rounded-[var(--radius-md)] transition-all capitalize
                  ${selectedFilter === filter 
                    ? 'bg-[var(--rose)] text-white shadow-[var(--shadow-sm)]' 
                    : 'text-[var(--charcoal-lighter)] hover:text-[var(--charcoal)]'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1 sm:min-w-[280px]">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--charcoal-lighter)]" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-[var(--border)] rounded-[var(--radius-lg)] text-[var(--charcoal)] placeholder:text-[var(--charcoal-lighter)] focus:outline-none focus:ring-2 focus:ring-[var(--rose)]/20 focus:border-[var(--rose)] transition-all"
              />
            </div>

            {/* Premium Toggle */}
            <button
              onClick={() => setPremiumOnly(!premiumOnly)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-[var(--radius-lg)] border transition-all whitespace-nowrap
                ${premiumOnly 
                  ? 'bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)]' 
                  : 'bg-white border-[var(--border)] text-[var(--charcoal-lighter)] hover:border-[var(--gold)]'
                }
              `}
            >
              <Crown size={16} />
              <span className="hidden sm:inline">Premium only</span>
            </button>
          </div>
        </div>
      </div>

      {/* Template Categories */}
      <div className="space-y-16 pb-20">
        {categories.map((category, categoryIndex) => {
          const categoryTemplates = getTemplatesByCategory(category.id);
          
          if (categoryTemplates.length === 0) return null;

          return (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="max-w-7xl mx-auto px-6 mb-6">
                <h2 className="text-3xl text-[var(--charcoal)] flex items-center gap-3">
                  <span className="text-3xl">{category.emoji}</span>
                  {category.title}
                </h2>
              </div>

              {/* Horizontal Scrolling Carousel */}
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
                    {categoryTemplates.map((template, index) => (
                      <TemplateCard
                        key={template.id}
                        template={template}
                        onPreview={handlePreview}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Create From Scratch CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <RomanticCard className="text-center p-12 bg-gradient-to-br from-white to-[var(--blush-pink-light)] border-2 border-dashed border-[var(--rose)]/30">
            <Sparkles size={48} className="mx-auto mb-6 text-[var(--rose)]" />
            <h2 className="text-3xl text-[var(--charcoal)] mb-3">
              Want to make your own?
            </h2>
            <p className="text-lg text-[var(--charcoal-lighter)] mb-6 max-w-xl mx-auto">
              Start with a blank canvas and create something completely unique
            </p>
            <RomanticButton variant="primary" className="px-8 py-3">
              Create from scratch
              <ArrowRight size={18} className="ml-2" />
            </RomanticButton>
          </RomanticCard>
        </motion.div>
      </section>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && previewTemplate && (
          <PreviewModal
            template={previewTemplate}
            isOpen={showPreviewModal}
            envelopeOpened={envelopeOpened}
            onClose={() => {
              setShowPreviewModal(false);
              setEnvelopeOpened(false);
            }}
            onOpenEnvelope={handleOpenEnvelope}
            onUseTemplate={() => {
              console.log('Use template:', previewTemplate.id);
              setShowPreviewModal(false);
            }}
            onNext={handleNextTemplate}
          />
        )}
      </AnimatePresence>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

interface TemplateCardProps {
  template: Template;
  onPreview: (template: Template) => void;
  index: number;
}

function TemplateCard({ template, onPreview, index }: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="w-[280px] sm:w-[320px] flex-shrink-0"
    >
      <RomanticCard className="h-full hover:shadow-[var(--shadow-pink)] transition-all group cursor-pointer border-2 border-transparent hover:border-[var(--rose)]/20">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden mb-4">
          <div className={`w-full h-full bg-gradient-to-br ${template.gradient} flex items-center justify-center`}>
            <Heart size={64} className="text-white/40" />
          </div>
          
          {/* Premium Badge */}
          {template.isPremium && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-[var(--gold)]/90 backdrop-blur-sm rounded-full">
              <Crown size={12} className="text-white" />
              <span className="text-xs text-white">Premium</span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[var(--charcoal)]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => onPreview(template)}
              className="px-6 py-2.5 bg-white text-[var(--charcoal)] rounded-[var(--radius-full)] hover:bg-[var(--cream)] transition-colors"
            >
              Preview
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-[var(--charcoal)] mb-1">{template.name}</h3>
          <p className="text-sm text-[var(--charcoal-lighter)] mb-4">{template.description}</p>
          
          <button
            onClick={() => onPreview(template)}
            className="text-[var(--rose)] hover:text-[var(--rose-deep)] transition-colors flex items-center gap-1 group/btn"
          >
            Preview
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </RomanticCard>
    </motion.div>
  );
}

interface PreviewModalProps {
  template: Template;
  isOpen: boolean;
  envelopeOpened: boolean;
  onClose: () => void;
  onOpenEnvelope: () => void;
  onUseTemplate: () => void;
  onNext: () => void;
}

function PreviewModal({ 
  template, 
  isOpen, 
  envelopeOpened,
  onClose, 
  onOpenEnvelope,
  onUseTemplate, 
  onNext 
}: PreviewModalProps) {
  return (
    <RomanticModal isOpen={isOpen} onClose={onClose} title="">
      <div className="max-w-3xl mx-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--charcoal-lighter)] hover:text-[var(--charcoal)] hover:bg-[var(--blush-pink-light)] rounded-full transition-all z-10"
        >
          <X size={20} />
        </button>

        {/* Envelope Animation or Card Content */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            {!envelopeOpened ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="text-center py-12"
              >
                {/* Envelope Illustration */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-8"
                >
                  <div className={`w-48 h-32 mx-auto rounded-[var(--radius-lg)] bg-gradient-to-br ${template.gradient} shadow-[var(--shadow-xl)] flex items-center justify-center relative overflow-hidden`}>
                    <Heart size={48} className="text-white/60" fill="white" />
                    
                    {/* Envelope flap */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-white/20 backdrop-blur-sm" style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }} />
                  </div>
                </motion.div>

                <h3 className="text-2xl text-[var(--charcoal)] mb-3">{template.name}</h3>
                <p className="text-[var(--charcoal-lighter)] mb-8">{template.description}</p>

                <RomanticButton variant="primary" onClick={onOpenEnvelope} className="px-8 py-3">
                  <Heart size={18} className="mr-2" fill="currentColor" />
                  Open Card
                </RomanticButton>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Card Content */}
                <div className={`rounded-[var(--radius-xl)] bg-gradient-to-br ${template.gradient} p-8 mb-6 min-h-[400px] flex flex-col items-center justify-center text-center shadow-[var(--shadow-2xl)]`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    <Heart size={64} className="text-white/80 mb-6" fill="white" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="max-w-lg"
                  >
                    <p className="text-xl text-white leading-relaxed mb-6">
                      {template.sampleMessage}
                    </p>

                    {/* Sample photo placeholder */}
                    <div className="w-32 h-32 mx-auto rounded-[var(--radius-lg)] bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white/60 text-sm">Photo here</span>
                    </div>
                  </motion.div>
                </div>

                {/* Template Name */}
                <div className="text-center mb-6">
                  <h3 className="text-xl text-[var(--charcoal)] mb-1">{template.name}</h3>
                  <p className="text-[var(--charcoal-lighter)]">{template.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        {envelopeOpened && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <RomanticButton 
              variant="primary" 
              onClick={onUseTemplate}
              className="flex-1 justify-center py-3"
            >
              <Heart size={18} className="mr-2" fill="currentColor" />
              Use this template
            </RomanticButton>
            <RomanticButton 
              variant="secondary" 
              onClick={onNext}
              className="flex-1 sm:flex-initial justify-center"
            >
              Next example
              <ArrowRight size={18} className="ml-2" />
            </RomanticButton>
          </motion.div>
        )}
      </div>
    </RomanticModal>
  );
}