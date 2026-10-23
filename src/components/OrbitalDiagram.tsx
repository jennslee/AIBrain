import React, { useState } from 'react';

interface OrbitalDiagramProps {
  onSelectNode?: (nodeKey: string) => void;
}

export const OrbitalDiagram: React.FC<OrbitalDiagramProps> = ({ onSelectNode }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodeDetails: Record<string, { title: string; desc: string }> = {
    reasoning: {
      title: 'AICoRE Reasoning',
      desc: 'Autonomous problem-solving, cognitive reasoning, and decision planning algorithms.',
    },
    memory: {
      title: 'Memory Graph',
      desc: 'Structured episodic & semantic memory retaining context across longitudinal interactions.',
    },
    applications: {
      title: 'Practical Applications',
      desc: 'Domain-specific solutions in sports intelligence (SSOT) and clinical research workflows.',
    },
    core: {
      title: 'Human + AI Collaboration',
      desc: 'Collaborative intelligence centered on augmenting expert judgment rather than replacing it.',
    },
  };

  const handleNodeClick = (node: string) => {
    setActiveNode(activeNode === node ? null : node);
    if (onSelectNode) onSelectNode(node);
  };

  return (
    <div className="relative w-full aspect-square max-w-[480px] sm:max-w-[520px] mx-auto select-none flex items-center justify-center p-4">
      {/* Background SVG Rings and Connectors */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1e24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#faf9f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Track */}
        <circle
          cx="250"
          cy="250"
          r="210"
          fill="none"
          stroke="#e2e2e5"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          className="opacity-70 animate-[spin_120s_linear_infinite]"
        />

        {/* Intermediate Orbit Track */}
        <circle
          cx="250"
          cy="250"
          r="165"
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          className="opacity-60"
        />

        {/* Inner Guide Orbit */}
        <circle
          cx="250"
          cy="250"
          r="115"
          fill="none"
          stroke="#e4e4e7"
          strokeWidth="1"
          strokeDasharray="2 2"
          className="opacity-60"
        />

        {/* Dynamic Connector lines to satellite nodes */}
        {/* Top-Right: REASONING at approx (340, 85) */}
        <line
          x1="250"
          y1="250"
          x2="340"
          y2="85"
          stroke={activeNode === 'reasoning' ? '#b91c1c' : '#d4d4d8'}
          strokeWidth={activeNode === 'reasoning' ? '2' : '1.2'}
          strokeDasharray={activeNode === 'reasoning' ? 'none' : '3 3'}
          className="transition-colors duration-200"
        />

        {/* Right: MEMORY at approx (395, 230) */}
        <line
          x1="250"
          y1="250"
          x2="395"
          y2="230"
          stroke={activeNode === 'memory' ? '#b91c1c' : '#d4d4d8'}
          strokeWidth={activeNode === 'memory' ? '2' : '1.2'}
          strokeDasharray={activeNode === 'memory' ? 'none' : '3 3'}
          className="transition-colors duration-200"
        />

        {/* Bottom-Left: APPLICATIONS at approx (140, 375) */}
        <line
          x1="250"
          y1="250"
          x2="140"
          y2="375"
          stroke={activeNode === 'applications' ? '#b91c1c' : '#d4d4d8'}
          strokeWidth={activeNode === 'applications' ? '2' : '1.2'}
          strokeDasharray={activeNode === 'applications' ? 'none' : '3 3'}
          className="transition-colors duration-200"
        />
      </svg>

      {/* Central Sphere: Human+AI */}
      <div
        onClick={() => handleNodeClick('core')}
        className={`relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#121214] text-white flex flex-col items-center justify-center p-4 text-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 border ${
          activeNode === 'core'
            ? 'border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.25)]'
            : 'border-[#27272a] hover:border-neutral-500'
        }`}
      >
        {/* Subtle breathing glow ring */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-15 pointer-events-none" />

        {/* AIBRAIN text */}
        <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-neutral-400 font-semibold uppercase mb-1">
          AIBRAIN
        </span>

        {/* Human+AI heading */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Human+AI
        </h2>

        {/* subtext */}
        <p className="text-[11px] sm:text-xs text-neutral-400 font-normal leading-tight mt-1 max-w-[130px]">
          intelligence in collaboration
        </p>
      </div>

      {/* Satellite Node 1: REASONING (Top-Right) */}
      <div className="absolute top-[12%] right-[16%] sm:top-[14%] sm:right-[18%] z-20">
        <button
          onClick={() => handleNodeClick('reasoning')}
          onMouseEnter={() => setActiveNode('reasoning')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md flex items-center gap-1.5 ${
            activeNode === 'reasoning'
              ? 'bg-[#b91c1c] text-white scale-110 shadow-lg'
              : 'bg-[#18181b] text-neutral-200 hover:bg-neutral-800 border border-neutral-700/60'
          }`}
          aria-label="Reasoning capability node"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          REASONING
        </button>
      </div>

      {/* Satellite Node 2: MEMORY (Right) */}
      <div className="absolute top-[43%] right-[3%] sm:top-[44%] sm:right-[4%] z-20">
        <button
          onClick={() => handleNodeClick('memory')}
          onMouseEnter={() => setActiveNode('memory')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md flex items-center gap-1.5 ${
            activeNode === 'memory'
              ? 'bg-[#b91c1c] text-white scale-110 shadow-lg'
              : 'bg-[#18181b] text-neutral-200 hover:bg-neutral-800 border border-neutral-700/60'
          }`}
          aria-label="Memory capability node"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          MEMORY
        </button>
      </div>

      {/* Satellite Node 3: APPLICATIONS (Bottom-Left) */}
      <div className="absolute bottom-[20%] left-[8%] sm:bottom-[22%] sm:left-[10%] z-20">
        <button
          onClick={() => handleNodeClick('applications')}
          onMouseEnter={() => setActiveNode('applications')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md flex items-center gap-1.5 ${
            activeNode === 'applications'
              ? 'bg-[#b91c1c] text-white scale-110 shadow-lg'
              : 'bg-[#18181b] text-neutral-200 hover:bg-neutral-800 border border-neutral-700/60'
          }`}
          aria-label="Applications node"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          APPLICATIONS
        </button>
      </div>

      {/* INNOVATION × IMPACT label (Bottom-Right, as in PDF) */}
      <div className="absolute bottom-[4%] right-[6%] text-right pointer-events-none select-none">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#dc2626]/80 uppercase">
          INNOVATION × IMPACT
        </span>
      </div>

      {/* Active Node Detail Callout */}
      {activeNode && (
        <div className="absolute bottom-[-16px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-lg px-4 py-2.5 max-w-[280px] w-full text-center z-30 transition-all animate-in fade-in slide-in-from-bottom-2">
          <p className="text-xs font-bold text-neutral-900">
            {nodeDetails[activeNode].title}
          </p>
          <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
            {nodeDetails[activeNode].desc}
          </p>
        </div>
      )}
    </div>
  );
};
