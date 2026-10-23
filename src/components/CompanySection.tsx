import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CompanySectionProps {
  onOpenArchive: () => void;
}

export const CompanySection: React.FC<CompanySectionProps> = ({ onOpenArchive }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#fbfbfa] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#dc2626] uppercase mb-4">
              0 3 / O U R  C O M P A N Y
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Research-minded.<br />
              Application-driven.
            </h2>
          </div>

          {/* Right Column: Founder & Mission prose + Archive Banner */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
              Founded by Richard H. Shinn, Ph.D., AIBrain has pursued an 
              enduring mission: augment human intelligence with artificial 
              intelligence.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-10">
              Today, our priority is translating AI capabilities into useful human 
              experiences—beginning with sports intelligence and exploring 
              opportunities in clinical research.
            </p>

            {/* Earlier Innovations Banner Card (matching screenshot) */}
            <div 
              onClick={onOpenArchive}
              className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group hover:border-red-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900 group-hover:text-red-700 transition-colors">
                    Explore earlier innovations
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                    Robotics, conversational AI, education and more.
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenArchive();
                }}
                className="text-xs sm:text-sm font-semibold text-neutral-600 group-hover:text-neutral-950 underline underline-offset-4 decoration-neutral-300 group-hover:decoration-neutral-800 transition-colors self-start sm:self-center shrink-0 cursor-pointer"
              >
                View archive
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
