import { Crown, Search } from 'lucide-react';
import React, { useState } from 'react'
import { templates } from '../content';

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
const FilterRow = () => {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [premiumOnly, setPremiumOnly] = useState(false);

    const filteredTemplates = templates.filter(template => {
        if (premiumOnly && !template.isPremium) return false;
        if (searchQuery && !template.name.toLowerCase().includes(searchQuery.toLowerCase()) && !template.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });
  return (
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
  )
}

export default FilterRow 
