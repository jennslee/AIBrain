import React from 'react';
import { FooterLogo } from './Logo.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0c] text-white py-16 sm:py-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16 border-b border-white/10">
          
          {/* Left Column: Stylized Logo Mark */}
          <div className="md:col-span-5 flex flex-col items-start">
            <FooterLogo />
          </div>

          {/* Right Column: U.S. Office Address & Phone */}
          <div className="md:col-span-7 flex flex-col items-start md:items-start text-sm text-neutral-400">
            <h4 className="text-white font-semibold text-sm mb-3">
              U.S. Office
            </h4>
            <p className="leading-relaxed mb-2">
              1040 Noel Drive, Suite 100-B, Menlo Park, CA 94025
            </p>
            <p className="leading-relaxed">
              <span className="text-neutral-500">Phone)</span>{' '}
              <a 
                href="tel:+16502674314" 
                className="hover:text-white transition-colors text-neutral-300"
              >
                +1 650.267.4314
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>©2026 AIBrain Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
