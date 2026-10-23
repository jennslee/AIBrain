import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowUpRight, FileText, Cpu, HeartPulse, Trophy } from 'lucide-react';

interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  targetId: string;
  icon: typeof Search;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: 'ssot',
    title: 'Superstars of Tomorrow (SSOT)',
    category: 'Solutions / Sports AI',
    description: 'Personalized football development connecting structured training and AI coaching.',
    targetId: 'solutions',
    icon: Trophy,
  },
  {
    id: 'clinical',
    title: 'Clinical Trials AI Copilot',
    category: 'Solutions / Clinical AI',
    description: 'Human-supervised AI tools for clinical research workflows and protocol verification.',
    targetId: 'solutions',
    icon: HeartPulse,
  },
  {
    id: 'aicore',
    title: 'AICoRE (Cognitive Reasoning)',
    category: 'Technology',
    description: 'Autonomous intelligent agents, reasoning architecture, and cognitive research.',
    targetId: 'technology',
    icon: Cpu,
  },
  {
    id: 'memory-graph',
    title: 'Memory Graph',
    category: 'Technology',
    description: 'Structured episodic and semantic memory systems providing long-term context.',
    targetId: 'technology',
    icon: Cpu,
  },
  {
    id: 'human-ai',
    title: 'Human + AI Collaboration',
    category: 'Technology',
    description: 'Decision support systems pairing machine computation with expert human oversight.',
    targetId: 'technology',
    icon: Cpu,
  },
  {
    id: 'company',
    title: 'Company & Research Background',
    category: 'About Us',
    description: 'Founded by Richard H. Shinn, Ph.D., pioneering human-centered AI since 2012.',
    targetId: 'about',
    icon: FileText,
  },
  {
    id: 'contact',
    title: 'Contact & Collaboration',
    category: 'Get in Touch',
    description: 'Reach our Menlo Park office, discuss sports intelligence, or strategic partnership.',
    targetId: 'contact',
    icon: Search,
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS;
    const lower = query.toLowerCase();
    return SEARCH_ITEMS.filter(
      item =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 py-3 border-b border-neutral-200">
          <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search AIBrain solutions, tech, or research..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-base bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neutral-100">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-neutral-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.targetId);
                    onClose();
                  }}
                  className="w-full text-left p-3 hover:bg-neutral-50 rounded-lg flex items-start gap-3 transition-colors group"
                >
                  <div className="p-2 bg-neutral-100 rounded-md text-neutral-700 group-hover:bg-red-50 group-hover:text-red-600 transition-colors shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-neutral-900 group-hover:text-red-700 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 shrink-0 self-center" />
                </button>
              );
            })
          )}
        </div>

        <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <span>Tip: Press ESC to close</span>
          <span className="text-neutral-400">AIBrain Navigation Index</span>
        </div>
      </div>
    </div>
  );
};
