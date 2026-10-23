import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { OrbitalDiagram } from './OrbitalDiagram.tsx';

interface HeroProps {
  onExploreSSOT: () => void;
  onScrollToSolutions: () => void;
  onSelectNode: (node: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSSOT,
  onScrollToSolutions,
  onSelectNode,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Red Kicker Badge / Tracked Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#dc2626] uppercase">
                HUMAN-CENTERED ARTIFICIAL INTELLIGENCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6 text-balance">
              Augment Human Intelligence.<br />
              Unlock Human Potential.
            </h1>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-9">
              AIBrain connects AI research with practical applications—helping 
              people learn, perform and make more informed decisions through 
              human-centered intelligence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16 w-full sm:w-auto">
              <button
                onClick={onExploreSSOT}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-sm font-semibold rounded-md transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore SSOT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onScrollToSolutions}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/70 hover:bg-white text-neutral-800 text-sm font-semibold rounded-md border border-neutral-300 hover:border-neutral-400 transition-all shadow-2xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>What we build</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Bottom Meta Line */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-xs text-neutral-500 font-medium pt-2 border-t border-neutral-200/60 w-full max-w-lg">
              <span>AIBrain Inc.</span>
              <span className="text-neutral-300">·</span>
              <span>Menlo Park, California</span>
              <span className="text-neutral-300">·</span>
              <span>Global collaboration</span>
            </div>
          </div>

          {/* Right Column: Orbital Architecture Diagram */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <OrbitalDiagram onSelectNode={onSelectNode} />
          </div>

        </div>
      </div>
    </section>
  );
};
