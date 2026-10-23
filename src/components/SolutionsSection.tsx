import React, { useState } from 'react';
import { ArrowUpRight, Play, CheckCircle2, Activity, User, Sparkles } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenSSOT: () => void;
  onOpenClinicalCollab: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onOpenSSOT,
  onOpenClinicalCollab,
}) => {
  const [pitchPlayActive, setPitchPlayActive] = useState(false);
  const [activeClinicalStep, setActiveClinicalStep] = useState<number>(1);

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#fbfbfa] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#dc2626] uppercase mb-3">
              0 1 / S O L U T I O N S
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              AI that serves human goals.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
            We bring AI into settings where expertise, evidence and human judgment matter.
          </p>
        </div>

        {/* 2-Column Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Sports AI (SSOT) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Category & Status Badges */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                  SPORTS AI
                </span>
                <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  FLAGSHIP APPLICATION
                </span>
              </div>

              {/* Visual Box: Tactical Football Pitch */}
              <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#18191c] overflow-hidden mb-6 flex flex-col justify-between p-4 border border-neutral-800">
                {/* SVG Soccer Pitch Diagram */}
                <svg
                  viewBox="0 0 500 300"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="turfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#141517" />
                      <stop offset="100%" stopColor="#1e2023" />
                    </linearGradient>
                  </defs>
                  
                  {/* Pitch outline */}
                  <rect x="20" y="15" width="460" height="270" fill="url(#turfGrad)" stroke="#3a3d45" strokeWidth="1.5" rx="4" />
                  
                  {/* Halfway line */}
                  <line x1="250" y1="15" x2="250" y2="285" stroke="#3a3d45" strokeWidth="1.5" />
                  
                  {/* Center circle */}
                  <circle cx="250" cy="150" r="45" fill="none" stroke="#3a3d45" strokeWidth="1.5" />
                  <circle cx="250" cy="150" r="3" fill="#64748b" />

                  {/* Left Penalty Area */}
                  <rect x="20" y="65" width="70" height="170" fill="none" stroke="#3a3d45" strokeWidth="1.5" />
                  <rect x="20" y="105" width="28" height="90" fill="none" stroke="#3a3d45" strokeWidth="1.5" />
                  
                  {/* Right Penalty Area */}
                  <rect x="410" y="65" width="70" height="170" fill="none" stroke="#3a3d45" strokeWidth="1.5" />
                  <rect x="452" y="105" width="28" height="90" fill="none" stroke="#3a3d45" strokeWidth="1.5" />

                  {/* Animated Tactical Passing Routes */}
                  <path
                    d="M 120,200 Q 230,130 320,80"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-[dash_20s_linear_infinite]"
                  />
                  <path
                    d="M 320,80 Q 380,140 430,160"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    className="opacity-70"
                  />

                  {/* Player Nodes */}
                  <circle cx="120" cy="200" r="7" fill="#dc2626" />
                  <circle cx="120" cy="200" r="14" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.4" />
                  
                  <circle cx="320" cy="80" r="6" fill="#3b82f6" />
                  <circle cx="430" cy="160" r="7" fill="#ffffff" />
                  <circle cx="250" cy="230" r="5" fill="#94a3b8" />
                </svg>

                {/* Top Overlay Badge in visual: Practice → Progress */}
                <div className="relative z-10 flex justify-end">
                  <div className="bg-[#24262b]/90 backdrop-blur-xs border border-white/10 text-white/90 px-3 py-1 rounded-md text-[11px] font-medium tracking-wide">
                    Practice → Progress
                  </div>
                </div>

                {/* Bottom Overlay Badge in visual: PLAYER + AI + COACH */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-[#24262b]/90 backdrop-blur-xs border border-white/10 text-white/90 px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider">
                    PLAYER + AI + COACH
                  </div>

                  <button
                    onClick={() => setPitchPlayActive(!pitchPlayActive)}
                    className="bg-red-600/90 hover:bg-red-600 text-white text-[10px] font-medium px-2.5 py-1 rounded flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>{pitchPlayActive ? 'Pause' : 'Simulate'}</span>
                  </button>
                </div>

                {/* Simulation overlay tag when active */}
                {pitchPlayActive && (
                  <div className="absolute top-4 left-4 z-10 bg-black/80 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Telemetry · 84% Decision Accuracy
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors">
                Superstars of Tomorrow (SSOT)
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Personalized football development connecting structured training, 
                progress evidence and the complementary strengths of AI and human 
                coaches.
              </p>
            </div>

            {/* Action Link */}
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={onOpenSSOT}
                className="text-sm font-bold text-[#b91c1c] hover:text-[#991b1b] inline-flex items-center gap-1.5 transition-colors cursor-pointer group/link"
              >
                <span>Visit the SSOT website</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Clinical AI (Clinical Trials AI Copilot) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Category & Status Badges */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                  CLINICAL AI
                </span>
                <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  IN DEVELOPMENT
                </span>
              </div>

              {/* Visual Box: Clinical Interface Diagram */}
              <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#f4f5f7] border border-neutral-200/70 overflow-hidden mb-6 flex flex-col justify-between p-5">
                {/* Subtle Grid pattern in background */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Pipeline Step 1: RESEARCH (Top Left) */}
                <div className="relative z-10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveClinicalStep(0)}
                    className={`px-3 py-1 rounded text-[11px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                      activeClinicalStep === 0
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white/90 text-neutral-600 border border-neutral-200 hover:bg-white'
                    }`}
                  >
                    RESEARCH
                  </button>
                  <span className="text-[10px] text-neutral-400 font-mono">Phase I/II Protocols</span>
                </div>

                {/* Central Step: AI COPILOT with Glowing Green Emblem */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div 
                    onClick={() => setActiveClinicalStep(1)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all cursor-pointer ${
                      activeClinicalStep === 1 
                        ? 'bg-white shadow-md border border-emerald-300 scale-105' 
                        : 'bg-white/70 border border-neutral-200 hover:bg-white'
                    }`}
                  >
                    {/* Glowing Green Star/Asterisk symbol */}
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/30">
                      <span className="text-2xl font-bold leading-none select-none">✳</span>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-neutral-800 uppercase">
                      AI COPILOT
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 mt-1 font-medium">
                    Evidence Synthesis & Audit Trail
                  </span>
                </div>

                {/* Pipeline Step 3: HUMAN REVIEW (Bottom Right) */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400 font-mono">Zero Autonomous Action</span>
                  <button
                    onClick={() => setActiveClinicalStep(2)}
                    className={`px-3 py-1 rounded text-[11px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                      activeClinicalStep === 2
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white/90 text-neutral-600 border border-neutral-200 hover:bg-white'
                    }`}
                  >
                    HUMAN REVIEW
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors">
                Clinical Trials AI Copilot
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Exploring human-supervised AI tools for clinical research workflows. 
                This initiative is at a development stage and is not presented as a 
                clinical decision-making product.
              </p>
            </div>

            {/* Action Link */}
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={onOpenClinicalCollab}
                className="text-sm font-bold text-neutral-800 hover:text-red-600 inline-flex items-center gap-1.5 transition-colors cursor-pointer group/link"
              >
                <span>Discuss a research collaboration</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
