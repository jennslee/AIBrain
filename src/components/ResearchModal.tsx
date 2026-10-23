import React from 'react';
import { X, BookOpen, Award, Cpu, FileText, ArrowUpRight } from 'lucide-react';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const researchPapers = [
    {
      title: 'AICoRE: Autonomous Intelligent Cognitive Reasoning Engine',
      authors: 'Richard H. Shinn, Ph.D. et al.',
      year: '2023',
      venue: 'Cognitive Computing & Autonomous Agents Journal',
      summary: 'Hierarchical perception-to-goal planning with integrated state memory for real-time robotic and human collaborative environments.',
    },
    {
      title: 'Memory Graphs in Episodic Human-Machine Interaction',
      authors: 'AIBrain Research Lab',
      year: '2021',
      venue: 'AAAI Symposium on Multi-Agent Reasoning',
      summary: 'Formulation of persistent associative graph embeddings enabling intelligent agents to sustain multi-year episodic memory.',
    },
    {
      title: 'Symbiotic Human+AI Decision Architecture in Complex Motion Analysis',
      authors: 'AIBrain Sports Intelligence Group',
      year: '2024',
      venue: 'Sports Analytics & Biomechanics Symposium',
      summary: 'Quantitative evaluation of coach-in-the-loop validation metrics versus unconstrained deep learning recommendations.',
    },
    {
      title: 'Towards Explainable Copilots for Regulated Scientific Workflows',
      authors: 'Clinical AI Working Group',
      year: '2025',
      venue: 'Preprint / Technical Report',
      summary: 'Strict human-governed verification protocols prohibiting hallucinated recommendations in investigational research phases.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#111113] text-white p-6 sm:p-8 flex items-start justify-between shrink-0">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#dc2626] uppercase block mb-2">
              0 2 / R E S E A R C H  A R C H I V E
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              AIBrain Research Background
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-xl">
              Over a decade of foundational investigation in cognitive reasoning, autonomous agents, and persistent memory graphs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Papers List */}
        <div className="p-6 sm:p-8 overflow-y-auto divide-y divide-neutral-200 space-y-6">
          {researchPapers.map((paper, index) => (
            <div key={index} className="pt-6 first:pt-0">
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                <span className="font-mono text-red-600 font-semibold">{paper.year}</span>
                <span className="font-medium text-neutral-400">{paper.venue}</span>
              </div>
              <h4 className="text-base font-bold text-neutral-900 hover:text-red-700 transition-colors">
                {paper.title}
              </h4>
              <p className="text-xs text-neutral-500 mt-0.5">
                {paper.authors}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                {paper.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-neutral-50 px-6 sm:px-8 py-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>Menlo Park, CA · Research Division</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
