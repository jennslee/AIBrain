import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Check, Cpu, Network, Users } from 'lucide-react';

interface TechnologySectionProps {
  onExploreResearch: () => void;
}

interface TechPillar {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const TECH_PILLARS: TechPillar[] = [
  {
    num: '01',
    title: 'AICoRE',
    subtitle: 'Cognitive reasoning research',
    description: 'An autonomous intelligent reasoning engine designed to emulate human cognitive processes—combining hierarchical goal planning, inductive logic, and situational perception.',
    features: [
      'Goal-driven autonomous decision modeling',
      'Unified perception-to-action reasoning loops',
      'Resilient problem solving under uncertainty',
    ],
  },
  {
    num: '02',
    title: 'Memory Graph',
    subtitle: 'Structured memory and context',
    description: 'A multi-layered cognitive memory architecture integrating short-term episodic events and long-term semantic knowledge to maintain coherent context across time.',
    features: [
      'Episodic and semantic graph representation',
      'Context-aware knowledge retrieval with associative recall',
      'Dynamic knowledge decay and reinforcement heuristics',
    ],
  },
  {
    num: '03',
    title: 'Human + AI collaboration',
    subtitle: 'Decision support with human oversight',
    description: 'Architected around symbiotic human-in-the-loop paradigms, prioritizing transparent rationale, actionable suggestions, and final human authority.',
    features: [
      'Explainable inference trails for domain specialists',
      'Human-supervised verification and confidence gates',
      'Continuous alignment with expert feedback',
    ],
  },
];

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onExploreResearch }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#111113] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Description, Link */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Tag */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#dc2626] uppercase mb-4">
              0 2 / T E C H N O L O G Y
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              A foundation in<br />
              reasoning, learning<br />
              and memory.
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-md">
              AIBrains longstanding research spans cognitive AI, memory systems 
              and autonomous intelligent agents. We apply those ideas 
              pragmatically as technologies and human needs evolve.
            </p>

            {/* Link */}
            <button
              onClick={onExploreResearch}
              className="text-sm font-semibold text-neutral-300 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>Explore our research background</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-red-500" />
            </button>
          </div>

          {/* Right Column: 3 Structured Rows */}
          <div className="lg:col-span-7 flex flex-col border-t border-neutral-800">
            {TECH_PILLARS.map((pillar, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={pillar.num}
                  className="border-b border-neutral-800 transition-colors"
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full py-8 text-left flex items-start gap-6 sm:gap-10 hover:bg-white/[0.02] px-2 rounded-lg transition-colors cursor-pointer group"
                    aria-expanded={isExpanded}
                  >
                    {/* Number */}
                    <span className="text-xs sm:text-sm font-mono text-neutral-500 mt-1 shrink-0 font-medium tracking-wider">
                      {pillar.num}
                    </span>

                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                        {pillar.subtitle}
                      </p>

                      {/* Expandable Content */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-neutral-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
                            {pillar.description}
                          </p>
                          <ul className="space-y-1.5">
                            {pillar.features.map((feature, fIdx) => (
                              <li key={fIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-1 text-neutral-600 group-hover:text-neutral-400 transition-transform duration-200">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180 text-red-500' : ''}`}
                      />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
